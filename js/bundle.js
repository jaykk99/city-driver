(()=>{var hg=Object.defineProperty;var Zn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var kc=(n,e)=>{for(var t in e)hg(n,t,{get:e[t],enumerable:!0})};function Xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function rx(n,e){return(n%e+e)%e}function Jc(n,e,t){return(1-t)*n+t*e}function Mf(n){return(n&n-1)===0&&n!==0}function Dh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Op(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function il(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ox(){let n=il("canvas");return n.style.display="block",n}function Ao(n){n in Ef||(Ef[n]=!0,console.warn(n))}function Or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function th(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Os.fromArray(n,r);let a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),h=i.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function hh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function yx(n,e,t,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ps,a),l===null)return null;Da.copy(a),Da.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Da);return c<t.near||c>t.far?null:{distance:c,point:Da.clone(),object:n}}function Ua(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Er),n.getVertexPosition(l,br),n.getVertexPosition(c,Sr);let h=yx(n,e,t,i,Er,br,Sr,La);if(h){s&&(Ca.fromBufferAttribute(s,a),Pa.fromBufferAttribute(s,l),Ia.fromBufferAttribute(s,c),h.uv=Gs.getInterpolation(La,Er,br,Sr,Ca,Pa,Ia,new ce)),r&&(Ca.fromBufferAttribute(r,a),Pa.fromBufferAttribute(r,l),Ia.fromBufferAttribute(r,c),h.uv1=Gs.getInterpolation(La,Er,br,Sr,Ca,Pa,Ia,new ce),h.uv2=h.uv1),o&&(Nf.fromBufferAttribute(o,a),Of.fromBufferAttribute(o,l),zf.fromBufferAttribute(o,c),h.normal=Gs.getInterpolation(La,Er,br,Sr,Nf,Of,zf,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new F,materialIndex:0};Gs.getNormal(Er,br,Sr,u.normal),h.face=u}return h}function kr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=kr(n[t]);for(let s in i)e[s]=i[s]}return e}function Mx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hp(n){return n.getRenderTarget()===null?n.outputColorSpace:Et.workingColorSpace}function Fp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tx(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,p=c.usage,m=u.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,u,p),c.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let p=h.array,m=h._updateRange,x=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&x.length===0&&n.bufferSubData(u,0,p),x.length!==0){for(let g=0,f=x.length;g<f;g++){let d=x[g];t?n.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):n.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}function oy(n,e,t,i,s,r,o){let a=new Oe(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function x(f,d){let v=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),v=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Pl)?(h===void 0&&(h=new X(new Me(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:kr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,y,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Et.getTransfer(_.colorSpace)!==Rt,(u!==_||p!==_.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,p=_.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new X(new Ve(2,2),new sn({name:"BackgroundMaterial",uniforms:kr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Et.getTransfer(_.colorSpace)!==Rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,p=_.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,d){f.getRGB(Oa,Hp(n)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(a,l)},render:x}}function ay(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null),c=l,h=!1;function u(C,w,P,O,H){let W=!1;if(o){let I=g(O,P,w);c!==I&&(c=I,m(c.object)),W=d(C,O,P,H),W&&v(C,O,P,H)}else{let I=w.wireframe===!0;(c.geometry!==O.id||c.program!==P.id||c.wireframe!==I)&&(c.geometry=O.id,c.program=P.id,c.wireframe=I,W=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,b(C,w,P,O),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(C){return i.isWebGL2?n.bindVertexArray(C):r.bindVertexArrayOES(C)}function x(C){return i.isWebGL2?n.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function g(C,w,P){let O=P.wireframe===!0,H=a[C.id];H===void 0&&(H={},a[C.id]=H);let W=H[w.id];W===void 0&&(W={},H[w.id]=W);let I=W[O];return I===void 0&&(I=f(p()),W[O]=I),I}function f(C){let w=[],P=[],O=[];for(let H=0;H<s;H++)w[H]=0,P[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:O,object:C,attributes:{},index:null}}function d(C,w,P,O){let H=c.attributes,W=w.attributes,I=0,k=P.getAttributes();for(let Z in k)if(k[Z].location>=0){let q=H[Z],K=W[Z];if(K===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),q===void 0||q.attribute!==K||K&&q.data!==K.data)return!0;I++}return c.attributesNum!==I||c.index!==O}function v(C,w,P,O){let H={},W=w.attributes,I=0,k=P.getAttributes();for(let Z in k)if(k[Z].location>=0){let q=W[Z];q===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));let K={};K.attribute=q,q&&q.data&&(K.data=q.data),H[Z]=K,I++}c.attributes=H,c.attributesNum=I,c.index=O}function _(){let C=c.newAttributes;for(let w=0,P=C.length;w<P;w++)C[w]=0}function S(C){A(C,0)}function A(C,w){let P=c.newAttributes,O=c.enabledAttributes,H=c.attributeDivisors;P[C]=1,O[C]===0&&(n.enableVertexAttribArray(C),O[C]=1),H[C]!==w&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,w),H[C]=w)}function y(){let C=c.newAttributes,w=c.enabledAttributes;for(let P=0,O=w.length;P<O;P++)w[P]!==C[P]&&(n.disableVertexAttribArray(P),w[P]=0)}function M(C,w,P,O,H,W,I){I===!0?n.vertexAttribIPointer(C,w,P,H,W):n.vertexAttribPointer(C,w,P,O,H,W)}function b(C,w,P,O){if(i.isWebGL2===!1&&(C.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let H=O.attributes,W=P.getAttributes(),I=w.defaultAttributeValues;for(let k in W){let Z=W[k];if(Z.location>=0){let U=H[k];if(U===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),U!==void 0){let q=U.normalized,K=U.itemSize,ue=t.get(U);if(ue===void 0)continue;let _e=ue.buffer,Re=ue.type,Ie=ue.bytesPerElement,Pe=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||U.gpuType===Tp);if(U.isInterleavedBufferAttribute){let ze=U.data,B=ze.stride,ve=U.offset;if(ze.isInstancedInterleavedBuffer){for(let re=0;re<Z.locationSize;re++)A(Z.location+re,ze.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let re=0;re<Z.locationSize;re++)S(Z.location+re);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let re=0;re<Z.locationSize;re++)M(Z.location+re,K/Z.locationSize,Re,q,B*Ie,(ve+K/Z.locationSize*re)*Ie,Pe)}else{if(U.isInstancedBufferAttribute){for(let ze=0;ze<Z.locationSize;ze++)A(Z.location+ze,U.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ze=0;ze<Z.locationSize;ze++)S(Z.location+ze);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ze=0;ze<Z.locationSize;ze++)M(Z.location+ze,K/Z.locationSize,Re,q,K*Ie,K/Z.locationSize*ze*Ie,Pe)}}else if(I!==void 0){let q=I[k];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(Z.location,q);break;case 3:n.vertexAttrib3fv(Z.location,q);break;case 4:n.vertexAttrib4fv(Z.location,q);break;default:n.vertexAttrib1fv(Z.location,q)}}}}y()}function E(){V();for(let C in a){let w=a[C];for(let P in w){let O=w[P];for(let H in O)x(O[H].object),delete O[H];delete w[P]}delete a[C]}}function T(C){if(a[C.id]===void 0)return;let w=a[C.id];for(let P in w){let O=w[P];for(let H in O)x(O[H].object),delete O[H];delete w[P]}delete a[C.id]}function z(C){for(let w in a){let P=a[w];if(P[C.id]===void 0)continue;let O=P[C.id];for(let H in O)x(O[H].object),delete O[H];delete P[C.id]}}function V(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:S,disableUnusedAttributes:y}}function ly(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,p){if(p===0)return;let m,x;if(s)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,u,p),t.update(u,r,p)}function c(h,u,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<p;x++)this.render(h[x],u[x]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let x=0;for(let g=0;g<p;g++)x+=u[g];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function cy(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,S=o||e.has("OES_texture_float"),A=_&&S,y=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:y}}function hy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Gi,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||i!==0||s;return s=p,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){let x=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,d=n.get(u);if(!s||x===null||x.length===0||r&&!f)r?h(null):c();else{let v=r?0:i,_=v*4,S=d.clippingState||null;l.value=S,S=h(x,p,_,m);for(let A=0;A!==_;++A)S[A]=t[A];d.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,p,m,x){let g=u!==null?u.length:0,f=null;if(g!==0){if(f=l.value,x!==!0||f===null){let d=m+g*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(f===null||f.length<d)&&(f=new Float32Array(d));for(let _=0,S=m;_!==g;++_,S+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function uy(n){let e=new WeakMap;function t(o,a){return a===Rh?o.mapping=Hr:a===Ch&&(o.mapping=Fr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rh||a===Ch)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function dy(n){let e=[],t=[],i=[],s=n,r=n-Dr+1+Hf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Dr?l=Hf[o-n+Dr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,g=3,f=2,d=1,v=new Float32Array(g*x*m),_=new Float32Array(f*x*m),S=new Float32Array(d*x*m);for(let y=0;y<m;y++){let M=y%3*2/3-1,b=y>2?0:-1,E=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];v.set(E,g*x*y),_.set(p,f*x*y);let T=[y,y,y,y,y,y];S.set(T,d*x*y)}let A=new Ut;A.setAttribute("position",new fn(v,g)),A.setAttribute("uv",new fn(_,f)),A.setAttribute("faceIndex",new fn(S,d)),e.push(A),s>Dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kf(n,e,t){let i=new Nn(n,e,t);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function za(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function fy(n,e,t){let i=new Float32Array(ks),s=new F(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Gf(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vf(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}function py(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rh||l===Ch,h=l===Hr||l===Fr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Vr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Vr(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function my(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gy(n,e,t,i){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let g=p.morphAttributes[x];for(let f=0,d=g.length;f<d;f++)e.remove(g[f])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let x in p)e.update(p[x],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let x in m){let g=m[x];for(let f=0,d=g.length;f<d;f++)e.update(g[f],n.ARRAY_BUFFER)}}function c(u){let p=[],m=u.index,x=u.attributes.position,g=0;if(m!==null){let v=m.array;g=m.version;for(let _=0,S=v.length;_<S;_+=3){let A=v[_+0],y=v[_+1],M=v[_+2];p.push(A,y,y,M,M,A)}}else if(x!==void 0){let v=x.array;g=x.version;for(let _=0,S=v.length/3-1;_<S;_+=3){let A=_+0,y=_+1,M=_+2;p.push(A,y,y,M,M,A)}}else return;let f=new(Op(p)?hl:cl)(p,1);f.version=g;let d=r.get(u);d&&e.remove(d),r.set(u,f)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xy(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,x){n.drawElements(r,x,a,m*l),t.update(x,r,1)}function u(m,x,g){if(g===0)return;let f,d;if(s)f=n,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,x,a,m*l,g),t.update(x,r,g)}function p(m,x,g){if(g===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<g;d++)this.render(m[d]/l,x[d]);else{f.multiDrawElementsWEBGL(r,x,0,a,m,0,g);let d=0;for(let v=0;v<g;v++)d+=x[v];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function _y(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vy(n,e){return n[0]-e[0]}function yy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function My(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==x){let C=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",C)};g!==void 0&&g.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],M=h.morphAttributes.color||[],b=0;v===!0&&(b=1),_===!0&&(b=2),S===!0&&(b=3);let E=h.attributes.position.count*b,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let z=new Float32Array(E*T*4*x),V=new ol(z,E,T,x);V.type=hs,V.needsUpdate=!0;let D=b*4;for(let w=0;w<x;w++){let P=A[w],O=y[w],H=M[w],W=E*T*4*w;for(let I=0;I<P.count;I++){let k=I*D;v===!0&&(o.fromBufferAttribute(P,I),z[W+k+0]=o.x,z[W+k+1]=o.y,z[W+k+2]=o.z,z[W+k+3]=0),_===!0&&(o.fromBufferAttribute(O,I),z[W+k+4]=o.x,z[W+k+5]=o.y,z[W+k+6]=o.z,z[W+k+7]=0),S===!0&&(o.fromBufferAttribute(H,I),z[W+k+8]=o.x,z[W+k+9]=o.y,z[W+k+10]=o.z,z[W+k+11]=H.itemSize===4?o.w:1)}}g={count:x,texture:V,size:new ce(E,T)},r.set(h,g),h.addEventListener("dispose",C)}let f=0;for(let v=0;v<p.length;v++)f+=p[v];let d=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",p),u.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let m=p===void 0?0:p.length,x=i[h.id];if(x===void 0||x.length!==m){x=[];for(let _=0;_<m;_++)x[_]=[_,0];i[h.id]=x}for(let _=0;_<m;_++){let S=x[_];S[0]=_,S[1]=p[_]}x.sort(yy);for(let _=0;_<8;_++)_<m&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(vy);let g=h.morphAttributes.position,f=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let S=a[_],A=S[0],y=S[1];A!==Number.MAX_SAFE_INTEGER&&y?(g&&h.getAttribute("morphTarget"+_)!==g[A]&&h.setAttribute("morphTarget"+_,g[A]),f&&h.getAttribute("morphNormal"+_)!==f[A]&&h.setAttribute("morphNormal"+_,f[A]),s[_]=y,d+=y):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),f&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Ey(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Wf[s];if(r===void 0&&(r=new Float32Array(s),Wf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ll(n,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function by(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function Ay(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Yf.set(i),n.uniformMatrix2fv(this.addr,!1,Yf),on(t,i)}}function Ry(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Zf.set(i),n.uniformMatrix3fv(this.addr,!1,Zf),on(t,i)}}function Cy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;qf.set(i),n.uniformMatrix4fv(this.addr,!1,qf),on(t,i)}}function Py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function Ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function Dy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function Uy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function Oy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function zy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function Hy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?kp:Bp;t.setTexture2D(e||r,s)}function Fy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vp,s)}function By(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wp,s)}function ky(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gp,s)}function Gy(n){switch(n){case 5126:return by;case 35664:return Sy;case 35665:return wy;case 35666:return Ty;case 35674:return Ay;case 35675:return Ry;case 35676:return Cy;case 5124:case 35670:return Py;case 35667:case 35671:return Iy;case 35668:case 35672:return Ly;case 35669:case 35673:return Dy;case 5125:return Uy;case 36294:return Ny;case 36295:return Oy;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return ky}}function Vy(n,e){n.uniform1fv(this.addr,e)}function Wy(n,e){let t=Yr(e,this.size,2);n.uniform2fv(this.addr,t)}function Xy(n,e){let t=Yr(e,this.size,3);n.uniform3fv(this.addr,t)}function qy(n,e){let t=Yr(e,this.size,4);n.uniform4fv(this.addr,t)}function Zy(n,e){let t=Yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yy(n,e){let t=Yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $y(n,e){let t=Yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jy(n,e){n.uniform1iv(this.addr,e)}function Ky(n,e){n.uniform2iv(this.addr,e)}function jy(n,e){n.uniform3iv(this.addr,e)}function Qy(n,e){n.uniform4iv(this.addr,e)}function eM(n,e){n.uniform1uiv(this.addr,e)}function tM(n,e){n.uniform2uiv(this.addr,e)}function nM(n,e){n.uniform3uiv(this.addr,e)}function iM(n,e){n.uniform4uiv(this.addr,e)}function sM(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bp,r[o])}function rM(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vp,r[o])}function oM(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wp,r[o])}function aM(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gp,r[o])}function lM(n){switch(n){case 5126:return Vy;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Zy;case 35675:return Yy;case 35676:return $y;case 5124:case 35670:return Jy;case 35667:case 35671:return Ky;case 35668:case 35672:return jy;case 35669:case 35673:return Qy;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}function $f(n,e){n.seq.push(e),n.map[e.id]=e}function cM(n,e,t){let i=n.name,s=i.length;for(_h.lastIndex=0;;){let r=_h.exec(i),o=_h.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$f(t,c===void 0?new Hh(a,n,e):new Fh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Bh(a),$f(t,u)),t=u}}}function Jf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function dM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function fM(n){let e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n),i;switch(e===t?i="":e===el&&t===Qa?i="LinearDisplayP3ToLinearSRGB":e===Qa&&t===el&&(i="LinearSRGBToLinearDisplayP3"),n){case qi:case Il:return[i,"LinearTransferOETF"];case vt:case Tu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Kf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+dM(n.getShaderSource(e),o)}else return s}function pM(n,e){let t=fM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mM(n,e){let t;switch(e){case Mu:t="Linear";break;case Eu:t="Reinhard";break;case bu:t="OptimizedCineon";break;case Zo:t="ACESFilmic";break;case Su:t="AgX";break;case Fg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function xM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ur).join(`
`)}function _M(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ur(n){return n!==""}function jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function kh(n){return n.replace(yM,EM)}function EM(n,e){let t=tt[e];if(t===void 0){let i=MM.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kh(t)}function ep(n){return n.replace(bM,SM)}function SM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hr:case Fr:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Fr&&(e="ENVMAP_MODE_REFRACTION"),e}function RM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sp:e="ENVMAP_BLENDING_MULTIPLY";break;case zg:e="ENVMAP_BLENDING_MIX";break;case Hg:e="ENVMAP_BLENDING_ADD";break}return e}function CM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=wM(t),c=TM(t),h=AM(t),u=RM(t),p=CM(t),m=t.isWebGL2?"":gM(t),x=xM(t),g=_M(r),f=s.createProgram(),d,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),d.length>0&&(d+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),v.length>0&&(v+=`
`)):(d=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),v=[m,tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?tt.tonemapping_pars_fragment:"",t.toneMapping!==ds?mM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,pM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=kh(o),o=jf(o,t),o=Qf(o,t),a=kh(a),a=jf(a,t),a=Qf(a,t),o=ep(o),a=ep(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=_+d+o,A=_+v+a,y=Jf(s,s.VERTEX_SHADER,S),M=Jf(s,s.FRAGMENT_SHADER,A);s.attachShader(f,y),s.attachShader(f,M),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function b(V){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(f).trim(),C=s.getShaderInfoLog(y).trim(),w=s.getShaderInfoLog(M).trim(),P=!0,O=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(P=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,y,M);else{let H=Kf(s,y,"vertex"),W=Kf(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+D+`
`+H+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(C===""||w==="")&&(O=!1);O&&(V.diagnostics={runnable:P,programLog:D,vertexShader:{log:C,prefix:d},fragmentShader:{log:w,prefix:v}})}s.deleteShader(y),s.deleteShader(M),E=new zr(s,f),T=vM(s,f)}let E;this.getUniforms=function(){return E===void 0&&b(this),E};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(f,hM)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=M,this}function LM(n,e,t,i,s,r,o){let a=new ll,l=new Gh,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function f(E,T,z,V,D){let C=V.fog,w=D.geometry,P=E.isMeshStandardMaterial?V.environment:null,O=(E.isMeshStandardMaterial?t:e).get(E.envMap||P),H=O&&O.mapping===Pl?O.image.height:null,W=x[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let I=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,k=I!==void 0?I.length:0,Z=0;w.morphAttributes.position!==void 0&&(Z=1),w.morphAttributes.normal!==void 0&&(Z=2),w.morphAttributes.color!==void 0&&(Z=3);let U,q,K,ue;if(W){let At=Mi[W];U=At.vertexShader,q=At.fragmentShader}else U=E.vertexShader,q=E.fragmentShader,l.update(E),K=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);let _e=n.getRenderTarget(),Re=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,Pe=!!E.map,ze=!!E.matcap,B=!!O,ve=!!E.aoMap,re=!!E.lightMap,le=!!E.bumpMap,ie=!!E.normalMap,He=!!E.displacementMap,Ce=!!E.emissiveMap,L=!!E.metalnessMap,R=!!E.roughnessMap,$=E.anisotropy>0,xe=E.clearcoat>0,fe=E.iridescence>0,de=E.sheen>0,Fe=E.transmission>0,Se=$&&!!E.anisotropyMap,De=xe&&!!E.clearcoatMap,We=xe&&!!E.clearcoatNormalMap,Je=xe&&!!E.clearcoatRoughnessMap,ge=fe&&!!E.iridescenceMap,dt=fe&&!!E.iridescenceThicknessMap,st=de&&!!E.sheenColorMap,Ye=de&&!!E.sheenRoughnessMap,Ge=!!E.specularMap,J=!!E.specularColorMap,oe=!!E.specularIntensityMap,ye=Fe&&!!E.transmissionMap,Te=Fe&&!!E.thicknessMap,Ae=!!E.gradientMap,se=!!E.alphaMap,G=E.alphaTest>0,te=!!E.alphaHash,ae=!!E.extensions,Ee=!!w.attributes.uv1,me=!!w.attributes.uv2,Ke=!!w.attributes.uv3,je=ds;return E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(je=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:U,fragmentShader:q,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ie,instancing:Re,instancingColor:Re&&D.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:qi,map:Pe,matcap:ze,envMap:B,envMapMode:B&&O.mapping,envMapCubeUVHeight:H,aoMap:ve,lightMap:re,bumpMap:le,normalMap:ie,displacementMap:p&&He,emissiveMap:Ce,normalMapObjectSpace:ie&&E.normalMapType===Kg,normalMapTangentSpace:ie&&E.normalMapType===Up,metalnessMap:L,roughnessMap:R,anisotropy:$,anisotropyMap:Se,clearcoat:xe,clearcoatMap:De,clearcoatNormalMap:We,clearcoatRoughnessMap:Je,iridescence:fe,iridescenceMap:ge,iridescenceThicknessMap:dt,sheen:de,sheenColorMap:st,sheenRoughnessMap:Ye,specularMap:Ge,specularColorMap:J,specularIntensityMap:oe,transmission:Fe,transmissionMap:ye,thicknessMap:Te,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===us,alphaMap:se,alphaTest:G,alphaHash:te,combine:E.combine,mapUv:Pe&&g(E.map.channel),aoMapUv:ve&&g(E.aoMap.channel),lightMapUv:re&&g(E.lightMap.channel),bumpMapUv:le&&g(E.bumpMap.channel),normalMapUv:ie&&g(E.normalMap.channel),displacementMapUv:He&&g(E.displacementMap.channel),emissiveMapUv:Ce&&g(E.emissiveMap.channel),metalnessMapUv:L&&g(E.metalnessMap.channel),roughnessMapUv:R&&g(E.roughnessMap.channel),anisotropyMapUv:Se&&g(E.anisotropyMap.channel),clearcoatMapUv:De&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:st&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&g(E.sheenRoughnessMap.channel),specularMapUv:Ge&&g(E.specularMap.channel),specularColorMapUv:J&&g(E.specularColorMap.channel),specularIntensityMapUv:oe&&g(E.specularIntensityMap.channel),transmissionMapUv:ye&&g(E.transmissionMap.channel),thicknessMapUv:Te&&g(E.thicknessMap.channel),alphaMapUv:se&&g(E.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(ie||$),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:me,vertexUv3s:Ke,pointsUvs:D.isPoints===!0&&!!w.attributes.uv&&(Pe||se),fog:!!C,useFog:E.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bt,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ae&&E.extensions.derivatives===!0,extensionFragDepth:ae&&E.extensions.fragDepth===!0,extensionDrawBuffers:ae&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let z in E.defines)T.push(z),T.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(v(T,E),_(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function v(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function _(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){let T=x[E.type],z;if(T){let V=Mi[T];z=_s.clone(V.uniforms)}else z=E.uniforms;return z}function A(E,T){let z;for(let V=0,D=c.length;V<D;V++){let C=c[V];if(C.cacheKey===T){z=C,++z.usedTimes;break}}return z===void 0&&(z=new PM(n,T,E,r),c.push(z)),z}function y(E){if(--E.usedTimes===0){let T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function M(E){l.remove(E)}function b(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:S,acquireProgram:A,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:b}}function DM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function UM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function np(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ip(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,p,m,x,g,f){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:x,renderOrder:u.renderOrder,z:g,group:f},n[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=g,d.group=f),e++,d}function a(u,p,m,x,g,f){let d=o(u,p,m,x,g,f);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,p,m,x,g,f){let d=o(u,p,m,x,g,f);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||UM),i.length>1&&i.sort(p||np),s.length>1&&s.sort(p||np)}function h(){for(let u=e,p=n.length;u<p;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function NM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ip,n.set(i,[o])):s>=r.length?(o=new ip,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function OM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Oe};break;case"SpotLight":t={position:new F,direction:new F,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function zM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function FM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BM(n,e){let t=new OM,i=zM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new pt,a=new pt;function l(h,u){let p=0,m=0,x=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let g=0,f=0,d=0,v=0,_=0,S=0,A=0,y=0,M=0,b=0,E=0;h.sort(FM);let T=u===!0?Math.PI:1;for(let V=0,D=h.length;V<D;V++){let C=h[V],w=C.color,P=C.intensity,O=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=w.r*P*T,m+=w.g*P*T,x+=w.b*P*T;else if(C.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(C.sh.coefficients[W],P);E++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){let I=C.shadow,k=i.get(C);k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,s.directionalShadow[g]=k,s.directionalShadowMap[g]=H,s.directionalShadowMatrix[g]=C.shadow.matrix,S++}s.directional[g]=W,g++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(w).multiplyScalar(P*T),W.distance=O,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,s.spot[d]=W;let I=C.shadow;if(C.map&&(s.spotLightMap[M]=C.map,M++,I.updateMatrices(C),C.castShadow&&b++),s.spotLightMatrix[d]=I.matrix,C.castShadow){let k=i.get(C);k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,s.spotShadow[d]=k,s.spotShadowMap[d]=H,y++}d++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(w).multiplyScalar(P),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),s.rectArea[v]=W,v++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*T),W.distance=C.distance,W.decay=C.decay,C.castShadow){let I=C.shadow,k=i.get(C);k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,k.shadowCameraNear=I.camera.near,k.shadowCameraFar=I.camera.far,s.pointShadow[f]=k,s.pointShadowMap[f]=H,s.pointShadowMatrix[f]=C.shadow.matrix,A++}s.point[f]=W,f++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(P*T),W.groundColor.copy(C.groundColor).multiplyScalar(P*T),s.hemi[_]=W,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=x;let z=s.hash;(z.directionalLength!==g||z.pointLength!==f||z.spotLength!==d||z.rectAreaLength!==v||z.hemiLength!==_||z.numDirectionalShadows!==S||z.numPointShadows!==A||z.numSpotShadows!==y||z.numSpotMaps!==M||z.numLightProbes!==E)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=v,s.point.length=f,s.hemi.length=_,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=y,s.spotShadowMap.length=y,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=y+M-b,s.spotLightMap.length=M,s.numSpotLightShadowsWithMaps=b,s.numLightProbes=E,z.directionalLength=g,z.pointLength=f,z.spotLength=d,z.rectAreaLength=v,z.hemiLength=_,z.numDirectionalShadows=S,z.numPointShadows=A,z.numSpotShadows=y,z.numSpotMaps=M,z.numLightProbes=E,s.version=HM++)}function c(h,u){let p=0,m=0,x=0,g=0,f=0,d=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let S=h[v];if(S.isDirectionalLight){let A=s.directional[p];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),p++}else if(S.isSpotLight){let A=s.spot[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),x++}else if(S.isRectAreaLight){let A=s.rectArea[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let A=s.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){let A=s.hemi[f];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),f++}}}return{setup:l,setupView:c,state:s}}function sp(n,e){let t=new BM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kM(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new sp(n,e),t.set(r,[l])):o>=a.length?(l=new sp(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function WM(n,e,t){let i=new Uo,s=new ce,r=new ce,o=new It,a=new Wh({depthPacking:Jg}),l=new Xh,c={},h=t.maxTextureSize,u={[ps]:dn,[dn]:ps,[bt]:bt},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ut;x.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new X(x,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let d=this.type;this.render=function(y,M,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;let E=n.getRenderTarget(),T=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ei),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let D=d!==ki&&this.type===ki,C=d===ki&&this.type!==ki;for(let w=0,P=y.length;w<P;w++){let O=y[w],H=O.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let W=H.getFrameExtents();if(s.multiply(W),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,H.mapSize.y=r.y)),H.map===null||D===!0||C===!0){let k=this.type!==ki?{minFilter:Un,magFilter:Un}:{};H.map!==null&&H.map.dispose(),H.map=new Nn(s.x,s.y,k),H.map.texture.name=O.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let I=H.getViewportCount();for(let k=0;k<I;k++){let Z=H.getViewport(k);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),V.viewport(o),H.updateMatrices(O,k),i=H.getFrustum(),S(M,b,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===ki&&v(H,b),H.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(E,T,z)};function v(y,M){let b=e.update(g);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Nn(s.x,s.y)),p.uniforms.shadow_pass.value=y.map.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(M,null,b,p,g,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(M,null,b,m,g,null)}function _(y,M,b,E){let T=null,z=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(z!==void 0)T=z;else if(T=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let V=T.uuid,D=M.uuid,C=c[V];C===void 0&&(C={},c[V]=C);let w=C[D];w===void 0&&(w=T.clone(),C[D]=w,M.addEventListener("dispose",A)),T=w}if(T.visible=M.visible,T.wireframe=M.wireframe,E===ki?T.side=M.shadowSide!==null?M.shadowSide:M.side:T.side=M.shadowSide!==null?M.shadowSide:u[M.side],T.alphaMap=M.alphaMap,T.alphaTest=M.alphaTest,T.map=M.map,T.clipShadows=M.clipShadows,T.clippingPlanes=M.clippingPlanes,T.clipIntersection=M.clipIntersection,T.displacementMap=M.displacementMap,T.displacementScale=M.displacementScale,T.displacementBias=M.displacementBias,T.wireframeLinewidth=M.wireframeLinewidth,T.linewidth=M.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let V=n.properties.get(T);V.light=b}return T}function S(y,M,b,E,T){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&T===ki)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);let D=e.update(y),C=y.material;if(Array.isArray(C)){let w=D.groups;for(let P=0,O=w.length;P<O;P++){let H=w[P],W=C[H.materialIndex];if(W&&W.visible){let I=_(y,W,E,T);y.onBeforeShadow(n,y,M,b,D,I,H),n.renderBufferDirect(b,null,D,I,y,H),y.onAfterShadow(n,y,M,b,D,I,H)}}}else if(C.visible){let w=_(y,C,E,T);y.onBeforeShadow(n,y,M,b,D,w,null),n.renderBufferDirect(b,null,D,w,y,null),y.onAfterShadow(n,y,M,b,D,w,null)}}let V=y.children;for(let D=0,C=V.length;D<C;D++)S(V[D],M,b,E,T)}function A(y){y.target.removeEventListener("dispose",A);for(let b in c){let E=c[b],T=y.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function XM(n,e,t){let i=t.isWebGL2;function s(){let G=!1,te=new It,ae=null,Ee=new It(0,0,0,0);return{setMask:function(me){ae!==me&&!G&&(n.colorMask(me,me,me,me),ae=me)},setLocked:function(me){G=me},setClear:function(me,Ke,je,Mt,At){At===!0&&(me*=Mt,Ke*=Mt,je*=Mt),te.set(me,Ke,je,Mt),Ee.equals(te)===!1&&(n.clearColor(me,Ke,je,Mt),Ee.copy(te))},reset:function(){G=!1,ae=null,Ee.set(-1,0,0,0)}}}function r(){let G=!1,te=null,ae=null,Ee=null;return{setTest:function(me){me?Ie(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(me){te!==me&&!G&&(n.depthMask(me),te=me)},setFunc:function(me){if(ae!==me){switch(me){case Pg:n.depthFunc(n.NEVER);break;case Ig:n.depthFunc(n.ALWAYS);break;case Lg:n.depthFunc(n.LESS);break;case $a:n.depthFunc(n.LEQUAL);break;case Dg:n.depthFunc(n.EQUAL);break;case Ug:n.depthFunc(n.GEQUAL);break;case Ng:n.depthFunc(n.GREATER);break;case Og:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=me}},setLocked:function(me){G=me},setClear:function(me){Ee!==me&&(n.clearDepth(me),Ee=me)},reset:function(){G=!1,te=null,ae=null,Ee=null}}}function o(){let G=!1,te=null,ae=null,Ee=null,me=null,Ke=null,je=null,Mt=null,At=null;return{setTest:function(ct){G||(ct?Ie(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ct){te!==ct&&!G&&(n.stencilMask(ct),te=ct)},setFunc:function(ct,Qt,Xn){(ae!==ct||Ee!==Qt||me!==Xn)&&(n.stencilFunc(ct,Qt,Xn),ae=ct,Ee=Qt,me=Xn)},setOp:function(ct,Qt,Xn){(Ke!==ct||je!==Qt||Mt!==Xn)&&(n.stencilOp(ct,Qt,Xn),Ke=ct,je=Qt,Mt=Xn)},setLocked:function(ct){G=ct},setClear:function(ct){At!==ct&&(n.clearStencil(ct),At=ct)},reset:function(){G=!1,te=null,ae=null,Ee=null,me=null,Ke=null,je=null,Mt=null,At=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,p={},m={},x=new WeakMap,g=[],f=null,d=!1,v=null,_=null,S=null,A=null,y=null,M=null,b=null,E=new Oe(0,0,0),T=0,z=!1,V=null,D=null,C=null,w=null,P=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,W=0,I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(I)[1]),H=W>=1):I.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),H=W>=2);let k=null,Z={},U=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),K=new It().fromArray(U),ue=new It().fromArray(q);function _e(G,te,ae,Ee){let me=new Uint8Array(4),Ke=n.createTexture();n.bindTexture(G,Ke),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<ae;je++)i&&(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)?n.texImage3D(te,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(te+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Ke}let Re={};Re[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc($a),Ce(!1),L(Hd),Ie(n.CULL_FACE),ie(Ei);function Ie(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function Pe(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function ze(G,te){return m[G]!==te?(n.bindFramebuffer(G,te),m[G]=te,i&&(G===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=te),G===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=te)),!0):!1}function B(G,te){let ae=g,Ee=!1;if(G)if(ae=x.get(te),ae===void 0&&(ae=[],x.set(te,ae)),G.isWebGLMultipleRenderTargets){let me=G.texture;if(ae.length!==me.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Ke=0,je=me.length;Ke<je;Ke++)ae[Ke]=n.COLOR_ATTACHMENT0+Ke;ae.length=me.length,Ee=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,Ee=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ve(G){return f!==G?(n.useProgram(G),f=G,!0):!1}let re={[Bs]:n.FUNC_ADD,[mg]:n.FUNC_SUBTRACT,[gg]:n.FUNC_REVERSE_SUBTRACT};if(i)re[kd]=n.MIN,re[Gd]=n.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(re[kd]=G.MIN_EXT,re[Gd]=G.MAX_EXT)}let le={[xg]:n.ZERO,[_g]:n.ONE,[vg]:n.SRC_COLOR,[Th]:n.SRC_ALPHA,[wg]:n.SRC_ALPHA_SATURATE,[bg]:n.DST_COLOR,[Mg]:n.DST_ALPHA,[yg]:n.ONE_MINUS_SRC_COLOR,[Ah]:n.ONE_MINUS_SRC_ALPHA,[Sg]:n.ONE_MINUS_DST_COLOR,[Eg]:n.ONE_MINUS_DST_ALPHA,[Tg]:n.CONSTANT_COLOR,[Ag]:n.ONE_MINUS_CONSTANT_COLOR,[Rg]:n.CONSTANT_ALPHA,[Cg]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(G,te,ae,Ee,me,Ke,je,Mt,At,ct){if(G===Ei){d===!0&&(Pe(n.BLEND),d=!1);return}if(d===!1&&(Ie(n.BLEND),d=!0),G!==pg){if(G!==v||ct!==z){if((_!==Bs||y!==Bs)&&(n.blendEquation(n.FUNC_ADD),_=Bs,y=Bs),ct)switch(G){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $t:n.blendFunc(n.ONE,n.ONE);break;case Fd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $t:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,A=null,M=null,b=null,E.set(0,0,0),T=0,v=G,z=ct}return}me=me||te,Ke=Ke||ae,je=je||Ee,(te!==_||me!==y)&&(n.blendEquationSeparate(re[te],re[me]),_=te,y=me),(ae!==S||Ee!==A||Ke!==M||je!==b)&&(n.blendFuncSeparate(le[ae],le[Ee],le[Ke],le[je]),S=ae,A=Ee,M=Ke,b=je),(Mt.equals(E)===!1||At!==T)&&(n.blendColor(Mt.r,Mt.g,Mt.b,At),E.copy(Mt),T=At),v=G,z=!1}function He(G,te){G.side===bt?Pe(n.CULL_FACE):Ie(n.CULL_FACE);let ae=G.side===dn;te&&(ae=!ae),Ce(ae),G.blending===us&&G.transparent===!1?ie(Ei):ie(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);let Ee=G.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(G){V!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),V=G)}function L(G){G!==ug?(Ie(n.CULL_FACE),G!==D&&(G===Hd?n.cullFace(n.BACK):G===dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),D=G}function R(G){G!==C&&(H&&n.lineWidth(G),C=G)}function $(G,te,ae){G?(Ie(n.POLYGON_OFFSET_FILL),(w!==te||P!==ae)&&(n.polygonOffset(te,ae),w=te,P=ae)):Pe(n.POLYGON_OFFSET_FILL)}function xe(G){G?Ie(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function fe(G){G===void 0&&(G=n.TEXTURE0+O-1),k!==G&&(n.activeTexture(G),k=G)}function de(G,te,ae){ae===void 0&&(k===null?ae=n.TEXTURE0+O-1:ae=k);let Ee=Z[ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},Z[ae]=Ee),(Ee.type!==G||Ee.texture!==te)&&(k!==ae&&(n.activeTexture(ae),k=ae),n.bindTexture(G,te||Re[G]),Ee.type=G,Ee.texture=te)}function Fe(){let G=Z[k];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(G){K.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),K.copy(G))}function ye(G){ue.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ue.copy(G))}function Te(G,te){let ae=u.get(te);ae===void 0&&(ae=new WeakMap,u.set(te,ae));let Ee=ae.get(G);Ee===void 0&&(Ee=n.getUniformBlockIndex(te,G.name),ae.set(G,Ee))}function Ae(G,te){let Ee=u.get(te).get(G);h.get(te)!==Ee&&(n.uniformBlockBinding(te,Ee,G.__bindingPointIndex),h.set(te,Ee))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},k=null,Z={},m={},x=new WeakMap,g=[],f=null,d=!1,v=null,_=null,S=null,A=null,y=null,M=null,b=null,E=new Oe(0,0,0),T=0,z=!1,V=null,D=null,C=null,w=null,P=null,K.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Pe,bindFramebuffer:ze,drawBuffers:B,useProgram:ve,setBlending:ie,setMaterial:He,setFlipSided:Ce,setCullFace:L,setLineWidth:R,setPolygonOffset:$,setScissorTest:xe,activeTexture:fe,bindTexture:de,unbindTexture:Fe,compressedTexImage2D:Se,compressedTexImage3D:De,texImage2D:Ge,texImage3D:J,updateUBOMapping:Te,uniformBlockBinding:Ae,texStorage2D:st,texStorage3D:Ye,texSubImage2D:We,texSubImage3D:Je,compressedTexSubImage2D:ge,compressedTexSubImage3D:dt,scissor:oe,viewport:ye,reset:se}}function qM(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,R){return m?new OffscreenCanvas(L,R):il("canvas")}function g(L,R,$,xe){let fe=1;if((L.width>xe||L.height>xe)&&(fe=xe/Math.max(L.width,L.height)),fe<1||R===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let de=R?Dh:Math.floor,Fe=de(fe*L.width),Se=de(fe*L.height);u===void 0&&(u=x(Fe,Se));let De=$?x(Fe,Se):u;return De.width=Fe,De.height=Se,De.getContext("2d").drawImage(L,0,0,Fe,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Fe+"x"+Se+")."),De}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function f(L){return Mf(L.width)&&Mf(L.height)}function d(L){return a?!1:L.wrapS!==di||L.wrapT!==di||L.minFilter!==Un&&L.minFilter!==ni}function v(L,R){return L.generateMipmaps&&R&&L.minFilter!==Un&&L.minFilter!==ni}function _(L){n.generateMipmap(L)}function S(L,R,$,xe,fe=!1){if(a===!1)return R;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=R;if(R===n.RED&&($===n.FLOAT&&(de=n.R32F),$===n.HALF_FLOAT&&(de=n.R16F),$===n.UNSIGNED_BYTE&&(de=n.R8)),R===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.R8UI),$===n.UNSIGNED_SHORT&&(de=n.R16UI),$===n.UNSIGNED_INT&&(de=n.R32UI),$===n.BYTE&&(de=n.R8I),$===n.SHORT&&(de=n.R16I),$===n.INT&&(de=n.R32I)),R===n.RG&&($===n.FLOAT&&(de=n.RG32F),$===n.HALF_FLOAT&&(de=n.RG16F),$===n.UNSIGNED_BYTE&&(de=n.RG8)),R===n.RGBA){let Fe=fe?ja:Et.getTransfer(xe);$===n.FLOAT&&(de=n.RGBA32F),$===n.HALF_FLOAT&&(de=n.RGBA16F),$===n.UNSIGNED_BYTE&&(de=Fe===Rt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(L,R,$){return v(L,$)===!0||L.isFramebufferTexture&&L.minFilter!==Un&&L.minFilter!==ni?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function y(L){return L===Un||L===Vd||L===Gc?n.NEAREST:n.LINEAR}function M(L){let R=L.target;R.removeEventListener("dispose",M),E(R),R.isVideoTexture&&h.delete(R)}function b(L){let R=L.target;R.removeEventListener("dispose",b),z(R)}function E(L){let R=i.get(L);if(R.__webglInit===void 0)return;let $=L.source,xe=p.get($);if(xe){let fe=xe[R.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&T(L),Object.keys(xe).length===0&&p.delete($)}i.remove(L)}function T(L){let R=i.get(L);n.deleteTexture(R.__webglTexture);let $=L.source,xe=p.get($);delete xe[R.__cacheKey],o.memory.textures--}function z(L){let R=L.texture,$=i.get(L),xe=i.get(R);if(xe.__webglTexture!==void 0&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray($.__webglFramebuffer[fe]))for(let de=0;de<$.__webglFramebuffer[fe].length;de++)n.deleteFramebuffer($.__webglFramebuffer[fe][de]);else n.deleteFramebuffer($.__webglFramebuffer[fe]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[fe])}else{if(Array.isArray($.__webglFramebuffer))for(let fe=0;fe<$.__webglFramebuffer.length;fe++)n.deleteFramebuffer($.__webglFramebuffer[fe]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let fe=0;fe<$.__webglColorRenderbuffer.length;fe++)$.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[fe]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let fe=0,de=R.length;fe<de;fe++){let Fe=i.get(R[fe]);Fe.__webglTexture&&(n.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(R[fe])}i.remove(R),i.remove(L)}let V=0;function D(){V=0}function C(){let L=V;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),V+=1,L}function w(L){let R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function P(L,R){let $=i.get(L);if(L.isVideoTexture&&He(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){let xe=L.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,L,R);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+R)}function O(L,R){let $=i.get(L);if(L.version>0&&$.__version!==L.version){K($,L,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+R)}function H(L,R){let $=i.get(L);if(L.version>0&&$.__version!==L.version){K($,L,R);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+R)}function W(L,R){let $=i.get(L);if(L.version>0&&$.__version!==L.version){ue($,L,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+R)}let I={[Bn]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Ph]:n.MIRRORED_REPEAT},k={[Un]:n.NEAREST,[Vd]:n.NEAREST_MIPMAP_NEAREST,[Gc]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[Bg]:n.LINEAR_MIPMAP_NEAREST,[Lo]:n.LINEAR_MIPMAP_LINEAR},Z={[jg]:n.NEVER,[sx]:n.ALWAYS,[Qg]:n.LESS,[Np]:n.LEQUAL,[ex]:n.EQUAL,[ix]:n.GEQUAL,[tx]:n.GREATER,[nx]:n.NOTEQUAL};function U(L,R,$){if($?(n.texParameteri(L,n.TEXTURE_WRAP_S,I[R.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,I[R.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,I[R.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,k[R.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,k[R.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(R.wrapS!==di||R.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,y(R.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,y(R.minFilter)),R.minFilter!==Un&&R.minFilter!==ni&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Z[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===Un||R.minFilter!==Gc&&R.minFilter!==Lo||R.type===hs&&e.has("OES_texture_float_linear")===!1||a===!1&&R.type===pi&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||i.get(R).__currentAnisotropy)&&(n.texParameterf(L,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy)}}function q(L,R){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",M));let xe=R.source,fe=p.get(xe);fe===void 0&&(fe={},p.set(xe,fe));let de=w(R);if(de!==L.__cacheKey){fe[de]===void 0&&(fe[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),fe[de].usedTimes++;let Fe=fe[L.__cacheKey];Fe!==void 0&&(fe[L.__cacheKey].usedTimes--,Fe.usedTimes===0&&T(R)),L.__cacheKey=de,L.__webglTexture=fe[de].texture}return $}function K(L,R,$){let xe=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(xe=n.TEXTURE_3D);let fe=q(L,R),de=R.source;t.bindTexture(xe,L.__webglTexture,n.TEXTURE0+$);let Fe=i.get(de);if(de.version!==Fe.__version||fe===!0){t.activeTexture(n.TEXTURE0+$);let Se=Et.getPrimaries(Et.workingColorSpace),De=R.colorSpace===ii?null:Et.getPrimaries(R.colorSpace),We=R.colorSpace===ii||Se===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Je=d(R)&&f(R.image)===!1,ge=g(R.image,Je,!1,s.maxTextureSize);ge=Ce(R,ge);let dt=f(ge)||a,st=r.convert(R.format,R.colorSpace),Ye=r.convert(R.type),Ge=S(R.internalFormat,st,Ye,R.colorSpace,R.isVideoTexture);U(xe,R,dt);let J,oe=R.mipmaps,ye=a&&R.isVideoTexture!==!0&&Ge!==Lp,Te=Fe.__version===void 0||fe===!0,Ae=A(R,ge,dt);if(R.isDepthTexture)Ge=n.DEPTH_COMPONENT,a?R.type===hs?Ge=n.DEPTH_COMPONENT32F:R.type===cs?Ge=n.DEPTH_COMPONENT24:R.type===Vs?Ge=n.DEPTH24_STENCIL8:Ge=n.DEPTH_COMPONENT16:R.type===hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Ws&&Ge===n.DEPTH_COMPONENT&&R.type!==wu&&R.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=cs,Ye=r.convert(R.type)),R.format===Br&&Ge===n.DEPTH_COMPONENT&&(Ge=n.DEPTH_STENCIL,R.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Vs,Ye=r.convert(R.type))),Te&&(ye?t.texStorage2D(n.TEXTURE_2D,1,Ge,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Ge,ge.width,ge.height,0,st,Ye,null));else if(R.isDataTexture)if(oe.length>0&&dt){ye&&Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Ge,oe[0].width,oe[0].height);for(let se=0,G=oe.length;se<G;se++)J=oe[se],ye?t.texSubImage2D(n.TEXTURE_2D,se,0,0,J.width,J.height,st,Ye,J.data):t.texImage2D(n.TEXTURE_2D,se,Ge,J.width,J.height,0,st,Ye,J.data);R.generateMipmaps=!1}else ye?(Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Ge,ge.width,ge.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge.width,ge.height,st,Ye,ge.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,ge.width,ge.height,0,st,Ye,ge.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ye&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ge,oe[0].width,oe[0].height,ge.depth);for(let se=0,G=oe.length;se<G;se++)J=oe[se],R.format!==fi?st!==null?ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,ge.depth,st,J.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ge,J.width,J.height,ge.depth,0,J.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,ge.depth,st,Ye,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ge,J.width,J.height,ge.depth,0,st,Ye,J.data)}else{ye&&Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Ge,oe[0].width,oe[0].height);for(let se=0,G=oe.length;se<G;se++)J=oe[se],R.format!==fi?st!==null?ye?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,J.width,J.height,st,J.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ge,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(n.TEXTURE_2D,se,0,0,J.width,J.height,st,Ye,J.data):t.texImage2D(n.TEXTURE_2D,se,Ge,J.width,J.height,0,st,Ye,J.data)}else if(R.isDataArrayTexture)ye?(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ge,ge.width,ge.height,ge.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,st,Ye,ge.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,ge.width,ge.height,ge.depth,0,st,Ye,ge.data);else if(R.isData3DTexture)ye?(Te&&t.texStorage3D(n.TEXTURE_3D,Ae,Ge,ge.width,ge.height,ge.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,st,Ye,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,ge.width,ge.height,ge.depth,0,st,Ye,ge.data);else if(R.isFramebufferTexture){if(Te)if(ye)t.texStorage2D(n.TEXTURE_2D,Ae,Ge,ge.width,ge.height);else{let se=ge.width,G=ge.height;for(let te=0;te<Ae;te++)t.texImage2D(n.TEXTURE_2D,te,Ge,se,G,0,st,Ye,null),se>>=1,G>>=1}}else if(oe.length>0&&dt){ye&&Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Ge,oe[0].width,oe[0].height);for(let se=0,G=oe.length;se<G;se++)J=oe[se],ye?t.texSubImage2D(n.TEXTURE_2D,se,0,0,st,Ye,J):t.texImage2D(n.TEXTURE_2D,se,Ge,st,Ye,J);R.generateMipmaps=!1}else ye?(Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Ge,ge.width,ge.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,st,Ye,ge)):t.texImage2D(n.TEXTURE_2D,0,Ge,st,Ye,ge);v(R,dt)&&_(xe),Fe.__version=de.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ue(L,R,$){if(R.image.length!==6)return;let xe=q(L,R),fe=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);let de=i.get(fe);if(fe.version!==de.__version||xe===!0){t.activeTexture(n.TEXTURE0+$);let Fe=Et.getPrimaries(Et.workingColorSpace),Se=R.colorSpace===ii?null:Et.getPrimaries(R.colorSpace),De=R.colorSpace===ii||Fe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let We=R.isCompressedTexture||R.image[0].isCompressedTexture,Je=R.image[0]&&R.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!We&&!Je?ge[se]=g(R.image[se],!1,!0,s.maxCubemapSize):ge[se]=Je?R.image[se].image:R.image[se],ge[se]=Ce(R,ge[se]);let dt=ge[0],st=f(dt)||a,Ye=r.convert(R.format,R.colorSpace),Ge=r.convert(R.type),J=S(R.internalFormat,Ye,Ge,R.colorSpace),oe=a&&R.isVideoTexture!==!0,ye=de.__version===void 0||xe===!0,Te=A(R,dt,st);U(n.TEXTURE_CUBE_MAP,R,st);let Ae;if(We){oe&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,J,dt.width,dt.height);for(let se=0;se<6;se++){Ae=ge[se].mipmaps;for(let G=0;G<Ae.length;G++){let te=Ae[G];R.format!==fi?Ye!==null?oe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,G,0,0,te.width,te.height,Ye,te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,G,J,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,G,0,0,te.width,te.height,Ye,Ge,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,G,J,te.width,te.height,0,Ye,Ge,te.data)}}}else{Ae=R.mipmaps,oe&&ye&&(Ae.length>0&&Te++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,J,ge[0].width,ge[0].height));for(let se=0;se<6;se++)if(Je){oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,Ye,Ge,ge[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,J,ge[se].width,ge[se].height,0,Ye,Ge,ge[se].data);for(let G=0;G<Ae.length;G++){let ae=Ae[G].image[se].image;oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,G+1,0,0,ae.width,ae.height,Ye,Ge,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,G+1,J,ae.width,ae.height,0,Ye,Ge,ae.data)}}else{oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ye,Ge,ge[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,J,Ye,Ge,ge[se]);for(let G=0;G<Ae.length;G++){let te=Ae[G];oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,G+1,0,0,Ye,Ge,te.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,G+1,J,Ye,Ge,te.image[se])}}}v(R,st)&&_(n.TEXTURE_CUBE_MAP),de.__version=fe.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function _e(L,R,$,xe,fe,de){let Fe=r.convert($.format,$.colorSpace),Se=r.convert($.type),De=S($.internalFormat,Fe,Se,$.colorSpace);if(!i.get(R).__hasExternalTextures){let Je=Math.max(1,R.width>>de),ge=Math.max(1,R.height>>de);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,de,De,Je,ge,R.depth,0,Fe,Se,null):t.texImage2D(fe,de,De,Je,ge,0,Fe,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ie(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,fe,i.get($).__webglTexture,0,le(R)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,fe,i.get($).__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(L,R,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),R.depthBuffer&&!R.stencilBuffer){let xe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if($||ie(R)){let fe=R.depthTexture;fe&&fe.isDepthTexture&&(fe.type===hs?xe=n.DEPTH_COMPONENT32F:fe.type===cs&&(xe=n.DEPTH_COMPONENT24));let de=le(R);ie(R)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,xe,R.width,R.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,de,xe,R.width,R.height)}else n.renderbufferStorage(n.RENDERBUFFER,xe,R.width,R.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(R.depthBuffer&&R.stencilBuffer){let xe=le(R);$&&ie(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,n.DEPTH24_STENCIL8,R.width,R.height):ie(R)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,n.DEPTH24_STENCIL8,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{let xe=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let fe=0;fe<xe.length;fe++){let de=xe[fe],Fe=r.convert(de.format,de.colorSpace),Se=r.convert(de.type),De=S(de.internalFormat,Fe,Se,de.colorSpace),We=le(R);$&&ie(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,De,R.width,R.height):ie(R)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,De,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,De,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),P(R.depthTexture,0);let xe=i.get(R.depthTexture).__webglTexture,fe=le(R);if(R.depthTexture.format===Ws)ie(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,xe,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,xe,0);else if(R.depthTexture.format===Br)ie(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,xe,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Pe(L){let R=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ie(R.__webglFramebuffer,L)}else if($){R.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[xe]),R.__webglDepthbuffer[xe]=n.createRenderbuffer(),Re(R.__webglDepthbuffer[xe],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),Re(R.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(L,R,$){let xe=i.get(L);R!==void 0&&_e(xe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Pe(L)}function B(L){let R=L.texture,$=i.get(L),xe=i.get(R);L.addEventListener("dispose",b),L.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=R.version,o.memory.textures++);let fe=L.isWebGLCubeRenderTarget===!0,de=L.isWebGLMultipleRenderTargets===!0,Fe=f(L)||a;if(fe){$.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[Se]=[];for(let De=0;De<R.mipmaps.length;De++)$.__webglFramebuffer[Se][De]=n.createFramebuffer()}else $.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(a&&R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let Se=0;Se<R.mipmaps.length;Se++)$.__webglFramebuffer[Se]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(de)if(s.drawBuffers){let Se=L.texture;for(let De=0,We=Se.length;De<We;De++){let Je=i.get(Se[De]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&ie(L)===!1){let Se=de?R:[R];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let De=0;De<Se.length;De++){let We=Se[De];$.__webglColorRenderbuffer[De]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[De]);let Je=r.convert(We.format,We.colorSpace),ge=r.convert(We.type),dt=S(We.internalFormat,Je,ge,We.colorSpace,L.isXRRenderTarget===!0),st=le(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,st,dt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,$.__webglColorRenderbuffer[De])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Re($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),U(n.TEXTURE_CUBE_MAP,R,Fe);for(let Se=0;Se<6;Se++)if(a&&R.mipmaps&&R.mipmaps.length>0)for(let De=0;De<R.mipmaps.length;De++)_e($.__webglFramebuffer[Se][De],L,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De);else _e($.__webglFramebuffer[Se],L,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(R,Fe)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){let Se=L.texture;for(let De=0,We=Se.length;De<We;De++){let Je=Se[De],ge=i.get(Je);t.bindTexture(n.TEXTURE_2D,ge.__webglTexture),U(n.TEXTURE_2D,Je,Fe),_e($.__webglFramebuffer,L,Je,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,0),v(Je,Fe)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?Se=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,xe.__webglTexture),U(Se,R,Fe),a&&R.mipmaps&&R.mipmaps.length>0)for(let De=0;De<R.mipmaps.length;De++)_e($.__webglFramebuffer[De],L,R,n.COLOR_ATTACHMENT0,Se,De);else _e($.__webglFramebuffer,L,R,n.COLOR_ATTACHMENT0,Se,0);v(R,Fe)&&_(Se),t.unbindTexture()}L.depthBuffer&&Pe(L)}function ve(L){let R=f(L)||a,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let xe=0,fe=$.length;xe<fe;xe++){let de=$[xe];if(v(de,R)){let Fe=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(de).__webglTexture;t.bindTexture(Fe,Se),_(Fe),t.unbindTexture()}}}function re(L){if(a&&L.samples>0&&ie(L)===!1){let R=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],$=L.width,xe=L.height,fe=n.COLOR_BUFFER_BIT,de=[],Fe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(L),De=L.isWebGLMultipleRenderTargets===!0;if(De)for(let We=0;We<R.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let We=0;We<R.length;We++){de.push(n.COLOR_ATTACHMENT0+We),L.depthBuffer&&de.push(Fe);let Je=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(Je===!1&&(L.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),De&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[We]),Je===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Fe])),De){let ge=i.get(R[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,$,xe,0,0,$,xe,fe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),De)for(let We=0;We<R.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,Se.__webglColorRenderbuffer[We]);let Je=i.get(R[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function le(L){return Math.min(s.maxSamples,L.samples)}function ie(L){let R=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function He(L){let R=o.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function Ce(L,R){let $=L.colorSpace,xe=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Lh||$!==qi&&$!==ii&&(Et.getTransfer($)===Rt?a===!1?e.has("EXT_sRGB")===!0&&xe===fi?(L.format=Lh,L.minFilter=ni,L.generateMipmaps=!1):R=sl.sRGBToLinear(R):(xe!==fi||fe!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),R}this.allocateTextureUnit=C,this.resetTextureUnits=D,this.setTexture2D=P,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=W,this.rebindTextures=ze,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ie}function ZM(n,e,t){let i=t.isWebGL2;function s(r,o=ii){let a,l=Et.getTransfer(o);if(r===fs)return n.UNSIGNED_BYTE;if(r===Ap)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Rp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===kg)return n.BYTE;if(r===Gg)return n.SHORT;if(r===wu)return n.UNSIGNED_SHORT;if(r===Tp)return n.INT;if(r===cs)return n.UNSIGNED_INT;if(r===hs)return n.FLOAT;if(r===pi)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vg)return n.ALPHA;if(r===fi)return n.RGBA;if(r===Wg)return n.LUMINANCE;if(r===Xg)return n.LUMINANCE_ALPHA;if(r===Ws)return n.DEPTH_COMPONENT;if(r===Br)return n.DEPTH_STENCIL;if(r===Lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===qg)return n.RED;if(r===Cp)return n.RED_INTEGER;if(r===Zg)return n.RG;if(r===Pp)return n.RG_INTEGER;if(r===Ip)return n.RGBA_INTEGER;if(r===Vc||r===Wc||r===Xc||r===qc)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wd||r===Xd||r===qd||r===Zd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yd||r===$d)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Yd)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$d)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jd||r===Kd||r===jd||r===Qd||r===ef||r===tf||r===nf||r===sf||r===rf||r===of||r===af||r===lf||r===cf||r===hf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Jd)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jd)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ef)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===of)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zc||r===uf||r===df)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Zc)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===df)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yg||r===ff||r===pf||r===mf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Zc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ff)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function $M(n,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,Hp(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,v,_,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,S)):d.isMeshMatcapMaterial?(r(f,d),x(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),g(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,v,_):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===dn&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===dn&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let v=e.get(d).envMap;if(v&&(f.envMap.value=v,f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,v,_){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*v,f.scale.value=_*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,v){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){let v=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=s[v.id];S===void 0&&(x(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",f));let A=_.program;i.updateUBOMapping(v,A);let y=e.render.frame;r[v.id]!==y&&(p(v),r[v.id]=y)}function h(v){let _=u();v.__bindingPointIndex=_;let S=n.createBuffer(),A=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let _=s[v.id],S=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let y=0,M=S.length;y<M;y++){let b=Array.isArray(S[y])?S[y]:[S[y]];for(let E=0,T=b.length;E<T;E++){let z=b[E];if(m(z,y,E,A)===!0){let V=z.__offset,D=Array.isArray(z.value)?z.value:[z.value],C=0;for(let w=0;w<D.length;w++){let P=D[w],O=g(P);typeof P=="number"||typeof P=="boolean"?(z.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,V+C,z.__data)):P.isMatrix3?(z.__data[0]=P.elements[0],z.__data[1]=P.elements[1],z.__data[2]=P.elements[2],z.__data[3]=0,z.__data[4]=P.elements[3],z.__data[5]=P.elements[4],z.__data[6]=P.elements[5],z.__data[7]=0,z.__data[8]=P.elements[6],z.__data[9]=P.elements[7],z.__data[10]=P.elements[8],z.__data[11]=0):(P.toArray(z.__data,C),C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,_,S,A){let y=v.value,M=_+"_"+S;if(A[M]===void 0)return typeof y=="number"||typeof y=="boolean"?A[M]=y:A[M]=y.clone(),!0;{let b=A[M];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return A[M]=y,!0}else if(b.equals(y)===!1)return b.copy(y),!0}return!1}function x(v){let _=v.uniforms,S=0,A=16;for(let M=0,b=_.length;M<b;M++){let E=Array.isArray(_[M])?_[M]:[_[M]];for(let T=0,z=E.length;T<z;T++){let V=E[T],D=Array.isArray(V.value)?V.value:[V.value];for(let C=0,w=D.length;C<w;C++){let P=D[C],O=g(P),H=S%A;H!==0&&A-H<O.boundary&&(S+=A-H),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=O.storage}}}let y=S%A;return y>0&&(S+=A-y),v.__size=S,v.__cache={},this}function g(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function f(v){let _=v.target;_.removeEventListener("dispose",f);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}function Ba(n,e,t,i,s,r){Ir.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Eo.x=r*Ir.x-s*Ir.y,Eo.y=s*Ir.x+r*Ir.y):Eo.copy(Ir),n.copy(e),n.x+=Eo.x,n.y+=Eo.y,n.applyMatrix4(Xp)}function mp(n,e,t,i,s,r,o){let a=Jh.distanceSqToPoint(n);if(a<t){let l=new F;Jh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function Ru(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function gp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function jM(n,e){let t=1-n;return t*t*e}function QM(n,e){return 2*(1-n)*n*e}function e1(n,e){return n*n*e}function Co(n,e,t,i){return jM(n,e)+QM(n,t)+e1(n,i)}function t1(n,e){let t=1-n;return t*t*t*e}function n1(n,e){let t=1-n;return 3*t*t*n*e}function i1(n,e){return 3*(1-n)*n*n*e}function s1(n,e){return n*n*n*e}function Po(n,e,t,i,s){return t1(n,e)+n1(n,t)+i1(n,i)+s1(n,s)}function qp(n,e,t,i,s){let r,o;if(s===M1(n,e,t,i)>0)for(r=e;r<t;r+=i)o=xp(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=xp(r,n[r],n[r+1],o);return o&&Dl(o,o.next)&&(Vo(o),o=o.next),o}function Zs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Dl(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Vo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ko(n,e,t,i,s,r,o){if(!n)return;!o&&r&&m1(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?a1(n,i,s,r):o1(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Vo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=l1(Zs(n),e,t),ko(n,e,t,i,s,r,2)):o===2&&c1(n,e,t,i,s,r):ko(Zs(n),e,t,i,s,r,1);break}}}function o1(n){let e=n.prev,t=n,i=n.next;if(Vt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=u&&x.y<=m&&Nr(s,a,r,l,o,c,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function a1(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,x=h<u?h<p?h:p:u<p?u:p,g=a>l?a>c?a:c:l>c?l:c,f=h>u?h>p?h:p:u>p?u:p,d=ou(m,x,e,t,i),v=ou(g,f,e,t,i),_=n.prevZ,S=n.nextZ;for(;_&&_.z>=d&&S&&S.z<=v;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=f&&_!==s&&_!==o&&Nr(a,h,l,u,c,p,_.x,_.y)&&Vt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=m&&S.x<=g&&S.y>=x&&S.y<=f&&S!==s&&S!==o&&Nr(a,h,l,u,c,p,S.x,S.y)&&Vt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=d;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=f&&_!==s&&_!==o&&Nr(a,h,l,u,c,p,_.x,_.y)&&Vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=v;){if(S.x>=m&&S.x<=g&&S.y>=x&&S.y<=f&&S!==s&&S!==o&&Nr(a,h,l,u,c,p,S.x,S.y)&&Vt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function l1(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Dl(s,r)&&Zp(s,i,i.next,r)&&Go(s,r)&&Go(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Vo(i),Vo(i.next),i=n=r),i=i.next}while(i!==n);return Zs(i)}function c1(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_1(o,a)){let l=Yp(o,a);o=Zs(o,o.next),l=Zs(l,l.next),ko(o,e,t,i,s,r,0),ko(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function h1(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=qp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(x1(c));for(s.sort(u1),r=0;r<s.length;r++)t=d1(s[r],t);return t}function u1(n,e){return n.x-e.x}function d1(n,e){let t=f1(n,e);if(!t)return e;let i=Yp(t,n);return Zs(i,i.next),Zs(t,t.next)}function f1(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Nr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Go(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&p1(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function p1(n,e){return Vt(n.prev,n,e.prev)<0&&Vt(e.next,n,n.next)<0}function m1(n,e,t,i){let s=n;do s.z===0&&(s.z=ou(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,g1(s)}function g1(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function ou(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function x1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Nr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function _1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!v1(n,e)&&(Go(n,e)&&Go(e,n)&&y1(n,e)&&(Vt(n.prev,n,e.prev)||Vt(n,e.prev,e))||Dl(n,e)&&Vt(n.prev,n,n.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Dl(n,e){return n.x===e.x&&n.y===e.y}function Zp(n,e,t,i){let s=Za(Vt(n,e,t)),r=Za(Vt(n,e,i)),o=Za(Vt(t,i,n)),a=Za(Vt(t,i,e));return!!(s!==r&&o!==a||s===0&&qa(n,t,e)||r===0&&qa(n,i,e)||o===0&&qa(t,n,i)||a===0&&qa(t,e,i))}function qa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Za(n){return n>0?1:n<0?-1:0}function v1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Zp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Go(n,e){return Vt(n.prev,n,n.next)<0?Vt(n,e,n.next)>=0&&Vt(n,n.prev,e)>=0:Vt(n,e,n.prev)<0||Vt(n,n.next,e)<0}function y1(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Yp(n,e){let t=new au(n.i,n.x,n.y),i=new au(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function xp(n,e,t,i){let s=new au(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function au(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M1(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function _p(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function vp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function b1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Ya(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function S1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function bp(){return(typeof performance>"u"?Date:performance).now()}var ug,Hd,dg,Cl,fg,ki,ps,dn,bt,Ei,us,$t,Fd,Bd,pg,Bs,mg,gg,kd,Gd,xg,_g,vg,yg,Th,Ah,Mg,Eg,bg,Sg,wg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,$a,Dg,Ug,Ng,Og,Sp,zg,Hg,ds,Mu,Eu,bu,Zo,Fg,Su,wp,Hr,Fr,Rh,Ch,Pl,Bn,di,Ph,Un,Vd,Gc,ni,Bg,Lo,fs,kg,Gg,wu,Tp,cs,hs,pi,Ap,Rp,Vs,Vg,fi,Wg,Xg,Ws,Br,qg,Cp,Zg,Pp,Ip,Vc,Wc,Xc,qc,Wd,Xd,qd,Zd,Lp,Yd,$d,Jd,Kd,jd,Qd,ef,tf,nf,sf,rf,of,af,lf,cf,hf,Zc,uf,df,Yg,ff,pf,mf,Ja,Ka,Yc,gf,xf,_f,Dp,Xs,$g,Jg,Up,Kg,ii,vt,qi,Tu,Il,ja,Rt,Qa,el,dr,vf,jg,Qg,ex,Np,tx,nx,ix,sx,Ih,yf,Lh,Wi,tl,ms,wn,$c,nl,ce,lt,Kc,Ef,bf,Sf,ga,ax,Et,fr,sl,lx,rl,cx,si,It,Uh,Nn,ol,Nh,kn,F,eh,wf,Zi,Oi,ci,xa,pr,mr,gr,ss,rs,Ns,xo,_a,va,Os,hx,_o,nh,Yi,zi,ih,ya,os,sh,Ma,rh,Do,pt,xr,hi,ux,dx,as,Ea,Yn,Tf,Af,al,ll,fx,Rf,_r,Hi,ba,vo,px,mx,Cf,Pf,If,gx,xx,Jt,ui,Fi,oh,Bi,vr,yr,Lf,ah,lh,ch,Sa,Gs,zp,ls,wa,Oe,Tn,_x,bi,ft,nn,Ta,fn,cl,hl,nt,vx,ti,uh,Mr,$n,yo,hn,Ut,Df,zs,Aa,Uf,Er,br,Sr,dh,Ra,Ca,Pa,Ia,Nf,Of,zf,La,Da,X,Me,_s,Ex,bx,sn,ul,vn,wr,Tr,Oh,dl,zh,fh,Sx,wx,Gi,Hs,Na,Uo,Ve,Ax,Rx,Cx,Px,Ix,Lx,Dx,Ux,Nx,Ox,zx,Hx,Fx,Bx,kx,Gx,Vx,Wx,Xx,qx,Zx,Yx,$x,Jx,Kx,jx,Qx,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,x_,__,v_,y_,M_,E_,b_,S_,w_,T_,A_,R_,C_,P_,I_,L_,D_,U_,N_,O_,z_,H_,F_,B_,k_,G_,V_,W_,X_,q_,Z_,Y_,$_,J_,K_,j_,Q_,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,dv,fv,pv,mv,gv,xv,_v,vv,yv,Mv,Ev,bv,Sv,wv,Tv,Av,Rv,Cv,Pv,Iv,Lv,Dv,Uv,Nv,Ov,zv,Hv,Fv,Bv,kv,Gv,Vv,Wv,Xv,qv,Zv,Yv,$v,Jv,Kv,jv,Qv,ey,ty,ny,iy,sy,ry,tt,we,Mi,Oa,Gr,Dr,Hf,ks,ph,Ff,mh,gh,xh,Fs,Ar,Bf,Vr,fl,Bp,kp,Gp,Vp,Wp,Wf,Xf,qf,Zf,Yf,Hh,Fh,Bh,_h,zr,hM,uM,yM,MM,bM,IM,Gh,Vh,HM,Wh,Xh,GM,VM,qh,ot,YM,Ro,Zh,No,Yh,pl,Wr,ml,Ln,Oo,qs,Rr,Mo,Cr,Pr,Ir,Eo,Xp,Ha,bo,Fa,rp,vh,op,Xr,zo,Lr,ap,ka,lp,KM,So,wo,yt,Ho,cp,hp,up,yh,Ga,$h,dp,fp,gl,Fo,pp,Jh,Va,Wa,xl,an,ri,Bo,Kh,Xa,Mh,Eh,bh,jh,_l,Qh,vl,eu,yl,tu,Ml,nu,iu,Si,su,El,$i,ke,gs,ru,Ji,r1,Io,xs,E1,Ys,mi,Pt,Wo,bl,pe,wi,qr,lu,cu,hu,gi,$s,uu,du,fu,Xo,Js,pu,mu,w1,gu,Zr,Sl,Sh,yp,Mp,qo,xu,wl,Ep,To,wh,_u,Tl,vu,Al,Rl,Cu,T1,Pu,A1,R1,C1,P1,I1,L1,D1,yu,zt,gS,Nt=Zn(()=>{ug=0,Hd=1,dg=2,Cl=1,fg=2,ki=3,ps=0,dn=1,bt=2,Ei=0,us=1,$t=2,Fd=3,Bd=4,pg=5,Bs=100,mg=101,gg=102,kd=103,Gd=104,xg=200,_g=201,vg=202,yg=203,Th=204,Ah=205,Mg=206,Eg=207,bg=208,Sg=209,wg=210,Tg=211,Ag=212,Rg=213,Cg=214,Pg=0,Ig=1,Lg=2,$a=3,Dg=4,Ug=5,Ng=6,Og=7,Sp=0,zg=1,Hg=2,ds=0,Mu=1,Eu=2,bu=3,Zo=4,Fg=5,Su=6,wp=300,Hr=301,Fr=302,Rh=303,Ch=304,Pl=306,Bn=1e3,di=1001,Ph=1002,Un=1003,Vd=1004,Gc=1005,ni=1006,Bg=1007,Lo=1008,fs=1009,kg=1010,Gg=1011,wu=1012,Tp=1013,cs=1014,hs=1015,pi=1016,Ap=1017,Rp=1018,Vs=1020,Vg=1021,fi=1023,Wg=1024,Xg=1025,Ws=1026,Br=1027,qg=1028,Cp=1029,Zg=1030,Pp=1031,Ip=1033,Vc=33776,Wc=33777,Xc=33778,qc=33779,Wd=35840,Xd=35841,qd=35842,Zd=35843,Lp=36196,Yd=37492,$d=37496,Jd=37808,Kd=37809,jd=37810,Qd=37811,ef=37812,tf=37813,nf=37814,sf=37815,rf=37816,of=37817,af=37818,lf=37819,cf=37820,hf=37821,Zc=36492,uf=36494,df=36495,Yg=36283,ff=36284,pf=36285,mf=36286,Ja=2300,Ka=2301,Yc=2302,gf=2400,xf=2401,_f=2402,Dp=3e3,Xs=3001,$g=3200,Jg=3201,Up=0,Kg=1,ii="",vt="srgb",qi="srgb-linear",Tu="display-p3",Il="display-p3-linear",ja="linear",Rt="srgb",Qa="rec709",el="p3",dr=7680,vf=519,jg=512,Qg=513,ex=514,Np=515,tx=516,nx=517,ix=518,sx=519,Ih=35044,yf="300 es",Lh=1035,Wi=2e3,tl=2001,ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,nl=180/Math.PI;ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],x=i[8],g=s[0],f=s[3],d=s[6],v=s[1],_=s[4],S=s[7],A=s[2],y=s[5],M=s[8];return r[0]=o*g+a*v+l*A,r[3]=o*f+a*_+l*y,r[6]=o*d+a*S+l*M,r[1]=c*g+h*v+u*A,r[4]=c*f+h*_+u*y,r[7]=c*d+h*S+u*M,r[2]=p*g+m*v+x*A,r[5]=p*f+m*_+x*y,r[8]=p*d+m*S+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*r,m=c*r-o*l,x=t*u+i*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=u*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=p*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kc=new lt;Ef={};bf=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sf=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[qi]:{transfer:ja,primaries:Qa,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:Rt,primaries:Qa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Il]:{transfer:ja,primaries:el,toReference:n=>n.applyMatrix3(Sf),fromReference:n=>n.applyMatrix3(bf)},[Tu]:{transfer:Rt,primaries:el,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sf),fromReference:n=>n.applyMatrix3(bf).convertLinearToSRGB()}},ax=new Set([qi,Il]),Et={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ax.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ga[e].toReference,s=ga[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ga[n].primaries},getTransfer:function(n){return n===ii?ja:ga[n].transfer}};sl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=il("canvas")),fr.width=e.width,fr.height=e.height;let i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=il("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Or(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Or(t[i]/255)*255):t[i]=Or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lx=0,rl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qc(s[o].image)):r.push(Qc(s[o]))}else r=Qc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};cx=0,si=class n extends ms{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=di,s=di,r=ni,o=Lo,a=fi,l=fs,c=n.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Xi(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xs?vt:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Xs:Dp}set encoding(e){Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xs?vt:ii}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=wp;si.DEFAULT_ANISOTROPY=1;It=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],x=l[9],g=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(x-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(x+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,S=(m+1)/2,A=(d+1)/2,y=(h+p)/4,M=(u+g)/4,b=(x+f)/4;return _>S&&_>A?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=y/i,r=M/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=y/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=M/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((f-x)*(f-x)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(f-x)/v,this.y=(u-g)/v,this.z=(p-h)/v,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uh=class extends ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xs?vt:ii),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new si(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Uh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ol=class extends si{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nh=class extends si{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],p=r[o+0],m=r[o+1],x=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(u!==g||l!==p||c!==m||h!==x){let f=1-a,d=l*p+c*m+h*x+u*g,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let A=Math.sqrt(_),y=Math.atan2(A,d*v);f=Math.sin(f*y)/A,a=Math.sin(a*y)/A}let S=a*v;if(l=l*f+p*S,c=c*f+m*S,h=h*f+x*S,u=u*f+g*S,f===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*m-c*p,e[t+1]=l*x+h*p+c*u-a*m,e[t+2]=c*x+h*m+a*p-l*u,e[t+3]=h*x-a*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),p=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u-p*m*x;break;case"YXZ":this._x=p*h*u+c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u+p*m*x;break;case"ZXY":this._x=p*h*u-c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u-p*m*x;break;case"ZYX":this._x=p*h*u-c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u+p*m*x;break;case"YZX":this._x=p*h*u+c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u-p*m*x;break;case"XZY":this._x=p*h*u-c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=i+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eh=new F,wf=new kn,Zi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),_a.subVectors(this.max,xo),pr.subVectors(e.a,xo),mr.subVectors(e.b,xo),gr.subVectors(e.c,xo),ss.subVectors(mr,pr),rs.subVectors(gr,mr),Ns.subVectors(pr,gr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ns.z,Ns.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ns.z,0,-Ns.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ns.y,Ns.x,0];return!th(t,pr,mr,gr,_a)||(t=[1,0,0,0,1,0,0,0,1],!th(t,pr,mr,gr,_a))?!1:(va.crossVectors(ss,rs),t=[va.x,va.y,va.z],th(t,pr,mr,gr,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Oi=[new F,new F,new F,new F,new F,new F,new F,new F],ci=new F,xa=new Zi,pr=new F,mr=new F,gr=new F,ss=new F,rs=new F,Ns=new F,xo=new F,_a=new F,va=new F,Os=new F;hx=new Zi,_o=new F,nh=new F,Yi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):hx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);let t=_o.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_o,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(nh)),this.expandByPoint(_o.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new F,ih=new F,ya=new F,os=new F,sh=new F,Ma=new F,rh=new F,Do=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ih.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),os.copy(this.origin).sub(ih);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=os.dot(this.direction),l=-os.dot(ya),c=os.lengthSq(),h=Math.abs(1-o*o),u,p,m,x;if(h>0)if(u=o*l-a,p=o*a-l,x=r*h,u>=0)if(p>=-x)if(p<=x){let g=1/h;u*=g,p*=g,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-x?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=x?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ih).addScaledVector(ya,p),m}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let i=zi.dot(this.direction),s=zi.dot(zi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,s,r){sh.subVectors(t,e),Ma.subVectors(i,e),rh.crossVectors(sh,Ma);let o=this.direction.dot(rh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);let l=a*this.direction.dot(Ma.crossVectors(os,Ma));if(l<0)return null;let c=a*this.direction.dot(sh.cross(os));if(c<0||l+c>o)return null;let h=-a*os.dot(rh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,p,m,x,g,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,p,m,x,g,f)}set(e,t,i,s,r,o,a,l,c,h,u,p,m,x,g,f){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=x,d[11]=g,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*u,x=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+x*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*u,x=c*h,g=c*u;t[0]=p+g*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*u,x=c*h,g=c*u;t[0]=p-g*a,t[4]=-o*u,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*u,x=a*h,g=a*u;t[0]=l*h,t[4]=x*c-m,t[8]=p*c+g,t[1]=l*u,t[5]=g*c+p,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-p*u,t[8]=x*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+x,t[10]=p-g*u}else if(e.order==="XZY"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+g,t[5]=o*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=a*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,dx)}lookAt(e,t,i){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),as.crossVectors(i,Yn),as.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),as.crossVectors(i,Yn)),as.normalize(),Ea.crossVectors(Yn,as),s[0]=as.x,s[4]=Ea.x,s[8]=Yn.x,s[1]=as.y,s[5]=Ea.y,s[9]=Yn.y,s[2]=as.z,s[6]=Ea.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],x=i[2],g=i[6],f=i[10],d=i[14],v=i[3],_=i[7],S=i[11],A=i[15],y=s[0],M=s[4],b=s[8],E=s[12],T=s[1],z=s[5],V=s[9],D=s[13],C=s[2],w=s[6],P=s[10],O=s[14],H=s[3],W=s[7],I=s[11],k=s[15];return r[0]=o*y+a*T+l*C+c*H,r[4]=o*M+a*z+l*w+c*W,r[8]=o*b+a*V+l*P+c*I,r[12]=o*E+a*D+l*O+c*k,r[1]=h*y+u*T+p*C+m*H,r[5]=h*M+u*z+p*w+m*W,r[9]=h*b+u*V+p*P+m*I,r[13]=h*E+u*D+p*O+m*k,r[2]=x*y+g*T+f*C+d*H,r[6]=x*M+g*z+f*w+d*W,r[10]=x*b+g*V+f*P+d*I,r[14]=x*E+g*D+f*O+d*k,r[3]=v*y+_*T+S*C+A*H,r[7]=v*M+_*z+S*w+A*W,r[11]=v*b+_*V+S*P+A*I,r[15]=v*E+_*D+S*O+A*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],x=e[3],g=e[7],f=e[11],d=e[15];return x*(+r*l*u-s*c*u-r*a*p+i*c*p+s*a*m-i*l*m)+g*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+f*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*p+s*o*u-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],x=e[12],g=e[13],f=e[14],d=e[15],v=u*f*c-g*p*c+g*l*m-a*f*m-u*l*d+a*p*d,_=x*p*c-h*f*c-x*l*m+o*f*m+h*l*d-o*p*d,S=h*g*c-x*u*c+x*a*m-o*g*m-h*a*d+o*u*d,A=x*u*l-h*g*l-x*a*p+o*g*p+h*a*f-o*u*f,y=t*v+i*_+s*S+r*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/y;return e[0]=v*M,e[1]=(g*p*r-u*f*r-g*s*m+i*f*m+u*s*d-i*p*d)*M,e[2]=(a*f*r-g*l*r+g*s*c-i*f*c-a*s*d+i*l*d)*M,e[3]=(u*l*r-a*p*r-u*s*c+i*p*c+a*s*m-i*l*m)*M,e[4]=_*M,e[5]=(h*f*r-x*p*r+x*s*m-t*f*m-h*s*d+t*p*d)*M,e[6]=(x*l*r-o*f*r-x*s*c+t*f*c+o*s*d-t*l*d)*M,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*M,e[8]=S*M,e[9]=(x*u*r-h*g*r-x*i*m+t*g*m+h*i*d-t*u*d)*M,e[10]=(o*g*r-x*a*r+x*i*c-t*g*c-o*i*d+t*a*d)*M,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*M,e[12]=A*M,e[13]=(h*g*s-x*u*s+x*i*p-t*g*p-h*i*f+t*u*f)*M,e[14]=(x*a*s-o*g*s-x*i*l+t*g*l+o*i*f-t*a*f)*M,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*p+t*a*p)*M,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,p=r*c,m=r*h,x=r*u,g=o*h,f=o*u,d=a*u,v=l*c,_=l*h,S=l*u,A=i.x,y=i.y,M=i.z;return s[0]=(1-(g+d))*A,s[1]=(m+S)*A,s[2]=(x-_)*A,s[3]=0,s[4]=(m-S)*y,s[5]=(1-(p+d))*y,s[6]=(f+v)*y,s[7]=0,s[8]=(x+_)*M,s[9]=(f-v)*M,s[10]=(1-(p+g))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=xr.set(s[0],s[1],s[2]).length(),o=xr.set(s[4],s[5],s[6]).length(),a=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);let c=1/r,h=1/o,u=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,t.setFromRotationMatrix(hi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Wi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),m,x;if(a===Wi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===tl)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Wi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),p=(t+e)*c,m=(i+s)*h,x,g;if(a===Wi)x=(o+r)*u,g=-2*u;else if(a===tl)x=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},xr=new F,hi=new pt,ux=new F(0,0,0),dx=new F(1,1,1),as=new F,Ea=new F,Yn=new F,Tf=new pt,Af=new kn,al=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Af.setFromEuler(this),this.setFromQuaternion(Af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};al.DEFAULT_ORDER="XYZ";ll=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fx=0,Rf=new F,_r=new kn,Hi=new pt,ba=new F,vo=new F,px=new F,mx=new kn,Cf=new F(1,0,0),Pf=new F(0,1,0),If=new F(0,0,1),gx={type:"added"},xx={type:"removed"},Jt=class n extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new al,i=new kn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new lt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(Pf,e)}rotateZ(e){return this.rotateOnAxis(If,e)}translateOnAxis(e,t){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(Pf,e)}translateZ(e){return this.translateOnAxis(If,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ba.copy(e):ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(vo,ba,this.up):Hi.lookAt(ba,vo,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Hi),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Jt.DEFAULT_UP=new F(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ui=new F,Fi=new F,oh=new F,Bi=new F,vr=new F,yr=new F,Lf=new F,ah=new F,lh=new F,ch=new F,Sa=!1,Gs=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ui.subVectors(e,t),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ui.subVectors(s,t),Fi.subVectors(i,t),oh.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Fi),l=ui.dot(oh),c=Fi.dot(Fi),h=Fi.dot(oh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,t,i,s,r,o,a,l){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static isFrontFacing(e,t,i,s){return ui.subVectors(i,t),Fi.subVectors(e,t),ui.cross(Fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ui.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;vr.subVectors(s,i),yr.subVectors(r,i),ah.subVectors(e,i);let l=vr.dot(ah),c=yr.dot(ah);if(l<=0&&c<=0)return t.copy(i);lh.subVectors(e,s);let h=vr.dot(lh),u=yr.dot(lh);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(vr,o);ch.subVectors(e,r);let m=vr.dot(ch),x=yr.dot(ch);if(x>=0&&m<=x)return t.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(yr,a);let f=h*x-m*u;if(f<=0&&u-h>=0&&m-x>=0)return Lf.subVectors(r,s),a=(u-h)/(u-h+(m-x)),t.copy(s).addScaledVector(Lf,a);let d=1/(f+g+p);return o=g*d,a=p*d,t.copy(i).addScaledVector(vr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},wa={h:0,s:0,l:0};Oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=rx(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=hh(o,r,e+1/3),this.g=hh(o,r,e),this.b=hh(o,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=jc(e.r),this.g=jc(e.g),this.b=jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Et.fromWorkingColorSpace(Tn.copy(this),e),Math.round(un(Tn.r*255,0,255))*65536+Math.round(un(Tn.g*255,0,255))*256+Math.round(un(Tn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=vt){Et.fromWorkingColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(wa);let i=Jc(ls.h,wa.h,t),s=Jc(ls.s,wa.s,t),r=Jc(ls.l,wa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Oe;Oe.NAMES=zp;_x=0,bi=class extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=us,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ah,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Th&&(i.blendSrc=this.blendSrc),this.blendDst!==Ah&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ft=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nn=new F,Ta=new ce,fn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}},cl=class extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},hl=class extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},nt=class extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}},vx=0,ti=new pt,uh=new Jt,Mr=new F,$n=new Zi,yo=new Zi,hn=new F,Ut=class n extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Op(e)?hl:cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors($n.min,yo.min),$n.expandByPoint(hn),hn.addVectors($n.max,yo.max),$n.expandByPoint(hn)):($n.expandByPoint(yo.min),$n.expandByPoint(yo.max))}$n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),hn.add(Mr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new F,h[T]=new F;let u=new F,p=new F,m=new F,x=new ce,g=new ce,f=new ce,d=new F,v=new F;function _(T,z,V){u.fromArray(s,T*3),p.fromArray(s,z*3),m.fromArray(s,V*3),x.fromArray(o,T*2),g.fromArray(o,z*2),f.fromArray(o,V*2),p.sub(u),m.sub(u),g.sub(x),f.sub(x);let D=1/(g.x*f.y-f.x*g.y);isFinite(D)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-g.y).multiplyScalar(D),v.copy(m).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(D),c[T].add(d),c[z].add(d),c[V].add(d),h[T].add(v),h[z].add(v),h[V].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,z=S.length;T<z;++T){let V=S[T],D=V.start,C=V.count;for(let w=D,P=D+C;w<P;w+=3)_(i[w+0],i[w+1],i[w+2])}let A=new F,y=new F,M=new F,b=new F;function E(T){M.fromArray(r,T*3),b.copy(M);let z=c[T];A.copy(z),A.sub(M.multiplyScalar(M.dot(z))).normalize(),y.crossVectors(b,z);let D=y.dot(h[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=D}for(let T=0,z=S.length;T<z;++T){let V=S[T],D=V.start,C=V.count;for(let w=D,P=D+C;w<P;w+=3)E(i[w+0]),E(i[w+1]),E(i[w+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let p=0,m=e.count;p<m;p+=3){let x=e.getX(p+0),g=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),m=0,x=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let d=0;d<h;d++)p[x++]=c[m++]}return new fn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Df=new pt,zs=new Do,Aa=new Yi,Uf=new F,Er=new F,br=new F,Sr=new F,dh=new F,Ra=new F,Ca=new ce,Pa=new ce,Ia=new ce,Nf=new F,Of=new F,zf=new F,La=new F,Da=new F,X=class extends Jt{constructor(e=new Ut,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(dh.fromBufferAttribute(u,e),o?Ra.addScaledVector(dh,h):Ra.addScaledVector(dh.sub(t),h))}t.add(Ra)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(Aa.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Aa,Uf)===null||zs.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Df.copy(r).invert(),zs.copy(e.ray).applyMatrix4(Df),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let f=p[x],d=o[f.materialIndex],v=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let S=v,A=_;S<A;S+=3){let y=a.getX(S),M=a.getX(S+1),b=a.getX(S+2);s=Ua(this,d,e,i,c,h,u,y,M,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=x,d=g;f<d;f+=3){let v=a.getX(f),_=a.getX(f+1),S=a.getX(f+2);s=Ua(this,o,e,i,c,h,u,v,_,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let f=p[x],d=o[f.materialIndex],v=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=v,A=_;S<A;S+=3){let y=S,M=S+1,b=S+2;s=Ua(this,d,e,i,c,h,u,y,M,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=x,d=g;f<d;f+=3){let v=f,_=f+1,S=f+2;s=Ua(this,o,e,i,c,h,u,v,_,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};Me=class n extends Ut{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,m=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function x(g,f,d,v,_,S,A,y,M,b,E){let T=S/M,z=A/b,V=S/2,D=A/2,C=y/2,w=M+1,P=b+1,O=0,H=0,W=new F;for(let I=0;I<P;I++){let k=I*z-D;for(let Z=0;Z<w;Z++){let U=Z*T-V;W[g]=U*v,W[f]=k*_,W[d]=C,c.push(W.x,W.y,W.z),W[g]=0,W[f]=0,W[d]=y>0?1:-1,h.push(W.x,W.y,W.z),u.push(Z/M),u.push(1-I/b),O+=1}}for(let I=0;I<b;I++)for(let k=0;k<M;k++){let Z=p+k+w*I,U=p+k+w*(I+1),q=p+(k+1)+w*(I+1),K=p+(k+1)+w*I;l.push(Z,U,K),l.push(U,q,K),H+=6}a.addGroup(m,H,E),m+=H,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};_s={clone:kr,merge:Dn},Ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ex,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=Mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ul=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vn=class extends ul{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($c*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wr=-90,Tr=1,Oh=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(wr,Tr,e,t);s.layers=this.layers,this.add(s);let r=new vn(wr,Tr,e,t);r.layers=this.layers,this.add(r);let o=new vn(wr,Tr,e,t);o.layers=this.layers,this.add(o);let a=new vn(wr,Tr,e,t);a.layers=this.layers,this.add(a);let l=new vn(wr,Tr,e,t);l.layers=this.layers,this.add(l);let c=new vn(wr,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},dl=class extends si{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Hr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zh=class extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xs?vt:ii),this.texture=new dl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ei});r.uniforms.tEquirect.value=t;let o=new X(s,r),a=t.minFilter;return t.minFilter===Lo&&(t.minFilter=ni),new Oh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},fh=new F,Sx=new F,wx=new lt,Gi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=fh.subVectors(i,t).cross(Sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(fh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wx.getNormalMatrix(e),s=this.coplanarPoint(fh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hs=new Yi,Na=new F,Uo=class{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],x=s[9],g=s[10],f=s[11],d=s[12],v=s[13],_=s[14],S=s[15];if(i[0].setComponents(l-r,p-c,f-m,S-d).normalize(),i[1].setComponents(l+r,p+c,f+m,S+d).normalize(),i[2].setComponents(l+o,p+h,f+x,S+v).normalize(),i[3].setComponents(l-o,p-h,f-x,S-v).normalize(),i[4].setComponents(l-a,p-u,f-g,S-_).normalize(),t===Wi)i[5].setComponents(l+a,p+u,f+g,S+_).normalize();else if(t===tl)i[5].setComponents(a,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ve=class n extends Ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,p=t/l,m=[],x=[],g=[],f=[];for(let d=0;d<h;d++){let v=d*p-o;for(let _=0;_<c;_++){let S=_*u-r;x.push(S,-v,0),g.push(0,0,1),f.push(_/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){let _=v+c*d,S=v+c*(d+1),A=v+1+c*(d+1),y=v+1+c*d;m.push(_,S,y),m.push(S,A,y)}this.setIndex(m),this.setAttribute("position",new nt(x,3)),this.setAttribute("normal",new nt(g,3)),this.setAttribute("uv",new nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
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
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
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
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
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
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
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
#endif`,kx=`#ifdef USE_BUMPMAP
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jx=`#define PI 3.141592653589793
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
} // validated`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`
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
}`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p_=`#ifdef USE_GRADIENTMAP
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
}`,m_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
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
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,T_=`struct PhysicalMaterial {
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
}`,A_=`
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,U_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z_=`#if defined( USE_POINTS_UV )
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
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k_=`#ifdef USE_MORPHNORMALS
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
#endif`,G_=`#ifdef USE_MORPHTARGETS
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
#endif`,V_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
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
#endif`,J_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uv=`float getShadowMask() {
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
}`,dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mv=`#ifdef USE_SKINNING
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
#endif`,gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yv=`#ifdef USE_TRANSMISSION
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
#endif`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`#include <common>
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
}`,Dv=`#if DEPTH_PACKING == 3200
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
}`,Uv=`#define DISTANCE
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
}`,Nv=`#define DISTANCE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,kv=`uniform vec3 diffuse;
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
}`,Gv=`#define LAMBERT
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
}`,Vv=`#define LAMBERT
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
}`,Wv=`#define MATCAP
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
}`,Xv=`#define MATCAP
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
}`,qv=`#define NORMAL
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
}`,Zv=`#define NORMAL
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
}`,Yv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,Jv=`#define STANDARD
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
}`,Kv=`#define STANDARD
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
}`,jv=`#define TOON
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
}`,Qv=`#define TOON
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
}`,ey=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,sy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Ax,alphahash_pars_fragment:Rx,alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Ix,alphatest_pars_fragment:Lx,aomap_fragment:Dx,aomap_pars_fragment:Ux,batching_pars_vertex:Nx,batching_vertex:Ox,begin_vertex:zx,beginnormal_vertex:Hx,bsdfs:Fx,iridescence_fragment:Bx,bumpmap_pars_fragment:kx,clipping_planes_fragment:Gx,clipping_planes_pars_fragment:Vx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:Xx,color_fragment:qx,color_pars_fragment:Zx,color_pars_vertex:Yx,color_vertex:$x,common:Jx,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:e_,emissivemap_fragment:t_,emissivemap_pars_fragment:n_,colorspace_fragment:i_,colorspace_pars_fragment:s_,envmap_fragment:r_,envmap_common_pars_fragment:o_,envmap_pars_fragment:a_,envmap_pars_vertex:l_,envmap_physical_pars_fragment:y_,envmap_vertex:c_,fog_vertex:h_,fog_pars_vertex:u_,fog_fragment:d_,fog_pars_fragment:f_,gradientmap_pars_fragment:p_,lightmap_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:x_,lights_lambert_pars_fragment:__,lights_pars_begin:v_,lights_toon_fragment:M_,lights_toon_pars_fragment:E_,lights_phong_fragment:b_,lights_phong_pars_fragment:S_,lights_physical_fragment:w_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:R_,lights_fragment_end:C_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:D_,map_fragment:U_,map_pars_fragment:N_,map_particle_fragment:O_,map_particle_pars_fragment:z_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:F_,morphcolor_vertex:B_,morphnormal_vertex:k_,morphtarget_pars_vertex:G_,morphtarget_vertex:V_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:q_,normal_pars_vertex:Z_,normal_vertex:Y_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:J_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Q_,opaque_fragment:ev,packing:tv,premultiplied_alpha_fragment:nv,project_vertex:iv,dithering_fragment:sv,dithering_pars_fragment:rv,roughnessmap_fragment:ov,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:lv,shadowmap_pars_vertex:cv,shadowmap_vertex:hv,shadowmask_pars_fragment:uv,skinbase_vertex:dv,skinning_pars_vertex:fv,skinning_vertex:pv,skinnormal_vertex:mv,specularmap_fragment:gv,specularmap_pars_fragment:xv,tonemapping_fragment:_v,tonemapping_pars_fragment:vv,transmission_fragment:yv,transmission_pars_fragment:Mv,uv_pars_fragment:Ev,uv_pars_vertex:bv,uv_vertex:Sv,worldpos_vertex:wv,background_vert:Tv,background_frag:Av,backgroundCube_vert:Rv,backgroundCube_frag:Cv,cube_vert:Pv,cube_frag:Iv,depth_vert:Lv,depth_frag:Dv,distanceRGBA_vert:Uv,distanceRGBA_frag:Nv,equirect_vert:Ov,equirect_frag:zv,linedashed_vert:Hv,linedashed_frag:Fv,meshbasic_vert:Bv,meshbasic_frag:kv,meshlambert_vert:Gv,meshlambert_frag:Vv,meshmatcap_vert:Wv,meshmatcap_frag:Xv,meshnormal_vert:qv,meshnormal_frag:Zv,meshphong_vert:Yv,meshphong_frag:$v,meshphysical_vert:Jv,meshphysical_frag:Kv,meshtoon_vert:jv,meshtoon_frag:Qv,points_vert:ey,points_frag:ty,shadow_vert:ny,shadow_frag:iy,sprite_vert:sy,sprite_frag:ry},we={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Mi={basic:{uniforms:Dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Dn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Dn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Oe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Dn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Dn([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Dn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Dn([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Dn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Dn([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Dn([we.common,we.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Dn([we.lights,we.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Mi.physical={uniforms:Dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};Oa={r:0,b:0,g:0};Gr=class extends ul{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dr=4,Hf=[.125,.215,.35,.446,.526,.582],ks=20,ph=new Gr,Ff=new Oe,mh=null,gh=0,xh=0,Fs=(1+Math.sqrt(5))/2,Ar=1/Fs,Bf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Fs,Ar),new F(0,Fs,-Ar),new F(Ar,0,Fs),new F(-Ar,0,Fs),new F(Fs,Ar,0),new F(-Fs,Ar,0)],Vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mh,gh,xh),e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:pi,format:fi,colorSpace:qi,depthBuffer:!1},s=kf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dy(r)),this._blurMaterial=fy(r,e,t)}return s}_compileMaterial(e){let t=new X(this._lodPlanes[0],e);this._renderer.compile(t,ph)}_sceneToCubeUV(e,t,i,s){let a=new vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ff),h.toneMapping=ds,h.autoClear=!1;let m=new ft({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new X(new Me,m),g=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,g=!0):(m.color.copy(Ff),g=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let _=this._cubeSize;za(s,v*_,d>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Hr||e.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;za(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ph)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bf[(s-1)%Bf.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new X(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ks-1),g=r/x,f=isFinite(r)?1+Math.floor(h*g):ks;f>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ks}`);let d=[],v=0;for(let M=0;M<ks;++M){let b=M/g,E=Math.exp(-b*b/2);d.push(E),M===0?v+=E:M<f&&(v+=2*E)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;let S=this._sizeLods[s],A=3*S*(s>_-Dr?s-_+Dr:0),y=4*(this._cubeSize-S);za(t,A,y,3*S,2*S),l.setRenderTarget(t),l.render(u,ph)}};fl=class extends si{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ws,h!==Ws&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ws&&(i=cs),i===void 0&&h===Br&&(i=Vs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bp=new si,kp=new fl(1,1);kp.compareFunction=Np;Gp=new ol,Vp=new Nh,Wp=new dl,Wf=[],Xf=[],qf=new Float32Array(16),Zf=new Float32Array(9),Yf=new Float32Array(4);Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gy(t.type)}},Fh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lM(t.type)}},Bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},_h=/(\w+)(\])?(\[|\.)?/g;zr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};hM=37297,uM=0;yM=/^[ \t]*#include +<([\w\d./]+)>/gm;MM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;IM=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Vh(e),t.set(e,i)),i}},Vh=class{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}};HM=0;Wh=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xh=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
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
}`;qh=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ot=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},YM={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let f=t.getJointPose(g,i),d=this._getHandJoint(c,g);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Zh=class extends ms{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,x=null,g=t.getContextAttributes(),f=null,d=null,v=[],_=[],S=new ce,A=null,y=new vn;y.layers.enable(1),y.viewport=new It;let M=new vn;M.layers.enable(2),M.viewport=new It;let b=[y,M],E=new qh;E.layers.enable(1),E.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=v[U];return q===void 0&&(q=new Ro,v[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=v[U];return q===void 0&&(q=new Ro,v[U]=q),q.getGripSpace()},this.getHand=function(U){let q=v[U];return q===void 0&&(q=new Ro,v[U]=q),q.getHandSpace()};function V(U){let q=_.indexOf(U.inputSource);if(q===-1)return;let K=v[q];K!==void 0&&(K.update(U.inputSource,U.frame,c||o),K.dispatchEvent({type:U.type,data:U.inputSource}))}function D(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",C);for(let U=0;U<v.length;U++){let q=_[U];q!==null&&(_[U]=null,v[U].disconnect(q))}T=null,z=null,e.setRenderTarget(f),m=null,p=null,u=null,s=null,d=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",D),s.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let q={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Nn(m.framebufferWidth,m.framebufferHeight,{format:fi,type:fs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,K=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=g.stencil?Br:Ws,K=g.stencil?Vs:cs);let _e={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(_e),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Nn(p.textureWidth,p.textureHeight,{format:fi,type:fs,depthTexture:new fl(p.textureWidth,p.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let Re=e.properties.get(d);Re.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(U){for(let q=0;q<U.removed.length;q++){let K=U.removed[q],ue=_.indexOf(K);ue>=0&&(_[ue]=null,v[ue].disconnect(K))}for(let q=0;q<U.added.length;q++){let K=U.added[q],ue=_.indexOf(K);if(ue===-1){for(let Re=0;Re<v.length;Re++)if(Re>=_.length){_.push(K),ue=Re;break}else if(_[Re]===null){_[Re]=K,ue=Re;break}if(ue===-1)break}let _e=v[ue];_e&&_e.connect(K)}}let w=new F,P=new F;function O(U,q,K){w.setFromMatrixPosition(q.matrixWorld),P.setFromMatrixPosition(K.matrixWorld);let ue=w.distanceTo(P),_e=q.projectionMatrix.elements,Re=K.projectionMatrix.elements,Ie=_e[14]/(_e[10]-1),Pe=_e[14]/(_e[10]+1),ze=(_e[9]+1)/_e[5],B=(_e[9]-1)/_e[5],ve=(_e[8]-1)/_e[0],re=(Re[8]+1)/Re[0],le=Ie*ve,ie=Ie*re,He=ue/(-ve+re),Ce=He*-ve;q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ce),U.translateZ(He),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let L=Ie+He,R=Pe+He,$=le-Ce,xe=ie+(ue-Ce),fe=ze*Pe/R*L,de=B*Pe/R*L;U.projectionMatrix.makePerspective($,xe,fe,de,L,R),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function H(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;E.near=M.near=y.near=U.near,E.far=M.far=y.far=U.far,(T!==E.near||z!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,z=E.far);let q=U.parent,K=E.cameras;H(E,q);for(let ue=0;ue<K.length;ue++)H(K[ue],q);K.length===2?O(E,y,M):E.projectionMatrix.copy(y.projectionMatrix),W(U,E,q)};function W(U,q,K){K===null?U.matrix.copy(q.matrixWorld):(U.matrix.copy(K.matrixWorld),U.matrix.invert(),U.matrix.multiply(q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=nl*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(U){l=U,p!==null&&(p.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let I=null;function k(U,q){if(h=q.getViewerPose(c||o),x=q,h!==null){let K=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ue=!1;K.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let _e=0;_e<K.length;_e++){let Re=K[_e],Ie=null;if(m!==null)Ie=m.getViewport(Re);else{let ze=u.getViewSubImage(p,Re);Ie=ze.viewport,_e===0&&(e.setRenderTargetTextures(d,ze.colorTexture,p.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(d))}let Pe=b[_e];Pe===void 0&&(Pe=new vn,Pe.layers.enable(_e),Pe.viewport=new It,b[_e]=Pe),Pe.matrix.fromArray(Re.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Re.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),_e===0&&(E.matrix.copy(Pe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(Pe)}}for(let K=0;K<v.length;K++){let ue=_[K],_e=v[K];ue!==null&&_e!==void 0&&_e.update(ue,q,c||o)}I&&I(U,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),x=null}let Z=new Fp;Z.setAnimationLoop(k),this.setAnimationLoop=function(U){I=U},this.dispose=function(){}}};No=class{constructor(e={}){let{canvas:t=ox(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=ds,this.toneMappingExposure=1;let _=this,S=!1,A=0,y=0,M=null,b=-1,E=null,T=new It,z=new It,V=null,D=new Oe(0),C=0,w=t.width,P=t.height,O=1,H=null,W=null,I=new It(0,0,w,P),k=new It(0,0,w,P),Z=!1,U=new Uo,q=!1,K=!1,ue=null,_e=new pt,Re=new ce,Ie=new F,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return M===null?O:1}let B=i;function ve(N,Y){for(let Q=0;Q<N.length;Q++){let ne=N[Q],j=t.getContext(ne,Y);if(j!==null)return j}return null}try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",te,!1),B===null){let Y=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Y.shift(),B=ve(Y,N),B===null)throw ve(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let re,le,ie,He,Ce,L,R,$,xe,fe,de,Fe,Se,De,We,Je,ge,dt,st,Ye,Ge,J,oe,ye;function Te(){re=new my(B),le=new cy(B,re,e),re.init(le),J=new ZM(B,re,le),ie=new XM(B,re,le),He=new _y(B),Ce=new DM,L=new qM(B,re,ie,Ce,le,J,He),R=new uy(_),$=new py(_),xe=new Tx(B,le),oe=new ay(B,re,xe,le),fe=new gy(B,xe,He,oe),de=new Ey(B,fe,xe,He),st=new My(B,le,L),Je=new hy(Ce),Fe=new LM(_,R,$,re,le,oe,Je),Se=new $M(_,Ce),De=new NM,We=new kM(re,le),dt=new oy(_,R,$,ie,de,p,l),ge=new WM(_,de,le),ye=new JM(B,He,le,ie),Ye=new ly(B,re,He,le),Ge=new xy(B,re,He,le),He.programs=Fe.programs,_.capabilities=le,_.extensions=re,_.properties=Ce,_.renderLists=De,_.shadowMap=ge,_.state=ie,_.info=He}Te();let Ae=new Zh(_,B);this.xr=Ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let N=re.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=re.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(N){N!==void 0&&(O=N,this.setSize(w,P,!1))},this.getSize=function(N){return N.set(w,P)},this.setSize=function(N,Y,Q=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=N,P=Y,t.width=Math.floor(N*O),t.height=Math.floor(Y*O),Q===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(w*O,P*O).floor()},this.setDrawingBufferSize=function(N,Y,Q){w=N,P=Y,O=Q,t.width=Math.floor(N*Q),t.height=Math.floor(Y*Q),this.setViewport(0,0,N,Y)},this.getCurrentViewport=function(N){return N.copy(T)},this.getViewport=function(N){return N.copy(I)},this.setViewport=function(N,Y,Q,ne){N.isVector4?I.set(N.x,N.y,N.z,N.w):I.set(N,Y,Q,ne),ie.viewport(T.copy(I).multiplyScalar(O).floor())},this.getScissor=function(N){return N.copy(k)},this.setScissor=function(N,Y,Q,ne){N.isVector4?k.set(N.x,N.y,N.z,N.w):k.set(N,Y,Q,ne),ie.scissor(z.copy(k).multiplyScalar(O).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(N){ie.setScissorTest(Z=N)},this.setOpaqueSort=function(N){H=N},this.setTransparentSort=function(N){W=N},this.getClearColor=function(N){return N.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(N=!0,Y=!0,Q=!0){let ne=0;if(N){let j=!1;if(M!==null){let Ne=M.texture.format;j=Ne===Ip||Ne===Pp||Ne===Cp}if(j){let Ne=M.texture.type,Be=Ne===fs||Ne===cs||Ne===wu||Ne===Vs||Ne===Ap||Ne===Rp,qe=dt.getClearColor(),$e=dt.getClearAlpha(),rt=qe.r,Qe=qe.g,et=qe.b;Be?(m[0]=rt,m[1]=Qe,m[2]=et,m[3]=$e,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=rt,x[1]=Qe,x[2]=et,x[3]=$e,B.clearBufferiv(B.COLOR,0,x))}else ne|=B.COLOR_BUFFER_BIT}Y&&(ne|=B.DEPTH_BUFFER_BIT),Q&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",te,!1),De.dispose(),We.dispose(),Ce.dispose(),R.dispose(),$.dispose(),de.dispose(),oe.dispose(),ye.dispose(),Fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",At),Ae.removeEventListener("sessionend",ct),ue&&(ue.dispose(),ue=null),Qt.stop()};function se(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let N=He.autoReset,Y=ge.enabled,Q=ge.autoUpdate,ne=ge.needsUpdate,j=ge.type;Te(),He.autoReset=N,ge.enabled=Y,ge.autoUpdate=Q,ge.needsUpdate=ne,ge.type=j}function te(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ae(N){let Y=N.target;Y.removeEventListener("dispose",ae),Ee(Y)}function Ee(N){me(N),Ce.remove(N)}function me(N){let Y=Ce.get(N).programs;Y!==void 0&&(Y.forEach(function(Q){Fe.releaseProgram(Q)}),N.isShaderMaterial&&Fe.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,Q,ne,j,Ne){Y===null&&(Y=Pe);let Be=j.isMesh&&j.matrixWorld.determinant()<0,qe=og(N,Y,Q,ne,j);ie.setMaterial(ne,Be);let $e=Q.index,rt=1;if(ne.wireframe===!0){if($e=fe.getWireframeAttribute(Q),$e===void 0)return;rt=2}let Qe=Q.drawRange,et=Q.attributes.position,en=Qe.start*rt,qn=(Qe.start+Qe.count)*rt;Ne!==null&&(en=Math.max(en,Ne.start*rt),qn=Math.min(qn,(Ne.start+Ne.count)*rt)),$e!==null?(en=Math.max(en,0),qn=Math.min(qn,$e.count)):et!=null&&(en=Math.max(en,0),qn=Math.min(qn,et.count));let cn=qn-en;if(cn<0||cn===1/0)return;oe.setup(j,ne,qe,Q,$e);let Ni,Gt=Ye;if($e!==null&&(Ni=xe.get($e),Gt=Ge,Gt.setIndex(Ni)),j.isMesh)ne.wireframe===!0?(ie.setLineWidth(ne.wireframeLinewidth*ze()),Gt.setMode(B.LINES)):Gt.setMode(B.TRIANGLES);else if(j.isLine){let at=ne.linewidth;at===void 0&&(at=1),ie.setLineWidth(at*ze()),j.isLineSegments?Gt.setMode(B.LINES):j.isLineLoop?Gt.setMode(B.LINE_LOOP):Gt.setMode(B.LINE_STRIP)}else j.isPoints?Gt.setMode(B.POINTS):j.isSprite&&Gt.setMode(B.TRIANGLES);if(j.isBatchedMesh)Gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Gt.renderInstances(en,cn,j.count);else if(Q.isInstancedBufferGeometry){let at=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,zc=Math.min(Q.instanceCount,at);Gt.renderInstances(en,cn,zc)}else Gt.render(en,cn)};function Ke(N,Y,Q){N.transparent===!0&&N.side===bt&&N.forceSinglePass===!1?(N.side=dn,N.needsUpdate=!0,ma(N,Y,Q),N.side=ps,N.needsUpdate=!0,ma(N,Y,Q),N.side=bt):ma(N,Y,Q)}this.compile=function(N,Y,Q=null){Q===null&&(Q=N),f=We.get(Q),f.init(),v.push(f),Q.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),N!==Q&&N.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),f.setupLights(_._useLegacyLights);let ne=new Set;return N.traverse(function(j){let Ne=j.material;if(Ne)if(Array.isArray(Ne))for(let Be=0;Be<Ne.length;Be++){let qe=Ne[Be];Ke(qe,Q,j),ne.add(qe)}else Ke(Ne,Q,j),ne.add(Ne)}),v.pop(),f=null,ne},this.compileAsync=function(N,Y,Q=null){let ne=this.compile(N,Y,Q);return new Promise(j=>{function Ne(){if(ne.forEach(function(Be){Ce.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){j(N);return}setTimeout(Ne,10)}re.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let je=null;function Mt(N){je&&je(N)}function At(){Qt.stop()}function ct(){Qt.start()}let Qt=new Fp;Qt.setAnimationLoop(Mt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(N){je=N,Ae.setAnimationLoop(N),N===null?Qt.stop():Qt.start()},Ae.addEventListener("sessionstart",At),Ae.addEventListener("sessionend",ct),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(Y),Y=Ae.getCamera()),N.isScene===!0&&N.onBeforeRender(_,N,Y,M),f=We.get(N,v.length),f.init(),v.push(f),_e.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),U.setFromProjectionMatrix(_e),K=this.localClippingEnabled,q=Je.init(this.clippingPlanes,K),g=De.get(N,d.length),g.init(),d.push(g),Xn(N,Y,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(H,W),this.info.render.frame++,q===!0&&Je.beginShadows();let Q=f.state.shadowsArray;if(ge.render(Q,N,Y),q===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(g,N),f.setupLights(_._useLegacyLights),Y.isArrayCamera){let ne=Y.cameras;for(let j=0,Ne=ne.length;j<Ne;j++){let Be=ne[j];ur(g,N,Be,Be.viewport)}}else ur(g,N,Y);M!==null&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),N.isScene===!0&&N.onAfterRender(_,N,Y),oe.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Xn(N,Y,Q,ne){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)Q=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||U.intersectsSprite(N)){ne&&Ie.setFromMatrixPosition(N.matrixWorld).applyMatrix4(_e);let Be=de.update(N),qe=N.material;qe.visible&&g.push(N,Be,qe,Q,Ie.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||U.intersectsObject(N))){let Be=de.update(N),qe=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ie.copy(N.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ie.copy(Be.boundingSphere.center)),Ie.applyMatrix4(N.matrixWorld).applyMatrix4(_e)),Array.isArray(qe)){let $e=Be.groups;for(let rt=0,Qe=$e.length;rt<Qe;rt++){let et=$e[rt],en=qe[et.materialIndex];en&&en.visible&&g.push(N,Be,en,Q,Ie.z,et)}}else qe.visible&&g.push(N,Be,qe,Q,Ie.z,null)}}let Ne=N.children;for(let Be=0,qe=Ne.length;Be<qe;Be++)Xn(Ne[Be],Y,Q,ne)}function ur(N,Y,Q,ne){let j=N.opaque,Ne=N.transmissive,Be=N.transparent;f.setupLightsView(Q),q===!0&&Je.setGlobalState(_.clippingPlanes,Q),Ne.length>0&&mo(j,Ne,Y,Q),ne&&ie.viewport(T.copy(ne)),j.length>0&&pa(j,Y,Q),Ne.length>0&&pa(Ne,Y,Q),Be.length>0&&pa(Be,Y,Q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function mo(N,Y,Q,ne){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Ne=le.isWebGL2;ue===null&&(ue=new Nn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?pi:fs,minFilter:Lo,samples:Ne?4:0})),_.getDrawingBufferSize(Re),Ne?ue.setSize(Re.x,Re.y):ue.setSize(Dh(Re.x),Dh(Re.y));let Be=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(D),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();let qe=_.toneMapping;_.toneMapping=ds,pa(N,Q,ne),L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue);let $e=!1;for(let rt=0,Qe=Y.length;rt<Qe;rt++){let et=Y[rt],en=et.object,qn=et.geometry,cn=et.material,Ni=et.group;if(cn.side===bt&&en.layers.test(ne.layers)){let Gt=cn.side;cn.side=dn,cn.needsUpdate=!0,Dd(en,Q,ne,qn,cn,Ni),cn.side=Gt,cn.needsUpdate=!0,$e=!0}}$e===!0&&(L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue)),_.setRenderTarget(Be),_.setClearColor(D,C),_.toneMapping=qe}function pa(N,Y,Q){let ne=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Ne=N.length;j<Ne;j++){let Be=N[j],qe=Be.object,$e=Be.geometry,rt=ne===null?Be.material:ne,Qe=Be.group;qe.layers.test(Q.layers)&&Dd(qe,Y,Q,$e,rt,Qe)}}function Dd(N,Y,Q,ne,j,Ne){N.onBeforeRender(_,Y,Q,ne,j,Ne),N.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),j.onBeforeRender(_,Y,Q,ne,N,Ne),j.transparent===!0&&j.side===bt&&j.forceSinglePass===!1?(j.side=dn,j.needsUpdate=!0,_.renderBufferDirect(Q,Y,ne,j,N,Ne),j.side=ps,j.needsUpdate=!0,_.renderBufferDirect(Q,Y,ne,j,N,Ne),j.side=bt):_.renderBufferDirect(Q,Y,ne,j,N,Ne),N.onAfterRender(_,Y,Q,ne,j,Ne)}function ma(N,Y,Q){Y.isScene!==!0&&(Y=Pe);let ne=Ce.get(N),j=f.state.lights,Ne=f.state.shadowsArray,Be=j.state.version,qe=Fe.getParameters(N,j.state,Ne,Y,Q),$e=Fe.getProgramCacheKey(qe),rt=ne.programs;ne.environment=N.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(N.isMeshStandardMaterial?$:R).get(N.envMap||ne.environment),rt===void 0&&(N.addEventListener("dispose",ae),rt=new Map,ne.programs=rt);let Qe=rt.get($e);if(Qe!==void 0){if(ne.currentProgram===Qe&&ne.lightsStateVersion===Be)return Nd(N,qe),Qe}else qe.uniforms=Fe.getUniforms(N),N.onBuild(Q,qe,_),N.onBeforeCompile(qe,_),Qe=Fe.acquireProgram(qe,$e),rt.set($e,Qe),ne.uniforms=qe.uniforms;let et=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(et.clippingPlanes=Je.uniform),Nd(N,qe),ne.needsLights=lg(N),ne.lightsStateVersion=Be,ne.needsLights&&(et.ambientLightColor.value=j.state.ambient,et.lightProbe.value=j.state.probe,et.directionalLights.value=j.state.directional,et.directionalLightShadows.value=j.state.directionalShadow,et.spotLights.value=j.state.spot,et.spotLightShadows.value=j.state.spotShadow,et.rectAreaLights.value=j.state.rectArea,et.ltc_1.value=j.state.rectAreaLTC1,et.ltc_2.value=j.state.rectAreaLTC2,et.pointLights.value=j.state.point,et.pointLightShadows.value=j.state.pointShadow,et.hemisphereLights.value=j.state.hemi,et.directionalShadowMap.value=j.state.directionalShadowMap,et.directionalShadowMatrix.value=j.state.directionalShadowMatrix,et.spotShadowMap.value=j.state.spotShadowMap,et.spotLightMatrix.value=j.state.spotLightMatrix,et.spotLightMap.value=j.state.spotLightMap,et.pointShadowMap.value=j.state.pointShadowMap,et.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=Qe,ne.uniformsList=null,Qe}function Ud(N){if(N.uniformsList===null){let Y=N.currentProgram.getUniforms();N.uniformsList=zr.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Nd(N,Y){let Q=Ce.get(N);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function og(N,Y,Q,ne,j){Y.isScene!==!0&&(Y=Pe),L.resetTextureUnits();let Ne=Y.fog,Be=ne.isMeshStandardMaterial?Y.environment:null,qe=M===null?_.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:qi,$e=(ne.isMeshStandardMaterial?$:R).get(ne.envMap||Be),rt=ne.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!Q.morphAttributes.position,en=!!Q.morphAttributes.normal,qn=!!Q.morphAttributes.color,cn=ds;ne.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(cn=_.toneMapping);let Ni=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Gt=Ni!==void 0?Ni.length:0,at=Ce.get(ne),zc=f.state.lights;if(q===!0&&(K===!0||N!==E)){let ei=N===E&&ne.id===b;Je.setState(ne,N,ei)}let Yt=!1;ne.version===at.__version?(at.needsLights&&at.lightsStateVersion!==zc.state.version||at.outputColorSpace!==qe||j.isBatchedMesh&&at.batching===!1||!j.isBatchedMesh&&at.batching===!0||j.isInstancedMesh&&at.instancing===!1||!j.isInstancedMesh&&at.instancing===!0||j.isSkinnedMesh&&at.skinning===!1||!j.isSkinnedMesh&&at.skinning===!0||j.isInstancedMesh&&at.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&at.instancingColor===!1&&j.instanceColor!==null||at.envMap!==$e||ne.fog===!0&&at.fog!==Ne||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Je.numPlanes||at.numIntersection!==Je.numIntersection)||at.vertexAlphas!==rt||at.vertexTangents!==Qe||at.morphTargets!==et||at.morphNormals!==en||at.morphColors!==qn||at.toneMapping!==cn||le.isWebGL2===!0&&at.morphTargetsCount!==Gt)&&(Yt=!0):(Yt=!0,at.__version=ne.version);let Ds=at.currentProgram;Yt===!0&&(Ds=ma(ne,Y,j));let Od=!1,go=!1,Hc=!1,Sn=Ds.getUniforms(),Us=at.uniforms;if(ie.useProgram(Ds.program)&&(Od=!0,go=!0,Hc=!0),ne.id!==b&&(b=ne.id,go=!0),Od||E!==N){Sn.setValue(B,"projectionMatrix",N.projectionMatrix),Sn.setValue(B,"viewMatrix",N.matrixWorldInverse);let ei=Sn.map.cameraPosition;ei!==void 0&&ei.setValue(B,Ie.setFromMatrixPosition(N.matrixWorld)),le.logarithmicDepthBuffer&&Sn.setValue(B,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Sn.setValue(B,"isOrthographic",N.isOrthographicCamera===!0),E!==N&&(E=N,go=!0,Hc=!0)}if(j.isSkinnedMesh){Sn.setOptional(B,j,"bindMatrix"),Sn.setOptional(B,j,"bindMatrixInverse");let ei=j.skeleton;ei&&(le.floatVertexTextures?(ei.boneTexture===null&&ei.computeBoneTexture(),Sn.setValue(B,"boneTexture",ei.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Sn.setOptional(B,j,"batchingTexture"),Sn.setValue(B,"batchingTexture",j._matricesTexture,L));let Fc=Q.morphAttributes;if((Fc.position!==void 0||Fc.normal!==void 0||Fc.color!==void 0&&le.isWebGL2===!0)&&st.update(j,Q,Ds),(go||at.receiveShadow!==j.receiveShadow)&&(at.receiveShadow=j.receiveShadow,Sn.setValue(B,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Us.envMap.value=$e,Us.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),go&&(Sn.setValue(B,"toneMappingExposure",_.toneMappingExposure),at.needsLights&&ag(Us,Hc),Ne&&ne.fog===!0&&Se.refreshFogUniforms(Us,Ne),Se.refreshMaterialUniforms(Us,ne,O,P,ue),zr.upload(B,Ud(at),Us,L)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(zr.upload(B,Ud(at),Us,L),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Sn.setValue(B,"center",j.center),Sn.setValue(B,"modelViewMatrix",j.modelViewMatrix),Sn.setValue(B,"normalMatrix",j.normalMatrix),Sn.setValue(B,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let ei=ne.uniformsGroups;for(let Bc=0,cg=ei.length;Bc<cg;Bc++)if(le.isWebGL2){let zd=ei[Bc];ye.update(zd,Ds),ye.bind(zd,Ds)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ds}function ag(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function lg(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(N,Y,Q){Ce.get(N.texture).__webglTexture=Y,Ce.get(N.depthTexture).__webglTexture=Q;let ne=Ce.get(N);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=Q===void 0,ne.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,Y){let Q=Ce.get(N);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,Q=0){M=N,A=Y,y=Q;let ne=!0,j=null,Ne=!1,Be=!1;if(N){let $e=Ce.get(N);$e.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(B.FRAMEBUFFER,null),ne=!1):$e.__webglFramebuffer===void 0?L.setupRenderTarget(N):$e.__hasExternalTextures&&L.rebindTextures(N,Ce.get(N.texture).__webglTexture,Ce.get(N.depthTexture).__webglTexture);let rt=N.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Be=!0);let Qe=Ce.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?j=Qe[Y][Q]:j=Qe[Y],Ne=!0):le.isWebGL2&&N.samples>0&&L.useMultisampledRTT(N)===!1?j=Ce.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[Q]:j=Qe,T.copy(N.viewport),z.copy(N.scissor),V=N.scissorTest}else T.copy(I).multiplyScalar(O).floor(),z.copy(k).multiplyScalar(O).floor(),V=Z;if(ie.bindFramebuffer(B.FRAMEBUFFER,j)&&le.drawBuffers&&ne&&ie.drawBuffers(N,j),ie.viewport(T),ie.scissor(z),ie.setScissorTest(V),Ne){let $e=Ce.get(N.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$e.__webglTexture,Q)}else if(Be){let $e=Ce.get(N.texture),rt=Y||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.__webglTexture,Q||0,rt)}b=-1},this.readRenderTargetPixels=function(N,Y,Q,ne,j,Ne,Be){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Ce.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(qe=qe[Be]),qe){ie.bindFramebuffer(B.FRAMEBUFFER,qe);try{let $e=N.texture,rt=$e.format,Qe=$e.type;if(rt!==fi&&J.convert(rt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let et=Qe===pi&&(re.has("EXT_color_buffer_half_float")||le.isWebGL2&&re.has("EXT_color_buffer_float"));if(Qe!==fs&&J.convert(Qe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===hs&&(le.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ne&&Q>=0&&Q<=N.height-j&&B.readPixels(Y,Q,ne,j,J.convert(rt),J.convert(Qe),Ne)}finally{let $e=M!==null?Ce.get(M).__webglFramebuffer:null;ie.bindFramebuffer(B.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(N,Y,Q=0){let ne=Math.pow(2,-Q),j=Math.floor(Y.image.width*ne),Ne=Math.floor(Y.image.height*ne);L.setTexture2D(Y,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,N.x,N.y,j,Ne),ie.unbindTexture()},this.copyTextureToTexture=function(N,Y,Q,ne=0){let j=Y.image.width,Ne=Y.image.height,Be=J.convert(Q.format),qe=J.convert(Q.type);L.setTexture2D(Q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment),Y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ne,N.x,N.y,j,Ne,Be,qe,Y.image.data):Y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ne,N.x,N.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Be,Y.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ne,N.x,N.y,Be,qe,Y.image),ne===0&&Q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(N,Y,Q,ne,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=N.max.x-N.min.x+1,Be=N.max.y-N.min.y+1,qe=N.max.z-N.min.z+1,$e=J.convert(ne.format),rt=J.convert(ne.type),Qe;if(ne.isData3DTexture)L.setTexture3D(ne,0),Qe=B.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)L.setTexture2DArray(ne,0),Qe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ne.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ne.unpackAlignment);let et=B.getParameter(B.UNPACK_ROW_LENGTH),en=B.getParameter(B.UNPACK_IMAGE_HEIGHT),qn=B.getParameter(B.UNPACK_SKIP_PIXELS),cn=B.getParameter(B.UNPACK_SKIP_ROWS),Ni=B.getParameter(B.UNPACK_SKIP_IMAGES),Gt=Q.isCompressedTexture?Q.mipmaps[j]:Q.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,N.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,N.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,N.min.z),Q.isDataTexture||Q.isData3DTexture?B.texSubImage3D(Qe,j,Y.x,Y.y,Y.z,Ne,Be,qe,$e,rt,Gt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Qe,j,Y.x,Y.y,Y.z,Ne,Be,qe,$e,Gt.data)):B.texSubImage3D(Qe,j,Y.x,Y.y,Y.z,Ne,Be,qe,$e,rt,Gt),B.pixelStorei(B.UNPACK_ROW_LENGTH,et),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,en),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qn),B.pixelStorei(B.UNPACK_SKIP_ROWS,cn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ni),j===0&&ne.generateMipmaps&&B.generateMipmap(Qe),ie.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?L.setTextureCube(N,0):N.isData3DTexture?L.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?L.setTexture2DArray(N,0):L.setTexture2D(N,0),ie.unbindTexture()},this.resetState=function(){A=0,y=0,M=null,ie.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Tu?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===Il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Xs:Dp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xs?vt:qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yh=class extends No{};Yh.prototype.isWebGL1Renderer=!0;pl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wr=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ml=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new F,Oo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qs=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mo=new F,Cr=new F,Pr=new F,Ir=new ce,Eo=new ce,Xp=new pt,Ha=new F,bo=new F,Fa=new F,rp=new ce,vh=new ce,op=new ce,Xr=class extends Jt{constructor(e=new qs){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ml(t,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Oo(i,3,0,!1)),Rr.setAttribute("uv",new Oo(i,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),Xp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Pr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ba(Ha.set(-.5,-.5,0),Pr,o,Cr,s,r),Ba(bo.set(.5,-.5,0),Pr,o,Cr,s,r),Ba(Fa.set(.5,.5,0),Pr,o,Cr,s,r),rp.set(0,0),vh.set(1,0),op.set(1,1);let a=e.ray.intersectTriangle(Ha,bo,Fa,!1,Mo);if(a===null&&(Ba(bo.set(-.5,.5,0),Pr,o,Cr,s,r),vh.set(0,1),a=e.ray.intersectTriangle(Ha,Fa,bo,!1,Mo),a===null))return;let l=e.ray.origin.distanceTo(Mo);l<e.near||l>e.far||t.push({distance:l,point:Mo.clone(),uv:Gs.getInterpolation(Mo,Ha,bo,Fa,rp,vh,op,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};zo=class extends fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Lr=new pt,ap=new pt,ka=[],lp=new Zi,KM=new pt,So=new X,wo=new Yi,yt=class extends X{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zo(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,KM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),lp.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(lp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),wo.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),e.ray.intersectsSphere(wo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Lr),ap.multiplyMatrices(i,Lr),So.matrixWorld=ap,So.raycast(e,ka);for(let o=0,a=ka.length;o<a;o++){let l=ka[o];l.instanceId=r,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ho=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cp=new F,hp=new F,up=new pt,yh=new Do,Ga=new Yi,$h=class extends Jt{constructor(e=new Ut,t=new Ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)cp.fromBufferAttribute(t,s-1),hp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=cp.distanceTo(hp);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;up.copy(s).invert(),yh.copy(e.ray).applyMatrix4(up);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,u=new F,p=new F,m=this.isLineSegments?2:1,x=i.index,f=i.attributes.position;if(x!==null){let d=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let _=d,S=v-1;_<S;_+=m){let A=x.getX(_),y=x.getX(_+1);if(c.fromBufferAttribute(f,A),h.fromBufferAttribute(f,y),yh.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(p);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=d,S=v-1;_<S;_+=m){if(c.fromBufferAttribute(f,_),h.fromBufferAttribute(f,_+1),yh.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(p);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},dp=new F,fp=new F,gl=class extends $h{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)dp.fromBufferAttribute(t,s),fp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dp.distanceTo(fp);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fo=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pp=new pt,Jh=new Do,Va=new Yi,Wa=new F,xl=class extends Jt{constructor(e=new Ut,t=new Fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;pp.copy(s).invert(),Jh.copy(e.ray).applyMatrix4(pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=p,g=m;x<g;x++){let f=c.getX(x);Wa.fromBufferAttribute(u,f),mp(Wa,f,l,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m;x<g;x++)Wa.fromBufferAttribute(u,x),mp(Wa,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};an=class extends si{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new F,s=[],r=[],o=[],a=new F,l=new pt;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(un(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(un(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bo=class extends ri{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ce,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kh=class extends Bo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Xa=new F,Mh=new Ru,Eh=new Ru,bh=new Ru,jh=class extends ri{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xa.subVectors(s[0],s[1]).add(s[0]),c=Xa);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(h),m);g<1e-4&&(g=1),x<1e-4&&(x=g),f<1e-4&&(f=g),Mh.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,x,g,f),Eh.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,x,g,f),bh.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,x,g,f)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Eh.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),bh.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return i.set(Mh.calc(l),Eh.calc(l),bh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};_l=class extends ri{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Po(e,s.x,r.x,o.x,a.x),Po(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qh=class extends ri{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Po(e,s.x,r.x,o.x,a.x),Po(e,s.y,r.y,o.y,a.y),Po(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vl=class extends ri{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eu=class extends ri{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends ri{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Co(e,s.x,r.x,o.x),Co(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tu=class extends ri{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Co(e,s.x,r.x,o.x),Co(e,s.y,r.y,o.y),Co(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(gp(a,l.x,c.x,h.x,u.x),gp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},nu=Object.freeze({__proto__:null,ArcCurve:Kh,CatmullRomCurve3:jh,CubicBezierCurve:_l,CubicBezierCurve3:Qh,EllipseCurve:Bo,LineCurve:vl,LineCurve3:eu,QuadraticBezierCurve:yl,QuadraticBezierCurve3:tu,SplineCurve:Ml}),iu=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new nu[s.type]().fromJSON(s))}return this}},Si=class extends iu{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new vl(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new yl(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new _l(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ml(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Bo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},su=class n extends Ut{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=un(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new F,p=new ce,m=new F,x=new F,g=new F,f=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,m.x=d*1,m.y=-f,m.z=d*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:f=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,m.x=d*1,m.y=-f,m.z=d*0,x.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(x)}for(let v=0;v<=t;v++){let _=i+v*h*s,S=Math.sin(_),A=Math.cos(_);for(let y=0;y<=e.length-1;y++){u.x=e[y].x*S,u.y=e[y].y,u.z=e[y].x*A,o.push(u.x,u.y,u.z),p.x=v/t,p.y=y/(e.length-1),a.push(p.x,p.y);let M=l[3*y+0]*S,b=l[3*y+1],E=l[3*y+0]*A;c.push(M,b,E)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let S=_+v*e.length,A=S,y=S+e.length,M=S+e.length+1,b=S+1;r.push(A,y,b),r.push(M,b,y)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},El=class n extends su{constructor(e=1,t=1,i=4,s=8){let r=new Si;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},$i=class n extends Ut{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let m=i+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ke=class n extends Ut{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],x=0,g=[],f=i/2,d=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(p,3)),this.setAttribute("uv",new nt(m,2));function v(){let S=new F,A=new F,y=0,M=(t-e)/i;for(let b=0;b<=r;b++){let E=[],T=b/r,z=T*(t-e)+e;for(let V=0;V<=s;V++){let D=V/s,C=D*l+a,w=Math.sin(C),P=Math.cos(C);A.x=z*w,A.y=-T*i+f,A.z=z*P,u.push(A.x,A.y,A.z),S.set(w,M,P).normalize(),p.push(S.x,S.y,S.z),m.push(D,1-T),E.push(x++)}g.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){let T=g[E][b],z=g[E+1][b],V=g[E+1][b+1],D=g[E][b+1];h.push(T,z,D),h.push(z,V,D),y+=6}c.addGroup(d,y,0),d+=y}function _(S){let A=x,y=new ce,M=new F,b=0,E=S===!0?e:t,T=S===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,f*T,0),p.push(0,T,0),m.push(.5,.5),x++;let z=x;for(let V=0;V<=s;V++){let C=V/s*l+a,w=Math.cos(C),P=Math.sin(C);M.x=E*P,M.y=f*T,M.z=E*w,u.push(M.x,M.y,M.z),p.push(0,T,0),y.x=w*.5+.5,y.y=P*.5*T+.5,m.push(y.x,y.y),x++}for(let V=0;V<s;V++){let D=A+V,C=z+V;S===!0?h.push(C,C+1,D):h.push(C+1,C,D),b+=3}c.addGroup(d,b,S===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gs=class n extends ke{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ru=class n extends Ut{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new F,S=new F,A=new F;for(let y=0;y<t.length;y+=3)m(t[y+0],_),m(t[y+1],S),m(t[y+2],A),l(_,S,A,v)}function l(v,_,S,A){let y=A+1,M=[];for(let b=0;b<=y;b++){M[b]=[];let E=v.clone().lerp(S,b/y),T=_.clone().lerp(S,b/y),z=y-b;for(let V=0;V<=z;V++)V===0&&b===y?M[b][V]=E:M[b][V]=E.clone().lerp(T,V/z)}for(let b=0;b<y;b++)for(let E=0;E<2*(y-b)-1;E++){let T=Math.floor(E/2);E%2===0?(p(M[b][T+1]),p(M[b+1][T]),p(M[b][T])):(p(M[b][T+1]),p(M[b+1][T+1]),p(M[b+1][T]))}}function c(v){let _=new F;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(v),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function h(){let v=new F;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let S=f(v)/2/Math.PI+.5,A=d(v)/Math.PI+.5;o.push(S,1-A)}x(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],S=o[v+2],A=o[v+4],y=Math.max(_,S,A),M=Math.min(_,S,A);y>.9&&M<.1&&(_<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function p(v){r.push(v.x,v.y,v.z)}function m(v,_){let S=v*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function x(){let v=new F,_=new F,S=new F,A=new F,y=new ce,M=new ce,b=new ce;for(let E=0,T=0;E<r.length;E+=9,T+=6){v.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),y.set(o[T+0],o[T+1]),M.set(o[T+2],o[T+3]),b.set(o[T+4],o[T+5]),A.copy(v).add(_).add(S).divideScalar(3);let z=f(A);g(y,T+0,v,z),g(M,T+2,_,z),g(b,T+4,S,z)}}function g(v,_,S,A){A<0&&v.x===1&&(o[_]=v.x-1),S.x===0&&S.z===0&&(o[_]=A/2/Math.PI+.5)}function f(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Ji=class extends Si{constructor(e){super(e),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Si().fromJSON(s))}return this}},r1={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=qp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,p,m;if(i&&(r=h1(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let x=t;x<s;x+=t)u=n[x],p=n[x+1],u<a&&(a=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return ko(r,o,t,a,l,m,0),o}};Io=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];_p(e),vp(i,e);let o=e.length;t.forEach(_p);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,vp(i,t[l]);let a=r1.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};xs=class n extends Ut{constructor(e=new Ji([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:E1,_,S=!1,A,y,M,b;d&&(_=d.getSpacedPoints(h),S=!0,p=!1,A=d.computeFrenetFrames(h,!1),y=new F,M=new F,b=new F),p||(f=0,m=0,x=0,g=0);let E=a.extractPoints(c),T=E.shape,z=E.holes;if(!Io.isClockWise(T)){T=T.reverse();for(let B=0,ve=z.length;B<ve;B++){let re=z[B];Io.isClockWise(re)&&(z[B]=re.reverse())}}let D=Io.triangulateShape(T,z),C=T;for(let B=0,ve=z.length;B<ve;B++){let re=z[B];T=T.concat(re)}function w(B,ve,re){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(ve,re)}let P=T.length,O=D.length;function H(B,ve,re){let le,ie,He,Ce=B.x-ve.x,L=B.y-ve.y,R=re.x-B.x,$=re.y-B.y,xe=Ce*Ce+L*L,fe=Ce*$-L*R;if(Math.abs(fe)>Number.EPSILON){let de=Math.sqrt(xe),Fe=Math.sqrt(R*R+$*$),Se=ve.x-L/de,De=ve.y+Ce/de,We=re.x-$/Fe,Je=re.y+R/Fe,ge=((We-Se)*$-(Je-De)*R)/(Ce*$-L*R);le=Se+Ce*ge-B.x,ie=De+L*ge-B.y;let dt=le*le+ie*ie;if(dt<=2)return new ce(le,ie);He=Math.sqrt(dt/2)}else{let de=!1;Ce>Number.EPSILON?R>Number.EPSILON&&(de=!0):Ce<-Number.EPSILON?R<-Number.EPSILON&&(de=!0):Math.sign(L)===Math.sign($)&&(de=!0),de?(le=-L,ie=Ce,He=Math.sqrt(xe)):(le=Ce,ie=L,He=Math.sqrt(xe/2))}return new ce(le/He,ie/He)}let W=[];for(let B=0,ve=C.length,re=ve-1,le=B+1;B<ve;B++,re++,le++)re===ve&&(re=0),le===ve&&(le=0),W[B]=H(C[B],C[re],C[le]);let I=[],k,Z=W.concat();for(let B=0,ve=z.length;B<ve;B++){let re=z[B];k=[];for(let le=0,ie=re.length,He=ie-1,Ce=le+1;le<ie;le++,He++,Ce++)He===ie&&(He=0),Ce===ie&&(Ce=0),k[le]=H(re[le],re[He],re[Ce]);I.push(k),Z=Z.concat(k)}for(let B=0;B<f;B++){let ve=B/f,re=m*Math.cos(ve*Math.PI/2),le=x*Math.sin(ve*Math.PI/2)+g;for(let ie=0,He=C.length;ie<He;ie++){let Ce=w(C[ie],W[ie],le);_e(Ce.x,Ce.y,-re)}for(let ie=0,He=z.length;ie<He;ie++){let Ce=z[ie];k=I[ie];for(let L=0,R=Ce.length;L<R;L++){let $=w(Ce[L],k[L],le);_e($.x,$.y,-re)}}}let U=x+g;for(let B=0;B<P;B++){let ve=p?w(T[B],Z[B],U):T[B];S?(M.copy(A.normals[0]).multiplyScalar(ve.x),y.copy(A.binormals[0]).multiplyScalar(ve.y),b.copy(_[0]).add(M).add(y),_e(b.x,b.y,b.z)):_e(ve.x,ve.y,0)}for(let B=1;B<=h;B++)for(let ve=0;ve<P;ve++){let re=p?w(T[ve],Z[ve],U):T[ve];S?(M.copy(A.normals[B]).multiplyScalar(re.x),y.copy(A.binormals[B]).multiplyScalar(re.y),b.copy(_[B]).add(M).add(y),_e(b.x,b.y,b.z)):_e(re.x,re.y,u/h*B)}for(let B=f-1;B>=0;B--){let ve=B/f,re=m*Math.cos(ve*Math.PI/2),le=x*Math.sin(ve*Math.PI/2)+g;for(let ie=0,He=C.length;ie<He;ie++){let Ce=w(C[ie],W[ie],le);_e(Ce.x,Ce.y,u+re)}for(let ie=0,He=z.length;ie<He;ie++){let Ce=z[ie];k=I[ie];for(let L=0,R=Ce.length;L<R;L++){let $=w(Ce[L],k[L],le);S?_e($.x,$.y+_[h-1].y,_[h-1].x+re):_e($.x,$.y,u+re)}}}q(),K();function q(){let B=s.length/3;if(p){let ve=0,re=P*ve;for(let le=0;le<O;le++){let ie=D[le];Re(ie[2]+re,ie[1]+re,ie[0]+re)}ve=h+f*2,re=P*ve;for(let le=0;le<O;le++){let ie=D[le];Re(ie[0]+re,ie[1]+re,ie[2]+re)}}else{for(let ve=0;ve<O;ve++){let re=D[ve];Re(re[2],re[1],re[0])}for(let ve=0;ve<O;ve++){let re=D[ve];Re(re[0]+P*h,re[1]+P*h,re[2]+P*h)}}i.addGroup(B,s.length/3-B,0)}function K(){let B=s.length/3,ve=0;ue(C,ve),ve+=C.length;for(let re=0,le=z.length;re<le;re++){let ie=z[re];ue(ie,ve),ve+=ie.length}i.addGroup(B,s.length/3-B,1)}function ue(B,ve){let re=B.length;for(;--re>=0;){let le=re,ie=re-1;ie<0&&(ie=B.length-1);for(let He=0,Ce=h+f*2;He<Ce;He++){let L=P*He,R=P*(He+1),$=ve+le+L,xe=ve+ie+L,fe=ve+ie+R,de=ve+le+R;Ie($,xe,fe,de)}}}function _e(B,ve,re){l.push(B),l.push(ve),l.push(re)}function Re(B,ve,re){Pe(B),Pe(ve),Pe(re);let le=s.length/3,ie=v.generateTopUV(i,s,le-3,le-2,le-1);ze(ie[0]),ze(ie[1]),ze(ie[2])}function Ie(B,ve,re,le){Pe(B),Pe(ve),Pe(le),Pe(ve),Pe(re),Pe(le);let ie=s.length/3,He=v.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);ze(He[0]),ze(He[1]),ze(He[3]),ze(He[1]),ze(He[2]),ze(He[3])}function Pe(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function ze(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return b1(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nu[s.type]().fromJSON(s)),new n(i,e.options)}},E1={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2],g=e[r*3],f=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-u),new ce(p,1-x),new ce(g,1-d)]:[new ce(a,1-l),new ce(h,1-u),new ce(m,1-x),new ce(f,1-d)]}};Ys=class n extends ru{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},mi=class n extends Ut{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,p=(t-e)/s,m=new F,x=new ce;for(let g=0;g<=s;g++){for(let f=0;f<=i;f++){let d=r+f/i*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}u+=p}for(let g=0;g<s;g++){let f=g*(i+1);for(let d=0;d<i;d++){let v=d+f,_=v,S=v+i+1,A=v+i+2,y=v+1;a.push(_,S,y),a.push(S,A,y)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Pt=class n extends Ut{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,p=new F,m=[],x=[],g=[],f=[];for(let d=0;d<=i;d++){let v=[],_=d/i,S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){let y=A/t;u.x=-e*Math.cos(s+y*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+y*r)*Math.sin(o+_*a),x.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),f.push(y+S,1-_),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){let _=h[d][v+1],S=h[d][v],A=h[d+1][v],y=h[d+1][v+1];(d!==0||o>0)&&m.push(_,S,y),(d!==i-1||l<Math.PI)&&m.push(S,A,y)}this.setIndex(m),this.setAttribute("position",new nt(x,3)),this.setAttribute("normal",new nt(g,3)),this.setAttribute("uv",new nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Wo=class n extends Ut{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,u=new F,p=new F;for(let m=0;m<=i;m++)for(let x=0;x<=s;x++){let g=x/s*r,f=m/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(g),u.y=(e+t*Math.cos(f))*Math.sin(g),u.z=t*Math.sin(f),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=s;x++){let g=(s+1)*m+x-1,f=(s+1)*(m-1)+x-1,d=(s+1)*(m-1)+x,v=(s+1)*m+x;o.push(g,f,v),o.push(f,d,v)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},bl=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pe=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Up,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wi=class extends pe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};qr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lu=class extends qr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gf,endingEnd:gf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xf:r=e,a=2*t-i;break;case _f:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xf:o=e,l=2*i-t;break;case _f:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),g=x*x,f=g*x,d=-p*f+2*p*g-p*x,v=(1+p)*f+(-1.5-2*p)*g+(-.5+p)*x+1,_=(-1-m)*f+(1.5+m)*g+.5*x,S=m*f-m*g;for(let A=0;A!==a;++A)r[A]=d*o[h+A]+v*o[c+A]+_*o[l+A]+S*o[u+A];return r}},cu=class extends qr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},hu=class extends qr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ja:t=this.InterpolantFactoryMethodDiscrete;break;case Ka:t=this.InterpolantFactoryMethodLinear;break;case Yc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ja;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&S1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,p=u-i,m=u+i;for(let x=0;x!==i;++x){let g=t[u+x];if(g!==t[p+x]||g!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Ka;$s=class extends gi{};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ja;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;uu=class extends gi{};uu.prototype.ValueTypeName="color";du=class extends gi{};du.prototype.ValueTypeName="number";fu=class extends qr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)kn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xo=class extends gi{InterpolantFactoryMethodLinear(e){return new fu(this.times,this.values,this.getValueSize(),e)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.DefaultInterpolation=Ka;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;Js=class extends gi{};Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Ja;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;pu=class extends gi{};pu.prototype.ValueTypeName="vector";mu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],x=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},w1=new mu,gu=class{constructor(e){this.manager=e!==void 0?e:w1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};gu.DEFAULT_MATERIAL_NAME="__DEFAULT";Zr=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Sl=class extends Zr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Sh=new pt,yp=new F,Mp=new F,qo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),Mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mp),t.updateMatrixWorld(),Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xu=class extends qo{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=nl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wl=class extends Zr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ep=new pt,To=new F,wh=new F,_u=class extends qo{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),To.setFromMatrixPosition(e.matrixWorld),i.position.copy(To),wh.copy(i.position),wh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wh),i.updateMatrixWorld(),s.makeTranslation(-To.x,-To.y,-To.z),Ep.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ep)}},Tl=class extends Zr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vu=class extends qo{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Al=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new vu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=bp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Cu="\\[\\]\\.:\\/",T1=new RegExp("["+Cu+"]","g"),Pu="[^"+Cu+"]",A1="[^"+Cu.replace("\\.","")+"]",R1=/((?:WC+[\/:])*)/.source.replace("WC",Pu),C1=/(WCOD+)?/.source.replace("WCOD",A1),P1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pu),I1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pu),L1=new RegExp("^"+R1+C1+P1+I1+"$"),D1=["material","materials","bones","map"],yu=class{constructor(e,t,i){let s=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T1,"")}static parseTrackName(e){let t=L1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);D1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=yu;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];gS=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var p0={};kc(p0,{RoomEnvironment:()=>rd});function ro(n){let e=new ft;return e.color.setScalar(n),e}var rd,m0=Zn(()=>{Nt();rd=class extends Wr{constructor(e=null){super();let t=new Me;t.deleteAttribute("uv");let i=new pe({side:dn}),s=new pe,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Tl(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new X(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new X(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new X(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new X(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new X(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let p=new X(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let m=new X(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let x=new X(t,ro(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let g=new X(t,ro(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);let f=new X(t,ro(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let d=new X(t,ro(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let v=new X(t,ro(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let _=new X(t,ro(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var hc,od=Zn(()=>{hc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var Kn,Pb,ad,Ib,bs,oo=Zn(()=>{Nt();Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Pb=new Gr(-1,1,1,-1,0,1),ad=class extends Ut{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},Ib=new ad,bs=class{constructor(e){this._mesh=new X(Ib,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var ao,ld=Zn(()=>{Nt();oo();ao=class extends Kn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var ra,uc,cd=Zn(()=>{oo();ra=class extends Kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},uc=class extends Kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var dc,g0=Zn(()=>{Nt();od();ld();cd();cd();dc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ao(hc),this.copyPass.material.blending=Ei,this.clock=new Rl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ra!==void 0&&(o instanceof ra?i=!0:o instanceof uc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var fc,x0=Zn(()=>{Nt();oo();fc=class extends Kn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var _0,v0=Zn(()=>{Nt();_0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var lo,y0=Zn(()=>{Nt();oo();od();v0();lo=class n extends Kn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nn(r,o,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new Nn(r,o,{type:pi});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Nn(r,o,{type:pi});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=_0;this.highPassUniforms=_s.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=hc;this.copyUniforms=_s.clone(h.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Oe,this.oldClearAlpha=1,this.basic=new ft,this.fsQuad=new bs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};lo.BlurDirectionX=new ce(1,0);lo.BlurDirectionY=new ce(0,1)});var M0,E0=Zn(()=>{M0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var pc,b0=Zn(()=>{Nt();oo();E0();pc=class extends Kn{constructor(){super();let e=M0;this.uniforms=_s.clone(e.uniforms),this.material=new bl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new bs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Eu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Su&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var S0={};kc(S0,{createPostFX:()=>Db});function Db(n,e,t){let i=new dc(n);i.addPass(new fc(e,t));let s=new lo(new ce(window.innerWidth,window.innerHeight),.35,.65,.82);i.addPass(s);let r=new ao(Lb);return i.addPass(r),i.addPass(new pc),{composer:i,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){i.setSize(o,a)},setPixelRatio(o){i.setPixelRatio(o)},render(){i.render()}}}var Lb,w0=Zn(()=>{Nt();g0();x0();y0();ld();b0();Lb={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});Nt();var Du={};kc(Du,{CAR_DEFS:()=>Ki,applyCarSkin:()=>Y1,buildCar:()=>W1,carDef:()=>Lu,effectiveStats:()=>Z1,extrudeProfile:()=>Yo,glassMat:()=>Qp,paintCar:()=>X1,paintMat:()=>jp,setWheelStyle:()=>q1});Nt();var Ki=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}},{id:"sedan",name:"Prairie Sedan",desc:"Comfy daily driver. Easy to handle.",price:6e3,colors:[7041664,1718891,15921906,7999504,1316380],stats:{topSpeed:48,accel:14,handling:1,grip:1,nitroTime:3,nitroPower:1.3}},{id:"taxi",name:"Peg City Cab",desc:"Yellow cab with a roof sign. Nimble.",price:7500,colors:[16761856,16761856,15921906],stats:{topSpeed:49,accel:15,handling:1.05,grip:1,nitroTime:3,nitroPower:1.3},extra:"taxi"},{id:"van",name:"Delivery Van",desc:"Big box on wheels. Slow, heavy, tough.",price:9e3,colors:[15921906,2060267,2976335,12589080],stats:{topSpeed:42,accel:12,handling:.8,grip:1,nitroTime:4,nitroPower:1.3}},{id:"police",name:"Interceptor",desc:"Police-spec V8 with a light bar.",price:28e3,colors:[1316380,15921906,1718891],stats:{topSpeed:60,accel:19,handling:1.1,grip:1.15,nitroTime:3.4,nitroPower:1.4},extra:"police"},{id:"hyper",name:"Aurora Hyper",desc:"The fastest thing in the city. Wings and all.",price:9e4,colors:[16735802,11032055,1622208,15921906,1316380],stats:{topSpeed:76,accel:27,handling:1.3,grip:1.4,nitroTime:3.2,nitroPower:1.55}}],Lu=n=>Ki.find(e=>e.id===n)||Ki[0],jp=n=>new wi({color:n,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),Qp=()=>new wi({color:1779509,metalness:.85,roughness:.05,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.02}),em=()=>new pe({color:14672872,metalness:1,roughness:.22}),U1=()=>new pe({color:1316378,metalness:.4,roughness:.6}),N1=()=>new pe({color:789775,roughness:.95}),O1=()=>new pe({color:12172998,metalness:1,roughness:.3}),z1=()=>new pe({color:5922404,metalness:.9,roughness:.45}),H1=()=>new pe({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),F1=()=>new pe({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),B1=()=>new pe({color:15263976,roughness:.5}),$p=(n,e,t)=>({x:n,y:e,r:t}),k1={taxi:"sedan",police:"sedan"},Iu={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},sedan:{W:1.84,wb:1.4,wheelR:.33,track:1.58,body:[[2.3,.3],[2.34,.5],[2.15,.68],[1.25,.78],[.6,.82],[-1.5,.84],[-2.1,.8],[-2.3,.62],[-2.3,.36],[-2,.22],[2,.22]],glass:[[.62,.8],[.25,1.28],[-1.05,1.3],[-1.5,.84]],roof:[[.28,1.24],[-1.08,1.26],[-1.12,1.2],[.24,1.18]],splitter:!1},van:{W:2,wb:1.6,wheelR:.36,track:1.68,body:[[2.45,.3],[2.5,.6],[2.35,.95],[1.6,1.1],[.95,1.1],[.95,2],[-2.45,2],[-2.5,1.85],[-2.5,.35],[-2.2,.24],[2.2,.24]],glass:[[1.62,1.1],[1.05,1.95],[.9,1.95],[.9,1.1]],roof:null,splitter:!1},hyper:{W:2.04,wb:1.4,wheelR:.34,track:1.72,body:[[2.4,.2],[2.45,.38],[2.2,.5],[1.2,.6],[.5,.68],[-1.3,.74],[-2,.72],[-2.35,.6],[-2.4,.38],[-2.3,.2],[-2,.14],[2,.14]],glass:[[.6,.66],[0,1],[-.9,1.02],[-1.4,.74]],roof:[[.04,.97],[-.92,.99],[-.95,.93],[0,.92]],wing:!0,splitter:!0,canards:!0},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function Yo(n,e,t,i,s=.045){i&&(n=Jp(Jp(n)));let r=new Ji;r.moveTo(n[0][0],n[0][1]);for(let l=1;l<n.length;l++)r.lineTo(n[l][0],n[l][1]);r.closePath();for(let l of i||[]){let c=new Si;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new xs(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new X(o,t);return a.castShadow=!0,a}function Jp(n){let e=[];for(let t=0;t<n.length;t++){let i=n[t],s=n[(t+1)%n.length];e.push([i[0]*.75+s[0]*.25,i[1]*.75+s[1]*.25],[i[0]*.25+s[0]*.75,i[1]*.25+s[1]*.75])}return e}var G1=()=>new pe({color:13115434,metalness:.4,roughness:.4});function V1(n,e,t){let i=new ot,s=N1(),r=new X(new ke(e,e,.2,26),s);r.rotation.z=Math.PI/2,r.castShadow=!0,i.add(r);for(let p of[-1,1]){let m=new X(new Wo(e*.86,e*.14,8,26),s);m.rotation.y=Math.PI/2,m.position.x=p*.1,i.add(m)}let o=new X(new ke(e*.5,e*.5,.24,20),z1());o.rotation.z=Math.PI/2,i.add(o);let a=new X(new Me(.1,e*.42,e*.22),G1());a.position.set(0,e*.36,e*.12),i.add(a);let l=new X(new Wo(e*.66,e*.05,8,26),t);l.rotation.y=Math.PI/2,i.add(l);let c=new ot;for(let p=0;p<10;p++){let m=new X(new Me(.04,e*.62,e*.07),t);m.position.y=e*.31;let x=new ot;x.rotation.x=p/10*Math.PI*2+(p%2?.08:0),x.add(m),c.add(x)}let h=c.clone();h.rotation.y=Math.PI,i.add(c),i.add(h);let u=new X(new ke(e*.13,e*.13,.27,12),em());return u.rotation.z=Math.PI/2,i.add(u),n==="blackout"?t.color.setHex(1513500):n==="gold"?t.color.setHex(13211182):n==="neon"&&t.color.setHex(2287359),i}function W1(n,e,t="stock"){let i=typeof n=="string"?Lu(n):n||Ki[0],s=i.id||"sport";typeof e!="number"&&(e=typeof i.color=="number"?i.color:i.colors[0]);let r=Iu[s]||Iu[k1[s]]||Iu.sport,o=new ot,a=jp(e),l=Qp(),c=em(),h=U1(),u=[$p(r.wb,r.wheelR,r.wheelR+.13),$p(-r.wb,r.wheelR,r.wheelR+.13)];o.add(Yo(r.body,r.W,a,u)),o.add(Yo(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(Yo(r.roof,r.W-.2,a,null,.02));let p=Math.max(...r.body.map(w=>w[0])),m=Math.min(...r.body.map(w=>w[0])),x=-p,g=-m,f=r.W/2,d=[],v=O1();for(let w of[-1,1])for(let P of[-r.wb,r.wb]){let O=V1(t,r.wheelR,v);O.position.set(w*r.track/2,r.wheelR,P),o.add(O),d.push(O)}let _=Math.max(...r.body.filter(w=>w[0]>p-.3).map(w=>w[1])),S=Math.max(...r.body.filter(w=>w[0]<m+.3).map(w=>w[1])),A=Math.max(.45,_-.12),y=Math.max(.5,S-.12),M=H1(),b=new pe({color:16777215,emissive:15398143,emissiveIntensity:2.6}),E=new ke(.045,.05,.05,14).rotateX(Math.PI/2);for(let w of[-1,1]){let P=new X(new Me(.44,.14,.12),h);P.position.set(w*(f-.4),A,x+.04),P.rotation.z=w*.06,o.add(P);for(let H of[0,1]){let W=new X(E,M);W.position.set(w*(f-.48+H*.15),A-.01,x-.03),o.add(W)}let O=new X(new Me(.38,.018,.03),b);O.position.set(w*(f-.4),A+.06,x-.025),O.rotation.z=w*.06,o.add(O)}let T=new X(new Me(f*1.1,.16,.08),h);if(T.position.set(0,.4,x+.01),o.add(T),r.splitter){let w=new X(new Me(r.W*.92,.05,.3),h);w.position.set(0,.16,x+.1),o.add(w)}if(r.hoodScoop){let w=new X(new Me(.5,.09,.7),h);w.position.set(0,.86,-(r.wb*.55)),o.add(w)}if(r.canards)for(let w of[-1,1]){let P=new X(new Me(.22,.03,.3),h);P.position.set(w*(f-.1),.3,x+.12),P.rotation.z=w*.25,o.add(P)}let z=F1();for(let w of[-1,1]){let P=new X(new Me(.42,.13,.07),z);P.position.set(w*(f-.32),y,g-.02),o.add(P);let O=new X(new Me(.3,.03,.075),new pe({color:3342336,emissive:16724016,emissiveIntensity:3.2}));O.position.set(w*(f-.32),y+.03,g-.025),o.add(O);let H=new X(new Me(.1,.05,.075),new pe({color:14540253,emissive:16777215,emissiveIntensity:.5}));H.position.set(w*(f-.32),y-.045,g-.025),o.add(H)}if(r.spoiler||r.wing||s==="hyper"||s==="super"){let w=new X(new Me(r.W*.5,.025,.06),z);w.position.set(0,y+.03,g-.02),o.add(w)}{let w=r.glass.map(ue=>ue[0]),P=r.glass.map(ue=>ue[1]),O=Math.max(...w),H=Math.min(...w),W=Math.min(...P),I=Math.max(...P),k=new pe({color:658189,roughness:.6}),Z=new pe({color:855826,roughness:.35,metalness:.4}),U=["sedan","taxi","police","suv"].includes(s),q=O-.05,K=U?H+.1:(O+H)/2-.1;for(let ue of[-1,1]){let _e=ue*(f+.046),Re=new X(new Me(.012,.025,O-H-.15),c);Re.position.set(ue*(f-.1),W+.01,-(O+H)/2),o.add(Re);let Ie=new X(new Me(.02,I-W-.05,.11),Z);Ie.position.set(ue*(f-.12),(I+W)/2,-((O+H)/2+(U?.15:-.05))),o.add(Ie);for(let B of U?[q,(O+H)/2+.1,K]:[q,K]){let ve=new X(new Me(.008,W-.3,.012),k);ve.position.set(_e,.3+(W-.3)/2,-B),o.add(ve)}let Pe=new X(new Me(.02,.025,.12),c);Pe.position.set(_e,W-.12,-(K+.18)),o.add(Pe);let ze=new X(new Me(.06,.08,r.wb*2-r.wheelR*2-.3),h);ze.position.set(ue*(f+.01),.24,0),o.add(ze)}}let V=new X(new Me(r.W*.8,.14,.18),h);V.position.set(0,.24,g-.06),o.add(V);for(let w of[-1,1]){let P=new X(new ke(.05,.055,.22,12),c);P.rotation.x=Math.PI/2,P.position.set(w*.32,.26,g+.06),o.add(P)}let D=new X(new Me(.34,.09,.02),B1());D.position.set(0,.5,g+.005),o.add(D);for(let w of[-1,1]){let P=new X(new Me(.1,.03,.05),h);P.position.set(w*(f+.03),1,-(r.wb*.42)),o.add(P);let O=new X(new Me(.1,.1,.16),a);O.position.set(w*(f+.09),1.04,-(r.wb*.42)),O.castShadow=!0,o.add(O)}if(r.rails)for(let w of[-1,1]){let P=new X(new Me(.06,.05,1.9),h);P.position.set(w*(f-.35),1.72,.1),o.add(P)}if(r.bed){let w=new X(new Me(r.W-.5,.06,2),h);w.position.set(0,1.02,m*.55),o.add(w)}if(r.spoiler||r.wing){let w=!!r.wing,P=g-(w?.42:.3),O=Math.max(...r.body.filter(k=>k[0]<m+.75).map(k=>k[1])),H=w?.3:.1,W=O+H;for(let k of[-1,1]){let Z=new X(new Me(.07,H+.04,.2),w?h:a);Z.position.set(k*(f-.45),O+H/2-.02,P),o.add(Z)}let I=new X(new Me(r.W*(w?.92:.82),.045,w?.4:.26),w?h:a);if(I.position.set(0,W,P),I.rotation.x=w?-.12:-.05,I.castShadow=!0,o.add(I),w)for(let k of[-1,1]){let Z=new X(new Me(.03,.2,.44),h);Z.position.set(k*r.W*.46,W-.04,P),o.add(Z)}}let C=null;if(i.extra==="taxi"||i.extra==="police"){let w=Math.max(...(r.roof||r.glass).map(O=>O[1]))+.02,P=(r.roof||r.glass).reduce((O,H)=>O+H[0],0)/(r.roof||r.glass).length;if(i.extra==="taxi"){let O=document.createElement("canvas");O.width=128,O.height=32;let H=O.getContext("2d");H.fillStyle="#ffd23f",H.fillRect(0,0,128,32),H.fillStyle="#111",H.font="bold 22px sans-serif",H.textAlign="center",H.fillText("TAXI",64,24);let W=new an(O);W.colorSpace=vt;let I=new X(new Me(.62,.2,.26),new pe({map:W,emissive:16777215,emissiveMap:W,emissiveIntensity:.6}));I.position.set(0,w+.1,-P),I.rotation.y=Math.PI/2,o.add(I)}else{let O=new X(new Me(1.1,.1,.28),h);O.position.set(0,w+.05,-P),o.add(O);let H=new pe({color:5570560,emissive:16718362,emissiveIntensity:2.5}),W=new pe({color:85,emissive:1723903,emissiveIntensity:2.5}),I=new X(new Me(.48,.12,.24),H);I.position.set(-.27,w+.14,-P);let k=new X(new Me(.48,.12,.24),W);k.position.set(.27,w+.14,-P),o.add(I,k),C=[H,W]}}return o.userData={flashers:C,defId:s,bodyColor:e,wheels:d,frontWheels:d.filter(w=>w.position.z<0),rim:v,glass:l,paint:a,setBrake:w=>{},profile:r,frontZ:x,rearZ:g},o}function X1(n,e){let t=new Oe(e);n.traverse(i=>{i.isMesh&&i.material&&i.material.isMeshPhysicalMaterial&&i.material.color&&Math.abs(i.material.color.getHex()-n.userData.bodyColor)<2&&!i.material.emissiveIntensity&&i.material.color.copy(t)}),n.userData.bodyColor=e}function q1(n,e){let t=n.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function Z1(n,e){let i=(typeof n=="string"?Lu(n):n||Ki[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:i.topSpeed*(1+.055*r("engine")),accel:i.accel*(1+.09*r("engine")+.12*r("turbo")),handling:i.handling*(1+.06*r("suspension")),grip:i.grip*(1+.07*r("tires")),nitroTime:i.nitroTime+.5*r("nitro"),nitroPower:i.nitroPower*(1+.08*r("nitro"))}}var Kp={clear:5926532,dark:1779509,limo:329482};function Y1(n,e,t){let i=n.userData;if(typeof e=="number"&&i.paint&&(i.paint.color.setHex(e),i.bodyColor=e),!t)return n;i.rim&&i.rim.color.setHex(t.rims),i.glass&&i.glass.color.setHex(Kp[t.tint]??Kp.dark),i.skinParts&&(n.remove(i.skinParts),i.skinParts.traverse(o=>{o.isMesh&&o.geometry.dispose()}));let s=new ot;i.skinParts=s,n.add(s);let r=i.profile;if(r&&t.stripes!=="none"){let o=new wi({color:t.stripe,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.1});if(t.stripes==="side"){let a=(i.rearZ-i.frontZ)*.86,l=(i.rearZ+i.frontZ)/2,c=r.wheelR+.22;for(let h of[-1,1]){let u=new X(new Me(.02,.09,a),o);u.position.set(h*(r.W/2+.05),c,l),s.add(u)}}else{let a=t.stripes==="dual"?[-.22,.22]:[0],l=t.stripes==="dual"?.16:.34;for(let c of a)for(let h of[r.body,r.roof]){if(!h)continue;let u=Yo(h,l,o,null,.045);u.castShadow=!1,u.scale.set(1,1.012,1.004),u.position.set(c,.006,0),s.add(u)}}}if(t.glow!=null&&r){let o=new ft({color:t.glow,transparent:!0,opacity:.75,blending:$t,depthWrite:!1,map:$1()}),a=i.rearZ-i.frontZ+1.2,l=new X(new Ve(r.W+1.4,a).rotateX(-Math.PI/2),o);l.position.set(0,.07,(i.rearZ+i.frontZ)/2),l.renderOrder=2,s.add(l)}return n}var Ul=null;function $1(){if(Ul)return Ul;let n=document.createElement("canvas");n.width=64,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(32,64,4,32,64,62);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,1),e.fillStyle=t,e.fillRect(0,0,64,128),e.restore(),Ul=new an(n),Ul}Nt();Nt();function nm(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ut,c=0;for(let h=0;h<n.length;++h){let u=n[h],p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m])}if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,u=[];for(let p=0;p<n.length;++p){let m=n[p].index;for(let x=0;x<m.count;++x)u.push(m.getX(x)+h);h+=n[p].attributes.position.count}l.setIndex(u)}for(let h in r){let u=tm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){let m=[];for(let g=0;g<o[h].length;++g)m.push(o[h][g][p]);let x=tm(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function tm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new fn(o,t,i);return s!==void 0&&(l.gpuType=s),l}var mt=n=>(n-4)*74,Tt=Array.from({length:10},(n,e)=>(e-4.5)*74),im=["St James St","Arlington St","Sherbrook St","Balmoral St","Kennedy St","Donald St","Fort St","Main St","Waterfront Dr","Gilroy St"],sm=["Higgins Ave","Logan Ave","Notre Dame Ave","Ellice Ave","Portage Ave","Graham Ave","St Mary Ave","York Ave","Broadway","Assiniboine Ave"],Uu=Tt[4],rm=Tt[7],gt={minX:356,maxX:402},pn={minZ:356,maxZ:394},Rn=Uu,Ti=14/2+1,Ai=gt.maxX+50,ji=225,An={parking:[mt(0),mt(0)],arena:[mt(4),mt(3)],legislature:[mt(3),mt(8)],forks:[mt(8),mt(8)],museum:[mt(7),mt(8)],mansion:[mt(0),mt(8)],hospital:[mt(0),mt(2)],park:[mt(2),mt(6)]},Nl={x:Tt[1]-3.5,z:mt(2),heading:Math.PI},Nu={x:An.mansion[0],z:An.mansion[1]};function $r(n,e){for(let t in An){let[i,s]=An[t];if(Math.abs(i-n)<1&&Math.abs(s-e)<1)return t}return null}function om(n,e){return e<=mt(2)&&n>=mt(3)?"exchange":Math.abs(n-110)<=150&&Math.abs(e)<=120?"downtown":Math.abs(n)>=mt(7)||Math.abs(e)>=mt(7)?"residential":"midtown"}var Ks=n=>nm(n.map(e=>e.index?e.toNonIndexed():e)),J1=20481;function K1(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function vs(n,e,t,i=!0){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new an(s);return i&&(r.colorSpace=vt),r.anisotropy=8,r}function Hl(n,e,t,i,s,r,o=2){n.fillStyle=i,n.fillRect(0,0,e,t);for(let a=0;a<r;a++){let l=(Math.random()-.5)*s;n.fillStyle=l>0?`rgba(255,255,255,${l})`:`rgba(0,0,0,${-l})`,n.fillRect(Math.random()*e,Math.random()*t,o,o)}}function Ou(){return vs(256,512,(n,e,t)=>{Hl(n,e,t,"#2f3237",.16,9e3,2),n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(e*.18,0,e*.12,t),n.fillRect(e*.7,0,e*.12,t),n.strokeStyle="rgba(15,15,15,0.5)",n.lineWidth=1;for(let i=0;i<6;i++){n.beginPath();let s=Math.random()*e,r=Math.random()*t;n.moveTo(s,r);for(let o=0;o<6;o++)s+=(Math.random()-.5)*30,r+=Math.random()*25,n.lineTo(s,r);n.stroke()}n.fillStyle="rgba(30,30,30,0.5)",n.fillRect(e*.55,t*.3,40,60),n.fillStyle="#d9dcdf",n.fillRect(10,0,5,t),n.fillRect(e-15,0,5,t),n.fillStyle="#e3b62c",n.fillRect(e/2-7,0,4,t),n.fillRect(e/2+3,0,4,t)})}function um(){return vs(256,256,(n,e,t)=>Hl(n,e,t,"#2f3237",.16,7e3,2))}function j1(){return vs(256,256,(n,e,t)=>{Hl(n,e,t,"#a3a59f",.12,5e3,2),n.strokeStyle="rgba(60,60,60,0.35)",n.lineWidth=2;for(let i=0;i<=e;i+=32)n.beginPath(),n.moveTo(i,0),n.lineTo(i,t),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(e,i),n.stroke()})}function Q1(){return vs(256,256,(n,e,t)=>{Hl(n,e,t,"#5a7f45",.22,12e3,2);for(let i=0;i<400;i++)n.fillStyle=`rgba(${90+Math.random()*40},${120+Math.random()*50},60,0.5)`,n.fillRect(Math.random()*e,Math.random()*t,1,3)})}function eE(){return vs(256,256,(n,e,t)=>{n.fillStyle="rgb(128,128,255)",n.fillRect(0,0,e,t);for(let i=0;i<900;i++){let s=Math.random()*e,r=Math.random()*t,o=4+Math.random()*14,a=n.createRadialGradient(s,r,0,s,r,o),l=(Math.random()-.5)*70,c=(Math.random()-.5)*70;a.addColorStop(0,`rgba(${128+l},${128+c},255,0.5)`),a.addColorStop(1,"rgba(128,128,255,0)"),n.fillStyle=a,n.fillRect(s-o,r-o,o*2,o*2)}},!1)}function Ol(n){let e=new pe({color:16777215,roughness:n.rough??.85,metalness:n.metal??.05,envMapIntensity:n.env??.6}),t={uBay:{value:new ce(n.bay,n.floor)},uWin:{value:new It(...n.win)},uGround:{value:n.ground??4.4},uGlassA:{value:new Oe(n.glassA)},uGlassB:{value:new Oe(n.glassB)},uLit:{value:new Oe(16765066)},uNight:{value:0},uLitFrac:{value:n.lit??.35},uBrick:{value:n.brick?1:0},uBands:{value:n.bands?1:0}};return e.userData.u=t,e.onBeforeCompile=i=>{Object.assign(i.uniforms,t),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
 totalEmissiveRadiance += uLit * fLit * uNight * 0.55;`)},e}var am=new F,lm=new kn,cm=new F,hm=new pt,dm=new F(0,1,0);function Ot(n,e,t,i,s,r,o,a,l){am.set(t,i,s),lm.setFromAxisAngle(dm,r),cm.set(o,a,l),hm.compose(am,lm,cm),n.setMatrixAt(e,hm)}function zl(n,e,t,i,s){for(let r of n)if(t>r.minX&&e<r.maxX&&s>r.minZ&&i<r.maxZ)return!0;return!1}function fm(n,e=[]){let t=K1(J1),i=[],s=[],r=[],o=(J,oe,ye,Te)=>i.push({minX:J,maxX:oe,minZ:ye,maxZ:Te});n.fog=new pl(13623538,260,950);let a=new Sl(12901631,6254154,.85);n.add(a);let l=new Al(16773596,1.75);l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.near=10,l.shadow.camera.far=480;let c=120;Object.assign(l.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),l.shadow.bias=-6e-4,l.shadow.normalBias=.6,n.add(l,l.target);let h=80,u=140,p=55,m=16,x=Q1();x.wrapS=x.wrapT=Bn,x.repeat.set(140,140);let g=new X(new Ve(2600,2600).rotateX(-Math.PI/2),new pe({map:x,roughness:.95,envMapIntensity:.2}));g.receiveShadow=!0,n.add(g);let f=680,d=Ou();d.wrapS=d.wrapT=Bn,d.repeat.set(1,f/28);let v=new pe({map:d,roughness:.88,metalness:.02,envMapIntensity:.35}),_=new Ve(1,1).rotateX(-Math.PI/2),S=new yt(_,v,Tt.length*2),A=0;for(let J of Tt)Ot(S,A++,J,.05,0,0,14,1,f),Ot(S,A++,0,.05,J,Math.PI/2,14,1,f);S.receiveShadow=!0,S.instanceMatrix.needsUpdate=!0,n.add(S);let y=um();y.wrapS=y.wrapT=Bn;let M=new pe({map:y,roughness:.88,envMapIntensity:.35}),b=new yt(_,M,Tt.length*Tt.length),E=0;for(let J of Tt)for(let oe of Tt)Ot(b,E++,J,.055,oe,0,14,1,14);b.receiveShadow=!0,b.instanceMatrix.needsUpdate=!0,n.add(b);{let J=new Me(.6,.02,3.4).translate(0,.01,0),oe=[];for(let Te of Tt)for(let Ae of Tt){let se=14/2+1.9;for(let[G,te,ae]of[[Te,Ae-se,0],[Te,Ae+se,0],[Te-se,Ae,1],[Te+se,Ae,1]])for(let Ee=-5;Ee<=5;Ee++)oe.push(ae===0?[G+Ee*1.2,te,0]:[G,te+Ee*1.2,Math.PI/2])}let ye=new yt(J,new pe({color:15132906,roughness:.7}),oe.length);oe.forEach(([Te,Ae,se],G)=>Ot(ye,G,Te,.06,Ae,se,1,1,1)),ye.receiveShadow=!0,ye.instanceMatrix.needsUpdate=!0,n.add(ye)}let T=j1();T.wrapS=T.wrapT=Bn,T.repeat.set(60/4,60/4);let z=new pe({map:T,roughness:.9,envMapIntensity:.3}),V=new pe({color:9211530,roughness:.8}),D=81,C=new yt(new Me(1,1,1).translate(0,.5,0),z,D),w=new yt(new Me(1,1,1).translate(0,.5,0),V,D*4),P=0,O=0,H=[];for(let J=0;J<9;J++)for(let oe=0;oe<9;oe++){let ye=mt(J),Te=mt(oe);H.push({bx:J,bz:oe,cx:ye,cz:Te,special:$r(ye,Te),district:om(ye,Te)}),Ot(C,P++,ye,0,Te,0,60-.3,.13,60-.3);for(let[Ae,se,G,te]of[[ye,Te-60/2,60,.3],[ye,Te+60/2,60,.3],[ye-60/2,Te,.3,60],[ye+60/2,Te,.3,60]])Ot(w,O++,Ae,0,se,0,G,.17,te)}C.receiveShadow=!0,w.receiveShadow=!0,C.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0,n.add(C,w);let W={glass:Ol({bay:1.6,floor:3.7,win:[.04,.08,.06,0],glassA:1915474,glassB:4026255,rough:.4,metal:.4,env:1,lit:.3}),office:Ol({bay:3.2,floor:3.6,win:[.12,.22,.14,0],glassA:2767950,glassB:6258582,bands:!0,lit:.35}),brick:Ol({bay:3.4,floor:3.9,win:[.24,.24,.16,0],glassA:1778473,glassB:3951186,brick:!0,lit:.3}),apartment:Ol({bay:3.6,floor:3.1,win:[.22,.28,.2,0],glassA:2503229,glassB:6322314,lit:.45,ground:3.6})};for(let J in W)r.push(W[J].userData.u);let I=new Me(1,1,1).translate(0,.5,0),k=520,Z={},U={};for(let J in W)Z[J]=new yt(I,W[J],k),Z[J].castShadow=!0,Z[J].receiveShadow=!0,U[J]=0;let q=new Oe,K=[],ue={glass:[[.55,.6,.66],[.32,.36,.42],[.2,.22,.26],[.62,.62,.6]],office:[[.78,.77,.73],[.66,.65,.62],[.82,.78,.68],[.55,.56,.58]],brick:[[.58,.3,.22],[.5,.26,.2],[.66,.42,.3],[.45,.3,.24],[.7,.58,.44]],apartment:[[.84,.8,.7],[.74,.68,.6],[.6,.66,.7],[.82,.72,.62],[.7,.5,.42]]};function _e(J,oe,ye,Te,Ae,se,G,te=null){let ae=Z[J],Ee=U[J]++;if(Ot(ae,Ee,oe,.13,ye,0,Te,se,Ae),q.setRGB(G[0],G[1],G[2]),ae.setColorAt(Ee,q),K.push({x:oe,z:ye,w:Te,d:Ae,h:se+.13,style:J}),o(oe-Te/2,oe+Te/2,ye-Ae/2,ye+Ae/2),!te){let me=Math.round(oe/74)*74,Ke=Math.round(ye/74)*74,je=oe-me,Mt=ye-Ke,At=0,ct=0;Math.abs(je)>Math.abs(Mt)?At=je>=0?1:-1:ct=Mt>=0?1:-1,te={x:oe+At*(Te/2),z:ye+ct*(Ae/2),nx:At,nz:ct}}s.push({id:s.length,minX:oe-Te/2,maxX:oe+Te/2,minZ:ye-Ae/2,maxZ:ye+Ae/2,h:se,door:te})}let Re=[rm,Uu],Ie=14/2+3,Pe=[{style:"office",dx:-1,dz:-1,w:26,d:26,h:96,rgb:[.33,.25,.2]},{style:"glass",dx:1,dz:-1,w:28,d:24,h:84,rgb:[.12,.13,.15]},{style:"office",dx:-1,dz:1,w:26,d:24,h:78,rgb:[.8,.75,.62]}],ze=[];for(let J of Pe){let oe=Re[0]+J.dx*(Ie+J.w/2),ye=Re[1]+J.dz*(Ie+J.d/2);_e(J.style,oe,ye,J.w,J.d,J.h,J.rgb,{x:oe,z:ye-J.dz*(J.d/2),nx:0,nz:-J.dz}),ze.push({minX:oe-J.w/2-2,maxX:oe+J.w/2+2,minZ:ye-J.d/2-2,maxZ:ye+J.d/2+2})}{let J=Re[0]+Ie+13,oe=Re[1]+Ie+12;tE(n,J,oe,o,s),ze.push({minX:J-14,maxX:J+14,minZ:oe-13,maxZ:oe+13})}let B=e.concat(ze),ve=4;for(let J of H){if(J.special)continue;let oe=J.district,ye=oe==="downtown"?t()<.5?4:9:oe==="residential"?9:t()<.6?4:9,Te=Math.sqrt(ye),Ae=(60-ve*2)/Te;for(let se=0;se<ye;se++){let G=t()<(oe==="residential"?.32:.2),te=se%Te,ae=Math.floor(se/Te),Ee=Ae*(.62+t()*.3),me=Ae*(.62+t()*.3),Ke=J.cx-(60-ve*2)/2+Ae*(te+.5)+(t()-.5)*2,je=J.cz-(60-ve*2)/2+Ae*(ae+.5)+(t()-.5)*2,Mt=t(),At=t();if(G||zl(B,Ke-Ee/2,Ke+Ee/2,je-me/2,je+me/2))continue;let ct,Qt;oe==="downtown"?(ct=Mt<.55?"glass":"office",Qt=28+At*62):oe==="exchange"?(ct="brick",Qt=12+At*16):oe==="residential"?(ct=Mt<.75?"apartment":"brick",Qt=7+At*14):(ct=Mt<.4?"office":Mt<.7?"apartment":Mt<.85?"brick":"glass",Qt=14+At*30);let Xn=ue[ct],ur=Xn[t()*Xn.length|0],mo=.9+t()*.2;_e(ct,Ke,je,Ee,me,Qt,[ur[0]*mo,ur[1]*mo,ur[2]*mo])}}for(let J in Z)Z[J].count=U[J],Z[J].instanceMatrix.needsUpdate=!0,Z[J].instanceColor&&(Z[J].instanceColor.needsUpdate=!0),n.add(Z[J]);{let J=new Me(1,1,1).translate(0,.5,0),oe=new pe({color:5987680,roughness:.85}),ye=new yt(J,oe,K.length*4),Te=0;for(let me of K)Ot(ye,Te++,me.x,me.h,me.z-me.d/2+.35/2,0,me.w,.9,.35),Ot(ye,Te++,me.x,me.h,me.z+me.d/2-.35/2,0,me.w,.9,.35),Ot(ye,Te++,me.x-me.w/2+.35/2,me.h,me.z,0,.35,.9,me.d),Ot(ye,Te++,me.x+me.w/2-.35/2,me.h,me.z,0,.35,.9,me.d);ye.count=Te,ye.instanceMatrix.needsUpdate=!0,ye.castShadow=!0,n.add(ye);let Ae=new Me(1.8,1.2,1.8).translate(0,.6,0),se=new yt(Ae,new pe({color:10133670,roughness:.6,metalness:.5}),K.length*2),G=0,te=[];for(let me of K){let Ke=1+Math.floor(t()*2);for(let je=0;je<Ke;je++)Ot(se,G++,me.x+(t()-.5)*me.w*.5,me.h,me.z+(t()-.5)*me.d*.5,t()*3,.7+t()*.6,1,.7+t()*.6);me.style==="brick"&&t()<.45&&te.push(me)}se.count=G,se.instanceMatrix.needsUpdate=!0,se.castShadow=!0,n.add(se);let ae=Ks([new ke(1.7,1.7,2.8,12).translate(0,4.2,0),new gs(1.9,1.2,12).translate(0,6.2,0),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([me,Ke])=>new ke(.1,.1,2.8,5).translate(me*1.1,1.4,Ke*1.1))]),Ee=new yt(ae,new pe({color:7031346,roughness:.9}),Math.max(1,te.length));te.forEach((me,Ke)=>Ot(Ee,Ke,me.x+(t()-.5)*me.w*.3,me.h,me.z+(t()-.5)*me.d*.3,0,1,1,1)),Ee.count=te.length,Ee.instanceMatrix.needsUpdate=!0,Ee.castShadow=!0,n.add(Ee)}{let J=vs(64,96,(te,ae,Ee)=>{te.fillStyle="#20262f",te.fillRect(0,0,ae,Ee),te.fillStyle="#c9a45a",te.fillRect(0,0,ae,6),te.fillRect(0,0,5,Ee),te.fillRect(ae-5,0,5,Ee),te.fillStyle="#7fb0d8",te.fillRect(9,12,ae/2-12,Ee-20),te.fillRect(ae/2+3,12,ae/2-12,Ee-20),te.fillStyle="#d6d6d6",te.fillRect(ae/2-6,Ee/2,3,10),te.fillRect(ae/2+3,Ee/2,3,10)}),oe=new Ve(2.2,3).translate(0,1.5,0),ye=new pe({map:J,emissive:16762995,emissiveMap:J,emissiveIntensity:.2,roughness:.4,metalness:.3}),Te=new Me(3.2,.12,1.2).translate(0,3.4,.55),Ae=new pe({color:2830134,roughness:.6}),se=new yt(oe,ye,Math.max(1,s.length)),G=new yt(Te,Ae,Math.max(1,s.length));s.forEach((te,ae)=>{let Ee=te.door.nx?te.door.nx>0?Math.PI/2:-Math.PI/2:te.door.nz>0?0:Math.PI;Ot(se,ae,te.door.x+te.door.nx*.03,.13,te.door.z+te.door.nz*.03,Ee,1,1,1),Ot(G,ae,te.door.x,.13,te.door.z,Ee,1,1,1)}),se.count=G.count=s.length,se.instanceMatrix.needsUpdate=!0,G.instanceMatrix.needsUpdate=!0,G.castShadow=!0,n.add(se,G),r.push({door:ye})}let le={scene:n,addCol:o,buildingInfo:s,rand:t,makeCanvas:vs,landmarkReserved:[],glowMats:r};nE(le,...An.arena),iE(le,...An.legislature),sE(le,...An.forks),rE(le,...An.museum),oE(le,...An.mansion),aE(le,...An.hospital),lE(le,...An.park),cE(le,...An.parking);let ie=hE(le);uE(le);let He=dE(le);{let J=[];for(let te of H)if(!(te.special==="parking"||te.special==="forks"))for(let ae=0;ae<4;ae++)for(let Ee=-60/2+9;Ee<=60/2-9;Ee+=10+t()*6){if(t()<.35)continue;let me=60/2-.9,[Ke,je]=ae===0?[te.cx+Ee,te.cz-me]:ae===1?[te.cx+me,te.cz+Ee]:ae===2?[te.cx+Ee,te.cz+me]:[te.cx-me,te.cz+Ee];if(zl(B,Ke-1.5,Ke+1.5,je-1.5,je+1.5))continue;let Mt=!1;for(let At of s)if(Math.abs(At.door.x-Ke)<3.5&&Math.abs(At.door.z-je)<3.5){Mt=!0;break}Mt||J.push([Ke,je,.85+t()*.4])}for(let te=0;te<90;te++){let ae=-340+t()*340*2;J.push([344+t()*9,ae,.9+t()*.5]),J.push([-346-t()*30,ae,.9+t()*.5])}for(let te=0;te<70;te++){let ae=-340+t()*(340+gt.minX);J.push([ae,344+t()*9,.9+t()*.5]),J.push([ae,-346-t()*30,.9+t()*.5])}for(let te of le.parkTrees||[])J.push(te);let oe=new ke(.2,.32,3.4,6).translate(0,1.7,0),ye=Ks([new Ys(2.4,1).translate(0,5.2,0),new Ys(1.8,1).translate(1.5,4.4,.6),new Ys(1.7,1).translate(-1.3,4.6,-.7),new Ys(1.5,1).translate(.2,6.6,.3)]),Te=new yt(oe,new pe({color:5980977,roughness:.95}),J.length),Ae=new pe({color:16777215,roughness:.9,flatShading:!0}),se=new yt(ye,Ae,J.length),G=new Oe;J.forEach(([te,ae,Ee],me)=>{Ot(Te,me,te,.12,ae,t()*6.28,Ee,Ee,Ee),Ot(se,me,te,.12,ae,t()*6.28,Ee,Ee*(.9+t()*.25),Ee),G.setHSL(.24+t()*.06,.45+t()*.15,.26+t()*.08),se.setColorAt(me,G)}),Te.instanceMatrix.needsUpdate=!0,se.instanceMatrix.needsUpdate=!0,se.instanceColor.needsUpdate=!0,se.castShadow=!0,Te.castShadow=!0,n.add(Te,se)}let Ce=[];for(let J of Tt)for(let oe=-f/2+25;oe<f/2-10;oe+=37){let ye=Math.round(oe/37)%2===0?1:-1;Tt.some(Te=>Math.abs(Te-oe)<12)||(Ce.push([J+ye*(14/2+1.2),oe,ye,0]),Ce.push([oe,J+ye*(14/2+1.2),ye,1]))}let L=Ks([new ke(.1,.16,8.5,6).translate(0,4.25,0),new ke(.06,.06,2.4,5).rotateZ(Math.PI/2).translate(-1.1,8.4,0)]),R=new pe({color:3093563,roughness:.55,metalness:.6}),$=new Me(.9,.18,.4).translate(-2.2,8.3,0),xe=new pe({color:16774096,emissive:16766352,emissiveIntensity:.3,roughness:.4}),fe=new yt(L,R,Ce.length),de=new yt($,xe,Ce.length);Ce.forEach(([J,oe,ye,Te],Ae)=>{let se=Te?ye>0?-Math.PI/2:Math.PI/2:ye>0?0:Math.PI;Ot(fe,Ae,J,.12,oe,se,1,1,1),Ot(de,Ae,J,.12,oe,se,1,1,1)}),fe.instanceMatrix.needsUpdate=!0,de.instanceMatrix.needsUpdate=!0,fe.castShadow=!0,n.add(fe,de);let Fe=vs(64,64,J=>{let oe=J.createRadialGradient(32,32,2,32,32,30);oe.addColorStop(0,"rgba(255,220,150,1)"),oe.addColorStop(.4,"rgba(255,200,120,0.45)"),oe.addColorStop(1,"rgba(255,190,110,0)"),J.fillStyle=oe,J.fillRect(0,0,64,64)}),Se=new Float32Array(Ce.length*3),De=new F;Ce.forEach(([J,oe,ye,Te],Ae)=>{let se=Te?ye>0?-Math.PI/2:Math.PI/2:ye>0?0:Math.PI;De.set(-2.2,8.2,0).applyAxisAngle(dm,se),Se[Ae*3]=J+De.x,Se[Ae*3+1]=8.2,Se[Ae*3+2]=oe+De.z});let We=new Ut;We.setAttribute("position",new fn(Se,3));let Je=new Fo({map:Fe,size:6,transparent:!0,opacity:0,blending:$t,depthWrite:!1}),ge=new xl(We,Je);ge.frustumCulled=!1,n.add(ge),fE(le,B),pE(le,H,B),mE(le);{let J=new Me(1,1,1).translate(0,.5,0),oe=new pe({color:8753827,roughness:1,fog:!0}),ye=70,Te=new yt(J,oe,ye);for(let Ae=0;Ae<ye;Ae++){let se=Ae/ye*Math.PI*2,G=900+t()*260;Ot(Te,Ae,Math.cos(se)*G,0,Math.sin(se)*G,t(),30+t()*50,12+t()*45,30+t()*50)}Te.instanceMatrix.needsUpdate=!0,n.add(Te)}let dt={x:Tt[5]+3.5,z:120,heading:0};function st(J){for(let oe of r)oe.uNight&&(oe.uNight.value=J),oe.door&&(oe.door.emissiveIntensity=.2+J*1.2),oe.mat&&(oe.mat.emissiveIntensity=oe.base+J*(oe.night??2));xe.emissiveIntensity=.3+J*2.2,Je.opacity=J*.6}let Ye=0;function Ge(J,oe){Ye+=J;let ye=Math.round(oe.x/m)*m,Te=Math.round(oe.z/m)*m;l.target.position.set(ye,0,Te),l.position.set(ye+h,u,Te+p),l.target.updateMatrixWorld(),ie&&ie.update(J)}return Ge(0,dt),{colliders:i,buildings:s,spawn:dt,dragStrip:He,update:Ge,setGlow:st,sun:l,hemi:a,roadLines:Tt}}var Xe=(n,e={})=>new pe(Object.assign({color:n,roughness:.8},e));function Xt(n,e,t,i,s,r,o,a,l=!0){let c=new X(new Me(e,t,i).translate(0,t/2,0),s);return c.position.set(r,o,a),c.castShadow=l,c.receiveShadow=!0,n.add(c),c}function Fl(n,e,t,i=512,s=128,r="bold 72px sans-serif"){let o=document.createElement("canvas");o.width=i,o.height=s;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,i,s),a.fillStyle=t,a.font=r,a.textAlign="center",a.textBaseline="middle",a.fillText(n,i/2,s/2+4);let l=new an(o);return l.colorSpace=vt,l}function Jr(n,e,t,i,s,r,o){n.buildingInfo.push({id:n.buildingInfo.length,minX:e,maxX:t,minZ:i,maxZ:s,h:r,door:o})}function tE(n,e,t,i,s){let r=Xe(14208957,{roughness:.7});Xt(n,26,16,24,r,e,.13,t),Xt(n,27,1.4,25,Xe(12892838),e,16.1,t);for(let o=0;o<6;o++){let a=new X(new ke(.55,.62,12,14),r);a.position.set(e-10+o*4,6.2,t-13.3),a.castShadow=!0,n.add(a);let l=a.clone();l.position.set(e-13.3,6.2,t-10+o*4),n.add(l)}Xt(n,26,1.6,2.2,r,e,12.2,t-13.2),i(e-13.5,e+13,t-13.5,t+12),s.push({id:s.length,minX:e-13,maxX:e+13,minZ:t-12,maxZ:t+12,h:16,door:{x:e,z:t-12,nx:0,nz:-1}})}function nE(n,e,t){let{scene:i}=n,s=new X(new ke(1,1,1,48).translate(0,.5,0),Xe(2896960,{metalness:.6,roughness:.3,envMapIntensity:1.2}));s.scale.set(26,21,23),s.position.set(e,.13,t),s.castShadow=!0,s.receiveShadow=!0,i.add(s);let r=new X(new ke(1.01,1.01,1,48,1,!0).translate(0,.5,0),Xe(6990040,{metalness:.8,roughness:.08,transparent:!0,opacity:.85,emissive:1060938,emissiveIntensity:.5}));r.scale.set(26,9,23),r.position.set(e,.13,t),i.add(r);let o=Xe(1118481,{emissive:3890175,emissiveIntensity:1.6}),a=new X(new ke(1.012,1.012,1,48,1,!0).translate(0,.5,0),o);a.scale.set(26,1.4,23),a.position.set(e,15,t),i.add(a),n.glowMats.push({mat:o,base:1.6,night:1.5});let l=new X(new Pt(1,40,12,0,Math.PI*2,0,Math.PI/2),Xe(12107976,{metalness:.7,roughness:.35}));l.scale.set(26,5,23),l.position.set(e,21.1,t),l.castShadow=!0,i.add(l);let c=new X(new Ve(22,4),new pe({map:Fl("ARENA","#0b0f1a","#ffffff"),emissive:16777215,emissiveIntensity:.4}));c.material.emissiveMap=c.material.map,c.position.set(e,11.5,t+23.2),i.add(c),n.addCol(e-25,e+25,t-22,t+22),Jr(n,e-25,e+25,t-22,t+22,21,{x:e,z:t+23,nx:0,nz:1})}function iE(n,e,t){let{scene:i}=n,s=Xe(14273969,{roughness:.75}),r=new X(new Ve(58,58).rotateX(-Math.PI/2),Xe(5209404,{roughness:1}));r.position.set(e,.14,t),r.receiveShadow=!0,i.add(r);let o=t-6;Xt(i,44,15,16,s,e,.13,o),Xt(i,12,15,34,s,e-20,.13,o+4),Xt(i,12,15,34,s,e+20,.13,o+4),Xt(i,45,1.2,17,Xe(13221022),e,15.1,o);for(let d=0;d<6;d++){let v=new X(new ke(.6,.7,11,14),s);v.position.set(e-7.5+d*3,5.6,o-9.6),v.castShadow=!0,i.add(v)}Xt(i,19,1.5,3,s,e,11.1,o-9.6);let a=new X(new ke(.01,10.5,4,3,1).rotateZ(Math.PI/2).rotateY(Math.PI/2),s);a.scale.set(1,1,.3),a.position.set(e,14.6,o-9.6),i.add(a);let l=new X(new ke(7,7.4,9,32),s);l.position.set(e,20.6,o),l.castShadow=!0,i.add(l);for(let d=0;d<16;d++){let v=d/16*Math.PI*2,_=new X(new ke(.35,.35,8,8),s);_.position.set(e+Math.cos(v)*7.6,20.6,o+Math.sin(v)*7.6),i.add(_)}let c=new X(new Pt(7.4,32,16,0,Math.PI*2,0,Math.PI/2),Xe(9413530,{metalness:.5,roughness:.4}));c.scale.set(1,1.15,1),c.position.set(e,25.1,o),c.castShadow=!0,i.add(c);let h=new X(new ke(1.4,1.6,4,16),s);h.position.set(e,35.6,o),i.add(h);let u=Xe(16763210,{metalness:1,roughness:.22,emissive:5913088,emissiveIntensity:.5}),p=new ot;p.add(new X(new Me(.7,1.6,.45).translate(0,.8,0),u)),p.add(new X(new Pt(.32,12,10).translate(0,1.95,0),u));let m=new X(new Me(.22,1.3,.22).translate(0,.65,0),u);m.position.set(.45,1.4,0),m.rotation.z=-.3,p.add(m);let x=new X(new gs(.22,.6,8),u);x.position.set(.85,2.9,0),p.add(x);let g=new X(new Me(.25,1.2,.25).translate(0,-.6,0),u);g.position.set(-.15,.1,0),p.add(g);let f=g.clone();f.position.set(.2,.2,0),f.rotation.x=.6,p.add(f),p.position.set(e,38.3,o),p.scale.setScalar(1.4),i.add(p);for(let d of[-1,1]){let v=new X(new ke(.08,.1,12,6),Xe(14540253,{metalness:.8}));v.position.set(e+d*16,6.1,t-26),i.add(v);let _=new X(new Ve(2.6,1.5),Xe(d<0?14100029:2052031,{side:bt}));_.position.set(e+d*16+1.3,11.2,t-26),i.add(_)}n.addCol(e-22,e+22,o-8,o+8),n.addCol(e-26,e-14,o-13,o+21),n.addCol(e+14,e+26,o-13,o+21),n.addCol(e-9.5,e+9.5,o-10.5,o-8),Jr(n,e-22,e+22,o-10.5,o+8,15,{x:e,z:o-10.6,nx:0,nz:-1})}function sE(n,e,t){let{scene:i}=n,s=new X(new Ve(58,58).rotateX(-Math.PI/2),Xe(12166540,{roughness:.95}));s.position.set(e,.14,t),s.receiveShadow=!0,i.add(s);let r=Xe(9128498,{roughness:.9}),o=Xe(3817284,{roughness:.7});for(let[u,p]of[[e-10,t-12],[e-10,t+6]]){Xt(i,30,9,13,r,u,.13,p);let m=new X(new ke(.01,8,30,3,1).rotateZ(Math.PI/2),o);m.scale.set(1,1,.6),m.rotation.x=Math.PI,m.position.set(u,11.4,p),m.castShadow=!0,i.add(m),n.addCol(u-15,u+15,p-6.5,p+6.5)}Xt(i,6,24,6,r,e+10,.13,t-3);let a=new X(new $i(1.8,24),Xe(15921906,{emissive:16777215,emissiveIntensity:.3}));a.position.set(e+10,20,t-6.05),a.rotation.y=Math.PI,i.add(a);let l=new X(new gs(4.6,5,4),o);l.rotation.y=Math.PI/4,l.position.set(e+10,26.7,t-3),i.add(l),n.addCol(e+7,e+13,t-6,t),Jr(n,e-25,e+5,t-18.5,t-5.5,9,{x:e-10,z:t-18.6,nx:0,nz:-1});let c="WINNIPEG",h=["#ff2e63","#ff8c1a","#ffd23f","#4ade80","#18c0c0","#1f6feb","#a855f7","#ff5e3a"];for(let u=0;u<c.length;u++){let p=Fl(c[u],h[u],"#ffffff",128,128,"bold 110px sans-serif"),m=new X(new Me(2.4,3.2,.7),[Xe(h[u]),Xe(h[u]),Xe(h[u]),Xe(h[u]),new pe({map:p}),new pe({map:p})]);m.position.set(e+4+u*2.7-9,1.75,t+22),m.castShadow=!0,i.add(m)}n.addCol(e-7,e+15,t+21.4,t+22.6)}function rE(n,e,t){let{scene:i}=n,s=Xe(8153688,{roughness:.9});for(let h=0;h<4;h++){let u=14+h*3,p=new X(new ke(u,u+1.5,6-h,36,1,!1,h*.6,Math.PI*1.1),s);p.position.set(e,.13+(6-h)/2,t),p.castShadow=!0,i.add(p)}let r=Xe(12113642,{metalness:.9,roughness:.05,transparent:!0,opacity:.9,envMapIntensity:1.6}),o=new X(new Pt(1,32,18),r);o.scale.set(18,12,13),o.position.set(e-2,12,t),o.castShadow=!0,i.add(o),Xt(i,26,10,22,Xe(4869973,{roughness:.6}),e,.13,t);let a=new X(new ke(1.4,3.4,70,12),r);a.position.set(e+8,35,t+2),a.castShadow=!0,i.add(a);let l=Xe(16777215,{emissive:16777215,emissiveIntensity:1.2}),c=new X(new Pt(1.5,14,10),l);c.position.set(e+8,70.5,t+2),i.add(c),n.glowMats.push({mat:l,base:1.2,night:3}),n.addCol(e-13,e+13,t-11,t+11),Jr(n,e-13,e+13,t-11,t+11,10,{x:e,z:t-11,nx:0,nz:-1})}function oE(n,e,t){let{scene:i}=n,s=new X(new Ve(58,58).rotateX(-Math.PI/2),Xe(4160051,{roughness:1}));s.position.set(e,.14,t),s.receiveShadow=!0,i.add(s);let r=Xe(15855076,{roughness:.6});Xt(i,30,10,16,r,e,.13,t+6),Xt(i,12,13,18,r,e,.13,t+6);let o=new X(new ke(.01,10,32,4,1).rotateZ(Math.PI/2).rotateY(0),Xe(2237739));o.scale.set(1,.5,.9),o.position.set(e,12.6,t+6),o.rotation.x=Math.PI/4,i.add(o);for(let p=0;p<4;p++){let m=new X(new ke(.4,.45,9,12),r);m.position.set(e-4.5+p*3,4.6,t-3.2),m.castShadow=!0,i.add(m)}Xt(i,13,1,3,r,e,9.1,t-3);let a=new X(new Ve(12,6).rotateX(-Math.PI/2),Xe(1614040,{roughness:.05,metalness:.2,emissive:670298,emissiveIntensity:.4}));a.position.set(e+16,.16,t-14),i.add(a);let l=new X(new Ve(3,3),new pe({map:Fl("E","#0f9d58","#ffd23f",128,128,"bold 100px serif"),emissive:1023320,emissiveIntensity:.3}));l.position.set(e,10.5,t-3.05),l.rotation.y=Math.PI,i.add(l);let c=Xe(13617336,{roughness:.8}),h=2.6,u=27;Xt(i,54,h,.6,c,e,.13,t+u),n.addCol(e-27,e+27,t+u-.3,t+u+.3),Xt(i,.6,h,54,c,e-u,.13,t),n.addCol(e-u-.3,e-u+.3,t-27,t+27),Xt(i,.6,h,54,c,e+u,.13,t),n.addCol(e+u-.3,e+u+.3,t-27,t+27),Xt(i,21,h,.6,c,e-16.5,.13,t-u),n.addCol(e-27,e-6,t-u-.3,t-u+.3),Xt(i,21,h,.6,c,e+16.5,.13,t-u),n.addCol(e+6,e+27,t-u-.3,t-u+.3),n.addCol(e-15,e+15,t-2,t+14),Jr(n,e-15,e+15,t-2,t+14,10,{x:e,z:t-2,nx:0,nz:-1})}function aE(n,e,t){let{scene:i}=n,s=Xe(15265007,{roughness:.5});Xt(i,40,26,26,s,e,.13,t),Xt(i,18,8,10,s,e-8,.13,t+18);let r=Xe(2902627,{metalness:.6,roughness:.15});for(let a=0;a<6;a++)Xt(i,40.2,1.4,26.2,r,e,3.2+a*3.8,t,!1);let o=Fl("H","#d7263d","#ffffff",128,128,"bold 110px sans-serif");for(let[a,l,c]of[[e,t-13.05,Math.PI],[e+20.05,t,Math.PI/2]]){let h=new X(new Ve(5,5),new pe({map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:.5}));h.position.set(a,22,l),h.rotation.y=c,i.add(h)}n.addCol(e-20,e+20,t-13,t+13),n.addCol(e-17,e+1,t+13,t+23),Jr(n,e-20,e+20,t-13,t+13,26,{x:e+20,z:t,nx:1,nz:0})}function lE(n,e,t){let{scene:i,rand:s}=n,r=new X(new Ve(58,58).rotateX(-Math.PI/2),Xe(5212734,{roughness:1}));r.position.set(e,.14,t),r.receiveShadow=!0,i.add(r);let o=Xe(13154714,{roughness:1});for(let h of[0,Math.PI/2]){let u=new X(new Ve(58,3).rotateX(-Math.PI/2),o);u.rotation.z=0,u.rotateY(h),u.position.set(e,.15,t),i.add(u)}let a=new X(new ke(5,5.4,1,28),Xe(12104876));a.position.set(e,.6,t),i.add(a);let l=new X(new $i(4.6,28).rotateX(-Math.PI/2),Xe(3842248,{roughness:.05,metalness:.3}));l.position.set(e,1.12,t),i.add(l);let c=new X(new ke(.3,.6,3,10),Xe(12104876));c.position.set(e,2.5,t),i.add(c),n.addCol(e-5.2,e+5.2,t-5.2,t+5.2),n.parkTrees=[];for(let h=0;h<22;h++){let u=s()*Math.PI*2,p=9+s()*18,m=e+Math.cos(u)*p,x=t+Math.sin(u)*p;Math.abs(m-e)<2.5||Math.abs(x-t)<2.5||n.parkTrees.push([m,x,1+s()*.4])}}function cE(n,e,t){let{scene:i}=n,s=new X(new Ve(60,60).rotateX(-Math.PI/2),Xe(3422012,{roughness:.95}));s.position.set(e,.14,t),s.receiveShadow=!0,i.add(s);let r=new Me(.14,.02,5.6),o=Xe(15264492),a=new yt(r,o,60),l=0;for(let c of[-12,0,12])for(let h=0;h<=15;h++)l<60&&Ot(a,l++,e-24+h*3.2,.16,t+c,0,1,1,1);a.count=l,a.instanceMatrix.needsUpdate=!0,i.add(a)}function hE(n){let{scene:e}=n,t=eE();t.wrapS=t.wrapT=Bn,t.repeat.set(30,30);let i=new pe({color:3496026,roughness:.12,metalness:.35,normalMap:t,normalScale:new ce(.7,.7),envMapIntensity:1.4}),s=Xe(7035460,{roughness:1}),r=Xe(10130828,{roughness:.9}),o=-1400,a=pn.maxZ,l=-1400,c=a-o,h=new X(new Ve(gt.maxX-gt.minX,c).rotateX(-Math.PI/2),i);h.position.set((gt.minX+gt.maxX)/2,.08,(o+a)/2),e.add(h);let u=gt.minX-l,p=new X(new Ve(u,pn.maxZ-pn.minZ).rotateX(-Math.PI/2),i);p.position.set((l+gt.minX)/2,.08,(pn.minZ+pn.maxZ)/2),e.add(p);let m=(v,_,S,A)=>{let y=new X(new Ve(v,_).rotateX(-Math.PI/2),s);y.position.set(S,.07,A),e.add(y)};m(6,c,gt.minX-1,(o+a)/2),m(6,c,gt.maxX+1,(o+a)/2),m(u,6,(l+gt.minX)/2,pn.minZ-1),m(u+80,6,(l+gt.maxX)/2,pn.maxZ+1);let x=new X(new Me(3,.5,c),r);x.position.set(gt.minX-4.5,.25,(o+a)/2),x.receiveShadow=!0,e.add(x);let g=Rn-Ti,f=Rn+Ti;n.addCol(gt.minX-1,gt.minX,o,g),n.addCol(gt.minX-1,gt.minX,f,pn.minZ),n.addCol(gt.maxX,gt.maxX+1,o,g),n.addCol(gt.maxX,gt.maxX+1,f,a+40),n.addCol(l,gt.minX,pn.minZ-1,pn.minZ),n.addCol(l,gt.maxX+1,pn.maxZ,pn.maxZ+1);let d=0;return{update(v){d+=v,t.offset.set(d*.004,-d*.012)}}}function uE(n){let{scene:e}=n,t=gt.minX-4,i=gt.maxX+4,s=i-t,r=(t+i)/2,o=Xe(9409174,{roughness:.7}),a=um();a.wrapS=a.wrapT=Bn,a.repeat.set(s/8,2);let l=new X(new Me(s,.6,Ti*2+4),o);l.position.set(r,-.24,Rn),l.receiveShadow=!0,l.castShadow=!0,e.add(l);let c=new X(new Ve(s,14).rotateX(-Math.PI/2),new pe({map:a,roughness:.88}));c.position.set(r,.075,Rn),c.receiveShadow=!0,e.add(c);let h=Xe(14278114,{metalness:.8,roughness:.3});for(let V of[-1,1])Xt(e,s,1.1,.25,h,r,.07,Rn+V*(Ti+1.5)),n.addCol(t+4,i-4,Rn+V*(Ti+1.5)-.2,Rn+V*(Ti+1.5)+.2);let u=Xe(15659250,{roughness:.4,metalness:.3}),p=new X(new ke(.7,1.3,58,10).translate(0,29,0),u);p.position.set(r,0,Rn-Ti-2.4),p.rotation.z=-.08,p.castShadow=!0,e.add(p);let m=new F(r-Math.sin(.08)*57,57,Rn-Ti-2.4),x=[];for(let V=1;V<=7;V++)for(let D of[-1,1]){let C=r+D*V*(s/16),w=Rn-Ti-1.4;x.push(m.x,m.y-V*2.2,m.z,C,.6,w)}let g=new Ut;g.setAttribute("position",new nt(x,3)),e.add(new gl(g,new Ho({color:14672872})));let f=Ou();f.wrapS=f.wrapT=Bn;let d=340,v=t,_=i,S=Ai;for(let[V,D]of[[d,v],[_,S]]){let C=f.clone();C.needsUpdate=!0,C.repeat.set(1,(D-V)/28);let w=new X(new Ve(14,D-V).rotateX(-Math.PI/2),new pe({map:C,roughness:.88}));w.rotation.y=Math.PI/2,w.position.set((V+D)/2,.05,Rn),w.receiveShadow=!0,e.add(w)}let A=Xe(12761251,{roughness:.9}),y=gt.maxX+30,M=Rn+70,b=new Ji;b.moveTo(-14,0),b.lineTo(14,0),b.lineTo(14,22),b.lineTo(0,30),b.lineTo(-14,22),b.closePath();let E=new Si;E.absarc(0,17,6,0,Math.PI*2,!0),b.holes.push(E);let T=new Si;T.moveTo(-3,.5),T.lineTo(3,.5),T.lineTo(3,7),T.absarc(0,7,3,0,Math.PI,!1),T.lineTo(-3,.5),b.holes.push(T);let z=new X(new xs(b,{depth:2,bevelEnabled:!1}),A);z.position.set(y,0,M),z.rotation.y=-Math.PI/2,z.castShadow=!0,e.add(z),n.addCol(y-1,y+2.5,M-14,M+14)}function dE(n){let{scene:e}=n,t=ji*2,i=Ou();i.wrapS=i.wrapT=Bn,i.repeat.set(1,t/18);let s=new X(new Ve(9,t).rotateX(-Math.PI/2),new pe({map:i,roughness:.9}));s.position.set(Ai,.05,0),s.receiveShadow=!0,e.add(s);let r=new X(new Ve(9,1.6).rotateX(-Math.PI/2),Xe(15922422));r.position.set(Ai,.07,ji-8),e.add(r);let o=new Me(4,1.1,.7).translate(0,.55,0),a=Math.floor(t/9)*2,l=new yt(o,Xe(16777215,{roughness:.6}),a),c=new Oe,h=0;for(let u=-ji+4;u<=ji-4&&h<a;u+=9)for(let p of[-1,1])Ot(l,h,Ai+p*(4.5+1.6),.05,u,0,1,1,1),c.setHex(h%2?15922422:15229982),l.setColorAt(h,c),h++;return l.count=h,l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0,l.castShadow=!0,e.add(l),{startX:Ai,startZ:ji-8,dirX:0,dirZ:-1,length:t}}function fE(n,e){let{scene:t,rand:i}=n,s=new Ji,r=[[2.25,.35],[2.28,.62],[1.4,.78],[.6,.82],[-1.5,.84],[-2.2,.76],[-2.28,.4],[-2,.28],[2,.28]];s.moveTo(r[0][0],r[0][1]);for(let S of r.slice(1))s.lineTo(S[0],S[1]);s.closePath();let o=new xs(s,{depth:1.78,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2});o.translate(0,0,-.89),o.rotateY(Math.PI/2);let a=new Ji,l=[[.62,.8],[.25,1.28],[-1.05,1.3],[-1.5,.84]];a.moveTo(l[0][0],l[0][1]);for(let S of l.slice(1))a.lineTo(S[0],S[1]);a.closePath();let c=new xs(a,{depth:1.56,bevelEnabled:!1});c.translate(0,0,-.78),c.rotateY(Math.PI/2);let h=[];for(let S of[-.82,.82])for(let A of[-1.38,1.38])h.push(new ke(.33,.33,.24,14).rotateZ(Math.PI/2).translate(S,.33,A));let u=Ks([c,...h]),p=[],m=680;for(let S of Tt)for(let A of[-1,1])for(let y=-m/2+14;y<m/2-14;y+=6.4)Tt.some(M=>Math.abs(M-y)<14)||i()<.62||(i()<.5?p.push([S+A*5.9,y,A>0?Math.PI:0]):p.push([y,S+A*5.9,A>0?-Math.PI/2:Math.PI/2]));let x=p.filter(([S,A])=>!zl(e,S-3,S+3,A-3,A+3)&&!(Math.abs(S-(Tt[5]+3.5))<8&&A>60&&A<200)),g=new wi({color:16777215,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.1}),f=new yt(o,g,x.length),d=new yt(u,new pe({color:1119256,metalness:.6,roughness:.25}),x.length),v=[12589080,1728464,15921906,1316380,7041664,2976335,13082632,7999504,14277081,862827],_=new Oe;x.forEach(([S,A,y],M)=>{Ot(f,M,S,0,A,y,1,1,1),Ot(d,M,S,0,A,y,1,1,1),_.setHex(v[i()*v.length|0]),f.setColorAt(M,_),Math.abs(Math.sin(y))>.5?n.addCol(S-2.3,S+2.3,A-1,A+1):n.addCol(S-1,S+1,A-2.3,A+2.3)}),f.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,f.instanceColor.needsUpdate=!0,f.castShadow=!0,f.receiveShadow=!0,t.add(f,d)}function pE(n,e,t){let{scene:i,rand:s}=n,r=[],o=[],a=[],l=[];for(let m of e)if(m.special!=="parking")for(let x=0;x<4;x++){let g=60/2-2.6,f=(s()-.5)*30,[d,v,_]=x===0?[m.cx+f,m.cz-g,0]:x===1?[m.cx+g,m.cz+f,Math.PI/2]:x===2?[m.cx+f,m.cz+g,Math.PI]:[m.cx-g,m.cz+f,-Math.PI/2];if(zl(t,d-2,d+2,v-2,v+2))continue;let S=s();S<.18?r.push([d,v,_]):S<.45?o.push([d,v,_]):S<.7&&l.push([d,v,_]),s()<.4&&a.push([m.cx+(x%2?(x===1?1:-1)*(60/2-1):(s()-.5)*40),m.cz+(x%2?(s()-.5)*40:(x===0?-1:1)*(60/2-1)),0])}let c=(m,x,g,f=!0)=>{let d=new yt(m,x,Math.max(1,g.length));g.forEach(([v,_,S],A)=>Ot(d,A,v,.13,_,S,1,1,1)),d.count=g.length,d.instanceMatrix.needsUpdate=!0,d.castShadow=f,i.add(d)},h=Ks([new Me(3.6,.12,1.6).translate(0,2.5,0),...[[-1.7,-.7],[1.7,-.7],[-1.7,.7],[1.7,.7]].map(([m,x])=>new Me(.08,2.5,.08).translate(m,1.25,x)),new Me(2.6,.08,.4).translate(0,.5,.45)]);c(h,Xe(2051999,{metalness:.6,roughness:.4}),r);let u=new pe({color:10471912,transparent:!0,opacity:.35,roughness:.05,metalness:.5});c(new Ve(3.4,2.2).translate(0,1.3,.72),u,r,!1);let p=Ks([new Me(1.8,.08,.5).translate(0,.48,0),new Me(1.8,.45,.07).translate(0,.8,.24),new Me(.08,.48,.45).translate(-.8,.24,0),new Me(.08,.48,.45).translate(.8,.24,0)]);c(p,Xe(7031342),o),c(Ks([new ke(.17,.2,.75,10).translate(0,.37,0),new Pt(.19,10,6,0,Math.PI*2,0,Math.PI/2).translate(0,.75,0),new ke(.06,.06,.5,6).rotateZ(Math.PI/2).translate(0,.5,0)]),Xe(13115434,{roughness:.5}),a),c(new ke(.3,.27,.95,10).translate(0,.47,0),Xe(2969402,{roughness:.7}),l)}function mE(n){let{scene:e}=n,t=o=>{let a=document.createElement("canvas");a.width=256,a.height=48;let l=a.getContext("2d");l.fillStyle="#0e6b3a",l.fillRect(0,0,256,48),l.strokeStyle="#fff",l.lineWidth=3,l.strokeRect(3,3,250,42),l.fillStyle="#fff",l.font="bold 28px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(o,128,26);let c=new an(a);return c.colorSpace=vt,new pe({map:c,side:bt})},i=Xe(3817285,{metalness:.6}),s={},r=o=>s[o]||(s[o]=t(o));for(let o=0;o<Tt.length;o++)for(let a=0;a<Tt.length;a++){if(o!==7&&a!==4&&!(o%3===1&&a%3===1))continue;let l=Tt[o]+14/2+1,c=Tt[a]-14/2-1,h=new X(new ke(.05,.05,3.4,6),i);h.position.set(l,1.82,c),e.add(h);let u=new X(new Ve(2.4,.45),r(im[o]));u.position.set(l,3.4,c),u.rotation.y=Math.PI/2,e.add(u);let p=new X(new Ve(2.4,.45),r(sm[a]));p.position.set(l,3,c),e.add(p)}}var gE=[0,.24,.4,.55,.7,.85,1],zu=class{constructor(){this.mode="auto",this.reset()}reset(){this.gear=1,this.rpm=0,this.shiftT=0,this.limiter=!1,this.reverse=!1,this.lastShift=0}gearTop(e,t=this.gear){return e*gE[t]}rpmFor(e,t,i,s){let r=Math.abs(e),o=this.gearTop(t,i),a=i>1?this.gearTop(t,i-1):0,l=(r-a*.35)/(o-a*.35);i===1&&(l=r/o);let c=Math.max(0,.32*s*(1-r/Math.max(1,o*.5)));return Math.max(0,Math.min(1.04,Math.max(l,c)))}shift(e){let t=Math.max(1,Math.min(6,this.gear+e));return t===this.gear?!1:(this.gear=t,this.shiftT=.2,this.lastShift=e,!0)}update(e,t,i,s){this.shiftT=Math.max(0,this.shiftT-s),this.reverse=e<-.5,this.reverse&&(this.gear=1);let r=this.rpmFor(e,i,this.gear,Math.max(0,t));return this.mode==="auto"&&!this.reverse&&this.shiftT<=0&&(r>.93&&this.gear<6&&t>.1?this.shift(1):this.gear>1&&this.rpmFor(e,i,this.gear-1,0)<.72&&(r<.4||t<0)&&this.shift(-1),r=this.rpmFor(e,i,this.gear,Math.max(0,t))),this.limiter=r>=1&&t>0,this.rpm+=(r-this.rpm)*Math.min(1,s*(this.shiftT>0?25:14)),this.shiftT>0?.15:this.limiter?0:(.62+.5*Math.sin(Math.PI*Math.min(1,.18+r*.82)))*(1.22-(this.gear-1)*.07)}},Bl=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0,this.box||(this.box=new zu),this.box.reset()}update(e,t,i){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,u=0,p=h?.25:1,m=this.box.update(l,e.throttle||0,s.topSpeed*c,t);e.throttle>0?u=e.throttle*s.accel*c*p*m*(1-Math.max(0,l)/(s.topSpeed*c)*.55):e.throttle<0&&(u=l>1?e.throttle*s.accel*1.6:e.throttle*s.accel*.5),u-=l*(.028+(h?.06:0))+Math.sign(l)*.6,l+=u*t;let x=this.box.mode==="manual"?this.box.gearTop(s.topSpeed*c)*1.02:1/0,g=s.topSpeed*c,f=-s.topSpeed*.35;l>x&&(l-=(l-x)*Math.min(1,t*1.8)),l=Math.max(f,Math.min(g,l)),Math.abs(l)<.15&&!e.throttle&&(l=0);let d=Math.abs(l),v=Math.min(1,d/8),_=this.steer*.55*s.handling*v*(1-Math.min(1,d/(s.topSpeed*1.4))*.45);d>.5&&(this.heading-=_*(l/d)*t*(d>1?Math.min(2.2,d*.12+.8):1)*2.2);let S=-Math.sin(this.heading),A=-Math.cos(this.heading),y=this.vel.x*S+this.vel.z*A,M=this.vel.x-S*y,b=this.vel.z-A*y;this.drifting=!!(e.handbrake&&d>6);let E=this.drifting?.983:Math.min(.995,.9+s.grip*.06),T=Math.pow(E,t*60);M*=T,b*=T;let z=y+(l-y)*Math.min(1,t*60);this.vel.x=S*z+M,this.vel.z=A*z+b;let V=this.pos.x+this.vel.x*t,D=this.pos.z+this.vel.z*t;if(i){let C=i(V,D,this.pos.x,this.pos.z);V=C.x,D=C.z,C.hitX&&(this.vel.x*=-.25),C.hitZ&&(this.vel.z*=-.25)}return this.pos.x=V,this.pos.z=D,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer,gear:this.box.gear,rpm:this.box.rpm,shifting:this.box.shiftT>0,limiter:this.box.limiter,reverse:this.box.reverse}}};function pm(n={}){let e=n.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1,aim:!1},i={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1,aim:!1},s=!1,r={x:0,y:0,id:null},o="drive",a=!1,l=!1,c=!1,h=!1,u=!1,p=!1,m=!1,x=[],g=w=>document.getElementById(w);function f(){t.steer=(i.right?1:0)-(i.left?1:0),t.throttle=i.gas?1:i.brake?-1:0,t.nitro=i.nitro,t.handbrake=i.handbrake;let w=(i.right?1:0)-(i.left?1:0),P=(i.gas?1:0)-(i.brake?1:0);t.moveX=r.id!==null?r.x:w,t.moveY=r.id!==null?r.y:P,t.run=i.run||i.nitro||r.id!==null&&Math.hypot(r.x,r.y)>.92,t.fire=i.fire,t.aim=i.aim||s||i.fire}function d(w,P){if(!w)return;let O=44,H=k=>{if(k.pointerId!==r.id)return;let Z=w.getBoundingClientRect(),U=k.clientX-(Z.left+Z.width/2),q=k.clientY-(Z.top+Z.height/2),K=U,ue=q;e()&&(K=q,ue=-U);let _e=Math.hypot(K,ue),Re=Math.min(_e,O);_e>0&&(K=K/_e*Re,ue=ue/_e*Re),P.style.transform=`translate(${K}px, ${ue}px)`;let Ie=.12,Pe=K/O,ze=-ue/O;Math.hypot(Pe,ze)<Ie&&(Pe=0,ze=0),r.x=Pe,r.y=ze,f()},W=k=>{if(k.preventDefault(),r.id===null){r.id=k.pointerId;try{w.setPointerCapture(k.pointerId)}catch{}H(k)}},I=k=>{k.pointerId===r.id&&(r.id=null,r.x=0,r.y=0,P.style.transform="translate(0px, 0px)",f())};w.addEventListener("pointerdown",W),w.addEventListener("pointermove",H),w.addEventListener("pointerup",I),w.addEventListener("pointercancel",I),x.push(()=>{w.removeEventListener("pointerdown",W),w.removeEventListener("pointermove",H),w.removeEventListener("pointerup",I),w.removeEventListener("pointercancel",I)})}function v(w,P){if(!w)return;let O=W=>{W.preventDefault(),W.stopPropagation(),P(),w.classList.add("pressed")},H=()=>w.classList.remove("pressed");w.addEventListener("pointerdown",O),w.addEventListener("pointerup",H),w.addEventListener("pointerleave",H),x.push(()=>{w.removeEventListener("pointerdown",O),w.removeEventListener("pointerup",H),w.removeEventListener("pointerleave",H)})}function _(w,P){if(!w)return;let O=0,H=k=>{k.preventDefault(),O++,P==="fire"&&!i.fire&&(h=!0),i[P]=!0,f(),w.classList.add("pressed")},W=()=>{O=Math.max(0,O-1),O===0&&(i[P]=!1,f(),w.classList.remove("pressed"))},I=k=>k.preventDefault();w.addEventListener("pointerdown",H),w.addEventListener("pointerup",W),w.addEventListener("pointercancel",W),w.addEventListener("pointerleave",W),w.addEventListener("contextmenu",I),x.push(()=>{w.removeEventListener("pointerdown",H),w.removeEventListener("pointerup",W),w.removeEventListener("pointercancel",W),w.removeEventListener("pointerleave",W),w.removeEventListener("contextmenu",I)})}function S(w){if(!w)return;let P=H=>{H.preventDefault(),a=!0,w.classList.add("pressed")},O=()=>w.classList.remove("pressed");w.addEventListener("pointerdown",P),w.addEventListener("pointerup",O),w.addEventListener("pointercancel",O),w.addEventListener("pointerleave",O),x.push(()=>{w.removeEventListener("pointerdown",P),w.removeEventListener("pointerup",O),w.removeEventListener("pointercancel",O),w.removeEventListener("pointerleave",O)})}let A={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function y(w){let P=w.target;if(P&&(P.tagName==="INPUT"||P.tagName==="TEXTAREA"))return;let O=w.key,H=A[O];if(H){i[H]=!0,f(),w.preventDefault();return}if(O===" "){if(w.preventDefault(),w.repeat)return;o==="drag"?a=!0:o==="foot"?(i.fire||(h=!0),i.fire=!0,f()):(i.handbrake=!0,f());return}if(O==="e"||O==="E"||O==="Enter"){w.repeat||(l=!0);return}if(O==="q"||O==="Q"){w.repeat||(c=!0);return}if((O==="Shift"||O==="f"||O==="F")&&(i.nitro=!0,f()),(O==="r"||O==="R")&&(i.aim=!0,f()),O==="g"||O==="G"){w.repeat||(u=!0);return}if(O==="b"||O==="B"){w.repeat||(p=!0);return}}function M(w){let P=w.key,O=A[P];if(O){i[O]=!1,f();return}if(P===" "){i.handbrake=!1,i.fire=!1,f();return}(P==="Shift"||P==="f"||P==="F")&&(i.nitro=!1,f()),(P==="r"||P==="R")&&(i.aim=!1,f())}function b(w){w.button===2&&(i.aim=!0,f())}function E(w){w.button===2&&(i.aim=!1,f())}function T(w){o=w==="drag"||w==="foot"?w:"drive";let P=(H,W)=>{let I=g(H);I&&(I.style.display=W?"":"none")};P("steer-zone",o==="drive"),P("pedal-zone",o!=="foot"),P("btn-shift",o==="drag"),P("joystick",o==="foot"),P("foot-zone",o==="foot");for(let H in i)i[H]=!1;s=!1;{let H=g("btn-aim");H&&H.classList.remove("on")}r.id=null,r.x=0,r.y=0;let O=g("joy-knob");O&&(O.style.transform="translate(0px, 0px)");for(let H of document.querySelectorAll("#touch-controls .pressed"))H.classList.remove("pressed");f()}function z(){if(m)return;m=!0,_(g("btn-left"),"left"),_(g("btn-right"),"right"),_(g("btn-gas"),"gas"),_(g("btn-brake"),"brake"),_(g("btn-nitro"),"nitro"),_(g("btn-handbrake"),"handbrake"),S(g("btn-shift")),_(g("btn-fire"),"fire"),_(g("btn-run"),"run"),d(g("joystick"),g("joy-knob")),v(g("btn-action"),()=>{l=!0}),v(g("btn-weapon"),()=>{c=!0}),v(g("btn-aim"),()=>{s=!s;let P=g("btn-aim");P&&P.classList.toggle("on",s),f()}),v(g("btn-gear-up"),()=>{u=!0}),v(g("btn-gear-down"),()=>{p=!0}),window.addEventListener("mousedown",b),window.addEventListener("mouseup",E),x.push(()=>{window.removeEventListener("mousedown",b),window.removeEventListener("mouseup",E)}),window.addEventListener("keydown",y),window.addEventListener("keyup",M),x.push(()=>{window.removeEventListener("keydown",y),window.removeEventListener("keyup",M)});let w=g("touch-controls");w&&(w.style.display="ontouchstart"in window?"":"none"),T(o)}function V(){for(let w of x)w();x.length=0;for(let w in i)i[w]=!1;a=l=c=h=!1,r.id=null,r.x=r.y=0,f(),m=!1}function D(){let w=a;return a=!1,w}let C=w=>()=>{let P;switch(w){case"action":return P=l,l=!1,P;case"cycle":return P=c,c=!1,P;case"fire":return P=h,h=!1,P;case"gup":return P=u,u=!1,P;case"gdown":return P=p,p=!1,P}};return{input:t,consumeShift:D,consumeAction:C("action"),consumeCycle:C("cycle"),consumeFireEdge:C("fire"),consumeGearUp:C("gup"),consumeGearDown:C("gdown"),setMode:T,attach:z,detach:V,get mode(){return o}}}var xE=[.3,.47,.64,.81,1],_E=[1.9,1.45,1.15,.95,.8],kl=.8,gm=.97,vE=.8,yE=45,ME=2.2,EE=[16765286,448160,10182117,15817653,48121,16704576,15681391],Cn=n=>document.getElementById(n);function xm(n,e){return n+Math.random()*(e-n)}function mm(n){return n[Math.random()*n.length|0]}function bE(n){let e=402/(.42*n.topSpeed+.35*n.accel);return Math.min(17,Math.max(8.5,e))*xm(.85,1.15)}function SE(n){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,stats:n}}function wE(n,e,t){let i=n.stats.topSpeed,s=xE[n.gear]*i,r=1-Math.min(1,n.speed/(s*1.02)),o=e*n.stats.accel*_E[n.gear]*Math.max(0,r);o*=n.bogMul,o-=n.speed*.028+Math.sign(n.speed)*.6,n.speed=Math.max(0,n.speed+o*t),n.dist+=n.speed*t,n.rpm=Math.min(1.06,n.speed/s),n.bogMul+=(1-n.bogMul)*Math.min(1,t*2.5)}function TE(n){return n>=kl&&n<=gm?"perfect":n<kl?"early":"late"}function AE(n){if(n.gear>=4)return null;let e=TE(n.rpm);return n.gear++,e==="perfect"?n.speed*=1.015:(n.speed*=.93,n.bogMul=.75),n.limiterT=0,e}function RE(n){let e=bE(n),t=1.1,i=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/i,reactDelay:xm(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:n}}function CE(n,e,t){if(!n.launched)return;let i=e-n.launchT;i<0||(n.speed=n.top*(1-Math.exp(-n.k*i)),n.dist+=n.speed*t)}function PE({falseStart:n,pET:e,aET:t,pDist:i,aDist:s}){return n?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:i>=s}function IE(n,e,t){if(!n)return 100;let i=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(i*10))}function LE(n,e){return n?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function _m(n){let e=Cn("drag-ui"),t=Cn("drag-msg"),i=Cn("drag-result"),s=Cn("rpm-bar"),r=Cn("rpm-shiftzone"),o=Cn("btn-shift"),a={s1:Cn("bulb-s1"),s2:Cn("bulb-s2"),a1:Cn("bulb-a1"),a2:Cn("bulb-a2"),a3:Cn("bulb-a3"),g:Cn("bulb-g"),r:Cn("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let D in a)a[D].classList.remove("lit")}function h(D){a[D].classList.add("lit")}function u(D,C){t.textContent=D,l.msgTimer=C||0}function p(D,C){try{n.audio.beep(D,C)}catch{}}function m(){let D=n.getPlayer();return D&&D.stats?D.stats:n.effectiveStats(D.def,D.upgrades)}function x(D,C){let w=n.city.dragStrip;D.position.set(w.startX+l.perpX*C,0,w.startZ+l.perpZ*C),D.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function g(D,C){let w=n.city.dragStrip;D.position.set(w.startX+l.dirX*C.dist+l.perpX*C.lateral,0,w.startZ+l.dirZ*C.dist+l.perpZ*C.lateral)}function f(D,C,w){let P=D.userData.wheels;if(P)for(let O of P){let H=O.userData.spin||[];for(let W of H)W.rotation.x+=C*w*2.2}}function d(D){return SE(D)}function v(D,C,w){wE(D,C,w)}function _(D){let C=AE(D);C&&(C==="perfect"?(u("PERFECT SHIFT!",1),p(1200,.08)):(u(C==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),p(220,.15)))}function S(D){return RE(D)}function A(D,C){CE(D,l.greenT,C)}function y(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),i.classList.add("hidden"),i.innerHTML="",u("STAGE!"),s.style.width="15%",r.style.left=kl*100+"%",r.style.width=(gm-kl)*100+"%",o&&o.classList.remove("hidden")}function M(){l.phase="green",l.t=0,l.greenT=0,h("g"),u("GO!"),p(880,.4),l.phase="racing"}function b(){l.phase="red",c(),h("r"),u("FALSE START!"),p(180,.6),E("FALSE START \u2014 you jumped the green.")}function E(D){l.phase="done",l.finished=!0;let C=l.player,w=l.ai,P=!!(D&&D.indexOf("FALSE START")===0),O=PE({falseStart:P,pET:C.et,aET:w.finishET,pDist:C.dist,aDist:w.dist}),H=C.et,W=w.finishET,I=C.reaction!=null?C.reaction.toFixed(3)+"s":"\u2014",k=(C.trap*ME).toFixed(1),Z=IE(O,H,W),U=LE(O,P);n.addCash(Z),i.innerHTML="<h2>"+U+"</h2>"+(D?"<p>"+D+"</p>":"")+"<p>ET: "+(H==null?"DNF":H.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(W==null?"DNF":W.toFixed(3)+"s")+"</p><p>Trap speed: "+k+" MPH &nbsp;\xB7&nbsp; Reaction: "+I+"</p><p>+$"+Z+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',i.classList.remove("hidden"),Cn("drag-rematch").onclick=()=>{T()},Cn("drag-back").onclick=()=>{z()};try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}}function T(){l.active&&z();let C=n.getPlayer().group;l.origPos=C.position.clone(),l.origRotY=C.rotation.y;let w=n.city.dragStrip,P=Math.hypot(w.dirX,w.dirZ)||1;l.dirX=w.dirX/P,l.dirZ=w.dirZ/P,l.perpX=-l.dirZ,l.perpZ=l.dirX,x(C,2),C.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=d(m());let O=mm(n.CAR_DEFS),H=n.buildCar(Object.assign({},O,{color:mm(EE)}));n.scene.add(H),x(H,-2),l.aiGroup=H,l.ai=S(n.effectiveStats(O)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),n.controls.setMode("drag");let W=n.camera;W.position.set(w.startX-l.dirX*12+l.perpX*12,5,w.startZ-l.dirZ*12+l.perpZ*12),W.lookAt(w.startX+l.dirX*8,1,w.startZ+l.dirZ*8),y()}function z(){l.aiGroup&&(n.scene.remove(l.aiGroup),l.aiGroup=null);let D=n.getPlayer();D&&D.group&&l.origPos&&(D.group.position.copy(l.origPos),D.group.rotation.y=l.origRotY),e.classList.add("hidden"),i.classList.add("hidden"),o&&o.classList.add("hidden");try{n.controls.setMode("drive")}catch{}try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function V(D){if(!l.active)return;D=Math.min(D,.05);let C=n.controls.input||{},w=Math.max(0,Math.min(1,C.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&w>.5){b();return}if(l.msgTimer>0&&(l.msgTimer-=D,l.msgTimer<=0&&l.phase==="racing"&&u("GO!")),l.phase==="stage")l.t+=D,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,u("READY\u2026"));else if(l.phase==="tree"){l.t+=D;let O=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<O;)l.ambersLit++,h("a"+l.ambersLit),p(440,.15);l.t>=1.5&&M()}else if(l.phase==="racing"){l.greenT+=D;let O=l.player,H=l.ai;!O.reacted&&w>.5&&(O.reacted=!0,O.reaction=l.greenT),!H.launched&&l.greenT>=H.reactDelay&&(H.launched=!0,H.launchT=l.greenT),v(O,w,D),n.controls.consumeShift&&n.controls.consumeShift()&&_(O),O.rpm>=1&&w>.3?(O.limiterT+=D,O.limiterT>=vE&&(O.speed*=.9,O.limiterT=0,u("LIMITER!",.8),p(160,.2))):O.limiterT=Math.max(0,O.limiterT-D*2),A(H,D),O.et==null&&O.dist>=402&&(O.et=l.greenT,O.trap=O.speed),H.finishET==null&&H.dist>=402&&(H.finishET=l.greenT,H.trap=H.speed);let W=l.greenT>=yE;if(O.et!=null&&H.finishET!=null||W||O.et!=null&&l.greenT>O.et+8||H.finishET!=null&&l.greenT>H.finishET+8){E(W&&O.et==null&&H.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,O.rpm)*100+"%";try{n.audio.engine(O.rpm,w),n.audio.skid(w>.8&&O.speed<8&&O.gear===0)}catch{}}let P=n.getPlayer().group;if(g(P,l.player),l.aiGroup&&g(l.aiGroup,l.ai),f(P,l.player.speed,D),l.aiGroup&&f(l.aiGroup,l.ai.speed,D),l.phase==="racing"||l.phase==="done"){let O=n.camera,H=P.position.x,W=P.position.z,I=H-l.dirX*11+l.perpX*7,k=W-l.dirZ*11+l.perpZ*7;O.position.x+=(I-O.position.x)*Math.min(1,D*4),O.position.y+=(4.5-O.position.y)*Math.min(1,D*4),O.position.z+=(k-O.position.z)*Math.min(1,D*4),O.lookAt(H+l.dirX*12,1.2,W+l.dirZ*12)}}return Cn("drag-exit").onclick=()=>z(),{enter:T,exit:z,update:V,get active(){return l.active}}}function vm(){let n=null,e=null,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=null,h=null,u=null,p=null,m=null,x=null,g=0,f=0,d=0,v=8,_=850,S=7e3,A=null,y=null,M=!1,b=!1;function E(){if(n)return!0;let z=window.AudioContext||window.webkitAudioContext;if(!z)return!1;n=new z,e=n.createGain(),e.gain.value=.5,e.connect(n.destination);let V=new Float32Array(32),D=new Float32Array(32);for(let K=1;K<32;K++){let ue=Math.exp(-Math.pow((K-6)/2.5,2))*.6;D[K]=1/Math.pow(K,.9)*(K%2?1:.65)+ue/K}l=n.createPeriodicWave(V,D),t=n.createOscillator(),t.setPeriodicWave(l),t.frequency.value=50,i=n.createOscillator(),i.type="sawtooth",i.frequency.value=25,s=n.createOscillator(),s.type="triangle",s.frequency.value=100;let C=n.createGain();C.gain.value=.55;let w=n.createGain();w.gain.value=.35,a=n.createGain(),a.gain.value=.05,c=n.createOscillator(),c.frequency.value=12,h=n.createGain(),h.gain.value=.18;let P=n.createGain();P.gain.value=.82,c.connect(h),h.connect(P.gain),t.connect(C),i.connect(w),s.connect(a),C.connect(P),w.connect(P),a.connect(P),u=n.createWaveShaper();let O=new Float32Array(1024);for(let K=0;K<1024;K++){let ue=K/512-1;O[K]=Math.tanh(ue*2.4)}u.curve=O,u.oversample="2x",p=n.createGain(),p.gain.value=1,P.connect(p),p.connect(u),r=n.createBiquadFilter(),r.type="lowpass",r.frequency.value=600,r.Q.value=1.2;let H=n.createBiquadFilter();H.type="peaking",H.frequency.value=160,H.gain.value=6,H.Q.value=.9,o=n.createGain(),o.gain.value=0,u.connect(r),r.connect(H),H.connect(o),o.connect(e),t.start(),i.start(),s.start(),c.start();let W=n.sampleRate,I=n.createBuffer(1,W,n.sampleRate),k=I.getChannelData(0);for(let K=0;K<W;K++)k[K]=Math.random()*2-1;y=I;let Z=n.createBufferSource();Z.buffer=I,Z.loop=!0;let U=n.createBiquadFilter();U.type="bandpass",U.frequency.value=900,U.Q.value=1.1,A=n.createGain(),A.gain.value=0,Z.connect(U),U.connect(A),A.connect(e),Z.start();let q=n.createBufferSource();return q.buffer=I,q.loop=!0,m=n.createBiquadFilter(),m.type="bandpass",m.frequency.value=700,m.Q.value=.8,x=n.createGain(),x.gain.value=0,q.connect(m),m.connect(x),x.connect(e),q.start(0,.37),!0}function T(z){if(!y)return;let V=n.createBufferSource();V.buffer=y;let D=n.createBiquadFilter();D.type="bandpass",D.frequency.value=600+Math.random()*900,D.Q.value=2;let C=n.createGain();C.gain.setValueAtTime(1e-4,z),C.gain.exponentialRampToValueAtTime(.35,z+.004),C.gain.exponentialRampToValueAtTime(1e-4,z+.05),V.connect(D),D.connect(C),C.connect(e),V.start(z,Math.random()*.8),V.stop(z+.07)}return{unlock(){b=!0,E()&&(n.state==="suspended"&&n.resume(),M=!0)},setEngine(z){v=z.cyl||8,_=z.idle||850,S=z.red||7e3},engine(z,V,D){if(!n||!M)return;let C=Math.max(0,Math.min(1.04,z)),w=Math.max(0,Math.min(1,V)),P=n.currentTime;if(C<.001&&w<.001){o.gain.setTargetAtTime(0,P,.08),x.gain.setTargetAtTime(0,P,.08),f=0;return}let H=(_+(S-_)*C)/60*v/2;t.frequency.setTargetAtTime(H,P,.025),i.frequency.setTargetAtTime(H/2,P,.025),s.frequency.setTargetAtTime(H*3.01,P,.025),c.frequency.setTargetAtTime(Math.max(4,H/(v>=8?4:2)),P,.05),h.gain.setTargetAtTime((v>=8?.22:.1)*(1-C*.7),P,.05),p.gain.setTargetAtTime(.8+w*2.2+C*.6,P,.05),r.frequency.setTargetAtTime(380+C*2600*(.45+w*.55),P,.04),a.gain.setTargetAtTime(.03+C*C*.12,P,.05);let W=(.07+w*.08+C*.06)*(D?.45:1);o.gain.setTargetAtTime(W,P,D?.015:.05),m.frequency.setTargetAtTime(500+C*2400,P,.05),x.gain.setTargetAtTime(w*(.015+C*.05),P,.06),d-=1/60,g>.6&&w<.1&&C>.45&&(d=Math.min(d,-.6)),d<-.01&&w<.15&&C>.3&&Math.random()<.18&&T(P),d<-.01?d+=1/60*.5:d=Math.max(d,0),g=w,f=C},shiftBlip(z){if(!n||!M)return;let V=n.currentTime;o.gain.cancelScheduledValues(V),o.gain.setValueAtTime(o.gain.value,V),o.gain.linearRampToValueAtTime(o.gain.value*.35,V+.04),z&&T(V+.05)},skid(z){!n||!M||A.gain.setTargetAtTime(z?.12:0,n.currentTime,z?.05:.12)},beep(z=660,V=.08){if(!b||!E())return;n.state==="suspended"&&n.resume();let D=n.currentTime,C=n.createOscillator();C.type="sine",C.frequency.value=z;let w=n.createGain();w.gain.setValueAtTime(1e-4,D),w.gain.exponentialRampToValueAtTime(.25,D+.012),w.gain.exponentialRampToValueAtTime(1e-4,D+V),C.connect(w),w.connect(e),C.start(D),C.stop(D+V+.03)},shot(z="pistol"){if(!b||!E())return;let V=n.currentTime,D={pistol:[2600,.16,.5],glock:[2900,.14,.48],deagle:[1800,.3,.8],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],ak:[2e3,.22,.62],rifle:[2200,.2,.55],sniper:[1500,.45,.9],minigun:[3200,.06,.3]}[z]||[2600,.16,.5],C=n.createBufferSource();C.buffer=y;let w=n.createBiquadFilter();w.type="lowpass",w.frequency.setValueAtTime(D[0],V),w.frequency.exponentialRampToValueAtTime(300,V+D[1]);let P=n.createGain();P.gain.setValueAtTime(D[2],V),P.gain.exponentialRampToValueAtTime(1e-4,V+D[1]),C.connect(w),w.connect(P),P.connect(e),C.start(V,Math.random()*.5),C.stop(V+D[1]+.02);let O=n.createOscillator();O.type="sine",O.frequency.setValueAtTime(140,V),O.frequency.exponentialRampToValueAtTime(40,V+.12);let H=n.createGain();H.gain.setValueAtTime(D[2]*.8,V),H.gain.exponentialRampToValueAtTime(1e-4,V+.14),O.connect(H),H.connect(e),O.start(V),O.stop(V+.16)},click(){this.beep(1800,.03)},shutdown(){if(n)try{n.close()}catch{}n=null,e=null,M=!1,t=i=s=r=o=A=y=null}}}var Mm="citydriver_save_v1";var Gl=5,DE=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295];var Em=["engine","turbo","tires","suspension","nitro"],UE={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},NE={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},Jo=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function Hu(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:Jo()},paint:{sport:14100029},wheels:{sport:0}}}function OE(n){let e=Object.assign(Hu(),n||{}),t=new Set(Ki.map(i=>i.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(i=>t.has(i)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let i of e.owned){if(!e.upgrades[i]||typeof e.upgrades[i]!="object")e.upgrades[i]=Jo();else for(let s of Em)e.upgrades[i][s]=Math.max(0,Math.min(Gl,e.upgrades[i][s]|0));typeof e.paint[i]!="number"&&(e.paint[i]=14100029),e.wheels[i]=Math.max(0,e.wheels[i]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function bm(){try{let n=localStorage.getItem(Mm);return n?OE(JSON.parse(n)):Hu()}catch{return Hu()}}function gn(n){try{localStorage.setItem(Mm,JSON.stringify(n))}catch{}}function ym(n,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+n.price/2e4))}var zE=n=>"#"+n.toString(16).padStart(6,"0");function Sm(n){let e=n.save,t=g=>document.getElementById(g),i=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let g of Ki)for(let f in o)o[f]=Math.max(o[f],g[f]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(g,f,d)=>{let v=Math.max(5,Math.round(f/d*100));return`<div class="stat-row"><span>${g}</span><div class="sbar"><i style="width:${v}%"></i></div></div>`};function c(){i.innerHTML=Ki.map(g=>{let f=e.owned.includes(g.id),d=e.currentCar===g.id,v;return d?v='<button class="buy-btn" disabled>SELECTED</button>':f?v=`<button class="buy-btn" data-act="select" data-id="${g.id}">SELECT</button>`:v=`<button class="buy-btn" data-act="buy" data-id="${g.id}"${e.cash<g.price?" disabled":""}>$${g.price.toLocaleString()}</button>`,`<div class="car-card${d?" selected":""}"><div class="cinfo"><b>${g.name}</b><small>${g.desc}</small><div class="stat-bars">${l("SPD",g.topSpeed,o.topSpeed)}${l("ACC",g.accel,o.accel)}${l("HDL",g.handling,o.handling)}${l("GRP",g.grip,o.grip)}</div></div>${v}</div>`}).join("")}function h(){let g=n.getDef(e.currentCar);if(!g){s.innerHTML="";return}let f=e.upgrades[g.id]||(e.upgrades[g.id]=Jo());s.innerHTML=`<div class="upg-car-name">${g.name} \u2014 performance</div>`+Em.map(d=>{let v=f[d]||0,_=v>=Gl,S=_?0:ym(g,d,v),A="";for(let M=0;M<Gl;M++)A+=`<div class="pip${M<v?" on":""}"></div>`;let y=_?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${d}"${e.cash<S?" disabled":""}>$${S.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${UE[d]}</b><small>${NE[d]}</small><div class="pips">${A}</div></div>${y}</div>`}).join("")}function u(){let g=e.currentCar,f=e.paint[g],d=DE.map(v=>`<button class="swatch${v===f?" sel":""}" data-hex="${v}" style="background:${zE(v)}" aria-label="paint"></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Quick paint \u2014 FREE</b><div class="swatch-row">${d}</div></div><button class="mbtn primary" data-act="editor" style="width:100%">\u{1F3A8} OPEN SKIN EDITOR \u2014 all free</button><p class="store-tip">Any color, rims, stripes, underglow, window tint, and your driver's look.</p>`}function p(){a(),c(),h(),u()}i.addEventListener("click",g=>{let f=g.target.closest("button[data-act]");if(!f||f.disabled)return;let d=n.getDef(f.dataset.id);if(d)if(f.dataset.act==="buy"){if(e.owned.includes(d.id)||e.cash<d.price)return;e.cash-=d.price,e.owned.push(d.id),e.upgrades[d.id]||(e.upgrades[d.id]=Jo()),typeof e.paint[d.id]!="number"&&(e.paint[d.id]=d.color),e.wheels[d.id]===void 0&&(e.wheels[d.id]=0),e.currentCar=d.id,gn(e),n.onSelectCar(d.id),p()}else{if(e.currentCar===d.id)return;e.currentCar=d.id,gn(e),n.onSelectCar(d.id),p()}}),s.addEventListener("click",g=>{let f=g.target.closest("button[data-key]");if(!f||f.disabled)return;let d=n.getDef(e.currentCar);if(!d)return;let v=f.dataset.key,_=e.upgrades[d.id]||(e.upgrades[d.id]=Jo()),S=_[v]||0,A=ym(d,v,S);S>=Gl||e.cash<A||(e.cash-=A,_[v]=S+1,gn(e),n.refreshScene(),p())}),r.addEventListener("click",g=>{let f=e.currentCar;if(g.target.closest('button[data-act="editor"]')){n.openEditor&&n.openEditor();return}let d=g.target.closest("button.swatch");if(d){let v=parseInt(d.dataset.hex,10);e.paint[f]!==v&&(e.paint[f]=v,gn(e),n.onPaint(v),p())}});let m=[...document.querySelectorAll("#garage .gtab")],x={cars:i,upgrades:s,style:r};return m.forEach(g=>g.addEventListener("click",()=>{m.forEach(f=>f.classList.toggle("active",f===g));for(let f in x)x[f].classList.toggle("hidden",f!==g.dataset.tab)})),p(),{refresh:p}}var wm=["low","medium","high"];function Fu(n){switch(n){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var Vl=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,Fu(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};Nt();var Wl={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.42,stars:1}},Bu=["day","sunset","night"],HE=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`,FE=`
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
}`;function Tm(){let n=new Pt(1500,24,16),e={uTop:{value:new Oe(3108822)},uHorizon:{value:new Oe(13625079)},uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Oe(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new sn({vertexShader:HE,fragmentShader:FE,uniforms:e,side:dn,depthWrite:!1,fog:!1}),i=new X(n,t);return i.frustumCulled=!1,i.renderOrder=-10,{mesh:i,uniforms:e}}function BE(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new F(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}function Am(n,e){let t=Wl[e]||Wl.day,{uniforms:i,sun:s,hemi:r,scene:o,renderer:a}=n;i.uTop.value.setHex(t.top),i.uHorizon.value.setHex(t.horizon),i.uSunColor.value.setHex(t.sunColor),i.uSunI.value=t.sunI,i.uStars.value=t.stars;let l=BE(t.elev,t.azim);return i.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),n.sunElev=t.elev,n.sunAzim=t.azim,n.sunDir=l,t}Nt();function kE(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new an(n);return i.colorSpace=vt,i}var ku=null;function GE(){return ku||(ku=kE()),ku}var oi=class{constructor(e,t,{color:i=12303291,opacity:s=.5,blending:r=us,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new Ve(1,1),this.mat=new qs({map:GE(),color:i,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new Xr(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new F}emit(e,t,i,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,i);let u=h.userData;u.life=a,u.maxLife=a,u.vx=s,u.vy=r,u.vz=o,u.grow=c,u.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let i of this.items){if(!i.visible)continue;let s=i.userData;if(s.life-=e,s.life<=0){i.visible=!1;continue}i.position.x+=s.vx*e,i.position.y+=s.vy*e,i.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;i.scale.set(o,o,1),i.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},Xl=class{constructor(e,t=400){this.max=t,this.i=0;let i=new Ve(.32,1.4);i.rotateX(-Math.PI/2),this.mesh=new yt(i,new ft({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new pt;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new pt,this._q=new kn,this._p=new F,this._s=new F(1,1,1),this._up=new F(0,1,0)}add(e,t,i){this._q.setFromAxisAngle(this._up,i),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function Ko(){return{driftT:0,driftAcc:0}}function Rm(n,e,t,i){if(e&&Math.abs(t)>=8)return n.driftT+=i,n.driftAcc+=i*15,0;let s=0;return n.driftT>=1&&(s=Math.round(n.driftAcc)),n.driftT=0,n.driftAcc=0,s}var Cm=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function Pm(n){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;e=Cm()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),n&&n(t.w,t.h)}async function s(){if(!Cm())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:t,goLandscape:s,refresh:i,get rotated(){return e}}}var ys=[14100029,16735802,16747546,16757504,16765503,13038642,4906624,1483594,1013358,1622208,3718648,2060267,1981066,8141549,11032055,15557798,16723555,7999504,9067034,13211182,16317180,13358561,7041664,1120295],ql=[16109749,15250575,13011554,11037509,8014380,4860954],Zl=[1118481,2759184,5913118,10119738,14266986,15263976,14100029,3718648],jo=["none","center","dual","side"],Qo=["clear","dark","limo"],Ms=["none","cap","beanie","cowboy","crown","helmet"],Yl={none:"No hat",cap:"Snapback",beanie:"Beanie",cowboy:"Stetson",crown:"Crown",helmet:"Helmet"},Qi=n=>Number.isInteger(n)&&n>=0&&n<=16777215,Gu=(n,e,t)=>e.includes(n)?n:t;function Im(){return{rims:12172998,stripes:"none",stripe:16317180,glow:null,tint:"dark"}}function VE(){return{shirt:2845872,pants:2963272,skin:13011554,hair:2759184,hat:"none",hatColor:2237739}}function Lm(n){let e=Im(),t=n&&typeof n=="object"?n:{};return{rims:Qi(t.rims)?t.rims:e.rims,stripes:Gu(t.stripes,jo,e.stripes),stripe:Qi(t.stripe)?t.stripe:e.stripe,glow:Qi(t.glow)?t.glow:null,tint:Gu(t.tint,Qo,e.tint)}}function $l(n){let e=VE(),t=n&&typeof n=="object"?n:{};return{shirt:Qi(t.shirt)?t.shirt:e.shirt,pants:Qi(t.pants)?t.pants:e.pants,skin:Qi(t.skin)?t.skin:e.skin,hair:Qi(t.hair)?t.hair:e.hair,hat:Gu(t.hat,Ms,e.hat),hatColor:Qi(t.hatColor)?t.hatColor:e.hatColor}}function Vu(n){return String(n??"").replace(/[^\w .\-'!?]/g,"").trim().slice(0,16)}function Dm(n){(!n.carSkin||typeof n.carSkin!="object")&&(n.carSkin={});for(let t of Object.keys(n.carSkin))n.carSkin[t]=Lm(n.carSkin[t]);n.outfit=$l(n.outfit),n.hats=Ms.slice();let e=Vu(n.name);return n.name=e||"Driver"+Math.floor(1e3+Math.random()*9e3),n}function js(n,e){return n.carSkin[e]||(n.carSkin[e]=Im()),n.carSkin[e]}function Um(n,e){let t=js(n,e),i=n.outfit;return{p:n.paint[e]|0,r:t.rims,s:jo.indexOf(t.stripes),sc:t.stripe,g:t.glow==null?-1:t.glow,t:Qo.indexOf(t.tint),o:[i.shirt,i.pants,i.skin,i.hair,Ms.indexOf(i.hat),i.hatColor]}}function Nm(n){n=n||{};let e=Array.isArray(n.o)?n.o:[];return{paint:Qi(n.p)?n.p:null,carSkin:Lm({rims:n.r,stripes:jo[n.s],stripe:n.sc,glow:n.g,tint:Qo[n.t]}),outfit:$l({shirt:e[0],pants:e[1],skin:e[2],hair:e[3],hat:Ms[e[4]],hatColor:e[5]})}}var Jl=n=>"#"+(n|0).toString(16).padStart(6,"0");var Kl=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,dmg:22,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"glock",name:"Glock 19",price:1800,rate:.16,auto:!1,pellets:1,spread:.014,range:85,dmg:20,ammoBox:34,ammoPrice:70,start:34,desc:"Fast-firing 9mm. Tap tap tap."},{id:"deagle",name:"Desert Eagle",price:4200,rate:.55,auto:!1,pellets:1,spread:.01,range:110,dmg:55,ammoBox:14,ammoPrice:110,start:14,desc:"Hand cannon. Huge damage."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,dmg:14,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,dmg:12,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"ak",name:"AK-47",price:7500,rate:.11,auto:!0,pellets:1,spread:.022,range:120,dmg:26,ammoBox:60,ammoPrice:180,start:60,desc:"Hard-hitting full auto."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,dmg:24,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."},{id:"sniper",name:"Longshot .50",price:15e3,rate:1.3,auto:!1,pellets:1,spread:.001,range:260,dmg:120,ammoBox:10,ammoPrice:250,start:10,desc:"One shot, one drop. Huge range."},{id:"minigun",name:"Shredder Minigun",price:4e4,rate:.04,auto:!0,pellets:1,spread:.05,range:100,dmg:14,ammoBox:400,ammoPrice:600,start:400,desc:"Melts everything. Eats ammo."}],Om=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],ea=0,jl=Ms.map(n=>({id:n,name:Yl[n],price:0})),Wu=15,es=n=>Kl.find(e=>e.id===n)||null;function zm(n){let e=new Set(Kl.map(t=>t.id));Array.isArray(n.weapons)||(n.weapons=[]),n.weapons=n.weapons.filter((t,i,s)=>e.has(t)&&s.indexOf(t)===i),(!n.ammo||typeof n.ammo!="object")&&(n.ammo={});for(let t of Object.keys(n.ammo))e.has(t)||delete n.ammo[t];for(let t of n.weapons)n.ammo[t]=Math.max(0,n.ammo[t]|0);return n.weapons.includes(n.equipped)||(n.equipped=n.weapons[0]||null),n.outfit=$l(n.outfit),n.hats=jl.map(t=>t.id),n}var ai=n=>({ok:!1,msg:n}),Qs=n=>({ok:!0,msg:n});function Hm(n,e){let t=es(e);return t?n.weapons.includes(e)?ai("Already owned"):n.cash<t.price?ai("Not enough cash"):(n.cash-=t.price,n.weapons.push(e),n.ammo[e]=(n.ammo[e]|0)+t.start,n.equipped=e,Qs(t.name+" bought")):ai("Unknown weapon")}function Fm(n,e){let t=es(e);return t?n.weapons.includes(e)?n.cash<t.ammoPrice?ai("Not enough cash"):(n.cash-=t.ammoPrice,n.ammo[e]=(n.ammo[e]|0)+t.ammoBox,Qs("+"+t.ammoBox+" rounds")):ai("Buy the gun first"):ai("Unknown weapon")}function Bm(n,e){return e===null?(n.equipped=null,Qs("Holstered")):n.weapons.includes(e)?(n.equipped=e,Qs(es(e).name+" equipped")):ai("Not owned")}function Xu(n){let e=[...n.weapons,null];if(e.length===1)return null;let t=e.indexOf(n.equipped);return n.equipped=e[(t+1)%e.length],n.equipped}function km(n,e){return!Number.isInteger(e)||e<0||e>16777215?ai("Unknown color"):n.outfit.shirt===e?ai("Already wearing it"):n.cash<ea?ai("Not enough cash"):(n.cash-=ea,n.outfit.shirt=e,Qs("New shirt"))}function Gm(n,e){let t=jl.find(i=>i.id===e);return t?n.hats.includes(e)?(n.outfit.hat=e,Qs(t.name+" on")):n.cash<t.price?ai("Not enough cash"):(n.cash-=t.price,n.hats.push(e),n.outfit.hat=e,Qs(t.name+" bought")):ai("Unknown hat")}var Ql=class{constructor(){this.reset(0,0,0)}reset(e,t,i){this.pos={x:e,z:t},this.heading=i,this.speed=0,this.phase=0}update(e,t,i){t=Math.min(t,.05);let s=Vm(e.moveX||0),r=Vm(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,u=this.pos.z+c*this.speed*t;if(i){let p=i(h,u,.45);h=p.x,u=p.z}return this.pos.x=h,this.pos.z=u,this.phase+=this.speed*t*2.1,this}};function Vm(n){return n<-1?-1:n>1?1:n}function Kr(n,e,t,i){let s=n-t,r=e-i;return Math.sqrt(s*s+r*r)}function qu(n,e,t){let i=Math.cos(t),s=-Math.sin(t);return{x:n-i*1.9,z:e-s*1.9,heading:t}}function Wm(n,e,t,i,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(n<s.minX||n>s.maxX)return 1/0}else{let l=(s.minX-n)/t,c=(s.maxX-n)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(i)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/i,c=(s.maxZ-e)/i;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function Zu(n,e,t,i,s,r,o,a){let l=n-s,c=e-r,h=l*t+c*i,u=l*l+c*c-o*o,p=h*h-u;if(p<0)return 1/0;let m=Math.sqrt(p),x=-h-m;return x<0&&(x=-h+m),x>=0&&x<=a?x:1/0}Nt();var WE=()=>new pe({color:13011554,roughness:.75}),XE=()=>new pe({color:2963272,roughness:.85}),qE=()=>new pe({color:1118481,roughness:.6}),ZE=()=>new pe({color:2759184,roughness:.9}),YE=()=>new pe({color:1908515,metalness:.7,roughness:.35});function xt(n,e,t,i,s=0){let r=new Me(n,e,t);r.translate(0,s,0);let o=new X(r,i);return o.castShadow=!0,o}function $E(n){let e=new ot,t=YE(),i=new pe({color:7031342,roughness:.8});if(n==="pistol")e.add(xt(.06,.08,.24,t,.05).translateZ(-.08)),e.add(xt(.05,.12,.06,t,-.02));else if(n==="shotgun")e.add(xt(.07,.07,.75,t,.05).translateZ(-.28)),e.add(xt(.08,.09,.22,i,0).translateZ(-.38)),e.add(xt(.07,.12,.3,i,0).translateZ(.18));else if(n==="smg")e.add(xt(.07,.11,.42,t,.05).translateZ(-.12)),e.add(xt(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(xt(.04,.04,.12,t,.07).translateZ(-.38));else if(n==="glock"||n==="deagle"){let s=n==="deagle";e.add(xt(s?.07:.06,s?.09:.075,s?.3:.22,t,.05).translateZ(-.08)),e.add(xt(.05,.13,.065,n==="deagle"?i:t,-.03))}else if(n==="sniper")e.add(xt(.06,.1,.95,t,.05).translateZ(-.3)),e.add(xt(.045,.045,.32,t,.14).translateZ(-.12)),e.add(xt(.06,.13,.3,i,0).translateZ(.3));else if(n==="minigun"){for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.add(xt(.03,.03,.8,t,.05+Math.sin(r)*.06).translateX(Math.cos(r)*.06).translateZ(-.35))}e.add(xt(.2,.2,.3,t,.05).translateZ(.05))}else if(n==="ak"){e.add(xt(.07,.11,.72,t,.05).translateZ(-.22));let s=xt(.06,.2,.08,t,-.1).translateZ(-.18);s.rotation.x=.35,e.add(s),e.add(xt(.06,.12,.28,i,.02).translateZ(.26)),e.add(xt(.07,.06,.24,i,0).translateZ(-.38))}else e.add(xt(.07,.11,.7,t,.05).translateZ(-.22)),e.add(xt(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(xt(.06,.13,.26,t,.02).translateZ(.24)),e.add(xt(.05,.05,.2,t,.14).translateZ(-.15));return e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function JE(n,e){if(n==="crown"){let t=new ot,i=new pe({color:16765503,metalness:1,roughness:.25,emissive:3811840}),s=new X(new ke(.16,.16,.09,16,1,!0),i);s.material.side=bt,s.position.y=.02,t.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new X(new gs(.035,.09,4),i);a.position.set(Math.cos(o)*.155,.1,Math.sin(o)*.155),t.add(a);let l=new X(new Pt(.018,6,6),new pe({color:e,emissive:e,emissiveIntensity:.6}));l.position.set(Math.cos(o+.5)*.162,.02,Math.sin(o+.5)*.162),t.add(l)}return t}if(n==="helmet"){let t=new ot,i=new wi({color:e,metalness:.4,roughness:.25,clearcoat:1}),s=new X(new Pt(.2,16,12,0,Math.PI*2,0,Math.PI/1.7),i);s.position.y=-.06,t.add(s);let r=new X(new Pt(.205,16,8,Math.PI*1.2,Math.PI*.6,Math.PI*.35,Math.PI*.25),new pe({color:724762,metalness:.9,roughness:.1}));return r.position.y=-.06,t.add(r),t}if(n==="cap"){let t=new ot,i=new pe({color:e,roughness:.7}),s=new X(new Pt(.155,14,8,0,Math.PI*2,0,Math.PI/2),i);t.add(s);let r=xt(.24,.02,.14,i);return r.position.set(0,.01,-.15),t.add(r),t}if(n==="beanie"){let t=new pe({color:e,roughness:.95});return new X(new Pt(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(n==="cowboy"){let t=new ot,i=new pe({color:e,roughness:.85}),s=new X(new ke(.3,.3,.02,20),i),r=new X(new ke(.12,.15,.17,14),i);return r.position.y=.09,t.add(s,r),t}return null}function jr(n){let e=new ot,t=WE(),i=XE(),s=qE(),r=ZE(),o=new pe({color:n.shirt,roughness:.8}),a=[],l=[];for(let S of[-1,1]){let A=new ot;A.position.set(S*.12,.92,0),A.add(xt(.17,.84,.2,i,-.42));let y=xt(.17,.09,.3,s,-.88);y.position.z=-.04,A.add(y),e.add(A),a.push(A);let M=new ot;M.position.set(S*.33,1.5,0),M.add(xt(.13,.36,.15,o,-.17)),M.add(xt(.11,.3,.12,t,-.5));let b=xt(.1,.1,.1,t,-.69);M.add(b),e.add(M),l.push(M)}let c=xt(.52,.62,.27,o,1.23);e.add(c);let h=xt(.53,.06,.28,s,.93);e.add(h);let u=xt(.12,.08,.12,t,1.57);e.add(u);let p=new X(new Pt(.15,16,12),t);p.position.y=1.74,p.scale.set(1,1.12,1),p.castShadow=!0,e.add(p);let m=new X(new Pt(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),r);m.position.y=1.76,e.add(m);let x=new ot,g=new X(new Me(.3,.62,.1).translate(0,-.31,0),r);g.position.set(0,1.84,.13),g.rotation.x=.12,g.castShadow=!0;let f=new X(new Me(.05,.36,.14).translate(0,-.18,0),r);f.position.set(-.15,1.82,.02);let d=f.clone();d.position.x=.15,x.add(g,f,d),x.visible=!1,e.add(x);let v=new ot;v.position.y=1.8,e.add(v);let _=new ot;return _.position.y=-.69,l[1].add(_),e.userData={legs:a,arms:l,shirt:o,skin:t,pants:i,hair:r,longHair:x,hatSlot:v,gunSlot:_,gunId:null,hatId:null,hatColor:null,recoil:0},xi(e,n),e}function xi(n,e){let t=n.userData;t.shirt.color.setHex(e.shirt),e.pants!=null&&t.pants.color.setHex(e.pants),e.skin!=null&&t.skin.color.setHex(e.skin),e.hair!=null&&t.hair.color.setHex(e.hair);let i=e.hatColor!=null?e.hatColor:e.shirt;if(t.hatId!==e.hat||t.hatColor!==i){t.hatSlot.clear();let s=JE(e.hat,i);s&&t.hatSlot.add(s),t.hatId=e.hat,t.hatColor=i}t.hair.visible=e.hat!=="helmet",t.longHair.visible=!!e.hairLong&&e.hat!=="helmet"}function ta(n,e){let t=n.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let i=$E(e);i.rotation.x=-Math.PI/2,t.gunSlot.add(i)}t.gunId=e}}function Es(n,e,t,i,s){let r=n.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),i?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),n.position.y=Math.abs(Math.cos(e))*o*.05}function ec(n){n.userData.recoil=1}Nt();var Xm=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],KE=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function qm(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new an(i);return s.colorSpace=vt,s.anisotropy=4,s}function jE(n,e,t){return qm(512,128,(i,s,r)=>{i.fillStyle="#0b0f1a",i.fillRect(0,0,s,r),i.strokeStyle=t,i.lineWidth=8,i.strokeRect(6,6,s-12,r-12),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.font="bold 58px sans-serif",i.fillText(n,s/2,52),i.fillStyle="#e2e8f0",i.font="bold 22px sans-serif",i.fillText(e,s/2,100)})}function QE(){return qm(128,128,(n,e,t)=>{let i=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{n.beginPath(),n.arc(i,s,62-a*10,0,Math.PI*2),n.fillStyle=o,n.fill()})})}function Zm(n,e){let t=[],i=[],s=new pe({color:14078925,roughness:.85,envMapIntensity:.4}),r=new pe({color:2961720,roughness:.8}),o=new pe({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of KE){let[u,p]=h.bx,[m,x]=h.bz,g=(u+p)/2,f=(m+x)/2,d=p-u,v=x-m,_=new X(new Me(d,h.h,v).translate(0,h.h/2,0),s);_.position.set(g,.03,f),_.castShadow=_.receiveShadow=!0,n.add(_);let S=new X(new Me(d+.6,.5,v+.6),r);S.position.set(g,h.h+.25,f),n.add(S);let A=h.face==="-x"?-1:1,y=A<0?u:p,M=new X(new Me(1.6,.2,v*.9),new pe({color:h.color,roughness:.6}));M.position.set(y+A*.8,3.3,f),M.rotation.z=A*.18,n.add(M);let b=new X(new Ve(v*.75,2.4),o);b.position.set(y+A*.02,1.5,f),b.rotation.y=A*Math.PI/2,n.add(b);let E=new pe({map:jE(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});E.emissiveMap=E.map,E.emissiveIntensity=.55;let T=new X(new Ve(v*.85,v*.85/4),E);T.position.set(y+A*.05,h.h-1.4,f),T.rotation.y=A*Math.PI/2,n.add(T),e.colliders.push({minX:u,maxX:p,minZ:m,maxZ:x});let z={x:y+A*1.6,z:f},V=new ft({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:bt}),D=new X(new mi(.9,1.25,32).rotateX(-Math.PI/2),V);D.position.set(z.x,.09,z.z),n.add(D);let C=new ft({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:bt,blending:$t}),w=new X(new ke(1.05,1.05,3.2,24,1,!0),C);w.position.set(z.x,1.6,z.z),n.add(w),i.push({ring:D,ringMat:V,beamMat:C}),t.push({id:h.id,type:h.type,name:h.name,door:z,color:h.accent})}let a=eb(n,e),l=0;function c(h){l+=h;let u=.55+Math.sin(l*3)*.25;for(let p of i)p.ringMat.opacity=u+.2,p.beamMat.opacity=u*.3,p.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function eb(n,e){let o=new X(new Ve(54,16).rotateX(-Math.PI/2),new pe({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,n.add(o);let a=new pe({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let f of l){let d=new X(new Me(f.maxX-f.minX,f.h,f.maxZ-f.minZ).translate(0,f.h/2,0),a);d.position.set((f.minX+f.maxX)/2,.03,(f.minZ+f.maxZ)/2),d.castShadow=d.receiveShadow=!0,n.add(d),e.colliders.push({minX:f.minX,maxX:f.maxX,minZ:f.minZ,maxZ:f.maxZ})}let c=new X(new Ve(.3,15).rotateX(-Math.PI/2),new ft({color:16765503}));c.position.set(51,.06,156/2),n.add(c);let h=QE(),u=new pe({map:h,roughness:.6,side:bt}),p=new pe({color:4144966,roughness:.7}),x=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([f,d])=>{let v=new ot;v.position.set(f,.04,d);let _=new X(new Me(.08,1.1,.08).translate(0,.55,0),p),S=new X(new $i(.55,24),u);return S.position.y=1.5,S.rotation.y=-Math.PI/2,S.castShadow=!0,v.add(_,S),n.add(v),{x:f,z:d,r:.6,up:!0,timer:0,fall:0,pivot:v}});function g(f){for(let d of x)d.up?d.fall>0&&(d.fall=Math.max(0,d.fall-f*4)):(d.fall=Math.min(1,d.fall+f*6),d.timer-=f,d.timer<=0&&(d.up=!0)),d.pivot.rotation.z=d.fall*(Math.PI/2-.05),d.pivot.rotation.z*=-1}return{targets:x,update:g,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function Ym(n){return n.up?(n.up=!1,n.timer=3,!0):!1}Nt();var tb=.22,er=1.45,nb=85,Yu=4.5;function $m(n){let e=[],t=new El(.07,.5,2,8).rotateX(Math.PI/2),i=new ke(.008,.05,1,6,1,!0).rotateX(Math.PI/2).translate(0,0,.5);for(let f=0;f<48;f++){let d=new X(t,new ft({color:16774856,transparent:!0,opacity:1,blending:$t,depthWrite:!1}));d.visible=!1,d.frustumCulled=!1;let v=new X(new Pt(.22,8,6),new ft({color:16751150,transparent:!0,opacity:.45,blending:$t,depthWrite:!1}));d.add(v);let _=new X(i,new ft({color:16757575,transparent:!0,opacity:.75,blending:$t,depthWrite:!1,side:bt}));_.visible=!1,_.frustumCulled=!1,n.add(d,_),e.push({slug:d,trail:_,live:!1,x0:0,z0:0,dx:0,dz:0,dist:0,travel:0,hitT:null,onHit:null,wall:!1})}let s=0,r=new oi(n,8,{color:16762976,opacity:.95,blending:$t}),o=new oi(n,30,{color:16757575,opacity:.9,blending:$t}),a=new oi(n,20,{color:12103840,opacity:.5}),l=0;function c(f,d,v,_,S,A,y,M,b){let E=e[s];s=(s+1)%e.length,Object.assign(E,{live:!0,x0:f,z0:d,dx:v,dz:_,dist:Math.max(.5,S),travel:0,hitT:A,wall:y,onHit:M,onArrive:b||null}),E.slug.visible=!0,E.trail.visible=!0,E.slug.rotation.y=Math.atan2(v,_),h(E)}function h(f){let d=Math.min(f.travel,f.dist),v=f.x0+f.dx*d,_=f.z0+f.dz*d;f.slug.position.set(v,er,_),u(f,v,_,Math.min(Yu,d))}function u(f,d,v,_){f.trail.position.set(d,er,v),f.trail.rotation.y=Math.atan2(-f.dx,-f.dz),f.trail.scale.set(1,1,Math.max(.01,_))}function p(f){let d=f.x0+f.dx*f.dist,v=f.z0+f.dz*f.dist;if(f.onArrive){let _=f.onArrive;f.onArrive=null,_();return}if(f.hitT){Ym(f.hitT)&&f.onHit&&f.onHit(f.hitT);for(let _=0;_<5;_++)o.emit(d,er,v,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else f.wall&&(o.emit(d-f.dx*.1,er,v-f.dz*.1,{vx:-f.dx*2,vy:1.5,vz:-f.dz*2,life:.18,size:.3,grow:.2}),a.emit(d-f.dx*.2,er,v-f.dz*.2,{vx:-f.dx,vy:.6,vz:-f.dz,life:.5,size:.4,grow:1.2}))}function m(f){for(let d of e)if(d.live){if(d.travel+=nb*f,d.travel>=d.dist){if(d.slug.visible&&(p(d),d.slug.visible=!1),d.travel-d.dist>=Yu){d.live=!1,d.trail.visible=!1;continue}let v=d.x0+d.dx*d.dist,_=d.z0+d.dz*d.dist,S=Yu-(d.travel-d.dist);u(d,v,_,Math.min(S,d.dist));continue}h(d)}}function x(f,d,v,_){let S=v-f,A=_-d,y=Math.hypot(S,A);y>.1&&(r.emit(f,er,d,{vx:S/y*2,vy:0,vz:A/y*2,life:.06,size:.7,grow:.6}),c(f,d,S/y,A/y,y,null,!0,null))}function g(f,d,v,_){l=Math.max(0,l-f),m(f),r.update(f),o.update(f),a.update(f);let S=d.save.equipped,A=S&&es(S);if(v=v||_,!A||!v||l>0)return{fired:!1};if(!A.auto&&!_)return{fired:!1};if((d.save.ammo[S]|0)<=0)return _&&(d.audio.click&&d.audio.click(),d.toast&&d.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),l=.3,{fired:!1,empty:!0};d.save.ammo[S]--,l=A.rate;let y=d.heading,M=tb;for(let P of d.targets){if(!P.up)continue;let O=P.x-d.pos.x,H=P.z-d.pos.z,W=Math.hypot(O,H);if(W>A.range||W<.5)continue;let I=Math.atan2(-O,-H),k=Math.atan2(Math.sin(I-d.heading),Math.cos(I-d.heading));Math.abs(k)<M&&(M=Math.abs(k),y=I)}if(d.hitables)for(let P of d.hitables)for(let O of P){if(O.ref&&O.ref.kind==="ped")continue;let H=O.x-d.pos.x,W=O.z-d.pos.z,I=Math.hypot(H,W);if(I>A.range||I<.5)continue;let k=Math.atan2(-H,-W),Z=Math.abs(Math.atan2(Math.sin(k-d.heading),Math.cos(k-d.heading)));Z<M&&(M=Z,y=k)}d.lock&&(y=Math.atan2(-(d.lock.x-d.pos.x),-(d.lock.z-d.pos.z)));let b=-Math.sin(d.heading),E=-Math.cos(d.heading),T=Math.cos(d.heading),z=-Math.sin(d.heading),V=d.pos.x+b*.95+T*.3,D=d.pos.z+E*.95+z*.3;r.emit(V,er,D,{vx:b*2,vy:0,vz:E*2,life:.06,size:A.id==="shotgun"?1.1:.7,grow:.6});let C=0,w=[];for(let P=0;P<A.pellets;P++){let O=y+(Math.random()-.5)*2*A.spread,H=-Math.sin(O),W=-Math.cos(O),I=A.range,k=null;for(let U of d.colliders){let q=Wm(V,D,H,W,U,I);q<I&&(I=q,k=null)}for(let U of d.targets){if(!U.up)continue;let q=Zu(V,D,H,W,U.x,U.z,U.r,I);q<I&&(I=q,k=U)}let Z=null;if(d.hitables)for(let U of d.hitables)for(let q of U){let K=Zu(V,D,H,W,q.x,q.z,q.r,I);K<I&&(I=K,Z=q.ref,k=null)}if((k||Z)&&C++,Z){let U=A.dmg||20,q=H,K=W;c(V,D,H,W,I,null,!1,null,()=>d.onPersonHit&&d.onPersonHit(Z,U,q,K))}else c(V,D,H,W,I,k,I<A.range,d.onTargetHit);P<3&&w.push([V,D,V+H*I,D+W*I])}return d.onShot&&d.onShot(w),d.audio.shot&&d.audio.shot(A.id),{fired:!0,hits:C}}return{update:g,remoteShot:x}}var ib=n=>"#"+n.toString(16).padStart(6,"0"),na=n=>"$"+n.toLocaleString();function Jm(n){let e=c=>document.getElementById(c),t=e("store"),i=e("store-list"),s=null;function r(c){n.toast(c.msg),n.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(n.persist(),n.onChange()),l()}function o(){let c=n.save;i.innerHTML="";for(let u of Kl){let p=c.weapons.includes(u.id),m=document.createElement("div");m.className="upg-row store-row"+(c.equipped===u.id?" sel":""),m.innerHTML=`<div class="uinfo"><b>${u.name}</b><small>${u.desc}</small>
        <small class="ammo-line">${p?"Ammo: "+(c.ammo[u.id]|0):na(u.price)}</small></div>
        <div class="store-btns"></div>`;let x=m.querySelector(".store-btns");if(p){let g=document.createElement("button");g.className="upg-btn",g.textContent="+"+u.ammoBox+" AMMO "+na(u.ammoPrice),g.disabled=c.cash<u.ammoPrice,g.onclick=()=>r(Fm(c,u.id)),x.appendChild(g);let f=document.createElement("button");f.className="buy-btn eq",f.textContent=c.equipped===u.id?"EQUIPPED":"EQUIP",f.disabled=c.equipped===u.id,f.onclick=()=>r(Bm(c,u.id)),x.appendChild(f)}else{let g=document.createElement("button");g.className="buy-btn",g.textContent="BUY "+na(u.price),g.disabled=c.cash<u.price,g.onclick=()=>r(Hm(c,u.id)),x.appendChild(g)}i.appendChild(m)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",i.appendChild(h)}function a(){let c=n.save;i.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${ea?na(ea):"FREE"}</b><div class="swatch-row"></div>`;let u=h.querySelector(".swatch-row");for(let g of Om){let f=document.createElement("div");f.className="swatch"+(c.outfit.shirt===g?" sel":""),f.style.background=ib(g),f.onclick=()=>r(km(c,g)),u.appendChild(f)}i.appendChild(h);let p=document.createElement("div");p.className="style-sec",p.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let m=p.querySelector(".swatch-row");for(let g of jl){let f=document.createElement("button"),d=c.hats.includes(g.id);f.className="wheel-opt"+(c.outfit.hat===g.id?" sel":""),f.innerHTML=`${g.name}<small>${c.outfit.hat===g.id?"wearing":d||!g.price?"free":na(g.price)}</small>`,f.onclick=()=>r(Gm(c,g.id)),m.appendChild(f)}i.appendChild(p);let x=document.createElement("p");x.className="store-tip",x.textContent="Everything here is free. More colors, pants, skin tone & hair in \u{1F3A8} SKIN EDITOR (pause menu).",i.appendChild(x)}function l(){e("store-cash").textContent=n.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var sb={parking:"#3b3f46",arena:"#4b5bd6",legislature:"#c9b98f",forks:"#b98a5a",museum:"#7fb3d5",mansion:"#0f9d58",hospital:"#e2e8f0",park:"#3f8a3a"};function Km(n,e){let t=n.getContext("2d"),i=n.width,r=i/2/140,o=0;function a(l,c,h,u,p){if((o++&3)!==0)return;let m=g=>i/2+(g-l)*r,x=g=>i/2+(g-c)*r;t.clearRect(0,0,i,i),t.save(),t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(38,62,40,0.88)",t.fillRect(0,0,i,i),t.fillStyle="#2f6f86",t.fillRect(m(gt.minX),x(-1400),(gt.maxX-gt.minX)*r,(1400+pn.maxZ)*r),t.fillRect(m(-1400),x(pn.minZ),(1400+gt.minX)*r,(pn.maxZ-pn.minZ)*r);for(let g=0;g<9;g++)for(let f=0;f<9;f++){let d=mt(g),v=mt(f),_="rgba(128,136,150,0.6)";for(let S in An){let[A,y]=An[S];A===d&&y===v&&(_=sb[S])}t.fillStyle=_,t.fillRect(m(d-30),x(v-30),60*r,60*r)}t.strokeStyle="#25292f",t.lineWidth=14*r,t.beginPath();for(let g of Tt)t.moveTo(m(g),x(-340)),t.lineTo(m(g),x(340)),t.moveTo(m(-340),x(g)),t.lineTo(m(340),x(g));t.moveTo(m(340),x(Rn)),t.lineTo(m(Ai),x(Rn)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(m(Ai),x(-ji)),t.lineTo(m(Ai),x(ji)),t.stroke();for(let g of e)t.fillStyle=g.color,t.beginPath(),t.arc(m(g.door.x),x(g.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();u&&(t.fillStyle="#ffffff",t.fillRect(m(u.x)-3,x(u.z)-3,6,6)),p&&p.each(g=>{g.b>=0||(t.fillStyle=g.team==="red"?"#ff3b4e":g.team==="blue"?"#3b8bff":"#4ade80",t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.beginPath(),t.arc(m(g.x),x(g.z),4,0,Math.PI*2),t.fill(),t.stroke())}),t.restore(),t.save(),t.translate(i/2,i/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",i/2,11)}return{draw:a}}var rb={none:"None",center:"Center",dual:"Dual",side:"Side"},ob={clear:"Clear",dark:"Dark",limo:"Limo"};function jm(n){let e=x=>document.getElementById(x),t=e("skin-editor"),i=e("se-body"),s=n.save,r="car",o=!1;function a(x,g,f,d={}){let v=`<div class="swatch-row se-row" data-key="${x}">`;d.off&&(v+=`<button class="swatch off${f==null?" sel":""}" data-v="off" aria-label="off">OFF</button>`);for(let S of g)v+=`<button class="swatch${S===f?" sel":""}" data-v="${S}" style="background:${Jl(S)}" aria-label="color"></button>`;let _=f!=null&&!g.includes(f);return v+=`<label class="swatch custom${_?" sel":""}" style="${_?"background:"+Jl(f):""}" title="Any color"><input type="color" data-key="${x}" value="${Jl(f??16777215)}">\u{1F3A8}</label>`,v+"</div>"}function l(x,g,f,d){return`<div class="swatch-row se-row" data-key="${x}">`+g.map(v=>`<button class="wheel-opt${v===d?" sel":""}" data-v="${v}"><b>${f[v]}</b></button>`).join("")+"</div>"}let c=(x,g)=>`<div class="style-sec"><b>${x}</b>${g}</div>`;function h(){let x=s.currentCar,g=js(s,x),d='<div class="swatch-row se-row" data-key="car">'+n.cars.filter(v=>s.owned.includes(v.id)).map(v=>`<button class="wheel-opt${v.id===x?" sel":""}" data-v="${v.id}"><b>${v.name}</b></button>`).join("")+"</div>";i.innerHTML=c("Car",d)+c("Body paint",a("paint",ys,s.paint[x]))+c("Rims",a("rims",[12172998,1513500,13211182,2287359,14100029,16317180,4906624,11032055],g.rims))+c("Racing stripes",l("stripes",jo,rb,g.stripes))+(g.stripes!=="none"?c("Stripe color",a("stripe",ys,g.stripe)):"")+c("Underglow",a("glow",[2287359,16723555,4906624,11032055,16765503,16317180],g.glow,{off:!0}))+c("Window tint",l("tint",Qo,ob,g.tint))}function u(){let x=s.outfit;i.innerHTML=c("Name (shown online)",`<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g,"")}" autocomplete="off" spellcheck="false">`)+c("Shirt",a("shirt",ys,x.shirt))+c("Pants",a("pants",[2963272,1981066,1120295,7041664,9067034,16317180,7999504,1483594],x.pants))+c("Skin tone",a("skin",ql,x.skin))+c("Hair",a("hair",Zl,x.hair))+c("Hat",l("hat",Ms,Yl,x.hat))+(x.hat!=="none"?c("Hat color",a("hatColor",ys,x.hatColor)):"");let g=e("se-name");g.addEventListener("input",()=>{let f=Vu(g.value);f&&(s.name=f,n.persist(),n.onName())}),g.addEventListener("keydown",f=>f.stopPropagation())}function p(){for(let x of t.querySelectorAll(".setab"))x.classList.toggle("active",x.dataset.tab===r);r==="car"?h():u()}function m(x,g){let f=s.currentCar,d=js(s,f),v=s.outfit,_=g==="off"?null:typeof g=="string"&&g[0]==="#"?parseInt(g.slice(1),16):isNaN(+g)?g:+g,S=!1,A=!1;switch(x){case"car":s.owned.includes(g)&&(s.currentCar=g,S=!0);break;case"paint":s.paint[f]=_,S=!0;break;case"rims":d.rims=_,S=!0;break;case"stripes":d.stripes=g,S=!0;break;case"stripe":d.stripe=_,S=!0;break;case"glow":d.glow=_,S=!0;break;case"tint":d.tint=g,S=!0;break;case"shirt":case"pants":case"skin":case"hair":case"hatColor":v[x]=_,A=!0;break;case"hat":v.hat=g,A=!0;break}n.persist(),S&&n.onCar(x==="car"),A&&n.onOutfit(),n.beep(760,.03)}i.addEventListener("click",x=>{let g=x.target.closest("button[data-v]");if(!g)return;let f=g.closest("[data-key]");m(f.dataset.key,g.dataset.v),p()}),i.addEventListener("input",x=>{let g=x.target.closest("input[type=color]");if(!g)return;m(g.dataset.key,g.value);let f=g.closest("label");f&&(f.style.background=g.value)}),i.addEventListener("change",x=>{x.target.closest("input[type=color]")&&p()});for(let x of t.querySelectorAll(".setab"))x.addEventListener("click",()=>{r=x.dataset.tab,n.onTab(r),p()});return{open(x){r=x||"car",o=!0,t.classList.remove("hidden"),n.onTab(r),p()},close(){o=!1,t.classList.add("hidden")},get isOpen(){return o},get tab(){return r},refresh:p}}Nt();var Ju=["lobby","apartment","office","diner"],Qm={lobby:"LOBBY",apartment:"APARTMENT",office:"OFFICE",diner:"DINER"},Qr=22,eo=16,tc=4.6,Ri=.3,ab=-1750,e0=n=>Ju[(n*2654435761>>>0)%Ju.length];function lb(n){return{x:(Ju.indexOf(n)-1.5)*90,z:ab}}function $u(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new an(s);return r.colorSpace=vt,i&&(r.wrapS=r.wrapT=Bn,r.repeat.set(i[0],i[1])),r}var nc=(n,e={})=>new pe(Object.assign({color:n,roughness:.8,metalness:.05,emissive:n,emissiveIntensity:.18},e)),cb={lobby:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#e9e4da":"#b9b2a5",n.fillRect(t*16,e*16,16,16)},apartment:n=>{for(let e=0;e<8;e++)n.fillStyle=e%2?"#9a6a3e":"#a8754a",n.fillRect(0,e*16,128,16),n.fillStyle="#7a5230",n.fillRect(e*37%128,e*16,2,16)},office:n=>{n.fillStyle="#5b6472",n.fillRect(0,0,128,128),n.fillStyle="#525a67";for(let e=0;e<128;e+=32)n.fillRect(e,0,1,128),n.fillRect(0,e,128,1)},diner:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#f2f2f2":"#1a1a1a",n.fillRect(t*16,e*16,16,16)}},hb={lobby:14209732,apartment:13227715,office:14673388,diner:15909813};function t0(n){let e=new Map;function t(x){if(e.has(x))return e.get(x);let g=lb(x),f=new ot;f.position.set(g.x,0,g.z);let d=[],v=Qr/2,_=eo/2,S=(P,O,H,W)=>d.push({minX:g.x+P,maxX:g.x+O,minZ:g.z+H,maxZ:g.z+W}),A=(P,O,H,W,I,k=0,Z=!0)=>{let U=new X(P,O);return U.position.set(H,W,I),U.rotation.y=k,U.castShadow=Z,U.receiveShadow=!0,f.add(U),U},y=(P,O,H,W,I,k,Z=0,U=!0)=>{A(new Me(P,O,H).translate(0,O/2,0),W,I,Z,k),U&&S(I-P/2,I+P/2,k-H/2,k+H/2)},M=$u(128,128,cb[x],[Qr/4,eo/4]);A(new Ve(Qr,eo).rotateX(-Math.PI/2),nc(16777215,{map:M,emissiveMap:M,emissiveIntensity:.2}),0,.02,0,0,!1),A(new Ve(Qr,eo).rotateX(Math.PI/2),nc(16053488,{emissiveIntensity:.5}),0,tc,0,0,!1);let b=nc(hb[x],{side:bt}),E=(P,O,H,W)=>{A(new Me(P,tc,O).translate(0,tc/2,0),b,H,0,W,0,!1),S(H-P/2,H+P/2,W-O/2,W+O/2)};E(Qr+Ri*2,Ri,0,-_-Ri/2),E(Qr+Ri*2,Ri,0,_+Ri/2),E(Ri,eo,-v-Ri/2,0),E(Ri,eo,v+Ri/2,0);let T=new pe({color:16777215,emissive:16774364,emissiveIntensity:2.2});for(let P of[-6,0,6])for(let O of[-4,4])A(new Ve(2.4,.9).rotateX(Math.PI/2),T,P,tc-.02,O,0,!1);let z=$u(256,64,(P,O,H)=>{let W=P.createLinearGradient(0,0,0,H);W.addColorStop(0,"#7fb2ee"),W.addColorStop(1,"#cfe6f7"),P.fillStyle=W,P.fillRect(0,0,O,H),P.fillStyle="#3b4656";for(let I=0;I<O;I+=64)P.fillRect(I,0,4,H);P.fillRect(0,0,O,4),P.fillRect(0,H-4,O,4)});A(new Ve(14,1.6),new ft({map:z}),0,2.6,-_+.01,0,!1);let V=$u(64,96,(P,O,H)=>{P.fillStyle="#20262f",P.fillRect(0,0,O,H),P.fillStyle="#4ade80",P.fillRect(0,0,O,6),P.fillRect(0,0,5,H),P.fillRect(O-5,0,5,H),P.fillStyle="#9fd4ff",P.fillRect(9,12,O-18,H-20),P.fillStyle="#16a34a",P.font="bold 14px sans-serif",P.textAlign="center",P.fillText("EXIT",O/2,40)});A(new Ve(2.2,3).translate(0,1.5,0),new pe({map:V,emissive:16777215,emissiveMap:V,emissiveIntensity:.6}),0,0,_-.02,Math.PI,!1);let D=new ft({color:4906624,transparent:!0,opacity:.7,depthWrite:!1,side:bt}),C=A(new mi(.75,1.05,32).rotateX(-Math.PI/2),D,0,.05,_-1.6,0,!1);ub(x,{add:A,boxAt:y,mat:nc,W2:v,D2:_,group:f,solid:S}),n.add(f);let w={style:x,group:f,colliders:d,pad:C,padMat:D,spawn:{x:g.x,z:g.z+_-3.2,heading:0},exit:{x:g.x,z:g.z+_-1.6},bounds:{minX:g.x-v,maxX:g.x+v,minZ:g.z-_,maxZ:g.z+_}};return e.set(x,w),w}let i=new pe({color:4165434,roughness:.6,emissive:2054682,emissiveIntensity:.6}),s=new pe({color:15919044,roughness:.6}),r=new pe({color:4937059,metalness:.7,roughness:.35}),o=new ft({color:4906624,transparent:!0,opacity:.5,depthWrite:!1,side:bt,blending:$t}),a=[];function l(){for(let x of a)n.remove(x.mesh);a.length=0}function c(x,g){l();for(let f of g){let d=new ot;if(f.kind==="safe"){d.add(new X(new Me(.75,.8,.65).translate(0,.4,0),r));let _=new X(new ke(.1,.1,.04,14).rotateX(Math.PI/2),new pe({color:13948120,metalness:1,roughness:.2}));_.position.set(0,.45,.34),d.add(_)}else for(let _=0;_<3;_++){let S=new X(new Me(.34,.09,.17),i);S.position.set((_-1)*.12,.05+_%2*.09,_%2*.05),S.rotation.y=_*.3,d.add(S);let A=new X(new Me(.05,.095,.175),s);A.position.copy(S.position),A.rotation.y=S.rotation.y,d.add(A)}let v=new X(new mi(.5,.62,24).rotateX(-Math.PI/2),o);v.position.y=.04,d.add(v),d.position.set(f.x,.02,f.z),n.add(d),a.push({mesh:d,x:f.x,z:f.z,amount:f.amount,kind:f.kind,got:!1})}}function h(x,g){let f=[],d=x.bounds;for(let v=0;v<200&&f.length<g;v++){let _=d.minX+1.2+Math.random()*(d.maxX-d.minX-2.4),S=d.minZ+1.2+Math.random()*(d.maxZ-d.minZ-2.4);if(Math.hypot(_-x.spawn.x,S-x.spawn.z)<2.5)continue;let A=!0;for(let y of x.colliders)if(_>y.minX-.7&&_<y.maxX+.7&&S>y.minZ-.7&&S<y.maxZ+.7){A=!1;break}for(let y of f)Math.hypot(y.x-_,y.z-S)<2&&(A=!1);A&&f.push({x:_,z:S})}return f}let u=0;function p(x,g){u+=x,g&&(g.padMat.opacity=.5+Math.sin(u*4)*.25,g.pad.rotation.y+=x),o.opacity=.35+Math.sin(u*5)*.2;for(let f of a)!f.got&&f.kind!=="safe"&&(f.mesh.rotation.y+=x*1.2)}function m(x,g){for(let f of a)if(!f.got&&Math.hypot(f.x-x,f.z-g)<(f.kind==="safe"?1.4:1))return f.got=!0,n.remove(f.mesh),f;return null}return{get:t,update:p,spawnLoot:c,clearLoot:l,lootSpots:h,grab:m}}function ub(n,e){let{add:t,boxAt:i,mat:s,W2:r,D2:o}=e,a=s(8016432),l=s(2237739),c=s(15921906),h=s(10134445,{metalness:.7,roughness:.35}),u=(x,g)=>{i(.6,.6,.6,s(9067066),x,g),t(new Pt(.6,10,8),s(4094516),x,1.15,g)},p=(x,g,f,d)=>{let v=s(d),_=new ot,S=new X(new Me(2.6,.45,1).translate(0,.22,0),v),A=new X(new Me(2.6,.6,.25).translate(0,.75,.38),v),y=new X(new Me(.25,.65,1).translate(-1.3,.32,0),v),M=new X(new Me(.25,.65,1).translate(1.3,.32,0),v);return _.add(S,A,y,M),_.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),_.position.set(x,0,g),_.rotation.y=f,e.group.add(_),Math.abs(Math.sin(f))>.5?[x-.6,x+.6,g-1.4,g+1.4]:[x-1.4,x+1.4,g-.6,g+.6]},m=x=>e.solid(x[0],x[1],x[2],x[3]);if(n==="lobby"){i(5,1.1,1.2,a,0,-2.5),i(5.2,.08,1.4,c,0,-2.5,1.1,!1);let x=s(12107462,{metalness:.85,roughness:.25,emissiveIntensity:.1});for(let g of[-6,-2,2,6])t(new Ve(2,3).translate(0,1.5,0),x,g,0,-o+.02,0,!1),t(new Ve(.4,.2),new ft({color:16747546}),g,3.3,-o+.03,0,!1);m(p(-7,2,Math.PI/2,1981066)),m(p(7,2,-Math.PI/2,1981066)),i(1.4,.4,.8,a,-5,2),i(1.4,.4,.8,a,5,2),u(-r+1,o-1),u(r-1,o-1),u(-r+1,-o+1.5),u(r-1,-o+1.5)}else if(n==="apartment"){m(p(-3,1.5,Math.PI,8141549)),i(1.8,.4,.9,a,-3,-.5),i(3,.5,.4,l,-3,-o+.4),t(new Ve(2.6,1.5),new pe({color:1118481,emissive:2781142,emissiveIntensity:.9}),-3,1.6,-o+.45,0,!1),i(6,.95,.8,c,6,-o+.5),i(.9,2,.8,h,r-.6,-o+.5),i(2.2,.75,1.1,a,5,-2);for(let x of[4.2,5.8])for(let g of[-3.1,-.9])i(.45,.5,.45,l,x,g);i(2.2,.55,3,s(15921906),r-1.4,3.5),i(2.2,.25,2.2,s(3718648),r-1.4,3.9,.55,!1),i(2.2,1,.2,a,r-1.4,o-3,0,!1),u(-r+1,o-1)}else if(n==="office"){let x=new pe({color:725536,emissive:3718648,emissiveIntensity:.9});for(let g of[-7,-2.5,2.5,7])for(let f of[-4.5,.5])i(3,.75,1.3,c,g,f),t(new Me(.9,.55,.06).translate(0,.28,0),x,g,.8,f-.3),i(.55,.5,.55,l,g,f+1.1);i(6,.75,1.6,a,0,4.6),t(new Ve(5,2.2),new pe({color:16777215,emissive:16777215,emissiveIntensity:.3}),-r+.02,2,2,Math.PI/2,!1),u(r-1,o-1),u(-r+1,o-1)}else{i(10,1.05,1,s(14100029),2,-o+3),i(10.2,.08,1.2,c,2,-o+3,1.05,!1);for(let g=0;g<6;g++)t(new ke(.28,.28,.12,12).translate(0,.75,0),s(14100029),-2+g*1.7,0,-o+4.3),i(.12,.7,.12,h,-2+g*1.7,-o+4.3,0,!1);for(let g of[-1,3])i(2.4,.75,1.1,c,-6.5,g),i(2.4,1.1,.5,s(14100029),-6.5,g-1.1),i(2.4,1.1,.5,s(14100029),-6.5,g+1.1);let x=new pe({color:16723555,emissive:16723555,emissiveIntensity:2.5});t(new Me(8,.12,.06),x,2,3.4,-o+.05,0,!1),t(new Me(8,.12,.06),new pe({color:2287359,emissive:2287359,emissiveIntensity:2.5}),2,3.1,-o+.05,0,!1),i(1,1.8,.7,s(2060267),r-.8,2),u(r-1,o-1)}}Nt();var ic=1e5,tr=[{id:"drive",text:"Drive to the green marker",needsTarget:!0},{id:"drift",text:"DRIFT! Hold HB (Space) while steering",needsTarget:!1},{id:"park",text:"Drive to the next marker and stop",needsTarget:!0},{id:"out",text:"Tap GET OUT (E) to leave your car",needsTarget:!1},{id:"enter",text:"Walk to the glowing door and tap ENTER",needsTarget:!0},{id:"exit",text:"Look around, then step on the green EXIT pad",needsTarget:!1}];function db(n,e){switch(n){case"drive":return!!e.reached;case"drift":return e.driftTime>=1.5;case"park":return!!e.reached&&Math.abs(e.speed||0)<4;case"out":return!!e.onFoot;case"enter":return e.inside>=0;case"exit":return e.inside<0&&!!e.wasInside}return!1}function n0(n,e){let t={x:37,z:-37},i=null,s=1/0;for(let v of e.buildings){let _=Math.hypot(v.door.x-(t.x+30),v.door.z-t.z);_<s&&(s=_,i=v)}let r={drive:{x:37,z:-30,r:8},park:i?{x:i.door.x+i.door.nx*7,z:i.door.z+i.door.nz*7,r:9}:{x:90,z:-37,r:9},enter:i?{x:i.door.x+i.door.nx*.8,z:i.door.z+i.door.nz*.8,r:1.6}:null},o=new ft({color:4906624,transparent:!0,opacity:.85,depthWrite:!1,side:bt}),a=new ft({color:4906624,transparent:!0,opacity:.22,depthWrite:!1,side:bt,blending:$t}),l=new ot,c=new X(new mi(.85,1,40).rotateX(-Math.PI/2),o);c.position.y=.1;let h=new X(new ke(1,1,30,24,1,!0).translate(0,15,0),a);l.add(c,h),l.visible=!1,n.add(l);let u=!1,p=0,m=0,x=!1,g=0;function f(){let v=tr[p];return v&&v.needsTarget?r[v.id]:null}function d(){let v=f();l.visible=!!(u&&v),v&&(l.position.set(v.x,0,v.z),l.scale.set(v.r,1,v.r))}return{building:i,start(){u=!0,p=0,m=0,x=!1,d()},stop(){u=!1,l.visible=!1},get active(){return u},get step(){return p},get total(){return tr.length},get text(){return tr[p]?tr[p].text:""},target:f,update(v,_){if(!u)return null;g+=v,o.opacity=.6+Math.sin(g*4)*.25,l.rotation.y+=v*.6;let S=f(),A=S?Math.hypot(_.pos.x-S.x,_.pos.z-S.z)<S.r:!1;return tr[p].id==="drift"&&_.drifting&&(m+=v),_.inside>=0&&(x=!0),db(tr[p].id,{reached:A,driftTime:m,onFoot:_.onFoot,inside:_.inside,wasInside:x,speed:_.speed})?(p++,p>=tr.length?(u=!1,l.visible=!1,"done"):(d(),"next")):null},get driftProgress(){return Math.min(1,m/1.5)}}}Nt();function i0({url:n,key:e,topic:t,onStatus:i}){let s=new Map,r=null,o="off",a=0,l=null,c=null,h=0,u=!1,p=null,m="realtime:"+t;function x(v){if(o!==v&&(o=v,i))try{i(v)}catch{}}function g(v){if(r&&r.readyState===1)try{return r.send(JSON.stringify(v)),!0}catch{}return!1}function f(){if(u)return;clearTimeout(p),x("connecting");let v=n.replace(/^http/,"ws").replace(/\/$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(e)+"&vsn=1.0.0";try{r=new WebSocket(v)}catch{return d()}r.onopen=()=>{l=String(++a),g({topic:m,event:"phx_join",ref:l,join_ref:l,payload:{config:{broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},access_token:e}}),clearInterval(c),c=setInterval(()=>g({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++a)}),25e3)},r.onmessage=_=>{let S;try{S=JSON.parse(_.data)}catch{return}if(S.topic===m){if(S.event==="phx_reply"&&S.ref===l){if(S.payload&&S.payload.status==="ok")h=0,x("on");else{x("error");try{r.close()}catch{}}return}if(S.event==="phx_error"||S.event==="phx_close"){try{r.close()}catch{}return}if(S.event==="broadcast"&&S.payload){let A=s.get(S.payload.event);if(A)try{A(S.payload.payload||{})}catch(y){console.warn("mp handler",y)}}}},r.onclose=()=>{clearInterval(c),c=null,r=null,u||d()},r.onerror=()=>{}}function d(){x("connecting");let v=Math.min(15e3,1e3*Math.pow(1.7,h++));p=setTimeout(f,v)}return{connect(){u=!1,r||f()},close(){if(u=!0,clearTimeout(p),clearInterval(c),r){g({topic:m,event:"phx_leave",payload:{},ref:String(++a),join_ref:l});try{r.close()}catch{}}r=null,x("off")},on(v,_){s.set(v,_)},send(v,_){return o!=="on"?!1:g({topic:m,event:"broadcast",ref:String(++a),join_ref:l,payload:{type:"broadcast",event:v,payload:_}})},get status(){return o}}}var Ku="https://fhbqxujlnqlmzvulrdxt.supabase.co",ju="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w",s0="city-driver-v2";var fb=160,pb=1e3,mb=2500,gb=7e3,xb=16,_b=10,vb=(n,e)=>{let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t};function yb(n,e){let t=String(n||"Driver").slice(0,16),i="700 28px system-ui, -apple-system, sans-serif",s=document.createElement("canvas").getContext("2d");s.font=i;let r=Math.max(70,Math.ceil(s.measureText(t).width)+30),o=44,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d");l.fillStyle="rgba(8,12,22,0.72)",l.beginPath(),l.roundRect?l.roundRect(1,1,r-2,o-2,14):l.rect(1,1,r-2,o-2),l.fill(),l.fillStyle=e==="red"?"#ff3b4e":e==="blue"?"#3b8bff":"#4ade80",l.beginPath(),l.arc(16,o/2,5,0,Math.PI*2),l.fill(),l.font=i,l.fillStyle="#fff",l.textBaseline="middle",l.fillText(t,26,o/2+1);let c=new an(a),h=new Xr(new qs({map:c,transparent:!0,depthTest:!1}));return h.scale.set(r/90,o/90,1),h.renderOrder=999,h}function r0(n){let e=Math.random().toString(36).slice(2,10),t=new Map,i=null,s=0,r=0,o="",a="";function l(){return t.size+1}function c(){n.onCount&&n.onCount(l())}function h(M){let b=t.get(M);b&&(b.car&&n.scene.remove(b.car),b.person&&n.scene.remove(b.person),b.tag&&b.tag.parent&&b.tag.parent.remove(b.tag),t.delete(M),c())}function u(M){let b=M.carId+"|"+M.lookSig;if(M.car&&M.carSig===b)return;M.car&&n.scene.remove(M.car);let E=n.CAR_DEFS.find(z=>z.id===M.carId)||n.CAR_DEFS[0],T=n.buildCar(E);M.look&&n.applyCarSkin(T,M.look.paint,M.look.carSkin),T.position.set(M.cx,0,M.cz),T.rotation.y=M.ch,n.scene.add(T),M.car=T,M.carSig=b}function p(M){M.person||(M.person=n.buildCharacter(M.look?M.look.outfit:{shirt:2845872,hat:"none"}),M.person.position.set(M.x,0,M.z),n.scene.add(M.person),M.outfitSig="");let b=M.look?JSON.stringify(M.look.outfit):"";M.look&&b!==M.outfitSig&&(n.setOutfit(M.person,M.look.outfit),M.outfitSig=b),n.setHeldWeapon(M.person,M.weapon||null)}function m(M){if(!M||!M.id||M.id===e)return;let b=t.get(M.id);if(!b){if(t.size>=xb)return;b={id:M.id,name:"",x:+M.x||0,z:+M.z||0,h:+M.h||0,cx:0,cz:0,ch:0,tx:0,tz:0,th:0,mode:"car",carId:"sport",look:null,lookSig:"",car:null,person:null,tag:null,tagName:"",phase:0,speed:0,b:-1,weapon:null,seen:0},t.set(M.id,b),c()}b.seen=performance.now(),b.mode=M.m==="foot"?"foot":"car",b.tx=+M.x||0,b.tz=+M.z||0,b.th=+M.h||0,b.carId=String(M.c||"sport"),b.b=Number.isInteger(M.b)?M.b:-1,b.weapon=M.w||null;let E=M.tm||null;if(E!==b.team&&(b.team=E,b.tagName=""),b.dead=M.hp===0,b.firing=!!M.f,b.mode==="foot"&&Number.isFinite(M.px)&&(b.cx=+M.px,b.cz=+M.pz,b.ch=+M.ph||0),M.L){let T=JSON.stringify(M.L);T!==b.lookSig&&(b.lookSig=T,b.look=n.unpackLook(M.L))}M.n&&(M.n!==b.tagName||!b.tag)&&(b.tag&&b.tag.parent&&b.tag.parent.remove(b.tag),b.tag=yb(M.n,b.team),b.tagName=M.n,b.name=M.n),b.placed||(b.x=b.tx,b.z=b.tz,b.h=b.th,b.mode==="car"&&(b.cx=b.tx,b.cz=b.tz,b.ch=b.th),b.placed=!0)}function x(M){if(!M||M.id===e||!Array.isArray(M.s))return;let b=t.get(M.id);if(b&&(b.recoil=.35),!(b&&n.localBuilding!==void 0&&b.b!==n.localBuilding()))for(let E of M.s.slice(0,3))Array.isArray(E)&&E.length===4&&n.remoteShot(+E[0],+E[1],+E[2],+E[3])}let g=null;function f(){for(let M of[...t.keys()])h(M)}function d(M){if(M===void 0&&(M=s0),!(M===g&&i)){if(v(),g=M,!M||!Ku||!ju){n.onStatus&&n.onStatus("off",1);return}i=i0({url:Ku,key:ju,topic:M,onStatus:b=>{n.onStatus&&n.onStatus(b,l())}}),i.on("st",m),i.on("sh",x),i.on("bye",b=>{b&&b.id&&h(b.id)}),i.on("hit",b=>{b&&b.t===e&&n.onHit&&n.onHit(b,t.get(b.id))}),i.on("kill",b=>{b&&n.onKill&&n.onKill(b)}),i.connect()}}function v(){if(i){try{i.send("bye",{id:e})}catch{}i.close(),i=null}f(),o="",a=""}window.addEventListener("pagehide",()=>{try{i&&i.send("bye",{id:e})}catch{}});function _(M,b,E){if(E=E||performance.now(),i&&i.status==="on"&&b){let V=b.mode+(b.x|0)+","+(b.z|0)+","+(b.h*10|0)+b.b+(b.w||""),D=V!==o||Math.abs(b.speed)>.3;if(E-s>=(D?fb:pb)){s=E,o=V;let C={id:e,n:b.name,m:b.mode,x:+b.x.toFixed(2),z:+b.z.toFixed(2),h:+b.h.toFixed(3),c:b.car,b:b.b,w:b.w||null,tm:b.team||null,hp:b.dead?0:1};b.mode==="foot"&&(C.px=+b.px.toFixed(2),C.pz=+b.pz.toFixed(2),C.ph=+b.ph.toFixed(3));let w=JSON.stringify(b.look);(w!==a||E-r>mb)&&(C.L=b.look,r=E,a=w),i.send("st",C)}}let T=Math.min(1,M*_b),z=b?b.b:-1;for(let[V,D]of t){if(E-D.seen>gb){h(V);continue}let C=D.x,w=D.z;if(D.x+=(D.tx-D.x)*T,D.z+=(D.tz-D.z)*T,D.h+=vb(D.h,D.th)*T,D.speed=M>0?Math.hypot(D.x-C,D.z-w)/M:0,D.mode==="car"&&(D.cx=D.x,D.cz=D.z,D.ch=D.h),u(D),D.car.position.set(D.cx,0,D.cz),D.car.rotation.y=D.ch,D.car.visible=z===-1,D.mode==="foot"?(p(D),D.person.visible=D.b===z,D.person.position.x=D.x,D.person.position.z=D.z,D.person.rotation.y=D.h,D.phase+=D.speed*M*2.1,D.recoil=Math.max(0,(D.recoil||0)-M),D.dead?(D.person.rotation.x=-Math.PI/2+.05,D.person.position.y=.12):(D.person.rotation.x=0,n.animateCharacter(D.person,D.phase,D.speed,!!D.weapon&&D.recoil>0,M))):D.person&&(D.person.visible=!1),D.tag){let P=D.mode==="foot"?D.person:D.car;P&&D.tag.parent!==P&&(D.tag.parent&&D.tag.parent.remove(D.tag),P.add(D.tag),D.tag.position.set(0,D.mode==="foot"?2.35:2.3,0))}}}function S(M){!i||i.status!=="on"||!M||!M.length||i.send("sh",{id:e,s:M.map(b=>b.map(E=>+E.toFixed(2)))})}function A(M){for(let b of t.values())M(b)}function y(M,b){i&&i.status==="on"&&i.send(M,Object.assign({id:e},b))}return{connect:d,disconnect:v,update:_,sendShots:S,send:y,each:A,myId:e,get topic(){return g},get count(){return l()},get status(){return i?i.status:"off"}}}Nt();function Mb(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgba(110,0,0,1)";let t=(s,r)=>s+Math.random()*(r-s);e.beginPath(),e.arc(64,64,40,0,Math.PI*2),e.fill();for(let s=0;s<14;s++){let r=t(0,Math.PI*2),o=t(20,50),a=t(6,18);e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,Math.PI*2),e.fill()}let i=new an(n);return i.colorSpace=vt,i}function o0(n){let e=new oi(n,60,{color:10158080,opacity:.95,size:.35}),t=new oi(n,24,{color:6946816,opacity:.55,size:.8}),i=Mb(),s=[];for(let c=0;c<24;c++){let h=new X(new Ve(1,1).rotateX(-Math.PI/2),new pe({map:i,transparent:!0,opacity:.92,roughness:.15,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));h.visible=!1,h.renderOrder=3,n.add(h),s.push({m:h,size:0,max:0,life:0})}let r=0;function o(c,h,u,p=0,m=0,x=1){let g=Math.round(6*x);for(let f=0;f<g;f++)e.emit(c+(Math.random()-.5)*.2,h+(Math.random()-.5)*.3,u+(Math.random()-.5)*.2,{vx:p*(1.5+Math.random()*3)+(Math.random()-.5)*2,vy:Math.random()*2.5-.5,vz:m*(1.5+Math.random()*3)+(Math.random()-.5)*2,life:.35+Math.random()*.3,size:.18,grow:.25});t.emit(c,h,u,{vx:p*1.2,vy:.3,vz:m*1.2,life:.4,size:.5,grow:.9})}function a(c,h,u=2.2){let p=s[r];r=(r+1)%s.length,p.m.position.set(c,.07+r*5e-4,h),p.m.rotation.y=Math.random()*Math.PI*2,p.size=.2,p.max=u,p.life=45,p.m.scale.set(.2,1,.2),p.m.material.opacity=.92,p.m.visible=!0}function l(c){e.update(c),t.update(c);for(let h of s)h.m.visible&&(h.life-=c,h.size<h.max&&(h.size=Math.min(h.max,h.size+c*.5),h.m.scale.set(h.size,1,h.size)),h.life<5&&(h.m.material.opacity=.92*Math.max(0,h.life/5)),h.life<=0&&(h.m.visible=!1))}return{hit:o,pool:a,update:l}}var qt=28,rc=qt*8,Eb=1.5,ia=5.2,to=(n,e)=>n+Math.random()*(e-n),nr=n=>n[Math.random()*n.length|0];function sc(){return{shirt:nr(ys),pants:nr([2963272,1981066,1120295,7041664,9067034,13358561]),skin:nr(ql),hair:nr(Zl.slice(0,6)),hat:Math.random()<.25?nr(["cap","beanie","cowboy"]):"none",hatColor:nr(ys),hairLong:Math.random()<.4}}function Qu(n,e,t,i){t=(t%rc+rc)%rc;let s=Math.floor(t/(qt*2)),r=t-s*qt*2-qt;return s===0?(i.x=n+r,i.z=e-qt,i.h=-Math.PI/2):s===1?(i.x=n+qt,i.z=e+r,i.h=Math.PI):s===2?(i.x=n-r,i.z=e+qt,i.h=Math.PI/2):(i.x=n-qt,i.z=e-r,i.h=0),i}function a0(n){let e=[],t=[],i=[],s={x:0,z:0,h:0},r=n.count||16;function o(y,M){let b=[];for(let E=0;E<9;E++)for(let T=0;T<9;T++){let z=(E-8/2)*74,V=(T-8/2)*74;Math.hypot(z-y,V-M)<170&&$r(z,V)!=="parking"&&b.push({cx:z,cz:V})}return b}function a(y,M,b){let E=o(M,b),T=E.length?nr(E):{cx:0,cz:0};y.cx=T.cx,y.cz=T.cz,y.p=to(0,rc),y.dir=Math.random()<.5?1:-1,y.state="walk",y.hp=40,y.flee=0,y.phase=to(0,6),y.deadT=0,xi(y.person,sc()),y.person.rotation.set(0,0,0),y.person.visible=!0,Qu(y.cx,y.cz,y.p,s),y.x=s.x,y.z=s.z,y.h=s.h}function l(){let y=jr(sc());n.scene.add(y);let M={person:y,x:0,z:0,h:0,cx:0,cz:0,p:0,dir:1,state:"walk",hp:40,flee:0,phase:0,deadT:0,kind:"ped"};return e.push(M),M}function c(y,M=0,b=0,E="shot"){if(y.state==="dead")return;y.state="dead",y.deadT=0,y.hp=0;let T=Math.atan2(M,b);y.person.rotation.set(0,T+Math.PI,0),y.fallDir={x:M,z:b},n.blood.hit(y.x,1,y.z,M,b,E==="car"?2.5:1.5),n.blood.pool(y.x+M*.9,y.z+b*.9,to(1.8,2.8)),y.kind==="enemy"&&y.onDeath&&y.onDeath(y),u(y.x,y.z,35)}function h(y,M,b,E){return y.state==="dead"?!1:(y.hp-=M,n.blood.hit(y.x,1.25,y.z,b,E,.8),y.hp<=0?(c(y,b,E),!0):(y.kind==="ped"&&(y.state="flee",y.flee=7),y.kind==="enemy"&&(y.aggro=!0),!1))}function u(y,M,b){for(let E of e){if(E.state==="dead")continue;let T=Math.hypot(E.x-y,E.z-M);if(T<b){E.state="flee",E.flee=6+Math.random()*3,Qu(E.cx,E.cz,E.p+1,s);let z=Math.hypot(s.x-y,s.z-M);E.dir=z>T?1:-1}}}function p(y){let M=jr(y.outfit||sc());xi(M,y.outfit||sc()),ta(M,y.weapon||"pistol"),n.scene.add(M);let b=Object.assign({kind:"enemy",person:M,x:y.x,z:y.z,h:0,hp:y.hp||60,maxHp:y.hp||60,state:"idle",aggro:!1,cool:to(.5,1.5),phase:0,deadT:0,strafe:Math.random()<.5?1:-1,accuracy:.45,dmg:8,rate:.9,range:45},y);return b.person.position.set(b.x,0,b.z),t.push(b),b}function m(){for(let y of t)n.scene.remove(y.person);t.length=0}function x(y,M,b){if(y.state==="dead"){y.deadT+=M,g(y,M);return}let E=b.x-y.x,T=b.z-y.z,z=Math.hypot(E,T);(z<y.range||y.aggro)&&(y.aggro=!0);let V=0;if(y.aggro&&b.alive&&!b.hidden){y.h=Math.atan2(-E,-T);let D=y.boss?9:13,C=0,w=0;z>D+3?(C=E/z,w=T/z):z<D-3&&(C=-E/z,w=-T/z),C+=-T/z*y.strafe*.6,w+=E/z*y.strafe*.6;let P=Math.hypot(C,w)||1;V=y.boss?4.2:3;let O=n.collide(y.x+C/P*V*M,y.z+w/P*V*M,.45);if(Math.abs(O.x-y.x)<1e-4&&Math.abs(O.z-y.z)<1e-4&&(y.strafe*=-1),y.x=O.x,y.z=O.z,Math.random()<M*.4&&(y.strafe*=-1),y.cool-=M,y.cool<=0&&z<y.range*1.2){y.cool=y.rate*to(.8,1.3);let H=Math.max(.08,y.accuracy*(1-z/(y.range*1.6))*(b.inCar?.7:1)),W=Math.random()<H,I=y.x-Math.sin(y.h)*.9,k=y.z-Math.cos(y.h)*.9,Z=W?0:to(1.2,3)*(Math.random()<.5?-1:1),U=b.x+-T/z*Z,q=b.z+E/z*Z;n.shoot(I,k,U+(U-I)/z*(W?0:12),q+(q-k)/z*(W?0:12)),ec(y.person),n.audio&&n.audio.shot&&n.audio.shot(y.weapon==="glock"?"pistol":y.weapon),W&&n.onPlayerHit(y.dmg,y)}}y.phase+=V*M*2.1,y.person.position.set(y.x,0,y.z),y.person.rotation.y=y.h,Es(y.person,y.phase,V,y.aggro,M)}function g(y,M){let b=Math.min(1,y.deadT/.35);if(y.person.rotation.x=-b*(Math.PI/2-.05),y.person.position.y=.12*b,y.deadT>.4){let E=y.person.userData;E.legs[0].rotation.x=.1,E.legs[1].rotation.x=-.15,E.arms[0].rotation.z=.9,E.arms[1].rotation.z=-.9}}function f(y,M){for(;e.length<r;)a(l(),M.x,M.z);for(let b of e){let E=Math.hypot(b.x-M.x,b.z-M.z)>190;if(b.state==="dead"){b.deadT+=y,g(b,y),(b.deadT>30||E&&b.deadT>3)&&a(b,M.x,M.z);continue}if(E){a(b,M.x,M.z);continue}if(b.state==="escape"){b.flee-=y;let z=n.collide(b.x+b.ex*ia*y,b.z+b.ez*ia*y,.4);b.x=z.x,b.z=z.z,b.phase+=ia*y*2.1,b.person.position.set(b.x,0,b.z),Es(b.person,b.phase,ia,!1,y),b.flee<=0&&_(b);continue}let T=Eb;b.state==="flee"&&(b.flee-=y,T=ia,b.flee<=0&&(b.state="walk")),b.p+=b.dir*T*y,Qu(b.cx,b.cz,b.p,s),b.x=s.x,b.z=s.z,b.h=s.h+(b.dir<0?Math.PI:0),b.phase+=T*y*2.1,b.person.position.set(b.x,0,b.z),b.person.rotation.y=b.h,Es(b.person,b.phase,T,!1,y)}for(let b of t)x(b,y,M);i.length=0;for(let b of e)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.42,ref:b});for(let b of t)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.45,ref:b})}function d(y,M,b,E){if(Math.abs(E)<5)return 0;let T=-Math.sin(b),z=-Math.cos(b),V=0;for(let D of[e,t])for(let C of D)if(C.state!=="dead"&&(Math.hypot(C.x-y-T*1.2,C.z-M-z*1.2)<1.6||Math.hypot(C.x-y,C.z-M)<1.3)){let w=Math.sign(E);C.kind==="enemy"&&(C.hp=0),c(C,T*w,z*w,"car"),V++}return V}function v(y,M,b,E){let T=null,z=-1;for(let w of e){let P=Math.hypot(w.x-b,w.z-E);w.state!=="dead"&&P>z&&(z=P,T=w)}if(!T)return;let V=y-b,D=M-E,C=Math.hypot(V,D)||1;Object.assign(T,{state:"escape",x:y,z:M,ex:V/C,ez:D/C,flee:3.5,hp:40}),T.person.rotation.set(0,Math.atan2(-V,-D),0),T.person.position.set(y,0,M)}function _(y){let M=Math.max(0,Math.min(8,Math.round(y.x/74+8/2))),b=Math.max(0,Math.min(8,Math.round(y.z/74+8/2)));y.cx=(M-8/2)*74,y.cz=(b-8/2)*74;let E=Math.max(-qt,Math.min(qt,y.x-y.cx)),T=Math.max(-qt,Math.min(qt,y.z-y.cz)),z=Math.abs(T+qt),V=Math.abs(E-qt),D=Math.abs(T-qt),C=Math.abs(E+qt),w=Math.min(z,V,D,C);y.p=w===z?E+qt:w===V?qt*2+T+qt:w===D?qt*4+(qt-E):qt*6+(qt-T),y.state="flee",y.flee=4}function S(y){for(r=y;e.length>y;){let M=e.pop();n.scene.remove(M.person)}}function A(y){for(let M of e)M.person.visible=y;for(let M of t)M.person.visible=y}return{update:f,damage:h,scare:u,spawnEnemy:p,clearEnemies:m,carHits:d,setCount:S,setVisible:A,eject:v,get hitList(){return i},get enemies(){return t},get peds(){return e}}}Nt();var bb=14,sr=3.5,oc=bb/2+2.2,ed=16;function Sb(n,e){let t=(e%ed+ed)%ed;return n==="z"?t<6?"green":t<8?"yellow":"red":t<8?"red":t<14?"green":"yellow"}var wb=(n,e)=>(n+e)%2*4;function ac(n,e,t,i){return n==="z"?{x:e+(t<0?sr:-sr),z:i,h:t<0?0:Math.PI}:{x:i,z:e+(t>0?sr:-sr),h:t>0?-Math.PI/2:Math.PI/2}}var ir=new pt,sa=new kn,no=new F,td=new F(1,1,1),l0=new F(0,1,0),lc=new Oe(1710618),Tb=new Oe(16722458),Ab=new Oe(16756768),Rb=new Oe(2883434);function c0(n){let e=n.lines.slice().sort((I,k)=>I-k),t=e.length,i=0,s=[];for(let I=0;I<t;I++)for(let k=0;k<t;k++){let Z=e[I],U=e[k],q=oc-.6;s.push({ix:I,iz:k,axis:"z",x:Z+q,z:U+q,rot:0}),s.push({ix:I,iz:k,axis:"z",x:Z-q,z:U-q,rot:Math.PI}),s.push({ix:I,iz:k,axis:"x",x:Z-q,z:U+q,rot:-Math.PI/2}),s.push({ix:I,iz:k,axis:"x",x:Z+q,z:U-q,rot:Math.PI/2})}let r=s.length,o=new ke(.09,.11,4.2,6).translate(0,2.1,0),a=new pe({color:3093563,metalness:.6,roughness:.5}),l=new Me(.45,1.25,.32).translate(0,4.6,0),c=new pe({color:1909030,roughness:.6,metalness:.3}),h=new $i(.15,12),u=new yt(o,a,r),p=new yt(l,c,r),m=new ft({color:16777215,toneMapped:!1}),x=[0,1,2].map(()=>new yt(h,m,r));p.castShadow=!0,s.forEach((I,k)=>{sa.setFromAxisAngle(l0,I.rot),no.set(I.x,0,I.z),ir.compose(no,sa,td),u.setMatrixAt(k,ir),p.setMatrixAt(k,ir);let Z=Math.sin(I.rot),U=Math.cos(I.rot);for(let q=0;q<3;q++)no.set(I.x+Z*.17,5-q*.38,I.z+U*.17),ir.compose(no,sa,td),x[q].setMatrixAt(k,ir),x[q].setColorAt(k,lc)});for(let I of[u,p,...x])I.instanceMatrix.needsUpdate=!0,n.scene.add(I);{let I=new Ve(sr*2-.6,.45).rotateX(-Math.PI/2),k=new yt(I,new pe({color:15922422,roughness:.7}),r);s.forEach((Z,U)=>{let q=e[Z.ix],K=e[Z.iz],ue,_e,Re;if(Z.axis==="z"){let Ie=Z.rot===0?1:-1;ue=q+Ie*sr,_e=K+Ie*oc,Re=0}else{let Ie=Z.rot<0?-1:1;ue=q+Ie*oc,_e=K-Ie*sr,Re=Math.PI/2}sa.setFromAxisAngle(l0,Re),no.set(ue,.065,_e),ir.compose(no,sa,td),k.setMatrixAt(U,ir)}),k.instanceMatrix.needsUpdate=!0,n.scene.add(k)}let g=new Array(r).fill("");function f(I,k,Z){return Sb(Z,i+wb(I,k))}function d(){let I=!1;for(let k=0;k<r;k++){let Z=s[k],U=f(Z.ix,Z.iz,Z.axis);U!==g[k]&&(g[k]=U,I=!0,x[0].setColorAt(k,U==="red"?Tb:lc),x[1].setColorAt(k,U==="yellow"?Ab:lc),x[2].setColorAt(k,U==="green"?Rb:lc))}if(I)for(let k of x)k.instanceColor.needsUpdate=!0}let v=[],_=12,S=I=>{let k=0,Z=1/0;for(let U=0;U<t;U++){let q=Math.abs(e[U]-I);q<Z&&(Z=q,k=U)}return k},A=[16109749,15250575,13011554,11037509,8014380];function y(I){let k=I.userData.profile,Z=new ot,U=new pe({color:Math.random()*16777215|0,roughness:.8}),q=new pe({color:A[Math.random()*A.length|0],roughness:.7}),K=new X(new Me(.42,.5,.28),U);K.position.y=.25;let ue=new X(new Pt(.13,10,8),q);ue.position.y=.62,Z.add(K,ue);let _e=k?k.glass:[[.5,.8]],Re=Math.min(..._e.map(Pe=>Pe[1]))-.15,Ie=_e.reduce((Pe,ze)=>Pe+ze[0],0)/_e.length;Z.position.set(-.38,Re,-Ie+.25),I.add(Z),I.userData.driver=Z,I.userData.driverHead=ue}function M(){let I=n.CAR_DEFS.filter(q=>q.id!=="hyper"||Math.random()<.3),k=I[Math.random()*I.length|0],Z=n.buildCar(k),U=k.colors[Math.random()*k.colors.length|0];return n.applyCarSkin(Z,U,null),y(Z),n.scene.add(Z),{group:Z,def:k,color:U,axis:"z",li:0,dir:1,s:0,speed:0,cruise:0,x:0,z:0,h:0,honk:0,wait:0,driverHp:30,panic:0,empty:!1}}function b(I,k,Z,U){for(let _e=0;_e<20;_e++){I.axis=Math.random()<.5?"z":"x",I.li=Math.random()*t|0,I.dir=Math.random()<.5?1:-1,I.s=e[0]+Math.random()*(e[t-1]-e[0]);let Re=ac(I.axis,e[I.li],I.dir,I.s),Ie=Math.hypot(Re.x-k,Re.z-Z);if(U?Ie<150:Ie>70&&Ie<170){I.x=Re.x,I.z=Re.z,I.h=Re.h;break}}let q=ac(I.axis,e[I.li],I.dir,I.s);I.x=q.x,I.z=q.z,I.h=q.h,I.cruise=9+Math.random()*5,I.speed=I.cruise*.6,I.driverHp=30,I.panic=0,I.empty=!1;let K=I.group.userData.driver;K&&(K.visible=!0,K.rotation.set(0,0,0));let ue=I.group.userData.driverHead;ue&&ue.material.color.setHex(A[Math.random()*A.length|0]),I.group.position.set(I.x,0,I.z),I.group.rotation.y=I.h}function E(I){if(I.dir>0){for(let k=0;k<t;k++)if(e[k]>I.s+.3)return k}else for(let k=t-1;k>=0;k--)if(e[k]<I.s-.3)return k;return-1}function T(I,k){let Z=Math.random(),U=I.dir>0&&k===t-1||I.dir<0&&k===0,q=Z<.55&&!U?"straight":Z<.82?"right":"left",K,ue;if(q==="straight")return;I.axis==="z"?(K="x",ue=I.dir<0==(q==="right")?1:-1):(K="z",ue=I.dir>0==(q==="right")?1:-1);let _e=e[I.li],Re=k;(ue>0&&_e>=e[t-1]-1||ue<0&&_e<=e[0]+1)&&(ue=-ue),I.axis=K,I.li=Re,I.dir=ue,I.s=_e}function z(I,k,Z){for(i+=I,d();v.length<_;){let U=M();b(U,k.x,k.z,v.length<4),v.push(U)}for(let U of v){if(Math.hypot(U.x-k.x,U.z-k.z)>230){b(U,k.x,k.z,!1);continue}if(U.empty&&U.respawnT!==void 0&&(U.respawnT-=I,U.respawnT<=0)){delete U.respawnT,b(U,k.x,k.z,!1);continue}if(U.empty){U.speed=Math.max(0,U.speed-6*I),U.s+=U.dir*U.speed*I;let B=ac(U.axis,e[U.li],U.dir,U.s);U.x+=(B.x-U.x)*Math.min(1,I*6),U.z+=(B.z-U.z)*Math.min(1,I*6),U.group.position.set(U.x,0,U.z);continue}U.panic>0&&(U.panic-=I);let q=U.panic>0?U.cruise*1.8:U.cruise,K=E(U);if(K>=0){let B=e[K],ve=(B-U.s)*U.dir,re=ve-oc,le=U.axis==="z"?U.li:K,ie=U.axis==="z"?K:U.li,He=f(le,ie,U.axis);re>-.5&&(He==="red"||He==="yellow"&&re>5)&&(q=Math.min(q,Math.max(0,re-.3)*1.1)),ve<=.05&&(U.s=B,T(U,K))}else U.dir=-U.dir;for(let B of v){if(B===U||B.axis!==U.axis||B.li!==U.li||B.dir!==U.dir)continue;let ve=(B.s-U.s)*U.dir;ve>0&&ve<14&&(q=Math.min(q,Math.max(0,(ve-6.5)*1.3)))}if(Z){let B=-Math.sin(U.h),ve=-Math.cos(U.h),re=Z.x-U.x,le=Z.z-U.z,ie=re*B+le*ve,He=Math.abs(re*ve-le*B);ie>0&&ie<13&&He<2.6?(q=Math.min(q,Math.max(0,(ie-5.5)*1.3)),U.wait+=I):U.wait=0}let ue=q>U.speed?4:9;U.speed+=Math.sign(q-U.speed)*Math.min(Math.abs(q-U.speed),ue*I),U.s+=U.dir*U.speed*I;let _e=ac(U.axis,e[U.li],U.dir,U.s),Re=Math.min(1,I*6);U.x+=(_e.x-U.x)*Re,U.z+=(_e.z-U.z)*Re;let Ie=_e.h-U.h;Ie=Math.atan2(Math.sin(Ie),Math.cos(Ie)),U.h+=Ie*Math.min(1,I*5),U.group.position.set(U.x,0,U.z),U.group.rotation.y=U.h;let Pe=U.speed*I*2.6;for(let B of U.group.userData.wheels)B.rotation.x+=Pe;let ze=U.group.userData.flashers;if(ze){let B=(i*6|0)%2;ze[0].emissiveIntensity=B?4:.25,ze[1].emissiveIntensity=B?.25:4}}}function V(I,k){let Z=null;for(let U of v){let q=-Math.sin(U.h),K=-Math.cos(U.h);for(let ue of[-1.3,0,1.3]){let _e=U.x+q*ue,Re=U.z+K*ue,Ie=1+k,Pe=I.x-_e,ze=I.z-Re,B=Math.hypot(Pe,ze);B<Ie&&B>1e-6&&(I.x=_e+Pe/B*Ie,I.z=Re+ze/B*Ie,Z=U)}}return Z&&(Z.speed*=.3),Z}let D=[];function C(){D.length=0;for(let I of v){let k=-Math.sin(I.h),Z=-Math.cos(I.h);D.push({x:I.x+k*.9,z:I.z+Z*.9,r:1,ref:{kind:"car",car:I}}),D.push({x:I.x-k*.9,z:I.z-Z*.9,r:1,ref:{kind:"car",car:I}})}return D}function w(I,k,Z,U){if(I.empty)return null;I.panic=6,I.driverHp-=k;let q=I.group.userData.driver,K=new F;return q&&q.getWorldPosition(K),I.driverHp<=0?(I.empty=!0,I.respawnT=40,q&&(q.rotation.z=.9,q.rotation.x=.3),I.group.userData.driverHead&&I.group.userData.driverHead.material.color.setHex(7995392),{kind:"killed",x:K.x,y:K.y+.6,z:K.z}):{kind:"hit",x:K.x,y:K.y+.6,z:K.z}}function P(I,k,Z){let U=null,q=Z;for(let K of v){let ue=Math.hypot(K.x-I,K.z-k);ue<q&&(q=ue,U=K)}return U}function O(I){let k=v.indexOf(I);return k<0?null:(v.splice(k,1),n.scene.remove(I.group),{alive:!I.empty,x:I.x,z:I.z,h:I.h,def:I.def,color:I.color})}function H(I){for(_=I;v.length>I;){let k=v.pop();n.scene.remove(k.group)}}function W(I){for(let k of v)k.group.visible=I}return{update:z,collide:V,hitList:C,setCount:H,setVisible:W,stateAt:f,hitCar:w,nearestCar:P,remove:O,get cars(){return v}}}Nt();var zn=500,id=5e6,so=328,cc={name:"EMERALD",outfit:{shirt:1023320,pants:1120295,skin:9263675,hair:1839885,hairLong:!0,hat:"none",hatColor:1023320},weapon:"glock",hp:900};function Cb(n){let e=n*2654435761>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function io(n){let e=n()<.5,t=Tt[n()*Tt.length|0],i=-so+n()*so*2,s=n()<.5?1:-1;return e?{x:t+s*3.5,z:i}:{x:i,z:t+s*3.5}}function h0(n){let e=n()*9|0,t=n()*9|0;$r(mt(e),mt(t))==="mansion"&&(e=(e+1)%9);let i=mt(e),s=mt(t),r=-24+n()*48,o=n()*4|0,a=28;return o===0?{x:i+r,z:s-a}:o===1?{x:i+a,z:s+r}:o===2?{x:i-r,z:s+a}:{x:i-a,z:s-r}}var ts=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),u0=["Main St Kings","Exchange Crew","River Rats","Portage Posse","North End Wolves","Osborne Outlaws","St. Boniface Snakes","Pembina Pirates"],d0=["a mystery briefcase","hot pizzas","a stolen painting","a box of cash","a burner phone","VIP documents","a suspicious duffel bag","concert tickets"];function sd(n){if(n=Math.max(1,Math.min(zn,n|0)),n===zn)return{n,type:"boss",title:"EMERALD",reward:id,desc:"Emerald runs the whole city and she's sitting on millions. Fight through her guards at the compound and take her down. Everything she has is yours.",points:[{x:Nu.x,z:Nu.z}],guards:10,timeLimit:0};let e=Cb(n*7919+13),t=n/zn,s=["deliver","race","collect","hit"][(n+(e()*4|0))%4];n%50===0&&(s="hit");let r=u0[e()*u0.length|0];if(s==="deliver"){let l=io(e),c=io(e);for(let u=0;u<8&&ts(l,c)<220;u++)c=io(e);let h=ts(l,c);return{n,type:s,title:"Special Delivery",reward:600+n*30,desc:`Pick up ${d0[e()*d0.length|0]} and get it across town before the clock runs out.`,points:[l,c],timeLimit:Math.round(25+h/(11+t*6))}}if(s==="race"){let l=[],c=io(e);l.push(c);let h=4+Math.min(4,n/80|0),u=0;for(;l.length<h;){let p=io(e);for(let m=0;m<8&&(ts(p,c)<90||ts(p,c)>260);m++)p=io(e);u+=ts(p,c),l.push(p),c=p}return{n,type:s,title:"Checkpoint Race",reward:800+n*35,desc:`Hit all ${h} checkpoints in order before time runs out.`,points:l,timeLimit:Math.round(20+u/(13+t*8))}}if(s==="collect"){let l=h0(e),c=[],h=3+Math.min(5,n/70|0);for(let u=0;u<h;u++){let p=e()*Math.PI*2,m=20+e()*60;c.push({x:Math.max(-so,Math.min(so,l.x+Math.cos(p)*m)),z:Math.max(-so,Math.min(so,l.z+Math.sin(p)*m))})}return{n,type:s,title:"Cash Grab",reward:500+n*30,desc:`The ${r} dropped ${h} bags of cash around town. Grab them all before they come back.`,points:c,timeLimit:Math.round(60+h*18-t*30)}}let o=n%50===0,a=Math.min(9,1+(n/45|0)+(o?2:0));return{n,type:"hit",title:o?"Take Down the Boss":"Gang Hit",reward:(o?5e3:1e3)+n*45,desc:o?`The leader of the ${r} is holed up with his crew. End it.`:`${a} members of the ${r} are causing trouble. Take them out.`,points:[h0(e)],enemies:a,leader:o,timeLimit:0,tier:t}}function nd(n,e){let t=n/zn;return{hp:Math.round((45+n*.35)*(e?4:1)),accuracy:Math.min(.62,.22+t*.4),dmg:Math.round(6+t*10),rate:Math.max(.35,1-t*.5),weapon:e?"deagle":["pistol","glock","smg","shotgun","ak"][Math.min(4,n/100|0)]}}function f0(n){let e=new ft({color:16765503,transparent:!0,opacity:.85,depthWrite:!1,side:bt}),t=new ft({color:16765503,transparent:!0,opacity:.2,depthWrite:!1,side:bt,blending:$t}),i=new ot;i.add(new X(new mi(.85,1,40).rotateX(-Math.PI/2).translate(0,.1,0),e)),i.add(new X(new ke(1,1,30,24,1,!0).translate(0,15,0),t)),i.visible=!1,n.scene.add(i);let s=new pe({color:4156202,roughness:.8,emissive:2772250,emissiveIntensity:.4}),r=[],o=null,a=0,l=0,c=0,h=[],u=null,p=!1,m=0,x=0;function g(){for(let M of r)n.scene.remove(M);r.length=0}function f(M,b){if(!M){i.visible=!1;return}i.visible=!0,i.position.set(M.x,0,M.z),i.scale.set(b,1,b)}function d(M){if(v(),o=sd(M),a=0,l=0,c=o.timeLimit,p=!1,m=0,h=[],u=null,o.type==="deliver"||o.type==="race")f(o.points[0],o.type==="race"?7:6);else if(o.type==="collect"){f(null);for(let b of o.points){let E=new ot;E.add(new X(new Pt(.45,10,8).scale(1,.8,1).translate(0,.4,0),s));let T=new X(new Ve(.5,.5),new ft({color:4906624,transparent:!0,opacity:.9}));T.position.y=1.3,E.add(T),E.position.set(b.x,0,b.z),E.userData={p:b,got:!1,sign:T},n.scene.add(E),r.push(E)}}else f(o.points[0],o.type==="boss"?12:9);return o}function v(){o=null,f(null),g(),n.people.clearEnemies(),h=[],u=null}function _(){p=!0;let M=o.points[0];if(o.type==="boss"){let E=nd(480,!1);for(let T=0;T<o.guards;T++){let z=T/o.guards*Math.PI*2;h.push(n.people.spawnEnemy(Object.assign({},E,{x:M.x+Math.cos(z)*18,z:M.z-8+Math.sin(z)*12,weapon:T%2?"ak":"smg",hp:160})))}u=n.people.spawnEnemy({x:M.x,z:M.z-6,outfit:cc.outfit,weapon:cc.weapon,hp:cc.hp,accuracy:.55,dmg:11,rate:.32,range:60,boss:!0,name:cc.name}),h.push(u),n.toast('\u{1F451} EMERALD: "You came all this way to die?"',3500);return}let b=nd(o.n,!1);for(let E=0;E<o.enemies;E++){let T=E/o.enemies*Math.PI*2,z=o.leader&&E===0,V=z?nd(o.n,!0):b;h.push(n.people.spawnEnemy(Object.assign({},V,{x:M.x+Math.cos(T)*6,z:M.z+Math.sin(T)*6,boss:z})))}}function S(M,b){if(!o)return null;x+=M,l+=M,e.opacity=.6+Math.sin(x*4)*.25,i.rotation.y+=M*.6;for(let T of r)T.rotation.y+=M*1.5,T.userData.sign.lookAt(b.cam||i.position);if(o.timeLimit&&(c=o.timeLimit-l,c<=0))return"fail";let E=b.pos;if(o.type==="deliver"){let T=o.points[a];if(ts(E,T)<6.5)return a++,n.beep(880,.08),a>=o.points.length?"pass":(f(o.points[a],6),"next")}else if(o.type==="race"){let T=o.points[a];if(ts(E,T)<7.5)return a++,n.beep(990,.06),a>=o.points.length?"pass":(f(o.points[a],7),"next")}else if(o.type==="collect"){for(let T of r)if(!T.userData.got&&ts(E,T.userData.p)<2.6)return T.userData.got=!0,T.visible=!1,m++,n.beep(1200,.05),m>=r.length?"pass":"next"}else if(!p&&ts(E,o.points[0])<75&&_(),p){if(f(null),o.type==="boss"){if(u&&u.state==="dead")return"pass"}else if(h.every(T=>T.state==="dead"))return"pass"}return null}function A(){if(!o)return"";if(o.type==="deliver")return a===0?"Pick up the package":"Deliver the package";if(o.type==="race")return`Checkpoint ${a+1}/${o.points.length}`;if(o.type==="collect")return`Cash bags ${m}/${r.length}`;if(!p)return o.type==="boss"?"Go to Emerald's compound":"Go to the gang hangout";let M=h.filter(b=>b.state!=="dead").length;return o.type==="boss"?u.state==="dead"?"Emerald is down":`Kill Emerald (${M-(u.state==="dead"?0:1)} guards left)`:`Enemies left: ${M}`}function y(M){if(M=M||{x:0,z:0},!o)return null;if(o.type==="deliver"||o.type==="race")return o.points[a]||null;if(o.type==="collect"){let E=null,T=1/0;for(let z of r){if(z.userData.got)continue;let V=Math.hypot(z.position.x-M.x,z.position.z-M.z);V<T&&(T=V,E=z.userData.p)}return E}if(!p)return o.points[0];let b=h.find(E=>E.state!=="dead"&&(o.type!=="boss"||E===u))||h.find(E=>E.state!=="dead");return b?{x:b.x,z:b.z}:null}return{start:d,stop:v,update:S,objective:A,target:y,get mission(){return o},get active(){return!!o},get timeLeft(){return o&&o.timeLimit?Math.max(0,c):null},get boss(){return u}}}var{CAR_DEFS:Pi,buildCar:_c,effectiveStats:B0,applyCarSkin:ca}=Du,ee=n=>document.getElementById(n),Mn,Lt,kt,Bt,ln=null,Hn=null,uo=null,he=null,St=null,Ue=null,li=null,k0=null,Ft=null,Le=null,tn="boot",In=!1,jn=!1,Tc="menu",_t={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},Ts=null,ht=null,Md=null,Ic=null,As=!1,vc="menu",oa=.6,Dt=null,fo=!1,Rs=null,Fn=null,Wn=null,pd=null,Cs=100,_i=!1,md=0,yc=0,Ss={x:0,z:0,alive:!0,hidden:!1,inCar:!0},Zt=null,Ed=!1,mc=0,Ub={sport:{cyl:6,red:7200},muscle:{cyl:8,red:6200,idle:750},super:{cyl:10,red:8500},suv:{cyl:6,red:6e3},truck:{cyl:8,red:5600,idle:700},track:{cyl:4,red:8800,idle:1100},sedan:{cyl:4,red:6500},taxi:{cyl:4,red:6200},van:{cyl:6,red:5500,idle:700},police:{cyl:8,red:6600,idle:800},hyper:{cyl:12,red:9e3,idle:1e3}};function G0(){he&&he.box&&(he.box.mode=Le.manual?"manual":"auto");let n=Le.manual?"\u2699\uFE0F GEARBOX: MANUAL":"\u2699\uFE0F GEARBOX: AUTO";for(let t of["m-trans","p-trans"]){let i=ee(t);i&&(i.textContent=n)}let e=ee("gear-btns");e&&e.classList.toggle("hidden",!Le.manual)}var Ii=null,T0=null,V0=new Map,hd=new F,Lc=Ko(),Qn=null,Di=null,W0=null,co=0,ar=null,da=null,Ac=null,yi=null,Mc=null,gd=0,xd=1,Vn=null,ut=!1,be=null,it=null,ha=null,Ps=null,bd=null,Ec=null,lr=!1,Ci=0,ua=0,rr=null,ws=null,A0="",_n={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},gc={x:0,z:0},jt=new F,Gn=new F,Pn=new F,ho={x:0,z:0},aa={x:0,z:0,hitX:!1,hitZ:!1},Kt={name:"",mode:"car",x:0,z:0,h:0,speed:0,car:"sport",look:null,px:0,pz:0,ph:0,b:-1,w:null},vi=null,xc={def:null,stats:null,group:null},cr=[],_d=[],vd=[],Ui=62,bc=0,R0=0;function wt(n,e=2200){let t=ee("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(R0),R0=setTimeout(()=>t.classList.add("hidden"),e)}function ns(){let n=Le.cash.toLocaleString();ee("cash-val").textContent=n,ee("garage-cash").textContent=n}function Is(n){Le.cash=Math.max(0,Le.cash+Math.round(n)),gn(Le),ns()}function Sd(){Hn=Ii?Ii.def:Pi.find(n=>n.id===Le.currentCar)||Pi[0],ln&&Lt.remove(ln),ln=_c(Hn),Ii?ca(ln,Ii.color,null):ca(ln,Le.paint[Hn.id],js(Le,Hn.id)),Lt.add(ln),vi=null,uo=B0(Hn,Ii?{}:Le.upgrades[Hn.id]||{}),Ue&&Ue.setEngine&&Ue.setEngine(Ub[Hn.id]||{cyl:6}),cr=(ln.userData.wheels||[]).slice(),_d=cr.filter(n=>n.position.z<0),vd=ln.userData.brakeMats||[],ee("menu-car-name").textContent=Hn.name}function po(){let n=he.heading;Pn.set(-Math.sin(n),0,-Math.cos(n)),jt.set(he.pos.x-Pn.x*9,4,he.pos.z-Pn.z*9),kt.position.copy(jt)}function wd(){let n=Bt.spawn;he.pos.x=n.x,he.pos.z=n.z,he.heading=n.heading||0,Lc=Ko(),po(),hr(0)}function or(){let n=he.pos.x,e=he.pos.z,t=he.heading;Sd(),he.reset(uo),he.pos.x=n,he.pos.z=e,he.heading=t,hr(0)}var Li=new F;function hr(n){ln.position.set(he.pos.x,0,he.pos.z),ln.rotation.y=he.heading;let e=ln.userData.flashers;if(e){let s=(performance.now()/170|0)%2;e[0].emissiveIntensity=s?4:.25,e[1].emissiveIntensity=s?.25:4}let t=_t.speed*n*2.4;for(let s=0;s<cr.length;s++)cr[s].rotation.x+=t;for(let s=0;s<_d.length;s++)_d[s].rotation.y=_t.steer*.45;let i=St&&St.input.throttle<0;if(ln.userData.setBrake)ln.userData.setBrake(i);else for(let s=0;s<vd.length;s++)vd[s].emissiveIntensity=i?4.5:1.8;if(yi){let s=he.heading;Li.set(-Math.sin(s),0,-Math.cos(s)),yi.position.set(he.pos.x+Li.x*1.8,1.1,he.pos.z+Li.z*1.8),Mc.position.set(he.pos.x+Li.x*22,.4,he.pos.z+Li.z*22)}}var la=new F;function Nb(n,e){let t=cr[n];return e.setFromMatrixPosition(t.matrixWorld),e}var ud=0;function Ob(n){if(!ar||tn!=="freeroam"||In||jn)return;ln.updateMatrixWorld();let e=cr.length;if(_t.drifting&&xd>.3)for(let i=0;i<e;i++)cr[i].position.z<0||(Nb(i,la),Math.random()<.85*xd&&ar.emit(la.x+(Math.random()-.5)*.4,.35,la.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&Ac.add(la.x,la.z,he.heading));if(ud+=n,(St&&St.input.throttle||0)>.4&&ud>.09){ud=0;let i=he.heading;Li.set(-Math.sin(i),0,-Math.cos(i));let s=Math.cos(i),r=-Math.sin(i);for(let o of[-.45,.45]){let a=he.pos.x-Li.x*2.2+s*o,l=he.pos.z-Li.z*2.2+r*o;da.emit(a,.32,l,{vx:-Li.x*2,vy:.8,vz:-Li.z*2,life:.5,size:.55,grow:1.6})}}ar.update(n),da.update(n)}function zb(n,e){let t=Td(n,e,1.15);if(Wn&&!ht&&Wn.collide(t,1.15)&&he){let s=Math.hypot(he.vel.x,he.vel.z);he.vel.x*=.55,he.vel.z*=.55,s>8&&Ue&&Ue.beep(90,.08)}return t}function Td(n,e,t){let i=n,s=e,r=!1,o=!1,a=Md||Bt.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(i+t<c.minX||i-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(i,c.maxX)),u=Math.max(c.minZ,Math.min(s,c.maxZ)),p=i-h,m=s-u,x=p*p+m*m;if(!(x>=t*t))if(x>1e-8){let g=Math.sqrt(x),f=(t-g)/g,d=p*f,v=m*f;i+=d,s+=v,Math.abs(d)>Math.abs(v)?r=!0:o=!0}else{let g=i-c.minX,f=c.maxX-i,d=s-c.minZ,v=c.maxZ-s,_=Math.min(g,f,d,v);_===g?(i=c.minX-t,r=!0):_===f?(i=c.maxX+t,r=!0):_===d?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return aa.x=i,aa.z=s,aa.hitX=r,aa.hitZ=o,aa}function Ad(n,e,t){let i=Td(n,e,t);if(ht)return i;Wn&&Wn.collide(i,t);let s=he.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=he.pos.x+r*a,c=he.pos.z+o*a,h=1+t,u=i.x-l,p=i.z-c,m=Math.hypot(u,p);m<h&&m>1e-6&&(i.x=l+u/m*h,i.z=c+p/m*h)}return i}function is(){if(!it)return;xi(it,J0()),ta(it,En().equipped);let n=En().equipped&&es(En().equipped);ee("weapon-name").textContent=n?n.name.toUpperCase():"UNARMED";let e=ee("weapon-ammo");e.textContent=n?String(En().ammo[n.id]|0):En().weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!n)}function Rd(){for(let n of["speedo","gear-hud","nitro-bar"])ee(n).classList.toggle("hidden",ut);ee("weapon-hud").classList.toggle("hidden",!ut)}function Cd(){if(Math.abs(_t.speed)>4){wt("Slow down to get out");return}let n=qu(he.pos.x,he.pos.z,he.heading),e=Ad(n.x,n.z,.45);be.reset(e.x,e.z,he.heading),he.vel.x=0,he.vel.z=0,he.speed=0,_t.speed=0,_t.drifting=!1,_t.nitro=!1,_t.steer=0,Lc=Ko(),ut=!0,it.visible=!0,it.position.set(be.pos.x,0,be.pos.z),is(),St.setMode("foot"),Rd(),Ue.engine(0,0),Ue.skid(!1),Ue.beep(420,.06)}function Pd(){ut&&(ut=!1,it.visible=!1,Ci=0,St&&St.setMode("drive"),Rd(),Lc=Ko(),Ue&&Ue.beep(520,.06),ua&&(gn(Le),ua=0))}function Hb(n){let e=be.heading,t=be.pos.x,i=be.pos.z;Pn.set(-Math.sin(e),0,-Math.cos(e));let s=Ci>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;if(Gn.set(t-Pn.x*r+a*c,o,i-Pn.z*r+l*c),ht){let u=ht.room.bounds,p=.45;Gn.x=Math.max(u.minX+p,Math.min(u.maxX-p,Gn.x)),Gn.z=Math.max(u.minZ+p,Math.min(u.maxZ-p,Gn.z)),Gn.y=Math.min(Gn.y,3.9)}let h=1-Math.exp(-n*7);jt.x+=(Gn.x-jt.x)*h,jt.y+=(Gn.y-jt.y)*h,jt.z+=(Gn.z-jt.z)*h,kt.position.copy(jt),kt.lookAt(t+Pn.x*5+a*c,1.45,i+Pn.z*5+l*c),Math.abs(60-Ui)>.25&&(Ui+=(60-Ui)*Math.min(1,n*4),kt.fov=Ui,kt.updateProjectionMatrix())}function Fb(n){let e=ee("crosshair");if(!(St.input.aim&&!!En().equipped&&!_i)){T0=null,_n.lock=null,e.classList.add("hidden");return}let i=es(En().equipped),s=i?i.range:60,r=null,o=1/0,a=(l,c)=>{let h=l.x-be.pos.x,u=l.z-be.pos.z,p=Math.hypot(h,u);if(p>s||p<.8)return;let m=Math.atan2(-h,-u),x=Math.abs(Math.atan2(Math.sin(m-be.heading),Math.cos(m-be.heading)));if(x>.75)return;let g=x*2+p/80-c;g<o&&(o=g,r=l)};for(let l of Fn.hitList)a(l,l.ref.kind==="enemy"?.6:0);for(let l of Rc)a(l,.5);if(!ht)for(let l of pd)l.ref.car.empty||a(l,-.1);if(T0=r,e.classList.remove("hidden"),r){let l=Math.atan2(-(r.x-be.pos.x),-(r.z-be.pos.z));be.heading+=Math.atan2(Math.sin(l-be.heading),Math.cos(l-be.heading))*Math.min(1,n*12),_n.lock={x:r.x,z:r.z},hd.set(r.x,1.3,r.z).project(kt),e.style.left=((hd.x+1)/2*100).toFixed(2)+"%",e.style.top=((1-hd.y)/2*100).toFixed(2)+"%",e.classList.add("lock")}else _n.lock=null,e.style.left="50%",e.style.top="45%",e.classList.remove("lock");Ci=Math.max(Ci,.25)}function Bb(n){if(be.update(St.input,n,Ad),it.position.x=be.pos.x,it.position.z=be.pos.z,it.rotation.y=be.heading,St.consumeCycle()){let i=Xu(En());gn(Le),is(),En().weapons.length?wt(i?es(i).name:"Holstered",1200):wt("No guns yet \u2014 visit LOCK & LOAD",1600)}Fb(n),_n.pos.x=be.pos.x,_n.pos.z=be.pos.z,_n.heading=be.heading;let e=St.consumeFireEdge();e&&!En().equipped&&En().weapons.length&&(Xu(En()),is()),ha.update(n,_n,St.input.fire,e).fired&&(Fn&&!ht&&Fn.scare(be.pos.x,be.pos.z,45),ec(it),Ci=.9,ua++,ee("weapon-ammo").textContent=String(En().ammo[En().equipped]|0)),St.input.fire&&En().equipped&&(Ci=Math.max(Ci,.3)),Ci=Math.max(0,Ci-n),Es(it,be.phase,be.speed,Ci>0&&!!En().equipped,n),Hb(n),ua&&bc%120===0&&(gn(Le),ua=0)}function xn(n,e,t){if(rr=n,ws=e,t!==A0){A0=t;let i=ee("btn-action");i.textContent=t||"",i.classList.toggle("hidden",!t)}}function kb(n,e){let t=null,i=1.5;for(let s of Bt.buildings){if(Kr(n,e,s.door.x+s.door.nx*.5,s.door.z+s.door.nz*.5)<2.2)return s;let o=Math.max(s.minX,Math.min(n,s.maxX)),a=Math.max(s.minZ,Math.min(e,s.maxZ)),l=Math.hypot(n-o,e-a);l<i&&(i=l,t=s)}return t}function Dc(){let n=be.heading;if(Pn.set(-Math.sin(n),0,-Math.cos(n)),jt.set(be.pos.x-Pn.x*4.6,2.6,be.pos.z-Pn.z*4.6),ht){let e=ht.room.bounds,t=.45;jt.x=Math.max(e.minX+t,Math.min(e.maxX-t,jt.x)),jt.z=Math.max(e.minZ+t,Math.min(e.maxZ-t,jt.z))}kt.position.copy(jt)}function X0(n){let e=Wn.remove(n);e&&(e.alive&&(Fn.eject(e.x-Math.cos(e.h)*1.8,e.z+Math.sin(e.h)*1.8,be.pos.x,be.pos.z),Fn.scare(e.x,e.z,25)),Ii={def:e.def,color:e.color},Sd(),he.reset(uo),he.pos.x=e.x,he.pos.z=e.z,he.heading=e.h,hr(0),vi=null,Pd(),po(),Ue.beep(300,.08),wt("\u{1F697} Stolen: "+e.def.name+(e.alive?" \u2014 the driver ran off":""),2400))}function q0(n){let e=Ts.get(e0(n.id)),t=Kr(be.pos.x,be.pos.z,n.door.x,n.door.z)<2.6,i,s,r,o;if(t)r=n.door.nx,o=n.door.nz,i=n.door.x+r*1.4,s=n.door.z+o*1.4;else{let l=Math.max(n.minX,Math.min(be.pos.x,n.maxX)),c=Math.max(n.minZ,Math.min(be.pos.z,n.maxZ)),h=be.pos.x-l,u=be.pos.z-c,p=Math.hypot(h,u)||1;r=h/p,o=u/p,i=l+r*1.4,s=c+o*1.4}ht={b:n,room:e,back:{x:i,z:s,heading:Math.atan2(-r,-o)}};let a=V0.get(n.id);if(a===void 0||performance.now()-a>480*1e3){let l=1+Math.floor(Math.random()*3),c=Ts.lootSpots(e,l+1),h=c.slice(0,l).map(u=>({x:u.x,z:u.z,kind:"cash",amount:50+Math.floor(Math.random()*450)}));Math.random()<.12&&c[l]&&h.push({x:c[l].x,z:c[l].z,kind:"safe",amount:2e3+Math.floor(Math.random()*3e3)}),Ts.spawnLoot(e,h)}else Ts.clearLoot();Md=e.colliders,_n.colliders=e.colliders,_n.targets=[],be.reset(e.spawn.x,e.spawn.z,e.spawn.heading),it.position.set(be.pos.x,0,be.pos.z),Dc(),xn(null,null,""),Ue.beep(640,.07),wt("\u{1F3E2} Inside: "+Qm[e.style]+" \u2014 EXIT pad is behind you",2200)}function Uc(){if(!ht)return;let n=ht.back;ht&&V0.set(ht.b.id,performance.now()),Ts.clearLoot(),ht=null,Md=null,_n.colliders=Bt.colliders,_n.targets=Ps.targets;let e=Ad(n.x,n.z,.45);be.reset(e.x,e.z,n.heading),it.position.set(be.pos.x,0,be.pos.z),Dc(),xn(null,null,""),Ue.beep(520,.07)}function C0(){if(ut){if(ht){let s=Ts.grab(be.pos.x,be.pos.z);s&&(Is(s.amount),Ue.beep(1300,.06),wt((s.kind==="safe"?"\u{1F513} Cracked a safe! +$":"\u{1F4B5} Found cash +$")+s.amount.toLocaleString(),1800));let r=Kr(be.pos.x,be.pos.z,ht.room.exit.x,ht.room.exit.z);if(r<.8){Uc();return}return r<2.4?xn("exit",null,"\u{1F6AA} EXIT BUILDING"):xn(null,null,"")}let n=null,e=2.4;for(let s of Ps.stores){let r=Kr(be.pos.x,be.pos.z,s.door.x,s.door.z);r<e&&(e=r,n=s)}if(n)return xn("shop",n,(n.type==="garage"?"\u{1F527} ":n.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+n.name);if(Kr(be.pos.x,be.pos.z,he.pos.x,he.pos.z)<4.2)return xn("in",null,"\u{1F697} GET IN");let t=Wn&&Wn.nearestCar(be.pos.x,be.pos.z,3.6);if(t)return xn("steal",t,"\u{1F697} STEAL CAR");let i=kb(be.pos.x,be.pos.z);return i?xn("enter",i,"\u{1F3E2} ENTER BUILDING"):xn(null,null,"")}if(Math.abs(_t.speed)<4)return xn("out",null,"\u{1F6AA} GET OUT");xn(null,null,"")}function P0(){rr==="out"?Cd():rr==="in"?Pd():rr==="enter"&&ws?q0(ws):rr==="steal"&&ws?X0(ws):rr==="exit"?Uc():rr==="shop"&&ws&&(ws.type==="garage"?Pc("play"):Gb(ws))}function Gb(n){lr=!0,xn(null,null,""),Ue.beep(700,.06),bd.open(n)}function Z0(){lr=!1,bd.close(),is(),ns()}var bn="single",Vb="city-driver-tdm",Sc=25,Y0={red:14100029,blue:2060267},Ze={team:null,score:{red:0,blue:0},over:0,lastAttacker:null,kills:0,deaths:0},$0={weapons:["ak","glock","shotgun","sniper"],ammo:{ak:9999,glock:9999,shotgun:9999,sniper:9999},equipped:"ak"},Rc=[];function En(){return _n.save||Le}function J0(){return bn==="tdm"&&Ze.team?Object.assign({},Le.outfit,{shirt:Y0[Ze.team]}):Le.outfit}function dd(n){bn=n,Ft.connect(n==="single"?null:n==="tdm"?Vb:void 0),Fn.clearEnemies(),Fn.setCount(n==="tdm"?0:14),_n.save=n==="tdm"?$0:Le,ee("tdm-hud").classList.toggle("hidden",n!=="tdm"),wc(),n==="tdm"?(Dt.active&&(Dt.stop(),ee("objective").classList.add("hidden")),Ze.score.red=Ze.score.blue=0,Ze.kills=Ze.deaths=0,Ze.over=0,Ze.team=null,setTimeout(()=>{bn==="tdm"&&(Wb(),Id())},1600),wt("\u2694\uFE0F TEAM DEATHMATCH \u2014 first team to "+Sc+" kills wins",3e3)):(it&&xi(it,Le.outfit),wt(n==="single"?"\u{1F9CD} Single player \u2014 the city is all yours":"\u{1F310} Online free roam \u2014 "+Ft.count+" in the city",2600))}function Wb(){let n=0,e=0;Ft.each(t=>{t.team==="red"?n++:t.team==="blue"&&e++}),Ze.team=n<e?"red":e<n?"blue":Math.random()<.5?"red":"blue",xi(it,J0()),vi=null,Nc(),wt("You are on "+Ze.team.toUpperCase()+" team",2200)}function K0(n){return n==="red"?{x:-176,z:3,heading:-Math.PI/2}:{x:176,z:-3,heading:Math.PI/2}}function Id(){fa();let n=K0(Ze.team||"red");he.pos.x=n.x+(Math.random()-.5)*6,he.pos.z=n.z+(Math.random()-.5)*20,he.heading=n.heading,he.vel.x=he.vel.z=0,_t.speed=0,hr(0),po(),Cd(),$0.equipped="ak",is()}function Nc(){ee("tdm-red").textContent=Ze.score.red,ee("tdm-blue").textContent=Ze.score.blue;let n=ee("tdm-you");n.textContent=Ze.team?"YOU: "+Ze.team.toUpperCase()+" \xB7 "+Ze.kills+"K / "+Ze.deaths+"D":"joining\u2026",n.className=Ze.team||""}function j0(n){if(!n||!n.kt||!(n.kt in Ze.score))return;Ze.score[n.kt]++,n.k===Ft.myId&&(Ze.kills++,Is(150));let e=ee("killfeed"),t=document.createElement("div");for(t.innerHTML=`<b class="${n.kt}">${I0(n.kn||"?")}</b> \u2620 <b class="${n.kt==="red"?"blue":"red"}">${I0(n.vn||"?")}</b>`,e.prepend(t);e.children.length>4;)e.lastChild.remove();if(setTimeout(()=>t.remove(),6e3),Nc(),!Ze.over&&(Ze.score.red>=Sc||Ze.score.blue>=Sc)){let i=Ze.score.red>=Sc?"red":"blue";Ze.over=8,ee("tdm-win").textContent=(i===Ze.team?"\u{1F3C6} ":"")+i.toUpperCase()+" TEAM WINS!",ee("tdm-win").className=i,i===Ze.team&&(Is(2500),wt("+$2,500 for the win!",2500))}}var I0=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function L0(n,e,t,i){bn!=="tdm"||!Ze.team||(Ft.send("hit",{t:n.id,d:e,tm:Ze.team,n:Le.name}),Rs.hit(n.x,1.25,n.z,t,i,1))}function D0(){if(Zt&&Zt.active&&eg("you got wasted"),bn!=="tdm")return;Ze.deaths++;let n=Ze.lastAttacker,e={k:n?n.id:null,kn:n?n.name:"the street",kt:n?n.team:null,v:Ft.myId,vn:Le.name};n&&(Ft.send("kill",e),j0(e)),Nc()}function U0(){return bn==="tdm"?K0(Ze.team||"red"):{x:Nl.x,z:Nl.z,heading:Nl.heading}}function Xb(){if(Rc.length=0,bn!=="tdm"||!Ze.team)return;let n=ht?ht.b.id:-1;Ft.each(e=>{if(e.team===Ze.team||e.dead||e.b!==n||!e.placed)return;let t={kind:"player",id:e.id,name:e.name,team:e.team,x:e.x,z:e.z};Rc.push({x:e.x,z:e.z,r:e.mode==="car"?1.5:.5,ref:t})})}function Q0(){return Math.min(zn,(Le.missionsDone|0)+1)}function qb(){if(bn==="tdm"){wt("Missions are in Single Player / Online Free Roam");return}Ed=!0,xn(null,null,"");let n=Le.missionsDone|0,e=Zt.active,t=e?Zt.mission:sd(Q0());ee("mb-num").textContent=n>=zn?"ALL 500 COMPLETE":"MISSION "+t.n+" / "+zn,ee("mb-title").textContent=t.type==="boss"?"\u{1F451} FINAL BOSS: EMERALD":t.title,ee("mb-desc").textContent=n>=zn?"You beat Emerald and took her millions. Replay any time \u2014 missions keep paying.":t.desc,ee("mb-reward").textContent="$"+t.reward.toLocaleString()+(t.timeLimit?" \xB7 \u23F1 "+t.timeLimit+"s":""),ee("mb-progress").style.width=(n/zn*100).toFixed(1)+"%",ee("mb-left").textContent=n>=zn?"Emerald defeated \u{1F480}":zn-1-Math.min(n,zn-1)+" missions until Emerald",ee("mb-start").textContent=e?"\u2716 ABANDON MISSION":"\u25B6 START",ee("mission-board").classList.remove("hidden")}function Cc(){Ed=!1,ee("mission-board").classList.add("hidden")}function Zb(){if(Zt.active){Zt.stop(),ee("mission-hud").classList.add("hidden"),ee("boss-hud").classList.add("hidden"),Cc(),wt("Mission abandoned");return}Dt&&Dt.active&&(Dt.stop(),ee("objective").classList.add("hidden"));let n=(Le.missionsDone|0)>=zn?1+Math.floor(Math.random()*(zn-1)):Q0(),e=Zt.start(n);Cc(),ee("mission-hud").classList.remove("hidden"),ee("mh-title").textContent="#"+e.n+" "+(e.type==="boss"?"EMERALD":e.title.toUpperCase()),Ue.beep(700,.08),wt("\u{1F4F1} "+e.title+" \u2014 "+e.desc,3500)}function Yb(){let n=Zt.mission;Zt.stop(),ee("mission-hud").classList.add("hidden"),ee("boss-hud").classList.add("hidden"),n.n>(Le.missionsDone|0)&&(Le.missionsDone=n.n),Is(n.reward),gn(Le),Ue.beep(880,.1),setTimeout(()=>Ue.beep(1320,.15),130),n.type==="boss"?(ee("victory").classList.remove("hidden"),ee("victory-cash").textContent="+$"+id.toLocaleString()):wt("\u2705 MISSION PASSED  +$"+n.reward.toLocaleString(),3e3)}function eg(n){Zt.stop(),ee("mission-hud").classList.add("hidden"),ee("boss-hud").classList.add("hidden"),Ue.beep(200,.2),wt("\u274C MISSION FAILED \u2014 "+n+". Try again from \u{1F4F1}",3200)}function $b(){let n=ut?be.pos.x:he.pos.x,e=ut?be.pos.z:he.pos.z,t=ut?be.heading:he.heading;ee("mh-obj").textContent=Zt.objective();let i=Zt.timeLeft;ee("mh-time").textContent=i!=null?"\u23F1 "+Math.ceil(i)+"s":"",ee("mh-time").classList.toggle("low",i!=null&&i<10);let s=Zt.target({x:n,z:e}),r=ee("mh-arrow");if(s&&!ht){let a=Math.atan2(-(s.x-n),-(s.z-e)),l=Math.atan2(Math.sin(a-t),Math.cos(a-t));r.style.transform="rotate("+(-l).toFixed(3)+"rad)",r.classList.remove("hidden"),ee("mh-dist").textContent=Math.round(Math.hypot(s.x-n,s.z-e))+" m"}else r.classList.add("hidden"),ee("mh-dist").textContent="";let o=Zt.boss;o&&o.state!=="dead"?(ee("boss-hud").classList.remove("hidden"),ee("boss-fill").style.width=Math.max(0,o.hp/o.maxHp*100)+"%"):ee("boss-hud").classList.add("hidden")}function Ld(){let n=ee("hp-fill");n&&(n.style.width=Math.max(0,Cs)+"%",n.style.background=Cs>50?"#4ade80":Cs>25?"#fbbf24":"#ef4444")}function fd(n){_i||tn!=="freeroam"||(Cs-=ut?n:n*.5,yc=.35,Ld(),Ue&&Ue.beep(160,.05),Cs<=0&&Jb())}function Jb(){if(_i=!0,md=0,Cs=0,Ld(),xn(null,null,""),ee("wasted").classList.remove("hidden"),ut&&it&&(it.rotation.x=-Math.PI/2+.05,it.position.y=.12),Rs){let n=ut?be.pos.x:he.pos.x,e=ut?be.pos.z:he.pos.z;Rs.pool(n,e,2.6)}typeof D0=="function"&&D0()}function Kb(){_i=!1,Cs=100,Ld(),ee("wasted").classList.add("hidden"),it&&(it.rotation.x=0,it.position.y=0);let n=bn==="tdm"?0:Math.min(500,Math.round(Le.cash*.05));if(n>0&&(Le.cash-=n,gn(Le),ns()),fa(),typeof U0=="function"){let e=U0();he.pos.x=e.x,he.pos.z=e.z,he.heading=e.heading,he.vel.x=he.vel.z=0,po(),hr(0)}else wd();if(bn==="tdm"){Ze.lastAttacker=null,Id();return}wt(n>0?"\u{1F3E5} Hospital bill: -$"+n:"\u{1F3E5} Back on your feet",2200)}function jb(n){let e=he.heading,t=he.pos.x,i=he.pos.z;Pn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(_t.speed),r=8.5+s*.045,o=3.6+s*.014;Gn.set(t-Pn.x*r,o,i-Pn.z*r);let a=1-Math.exp(-n*5.5);jt.x+=(Gn.x-jt.x)*a,jt.y+=(Gn.y-jt.y)*a,jt.z+=(Gn.z-jt.z)*a,kt.position.copy(jt),kt.lookAt(t+Pn.x*5,1.7,i+Pn.z*5);let l=62+Math.min(14,s*.22)+(_t.nitro?6:0);Math.abs(l-Ui)>.25&&(Ui+=(l-Ui)*Math.min(1,n*4),kt.fov=Ui,kt.updateProjectionMatrix())}function Qb(){let n=Math.abs(_t.speed)*2.2;ee("speed-val").textContent=Math.round(n),ee("gear-hud").textContent=(_t.reverse?"R":n<1&&!Le.manual?"N":String(_t.gear||1))+(Le.manual?" M":"");let e=ee("tach-fill");e&&(e.style.width=(Math.min(1,_t.rpm||0)*100).toFixed(1)+"%",e.classList.toggle("red",(_t.rpm||0)>.9)),ee("nitro-fill").style.width=(Math.max(0,Math.min(1,_t.nitroFrac))*100).toFixed(1)+"%"}function Ls(){for(let n of["main-menu","pause-menu","garage"])ee(n).classList.add("hidden")}function eS(){return As||fo}function fa(){lr&&Z0(),ht&&Uc(),ut&&Pd(),xn(null,null,"")}function Oc(){tn="menu",In=!1,jn=!1,li&&li.active&&li.exit(),fa(),St&&(St.setMode("drive"),St.detach()),Ls(),ee("main-menu").classList.remove("hidden"),ee("hud").classList.add("hidden"),ee("touch-controls").classList.add("hidden"),ee("drag-ui").classList.add("hidden"),Dt&&Dt.active&&Dt.stop(),ee("objective").classList.add("hidden"),Zt&&Zt.active&&Zt.stop(),ee("mission-hud").classList.add("hidden"),ee("boss-hud").classList.add("hidden"),Cc(),ee("m-tutorial").classList.toggle("hidden",!!Le.tutorialDone),Ft&&bn!=="online"&&(bn="online",Ft.connect(void 0)),_n.save=Le,ee("tdm-hud").classList.add("hidden"),ee("tdm-win").classList.add("hidden"),Ze.over=0,it&&xi(it,Le.outfit),vi=null,Ue.engine(0,0),Ue.skid(!1)}function wc(){li&&li.active&&li.exit(),fa(),yi&&(yi.intensity=gd),ee("drag-ui").classList.add("hidden"),tn="freeroam",In=!1,jn=!1,Ls(),ee("hud").classList.remove("hidden"),ee("touch-controls").classList.remove("hidden"),St.attach(),St.setMode("drive"),wd(),ns(),!Le.tutorialDone&&!Le.tutorialSkipped?aS():wt("Free roam \u2014 drift for cash, walk into any building!")}function N0(){fa(),tn="drag",In=!1,jn=!1,yi&&(yi.intensity=0),Ls(),ee("hud").classList.add("hidden"),ee("touch-controls").classList.remove("hidden"),St.attach(),St.setMode("drag"),ee("drag-ui").classList.remove("hidden"),li.enter()}function O0(){tn!=="freeroam"&&tn!=="drag"||jn||lr||eS()||(In=!0,xn(null,null,""),Ls(),ee("pause-menu").classList.remove("hidden"))}function tS(){In=!1,Ls()}function Pc(n){Tc=n,jn=!0,k0.refresh(),ns(),Ls(),ee("garage").classList.remove("hidden")}function nS(){jn=!1,Ls(),ee("hud").classList.toggle("hidden",tn!=="freeroam"),it&&is(),Tc==="menu"?Oc():Tc==="pause"?(In=!0,ee("pause-menu").classList.remove("hidden")):In=!1,ns()}var iS=!1;function yd(n,e){vc=n,jn&&(jn=!1),tn==="freeroam"&&(In=!0),As=!0,Ls(),ee("hud").classList.add("hidden"),ee("touch-controls").classList.add("hidden"),xn(null,null,""),iS=it.visible,Ii&&(Ii=null,or()),Ic.open(e||"car")}function sS(n){if(!ut)if(n==="driver"){let e=qu(he.pos.x,he.pos.z,he.heading);it.position.set(e.x,0,e.z),it.rotation.y=he.heading,Es(it,0,0,!1,0),it.visible=!0}else it.visible=!1}function rS(){if(As=!1,Ic.close(),it.visible=ut,is(),vc==="menu"){Oc();return}if(vc==="garage"){Pc(Tc);return}(tn==="freeroam"||tn==="drag")&&(ee("hud").classList.toggle("hidden",tn!=="freeroam"),ee("touch-controls").classList.remove("hidden"),vc==="pause"?(In=!0,ee("pause-menu").classList.remove("hidden")):In=!1,ut?Dc():po())}function oS(n){oa+=n*.35;let e=Ic.tab==="driver",t=e?it.position.x:he.pos.x,i=e?it.position.z:he.pos.z,s=e?3.4:7.2,r=e?1.7:2.6,o=e?1.05:.75;kt.position.set(t+Math.sin(oa)*s,r,i+Math.cos(oa)*s);let a=Math.cos(oa),l=-Math.sin(oa),c=e?.9:2.2;kt.lookAt(t+a*c,o,i+l*c),Math.abs(55-Ui)>.25&&(Ui=55,kt.fov=55,kt.updateProjectionMatrix()),ho.x=t,ho.z=i,Bt.update(n,ho)}function aS(){Dt&&(Dt.start(),ee("objective").classList.remove("hidden"),tg(),wt("\u{1F393} TUTORIAL \u2014 finish it for $"+ic.toLocaleString()+" + a free car!",3200))}function tg(){if(!Dt.active){ee("objective").classList.add("hidden");return}ee("obj-step").textContent="STEP "+(Dt.step+1)+"/"+Dt.total,ee("obj-text").textContent=Dt.text;let n=Dt.target(),e=ut?be.pos.x:he.pos.x,t=ut?be.pos.z:he.pos.z,i=ut?be.heading:he.heading,s=ee("obj-arrow"),r=ee("obj-dist");if(n&&!ht){let o=Math.atan2(-(n.x-e),-(n.z-t)),a=Math.atan2(Math.sin(o-i),Math.cos(o-i));s.style.transform="rotate("+(-a).toFixed(3)+"rad)",s.classList.remove("hidden"),r.textContent=Math.round(Math.hypot(n.x-e,n.z-t))+" m"}else s.classList.add("hidden"),r.textContent=Dt.text.startsWith("DRIFT")?Math.round(Dt.driftProgress*100)+"%":""}function ng(){Le.tutorialDone=!0,Is(ic),gn(Le),ee("objective").classList.add("hidden"),Ue.beep(880,.1),setTimeout(()=>Ue.beep(1175,.14),120),lS()}function lS(){fo=!0,xn(null,null,"");let n={topSpeed:1,accel:1,handling:1,grip:1};for(let t of Pi)for(let i in n)n[i]=Math.max(n[i],t.stats[i]);let e=(t,i,s)=>`<div class="stat-row"><span>${t}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(i/s*100))}%"></i></div></div>`;ee("pick-list").innerHTML=Pi.map(t=>`<div class="car-card"><div class="cinfo"><b>${t.name}</b><small>${t.desc} \xB7 worth $${t.price.toLocaleString()}</small><div class="stat-bars">${e("SPD",t.stats.topSpeed,n.topSpeed)}${e("ACC",t.stats.accel,n.accel)}${e("HDL",t.stats.handling,n.handling)}${e("GRP",t.stats.grip,n.grip)}</div></div><button class="buy-btn" data-id="${t.id}">PICK FREE</button></div>`).join(""),ee("car-pick").classList.remove("hidden")}function ig(n){Ii=null;let e=Pi.find(t=>t.id===n);e&&(Le.owned.includes(n)||Le.owned.push(n),Le.upgrades[n]||(Le.upgrades[n]={engine:0,turbo:0,tires:0,suspension:0,nitro:0}),typeof Le.paint[n]!="number"&&(Le.paint[n]=e.colors[0]),Le.currentCar=n,gn(Le),or(),ee("car-pick").classList.add("hidden"),fo=!1,ns(),wt("\u{1F3C6} "+e.name+" is yours! +$"+ic.toLocaleString()+" in the bank",3200),Ue.beep(990,.1))}function z0(n,e){let t=ee("mp-status");t.classList.remove("hidden"),t.className="mp-status "+n,t.textContent=n==="on"?"\u25CF online \xB7 "+e+(e===1?" player":" players"):n==="connecting"?"\u25CF connecting\u2026":"\u25CF offline";let i=ee("online-hud");i.textContent=n==="on"?"\u{1F310} "+e+" online":"\u{1F310} \u2026",i.classList.toggle("dim",n!=="on")}function cS(){return Kt.name=Le.name,Kt.car=Hn.id,vi||(vi=Um(Le,Hn.id),bn==="tdm"&&Ze.team&&(vi.o[0]=Y0[Ze.team])),Kt.team=bn==="tdm"?Ze.team:null,Kt.dead=_i,Kt.look=vi,Kt.b=ht?ht.b.id:-1,ut?(Kt.mode="foot",Kt.x=be.pos.x,Kt.z=be.pos.z,Kt.h=be.heading,Kt.speed=be.speed,Kt.px=he.pos.x,Kt.pz=he.pos.z,Kt.ph=he.heading,Kt.w=En().equipped||null):(Kt.mode="car",Kt.x=he.pos.x,Kt.z=he.pos.z,Kt.h=he.heading,Kt.speed=_t.speed,Kt.w=null),Kt}async function hS(){Mn=new No({antialias:!1,powerPreference:"high-performance"}),Mn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Mn.setSize(Vn.view.w,Vn.view.h),Mn.toneMapping=Zo,Mn.toneMappingExposure=1,Mn.shadowMap.enabled=!0,Mn.shadowMap.type=Cl,ee("game-container").appendChild(Mn.domElement),Lt=new Wr,kt=new vn(62,Vn.view.w/Vn.view.h,.1,3e3),Bt=fm(Lt,Xm),Ps=Zm(Lt,Bt);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(m0(),p0)),t=new Vr(Mn);Lt.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let n=Tm();Lt.add(n.mesh),W0={uniforms:n.uniforms,sun:Bt.sun,hemi:Bt.hemi,scene:Lt,renderer:Mn},sg("day",!0);try{Qn=(await Promise.resolve().then(()=>(w0(),S0))).createPostFX(Mn,Lt,kt),Qn.setBloomStrength(Wl.day.bloom)}catch(e){console.warn("postfx off",e),Qn=null}Di=new Vl("auto"),Di.onChange(H0),H0(Di.level,Fu(Di.level)),ar=new oi(Lt,70,{color:14211288,opacity:.42}),da=new oi(Lt,40,{color:7829367,opacity:.3,size:.9}),Ac=new Xl(Lt,500),yi=new wl(13624575,0,60,.5,.45,1.2),Mc=new Jt,Lt.add(Mc),yi.target=Mc,Lt.add(yi)}function H0(n,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);Mn.setPixelRatio(t),Qn&&(Qn.setPixelRatio(Math.min(t,1)),Qn.setSize(Vn.view.w,Vn.view.h),Qn.setBloomEnabled(e.bloom));let i=e.shadows;(Mn.shadowMap.enabled!==i||Bt&&Bt.sun.castShadow!==i)&&(Mn.shadowMap.enabled=i,Bt&&(Bt.sun.castShadow=i),Lt.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),Bt&&Bt.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),xd=e.particles,Ac&&Ac.setVisible(e.particles>.3)}function sg(n,e){let t=Bu;typeof n=="string"&&(co=t.indexOf(n)),co<0&&(co=0);let i=t[co],s=Am(W0,i),r=i==="day"?0:i==="sunset"?.45:1;Bt&&Bt.setGlow(r),Qn&&Qn.setBloomStrength(s.bloom),gd=i==="day"?0:i==="sunset"?30:70,yi&&tn!=="drag"&&(yi.intensity=gd);let o=ee("tod-btn");o&&(o.textContent=i==="day"?"\u2600\uFE0F":i==="sunset"?"\u{1F307}":"\u{1F319}"),e||wt(s.label+" mode")}function uS(){co=(co+1)%Bu.length,sg()}var F0=performance.now();function rg(n){requestAnimationFrame(rg);let e=(n-F0)/1e3;F0=n,e>0||(e=.016),e>.1&&(e=.1),bc++;let t=tn==="freeroam"&&!In&&!jn&&!lr&&!As&&!fo&&!_i&&!Ed;if(As)oS(e);else if(t&&ut)Bb(e),Bt.update(e,be.pos),Ps.update(e),Ts.update(e,ht&&ht.room),ar.update(e),da.update(e),Di&&Di.update(e),Ue.engine(0,0),Ue.skid(!1),gc.x=he.pos.x,gc.z=he.pos.z,ht?Ec.draw(ht.back.x,ht.back.z,be.heading,gc,Ft):Ec.draw(be.pos.x,be.pos.z,be.heading,gc,Ft),C0(),St.consumeAction()&&P0();else if(t){_t=he.update(St.input,e,zb);let i=Rm(Lc,_t.drifting,_t.speed,e);i>0&&(Is(i),wt("DRIFT +$"+i.toLocaleString())),ho.x=he.pos.x,ho.z=he.pos.z,Bt.update(e,ho),hr(e),jb(e),Qb(),Ob(e),Ps.update(e),ha.update(e,_n,!1,!1),Ec.draw(he.pos.x,he.pos.z,he.heading,null,Ft),C0(),St.consumeAction()&&P0(),Di&&Di.update(e);let s=Math.min(1,Math.abs(_t.speed)/(uo.topSpeed*1.15));Ue.engine(_t.rpm,Math.max(0,St.input.throttle||0),_t.shifting),_t.gear!==mc&&(mc&&Ue.shiftBlip(_t.gear>mc),mc=_t.gear),Le.manual?(St.consumeGearUp()&&he.box.shift(1),St.consumeGearDown()&&he.box.shift(-1)):(St.consumeGearUp(),St.consumeGearDown()),Ue.skid(_t.drifting)}else tn==="drag"&&!In&&!jn&&!As?li.active&&li.update(e):(Ue.engine(0,0),Ue.skid(!1));if(tn==="freeroam"&&!In&&!jn&&!As&&(Ss.x=ut?be.pos.x:he.pos.x,Ss.z=ut?be.pos.z:he.pos.z,Ss.alive=!_i,Ss.hidden=!!ht,Ss.inCar=!ut,!lr&&!fo&&(Fn.update(e,Ss),Wn.update(e,Ss,ut?null:Ss),Wn.hitList(),!ut&&!_i&&Fn.carHits(he.pos.x,he.pos.z,he.heading,_t.speed)&&(Ue.beep(70,.12),he.vel.x*=.85,he.vel.z*=.85)),Rs.update(e),yc>0&&(yc-=e,ee("hurt").style.opacity=String(Math.max(0,yc/.35)*.75)),_i&&(md+=e,md>3.2&&Kb())),t&&Zt&&Zt.active){let i=Zt.update(e,{pos:ut?be.pos:he.pos,cam:kt.position});i==="pass"?Yb():i==="fail"&&eg("out of time"),Zt.active&&bc%3===0&&$b()}if(t&&Dt&&Dt.active){let i=Dt.update(e,{pos:ut?be.pos:he.pos,drifting:!ut&&_t.drifting,speed:ut?0:_t.speed,onFoot:ut,inside:ht?ht.b.id:-1});i==="next"?(Ue.beep(880,.08),wt("\u2705 Nice! Next: "+Dt.text,2200)):i==="done"&&ng(),bc%3===0&&tg()}Xb(),Ze.over>0&&(Ze.over-=e,ee("tdm-win").classList.remove("hidden"),Ze.over<=0&&(ee("tdm-win").classList.add("hidden"),Ze.score.red=Ze.score.blue=0,Nc(),bn==="tdm"&&!_i&&Id())),Ft&&Ft.update(e,tn==="freeroam"?cS():null,n),ar&&(tn!=="freeroam"||In||jn||lr)&&(ar.update(e),da.update(e)),Qn?Qn.render():Mn.render(Lt,kt)}function dS(){ee("m-freeroam").onclick=()=>{Ue.unlock(),Vn.goLandscape(),Ue.beep(600,.06),dd("single")},ee("m-online").onclick=()=>{Ue.unlock(),Vn.goLandscape(),Ue.beep(600,.06),dd("online")},ee("m-tdm").onclick=()=>{Ue.unlock(),Vn.goLandscape(),Ue.beep(600,.06),dd("tdm")},ee("m-drag").onclick=()=>{Ue.unlock(),Vn.goLandscape(),Ue.beep(600,.06),N0()},ee("store-close").onclick=()=>{Ue.beep(500,.05),Z0()},ee("m-garage").onclick=()=>{Ue.unlock(),Pc("menu")},ee("p-resume").onclick=()=>{Ue.beep(600,.05),Vn.goLandscape(),tS()},ee("p-freeroam").onclick=()=>{Ue.beep(600,.05),wc()},ee("p-drag").onclick=()=>{Ue.beep(600,.05),N0()},ee("p-garage").onclick=()=>Pc("pause"),ee("p-quit").onclick=()=>Oc(),ee("menu-btn").onclick=O0,ee("garage-close").onclick=nS,ee("drag-exit").onclick=()=>{li.active&&li.exit(),wc()},ee("m-editor").onclick=()=>{Ue.unlock(),Ue.beep(600,.05),yd("menu","car")},ee("p-editor").onclick=()=>{Ue.beep(600,.05),yd("pause",ut?"driver":"car")},ee("se-done").onclick=()=>{Ue.beep(500,.05),rS()},ee("m-tutorial").onclick=()=>{Ue.unlock(),Vn.goLandscape(),Ue.beep(600,.06),Le.tutorialSkipped=!1,gn(Le),wc()},ee("obj-skip").onclick=()=>{Dt.stop(),Le.tutorialSkipped=!0,gn(Le),ee("objective").classList.add("hidden"),wt("Tutorial skipped \u2014 replay it from the main menu for $100K",2600)};let n=()=>{Le.manual=!Le.manual,gn(Le),G0(),Ue.beep(600,.05),wt(Le.manual?"Manual: shift with \u25B2/\u25BC GEAR (G / B keys). Watch the rev bar!":"Automatic gearbox",2600)};ee("m-trans").onclick=n,ee("p-trans").onclick=n,ee("mission-btn").onclick=()=>{Ue.beep(650,.05),qb()},ee("mb-start").onclick=()=>Zb(),ee("mb-close").onclick=()=>{Ue.beep(500,.05),Cc()},ee("victory-ok").onclick=()=>{ee("victory").classList.add("hidden")},ee("pick-list").addEventListener("click",e=>{let t=e.target.closest("button[data-id]");t&&ig(t.dataset.id)}),ee("tod-btn")&&(ee("tod-btn").onclick=()=>{Ue.beep(600,.05),uS()}),ee("gfx-btn")&&(ee("gfx-btn").onclick=()=>{Ue.beep(600,.05);let e=Di.cycleMode();ee("gfx-btn").textContent=e==="auto"?"\u2728":e==="high"?"\u2728+":"\u2728\u2212",wt("Graphics: "+e.toUpperCase()+" ("+wm[Di.level]+")")}),window.addEventListener("pointerdown",()=>Ue.unlock()),window.addEventListener("keydown",()=>Ue.unlock()),document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("gesturestart",e=>e.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(tn==="freeroam"||tn==="drag")&&!In&&O0()})}function fS(n,e){Mn&&(kt.aspect=n/e,kt.updateProjectionMatrix(),Mn.setSize(n,e),Qn&&Qn.setSize(n,e))}async function pS(){try{Le=Dm(zm(bm())),Ue=vm(),Vn=Pm(fS),await hS(),St=pm({isRotated:()=>Vn.rotated}),be=new Ql,it=jr(Le.outfit),it.visible=!1,Lt.add(it),ha=$m(Lt),Object.assign(_n,{save:Le,colliders:Bt.colliders,targets:Ps.targets,audio:Ue,toast:wt,onTargetHit:()=>{Is(Wu),wt("TARGET +$"+Wu,900)},onShot:n=>{Ft&&Ft.sendShots(n)}}),Ts=t0(Lt),Rs=o0(Lt),Fn=a0({scene:Lt,blood:Rs,audio:Ue,count:14,collide:(n,e,t)=>Td(n,e,t),shoot:(n,e,t,i)=>ha.remoteShot(n,e,t,i),onPlayerHit:n=>fd(n)}),Wn=c0({scene:Lt,lines:Bt.roadLines,buildCar:_c,applyCarSkin:ca,CAR_DEFS:Pi}),pd=Wn.hitList(),Zt=f0({scene:Lt,people:Fn,toast:wt,beep:(n,e)=>Ue.beep(n,e)}),_n.hitables=[Fn.hitList,pd,Rc],_n.onPersonHit=(n,e,t,i)=>{if(n.kind==="ped"||n.kind==="enemy")Fn.damage(n,e,t,i);else if(n.kind==="car"){let s=Wn.hitCar(n.car,e,t,i);s&&(Rs.hit(s.x,s.y,s.z,t,i,s.kind==="killed"?1.6:.7),s.kind==="killed"&&(Rs.pool(s.x+t,s.z+i,1.4),Fn.scare(s.x,s.z,30)))}else typeof L0=="function"&&n.kind==="player"&&L0(n,e,t,i)},Dt=n0(Lt,Bt),bd=Jm({save:Le,persist:()=>gn(Le),toast:n=>wt(n,1600),beep:(n,e)=>Ue.beep(n,e),onChange:()=>{ns(),is()}}),Ec=Km(ee("minimap"),Ps.stores),is(),Rd(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(n,e,t)=>{ut?(be.reset(n,e,t||0),Dc()):(he.pos.x=n,he.pos.z=e,he.heading=t||0,hr(0),po())},save:()=>Le,stores:()=>Ps.stores,buildings:()=>Bt.buildings,inside:()=>ht&&{id:ht.b.id,style:ht.room.style},enter:n=>q0(n),exit:()=>Uc(),getOut:()=>Cd(),tut:()=>Dt&&{active:Dt.active,step:Dt.step},finishTut:()=>ng(),pick:n=>ig(n),mp:()=>Ft&&{status:Ft.status,count:Ft.count},state:()=>({state:tn,onFoot:ut,editorOpen:As,pickOpen:fo,cash:Le.cash}),steal:()=>{let n=Wn.cars[0];return be.reset(n.x+2,n.z,0),X0(n),Hn.name},physics:()=>he,missions:()=>Zt,setDone:n=>{Le.missionsDone=n},people:()=>Fn,traffic:()=>Wn,hp:()=>Cs,hurt:n=>fd(n),car:()=>({vis:ln.visible,inScene:!!ln.parent,pos:ln.position.toArray().map(n=>+n.toFixed(1)),id:Hn.id,phys:[+he.pos.x.toFixed(1),+he.pos.z.toFixed(1)],cam:kt.position.toArray().map(n=>+n.toFixed(1))}),cam:()=>({c:kt.position.toArray().map(n=>+n.toFixed(2)),p:it.position.toArray().map(n=>+n.toFixed(2)),pv:it.visible,f:[be.pos.x,be.pos.z,be.heading]})}),Sd(),he=new Bl(uo),G0(),wd(),k0=Sm({save:Le,getDef:n=>Pi.find(e=>e.id===n),onSelectCar:()=>{Ii=null,or()},onPaint:()=>or(),onWheels:()=>or(),refreshScene:()=>or(),openEditor:()=>yd("garage","car")}),Ic=jm({save:Le,cars:Pi,persist:()=>gn(Le),beep:(n,e)=>Ue.beep(n,e),onCar:n=>{n?or():ca(ln,Le.paint[Hn.id],js(Le,Hn.id)),vi=null},onOutfit:()=>{xi(it,Le.outfit),vi=null},onName:()=>{vi=null},onTab:n=>sS(n)}),Ft=r0({scene:Lt,CAR_DEFS:Pi,buildCar:_c,applyCarSkin:ca,buildCharacter:jr,setOutfit:xi,setHeldWeapon:ta,animateCharacter:Es,unpackLook:Nm,remoteShot:(n,e,t,i)=>ha.remoteShot(n,e,t,i),localBuilding:()=>ht?ht.b.id:-1,onHit:n=>{bn!=="tdm"||!Ze.team||n.tm===Ze.team||_i||(Ze.lastAttacker={id:n.id,name:n.n,team:n.tm},fd(+n.d||10))},onKill:n=>{bn==="tdm"&&j0(n)},onStatus:(n,e)=>z0(n==="on"?"on":n==="connecting"?"connecting":"off",e),onCount:n=>{Ft&&Ft.status==="on"&&z0("on",n)}}),Ft.connect(),li=_m({scene:Lt,camera:kt,buildCar:_c,CAR_DEFS:Pi,effectiveStats:B0,getPlayer:()=>(xc.def=Hn,xc.stats=uo,xc.group=ln,xc),controls:St,audio:Ue,addCash:Is,toast:wt,city:Bt}),dS(),ns(),ee("loading").classList.add("hidden"),Oc(),requestAnimationFrame(rg)}catch(n){console.error(n),ee("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(n&&n.message||n)+"</p>"}}pS();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
