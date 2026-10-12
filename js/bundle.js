(()=>{var A0=Object.defineProperty;var Fn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var bc=(n,e)=>{for(var t in e)A0(n,t,{get:e[t],enumerable:!0})};function Ni(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function Eg(n,e){return(n%e+e)%e}function Dc(n,e,t){return(1-t)*n+t*e}function jd(n){return(n&n-1)===0&&n!==0}function mh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function cp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sg(){let n=Wa("canvas");return n.style.display="block",n}function _o(n){n in Qd||(Qd[n]=!0,console.warn(n))}function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function zc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Fc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ws.fromArray(n,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=i.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Yc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Og(n,e,t,i,s,r,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===is,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:n}}function Ea(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ur),n.getVertexPosition(l,dr),n.getVertexPosition(c,fr);let h=Og(n,e,t,i,ur,dr,fr,ya);if(h){s&&(xa.fromBufferAttribute(s,a),_a.fromBufferAttribute(s,l),va.fromBufferAttribute(s,c),h.uv=Ls.getInterpolation(ya,ur,dr,fr,xa,_a,va,new le)),r&&(xa.fromBufferAttribute(r,a),_a.fromBufferAttribute(r,l),va.fromBufferAttribute(r,c),h.uv1=Ls.getInterpolation(ya,ur,dr,fr,xa,_a,va,new le),h.uv2=h.uv1),o&&(ff.fromBufferAttribute(o,a),pf.fromBufferAttribute(o,l),mf.fromBufferAttribute(o,c),h.normal=Ls.getInterpolation(ya,ur,dr,fr,ff,pf,mf,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};Ls.getNormal(ur,dr,fr,f.normal),h.face=f}return h}function Pr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function wn(n){let e={};for(let t=0;t<n.length;t++){let i=Pr(n[t]);for(let s in i)e[s]=i[s]}return e}function Fg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function up(n){return n.getRenderTarget()===null?n.outputColorSpace:mt.workingColorSpace}function dp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let f=c.array,p=c.usage,g=f.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,f,p),c.onUploadCallback();let m;if(f instanceof Float32Array)m=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=n.SHORT;else if(f instanceof Uint32Array)m=n.UNSIGNED_INT;else if(f instanceof Int32Array)m=n.INT;else if(f instanceof Int8Array)m=n.BYTE;else if(f instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,f){let p=h.array,g=h._updateRange,x=h.updateRanges;if(n.bindBuffer(f,c),g.count===-1&&x.length===0&&n.bufferSubData(f,0,p),x.length!==0){for(let m=0,u=x.length;m<u;m++){let d=x[m];t?n.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):n.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);if(f===void 0)i.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}function Sv(n,e,t,i,s,r,o){let a=new Ne(0),l=r===!0?0:1,c,h,f=null,p=0,g=null;function x(u,d){let v=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?m(a,l):_&&_.isColor&&(m(_,1),v=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===yl)?(h===void 0&&(h=new ne(new Pe(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Pr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,M,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=mt.getTransfer(_.colorSpace)!==Mt,(f!==_||p!==_.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,f=_,p=_.version,g=n.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ne(new st(2,2),new jt({name:"BackgroundMaterial",uniforms:Pr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=mt.getTransfer(_.colorSpace)!==Mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,p=_.version,g=n.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null))}function m(u,d){u.getRGB(ba,up(n)),i.buffers.color.setClear(ba.r,ba.g,ba.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(u,d=1){a.set(u),l=d,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,m(a,l)},render:x}}function bv(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=u(null),c=l,h=!1;function f(P,A,z,B,G){let W=!1;if(o){let L=m(B,z,A);c!==L&&(c=L,g(c.object)),W=d(P,B,z,G),W&&v(P,B,z,G)}else{let L=A.wireframe===!0;(c.geometry!==B.id||c.program!==z.id||c.wireframe!==L)&&(c.geometry=B.id,c.program=z.id,c.wireframe=L,W=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,b(P,A,z,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function g(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function x(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function m(P,A,z){let B=z.wireframe===!0,G=a[P.id];G===void 0&&(G={},a[P.id]=G);let W=G[A.id];W===void 0&&(W={},G[A.id]=W);let L=W[B];return L===void 0&&(L=u(p()),W[B]=L),L}function u(P){let A=[],z=[],B=[];for(let G=0;G<s;G++)A[G]=0,z[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:B,object:P,attributes:{},index:null}}function d(P,A,z,B){let G=c.attributes,W=A.attributes,L=0,k=z.getAttributes();for(let Z in k)if(k[Z].location>=0){let X=G[Z],ie=W[Z];if(ie===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),X===void 0||X.attribute!==ie||ie&&X.data!==ie.data)return!0;L++}return c.attributesNum!==L||c.index!==B}function v(P,A,z,B){let G={},W=A.attributes,L=0,k=z.getAttributes();for(let Z in k)if(k[Z].location>=0){let X=W[Z];X===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));let ie={};ie.attribute=X,X&&X.data&&(ie.data=X.data),G[Z]=ie,L++}c.attributes=G,c.attributesNum=L,c.index=B}function _(){let P=c.newAttributes;for(let A=0,z=P.length;A<z;A++)P[A]=0}function w(P){D(P,0)}function D(P,A){let z=c.newAttributes,B=c.enabledAttributes,G=c.attributeDivisors;z[P]=1,B[P]===0&&(n.enableVertexAttribArray(P),B[P]=1),G[P]!==A&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,A),G[P]=A)}function M(){let P=c.newAttributes,A=c.enabledAttributes;for(let z=0,B=A.length;z<B;z++)A[z]!==P[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function y(P,A,z,B,G,W,L){L===!0?n.vertexAttribIPointer(P,A,z,G,W):n.vertexAttribPointer(P,A,z,B,G,W)}function b(P,A,z,B){if(i.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let G=B.attributes,W=z.getAttributes(),L=A.defaultAttributeValues;for(let k in W){let Z=W[k];if(Z.location>=0){let I=G[k];if(I===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(I=P.instanceColor)),I!==void 0){let X=I.normalized,ie=I.itemSize,fe=t.get(I);if(fe===void 0)continue;let xe=fe.buffer,we=fe.type,Te=fe.bytesPerElement,Se=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||I.gpuType===Qf);if(I.isInterleavedBufferAttribute){let Oe=I.data,F=Oe.stride,me=I.offset;if(Oe.isInstancedInterleavedBuffer){for(let ee=0;ee<Z.locationSize;ee++)D(Z.location+ee,Oe.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let ee=0;ee<Z.locationSize;ee++)w(Z.location+ee);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ee=0;ee<Z.locationSize;ee++)y(Z.location+ee,ie/Z.locationSize,we,X,F*Te,(me+ie/Z.locationSize*ee)*Te,Se)}else{if(I.isInstancedBufferAttribute){for(let Oe=0;Oe<Z.locationSize;Oe++)D(Z.location+Oe,I.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Oe=0;Oe<Z.locationSize;Oe++)w(Z.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Oe=0;Oe<Z.locationSize;Oe++)y(Z.location+Oe,ie/Z.locationSize,we,X,ie*Te,ie/Z.locationSize*Oe*Te,Se)}}else if(L!==void 0){let X=L[k];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(Z.location,X);break;case 3:n.vertexAttrib3fv(Z.location,X);break;case 4:n.vertexAttrib4fv(Z.location,X);break;default:n.vertexAttrib1fv(Z.location,X)}}}}M()}function E(){V();for(let P in a){let A=a[P];for(let z in A){let B=A[z];for(let G in B)x(B[G].object),delete B[G];delete A[z]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let A=a[P.id];for(let z in A){let B=A[z];for(let G in B)x(B[G].object),delete B[G];delete A[z]}delete a[P.id]}function N(P){for(let A in a){let z=a[A];if(z[P.id]===void 0)continue;let B=z[P.id];for(let G in B)x(B[G].object),delete B[G];delete z[P.id]}}function V(){U(),h=!0,c!==l&&(c=l,g(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:V,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:w,disableUnusedAttributes:M}}function wv(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,f){n.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,p){if(p===0)return;let g,x;if(s)g=n,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](r,h,f,p),t.update(f,r,p)}function c(h,f,p){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<p;x++)this.render(h[x],f[x]);else{g.multiDrawArraysWEBGL(r,h,0,f,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Tv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),u=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,w=o||e.has("OES_texture_float"),D=_&&w,M=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:D,maxSamples:M}}function Av(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ii,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let g=f.length!==0||p||i!==0||s;return s=p,i=f.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,g){let x=f.clippingPlanes,m=f.clipIntersection,u=f.clipShadows,d=n.get(f);if(!s||x===null||x.length===0||r&&!u)r?h(null):c();else{let v=r?0:i,_=v*4,w=d.clippingState||null;l.value=w,w=h(x,p,_,g);for(let D=0;D!==_;++D)w[D]=t[D];d.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,g,x){let m=f!==null?f.length:0,u=null;if(m!==0){if(u=l.value,x!==!0||u===null){let d=g+m*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(u===null||u.length<d)&&(u=new Float32Array(d));for(let _=0,w=g;_!==m;++_,w+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(u,w),u[w+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,u}}function Rv(n){let e=new WeakMap;function t(o,a){return a===hh?o.mapping=Ar:a===uh&&(o.mapping=Rr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===hh||a===uh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function Cv(n){let e=[],t=[],i=[],s=n,r=n-Er+1+gf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Er?l=gf[o-n+Er-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,x=6,m=3,u=2,d=1,v=new Float32Array(m*x*g),_=new Float32Array(u*x*g),w=new Float32Array(d*x*g);for(let M=0;M<g;M++){let y=M%3*2/3-1,b=M>2?0:-1,E=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];v.set(E,m*x*M),_.set(p,u*x*M);let S=[M,M,M,M,M,M];w.set(S,d*x*M)}let D=new Kt;D.setAttribute("position",new _n(v,m)),D.setAttribute("uv",new _n(_,u)),D.setAttribute("faceIndex",new _n(w,d)),e.push(D),s>Er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vf(n,e,t){let i=new An(n,e,t);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Pv(n,e,t){let i=new Float32Array(Ps),s=new H(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lu(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function yf(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Mf(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function Lv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===hh||l===uh,h=l===Ar||l===Rr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ir(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Ir(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Iv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Dv(n,e,t,i){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let m=p.morphAttributes[x];for(let u=0,d=m.length;u<d;u++)e.remove(m[u])}p.removeEventListener("dispose",o),delete s[p.id];let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let x in p)e.update(p[x],n.ARRAY_BUFFER);let g=f.morphAttributes;for(let x in g){let m=g[x];for(let u=0,d=m.length;u<d;u++)e.update(m[u],n.ARRAY_BUFFER)}}function c(f){let p=[],g=f.index,x=f.attributes.position,m=0;if(g!==null){let v=g.array;m=g.version;for(let _=0,w=v.length;_<w;_+=3){let D=v[_+0],M=v[_+1],y=v[_+2];p.push(D,M,M,y,y,D)}}else if(x!==void 0){let v=x.array;m=x.version;for(let _=0,w=v.length/3-1;_<w;_+=3){let D=_+0,M=_+1,y=_+2;p.push(D,M,M,y,y,D)}}else return;let u=new(cp(p)?ja:Ka)(p,1);u.version=m;let d=r.get(f);d&&e.remove(d),r.set(f,u)}function h(f){let p=r.get(f);if(p){let g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Uv(n,e,t,i){let s=i.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,x){n.drawElements(r,x,a,g*l),t.update(x,r,1)}function f(g,x,m){if(m===0)return;let u,d;if(s)u=n,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](r,x,a,g*l,m),t.update(x,r,m)}function p(g,x,m){if(m===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<m;d++)this.render(g[d]/l,x[d]);else{u.multiDrawElementsWEBGL(r,x,0,a,g,0,m);let d=0;for(let v=0;v<m;v++)d+=x[v];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function Nv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function zv(n,e){return n[0]-e[0]}function Ov(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Fv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0,m=r.get(h);if(m===void 0||m.count!==x){let P=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",P)};m!==void 0&&m.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],y=h.morphAttributes.color||[],b=0;v===!0&&(b=1),_===!0&&(b=2),w===!0&&(b=3);let E=h.attributes.position.count*b,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let N=new Float32Array(E*S*4*x),V=new Ya(N,E,S,x);V.type=Qi,V.needsUpdate=!0;let U=b*4;for(let A=0;A<x;A++){let z=D[A],B=M[A],G=y[A],W=E*S*4*A;for(let L=0;L<z.count;L++){let k=L*U;v===!0&&(o.fromBufferAttribute(z,L),N[W+k+0]=o.x,N[W+k+1]=o.y,N[W+k+2]=o.z,N[W+k+3]=0),_===!0&&(o.fromBufferAttribute(B,L),N[W+k+4]=o.x,N[W+k+5]=o.y,N[W+k+6]=o.z,N[W+k+7]=0),w===!0&&(o.fromBufferAttribute(G,L),N[W+k+8]=o.x,N[W+k+9]=o.y,N[W+k+10]=o.z,N[W+k+11]=G.itemSize===4?o.w:1)}}m={count:x,texture:V,size:new le(E,S)},r.set(h,m),h.addEventListener("dispose",P)}let u=0;for(let v=0;v<p.length;v++)u+=p[v];let d=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{let g=p===void 0?0:p.length,x=i[h.id];if(x===void 0||x.length!==g){x=[];for(let _=0;_<g;_++)x[_]=[_,0];i[h.id]=x}for(let _=0;_<g;_++){let w=x[_];w[0]=_,w[1]=p[_]}x.sort(Ov);for(let _=0;_<8;_++)_<g&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(zv);let m=h.morphAttributes.position,u=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let w=a[_],D=w[0],M=w[1];D!==Number.MAX_SAFE_INTEGER&&M?(m&&h.getAttribute("morphTarget"+_)!==m[D]&&h.setAttribute("morphTarget"+_,m[D]),u&&h.getAttribute("morphNormal"+_)!==u[D]&&h.setAttribute("morphNormal"+_,u[D]),s[_]=M,d+=M):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),u&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Bv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Br(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ef[s];if(r===void 0&&(r=new Float32Array(s),Ef[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function Gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function Vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function Wv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Tf.set(i),n.uniformMatrix2fv(this.addr,!1,Tf),tn(t,i)}}function Xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;wf.set(i),n.uniformMatrix3fv(this.addr,!1,wf),tn(t,i)}}function qv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;bf.set(i),n.uniformMatrix4fv(this.addr,!1,bf),tn(t,i)}}function Yv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function $v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function Jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function Kv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function Qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function ty(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?pp:fp;t.setTexture2D(e||r,s)}function ny(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gp,s)}function iy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xp,s)}function sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mp,s)}function ry(n){switch(n){case 5126:return Hv;case 35664:return kv;case 35665:return Gv;case 35666:return Vv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Jv;case 5125:return Kv;case 36294:return jv;case 36295:return Qv;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}function oy(n,e){n.uniform1fv(this.addr,e)}function ay(n,e){let t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function ly(n,e){let t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function cy(n,e){let t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function hy(n,e){let t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uy(n,e){let t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dy(n,e){let t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fy(n,e){n.uniform1iv(this.addr,e)}function py(n,e){n.uniform2iv(this.addr,e)}function my(n,e){n.uniform3iv(this.addr,e)}function gy(n,e){n.uniform4iv(this.addr,e)}function xy(n,e){n.uniform1uiv(this.addr,e)}function _y(n,e){n.uniform2uiv(this.addr,e)}function vy(n,e){n.uniform3uiv(this.addr,e)}function yy(n,e){n.uniform4uiv(this.addr,e)}function My(n,e,t){let i=this.cache,s=e.length,r=El(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||fp,r[o])}function Ey(n,e,t){let i=this.cache,s=e.length,r=El(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gp,r[o])}function Sy(n,e,t){let i=this.cache,s=e.length,r=El(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xp,r[o])}function by(n,e,t){let i=this.cache,s=e.length,r=El(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mp,r[o])}function wy(n){switch(n){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return cy;case 35674:return hy;case 35675:return uy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return xy;case 36294:return _y;case 36295:return vy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return by}}function Af(n,e){n.seq.push(e),n.map[e.id]=e}function Ty(n,e,t){let i=n.name,s=i.length;for(th.lastIndex=0;;){let r=th.exec(i),o=th.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Af(t,c===void 0?new yh(a,n,e):new Mh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Eh(a),Af(t,f)),t=f}}}function Rf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Cy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Py(n){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n),i;switch(e===t?i="":e===ka&&t===Ha?i="LinearDisplayP3ToLinearSRGB":e===Ha&&t===ka&&(i="LinearSRGBToLinearDisplayP3"),n){case Oi:case Ml:return[i,"LinearTransferOETF"];case gt:case au:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Cy(n.getShaderSource(e),o)}else return s}function Ly(n,e){let t=Py(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Iy(n,e){let t;switch(e){case nu:t="Linear";break;case iu:t="Reinhard";break;case su:t="OptimizedCineon";break;case Uo:t="ACESFilmic";break;case ru:t="AgX";break;case ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function Uy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sr).join(`
`)}function Ny(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sr(n){return n!==""}function Pf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Sh(n){return n.replace(Oy,By)}function By(n,e){let t=Qe[e];if(t===void 0){let i=Fy.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sh(t)}function If(n){return n.replace(Hy,ky)}function ky(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Df(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Vy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ar:case Rr:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Rr&&(e="ENVMAP_MODE_REFRACTION"),e}function Xy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kf:e="ENVMAP_BLENDING_MULTIPLY";break;case eg:e="ENVMAP_BLENDING_MIX";break;case tg:e="ENVMAP_BLENDING_ADD";break}return e}function qy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Yy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Gy(t),c=Vy(t),h=Wy(t),f=Xy(t),p=qy(t),g=t.isWebGL2?"":Dy(t),x=Uy(t),m=Ny(r),u=s.createProgram(),d,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sr).join(`
`),d.length>0&&(d+=`
`),v=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sr).join(`
`),v.length>0&&(v+=`
`)):(d=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),v=[g,Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ts?Iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Sh(o),o=Pf(o,t),o=Lf(o,t),a=Sh(a),a=Pf(a,t),a=Lf(a,t),o=If(o),a=If(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=_+d+o,D=_+v+a,M=Rf(s,s.VERTEX_SHADER,w),y=Rf(s,s.FRAGMENT_SHADER,D);s.attachShader(u,M),s.attachShader(u,y),t.index0AttributeName!==void 0?s.bindAttribLocation(u,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(u,0,"position"),s.linkProgram(u);function b(V){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(u).trim(),P=s.getShaderInfoLog(M).trim(),A=s.getShaderInfoLog(y).trim(),z=!0,B=!0;if(s.getProgramParameter(u,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,u,M,y);else{let G=Cf(s,M,"vertex"),W=Cf(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(u,s.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+G+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(P===""||A==="")&&(B=!1);B&&(V.diagnostics={runnable:z,programLog:U,vertexShader:{log:P,prefix:d},fragmentShader:{log:A,prefix:v}})}s.deleteShader(M),s.deleteShader(y),E=new Tr(s,u),S=zy(s,u)}let E;this.getUniforms=function(){return E===void 0&&b(this),E};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(u,Ay)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=M,this.fragmentShader=y,this}function $y(n,e,t,i,s,r,o){let a=new Ja,l=new bh,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return E===0?"uv":`uv${E}`}function u(E,S,N,V,U){let P=V.fog,A=U.geometry,z=E.isMeshStandardMaterial?V.environment:null,B=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),G=B&&B.mapping===yl?B.image.height:null,W=x[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));let L=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,k=L!==void 0?L.length:0,Z=0;A.morphAttributes.position!==void 0&&(Z=1),A.morphAttributes.normal!==void 0&&(Z=2),A.morphAttributes.color!==void 0&&(Z=3);let I,X,ie,fe;if(W){let Ht=pi[W];I=Ht.vertexShader,X=Ht.fragmentShader}else I=E.vertexShader,X=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),fe=l.getFragmentShaderID(E);let xe=n.getRenderTarget(),we=U.isInstancedMesh===!0,Te=U.isBatchedMesh===!0,Se=!!E.map,Oe=!!E.matcap,F=!!B,me=!!E.aoMap,ee=!!E.lightMap,ge=!!E.bumpMap,te=!!E.normalMap,De=!!E.displacementMap,be=!!E.emissiveMap,R=!!E.metalnessMap,T=!!E.roughnessMap,q=E.anisotropy>0,ue=E.clearcoat>0,ae=E.iridescence>0,oe=E.sheen>0,ze=E.transmission>0,ye=q&&!!E.anisotropyMap,Re=ue&&!!E.clearcoatMap,He=ue&&!!E.clearcoatNormalMap,Xe=ue&&!!E.clearcoatRoughnessMap,de=ae&&!!E.iridescenceMap,Ke=ae&&!!E.iridescenceThicknessMap,je=oe&&!!E.sheenColorMap,ke=oe&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Le=!!E.specularColorMap,Ze=!!E.specularIntensityMap,ht=ze&&!!E.transmissionMap,ce=ze&&!!E.thicknessMap,pe=!!E.gradientMap,K=!!E.alphaMap,O=E.alphaTest>0,se=!!E.alphaHash,re=!!E.extensions,Ee=!!A.attributes.uv1,Ae=!!A.attributes.uv2,qe=!!A.attributes.uv3,at=ts;return E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:I,fragmentShader:X,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Te,instancing:we,instancingColor:we&&U.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Oi,map:Se,matcap:Oe,envMap:F,envMapMode:F&&B.mapping,envMapCubeUVHeight:G,aoMap:me,lightMap:ee,bumpMap:ge,normalMap:te,displacementMap:p&&De,emissiveMap:be,normalMapObjectSpace:te&&E.normalMapType===pg,normalMapTangentSpace:te&&E.normalMapType===ap,metalnessMap:R,roughnessMap:T,anisotropy:q,anisotropyMap:ye,clearcoat:ue,clearcoatMap:Re,clearcoatNormalMap:He,clearcoatRoughnessMap:Xe,iridescence:ae,iridescenceMap:de,iridescenceThicknessMap:Ke,sheen:oe,sheenColorMap:je,sheenRoughnessMap:ke,specularMap:Be,specularColorMap:Le,specularIntensityMap:Ze,transmission:ze,transmissionMap:ht,thicknessMap:ce,gradientMap:pe,opaque:E.transparent===!1&&E.blending===es,alphaMap:K,alphaTest:O,alphaHash:se,combine:E.combine,mapUv:Se&&m(E.map.channel),aoMapUv:me&&m(E.aoMap.channel),lightMapUv:ee&&m(E.lightMap.channel),bumpMapUv:ge&&m(E.bumpMap.channel),normalMapUv:te&&m(E.normalMap.channel),displacementMapUv:De&&m(E.displacementMap.channel),emissiveMapUv:be&&m(E.emissiveMap.channel),metalnessMapUv:R&&m(E.metalnessMap.channel),roughnessMapUv:T&&m(E.roughnessMap.channel),anisotropyMapUv:ye&&m(E.anisotropyMap.channel),clearcoatMapUv:Re&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:je&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(E.sheenRoughnessMap.channel),specularMapUv:Be&&m(E.specularMap.channel),specularColorMapUv:Le&&m(E.specularColorMap.channel),specularIntensityMapUv:Ze&&m(E.specularIntensityMap.channel),transmissionMapUv:ht&&m(E.transmissionMap.channel),thicknessMapUv:ce&&m(E.thicknessMap.channel),alphaMapUv:K&&m(E.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(te||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:Ae,vertexUv3s:qe,pointsUvs:U.isPoints===!0&&!!A.attributes.uv&&(Se||K),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Se&&E.map.isVideoTexture===!0&&mt.getTransfer(E.map.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===St,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:re&&E.extensions.derivatives===!0,extensionFragDepth:re&&E.extensions.fragDepth===!0,extensionDrawBuffers:re&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)S.push(N),S.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(v(S,E),_(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function w(E){let S=x[E.type],N;if(S){let V=pi[S];N=as.clone(V.uniforms)}else N=E.uniforms;return N}function D(E,S){let N;for(let V=0,U=c.length;V<U;V++){let P=c[V];if(P.cacheKey===S){N=P,++N.usedTimes;break}}return N===void 0&&(N=new Yy(n,S,E,r),c.push(N)),N}function M(E){if(--E.usedTimes===0){let S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function y(E){l.remove(E)}function b(){l.dispose()}return{getParameters:u,getProgramCacheKey:d,getUniforms:w,acquireProgram:D,releaseProgram:M,releaseShaderCache:y,programs:c,dispose:b}}function Jy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Ky(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,p,g,x,m,u){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:x,renderOrder:f.renderOrder,z:m,group:u},n[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=m,d.group=u),e++,d}function a(f,p,g,x,m,u){let d=o(f,p,g,x,m,u);g.transmission>0?i.push(d):g.transparent===!0?s.push(d):t.push(d)}function l(f,p,g,x,m,u){let d=o(f,p,g,x,m,u);g.transmission>0?i.unshift(d):g.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,p){t.length>1&&t.sort(f||Ky),i.length>1&&i.sort(p||Uf),s.length>1&&s.sort(p||Uf)}function h(){for(let f=e,p=n.length;f<p;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function jy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Nf,n.set(i,[o])):s>=r.length?(o=new Nf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ne};break;case"SpotLight":t={position:new H,direction:new H,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function eM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function nM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iM(n,e){let t=new Qy,i=eM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new H);let r=new H,o=new ut,a=new ut;function l(h,f){let p=0,g=0,x=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let m=0,u=0,d=0,v=0,_=0,w=0,D=0,M=0,y=0,b=0,E=0;h.sort(nM);let S=f===!0?Math.PI:1;for(let V=0,U=h.length;V<U;V++){let P=h[V],A=P.color,z=P.intensity,B=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=A.r*z*S,g+=A.g*z*S,x+=A.b*z*S;else if(P.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(P.sh.coefficients[W],z);E++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let L=P.shadow,k=i.get(P);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,s.directionalShadow[m]=k,s.directionalShadowMap[m]=G,s.directionalShadowMatrix[m]=P.shadow.matrix,w++}s.directional[m]=W,m++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(A).multiplyScalar(z*S),W.distance=B,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,s.spot[d]=W;let L=P.shadow;if(P.map&&(s.spotLightMap[y]=P.map,y++,L.updateMatrices(P),P.castShadow&&b++),s.spotLightMatrix[d]=L.matrix,P.castShadow){let k=i.get(P);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,s.spotShadow[d]=k,s.spotShadowMap[d]=G,M++}d++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(A).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),s.rectArea[v]=W,v++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*S),W.distance=P.distance,W.decay=P.decay,P.castShadow){let L=P.shadow,k=i.get(P);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,k.shadowCameraNear=L.camera.near,k.shadowCameraFar=L.camera.far,s.pointShadow[u]=k,s.pointShadowMap[u]=G,s.pointShadowMatrix[u]=P.shadow.matrix,D++}s.point[u]=W,u++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(z*S),W.groundColor.copy(P.groundColor).multiplyScalar(z*S),s.hemi[_]=W,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=g,s.ambient[2]=x;let N=s.hash;(N.directionalLength!==m||N.pointLength!==u||N.spotLength!==d||N.rectAreaLength!==v||N.hemiLength!==_||N.numDirectionalShadows!==w||N.numPointShadows!==D||N.numSpotShadows!==M||N.numSpotMaps!==y||N.numLightProbes!==E)&&(s.directional.length=m,s.spot.length=d,s.rectArea.length=v,s.point.length=u,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=M+y-b,s.spotLightMap.length=y,s.numSpotLightShadowsWithMaps=b,s.numLightProbes=E,N.directionalLength=m,N.pointLength=u,N.spotLength=d,N.rectAreaLength=v,N.hemiLength=_,N.numDirectionalShadows=w,N.numPointShadows=D,N.numSpotShadows=M,N.numSpotMaps=y,N.numLightProbes=E,s.version=tM++)}function c(h,f){let p=0,g=0,x=0,m=0,u=0,d=f.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let w=h[v];if(w.isDirectionalLight){let D=s.directional[p];D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),p++}else if(w.isSpotLight){let D=s.spot[x];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(d),D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),x++}else if(w.isRectAreaLight){let D=s.rectArea[m];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(d),a.identity(),o.copy(w.matrixWorld),o.premultiply(d),a.extractRotation(o),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){let D=s.point[g];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(d),g++}else if(w.isHemisphereLight){let D=s.hemi[u];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(d),u++}}}return{setup:l,setupView:c,state:s}}function zf(n,e){let t=new iM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sM(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new zf(n,e),t.set(r,[l])):o>=a.length?(l=new zf(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function aM(n,e,t){let i=new bo,s=new le,r=new le,o=new Pt,a=new Th({depthPacking:fg}),l=new Ah,c={},h=t.maxTextureSize,f={[is]:on,[on]:is,[St]:St},p=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:rM,fragmentShader:oM}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let x=new Kt;x.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ne(x,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let d=this.type;this.render=function(M,y,b){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||M.length===0)return;let E=n.getRenderTarget(),S=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),V=n.state;V.setBlending(mi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let U=d!==Li&&this.type===Li,P=d===Li&&this.type!==Li;for(let A=0,z=M.length;A<z;A++){let B=M[A],G=B.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||U===!0||P===!0){let k=this.type!==Li?{minFilter:Tn,magFilter:Tn}:{};G.map!==null&&G.map.dispose(),G.map=new An(s.x,s.y,k),G.map.texture.name=B.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let L=G.getViewportCount();for(let k=0;k<L;k++){let Z=G.getViewport(k);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),V.viewport(o),G.updateMatrices(B,k),i=G.getFrustum(),w(y,b,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Li&&v(G,b),G.needsUpdate=!1}d=this.type,u.needsUpdate=!1,n.setRenderTarget(E,S,N)};function v(M,y){let b=e.update(m);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new An(s.x,s.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(y,null,b,p,m,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(y,null,b,g,m,null)}function _(M,y,b,E){let S=null,N=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)S=N;else if(S=b.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let V=S.uuid,U=y.uuid,P=c[V];P===void 0&&(P={},c[V]=P);let A=P[U];A===void 0&&(A=S.clone(),P[U]=A,y.addEventListener("dispose",D)),S=A}if(S.visible=y.visible,S.wireframe=y.wireframe,E===Li?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:f[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=n.properties.get(S);V.light=b}return S}function w(M,y,b,E,S){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Li)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let U=e.update(M),P=M.material;if(Array.isArray(P)){let A=U.groups;for(let z=0,B=A.length;z<B;z++){let G=A[z],W=P[G.materialIndex];if(W&&W.visible){let L=_(M,W,E,S);M.onBeforeShadow(n,M,y,b,U,L,G),n.renderBufferDirect(b,null,U,L,M,G),M.onAfterShadow(n,M,y,b,U,L,G)}}}else if(P.visible){let A=_(M,P,E,S);M.onBeforeShadow(n,M,y,b,U,A,null),n.renderBufferDirect(b,null,U,A,M,null),M.onAfterShadow(n,M,y,b,U,A,null)}}let V=M.children;for(let U=0,P=V.length;U<P;U++)w(V[U],y,b,E,S)}function D(M){M.target.removeEventListener("dispose",D);for(let b in c){let E=c[b],S=M.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function lM(n,e,t){let i=t.isWebGL2;function s(){let O=!1,se=new Pt,re=null,Ee=new Pt(0,0,0,0);return{setMask:function(Ae){re!==Ae&&!O&&(n.colorMask(Ae,Ae,Ae,Ae),re=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,qe,at,_t,Ht){Ht===!0&&(Ae*=_t,qe*=_t,at*=_t),se.set(Ae,qe,at,_t),Ee.equals(se)===!1&&(n.clearColor(Ae,qe,at,_t),Ee.copy(se))},reset:function(){O=!1,re=null,Ee.set(-1,0,0,0)}}}function r(){let O=!1,se=null,re=null,Ee=null;return{setTest:function(Ae){Ae?Te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Ae){se!==Ae&&!O&&(n.depthMask(Ae),se=Ae)},setFunc:function(Ae){if(re!==Ae){switch(Ae){case Y0:n.depthFunc(n.NEVER);break;case Z0:n.depthFunc(n.ALWAYS);break;case $0:n.depthFunc(n.LESS);break;case za:n.depthFunc(n.LEQUAL);break;case J0:n.depthFunc(n.EQUAL);break;case K0:n.depthFunc(n.GEQUAL);break;case j0:n.depthFunc(n.GREATER);break;case Q0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){Ee!==Ae&&(n.clearDepth(Ae),Ee=Ae)},reset:function(){O=!1,se=null,re=null,Ee=null}}}function o(){let O=!1,se=null,re=null,Ee=null,Ae=null,qe=null,at=null,_t=null,Ht=null;return{setTest:function(Ye){O||(Ye?Te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!O&&(n.stencilMask(Ye),se=Ye)},setFunc:function(Ye,pt,Sn){(re!==Ye||Ee!==pt||Ae!==Sn)&&(n.stencilFunc(Ye,pt,Sn),re=Ye,Ee=pt,Ae=Sn)},setOp:function(Ye,pt,Sn){(qe!==Ye||at!==pt||_t!==Sn)&&(n.stencilOp(Ye,pt,Sn),qe=Ye,at=pt,_t=Sn)},setLocked:function(Ye){O=Ye},setClear:function(Ye){Ht!==Ye&&(n.clearStencil(Ye),Ht=Ye)},reset:function(){O=!1,se=null,re=null,Ee=null,Ae=null,qe=null,at=null,_t=null,Ht=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,p={},g={},x=new WeakMap,m=[],u=null,d=!1,v=null,_=null,w=null,D=null,M=null,y=null,b=null,E=new Ne(0,0,0),S=0,N=!1,V=null,U=null,P=null,A=null,z=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=W>=2);let k=null,Z={},I=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),ie=new Pt().fromArray(I),fe=new Pt().fromArray(X);function xe(O,se,re,Ee){let Ae=new Uint8Array(4),qe=n.createTexture();n.bindTexture(O,qe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<re;at++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(se+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return qe}let we={};we[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(n.DEPTH_TEST),l.setFunc(za),be(!1),R(gd),Te(n.CULL_FACE),te(mi);function Te(O){p[O]!==!0&&(n.enable(O),p[O]=!0)}function Se(O){p[O]!==!1&&(n.disable(O),p[O]=!1)}function Oe(O,se){return g[O]!==se?(n.bindFramebuffer(O,se),g[O]=se,i&&(O===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=se),O===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function F(O,se){let re=m,Ee=!1;if(O)if(re=x.get(se),re===void 0&&(re=[],x.set(se,re)),O.isWebGLMultipleRenderTargets){let Ae=O.texture;if(re.length!==Ae.length||re[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,at=Ae.length;qe<at;qe++)re[qe]=n.COLOR_ATTACHMENT0+qe;re.length=Ae.length,Ee=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,Ee=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function me(O){return u!==O?(n.useProgram(O),u=O,!0):!1}let ee={[Cs]:n.FUNC_ADD,[I0]:n.FUNC_SUBTRACT,[D0]:n.FUNC_REVERSE_SUBTRACT};if(i)ee[vd]=n.MIN,ee[yd]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(ee[vd]=O.MIN_EXT,ee[yd]=O.MAX_EXT)}let ge={[U0]:n.ZERO,[N0]:n.ONE,[z0]:n.SRC_COLOR,[lh]:n.SRC_ALPHA,[G0]:n.SRC_ALPHA_SATURATE,[H0]:n.DST_COLOR,[F0]:n.DST_ALPHA,[O0]:n.ONE_MINUS_SRC_COLOR,[ch]:n.ONE_MINUS_SRC_ALPHA,[k0]:n.ONE_MINUS_DST_COLOR,[B0]:n.ONE_MINUS_DST_ALPHA,[V0]:n.CONSTANT_COLOR,[W0]:n.ONE_MINUS_CONSTANT_COLOR,[X0]:n.CONSTANT_ALPHA,[q0]:n.ONE_MINUS_CONSTANT_ALPHA};function te(O,se,re,Ee,Ae,qe,at,_t,Ht,Ye){if(O===mi){d===!0&&(Se(n.BLEND),d=!1);return}if(d===!1&&(Te(n.BLEND),d=!0),O!==L0){if(O!==v||Ye!==N){if((_!==Cs||M!==Cs)&&(n.blendEquation(n.FUNC_ADD),_=Cs,M=Cs),Ye)switch(O){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gt:n.blendFunc(n.ONE,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _d:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,D=null,y=null,b=null,E.set(0,0,0),S=0,v=O,N=Ye}return}Ae=Ae||se,qe=qe||re,at=at||Ee,(se!==_||Ae!==M)&&(n.blendEquationSeparate(ee[se],ee[Ae]),_=se,M=Ae),(re!==w||Ee!==D||qe!==y||at!==b)&&(n.blendFuncSeparate(ge[re],ge[Ee],ge[qe],ge[at]),w=re,D=Ee,y=qe,b=at),(_t.equals(E)===!1||Ht!==S)&&(n.blendColor(_t.r,_t.g,_t.b,Ht),E.copy(_t),S=Ht),v=O,N=!1}function De(O,se){O.side===St?Se(n.CULL_FACE):Te(n.CULL_FACE);let re=O.side===on;se&&(re=!re),be(re),O.blending===es&&O.transparent===!1?te(mi):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);let Ee=O.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(O){V!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),V=O)}function R(O){O!==R0?(Te(n.CULL_FACE),O!==U&&(O===gd?n.cullFace(n.BACK):O===C0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),U=O}function T(O){O!==P&&(G&&n.lineWidth(O),P=O)}function q(O,se,re){O?(Te(n.POLYGON_OFFSET_FILL),(A!==se||z!==re)&&(n.polygonOffset(se,re),A=se,z=re)):Se(n.POLYGON_OFFSET_FILL)}function ue(O){O?Te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function ae(O){O===void 0&&(O=n.TEXTURE0+B-1),k!==O&&(n.activeTexture(O),k=O)}function oe(O,se,re){re===void 0&&(k===null?re=n.TEXTURE0+B-1:re=k);let Ee=Z[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},Z[re]=Ee),(Ee.type!==O||Ee.texture!==se)&&(k!==re&&(n.activeTexture(re),k=re),n.bindTexture(O,se||we[O]),Ee.type=O,Ee.texture=se)}function ze(){let O=Z[k];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ye(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(O){ie.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ie.copy(O))}function ht(O){fe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),fe.copy(O))}function ce(O,se){let re=f.get(se);re===void 0&&(re=new WeakMap,f.set(se,re));let Ee=re.get(O);Ee===void 0&&(Ee=n.getUniformBlockIndex(se,O.name),re.set(O,Ee))}function pe(O,se){let Ee=f.get(se).get(O);h.get(se)!==Ee&&(n.uniformBlockBinding(se,Ee,O.__bindingPointIndex),h.set(se,Ee))}function K(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},k=null,Z={},g={},x=new WeakMap,m=[],u=null,d=!1,v=null,_=null,w=null,D=null,M=null,y=null,b=null,E=new Ne(0,0,0),S=0,N=!1,V=null,U=null,P=null,A=null,z=null,ie.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:Se,bindFramebuffer:Oe,drawBuffers:F,useProgram:me,setBlending:te,setMaterial:De,setFlipSided:be,setCullFace:R,setLineWidth:T,setPolygonOffset:q,setScissorTest:ue,activeTexture:ae,bindTexture:oe,unbindTexture:ze,compressedTexImage2D:ye,compressedTexImage3D:Re,texImage2D:Be,texImage3D:Le,updateUBOMapping:ce,uniformBlockBinding:pe,texStorage2D:je,texStorage3D:ke,texSubImage2D:He,texSubImage3D:Xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ke,scissor:Ze,viewport:ht,reset:K}}function cM(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,T){return g?new OffscreenCanvas(R,T):Wa("canvas")}function m(R,T,q,ue){let ae=1;if((R.width>ue||R.height>ue)&&(ae=ue/Math.max(R.width,R.height)),ae<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let oe=T?mh:Math.floor,ze=oe(ae*R.width),ye=oe(ae*R.height);f===void 0&&(f=x(ze,ye));let Re=q?x(ze,ye):f;return Re.width=ze,Re.height=ye,Re.getContext("2d").drawImage(R,0,0,ze,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ze+"x"+ye+")."),Re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function u(R){return jd(R.width)&&jd(R.height)}function d(R){return a?!1:R.wrapS!==ii||R.wrapT!==ii||R.minFilter!==Tn&&R.minFilter!==Yn}function v(R,T){return R.generateMipmaps&&T&&R.minFilter!==Tn&&R.minFilter!==Yn}function _(R){n.generateMipmap(R)}function w(R,T,q,ue,ae=!1){if(a===!1)return T;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=T;if(T===n.RED&&(q===n.FLOAT&&(oe=n.R32F),q===n.HALF_FLOAT&&(oe=n.R16F),q===n.UNSIGNED_BYTE&&(oe=n.R8)),T===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.R8UI),q===n.UNSIGNED_SHORT&&(oe=n.R16UI),q===n.UNSIGNED_INT&&(oe=n.R32UI),q===n.BYTE&&(oe=n.R8I),q===n.SHORT&&(oe=n.R16I),q===n.INT&&(oe=n.R32I)),T===n.RG&&(q===n.FLOAT&&(oe=n.RG32F),q===n.HALF_FLOAT&&(oe=n.RG16F),q===n.UNSIGNED_BYTE&&(oe=n.RG8)),T===n.RGBA){let ze=ae?Ba:mt.getTransfer(ue);q===n.FLOAT&&(oe=n.RGBA32F),q===n.HALF_FLOAT&&(oe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(oe=ze===Mt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function D(R,T,q){return v(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==Yn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function M(R){return R===Tn||R===Md||R===wc?n.NEAREST:n.LINEAR}function y(R){let T=R.target;T.removeEventListener("dispose",y),E(T),T.isVideoTexture&&h.delete(T)}function b(R){let T=R.target;T.removeEventListener("dispose",b),N(T)}function E(R){let T=i.get(R);if(T.__webglInit===void 0)return;let q=R.source,ue=p.get(q);if(ue){let ae=ue[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(R),Object.keys(ue).length===0&&p.delete(q)}i.remove(R)}function S(R){let T=i.get(R);n.deleteTexture(T.__webglTexture);let q=R.source,ue=p.get(q);delete ue[T.__cacheKey],o.memory.textures--}function N(R){let T=R.texture,q=i.get(R),ue=i.get(T);if(ue.__webglTexture!==void 0&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(q.__webglFramebuffer[ae]))for(let oe=0;oe<q.__webglFramebuffer[ae].length;oe++)n.deleteFramebuffer(q.__webglFramebuffer[ae][oe]);else n.deleteFramebuffer(q.__webglFramebuffer[ae]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ae])}else{if(Array.isArray(q.__webglFramebuffer))for(let ae=0;ae<q.__webglFramebuffer.length;ae++)n.deleteFramebuffer(q.__webglFramebuffer[ae]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ae=0;ae<q.__webglColorRenderbuffer.length;ae++)q.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ae]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ae=0,oe=T.length;ae<oe;ae++){let ze=i.get(T[ae]);ze.__webglTexture&&(n.deleteTexture(ze.__webglTexture),o.memory.textures--),i.remove(T[ae])}i.remove(T),i.remove(R)}let V=0;function U(){V=0}function P(){let R=V;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),V+=1,R}function A(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function z(R,T){let q=i.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){let ue=R.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(q,R,T);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+T)}function B(R,T){let q=i.get(R);if(R.version>0&&q.__version!==R.version){ie(q,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+T)}function G(R,T){let q=i.get(R);if(R.version>0&&q.__version!==R.version){ie(q,R,T);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+T)}function W(R,T){let q=i.get(R);if(R.version>0&&q.__version!==R.version){fe(q,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+T)}let L={[zi]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[dh]:n.MIRRORED_REPEAT},k={[Tn]:n.NEAREST,[Md]:n.NEAREST_MIPMAP_NEAREST,[wc]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[ig]:n.LINEAR_MIPMAP_NEAREST,[So]:n.LINEAR_MIPMAP_LINEAR},Z={[mg]:n.NEVER,[Mg]:n.ALWAYS,[gg]:n.LESS,[lp]:n.LEQUAL,[xg]:n.EQUAL,[yg]:n.GEQUAL,[_g]:n.GREATER,[vg]:n.NOTEQUAL};function I(R,T,q){if(q?(n.texParameteri(R,n.TEXTURE_WRAP_S,L[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,L[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,L[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,k[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,k[T.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==ii||T.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,M(T.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==Tn&&T.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ue=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Tn||T.minFilter!==wc&&T.minFilter!==So||T.type===Qi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(R,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function X(R,T){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",y));let ue=T.source,ae=p.get(ue);ae===void 0&&(ae={},p.set(ue,ae));let oe=A(T);if(oe!==R.__cacheKey){ae[oe]===void 0&&(ae[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ae[oe].usedTimes++;let ze=ae[R.__cacheKey];ze!==void 0&&(ae[R.__cacheKey].usedTimes--,ze.usedTimes===0&&S(T)),R.__cacheKey=oe,R.__webglTexture=ae[oe].texture}return q}function ie(R,T,q){let ue=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=n.TEXTURE_3D);let ae=X(R,T),oe=T.source;t.bindTexture(ue,R.__webglTexture,n.TEXTURE0+q);let ze=i.get(oe);if(oe.version!==ze.__version||ae===!0){t.activeTexture(n.TEXTURE0+q);let ye=mt.getPrimaries(mt.workingColorSpace),Re=T.colorSpace===Zn?null:mt.getPrimaries(T.colorSpace),He=T.colorSpace===Zn||ye===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Xe=d(T)&&u(T.image)===!1,de=m(T.image,Xe,!1,s.maxTextureSize);de=be(T,de);let Ke=u(de)||a,je=r.convert(T.format,T.colorSpace),ke=r.convert(T.type),Be=w(T.internalFormat,je,ke,T.colorSpace,T.isVideoTexture);I(ue,T,Ke);let Le,Ze=T.mipmaps,ht=a&&T.isVideoTexture!==!0&&Be!==rp,ce=ze.__version===void 0||ae===!0,pe=D(T,de,Ke);if(T.isDepthTexture)Be=n.DEPTH_COMPONENT,a?T.type===Qi?Be=n.DEPTH_COMPONENT32F:T.type===ji?Be=n.DEPTH_COMPONENT24:T.type===Is?Be=n.DEPTH24_STENCIL8:Be=n.DEPTH_COMPONENT16:T.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ds&&Be===n.DEPTH_COMPONENT&&T.type!==ou&&T.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ji,ke=r.convert(T.type)),T.format===Cr&&Be===n.DEPTH_COMPONENT&&(Be=n.DEPTH_STENCIL,T.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Is,ke=r.convert(T.type))),ce&&(ht?t.texStorage2D(n.TEXTURE_2D,1,Be,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Be,de.width,de.height,0,je,ke,null));else if(T.isDataTexture)if(Ze.length>0&&Ke){ht&&ce&&t.texStorage2D(n.TEXTURE_2D,pe,Be,Ze[0].width,Ze[0].height);for(let K=0,O=Ze.length;K<O;K++)Le=Ze[K],ht?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Le.width,Le.height,je,ke,Le.data):t.texImage2D(n.TEXTURE_2D,K,Be,Le.width,Le.height,0,je,ke,Le.data);T.generateMipmaps=!1}else ht?(ce&&t.texStorage2D(n.TEXTURE_2D,pe,Be,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,je,ke,de.data)):t.texImage2D(n.TEXTURE_2D,0,Be,de.width,de.height,0,je,ke,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Be,Ze[0].width,Ze[0].height,de.depth);for(let K=0,O=Ze.length;K<O;K++)Le=Ze[K],T.format!==si?je!==null?ht?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Le.width,Le.height,de.depth,je,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Be,Le.width,Le.height,de.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Le.width,Le.height,de.depth,je,ke,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Be,Le.width,Le.height,de.depth,0,je,ke,Le.data)}else{ht&&ce&&t.texStorage2D(n.TEXTURE_2D,pe,Be,Ze[0].width,Ze[0].height);for(let K=0,O=Ze.length;K<O;K++)Le=Ze[K],T.format!==si?je!==null?ht?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Le.width,Le.height,je,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Le.width,Le.height,je,ke,Le.data):t.texImage2D(n.TEXTURE_2D,K,Be,Le.width,Le.height,0,je,ke,Le.data)}else if(T.isDataArrayTexture)ht?(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Be,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,je,ke,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,de.width,de.height,de.depth,0,je,ke,de.data);else if(T.isData3DTexture)ht?(ce&&t.texStorage3D(n.TEXTURE_3D,pe,Be,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,je,ke,de.data)):t.texImage3D(n.TEXTURE_3D,0,Be,de.width,de.height,de.depth,0,je,ke,de.data);else if(T.isFramebufferTexture){if(ce)if(ht)t.texStorage2D(n.TEXTURE_2D,pe,Be,de.width,de.height);else{let K=de.width,O=de.height;for(let se=0;se<pe;se++)t.texImage2D(n.TEXTURE_2D,se,Be,K,O,0,je,ke,null),K>>=1,O>>=1}}else if(Ze.length>0&&Ke){ht&&ce&&t.texStorage2D(n.TEXTURE_2D,pe,Be,Ze[0].width,Ze[0].height);for(let K=0,O=Ze.length;K<O;K++)Le=Ze[K],ht?t.texSubImage2D(n.TEXTURE_2D,K,0,0,je,ke,Le):t.texImage2D(n.TEXTURE_2D,K,Be,je,ke,Le);T.generateMipmaps=!1}else ht?(ce&&t.texStorage2D(n.TEXTURE_2D,pe,Be,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,je,ke,de)):t.texImage2D(n.TEXTURE_2D,0,Be,je,ke,de);v(T,Ke)&&_(ue),ze.__version=oe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function fe(R,T,q){if(T.image.length!==6)return;let ue=X(R,T),ae=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);let oe=i.get(ae);if(ae.version!==oe.__version||ue===!0){t.activeTexture(n.TEXTURE0+q);let ze=mt.getPrimaries(mt.workingColorSpace),ye=T.colorSpace===Zn?null:mt.getPrimaries(T.colorSpace),Re=T.colorSpace===Zn||ze===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let He=T.isCompressedTexture||T.image[0].isCompressedTexture,Xe=T.image[0]&&T.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!He&&!Xe?de[K]=m(T.image[K],!1,!0,s.maxCubemapSize):de[K]=Xe?T.image[K].image:T.image[K],de[K]=be(T,de[K]);let Ke=de[0],je=u(Ke)||a,ke=r.convert(T.format,T.colorSpace),Be=r.convert(T.type),Le=w(T.internalFormat,ke,Be,T.colorSpace),Ze=a&&T.isVideoTexture!==!0,ht=oe.__version===void 0||ue===!0,ce=D(T,Ke,je);I(n.TEXTURE_CUBE_MAP,T,je);let pe;if(He){Ze&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Le,Ke.width,Ke.height);for(let K=0;K<6;K++){pe=de[K].mipmaps;for(let O=0;O<pe.length;O++){let se=pe[O];T.format!==si?ke!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,O,0,0,se.width,se.height,ke,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,O,Le,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,O,0,0,se.width,se.height,ke,Be,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,O,Le,se.width,se.height,0,ke,Be,se.data)}}}else{pe=T.mipmaps,Ze&&ht&&(pe.length>0&&ce++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Le,de[0].width,de[0].height));for(let K=0;K<6;K++)if(Xe){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,ke,Be,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,de[K].width,de[K].height,0,ke,Be,de[K].data);for(let O=0;O<pe.length;O++){let re=pe[O].image[K].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,O+1,0,0,re.width,re.height,ke,Be,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,O+1,Le,re.width,re.height,0,ke,Be,re.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ke,Be,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,ke,Be,de[K]);for(let O=0;O<pe.length;O++){let se=pe[O];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,O+1,0,0,ke,Be,se.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,O+1,Le,ke,Be,se.image[K])}}}v(T,je)&&_(n.TEXTURE_CUBE_MAP),oe.__version=ae.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function xe(R,T,q,ue,ae,oe){let ze=r.convert(q.format,q.colorSpace),ye=r.convert(q.type),Re=w(q.internalFormat,ze,ye,q.colorSpace);if(!i.get(T).__hasExternalTextures){let Xe=Math.max(1,T.width>>oe),de=Math.max(1,T.height>>oe);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,oe,Re,Xe,de,T.depth,0,ze,ye,null):t.texImage2D(ae,oe,Re,Xe,de,0,ze,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),te(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ae,i.get(q).__webglTexture,0,ge(T)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,ae,i.get(q).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(R,T,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ue=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||te(T)){let ae=T.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Qi?ue=n.DEPTH_COMPONENT32F:ae.type===ji&&(ue=n.DEPTH_COMPONENT24));let oe=ge(T);te(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,ue,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ue,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ue,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){let ue=ge(T);q&&te(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,T.width,T.height):te(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let ue=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0;ae<ue.length;ae++){let oe=ue[ae],ze=r.convert(oe.format,oe.colorSpace),ye=r.convert(oe.type),Re=w(oe.internalFormat,ze,ye,oe.colorSpace),He=ge(T);q&&te(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Re,T.width,T.height):te(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,Re,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Re,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);let ue=i.get(T.depthTexture).__webglTexture,ae=ge(T);if(T.depthTexture.format===Ds)te(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Cr)te(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Se(R){let T=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,R)}else if(q){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]=n.createRenderbuffer(),we(T.__webglDepthbuffer[ue],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),we(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(R,T,q){let ue=i.get(R);T!==void 0&&xe(ue.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Se(R)}function F(R){let T=R.texture,q=i.get(R),ue=i.get(T);R.addEventListener("dispose",b),R.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=T.version,o.memory.textures++);let ae=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,ze=u(R)||a;if(ae){q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[ye]=[];for(let Re=0;Re<T.mipmaps.length;Re++)q.__webglFramebuffer[ye][Re]=n.createFramebuffer()}else q.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)q.__webglFramebuffer[ye]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(oe)if(s.drawBuffers){let ye=R.texture;for(let Re=0,He=ye.length;Re<He;Re++){let Xe=i.get(ye[Re]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&te(R)===!1){let ye=oe?T:[T];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){let He=ye[Re];q.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Re]);let Xe=r.convert(He.format,He.colorSpace),de=r.convert(He.type),Ke=w(He.internalFormat,Xe,de,He.colorSpace,R.isXRRenderTarget===!0),je=ge(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ke,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,q.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),we(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),I(n.TEXTURE_CUBE_MAP,T,ze);for(let ye=0;ye<6;ye++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)xe(q.__webglFramebuffer[ye][Re],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Re);else xe(q.__webglFramebuffer[ye],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);v(T,ze)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let ye=R.texture;for(let Re=0,He=ye.length;Re<He;Re++){let Xe=ye[Re],de=i.get(Xe);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),I(n.TEXTURE_2D,Xe,ze),xe(q.__webglFramebuffer,R,Xe,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),v(Xe,ze)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ye=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,ue.__webglTexture),I(ye,T,ze),a&&T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)xe(q.__webglFramebuffer[Re],R,T,n.COLOR_ATTACHMENT0,ye,Re);else xe(q.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,ye,0);v(T,ze)&&_(ye),t.unbindTexture()}R.depthBuffer&&Se(R)}function me(R){let T=u(R)||a,q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ue=0,ae=q.length;ue<ae;ue++){let oe=q[ue];if(v(oe,T)){let ze=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(oe).__webglTexture;t.bindTexture(ze,ye),_(ze),t.unbindTexture()}}}function ee(R){if(a&&R.samples>0&&te(R)===!1){let T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],q=R.width,ue=R.height,ae=n.COLOR_BUFFER_BIT,oe=[],ze=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(R),Re=R.isWebGLMultipleRenderTargets===!0;if(Re)for(let He=0;He<T.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let He=0;He<T.length;He++){oe.push(n.COLOR_ATTACHMENT0+He),R.depthBuffer&&oe.push(ze);let Xe=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Xe===!1&&(R.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[He]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ze]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ze])),Re){let de=i.get(T[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,q,ue,0,0,q,ue,ae,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let He=0;He<T.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,ye.__webglColorRenderbuffer[He]);let Xe=i.get(T[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function ge(R){return Math.min(s.maxSamples,R.samples)}function te(R){let T=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function De(R){let T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function be(R,T){let q=R.colorSpace,ue=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ph||q!==Oi&&q!==Zn&&(mt.getTransfer(q)===Mt?a===!1?e.has("EXT_sRGB")===!0&&ue===si?(R.format=ph,R.minFilter=Yn,R.generateMipmaps=!1):T=Xa.sRGBToLinear(T):(ue!==si||ae!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Oe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=te}function hM(n,e,t){let i=t.isWebGL2;function s(r,o=Zn){let a,l=mt.getTransfer(o);if(r===ns)return n.UNSIGNED_BYTE;if(r===ep)return n.UNSIGNED_SHORT_4_4_4_4;if(r===tp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===sg)return n.BYTE;if(r===rg)return n.SHORT;if(r===ou)return n.UNSIGNED_SHORT;if(r===Qf)return n.INT;if(r===ji)return n.UNSIGNED_INT;if(r===Qi)return n.FLOAT;if(r===ri)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===og)return n.ALPHA;if(r===si)return n.RGBA;if(r===ag)return n.LUMINANCE;if(r===lg)return n.LUMINANCE_ALPHA;if(r===Ds)return n.DEPTH_COMPONENT;if(r===Cr)return n.DEPTH_STENCIL;if(r===ph)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===cg)return n.RED;if(r===np)return n.RED_INTEGER;if(r===hg)return n.RG;if(r===ip)return n.RG_INTEGER;if(r===sp)return n.RGBA_INTEGER;if(r===Tc||r===Ac||r===Rc||r===Cc)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ed||r===Sd||r===bd||r===wd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ed)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Td||r===Ad)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Td)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ad)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rd||r===Cd||r===Pd||r===Ld||r===Id||r===Dd||r===Ud||r===Nd||r===zd||r===Od||r===Fd||r===Bd||r===Hd||r===kd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Rd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ld)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Id)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ud)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Od)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kd)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pc||r===Gd||r===Vd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Pc)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ug||r===Wd||r===Xd||r===qd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Pc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Wd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Is?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function dM(n,e){function t(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function i(u,d){d.color.getRGB(u.fogColor.value,up(n)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function s(u,d,v,_,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(u,d):d.isMeshToonMaterial?(r(u,d),f(u,d)):d.isMeshPhongMaterial?(r(u,d),h(u,d)):d.isMeshStandardMaterial?(r(u,d),p(u,d),d.isMeshPhysicalMaterial&&g(u,d,w)):d.isMeshMatcapMaterial?(r(u,d),x(u,d)):d.isMeshDepthMaterial?r(u,d):d.isMeshDistanceMaterial?(r(u,d),m(u,d)):d.isMeshNormalMaterial?r(u,d):d.isLineBasicMaterial?(o(u,d),d.isLineDashedMaterial&&a(u,d)):d.isPointsMaterial?l(u,d,v,_):d.isSpriteMaterial?c(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,t(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===on&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,t(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===on&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,t(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,t(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);let v=e.get(d).envMap;if(v&&(u.envMap.value=v,u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap){u.lightMap.value=d.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,u.lightMapTransform)}d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,u.aoMapTransform))}function o(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform))}function a(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function l(u,d,v,_){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*v,u.scale.value=_*.5,d.map&&(u.map.value=d.map,t(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function c(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function h(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function f(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function p(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,u.roughnessMapTransform)),e.get(d).envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function g(u,d,v){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&u.clearcoatNormalScale.value.negate())),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=v.texture,u.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,u.specularIntensityMapTransform))}function x(u,d){d.matcap&&(u.matcap.value=d.matcap)}function m(u,d){let v=e.get(d).light;u.referencePosition.value.setFromMatrixPosition(v.matrixWorld),u.nearDistance.value=v.shadow.camera.near,u.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let w=_.program;i.uniformBlockBinding(v,w)}function c(v,_){let w=s[v.id];w===void 0&&(x(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",u));let D=_.program;i.updateUBOMapping(v,D);let M=e.render.frame;r[v.id]!==M&&(p(v),r[v.id]=M)}function h(v){let _=f();v.__bindingPointIndex=_;let w=n.createBuffer(),D=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,D,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,w),w}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let _=s[v.id],w=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let M=0,y=w.length;M<y;M++){let b=Array.isArray(w[M])?w[M]:[w[M]];for(let E=0,S=b.length;E<S;E++){let N=b[E];if(g(N,M,E,D)===!0){let V=N.__offset,U=Array.isArray(N.value)?N.value:[N.value],P=0;for(let A=0;A<U.length;A++){let z=U[A],B=m(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,V+P,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(v,_,w,D){let M=v.value,y=_+"_"+w;if(D[y]===void 0)return typeof M=="number"||typeof M=="boolean"?D[y]=M:D[y]=M.clone(),!0;{let b=D[y];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return D[y]=M,!0}else if(b.equals(M)===!1)return b.copy(M),!0}return!1}function x(v){let _=v.uniforms,w=0,D=16;for(let y=0,b=_.length;y<b;y++){let E=Array.isArray(_[y])?_[y]:[_[y]];for(let S=0,N=E.length;S<N;S++){let V=E[S],U=Array.isArray(V.value)?V.value:[V.value];for(let P=0,A=U.length;P<A;P++){let z=U[P],B=m(z),G=w%D;G!==0&&D-G<B.boundary&&(w+=D-G),V.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=B.storage}}}let M=w%D;return M>0&&(w+=D-M),v.__size=w,v.__cache={},this}function m(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function u(v){let _=v.target;_.removeEventListener("dispose",u);let w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}function Ra(n,e,t,i,s,r){yr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(fo.x=r*yr.x-s*yr.y,fo.y=s*yr.x+r*yr.y):fo.copy(yr),n.copy(e),n.x+=fo.x,n.y+=fo.y,n.applyMatrix4(_p)}function Gf(n,e,t,i,s,r,o){let a=Ih.distanceSqToPoint(n);if(a<t){let l=new H;Ih.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function cu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,g*=h,s(o,a,p,g)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Vf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function mM(n,e){let t=1-n;return t*t*e}function gM(n,e){return 2*(1-n)*n*e}function xM(n,e){return n*n*e}function yo(n,e,t,i){return mM(n,e)+gM(n,t)+xM(n,i)}function _M(n,e){let t=1-n;return t*t*t*e}function vM(n,e){let t=1-n;return 3*t*t*n*e}function yM(n,e){return 3*(1-n)*n*n*e}function MM(n,e){return n*n*n*e}function Mo(n,e,t,i,s){return _M(n,e)+vM(n,t)+yM(n,i)+MM(n,s)}function vp(n,e,t,i,s){let r,o;if(s===FM(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Wf(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Wf(r,n[r],n[r+1],o);return o&&Sl(o,o.next)&&(Lo(o),o=o.next),o}function Os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Sl(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Lo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Co(n,e,t,i,s,r,o){if(!n)return;!o&&r&&IM(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?bM(n,i,s,r):SM(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Lo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wM(Os(n),e,t),Co(n,e,t,i,s,r,2)):o===2&&TM(n,e,t,i,s,r):Co(Os(n),e,t,i,s,r,1);break}}}function SM(n){let e=n.prev,t=n,i=n.next;if(Nt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,g=a>l?a>c?a:c:l>c?l:c,x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=f&&x.y<=g&&br(s,a,r,l,o,c,x.x,x.y)&&Nt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function bM(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,p=o.y,g=a<l?a<c?a:c:l<c?l:c,x=h<f?h<p?h:p:f<p?f:p,m=a>l?a>c?a:c:l>c?l:c,u=h>f?h>p?h:p:f>p?f:p,d=kh(g,x,e,t,i),v=kh(m,u,e,t,i),_=n.prevZ,w=n.nextZ;for(;_&&_.z>=d&&w&&w.z<=v;){if(_.x>=g&&_.x<=m&&_.y>=x&&_.y<=u&&_!==s&&_!==o&&br(a,h,l,f,c,p,_.x,_.y)&&Nt(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=g&&w.x<=m&&w.y>=x&&w.y<=u&&w!==s&&w!==o&&br(a,h,l,f,c,p,w.x,w.y)&&Nt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=d;){if(_.x>=g&&_.x<=m&&_.y>=x&&_.y<=u&&_!==s&&_!==o&&br(a,h,l,f,c,p,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=v;){if(w.x>=g&&w.x<=m&&w.y>=x&&w.y<=u&&w!==s&&w!==o&&br(a,h,l,f,c,p,w.x,w.y)&&Nt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function wM(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Sl(s,r)&&yp(s,i,i.next,r)&&Po(s,r)&&Po(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Lo(i),Lo(i.next),i=n=r),i=i.next}while(i!==n);return Os(i)}function TM(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&NM(o,a)){let l=Mp(o,a);o=Os(o,o.next),l=Os(l,l.next),Co(o,e,t,i,s,r,0),Co(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function AM(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=vp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(UM(c));for(s.sort(RM),r=0;r<s.length;r++)t=CM(s[r],t);return t}function RM(n,e){return n.x-e.x}function CM(n,e){let t=PM(n,e);if(!t)return e;let i=Mp(t,n);return Os(i,i.next),Os(t,t.next)}function PM(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&br(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Po(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&LM(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function LM(n,e){return Nt(n.prev,n,e.prev)<0&&Nt(e.next,n,n.next)<0}function IM(n,e,t,i){let s=n;do s.z===0&&(s.z=kh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,DM(s)}function DM(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function kh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function UM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function br(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function NM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!zM(n,e)&&(Po(n,e)&&Po(e,n)&&OM(n,e)&&(Nt(n.prev,n,e.prev)||Nt(n,e.prev,e))||Sl(n,e)&&Nt(n.prev,n,n.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Sl(n,e){return n.x===e.x&&n.y===e.y}function yp(n,e,t,i){let s=Ua(Nt(n,e,t)),r=Ua(Nt(n,e,i)),o=Ua(Nt(t,i,n)),a=Ua(Nt(t,i,e));return!!(s!==r&&o!==a||s===0&&Da(n,t,e)||r===0&&Da(n,i,e)||o===0&&Da(t,n,i)||a===0&&Da(t,e,i))}function Da(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ua(n){return n>0?1:n<0?-1:0}function zM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&yp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Po(n,e){return Nt(n.prev,n,n.next)<0?Nt(n,e,n.next)>=0&&Nt(n,n.prev,e)>=0:Nt(n,e,n.prev)<0||Nt(n,n.next,e)<0}function OM(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Mp(n,e){let t=new Gh(n.i,n.x,n.y),i=new Gh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wf(n,e,t,i){let s=new Gh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FM(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function Xf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function HM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Na(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function kM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Jf(){return(typeof performance>"u"?Date:performance).now()}var R0,gd,C0,vl,P0,Li,is,on,St,mi,es,Gt,xd,_d,L0,Cs,I0,D0,vd,yd,U0,N0,z0,O0,lh,ch,F0,B0,H0,k0,G0,V0,W0,X0,q0,Y0,Z0,$0,za,J0,K0,j0,Q0,Kf,eg,tg,ts,nu,iu,su,Uo,ng,ru,jf,Ar,Rr,hh,uh,yl,zi,ii,dh,Tn,Md,wc,Yn,ig,So,ns,sg,rg,ou,Qf,ji,Qi,ri,ep,tp,Is,og,si,ag,lg,Ds,Cr,cg,np,hg,ip,sp,Tc,Ac,Rc,Cc,Ed,Sd,bd,wd,rp,Td,Ad,Rd,Cd,Pd,Ld,Id,Dd,Ud,Nd,zd,Od,Fd,Bd,Hd,kd,Pc,Gd,Vd,ug,Wd,Xd,qd,Oa,Fa,Lc,Yd,Zd,$d,op,Us,dg,fg,ap,pg,Zn,gt,Oi,au,Ml,Ba,Mt,Ha,ka,tr,Jd,mg,gg,xg,lp,_g,vg,yg,Mg,fh,Kd,ph,Ui,Ga,ss,gn,Ic,Va,le,it,Uc,Qd,ef,tf,sa,bg,mt,nr,Xa,wg,qa,Tg,$n,Pt,gh,An,Ya,xh,In,H,Oc,nf,Fi,Ti,ei,ra,ir,sr,rr,Yi,Zi,bs,ao,oa,aa,ws,Ag,lo,Bc,rs,Ai,Hc,la,$i,kc,ca,Gc,Za,ut,or,ti,Rg,Cg,Ji,ha,Bn,sf,rf,$a,Ja,Pg,of,ar,Ri,ua,co,Lg,Ig,af,lf,cf,Dg,Ug,Yt,ni,Ci,Vc,Pi,lr,cr,hf,Wc,Xc,qc,da,Ls,hp,Ki,fa,Ne,xn,Ng,Bi,lt,Jt,pa,_n,Ka,ja,dt,zg,qn,Zc,hr,Hn,ho,sn,Kt,uf,Ts,ma,df,ur,dr,fr,$c,ga,xa,_a,va,ff,pf,mf,ya,Ma,ne,Pe,as,Bg,Hg,jt,Qa,cn,pr,mr,_h,el,vh,Jc,kg,Gg,Ii,As,Sa,bo,st,Wg,Xg,qg,Yg,Zg,$g,Jg,Kg,jg,Qg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,_x,vx,yx,Mx,Ex,Sx,bx,wx,Tx,Ax,Rx,Cx,Px,Lx,Ix,Dx,Ux,Nx,zx,Ox,Fx,Bx,Hx,kx,Gx,Vx,Wx,Xx,qx,Yx,Zx,$x,Jx,Kx,jx,Qx,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,x_,__,v_,y_,M_,E_,S_,b_,w_,T_,A_,R_,C_,P_,L_,I_,D_,U_,N_,z_,O_,F_,B_,H_,k_,G_,V_,W_,X_,q_,Y_,Z_,$_,J_,K_,j_,Q_,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,dv,fv,pv,mv,gv,xv,_v,vv,yv,Mv,Ev,Qe,Me,pi,ba,Lr,Er,gf,Ps,Kc,xf,jc,Qc,eh,Rs,gr,_f,Ir,tl,fp,pp,mp,gp,xp,Ef,Sf,bf,wf,Tf,yh,Mh,Eh,th,Tr,Ay,Ry,Oy,Fy,Hy,Zy,bh,wh,tM,Th,Ah,rM,oM,Rh,rt,uM,vo,Ch,wo,Ph,nl,Dr,Lh,bn,il,Ns,xr,uo,_r,vr,yr,fo,_p,Ta,po,Aa,Of,nh,Ff,Ur,sl,Mr,Bf,Ca,Hf,pM,mo,go,Lt,To,kf,Ih,Pa,La,rl,hn,Jn,Ao,Dh,Ia,ih,sh,rh,Uh,ol,Nh,al,zh,ll,Oh,cl,Fh,Bh,zs,Hh,hl,Nr,vt,zr,Ro,EM,Eo,ul,BM,oi,Vt,dl,fl,_e,os,Or,Vh,Wh,Xh,ai,Fs,qh,Yh,Zh,Io,Bs,$h,Jh,GM,Kh,Fr,pl,oh,Yf,Zf,Do,jh,ml,$f,xo,ah,Qh,gl,eu,xl,_l,hu,VM,uu,WM,XM,qM,YM,ZM,$M,JM,tu,Ct,pb,It=Fn(()=>{R0=0,gd=1,C0=2,vl=1,P0=2,Li=3,is=0,on=1,St=2,mi=0,es=1,Gt=2,xd=3,_d=4,L0=5,Cs=100,I0=101,D0=102,vd=103,yd=104,U0=200,N0=201,z0=202,O0=203,lh=204,ch=205,F0=206,B0=207,H0=208,k0=209,G0=210,V0=211,W0=212,X0=213,q0=214,Y0=0,Z0=1,$0=2,za=3,J0=4,K0=5,j0=6,Q0=7,Kf=0,eg=1,tg=2,ts=0,nu=1,iu=2,su=3,Uo=4,ng=5,ru=6,jf=300,Ar=301,Rr=302,hh=303,uh=304,yl=306,zi=1e3,ii=1001,dh=1002,Tn=1003,Md=1004,wc=1005,Yn=1006,ig=1007,So=1008,ns=1009,sg=1010,rg=1011,ou=1012,Qf=1013,ji=1014,Qi=1015,ri=1016,ep=1017,tp=1018,Is=1020,og=1021,si=1023,ag=1024,lg=1025,Ds=1026,Cr=1027,cg=1028,np=1029,hg=1030,ip=1031,sp=1033,Tc=33776,Ac=33777,Rc=33778,Cc=33779,Ed=35840,Sd=35841,bd=35842,wd=35843,rp=36196,Td=37492,Ad=37496,Rd=37808,Cd=37809,Pd=37810,Ld=37811,Id=37812,Dd=37813,Ud=37814,Nd=37815,zd=37816,Od=37817,Fd=37818,Bd=37819,Hd=37820,kd=37821,Pc=36492,Gd=36494,Vd=36495,ug=36283,Wd=36284,Xd=36285,qd=36286,Oa=2300,Fa=2301,Lc=2302,Yd=2400,Zd=2401,$d=2402,op=3e3,Us=3001,dg=3200,fg=3201,ap=0,pg=1,Zn="",gt="srgb",Oi="srgb-linear",au="display-p3",Ml="display-p3-linear",Ba="linear",Mt="srgb",Ha="rec709",ka="p3",tr=7680,Jd=519,mg=512,gg=513,xg=514,lp=515,_g=516,vg=517,yg=518,Mg=519,fh=35044,Kd="300 es",ph=1035,Ui=2e3,Ga=2001,ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ic=Math.PI/180,Va=180/Math.PI;le=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],g=i[5],x=i[8],m=s[0],u=s[3],d=s[6],v=s[1],_=s[4],w=s[7],D=s[2],M=s[5],y=s[8];return r[0]=o*m+a*v+l*D,r[3]=o*u+a*_+l*M,r[6]=o*d+a*w+l*y,r[1]=c*m+h*v+f*D,r[4]=c*u+h*_+f*M,r[7]=c*d+h*w+f*y,r[2]=p*m+g*v+x*D,r[5]=p*u+g*_+x*M,r[8]=p*d+g*w+x*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,p=a*l-h*r,g=c*r-o*l,x=t*f+i*p+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/x;return e[0]=f*m,e[1]=(s*c-h*i)*m,e[2]=(a*i-s*o)*m,e[3]=p*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=g*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uc=new it;Qd={};ef=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tf=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[Oi]:{transfer:Ba,primaries:Ha,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:Mt,primaries:Ha,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ml]:{transfer:Ba,primaries:ka,toReference:n=>n.applyMatrix3(tf),fromReference:n=>n.applyMatrix3(ef)},[au]:{transfer:Mt,primaries:ka,toReference:n=>n.convertSRGBToLinear().applyMatrix3(tf),fromReference:n=>n.applyMatrix3(ef).convertLinearToSRGB()}},bg=new Set([Oi,Ml]),mt={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=sa[e].toReference,s=sa[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return sa[n].primaries},getTransfer:function(n){return n===Zn?Ba:sa[n].transfer}};Xa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=Wa("canvas")),nr.width=e.width,nr.height=e.height;let i=nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wg=0,qa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zc(s[o].image)):r.push(zc(s[o]))}else r=zc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Tg=0,$n=class n extends ss{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ii,s=ii,r=Yn,o=So,a=si,l=ns,c=n.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Ni(),this.name="",this.source=new qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Us?gt:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Us:op}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Us?gt:Zn}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=jf;$n.DEFAULT_ANISOTROPY=1;Pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],g=l[5],x=l[9],m=l[2],u=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-m)<.01&&Math.abs(x-u)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+m)<.1&&Math.abs(x+u)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,w=(g+1)/2,D=(d+1)/2,M=(h+p)/4,y=(f+m)/4,b=(x+u)/4;return _>w&&_>D?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=M/i,r=y/i):w>D?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=M/s,r=b/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=y/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((u-x)*(u-x)+(f-m)*(f-m)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(u-x)/v,this.y=(f-m)/v,this.z=(p-h)/v,this.w=Math.acos((c+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gh=class extends ss{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Us?gt:Zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends gh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ya=class extends $n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xh=class extends $n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},In=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],p=r[o+0],g=r[o+1],x=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=x,e[t+3]=m;return}if(f!==m||l!==p||c!==g||h!==x){let u=1-a,d=l*p+c*g+h*x+f*m,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let D=Math.sqrt(_),M=Math.atan2(D,d*v);u=Math.sin(u*M)/D,a=Math.sin(a*M)/D}let w=a*v;if(l=l*u+p*w,c=c*u+g*w,h=h*u+x*w,f=f*u+m*w,u===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],p=r[o+1],g=r[o+2],x=r[o+3];return e[t]=a*x+h*f+l*g-c*p,e[t+1]=l*x+h*p+c*f-a*g,e[t+2]=c*x+h*g+a*p-l*f,e[t+3]=h*x-a*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),p=l(i/2),g=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f-p*g*x;break;case"YXZ":this._x=p*h*f+c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f+p*g*x;break;case"ZXY":this._x=p*h*f-c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f-p*g*x;break;case"ZYX":this._x=p*h*f-c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f+p*g*x;break;case"YZX":this._x=p*h*f+c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f-p*g*x;break;case"XZY":this._x=p*h*f-c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=i+a+f;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>f){let g=2*Math.sqrt(1+i-a-f);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-i-f);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+f-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new H,nf=new In,Fi=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),oa.subVectors(this.max,ao),ir.subVectors(e.a,ao),sr.subVectors(e.b,ao),rr.subVectors(e.c,ao),Yi.subVectors(sr,ir),Zi.subVectors(rr,sr),bs.subVectors(ir,rr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-bs.z,bs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,bs.z,0,-bs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-bs.y,bs.x,0];return!Fc(t,ir,sr,rr,oa)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,ir,sr,rr,oa))?!1:(aa.crossVectors(Yi,Zi),t=[aa.x,aa.y,aa.z],Fc(t,ir,sr,rr,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ti=[new H,new H,new H,new H,new H,new H,new H,new H],ei=new H,ra=new Fi,ir=new H,sr=new H,rr=new H,Yi=new H,Zi=new H,bs=new H,ao=new H,oa=new H,aa=new H,ws=new H;Ag=new Fi,lo=new H,Bc=new H,rs=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ag.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Bc)),this.expandByPoint(lo.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new H,Hc=new H,la=new H,$i=new H,kc=new H,ca=new H,Gc=new H,Za=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Hc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Hc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=$i.dot(this.direction),l=-$i.dot(la),c=$i.lengthSq(),h=Math.abs(1-o*o),f,p,g,x;if(h>0)if(f=o*l-a,p=o*a-l,x=r*h,f>=0)if(p>=-x)if(p<=x){let m=1/h;f*=m,p*=m,g=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Hc).addScaledVector(la,p),g}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){kc.subVectors(t,e),ca.subVectors(i,e),Gc.crossVectors(kc,ca);let o=this.direction.dot(Gc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);let l=a*this.direction.dot(ca.crossVectors($i,ca));if(l<0)return null;let c=a*this.direction.dot(kc.cross($i));if(c<0||l+c>o)return null;let h=-a*$i.dot(Gc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class n{constructor(e,t,i,s,r,o,a,l,c,h,f,p,g,x,m,u){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,p,g,x,m,u)}set(e,t,i,s,r,o,a,l,c,h,f,p,g,x,m,u){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=g,d[7]=x,d[11]=m,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,g=o*f,x=a*h,m=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=g+x*c,t[5]=p-m*c,t[9]=-a*l,t[2]=m-p*c,t[6]=x+g*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,g=l*f,x=c*h,m=c*f;t[0]=p+m*a,t[4]=x*a-g,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=g*a-x,t[6]=m+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,g=l*f,x=c*h,m=c*f;t[0]=p-m*a,t[4]=-o*f,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*h,t[9]=m-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,g=o*f,x=a*h,m=a*f;t[0]=l*h,t[4]=x*c-g,t[8]=p*c+m,t[1]=l*f,t[5]=m*c+p,t[9]=g*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,g=o*c,x=a*l,m=a*c;t[0]=l*h,t[4]=m-p*f,t[8]=x*f+g,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*f+x,t[10]=p-m*f}else if(e.order==="XZY"){let p=o*l,g=o*c,x=a*l,m=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+m,t[5]=o*h,t[9]=g*f-x,t[2]=x*f-g,t[6]=a*h,t[10]=m*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Cg)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ji.crossVectors(i,Bn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ji.crossVectors(i,Bn)),Ji.normalize(),ha.crossVectors(Bn,Ji),s[0]=Ji.x,s[4]=ha.x,s[8]=Bn.x,s[1]=Ji.y,s[5]=ha.y,s[9]=Bn.y,s[2]=Ji.z,s[6]=ha.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],g=i[13],x=i[2],m=i[6],u=i[10],d=i[14],v=i[3],_=i[7],w=i[11],D=i[15],M=s[0],y=s[4],b=s[8],E=s[12],S=s[1],N=s[5],V=s[9],U=s[13],P=s[2],A=s[6],z=s[10],B=s[14],G=s[3],W=s[7],L=s[11],k=s[15];return r[0]=o*M+a*S+l*P+c*G,r[4]=o*y+a*N+l*A+c*W,r[8]=o*b+a*V+l*z+c*L,r[12]=o*E+a*U+l*B+c*k,r[1]=h*M+f*S+p*P+g*G,r[5]=h*y+f*N+p*A+g*W,r[9]=h*b+f*V+p*z+g*L,r[13]=h*E+f*U+p*B+g*k,r[2]=x*M+m*S+u*P+d*G,r[6]=x*y+m*N+u*A+d*W,r[10]=x*b+m*V+u*z+d*L,r[14]=x*E+m*U+u*B+d*k,r[3]=v*M+_*S+w*P+D*G,r[7]=v*y+_*N+w*A+D*W,r[11]=v*b+_*V+w*z+D*L,r[15]=v*E+_*U+w*B+D*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],g=e[14],x=e[3],m=e[7],u=e[11],d=e[15];return x*(+r*l*f-s*c*f-r*a*p+i*c*p+s*a*g-i*l*g)+m*(+t*l*g-t*c*p+r*o*p-s*o*g+s*c*h-r*l*h)+u*(+t*c*f-t*a*g-r*o*f+i*o*g+r*a*h-i*c*h)+d*(-s*a*h-t*l*f+t*a*p+s*o*f-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],g=e[11],x=e[12],m=e[13],u=e[14],d=e[15],v=f*u*c-m*p*c+m*l*g-a*u*g-f*l*d+a*p*d,_=x*p*c-h*u*c-x*l*g+o*u*g+h*l*d-o*p*d,w=h*m*c-x*f*c+x*a*g-o*m*g-h*a*d+o*f*d,D=x*f*l-h*m*l-x*a*p+o*m*p+h*a*u-o*f*u,M=t*v+i*_+s*w+r*D;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/M;return e[0]=v*y,e[1]=(m*p*r-f*u*r-m*s*g+i*u*g+f*s*d-i*p*d)*y,e[2]=(a*u*r-m*l*r+m*s*c-i*u*c-a*s*d+i*l*d)*y,e[3]=(f*l*r-a*p*r-f*s*c+i*p*c+a*s*g-i*l*g)*y,e[4]=_*y,e[5]=(h*u*r-x*p*r+x*s*g-t*u*g-h*s*d+t*p*d)*y,e[6]=(x*l*r-o*u*r-x*s*c+t*u*c+o*s*d-t*l*d)*y,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*g+t*l*g)*y,e[8]=w*y,e[9]=(x*f*r-h*m*r-x*i*g+t*m*g+h*i*d-t*f*d)*y,e[10]=(o*m*r-x*a*r+x*i*c-t*m*c-o*i*d+t*a*d)*y,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*g-t*a*g)*y,e[12]=D*y,e[13]=(h*m*s-x*f*s+x*i*p-t*m*p-h*i*u+t*f*u)*y,e[14]=(x*a*s-o*m*s-x*i*l+t*m*l+o*i*u-t*a*u)*y,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*p+t*a*p)*y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,p=r*c,g=r*h,x=r*f,m=o*h,u=o*f,d=a*f,v=l*c,_=l*h,w=l*f,D=i.x,M=i.y,y=i.z;return s[0]=(1-(m+d))*D,s[1]=(g+w)*D,s[2]=(x-_)*D,s[3]=0,s[4]=(g-w)*M,s[5]=(1-(p+d))*M,s[6]=(u+v)*M,s[7]=0,s[8]=(x+_)*y,s[9]=(u-v)*y,s[10]=(1-(p+m))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),a=or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,h=1/o,f=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ui){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s),g,x;if(a===Ui)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ga)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ui){let l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),p=(t+e)*c,g=(i+s)*h,x,m;if(a===Ui)x=(o+r)*f,m=-2*f;else if(a===Ga)x=r*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=m,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},or=new H,ti=new ut,Rg=new H(0,0,0),Cg=new H(1,1,1),Ji=new H,ha=new H,Bn=new H,sf=new ut,rf=new In,$a=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rf.setFromEuler(this),this.setFromQuaternion(rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$a.DEFAULT_ORDER="XYZ";Ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pg=0,of=new H,ar=new In,Ri=new ut,ua=new H,co=new H,Lg=new H,Ig=new In,af=new H(1,0,0),lf=new H(0,1,0),cf=new H(0,0,1),Dg={type:"added"},Ug={type:"removed"},Yt=class n extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new $a,i=new In,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new it}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(lf,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(lf,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ua.copy(e):ua.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(co,ua,this.up):Ri.lookAt(ua,co,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Ri),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ug)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new H(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ni=new H,Ci=new H,Vc=new H,Pi=new H,lr=new H,cr=new H,hf=new H,Wc=new H,Xc=new H,qc=new H,da=!1,Ls=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ni.subVectors(s,t),Ci.subVectors(i,t),Vc.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Ci),l=ni.dot(Vc),c=Ci.dot(Ci),h=Ci.dot(Vc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,g=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-g-x,x,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,t,i,s,r,o,a,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static isFrontFacing(e,t,i,s){return ni.subVectors(i,t),Ci.subVectors(e,t),ni.cross(Ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;lr.subVectors(s,i),cr.subVectors(r,i),Wc.subVectors(e,i);let l=lr.dot(Wc),c=cr.dot(Wc);if(l<=0&&c<=0)return t.copy(i);Xc.subVectors(e,s);let h=lr.dot(Xc),f=cr.dot(Xc);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(lr,o);qc.subVectors(e,r);let g=lr.dot(qc),x=cr.dot(qc);if(x>=0&&g<=x)return t.copy(r);let m=g*c-l*x;if(m<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(cr,a);let u=h*x-g*f;if(u<=0&&f-h>=0&&g-x>=0)return hf.subVectors(r,s),a=(f-h)/(f-h+(g-x)),t.copy(s).addScaledVector(hf,a);let d=1/(u+m+p);return o=m*d,a=p*d,t.copy(i).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},fa={h:0,s:0,l:0};Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=Eg(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Yc(o,r,e+1/3),this.g=Yc(o,r,e),this.b=Yc(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=hp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Nc(e.r),this.g=Nc(e.g),this.b=Nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return mt.fromWorkingColorSpace(xn.copy(this),e),Math.round(rn(xn.r*255,0,255))*65536+Math.round(rn(xn.g*255,0,255))*256+Math.round(rn(xn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=gt){mt.fromWorkingColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(fa);let i=Dc(Ki.h,fa.h,t),s=Dc(Ki.s,fa.s,t),r=Dc(Ki.l,fa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Ne;Ne.NAMES=hp;Ng=0,Bi=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=es,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lh&&(i.blendSrc=this.blendSrc),this.blendDst!==ch&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},lt=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jt=new H,pa=new le,_n=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}},Ka=class extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ja=class extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}},dt=class extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}},zg=0,qn=new ut,Zc=new Yt,hr=new H,Hn=new Fi,ho=new Fi,sn=new H,Kt=class n extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cp(e)?ja:Ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Hn.min,ho.min),Hn.expandByPoint(sn),sn.addVectors(Hn.max,ho.max),Hn.expandByPoint(sn)):(Hn.expandByPoint(ho.min),Hn.expandByPoint(ho.max))}Hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(hr.fromBufferAttribute(e,c),sn.add(hr)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new H,h[S]=new H;let f=new H,p=new H,g=new H,x=new le,m=new le,u=new le,d=new H,v=new H;function _(S,N,V){f.fromArray(s,S*3),p.fromArray(s,N*3),g.fromArray(s,V*3),x.fromArray(o,S*2),m.fromArray(o,N*2),u.fromArray(o,V*2),p.sub(f),g.sub(f),m.sub(x),u.sub(x);let U=1/(m.x*u.y-u.x*m.y);isFinite(U)&&(d.copy(p).multiplyScalar(u.y).addScaledVector(g,-m.y).multiplyScalar(U),v.copy(g).multiplyScalar(m.x).addScaledVector(p,-u.x).multiplyScalar(U),c[S].add(d),c[N].add(d),c[V].add(d),h[S].add(v),h[N].add(v),h[V].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let S=0,N=w.length;S<N;++S){let V=w[S],U=V.start,P=V.count;for(let A=U,z=U+P;A<z;A+=3)_(i[A+0],i[A+1],i[A+2])}let D=new H,M=new H,y=new H,b=new H;function E(S){y.fromArray(r,S*3),b.copy(y);let N=c[S];D.copy(N),D.sub(y.multiplyScalar(y.dot(N))).normalize(),M.crossVectors(b,N);let U=M.dot(h[S])<0?-1:1;l[S*4]=D.x,l[S*4+1]=D.y,l[S*4+2]=D.z,l[S*4+3]=U}for(let S=0,N=w.length;S<N;++S){let V=w[S],U=V.start,P=V.count;for(let A=U,z=U+P;A<z;A+=3)E(i[A+0]),E(i[A+1]),E(i[A+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,f=new H;if(e)for(let p=0,g=e.count;p<g;p+=3){let x=e.getX(p+0),m=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,u),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,u),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),g=0,x=0;for(let m=0,u=l.length;m<u;m++){a.isInterleavedBufferAttribute?g=l[m]*a.data.stride+a.offset:g=l[m]*h;for(let d=0;d<h;d++)p[x++]=c[g++]}return new _n(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],g=e(p,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uf=new ut,Ts=new Za,ma=new rs,df=new H,ur=new H,dr=new H,fr=new H,$c=new H,ga=new H,xa=new le,_a=new le,va=new le,ff=new H,pf=new H,mf=new H,ya=new H,Ma=new H,ne=class extends Yt{constructor(e=new Kt,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&($c.fromBufferAttribute(f,e),o?ga.addScaledVector($c,h):ga.addScaledVector($c.sub(t),h))}t.add(ga)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(ma.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(ma,df)===null||Ts.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(uf.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(uf),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=p.length;x<m;x++){let u=p[x],d=o[u.materialIndex],v=Math.max(u.start,g.start),_=Math.min(a.count,Math.min(u.start+u.count,g.start+g.count));for(let w=v,D=_;w<D;w+=3){let M=a.getX(w),y=a.getX(w+1),b=a.getX(w+2);s=Ea(this,d,e,i,c,h,f,M,y,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let u=x,d=m;u<d;u+=3){let v=a.getX(u),_=a.getX(u+1),w=a.getX(u+2);s=Ea(this,o,e,i,c,h,f,v,_,w),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,m=p.length;x<m;x++){let u=p[x],d=o[u.materialIndex],v=Math.max(u.start,g.start),_=Math.min(l.count,Math.min(u.start+u.count,g.start+g.count));for(let w=v,D=_;w<D;w+=3){let M=w,y=w+1,b=w+2;s=Ea(this,d,e,i,c,h,f,M,y,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let u=x,d=m;u<d;u+=3){let v=u,_=u+1,w=u+2;s=Ea(this,o,e,i,c,h,f,v,_,w),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}};Pe=class n extends Kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,g=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function x(m,u,d,v,_,w,D,M,y,b,E){let S=w/y,N=D/b,V=w/2,U=D/2,P=M/2,A=y+1,z=b+1,B=0,G=0,W=new H;for(let L=0;L<z;L++){let k=L*N-U;for(let Z=0;Z<A;Z++){let I=Z*S-V;W[m]=I*v,W[u]=k*_,W[d]=P,c.push(W.x,W.y,W.z),W[m]=0,W[u]=0,W[d]=M>0?1:-1,h.push(W.x,W.y,W.z),f.push(Z/y),f.push(1-L/b),B+=1}}for(let L=0;L<b;L++)for(let k=0;k<y;k++){let Z=p+k+A*L,I=p+k+A*(L+1),X=p+(k+1)+A*(L+1),ie=p+(k+1)+A*L;l.push(Z,I,ie),l.push(I,X,ie),G+=6}a.addGroup(g,G,E),g+=G,p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};as={clone:Pr,merge:wn},Bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Qa=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=class extends Qa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ic*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pr=-90,mr=1,_h=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(pr,mr,e,t);s.layers=this.layers,this.add(s);let r=new cn(pr,mr,e,t);r.layers=this.layers,this.add(r);let o=new cn(pr,mr,e,t);o.layers=this.layers,this.add(o);let a=new cn(pr,mr,e,t);a.layers=this.layers,this.add(a);let l=new cn(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new cn(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,p,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},el=class extends $n{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vh=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Us?gt:Zn),this.texture=new el(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new jt({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:mi});r.uniforms.tEquirect.value=t;let o=new ne(s,r),a=t.minFilter;return t.minFilter===So&&(t.minFilter=Yn),new _h(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Jc=new H,kg=new H,Gg=new it,Ii=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Jc.subVectors(i,t).cross(kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Jc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gg.getNormalMatrix(e),s=this.coplanarPoint(Jc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},As=new rs,Sa=new H,bo=class{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],u=s[11],d=s[12],v=s[13],_=s[14],w=s[15];if(i[0].setComponents(l-r,p-c,u-g,w-d).normalize(),i[1].setComponents(l+r,p+c,u+g,w+d).normalize(),i[2].setComponents(l+o,p+h,u+x,w+v).normalize(),i[3].setComponents(l-o,p-h,u-x,w-v).normalize(),i[4].setComponents(l-a,p-f,u-m,w-_).normalize(),t===Ui)i[5].setComponents(l+a,p+f,u+m,w+_).normalize();else if(t===Ga)i[5].setComponents(a,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};st=class n extends Kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,p=t/l,g=[],x=[],m=[],u=[];for(let d=0;d<h;d++){let v=d*p-o;for(let _=0;_<c;_++){let w=_*f-r;x.push(w,-v,0),m.push(0,0,1),u.push(_/a),u.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){let _=v+c*d,w=v+c*(d+1),D=v+1+c*(d+1),M=v+1+c*d;g.push(_,w,M),g.push(w,D,M)}this.setIndex(g),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
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
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
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
#endif`,Kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jg=`#ifdef USE_BATCHING
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
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ix=`#ifdef USE_IRIDESCENCE
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
#endif`,sx=`#ifdef USE_BUMPMAP
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
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fx=`#define PI 3.141592653589793
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
} // validated`,px=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mx=`vec3 transformedNormal = objectNormal;
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
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`
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
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lx=`#ifdef USE_GRADIENTMAP
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
}`,Ix=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zx=`uniform bool receiveShadow;
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
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gx=`PhysicalMaterial material;
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
#endif`,Vx=`struct PhysicalMaterial {
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
}`,Wx=`
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
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e_=`#if defined( USE_POINTS_UV )
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
#endif`,t_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
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
#endif`,r_=`#ifdef USE_MORPHTARGETS
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
#endif`,o_=`#ifdef USE_MORPHTARGETS
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
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
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
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R_=`float getShadowMask() {
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
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P_=`#ifdef USE_SKINNING
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
#endif`,L_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,D_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#ifdef USE_TRANSMISSION
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W_=`uniform sampler2D t2D;
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
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
}`,J_=`#if DEPTH_PACKING == 3200
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
}`,K_=`#define DISTANCE
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
}`,j_=`#define DISTANCE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`uniform float scale;
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#define LAMBERT
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
}`,ov=`#define LAMBERT
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
}`,av=`#define MATCAP
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
}`,lv=`#define MATCAP
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
}`,cv=`#define NORMAL
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
}`,hv=`#define NORMAL
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
}`,uv=`#define PHONG
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
}`,dv=`#define PHONG
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
}`,fv=`#define STANDARD
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
}`,pv=`#define STANDARD
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
}`,mv=`#define TOON
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
}`,gv=`#define TOON
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
}`,xv=`uniform float size;
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
}`,_v=`uniform vec3 diffuse;
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
}`,vv=`#include <common>
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
}`,yv=`uniform vec3 color;
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
}`,Mv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:qg,alphamap_pars_fragment:Yg,alphatest_fragment:Zg,alphatest_pars_fragment:$g,aomap_fragment:Jg,aomap_pars_fragment:Kg,batching_pars_vertex:jg,batching_vertex:Qg,begin_vertex:ex,beginnormal_vertex:tx,bsdfs:nx,iridescence_fragment:ix,bumpmap_pars_fragment:sx,clipping_planes_fragment:rx,clipping_planes_pars_fragment:ox,clipping_planes_pars_vertex:ax,clipping_planes_vertex:lx,color_fragment:cx,color_pars_fragment:hx,color_pars_vertex:ux,color_vertex:dx,common:fx,cube_uv_reflection_fragment:px,defaultnormal_vertex:mx,displacementmap_pars_vertex:gx,displacementmap_vertex:xx,emissivemap_fragment:_x,emissivemap_pars_fragment:vx,colorspace_fragment:yx,colorspace_pars_fragment:Mx,envmap_fragment:Ex,envmap_common_pars_fragment:Sx,envmap_pars_fragment:bx,envmap_pars_vertex:wx,envmap_physical_pars_fragment:Ox,envmap_vertex:Tx,fog_vertex:Ax,fog_pars_vertex:Rx,fog_fragment:Cx,fog_pars_fragment:Px,gradientmap_pars_fragment:Lx,lightmap_fragment:Ix,lightmap_pars_fragment:Dx,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Nx,lights_pars_begin:zx,lights_toon_fragment:Fx,lights_toon_pars_fragment:Bx,lights_phong_fragment:Hx,lights_phong_pars_fragment:kx,lights_physical_fragment:Gx,lights_physical_pars_fragment:Vx,lights_fragment_begin:Wx,lights_fragment_maps:Xx,lights_fragment_end:qx,logdepthbuf_fragment:Yx,logdepthbuf_pars_fragment:Zx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:Jx,map_fragment:Kx,map_pars_fragment:jx,map_particle_fragment:Qx,map_particle_pars_fragment:e_,metalnessmap_fragment:t_,metalnessmap_pars_fragment:n_,morphcolor_vertex:i_,morphnormal_vertex:s_,morphtarget_pars_vertex:r_,morphtarget_vertex:o_,normal_fragment_begin:a_,normal_fragment_maps:l_,normal_pars_fragment:c_,normal_pars_vertex:h_,normal_vertex:u_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:p_,clearcoat_pars_fragment:m_,iridescence_pars_fragment:g_,opaque_fragment:x_,packing:__,premultiplied_alpha_fragment:v_,project_vertex:y_,dithering_fragment:M_,dithering_pars_fragment:E_,roughnessmap_fragment:S_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:w_,shadowmap_pars_vertex:T_,shadowmap_vertex:A_,shadowmask_pars_fragment:R_,skinbase_vertex:C_,skinning_pars_vertex:P_,skinning_vertex:L_,skinnormal_vertex:I_,specularmap_fragment:D_,specularmap_pars_fragment:U_,tonemapping_fragment:N_,tonemapping_pars_fragment:z_,transmission_fragment:O_,transmission_pars_fragment:F_,uv_pars_fragment:B_,uv_pars_vertex:H_,uv_vertex:k_,worldpos_vertex:G_,background_vert:V_,background_frag:W_,backgroundCube_vert:X_,backgroundCube_frag:q_,cube_vert:Y_,cube_frag:Z_,depth_vert:$_,depth_frag:J_,distanceRGBA_vert:K_,distanceRGBA_frag:j_,equirect_vert:Q_,equirect_frag:ev,linedashed_vert:tv,linedashed_frag:nv,meshbasic_vert:iv,meshbasic_frag:sv,meshlambert_vert:rv,meshlambert_frag:ov,meshmatcap_vert:av,meshmatcap_frag:lv,meshnormal_vert:cv,meshnormal_frag:hv,meshphong_vert:uv,meshphong_frag:dv,meshphysical_vert:fv,meshphysical_frag:pv,meshtoon_vert:mv,meshtoon_frag:gv,points_vert:xv,points_frag:_v,shadow_vert:vv,shadow_frag:yv,sprite_vert:Mv,sprite_frag:Ev},Me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},pi={basic:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:wn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:wn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:wn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:wn([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:wn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:wn([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:wn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:wn([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:wn([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:wn([Me.lights,Me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};pi.physical={uniforms:wn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};ba={r:0,b:0,g:0};Lr=class extends Qa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Er=4,gf=[.125,.215,.35,.446,.526,.582],Ps=20,Kc=new Lr,xf=new Ne,jc=null,Qc=0,eh=0,Rs=(1+Math.sqrt(5))/2,gr=1/Rs,_f=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Rs,gr),new H(0,Rs,-gr),new H(gr,0,Rs),new H(-gr,0,Rs),new H(Rs,gr,0),new H(-Rs,gr,0)],Ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Qc,eh),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:ri,format:si,colorSpace:Oi,depthBuffer:!1},s=vf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cv(r)),this._blurMaterial=Pv(r,e,t)}return s}_compileMaterial(e){let t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,i,s){let a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(xf),h.toneMapping=ts,h.autoClear=!1;let g=new lt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new ne(new Pe,g),m=!1,u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,m=!0):(g.color.copy(xf),m=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let _=this._cubeSize;wa(s,v*_,d>2?_:0,_,_),h.setRenderTarget(s),m&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ar||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_f[(s-1)%_f.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ne(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ps-1),m=r/x,u=isFinite(r)?1+Math.floor(h*m):Ps;u>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Ps}`);let d=[],v=0;for(let y=0;y<Ps;++y){let b=y/m,E=Math.exp(-b*b/2);d.push(E),y===0?v+=E:y<u&&(v+=2*E)}for(let y=0;y<d.length;y++)d[y]=d[y]/v;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;let w=this._sizeLods[s],D=3*w*(s>_-Er?s-_+Er:0),M=4*(this._cubeSize-w);wa(t,D,M,3*w,2*w),l.setRenderTarget(t),l.render(f,Kc)}};tl=class extends $n{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ds,h!==Ds&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ds&&(i=ji),i===void 0&&h===Cr&&(i=Is),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fp=new $n,pp=new tl(1,1);pp.compareFunction=lp;mp=new Ya,gp=new xh,xp=new el,Ef=[],Sf=[],bf=new Float32Array(16),wf=new Float32Array(9),Tf=new Float32Array(4);yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ry(t.type)}},Mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wy(t.type)}},Eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},th=/(\w+)(\])?(\[|\.)?/g;Tr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ty(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};Ay=37297,Ry=0;Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;Fy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Zy=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wh(e),t.set(e,i)),i}},wh=class{constructor(e){this.id=Zy++,this.code=e,this.usedTimes=0}};tM=0;Th=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ah=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
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
}`;Rh=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},uM={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let m of e.hand.values()){let u=t.getJointPose(m,i),d=this._getHandJoint(c,m);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ch=class extends ss{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,g=null,x=null,m=t.getContextAttributes(),u=null,d=null,v=[],_=[],w=new le,D=null,M=new cn;M.layers.enable(1),M.viewport=new Pt;let y=new cn;y.layers.enable(2),y.viewport=new Pt;let b=[M,y],E=new Rh;E.layers.enable(1),E.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let X=v[I];return X===void 0&&(X=new vo,v[I]=X),X.getTargetRaySpace()},this.getControllerGrip=function(I){let X=v[I];return X===void 0&&(X=new vo,v[I]=X),X.getGripSpace()},this.getHand=function(I){let X=v[I];return X===void 0&&(X=new vo,v[I]=X),X.getHandSpace()};function V(I){let X=_.indexOf(I.inputSource);if(X===-1)return;let ie=v[X];ie!==void 0&&(ie.update(I.inputSource,I.frame,c||o),ie.dispatchEvent({type:I.type,data:I.inputSource}))}function U(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",P);for(let I=0;I<v.length;I++){let X=_[I];X!==null&&(_[I]=null,v[I].disconnect(X))}S=null,N=null,e.setRenderTarget(u),g=null,p=null,f=null,s=null,d=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",U),s.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),d=new An(g.framebufferWidth,g.framebufferHeight,{format:si,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,ie=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?Cr:Ds,ie=m.stencil?Is:ji);let xe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(xe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new An(p.textureWidth,p.textureHeight,{format:si,type:ns,depthTexture:new tl(p.textureWidth,p.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let we=e.properties.get(d);we.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(I){for(let X=0;X<I.removed.length;X++){let ie=I.removed[X],fe=_.indexOf(ie);fe>=0&&(_[fe]=null,v[fe].disconnect(ie))}for(let X=0;X<I.added.length;X++){let ie=I.added[X],fe=_.indexOf(ie);if(fe===-1){for(let we=0;we<v.length;we++)if(we>=_.length){_.push(ie),fe=we;break}else if(_[we]===null){_[we]=ie,fe=we;break}if(fe===-1)break}let xe=v[fe];xe&&xe.connect(ie)}}let A=new H,z=new H;function B(I,X,ie){A.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(ie.matrixWorld);let fe=A.distanceTo(z),xe=X.projectionMatrix.elements,we=ie.projectionMatrix.elements,Te=xe[14]/(xe[10]-1),Se=xe[14]/(xe[10]+1),Oe=(xe[9]+1)/xe[5],F=(xe[9]-1)/xe[5],me=(xe[8]-1)/xe[0],ee=(we[8]+1)/we[0],ge=Te*me,te=Te*ee,De=fe/(-me+ee),be=De*-me;X.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(be),I.translateZ(De),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();let R=Te+De,T=Se+De,q=ge-be,ue=te+(fe-be),ae=Oe*Se/T*R,oe=F*Se/T*R;I.projectionMatrix.makePerspective(q,ue,ae,oe,R,T),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function G(I,X){X===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(X.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;E.near=y.near=M.near=I.near,E.far=y.far=M.far=I.far,(S!==E.near||N!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),S=E.near,N=E.far);let X=I.parent,ie=E.cameras;G(E,X);for(let fe=0;fe<ie.length;fe++)G(ie[fe],X);ie.length===2?B(E,M,y):E.projectionMatrix.copy(M.projectionMatrix),W(I,E,X)};function W(I,X,ie){ie===null?I.matrix.copy(X.matrixWorld):(I.matrix.copy(ie.matrixWorld),I.matrix.invert(),I.matrix.multiply(X.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(X.projectionMatrix),I.projectionMatrixInverse.copy(X.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Va*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(I){l=I,p!==null&&(p.fixedFoveation=I),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=I)};let L=null;function k(I,X){if(h=X.getViewerPose(c||o),x=X,h!==null){let ie=h.views;g!==null&&(e.setRenderTargetFramebuffer(d,g.framebuffer),e.setRenderTarget(d));let fe=!1;ie.length!==E.cameras.length&&(E.cameras.length=0,fe=!0);for(let xe=0;xe<ie.length;xe++){let we=ie[xe],Te=null;if(g!==null)Te=g.getViewport(we);else{let Oe=f.getViewSubImage(p,we);Te=Oe.viewport,xe===0&&(e.setRenderTargetTextures(d,Oe.colorTexture,p.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(d))}let Se=b[xe];Se===void 0&&(Se=new cn,Se.layers.enable(xe),Se.viewport=new Pt,b[xe]=Se),Se.matrix.fromArray(we.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(we.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Te.x,Te.y,Te.width,Te.height),xe===0&&(E.matrix.copy(Se.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),fe===!0&&E.cameras.push(Se)}}for(let ie=0;ie<v.length;ie++){let fe=_[ie],xe=v[ie];fe!==null&&xe!==void 0&&xe.update(fe,X,c||o)}L&&L(I,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),x=null}let Z=new dp;Z.setAnimationLoop(k),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}};wo=class{constructor(e={}){let{canvas:t=Sg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=ts,this.toneMappingExposure=1;let _=this,w=!1,D=0,M=0,y=null,b=-1,E=null,S=new Pt,N=new Pt,V=null,U=new Ne(0),P=0,A=t.width,z=t.height,B=1,G=null,W=null,L=new Pt(0,0,A,z),k=new Pt(0,0,A,z),Z=!1,I=new bo,X=!1,ie=!1,fe=null,xe=new ut,we=new le,Te=new H,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return y===null?B:1}let F=i;function me(C,Y){for(let J=0;J<C.length;J++){let j=C[J],$=t.getContext(j,Y);if($!==null)return $}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",se,!1),F===null){let Y=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Y.shift(),F=me(Y,C),F===null)throw me(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ee,ge,te,De,be,R,T,q,ue,ae,oe,ze,ye,Re,He,Xe,de,Ke,je,ke,Be,Le,Ze,ht;function ce(){ee=new Iv(F),ge=new Tv(F,ee,e),ee.init(ge),Le=new hM(F,ee,ge),te=new lM(F,ee,ge),De=new Nv(F),be=new Jy,R=new cM(F,ee,te,be,ge,Le,De),T=new Rv(_),q=new Lv(_),ue=new Vg(F,ge),Ze=new bv(F,ee,ue,ge),ae=new Dv(F,ue,De,Ze),oe=new Bv(F,ae,ue,De),je=new Fv(F,ge,R),Xe=new Av(be),ze=new $y(_,T,q,ee,ge,Ze,Xe),ye=new dM(_,be),Re=new jy,He=new sM(ee,ge),Ke=new Sv(_,T,q,te,oe,p,l),de=new aM(_,oe,ge),ht=new fM(F,De,ge,te),ke=new wv(F,ee,De,ge),Be=new Uv(F,ee,De,ge),De.programs=ze.programs,_.capabilities=ge,_.extensions=ee,_.properties=be,_.renderLists=Re,_.shadowMap=de,_.state=te,_.info=De}ce();let pe=new Ch(_,F);this.xr=pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(A,z,!1))},this.getSize=function(C){return C.set(A,z)},this.setSize=function(C,Y,J=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,z=Y,t.width=Math.floor(C*B),t.height=Math.floor(Y*B),J===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(A*B,z*B).floor()},this.setDrawingBufferSize=function(C,Y,J){A=C,z=Y,B=J,t.width=Math.floor(C*J),t.height=Math.floor(Y*J),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,Y,J,j){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,Y,J,j),te.viewport(S.copy(L).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy(k)},this.setScissor=function(C,Y,J,j){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,Y,J,j),te.scissor(N.copy(k).multiplyScalar(B).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(C){te.setScissorTest(Z=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(C=!0,Y=!0,J=!0){let j=0;if(C){let $=!1;if(y!==null){let Ce=y.texture.format;$=Ce===sp||Ce===ip||Ce===np}if($){let Ce=y.texture.type,Fe=Ce===ns||Ce===ji||Ce===ou||Ce===Is||Ce===ep||Ce===tp,Ge=Ke.getClearColor(),We=Ke.getClearAlpha(),tt=Ge.r,$e=Ge.g,Je=Ge.b;Fe?(g[0]=tt,g[1]=$e,g[2]=Je,g[3]=We,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=tt,x[1]=$e,x[2]=Je,x[3]=We,F.clearBufferiv(F.COLOR,0,x))}else j|=F.COLOR_BUFFER_BIT}Y&&(j|=F.DEPTH_BUFFER_BIT),J&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Re.dispose(),He.dispose(),be.dispose(),T.dispose(),q.dispose(),oe.dispose(),Ze.dispose(),ht.dispose(),ze.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ht),pe.removeEventListener("sessionend",Ye),fe&&(fe.dispose(),fe=null),pt.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let C=De.autoReset,Y=de.enabled,J=de.autoUpdate,j=de.needsUpdate,$=de.type;ce(),De.autoReset=C,de.enabled=Y,de.autoUpdate=J,de.needsUpdate=j,de.type=$}function se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){let Y=C.target;Y.removeEventListener("dispose",re),Ee(Y)}function Ee(C){Ae(C),be.remove(C)}function Ae(C){let Y=be.get(C).programs;Y!==void 0&&(Y.forEach(function(J){ze.releaseProgram(J)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,J,j,$,Ce){Y===null&&(Y=Se);let Fe=$.isMesh&&$.matrixWorld.determinant()<0,Ge=ia(C,Y,J,j,$);te.setMaterial(j,Fe);let We=J.index,tt=1;if(j.wireframe===!0){if(We=ae.getWireframeAttribute(J),We===void 0)return;tt=2}let $e=J.drawRange,Je=J.attributes.position,qt=$e.start*tt,On=($e.start+$e.count)*tt;Ce!==null&&(qt=Math.max(qt,Ce.start*tt),On=Math.min(On,(Ce.start+Ce.count)*tt)),We!==null?(qt=Math.max(qt,0),On=Math.min(On,We.count)):Je!=null&&(qt=Math.max(qt,0),On=Math.min(On,Je.count));let nn=On-qt;if(nn<0||nn===1/0)return;Ze.setup($,j,Ge,J,We);let wi,Ut=ke;if(We!==null&&(wi=ue.get(We),Ut=Be,Ut.setIndex(wi)),$.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*Oe()),Ut.setMode(F.LINES)):Ut.setMode(F.TRIANGLES);else if($.isLine){let nt=j.linewidth;nt===void 0&&(nt=1),te.setLineWidth(nt*Oe()),$.isLineSegments?Ut.setMode(F.LINES):$.isLineLoop?Ut.setMode(F.LINE_LOOP):Ut.setMode(F.LINE_STRIP)}else $.isPoints?Ut.setMode(F.POINTS):$.isSprite&&Ut.setMode(F.TRIANGLES);if($.isBatchedMesh)Ut.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ut.renderInstances(qt,nn,$.count);else if(J.isInstancedBufferGeometry){let nt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,yc=Math.min(J.instanceCount,nt);Ut.renderInstances(qt,nn,yc)}else Ut.render(qt,nn)};function qe(C,Y,J){C.transparent===!0&&C.side===St&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,$t(C,Y,J),C.side=is,C.needsUpdate=!0,$t(C,Y,J),C.side=St):$t(C,Y,J)}this.compile=function(C,Y,J=null){J===null&&(J=C),u=He.get(J),u.init(),v.push(u),J.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(u.pushLight($),$.castShadow&&u.pushShadow($))}),C!==J&&C.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(u.pushLight($),$.castShadow&&u.pushShadow($))}),u.setupLights(_._useLegacyLights);let j=new Set;return C.traverse(function($){let Ce=$.material;if(Ce)if(Array.isArray(Ce))for(let Fe=0;Fe<Ce.length;Fe++){let Ge=Ce[Fe];qe(Ge,J,$),j.add(Ge)}else qe(Ce,J,$),j.add(Ce)}),v.pop(),u=null,j},this.compileAsync=function(C,Y,J=null){let j=this.compile(C,Y,J);return new Promise($=>{function Ce(){if(j.forEach(function(Fe){be.get(Fe).currentProgram.isReady()&&j.delete(Fe)}),j.size===0){$(C);return}setTimeout(Ce,10)}ee.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let at=null;function _t(C){at&&at(C)}function Ht(){pt.stop()}function Ye(){pt.start()}let pt=new dp;pt.setAnimationLoop(_t),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(C){at=C,pe.setAnimationLoop(C),C===null?pt.stop():pt.start()},pe.addEventListener("sessionstart",Ht),pe.addEventListener("sessionend",Ye),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Y),Y=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,Y,y),u=He.get(C,v.length),u.init(),v.push(u),xe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I.setFromProjectionMatrix(xe),ie=this.localClippingEnabled,X=Xe.init(this.clippingPlanes,ie),m=Re.get(C,d.length),m.init(),d.push(m),Sn(C,Y,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(G,W),this.info.render.frame++,X===!0&&Xe.beginShadows();let J=u.state.shadowsArray;if(de.render(J,C,Y),X===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(m,C),u.setupLights(_._useLegacyLights),Y.isArrayCamera){let j=Y.cameras;for(let $=0,Ce=j.length;$<Ce;$++){let Fe=j[$];Xi(m,C,Fe,Fe.viewport)}}else Xi(m,C,Y);y!==null&&(R.updateMultisampleRenderTarget(y),R.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(_,C,Y),Ze.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?u=v[v.length-1]:u=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Sn(C,Y,J,j){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||I.intersectsSprite(C)){j&&Te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xe);let Fe=oe.update(C),Ge=C.material;Ge.visible&&m.push(C,Fe,Ge,J,Te.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||I.intersectsObject(C))){let Fe=oe.update(C),Ge=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Te.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Te.copy(Fe.boundingSphere.center)),Te.applyMatrix4(C.matrixWorld).applyMatrix4(xe)),Array.isArray(Ge)){let We=Fe.groups;for(let tt=0,$e=We.length;tt<$e;tt++){let Je=We[tt],qt=Ge[Je.materialIndex];qt&&qt.visible&&m.push(C,Fe,qt,J,Te.z,Je)}}else Ge.visible&&m.push(C,Fe,Ge,J,Te.z,null)}}let Ce=C.children;for(let Fe=0,Ge=Ce.length;Fe<Ge;Fe++)Sn(Ce[Fe],Y,J,j)}function Xi(C,Y,J,j){let $=C.opaque,Ce=C.transmissive,Fe=C.transparent;u.setupLightsView(J),X===!0&&Xe.setGlobalState(_.clippingPlanes,J),Ce.length>0&&qi($,Ce,Y,J),j&&te.viewport(S.copy(j)),$.length>0&&yt($,Y,J),Ce.length>0&&yt(Ce,Y,J),Fe.length>0&&yt(Fe,Y,J),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function qi(C,Y,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Ce=ge.isWebGL2;fe===null&&(fe=new An(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?ri:ns,minFilter:So,samples:Ce?4:0})),_.getDrawingBufferSize(we),Ce?fe.setSize(we.x,we.y):fe.setSize(mh(we.x),mh(we.y));let Fe=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(U),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let Ge=_.toneMapping;_.toneMapping=ts,yt(C,J,j),R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe);let We=!1;for(let tt=0,$e=Y.length;tt<$e;tt++){let Je=Y[tt],qt=Je.object,On=Je.geometry,nn=Je.material,wi=Je.group;if(nn.side===St&&qt.layers.test(j.layers)){let Ut=nn.side;nn.side=on,nn.needsUpdate=!0,Rt(qt,J,j,On,nn,wi),nn.side=Ut,nn.needsUpdate=!0,We=!0}}We===!0&&(R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe)),_.setRenderTarget(Fe),_.setClearColor(U,P),_.toneMapping=Ge}function yt(C,Y,J){let j=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ce=C.length;$<Ce;$++){let Fe=C[$],Ge=Fe.object,We=Fe.geometry,tt=j===null?Fe.material:j,$e=Fe.group;Ge.layers.test(J.layers)&&Rt(Ge,Y,J,We,tt,$e)}}function Rt(C,Y,J,j,$,Ce){C.onBeforeRender(_,Y,J,j,$,Ce),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(_,Y,J,j,C,Ce),$.transparent===!0&&$.side===St&&$.forceSinglePass===!1?($.side=on,$.needsUpdate=!0,_.renderBufferDirect(J,Y,j,$,C,Ce),$.side=is,$.needsUpdate=!0,_.renderBufferDirect(J,Y,j,$,C,Ce),$.side=St):_.renderBufferDirect(J,Y,j,$,C,Ce),C.onAfterRender(_,Y,J,j,$,Ce)}function $t(C,Y,J){Y.isScene!==!0&&(Y=Se);let j=be.get(C),$=u.state.lights,Ce=u.state.shadowsArray,Fe=$.state.version,Ge=ze.getParameters(C,$.state,Ce,Y,J),We=ze.getProgramCacheKey(Ge),tt=j.programs;j.environment=C.isMeshStandardMaterial?Y.environment:null,j.fog=Y.fog,j.envMap=(C.isMeshStandardMaterial?q:T).get(C.envMap||j.environment),tt===void 0&&(C.addEventListener("dispose",re),tt=new Map,j.programs=tt);let $e=tt.get(We);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===Fe)return io(C,Ge),$e}else Ge.uniforms=ze.getUniforms(C),C.onBuild(J,Ge,_),C.onBeforeCompile(Ge,_),$e=ze.acquireProgram(Ge,We),tt.set(We,$e),j.uniforms=Ge.uniforms;let Je=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=Xe.uniform),io(C,Ge),j.needsLights=ro(C),j.lightsStateVersion=Fe,j.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMap.value=$.state.directionalShadowMap,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotShadowMap.value=$.state.spotShadowMap,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMap.value=$.state.pointShadowMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),j.currentProgram=$e,j.uniformsList=null,$e}function er(C){if(C.uniformsList===null){let Y=C.currentProgram.getUniforms();C.uniformsList=Tr.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function io(C,Y){let J=be.get(C);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function ia(C,Y,J,j,$){Y.isScene!==!0&&(Y=Se),R.resetTextureUnits();let Ce=Y.fog,Fe=j.isMeshStandardMaterial?Y.environment:null,Ge=y===null?_.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Oi,We=(j.isMeshStandardMaterial?q:T).get(j.envMap||Fe),tt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Je=!!J.morphAttributes.position,qt=!!J.morphAttributes.normal,On=!!J.morphAttributes.color,nn=ts;j.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(nn=_.toneMapping);let wi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ut=wi!==void 0?wi.length:0,nt=be.get(j),yc=u.state.lights;if(X===!0&&(ie===!0||C!==E)){let Xn=C===E&&j.id===b;Xe.setState(j,C,Xn)}let kt=!1;j.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==yc.state.version||nt.outputColorSpace!==Ge||$.isBatchedMesh&&nt.batching===!1||!$.isBatchedMesh&&nt.batching===!0||$.isInstancedMesh&&nt.instancing===!1||!$.isInstancedMesh&&nt.instancing===!0||$.isSkinnedMesh&&nt.skinning===!1||!$.isSkinnedMesh&&nt.skinning===!0||$.isInstancedMesh&&nt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&nt.instancingColor===!1&&$.instanceColor!==null||nt.envMap!==We||j.fog===!0&&nt.fog!==Ce||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Xe.numPlanes||nt.numIntersection!==Xe.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==$e||nt.morphTargets!==Je||nt.morphNormals!==qt||nt.morphColors!==On||nt.toneMapping!==nn||ge.isWebGL2===!0&&nt.morphTargetsCount!==Ut)&&(kt=!0):(kt=!0,nt.__version=j.version);let Es=nt.currentProgram;kt===!0&&(Es=$t(j,Y,$));let pd=!1,oo=!1,Mc=!1,mn=Es.getUniforms(),Ss=nt.uniforms;if(te.useProgram(Es.program)&&(pd=!0,oo=!0,Mc=!0),j.id!==b&&(b=j.id,oo=!0),pd||E!==C){mn.setValue(F,"projectionMatrix",C.projectionMatrix),mn.setValue(F,"viewMatrix",C.matrixWorldInverse);let Xn=mn.map.cameraPosition;Xn!==void 0&&Xn.setValue(F,Te.setFromMatrixPosition(C.matrixWorld)),ge.logarithmicDepthBuffer&&mn.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&mn.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,oo=!0,Mc=!0)}if($.isSkinnedMesh){mn.setOptional(F,$,"bindMatrix"),mn.setOptional(F,$,"bindMatrixInverse");let Xn=$.skeleton;Xn&&(ge.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),mn.setValue(F,"boneTexture",Xn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(mn.setOptional(F,$,"batchingTexture"),mn.setValue(F,"batchingTexture",$._matricesTexture,R));let Ec=J.morphAttributes;if((Ec.position!==void 0||Ec.normal!==void 0||Ec.color!==void 0&&ge.isWebGL2===!0)&&je.update($,J,Es),(oo||nt.receiveShadow!==$.receiveShadow)&&(nt.receiveShadow=$.receiveShadow,mn.setValue(F,"receiveShadow",$.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ss.envMap.value=We,Ss.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),oo&&(mn.setValue(F,"toneMappingExposure",_.toneMappingExposure),nt.needsLights&&so(Ss,Mc),Ce&&j.fog===!0&&ye.refreshFogUniforms(Ss,Ce),ye.refreshMaterialUniforms(Ss,j,B,z,fe),Tr.upload(F,er(nt),Ss,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Tr.upload(F,er(nt),Ss,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&mn.setValue(F,"center",$.center),mn.setValue(F,"modelViewMatrix",$.modelViewMatrix),mn.setValue(F,"normalMatrix",$.normalMatrix),mn.setValue(F,"modelMatrix",$.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Xn=j.uniformsGroups;for(let Sc=0,T0=Xn.length;Sc<T0;Sc++)if(ge.isWebGL2){let md=Xn[Sc];ht.update(md,Es),ht.bind(md,Es)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Es}function so(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ro(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,Y,J){be.get(C.texture).__webglTexture=Y,be.get(C.depthTexture).__webglTexture=J;let j=be.get(C);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Y){let J=be.get(C);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,J=0){y=C,D=Y,M=J;let j=!0,$=null,Ce=!1,Fe=!1;if(C){let We=be.get(C);We.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(F.FRAMEBUFFER,null),j=!1):We.__webglFramebuffer===void 0?R.setupRenderTarget(C):We.__hasExternalTextures&&R.rebindTextures(C,be.get(C.texture).__webglTexture,be.get(C.depthTexture).__webglTexture);let tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Fe=!0);let $e=be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[Y])?$=$e[Y][J]:$=$e[Y],Ce=!0):ge.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?$=be.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[J]:$=$e,S.copy(C.viewport),N.copy(C.scissor),V=C.scissorTest}else S.copy(L).multiplyScalar(B).floor(),N.copy(k).multiplyScalar(B).floor(),V=Z;if(te.bindFramebuffer(F.FRAMEBUFFER,$)&&ge.drawBuffers&&j&&te.drawBuffers(C,$),te.viewport(S),te.scissor(N),te.setScissorTest(V),Ce){let We=be.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,We.__webglTexture,J)}else if(Fe){let We=be.get(C.texture),tt=Y||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.__webglTexture,J||0,tt)}b=-1},this.readRenderTargetPixels=function(C,Y,J,j,$,Ce,Fe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){te.bindFramebuffer(F.FRAMEBUFFER,Ge);try{let We=C.texture,tt=We.format,$e=We.type;if(tt!==si&&Le.convert(tt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=$e===ri&&(ee.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ee.has("EXT_color_buffer_float"));if($e!==ns&&Le.convert($e)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Qi&&(ge.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-j&&J>=0&&J<=C.height-$&&F.readPixels(Y,J,j,$,Le.convert(tt),Le.convert($e),Ce)}finally{let We=y!==null?be.get(y).__webglFramebuffer:null;te.bindFramebuffer(F.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(C,Y,J=0){let j=Math.pow(2,-J),$=Math.floor(Y.image.width*j),Ce=Math.floor(Y.image.height*j);R.setTexture2D(Y,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,C.x,C.y,$,Ce),te.unbindTexture()},this.copyTextureToTexture=function(C,Y,J,j=0){let $=Y.image.width,Ce=Y.image.height,Fe=Le.convert(J.format),Ge=Le.convert(J.type);R.setTexture2D(J,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,J.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,C.x,C.y,$,Ce,Fe,Ge,Y.image.data):Y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,C.x,C.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Fe,Y.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,j,C.x,C.y,Fe,Ge,Y.image),j===0&&J.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,J,j,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ce=C.max.x-C.min.x+1,Fe=C.max.y-C.min.y+1,Ge=C.max.z-C.min.z+1,We=Le.convert(j.format),tt=Le.convert(j.type),$e;if(j.isData3DTexture)R.setTexture3D(j,0),$e=F.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),$e=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);let Je=F.getParameter(F.UNPACK_ROW_LENGTH),qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),On=F.getParameter(F.UNPACK_SKIP_PIXELS),nn=F.getParameter(F.UNPACK_SKIP_ROWS),wi=F.getParameter(F.UNPACK_SKIP_IMAGES),Ut=J.isCompressedTexture?J.mipmaps[$]:J.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,C.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,C.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?F.texSubImage3D($e,$,Y.x,Y.y,Y.z,Ce,Fe,Ge,We,tt,Ut.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D($e,$,Y.x,Y.y,Y.z,Ce,Fe,Ge,We,Ut.data)):F.texSubImage3D($e,$,Y.x,Y.y,Y.z,Ce,Fe,Ge,We,tt,Ut),F.pixelStorei(F.UNPACK_ROW_LENGTH,Je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,On),F.pixelStorei(F.UNPACK_SKIP_ROWS,nn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,wi),$===0&&j.generateMipmaps&&F.generateMipmap($e),te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){D=0,M=0,y=null,te.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===au?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===Ml?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Us:op}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Us?gt:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ph=class extends wo{};Ph.prototype.isWebGL1Renderer=!0;nl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Lh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new H,il=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ns=class extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uo=new H,_r=new H,vr=new H,yr=new le,fo=new le,_p=new ut,Ta=new H,po=new H,Aa=new H,Of=new le,nh=new le,Ff=new le,Ur=class extends Yt{constructor(e=new Ns){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lh(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new il(i,3,0,!1)),xr.setAttribute("uv",new il(i,2,3,!1))}this.geometry=xr,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),_p.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-vr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ra(Ta.set(-.5,-.5,0),vr,o,_r,s,r),Ra(po.set(.5,-.5,0),vr,o,_r,s,r),Ra(Aa.set(.5,.5,0),vr,o,_r,s,r),Of.set(0,0),nh.set(1,0),Ff.set(1,1);let a=e.ray.intersectTriangle(Ta,po,Aa,!1,uo);if(a===null&&(Ra(po.set(-.5,.5,0),vr,o,_r,s,r),nh.set(0,1),a=e.ray.intersectTriangle(Ta,Aa,po,!1,uo),a===null))return;let l=e.ray.origin.distanceTo(uo);l<e.near||l>e.far||t.push({distance:l,point:uo.clone(),uv:Ls.getInterpolation(uo,Ta,po,Aa,Of,nh,Ff,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};sl=class extends _n{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new ut,Bf=new ut,Ca=[],Hf=new Fi,pM=new ut,mo=new ne,go=new rs,Lt=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sl(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mr),Hf.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Hf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mr),go.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(i),e.ray.intersectsSphere(go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Bf.multiplyMatrices(i,Mr),mo.matrixWorld=Bf,mo.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let l=Ca[o];l.instanceId=r,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},To=class extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kf=new ut,Ih=new Za,Pa=new rs,La=new H,rl=class extends Yt{constructor(e=new Kt,t=new To){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;kf.copy(s).invert(),Ih.copy(e.ray).applyMatrix4(kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=p,m=g;x<m;x++){let u=c.getX(x);La.fromBufferAttribute(f,u),Gf(La,u,l,s,e,t,this)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g;x<m;x++)La.fromBufferAttribute(f,x),Gf(La,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};hn=class extends $n{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,g=(o-h)/p;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new H,s=[],r=[],o=[],a=new H,l=new ut;for(let g=0;g<=e;g++){let x=g/e;s[g]=this.getTangentAt(x,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(rn(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,x))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(rn(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],g*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ao=class extends Jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new le,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,g=c-this.aY;l=p*h-g*f+this.aX,c=p*f+g*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dh=class extends Ao{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Ia=new H,ih=new cu,sh=new cu,rh=new cu,Uh=class extends Jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),c=Ia);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(p),g),u=Math.pow(p.distanceToSquared(h),g);m<1e-4&&(m=1),x<1e-4&&(x=m),u<1e-4&&(u=m),ih.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,x,m,u),sh.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,x,m,u),rh.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,x,m,u)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),sh.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),rh.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return i.set(ih.calc(l),sh.calc(l),rh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ol=class extends Jn{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nh=class extends Jn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y),Mo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends Jn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zh=class extends Jn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends Jn{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oh=class extends Jn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y),yo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Vf(a,l.x,c.x,h.x,f.x),Vf(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Fh=Object.freeze({__proto__:null,ArcCurve:Dh,CatmullRomCurve3:Uh,CubicBezierCurve:ol,CubicBezierCurve3:Nh,EllipseCurve:Ao,LineCurve:al,LineCurve3:zh,QuadraticBezierCurve:ll,QuadraticBezierCurve3:Oh,SplineCurve:cl}),Bh=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Fh[s.type]().fromJSON(s))}return this}},zs=class extends Bh{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new al(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ll(this.currentPoint.clone(),new le(e,t),new le(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ol(this.currentPoint.clone(),new le(e,t),new le(i,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new cl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ao(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hh=class n extends Kt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=rn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new H,p=new le,g=new H,x=new H,m=new H,u=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:u=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,g.x=d*1,g.y=-u,g.z=d*0,m.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:u=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,g.x=d*1,g.y=-u,g.z=d*0,x.copy(g),g.x+=m.x,g.y+=m.y,g.z+=m.z,g.normalize(),l.push(g.x,g.y,g.z),m.copy(x)}for(let v=0;v<=t;v++){let _=i+v*h*s,w=Math.sin(_),D=Math.cos(_);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*w,f.y=e[M].y,f.z=e[M].x*D,o.push(f.x,f.y,f.z),p.x=v/t,p.y=M/(e.length-1),a.push(p.x,p.y);let y=l[3*M+0]*w,b=l[3*M+1],E=l[3*M+0]*D;c.push(y,b,E)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let w=_+v*e.length,D=w,M=w+e.length,y=w+e.length+1,b=w+1;r.push(D,M,b),r.push(y,b,M)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},hl=class n extends Hh{constructor(e=1,t=1,i=4,s=8){let r=new zs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Nr=class n extends Kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new H,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let g=i+f/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class n extends Kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],g=[],x=0,m=[],u=i/2,d=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(g,2));function v(){let w=new H,D=new H,M=0,y=(t-e)/i;for(let b=0;b<=r;b++){let E=[],S=b/r,N=S*(t-e)+e;for(let V=0;V<=s;V++){let U=V/s,P=U*l+a,A=Math.sin(P),z=Math.cos(P);D.x=N*A,D.y=-S*i+u,D.z=N*z,f.push(D.x,D.y,D.z),w.set(A,y,z).normalize(),p.push(w.x,w.y,w.z),g.push(U,1-S),E.push(x++)}m.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){let S=m[E][b],N=m[E+1][b],V=m[E+1][b+1],U=m[E][b+1];h.push(S,N,U),h.push(N,V,U),M+=6}c.addGroup(d,M,0),d+=M}function _(w){let D=x,M=new le,y=new H,b=0,E=w===!0?e:t,S=w===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,u*S,0),p.push(0,S,0),g.push(.5,.5),x++;let N=x;for(let V=0;V<=s;V++){let P=V/s*l+a,A=Math.cos(P),z=Math.sin(P);y.x=E*z,y.y=u*S,y.z=E*A,f.push(y.x,y.y,y.z),p.push(0,S,0),M.x=A*.5+.5,M.y=z*.5*S+.5,g.push(M.x,M.y),x++}for(let V=0;V<s;V++){let U=D+V,P=N+V;w===!0?h.push(P,P+1,U):h.push(P+1,P,U),b+=3}c.addGroup(d,b,w===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zr=class n extends vt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ro=class extends zs{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new zs().fromJSON(s))}return this}},EM={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=vp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,p,g;if(i&&(r=AM(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let x=t;x<s;x+=t)f=n[x],p=n[x+1],f<a&&(a=f),p<l&&(l=p),f>c&&(c=f),p>h&&(h=p);g=Math.max(c-a,h-l),g=g!==0?32767/g:0}return Co(r,o,t,a,l,g,0),o}};Eo=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Xf(e),qf(i,e);let o=e.length;t.forEach(Xf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qf(i,t[l]);let a=EM.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};ul=class n extends Kt{constructor(e=new Ro([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:g-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,u=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:BM,_,w=!1,D,M,y,b;d&&(_=d.getSpacedPoints(h),w=!0,p=!1,D=d.computeFrenetFrames(h,!1),M=new H,y=new H,b=new H),p||(u=0,g=0,x=0,m=0);let E=a.extractPoints(c),S=E.shape,N=E.holes;if(!Eo.isClockWise(S)){S=S.reverse();for(let F=0,me=N.length;F<me;F++){let ee=N[F];Eo.isClockWise(ee)&&(N[F]=ee.reverse())}}let U=Eo.triangulateShape(S,N),P=S;for(let F=0,me=N.length;F<me;F++){let ee=N[F];S=S.concat(ee)}function A(F,me,ee){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(me,ee)}let z=S.length,B=U.length;function G(F,me,ee){let ge,te,De,be=F.x-me.x,R=F.y-me.y,T=ee.x-F.x,q=ee.y-F.y,ue=be*be+R*R,ae=be*q-R*T;if(Math.abs(ae)>Number.EPSILON){let oe=Math.sqrt(ue),ze=Math.sqrt(T*T+q*q),ye=me.x-R/oe,Re=me.y+be/oe,He=ee.x-q/ze,Xe=ee.y+T/ze,de=((He-ye)*q-(Xe-Re)*T)/(be*q-R*T);ge=ye+be*de-F.x,te=Re+R*de-F.y;let Ke=ge*ge+te*te;if(Ke<=2)return new le(ge,te);De=Math.sqrt(Ke/2)}else{let oe=!1;be>Number.EPSILON?T>Number.EPSILON&&(oe=!0):be<-Number.EPSILON?T<-Number.EPSILON&&(oe=!0):Math.sign(R)===Math.sign(q)&&(oe=!0),oe?(ge=-R,te=be,De=Math.sqrt(ue)):(ge=be,te=R,De=Math.sqrt(ue/2))}return new le(ge/De,te/De)}let W=[];for(let F=0,me=P.length,ee=me-1,ge=F+1;F<me;F++,ee++,ge++)ee===me&&(ee=0),ge===me&&(ge=0),W[F]=G(P[F],P[ee],P[ge]);let L=[],k,Z=W.concat();for(let F=0,me=N.length;F<me;F++){let ee=N[F];k=[];for(let ge=0,te=ee.length,De=te-1,be=ge+1;ge<te;ge++,De++,be++)De===te&&(De=0),be===te&&(be=0),k[ge]=G(ee[ge],ee[De],ee[be]);L.push(k),Z=Z.concat(k)}for(let F=0;F<u;F++){let me=F/u,ee=g*Math.cos(me*Math.PI/2),ge=x*Math.sin(me*Math.PI/2)+m;for(let te=0,De=P.length;te<De;te++){let be=A(P[te],W[te],ge);xe(be.x,be.y,-ee)}for(let te=0,De=N.length;te<De;te++){let be=N[te];k=L[te];for(let R=0,T=be.length;R<T;R++){let q=A(be[R],k[R],ge);xe(q.x,q.y,-ee)}}}let I=x+m;for(let F=0;F<z;F++){let me=p?A(S[F],Z[F],I):S[F];w?(y.copy(D.normals[0]).multiplyScalar(me.x),M.copy(D.binormals[0]).multiplyScalar(me.y),b.copy(_[0]).add(y).add(M),xe(b.x,b.y,b.z)):xe(me.x,me.y,0)}for(let F=1;F<=h;F++)for(let me=0;me<z;me++){let ee=p?A(S[me],Z[me],I):S[me];w?(y.copy(D.normals[F]).multiplyScalar(ee.x),M.copy(D.binormals[F]).multiplyScalar(ee.y),b.copy(_[F]).add(y).add(M),xe(b.x,b.y,b.z)):xe(ee.x,ee.y,f/h*F)}for(let F=u-1;F>=0;F--){let me=F/u,ee=g*Math.cos(me*Math.PI/2),ge=x*Math.sin(me*Math.PI/2)+m;for(let te=0,De=P.length;te<De;te++){let be=A(P[te],W[te],ge);xe(be.x,be.y,f+ee)}for(let te=0,De=N.length;te<De;te++){let be=N[te];k=L[te];for(let R=0,T=be.length;R<T;R++){let q=A(be[R],k[R],ge);w?xe(q.x,q.y+_[h-1].y,_[h-1].x+ee):xe(q.x,q.y,f+ee)}}}X(),ie();function X(){let F=s.length/3;if(p){let me=0,ee=z*me;for(let ge=0;ge<B;ge++){let te=U[ge];we(te[2]+ee,te[1]+ee,te[0]+ee)}me=h+u*2,ee=z*me;for(let ge=0;ge<B;ge++){let te=U[ge];we(te[0]+ee,te[1]+ee,te[2]+ee)}}else{for(let me=0;me<B;me++){let ee=U[me];we(ee[2],ee[1],ee[0])}for(let me=0;me<B;me++){let ee=U[me];we(ee[0]+z*h,ee[1]+z*h,ee[2]+z*h)}}i.addGroup(F,s.length/3-F,0)}function ie(){let F=s.length/3,me=0;fe(P,me),me+=P.length;for(let ee=0,ge=N.length;ee<ge;ee++){let te=N[ee];fe(te,me),me+=te.length}i.addGroup(F,s.length/3-F,1)}function fe(F,me){let ee=F.length;for(;--ee>=0;){let ge=ee,te=ee-1;te<0&&(te=F.length-1);for(let De=0,be=h+u*2;De<be;De++){let R=z*De,T=z*(De+1),q=me+ge+R,ue=me+te+R,ae=me+te+T,oe=me+ge+T;Te(q,ue,ae,oe)}}}function xe(F,me,ee){l.push(F),l.push(me),l.push(ee)}function we(F,me,ee){Se(F),Se(me),Se(ee);let ge=s.length/3,te=v.generateTopUV(i,s,ge-3,ge-2,ge-1);Oe(te[0]),Oe(te[1]),Oe(te[2])}function Te(F,me,ee,ge){Se(F),Se(me),Se(ge),Se(me),Se(ee),Se(ge);let te=s.length/3,De=v.generateSideWallUV(i,s,te-6,te-3,te-2,te-1);Oe(De[0]),Oe(De[1]),Oe(De[3]),Oe(De[1]),Oe(De[2]),Oe(De[3])}function Se(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Oe(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return HM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fh[s.type]().fromJSON(s)),new n(i,e.options)}},BM={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],p=e[s*3],g=e[s*3+1],x=e[s*3+2],m=e[r*3],u=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-f),new le(p,1-x),new le(m,1-d)]:[new le(a,1-l),new le(h,1-f),new le(g,1-x),new le(u,1-d)]}};oi=class n extends Kt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,p=(t-e)/s,g=new H,x=new le;for(let m=0;m<=s;m++){for(let u=0;u<=i;u++){let d=r+u/i*o;g.x=f*Math.cos(d),g.y=f*Math.sin(d),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,h.push(x.x,x.y)}f+=p}for(let m=0;m<s;m++){let u=m*(i+1);for(let d=0;d<i;d++){let v=d+u,_=v,w=v+i+1,D=v+i+2,M=v+1;a.push(_,w,M),a.push(w,D,M)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Vt=class n extends Kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new H,p=new H,g=[],x=[],m=[],u=[];for(let d=0;d<=i;d++){let v=[],_=d/i,w=0;d===0&&o===0?w=.5/t:d===i&&l===Math.PI&&(w=-.5/t);for(let D=0;D<=t;D++){let M=D/t;f.x=-e*Math.cos(s+M*r)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(s+M*r)*Math.sin(o+_*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),m.push(p.x,p.y,p.z),u.push(M+w,1-_),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){let _=h[d][v+1],w=h[d][v],D=h[d+1][v],M=h[d+1][v+1];(d!==0||o>0)&&g.push(_,w,M),(d!==i-1||l<Math.PI)&&g.push(w,D,M)}this.setIndex(g),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},dl=class n extends Kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new H,f=new H,p=new H;for(let g=0;g<=i;g++)for(let x=0;x<=s;x++){let m=x/s*r,u=g/i*Math.PI*2;f.x=(e+t*Math.cos(u))*Math.cos(m),f.y=(e+t*Math.cos(u))*Math.sin(m),f.z=t*Math.sin(u),a.push(f.x,f.y,f.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=s;x++){let m=(s+1)*g+x-1,u=(s+1)*(g-1)+x-1,d=(s+1)*(g-1)+x,v=(s+1)*g+x;o.push(m,u,v),o.push(u,d,v)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},fl=class extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_e=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ap,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},os=class extends _e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Or=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vh=class extends Or{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yd,endingEnd:Yd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zd:r=e,a=2*t-i;break;case $d:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zd:o=e,l=2*i-t;break;case $d:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,g=this._weightNext,x=(i-t)/(s-t),m=x*x,u=m*x,d=-p*u+2*p*m-p*x,v=(1+p)*u+(-1.5-2*p)*m+(-.5+p)*x+1,_=(-1-g)*u+(1.5+g)*m+.5*x,w=g*u-g*m;for(let D=0;D!==a;++D)r[D]=d*o[h+D]+v*o[c+D]+_*o[l+D]+w*o[f+D];return r}},Wh=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},Xh=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ai=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&kM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,p=f-i,g=f+i;for(let x=0;x!==i;++x){let m=t[f+x];if(m!==t[p+x]||m!==t[g+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,p=o*i;for(let g=0;g!==i;++g)t[p+g]=t[f+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Fa;Fs=class extends ai{};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Oa;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;qh=class extends ai{};qh.prototype.ValueTypeName="color";Yh=class extends ai{};Yh.prototype.ValueTypeName="number";Zh=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},Io=class extends ai{InterpolantFactoryMethodLinear(e){return new Zh(this.times,this.values,this.getValueSize(),e)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.DefaultInterpolation=Fa;Io.prototype.InterpolantFactoryMethodSmooth=void 0;Bs=class extends ai{};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Oa;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;$h=class extends ai{};$h.prototype.ValueTypeName="vector";Jh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let g=c[f],x=c[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null}}},GM=new Jh,Kh=class{constructor(e){this.manager=e!==void 0?e:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Kh.DEFAULT_MATERIAL_NAME="__DEFAULT";Fr=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},pl=class extends Fr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},oh=new ut,Yf=new H,Zf=new H,Do=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yf),Zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zf),t.updateMatrixWorld(),oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jh=class extends Do{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Va*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ml=class extends Fr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$f=new ut,xo=new H,ah=new H,Qh=class extends Do{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),ah.copy(i.position),ah.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ah),i.updateMatrixWorld(),s.makeTranslation(-xo.x,-xo.y,-xo.z),$f.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($f)}},gl=class extends Fr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},eu=class extends Do{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xl=class extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_l=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Jf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};hu="\\[\\]\\.:\\/",VM=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",WM="[^"+hu.replace("\\.","")+"]",XM=/((?:WC+[\/:])*)/.source.replace("WC",uu),qM=/(WCOD+)?/.source.replace("WCOD",WM),YM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),ZM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),$M=new RegExp("^"+XM+qM+YM+ZM+"$"),JM=["material","materials","bones","map"],tu=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VM,"")}static parseTrackName(e){let t=$M.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);JM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=tu;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];pb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Nm={};bc(Nm,{RoomEnvironment:()=>Bu});function Zr(n){let e=new lt;return e.color.setScalar(n),e}var Bu,zm=Fn(()=>{It();Bu=class extends Dr{constructor(e=null){super();let t=new Pe;t.deleteAttribute("uv");let i=new _e({side:on}),s=new _e,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new gl(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ne(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new ne(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ne(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new ne(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let f=new ne(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new ne(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let g=new ne(t,s);g.position.set(-2.193,-.369,-5.547),g.rotation.set(0,.516,0),g.scale.set(3.875,3.487,2.986),this.add(g);let x=new ne(t,Zr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let m=new ne(t,Zr(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let u=new ne(t,Zr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ne(t,Zr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let v=new ne(t,Zr(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let _=new ne(t,Zr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var $l,Hu=Fn(()=>{$l={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var kn,RS,ku,CS,ds,$r=Fn(()=>{It();kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},RS=new Lr(-1,1,1,-1,0,1),ku=class extends Kt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},CS=new ku,ds=class{constructor(e){this._mesh=new ne(CS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,RS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Jr,Gu=Fn(()=>{It();$r();Jr=class extends kn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=as.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ds(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Yo,Jl,Vu=Fn(()=>{$r();Yo=class extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jl=class extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Kl,Om=Fn(()=>{It();Hu();Gu();Vu();Vu();Kl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jr($l),this.copyPass.material.blending=mi,this.clock=new _l}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yo!==void 0&&(o instanceof Yo?i=!0:o instanceof Jl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var jl,Fm=Fn(()=>{It();$r();jl=class extends kn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var Bm,Hm=Fn(()=>{It();Bm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var Kr,km=Fn(()=>{It();$r();Hu();Hm();Kr=class n extends kn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,o,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new An(r,o,{type:ri});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let g=new An(r,o,{type:ri});g.texture.name="UnrealBloomPass.v"+f,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),o=Math.round(o/2)}let a=Bm;this.highPassUniforms=as.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=$l;this.copyUniforms=as.clone(h.uniforms),this.blendMaterial=new jt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new lt,this.fsQuad=new ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new jt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Kr.BlurDirectionX=new le(1,0);Kr.BlurDirectionY=new le(0,1)});var Gm,Vm=Fn(()=>{Gm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Ql,Wm=Fn(()=>{It();$r();Vm();Ql=class extends kn{constructor(){super();let e=Gm;this.uniforms=as.clone(e.uniforms),this.material=new fl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===su?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ru&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Xm={};bc(Xm,{createPostFX:()=>LS});function LS(n,e,t){let i=new Kl(n);i.addPass(new jl(e,t));let s=new Kr(new le(window.innerWidth,window.innerHeight),.35,.65,.82);i.addPass(s);let r=new Jr(PS);return i.addPass(r),i.addPass(new Ql),{composer:i,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){i.setSize(o,a)},setPixelRatio(o){i.setPixelRatio(o)},render(){i.render()}}}var PS,qm=Fn(()=>{It();Om();Fm();km();Gu();Wm();PS={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});It();var pu={};bc(pu,{CAR_DEFS:()=>Hi,applyCarSkin:()=>hE,buildCar:()=>oE,carDef:()=>fu,effectiveStats:()=>cE,extrudeProfile:()=>No,glassMat:()=>wp,paintCar:()=>aE,paintMat:()=>bp,setWheelStyle:()=>lE});It();var Hi=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}},{id:"sedan",name:"Prairie Sedan",desc:"Comfy daily driver. Easy to handle.",price:6e3,colors:[7041664,1718891,15921906,7999504,1316380],stats:{topSpeed:48,accel:14,handling:1,grip:1,nitroTime:3,nitroPower:1.3}},{id:"taxi",name:"Peg City Cab",desc:"Yellow cab with a roof sign. Nimble.",price:7500,colors:[16761856,16761856,15921906],stats:{topSpeed:49,accel:15,handling:1.05,grip:1,nitroTime:3,nitroPower:1.3},extra:"taxi"},{id:"van",name:"Delivery Van",desc:"Big box on wheels. Slow, heavy, tough.",price:9e3,colors:[15921906,2060267,2976335,12589080],stats:{topSpeed:42,accel:12,handling:.8,grip:1,nitroTime:4,nitroPower:1.3}},{id:"police",name:"Interceptor",desc:"Police-spec V8 with a light bar.",price:28e3,colors:[1316380,15921906,1718891],stats:{topSpeed:60,accel:19,handling:1.1,grip:1.15,nitroTime:3.4,nitroPower:1.4},extra:"police"},{id:"hyper",name:"Aurora Hyper",desc:"The fastest thing in the city. Wings and all.",price:9e4,colors:[16735802,11032055,1622208,15921906,1316380],stats:{topSpeed:76,accel:27,handling:1.3,grip:1.4,nitroTime:3.2,nitroPower:1.55}}],fu=n=>Hi.find(e=>e.id===n)||Hi[0],bp=n=>new os({color:n,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),wp=()=>new os({color:922652,metalness:.9,roughness:.08,envMapIntensity:1.6}),Tp=()=>new _e({color:14672872,metalness:1,roughness:.22}),KM=()=>new _e({color:1316378,metalness:.4,roughness:.6}),jM=()=>new _e({color:789775,roughness:.95}),QM=()=>new _e({color:12172998,metalness:1,roughness:.3}),eE=()=>new _e({color:5922404,metalness:.9,roughness:.45}),tE=()=>new _e({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),nE=()=>new _e({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),iE=()=>new _e({color:15263976,roughness:.5}),Ep=(n,e,t)=>({x:n,y:e,r:t}),sE={taxi:"sedan",police:"sedan"},du={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},sedan:{W:1.84,wb:1.4,wheelR:.33,track:1.58,body:[[2.3,.3],[2.34,.5],[2.15,.68],[1.25,.78],[.6,.82],[-1.5,.84],[-2.1,.8],[-2.3,.62],[-2.3,.36],[-2,.22],[2,.22]],glass:[[.62,.8],[.25,1.28],[-1.05,1.3],[-1.5,.84]],roof:[[.28,1.24],[-1.08,1.26],[-1.12,1.2],[.24,1.18]],splitter:!1},van:{W:2,wb:1.6,wheelR:.36,track:1.68,body:[[2.45,.3],[2.5,.6],[2.35,.95],[1.6,1.1],[.95,1.1],[.95,2],[-2.45,2],[-2.5,1.85],[-2.5,.35],[-2.2,.24],[2.2,.24]],glass:[[1.62,1.1],[1.05,1.95],[.9,1.95],[.9,1.1]],roof:null,splitter:!1},hyper:{W:2.04,wb:1.4,wheelR:.34,track:1.72,body:[[2.4,.2],[2.45,.38],[2.2,.5],[1.2,.6],[.5,.68],[-1.3,.74],[-2,.72],[-2.35,.6],[-2.4,.38],[-2.3,.2],[-2,.14],[2,.14]],glass:[[.6,.66],[0,1],[-.9,1.02],[-1.4,.74]],roof:[[.04,.97],[-.92,.99],[-.95,.93],[0,.92]],wing:!0,splitter:!0,canards:!0},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function No(n,e,t,i,s=.045){let r=new Ro;r.moveTo(n[0][0],n[0][1]);for(let l=1;l<n.length;l++)r.lineTo(n[l][0],n[l][1]);r.closePath();for(let l of i||[]){let c=new zs;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new ul(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new ne(o,t);return a.castShadow=!0,a}function rE(n,e,t){let i=new rt,s=new ne(new vt(e,e,.26,22),jM());s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);let r=new ne(new vt(e*.52,e*.52,.27,18),eE());r.rotation.z=Math.PI/2,i.add(r);let o=new ne(new dl(e*.62,e*.1,8,22),t);o.rotation.y=Math.PI/2,i.add(o);let a=new rt;for(let h=0;h<5;h++){let f=new ne(new Pe(.05,e*.6,e*.16),t);f.position.y=e*.3;let p=new rt;p.rotation.x=h/5*Math.PI*2,p.add(f),a.add(p)}let l=a.clone();l.rotation.y=Math.PI,i.add(a),i.add(l);let c=new ne(new vt(e*.14,e*.14,.3,12),Tp());return c.rotation.z=Math.PI/2,i.add(c),n==="blackout"?t.color.setHex(1513500):n==="gold"?t.color.setHex(13211182):n==="neon"&&t.color.setHex(2287359),i}function oE(n,e,t="stock"){let i=typeof n=="string"?fu(n):n||Hi[0],s=i.id||"sport";typeof e!="number"&&(e=typeof i.color=="number"?i.color:i.colors[0]);let r=du[s]||du[sE[s]]||du.sport,o=new rt,a=bp(e),l=wp(),c=Tp(),h=KM(),f=[Ep(r.wb,r.wheelR,r.wheelR+.13),Ep(-r.wb,r.wheelR,r.wheelR+.13)];o.add(No(r.body,r.W,a,f)),o.add(No(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(No(r.roof,r.W-.2,a,null,.02));let p=Math.max(...r.body.map(S=>S[0])),g=Math.min(...r.body.map(S=>S[0])),x=-p,m=-g,u=r.W/2,d=[],v=QM();for(let S of[-1,1])for(let N of[-r.wb,r.wb]){let V=rE(t,r.wheelR,v);V.position.set(S*r.track/2,r.wheelR,N),o.add(V),d.push(V)}let _=tE();for(let S of[-1,1]){let N=new ne(new Pe(.34,.16,.1),h);N.position.set(S*(u-.42),.6,x+.02),o.add(N);let V=new ne(new Vt(.085,12,10),_);V.scale.set(1.6,.75,.7),V.position.set(S*(u-.42),.6,x-.03),o.add(V)}let w=new ne(new Pe(u*1.1,.16,.08),h);if(w.position.set(0,.4,x+.01),o.add(w),r.splitter){let S=new ne(new Pe(r.W*.92,.05,.3),h);S.position.set(0,.16,x+.1),o.add(S)}if(r.hoodScoop){let S=new ne(new Pe(.5,.09,.7),h);S.position.set(0,.86,-(r.wb*.55)),o.add(S)}if(r.canards)for(let S of[-1,1]){let N=new ne(new Pe(.22,.03,.3),h);N.position.set(S*(u-.1),.3,x+.12),N.rotation.z=S*.25,o.add(N)}let D=nE(),M=new ne(new Pe(r.W*.78,.1,.06),D);M.position.set(0,.66,m-.02),o.add(M);for(let S of[-1,1]){let N=new ne(new Pe(.12,.06,.065),new _e({color:14540253,emissive:16777215,emissiveIntensity:.6}));N.position.set(S*.28,.66,m-.02),o.add(N)}let y=new ne(new Pe(r.W*.8,.14,.18),h);y.position.set(0,.24,m-.06),o.add(y);for(let S of[-1,1]){let N=new ne(new vt(.05,.055,.22,12),c);N.rotation.x=Math.PI/2,N.position.set(S*.32,.26,m+.06),o.add(N)}let b=new ne(new Pe(.34,.09,.02),iE());b.position.set(0,.5,m+.005),o.add(b);for(let S of[-1,1]){let N=new ne(new Pe(.1,.03,.05),h);N.position.set(S*(u+.03),1,-(r.wb*.42)),o.add(N);let V=new ne(new Pe(.1,.1,.16),a);V.position.set(S*(u+.09),1.04,-(r.wb*.42)),V.castShadow=!0,o.add(V)}if(r.rails)for(let S of[-1,1]){let N=new ne(new Pe(.06,.05,1.9),h);N.position.set(S*(u-.35),1.72,.1),o.add(N)}if(r.bed){let S=new ne(new Pe(r.W-.5,.06,2),h);S.position.set(0,1.02,g*.55),o.add(S)}if(r.spoiler||r.wing){let S=!!r.wing;for(let V of[-1,1]){let U=new ne(new Pe(.07,S?.3:.16,.24),S?h:a);U.position.set(V*(u-.45),.86+(S?.1:.04),m+.28),o.add(U)}let N=new ne(new Pe(r.W*(S?.92:.8),.045,S?.42:.3),S?h:a);N.position.set(0,S?1.06:.98,m+.28),N.rotation.x=S?-.12:0,N.castShadow=!0,o.add(N)}let E=null;if(i.extra==="taxi"||i.extra==="police"){let S=Math.max(...(r.roof||r.glass).map(V=>V[1]))+.02,N=(r.roof||r.glass).reduce((V,U)=>V+U[0],0)/(r.roof||r.glass).length;if(i.extra==="taxi"){let V=document.createElement("canvas");V.width=128,V.height=32;let U=V.getContext("2d");U.fillStyle="#ffd23f",U.fillRect(0,0,128,32),U.fillStyle="#111",U.font="bold 22px sans-serif",U.textAlign="center",U.fillText("TAXI",64,24);let P=new hn(V);P.colorSpace=gt;let A=new ne(new Pe(.62,.2,.26),new _e({map:P,emissive:16777215,emissiveMap:P,emissiveIntensity:.6}));A.position.set(0,S+.1,-N),A.rotation.y=Math.PI/2,o.add(A)}else{let V=new ne(new Pe(1.1,.1,.28),h);V.position.set(0,S+.05,-N),o.add(V);let U=new _e({color:5570560,emissive:16718362,emissiveIntensity:2.5}),P=new _e({color:85,emissive:1723903,emissiveIntensity:2.5}),A=new ne(new Pe(.48,.12,.24),U);A.position.set(-.27,S+.14,-N);let z=new ne(new Pe(.48,.12,.24),P);z.position.set(.27,S+.14,-N),o.add(A,z),E=[U,P]}}return o.userData={flashers:E,defId:s,bodyColor:e,wheels:d,frontWheels:d.filter(S=>S.position.z<0),rim:v,glass:l,paint:a,setBrake:S=>{},profile:r,frontZ:x,rearZ:m},o}function aE(n,e){let t=new Ne(e);n.traverse(i=>{i.isMesh&&i.material&&i.material.isMeshPhysicalMaterial&&i.material.color&&Math.abs(i.material.color.getHex()-n.userData.bodyColor)<2&&!i.material.emissiveIntensity&&i.material.color.copy(t)}),n.userData.bodyColor=e}function lE(n,e){let t=n.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function cE(n,e){let i=(typeof n=="string"?fu(n):n||Hi[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:i.topSpeed*(1+.055*r("engine")),accel:i.accel*(1+.09*r("engine")+.12*r("turbo")),handling:i.handling*(1+.06*r("suspension")),grip:i.grip*(1+.07*r("tires")),nitroTime:i.nitroTime+.5*r("nitro"),nitroPower:i.nitroPower*(1+.08*r("nitro"))}}var Sp={clear:4873070,dark:922652,limo:131844};function hE(n,e,t){let i=n.userData;if(typeof e=="number"&&i.paint&&(i.paint.color.setHex(e),i.bodyColor=e),!t)return n;i.rim&&i.rim.color.setHex(t.rims),i.glass&&i.glass.color.setHex(Sp[t.tint]??Sp.dark),i.skinParts&&(n.remove(i.skinParts),i.skinParts.traverse(o=>{o.isMesh&&o.geometry.dispose()}));let s=new rt;i.skinParts=s,n.add(s);let r=i.profile;if(r&&t.stripes!=="none"){let o=new os({color:t.stripe,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.1});if(t.stripes==="side"){let a=(i.rearZ-i.frontZ)*.86,l=(i.rearZ+i.frontZ)/2,c=r.wheelR+.22;for(let h of[-1,1]){let f=new ne(new Pe(.02,.09,a),o);f.position.set(h*(r.W/2+.05),c,l),s.add(f)}}else{let a=t.stripes==="dual"?[-.22,.22]:[0],l=t.stripes==="dual"?.16:.34;for(let c of a)for(let h of[r.body,r.roof]){if(!h)continue;let f=No(h,l,o,null,.045);f.castShadow=!1,f.scale.set(1,1.012,1.004),f.position.set(c,.006,0),s.add(f)}}}if(t.glow!=null&&r){let o=new lt({color:t.glow,transparent:!0,opacity:.75,blending:Gt,depthWrite:!1,map:uE()}),a=i.rearZ-i.frontZ+1.2,l=new ne(new st(r.W+1.4,a).rotateX(-Math.PI/2),o);l.position.set(0,.07,(i.rearZ+i.frontZ)/2),l.renderOrder=2,s.add(l)}return n}var bl=null;function uE(){if(bl)return bl;let n=document.createElement("canvas");n.width=64,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(32,64,4,32,64,62);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,1),e.fillStyle=t,e.fillRect(0,0,64,128),e.restore(),bl=new hn(n),bl}It();var dE=1337,mu=null,Qt=5,gi=60,ci=14,li=gi+ci,gu=(Qt*li+ci)/2,Hs=232,zo=225,xu=9;function fE(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ks(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new hn(i);return s.colorSpace=gt,s.anisotropy=4,s}function Ap(){return ks(128,128,(n,e,t)=>{n.fillStyle="#33363b",n.fillRect(0,0,e,t),n.fillStyle="#3a3d42";for(let i=0;i<160;i++)n.fillRect(i*37%e,i*53%t,2,2);n.fillStyle="#cfd3d8",n.fillRect(4,0,4,t),n.fillRect(e-8,0,4,t),n.fillStyle="#e8c33a";for(let i=0;i<t;i+=32)n.fillRect(e/2-3,i,6,16)})}function pE(){return ks(128,256,(n,e,t)=>{n.fillStyle="#8d97a3",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++){let c=(a*7+l*13)%17===0;n.fillStyle=c?"#ffe08a":"#3b4656",n.fillRect(l*r+3,a*o+4,r-6,o-8),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(l*r+3,a*o+4,r-6,3)}})}function mE(){return ks(128,256,(n,e,t)=>{n.fillStyle="#000000",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++)(a*7+l*13)%5===0&&(n.fillStyle=(a+l)%3===0?"#ffd9a0":"#fff3d0",n.fillRect(l*r+3,a*o+4,r-6,o-8))})}var Dn={p:null,q:null,s:null,m:null};function Cn(n,e,t,i,s,r,o,a,l){Dn.p.set(t,i,s),Dn.q.setFromAxisAngle(Dn.up,r),Dn.s.set(o,a,l),Dn.m.compose(Dn.p,Dn.q,Dn.s),n.setMatrixAt(e,Dn.m)}function Rp(n,e,t,i,s){for(let r of n)if(t>r.minX&&e<r.maxX&&s>r.minZ&&i<r.maxZ)return!0;return!1}function Cp(n,e=[]){let t=fE(dE);Dn.p=new H,Dn.q=new In,Dn.s=new H,Dn.m=new ut,Dn.up=new H(0,1,0);let i=[];n.fog=new nl(13623538,200,750);let s=new pl(12572927,6978138,.9);n.add(s);let r=new xl(16774368,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=10,r.shadow.camera.far=400;let o=110;r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.bias=-8e-4,n.add(r),n.add(r.target);let a=70,l=120,c=45,h=16,f=new st(1400,1400);f.rotateX(-Math.PI/2);let p=new ne(f,new _e({color:6130250,roughness:.95,metalness:0,envMapIntensity:.25}));p.receiveShadow=!0,n.add(p);let g=[];for(let ce=0;ce<=Qt;ce++)g.push((ce-Qt/2)*li);let x=Qt*li+ci,m=Ap();m.wrapS=m.wrapT=zi,m.repeat.set(1,x/ci);let u=new st(1,1);u.rotateX(-Math.PI/2);let d=new _e({map:m,roughness:.9,metalness:.05,envMapIntensity:.35}),v=new Lt(u,d,g.length*2);v.receiveShadow=!0;let _=0;for(let ce of g)Cn(v,_++,ce,.05,0,0,ci,1,x),Cn(v,_++,0,.05,ce,Math.PI/2,ci,1,x);v.instanceMatrix.needsUpdate=!0,n.add(v);let w=new st(1,1);w.rotateX(-Math.PI/2);let D=new Lt(w,new _e({color:10132898,roughness:.9,metalness:.05,envMapIntensity:.3}),Qt*Qt);D.receiveShadow=!0;let M=0;for(let ce=0;ce<Qt;ce++)for(let pe=0;pe<Qt;pe++){let K=(ce-(Qt-1)/2)*li,O=(pe-(Qt-1)/2)*li;Cn(D,M++,K,.03,O,0,gi,1,gi)}D.instanceMatrix.needsUpdate=!0,n.add(D);let y=pE(),b=new Pe(1,1,1);b.translate(0,.5,0);let E=new _e({map:y,emissiveMap:mE(),emissive:16762995,emissiveIntensity:0,roughness:.85,metalness:.1,envMapIntensity:.4}),S=110,N=new Lt(b,E,S);N.castShadow=!0,N.receiveShadow=!0;let V=new Ne,U=[],P=[],A=0,z=4,B=0,G=0;for(let ce=0;ce<Qt;ce++)for(let pe=0;pe<Qt;pe++){let K=(ce-(Qt-1)/2)*li,O=(pe-(Qt-1)/2)*li,se=ce===B&&pe===G,re=Math.abs(ce-2)<=1&&Math.abs(pe-2)<=1,Ee=t()<.75?4:9,Ae=Math.sqrt(Ee),qe=(gi-z*2)/Ae;for(let at=0;at<Ee&&A<S;at++){if(se||t()<.28)continue;let _t=at%Ae,Ht=Math.floor(at/Ae),Ye=qe*(.55+t()*.3),pt=qe*(.55+t()*.3),Sn=re?60:28,Xi=re?18:10,qi=Xi+t()*(Sn-Xi),yt=K-(gi-z*2)/2+qe*(_t+.5)+(t()-.5)*2,Rt=O-(gi-z*2)/2+qe*(Ht+.5)+(t()-.5)*2,$t=.82+t()*.32,er=t();if(!Rp(e,yt-Ye/2,yt+Ye/2,Rt-pt/2,Rt+pt/2)){Cn(N,A,yt,.03,Rt,0,Ye,qi,pt),er<.45?V.setRGB($t,$t*.97,$t*.95):er<.65?V.setRGB($t,$t*.9,$t*.82):er<.82?V.setRGB($t*.88,$t*.95,$t):V.setRGB($t,$t*.82,$t*.74),N.setColorAt(A,V),U.push({x:yt,h:qi,w:Ye,d:pt,z:Rt});{let io=yt-K,ia=Rt-O,so=0,ro=0;Math.abs(io)>Math.abs(ia)?so=io>=0?1:-1:ro=ia>=0?1:-1;let C={x:yt+so*(Ye/2),z:Rt+ro*(pt/2),nx:so,nz:ro};P.push({id:P.length,minX:yt-Ye/2,maxX:yt+Ye/2,minZ:Rt-pt/2,maxZ:Rt+pt/2,h:qi,door:C})}i.push({minX:yt-Ye/2,maxX:yt+Ye/2,minZ:Rt-pt/2,maxZ:Rt+pt/2}),A++}}}N.count=A,N.instanceMatrix.needsUpdate=!0,N.instanceColor&&(N.instanceColor.needsUpdate=!0),n.add(N);{let ce=ks(64,96,(se,re,Ee)=>{se.fillStyle="#20262f",se.fillRect(0,0,re,Ee),se.fillStyle="#ffd98a",se.fillRect(0,0,re,6),se.fillRect(0,0,5,Ee),se.fillRect(re-5,0,5,Ee),se.fillStyle="#6fa8d8",se.fillRect(9,12,re/2-12,Ee-20),se.fillRect(re/2+3,12,re/2-12,Ee-20),se.fillStyle="#cfd3d8",se.fillRect(re/2-6,Ee/2,3,10),se.fillRect(re/2+3,Ee/2,3,10)}),pe=new st(2.2,3);pe.translate(0,1.5,0);let K=new _e({map:ce,emissive:16762995,emissiveMap:ce,emissiveIntensity:.25,roughness:.4,metalness:.3}),O=new Lt(pe,K,Math.max(1,P.length));P.forEach((se,re)=>{let Ee=se.door.nx?se.door.nx>0?Math.PI/2:-Math.PI/2:se.door.nz>0?0:Math.PI;Cn(O,re,se.door.x+se.door.nx*.03,.04,se.door.z+se.door.nz*.03,Ee,1,1,1)}),O.count=P.length,O.instanceMatrix.needsUpdate=!0,n.add(O),mu=K}{let ce=new Pe(1.6,1.1,1.6);ce.translate(0,.55,0);let pe=new _e({color:9146518,roughness:.7,metalness:.4,envMapIntensity:.4}),K=[];for(let se of U){let re=1+Math.floor(t()*2);for(let Ee=0;Ee<re;Ee++)K.push([se.x+(t()-.5)*se.w*.5,se.h+.03,se.z+(t()-.5)*se.d*.5,.7+t()*.7])}let O=new Lt(ce,pe,Math.max(1,K.length));K.forEach(([se,re,Ee,Ae],qe)=>Cn(O,qe,se,re,Ee,t()*3.14,Ae,1,Ae)),O.count=K.length,O.instanceMatrix.needsUpdate=!0,n.add(O)}{let ce=(B-(Qt-1)/2)*li,pe=(G-(Qt-1)/2)*li,K=new ne(new st(gi,gi).rotateX(-Math.PI/2),new _e({color:3356219,roughness:.95,metalness:.02,envMapIntensity:.25}));K.position.set(ce,.045,pe),K.receiveShadow=!0,n.add(K);let O=new Pe(.14,.02,5.6);O.translate(0,.01,0);let se=new _e({color:15264492,roughness:.7}),re=3,Ee=[-7.5,7.5],Ae=12,qe=ce-Ae*re/2,at=Ee.length*(Ae+1),_t=new Lt(O,se,at),Ht=new Pe(1.8,.14,.16);Ht.translate(0,.07,0);let Ye=new _e({color:10132898,roughness:.9}),pt=new Lt(Ht,Ye,Ee.length*Ae),Sn=0,Xi=0;for(let yt of Ee){for(let Rt=0;Rt<=Ae;Rt++)Cn(_t,Sn++,qe+Rt*re,.055,pe+yt,0,1,1,1);for(let Rt=0;Rt<Ae;Rt++)Cn(pt,Xi++,qe+Rt*re+re/2,.055,pe+yt+(yt<0?1.9:-1.9),0,1,1,1)}_t.count=Sn,_t.instanceMatrix.needsUpdate=!0,pt.count=Xi,pt.instanceMatrix.needsUpdate=!0,n.add(_t,pt);let qi=new ne(new st(20,5).rotateX(-Math.PI/2),new _e({map:ks(256,64,(yt,Rt,$t)=>{yt.fillStyle="#33363b",yt.fillRect(0,0,Rt,$t),yt.fillStyle="#e8c33a",yt.font="bold 40px sans-serif",yt.textAlign="center",yt.textBaseline="middle",yt.fillText("PARKING",Rt/2,$t/2)}),roughness:.9,transparent:!1}));qi.position.set(ce,.055,pe),n.add(qi)}{let ce=new Pe(.7,.02,3.2);ce.translate(0,.01,0);let pe=new _e({color:14672614,roughness:.75}),K=[];for(let se of[2,3])for(let re of[2,3]){let Ee=g[se],Ae=g[re],qe=ci/2+2.6;for(let[at,_t,Ht]of[[Ee,Ae-qe,0],[Ee,Ae+qe,0],[Ee-qe,Ae,1],[Ee+qe,Ae,1]])for(let Ye=-2;Ye<=2;Ye++)K.push(Ht===0?[at+Ye*2.2,.06,_t,0]:[at,.06,_t+Ye*2.2,Math.PI/2])}let O=new Lt(ce,pe,K.length);K.forEach(([se,re,Ee,Ae],qe)=>Cn(O,qe,se,re,Ee,Ae,1,1,1)),O.instanceMatrix.needsUpdate=!0,O.receiveShadow=!0,n.add(O)}let W=new vt(.12,.16,9,6);W.translate(0,4.5,0);let L=new _e({color:3948872,roughness:.6,metalness:.6,envMapIntensity:.6}),k=new Pe(1.6,.25,.5);k.translate(.6,9,0);let Z=new _e({color:16773828,emissive:16766842,emissiveIntensity:.35,roughness:.4,metalness:.2}),I=[];for(let ce of g)for(let pe=-x/2+25;pe<x/2-10;pe+=46){let K=Math.round(pe/46)%2===0?1:-1;I.push([ce+K*(ci/2+1.5),pe,0]),I.push([pe,ce+K*(ci/2+1.5),1])}let X=new Lt(W,L,I.length),ie=new Lt(k,Z,I.length);I.forEach(([ce,pe,K],O)=>{Cn(X,O,ce,0,pe,0,1,1,1),Cn(ie,O,ce,0,pe,K?Math.PI/2:0,1,1,1)}),X.instanceMatrix.needsUpdate=!0,ie.instanceMatrix.needsUpdate=!0,n.add(X,ie);let fe=[];for(let ce=0;ce<Qt;ce++)for(let pe=0;pe<Qt;pe++){if(ce===B&&pe===G)continue;let K=(ce-(Qt-1)/2)*li,O=(pe-(Qt-1)/2)*li,se=2+Math.floor(t()*3);for(let re=0;re<se;re++)fe.push([K+(t()-.5)*(gi-8),O+(t()-.5)*(gi-8),.8+t()*.5])}let xe=new vt(.18,.28,2.6,6);xe.translate(0,1.3,0);let we=new zr(1.9,4.6,7);we.translate(0,4.4,0);let Te=new Lt(xe,new _e({color:7031342,roughness:.9,envMapIntensity:.2}),fe.length),Se=new Lt(we,new _e({color:4094516,roughness:.85,envMapIntensity:.3}),fe.length);Se.castShadow=!0;for(let ce=fe.length-1;ce>=0;ce--){let[pe,K]=fe[ce];Rp(e,pe-2,pe+2,K-2,K+2)&&fe.splice(ce,1)}fe.forEach(([ce,pe,K],O)=>{Cn(Te,O,ce,.03,pe,t()*6.28,K,K,K),Cn(Se,O,ce,.03,pe,t()*6.28,K,K*(.9+t()*.3),K)}),Te.instanceMatrix.needsUpdate=!0,Se.instanceMatrix.needsUpdate=!0,n.add(Te,Se);let Oe=ks(64,64,(ce,pe,K)=>{let O=ce.createRadialGradient(32,32,2,32,32,30);O.addColorStop(0,"rgba(255,220,150,1)"),O.addColorStop(.4,"rgba(255,200,120,0.45)"),O.addColorStop(1,"rgba(255,190,110,0)"),ce.fillStyle=O,ce.fillRect(0,0,pe,K)}),F=new Kt,me=new Float32Array(I.length*3);I.forEach(([ce,pe],K)=>{me[K*3]=ce,me[K*3+1]=8.9,me[K*3+2]=pe}),F.setAttribute("position",new _n(me,3));let ee=new To({map:Oe,size:14,transparent:!0,opacity:0,blending:Gt,depthWrite:!1,sizeAttenuation:!0}),ge=new rl(F,ee);ge.frustumCulled=!1,n.add(ge);let te=new Pe(1,1,1);te.translate(0,.5,0);let De=new lt({color:2767445}),be=46,R=new Lt(te,De,be);for(let ce=0;ce<be;ce++){let pe=ce/be*Math.PI*2+t()*.1,K=760+t()*220,O=40+t()*60,se=60+t()*130,re=40+t()*60;Cn(R,ce,Math.cos(pe)*K,0,Math.sin(pe)*K,t()*.6,O,se,re)}R.instanceMatrix.needsUpdate=!0,n.add(R);let T=zo*2,q=ks(128,128,(ce,pe,K)=>{ce.fillStyle="#2e3136",ce.fillRect(0,0,pe,K),ce.fillStyle="#cfd3d8",ce.fillRect(2,0,5,K),ce.fillRect(pe-7,0,5,K),ce.fillStyle="#e8c33a";for(let O=0;O<K;O+=32)ce.fillRect(pe/2-3,O,6,16)});q.wrapS=q.wrapT=zi,q.repeat.set(1,T/14);let ue=new st(1,1);ue.rotateX(-Math.PI/2);let ae=new ne(ue,new _e({map:q,roughness:.9,metalness:.05,envMapIntensity:.35}));ae.scale.set(xu,1,T),ae.position.set(Hs,.05,0),ae.receiveShadow=!0,n.add(ae);let oe=Ap();oe.wrapS=oe.wrapT=zi,oe.repeat.set(1,(Hs-gu)/ci+2);let ze=Hs-gu+20,ye=new ne(ue,new _e({map:oe,roughness:.9,metalness:.05,envMapIntensity:.35}));ye.scale.set(ze,1,ci),ye.rotation.y=Math.PI/2,ye.position.set((gu+Hs)/2,.05,0),ye.receiveShadow=!0,n.add(ye);let Re=new ne(new st(xu,1.6).rotateX(-Math.PI/2),new _e({color:15922422,roughness:.7}));Re.position.set(Hs,.07,zo-8),n.add(Re);let He=new Pe(4,1.1,.7);He.translate(0,.55,0);let Xe=new _e({color:16777215,roughness:.6,metalness:.1,envMapIntensity:.4}),de=Math.floor(T/9)*2,Ke=new Lt(He,Xe,de);Ke.castShadow=!0;let je=new Ne,ke=0;for(let ce=-zo+4;ce<=zo-4&&ke<de;ce+=9)for(let pe of[-1,1])Cn(Ke,ke,Hs+pe*(xu/2+1.6),.05,ce,0,1,1,1),je.setHex(ke%2===0?15229982:15922422),Ke.setColorAt(ke,je),ke++;Ke.count=ke,Ke.instanceMatrix.needsUpdate=!0,Ke.instanceColor&&(Ke.instanceColor.needsUpdate=!0),n.add(Ke);let Be={x:g[3],z:120,heading:0},Le={startX:Hs,startZ:zo-8,dirX:0,dirZ:-1,length:T};function Ze(ce){E.emissiveIntensity=ce*1.4,mu&&(mu.emissiveIntensity=.25+ce*1.2),Z.emissiveIntensity=.35+ce*3,ee.opacity=ce*.85,De.color.setHex(ce>.5?923174:2767445)}function ht(ce,pe){let K=Math.round(pe.x/h)*h,O=Math.round(pe.z/h)*h;r.target.position.set(K,0,O),r.position.set(K+a,l,O+c),r.target.updateMatrixWorld()}return ht(0,Be),{colliders:i,buildings:P,spawn:Be,dragStrip:Le,update:ht,setGlow:Ze,sun:r,hemi:s,roadLines:g}}var wl=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0}update(e,t,i){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,f=0,p=h?.25:1;e.throttle>0?f=e.throttle*s.accel*c*p*(1-Math.max(0,l)/(s.topSpeed*c)*.72):e.throttle<0&&(f=l>1?e.throttle*s.accel*1.6:e.throttle*s.accel*.5),f-=l*(.028+(h?.06:0))+Math.sign(l)*.6,l+=f*t;let g=s.topSpeed*c,x=-s.topSpeed*.35;l=Math.max(x,Math.min(g,l)),Math.abs(l)<.15&&!e.throttle&&(l=0);let m=Math.abs(l),u=Math.min(1,m/8),d=this.steer*.55*s.handling*u*(1-Math.min(1,m/(s.topSpeed*1.4))*.45);m>.5&&(this.heading-=d*(l/m)*t*(m>1?Math.min(2.2,m*.12+.8):1)*2.2);let v=-Math.sin(this.heading),_=-Math.cos(this.heading),w=this.vel.x*v+this.vel.z*_,D=this.vel.x-v*w,M=this.vel.z-_*w;this.drifting=!!(e.handbrake&&m>6);let y=this.drifting?.983:Math.min(.995,.9+s.grip*.06),b=Math.pow(y,t*60);D*=b,M*=b;let E=w+(l-w)*Math.min(1,t*60);this.vel.x=v*E+D,this.vel.z=_*E+M;let S=this.pos.x+this.vel.x*t,N=this.pos.z+this.vel.z*t;if(i){let V=i(S,N,this.pos.x,this.pos.z);S=V.x,N=V.z,V.hitX&&(this.vel.x*=-.25),V.hitZ&&(this.vel.z*=-.25)}return this.pos.x=S,this.pos.z=N,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer}}};function Pp(n={}){let e=n.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1,aim:!1},i={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1,aim:!1},s=!1,r={x:0,y:0,id:null},o="drive",a=!1,l=!1,c=!1,h=!1,f=!1,p=!1,g=!1,x=[],m=A=>document.getElementById(A);function u(){t.steer=(i.right?1:0)-(i.left?1:0),t.throttle=i.gas?1:i.brake?-1:0,t.nitro=i.nitro,t.handbrake=i.handbrake;let A=(i.right?1:0)-(i.left?1:0),z=(i.gas?1:0)-(i.brake?1:0);t.moveX=r.id!==null?r.x:A,t.moveY=r.id!==null?r.y:z,t.run=i.run||i.nitro||r.id!==null&&Math.hypot(r.x,r.y)>.92,t.fire=i.fire,t.aim=i.aim||s||i.fire}function d(A,z){if(!A)return;let B=44,G=k=>{if(k.pointerId!==r.id)return;let Z=A.getBoundingClientRect(),I=k.clientX-(Z.left+Z.width/2),X=k.clientY-(Z.top+Z.height/2),ie=I,fe=X;e()&&(ie=X,fe=-I);let xe=Math.hypot(ie,fe),we=Math.min(xe,B);xe>0&&(ie=ie/xe*we,fe=fe/xe*we),z.style.transform=`translate(${ie}px, ${fe}px)`;let Te=.12,Se=ie/B,Oe=-fe/B;Math.hypot(Se,Oe)<Te&&(Se=0,Oe=0),r.x=Se,r.y=Oe,u()},W=k=>{if(k.preventDefault(),r.id===null){r.id=k.pointerId;try{A.setPointerCapture(k.pointerId)}catch{}G(k)}},L=k=>{k.pointerId===r.id&&(r.id=null,r.x=0,r.y=0,z.style.transform="translate(0px, 0px)",u())};A.addEventListener("pointerdown",W),A.addEventListener("pointermove",G),A.addEventListener("pointerup",L),A.addEventListener("pointercancel",L),x.push(()=>{A.removeEventListener("pointerdown",W),A.removeEventListener("pointermove",G),A.removeEventListener("pointerup",L),A.removeEventListener("pointercancel",L)})}function v(A,z){if(!A)return;let B=W=>{W.preventDefault(),W.stopPropagation(),z(),A.classList.add("pressed")},G=()=>A.classList.remove("pressed");A.addEventListener("pointerdown",B),A.addEventListener("pointerup",G),A.addEventListener("pointerleave",G),x.push(()=>{A.removeEventListener("pointerdown",B),A.removeEventListener("pointerup",G),A.removeEventListener("pointerleave",G)})}function _(A,z){if(!A)return;let B=0,G=k=>{k.preventDefault(),B++,z==="fire"&&!i.fire&&(h=!0),i[z]=!0,u(),A.classList.add("pressed")},W=()=>{B=Math.max(0,B-1),B===0&&(i[z]=!1,u(),A.classList.remove("pressed"))},L=k=>k.preventDefault();A.addEventListener("pointerdown",G),A.addEventListener("pointerup",W),A.addEventListener("pointercancel",W),A.addEventListener("pointerleave",W),A.addEventListener("contextmenu",L),x.push(()=>{A.removeEventListener("pointerdown",G),A.removeEventListener("pointerup",W),A.removeEventListener("pointercancel",W),A.removeEventListener("pointerleave",W),A.removeEventListener("contextmenu",L)})}function w(A){if(!A)return;let z=G=>{G.preventDefault(),a=!0,A.classList.add("pressed")},B=()=>A.classList.remove("pressed");A.addEventListener("pointerdown",z),A.addEventListener("pointerup",B),A.addEventListener("pointercancel",B),A.addEventListener("pointerleave",B),x.push(()=>{A.removeEventListener("pointerdown",z),A.removeEventListener("pointerup",B),A.removeEventListener("pointercancel",B),A.removeEventListener("pointerleave",B)})}let D={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function M(A){let z=A.target;if(z&&(z.tagName==="INPUT"||z.tagName==="TEXTAREA"))return;let B=A.key,G=D[B];if(G){i[G]=!0,u(),A.preventDefault();return}if(B===" "){if(A.preventDefault(),A.repeat)return;o==="drag"?a=!0:o==="foot"?(i.fire||(h=!0),i.fire=!0,u()):(i.handbrake=!0,u());return}if(B==="e"||B==="E"||B==="Enter"){A.repeat||(l=!0);return}if(B==="q"||B==="Q"){A.repeat||(c=!0);return}if((B==="Shift"||B==="f"||B==="F")&&(i.nitro=!0,u()),(B==="r"||B==="R")&&(i.aim=!0,u()),B==="g"||B==="G"){A.repeat||(f=!0);return}if(B==="b"||B==="B"){A.repeat||(p=!0);return}}function y(A){let z=A.key,B=D[z];if(B){i[B]=!1,u();return}if(z===" "){i.handbrake=!1,i.fire=!1,u();return}(z==="Shift"||z==="f"||z==="F")&&(i.nitro=!1,u()),(z==="r"||z==="R")&&(i.aim=!1,u())}function b(A){A.button===2&&(i.aim=!0,u())}function E(A){A.button===2&&(i.aim=!1,u())}function S(A){o=A==="drag"||A==="foot"?A:"drive";let z=(G,W)=>{let L=m(G);L&&(L.style.display=W?"":"none")};z("steer-zone",o==="drive"),z("pedal-zone",o!=="foot"),z("btn-shift",o==="drag"),z("joystick",o==="foot"),z("foot-zone",o==="foot");for(let G in i)i[G]=!1;s=!1;{let G=m("btn-aim");G&&G.classList.remove("on")}r.id=null,r.x=0,r.y=0;let B=m("joy-knob");B&&(B.style.transform="translate(0px, 0px)");for(let G of document.querySelectorAll("#touch-controls .pressed"))G.classList.remove("pressed");u()}function N(){if(g)return;g=!0,_(m("btn-left"),"left"),_(m("btn-right"),"right"),_(m("btn-gas"),"gas"),_(m("btn-brake"),"brake"),_(m("btn-nitro"),"nitro"),_(m("btn-handbrake"),"handbrake"),w(m("btn-shift")),_(m("btn-fire"),"fire"),_(m("btn-run"),"run"),d(m("joystick"),m("joy-knob")),v(m("btn-action"),()=>{l=!0}),v(m("btn-weapon"),()=>{c=!0}),v(m("btn-aim"),()=>{s=!s;let z=m("btn-aim");z&&z.classList.toggle("on",s),u()}),v(m("btn-gear-up"),()=>{f=!0}),v(m("btn-gear-down"),()=>{p=!0}),window.addEventListener("mousedown",b),window.addEventListener("mouseup",E),x.push(()=>{window.removeEventListener("mousedown",b),window.removeEventListener("mouseup",E)}),window.addEventListener("keydown",M),window.addEventListener("keyup",y),x.push(()=>{window.removeEventListener("keydown",M),window.removeEventListener("keyup",y)});let A=m("touch-controls");A&&(A.style.display="ontouchstart"in window?"":"none"),S(o)}function V(){for(let A of x)A();x.length=0;for(let A in i)i[A]=!1;a=l=c=h=!1,r.id=null,r.x=r.y=0,u(),g=!1}function U(){let A=a;return a=!1,A}let P=A=>()=>{let z;switch(A){case"action":return z=l,l=!1,z;case"cycle":return z=c,c=!1,z;case"fire":return z=h,h=!1,z;case"gup":return z=f,f=!1,z;case"gdown":return z=p,p=!1,z}};return{input:t,consumeShift:U,consumeAction:P("action"),consumeCycle:P("cycle"),consumeFireEdge:P("fire"),consumeGearUp:P("gup"),consumeGearDown:P("gdown"),setMode:S,attach:N,detach:V,get mode(){return o}}}var gE=[.3,.47,.64,.81,1],xE=[1.9,1.45,1.15,.95,.8],Tl=.8,Ip=.97,_E=.8,vE=45,yE=2.2,ME=[16765286,448160,10182117,15817653,48121,16704576,15681391],vn=n=>document.getElementById(n);function Dp(n,e){return n+Math.random()*(e-n)}function Lp(n){return n[Math.random()*n.length|0]}function EE(n){let e=402/(.42*n.topSpeed+.35*n.accel);return Math.min(17,Math.max(8.5,e))*Dp(.85,1.15)}function SE(n){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,stats:n}}function bE(n,e,t){let i=n.stats.topSpeed,s=gE[n.gear]*i,r=1-Math.min(1,n.speed/(s*1.02)),o=e*n.stats.accel*xE[n.gear]*Math.max(0,r);o*=n.bogMul,o-=n.speed*.028+Math.sign(n.speed)*.6,n.speed=Math.max(0,n.speed+o*t),n.dist+=n.speed*t,n.rpm=Math.min(1.06,n.speed/s),n.bogMul+=(1-n.bogMul)*Math.min(1,t*2.5)}function wE(n){return n>=Tl&&n<=Ip?"perfect":n<Tl?"early":"late"}function TE(n){if(n.gear>=4)return null;let e=wE(n.rpm);return n.gear++,e==="perfect"?n.speed*=1.015:(n.speed*=.93,n.bogMul=.75),n.limiterT=0,e}function AE(n){let e=EE(n),t=1.1,i=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/i,reactDelay:Dp(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:n}}function RE(n,e,t){if(!n.launched)return;let i=e-n.launchT;i<0||(n.speed=n.top*(1-Math.exp(-n.k*i)),n.dist+=n.speed*t)}function CE({falseStart:n,pET:e,aET:t,pDist:i,aDist:s}){return n?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:i>=s}function PE(n,e,t){if(!n)return 100;let i=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(i*10))}function LE(n,e){return n?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function Up(n){let e=vn("drag-ui"),t=vn("drag-msg"),i=vn("drag-result"),s=vn("rpm-bar"),r=vn("rpm-shiftzone"),o=vn("btn-shift"),a={s1:vn("bulb-s1"),s2:vn("bulb-s2"),a1:vn("bulb-a1"),a2:vn("bulb-a2"),a3:vn("bulb-a3"),g:vn("bulb-g"),r:vn("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let U in a)a[U].classList.remove("lit")}function h(U){a[U].classList.add("lit")}function f(U,P){t.textContent=U,l.msgTimer=P||0}function p(U,P){try{n.audio.beep(U,P)}catch{}}function g(){let U=n.getPlayer();return U&&U.stats?U.stats:n.effectiveStats(U.def,U.upgrades)}function x(U,P){let A=n.city.dragStrip;U.position.set(A.startX+l.perpX*P,0,A.startZ+l.perpZ*P),U.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function m(U,P){let A=n.city.dragStrip;U.position.set(A.startX+l.dirX*P.dist+l.perpX*P.lateral,0,A.startZ+l.dirZ*P.dist+l.perpZ*P.lateral)}function u(U,P,A){let z=U.userData.wheels;if(z)for(let B of z){let G=B.userData.spin||[];for(let W of G)W.rotation.x+=P*A*2.2}}function d(U){return SE(U)}function v(U,P,A){bE(U,P,A)}function _(U){let P=TE(U);P&&(P==="perfect"?(f("PERFECT SHIFT!",1),p(1200,.08)):(f(P==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),p(220,.15)))}function w(U){return AE(U)}function D(U,P){RE(U,l.greenT,P)}function M(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),i.classList.add("hidden"),i.innerHTML="",f("STAGE!"),s.style.width="15%",r.style.left=Tl*100+"%",r.style.width=(Ip-Tl)*100+"%",o&&o.classList.remove("hidden")}function y(){l.phase="green",l.t=0,l.greenT=0,h("g"),f("GO!"),p(880,.4),l.phase="racing"}function b(){l.phase="red",c(),h("r"),f("FALSE START!"),p(180,.6),E("FALSE START \u2014 you jumped the green.")}function E(U){l.phase="done",l.finished=!0;let P=l.player,A=l.ai,z=!!(U&&U.indexOf("FALSE START")===0),B=CE({falseStart:z,pET:P.et,aET:A.finishET,pDist:P.dist,aDist:A.dist}),G=P.et,W=A.finishET,L=P.reaction!=null?P.reaction.toFixed(3)+"s":"\u2014",k=(P.trap*yE).toFixed(1),Z=PE(B,G,W),I=LE(B,z);n.addCash(Z),i.innerHTML="<h2>"+I+"</h2>"+(U?"<p>"+U+"</p>":"")+"<p>ET: "+(G==null?"DNF":G.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(W==null?"DNF":W.toFixed(3)+"s")+"</p><p>Trap speed: "+k+" MPH &nbsp;\xB7&nbsp; Reaction: "+L+"</p><p>+$"+Z+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',i.classList.remove("hidden"),vn("drag-rematch").onclick=()=>{S()},vn("drag-back").onclick=()=>{N()};try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}}function S(){l.active&&N();let P=n.getPlayer().group;l.origPos=P.position.clone(),l.origRotY=P.rotation.y;let A=n.city.dragStrip,z=Math.hypot(A.dirX,A.dirZ)||1;l.dirX=A.dirX/z,l.dirZ=A.dirZ/z,l.perpX=-l.dirZ,l.perpZ=l.dirX,x(P,2),P.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=d(g());let B=Lp(n.CAR_DEFS),G=n.buildCar(Object.assign({},B,{color:Lp(ME)}));n.scene.add(G),x(G,-2),l.aiGroup=G,l.ai=w(n.effectiveStats(B)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),n.controls.setMode("drag");let W=n.camera;W.position.set(A.startX-l.dirX*12+l.perpX*12,5,A.startZ-l.dirZ*12+l.perpZ*12),W.lookAt(A.startX+l.dirX*8,1,A.startZ+l.dirZ*8),M()}function N(){l.aiGroup&&(n.scene.remove(l.aiGroup),l.aiGroup=null);let U=n.getPlayer();U&&U.group&&l.origPos&&(U.group.position.copy(l.origPos),U.group.rotation.y=l.origRotY),e.classList.add("hidden"),i.classList.add("hidden"),o&&o.classList.add("hidden");try{n.controls.setMode("drive")}catch{}try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function V(U){if(!l.active)return;U=Math.min(U,.05);let P=n.controls.input||{},A=Math.max(0,Math.min(1,P.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&A>.5){b();return}if(l.msgTimer>0&&(l.msgTimer-=U,l.msgTimer<=0&&l.phase==="racing"&&f("GO!")),l.phase==="stage")l.t+=U,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,f("READY\u2026"));else if(l.phase==="tree"){l.t+=U;let B=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<B;)l.ambersLit++,h("a"+l.ambersLit),p(440,.15);l.t>=1.5&&y()}else if(l.phase==="racing"){l.greenT+=U;let B=l.player,G=l.ai;!B.reacted&&A>.5&&(B.reacted=!0,B.reaction=l.greenT),!G.launched&&l.greenT>=G.reactDelay&&(G.launched=!0,G.launchT=l.greenT),v(B,A,U),n.controls.consumeShift&&n.controls.consumeShift()&&_(B),B.rpm>=1&&A>.3?(B.limiterT+=U,B.limiterT>=_E&&(B.speed*=.9,B.limiterT=0,f("LIMITER!",.8),p(160,.2))):B.limiterT=Math.max(0,B.limiterT-U*2),D(G,U),B.et==null&&B.dist>=402&&(B.et=l.greenT,B.trap=B.speed),G.finishET==null&&G.dist>=402&&(G.finishET=l.greenT,G.trap=G.speed);let W=l.greenT>=vE;if(B.et!=null&&G.finishET!=null||W||B.et!=null&&l.greenT>B.et+8||G.finishET!=null&&l.greenT>G.finishET+8){E(W&&B.et==null&&G.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,B.rpm)*100+"%";try{n.audio.engine(B.rpm,A),n.audio.skid(A>.8&&B.speed<8&&B.gear===0)}catch{}}let z=n.getPlayer().group;if(m(z,l.player),l.aiGroup&&m(l.aiGroup,l.ai),u(z,l.player.speed,U),l.aiGroup&&u(l.aiGroup,l.ai.speed,U),l.phase==="racing"||l.phase==="done"){let B=n.camera,G=z.position.x,W=z.position.z,L=G-l.dirX*11+l.perpX*7,k=W-l.dirZ*11+l.perpZ*7;B.position.x+=(L-B.position.x)*Math.min(1,U*4),B.position.y+=(4.5-B.position.y)*Math.min(1,U*4),B.position.z+=(k-B.position.z)*Math.min(1,U*4),B.lookAt(G+l.dirX*12,1.2,W+l.dirZ*12)}}return vn("drag-exit").onclick=()=>N(),{enter:S,exit:N,update:V,get active(){return l.active}}}function Np(){let n=null,e=null,t=null,i=null,s=null,r=null,o=null,a=null,l=!1,c=!1;function h(){if(n)return!0;let f=window.AudioContext||window.webkitAudioContext;if(!f)return!1;n=new f,e=n.createGain(),e.gain.value=.5,e.connect(n.destination),t=n.createOscillator(),t.type="sawtooth",t.frequency.value=70,i=n.createOscillator(),i.type="square",i.frequency.value=38,s=n.createBiquadFilter(),s.type="lowpass",s.frequency.value=400,s.Q.value=2,r=n.createGain(),r.gain.value=0,t.connect(s),i.connect(s),s.connect(r),r.connect(e),t.start(),i.start();let p=n.sampleRate,g=n.createBuffer(1,p,n.sampleRate),x=g.getChannelData(0);for(let d=0;d<p;d++)x[d]=Math.random()*2-1;a=g;let m=n.createBufferSource();m.buffer=g,m.loop=!0;let u=n.createBiquadFilter();return u.type="bandpass",u.frequency.value=900,u.Q.value=1.1,o=n.createGain(),o.gain.value=0,m.connect(u),u.connect(o),o.connect(e),m.start(),!0}return{unlock(){c=!0,h()&&(n.state==="suspended"&&n.resume(),l=!0)},engine(f,p){if(!n||!l)return;let g=Math.max(0,Math.min(1,f)),x=Math.max(0,Math.min(1,p)),m=n.currentTime,u=60+g*220;t.frequency.setTargetAtTime(u,m,.03),i.frequency.setTargetAtTime(u*.5+3,m,.03),s.frequency.setTargetAtTime(300+g*900,m,.05),r.gain.setTargetAtTime(x*.11+g*.04,m,.06)},skid(f){!n||!l||o.gain.setTargetAtTime(f?.12:0,n.currentTime,f?.05:.12)},beep(f=660,p=.08){if(!c||!h())return;n.state==="suspended"&&n.resume();let g=n.currentTime,x=n.createOscillator();x.type="sine",x.frequency.value=f;let m=n.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.exponentialRampToValueAtTime(.25,g+.012),m.gain.exponentialRampToValueAtTime(1e-4,g+p),x.connect(m),m.connect(e),x.start(g),x.stop(g+p+.03)},shot(f="pistol"){if(!c||!h())return;let p=n.currentTime,g={pistol:[2600,.16,.5],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],rifle:[2200,.2,.55]}[f]||[2600,.16,.5],x=n.createBufferSource();x.buffer=a;let m=n.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(g[0],p),m.frequency.exponentialRampToValueAtTime(300,p+g[1]);let u=n.createGain();u.gain.setValueAtTime(g[2],p),u.gain.exponentialRampToValueAtTime(1e-4,p+g[1]),x.connect(m),m.connect(u),u.connect(e),x.start(p,Math.random()*.5),x.stop(p+g[1]+.02);let d=n.createOscillator();d.type="sine",d.frequency.setValueAtTime(140,p),d.frequency.exponentialRampToValueAtTime(40,p+.12);let v=n.createGain();v.gain.setValueAtTime(g[2]*.8,p),v.gain.exponentialRampToValueAtTime(1e-4,p+.14),d.connect(v),v.connect(e),d.start(p),d.stop(p+.16)},click(){this.beep(1800,.03)},shutdown(){if(n)try{n.close()}catch{}n=null,e=null,l=!1,t=i=s=r=o=a=null}}}var Op="citydriver_save_v1";var Al=5,IE=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295];var Fp=["engine","turbo","tires","suspension","nitro"],DE={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},UE={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},Oo=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function _u(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:Oo()},paint:{sport:14100029},wheels:{sport:0}}}function NE(n){let e=Object.assign(_u(),n||{}),t=new Set(Hi.map(i=>i.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(i=>t.has(i)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let i of e.owned){if(!e.upgrades[i]||typeof e.upgrades[i]!="object")e.upgrades[i]=Oo();else for(let s of Fp)e.upgrades[i][s]=Math.max(0,Math.min(Al,e.upgrades[i][s]|0));typeof e.paint[i]!="number"&&(e.paint[i]=14100029),e.wheels[i]=Math.max(0,e.wheels[i]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function Bp(){try{let n=localStorage.getItem(Op);return n?NE(JSON.parse(n)):_u()}catch{return _u()}}function un(n){try{localStorage.setItem(Op,JSON.stringify(n))}catch{}}function zp(n,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+n.price/2e4))}var zE=n=>"#"+n.toString(16).padStart(6,"0");function Hp(n){let e=n.save,t=m=>document.getElementById(m),i=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let m of Hi)for(let u in o)o[u]=Math.max(o[u],m[u]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(m,u,d)=>{let v=Math.max(5,Math.round(u/d*100));return`<div class="stat-row"><span>${m}</span><div class="sbar"><i style="width:${v}%"></i></div></div>`};function c(){i.innerHTML=Hi.map(m=>{let u=e.owned.includes(m.id),d=e.currentCar===m.id,v;return d?v='<button class="buy-btn" disabled>SELECTED</button>':u?v=`<button class="buy-btn" data-act="select" data-id="${m.id}">SELECT</button>`:v=`<button class="buy-btn" data-act="buy" data-id="${m.id}"${e.cash<m.price?" disabled":""}>$${m.price.toLocaleString()}</button>`,`<div class="car-card${d?" selected":""}"><div class="cinfo"><b>${m.name}</b><small>${m.desc}</small><div class="stat-bars">${l("SPD",m.topSpeed,o.topSpeed)}${l("ACC",m.accel,o.accel)}${l("HDL",m.handling,o.handling)}${l("GRP",m.grip,o.grip)}</div></div>${v}</div>`}).join("")}function h(){let m=n.getDef(e.currentCar);if(!m){s.innerHTML="";return}let u=e.upgrades[m.id]||(e.upgrades[m.id]=Oo());s.innerHTML=`<div class="upg-car-name">${m.name} \u2014 performance</div>`+Fp.map(d=>{let v=u[d]||0,_=v>=Al,w=_?0:zp(m,d,v),D="";for(let y=0;y<Al;y++)D+=`<div class="pip${y<v?" on":""}"></div>`;let M=_?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${d}"${e.cash<w?" disabled":""}>$${w.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${DE[d]}</b><small>${UE[d]}</small><div class="pips">${D}</div></div>${M}</div>`}).join("")}function f(){let m=e.currentCar,u=e.paint[m],d=IE.map(v=>`<button class="swatch${v===u?" sel":""}" data-hex="${v}" style="background:${zE(v)}" aria-label="paint"></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Quick paint \u2014 FREE</b><div class="swatch-row">${d}</div></div><button class="mbtn primary" data-act="editor" style="width:100%">\u{1F3A8} OPEN SKIN EDITOR \u2014 all free</button><p class="store-tip">Any color, rims, stripes, underglow, window tint, and your driver's look.</p>`}function p(){a(),c(),h(),f()}i.addEventListener("click",m=>{let u=m.target.closest("button[data-act]");if(!u||u.disabled)return;let d=n.getDef(u.dataset.id);if(d)if(u.dataset.act==="buy"){if(e.owned.includes(d.id)||e.cash<d.price)return;e.cash-=d.price,e.owned.push(d.id),e.upgrades[d.id]||(e.upgrades[d.id]=Oo()),typeof e.paint[d.id]!="number"&&(e.paint[d.id]=d.color),e.wheels[d.id]===void 0&&(e.wheels[d.id]=0),e.currentCar=d.id,un(e),n.onSelectCar(d.id),p()}else{if(e.currentCar===d.id)return;e.currentCar=d.id,un(e),n.onSelectCar(d.id),p()}}),s.addEventListener("click",m=>{let u=m.target.closest("button[data-key]");if(!u||u.disabled)return;let d=n.getDef(e.currentCar);if(!d)return;let v=u.dataset.key,_=e.upgrades[d.id]||(e.upgrades[d.id]=Oo()),w=_[v]||0,D=zp(d,v,w);w>=Al||e.cash<D||(e.cash-=D,_[v]=w+1,un(e),n.refreshScene(),p())}),r.addEventListener("click",m=>{let u=e.currentCar;if(m.target.closest('button[data-act="editor"]')){n.openEditor&&n.openEditor();return}let d=m.target.closest("button.swatch");if(d){let v=parseInt(d.dataset.hex,10);e.paint[u]!==v&&(e.paint[u]=v,un(e),n.onPaint(v),p())}});let g=[...document.querySelectorAll("#garage .gtab")],x={cars:i,upgrades:s,style:r};return g.forEach(m=>m.addEventListener("click",()=>{g.forEach(u=>u.classList.toggle("active",u===m));for(let u in x)x[u].classList.toggle("hidden",u!==m.dataset.tab)})),p(),{refresh:p}}var kp=["low","medium","high"];function vu(n){switch(n){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var Rl=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,vu(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};It();var Cl={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.65,stars:1}},yu=["day","sunset","night"],OE=`
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
}`;function Gp(){let n=new Vt(1500,24,16),e={uTop:{value:new Ne(3108822)},uHorizon:{value:new Ne(13625079)},uSunDir:{value:new H(0,1,0)},uSunColor:{value:new Ne(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new jt({vertexShader:OE,fragmentShader:FE,uniforms:e,side:on,depthWrite:!1,fog:!1}),i=new ne(n,t);return i.frustumCulled=!1,i.renderOrder=-10,{mesh:i,uniforms:e}}function BE(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new H(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}function Vp(n,e){let t=Cl[e]||Cl.day,{uniforms:i,sun:s,hemi:r,scene:o,renderer:a}=n;i.uTop.value.setHex(t.top),i.uHorizon.value.setHex(t.horizon),i.uSunColor.value.setHex(t.sunColor),i.uSunI.value=t.sunI,i.uStars.value=t.stars;let l=BE(t.elev,t.azim);return i.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),n.sunElev=t.elev,n.sunAzim=t.azim,n.sunDir=l,t}It();function HE(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new hn(n);return i.colorSpace=gt,i}var Mu=null;function kE(){return Mu||(Mu=HE()),Mu}var Kn=class{constructor(e,t,{color:i=12303291,opacity:s=.5,blending:r=es,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new st(1,1),this.mat=new Ns({map:kE(),color:i,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new Ur(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new H}emit(e,t,i,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,i);let f=h.userData;f.life=a,f.maxLife=a,f.vx=s,f.vy=r,f.vz=o,f.grow=c,f.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let i of this.items){if(!i.visible)continue;let s=i.userData;if(s.life-=e,s.life<=0){i.visible=!1;continue}i.position.x+=s.vx*e,i.position.y+=s.vy*e,i.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;i.scale.set(o,o,1),i.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},Pl=class{constructor(e,t=400){this.max=t,this.i=0;let i=new st(.32,1.4);i.rotateX(-Math.PI/2),this.mesh=new Lt(i,new lt({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new ut;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new ut,this._q=new In,this._p=new H,this._s=new H(1,1,1),this._up=new H(0,1,0)}add(e,t,i){this._q.setFromAxisAngle(this._up,i),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function Fo(){return{driftT:0,driftAcc:0}}function Wp(n,e,t,i){if(e&&Math.abs(t)>=8)return n.driftT+=i,n.driftAcc+=i*15,0;let s=0;return n.driftT>=1&&(s=Math.round(n.driftAcc)),n.driftT=0,n.driftAcc=0,s}var Xp=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function qp(n){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;e=Xp()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),n&&n(t.w,t.h)}async function s(){if(!Xp())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:t,goLandscape:s,refresh:i,get rotated(){return e}}}var ls=[14100029,16735802,16747546,16757504,16765503,13038642,4906624,1483594,1013358,1622208,3718648,2060267,1981066,8141549,11032055,15557798,16723555,7999504,9067034,13211182,16317180,13358561,7041664,1120295],Ll=[16109749,15250575,13011554,11037509,8014380,4860954],Il=[1118481,2759184,5913118,10119738,14266986,15263976,14100029,3718648],Bo=["none","center","dual","side"],Ho=["clear","dark","limo"],cs=["none","cap","beanie","cowboy","crown","helmet"],Dl={none:"No hat",cap:"Snapback",beanie:"Beanie",cowboy:"Stetson",crown:"Crown",helmet:"Helmet"},ki=n=>Number.isInteger(n)&&n>=0&&n<=16777215,Eu=(n,e,t)=>e.includes(n)?n:t;function Yp(){return{rims:12172998,stripes:"none",stripe:16317180,glow:null,tint:"dark"}}function GE(){return{shirt:2845872,pants:2963272,skin:13011554,hair:2759184,hat:"none",hatColor:2237739}}function Zp(n){let e=Yp(),t=n&&typeof n=="object"?n:{};return{rims:ki(t.rims)?t.rims:e.rims,stripes:Eu(t.stripes,Bo,e.stripes),stripe:ki(t.stripe)?t.stripe:e.stripe,glow:ki(t.glow)?t.glow:null,tint:Eu(t.tint,Ho,e.tint)}}function Ul(n){let e=GE(),t=n&&typeof n=="object"?n:{};return{shirt:ki(t.shirt)?t.shirt:e.shirt,pants:ki(t.pants)?t.pants:e.pants,skin:ki(t.skin)?t.skin:e.skin,hair:ki(t.hair)?t.hair:e.hair,hat:Eu(t.hat,cs,e.hat),hatColor:ki(t.hatColor)?t.hatColor:e.hatColor}}function Su(n){return String(n??"").replace(/[^\w .\-'!?]/g,"").trim().slice(0,16)}function $p(n){(!n.carSkin||typeof n.carSkin!="object")&&(n.carSkin={});for(let t of Object.keys(n.carSkin))n.carSkin[t]=Zp(n.carSkin[t]);n.outfit=Ul(n.outfit),n.hats=cs.slice();let e=Su(n.name);return n.name=e||"Driver"+Math.floor(1e3+Math.random()*9e3),n}function Gs(n,e){return n.carSkin[e]||(n.carSkin[e]=Yp()),n.carSkin[e]}function Jp(n,e){let t=Gs(n,e),i=n.outfit;return{p:n.paint[e]|0,r:t.rims,s:Bo.indexOf(t.stripes),sc:t.stripe,g:t.glow==null?-1:t.glow,t:Ho.indexOf(t.tint),o:[i.shirt,i.pants,i.skin,i.hair,cs.indexOf(i.hat),i.hatColor]}}function Kp(n){n=n||{};let e=Array.isArray(n.o)?n.o:[];return{paint:ki(n.p)?n.p:null,carSkin:Zp({rims:n.r,stripes:Bo[n.s],stripe:n.sc,glow:n.g,tint:Ho[n.t]}),outfit:Ul({shirt:e[0],pants:e[1],skin:e[2],hair:e[3],hat:cs[e[4]],hatColor:e[5]})}}var Nl=n=>"#"+(n|0).toString(16).padStart(6,"0");var zl=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,dmg:22,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"glock",name:"Glock 19",price:1800,rate:.16,auto:!1,pellets:1,spread:.014,range:85,dmg:20,ammoBox:34,ammoPrice:70,start:34,desc:"Fast-firing 9mm. Tap tap tap."},{id:"deagle",name:"Desert Eagle",price:4200,rate:.55,auto:!1,pellets:1,spread:.01,range:110,dmg:55,ammoBox:14,ammoPrice:110,start:14,desc:"Hand cannon. Huge damage."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,dmg:14,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,dmg:12,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"ak",name:"AK-47",price:7500,rate:.11,auto:!0,pellets:1,spread:.022,range:120,dmg:26,ammoBox:60,ammoPrice:180,start:60,desc:"Hard-hitting full auto."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,dmg:24,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."},{id:"sniper",name:"Longshot .50",price:15e3,rate:1.3,auto:!1,pellets:1,spread:.001,range:260,dmg:120,ammoBox:10,ammoPrice:250,start:10,desc:"One shot, one drop. Huge range."},{id:"minigun",name:"Shredder Minigun",price:4e4,rate:.04,auto:!0,pellets:1,spread:.05,range:100,dmg:14,ammoBox:400,ammoPrice:600,start:400,desc:"Melts everything. Eats ammo."}],jp=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],ko=0,Ol=cs.map(n=>({id:n,name:Dl[n],price:0})),bu=15,Gi=n=>zl.find(e=>e.id===n)||null;function Qp(n){let e=new Set(zl.map(t=>t.id));Array.isArray(n.weapons)||(n.weapons=[]),n.weapons=n.weapons.filter((t,i,s)=>e.has(t)&&s.indexOf(t)===i),(!n.ammo||typeof n.ammo!="object")&&(n.ammo={});for(let t of Object.keys(n.ammo))e.has(t)||delete n.ammo[t];for(let t of n.weapons)n.ammo[t]=Math.max(0,n.ammo[t]|0);return n.weapons.includes(n.equipped)||(n.equipped=n.weapons[0]||null),n.outfit=Ul(n.outfit),n.hats=Ol.map(t=>t.id),n}var jn=n=>({ok:!1,msg:n}),Vs=n=>({ok:!0,msg:n});function em(n,e){let t=Gi(e);return t?n.weapons.includes(e)?jn("Already owned"):n.cash<t.price?jn("Not enough cash"):(n.cash-=t.price,n.weapons.push(e),n.ammo[e]=(n.ammo[e]|0)+t.start,n.equipped=e,Vs(t.name+" bought")):jn("Unknown weapon")}function tm(n,e){let t=Gi(e);return t?n.weapons.includes(e)?n.cash<t.ammoPrice?jn("Not enough cash"):(n.cash-=t.ammoPrice,n.ammo[e]=(n.ammo[e]|0)+t.ammoBox,Vs("+"+t.ammoBox+" rounds")):jn("Buy the gun first"):jn("Unknown weapon")}function nm(n,e){return e===null?(n.equipped=null,Vs("Holstered")):n.weapons.includes(e)?(n.equipped=e,Vs(Gi(e).name+" equipped")):jn("Not owned")}function wu(n){let e=[...n.weapons,null];if(e.length===1)return null;let t=e.indexOf(n.equipped);return n.equipped=e[(t+1)%e.length],n.equipped}function im(n,e){return!Number.isInteger(e)||e<0||e>16777215?jn("Unknown color"):n.outfit.shirt===e?jn("Already wearing it"):n.cash<ko?jn("Not enough cash"):(n.cash-=ko,n.outfit.shirt=e,Vs("New shirt"))}function sm(n,e){let t=Ol.find(i=>i.id===e);return t?n.hats.includes(e)?(n.outfit.hat=e,Vs(t.name+" on")):n.cash<t.price?jn("Not enough cash"):(n.cash-=t.price,n.hats.push(e),n.outfit.hat=e,Vs(t.name+" bought")):jn("Unknown hat")}var Fl=class{constructor(){this.reset(0,0,0)}reset(e,t,i){this.pos={x:e,z:t},this.heading=i,this.speed=0,this.phase=0}update(e,t,i){t=Math.min(t,.05);let s=rm(e.moveX||0),r=rm(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,f=this.pos.z+c*this.speed*t;if(i){let p=i(h,f,.45);h=p.x,f=p.z}return this.pos.x=h,this.pos.z=f,this.phase+=this.speed*t*2.1,this}};function rm(n){return n<-1?-1:n>1?1:n}function Hr(n,e,t,i){let s=n-t,r=e-i;return Math.sqrt(s*s+r*r)}function Tu(n,e,t){let i=Math.cos(t),s=-Math.sin(t);return{x:n-i*1.9,z:e-s*1.9,heading:t}}function om(n,e,t,i,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(n<s.minX||n>s.maxX)return 1/0}else{let l=(s.minX-n)/t,c=(s.maxX-n)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(i)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/i,c=(s.maxZ-e)/i;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function Au(n,e,t,i,s,r,o,a){let l=n-s,c=e-r,h=l*t+c*i,f=l*l+c*c-o*o,p=h*h-f;if(p<0)return 1/0;let g=Math.sqrt(p),x=-h-g;return x<0&&(x=-h+g),x>=0&&x<=a?x:1/0}It();var VE=()=>new _e({color:13011554,roughness:.75}),WE=()=>new _e({color:2963272,roughness:.85}),XE=()=>new _e({color:1118481,roughness:.6}),qE=()=>new _e({color:2759184,roughness:.9}),YE=()=>new _e({color:1908515,metalness:.7,roughness:.35});function ft(n,e,t,i,s=0){let r=new Pe(n,e,t);r.translate(0,s,0);let o=new ne(r,i);return o.castShadow=!0,o}function ZE(n){let e=new rt,t=YE(),i=new _e({color:7031342,roughness:.8});if(n==="pistol")e.add(ft(.06,.08,.24,t,.05).translateZ(-.08)),e.add(ft(.05,.12,.06,t,-.02));else if(n==="shotgun")e.add(ft(.07,.07,.75,t,.05).translateZ(-.28)),e.add(ft(.08,.09,.22,i,0).translateZ(-.38)),e.add(ft(.07,.12,.3,i,0).translateZ(.18));else if(n==="smg")e.add(ft(.07,.11,.42,t,.05).translateZ(-.12)),e.add(ft(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(ft(.04,.04,.12,t,.07).translateZ(-.38));else if(n==="glock"||n==="deagle"){let s=n==="deagle";e.add(ft(s?.07:.06,s?.09:.075,s?.3:.22,t,.05).translateZ(-.08)),e.add(ft(.05,.13,.065,n==="deagle"?i:t,-.03))}else if(n==="sniper")e.add(ft(.06,.1,.95,t,.05).translateZ(-.3)),e.add(ft(.045,.045,.32,t,.14).translateZ(-.12)),e.add(ft(.06,.13,.3,i,0).translateZ(.3));else if(n==="minigun"){for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.add(ft(.03,.03,.8,t,.05+Math.sin(r)*.06).translateX(Math.cos(r)*.06).translateZ(-.35))}e.add(ft(.2,.2,.3,t,.05).translateZ(.05))}else if(n==="ak"){e.add(ft(.07,.11,.72,t,.05).translateZ(-.22));let s=ft(.06,.2,.08,t,-.1).translateZ(-.18);s.rotation.x=.35,e.add(s),e.add(ft(.06,.12,.28,i,.02).translateZ(.26)),e.add(ft(.07,.06,.24,i,0).translateZ(-.38))}else e.add(ft(.07,.11,.7,t,.05).translateZ(-.22)),e.add(ft(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(ft(.06,.13,.26,t,.02).translateZ(.24)),e.add(ft(.05,.05,.2,t,.14).translateZ(-.15));return e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function $E(n,e){if(n==="crown"){let t=new rt,i=new _e({color:16765503,metalness:1,roughness:.25,emissive:3811840}),s=new ne(new vt(.16,.16,.09,16,1,!0),i);s.material.side=St,s.position.y=.02,t.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new ne(new zr(.035,.09,4),i);a.position.set(Math.cos(o)*.155,.1,Math.sin(o)*.155),t.add(a);let l=new ne(new Vt(.018,6,6),new _e({color:e,emissive:e,emissiveIntensity:.6}));l.position.set(Math.cos(o+.5)*.162,.02,Math.sin(o+.5)*.162),t.add(l)}return t}if(n==="helmet"){let t=new rt,i=new os({color:e,metalness:.4,roughness:.25,clearcoat:1}),s=new ne(new Vt(.2,16,12,0,Math.PI*2,0,Math.PI/1.7),i);s.position.y=-.06,t.add(s);let r=new ne(new Vt(.205,16,8,Math.PI*1.2,Math.PI*.6,Math.PI*.35,Math.PI*.25),new _e({color:724762,metalness:.9,roughness:.1}));return r.position.y=-.06,t.add(r),t}if(n==="cap"){let t=new rt,i=new _e({color:e,roughness:.7}),s=new ne(new Vt(.155,14,8,0,Math.PI*2,0,Math.PI/2),i);t.add(s);let r=ft(.24,.02,.14,i);return r.position.set(0,.01,-.15),t.add(r),t}if(n==="beanie"){let t=new _e({color:e,roughness:.95});return new ne(new Vt(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(n==="cowboy"){let t=new rt,i=new _e({color:e,roughness:.85}),s=new ne(new vt(.3,.3,.02,20),i),r=new ne(new vt(.12,.15,.17,14),i);return r.position.y=.09,t.add(s,r),t}return null}function kr(n){let e=new rt,t=VE(),i=WE(),s=XE(),r=qE(),o=new _e({color:n.shirt,roughness:.8}),a=[],l=[];for(let w of[-1,1]){let D=new rt;D.position.set(w*.12,.92,0),D.add(ft(.17,.84,.2,i,-.42));let M=ft(.17,.09,.3,s,-.88);M.position.z=-.04,D.add(M),e.add(D),a.push(D);let y=new rt;y.position.set(w*.33,1.5,0),y.add(ft(.13,.36,.15,o,-.17)),y.add(ft(.11,.3,.12,t,-.5));let b=ft(.1,.1,.1,t,-.69);y.add(b),e.add(y),l.push(y)}let c=ft(.52,.62,.27,o,1.23);e.add(c);let h=ft(.53,.06,.28,s,.93);e.add(h);let f=ft(.12,.08,.12,t,1.57);e.add(f);let p=new ne(new Vt(.15,16,12),t);p.position.y=1.74,p.scale.set(1,1.12,1),p.castShadow=!0,e.add(p);let g=new ne(new Vt(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),r);g.position.y=1.76,e.add(g);let x=new rt,m=new ne(new Pe(.3,.62,.1).translate(0,-.31,0),r);m.position.set(0,1.84,.13),m.rotation.x=.12,m.castShadow=!0;let u=new ne(new Pe(.05,.36,.14).translate(0,-.18,0),r);u.position.set(-.15,1.82,.02);let d=u.clone();d.position.x=.15,x.add(m,u,d),x.visible=!1,e.add(x);let v=new rt;v.position.y=1.8,e.add(v);let _=new rt;return _.position.y=-.69,l[1].add(_),e.userData={legs:a,arms:l,shirt:o,skin:t,pants:i,hair:r,longHair:x,hatSlot:v,gunSlot:_,gunId:null,hatId:null,hatColor:null,recoil:0},hi(e,n),e}function hi(n,e){let t=n.userData;t.shirt.color.setHex(e.shirt),e.pants!=null&&t.pants.color.setHex(e.pants),e.skin!=null&&t.skin.color.setHex(e.skin),e.hair!=null&&t.hair.color.setHex(e.hair);let i=e.hatColor!=null?e.hatColor:e.shirt;if(t.hatId!==e.hat||t.hatColor!==i){t.hatSlot.clear();let s=$E(e.hat,i);s&&t.hatSlot.add(s),t.hatId=e.hat,t.hatColor=i}t.hair.visible=e.hat!=="helmet",t.longHair.visible=!!e.hairLong&&e.hat!=="helmet"}function Go(n,e){let t=n.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let i=ZE(e);i.rotation.x=-Math.PI/2,t.gunSlot.add(i)}t.gunId=e}}function hs(n,e,t,i,s){let r=n.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),i?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),n.position.y=Math.abs(Math.cos(e))*o*.05}function Bl(n){n.userData.recoil=1}It();var am=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],JE=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function lm(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new hn(i);return s.colorSpace=gt,s.anisotropy=4,s}function KE(n,e,t){return lm(512,128,(i,s,r)=>{i.fillStyle="#0b0f1a",i.fillRect(0,0,s,r),i.strokeStyle=t,i.lineWidth=8,i.strokeRect(6,6,s-12,r-12),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.font="bold 58px sans-serif",i.fillText(n,s/2,52),i.fillStyle="#e2e8f0",i.font="bold 22px sans-serif",i.fillText(e,s/2,100)})}function jE(){return lm(128,128,(n,e,t)=>{let i=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{n.beginPath(),n.arc(i,s,62-a*10,0,Math.PI*2),n.fillStyle=o,n.fill()})})}function cm(n,e){let t=[],i=[],s=new _e({color:14078925,roughness:.85,envMapIntensity:.4}),r=new _e({color:2961720,roughness:.8}),o=new _e({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of JE){let[f,p]=h.bx,[g,x]=h.bz,m=(f+p)/2,u=(g+x)/2,d=p-f,v=x-g,_=new ne(new Pe(d,h.h,v).translate(0,h.h/2,0),s);_.position.set(m,.03,u),_.castShadow=_.receiveShadow=!0,n.add(_);let w=new ne(new Pe(d+.6,.5,v+.6),r);w.position.set(m,h.h+.25,u),n.add(w);let D=h.face==="-x"?-1:1,M=D<0?f:p,y=new ne(new Pe(1.6,.2,v*.9),new _e({color:h.color,roughness:.6}));y.position.set(M+D*.8,3.3,u),y.rotation.z=D*.18,n.add(y);let b=new ne(new st(v*.75,2.4),o);b.position.set(M+D*.02,1.5,u),b.rotation.y=D*Math.PI/2,n.add(b);let E=new _e({map:KE(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});E.emissiveMap=E.map,E.emissiveIntensity=.55;let S=new ne(new st(v*.85,v*.85/4),E);S.position.set(M+D*.05,h.h-1.4,u),S.rotation.y=D*Math.PI/2,n.add(S),e.colliders.push({minX:f,maxX:p,minZ:g,maxZ:x});let N={x:M+D*1.6,z:u},V=new lt({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:St}),U=new ne(new oi(.9,1.25,32).rotateX(-Math.PI/2),V);U.position.set(N.x,.09,N.z),n.add(U);let P=new lt({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:St,blending:Gt}),A=new ne(new vt(1.05,1.05,3.2,24,1,!0),P);A.position.set(N.x,1.6,N.z),n.add(A),i.push({ring:U,ringMat:V,beamMat:P}),t.push({id:h.id,type:h.type,name:h.name,door:N,color:h.accent})}let a=QE(n,e),l=0;function c(h){l+=h;let f=.55+Math.sin(l*3)*.25;for(let p of i)p.ringMat.opacity=f+.2,p.beamMat.opacity=f*.3,p.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function QE(n,e){let o=new ne(new st(54,16).rotateX(-Math.PI/2),new _e({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,n.add(o);let a=new _e({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let u of l){let d=new ne(new Pe(u.maxX-u.minX,u.h,u.maxZ-u.minZ).translate(0,u.h/2,0),a);d.position.set((u.minX+u.maxX)/2,.03,(u.minZ+u.maxZ)/2),d.castShadow=d.receiveShadow=!0,n.add(d),e.colliders.push({minX:u.minX,maxX:u.maxX,minZ:u.minZ,maxZ:u.maxZ})}let c=new ne(new st(.3,15).rotateX(-Math.PI/2),new lt({color:16765503}));c.position.set(51,.06,156/2),n.add(c);let h=jE(),f=new _e({map:h,roughness:.6,side:St}),p=new _e({color:4144966,roughness:.7}),x=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([u,d])=>{let v=new rt;v.position.set(u,.04,d);let _=new ne(new Pe(.08,1.1,.08).translate(0,.55,0),p),w=new ne(new Nr(.55,24),f);return w.position.y=1.5,w.rotation.y=-Math.PI/2,w.castShadow=!0,v.add(_,w),n.add(v),{x:u,z:d,r:.6,up:!0,timer:0,fall:0,pivot:v}});function m(u){for(let d of x)d.up?d.fall>0&&(d.fall=Math.max(0,d.fall-u*4)):(d.fall=Math.min(1,d.fall+u*6),d.timer-=u,d.timer<=0&&(d.up=!0)),d.pivot.rotation.z=d.fall*(Math.PI/2-.05),d.pivot.rotation.z*=-1}return{targets:x,update:m,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function hm(n){return n.up?(n.up=!1,n.timer=3,!0):!1}It();var eS=.22,Ws=1.45,tS=85,Ru=4.5;function um(n){let e=[],t=new hl(.07,.5,2,8).rotateX(Math.PI/2),i=new vt(.008,.05,1,6,1,!0).rotateX(Math.PI/2).translate(0,0,.5);for(let u=0;u<48;u++){let d=new ne(t,new lt({color:16774856,transparent:!0,opacity:1,blending:Gt,depthWrite:!1}));d.visible=!1,d.frustumCulled=!1;let v=new ne(new Vt(.22,8,6),new lt({color:16751150,transparent:!0,opacity:.45,blending:Gt,depthWrite:!1}));d.add(v);let _=new ne(i,new lt({color:16757575,transparent:!0,opacity:.75,blending:Gt,depthWrite:!1,side:St}));_.visible=!1,_.frustumCulled=!1,n.add(d,_),e.push({slug:d,trail:_,live:!1,x0:0,z0:0,dx:0,dz:0,dist:0,travel:0,hitT:null,onHit:null,wall:!1})}let s=0,r=new Kn(n,8,{color:16762976,opacity:.95,blending:Gt}),o=new Kn(n,30,{color:16757575,opacity:.9,blending:Gt}),a=new Kn(n,20,{color:12103840,opacity:.5}),l=0;function c(u,d,v,_,w,D,M,y,b){let E=e[s];s=(s+1)%e.length,Object.assign(E,{live:!0,x0:u,z0:d,dx:v,dz:_,dist:Math.max(.5,w),travel:0,hitT:D,wall:M,onHit:y,onArrive:b||null}),E.slug.visible=!0,E.trail.visible=!0,E.slug.rotation.y=Math.atan2(v,_),h(E)}function h(u){let d=Math.min(u.travel,u.dist),v=u.x0+u.dx*d,_=u.z0+u.dz*d;u.slug.position.set(v,Ws,_),f(u,v,_,Math.min(Ru,d))}function f(u,d,v,_){u.trail.position.set(d,Ws,v),u.trail.rotation.y=Math.atan2(-u.dx,-u.dz),u.trail.scale.set(1,1,Math.max(.01,_))}function p(u){let d=u.x0+u.dx*u.dist,v=u.z0+u.dz*u.dist;if(u.onArrive){let _=u.onArrive;u.onArrive=null,_();return}if(u.hitT){hm(u.hitT)&&u.onHit&&u.onHit(u.hitT);for(let _=0;_<5;_++)o.emit(d,Ws,v,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else u.wall&&(o.emit(d-u.dx*.1,Ws,v-u.dz*.1,{vx:-u.dx*2,vy:1.5,vz:-u.dz*2,life:.18,size:.3,grow:.2}),a.emit(d-u.dx*.2,Ws,v-u.dz*.2,{vx:-u.dx,vy:.6,vz:-u.dz,life:.5,size:.4,grow:1.2}))}function g(u){for(let d of e)if(d.live){if(d.travel+=tS*u,d.travel>=d.dist){if(d.slug.visible&&(p(d),d.slug.visible=!1),d.travel-d.dist>=Ru){d.live=!1,d.trail.visible=!1;continue}let v=d.x0+d.dx*d.dist,_=d.z0+d.dz*d.dist,w=Ru-(d.travel-d.dist);f(d,v,_,Math.min(w,d.dist));continue}h(d)}}function x(u,d,v,_){let w=v-u,D=_-d,M=Math.hypot(w,D);M>.1&&(r.emit(u,Ws,d,{vx:w/M*2,vy:0,vz:D/M*2,life:.06,size:.7,grow:.6}),c(u,d,w/M,D/M,M,null,!0,null))}function m(u,d,v,_){l=Math.max(0,l-u),g(u),r.update(u),o.update(u),a.update(u);let w=d.save.equipped,D=w&&Gi(w);if(v=v||_,!D||!v||l>0)return{fired:!1};if(!D.auto&&!_)return{fired:!1};if((d.save.ammo[w]|0)<=0)return _&&(d.audio.click&&d.audio.click(),d.toast&&d.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),l=.3,{fired:!1,empty:!0};d.save.ammo[w]--,l=D.rate;let M=d.heading,y=eS;for(let z of d.targets){if(!z.up)continue;let B=z.x-d.pos.x,G=z.z-d.pos.z,W=Math.hypot(B,G);if(W>D.range||W<.5)continue;let L=Math.atan2(-B,-G),k=Math.atan2(Math.sin(L-d.heading),Math.cos(L-d.heading));Math.abs(k)<y&&(y=Math.abs(k),M=L)}if(d.hitables)for(let z of d.hitables)for(let B of z){if(B.ref&&B.ref.kind==="ped")continue;let G=B.x-d.pos.x,W=B.z-d.pos.z,L=Math.hypot(G,W);if(L>D.range||L<.5)continue;let k=Math.atan2(-G,-W),Z=Math.abs(Math.atan2(Math.sin(k-d.heading),Math.cos(k-d.heading)));Z<y&&(y=Z,M=k)}d.lock&&(M=Math.atan2(-(d.lock.x-d.pos.x),-(d.lock.z-d.pos.z)));let b=-Math.sin(d.heading),E=-Math.cos(d.heading),S=Math.cos(d.heading),N=-Math.sin(d.heading),V=d.pos.x+b*.95+S*.3,U=d.pos.z+E*.95+N*.3;r.emit(V,Ws,U,{vx:b*2,vy:0,vz:E*2,life:.06,size:D.id==="shotgun"?1.1:.7,grow:.6});let P=0,A=[];for(let z=0;z<D.pellets;z++){let B=M+(Math.random()-.5)*2*D.spread,G=-Math.sin(B),W=-Math.cos(B),L=D.range,k=null;for(let I of d.colliders){let X=om(V,U,G,W,I,L);X<L&&(L=X,k=null)}for(let I of d.targets){if(!I.up)continue;let X=Au(V,U,G,W,I.x,I.z,I.r,L);X<L&&(L=X,k=I)}let Z=null;if(d.hitables)for(let I of d.hitables)for(let X of I){let ie=Au(V,U,G,W,X.x,X.z,X.r,L);ie<L&&(L=ie,Z=X.ref,k=null)}if((k||Z)&&P++,Z){let I=D.dmg||20,X=G,ie=W;c(V,U,G,W,L,null,!1,null,()=>d.onPersonHit&&d.onPersonHit(Z,I,X,ie))}else c(V,U,G,W,L,k,L<D.range,d.onTargetHit);z<3&&A.push([V,U,V+G*L,U+W*L])}return d.onShot&&d.onShot(A),d.audio.shot&&d.audio.shot(D.id),{fired:!0,hits:P}}return{update:m,remoteShot:x}}var nS=n=>"#"+n.toString(16).padStart(6,"0"),Vo=n=>"$"+n.toLocaleString();function dm(n){let e=c=>document.getElementById(c),t=e("store"),i=e("store-list"),s=null;function r(c){n.toast(c.msg),n.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(n.persist(),n.onChange()),l()}function o(){let c=n.save;i.innerHTML="";for(let f of zl){let p=c.weapons.includes(f.id),g=document.createElement("div");g.className="upg-row store-row"+(c.equipped===f.id?" sel":""),g.innerHTML=`<div class="uinfo"><b>${f.name}</b><small>${f.desc}</small>
        <small class="ammo-line">${p?"Ammo: "+(c.ammo[f.id]|0):Vo(f.price)}</small></div>
        <div class="store-btns"></div>`;let x=g.querySelector(".store-btns");if(p){let m=document.createElement("button");m.className="upg-btn",m.textContent="+"+f.ammoBox+" AMMO "+Vo(f.ammoPrice),m.disabled=c.cash<f.ammoPrice,m.onclick=()=>r(tm(c,f.id)),x.appendChild(m);let u=document.createElement("button");u.className="buy-btn eq",u.textContent=c.equipped===f.id?"EQUIPPED":"EQUIP",u.disabled=c.equipped===f.id,u.onclick=()=>r(nm(c,f.id)),x.appendChild(u)}else{let m=document.createElement("button");m.className="buy-btn",m.textContent="BUY "+Vo(f.price),m.disabled=c.cash<f.price,m.onclick=()=>r(em(c,f.id)),x.appendChild(m)}i.appendChild(g)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",i.appendChild(h)}function a(){let c=n.save;i.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${ko?Vo(ko):"FREE"}</b><div class="swatch-row"></div>`;let f=h.querySelector(".swatch-row");for(let m of jp){let u=document.createElement("div");u.className="swatch"+(c.outfit.shirt===m?" sel":""),u.style.background=nS(m),u.onclick=()=>r(im(c,m)),f.appendChild(u)}i.appendChild(h);let p=document.createElement("div");p.className="style-sec",p.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let g=p.querySelector(".swatch-row");for(let m of Ol){let u=document.createElement("button"),d=c.hats.includes(m.id);u.className="wheel-opt"+(c.outfit.hat===m.id?" sel":""),u.innerHTML=`${m.name}<small>${c.outfit.hat===m.id?"wearing":d||!m.price?"free":Vo(m.price)}</small>`,u.onclick=()=>r(sm(c,m.id)),g.appendChild(u)}i.appendChild(p);let x=document.createElement("p");x.className="store-tip",x.textContent="Everything here is free. More colors, pants, skin tone & hair in \u{1F3A8} SKIN EDITOR (pause menu).",i.appendChild(x)}function l(){e("store-cash").textContent=n.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var fm=[];for(let n=0;n<=5;n++)fm.push((n-5/2)*74);var Wo=384/2;function pm(n,e){let t=n.getContext("2d"),i=n.width,r=i/2/130,o=0;function a(l,c,h,f,p){if((o++&3)!==0)return;let g=m=>i/2+(m-l)*r,x=m=>i/2+(m-c)*r;t.clearRect(0,0,i,i),t.save(),t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,40,28,0.82)",t.fillRect(0,0,i,i),t.fillStyle="rgba(120,130,145,0.55)";for(let m=0;m<5;m++)for(let u=0;u<5;u++){let d=(m-2)*74,v=(u-4/2)*74;t.fillRect(g(d-30),x(v-30),60*r,60*r)}t.strokeStyle="#2b2f36",t.lineWidth=14*r,t.beginPath();for(let m of fm)t.moveTo(g(m),x(-Wo)),t.lineTo(g(m),x(Wo)),t.moveTo(g(-Wo),x(m)),t.lineTo(g(Wo),x(m));t.moveTo(g(Wo),x(0)),t.lineTo(g(232),x(0)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(g(232),x(-225)),t.lineTo(g(232),x(225)),t.stroke();for(let m of e)t.fillStyle=m.color,t.beginPath(),t.arc(g(m.door.x),x(m.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();f&&(t.fillStyle="#ffffff",t.fillRect(g(f.x)-3,x(f.z)-3,6,6)),p&&p.each(m=>{m.b>=0||(t.fillStyle="#4ade80",t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.beginPath(),t.arc(g(m.x),x(m.z),4,0,Math.PI*2),t.fill(),t.stroke())}),t.restore(),t.save(),t.translate(i/2,i/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",i/2,11)}return{draw:a}}var iS={none:"None",center:"Center",dual:"Dual",side:"Side"},sS={clear:"Clear",dark:"Dark",limo:"Limo"};function mm(n){let e=x=>document.getElementById(x),t=e("skin-editor"),i=e("se-body"),s=n.save,r="car",o=!1;function a(x,m,u,d={}){let v=`<div class="swatch-row se-row" data-key="${x}">`;d.off&&(v+=`<button class="swatch off${u==null?" sel":""}" data-v="off" aria-label="off">OFF</button>`);for(let w of m)v+=`<button class="swatch${w===u?" sel":""}" data-v="${w}" style="background:${Nl(w)}" aria-label="color"></button>`;let _=u!=null&&!m.includes(u);return v+=`<label class="swatch custom${_?" sel":""}" style="${_?"background:"+Nl(u):""}" title="Any color"><input type="color" data-key="${x}" value="${Nl(u??16777215)}">\u{1F3A8}</label>`,v+"</div>"}function l(x,m,u,d){return`<div class="swatch-row se-row" data-key="${x}">`+m.map(v=>`<button class="wheel-opt${v===d?" sel":""}" data-v="${v}"><b>${u[v]}</b></button>`).join("")+"</div>"}let c=(x,m)=>`<div class="style-sec"><b>${x}</b>${m}</div>`;function h(){let x=s.currentCar,m=Gs(s,x),d='<div class="swatch-row se-row" data-key="car">'+n.cars.filter(v=>s.owned.includes(v.id)).map(v=>`<button class="wheel-opt${v.id===x?" sel":""}" data-v="${v.id}"><b>${v.name}</b></button>`).join("")+"</div>";i.innerHTML=c("Car",d)+c("Body paint",a("paint",ls,s.paint[x]))+c("Rims",a("rims",[12172998,1513500,13211182,2287359,14100029,16317180,4906624,11032055],m.rims))+c("Racing stripes",l("stripes",Bo,iS,m.stripes))+(m.stripes!=="none"?c("Stripe color",a("stripe",ls,m.stripe)):"")+c("Underglow",a("glow",[2287359,16723555,4906624,11032055,16765503,16317180],m.glow,{off:!0}))+c("Window tint",l("tint",Ho,sS,m.tint))}function f(){let x=s.outfit;i.innerHTML=c("Name (shown online)",`<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g,"")}" autocomplete="off" spellcheck="false">`)+c("Shirt",a("shirt",ls,x.shirt))+c("Pants",a("pants",[2963272,1981066,1120295,7041664,9067034,16317180,7999504,1483594],x.pants))+c("Skin tone",a("skin",Ll,x.skin))+c("Hair",a("hair",Il,x.hair))+c("Hat",l("hat",cs,Dl,x.hat))+(x.hat!=="none"?c("Hat color",a("hatColor",ls,x.hatColor)):"");let m=e("se-name");m.addEventListener("input",()=>{let u=Su(m.value);u&&(s.name=u,n.persist(),n.onName())}),m.addEventListener("keydown",u=>u.stopPropagation())}function p(){for(let x of t.querySelectorAll(".setab"))x.classList.toggle("active",x.dataset.tab===r);r==="car"?h():f()}function g(x,m){let u=s.currentCar,d=Gs(s,u),v=s.outfit,_=m==="off"?null:typeof m=="string"&&m[0]==="#"?parseInt(m.slice(1),16):isNaN(+m)?m:+m,w=!1,D=!1;switch(x){case"car":s.owned.includes(m)&&(s.currentCar=m,w=!0);break;case"paint":s.paint[u]=_,w=!0;break;case"rims":d.rims=_,w=!0;break;case"stripes":d.stripes=m,w=!0;break;case"stripe":d.stripe=_,w=!0;break;case"glow":d.glow=_,w=!0;break;case"tint":d.tint=m,w=!0;break;case"shirt":case"pants":case"skin":case"hair":case"hatColor":v[x]=_,D=!0;break;case"hat":v.hat=m,D=!0;break}n.persist(),w&&n.onCar(x==="car"),D&&n.onOutfit(),n.beep(760,.03)}i.addEventListener("click",x=>{let m=x.target.closest("button[data-v]");if(!m)return;let u=m.closest("[data-key]");g(u.dataset.key,m.dataset.v),p()}),i.addEventListener("input",x=>{let m=x.target.closest("input[type=color]");if(!m)return;g(m.dataset.key,m.value);let u=m.closest("label");u&&(u.style.background=m.value)}),i.addEventListener("change",x=>{x.target.closest("input[type=color]")&&p()});for(let x of t.querySelectorAll(".setab"))x.addEventListener("click",()=>{r=x.dataset.tab,n.onTab(r),p()});return{open(x){r=x||"car",o=!0,t.classList.remove("hidden"),n.onTab(r),p()},close(){o=!1,t.classList.add("hidden")},get isOpen(){return o},get tab(){return r},refresh:p}}It();var Pu=["lobby","apartment","office","diner"],gm={lobby:"LOBBY",apartment:"APARTMENT",office:"OFFICE",diner:"DINER"},Gr=22,Vr=16,Hl=4.6,xi=.3,rS=-1180,xm=n=>Pu[(n*2654435761>>>0)%Pu.length];function oS(n){return{x:(Pu.indexOf(n)-1.5)*90,z:rS}}function Cu(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new hn(s);return r.colorSpace=gt,i&&(r.wrapS=r.wrapT=zi,r.repeat.set(i[0],i[1])),r}var kl=(n,e={})=>new _e(Object.assign({color:n,roughness:.8,metalness:.05,emissive:n,emissiveIntensity:.18},e)),aS={lobby:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#e9e4da":"#b9b2a5",n.fillRect(t*16,e*16,16,16)},apartment:n=>{for(let e=0;e<8;e++)n.fillStyle=e%2?"#9a6a3e":"#a8754a",n.fillRect(0,e*16,128,16),n.fillStyle="#7a5230",n.fillRect(e*37%128,e*16,2,16)},office:n=>{n.fillStyle="#5b6472",n.fillRect(0,0,128,128),n.fillStyle="#525a67";for(let e=0;e<128;e+=32)n.fillRect(e,0,1,128),n.fillRect(0,e,128,1)},diner:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#f2f2f2":"#1a1a1a",n.fillRect(t*16,e*16,16,16)}},lS={lobby:14209732,apartment:13227715,office:14673388,diner:15909813};function _m(n){let e=new Map;function t(x){if(e.has(x))return e.get(x);let m=oS(x),u=new rt;u.position.set(m.x,0,m.z);let d=[],v=Gr/2,_=Vr/2,w=(z,B,G,W)=>d.push({minX:m.x+z,maxX:m.x+B,minZ:m.z+G,maxZ:m.z+W}),D=(z,B,G,W,L,k=0,Z=!0)=>{let I=new ne(z,B);return I.position.set(G,W,L),I.rotation.y=k,I.castShadow=Z,I.receiveShadow=!0,u.add(I),I},M=(z,B,G,W,L,k,Z=0,I=!0)=>{D(new Pe(z,B,G).translate(0,B/2,0),W,L,Z,k),I&&w(L-z/2,L+z/2,k-G/2,k+G/2)},y=Cu(128,128,aS[x],[Gr/4,Vr/4]);D(new st(Gr,Vr).rotateX(-Math.PI/2),kl(16777215,{map:y,emissiveMap:y,emissiveIntensity:.2}),0,.02,0,0,!1),D(new st(Gr,Vr).rotateX(Math.PI/2),kl(16053488,{emissiveIntensity:.5}),0,Hl,0,0,!1);let b=kl(lS[x],{side:St}),E=(z,B,G,W)=>{D(new Pe(z,Hl,B).translate(0,Hl/2,0),b,G,0,W,0,!1),w(G-z/2,G+z/2,W-B/2,W+B/2)};E(Gr+xi*2,xi,0,-_-xi/2),E(Gr+xi*2,xi,0,_+xi/2),E(xi,Vr,-v-xi/2,0),E(xi,Vr,v+xi/2,0);let S=new _e({color:16777215,emissive:16774364,emissiveIntensity:2.2});for(let z of[-6,0,6])for(let B of[-4,4])D(new st(2.4,.9).rotateX(Math.PI/2),S,z,Hl-.02,B,0,!1);let N=Cu(256,64,(z,B,G)=>{let W=z.createLinearGradient(0,0,0,G);W.addColorStop(0,"#7fb2ee"),W.addColorStop(1,"#cfe6f7"),z.fillStyle=W,z.fillRect(0,0,B,G),z.fillStyle="#3b4656";for(let L=0;L<B;L+=64)z.fillRect(L,0,4,G);z.fillRect(0,0,B,4),z.fillRect(0,G-4,B,4)});D(new st(14,1.6),new lt({map:N}),0,2.6,-_+.01,0,!1);let V=Cu(64,96,(z,B,G)=>{z.fillStyle="#20262f",z.fillRect(0,0,B,G),z.fillStyle="#4ade80",z.fillRect(0,0,B,6),z.fillRect(0,0,5,G),z.fillRect(B-5,0,5,G),z.fillStyle="#9fd4ff",z.fillRect(9,12,B-18,G-20),z.fillStyle="#16a34a",z.font="bold 14px sans-serif",z.textAlign="center",z.fillText("EXIT",B/2,40)});D(new st(2.2,3).translate(0,1.5,0),new _e({map:V,emissive:16777215,emissiveMap:V,emissiveIntensity:.6}),0,0,_-.02,Math.PI,!1);let U=new lt({color:4906624,transparent:!0,opacity:.7,depthWrite:!1,side:St}),P=D(new oi(.75,1.05,32).rotateX(-Math.PI/2),U,0,.05,_-1.6,0,!1);cS(x,{add:D,boxAt:M,mat:kl,W2:v,D2:_,group:u,solid:w}),n.add(u);let A={style:x,group:u,colliders:d,pad:P,padMat:U,spawn:{x:m.x,z:m.z+_-3.2,heading:0},exit:{x:m.x,z:m.z+_-1.6},bounds:{minX:m.x-v,maxX:m.x+v,minZ:m.z-_,maxZ:m.z+_}};return e.set(x,A),A}let i=new _e({color:4165434,roughness:.6,emissive:2054682,emissiveIntensity:.6}),s=new _e({color:15919044,roughness:.6}),r=new _e({color:4937059,metalness:.7,roughness:.35}),o=new lt({color:4906624,transparent:!0,opacity:.5,depthWrite:!1,side:St,blending:Gt}),a=[];function l(){for(let x of a)n.remove(x.mesh);a.length=0}function c(x,m){l();for(let u of m){let d=new rt;if(u.kind==="safe"){d.add(new ne(new Pe(.75,.8,.65).translate(0,.4,0),r));let _=new ne(new vt(.1,.1,.04,14).rotateX(Math.PI/2),new _e({color:13948120,metalness:1,roughness:.2}));_.position.set(0,.45,.34),d.add(_)}else for(let _=0;_<3;_++){let w=new ne(new Pe(.34,.09,.17),i);w.position.set((_-1)*.12,.05+_%2*.09,_%2*.05),w.rotation.y=_*.3,d.add(w);let D=new ne(new Pe(.05,.095,.175),s);D.position.copy(w.position),D.rotation.y=w.rotation.y,d.add(D)}let v=new ne(new oi(.5,.62,24).rotateX(-Math.PI/2),o);v.position.y=.04,d.add(v),d.position.set(u.x,.02,u.z),n.add(d),a.push({mesh:d,x:u.x,z:u.z,amount:u.amount,kind:u.kind,got:!1})}}function h(x,m){let u=[],d=x.bounds;for(let v=0;v<200&&u.length<m;v++){let _=d.minX+1.2+Math.random()*(d.maxX-d.minX-2.4),w=d.minZ+1.2+Math.random()*(d.maxZ-d.minZ-2.4);if(Math.hypot(_-x.spawn.x,w-x.spawn.z)<2.5)continue;let D=!0;for(let M of x.colliders)if(_>M.minX-.7&&_<M.maxX+.7&&w>M.minZ-.7&&w<M.maxZ+.7){D=!1;break}for(let M of u)Math.hypot(M.x-_,M.z-w)<2&&(D=!1);D&&u.push({x:_,z:w})}return u}let f=0;function p(x,m){f+=x,m&&(m.padMat.opacity=.5+Math.sin(f*4)*.25,m.pad.rotation.y+=x),o.opacity=.35+Math.sin(f*5)*.2;for(let u of a)!u.got&&u.kind!=="safe"&&(u.mesh.rotation.y+=x*1.2)}function g(x,m){for(let u of a)if(!u.got&&Math.hypot(u.x-x,u.z-m)<(u.kind==="safe"?1.4:1))return u.got=!0,n.remove(u.mesh),u;return null}return{get:t,update:p,spawnLoot:c,clearLoot:l,lootSpots:h,grab:g}}function cS(n,e){let{add:t,boxAt:i,mat:s,W2:r,D2:o}=e,a=s(8016432),l=s(2237739),c=s(15921906),h=s(10134445,{metalness:.7,roughness:.35}),f=(x,m)=>{i(.6,.6,.6,s(9067066),x,m),t(new Vt(.6,10,8),s(4094516),x,1.15,m)},p=(x,m,u,d)=>{let v=s(d),_=new rt,w=new ne(new Pe(2.6,.45,1).translate(0,.22,0),v),D=new ne(new Pe(2.6,.6,.25).translate(0,.75,.38),v),M=new ne(new Pe(.25,.65,1).translate(-1.3,.32,0),v),y=new ne(new Pe(.25,.65,1).translate(1.3,.32,0),v);return _.add(w,D,M,y),_.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),_.position.set(x,0,m),_.rotation.y=u,e.group.add(_),Math.abs(Math.sin(u))>.5?[x-.6,x+.6,m-1.4,m+1.4]:[x-1.4,x+1.4,m-.6,m+.6]},g=x=>e.solid(x[0],x[1],x[2],x[3]);if(n==="lobby"){i(5,1.1,1.2,a,0,-2.5),i(5.2,.08,1.4,c,0,-2.5,1.1,!1);let x=s(12107462,{metalness:.85,roughness:.25,emissiveIntensity:.1});for(let m of[-6,-2,2,6])t(new st(2,3).translate(0,1.5,0),x,m,0,-o+.02,0,!1),t(new st(.4,.2),new lt({color:16747546}),m,3.3,-o+.03,0,!1);g(p(-7,2,Math.PI/2,1981066)),g(p(7,2,-Math.PI/2,1981066)),i(1.4,.4,.8,a,-5,2),i(1.4,.4,.8,a,5,2),f(-r+1,o-1),f(r-1,o-1),f(-r+1,-o+1.5),f(r-1,-o+1.5)}else if(n==="apartment"){g(p(-3,1.5,Math.PI,8141549)),i(1.8,.4,.9,a,-3,-.5),i(3,.5,.4,l,-3,-o+.4),t(new st(2.6,1.5),new _e({color:1118481,emissive:2781142,emissiveIntensity:.9}),-3,1.6,-o+.45,0,!1),i(6,.95,.8,c,6,-o+.5),i(.9,2,.8,h,r-.6,-o+.5),i(2.2,.75,1.1,a,5,-2);for(let x of[4.2,5.8])for(let m of[-3.1,-.9])i(.45,.5,.45,l,x,m);i(2.2,.55,3,s(15921906),r-1.4,3.5),i(2.2,.25,2.2,s(3718648),r-1.4,3.9,.55,!1),i(2.2,1,.2,a,r-1.4,o-3,0,!1),f(-r+1,o-1)}else if(n==="office"){let x=new _e({color:725536,emissive:3718648,emissiveIntensity:.9});for(let m of[-7,-2.5,2.5,7])for(let u of[-4.5,.5])i(3,.75,1.3,c,m,u),t(new Pe(.9,.55,.06).translate(0,.28,0),x,m,.8,u-.3),i(.55,.5,.55,l,m,u+1.1);i(6,.75,1.6,a,0,4.6),t(new st(5,2.2),new _e({color:16777215,emissive:16777215,emissiveIntensity:.3}),-r+.02,2,2,Math.PI/2,!1),f(r-1,o-1),f(-r+1,o-1)}else{i(10,1.05,1,s(14100029),2,-o+3),i(10.2,.08,1.2,c,2,-o+3,1.05,!1);for(let m=0;m<6;m++)t(new vt(.28,.28,.12,12).translate(0,.75,0),s(14100029),-2+m*1.7,0,-o+4.3),i(.12,.7,.12,h,-2+m*1.7,-o+4.3,0,!1);for(let m of[-1,3])i(2.4,.75,1.1,c,-6.5,m),i(2.4,1.1,.5,s(14100029),-6.5,m-1.1),i(2.4,1.1,.5,s(14100029),-6.5,m+1.1);let x=new _e({color:16723555,emissive:16723555,emissiveIntensity:2.5});t(new Pe(8,.12,.06),x,2,3.4,-o+.05,0,!1),t(new Pe(8,.12,.06),new _e({color:2287359,emissive:2287359,emissiveIntensity:2.5}),2,3.1,-o+.05,0,!1),i(1,1.8,.7,s(2060267),r-.8,2),f(r-1,o-1)}}It();var Gl=1e5,Xs=[{id:"drive",text:"Drive to the green marker",needsTarget:!0},{id:"drift",text:"DRIFT! Hold HB (Space) while steering",needsTarget:!1},{id:"park",text:"Drive to the next marker and stop",needsTarget:!0},{id:"out",text:"Tap GET OUT (E) to leave your car",needsTarget:!1},{id:"enter",text:"Walk to the glowing door and tap ENTER",needsTarget:!0},{id:"exit",text:"Look around, then step on the green EXIT pad",needsTarget:!1}];function hS(n,e){switch(n){case"drive":return!!e.reached;case"drift":return e.driftTime>=1.5;case"park":return!!e.reached&&Math.abs(e.speed||0)<4;case"out":return!!e.onFoot;case"enter":return e.inside>=0;case"exit":return e.inside<0&&!!e.wasInside}return!1}function vm(n,e){let t={x:37,z:-37},i=null,s=1/0;for(let v of e.buildings){let _=Math.hypot(v.door.x-(t.x+30),v.door.z-t.z);_<s&&(s=_,i=v)}let r={drive:{x:37,z:-30,r:8},park:i?{x:i.door.x+i.door.nx*7,z:i.door.z+i.door.nz*7,r:9}:{x:90,z:-37,r:9},enter:i?{x:i.door.x+i.door.nx*.8,z:i.door.z+i.door.nz*.8,r:1.6}:null},o=new lt({color:4906624,transparent:!0,opacity:.85,depthWrite:!1,side:St}),a=new lt({color:4906624,transparent:!0,opacity:.22,depthWrite:!1,side:St,blending:Gt}),l=new rt,c=new ne(new oi(.85,1,40).rotateX(-Math.PI/2),o);c.position.y=.1;let h=new ne(new vt(1,1,30,24,1,!0).translate(0,15,0),a);l.add(c,h),l.visible=!1,n.add(l);let f=!1,p=0,g=0,x=!1,m=0;function u(){let v=Xs[p];return v&&v.needsTarget?r[v.id]:null}function d(){let v=u();l.visible=!!(f&&v),v&&(l.position.set(v.x,0,v.z),l.scale.set(v.r,1,v.r))}return{building:i,start(){f=!0,p=0,g=0,x=!1,d()},stop(){f=!1,l.visible=!1},get active(){return f},get step(){return p},get total(){return Xs.length},get text(){return Xs[p]?Xs[p].text:""},target:u,update(v,_){if(!f)return null;m+=v,o.opacity=.6+Math.sin(m*4)*.25,l.rotation.y+=v*.6;let w=u(),D=w?Math.hypot(_.pos.x-w.x,_.pos.z-w.z)<w.r:!1;return Xs[p].id==="drift"&&_.drifting&&(g+=v),_.inside>=0&&(x=!0),hS(Xs[p].id,{reached:D,driftTime:g,onFoot:_.onFoot,inside:_.inside,wasInside:x,speed:_.speed})?(p++,p>=Xs.length?(f=!1,l.visible=!1,"done"):(d(),"next")):null},get driftProgress(){return Math.min(1,g/1.5)}}}It();function ym({url:n,key:e,topic:t,onStatus:i}){let s=new Map,r=null,o="off",a=0,l=null,c=null,h=0,f=!1,p=null,g="realtime:"+t;function x(v){if(o!==v&&(o=v,i))try{i(v)}catch{}}function m(v){if(r&&r.readyState===1)try{return r.send(JSON.stringify(v)),!0}catch{}return!1}function u(){if(f)return;clearTimeout(p),x("connecting");let v=n.replace(/^http/,"ws").replace(/\/$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(e)+"&vsn=1.0.0";try{r=new WebSocket(v)}catch{return d()}r.onopen=()=>{l=String(++a),m({topic:g,event:"phx_join",ref:l,join_ref:l,payload:{config:{broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},access_token:e}}),clearInterval(c),c=setInterval(()=>m({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++a)}),25e3)},r.onmessage=_=>{let w;try{w=JSON.parse(_.data)}catch{return}if(w.topic===g){if(w.event==="phx_reply"&&w.ref===l){if(w.payload&&w.payload.status==="ok")h=0,x("on");else{x("error");try{r.close()}catch{}}return}if(w.event==="phx_error"||w.event==="phx_close"){try{r.close()}catch{}return}if(w.event==="broadcast"&&w.payload){let D=s.get(w.payload.event);if(D)try{D(w.payload.payload||{})}catch(M){console.warn("mp handler",M)}}}},r.onclose=()=>{clearInterval(c),c=null,r=null,f||d()},r.onerror=()=>{}}function d(){x("connecting");let v=Math.min(15e3,1e3*Math.pow(1.7,h++));p=setTimeout(u,v)}return{connect(){f=!1,r||u()},close(){if(f=!0,clearTimeout(p),clearInterval(c),r){m({topic:g,event:"phx_leave",payload:{},ref:String(++a),join_ref:l});try{r.close()}catch{}}r=null,x("off")},on(v,_){s.set(v,_)},send(v,_){return o!=="on"?!1:m({topic:g,event:"broadcast",ref:String(++a),join_ref:l,payload:{type:"broadcast",event:v,payload:_}})},get status(){return o}}}var Lu="https://fhbqxujlnqlmzvulrdxt.supabase.co",Iu="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w",Mm="city-driver-v2";var uS=160,dS=1e3,fS=2500,pS=7e3,mS=16,gS=10,xS=(n,e)=>{let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t};function _S(n,e){let t=String(n||"Driver").slice(0,16),i="700 28px system-ui, -apple-system, sans-serif",s=document.createElement("canvas").getContext("2d");s.font=i;let r=Math.max(70,Math.ceil(s.measureText(t).width)+30),o=44,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d");l.fillStyle="rgba(8,12,22,0.72)",l.beginPath(),l.roundRect?l.roundRect(1,1,r-2,o-2,14):l.rect(1,1,r-2,o-2),l.fill(),l.fillStyle=e==="red"?"#ff3b4e":e==="blue"?"#3b8bff":"#4ade80",l.beginPath(),l.arc(16,o/2,5,0,Math.PI*2),l.fill(),l.font=i,l.fillStyle="#fff",l.textBaseline="middle",l.fillText(t,26,o/2+1);let c=new hn(a),h=new Ur(new Ns({map:c,transparent:!0,depthTest:!1}));return h.scale.set(r/90,o/90,1),h.renderOrder=999,h}function Em(n){let e=Math.random().toString(36).slice(2,10),t=new Map,i=null,s=0,r=0,o="",a="";function l(){return t.size+1}function c(){n.onCount&&n.onCount(l())}function h(y){let b=t.get(y);b&&(b.car&&n.scene.remove(b.car),b.person&&n.scene.remove(b.person),b.tag&&b.tag.parent&&b.tag.parent.remove(b.tag),t.delete(y),c())}function f(y){let b=y.carId+"|"+y.lookSig;if(y.car&&y.carSig===b)return;y.car&&n.scene.remove(y.car);let E=n.CAR_DEFS.find(N=>N.id===y.carId)||n.CAR_DEFS[0],S=n.buildCar(E);y.look&&n.applyCarSkin(S,y.look.paint,y.look.carSkin),S.position.set(y.cx,0,y.cz),S.rotation.y=y.ch,n.scene.add(S),y.car=S,y.carSig=b}function p(y){y.person||(y.person=n.buildCharacter(y.look?y.look.outfit:{shirt:2845872,hat:"none"}),y.person.position.set(y.x,0,y.z),n.scene.add(y.person),y.outfitSig="");let b=y.look?JSON.stringify(y.look.outfit):"";y.look&&b!==y.outfitSig&&(n.setOutfit(y.person,y.look.outfit),y.outfitSig=b),n.setHeldWeapon(y.person,y.weapon||null)}function g(y){if(!y||!y.id||y.id===e)return;let b=t.get(y.id);if(!b){if(t.size>=mS)return;b={id:y.id,name:"",x:+y.x||0,z:+y.z||0,h:+y.h||0,cx:0,cz:0,ch:0,tx:0,tz:0,th:0,mode:"car",carId:"sport",look:null,lookSig:"",car:null,person:null,tag:null,tagName:"",phase:0,speed:0,b:-1,weapon:null,seen:0},t.set(y.id,b),c()}b.seen=performance.now(),b.mode=y.m==="foot"?"foot":"car",b.tx=+y.x||0,b.tz=+y.z||0,b.th=+y.h||0,b.carId=String(y.c||"sport"),b.b=Number.isInteger(y.b)?y.b:-1,b.weapon=y.w||null;let E=y.tm||null;if(E!==b.team&&(b.team=E,b.tagName=""),b.dead=y.hp===0,b.firing=!!y.f,b.mode==="foot"&&Number.isFinite(y.px)&&(b.cx=+y.px,b.cz=+y.pz,b.ch=+y.ph||0),y.L){let S=JSON.stringify(y.L);S!==b.lookSig&&(b.lookSig=S,b.look=n.unpackLook(y.L))}y.n&&(y.n!==b.tagName||!b.tag)&&(b.tag&&b.tag.parent&&b.tag.parent.remove(b.tag),b.tag=_S(y.n,b.team),b.tagName=y.n,b.name=y.n),b.placed||(b.x=b.tx,b.z=b.tz,b.h=b.th,b.mode==="car"&&(b.cx=b.tx,b.cz=b.tz,b.ch=b.th),b.placed=!0)}function x(y){if(!y||y.id===e||!Array.isArray(y.s))return;let b=t.get(y.id);if(b&&(b.recoil=.35),!(b&&n.localBuilding!==void 0&&b.b!==n.localBuilding()))for(let E of y.s.slice(0,3))Array.isArray(E)&&E.length===4&&n.remoteShot(+E[0],+E[1],+E[2],+E[3])}let m=null;function u(){for(let y of[...t.keys()])h(y)}function d(y){if(y===void 0&&(y=Mm),!(y===m&&i)){if(v(),m=y,!y||!Lu||!Iu){n.onStatus&&n.onStatus("off",1);return}i=ym({url:Lu,key:Iu,topic:y,onStatus:b=>{n.onStatus&&n.onStatus(b,l())}}),i.on("st",g),i.on("sh",x),i.on("bye",b=>{b&&b.id&&h(b.id)}),i.on("hit",b=>{b&&b.t===e&&n.onHit&&n.onHit(b,t.get(b.id))}),i.on("kill",b=>{b&&n.onKill&&n.onKill(b)}),i.connect()}}function v(){if(i){try{i.send("bye",{id:e})}catch{}i.close(),i=null}u(),o="",a=""}window.addEventListener("pagehide",()=>{try{i&&i.send("bye",{id:e})}catch{}});function _(y,b,E){if(E=E||performance.now(),i&&i.status==="on"&&b){let V=b.mode+(b.x|0)+","+(b.z|0)+","+(b.h*10|0)+b.b+(b.w||""),U=V!==o||Math.abs(b.speed)>.3;if(E-s>=(U?uS:dS)){s=E,o=V;let P={id:e,n:b.name,m:b.mode,x:+b.x.toFixed(2),z:+b.z.toFixed(2),h:+b.h.toFixed(3),c:b.car,b:b.b,w:b.w||null,tm:b.team||null,hp:b.dead?0:1};b.mode==="foot"&&(P.px=+b.px.toFixed(2),P.pz=+b.pz.toFixed(2),P.ph=+b.ph.toFixed(3));let A=JSON.stringify(b.look);(A!==a||E-r>fS)&&(P.L=b.look,r=E,a=A),i.send("st",P)}}let S=Math.min(1,y*gS),N=b?b.b:-1;for(let[V,U]of t){if(E-U.seen>pS){h(V);continue}let P=U.x,A=U.z;if(U.x+=(U.tx-U.x)*S,U.z+=(U.tz-U.z)*S,U.h+=xS(U.h,U.th)*S,U.speed=y>0?Math.hypot(U.x-P,U.z-A)/y:0,U.mode==="car"&&(U.cx=U.x,U.cz=U.z,U.ch=U.h),f(U),U.car.position.set(U.cx,0,U.cz),U.car.rotation.y=U.ch,U.car.visible=N===-1,U.mode==="foot"?(p(U),U.person.visible=U.b===N,U.person.position.x=U.x,U.person.position.z=U.z,U.person.rotation.y=U.h,U.phase+=U.speed*y*2.1,U.recoil=Math.max(0,(U.recoil||0)-y),U.dead?(U.person.rotation.x=-Math.PI/2+.05,U.person.position.y=.12):(U.person.rotation.x=0,n.animateCharacter(U.person,U.phase,U.speed,!!U.weapon&&U.recoil>0,y))):U.person&&(U.person.visible=!1),U.tag){let z=U.mode==="foot"?U.person:U.car;z&&U.tag.parent!==z&&(U.tag.parent&&U.tag.parent.remove(U.tag),z.add(U.tag),U.tag.position.set(0,U.mode==="foot"?2.35:2.3,0))}}}function w(y){!i||i.status!=="on"||!y||!y.length||i.send("sh",{id:e,s:y.map(b=>b.map(E=>+E.toFixed(2)))})}function D(y){for(let b of t.values())y(b)}function M(y,b){i&&i.status==="on"&&i.send(y,Object.assign({id:e},b))}return{connect:d,disconnect:v,update:_,sendShots:w,send:M,each:D,myId:e,get topic(){return m},get count(){return l()},get status(){return i?i.status:"off"}}}It();function vS(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgba(110,0,0,1)";let t=(s,r)=>s+Math.random()*(r-s);e.beginPath(),e.arc(64,64,40,0,Math.PI*2),e.fill();for(let s=0;s<14;s++){let r=t(0,Math.PI*2),o=t(20,50),a=t(6,18);e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,Math.PI*2),e.fill()}let i=new hn(n);return i.colorSpace=gt,i}function Sm(n){let e=new Kn(n,60,{color:10158080,opacity:.95,size:.35}),t=new Kn(n,24,{color:6946816,opacity:.55,size:.8}),i=vS(),s=[];for(let c=0;c<24;c++){let h=new ne(new st(1,1).rotateX(-Math.PI/2),new _e({map:i,transparent:!0,opacity:.92,roughness:.15,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));h.visible=!1,h.renderOrder=3,n.add(h),s.push({m:h,size:0,max:0,life:0})}let r=0;function o(c,h,f,p=0,g=0,x=1){let m=Math.round(6*x);for(let u=0;u<m;u++)e.emit(c+(Math.random()-.5)*.2,h+(Math.random()-.5)*.3,f+(Math.random()-.5)*.2,{vx:p*(1.5+Math.random()*3)+(Math.random()-.5)*2,vy:Math.random()*2.5-.5,vz:g*(1.5+Math.random()*3)+(Math.random()-.5)*2,life:.35+Math.random()*.3,size:.18,grow:.25});t.emit(c,h,f,{vx:p*1.2,vy:.3,vz:g*1.2,life:.4,size:.5,grow:.9})}function a(c,h,f=2.2){let p=s[r];r=(r+1)%s.length,p.m.position.set(c,.07+r*5e-4,h),p.m.rotation.y=Math.random()*Math.PI*2,p.size=.2,p.max=f,p.life=45,p.m.scale.set(.2,1,.2),p.m.material.opacity=.92,p.m.visible=!0}function l(c){e.update(c),t.update(c);for(let h of s)h.m.visible&&(h.life-=c,h.size<h.max&&(h.size=Math.min(h.max,h.size+c*.5),h.m.scale.set(h.size,1,h.size)),h.life<5&&(h.m.material.opacity=.92*Math.max(0,h.life/5)),h.life<=0&&(h.m.visible=!1))}return{hit:o,pool:a,update:l}}var Wr=74,_i=5,zt=28,Wl=zt*8,yS=1.5,Xo=5.2,Xr=(n,e)=>n+Math.random()*(e-n),qs=n=>n[Math.random()*n.length|0];function Vl(){return{shirt:qs(ls),pants:qs([2963272,1981066,1120295,7041664,9067034,13358561]),skin:qs(Ll),hair:qs(Il.slice(0,6)),hat:Math.random()<.25?qs(["cap","beanie","cowboy"]):"none",hatColor:qs(ls),hairLong:Math.random()<.4}}function Du(n,e,t,i){t=(t%Wl+Wl)%Wl;let s=Math.floor(t/(zt*2)),r=t-s*zt*2-zt;return s===0?(i.x=n+r,i.z=e-zt,i.h=-Math.PI/2):s===1?(i.x=n+zt,i.z=e+r,i.h=Math.PI):s===2?(i.x=n-r,i.z=e+zt,i.h=Math.PI/2):(i.x=n-zt,i.z=e-r,i.h=0),i}function bm(n){let e=[],t=[],i=[],s={x:0,z:0,h:0},r=n.count||16;function o(M,y){let b=[];for(let E=0;E<_i;E++)for(let S=0;S<_i;S++){let N=(E-(_i-1)/2)*Wr,V=(S-(_i-1)/2)*Wr;Math.hypot(N-M,V-y)<170&&!(E===0&&S===0)&&b.push({cx:N,cz:V})}return b}function a(M,y,b){let E=o(y,b),S=E.length?qs(E):{cx:0,cz:0};M.cx=S.cx,M.cz=S.cz,M.p=Xr(0,Wl),M.dir=Math.random()<.5?1:-1,M.state="walk",M.hp=40,M.flee=0,M.phase=Xr(0,6),M.deadT=0,hi(M.person,Vl()),M.person.rotation.set(0,0,0),M.person.visible=!0,Du(M.cx,M.cz,M.p,s),M.x=s.x,M.z=s.z,M.h=s.h}function l(){let M=kr(Vl());n.scene.add(M);let y={person:M,x:0,z:0,h:0,cx:0,cz:0,p:0,dir:1,state:"walk",hp:40,flee:0,phase:0,deadT:0,kind:"ped"};return e.push(y),y}function c(M,y=0,b=0,E="shot"){if(M.state==="dead")return;M.state="dead",M.deadT=0,M.hp=0;let S=Math.atan2(y,b);M.person.rotation.set(0,S+Math.PI,0),M.fallDir={x:y,z:b},n.blood.hit(M.x,1,M.z,y,b,E==="car"?2.5:1.5),n.blood.pool(M.x+y*.9,M.z+b*.9,Xr(1.8,2.8)),M.kind==="enemy"&&M.onDeath&&M.onDeath(M),f(M.x,M.z,35)}function h(M,y,b,E){return M.state==="dead"?!1:(M.hp-=y,n.blood.hit(M.x,1.25,M.z,b,E,.8),M.hp<=0?(c(M,b,E),!0):(M.kind==="ped"&&(M.state="flee",M.flee=7),M.kind==="enemy"&&(M.aggro=!0),!1))}function f(M,y,b){for(let E of e){if(E.state==="dead")continue;let S=Math.hypot(E.x-M,E.z-y);if(S<b){E.state="flee",E.flee=6+Math.random()*3,Du(E.cx,E.cz,E.p+1,s);let N=Math.hypot(s.x-M,s.z-y);E.dir=N>S?1:-1}}}function p(M){let y=kr(M.outfit||Vl());hi(y,M.outfit||Vl()),Go(y,M.weapon||"pistol"),n.scene.add(y);let b=Object.assign({kind:"enemy",person:y,x:M.x,z:M.z,h:0,hp:M.hp||60,maxHp:M.hp||60,state:"idle",aggro:!1,cool:Xr(.5,1.5),phase:0,deadT:0,strafe:Math.random()<.5?1:-1,accuracy:.45,dmg:8,rate:.9,range:45},M);return b.person.position.set(b.x,0,b.z),t.push(b),b}function g(){for(let M of t)n.scene.remove(M.person);t.length=0}function x(M,y,b){if(M.state==="dead"){M.deadT+=y,m(M,y);return}let E=b.x-M.x,S=b.z-M.z,N=Math.hypot(E,S);(N<M.range||M.aggro)&&(M.aggro=!0);let V=0;if(M.aggro&&b.alive&&!b.hidden){M.h=Math.atan2(-E,-S);let U=M.boss?9:13,P=0,A=0;N>U+3?(P=E/N,A=S/N):N<U-3&&(P=-E/N,A=-S/N),P+=-S/N*M.strafe*.6,A+=E/N*M.strafe*.6;let z=Math.hypot(P,A)||1;V=M.boss?4.2:3;let B=n.collide(M.x+P/z*V*y,M.z+A/z*V*y,.45);if(Math.abs(B.x-M.x)<1e-4&&Math.abs(B.z-M.z)<1e-4&&(M.strafe*=-1),M.x=B.x,M.z=B.z,Math.random()<y*.4&&(M.strafe*=-1),M.cool-=y,M.cool<=0&&N<M.range*1.2){M.cool=M.rate*Xr(.8,1.3);let G=Math.max(.08,M.accuracy*(1-N/(M.range*1.6))*(b.inCar?.7:1)),W=Math.random()<G,L=M.x-Math.sin(M.h)*.9,k=M.z-Math.cos(M.h)*.9,Z=W?0:Xr(1.2,3)*(Math.random()<.5?-1:1),I=b.x+-S/N*Z,X=b.z+E/N*Z;n.shoot(L,k,I+(I-L)/N*(W?0:12),X+(X-k)/N*(W?0:12)),Bl(M.person),n.audio&&n.audio.shot&&n.audio.shot(M.weapon==="glock"?"pistol":M.weapon),W&&n.onPlayerHit(M.dmg,M)}}M.phase+=V*y*2.1,M.person.position.set(M.x,0,M.z),M.person.rotation.y=M.h,hs(M.person,M.phase,V,M.aggro,y)}function m(M,y){let b=Math.min(1,M.deadT/.35);if(M.person.rotation.x=-b*(Math.PI/2-.05),M.person.position.y=.12*b,M.deadT>.4){let E=M.person.userData;E.legs[0].rotation.x=.1,E.legs[1].rotation.x=-.15,E.arms[0].rotation.z=.9,E.arms[1].rotation.z=-.9}}function u(M,y){for(;e.length<r;)a(l(),y.x,y.z);for(let b of e){let E=Math.hypot(b.x-y.x,b.z-y.z)>190;if(b.state==="dead"){b.deadT+=M,m(b,M),(b.deadT>30||E&&b.deadT>3)&&a(b,y.x,y.z);continue}if(E){a(b,y.x,y.z);continue}if(b.state==="escape"){b.flee-=M;let N=n.collide(b.x+b.ex*Xo*M,b.z+b.ez*Xo*M,.4);b.x=N.x,b.z=N.z,b.phase+=Xo*M*2.1,b.person.position.set(b.x,0,b.z),hs(b.person,b.phase,Xo,!1,M),b.flee<=0&&_(b);continue}let S=yS;b.state==="flee"&&(b.flee-=M,S=Xo,b.flee<=0&&(b.state="walk")),b.p+=b.dir*S*M,Du(b.cx,b.cz,b.p,s),b.x=s.x,b.z=s.z,b.h=s.h+(b.dir<0?Math.PI:0),b.phase+=S*M*2.1,b.person.position.set(b.x,0,b.z),b.person.rotation.y=b.h,hs(b.person,b.phase,S,!1,M)}for(let b of t)x(b,M,y);i.length=0;for(let b of e)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.42,ref:b});for(let b of t)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.45,ref:b})}function d(M,y,b,E){if(Math.abs(E)<5)return 0;let S=-Math.sin(b),N=-Math.cos(b),V=0;for(let U of[e,t])for(let P of U)if(P.state!=="dead"&&(Math.hypot(P.x-M-S*1.2,P.z-y-N*1.2)<1.6||Math.hypot(P.x-M,P.z-y)<1.3)){let A=Math.sign(E);P.kind==="enemy"&&(P.hp=0),c(P,S*A,N*A,"car"),V++}return V}function v(M,y,b,E){let S=null,N=-1;for(let A of e){let z=Math.hypot(A.x-b,A.z-E);A.state!=="dead"&&z>N&&(N=z,S=A)}if(!S)return;let V=M-b,U=y-E,P=Math.hypot(V,U)||1;Object.assign(S,{state:"escape",x:M,z:y,ex:V/P,ez:U/P,flee:3.5,hp:40}),S.person.rotation.set(0,Math.atan2(-V,-U),0),S.person.position.set(M,0,y)}function _(M){let y=Math.max(0,Math.min(_i-1,Math.round(M.x/Wr+(_i-1)/2))),b=Math.max(0,Math.min(_i-1,Math.round(M.z/Wr+(_i-1)/2)));M.cx=(y-(_i-1)/2)*Wr,M.cz=(b-(_i-1)/2)*Wr;let E=Math.max(-zt,Math.min(zt,M.x-M.cx)),S=Math.max(-zt,Math.min(zt,M.z-M.cz)),N=Math.abs(S+zt),V=Math.abs(E-zt),U=Math.abs(S-zt),P=Math.abs(E+zt),A=Math.min(N,V,U,P);M.p=A===N?E+zt:A===V?zt*2+S+zt:A===U?zt*4+(zt-E):zt*6+(zt-S),M.state="flee",M.flee=4}function w(M){for(r=M;e.length>M;){let y=e.pop();n.scene.remove(y.person)}}function D(M){for(let y of e)y.person.visible=M;for(let y of t)y.person.visible=M}return{update:u,damage:h,scare:f,spawnEnemy:p,clearEnemies:g,carHits:d,setCount:w,setVisible:D,eject:v,get hitList(){return i},get enemies(){return t},get peds(){return e}}}It();var MS=14,Zs=3.5,Xl=MS/2+2.2,Uu=16;function ES(n,e){let t=(e%Uu+Uu)%Uu;return n==="z"?t<6?"green":t<8?"yellow":"red":t<8?"red":t<14?"green":"yellow"}var SS=(n,e)=>(n+e)%2*4;function ql(n,e,t,i){return n==="z"?{x:e+(t<0?Zs:-Zs),z:i,h:t<0?0:Math.PI}:{x:i,z:e+(t>0?Zs:-Zs),h:t>0?-Math.PI/2:Math.PI/2}}var Ys=new ut,qo=new In,qr=new H,Nu=new H(1,1,1),wm=new H(0,1,0),Yl=new Ne(1710618),bS=new Ne(16722458),wS=new Ne(16756768),TS=new Ne(2883434);function Tm(n){let e=n.lines.slice().sort((L,k)=>L-k),t=e.length,i=0,s=[];for(let L=0;L<t;L++)for(let k=0;k<t;k++){let Z=e[L],I=e[k],X=Xl-.6;s.push({ix:L,iz:k,axis:"z",x:Z+X,z:I+X,rot:0}),s.push({ix:L,iz:k,axis:"z",x:Z-X,z:I-X,rot:Math.PI}),s.push({ix:L,iz:k,axis:"x",x:Z-X,z:I+X,rot:-Math.PI/2}),s.push({ix:L,iz:k,axis:"x",x:Z+X,z:I-X,rot:Math.PI/2})}let r=s.length,o=new vt(.09,.11,4.2,6).translate(0,2.1,0),a=new _e({color:3093563,metalness:.6,roughness:.5}),l=new Pe(.45,1.25,.32).translate(0,4.6,0),c=new _e({color:1909030,roughness:.6,metalness:.3}),h=new Nr(.15,12),f=new Lt(o,a,r),p=new Lt(l,c,r),g=new lt({color:16777215,toneMapped:!1}),x=[0,1,2].map(()=>new Lt(h,g,r));p.castShadow=!0,s.forEach((L,k)=>{qo.setFromAxisAngle(wm,L.rot),qr.set(L.x,0,L.z),Ys.compose(qr,qo,Nu),f.setMatrixAt(k,Ys),p.setMatrixAt(k,Ys);let Z=Math.sin(L.rot),I=Math.cos(L.rot);for(let X=0;X<3;X++)qr.set(L.x+Z*.17,5-X*.38,L.z+I*.17),Ys.compose(qr,qo,Nu),x[X].setMatrixAt(k,Ys),x[X].setColorAt(k,Yl)});for(let L of[f,p,...x])L.instanceMatrix.needsUpdate=!0,n.scene.add(L);{let L=new st(Zs*2-.6,.45).rotateX(-Math.PI/2),k=new Lt(L,new _e({color:15922422,roughness:.7}),r);s.forEach((Z,I)=>{let X=e[Z.ix],ie=e[Z.iz],fe,xe,we;if(Z.axis==="z"){let Te=Z.rot===0?1:-1;fe=X+Te*Zs,xe=ie+Te*Xl,we=0}else{let Te=Z.rot<0?-1:1;fe=X+Te*Xl,xe=ie-Te*Zs,we=Math.PI/2}qo.setFromAxisAngle(wm,we),qr.set(fe,.065,xe),Ys.compose(qr,qo,Nu),k.setMatrixAt(I,Ys)}),k.instanceMatrix.needsUpdate=!0,n.scene.add(k)}let m=new Array(r).fill("");function u(L,k,Z){return ES(Z,i+SS(L,k))}function d(){let L=!1;for(let k=0;k<r;k++){let Z=s[k],I=u(Z.ix,Z.iz,Z.axis);I!==m[k]&&(m[k]=I,L=!0,x[0].setColorAt(k,I==="red"?bS:Yl),x[1].setColorAt(k,I==="yellow"?wS:Yl),x[2].setColorAt(k,I==="green"?TS:Yl))}if(L)for(let k of x)k.instanceColor.needsUpdate=!0}let v=[],_=12,w=L=>{let k=0,Z=1/0;for(let I=0;I<t;I++){let X=Math.abs(e[I]-L);X<Z&&(Z=X,k=I)}return k},D=[16109749,15250575,13011554,11037509,8014380];function M(L){let k=L.userData.profile,Z=new rt,I=new _e({color:Math.random()*16777215|0,roughness:.8}),X=new _e({color:D[Math.random()*D.length|0],roughness:.7}),ie=new ne(new Pe(.42,.5,.28),I);ie.position.y=.25;let fe=new ne(new Vt(.13,10,8),X);fe.position.y=.62,Z.add(ie,fe);let xe=k?k.glass:[[.5,.8]],we=Math.min(...xe.map(Se=>Se[1]))-.15,Te=xe.reduce((Se,Oe)=>Se+Oe[0],0)/xe.length;Z.position.set(-.38,we,-Te+.25),L.add(Z),L.userData.driver=Z,L.userData.driverHead=fe}function y(){let L=n.CAR_DEFS.filter(X=>X.id!=="hyper"||Math.random()<.3),k=L[Math.random()*L.length|0],Z=n.buildCar(k),I=k.colors[Math.random()*k.colors.length|0];return n.applyCarSkin(Z,I,null),M(Z),n.scene.add(Z),{group:Z,def:k,color:I,axis:"z",li:0,dir:1,s:0,speed:0,cruise:0,x:0,z:0,h:0,honk:0,wait:0,driverHp:30,panic:0,empty:!1}}function b(L,k,Z,I){for(let xe=0;xe<20;xe++){L.axis=Math.random()<.5?"z":"x",L.li=Math.random()*t|0,L.dir=Math.random()<.5?1:-1,L.s=e[0]+Math.random()*(e[t-1]-e[0]);let we=ql(L.axis,e[L.li],L.dir,L.s),Te=Math.hypot(we.x-k,we.z-Z);if(I?Te<150:Te>70&&Te<170){L.x=we.x,L.z=we.z,L.h=we.h;break}}let X=ql(L.axis,e[L.li],L.dir,L.s);L.x=X.x,L.z=X.z,L.h=X.h,L.cruise=9+Math.random()*5,L.speed=L.cruise*.6,L.driverHp=30,L.panic=0,L.empty=!1;let ie=L.group.userData.driver;ie&&(ie.visible=!0,ie.rotation.set(0,0,0));let fe=L.group.userData.driverHead;fe&&fe.material.color.setHex(D[Math.random()*D.length|0]),L.group.position.set(L.x,0,L.z),L.group.rotation.y=L.h}function E(L){if(L.dir>0){for(let k=0;k<t;k++)if(e[k]>L.s+.3)return k}else for(let k=t-1;k>=0;k--)if(e[k]<L.s-.3)return k;return-1}function S(L,k){let Z=Math.random(),I=L.dir>0&&k===t-1||L.dir<0&&k===0,X=Z<.55&&!I?"straight":Z<.82?"right":"left",ie,fe;if(X==="straight")return;L.axis==="z"?(ie="x",fe=L.dir<0==(X==="right")?1:-1):(ie="z",fe=L.dir>0==(X==="right")?1:-1);let xe=e[L.li],we=k;(fe>0&&xe>=e[t-1]-1||fe<0&&xe<=e[0]+1)&&(fe=-fe),L.axis=ie,L.li=we,L.dir=fe,L.s=xe}function N(L,k,Z){for(i+=L,d();v.length<_;){let I=y();b(I,k.x,k.z,v.length<4),v.push(I)}for(let I of v){if(Math.hypot(I.x-k.x,I.z-k.z)>230){b(I,k.x,k.z,!1);continue}if(I.empty&&I.respawnT!==void 0&&(I.respawnT-=L,I.respawnT<=0)){delete I.respawnT,b(I,k.x,k.z,!1);continue}if(I.empty){I.speed=Math.max(0,I.speed-6*L),I.s+=I.dir*I.speed*L;let F=ql(I.axis,e[I.li],I.dir,I.s);I.x+=(F.x-I.x)*Math.min(1,L*6),I.z+=(F.z-I.z)*Math.min(1,L*6),I.group.position.set(I.x,0,I.z);continue}I.panic>0&&(I.panic-=L);let X=I.panic>0?I.cruise*1.8:I.cruise,ie=E(I);if(ie>=0){let F=e[ie],me=(F-I.s)*I.dir,ee=me-Xl,ge=I.axis==="z"?I.li:ie,te=I.axis==="z"?ie:I.li,De=u(ge,te,I.axis);ee>-.5&&(De==="red"||De==="yellow"&&ee>5)&&(X=Math.min(X,Math.max(0,ee-.3)*1.1)),me<=.05&&(I.s=F,S(I,ie))}else I.dir=-I.dir;for(let F of v){if(F===I||F.axis!==I.axis||F.li!==I.li||F.dir!==I.dir)continue;let me=(F.s-I.s)*I.dir;me>0&&me<14&&(X=Math.min(X,Math.max(0,(me-6.5)*1.3)))}if(Z){let F=-Math.sin(I.h),me=-Math.cos(I.h),ee=Z.x-I.x,ge=Z.z-I.z,te=ee*F+ge*me,De=Math.abs(ee*me-ge*F);te>0&&te<13&&De<2.6?(X=Math.min(X,Math.max(0,(te-5.5)*1.3)),I.wait+=L):I.wait=0}let fe=X>I.speed?4:9;I.speed+=Math.sign(X-I.speed)*Math.min(Math.abs(X-I.speed),fe*L),I.s+=I.dir*I.speed*L;let xe=ql(I.axis,e[I.li],I.dir,I.s),we=Math.min(1,L*6);I.x+=(xe.x-I.x)*we,I.z+=(xe.z-I.z)*we;let Te=xe.h-I.h;Te=Math.atan2(Math.sin(Te),Math.cos(Te)),I.h+=Te*Math.min(1,L*5),I.group.position.set(I.x,0,I.z),I.group.rotation.y=I.h;let Se=I.speed*L*2.6;for(let F of I.group.userData.wheels)F.rotation.x+=Se;let Oe=I.group.userData.flashers;if(Oe){let F=(i*6|0)%2;Oe[0].emissiveIntensity=F?4:.25,Oe[1].emissiveIntensity=F?.25:4}}}function V(L,k){let Z=null;for(let I of v){let X=-Math.sin(I.h),ie=-Math.cos(I.h);for(let fe of[-1.3,0,1.3]){let xe=I.x+X*fe,we=I.z+ie*fe,Te=1+k,Se=L.x-xe,Oe=L.z-we,F=Math.hypot(Se,Oe);F<Te&&F>1e-6&&(L.x=xe+Se/F*Te,L.z=we+Oe/F*Te,Z=I)}}return Z&&(Z.speed*=.3),Z}let U=[];function P(){U.length=0;for(let L of v){let k=-Math.sin(L.h),Z=-Math.cos(L.h);U.push({x:L.x+k*.9,z:L.z+Z*.9,r:1,ref:{kind:"car",car:L}}),U.push({x:L.x-k*.9,z:L.z-Z*.9,r:1,ref:{kind:"car",car:L}})}return U}function A(L,k,Z,I){if(L.empty)return null;L.panic=6,L.driverHp-=k;let X=L.group.userData.driver,ie=new H;return X&&X.getWorldPosition(ie),L.driverHp<=0?(L.empty=!0,L.respawnT=40,X&&(X.rotation.z=.9,X.rotation.x=.3),L.group.userData.driverHead&&L.group.userData.driverHead.material.color.setHex(7995392),{kind:"killed",x:ie.x,y:ie.y+.6,z:ie.z}):{kind:"hit",x:ie.x,y:ie.y+.6,z:ie.z}}function z(L,k,Z){let I=null,X=Z;for(let ie of v){let fe=Math.hypot(ie.x-L,ie.z-k);fe<X&&(X=fe,I=ie)}return I}function B(L){let k=v.indexOf(L);return k<0?null:(v.splice(k,1),n.scene.remove(L.group),{alive:!L.empty,x:L.x,z:L.z,h:L.h,def:L.def,color:L.color})}function G(L){for(_=L;v.length>L;){let k=v.pop();n.scene.remove(k.group)}}function W(L){for(let k of v)k.group.visible=L}return{update:N,collide:V,hitList:P,setCount:G,setVisible:W,stateAt:u,hitCar:A,nearestCar:z,remove:B,get cars(){return v}}}It();var Pn=500,Ou=5e6,Am=74,Rm=5,Cm=3.5,Pm=[-185,-111,-37,37,111,185],Zl={name:"EMERALD",outfit:{shirt:1023320,pants:1120295,skin:9263675,hair:1839885,hairLong:!0,hat:"none",hatColor:1023320},weapon:"glock",hp:900};function AS(n){let e=n*2654435761>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Yr(n){let e=n()<.5,t=Pm[n()*Pm.length|0],i=-175+n()*350,s=n()<.5?1:-1;return e?{x:t+s*Cm,z:i}:{x:i,z:t+s*Cm}}function Lm(n){let e=n()*Rm|0,t=n()*Rm|0,i=(e-2)*Am,s=(t-2)*Am,r=-24+n()*48,o=n()*4|0,a=28;return o===0?{x:i+r,z:s-a}:o===1?{x:i+a,z:s+r}:o===2?{x:i-r,z:s+a}:{x:i-a,z:s-r}}var us=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),Im=["Main St Kings","Exchange Crew","River Rats","Portage Posse","North End Wolves","Osborne Outlaws","St. Boniface Snakes","Pembina Pirates"],Dm=["a mystery briefcase","hot pizzas","a stolen painting","a box of cash","a burner phone","VIP documents","a suspicious duffel bag","concert tickets"];function Fu(n){if(n=Math.max(1,Math.min(Pn,n|0)),n===Pn)return{n,type:"boss",title:"EMERALD",reward:Ou,desc:"Emerald runs the whole city and she's sitting on millions. Fight through her guards at the compound and take her down. Everything she has is yours.",points:[{x:-148,z:-148}],guards:10,timeLimit:0};let e=AS(n*7919+13),t=n/Pn,s=["deliver","race","collect","hit"][(n+(e()*4|0))%4];n%50===0&&(s="hit");let r=Im[e()*Im.length|0];if(s==="deliver"){let l=Yr(e),c=Yr(e);for(let f=0;f<6&&us(l,c)<150;f++)c=Yr(e);let h=us(l,c);return{n,type:s,title:"Special Delivery",reward:600+n*30,desc:`Pick up ${Dm[e()*Dm.length|0]} and get it across town before the clock runs out.`,points:[l,c],timeLimit:Math.round(25+h/(11+t*6))}}if(s==="race"){let l=[],c=Yr(e);l.push(c);let h=4+Math.min(4,n/80|0),f=0;for(;l.length<h;){let p=Yr(e);for(let g=0;g<6&&us(p,c)<90;g++)p=Yr(e);f+=us(p,c),l.push(p),c=p}return{n,type:s,title:"Checkpoint Race",reward:800+n*35,desc:`Hit all ${h} checkpoints in order before time runs out.`,points:l,timeLimit:Math.round(20+f/(13+t*8))}}if(s==="collect"){let l=Lm(e),c=[],h=3+Math.min(5,n/70|0);for(let f=0;f<h;f++){let p=e()*Math.PI*2,g=20+e()*60;c.push({x:Math.max(-180,Math.min(180,l.x+Math.cos(p)*g)),z:Math.max(-180,Math.min(180,l.z+Math.sin(p)*g))})}return{n,type:s,title:"Cash Grab",reward:500+n*30,desc:`The ${r} dropped ${h} bags of cash around town. Grab them all before they come back.`,points:c,timeLimit:Math.round(60+h*18-t*30)}}let o=n%50===0,a=Math.min(9,1+(n/45|0)+(o?2:0));return{n,type:"hit",title:o?"Take Down the Boss":"Gang Hit",reward:(o?5e3:1e3)+n*45,desc:o?`The leader of the ${r} is holed up with his crew. End it.`:`${a} members of the ${r} are causing trouble. Take them out.`,points:[Lm(e)],enemies:a,leader:o,timeLimit:0,tier:t}}function zu(n,e){let t=n/Pn;return{hp:Math.round((45+n*.35)*(e?4:1)),accuracy:Math.min(.62,.22+t*.4),dmg:Math.round(6+t*10),rate:Math.max(.35,1-t*.5),weapon:e?"deagle":["pistol","glock","smg","shotgun","ak"][Math.min(4,n/100|0)]}}function Um(n){let e=new lt({color:16765503,transparent:!0,opacity:.85,depthWrite:!1,side:St}),t=new lt({color:16765503,transparent:!0,opacity:.2,depthWrite:!1,side:St,blending:Gt}),i=new rt;i.add(new ne(new oi(.85,1,40).rotateX(-Math.PI/2).translate(0,.1,0),e)),i.add(new ne(new vt(1,1,30,24,1,!0).translate(0,15,0),t)),i.visible=!1,n.scene.add(i);let s=new _e({color:4156202,roughness:.8,emissive:2772250,emissiveIntensity:.4}),r=[],o=null,a=0,l=0,c=0,h=[],f=null,p=!1,g=0,x=0;function m(){for(let y of r)n.scene.remove(y);r.length=0}function u(y,b){if(!y){i.visible=!1;return}i.visible=!0,i.position.set(y.x,0,y.z),i.scale.set(b,1,b)}function d(y){if(v(),o=Fu(y),a=0,l=0,c=o.timeLimit,p=!1,g=0,h=[],f=null,o.type==="deliver"||o.type==="race")u(o.points[0],o.type==="race"?7:6);else if(o.type==="collect"){u(null);for(let b of o.points){let E=new rt;E.add(new ne(new Vt(.45,10,8).scale(1,.8,1).translate(0,.4,0),s));let S=new ne(new st(.5,.5),new lt({color:4906624,transparent:!0,opacity:.9}));S.position.y=1.3,E.add(S),E.position.set(b.x,0,b.z),E.userData={p:b,got:!1,sign:S},n.scene.add(E),r.push(E)}}else u(o.points[0],o.type==="boss"?12:9);return o}function v(){o=null,u(null),m(),n.people.clearEnemies(),h=[],f=null}function _(){p=!0;let y=o.points[0];if(o.type==="boss"){let E=zu(480,!1);for(let S=0;S<o.guards;S++){let N=S/o.guards*Math.PI*2;h.push(n.people.spawnEnemy(Object.assign({},E,{x:y.x+Math.cos(N)*14,z:y.z+Math.sin(N)*14,weapon:S%2?"ak":"smg",hp:160})))}f=n.people.spawnEnemy({x:y.x,z:y.z,outfit:Zl.outfit,weapon:Zl.weapon,hp:Zl.hp,accuracy:.55,dmg:11,rate:.32,range:60,boss:!0,name:Zl.name}),h.push(f),n.toast('\u{1F451} EMERALD: "You came all this way to die?"',3500);return}let b=zu(o.n,!1);for(let E=0;E<o.enemies;E++){let S=E/o.enemies*Math.PI*2,N=o.leader&&E===0,V=N?zu(o.n,!0):b;h.push(n.people.spawnEnemy(Object.assign({},V,{x:y.x+Math.cos(S)*6,z:y.z+Math.sin(S)*6,boss:N})))}}function w(y,b){if(!o)return null;x+=y,l+=y,e.opacity=.6+Math.sin(x*4)*.25,i.rotation.y+=y*.6;for(let S of r)S.rotation.y+=y*1.5,S.userData.sign.lookAt(b.cam||i.position);if(o.timeLimit&&(c=o.timeLimit-l,c<=0))return"fail";let E=b.pos;if(o.type==="deliver"){let S=o.points[a];if(us(E,S)<6.5)return a++,n.beep(880,.08),a>=o.points.length?"pass":(u(o.points[a],6),"next")}else if(o.type==="race"){let S=o.points[a];if(us(E,S)<7.5)return a++,n.beep(990,.06),a>=o.points.length?"pass":(u(o.points[a],7),"next")}else if(o.type==="collect"){for(let S of r)if(!S.userData.got&&us(E,S.userData.p)<2.6)return S.userData.got=!0,S.visible=!1,g++,n.beep(1200,.05),g>=r.length?"pass":"next"}else if(!p&&us(E,o.points[0])<75&&_(),p){if(u(null),o.type==="boss"){if(f&&f.state==="dead")return"pass"}else if(h.every(S=>S.state==="dead"))return"pass"}return null}function D(){if(!o)return"";if(o.type==="deliver")return a===0?"Pick up the package":"Deliver the package";if(o.type==="race")return`Checkpoint ${a+1}/${o.points.length}`;if(o.type==="collect")return`Cash bags ${g}/${r.length}`;if(!p)return o.type==="boss"?"Go to Emerald's compound":"Go to the gang hangout";let y=h.filter(b=>b.state!=="dead").length;return o.type==="boss"?f.state==="dead"?"Emerald is down":`Kill Emerald (${y-(f.state==="dead"?0:1)} guards left)`:`Enemies left: ${y}`}function M(y){if(y=y||{x:0,z:0},!o)return null;if(o.type==="deliver"||o.type==="race")return o.points[a]||null;if(o.type==="collect"){let E=null,S=1/0;for(let N of r){if(N.userData.got)continue;let V=Math.hypot(N.position.x-y.x,N.position.z-y.z);V<S&&(S=V,E=N.userData.p)}return E}if(!p)return o.points[0];let b=h.find(E=>E.state!=="dead"&&(o.type!=="boss"||E===f))||h.find(E=>E.state!=="dead");return b?{x:b.x,z:b.z}:null}return{start:d,stop:v,update:w,objective:D,target:M,get mission(){return o},get active(){return!!o},get timeLeft(){return o&&o.timeLimit?Math.max(0,c):null},get boss(){return f}}}var{CAR_DEFS:yi,buildCar:nc,effectiveStats:a0,applyCarSkin:Ko}=pu,Q=n=>document.getElementById(n),dn,wt,Ft,bt,yn=null,Gn=null,eo=null,he=null,At=null,Ie=null,Qn=null,l0=null,Dt=null,Ue=null,Zt="boot",En=!1,Vn=!1,hc="menu",Ot={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},ms=null,ot=null,td=null,mc=null,gs=!1,ic="menu",Zo=.6,Tt=null,to=!1,xs=null,Ln=null,zn=null,Zu=null,_s=100,ui=!1,$u=0,sc=0,fs={x:0,z:0,alive:!0,hidden:!1,inCar:!0},Bt=null,nd=!1,Mi=null,Ym=null,c0=new Map,Wu=new H,gc=Fo(),Wn=null,Si=null,h0=null,jr=0,Ks=null,ea=null,uc=null,fi=null,rc=null,Ju=0,Ku=1,Nn=null,ct=!1,ve=null,et=null,jo=null,vs=null,id=null,oc=null,js=!1,vi=0,Qo=0,$s=null,ps=null,Zm="",ln={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},ec={x:0,z:0},Xt=new H,Un=new H,Mn=new H,Qr={x:0,z:0},$o={x:0,z:0,hitX:!1,hitZ:!1},Wt={name:"",mode:"car",x:0,z:0,h:0,speed:0,car:"sport",look:null,px:0,pz:0,ph:0,b:-1,w:null},di=null,tc={def:null,stats:null,group:null},Qs=[],ju=[],Qu=[],bi=62,ac=0,$m=0;function xt(n,e=2200){let t=Q("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout($m),$m=setTimeout(()=>t.classList.add("hidden"),e)}function Vi(){let n=Ue.cash.toLocaleString();Q("cash-val").textContent=n,Q("garage-cash").textContent=n}function ys(n){Ue.cash=Math.max(0,Ue.cash+Math.round(n)),un(Ue),Vi()}function sd(){Gn=Mi?Mi.def:yi.find(n=>n.id===Ue.currentCar)||yi[0],yn&&wt.remove(yn),yn=nc(Gn),Mi?Ko(yn,Mi.color,null):Ko(yn,Ue.paint[Gn.id],Gs(Ue,Gn.id)),wt.add(yn),di=null,eo=a0(Gn,Mi?{}:Ue.upgrades[Gn.id]||{}),Qs=(yn.userData.wheels||[]).slice(),ju=Qs.filter(n=>n.position.z<0),Qu=yn.userData.brakeMats||[],Q("menu-car-name").textContent=Gn.name}function ta(){let n=he.heading;Mn.set(-Math.sin(n),0,-Math.cos(n)),Xt.set(he.pos.x-Mn.x*9,4,he.pos.z-Mn.z*9),Ft.position.copy(Xt)}function rd(){let n=bt.spawn;he.pos.x=n.x,he.pos.z=n.z,he.heading=n.heading||0,gc=Fo(),ta(),no(0)}function Js(){let n=he.pos.x,e=he.pos.z,t=he.heading;sd(),he.reset(eo),he.pos.x=n,he.pos.z=e,he.heading=t,no(0)}var Ei=new H;function no(n){yn.position.set(he.pos.x,0,he.pos.z),yn.rotation.y=he.heading;let e=yn.userData.flashers;if(e){let s=(performance.now()/170|0)%2;e[0].emissiveIntensity=s?4:.25,e[1].emissiveIntensity=s?.25:4}let t=Ot.speed*n*2.4;for(let s=0;s<Qs.length;s++)Qs[s].rotation.x+=t;for(let s=0;s<ju.length;s++)ju[s].rotation.y=Ot.steer*.45;let i=At&&At.input.throttle<0;if(yn.userData.setBrake)yn.userData.setBrake(i);else for(let s=0;s<Qu.length;s++)Qu[s].emissiveIntensity=i?4.5:1.8;if(fi){let s=he.heading;Ei.set(-Math.sin(s),0,-Math.cos(s)),fi.position.set(he.pos.x+Ei.x*1.8,1.1,he.pos.z+Ei.z*1.8),rc.position.set(he.pos.x+Ei.x*22,.4,he.pos.z+Ei.z*22)}}var Jo=new H;function IS(n,e){let t=Qs[n];return e.setFromMatrixPosition(t.matrixWorld),e}var Xu=0;function DS(n){if(!Ks||Zt!=="freeroam"||En||Vn)return;yn.updateMatrixWorld();let e=Qs.length;if(Ot.drifting&&Ku>.3)for(let i=0;i<e;i++)Qs[i].position.z<0||(IS(i,Jo),Math.random()<.85*Ku&&Ks.emit(Jo.x+(Math.random()-.5)*.4,.35,Jo.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&uc.add(Jo.x,Jo.z,he.heading));if(Xu+=n,(At&&At.input.throttle||0)>.4&&Xu>.09){Xu=0;let i=he.heading;Ei.set(-Math.sin(i),0,-Math.cos(i));let s=Math.cos(i),r=-Math.sin(i);for(let o of[-.45,.45]){let a=he.pos.x-Ei.x*2.2+s*o,l=he.pos.z-Ei.z*2.2+r*o;ea.emit(a,.32,l,{vx:-Ei.x*2,vy:.8,vz:-Ei.z*2,life:.5,size:.55,grow:1.6})}}Ks.update(n),ea.update(n)}function US(n,e){let t=od(n,e,1.15);if(zn&&!ot&&zn.collide(t,1.15)&&he){let s=Math.hypot(he.vel.x,he.vel.z);he.vel.x*=.55,he.vel.z*=.55,s>8&&Ie&&Ie.beep(90,.08)}return t}function od(n,e,t){let i=n,s=e,r=!1,o=!1,a=td||bt.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(i+t<c.minX||i-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(i,c.maxX)),f=Math.max(c.minZ,Math.min(s,c.maxZ)),p=i-h,g=s-f,x=p*p+g*g;if(!(x>=t*t))if(x>1e-8){let m=Math.sqrt(x),u=(t-m)/m,d=p*u,v=g*u;i+=d,s+=v,Math.abs(d)>Math.abs(v)?r=!0:o=!0}else{let m=i-c.minX,u=c.maxX-i,d=s-c.minZ,v=c.maxZ-s,_=Math.min(m,u,d,v);_===m?(i=c.minX-t,r=!0):_===u?(i=c.maxX+t,r=!0):_===d?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return $o.x=i,$o.z=s,$o.hitX=r,$o.hitZ=o,$o}function ad(n,e,t){let i=od(n,e,t);if(ot)return i;zn&&zn.collide(i,t);let s=he.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=he.pos.x+r*a,c=he.pos.z+o*a,h=1+t,f=i.x-l,p=i.z-c,g=Math.hypot(f,p);g<h&&g>1e-6&&(i.x=l+f/g*h,i.z=c+p/g*h)}return i}function Wi(){if(!et)return;hi(et,g0()),Go(et,fn().equipped);let n=fn().equipped&&Gi(fn().equipped);Q("weapon-name").textContent=n?n.name.toUpperCase():"UNARMED";let e=Q("weapon-ammo");e.textContent=n?String(fn().ammo[n.id]|0):fn().weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!n)}function ld(){for(let n of["speedo","gear-hud","nitro-bar"])Q(n).classList.toggle("hidden",ct);Q("weapon-hud").classList.toggle("hidden",!ct)}function cd(){if(Math.abs(Ot.speed)>4){xt("Slow down to get out");return}let n=Tu(he.pos.x,he.pos.z,he.heading),e=ad(n.x,n.z,.45);ve.reset(e.x,e.z,he.heading),he.vel.x=0,he.vel.z=0,he.speed=0,Ot.speed=0,Ot.drifting=!1,Ot.nitro=!1,Ot.steer=0,gc=Fo(),ct=!0,et.visible=!0,et.position.set(ve.pos.x,0,ve.pos.z),Wi(),At.setMode("foot"),ld(),Ie.engine(0,0),Ie.skid(!1),Ie.beep(420,.06)}function hd(){ct&&(ct=!1,et.visible=!1,vi=0,At&&At.setMode("drive"),ld(),gc=Fo(),Ie&&Ie.beep(520,.06),Qo&&(un(Ue),Qo=0))}function NS(n){let e=ve.heading,t=ve.pos.x,i=ve.pos.z;Mn.set(-Math.sin(e),0,-Math.cos(e));let s=vi>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;if(Un.set(t-Mn.x*r+a*c,o,i-Mn.z*r+l*c),ot){let f=ot.room.bounds,p=.45;Un.x=Math.max(f.minX+p,Math.min(f.maxX-p,Un.x)),Un.z=Math.max(f.minZ+p,Math.min(f.maxZ-p,Un.z)),Un.y=Math.min(Un.y,3.9)}let h=1-Math.exp(-n*7);Xt.x+=(Un.x-Xt.x)*h,Xt.y+=(Un.y-Xt.y)*h,Xt.z+=(Un.z-Xt.z)*h,Ft.position.copy(Xt),Ft.lookAt(t+Mn.x*5+a*c,1.45,i+Mn.z*5+l*c),Math.abs(60-bi)>.25&&(bi+=(60-bi)*Math.min(1,n*4),Ft.fov=bi,Ft.updateProjectionMatrix())}function zS(n){let e=Q("crosshair");if(!(At.input.aim&&!!fn().equipped&&!ui)){Ym=null,ln.lock=null,e.classList.add("hidden");return}let i=Gi(fn().equipped),s=i?i.range:60,r=null,o=1/0,a=(l,c)=>{let h=l.x-ve.pos.x,f=l.z-ve.pos.z,p=Math.hypot(h,f);if(p>s||p<.8)return;let g=Math.atan2(-h,-f),x=Math.abs(Math.atan2(Math.sin(g-ve.heading),Math.cos(g-ve.heading)));if(x>.75)return;let m=x*2+p/80-c;m<o&&(o=m,r=l)};for(let l of Ln.hitList)a(l,l.ref.kind==="enemy"?.6:0);for(let l of dc)a(l,.5);if(!ot)for(let l of Zu)l.ref.car.empty||a(l,-.1);if(Ym=r,e.classList.remove("hidden"),r){let l=Math.atan2(-(r.x-ve.pos.x),-(r.z-ve.pos.z));ve.heading+=Math.atan2(Math.sin(l-ve.heading),Math.cos(l-ve.heading))*Math.min(1,n*12),ln.lock={x:r.x,z:r.z},Wu.set(r.x,1.3,r.z).project(Ft),e.style.left=((Wu.x+1)/2*100).toFixed(2)+"%",e.style.top=((1-Wu.y)/2*100).toFixed(2)+"%",e.classList.add("lock")}else ln.lock=null,e.style.left="50%",e.style.top="45%",e.classList.remove("lock");vi=Math.max(vi,.25)}function OS(n){if(ve.update(At.input,n,ad),et.position.x=ve.pos.x,et.position.z=ve.pos.z,et.rotation.y=ve.heading,At.consumeCycle()){let i=wu(fn());un(Ue),Wi(),fn().weapons.length?xt(i?Gi(i).name:"Holstered",1200):xt("No guns yet \u2014 visit LOCK & LOAD",1600)}zS(n),ln.pos.x=ve.pos.x,ln.pos.z=ve.pos.z,ln.heading=ve.heading;let e=At.consumeFireEdge();e&&!fn().equipped&&fn().weapons.length&&(wu(fn()),Wi()),jo.update(n,ln,At.input.fire,e).fired&&(Ln&&!ot&&Ln.scare(ve.pos.x,ve.pos.z,45),Bl(et),vi=.9,Qo++,Q("weapon-ammo").textContent=String(fn().ammo[fn().equipped]|0)),At.input.fire&&fn().equipped&&(vi=Math.max(vi,.3)),vi=Math.max(0,vi-n),hs(et,ve.phase,ve.speed,vi>0&&!!fn().equipped,n),NS(n),Qo&&ac%120===0&&(un(Ue),Qo=0)}function an(n,e,t){if($s=n,ps=e,t!==Zm){Zm=t;let i=Q("btn-action");i.textContent=t||"",i.classList.toggle("hidden",!t)}}function FS(n,e){let t=null,i=1.5;for(let s of bt.buildings){if(Hr(n,e,s.door.x+s.door.nx*.5,s.door.z+s.door.nz*.5)<2.2)return s;let o=Math.max(s.minX,Math.min(n,s.maxX)),a=Math.max(s.minZ,Math.min(e,s.maxZ)),l=Math.hypot(n-o,e-a);l<i&&(i=l,t=s)}return t}function ud(){let n=ve.heading;if(Mn.set(-Math.sin(n),0,-Math.cos(n)),Xt.set(ve.pos.x-Mn.x*4.6,2.6,ve.pos.z-Mn.z*4.6),ot){let e=ot.room.bounds,t=.45;Xt.x=Math.max(e.minX+t,Math.min(e.maxX-t,Xt.x)),Xt.z=Math.max(e.minZ+t,Math.min(e.maxZ-t,Xt.z))}Ft.position.copy(Xt)}function u0(n){let e=zn.remove(n);e&&(e.alive&&(Ln.eject(e.x-Math.cos(e.h)*1.8,e.z+Math.sin(e.h)*1.8,ve.pos.x,ve.pos.z),Ln.scare(e.x,e.z,25)),Mi={def:e.def,color:e.color},sd(),he.reset(eo),he.pos.x=e.x,he.pos.z=e.z,he.heading=e.h,no(0),di=null,hd(),ta(),Ie.beep(300,.08),xt("\u{1F697} Stolen: "+e.def.name+(e.alive?" \u2014 the driver ran off":""),2400))}function d0(n){let e=ms.get(xm(n.id)),t=Hr(ve.pos.x,ve.pos.z,n.door.x,n.door.z)<2.6,i,s,r,o;if(t)r=n.door.nx,o=n.door.nz,i=n.door.x+r*1.4,s=n.door.z+o*1.4;else{let l=Math.max(n.minX,Math.min(ve.pos.x,n.maxX)),c=Math.max(n.minZ,Math.min(ve.pos.z,n.maxZ)),h=ve.pos.x-l,f=ve.pos.z-c,p=Math.hypot(h,f)||1;r=h/p,o=f/p,i=l+r*1.4,s=c+o*1.4}ot={b:n,room:e,back:{x:i,z:s,heading:Math.atan2(-r,-o)}};let a=c0.get(n.id);if(a===void 0||performance.now()-a>480*1e3){let l=1+Math.floor(Math.random()*3),c=ms.lootSpots(e,l+1),h=c.slice(0,l).map(f=>({x:f.x,z:f.z,kind:"cash",amount:50+Math.floor(Math.random()*450)}));Math.random()<.12&&c[l]&&h.push({x:c[l].x,z:c[l].z,kind:"safe",amount:2e3+Math.floor(Math.random()*3e3)}),ms.spawnLoot(e,h)}else ms.clearLoot();td=e.colliders,ln.colliders=e.colliders,ln.targets=[],ve.reset(e.spawn.x,e.spawn.z,e.spawn.heading),et.position.set(ve.pos.x,0,ve.pos.z),ud(),an(null,null,""),Ie.beep(640,.07),xt("\u{1F3E2} Inside: "+gm[e.style]+" \u2014 EXIT pad is behind you",2200)}function xc(){if(!ot)return;let n=ot.back;ot&&c0.set(ot.b.id,performance.now()),ms.clearLoot(),ot=null,td=null,ln.colliders=bt.colliders,ln.targets=vs.targets;let e=ad(n.x,n.z,.45);ve.reset(e.x,e.z,n.heading),et.position.set(ve.pos.x,0,ve.pos.z),ud(),an(null,null,""),Ie.beep(520,.07)}function Jm(){if(ct){if(ot){let s=ms.grab(ve.pos.x,ve.pos.z);s&&(ys(s.amount),Ie.beep(1300,.06),xt((s.kind==="safe"?"\u{1F513} Cracked a safe! +$":"\u{1F4B5} Found cash +$")+s.amount.toLocaleString(),1800));let r=Hr(ve.pos.x,ve.pos.z,ot.room.exit.x,ot.room.exit.z);if(r<.8){xc();return}return r<2.4?an("exit",null,"\u{1F6AA} EXIT BUILDING"):an(null,null,"")}let n=null,e=2.4;for(let s of vs.stores){let r=Hr(ve.pos.x,ve.pos.z,s.door.x,s.door.z);r<e&&(e=r,n=s)}if(n)return an("shop",n,(n.type==="garage"?"\u{1F527} ":n.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+n.name);if(Hr(ve.pos.x,ve.pos.z,he.pos.x,he.pos.z)<4.2)return an("in",null,"\u{1F697} GET IN");let t=zn&&zn.nearestCar(ve.pos.x,ve.pos.z,3.6);if(t)return an("steal",t,"\u{1F697} STEAL CAR");let i=FS(ve.pos.x,ve.pos.z);return i?an("enter",i,"\u{1F3E2} ENTER BUILDING"):an(null,null,"")}if(Math.abs(Ot.speed)<4)return an("out",null,"\u{1F6AA} GET OUT");an(null,null,"")}function Km(){$s==="out"?cd():$s==="in"?hd():$s==="enter"&&ps?d0(ps):$s==="steal"&&ps?u0(ps):$s==="exit"?xc():$s==="shop"&&ps&&(ps.type==="garage"?pc("play"):BS(ps))}function BS(n){js=!0,an(null,null,""),Ie.beep(700,.06),id.open(n)}function f0(){js=!1,id.close(),Wi(),Vi()}var pn="single",HS="city-driver-tdm",lc=25,p0={red:14100029,blue:2060267},Ve={team:null,score:{red:0,blue:0},over:0,lastAttacker:null,kills:0,deaths:0},m0={weapons:["ak","glock","shotgun","sniper"],ammo:{ak:9999,glock:9999,shotgun:9999,sniper:9999},equipped:"ak"},dc=[];function fn(){return ln.save||Ue}function g0(){return pn==="tdm"&&Ve.team?Object.assign({},Ue.outfit,{shirt:p0[Ve.team]}):Ue.outfit}function qu(n){pn=n,Dt.connect(n==="single"?null:n==="tdm"?HS:void 0),Ln.clearEnemies(),Ln.setCount(n==="tdm"?0:14),ln.save=n==="tdm"?m0:Ue,Q("tdm-hud").classList.toggle("hidden",n!=="tdm"),cc(),n==="tdm"?(Tt.active&&(Tt.stop(),Q("objective").classList.add("hidden")),Ve.score.red=Ve.score.blue=0,Ve.kills=Ve.deaths=0,Ve.over=0,Ve.team=null,setTimeout(()=>{pn==="tdm"&&(kS(),dd())},1600),xt("\u2694\uFE0F TEAM DEATHMATCH \u2014 first team to "+lc+" kills wins",3e3)):(et&&hi(et,Ue.outfit),xt(n==="single"?"\u{1F9CD} Single player \u2014 the city is all yours":"\u{1F310} Online free roam \u2014 "+Dt.count+" in the city",2600))}function kS(){let n=0,e=0;Dt.each(t=>{t.team==="red"?n++:t.team==="blue"&&e++}),Ve.team=n<e?"red":e<n?"blue":Math.random()<.5?"red":"blue",hi(et,g0()),di=null,_c(),xt("You are on "+Ve.team.toUpperCase()+" team",2200)}function x0(n){return n==="red"?{x:-176,z:3,heading:-Math.PI/2}:{x:176,z:-3,heading:Math.PI/2}}function dd(){na();let n=x0(Ve.team||"red");he.pos.x=n.x+(Math.random()-.5)*6,he.pos.z=n.z+(Math.random()-.5)*20,he.heading=n.heading,he.vel.x=he.vel.z=0,Ot.speed=0,no(0),ta(),cd(),m0.equipped="ak",Wi()}function _c(){Q("tdm-red").textContent=Ve.score.red,Q("tdm-blue").textContent=Ve.score.blue;let n=Q("tdm-you");n.textContent=Ve.team?"YOU: "+Ve.team.toUpperCase()+" \xB7 "+Ve.kills+"K / "+Ve.deaths+"D":"joining\u2026",n.className=Ve.team||""}function _0(n){if(!n||!n.kt||!(n.kt in Ve.score))return;Ve.score[n.kt]++,n.k===Dt.myId&&(Ve.kills++,ys(150));let e=Q("killfeed"),t=document.createElement("div");for(t.innerHTML=`<b class="${n.kt}">${jm(n.kn||"?")}</b> \u2620 <b class="${n.kt==="red"?"blue":"red"}">${jm(n.vn||"?")}</b>`,e.prepend(t);e.children.length>4;)e.lastChild.remove();if(setTimeout(()=>t.remove(),6e3),_c(),!Ve.over&&(Ve.score.red>=lc||Ve.score.blue>=lc)){let i=Ve.score.red>=lc?"red":"blue";Ve.over=8,Q("tdm-win").textContent=(i===Ve.team?"\u{1F3C6} ":"")+i.toUpperCase()+" TEAM WINS!",Q("tdm-win").className=i,i===Ve.team&&(ys(2500),xt("+$2,500 for the win!",2500))}}var jm=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Qm(n,e,t,i){pn!=="tdm"||!Ve.team||(Dt.send("hit",{t:n.id,d:e,tm:Ve.team,n:Ue.name}),xs.hit(n.x,1.25,n.z,t,i,1))}function e0(){if(Bt&&Bt.active&&y0("you got wasted"),pn!=="tdm")return;Ve.deaths++;let n=Ve.lastAttacker,e={k:n?n.id:null,kn:n?n.name:"the street",kt:n?n.team:null,v:Dt.myId,vn:Ue.name};n&&(Dt.send("kill",e),_0(e)),_c()}function t0(){return pn==="tdm"?x0(Ve.team||"red"):{x:bt.spawn.x,z:bt.spawn.z,heading:bt.spawn.heading||0}}function GS(){if(dc.length=0,pn!=="tdm"||!Ve.team)return;let n=ot?ot.b.id:-1;Dt.each(e=>{if(e.team===Ve.team||e.dead||e.b!==n||!e.placed)return;let t={kind:"player",id:e.id,name:e.name,team:e.team,x:e.x,z:e.z};dc.push({x:e.x,z:e.z,r:e.mode==="car"?1.5:.5,ref:t})})}function v0(){return Math.min(Pn,(Ue.missionsDone|0)+1)}function VS(){if(pn==="tdm"){xt("Missions are in Single Player / Online Free Roam");return}nd=!0,an(null,null,"");let n=Ue.missionsDone|0,e=Bt.active,t=e?Bt.mission:Fu(v0());Q("mb-num").textContent=n>=Pn?"ALL 500 COMPLETE":"MISSION "+t.n+" / "+Pn,Q("mb-title").textContent=t.type==="boss"?"\u{1F451} FINAL BOSS: EMERALD":t.title,Q("mb-desc").textContent=n>=Pn?"You beat Emerald and took her millions. Replay any time \u2014 missions keep paying.":t.desc,Q("mb-reward").textContent="$"+t.reward.toLocaleString()+(t.timeLimit?" \xB7 \u23F1 "+t.timeLimit+"s":""),Q("mb-progress").style.width=(n/Pn*100).toFixed(1)+"%",Q("mb-left").textContent=n>=Pn?"Emerald defeated \u{1F480}":Pn-1-Math.min(n,Pn-1)+" missions until Emerald",Q("mb-start").textContent=e?"\u2716 ABANDON MISSION":"\u25B6 START",Q("mission-board").classList.remove("hidden")}function fc(){nd=!1,Q("mission-board").classList.add("hidden")}function WS(){if(Bt.active){Bt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),fc(),xt("Mission abandoned");return}Tt&&Tt.active&&(Tt.stop(),Q("objective").classList.add("hidden"));let n=(Ue.missionsDone|0)>=Pn?1+Math.floor(Math.random()*(Pn-1)):v0(),e=Bt.start(n);fc(),Q("mission-hud").classList.remove("hidden"),Q("mh-title").textContent="#"+e.n+" "+(e.type==="boss"?"EMERALD":e.title.toUpperCase()),Ie.beep(700,.08),xt("\u{1F4F1} "+e.title+" \u2014 "+e.desc,3500)}function XS(){let n=Bt.mission;Bt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),n.n>(Ue.missionsDone|0)&&(Ue.missionsDone=n.n),ys(n.reward),un(Ue),Ie.beep(880,.1),setTimeout(()=>Ie.beep(1320,.15),130),n.type==="boss"?(Q("victory").classList.remove("hidden"),Q("victory-cash").textContent="+$"+Ou.toLocaleString()):xt("\u2705 MISSION PASSED  +$"+n.reward.toLocaleString(),3e3)}function y0(n){Bt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),Ie.beep(200,.2),xt("\u274C MISSION FAILED \u2014 "+n+". Try again from \u{1F4F1}",3200)}function qS(){let n=ct?ve.pos.x:he.pos.x,e=ct?ve.pos.z:he.pos.z,t=ct?ve.heading:he.heading;Q("mh-obj").textContent=Bt.objective();let i=Bt.timeLeft;Q("mh-time").textContent=i!=null?"\u23F1 "+Math.ceil(i)+"s":"",Q("mh-time").classList.toggle("low",i!=null&&i<10);let s=Bt.target({x:n,z:e}),r=Q("mh-arrow");if(s&&!ot){let a=Math.atan2(-(s.x-n),-(s.z-e)),l=Math.atan2(Math.sin(a-t),Math.cos(a-t));r.style.transform="rotate("+(-l).toFixed(3)+"rad)",r.classList.remove("hidden"),Q("mh-dist").textContent=Math.round(Math.hypot(s.x-n,s.z-e))+" m"}else r.classList.add("hidden"),Q("mh-dist").textContent="";let o=Bt.boss;o&&o.state!=="dead"?(Q("boss-hud").classList.remove("hidden"),Q("boss-fill").style.width=Math.max(0,o.hp/o.maxHp*100)+"%"):Q("boss-hud").classList.add("hidden")}function fd(){let n=Q("hp-fill");n&&(n.style.width=Math.max(0,_s)+"%",n.style.background=_s>50?"#4ade80":_s>25?"#fbbf24":"#ef4444")}function Yu(n){ui||Zt!=="freeroam"||(_s-=ct?n:n*.5,sc=.35,fd(),Ie&&Ie.beep(160,.05),_s<=0&&YS())}function YS(){if(ui=!0,$u=0,_s=0,fd(),an(null,null,""),Q("wasted").classList.remove("hidden"),ct&&et&&(et.rotation.x=-Math.PI/2+.05,et.position.y=.12),xs){let n=ct?ve.pos.x:he.pos.x,e=ct?ve.pos.z:he.pos.z;xs.pool(n,e,2.6)}typeof e0=="function"&&e0()}function ZS(){ui=!1,_s=100,fd(),Q("wasted").classList.add("hidden"),et&&(et.rotation.x=0,et.position.y=0);let n=pn==="tdm"?0:Math.min(500,Math.round(Ue.cash*.05));if(n>0&&(Ue.cash-=n,un(Ue),Vi()),na(),typeof t0=="function"){let e=t0();he.pos.x=e.x,he.pos.z=e.z,he.heading=e.heading,he.vel.x=he.vel.z=0,ta(),no(0)}else rd();if(pn==="tdm"){Ve.lastAttacker=null,dd();return}xt(n>0?"\u{1F3E5} Hospital bill: -$"+n:"\u{1F3E5} Back on your feet",2200)}function $S(n){let e=he.heading,t=he.pos.x,i=he.pos.z;Mn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(Ot.speed),r=8.5+s*.045,o=3.6+s*.014;Un.set(t-Mn.x*r,o,i-Mn.z*r);let a=1-Math.exp(-n*5.5);Xt.x+=(Un.x-Xt.x)*a,Xt.y+=(Un.y-Xt.y)*a,Xt.z+=(Un.z-Xt.z)*a,Ft.position.copy(Xt),Ft.lookAt(t+Mn.x*5,1.7,i+Mn.z*5);let l=62+Math.min(14,s*.22)+(Ot.nitro?6:0);Math.abs(l-bi)>.25&&(bi+=(l-bi)*Math.min(1,n*4),Ft.fov=bi,Ft.updateProjectionMatrix())}function JS(n){return n<2?"N":n<20?"1":n<40?"2":n<65?"3":n<95?"4":n<125?"5":"6"}function KS(){let n=Math.abs(Ot.speed)*2.2;Q("speed-val").textContent=Math.round(n),Q("gear-hud").textContent=JS(n),Q("nitro-fill").style.width=(Math.max(0,Math.min(1,Ot.nitroFrac))*100).toFixed(1)+"%"}function Ms(){for(let n of["main-menu","pause-menu","garage"])Q(n).classList.add("hidden")}function jS(){return gs||to}function na(){js&&f0(),ot&&xc(),ct&&hd(),an(null,null,"")}function vc(){Zt="menu",En=!1,Vn=!1,Qn&&Qn.active&&Qn.exit(),na(),At&&(At.setMode("drive"),At.detach()),Ms(),Q("main-menu").classList.remove("hidden"),Q("hud").classList.add("hidden"),Q("touch-controls").classList.add("hidden"),Q("drag-ui").classList.add("hidden"),Tt&&Tt.active&&Tt.stop(),Q("objective").classList.add("hidden"),Bt&&Bt.active&&Bt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),fc(),Q("m-tutorial").classList.toggle("hidden",!!Ue.tutorialDone),Dt&&pn!=="online"&&(pn="online",Dt.connect(void 0)),ln.save=Ue,Q("tdm-hud").classList.add("hidden"),Q("tdm-win").classList.add("hidden"),Ve.over=0,et&&hi(et,Ue.outfit),di=null,Ie.engine(0,0),Ie.skid(!1)}function cc(){Qn&&Qn.active&&Qn.exit(),na(),fi&&(fi.intensity=Ju),Q("drag-ui").classList.add("hidden"),Zt="freeroam",En=!1,Vn=!1,Ms(),Q("hud").classList.remove("hidden"),Q("touch-controls").classList.remove("hidden"),At.attach(),At.setMode("drive"),rd(),Vi(),!Ue.tutorialDone&&!Ue.tutorialSkipped?rb():xt("Free roam \u2014 drift for cash, walk into any building!")}function n0(){na(),Zt="drag",En=!1,Vn=!1,fi&&(fi.intensity=0),Ms(),Q("hud").classList.add("hidden"),Q("touch-controls").classList.remove("hidden"),At.attach(),At.setMode("drag"),Q("drag-ui").classList.remove("hidden"),Qn.enter()}function i0(){Zt!=="freeroam"&&Zt!=="drag"||Vn||js||jS()||(En=!0,an(null,null,""),Ms(),Q("pause-menu").classList.remove("hidden"))}function QS(){En=!1,Ms()}function pc(n){hc=n,Vn=!0,l0.refresh(),Vi(),Ms(),Q("garage").classList.remove("hidden")}function eb(){Vn=!1,Ms(),Q("hud").classList.toggle("hidden",Zt!=="freeroam"),et&&Wi(),hc==="menu"?vc():hc==="pause"?(En=!0,Q("pause-menu").classList.remove("hidden")):En=!1,Vi()}var tb=!1;function ed(n,e){ic=n,Vn&&(Vn=!1),Zt==="freeroam"&&(En=!0),gs=!0,Ms(),Q("hud").classList.add("hidden"),Q("touch-controls").classList.add("hidden"),an(null,null,""),tb=et.visible,Mi&&(Mi=null,Js()),mc.open(e||"car")}function nb(n){if(!ct)if(n==="driver"){let e=Tu(he.pos.x,he.pos.z,he.heading);et.position.set(e.x,0,e.z),et.rotation.y=he.heading,hs(et,0,0,!1,0),et.visible=!0}else et.visible=!1}function ib(){if(gs=!1,mc.close(),et.visible=ct,Wi(),ic==="menu"){vc();return}if(ic==="garage"){pc(hc);return}(Zt==="freeroam"||Zt==="drag")&&(Q("hud").classList.toggle("hidden",Zt!=="freeroam"),Q("touch-controls").classList.remove("hidden"),ic==="pause"?(En=!0,Q("pause-menu").classList.remove("hidden")):En=!1,ct?ud():ta())}function sb(n){Zo+=n*.35;let e=mc.tab==="driver",t=e?et.position.x:he.pos.x,i=e?et.position.z:he.pos.z,s=e?3.4:7.2,r=e?1.7:2.6,o=e?1.05:.75;Ft.position.set(t+Math.sin(Zo)*s,r,i+Math.cos(Zo)*s);let a=Math.cos(Zo),l=-Math.sin(Zo),c=e?.9:2.2;Ft.lookAt(t+a*c,o,i+l*c),Math.abs(55-bi)>.25&&(bi=55,Ft.fov=55,Ft.updateProjectionMatrix()),Qr.x=t,Qr.z=i,bt.update(n,Qr)}function rb(){Tt&&(Tt.start(),Q("objective").classList.remove("hidden"),M0(),xt("\u{1F393} TUTORIAL \u2014 finish it for $"+Gl.toLocaleString()+" + a free car!",3200))}function M0(){if(!Tt.active){Q("objective").classList.add("hidden");return}Q("obj-step").textContent="STEP "+(Tt.step+1)+"/"+Tt.total,Q("obj-text").textContent=Tt.text;let n=Tt.target(),e=ct?ve.pos.x:he.pos.x,t=ct?ve.pos.z:he.pos.z,i=ct?ve.heading:he.heading,s=Q("obj-arrow"),r=Q("obj-dist");if(n&&!ot){let o=Math.atan2(-(n.x-e),-(n.z-t)),a=Math.atan2(Math.sin(o-i),Math.cos(o-i));s.style.transform="rotate("+(-a).toFixed(3)+"rad)",s.classList.remove("hidden"),r.textContent=Math.round(Math.hypot(n.x-e,n.z-t))+" m"}else s.classList.add("hidden"),r.textContent=Tt.text.startsWith("DRIFT")?Math.round(Tt.driftProgress*100)+"%":""}function E0(){Ue.tutorialDone=!0,ys(Gl),un(Ue),Q("objective").classList.add("hidden"),Ie.beep(880,.1),setTimeout(()=>Ie.beep(1175,.14),120),ob()}function ob(){to=!0,an(null,null,"");let n={topSpeed:1,accel:1,handling:1,grip:1};for(let t of yi)for(let i in n)n[i]=Math.max(n[i],t.stats[i]);let e=(t,i,s)=>`<div class="stat-row"><span>${t}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(i/s*100))}%"></i></div></div>`;Q("pick-list").innerHTML=yi.map(t=>`<div class="car-card"><div class="cinfo"><b>${t.name}</b><small>${t.desc} \xB7 worth $${t.price.toLocaleString()}</small><div class="stat-bars">${e("SPD",t.stats.topSpeed,n.topSpeed)}${e("ACC",t.stats.accel,n.accel)}${e("HDL",t.stats.handling,n.handling)}${e("GRP",t.stats.grip,n.grip)}</div></div><button class="buy-btn" data-id="${t.id}">PICK FREE</button></div>`).join(""),Q("car-pick").classList.remove("hidden")}function S0(n){Mi=null;let e=yi.find(t=>t.id===n);e&&(Ue.owned.includes(n)||Ue.owned.push(n),Ue.upgrades[n]||(Ue.upgrades[n]={engine:0,turbo:0,tires:0,suspension:0,nitro:0}),typeof Ue.paint[n]!="number"&&(Ue.paint[n]=e.colors[0]),Ue.currentCar=n,un(Ue),Js(),Q("car-pick").classList.add("hidden"),to=!1,Vi(),xt("\u{1F3C6} "+e.name+" is yours! +$"+Gl.toLocaleString()+" in the bank",3200),Ie.beep(990,.1))}function s0(n,e){let t=Q("mp-status");t.classList.remove("hidden"),t.className="mp-status "+n,t.textContent=n==="on"?"\u25CF online \xB7 "+e+(e===1?" player":" players"):n==="connecting"?"\u25CF connecting\u2026":"\u25CF offline";let i=Q("online-hud");i.textContent=n==="on"?"\u{1F310} "+e+" online":"\u{1F310} \u2026",i.classList.toggle("dim",n!=="on")}function ab(){return Wt.name=Ue.name,Wt.car=Gn.id,di||(di=Jp(Ue,Gn.id),pn==="tdm"&&Ve.team&&(di.o[0]=p0[Ve.team])),Wt.team=pn==="tdm"?Ve.team:null,Wt.dead=ui,Wt.look=di,Wt.b=ot?ot.b.id:-1,ct?(Wt.mode="foot",Wt.x=ve.pos.x,Wt.z=ve.pos.z,Wt.h=ve.heading,Wt.speed=ve.speed,Wt.px=he.pos.x,Wt.pz=he.pos.z,Wt.ph=he.heading,Wt.w=fn().equipped||null):(Wt.mode="car",Wt.x=he.pos.x,Wt.z=he.pos.z,Wt.h=he.heading,Wt.speed=Ot.speed,Wt.w=null),Wt}async function lb(){dn=new wo({antialias:!1,powerPreference:"high-performance"}),dn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),dn.setSize(Nn.view.w,Nn.view.h),dn.toneMapping=Uo,dn.toneMappingExposure=1,dn.shadowMap.enabled=!0,dn.shadowMap.type=vl,Q("game-container").appendChild(dn.domElement),wt=new Dr,Ft=new cn(62,Nn.view.w/Nn.view.h,.1,3e3),bt=Cp(wt,am),vs=cm(wt,bt);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(zm(),Nm)),t=new Ir(dn);wt.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let n=Gp();wt.add(n.mesh),h0={uniforms:n.uniforms,sun:bt.sun,hemi:bt.hemi,scene:wt,renderer:dn},b0("day",!0);try{Wn=(await Promise.resolve().then(()=>(qm(),Xm))).createPostFX(dn,wt,Ft),Wn.setBloomStrength(Cl.day.bloom)}catch(e){console.warn("postfx off",e),Wn=null}Si=new Rl("auto"),Si.onChange(r0),r0(Si.level,vu(Si.level)),Ks=new Kn(wt,70,{color:14211288,opacity:.42}),ea=new Kn(wt,40,{color:7829367,opacity:.3,size:.9}),uc=new Pl(wt,500),fi=new ml(13624575,0,60,.5,.45,1.2),rc=new Yt,wt.add(rc),fi.target=rc,wt.add(fi)}function r0(n,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);dn.setPixelRatio(t),Wn&&(Wn.setPixelRatio(Math.min(t,1)),Wn.setSize(Nn.view.w,Nn.view.h),Wn.setBloomEnabled(e.bloom));let i=e.shadows;(dn.shadowMap.enabled!==i||bt&&bt.sun.castShadow!==i)&&(dn.shadowMap.enabled=i,bt&&(bt.sun.castShadow=i),wt.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),bt&&bt.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),Ku=e.particles,uc&&uc.setVisible(e.particles>.3)}function b0(n,e){let t=yu;typeof n=="string"&&(jr=t.indexOf(n)),jr<0&&(jr=0);let i=t[jr],s=Vp(h0,i),r=i==="day"?0:i==="sunset"?.45:1;bt&&bt.setGlow(r),Wn&&Wn.setBloomStrength(s.bloom),Ju=i==="day"?0:i==="sunset"?60:160,fi&&Zt!=="drag"&&(fi.intensity=Ju);let o=Q("tod-btn");o&&(o.textContent=i==="day"?"\u2600\uFE0F":i==="sunset"?"\u{1F307}":"\u{1F319}"),e||xt(s.label+" mode")}function cb(){jr=(jr+1)%yu.length,b0()}var o0=performance.now();function w0(n){requestAnimationFrame(w0);let e=(n-o0)/1e3;o0=n,e>0||(e=.016),e>.1&&(e=.1),ac++;let t=Zt==="freeroam"&&!En&&!Vn&&!js&&!gs&&!to&&!ui&&!nd;if(gs)sb(e);else if(t&&ct)OS(e),bt.update(e,ve.pos),vs.update(e),ms.update(e,ot&&ot.room),Ks.update(e),ea.update(e),Si&&Si.update(e),Ie.engine(0,0),Ie.skid(!1),ec.x=he.pos.x,ec.z=he.pos.z,ot?oc.draw(ot.back.x,ot.back.z,ve.heading,ec,Dt):oc.draw(ve.pos.x,ve.pos.z,ve.heading,ec,Dt),Jm(),At.consumeAction()&&Km();else if(t){Ot=he.update(At.input,e,US);let i=Wp(gc,Ot.drifting,Ot.speed,e);i>0&&(ys(i),xt("DRIFT +$"+i.toLocaleString())),Qr.x=he.pos.x,Qr.z=he.pos.z,bt.update(e,Qr),no(e),$S(e),KS(),DS(e),vs.update(e),jo.update(e,ln,!1,!1),oc.draw(he.pos.x,he.pos.z,he.heading,null,Dt),Jm(),At.consumeAction()&&Km(),Si&&Si.update(e);let s=Math.min(1,Math.abs(Ot.speed)/(eo.topSpeed*1.15));Ie.engine(s,Math.abs(At.input.throttle||0)),Ie.skid(Ot.drifting)}else Zt==="drag"&&!En&&!Vn&&!gs?Qn.active&&Qn.update(e):(Ie.engine(0,0),Ie.skid(!1));if(Zt==="freeroam"&&!En&&!Vn&&!gs&&(fs.x=ct?ve.pos.x:he.pos.x,fs.z=ct?ve.pos.z:he.pos.z,fs.alive=!ui,fs.hidden=!!ot,fs.inCar=!ct,!js&&!to&&(Ln.update(e,fs),zn.update(e,fs,ct?null:fs),zn.hitList(),!ct&&!ui&&Ln.carHits(he.pos.x,he.pos.z,he.heading,Ot.speed)&&(Ie.beep(70,.12),he.vel.x*=.85,he.vel.z*=.85)),xs.update(e),sc>0&&(sc-=e,Q("hurt").style.opacity=String(Math.max(0,sc/.35)*.75)),ui&&($u+=e,$u>3.2&&ZS())),t&&Bt&&Bt.active){let i=Bt.update(e,{pos:ct?ve.pos:he.pos,cam:Ft.position});i==="pass"?XS():i==="fail"&&y0("out of time"),Bt.active&&ac%3===0&&qS()}if(t&&Tt&&Tt.active){let i=Tt.update(e,{pos:ct?ve.pos:he.pos,drifting:!ct&&Ot.drifting,speed:ct?0:Ot.speed,onFoot:ct,inside:ot?ot.b.id:-1});i==="next"?(Ie.beep(880,.08),xt("\u2705 Nice! Next: "+Tt.text,2200)):i==="done"&&E0(),ac%3===0&&M0()}GS(),Ve.over>0&&(Ve.over-=e,Q("tdm-win").classList.remove("hidden"),Ve.over<=0&&(Q("tdm-win").classList.add("hidden"),Ve.score.red=Ve.score.blue=0,_c(),pn==="tdm"&&!ui&&dd())),Dt&&Dt.update(e,Zt==="freeroam"?ab():null,n),Ks&&(Zt!=="freeroam"||En||Vn||js)&&(Ks.update(e),ea.update(e)),Wn?Wn.render():dn.render(wt,Ft)}function hb(){Q("m-freeroam").onclick=()=>{Ie.unlock(),Nn.goLandscape(),Ie.beep(600,.06),qu("single")},Q("m-online").onclick=()=>{Ie.unlock(),Nn.goLandscape(),Ie.beep(600,.06),qu("online")},Q("m-tdm").onclick=()=>{Ie.unlock(),Nn.goLandscape(),Ie.beep(600,.06),qu("tdm")},Q("m-drag").onclick=()=>{Ie.unlock(),Nn.goLandscape(),Ie.beep(600,.06),n0()},Q("store-close").onclick=()=>{Ie.beep(500,.05),f0()},Q("m-garage").onclick=()=>{Ie.unlock(),pc("menu")},Q("p-resume").onclick=()=>{Ie.beep(600,.05),Nn.goLandscape(),QS()},Q("p-freeroam").onclick=()=>{Ie.beep(600,.05),cc()},Q("p-drag").onclick=()=>{Ie.beep(600,.05),n0()},Q("p-garage").onclick=()=>pc("pause"),Q("p-quit").onclick=()=>vc(),Q("menu-btn").onclick=i0,Q("garage-close").onclick=eb,Q("drag-exit").onclick=()=>{Qn.active&&Qn.exit(),cc()},Q("m-editor").onclick=()=>{Ie.unlock(),Ie.beep(600,.05),ed("menu","car")},Q("p-editor").onclick=()=>{Ie.beep(600,.05),ed("pause",ct?"driver":"car")},Q("se-done").onclick=()=>{Ie.beep(500,.05),ib()},Q("m-tutorial").onclick=()=>{Ie.unlock(),Nn.goLandscape(),Ie.beep(600,.06),Ue.tutorialSkipped=!1,un(Ue),cc()},Q("obj-skip").onclick=()=>{Tt.stop(),Ue.tutorialSkipped=!0,un(Ue),Q("objective").classList.add("hidden"),xt("Tutorial skipped \u2014 replay it from the main menu for $100K",2600)},Q("mission-btn").onclick=()=>{Ie.beep(650,.05),VS()},Q("mb-start").onclick=()=>WS(),Q("mb-close").onclick=()=>{Ie.beep(500,.05),fc()},Q("victory-ok").onclick=()=>{Q("victory").classList.add("hidden")},Q("pick-list").addEventListener("click",n=>{let e=n.target.closest("button[data-id]");e&&S0(e.dataset.id)}),Q("tod-btn")&&(Q("tod-btn").onclick=()=>{Ie.beep(600,.05),cb()}),Q("gfx-btn")&&(Q("gfx-btn").onclick=()=>{Ie.beep(600,.05);let n=Si.cycleMode();Q("gfx-btn").textContent=n==="auto"?"\u2728":n==="high"?"\u2728+":"\u2728\u2212",xt("Graphics: "+n.toUpperCase()+" ("+kp[Si.level]+")")}),window.addEventListener("pointerdown",()=>Ie.unlock()),window.addEventListener("keydown",()=>Ie.unlock()),document.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("gesturestart",n=>n.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(Zt==="freeroam"||Zt==="drag")&&!En&&i0()})}function ub(n,e){dn&&(Ft.aspect=n/e,Ft.updateProjectionMatrix(),dn.setSize(n,e),Wn&&Wn.setSize(n,e))}async function db(){try{Ue=$p(Qp(Bp())),Ie=Np(),Nn=qp(ub),await lb(),At=Pp({isRotated:()=>Nn.rotated}),ve=new Fl,et=kr(Ue.outfit),et.visible=!1,wt.add(et),jo=um(wt),Object.assign(ln,{save:Ue,colliders:bt.colliders,targets:vs.targets,audio:Ie,toast:xt,onTargetHit:()=>{ys(bu),xt("TARGET +$"+bu,900)},onShot:n=>{Dt&&Dt.sendShots(n)}}),ms=_m(wt),xs=Sm(wt),Ln=bm({scene:wt,blood:xs,audio:Ie,count:14,collide:(n,e,t)=>od(n,e,t),shoot:(n,e,t,i)=>jo.remoteShot(n,e,t,i),onPlayerHit:n=>Yu(n)}),zn=Tm({scene:wt,lines:bt.roadLines,buildCar:nc,applyCarSkin:Ko,CAR_DEFS:yi}),Zu=zn.hitList(),Bt=Um({scene:wt,people:Ln,toast:xt,beep:(n,e)=>Ie.beep(n,e)}),ln.hitables=[Ln.hitList,Zu,dc],ln.onPersonHit=(n,e,t,i)=>{if(n.kind==="ped"||n.kind==="enemy")Ln.damage(n,e,t,i);else if(n.kind==="car"){let s=zn.hitCar(n.car,e,t,i);s&&(xs.hit(s.x,s.y,s.z,t,i,s.kind==="killed"?1.6:.7),s.kind==="killed"&&(xs.pool(s.x+t,s.z+i,1.4),Ln.scare(s.x,s.z,30)))}else typeof Qm=="function"&&n.kind==="player"&&Qm(n,e,t,i)},Tt=vm(wt,bt),id=dm({save:Ue,persist:()=>un(Ue),toast:n=>xt(n,1600),beep:(n,e)=>Ie.beep(n,e),onChange:()=>{Vi(),Wi()}}),oc=pm(Q("minimap"),vs.stores),Wi(),ld(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(n,e,t)=>{ct?ve.reset(n,e,t||0):(he.pos.x=n,he.pos.z=e,he.heading=t||0)},save:()=>Ue,stores:()=>vs.stores,buildings:()=>bt.buildings,inside:()=>ot&&{id:ot.b.id,style:ot.room.style},enter:n=>d0(n),exit:()=>xc(),getOut:()=>cd(),tut:()=>Tt&&{active:Tt.active,step:Tt.step},finishTut:()=>E0(),pick:n=>S0(n),mp:()=>Dt&&{status:Dt.status,count:Dt.count},state:()=>({state:Zt,onFoot:ct,editorOpen:gs,pickOpen:to,cash:Ue.cash}),steal:()=>{let n=zn.cars[0];return ve.reset(n.x+2,n.z,0),u0(n),Gn.name},physics:()=>he,missions:()=>Bt,setDone:n=>{Ue.missionsDone=n},people:()=>Ln,traffic:()=>zn,hp:()=>_s,hurt:n=>Yu(n),cam:()=>({c:Ft.position.toArray().map(n=>+n.toFixed(2)),p:et.position.toArray().map(n=>+n.toFixed(2)),pv:et.visible,f:[ve.pos.x,ve.pos.z,ve.heading]})}),sd(),he=new wl(eo),rd(),l0=Hp({save:Ue,getDef:n=>yi.find(e=>e.id===n),onSelectCar:()=>{Mi=null,Js()},onPaint:()=>Js(),onWheels:()=>Js(),refreshScene:()=>Js(),openEditor:()=>ed("garage","car")}),mc=mm({save:Ue,cars:yi,persist:()=>un(Ue),beep:(n,e)=>Ie.beep(n,e),onCar:n=>{n?Js():Ko(yn,Ue.paint[Gn.id],Gs(Ue,Gn.id)),di=null},onOutfit:()=>{hi(et,Ue.outfit),di=null},onName:()=>{di=null},onTab:n=>nb(n)}),Dt=Em({scene:wt,CAR_DEFS:yi,buildCar:nc,applyCarSkin:Ko,buildCharacter:kr,setOutfit:hi,setHeldWeapon:Go,animateCharacter:hs,unpackLook:Kp,remoteShot:(n,e,t,i)=>jo.remoteShot(n,e,t,i),localBuilding:()=>ot?ot.b.id:-1,onHit:n=>{pn!=="tdm"||!Ve.team||n.tm===Ve.team||ui||(Ve.lastAttacker={id:n.id,name:n.n,team:n.tm},Yu(+n.d||10))},onKill:n=>{pn==="tdm"&&_0(n)},onStatus:(n,e)=>s0(n==="on"?"on":n==="connecting"?"connecting":"off",e),onCount:n=>{Dt&&Dt.status==="on"&&s0("on",n)}}),Dt.connect(),Qn=Up({scene:wt,camera:Ft,buildCar:nc,CAR_DEFS:yi,effectiveStats:a0,getPlayer:()=>(tc.def=Gn,tc.stats=eo,tc.group=yn,tc),controls:At,audio:Ie,addCash:ys,toast:xt,city:bt}),hb(),Vi(),Q("loading").classList.add("hidden"),vc(),requestAnimationFrame(w0)}catch(n){console.error(n),Q("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(n&&n.message||n)+"</p>"}}db();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
