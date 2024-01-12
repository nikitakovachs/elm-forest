(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hs="160",_i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sf=0,xo=1,of=2,El=1,cf=2,Mn=3,kn=0,Dt=1,Sn=2,$n=0,$i=1,Mo=2,So=3,Eo=4,lf=5,ni=100,uf=101,ff=102,yo=103,bo=104,hf=200,df=201,pf=202,mf=203,Ss=204,Es=205,_f=206,gf=207,vf=208,xf=209,Mf=210,Sf=211,Ef=212,yf=213,bf=214,Tf=0,Af=1,wf=2,ca=3,Rf=4,Cf=5,Pf=6,Lf=7,Gs=0,Df=1,Uf=2,zn=0,If=1,Nf=2,Ff=3,Of=4,Bf=5,$f=6,yl=300,Hi=301,Gi=302,ys=303,bs=304,Aa=306,Ts=1e3,Jt=1001,As=1002,Lt=1003,To=1004,Ba=1005,Vt=1006,zf=1007,xr=1008,Hn=1009,Hf=1010,Gf=1011,Vs=1012,bl=1013,Fn=1014,On=1015,Mr=1016,Tl=1017,Al=1018,ri=1020,Vf=1021,Zt=1023,kf=1024,Wf=1025,ai=1026,Vi=1027,Xf=1028,wl=1029,jf=1030,Rl=1031,Cl=1033,$a=33776,za=33777,Ha=33778,Ga=33779,Ao=35840,wo=35841,Ro=35842,Co=35843,Pl=36196,Po=37492,Lo=37496,Do=37808,Uo=37809,Io=37810,No=37811,Fo=37812,Oo=37813,Bo=37814,$o=37815,zo=37816,Ho=37817,Go=37818,Vo=37819,ko=37820,Wo=37821,Va=36492,Xo=36494,jo=36495,qf=36283,qo=36284,Yo=36285,Ko=36286,Ll=3e3,si=3001,Yf=3200,Kf=3201,Dl=0,Jf=1,Wt="",xt="srgb",Tn="srgb-linear",ks="display-p3",wa="display-p3-linear",la="linear",rt="srgb",ua="rec709",fa="p3",vi=7680,Jo=519,Zf=512,Qf=513,eh=514,Ul=515,th=516,nh=517,ih=518,rh=519,Zo=35044,Qo="300 es",ws=1035,En=2e3,ha=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const pr=Math.PI/180,Sr=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function Ws(n,e){return(n%e+e)%e}function ah(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sh(n,e,t){return n!==e?(t-n)/(e-n):0}function mr(n,e,t){return(1-t)*n+t*e}function oh(n,e,t,i){return mr(n,e,1-Math.exp(-t*i))}function ch(n,e=1){return e-Math.abs(Ws(n,e*2)-e)}function lh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function uh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function fh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hh(n,e){return n+Math.random()*(e-n)}function dh(n){return n*(.5-Math.random())}function ph(n){n!==void 0&&(ec=n);let e=ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mh(n){return n*pr}function _h(n){return n*Sr}function Rs(n){return(n&n-1)===0&&n!==0}function gh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function da(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vh(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),c=o(t/2),l=a((e+i)/2),u=o((e+i)/2),h=a((e-i)/2),d=o((e-i)/2),m=a((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(s*u,c*h,c*d,s*l);break;case"YZY":n.set(c*d,s*u,c*h,s*l);break;case"ZXZ":n.set(c*h,c*d,s*u,s*l);break;case"XZX":n.set(s*u,c*_,c*m,s*l);break;case"YXY":n.set(c*m,s*u,c*_,s*l);break;case"ZYZ":n.set(c*_,c*m,s*u,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const xh={DEG2RAD:pr,RAD2DEG:Sr,generateUUID:Xi,clamp:yt,euclideanModulo:Ws,mapLinear:ah,inverseLerp:sh,lerp:mr,damp:oh,pingpong:ch,smoothstep:lh,smootherstep:uh,randInt:fh,randFloat:hh,randFloatSpread:dh,seededRandom:ph,degToRad:mh,radToDeg:_h,isPowerOfTwo:Rs,ceilPowerOfTwo:gh,floorPowerOfTwo:da,setQuaternionFromProperEuler:vh,normalize:Rt,denormalize:Ni};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,a,o,s,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,c,l)}set(e,t,i,r,a,o,s,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],m=i[5],_=i[8],g=r[0],p=r[3],f=r[6],b=r[1],E=r[4],T=r[7],D=r[2],C=r[5],w=r[8];return a[0]=o*g+s*b+c*D,a[3]=o*p+s*E+c*C,a[6]=o*f+s*T+c*w,a[1]=l*g+u*b+h*D,a[4]=l*p+u*E+h*C,a[7]=l*f+u*T+h*w,a[2]=d*g+m*b+_*D,a[5]=d*p+m*E+_*C,a[8]=d*f+m*T+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-i*a*u+i*s*c+r*a*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=u*o-s*l,d=s*c-u*a,m=l*a-o*c,_=t*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*l-u*i)*g,e[2]=(s*i-r*o)*g,e[3]=d*g,e[4]=(u*t-r*c)*g,e[5]=(r*a-s*t)*g,e[6]=m*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ka.makeScale(e,t)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new Ve;function Il(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mh(){const n=pa("canvas");return n.style.display="block",n}const tc={};function _r(n){n in tc||(tc[n]=!0,console.warn(n))}const nc=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ic=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nr={[Tn]:{transfer:la,primaries:ua,toReference:n=>n,fromReference:n=>n},[xt]:{transfer:rt,primaries:ua,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wa]:{transfer:la,primaries:fa,toReference:n=>n.applyMatrix3(ic),fromReference:n=>n.applyMatrix3(nc)},[ks]:{transfer:rt,primaries:fa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ic),fromReference:n=>n.applyMatrix3(nc).convertLinearToSRGB()}},Sh=new Set([Tn,wa]),et={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Nr[e].toReference,r=Nr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Nr[n].primaries},getTransfer:function(n){return n===Wt?la:Nr[n].transfer}};function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xi;class Nl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=pa("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=zi(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eh=0;class Fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Xa(r[o].image)):a.push(Xa(r[o]))}else a=Xa(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Ft extends hi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Jt,r=Jt,a=Vt,o=xr,s=Zt,c=Hn,l=Ft.DEFAULT_ANISOTROPY,u=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Xi(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===si?xt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case As:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case As:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?si:Ll}set encoding(e){_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===si?xt:Wt}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=yl;Ft.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],_=c[9],g=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,T=(m+1)/2,D=(f+1)/2,C=(u+d)/4,w=(h+g)/4,X=(_+p)/4;return E>T&&E>D?E<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(E),r=C/i,a=w/i):T>D?T<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),i=C/r,a=X/r):D<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),i=w/a,r=X/a),this.set(i,r,a,t),this}let b=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bh extends hi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(_r("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===si?xt:Wt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends bh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ol extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Th extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=a[o+0],m=a[o+1],_=a[o+2],g=a[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==m||u!==_){let p=1-s;const f=c*d+l*m+u*_+h*g,b=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const D=Math.sqrt(E),C=Math.atan2(D,f*b);p=Math.sin(p*C)/D,s=Math.sin(s*C)/D}const T=s*b;if(c=c*p+d*T,l=l*p+m*T,u=u*p+_*T,h=h*p+g*T,p===1-s){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=a[o],d=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+u*h+c*m-l*d,e[t+1]=c*_+u*d+l*h-s*m,e[t+2]=l*_+u*m+s*d-c*h,e[t+3]=u*_-s*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(i/2),u=s(r/2),h=s(a/2),d=c(i/2),m=c(r/2),_=c(a/2);switch(o){case"XYZ":this._x=d*u*h+l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h+d*m*_;break;case"YZX":this._x=d*u*h+l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h-d*m*_;break;case"XZY":this._x=d*u*h-l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+s+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(o-r)*m}else if(i>s&&i>h){const m=2*Math.sqrt(1+i-s-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-i-h);this._w=(a-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-s);this._w=(o-r)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*s+r*l-a*c,this._y=r*u+o*c+a*s-i*l,this._z=a*u+o*l+i*c-r*s,this._w=o*u-i*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*i),u=2*(s*t-a*r),h=2*(a*i-o*t);return this.x=t+c*l+o*h-s*u,this.y=i+c*u+s*l-a*h,this.z=r+c*h+a*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-i*c,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new I,rc=new li;class wr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(a,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Or.subVectors(this.max,rr),Mi.subVectors(e.a,rr),Si.subVectors(e.b,rr),Ei.subVectors(e.c,rr),Rn.subVectors(Si,Mi),Cn.subVectors(Ei,Si),Jn.subVectors(Mi,Ei);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Jn.z,Jn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Jn.z,0,-Jn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Jn.y,Jn.x,0];return!qa(t,Mi,Si,Ei,Or)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Mi,Si,Ei,Or))?!1:(Br.crossVectors(Rn,Cn),t=[Br.x,Br.y,Br.z],qa(t,Mi,Si,Ei,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new I,new I,new I,new I,new I,new I,new I,new I],jt=new I,Fr=new wr,Mi=new I,Si=new I,Ei=new I,Rn=new I,Cn=new I,Jn=new I,rr=new I,Or=new I,Br=new I,Zn=new I;function qa(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Zn.fromArray(n,a);const s=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),c=e.dot(Zn),l=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Ah=new wr,ar=new I,Ya=new I;class Xs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ah.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ya)),this.expandByPoint(ar.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new I,Ka=new I,$r=new I,Pn=new I,Ja=new I,zr=new I,Za=new I;class Bl{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ka.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Ka);const a=e.distanceTo(t)*.5,o=-this.direction.dot($r),s=Pn.dot(this.direction),c=-Pn.dot($r),l=Pn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,_;if(u>0)if(h=o*c-s,d=o*s-c,_=a*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,m=h*(h+o*d+2*s)+d*(o*h+d+2*c)+l}else d=a,h=Math.max(0,-(o*d+s)),m=-h*h+d*(d+2*c)+l;else d=-a,h=Math.max(0,-(o*d+s)),m=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*a+s)),d=h>0?-a:Math.min(Math.max(-a,-c),a),m=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-a,-c),a),m=d*(d+2*c)+l):(h=Math.max(0,-(o*a+s)),d=h>0?a:Math.min(Math.max(-a,-c),a),m=-h*h+d*(d+2*c)+l);else d=o>0?-a:a,h=Math.max(0,-(o*d+s)),m=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ka).addScaledVector($r,d),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,c=i+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,r,a){Ja.subVectors(t,e),zr.subVectors(i,e),Za.crossVectors(Ja,zr);let o=this.direction.dot(Za),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Pn.subVectors(this.origin,e);const c=s*this.direction.dot(zr.crossVectors(Pn,zr));if(c<0)return null;const l=s*this.direction.dot(Ja.cross(Pn));if(l<0||c+l>o)return null;const u=-s*Pn.dot(Za);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,a,o,s,c,l,u,h,d,m,_,g,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,c,l,u,h,d,m,_,g,p)}set(e,t,i,r,a,o,s,c,l,u,h,d,m,_,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=o,f[9]=s,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),a=1/yi.setFromMatrixColumn(e,1).length(),o=1/yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=o*u,m=o*h,_=s*u,g=s*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=d-g*l,t[9]=-s*c,t[2]=g-d*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,_=l*u,g=l*h;t[0]=d+g*s,t[4]=_*s-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=m*s-_,t[6]=g+d*s,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,_=l*u,g=l*h;t[0]=d-g*s,t[4]=-o*h,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*u,t[9]=g-d*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,_=s*u,g=s*h;t[0]=c*u,t[4]=_*l-m,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=m*l-_,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,_=s*c,g=s*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*c,m=o*l,_=s*c,g=s*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=s*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,Rh)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Ln.crossVectors(i,It),Ln.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Ln.crossVectors(i,It)),Ln.normalize(),Hr.crossVectors(It,Ln),r[0]=Ln.x,r[4]=Hr.x,r[8]=It.x,r[1]=Ln.y,r[5]=Hr.y,r[9]=It.y,r[2]=Ln.z,r[6]=Hr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],m=i[13],_=i[2],g=i[6],p=i[10],f=i[14],b=i[3],E=i[7],T=i[11],D=i[15],C=r[0],w=r[4],X=r[8],x=r[12],y=r[1],H=r[5],V=r[9],ie=r[13],L=r[2],N=r[6],k=r[10],Y=r[14],j=r[3],q=r[7],K=r[11],ae=r[15];return a[0]=o*C+s*y+c*L+l*j,a[4]=o*w+s*H+c*N+l*q,a[8]=o*X+s*V+c*k+l*K,a[12]=o*x+s*ie+c*Y+l*ae,a[1]=u*C+h*y+d*L+m*j,a[5]=u*w+h*H+d*N+m*q,a[9]=u*X+h*V+d*k+m*K,a[13]=u*x+h*ie+d*Y+m*ae,a[2]=_*C+g*y+p*L+f*j,a[6]=_*w+g*H+p*N+f*q,a[10]=_*X+g*V+p*k+f*K,a[14]=_*x+g*ie+p*Y+f*ae,a[3]=b*C+E*y+T*L+D*j,a[7]=b*w+E*H+T*N+D*q,a[11]=b*X+E*V+T*k+D*K,a[15]=b*x+E*ie+T*Y+D*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],f=e[15];return _*(+a*c*h-r*l*h-a*s*d+i*l*d+r*s*m-i*c*m)+g*(+t*c*m-t*l*d+a*o*d-r*o*m+r*l*u-a*c*u)+p*(+t*l*h-t*s*m-a*o*h+i*o*m+a*s*u-i*l*u)+f*(-r*s*u-t*c*h+t*s*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],f=e[15],b=h*p*l-g*d*l+g*c*m-s*p*m-h*c*f+s*d*f,E=_*d*l-u*p*l-_*c*m+o*p*m+u*c*f-o*d*f,T=u*g*l-_*h*l+_*s*m-o*g*m-u*s*f+o*h*f,D=_*h*c-u*g*c-_*s*d+o*g*d+u*s*p-o*h*p,C=t*b+i*E+r*T+a*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=b*w,e[1]=(g*d*a-h*p*a-g*r*m+i*p*m+h*r*f-i*d*f)*w,e[2]=(s*p*a-g*c*a+g*r*l-i*p*l-s*r*f+i*c*f)*w,e[3]=(h*c*a-s*d*a-h*r*l+i*d*l+s*r*m-i*c*m)*w,e[4]=E*w,e[5]=(u*p*a-_*d*a+_*r*m-t*p*m-u*r*f+t*d*f)*w,e[6]=(_*c*a-o*p*a-_*r*l+t*p*l+o*r*f-t*c*f)*w,e[7]=(o*d*a-u*c*a+u*r*l-t*d*l-o*r*m+t*c*m)*w,e[8]=T*w,e[9]=(_*h*a-u*g*a-_*i*m+t*g*m+u*i*f-t*h*f)*w,e[10]=(o*g*a-_*s*a+_*i*l-t*g*l-o*i*f+t*s*f)*w,e[11]=(u*s*a-o*h*a-u*i*l+t*h*l+o*i*m-t*s*m)*w,e[12]=D*w,e[13]=(u*g*r-_*h*r+_*i*d-t*g*d-u*i*p+t*h*p)*w,e[14]=(_*s*r-o*g*r-_*i*c+t*g*c+o*i*p-t*s*p)*w,e[15]=(o*h*r-u*s*r+u*i*c-t*h*c-o*i*d+t*s*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,c=e.z,l=a*o,u=a*s;return this.set(l*o+i,l*s-r*c,l*c+r*s,0,l*s+r*c,u*s+i,u*c-r*o,0,l*c-r*s,u*c+r*o,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,u=o+o,h=s+s,d=a*l,m=a*u,_=a*h,g=o*u,p=o*h,f=s*h,b=c*l,E=c*u,T=c*h,D=i.x,C=i.y,w=i.z;return r[0]=(1-(g+f))*D,r[1]=(m+T)*D,r[2]=(_-E)*D,r[3]=0,r[4]=(m-T)*C,r[5]=(1-(d+f))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(_+E)*w,r[9]=(p-b)*w,r[10]=(1-(d+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=yi.set(r[0],r[1],r[2]).length();const o=yi.set(r[4],r[5],r[6]).length(),s=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const l=1/a,u=1/o,h=1/s;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=En){const c=this.elements,l=2*a/(t-e),u=2*a/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let m,_;if(s===En)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===ha)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=En){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(o-a),d=(t+e)*l,m=(i+r)*u;let _,g;if(s===En)_=(o+a)*h,g=-2*h;else if(s===ha)_=a*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yi=new I,qt=new ft,wh=new I(0,0,0),Rh=new I(1,1,1),Ln=new I,Hr=new I,It=new I,ac=new ft,sc=new li;class Ra{constructor(e=0,t=0,i=0,r=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const oc=new I,bi=new li,gn=new ft,Gr=new I,sr=new I,Ph=new I,Lh=new li,cc=new I(1,0,0),lc=new I(0,1,0),uc=new I(0,0,1),Dh={type:"added"},Uh={type:"removed"};class bt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new Ra,i=new li,r=new I(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ve}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(sr,Gr,this.up):gn.lookAt(Gr,sr,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(gn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new I,vn=new I,Qa=new I,xn=new I,Ti=new I,Ai=new I,fc=new I,es=new I,ts=new I,ns=new I;let Vr=!1;class Kt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Yt.subVectors(r,t),vn.subVectors(i,t),Qa.subVectors(e,t);const o=Yt.dot(Yt),s=Yt.dot(vn),c=Yt.dot(Qa),l=vn.dot(vn),u=vn.dot(Qa),h=o*l-s*s;if(h===0)return a.set(0,0,0),null;const d=1/h,m=(l*c-s*u)*d,_=(o*u-s*c)*d;return a.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,i,r,a,o,s,c){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),this.getInterpolation(e,t,i,r,a,o,s,c)}static getInterpolation(e,t,i,r,a,o,s,c){return this.getBarycoord(e,t,i,r,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(s,xn.z),c)}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),vn.subVectors(e,t),Yt.cross(vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Yt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;Ti.subVectors(r,i),Ai.subVectors(a,i),es.subVectors(e,i);const c=Ti.dot(es),l=Ai.dot(es);if(c<=0&&l<=0)return t.copy(i);ts.subVectors(e,r);const u=Ti.dot(ts),h=Ai.dot(ts);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ti,o);ns.subVectors(e,a);const m=Ti.dot(ns),_=Ai.dot(ns);if(_>=0&&m<=_)return t.copy(a);const g=m*l-c*_;if(g<=0&&l>=0&&_<=0)return s=l/(l-_),t.copy(i).addScaledVector(Ai,s);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return fc.subVectors(a,r),s=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(fc,s);const f=1/(p+g+d);return o=g*f,s=d*f,t.copy(i).addScaledVector(Ti,o).addScaledVector(Ai,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function is(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Ws(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=is(o,a,e+1/3),this.g=is(o,a,e),this.b=is(o,a,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=xt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const i=zl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return et.fromWorkingColorSpace(Et.copy(this),e),Math.round(yt(Et.r*255,0,255))*65536+Math.round(yt(Et.g*255,0,255))*256+Math.round(yt(Et.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,a=Et.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let c,l;const u=(s+o)/2;if(s===o)c=0,l=0;else{const h=o-s;switch(l=u<=.5?h/(o+s):h/(2-o-s),o){case i:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-i)/h+2;break;case a:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=xt){et.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(kr);const i=mr(Dn.h,kr.h,t),r=mr(Dn.s,kr.s,t),a=mr(Dn.l,kr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ye;Ye.NAMES=zl;let Ih=0;class Rr extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=$i,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ss,this.blendDst=Es,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ss&&(i.blendSrc=this.blendSrc),this.blendDst!==Es&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hl extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new I,Wr=new Ue;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),a=Rt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zo&&(e.usage=this.usage),e}}class Gl extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vl extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cn extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nh=0;const zt=new ft,rs=new bt,wi=new I,Nt=new wr,or=new wr,gt=new I;class Wn extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Il(e)?Vl:Gl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ve().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return rs.lookAt(e),rs.updateMatrix(),this.applyMatrix4(rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Nt.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];or.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(Nt.min,or.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,or.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(or.min),Nt.expandByPoint(or.max))}Nt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)gt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)gt.fromBufferAttribute(s,l),c&&(wi.fromBufferAttribute(e,l),gt.add(wi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let y=0;y<s;y++)l[y]=new I,u[y]=new I;const h=new I,d=new I,m=new I,_=new Ue,g=new Ue,p=new Ue,f=new I,b=new I;function E(y,H,V){h.fromArray(r,y*3),d.fromArray(r,H*3),m.fromArray(r,V*3),_.fromArray(o,y*2),g.fromArray(o,H*2),p.fromArray(o,V*2),d.sub(h),m.sub(h),g.sub(_),p.sub(_);const ie=1/(g.x*p.y-p.x*g.y);isFinite(ie)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(ie),b.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(ie),l[y].add(f),l[H].add(f),l[V].add(f),u[y].add(b),u[H].add(b),u[V].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let y=0,H=T.length;y<H;++y){const V=T[y],ie=V.start,L=V.count;for(let N=ie,k=ie+L;N<k;N+=3)E(i[N+0],i[N+1],i[N+2])}const D=new I,C=new I,w=new I,X=new I;function x(y){w.fromArray(a,y*3),X.copy(w);const H=l[y];D.copy(H),D.sub(w.multiplyScalar(w.dot(H))).normalize(),C.crossVectors(X,H);const ie=C.dot(u[y])<0?-1:1;c[y*4]=D.x,c[y*4+1]=D.y,c[y*4+2]=D.z,c[y*4+3]=ie}for(let y=0,H=T.length;y<H;++y){const V=T[y],ie=V.start,L=V.count;for(let N=ie,k=ie+L;N<k;N+=3)x(i[N+0]),x(i[N+1]),x(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new I,a=new I,o=new I,s=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),s.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),s.add(u),c.add(u),l.add(u),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,h=s.normalized,d=new l.constructor(c.length*u);let m=0,_=0;for(let g=0,p=c.length;g<p;g++){s.isInterleavedBufferAttribute?m=c[g]*s.data.stride+s.offset:m=c[g]*u;for(let f=0;f<u;f++)d[_++]=l[m++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,i);t.setAttribute(s,l)}const a=this.morphAttributes;for(const s in a){const c=[],l=a[s];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,i);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],h=a[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new ft,Qn=new Bl,Xr=new Xs,dc=new I,Ri=new I,Ci=new I,Pi=new I,as=new I,jr=new I,qr=new Ue,Yr=new Ue,Kr=new Ue,pc=new I,mc=new I,_c=new I,Jr=new I,Zr=new I;class yn extends bt{constructor(e=new Wn,t=new Hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){jr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=s[c],h=a[c];u!==0&&(as.fromBufferAttribute(h,e),o?jr.addScaledVector(as,u):jr.addScaledVector(as.sub(t),u))}t.add(jr)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(a),Qn.copy(e.ray).recast(e.near),!(Xr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Xr,dc)===null||Qn.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(hc.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(hc),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,D=E;T<D;T+=3){const C=s.getX(T),w=s.getX(T+1),X=s.getX(T+2);r=Qr(this,f,e,i,l,u,h,C,w,X),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(s.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const b=s.getX(p),E=s.getX(p+1),T=s.getX(p+2);r=Qr(this,o,e,i,l,u,h,b,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,D=E;T<D;T+=3){const C=T,w=T+1,X=T+2;r=Qr(this,f,e,i,l,u,h,C,w,X),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const b=p,E=p+1,T=p+2;r=Qr(this,o,e,i,l,u,h,b,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Fh(n,e,t,i,r,a,o,s){let c;if(e.side===Dt?c=i.intersectTriangle(o,a,r,!0,s):c=i.intersectTriangle(r,a,o,e.side===kn,s),c===null)return null;Zr.copy(s),Zr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Zr);return l<t.near||l>t.far?null:{distance:l,point:Zr.clone(),object:n}}function Qr(n,e,t,i,r,a,o,s,c,l){n.getVertexPosition(s,Ri),n.getVertexPosition(c,Ci),n.getVertexPosition(l,Pi);const u=Fh(n,e,t,i,Ri,Ci,Pi,Jr);if(u){r&&(qr.fromBufferAttribute(r,s),Yr.fromBufferAttribute(r,c),Kr.fromBufferAttribute(r,l),u.uv=Kt.getInterpolation(Jr,Ri,Ci,Pi,qr,Yr,Kr,new Ue)),a&&(qr.fromBufferAttribute(a,s),Yr.fromBufferAttribute(a,c),Kr.fromBufferAttribute(a,l),u.uv1=Kt.getInterpolation(Jr,Ri,Ci,Pi,qr,Yr,Kr,new Ue),u.uv2=u.uv1),o&&(pc.fromBufferAttribute(o,s),mc.fromBufferAttribute(o,c),_c.fromBufferAttribute(o,l),u.normal=Kt.getInterpolation(Jr,Ri,Ci,Pi,pc,mc,_c,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:c,c:l,normal:new I,materialIndex:0};Kt.getNormal(Ri,Ci,Pi,h.normal),u.face=h}return u}class Cr extends Wn{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function _(g,p,f,b,E,T,D,C,w,X,x){const y=T/w,H=D/X,V=T/2,ie=D/2,L=C/2,N=w+1,k=X+1;let Y=0,j=0;const q=new I;for(let K=0;K<k;K++){const ae=K*H-ie;for(let ce=0;ce<N;ce++){const W=ce*y-V;q[g]=W*b,q[p]=ae*E,q[f]=L,l.push(q.x,q.y,q.z),q[g]=0,q[p]=0,q[f]=C>0?1:-1,u.push(q.x,q.y,q.z),h.push(ce/w),h.push(1-K/X),Y+=1}}for(let K=0;K<X;K++)for(let ae=0;ae<w;ae++){const ce=d+ae+N*K,W=d+ae+N*(K+1),Z=d+(ae+1)+N*(K+1),de=d+(ae+1)+N*K;c.push(ce,W,de),c.push(W,Z,de),j+=6}s.addGroup(m,j,x),m+=j,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=ki(n[t]);for(const r in i)e[r]=i[r]}return e}function Oh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kl(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const Bh={clone:ki,merge:Ct};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends Wl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Di=1;class Hh extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(Li,Di,e,t);r.layers=this.layers,this.add(r);const a=new kt(Li,Di,e,t);a.layers=this.layers,this.add(a);const o=new kt(Li,Di,e,t);o.layers=this.layers,this.add(o);const s=new kt(Li,Di,e,t);s.layers=this.layers,this.add(s);const c=new kt(Li,Di,e,t);c.layers=this.layers,this.add(c);const l=new kt(Li,Di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,c]=t;for(const l of t)this.remove(l);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Xl extends Ft{constructor(e,t,i,r,a,o,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,i,r,a,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gh extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(_r("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===si?xt:Wt),this.texture=new Xl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),a=new ui({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:$n});a.uniforms.tEquirect.value=t;const o=new yn(r,a),s=t.minFilter;return t.minFilter===xr&&(t.minFilter=Vt),new Hh(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const ss=new I,Vh=new I,kh=new Ve;class In{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ss.subVectors(i,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ss),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kh.getNormalMatrix(e),r=this.coplanarPoint(ss).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Xs,ea=new I;class js{constructor(e=new In,t=new In,i=new In,r=new In,a=new In,o=new In){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],f=r[12],b=r[13],E=r[14],T=r[15];if(i[0].setComponents(c-a,d-l,p-m,T-f).normalize(),i[1].setComponents(c+a,d+l,p+m,T+f).normalize(),i[2].setComponents(c+o,d+u,p+_,T+b).normalize(),i[3].setComponents(c-o,d-u,p-_,T-b).normalize(),i[4].setComponents(c-s,d-h,p-g,T-E).normalize(),t===En)i[5].setComponents(c+s,d+h,p+g,T+E).normalize();else if(t===ha)i[5].setComponents(s,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jl(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Wh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,d=l.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function a(l,u,h){const d=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,l),m.count===-1&&_.length===0&&n.bufferSubData(h,0,d),_.length!==0){for(let g=0,p=_.length;g<p;g++){const f=_[g];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);if(h===void 0)i.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,l,u),h.version=l.version}}return{get:o,remove:s,update:c}}class qs extends Wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),c=Math.floor(r),l=s+1,u=c+1,h=e/s,d=t/c,m=[],_=[],g=[],p=[];for(let f=0;f<u;f++){const b=f*d-o;for(let E=0;E<l;E++){const T=E*h-a;_.push(T,-b,0),g.push(0,0,1),p.push(E/s),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<s;b++){const E=b+l*f,T=b+l*(f+1),D=b+1+l*(f+1),C=b+1+l*f;m.push(E,T,C),m.push(T,D,C)}this.setIndex(m),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jh=`#ifdef USE_ALPHAHASH
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
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
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
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed=`#ifdef USE_BATCHING
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
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,md=`#define PI 3.141592653589793
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`
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
}`,bd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bd=`uniform bool receiveShadow;
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
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
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
#endif`,Wd=`struct PhysicalMaterial {
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
}`,Xd=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,np=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,em=`#define DISTANCE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,cm=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,hm=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,pm=`#define PHONG
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
}`,mm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,vm=`#define TOON
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
}`,xm=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Xh,alphahash_pars_fragment:jh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:Kh,alphatest_pars_fragment:Jh,aomap_fragment:Zh,aomap_pars_fragment:Qh,batching_pars_vertex:ed,batching_vertex:td,begin_vertex:nd,beginnormal_vertex:id,bsdfs:rd,iridescence_fragment:ad,bumpmap_pars_fragment:sd,clipping_planes_fragment:od,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:ld,clipping_planes_vertex:ud,color_fragment:fd,color_pars_fragment:hd,color_pars_vertex:dd,color_vertex:pd,common:md,cube_uv_reflection_fragment:_d,defaultnormal_vertex:gd,displacementmap_pars_vertex:vd,displacementmap_vertex:xd,emissivemap_fragment:Md,emissivemap_pars_fragment:Sd,colorspace_fragment:Ed,colorspace_pars_fragment:yd,envmap_fragment:bd,envmap_common_pars_fragment:Td,envmap_pars_fragment:Ad,envmap_pars_vertex:wd,envmap_physical_pars_fragment:$d,envmap_vertex:Rd,fog_vertex:Cd,fog_pars_vertex:Pd,fog_fragment:Ld,fog_pars_fragment:Dd,gradientmap_pars_fragment:Ud,lightmap_fragment:Id,lightmap_pars_fragment:Nd,lights_lambert_fragment:Fd,lights_lambert_pars_fragment:Od,lights_pars_begin:Bd,lights_toon_fragment:zd,lights_toon_pars_fragment:Hd,lights_phong_fragment:Gd,lights_phong_pars_fragment:Vd,lights_physical_fragment:kd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:jd,lights_fragment_end:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:Zd,map_fragment:Qd,map_pars_fragment:ep,map_particle_fragment:tp,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:rp,morphcolor_vertex:ap,morphnormal_vertex:sp,morphtarget_pars_vertex:op,morphtarget_vertex:cp,normal_fragment_begin:lp,normal_fragment_maps:up,normal_pars_fragment:fp,normal_pars_vertex:hp,normal_vertex:dp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:gp,iridescence_pars_fragment:vp,opaque_fragment:xp,packing:Mp,premultiplied_alpha_fragment:Sp,project_vertex:Ep,dithering_fragment:yp,dithering_pars_fragment:bp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ap,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Dp,skinning_vertex:Up,skinnormal_vertex:Ip,specularmap_fragment:Np,specularmap_pars_fragment:Fp,tonemapping_fragment:Op,tonemapping_pars_fragment:Bp,transmission_fragment:$p,transmission_pars_fragment:zp,uv_pars_fragment:Hp,uv_pars_vertex:Gp,uv_vertex:Vp,worldpos_vertex:kp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:jp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:Kp,depth_vert:Jp,depth_frag:Zp,distanceRGBA_vert:Qp,distanceRGBA_frag:em,equirect_vert:tm,equirect_frag:nm,linedashed_vert:im,linedashed_frag:rm,meshbasic_vert:am,meshbasic_frag:sm,meshlambert_vert:om,meshlambert_frag:cm,meshmatcap_vert:lm,meshmatcap_frag:um,meshnormal_vert:fm,meshnormal_frag:hm,meshphong_vert:dm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:_m,meshtoon_vert:gm,meshtoon_frag:vm,points_vert:xm,points_frag:Mm,shadow_vert:Sm,shadow_frag:Em,sprite_vert:ym,sprite_frag:bm},fe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},rn={basic:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ct([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ct([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ct([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ct([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ct([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ct([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ct([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ct([fe.lights,fe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};rn.physical={uniforms:Ct([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ta={r:0,b:0,g:0};function Tm(n,e,t,i,r,a,o){const s=new Ye(0);let c=a===!0?0:1,l,u,h=null,d=0,m=null;function _(p,f){let b=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=(f.backgroundBlurriness>0?t:e).get(E)),E===null?g(s,c):E&&E.isColor&&(g(E,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Aa)?(u===void 0&&(u=new yn(new Cr(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:ki(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=et.getTransfer(E.colorSpace)!==rt,(h!==E||d!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new yn(new qs(2,2),new ui({name:"BackgroundMaterial",uniforms:ki(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=et.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,f){p.getRGB(ta,kl(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,f,o)}return{getClearColor:function(){return s},setClearColor:function(p,f=1){s.set(p),c=f,g(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,g(s,c)},render:_}}function Am(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},c=p(null);let l=c,u=!1;function h(L,N,k,Y,j){let q=!1;if(o){const K=g(Y,k,N);l!==K&&(l=K,m(l.object)),q=f(L,Y,k,j),q&&b(L,Y,k,j)}else{const K=N.wireframe===!0;(l.geometry!==Y.id||l.program!==k.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=k.id,l.wireframe=K,q=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,X(L,N,k,Y),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):a.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):a.deleteVertexArrayOES(L)}function g(L,N,k){const Y=k.wireframe===!0;let j=s[L.id];j===void 0&&(j={},s[L.id]=j);let q=j[N.id];q===void 0&&(q={},j[N.id]=q);let K=q[Y];return K===void 0&&(K=p(d()),q[Y]=K),K}function p(L){const N=[],k=[],Y=[];for(let j=0;j<r;j++)N[j]=0,k[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,N,k,Y){const j=l.attributes,q=N.attributes;let K=0;const ae=k.getAttributes();for(const ce in ae)if(ae[ce].location>=0){const Z=j[ce];let de=q[ce];if(de===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),Z===void 0||Z.attribute!==de||de&&Z.data!==de.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function b(L,N,k,Y){const j={},q=N.attributes;let K=0;const ae=k.getAttributes();for(const ce in ae)if(ae[ce].location>=0){let Z=q[ce];Z===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const de={};de.attribute=Z,Z&&Z.data&&(de.data=Z.data),j[ce]=de,K++}l.attributes=j,l.attributesNum=K,l.index=Y}function E(){const L=l.newAttributes;for(let N=0,k=L.length;N<k;N++)L[N]=0}function T(L){D(L,0)}function D(L,N){const k=l.newAttributes,Y=l.enabledAttributes,j=l.attributeDivisors;k[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),j[L]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),j[L]=N)}function C(){const L=l.newAttributes,N=l.enabledAttributes;for(let k=0,Y=N.length;k<Y;k++)N[k]!==L[k]&&(n.disableVertexAttribArray(k),N[k]=0)}function w(L,N,k,Y,j,q,K){K===!0?n.vertexAttribIPointer(L,N,k,j,q):n.vertexAttribPointer(L,N,k,Y,j,q)}function X(L,N,k,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const j=Y.attributes,q=k.getAttributes(),K=N.defaultAttributeValues;for(const ae in q){const ce=q[ae];if(ce.location>=0){let W=j[ae];if(W===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const Z=W.normalized,de=W.itemSize,Me=t.get(W);if(Me===void 0)continue;const ve=Me.buffer,Le=Me.type,De=Me.bytesPerElement,Ae=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||W.gpuType===bl);if(W.isInterleavedBufferAttribute){const Xe=W.data,F=Xe.stride,pt=W.offset;if(Xe.isInstancedInterleavedBuffer){for(let ye=0;ye<ce.locationSize;ye++)D(ce.location+ye,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ye=0;ye<ce.locationSize;ye++)T(ce.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ye=0;ye<ce.locationSize;ye++)w(ce.location+ye,de/ce.locationSize,Le,Z,F*De,(pt+de/ce.locationSize*ye)*De,Ae)}else{if(W.isInstancedBufferAttribute){for(let Xe=0;Xe<ce.locationSize;Xe++)D(ce.location+Xe,W.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Xe=0;Xe<ce.locationSize;Xe++)T(ce.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Xe=0;Xe<ce.locationSize;Xe++)w(ce.location+Xe,de/ce.locationSize,Le,Z,de*De,de/ce.locationSize*Xe*De,Ae)}}else if(K!==void 0){const Z=K[ae];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(ce.location,Z);break;case 3:n.vertexAttrib3fv(ce.location,Z);break;case 4:n.vertexAttrib4fv(ce.location,Z);break;default:n.vertexAttrib1fv(ce.location,Z)}}}}C()}function x(){V();for(const L in s){const N=s[L];for(const k in N){const Y=N[k];for(const j in Y)_(Y[j].object),delete Y[j];delete N[k]}delete s[L]}}function y(L){if(s[L.id]===void 0)return;const N=s[L.id];for(const k in N){const Y=N[k];for(const j in Y)_(Y[j].object),delete Y[j];delete N[k]}delete s[L.id]}function H(L){for(const N in s){const k=s[N];if(k[L.id]===void 0)continue;const Y=k[L.id];for(const j in Y)_(Y[j].object),delete Y[j];delete k[L.id]}}function V(){ie(),u=!0,l!==c&&(l=c,m(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:V,resetDefaultState:ie,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfProgram:H,initAttributes:E,enableAttribute:T,disableUnusedAttributes:C}}function wm(n,e,t,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,h){n.drawArrays(a,u,h),t.update(h,a,1)}function c(u,h,d){if(d===0)return;let m,_;if(r)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,u,h,d),t.update(h,a,d)}function l(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(a,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];t.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Rm(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=a(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,T=o||e.has("OES_texture_float"),D=E&&T,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:D,maxSamples:C}}function Cm(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new In,s=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||_===null||_.length===0||a&&!p)a?u(null):l();else{const b=a?0:i,E=b*4;let T=f.clippingState||null;c.value=T,T=u(_,d,E,m);for(let D=0;D!==E;++D)T[D]=t[D];f.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const f=m+g*4,b=d.matrixWorldInverse;s.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,T=m;E!==g;++E,T+=4)o.copy(h[E]).applyMatrix4(b,s),o.normal.toArray(p,T),p[T+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Pm(n){let e=new WeakMap;function t(o,s){return s===ys?o.mapping=Hi:s===bs&&(o.mapping=Gi),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===ys||s===bs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gh(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class ql extends Wl{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=4,gc=[.125,.215,.35,.446,.526,.582],ii=20,os=new ql,vc=new Ye;let cs=null,ls=0,us=0;const ti=(1+Math.sqrt(5))/2,Ui=1/ti,xc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ti,Ui),new I(0,ti,-Ui),new I(Ui,0,ti),new I(-Ui,0,ti),new I(ti,Ui,0),new I(-ti,Ui,0)];class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){cs=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),us=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cs,ls,us),e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cs=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),us=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Mr,format:Zt,colorSpace:Tn,depthBuffer:!1},r=Sc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(a)),this._blurMaterial=Dm(a,e,t)}return r}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,i,r){const s=new kt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(vc),u.toneMapping=zn,u.autoClear=!1;const m=new Hl({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),_=new yn(new Cr,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(vc),g=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(s.up.set(0,c[f],0),s.lookAt(l[f],0,0)):b===1?(s.up.set(0,0,c[f]),s.lookAt(0,l[f],0)):(s.up.set(0,c[f],0),s.lookAt(0,0,l[f]));const E=this._cubeSize;na(r,b*E,f>2?E:0,E,E),u.setRenderTarget(r),g&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;na(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,os)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xc[(r-1)%xc.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yn(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*ii-1),g=a/_,p=isFinite(a)?1+Math.floor(u*g):ii;p>ii&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ii}`);const f=[];let b=0;for(let w=0;w<ii;++w){const X=w/g,x=Math.exp(-X*X/2);f.push(x),w===0?b+=x:w<p&&(b+=2*x)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const T=this._sizeLods[r],D=3*T*(r>E-Fi?r-E+Fi:0),C=4*(this._cubeSize-T);na(t,D,C,3*T,2*T),c.setRenderTarget(t),c.render(h,os)}}function Lm(n){const e=[],t=[],i=[];let r=n;const a=n-Fi+1+gc.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>n-Fi?c=gc[o-n+Fi-1]:o===0&&(c=0),i.push(c);const l=1/(s-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,f=1,b=new Float32Array(g*_*m),E=new Float32Array(p*_*m),T=new Float32Array(f*_*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,X=C>2?0:-1,x=[w,X,0,w+2/3,X,0,w+2/3,X+1,0,w,X,0,w+2/3,X+1,0,w,X+1,0];b.set(x,g*_*C),E.set(d,p*_*C);const y=[C,C,C,C,C,C];T.set(y,f*_*C)}const D=new Wn;D.setAttribute("position",new on(b,g)),D.setAttribute("uv",new on(E,p)),D.setAttribute("faceIndex",new on(T,f)),e.push(D),r>Fi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sc(n,e,t){const i=new ci(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dm(n,e,t){const i=new Float32Array(ii),r=new I(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ec(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function yc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ys(){return`

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
	`}function Um(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,l=c===ys||c===bs,u=c===Hi||c===Gi;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Mc(n)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Mc(n));const d=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Im(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Nm(n,e,t,i){const r={},a=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,f=g.length;p<f;p++)e.remove(g[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,f=g.length;p<f;p++)e.update(g[p],n.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let E=0,T=b.length;E<T;E+=3){const D=b[E+0],C=b[E+1],w=b[E+2];d.push(D,C,C,w,w,D)}}else if(_!==void 0){const b=_.array;g=_.version;for(let E=0,T=b.length/3-1;E<T;E+=3){const D=E+0,C=E+1,w=E+2;d.push(D,C,C,w,w,D)}}else return;const p=new(Il(d)?Vl:Gl)(d,1);p.version=g;const f=a.get(h);f&&e.remove(f),a.set(h,p)}function u(h){const d=a.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:u}}function Fm(n,e,t,i){const r=i.isWebGL2;let a;function o(m){a=m}let s,c;function l(m){s=m.type,c=m.bytesPerElement}function u(m,_){n.drawElements(a,_,s,m*c),t.update(_,a,1)}function h(m,_,g){if(g===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](a,_,s,m*c,g),t.update(_,a,g)}function d(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<g;f++)this.render(m[f]/c,_[f]);else{p.multiDrawElementsWEBGL(a,_,0,s,m,0,g);let f=0;for(let b=0;b<g;b++)f+=_[b];t.update(f,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Om(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bm(n,e){return n[0]-e[0]}function $m(n,e){return Math.abs(e[1])-Math.abs(n[1])}function zm(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new vt,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=a.get(u);if(p===void 0||p.count!==g){let N=function(){ie.dispose(),a.delete(u),u.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],X=u.morphAttributes.color||[];let x=0;E===!0&&(x=1),T===!0&&(x=2),D===!0&&(x=3);let y=u.attributes.position.count*x,H=1;y>e.maxTextureSize&&(H=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const V=new Float32Array(y*H*4*g),ie=new Ol(V,y,H,g);ie.type=On,ie.needsUpdate=!0;const L=x*4;for(let k=0;k<g;k++){const Y=C[k],j=w[k],q=X[k],K=y*H*4*k;for(let ae=0;ae<Y.count;ae++){const ce=ae*L;E===!0&&(o.fromBufferAttribute(Y,ae),V[K+ce+0]=o.x,V[K+ce+1]=o.y,V[K+ce+2]=o.z,V[K+ce+3]=0),T===!0&&(o.fromBufferAttribute(j,ae),V[K+ce+4]=o.x,V[K+ce+5]=o.y,V[K+ce+6]=o.z,V[K+ce+7]=0),D===!0&&(o.fromBufferAttribute(q,ae),V[K+ce+8]=o.x,V[K+ce+9]=o.y,V[K+ce+10]=o.z,V[K+ce+11]=q.itemSize===4?o.w:1)}}p={count:g,texture:ie,size:new Ue(y,H)},a.set(u,p),u.addEventListener("dispose",N)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const b=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];i[u.id]=g}for(let T=0;T<_;T++){const D=g[T];D[0]=T,D[1]=d[T]}g.sort($m);for(let T=0;T<8;T++)T<_&&g[T][1]?(s[T][0]=g[T][0],s[T][1]=g[T][1]):(s[T][0]=Number.MAX_SAFE_INTEGER,s[T][1]=0);s.sort(Bm);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const D=s[T],C=D[0],w=D[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+T)!==p[C]&&u.setAttribute("morphTarget"+T,p[C]),f&&u.getAttribute("morphNormal"+T)!==f[C]&&u.setAttribute("morphNormal"+T,f[C]),r[T]=w,b+=w):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),f&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const E=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Hm(n,e,t,i){let r=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}class Yl extends Ft{constructor(e,t,i,r,a,o,s,c,l,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ai&&(i=Fn),i===void 0&&u===Vi&&(i=ri),super(null,r,a,o,s,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kl=new Ft,Jl=new Yl(1,1);Jl.compareFunction=Ul;const Zl=new Ol,Ql=new Th,eu=new Xl,bc=[],Tc=[],Ac=new Float32Array(16),wc=new Float32Array(9),Rc=new Float32Array(4);function ji(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=bc[r];if(a===void 0&&(a=new Float32Array(r),bc[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ca(n,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function Wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function Xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Rc.set(i),n.uniformMatrix2fv(this.addr,!1,Rc),dt(t,i)}}function jm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;wc.set(i),n.uniformMatrix3fv(this.addr,!1,wc),dt(t,i)}}function qm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Ac.set(i),n.uniformMatrix4fv(this.addr,!1,Ac),dt(t,i)}}function Ym(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function Zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function Qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function i_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?Jl:Kl;t.setTexture2D(e||a,r)}function r_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ql,r)}function a_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||eu,r)}function s_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zl,r)}function o_(n){switch(n){case 5126:return Gm;case 35664:return Vm;case 35665:return km;case 35666:return Wm;case 35674:return Xm;case 35675:return jm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Km;case 35668:case 35672:return Jm;case 35669:case 35673:return Zm;case 5125:return Qm;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return s_}}function c_(n,e){n.uniform1fv(this.addr,e)}function l_(n,e){const t=ji(e,this.size,2);n.uniform2fv(this.addr,t)}function u_(n,e){const t=ji(e,this.size,3);n.uniform3fv(this.addr,t)}function f_(n,e){const t=ji(e,this.size,4);n.uniform4fv(this.addr,t)}function h_(n,e){const t=ji(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d_(n,e){const t=ji(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p_(n,e){const t=ji(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m_(n,e){n.uniform1iv(this.addr,e)}function __(n,e){n.uniform2iv(this.addr,e)}function g_(n,e){n.uniform3iv(this.addr,e)}function v_(n,e){n.uniform4iv(this.addr,e)}function x_(n,e){n.uniform1uiv(this.addr,e)}function M_(n,e){n.uniform2uiv(this.addr,e)}function S_(n,e){n.uniform3uiv(this.addr,e)}function E_(n,e){n.uniform4uiv(this.addr,e)}function y_(n,e,t){const i=this.cache,r=e.length,a=Ca(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),dt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Kl,a[o])}function b_(n,e,t){const i=this.cache,r=e.length,a=Ca(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),dt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ql,a[o])}function T_(n,e,t){const i=this.cache,r=e.length,a=Ca(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),dt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eu,a[o])}function A_(n,e,t){const i=this.cache,r=e.length,a=Ca(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),dt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Zl,a[o])}function w_(n){switch(n){case 5126:return c_;case 35664:return l_;case 35665:return u_;case 35666:return f_;case 35674:return h_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return __;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return M_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}class R_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}}class C_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w_(t.type)}}class P_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const fs=/(\w+)(\])?(\[|\.)?/g;function Cc(n,e){n.seq.push(e),n.map[e.id]=e}function L_(n,e,t){const i=n.name,r=i.length;for(fs.lastIndex=0;;){const a=fs.exec(i),o=fs.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){Cc(t,l===void 0?new R_(s,n,e):new C_(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new P_(s),Cc(t,h)),t=h}}}class oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);L_(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Pc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const D_=37297;let U_=0;function I_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function N_(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===fa&&t===ua?i="LinearDisplayP3ToLinearSRGB":e===ua&&t===fa&&(i="LinearSRGBToLinearDisplayP3"),n){case Tn:case wa:return[i,"LinearTransferOETF"];case xt:case ks:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+I_(n.getShaderSource(e),o)}else return r}function F_(n,e){const t=N_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function O_(n,e){let t;switch(e){case If:t="Linear";break;case Nf:t="Reinhard";break;case Ff:t="OptimizedCineon";break;case Of:t="ACESFilmic";break;case $f:t="AgX";break;case Bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function B_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function $_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Oi).join(`
`)}function z_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function H_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Oi(n){return n!==""}function Dc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cs(n){return n.replace(G_,k_)}const V_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function k_(n,e){let t=Be[e];if(t===void 0){const i=V_.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cs(t)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(n){return n.replace(W_,X_)}function X_(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Nc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function q_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function K_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gs:e="ENVMAP_BLENDING_MULTIPLY";break;case Df:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function J_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Z_(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=j_(t),l=q_(t),u=Y_(t),h=K_(t),d=J_(t),m=t.isWebGL2?"":B_(t),_=$_(t),g=z_(a),p=r.createProgram();let f,b,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),f.length>0&&(f+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),b.length>0&&(b+=`
`)):(f=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),b=[m,Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Be.tonemapping_pars_fragment:"",t.toneMapping!==zn?O_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,F_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Cs(o),o=Dc(o,t),o=Uc(o,t),s=Cs(s),s=Dc(s,t),s=Uc(s,t),o=Ic(o),s=Ic(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const T=E+f+o,D=E+b+s,C=Pc(r,r.VERTEX_SHADER,T),w=Pc(r,r.FRAGMENT_SHADER,D);r.attachShader(p,C),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function X(V){if(n.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(C).trim(),N=r.getShaderInfoLog(w).trim();let k=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,w);else{const j=Lc(r,C,"vertex"),q=Lc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+j+`
`+q)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(L===""||N==="")&&(Y=!1);Y&&(V.diagnostics={runnable:k,programLog:ie,vertexShader:{log:L,prefix:f},fragmentShader:{log:N,prefix:b}})}r.deleteShader(C),r.deleteShader(w),x=new oa(r,p),y=H_(r,p)}let x;this.getUniforms=function(){return x===void 0&&X(this),x};let y;this.getAttributes=function(){return y===void 0&&X(this),y};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(p,D_)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=w,this}let Q_=0;class eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tg(e),t.set(e,i)),i}}class tg{constructor(e){this.id=Q_++,this.code=e,this.usedTimes=0}}function ng(n,e,t,i,r,a,o){const s=new $l,c=new eg,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function p(x,y,H,V,ie){const L=V.fog,N=ie.geometry,k=x.isMeshStandardMaterial?V.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),j=Y&&Y.mapping===Aa?Y.image.height:null,q=_[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ae=K!==void 0?K.length:0;let ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let W,Z,de,Me;if(q){const At=rn[q];W=At.vertexShader,Z=At.fragmentShader}else W=x.vertexShader,Z=x.fragmentShader,c.update(x),de=c.getVertexShaderID(x),Me=c.getFragmentShaderID(x);const ve=n.getRenderTarget(),Le=ie.isInstancedMesh===!0,De=ie.isBatchedMesh===!0,Ae=!!x.map,Xe=!!x.matcap,F=!!Y,pt=!!x.aoMap,ye=!!x.lightMap,Ce=!!x.bumpMap,_e=!!x.normalMap,it=!!x.displacementMap,Ie=!!x.emissiveMap,S=!!x.metalnessMap,v=!!x.roughnessMap,O=x.anisotropy>0,ne=x.clearcoat>0,ee=x.iridescence>0,te=x.sheen>0,ge=x.transmission>0,he=O&&!!x.anisotropyMap,me=ne&&!!x.clearcoatMap,we=ne&&!!x.clearcoatNormalMap,Fe=ne&&!!x.clearcoatRoughnessMap,Q=ee&&!!x.iridescenceMap,je=ee&&!!x.iridescenceThicknessMap,A=te&&!!x.sheenColorMap,J=te&&!!x.sheenRoughnessMap,ue=!!x.specularMap,re=!!x.specularColorMap,xe=!!x.specularIntensityMap,He=ge&&!!x.transmissionMap,qe=ge&&!!x.thicknessMap,$e=!!x.gradientMap,le=!!x.alphaMap,P=x.alphaTest>0,se=!!x.alphaHash,oe=!!x.extensions,Te=!!N.attributes.uv1,Se=!!N.attributes.uv2,Ke=!!N.attributes.uv3;let Je=zn;return x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Je=n.toneMapping),{isWebGL2:u,shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:Z,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:De,instancing:Le,instancingColor:Le&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Tn,map:Ae,matcap:Xe,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:j,aoMap:pt,lightMap:ye,bumpMap:Ce,normalMap:_e,displacementMap:d&&it,emissiveMap:Ie,normalMapObjectSpace:_e&&x.normalMapType===Jf,normalMapTangentSpace:_e&&x.normalMapType===Dl,metalnessMap:S,roughnessMap:v,anisotropy:O,anisotropyMap:he,clearcoat:ne,clearcoatMap:me,clearcoatNormalMap:we,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:je,sheen:te,sheenColorMap:A,sheenRoughnessMap:J,specularMap:ue,specularColorMap:re,specularIntensityMap:xe,transmission:ge,transmissionMap:He,thicknessMap:qe,gradientMap:$e,opaque:x.transparent===!1&&x.blending===$i,alphaMap:le,alphaTest:P,alphaHash:se,combine:x.combine,mapUv:Ae&&g(x.map.channel),aoMapUv:pt&&g(x.aoMap.channel),lightMapUv:ye&&g(x.lightMap.channel),bumpMapUv:Ce&&g(x.bumpMap.channel),normalMapUv:_e&&g(x.normalMap.channel),displacementMapUv:it&&g(x.displacementMap.channel),emissiveMapUv:Ie&&g(x.emissiveMap.channel),metalnessMapUv:S&&g(x.metalnessMap.channel),roughnessMapUv:v&&g(x.roughnessMap.channel),anisotropyMapUv:he&&g(x.anisotropyMap.channel),clearcoatMapUv:me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:A&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&g(x.sheenRoughnessMap.channel),specularMapUv:ue&&g(x.specularMap.channel),specularColorMapUv:re&&g(x.specularColorMap.channel),specularIntensityMapUv:xe&&g(x.specularIntensityMap.channel),transmissionMapUv:He&&g(x.transmissionMap.channel),thicknessMapUv:qe&&g(x.thicknessMap.channel),alphaMapUv:le&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_e||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:Ke,pointsUvs:ie.isPoints===!0&&!!N.attributes.uv&&(Ae||le),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===Dt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:oe&&x.extensions.derivatives===!0,extensionFragDepth:oe&&x.extensions.fragDepth===!0,extensionDrawBuffers:oe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)y.push(H),y.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(b(y,x),E(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){s.disableAll(),y.isWebGL2&&s.enable(0),y.supportsVertexTextures&&s.enable(1),y.instancing&&s.enable(2),y.instancingColor&&s.enable(3),y.matcap&&s.enable(4),y.envMap&&s.enable(5),y.normalMapObjectSpace&&s.enable(6),y.normalMapTangentSpace&&s.enable(7),y.clearcoat&&s.enable(8),y.iridescence&&s.enable(9),y.alphaTest&&s.enable(10),y.vertexColors&&s.enable(11),y.vertexAlphas&&s.enable(12),y.vertexUv1s&&s.enable(13),y.vertexUv2s&&s.enable(14),y.vertexUv3s&&s.enable(15),y.vertexTangents&&s.enable(16),y.anisotropy&&s.enable(17),y.alphaHash&&s.enable(18),y.batching&&s.enable(19),x.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.skinning&&s.enable(4),y.morphTargets&&s.enable(5),y.morphNormals&&s.enable(6),y.morphColors&&s.enable(7),y.premultipliedAlpha&&s.enable(8),y.shadowMapEnabled&&s.enable(9),y.useLegacyLights&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),x.push(s.mask)}function T(x){const y=_[x.type];let H;if(y){const V=rn[y];H=Bh.clone(V.uniforms)}else H=x.uniforms;return H}function D(x,y){let H;for(let V=0,ie=l.length;V<ie;V++){const L=l[V];if(L.cacheKey===y){H=L,++H.usedTimes;break}}return H===void 0&&(H=new Z_(n,y,x,a),l.push(H)),H}function C(x){if(--x.usedTimes===0){const y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),x.destroy()}}function w(x){c.remove(x)}function X(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:X}}function ig(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function rg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oc(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,m,_,g,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=p),e++,f}function s(h,d,m,_,g,p){const f=o(h,d,m,_,g,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(h,d,m,_,g,p){const f=o(h,d,m,_,g,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||rg),i.length>1&&i.sort(d||Fc),r.length>1&&r.sort(d||Fc)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:c,finish:u,sort:l}}function ag(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Oc,n.set(i,[o])):r>=a.length?(o=new Oc,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ye};break;case"SpotLight":t={position:new I,direction:new I,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function og(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cg=0;function lg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ug(n,e){const t=new sg,i=og(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const a=new I,o=new ft,s=new ft;function c(u,h){let d=0,m=0,_=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let g=0,p=0,f=0,b=0,E=0,T=0,D=0,C=0,w=0,X=0,x=0;u.sort(lg);const y=h===!0?Math.PI:1;for(let V=0,ie=u.length;V<ie;V++){const L=u[V],N=L.color,k=L.intensity,Y=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*k*y,m+=N.g*k*y,_+=N.b*k*y;else if(L.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(L.sh.coefficients[q],k);x++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const K=L.shadow,ae=i.get(L);ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,r.directionalShadow[g]=ae,r.directionalShadowMap[g]=j,r.directionalShadowMatrix[g]=L.shadow.matrix,T++}r.directional[g]=q,g++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(k*y),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,r.spot[f]=q;const K=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,K.updateMatrices(L),L.castShadow&&X++),r.spotLightMatrix[f]=K.matrix,L.castShadow){const ae=i.get(L);ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,r.spotShadow[f]=ae,r.spotShadowMap[f]=j,C++}f++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(N).multiplyScalar(k),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),r.rectArea[b]=q,b++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*y),q.distance=L.distance,q.decay=L.decay,L.castShadow){const K=L.shadow,ae=i.get(L);ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,ae.shadowCameraNear=K.camera.near,ae.shadowCameraFar=K.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=L.shadow.matrix,D++}r.point[p]=q,p++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(k*y),q.groundColor.copy(L.groundColor).multiplyScalar(k*y),r.hemi[E]=q,E++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==g||H.pointLength!==p||H.spotLength!==f||H.rectAreaLength!==b||H.hemiLength!==E||H.numDirectionalShadows!==T||H.numPointShadows!==D||H.numSpotShadows!==C||H.numSpotMaps!==w||H.numLightProbes!==x)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=b,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+w-X,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=x,H.directionalLength=g,H.pointLength=p,H.spotLength=f,H.rectAreaLength=b,H.hemiLength=E,H.numDirectionalShadows=T,H.numPointShadows=D,H.numSpotShadows=C,H.numSpotMaps=w,H.numLightProbes=x,r.version=cg++)}function l(u,h){let d=0,m=0,_=0,g=0,p=0;const f=h.matrixWorldInverse;for(let b=0,E=u.length;b<E;b++){const T=u[b];if(T.isDirectionalLight){const D=r.directional[d];D.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(f),d++}else if(T.isSpotLight){const D=r.spot[_];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(f),_++}else if(T.isRectAreaLight){const D=r.rectArea[g];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(f),s.identity(),o.copy(T.matrixWorld),o.premultiply(f),s.extractRotation(o),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),D.halfWidth.applyMatrix4(s),D.halfHeight.applyMatrix4(s),g++}else if(T.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(f),m++}else if(T.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function Bc(n,e){const t=new ug(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(h){i.push(h)}function s(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function fg(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let c;return s===void 0?(c=new Bc(n,e),t.set(a,[c])):o>=s.length?(c=new Bc(n,e),s.push(c)):c=s[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class hg extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dg extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
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
}`;function _g(n,e,t){let i=new js;const r=new Ue,a=new Ue,o=new vt,s=new hg({depthPacking:Kf}),c=new dg,l={},u=t.maxTextureSize,h={[kn]:Dt,[Dt]:kn,[Sn]:Sn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Wn;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let f=this.type;this.render=function(C,w,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const x=n.getRenderTarget(),y=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),V=n.state;V.setBlending($n),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ie=f!==Mn&&this.type===Mn,L=f===Mn&&this.type!==Mn;for(let N=0,k=C.length;N<k;N++){const Y=C[N],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const q=j.getFrameExtents();if(r.multiply(q),a.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/q.x),r.x=a.x*q.x,j.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/q.y),r.y=a.y*q.y,j.mapSize.y=a.y)),j.map===null||ie===!0||L===!0){const ae=this.type!==Mn?{minFilter:Lt,magFilter:Lt}:{};j.map!==null&&j.map.dispose(),j.map=new ci(r.x,r.y,ae),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const K=j.getViewportCount();for(let ae=0;ae<K;ae++){const ce=j.getViewport(ae);o.set(a.x*ce.x,a.y*ce.y,a.x*ce.z,a.y*ce.w),V.viewport(o),j.updateMatrices(Y,ae),i=j.getFrustum(),T(w,X,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Mn&&b(j,X),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(x,y,H)};function b(C,w){const X=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ci(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,X,d,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,X,m,g,null)}function E(C,w,X,x){let y=null;const H=X.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(H!==void 0)y=H;else if(y=X.isPointLight===!0?c:s,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=y.uuid,ie=w.uuid;let L=l[V];L===void 0&&(L={},l[V]=L);let N=L[ie];N===void 0&&(N=y.clone(),L[ie]=N,w.addEventListener("dispose",D)),y=N}if(y.visible=w.visible,y.wireframe=w.wireframe,x===Mn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,X.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=n.properties.get(y);V.light=X}return y}function T(C,w,X,x,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Mn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld);const ie=e.update(C),L=C.material;if(Array.isArray(L)){const N=ie.groups;for(let k=0,Y=N.length;k<Y;k++){const j=N[k],q=L[j.materialIndex];if(q&&q.visible){const K=E(C,q,x,y);C.onBeforeShadow(n,C,w,X,ie,K,j),n.renderBufferDirect(X,null,ie,K,C,j),C.onAfterShadow(n,C,w,X,ie,K,j)}}}else if(L.visible){const N=E(C,L,x,y);C.onBeforeShadow(n,C,w,X,ie,N,null),n.renderBufferDirect(X,null,ie,N,C,null),C.onAfterShadow(n,C,w,X,ie,N,null)}}const V=C.children;for(let ie=0,L=V.length;ie<L;ie++)T(V[ie],w,X,x,y)}function D(C){C.target.removeEventListener("dispose",D);for(const X in l){const x=l[X],y=C.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}function gg(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const se=new vt;let oe=null;const Te=new vt(0,0,0,0);return{setMask:function(Se){oe!==Se&&!P&&(n.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){P=Se},setClear:function(Se,Ke,Je,mt,At){At===!0&&(Se*=mt,Ke*=mt,Je*=mt),se.set(Se,Ke,Je,mt),Te.equals(se)===!1&&(n.clearColor(Se,Ke,Je,mt),Te.copy(se))},reset:function(){P=!1,oe=null,Te.set(-1,0,0,0)}}}function a(){let P=!1,se=null,oe=null,Te=null;return{setTest:function(Se){Se?De(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Se){se!==Se&&!P&&(n.depthMask(Se),se=Se)},setFunc:function(Se){if(oe!==Se){switch(Se){case Tf:n.depthFunc(n.NEVER);break;case Af:n.depthFunc(n.ALWAYS);break;case wf:n.depthFunc(n.LESS);break;case ca:n.depthFunc(n.LEQUAL);break;case Rf:n.depthFunc(n.EQUAL);break;case Cf:n.depthFunc(n.GEQUAL);break;case Pf:n.depthFunc(n.GREATER);break;case Lf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Se}},setLocked:function(Se){P=Se},setClear:function(Se){Te!==Se&&(n.clearDepth(Se),Te=Se)},reset:function(){P=!1,se=null,oe=null,Te=null}}}function o(){let P=!1,se=null,oe=null,Te=null,Se=null,Ke=null,Je=null,mt=null,At=null;return{setTest:function(tt){P||(tt?De(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(tt){se!==tt&&!P&&(n.stencilMask(tt),se=tt)},setFunc:function(tt,wt,nn){(oe!==tt||Te!==wt||Se!==nn)&&(n.stencilFunc(tt,wt,nn),oe=tt,Te=wt,Se=nn)},setOp:function(tt,wt,nn){(Ke!==tt||Je!==wt||mt!==nn)&&(n.stencilOp(tt,wt,nn),Ke=tt,Je=wt,mt=nn)},setLocked:function(tt){P=tt},setClear:function(tt){At!==tt&&(n.clearStencil(tt),At=tt)},reset:function(){P=!1,se=null,oe=null,Te=null,Se=null,Ke=null,Je=null,mt=null,At=null}}}const s=new r,c=new a,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,g=[],p=null,f=!1,b=null,E=null,T=null,D=null,C=null,w=null,X=null,x=new Ye(0,0,0),y=0,H=!1,V=null,ie=null,L=null,N=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,q=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=q>=2);let ae=null,ce={};const W=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),de=new vt().fromArray(W),Me=new vt().fromArray(Z);function ve(P,se,oe,Te){const Se=new Uint8Array(4),Ke=n.createTexture();n.bindTexture(P,Ke),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<oe;Je++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(se+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Ke}const Le={};Le[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(n.DEPTH_TEST),c.setFunc(ca),Ie(!1),S(xo),De(n.CULL_FACE),_e($n);function De(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function Ae(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Xe(P,se){return m[P]!==se?(n.bindFramebuffer(P,se),m[P]=se,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function F(P,se){let oe=g,Te=!1;if(P)if(oe=_.get(se),oe===void 0&&(oe=[],_.set(se,oe)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(oe.length!==Se.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Ke=0,Je=Se.length;Ke<Je;Ke++)oe[Ke]=n.COLOR_ATTACHMENT0+Ke;oe.length=Se.length,Te=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function pt(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const ye={[ni]:n.FUNC_ADD,[uf]:n.FUNC_SUBTRACT,[ff]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[yo]=n.MIN,ye[bo]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[yo]=P.MIN_EXT,ye[bo]=P.MAX_EXT)}const Ce={[hf]:n.ZERO,[df]:n.ONE,[pf]:n.SRC_COLOR,[Ss]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[vf]:n.DST_COLOR,[_f]:n.DST_ALPHA,[mf]:n.ONE_MINUS_SRC_COLOR,[Es]:n.ONE_MINUS_SRC_ALPHA,[xf]:n.ONE_MINUS_DST_COLOR,[gf]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[Ef]:n.ONE_MINUS_CONSTANT_COLOR,[yf]:n.CONSTANT_ALPHA,[bf]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(P,se,oe,Te,Se,Ke,Je,mt,At,tt){if(P===$n){f===!0&&(Ae(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),P!==lf){if(P!==b||tt!==H){if((E!==ni||C!==ni)&&(n.blendEquation(n.FUNC_ADD),E=ni,C=ni),tt)switch(P){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mo:n.blendFunc(n.ONE,n.ONE);break;case So:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case So:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,D=null,w=null,X=null,x.set(0,0,0),y=0,b=P,H=tt}return}Se=Se||se,Ke=Ke||oe,Je=Je||Te,(se!==E||Se!==C)&&(n.blendEquationSeparate(ye[se],ye[Se]),E=se,C=Se),(oe!==T||Te!==D||Ke!==w||Je!==X)&&(n.blendFuncSeparate(Ce[oe],Ce[Te],Ce[Ke],Ce[Je]),T=oe,D=Te,w=Ke,X=Je),(mt.equals(x)===!1||At!==y)&&(n.blendColor(mt.r,mt.g,mt.b,At),x.copy(mt),y=At),b=P,H=!1}function it(P,se){P.side===Sn?Ae(n.CULL_FACE):De(n.CULL_FACE);let oe=P.side===Dt;se&&(oe=!oe),Ie(oe),P.blending===$i&&P.transparent===!1?_e($n):_e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),s.setMask(P.colorWrite);const Te=P.stencilWrite;l.setTest(Te),Te&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){V!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),V=P)}function S(P){P!==sf?(De(n.CULL_FACE),P!==ie&&(P===xo?n.cullFace(n.BACK):P===of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),ie=P}function v(P){P!==L&&(j&&n.lineWidth(P),L=P)}function O(P,se,oe){P?(De(n.POLYGON_OFFSET_FILL),(N!==se||k!==oe)&&(n.polygonOffset(se,oe),N=se,k=oe)):Ae(n.POLYGON_OFFSET_FILL)}function ne(P){P?De(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function ee(P){P===void 0&&(P=n.TEXTURE0+Y-1),ae!==P&&(n.activeTexture(P),ae=P)}function te(P,se,oe){oe===void 0&&(ae===null?oe=n.TEXTURE0+Y-1:oe=ae);let Te=ce[oe];Te===void 0&&(Te={type:void 0,texture:void 0},ce[oe]=Te),(Te.type!==P||Te.texture!==se)&&(ae!==oe&&(n.activeTexture(oe),ae=oe),n.bindTexture(P,se||Le[P]),Te.type=P,Te.texture=se)}function ge(){const P=ce[ae];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(P){de.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),de.copy(P))}function He(P){Me.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function qe(P,se){let oe=h.get(se);oe===void 0&&(oe=new WeakMap,h.set(se,oe));let Te=oe.get(P);Te===void 0&&(Te=n.getUniformBlockIndex(se,P.name),oe.set(P,Te))}function $e(P,se){const Te=h.get(se).get(P);u.get(se)!==Te&&(n.uniformBlockBinding(se,Te,P.__bindingPointIndex),u.set(se,Te))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ae=null,ce={},m={},_=new WeakMap,g=[],p=null,f=!1,b=null,E=null,T=null,D=null,C=null,w=null,X=null,x=new Ye(0,0,0),y=0,H=!1,V=null,ie=null,L=null,N=null,k=null,de.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:De,disable:Ae,bindFramebuffer:Xe,drawBuffers:F,useProgram:pt,setBlending:_e,setMaterial:it,setFlipSided:Ie,setCullFace:S,setLineWidth:v,setPolygonOffset:O,setScissorTest:ne,activeTexture:ee,bindTexture:te,unbindTexture:ge,compressedTexImage2D:he,compressedTexImage3D:me,texImage2D:ue,texImage3D:re,updateUBOMapping:qe,uniformBlockBinding:$e,texStorage2D:A,texStorage3D:J,texSubImage2D:we,texSubImage3D:Fe,compressedTexSubImage2D:Q,compressedTexSubImage3D:je,scissor:xe,viewport:He,reset:le}}function vg(n,e,t,i,r,a,o){const s=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):pa("canvas")}function g(S,v,O,ne){let ee=1;if((S.width>ne||S.height>ne)&&(ee=ne/Math.max(S.width,S.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const te=v?da:Math.floor,ge=te(ee*S.width),he=te(ee*S.height);h===void 0&&(h=_(ge,he));const me=O?_(ge,he):h;return me.width=ge,me.height=he,me.getContext("2d").drawImage(S,0,0,ge,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ge+"x"+he+")."),me}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Rs(S.width)&&Rs(S.height)}function f(S){return s?!1:S.wrapS!==Jt||S.wrapT!==Jt||S.minFilter!==Lt&&S.minFilter!==Vt}function b(S,v){return S.generateMipmaps&&v&&S.minFilter!==Lt&&S.minFilter!==Vt}function E(S){n.generateMipmap(S)}function T(S,v,O,ne,ee=!1){if(s===!1)return v;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let te=v;if(v===n.RED&&(O===n.FLOAT&&(te=n.R32F),O===n.HALF_FLOAT&&(te=n.R16F),O===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(te=n.R8UI),O===n.UNSIGNED_SHORT&&(te=n.R16UI),O===n.UNSIGNED_INT&&(te=n.R32UI),O===n.BYTE&&(te=n.R8I),O===n.SHORT&&(te=n.R16I),O===n.INT&&(te=n.R32I)),v===n.RG&&(O===n.FLOAT&&(te=n.RG32F),O===n.HALF_FLOAT&&(te=n.RG16F),O===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const ge=ee?la:et.getTransfer(ne);O===n.FLOAT&&(te=n.RGBA32F),O===n.HALF_FLOAT&&(te=n.RGBA16F),O===n.UNSIGNED_BYTE&&(te=ge===rt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function D(S,v,O){return b(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==Lt&&S.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function C(S){return S===Lt||S===To||S===Ba?n.NEAREST:n.LINEAR}function w(S){const v=S.target;v.removeEventListener("dispose",w),x(v),v.isVideoTexture&&u.delete(v)}function X(S){const v=S.target;v.removeEventListener("dispose",X),H(v)}function x(S){const v=i.get(S);if(v.__webglInit===void 0)return;const O=S.source,ne=d.get(O);if(ne){const ee=ne[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(S),Object.keys(ne).length===0&&d.delete(O)}i.remove(S)}function y(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const O=S.source,ne=d.get(O);delete ne[v.__cacheKey],o.memory.textures--}function H(S){const v=S.texture,O=i.get(S),ne=i.get(v);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(O.__webglFramebuffer[ee]))for(let te=0;te<O.__webglFramebuffer[ee].length;te++)n.deleteFramebuffer(O.__webglFramebuffer[ee][te]);else n.deleteFramebuffer(O.__webglFramebuffer[ee]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ee])}else{if(Array.isArray(O.__webglFramebuffer))for(let ee=0;ee<O.__webglFramebuffer.length;ee++)n.deleteFramebuffer(O.__webglFramebuffer[ee]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ee=0;ee<O.__webglColorRenderbuffer.length;ee++)O.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ee]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,te=v.length;ee<te;ee++){const ge=i.get(v[ee]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(v[ee])}i.remove(v),i.remove(S)}let V=0;function ie(){V=0}function L(){const S=V;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),V+=1,S}function N(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function k(S,v){const O=i.get(S);if(S.isVideoTexture&&it(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const ne=S.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(O,S,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function Y(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){de(O,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function j(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){de(O,S,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function q(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){Me(O,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const K={[Ts]:n.REPEAT,[Jt]:n.CLAMP_TO_EDGE,[As]:n.MIRRORED_REPEAT},ae={[Lt]:n.NEAREST,[To]:n.NEAREST_MIPMAP_NEAREST,[Ba]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[zf]:n.LINEAR_MIPMAP_NEAREST,[xr]:n.LINEAR_MIPMAP_LINEAR},ce={[Zf]:n.NEVER,[rh]:n.ALWAYS,[Qf]:n.LESS,[Ul]:n.LEQUAL,[eh]:n.EQUAL,[ih]:n.GEQUAL,[th]:n.GREATER,[nh]:n.NOTEQUAL};function W(S,v,O){if(O?(n.texParameteri(S,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,K[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ae[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ae[v.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Jt||v.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,C(v.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==Lt&&v.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Lt||v.minFilter!==Ba&&v.minFilter!==xr||v.type===On&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===Mr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(S,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Z(S,v){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",w));const ne=v.source;let ee=d.get(ne);ee===void 0&&(ee={},d.set(ne,ee));const te=N(v);if(te!==S.__cacheKey){ee[te]===void 0&&(ee[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[te].usedTimes++;const ge=ee[S.__cacheKey];ge!==void 0&&(ee[S.__cacheKey].usedTimes--,ge.usedTimes===0&&y(v)),S.__cacheKey=te,S.__webglTexture=ee[te].texture}return O}function de(S,v,O){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);const ee=Z(S,v),te=v.source;t.bindTexture(ne,S.__webglTexture,n.TEXTURE0+O);const ge=i.get(te);if(te.version!==ge.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);const he=et.getPrimaries(et.workingColorSpace),me=v.colorSpace===Wt?null:et.getPrimaries(v.colorSpace),we=v.colorSpace===Wt||he===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Fe=f(v)&&p(v.image)===!1;let Q=g(v.image,Fe,!1,r.maxTextureSize);Q=Ie(v,Q);const je=p(Q)||s,A=a.convert(v.format,v.colorSpace);let J=a.convert(v.type),ue=T(v.internalFormat,A,J,v.colorSpace,v.isVideoTexture);W(ne,v,je);let re;const xe=v.mipmaps,He=s&&v.isVideoTexture!==!0&&ue!==Pl,qe=ge.__version===void 0||ee===!0,$e=D(v,Q,je);if(v.isDepthTexture)ue=n.DEPTH_COMPONENT,s?v.type===On?ue=n.DEPTH_COMPONENT32F:v.type===Fn?ue=n.DEPTH_COMPONENT24:v.type===ri?ue=n.DEPTH24_STENCIL8:ue=n.DEPTH_COMPONENT16:v.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ai&&ue===n.DEPTH_COMPONENT&&v.type!==Vs&&v.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Fn,J=a.convert(v.type)),v.format===Vi&&ue===n.DEPTH_COMPONENT&&(ue=n.DEPTH_STENCIL,v.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ri,J=a.convert(v.type))),qe&&(He?t.texStorage2D(n.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,A,J,null));else if(v.isDataTexture)if(xe.length>0&&je){He&&qe&&t.texStorage2D(n.TEXTURE_2D,$e,ue,xe[0].width,xe[0].height);for(let le=0,P=xe.length;le<P;le++)re=xe[le],He?t.texSubImage2D(n.TEXTURE_2D,le,0,0,re.width,re.height,A,J,re.data):t.texImage2D(n.TEXTURE_2D,le,ue,re.width,re.height,0,A,J,re.data);v.generateMipmaps=!1}else He?(qe&&t.texStorage2D(n.TEXTURE_2D,$e,ue,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,A,J,Q.data)):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,A,J,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,ue,xe[0].width,xe[0].height,Q.depth);for(let le=0,P=xe.length;le<P;le++)re=xe[le],v.format!==Zt?A!==null?He?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,re.width,re.height,Q.depth,A,re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ue,re.width,re.height,Q.depth,0,re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,re.width,re.height,Q.depth,A,J,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ue,re.width,re.height,Q.depth,0,A,J,re.data)}else{He&&qe&&t.texStorage2D(n.TEXTURE_2D,$e,ue,xe[0].width,xe[0].height);for(let le=0,P=xe.length;le<P;le++)re=xe[le],v.format!==Zt?A!==null?He?t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,re.width,re.height,A,re.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(n.TEXTURE_2D,le,0,0,re.width,re.height,A,J,re.data):t.texImage2D(n.TEXTURE_2D,le,ue,re.width,re.height,0,A,J,re.data)}else if(v.isDataArrayTexture)He?(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,ue,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,A,J,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,A,J,Q.data);else if(v.isData3DTexture)He?(qe&&t.texStorage3D(n.TEXTURE_3D,$e,ue,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,A,J,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,A,J,Q.data);else if(v.isFramebufferTexture){if(qe)if(He)t.texStorage2D(n.TEXTURE_2D,$e,ue,Q.width,Q.height);else{let le=Q.width,P=Q.height;for(let se=0;se<$e;se++)t.texImage2D(n.TEXTURE_2D,se,ue,le,P,0,A,J,null),le>>=1,P>>=1}}else if(xe.length>0&&je){He&&qe&&t.texStorage2D(n.TEXTURE_2D,$e,ue,xe[0].width,xe[0].height);for(let le=0,P=xe.length;le<P;le++)re=xe[le],He?t.texSubImage2D(n.TEXTURE_2D,le,0,0,A,J,re):t.texImage2D(n.TEXTURE_2D,le,ue,A,J,re);v.generateMipmaps=!1}else He?(qe&&t.texStorage2D(n.TEXTURE_2D,$e,ue,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,A,J,Q)):t.texImage2D(n.TEXTURE_2D,0,ue,A,J,Q);b(v,je)&&E(ne),ge.__version=te.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Me(S,v,O){if(v.image.length!==6)return;const ne=Z(S,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);const te=i.get(ee);if(ee.version!==te.__version||ne===!0){t.activeTexture(n.TEXTURE0+O);const ge=et.getPrimaries(et.workingColorSpace),he=v.colorSpace===Wt?null:et.getPrimaries(v.colorSpace),me=v.colorSpace===Wt||ge===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const we=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let le=0;le<6;le++)!we&&!Fe?Q[le]=g(v.image[le],!1,!0,r.maxCubemapSize):Q[le]=Fe?v.image[le].image:v.image[le],Q[le]=Ie(v,Q[le]);const je=Q[0],A=p(je)||s,J=a.convert(v.format,v.colorSpace),ue=a.convert(v.type),re=T(v.internalFormat,J,ue,v.colorSpace),xe=s&&v.isVideoTexture!==!0,He=te.__version===void 0||ne===!0;let qe=D(v,je,A);W(n.TEXTURE_CUBE_MAP,v,A);let $e;if(we){xe&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,re,je.width,je.height);for(let le=0;le<6;le++){$e=Q[le].mipmaps;for(let P=0;P<$e.length;P++){const se=$e[P];v.format!==Zt?J!==null?xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,0,0,se.width,se.height,J,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,re,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,0,0,se.width,se.height,J,ue,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,re,se.width,se.height,0,J,ue,se.data)}}}else{$e=v.mipmaps,xe&&He&&($e.length>0&&qe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,re,Q[0].width,Q[0].height));for(let le=0;le<6;le++)if(Fe){xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Q[le].width,Q[le].height,J,ue,Q[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,re,Q[le].width,Q[le].height,0,J,ue,Q[le].data);for(let P=0;P<$e.length;P++){const oe=$e[P].image[le].image;xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,0,0,oe.width,oe.height,J,ue,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,re,oe.width,oe.height,0,J,ue,oe.data)}}else{xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,J,ue,Q[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,re,J,ue,Q[le]);for(let P=0;P<$e.length;P++){const se=$e[P];xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,0,0,J,ue,se.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,re,J,ue,se.image[le])}}}b(v,A)&&E(n.TEXTURE_CUBE_MAP),te.__version=ee.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,O,ne,ee,te){const ge=a.convert(O.format,O.colorSpace),he=a.convert(O.type),me=T(O.internalFormat,ge,he,O.colorSpace);if(!i.get(v).__hasExternalTextures){const Fe=Math.max(1,v.width>>te),Q=Math.max(1,v.height>>te);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,me,Fe,Q,v.depth,0,ge,he,null):t.texImage2D(ee,te,me,Fe,Q,0,ge,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),_e(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,i.get(O).__webglTexture,0,Ce(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,i.get(O).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(S,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let ne=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||_e(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===On?ne=n.DEPTH_COMPONENT32F:ee.type===Fn&&(ne=n.DEPTH_COMPONENT24));const te=Ce(v);_e(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ne,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ne,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const ne=Ce(v);O&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,v.width,v.height):_e(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const ne=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<ne.length;ee++){const te=ne[ee],ge=a.convert(te.format,te.colorSpace),he=a.convert(te.type),me=T(te.internalFormat,ge,he,te.colorSpace),we=Ce(v);O&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,me,v.width,v.height):_e(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const ne=i.get(v.depthTexture).__webglTexture,ee=Ce(v);if(v.depthTexture.format===ai)_e(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(v.depthTexture.format===Vi)_e(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(S){const v=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,S)}else if(O){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[ne],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(S,v,O){const ne=i.get(S);v!==void 0&&ve(ne.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ae(S)}function F(S){const v=S.texture,O=i.get(S),ne=i.get(v);S.addEventListener("dispose",X),S.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,o.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,te=S.isWebGLMultipleRenderTargets===!0,ge=p(S)||s;if(ee){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(s&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let me=0;me<v.mipmaps.length;me++)O.__webglFramebuffer[he][me]=n.createFramebuffer()}else O.__webglFramebuffer[he]=n.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)O.__webglFramebuffer[he]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const he=S.texture;for(let me=0,we=he.length;me<we;me++){const Fe=i.get(he[me]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&_e(S)===!1){const he=te?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const we=he[me];O.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[me]);const Fe=a.convert(we.format,we.colorSpace),Q=a.convert(we.type),je=T(we.internalFormat,Fe,Q,we.colorSpace,S.isXRRenderTarget===!0),A=Ce(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,A,je,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,O.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),W(n.TEXTURE_CUBE_MAP,v,ge);for(let he=0;he<6;he++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)ve(O.__webglFramebuffer[he][me],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else ve(O.__webglFramebuffer[he],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);b(v,ge)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const he=S.texture;for(let me=0,we=he.length;me<we;me++){const Fe=he[me],Q=i.get(Fe);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),W(n.TEXTURE_2D,Fe,ge),ve(O.__webglFramebuffer,S,Fe,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),b(Fe,ge)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?he=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),W(he,v,ge),s&&v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)ve(O.__webglFramebuffer[me],S,v,n.COLOR_ATTACHMENT0,he,me);else ve(O.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,he,0);b(v,ge)&&E(he),t.unbindTexture()}S.depthBuffer&&Ae(S)}function pt(S){const v=p(S)||s,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0,ee=O.length;ne<ee;ne++){const te=O[ne];if(b(te,v)){const ge=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(te).__webglTexture;t.bindTexture(ge,he),E(ge),t.unbindTexture()}}}function ye(S){if(s&&S.samples>0&&_e(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,ne=S.height;let ee=n.COLOR_BUFFER_BIT;const te=[],ge=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),me=S.isWebGLMultipleRenderTargets===!0;if(me)for(let we=0;we<v.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let we=0;we<v.length;we++){te.push(n.COLOR_ATTACHMENT0+we),S.depthBuffer&&te.push(ge);const Fe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Fe===!1&&(S.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[we]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),me){const Q=i.get(v[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,O,ne,0,0,O,ne,ee,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<v.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,he.__webglColorRenderbuffer[we]);const Fe=i.get(v[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ce(S){return Math.min(r.maxSamples,S.samples)}function _e(S){const v=i.get(S);return s&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function Ie(S,v){const O=S.colorSpace,ne=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ws||O!==Tn&&O!==Wt&&(et.getTransfer(O)===rt?s===!1?e.has("EXT_sRGB")===!0&&ne===Zt?(S.format=ws,S.minFilter=Vt,S.generateMipmaps=!1):v=Nl.sRGBToLinear(v):(ne!==Zt||ee!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=L,this.resetTextureUnits=ie,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Xe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_e}function xg(n,e,t){const i=t.isWebGL2;function r(a,o=Wt){let s;const c=et.getTransfer(o);if(a===Hn)return n.UNSIGNED_BYTE;if(a===Tl)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Al)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Hf)return n.BYTE;if(a===Gf)return n.SHORT;if(a===Vs)return n.UNSIGNED_SHORT;if(a===bl)return n.INT;if(a===Fn)return n.UNSIGNED_INT;if(a===On)return n.FLOAT;if(a===Mr)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Vf)return n.ALPHA;if(a===Zt)return n.RGBA;if(a===kf)return n.LUMINANCE;if(a===Wf)return n.LUMINANCE_ALPHA;if(a===ai)return n.DEPTH_COMPONENT;if(a===Vi)return n.DEPTH_STENCIL;if(a===ws)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Xf)return n.RED;if(a===wl)return n.RED_INTEGER;if(a===jf)return n.RG;if(a===Rl)return n.RG_INTEGER;if(a===Cl)return n.RGBA_INTEGER;if(a===$a||a===za||a===Ha||a===Ga)if(c===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===$a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===$a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ao||a===wo||a===Ro||a===Co)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Pl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Po||a===Lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Po)return c===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Lo)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Do||a===Uo||a===Io||a===No||a===Fo||a===Oo||a===Bo||a===$o||a===zo||a===Ho||a===Go||a===Vo||a===ko||a===Wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Do)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Uo)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Io)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===No)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Fo)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Oo)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Bo)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$o)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===zo)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ho)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Go)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Vo)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ko)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Wo)return c===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Va||a===Xo||a===jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Va)return c===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===qf||a===qo||a===Yo||a===Ko)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Va)return s.COMPRESSED_RED_RGTC1_EXT;if(a===qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ko)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ri?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class Mg extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ia extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sg={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),f=this._getHandJoint(l,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Eg extends hi{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,_=null;const g=t.getContextAttributes();let p=null,f=null;const b=[],E=[],T=new Ue;let D=null;const C=new kt;C.layers.enable(1),C.viewport=new vt;const w=new kt;w.layers.enable(2),w.viewport=new vt;const X=[C,w],x=new Mg;x.layers.enable(1),x.layers.enable(2);let y=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=b[W];return Z===void 0&&(Z=new hs,b[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=b[W];return Z===void 0&&(Z=new hs,b[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=b[W];return Z===void 0&&(Z=new hs,b[W]=Z),Z.getHandSpace()};function V(W){const Z=E.indexOf(W.inputSource);if(Z===-1)return;const de=b[Z];de!==void 0&&(de.update(W.inputSource,W.frame,l||o),de.dispatchEvent({type:W.type,data:W.inputSource}))}function ie(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",L);for(let W=0;W<b.length;W++){const Z=E[W];Z!==null&&(E[W]=null,b[W].disconnect(Z))}y=null,H=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,f=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new ci(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,de=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?Vi:ai,de=g.stencil?ri:Fn);const ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new ci(d.textureWidth,d.textureHeight,{format:Zt,type:Hn,depthTexture:new Yl(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(f);Le.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(W){for(let Z=0;Z<W.removed.length;Z++){const de=W.removed[Z],Me=E.indexOf(de);Me>=0&&(E[Me]=null,b[Me].disconnect(de))}for(let Z=0;Z<W.added.length;Z++){const de=W.added[Z];let Me=E.indexOf(de);if(Me===-1){for(let Le=0;Le<b.length;Le++)if(Le>=E.length){E.push(de),Me=Le;break}else if(E[Le]===null){E[Le]=de,Me=Le;break}if(Me===-1)break}const ve=b[Me];ve&&ve.connect(de)}}const N=new I,k=new I;function Y(W,Z,de){N.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(de.matrixWorld);const Me=N.distanceTo(k),ve=Z.projectionMatrix.elements,Le=de.projectionMatrix.elements,De=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),Xe=(ve[9]+1)/ve[5],F=(ve[9]-1)/ve[5],pt=(ve[8]-1)/ve[0],ye=(Le[8]+1)/Le[0],Ce=De*pt,_e=De*ye,it=Me/(-pt+ye),Ie=it*-pt;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ie),W.translateZ(it),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const S=De+it,v=Ae+it,O=Ce-Ie,ne=_e+(Me-Ie),ee=Xe*Ae/v*S,te=F*Ae/v*S;W.projectionMatrix.makePerspective(O,ne,ee,te,S,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.near=w.near=C.near=W.near,x.far=w.far=C.far=W.far,(y!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,H=x.far);const Z=W.parent,de=x.cameras;j(x,Z);for(let Me=0;Me<de.length;Me++)j(de[Me],Z);de.length===2?Y(x,C,w):x.projectionMatrix.copy(C.projectionMatrix),q(W,x,Z)};function q(W,Z,de){de===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let K=null;function ae(W,Z){if(u=Z.getViewerPose(l||o),_=Z,u!==null){const de=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Me=!1;de.length!==x.cameras.length&&(x.cameras.length=0,Me=!0);for(let ve=0;ve<de.length;ve++){const Le=de[ve];let De=null;if(m!==null)De=m.getViewport(Le);else{const Xe=h.getViewSubImage(d,Le);De=Xe.viewport,ve===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let Ae=X[ve];Ae===void 0&&(Ae=new kt,Ae.layers.enable(ve),Ae.viewport=new vt,X[ve]=Ae),Ae.matrix.fromArray(Le.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Le.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(De.x,De.y,De.width,De.height),ve===0&&(x.matrix.copy(Ae.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Me===!0&&x.cameras.push(Ae)}}for(let de=0;de<b.length;de++){const Me=E[de],ve=b[de];Me!==null&&ve!==void 0&&ve.update(Me,Z,l||o)}K&&K(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const ce=new jl;ce.setAnimationLoop(ae),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function yg(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,kl(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,b,E,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),h(p,f)):f.isMeshPhongMaterial?(a(p,f),u(p,f)):f.isMeshStandardMaterial?(a(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,T)):f.isMeshMatcapMaterial?(a(p,f),_(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),g(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&s(p,f)):f.isPointsMaterial?c(p,f,b,E):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Dt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Dt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function s(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,b,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=E*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bg(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,E){const T=E.program;i.uniformBlockBinding(b,T)}function l(b,E){let T=r[b.id];T===void 0&&(_(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",p));const D=E.program;i.updateUBOMapping(b,D);const C=e.render.frame;a[b.id]!==C&&(d(b),a[b.id]=C)}function u(b){const E=h();b.__bindingPointIndex=E;const T=n.createBuffer(),D=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function h(){for(let b=0;b<s;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=r[b.id],T=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,w=T.length;C<w;C++){const X=Array.isArray(T[C])?T[C]:[T[C]];for(let x=0,y=X.length;x<y;x++){const H=X[x];if(m(H,C,x,D)===!0){const V=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let L=0;for(let N=0;N<ie.length;N++){const k=ie[N],Y=g(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,V+L,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,E,T,D){const C=b.value,w=E+"_"+T;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{const X=D[w];if(typeof C=="number"||typeof C=="boolean"){if(X!==C)return D[w]=C,!0}else if(X.equals(C)===!1)return X.copy(C),!0}return!1}function _(b){const E=b.uniforms;let T=0;const D=16;for(let w=0,X=E.length;w<X;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,H=x.length;y<H;y++){const V=x[y],ie=Array.isArray(V.value)?V.value:[V.value];for(let L=0,N=ie.length;L<N;L++){const k=ie[L],Y=g(k),j=T%D;j!==0&&D-j<Y.boundary&&(T+=D-j),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=Y.storage}}}const C=T%D;return C>0&&(T+=D-C),b.__size=T,b.__cache={},this}function g(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},a={}}return{bind:c,update:l,dispose:f}}class tu{constructor(e={}){const{canvas:t=Mh(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=zn,this.toneMappingExposure=1;const E=this;let T=!1,D=0,C=0,w=null,X=-1,x=null;const y=new vt,H=new vt;let V=null;const ie=new Ye(0);let L=0,N=t.width,k=t.height,Y=1,j=null,q=null;const K=new vt(0,0,N,k),ae=new vt(0,0,N,k);let ce=!1;const W=new js;let Z=!1,de=!1,Me=null;const ve=new ft,Le=new Ue,De=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return w===null?Y:1}let F=i;function pt(M,U){for(let z=0;z<M.length;z++){const G=M[z],B=t.getContext(G,U);if(B!==null)return B}return null}try{const M={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hs}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",se,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&U.shift(),F=pt(U,M),F===null)throw pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ye,Ce,_e,it,Ie,S,v,O,ne,ee,te,ge,he,me,we,Fe,Q,je,A,J,ue,re,xe,He;function qe(){ye=new Im(F),Ce=new Rm(F,ye,e),ye.init(Ce),re=new xg(F,ye,Ce),_e=new gg(F,ye,Ce),it=new Om(F),Ie=new ig,S=new vg(F,ye,_e,Ie,Ce,re,it),v=new Pm(E),O=new Um(E),ne=new Wh(F,Ce),xe=new Am(F,ye,ne,Ce),ee=new Nm(F,ne,it,xe),te=new Hm(F,ee,ne,it),A=new zm(F,Ce,S),Fe=new Cm(Ie),ge=new ng(E,v,O,ye,Ce,xe,Fe),he=new yg(E,Ie),me=new ag,we=new fg(ye,Ce),je=new Tm(E,v,O,_e,te,d,c),Q=new _g(E,te,Ce),He=new bg(F,it,Ce,_e),J=new wm(F,ye,it,Ce),ue=new Fm(F,ye,it,Ce),it.programs=ge.programs,E.capabilities=Ce,E.extensions=ye,E.properties=Ie,E.renderLists=me,E.shadowMap=Q,E.state=_e,E.info=it}qe();const $e=new Eg(E,F);this.xr=$e,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(N,k,!1))},this.getSize=function(M){return M.set(N,k)},this.setSize=function(M,U,z=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=M,k=U,t.width=Math.floor(M*Y),t.height=Math.floor(U*Y),z===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(N*Y,k*Y).floor()},this.setDrawingBufferSize=function(M,U,z){N=M,k=U,Y=z,t.width=Math.floor(M*z),t.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,U,z,G){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,U,z,G),_e.viewport(y.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(ae)},this.setScissor=function(M,U,z,G){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,U,z,G),_e.scissor(H.copy(ae).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(M){_e.setScissorTest(ce=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(M=!0,U=!0,z=!0){let G=0;if(M){let B=!1;if(w!==null){const pe=w.texture.format;B=pe===Cl||pe===Rl||pe===wl}if(B){const pe=w.texture.type,Ee=pe===Hn||pe===Fn||pe===Vs||pe===ri||pe===Tl||pe===Al,Re=je.getClearColor(),Pe=je.getClearAlpha(),ze=Re.r,Ne=Re.g,Oe=Re.b;Ee?(m[0]=ze,m[1]=Ne,m[2]=Oe,m[3]=Pe,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=ze,_[1]=Ne,_[2]=Oe,_[3]=Pe,F.clearBufferiv(F.COLOR,0,_))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),z&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",se,!1),me.dispose(),we.dispose(),Ie.dispose(),v.dispose(),O.dispose(),te.dispose(),xe.dispose(),He.dispose(),ge.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",At),$e.removeEventListener("sessionend",tt),Me&&(Me.dispose(),Me=null),wt.stop()};function le(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=it.autoReset,U=Q.enabled,z=Q.autoUpdate,G=Q.needsUpdate,B=Q.type;qe(),it.autoReset=M,Q.enabled=U,Q.autoUpdate=z,Q.needsUpdate=G,Q.type=B}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){const U=M.target;U.removeEventListener("dispose",oe),Te(U)}function Te(M){Se(M),Ie.remove(M)}function Se(M){const U=Ie.get(M).programs;U!==void 0&&(U.forEach(function(z){ge.releaseProgram(z)}),M.isShaderMaterial&&ge.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,G,B,pe){U===null&&(U=Ae);const Ee=B.isMesh&&B.matrixWorld.determinant()<0,Re=tf(M,U,z,G,B);_e.setMaterial(G,Ee);let Pe=z.index,ze=1;if(G.wireframe===!0){if(Pe=ee.getWireframeAttribute(z),Pe===void 0)return;ze=2}const Ne=z.drawRange,Oe=z.attributes.position;let ct=Ne.start*ze,Ut=(Ne.start+Ne.count)*ze;pe!==null&&(ct=Math.max(ct,pe.start*ze),Ut=Math.min(Ut,(pe.start+pe.count)*ze)),Pe!==null?(ct=Math.max(ct,0),Ut=Math.min(Ut,Pe.count)):Oe!=null&&(ct=Math.max(ct,0),Ut=Math.min(Ut,Oe.count));const _t=Ut-ct;if(_t<0||_t===1/0)return;xe.setup(B,G,Re,z,Pe);let pn,at=J;if(Pe!==null&&(pn=ne.get(Pe),at=ue,at.setIndex(pn)),B.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Xe()),at.setMode(F.LINES)):at.setMode(F.TRIANGLES);else if(B.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),_e.setLineWidth(Ge*Xe()),B.isLineSegments?at.setMode(F.LINES):B.isLineLoop?at.setMode(F.LINE_LOOP):at.setMode(F.LINE_STRIP)}else B.isPoints?at.setMode(F.POINTS):B.isSprite&&at.setMode(F.TRIANGLES);if(B.isBatchedMesh)at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)at.renderInstances(ct,_t,B.count);else if(z.isInstancedBufferGeometry){const Ge=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ia=Math.min(z.instanceCount,Ge);at.renderInstances(ct,_t,Ia)}else at.render(ct,_t)};function Ke(M,U,z){M.transparent===!0&&M.side===Sn&&M.forceSinglePass===!1?(M.side=Dt,M.needsUpdate=!0,Ir(M,U,z),M.side=kn,M.needsUpdate=!0,Ir(M,U,z),M.side=Sn):Ir(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),p=we.get(z),p.init(),b.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),M!==z&&M.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(E._useLegacyLights);const G=new Set;return M.traverse(function(B){const pe=B.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const Re=pe[Ee];Ke(Re,z,B),G.add(Re)}else Ke(pe,z,B),G.add(pe)}),b.pop(),p=null,G},this.compileAsync=function(M,U,z=null){const G=this.compile(M,U,z);return new Promise(B=>{function pe(){if(G.forEach(function(Ee){Ie.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){B(M);return}setTimeout(pe,10)}ye.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Je=null;function mt(M){Je&&Je(M)}function At(){wt.stop()}function tt(){wt.start()}const wt=new jl;wt.setAnimationLoop(mt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(M){Je=M,$e.setAnimationLoop(M),M===null?wt.stop():wt.start()},$e.addEventListener("sessionstart",At),$e.addEventListener("sessionend",tt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(U),U=$e.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,U,w),p=we.get(M,b.length),p.init(),b.push(p),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(ve),de=this.localClippingEnabled,Z=Fe.init(this.clippingPlanes,de),g=me.get(M,f.length),g.init(),f.push(g),nn(M,U,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(j,q),this.info.render.frame++,Z===!0&&Fe.beginShadows();const z=p.state.shadowsArray;if(Q.render(z,M,U),Z===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(g,M),p.setupLights(E._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let B=0,pe=G.length;B<pe;B++){const Ee=G[B];ho(g,M,Ee,Ee.viewport)}}else ho(g,M,U);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(E,M,U),xe.resetDefaultState(),X=-1,x=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function nn(M,U,z,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||W.intersectsSprite(M)){G&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ve);const Ee=te.update(M),Re=M.material;Re.visible&&g.push(M,Ee,Re,z,De.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||W.intersectsObject(M))){const Ee=te.update(M),Re=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),De.copy(Ee.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){const Pe=Ee.groups;for(let ze=0,Ne=Pe.length;ze<Ne;ze++){const Oe=Pe[ze],ct=Re[Oe.materialIndex];ct&&ct.visible&&g.push(M,Ee,ct,z,De.z,Oe)}}else Re.visible&&g.push(M,Ee,Re,z,De.z,null)}}const pe=M.children;for(let Ee=0,Re=pe.length;Ee<Re;Ee++)nn(pe[Ee],U,z,G)}function ho(M,U,z,G){const B=M.opaque,pe=M.transmissive,Ee=M.transparent;p.setupLightsView(z),Z===!0&&Fe.setGlobalState(E.clippingPlanes,z),pe.length>0&&ef(B,pe,U,z),G&&_e.viewport(y.copy(G)),B.length>0&&Ur(B,U,z),pe.length>0&&Ur(pe,U,z),Ee.length>0&&Ur(Ee,U,z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ef(M,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const pe=Ce.isWebGL2;Me===null&&(Me=new ci(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Mr:Hn,minFilter:xr,samples:pe?4:0})),E.getDrawingBufferSize(Le),pe?Me.setSize(Le.x,Le.y):Me.setSize(da(Le.x),da(Le.y));const Ee=E.getRenderTarget();E.setRenderTarget(Me),E.getClearColor(ie),L=E.getClearAlpha(),L<1&&E.setClearColor(16777215,.5),E.clear();const Re=E.toneMapping;E.toneMapping=zn,Ur(M,z,G),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me);let Pe=!1;for(let ze=0,Ne=U.length;ze<Ne;ze++){const Oe=U[ze],ct=Oe.object,Ut=Oe.geometry,_t=Oe.material,pn=Oe.group;if(_t.side===Sn&&ct.layers.test(G.layers)){const at=_t.side;_t.side=Dt,_t.needsUpdate=!0,po(ct,z,G,Ut,_t,pn),_t.side=at,_t.needsUpdate=!0,Pe=!0}}Pe===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me)),E.setRenderTarget(Ee),E.setClearColor(ie,L),E.toneMapping=Re}function Ur(M,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let B=0,pe=M.length;B<pe;B++){const Ee=M[B],Re=Ee.object,Pe=Ee.geometry,ze=G===null?Ee.material:G,Ne=Ee.group;Re.layers.test(z.layers)&&po(Re,U,z,Pe,ze,Ne)}}function po(M,U,z,G,B,pe){M.onBeforeRender(E,U,z,G,B,pe),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(E,U,z,G,M,pe),B.transparent===!0&&B.side===Sn&&B.forceSinglePass===!1?(B.side=Dt,B.needsUpdate=!0,E.renderBufferDirect(z,U,G,B,M,pe),B.side=kn,B.needsUpdate=!0,E.renderBufferDirect(z,U,G,B,M,pe),B.side=Sn):E.renderBufferDirect(z,U,G,B,M,pe),M.onAfterRender(E,U,z,G,B,pe)}function Ir(M,U,z){U.isScene!==!0&&(U=Ae);const G=Ie.get(M),B=p.state.lights,pe=p.state.shadowsArray,Ee=B.state.version,Re=ge.getParameters(M,B.state,pe,U,z),Pe=ge.getProgramCacheKey(Re);let ze=G.programs;G.environment=M.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||G.environment),ze===void 0&&(M.addEventListener("dispose",oe),ze=new Map,G.programs=ze);let Ne=ze.get(Pe);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===Ee)return _o(M,Re),Ne}else Re.uniforms=ge.getUniforms(M),M.onBuild(z,Re,E),M.onBeforeCompile(Re,E),Ne=ge.acquireProgram(Re,Pe),ze.set(Pe,Ne),G.uniforms=Re.uniforms;const Oe=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=Fe.uniform),_o(M,Re),G.needsLights=rf(M),G.lightsStateVersion=Ee,G.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function mo(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=oa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function _o(M,U){const z=Ie.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function tf(M,U,z,G,B){U.isScene!==!0&&(U=Ae),S.resetTextureUnits();const pe=U.fog,Ee=G.isMeshStandardMaterial?U.environment:null,Re=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Tn,Pe=(G.isMeshStandardMaterial?O:v).get(G.envMap||Ee),ze=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Oe=!!z.morphAttributes.position,ct=!!z.morphAttributes.normal,Ut=!!z.morphAttributes.color;let _t=zn;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_t=E.toneMapping);const pn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=pn!==void 0?pn.length:0,Ge=Ie.get(G),Ia=p.state.lights;if(Z===!0&&(de===!0||M!==x)){const $t=M===x&&G.id===X;Fe.setState(G,M,$t)}let st=!1;G.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ia.state.version||Ge.outputColorSpace!==Re||B.isBatchedMesh&&Ge.batching===!1||!B.isBatchedMesh&&Ge.batching===!0||B.isInstancedMesh&&Ge.instancing===!1||!B.isInstancedMesh&&Ge.instancing===!0||B.isSkinnedMesh&&Ge.skinning===!1||!B.isSkinnedMesh&&Ge.skinning===!0||B.isInstancedMesh&&Ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ge.instancingColor===!1&&B.instanceColor!==null||Ge.envMap!==Pe||G.fog===!0&&Ge.fog!==pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Fe.numPlanes||Ge.numIntersection!==Fe.numIntersection)||Ge.vertexAlphas!==ze||Ge.vertexTangents!==Ne||Ge.morphTargets!==Oe||Ge.morphNormals!==ct||Ge.morphColors!==Ut||Ge.toneMapping!==_t||Ce.isWebGL2===!0&&Ge.morphTargetsCount!==at)&&(st=!0):(st=!0,Ge.__version=G.version);let Yn=Ge.currentProgram;st===!0&&(Yn=Ir(G,U,B));let go=!1,ir=!1,Na=!1;const Mt=Yn.getUniforms(),Kn=Ge.uniforms;if(_e.useProgram(Yn.program)&&(go=!0,ir=!0,Na=!0),G.id!==X&&(X=G.id,ir=!0),go||x!==M){Mt.setValue(F,"projectionMatrix",M.projectionMatrix),Mt.setValue(F,"viewMatrix",M.matrixWorldInverse);const $t=Mt.map.cameraPosition;$t!==void 0&&$t.setValue(F,De.setFromMatrixPosition(M.matrixWorld)),Ce.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,ir=!0,Na=!0)}if(B.isSkinnedMesh){Mt.setOptional(F,B,"bindMatrix"),Mt.setOptional(F,B,"bindMatrixInverse");const $t=B.skeleton;$t&&(Ce.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Mt.setValue(F,"boneTexture",$t.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Mt.setOptional(F,B,"batchingTexture"),Mt.setValue(F,"batchingTexture",B._matricesTexture,S));const Fa=z.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&Ce.isWebGL2===!0)&&A.update(B,z,Yn),(ir||Ge.receiveShadow!==B.receiveShadow)&&(Ge.receiveShadow=B.receiveShadow,Mt.setValue(F,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Kn.envMap.value=Pe,Kn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ir&&(Mt.setValue(F,"toneMappingExposure",E.toneMappingExposure),Ge.needsLights&&nf(Kn,Na),pe&&G.fog===!0&&he.refreshFogUniforms(Kn,pe),he.refreshMaterialUniforms(Kn,G,Y,k,Me),oa.upload(F,mo(Ge),Kn,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(oa.upload(F,mo(Ge),Kn,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(F,"center",B.center),Mt.setValue(F,"modelViewMatrix",B.modelViewMatrix),Mt.setValue(F,"normalMatrix",B.normalMatrix),Mt.setValue(F,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $t=G.uniformsGroups;for(let Oa=0,af=$t.length;Oa<af;Oa++)if(Ce.isWebGL2){const vo=$t[Oa];He.update(vo,Yn),He.bind(vo,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function nf(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function rf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,U,z){Ie.get(M.texture).__webglTexture=U,Ie.get(M.depthTexture).__webglTexture=z;const G=Ie.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const z=Ie.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){w=M,D=U,C=z;let G=!0,B=null,pe=!1,Ee=!1;if(M){const Pe=Ie.get(M);Pe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Pe.__webglFramebuffer===void 0?S.setupRenderTarget(M):Pe.__hasExternalTextures&&S.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Ne=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?B=Ne[U][z]:B=Ne[U],pe=!0):Ce.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?B=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[z]:B=Ne,y.copy(M.viewport),H.copy(M.scissor),V=M.scissorTest}else y.copy(K).multiplyScalar(Y).floor(),H.copy(ae).multiplyScalar(Y).floor(),V=ce;if(_e.bindFramebuffer(F.FRAMEBUFFER,B)&&Ce.drawBuffers&&G&&_e.drawBuffers(M,B),_e.viewport(y),_e.scissor(H),_e.setScissorTest(V),pe){const Pe=Ie.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,z)}else if(Ee){const Pe=Ie.get(M.texture),ze=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.__webglTexture,z||0,ze)}X=-1},this.readRenderTargetPixels=function(M,U,z,G,B,pe,Ee){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){_e.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Pe=M.texture,ze=Pe.format,Ne=Pe.type;if(ze!==Zt&&re.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===Mr&&(ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ne!==Hn&&re.convert(Ne)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===On&&(Ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&z>=0&&z<=M.height-B&&F.readPixels(U,z,G,B,re.convert(ze),re.convert(Ne),pe)}finally{const Pe=w!==null?Ie.get(w).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(M,U,z=0){const G=Math.pow(2,-z),B=Math.floor(U.image.width*G),pe=Math.floor(U.image.height*G);S.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,M.x,M.y,B,pe),_e.unbindTexture()},this.copyTextureToTexture=function(M,U,z,G=0){const B=U.image.width,pe=U.image.height,Ee=re.convert(z.format),Re=re.convert(z.type);S.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,M.x,M.y,B,pe,Ee,Re,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,Ee,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,M.x,M.y,Ee,Re,U.image),G===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z,G,B=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=M.max.x-M.min.x+1,Ee=M.max.y-M.min.y+1,Re=M.max.z-M.min.z+1,Pe=re.convert(G.format),ze=re.convert(G.type);let Ne;if(G.isData3DTexture)S.setTexture3D(G,0),Ne=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Ne=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Oe=F.getParameter(F.UNPACK_ROW_LENGTH),ct=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ut=F.getParameter(F.UNPACK_SKIP_PIXELS),_t=F.getParameter(F.UNPACK_SKIP_ROWS),pn=F.getParameter(F.UNPACK_SKIP_IMAGES),at=z.isCompressedTexture?z.mipmaps[B]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,M.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,M.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Ne,B,U.x,U.y,U.z,pe,Ee,Re,Pe,ze,at.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ne,B,U.x,U.y,U.z,pe,Ee,Re,Pe,at.data)):F.texSubImage3D(Ne,B,U.x,U.y,U.z,pe,Ee,Re,Pe,ze,at),F.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),F.pixelStorei(F.UNPACK_SKIP_ROWS,_t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pn),B===0&&G.generateMipmaps&&F.generateMipmap(Ne),_e.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){D=0,C=0,w=null,_e.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ks?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===wa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?si:Ll}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===si?xt:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Tg extends tu{}Tg.prototype.isWebGL1Renderer=!0;class Ks{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Ks(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ag extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Js extends Wn{constructor(e=1,t=1,i=1,r=32,a=1,o=!1,s=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c};const l=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],d=[],m=[];let _=0;const g=[],p=i/2;let f=0;b(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(m,2));function b(){const T=new I,D=new I;let C=0;const w=(t-e)/i;for(let X=0;X<=a;X++){const x=[],y=X/a,H=y*(t-e)+e;for(let V=0;V<=r;V++){const ie=V/r,L=ie*c+s,N=Math.sin(L),k=Math.cos(L);D.x=H*N,D.y=-y*i+p,D.z=H*k,h.push(D.x,D.y,D.z),T.set(N,w,k).normalize(),d.push(T.x,T.y,T.z),m.push(ie,1-y),x.push(_++)}g.push(x)}for(let X=0;X<r;X++)for(let x=0;x<a;x++){const y=g[x][X],H=g[x+1][X],V=g[x+1][X+1],ie=g[x][X+1];u.push(y,H,ie),u.push(H,V,ie),C+=6}l.addGroup(f,C,0),f+=C}function E(T){const D=_,C=new Ue,w=new I;let X=0;const x=T===!0?e:t,y=T===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,p*y,0),d.push(0,y,0),m.push(.5,.5),_++;const H=_;for(let V=0;V<=r;V++){const L=V/r*c+s,N=Math.cos(L),k=Math.sin(L);w.x=x*k,w.y=p*y,w.z=x*N,h.push(w.x,w.y,w.z),d.push(0,y,0),C.x=N*.5+.5,C.y=k*.5*y+.5,m.push(C.x,C.y),_++}for(let V=0;V<r;V++){const ie=D+V,L=H+V;T===!0?u.push(L,L+1,ie):u.push(L+1,L,ie),X+=3}l.addGroup(f,X,T===!0?1:2),f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wg extends Rr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nu extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ds=new ft,$c=new I,zc=new I;class Rg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cg extends Rg{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hc extends nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Cg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pg extends nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hs);const Vc={type:"change"},ps={type:"start"},kc={type:"end"},ra=new Bl,Wc=new In,Lg=Math.cos(70*xh.DEG2RAD);class Dg extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",te),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",te),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Vc),i.update(),a=r.NONE},this.update=function(){const A=new I,J=new li().setFromUnitVectors(e.up,new I(0,1,0)),ue=J.clone().invert(),re=new I,xe=new li,He=new I,qe=2*Math.PI;return function(le=null){const P=i.object.position;A.copy(P).sub(i.target),A.applyQuaternion(J),s.setFromVector3(A),i.autoRotate&&a===r.NONE&&H(x(le)),i.enableDamping?(s.theta+=c.theta*i.dampingFactor,s.phi+=c.phi*i.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let se=i.minAzimuthAngle,oe=i.maxAzimuthAngle;isFinite(se)&&isFinite(oe)&&(se<-Math.PI?se+=qe:se>Math.PI&&(se-=qe),oe<-Math.PI?oe+=qe:oe>Math.PI&&(oe-=qe),se<=oe?s.theta=Math.max(se,Math.min(oe,s.theta)):s.theta=s.theta>(se+oe)/2?Math.max(se,s.theta):Math.min(oe,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=q(s.radius):s.radius=q(s.radius*l),A.setFromSpherical(s),A.applyQuaternion(ue),P.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Te=!1;if(i.zoomToCursor&&C){let Se=null;if(i.object.isPerspectiveCamera){const Ke=A.length();Se=q(Ke*l);const Je=Ke-Se;i.object.position.addScaledVector(T,Je),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ke=new I(D.x,D.y,0);Ke.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Te=!0;const Je=new I(D.x,D.y,0);Je.unproject(i.object),i.object.position.sub(Je).add(Ke),i.object.updateMatrixWorld(),Se=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Se).add(i.object.position):(ra.origin.copy(i.object.position),ra.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ra.direction))<Lg?e.lookAt(i.target):(Wc.setFromNormalAndCoplanarPoint(i.object.up,i.target),ra.intersectPlane(Wc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Te=!0);return l=1,C=!1,Te||re.distanceToSquared(i.object.position)>o||8*(1-xe.dot(i.object.quaternion))>o||He.distanceToSquared(i.target)>0?(i.dispatchEvent(Vc),re.copy(i.object.position),xe.copy(i.object.quaternion),He.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",me),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",v),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",te),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Gc,c=new Gc;let l=1;const u=new I,h=new Ue,d=new Ue,m=new Ue,_=new Ue,g=new Ue,p=new Ue,f=new Ue,b=new Ue,E=new Ue,T=new I,D=new Ue;let C=!1;const w=[],X={};function x(A){return A!==null?2*Math.PI/60*i.autoRotateSpeed*A:2*Math.PI/60/60*i.autoRotateSpeed}function y(A){const J=Math.abs(A)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*J)}function H(A){c.theta-=A}function V(A){c.phi-=A}const ie=function(){const A=new I;return function(ue,re){A.setFromMatrixColumn(re,0),A.multiplyScalar(-ue),u.add(A)}}(),L=function(){const A=new I;return function(ue,re){i.screenSpacePanning===!0?A.setFromMatrixColumn(re,1):(A.setFromMatrixColumn(re,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(ue),u.add(A)}}(),N=function(){const A=new I;return function(ue,re){const xe=i.domElement;if(i.object.isPerspectiveCamera){const He=i.object.position;A.copy(He).sub(i.target);let qe=A.length();qe*=Math.tan(i.object.fov/2*Math.PI/180),ie(2*ue*qe/xe.clientHeight,i.object.matrix),L(2*re*qe/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ie(ue*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),L(re*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(A,J){if(!i.zoomToCursor)return;C=!0;const ue=i.domElement.getBoundingClientRect(),re=A-ue.left,xe=J-ue.top,He=ue.width,qe=ue.height;D.x=re/He*2-1,D.y=-(xe/qe)*2+1,T.set(D.x,D.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(A){return Math.max(i.minDistance,Math.min(i.maxDistance,A))}function K(A){h.set(A.clientX,A.clientY)}function ae(A){j(A.clientX,A.clientX),f.set(A.clientX,A.clientY)}function ce(A){_.set(A.clientX,A.clientY)}function W(A){d.set(A.clientX,A.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;H(2*Math.PI*m.x/J.clientHeight),V(2*Math.PI*m.y/J.clientHeight),h.copy(d),i.update()}function Z(A){b.set(A.clientX,A.clientY),E.subVectors(b,f),E.y>0?k(y(E.y)):E.y<0&&Y(y(E.y)),f.copy(b),i.update()}function de(A){g.set(A.clientX,A.clientY),p.subVectors(g,_).multiplyScalar(i.panSpeed),N(p.x,p.y),_.copy(g),i.update()}function Me(A){j(A.clientX,A.clientY),A.deltaY<0?Y(y(A.deltaY)):A.deltaY>0&&k(y(A.deltaY)),i.update()}function ve(A){let J=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),J=!0;break}J&&(A.preventDefault(),i.update())}function Le(A){if(w.length===1)h.set(A.pageX,A.pageY);else{const J=je(A),ue=.5*(A.pageX+J.x),re=.5*(A.pageY+J.y);h.set(ue,re)}}function De(A){if(w.length===1)_.set(A.pageX,A.pageY);else{const J=je(A),ue=.5*(A.pageX+J.x),re=.5*(A.pageY+J.y);_.set(ue,re)}}function Ae(A){const J=je(A),ue=A.pageX-J.x,re=A.pageY-J.y,xe=Math.sqrt(ue*ue+re*re);f.set(0,xe)}function Xe(A){i.enableZoom&&Ae(A),i.enablePan&&De(A)}function F(A){i.enableZoom&&Ae(A),i.enableRotate&&Le(A)}function pt(A){if(w.length==1)d.set(A.pageX,A.pageY);else{const ue=je(A),re=.5*(A.pageX+ue.x),xe=.5*(A.pageY+ue.y);d.set(re,xe)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;H(2*Math.PI*m.x/J.clientHeight),V(2*Math.PI*m.y/J.clientHeight),h.copy(d)}function ye(A){if(w.length===1)g.set(A.pageX,A.pageY);else{const J=je(A),ue=.5*(A.pageX+J.x),re=.5*(A.pageY+J.y);g.set(ue,re)}p.subVectors(g,_).multiplyScalar(i.panSpeed),N(p.x,p.y),_.copy(g)}function Ce(A){const J=je(A),ue=A.pageX-J.x,re=A.pageY-J.y,xe=Math.sqrt(ue*ue+re*re);b.set(0,xe),E.set(0,Math.pow(b.y/f.y,i.zoomSpeed)),k(E.y),f.copy(b);const He=(A.pageX+J.x)*.5,qe=(A.pageY+J.y)*.5;j(He,qe)}function _e(A){i.enableZoom&&Ce(A),i.enablePan&&ye(A)}function it(A){i.enableZoom&&Ce(A),i.enableRotate&&pt(A)}function Ie(A){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",v)),we(A),A.pointerType==="touch"?ge(A):O(A))}function S(A){i.enabled!==!1&&(A.pointerType==="touch"?he(A):ne(A))}function v(A){Fe(A),w.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",v)),i.dispatchEvent(kc),a=r.NONE}function O(A){let J;switch(A.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case _i.DOLLY:if(i.enableZoom===!1)return;ae(A),a=r.DOLLY;break;case _i.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;ce(A),a=r.PAN}else{if(i.enableRotate===!1)return;K(A),a=r.ROTATE}break;case _i.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;K(A),a=r.ROTATE}else{if(i.enablePan===!1)return;ce(A),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(ps)}function ne(A){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;W(A);break;case r.DOLLY:if(i.enableZoom===!1)return;Z(A);break;case r.PAN:if(i.enablePan===!1)return;de(A);break}}function ee(A){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(A.preventDefault(),i.dispatchEvent(ps),Me(A),i.dispatchEvent(kc))}function te(A){i.enabled===!1||i.enablePan===!1||ve(A)}function ge(A){switch(Q(A),w.length){case 1:switch(i.touches.ONE){case gi.ROTATE:if(i.enableRotate===!1)return;Le(A),a=r.TOUCH_ROTATE;break;case gi.PAN:if(i.enablePan===!1)return;De(A),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case gi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Xe(A),a=r.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(A),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(ps)}function he(A){switch(Q(A),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;pt(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ye(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;it(A),i.update();break;default:a=r.NONE}}function me(A){i.enabled!==!1&&A.preventDefault()}function we(A){w.push(A.pointerId)}function Fe(A){delete X[A.pointerId];for(let J=0;J<w.length;J++)if(w[J]==A.pointerId){w.splice(J,1);return}}function Q(A){let J=X[A.pointerId];J===void 0&&(J=new Ue,X[A.pointerId]=J),J.set(A.pageX,A.pageY)}function je(A){const J=A.pointerId===w[0]?w[1]:w[0];return X[J]}i.domElement.addEventListener("contextmenu",me),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}window.customElements.define("forest-demo",class extends HTMLElement{connectedCallback(){let n={width:800,height:450},e,t,i,r,a=this;o(),c();function o(){i=new Ag,i.background=new Ye(13421772),i.fog=new Ks(13421772,.002),r=new tu({antialias:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(n.width,n.height),a.appendChild(r.domElement),e=new kt(60,n.width/n.height,1,1e3),e.position.set(400,200,0),t=new Dg(e,r.domElement),t.listenToKeyEvents(window),t.enableDamping=!0,t.dampingFactor=.05,t.screenSpacePanning=!1,t.minDistance=100,t.maxDistance=500,t.maxPolarAngle=Math.PI/2;const u=new Js(0,10,30,4,1),h=new wg({color:16777215,flatShading:!0});for(let g=0;g<500;g++){const p=new yn(u,h);p.position.x=Math.random()*1600-800,p.position.y=0,p.position.z=Math.random()*1600-800,p.updateMatrix(),p.matrixAutoUpdate=!1,i.add(p)}const d=new Hc(16777215);d.position.set(1,1,1),i.add(d);const m=new Hc(8840);m.position.set(-1,-1,-1),i.add(m);const _=new Pg(2236962);i.add(_),window.addEventListener("resize",s)}function s(){e.aspect=n.width/n.height,e.updateProjectionMatrix(),r.setSize(n.width,n.height)}function c(){requestAnimationFrame(c),t.update(),l()}function l(){r.render(i,e)}}});const Ug=({env:n})=>(console.log(n),{message:"Hello, from Javascript flags!"}),Ig=({app:n,env:e})=>{n.ports&&n.ports.outgoing&&n.ports.outgoing.subscribe(({tag:t,data:i})=>{switch(console.log(t,i),t){case"OPEN_WINDOW_DIALOG":window.alert(i);return;default:console.warn(`Unhandled outgoing port: "${t}"`);return}})},Ng=Object.freeze(Object.defineProperty({__proto__:null,flags:Ug,onReady:Ig},Symbol.toStringTag,{value:"Module"}));function Xn(n,e,t){return t.a=n,t.f=e,t}function $(n){return Xn(2,n,function(e){return function(t){return n(e,t)}})}function We(n){return Xn(3,n,function(e){return function(t){return function(i){return n(e,t,i)}}})}function hn(n){return Xn(4,n,function(e){return function(t){return function(i){return function(r){return n(e,t,i,r)}}}})}function di(n){return Xn(5,n,function(e){return function(t){return function(i){return function(r){return function(a){return n(e,t,i,r,a)}}}}})}function Pa(n){return Xn(6,n,function(e){return function(t){return function(i){return function(r){return function(a){return function(o){return n(e,t,i,r,a,o)}}}}}})}function iu(n){return Xn(7,n,function(e){return function(t){return function(i){return function(r){return function(a){return function(o){return function(s){return n(e,t,i,r,a,o,s)}}}}}}})}function ru(n){return Xn(8,n,function(e){return function(t){return function(i){return function(r){return function(a){return function(o){return function(s){return function(c){return n(e,t,i,r,a,o,s,c)}}}}}}}})}function au(n){return Xn(9,n,function(e){return function(t){return function(i){return function(r){return function(a){return function(o){return function(s){return function(c){return function(l){return n(e,t,i,r,a,o,s,c,l)}}}}}}}}})}function R(n,e,t){return n.a===2?n.f(e,t):n(e)(t)}function be(n,e,t,i){return n.a===3?n.f(e,t,i):n(e)(t)(i)}function un(n,e,t,i,r){return n.a===4?n.f(e,t,i,r):n(e)(t)(i)(r)}function ut(n,e,t,i,r,a){return n.a===5?n.f(e,t,i,r,a):n(e)(t)(i)(r)(a)}function Ps(n,e,t,i,r,a,o){return n.a===6?n.f(e,t,i,r,a,o):n(e)(t)(i)(r)(a)(o)}function Fg(n,e,t,i,r,a,o,s){return n.a===7?n.f(e,t,i,r,a,o,s):n(e)(t)(i)(r)(a)(o)(s)}function Og(n,e,t,i,r,a,o,s,c){return n.a===8?n.f(e,t,i,r,a,o,s,c):n(e)(t)(i)(r)(a)(o)(s)(c)}function Er(n,e){for(var t,i=[],r=Ls(n,e,0,i);r&&(t=i.pop());r=Ls(t.a,t.b,0,i));return r}function Ls(n,e,t,i){if(n===e)return!0;if(typeof n!="object"||n===null||e===null)return typeof n=="function"&&Yi(5),!1;if(t>100)return i.push(ke(n,e)),!0;for(var r in 0>n.$&&(n=Ns(n),e=Ns(e)),n)if(!Ls(n[r],e[r],t+1,i))return!1;return!0}$(Er);$(function(n,e){return!Er(n,e)});function Xt(n,e,t){if(typeof n!="object")return n===e?0:e>n?-1:1;if(n.$===void 0)return(t=Xt(n.a,e.a))||(t=Xt(n.b,e.b))?t:Xt(n.c,e.c);for(;n.b&&e.b&&!(t=Xt(n.a,e.a));n=n.b,e=e.b);return t||(n.b?1:e.b?-1:0)}$(function(n,e){return 0>Xt(n,e)});$(function(n,e){return 1>Xt(n,e)});$(function(n,e){return Xt(n,e)>0});$(function(n,e){return Xt(n,e)>=0});var Bg=$(function(n,e){var t=Xt(n,e);return 0>t?Eu:t?v0:Su}),qi=0;function ke(n,e){return{a:n,b:e}}function $g(n,e,t){return{a:n,b:e,c:t}}function Ii(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t}$(yr);function yr(n,e){if(typeof n=="string")return n+e;if(!n.b)return e;var t=fn(n.a,e);n=n.b;for(var i=t;n.b;n=n.b)i=i.b=fn(n.a,e);return t}var Qe={$:0};function fn(n,e){return{$:1,a:n,b:e}}var zg=$(fn);function ot(n){for(var e=Qe,t=n.length;t--;)e=fn(n[t],e);return e}function Zs(n){for(var e=[];n.b;n=n.b)e.push(n.a);return e}var Hg=We(function(n,e,t){for(var i=[];e.b&&t.b;e=e.b,t=t.b)i.push(R(n,e.a,t.a));return ot(i)});hn(function(n,e,t,i){for(var r=[];e.b&&t.b&&i.b;e=e.b,t=t.b,i=i.b)r.push(be(n,e.a,t.a,i.a));return ot(r)});di(function(n,e,t,i,r){for(var a=[];e.b&&t.b&&i.b&&r.b;e=e.b,t=t.b,i=i.b,r=r.b)a.push(un(n,e.a,t.a,i.a,r.a));return ot(a)});Pa(function(n,e,t,i,r,a){for(var o=[];e.b&&t.b&&i.b&&r.b&&a.b;e=e.b,t=t.b,i=i.b,r=r.b,a=a.b)o.push(ut(n,e.a,t.a,i.a,r.a,a.a));return ot(o)});$(function(n,e){return ot(Zs(e).sort(function(t,i){return Xt(n(t),n(i))}))});$(function(n,e){return ot(Zs(e).sort(function(t,i){var r=R(n,t,i);return r===Su?0:r===Eu?-1:1}))});var Gg=[];function Vg(n){return n.length}var kg=We(function(n,e,t){for(var i=Array(n),r=0;n>r;r++)i[r]=t(e+r);return i}),Wg=$(function(n,e){for(var t=Array(n),i=0;n>i&&e.b;i++)t[i]=e.a,e=e.b;return t.length=i,ke(t,e)});$(function(n,e){return e[n]});We(function(n,e,t){for(var i=t.length,r=Array(i),a=0;i>a;a++)r[a]=t[a];return r[n]=e,r});$(function(n,e){for(var t=e.length,i=Array(t+1),r=0;t>r;r++)i[r]=e[r];return i[t]=n,i});We(function(n,e,t){for(var i=t.length,r=0;i>r;r++)e=R(n,t[r],e);return e});var Xg=We(function(n,e,t){for(var i=t.length-1;i>=0;i--)e=R(n,t[i],e);return e});$(function(n,e){for(var t=e.length,i=Array(t),r=0;t>r;r++)i[r]=n(e[r]);return i});We(function(n,e,t){for(var i=t.length,r=Array(i),a=0;i>a;a++)r[a]=R(n,e+a,t[a]);return r});We(function(n,e,t){return t.slice(n,e)});We(function(n,e,t){var i=e.length,r=n-i;r>t.length&&(r=t.length);for(var a=Array(i+r),o=0;i>o;o++)a[o]=e[o];for(o=0;r>o;o++)a[o+i]=t[o];return a});$(function(n,e){return e});$(function(n,e){return console.log(n+": "+jg()),e});function jg(){return"<internals>"}function Yi(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}$(function(n,e){return n+e});$(function(n,e){return n-e});$(function(n,e){return n*e});$(function(n,e){return n/e});$(function(n,e){return n/e|0});$(Math.pow);$(function(n,e){return e%n});$(function(n,e){var t=e%n;return n===0?Yi(11):t>0&&0>n||0>t&&n>0?t+n:t});$(Math.atan2);var qg=Math.ceil,Yg=Math.floor,Xc=Math.log;function Kg(n){return!n}$(function(n,e){return n&&e});$(function(n,e){return n||e});$(function(n,e){return n!==e});$(function(n,e){return n+e});function Jg(n){var e=n.charCodeAt(0);return isNaN(e)?Ze:Tt(55296>e||e>56319?ke(n[0],n.slice(1)):ke(n[0]+n[1],n.slice(2)))}$(function(n,e){return n+e});function Zg(n){return n.length}$(function(n,e){for(var t=e.length,i=Array(t),r=0;t>r;){var a=e.charCodeAt(r);55296>a||a>56319?(i[r]=n(e[r]),r++):(i[r]=n(e[r]+e[r+1]),r+=2)}return i.join("")});$(function(n,e){for(var t=[],i=e.length,r=0;i>r;){var a=e[r],o=e.charCodeAt(r);r++,55296>o||o>56319||(a+=e[r],r++),n(a)&&t.push(a)}return t.join("")});We(function(n,e,t){for(var i=t.length,r=0;i>r;){var a=t[r],o=t.charCodeAt(r);r++,55296>o||o>56319||(a+=t[r],r++),e=R(n,a,e)}return e});We(function(n,e,t){for(var i=t.length;i--;){var r=t[i],a=t.charCodeAt(i);56320>a||a>57343||(r=t[--i]+r),e=R(n,r,e)}return e});var Qg=$(function(n,e){return e.split(n)}),ev=$(function(n,e){return e.join(n)}),tv=We(function(n,e,t){return t.slice(n,e)});function nv(n){return n.trim()}$(function(n,e){for(var t=e.length;t--;){var i=e[t],r=e.charCodeAt(t);if(56320>r||r>57343||(i=e[--t]+i),n(i))return!0}return!1});var iv=$(function(n,e){for(var t=e.length;t--;){var i=e[t],r=e.charCodeAt(t);if(56320>r||r>57343||(i=e[--t]+i),!n(i))return!1}return!0}),rv=$(function(n,e){return e.indexOf(n)>-1}),av=$(function(n,e){return e.indexOf(n)===0});$(function(n,e){return e.length>=n.length&&e.lastIndexOf(n)===e.length-n.length});var sv=$(function(n,e){var t=n.length;if(1>t)return Qe;for(var i=0,r=[];(i=e.indexOf(n,i))>-1;)r.push(i),i+=t;return ot(r)});function ov(n){return n+""}function cv(n){for(var e=0,t=n.charCodeAt(0),i=t==43||t==45?1:0,r=i;n.length>r;++r){var a=n.charCodeAt(r);if(48>a||a>57)return Ze;e=10*e+a-48}return r==i?Ze:Tt(t==45?-e:e)}function lv(n){var e=n.charCodeAt(0);return 55296>e||e>56319?e:1024*(e-55296)+n.charCodeAt(1)-56320+65536}function uv(n){return{$:0,a:n}}function su(n){return{$:2,b:n}}var fv=su(function(n){return Bn(n)}),hv=su(function(n){return typeof n=="string"?Bn(n):n instanceof String?Bn(n+""):Un("a STRING",n)}),dv=$(function(n,e){return{$:6,d:n,b:e}});$(function(n,e){return{$:7,e:n,b:e}});function jn(n,e){return{$:9,f:n,g:e}}$(function(n,e){return{$:10,b:e,h:n}});var pv=$(function(n,e){return jn(n,[e])}),mv=We(function(n,e,t){return jn(n,[e,t])});hn(function(n,e,t,i){return jn(n,[e,t,i])});di(function(n,e,t,i,r){return jn(n,[e,t,i,r])});Pa(function(n,e,t,i,r,a){return jn(n,[e,t,i,r,a])});iu(function(n,e,t,i,r,a,o){return jn(n,[e,t,i,r,a,o])});ru(function(n,e,t,i,r,a,o,s){return jn(n,[e,t,i,r,a,o,s])});au(function(n,e,t,i,r,a,o,s,c){return jn(n,[e,t,i,r,a,o,s,c])});$(function(n,e){try{return Gt(n,JSON.parse(e))}catch(t){return Nn(R(so,"This is not valid JSON! "+t.message,e))}});var ou=$(function(n,e){return Gt(n,e)});function Gt(n,e){switch(n.$){case 2:return n.b(e);case 5:return e===null?Bn(n.c):Un("null",e);case 3:return aa(e)?jc(n.b,e,ot):Un("a LIST",e);case 4:return aa(e)?jc(n.b,e,_v):Un("an ARRAY",e);case 6:var t=n.d;if(typeof e!="object"||e===null||!(t in e))return Un("an OBJECT with a field named `"+t+"`",e);var i=Gt(n.b,e[t]);return an(i)?i:Nn(R(el,t,i.a));case 7:var r=n.e;return aa(e)?r>=e.length?Un("a LONGER array. Need index "+r+" but only see "+e.length+" entries",e):(i=Gt(n.b,e[r]),an(i)?i:Nn(R(bu,r,i.a))):Un("an ARRAY",e);case 8:if(typeof e!="object"||e===null||aa(e))return Un("an OBJECT",e);var a=Qe;for(var o in e)if(e.hasOwnProperty(o)){if(i=Gt(n.b,e[o]),!an(i))return Nn(R(el,o,i.a));a=fn(ke(o,i.a),a)}return Bn(Vn(a));case 9:for(var s=n.f,c=n.g,l=0;c.length>l;l++){if(i=Gt(c[l],e),!an(i))return i;s=s(i.a)}return Bn(s);case 10:return i=Gt(n.b,e),an(i)?Gt(n.h(i.a),e):i;case 11:for(var u=Qe,h=n.g;h.b;h=h.b){if(i=Gt(h.a,e),an(i))return i;u=fn(i.a,u)}return Nn(x0(Vn(u)));case 1:return Nn(R(so,n.a,e));case 0:return Bn(n.a)}}function jc(n,e,t){for(var i=e.length,r=Array(i),a=0;i>a;a++){var o=Gt(n,e[a]);if(!an(o))return Nn(R(bu,a,o.a));r[a]=o.a}return Bn(t(r))}function aa(n){return Array.isArray(n)||typeof FileList<"u"&&n instanceof FileList}function _v(n){return R(V0,n.length,function(e){return n[e]})}function Un(n,e){return Nn(R(so,"Expecting "+n,e))}function Bi(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return Bi(n.b,e.b);case 6:return n.d===e.d&&Bi(n.b,e.b);case 7:return n.e===e.e&&Bi(n.b,e.b);case 9:return n.f===e.f&&qc(n.g,e.g);case 10:return n.h===e.h&&Bi(n.b,e.b);case 11:return qc(n.g,e.g)}}function qc(n,e){var t=n.length;if(t!==e.length)return!1;for(var i=0;t>i;i++)if(!Bi(n[i],e[i]))return!1;return!0}var gv=$(function(n,e){return JSON.stringify(e,null,n)+""});function vv(n){return n}function xv(){return{}}var Mv=We(function(n,e,t){return t[n]=e,t});function pi(n){return{$:0,a:n}}function Sv(n){return{$:1,a:n}}function tn(n){return{$:2,b:n,c:null}}var Ds=$(function(n,e){return{$:3,b:n,d:e}});$(function(n,e){return{$:4,b:n,d:e}});function Ev(n){return{$:5,b:n}}var yv=0;function Qs(n){var e={$:0,e:yv++,f:n,g:null,h:[]};return eo(e),e}function cu(n){return tn(function(e){e(pi(Qs(n)))})}function lu(n,e){n.h.push(e),eo(n)}var bv=$(function(n,e){return tn(function(t){lu(n,e),t(pi(qi))})}),ms=!1,Yc=[];function eo(n){if(Yc.push(n),!ms){for(ms=!0;n=Yc.shift();)Tv(n);ms=!1}}function Tv(n){for(;n.f;){var e=n.f.$;if(e===0||e===1){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(e===2)return void(n.f.c=n.f.b(function(t){n.f=t,eo(n)}));if(e===5){if(n.h.length===0)return;n.f=n.f.b(n.h.shift())}else n.g={$:e===3?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function Av(n){return tn(function(e){var t=setTimeout(function(){e(pi(qi))},n);return function(){clearTimeout(t)}})}hn(function(n,e,t,i){return to(e,i,n.C,n.N,n.G,function(){return function(){}})});function to(n,e,t,i,r,a){var o=R(ou,n,e?e.flags:void 0);an(o)||Yi(2);var s={},c=t(o.a),l=c.a,u=a(d,l),h=wv(s,d);function d(m,_){var g=R(i,m,l);u(l=g.a,_),Jc(s,g.b,r(l))}return Jc(s,c.b,r(l)),h?{ports:h}:{}}var ln={};function wv(n,e){var t;for(var i in ln){var r=ln[i];r.a&&((t=t||{})[i]=r.a(i,e)),n[i]=Cv(r,e)}return t}function Rv(n,e,t,i,r){return{b:n,c:e,d:t,e:i,f:r}}function Cv(n,e){var t={g:e,h:void 0},i=n.c,r=n.d,a=n.e,o=n.f;return t.h=Qs(R(Ds,function s(c){return R(Ds,s,Ev(function(l){var u=l.a;return l.$===0?be(r,t,u,c):a&&o?un(i,t,u.i,u.j,c):be(i,t,a?u.i:u.j,c)}))},n.b))}var Pv=$(function(n,e){return tn(function(t){n.g(e),t(pi(qi))})});$(function(n,e){return R(bv,n.h,{$:0,a:e})});function uu(n){return function(e){return{$:1,k:n,l:e}}}function fu(n){return{$:2,m:n}}var hu=$(function(n,e){return{$:3,n,o:e}}),Kc=[],_s=!1;function Jc(n,e,t){if(Kc.push({p:n,q:e,r:t}),!_s){_s=!0;for(var i;i=Kc.shift();)Lv(i.p,i.q,i.r);_s=!1}}function Lv(n,e,t){var i={};for(var r in ma(!0,e,i,null),ma(!1,t,i,null),n)lu(n[r],{$:"fx",a:i[r]||{i:Qe,j:Qe}})}function ma(n,e,t,i){switch(e.$){case 1:var r=e.k,a=Dv(n,r,i,e.l);return void(t[r]=Uv(n,a,t[r]));case 2:for(var o=e.m;o.b;o=o.b)ma(n,o.a,t,i);return;case 3:return void ma(n,e.o,t,{s:e.n,t:i})}}function Dv(n,e,t,i){return R(n?ln[e].e:ln[e].f,function(r){for(var a=t;a;a=a.t)r=a.s(r);return r},i)}function Uv(n,e,t){return t=t||{i:Qe,j:Qe},n?t.i=fn(e,t.i):t.j=fn(e,t.j),t}function Iv(n){ln[n]&&Yi(3)}function Nv(n,e){return Iv(n),ln[n]={e:Fv,u:e,a:Ov},uu(n)}var Fv=$(function(n,e){return e});function Ov(n){var e=[],t=ln[n].u,i=Av(0);return ln[n].b=i,ln[n].c=We(function(r,a){for(;a.b;a=a.b)for(var o=e,s=t(a.a),c=0;o.length>c;c++)o[c](s);return i}),{subscribe:function(r){e.push(r)},unsubscribe:function(r){var a=(e=e.slice()).indexOf(r);0>a||e.splice(a,1)}}}var _a;$(function(n,e){return function(t){return n(e(t))}});var bn=typeof document<"u"?document:{};function no(n,e){n.appendChild(e)}hn(function(n,e,t,i){var r=i.node;return r.parentNode.replaceChild(Gn(n,function(){}),r),{}});function Us(n){return{$:0,a:n}}var Bv=$(function(n,e){return $(function(t,i){for(var r=[],a=0;i.b;i=i.b){var o=i.a;a+=o.b||0,r.push(o)}return a+=r.length,{$:1,c:e,d:pu(t),e:r,f:n,b:a}})}),La=Bv(void 0),$v=$(function(n,e){return $(function(t,i){for(var r=[],a=0;i.b;i=i.b){var o=i.a;a+=o.b.b||0,r.push(o)}return a+=r.length,{$:2,c:e,d:pu(t),e:r,f:n,b:a}})});$v(void 0);var zv=$(function(n,e){return{$:4,j:n,k:e,b:1+(e.b||0)}});function qn(n,e){return{$:5,l:n,m:e,k:void 0}}$(function(n,e){return qn([n,e],function(){return n(e)})});We(function(n,e,t){return qn([n,e,t],function(){return R(n,e,t)})});hn(function(n,e,t,i){return qn([n,e,t,i],function(){return be(n,e,t,i)})});di(function(n,e,t,i,r){return qn([n,e,t,i,r],function(){return un(n,e,t,i,r)})});Pa(function(n,e,t,i,r,a){return qn([n,e,t,i,r,a],function(){return ut(n,e,t,i,r,a)})});iu(function(n,e,t,i,r,a,o){return qn([n,e,t,i,r,a,o],function(){return Ps(n,e,t,i,r,a,o)})});ru(function(n,e,t,i,r,a,o,s){return qn([n,e,t,i,r,a,o,s],function(){return Fg(n,e,t,i,r,a,o,s)})});au(function(n,e,t,i,r,a,o,s,c){return qn([n,e,t,i,r,a,o,s,c],function(){return Og(n,e,t,i,r,a,o,s,c)})});var du=$(function(n,e){return{$:"a0",n,o:e}});$(function(n,e){return{$:"a1",n,o:e}});$(function(n,e){return{$:"a2",n,o:e}});var Hv=$(function(n,e){return{$:"a3",n,o:e}});We(function(n,e,t){return{$:"a4",n:e,o:{f:n,o:t}}});var Gv=/^script$/i;function Vv(n){return Gv.test(n)?"p":n}$(function(n,e){return e.$==="a0"?R(du,e.n,kv(n,e.o)):e});function kv(n,e){var t=co(e);return{$:e.$,a:t?be(k0,3>t?Wv:Xv,Iu(n),e.a):R(Uu,n,e.a)}}var io,Wv=$(function(n,e){return ke(n(e.a),e.b)}),Xv=$(function(n,e){return{aK:n(e.aK),Y:e.Y,V:e.V}});function pu(n){for(var e={};n.b;n=n.b){var t=n.a,i=t.$,r=t.n,a=t.o;if(i!=="a2"){var o=e[i]||(e[i]={});i==="a3"&&r==="class"?Zc(o,r,a):o[r]=a}else r==="className"?Zc(e,r,a):e[r]=a}return e}function Zc(n,e,t){var i=n[e];n[e]=i?i+" "+t:t}function Gn(n,e){var t=n.$;if(t===5)return Gn(n.k||(n.k=n.m()),e);if(t===0)return bn.createTextNode(n.a);if(t===4){for(var i=n.k,r=n.j;i.$===4;)typeof r!="object"?r=[r,i.j]:r.push(i.j),i=i.k;var a={j:r,p:e};return(o=Gn(i,a)).elm_event_node_ref=a,o}if(t===3)return Is(o=n.h(n.g),e,n.d),o;var o=n.f?bn.createElementNS(n.f,n.c):bn.createElement(n.c);_a&&n.c=="a"&&o.addEventListener("click",_a(o)),Is(o,e,n.d);for(var s=n.e,c=0;s.length>c;c++)no(o,Gn(t===1?s[c]:s[c].b,e));return o}function Is(n,e,t){for(var i in t){var r=t[i];i==="a1"?jv(n,r):i==="a0"?Kv(n,e,r):i==="a3"?qv(n,r):i==="a4"?Yv(n,r):(i!=="value"&&i!=="checked"||n[i]!==r)&&(n[i]=r)}}function jv(n,e){var t=n.style;for(var i in e)t[i]=e[i]}function qv(n,e){for(var t in e){var i=e[t];i!==void 0?n.setAttribute(t,i):n.removeAttribute(t)}}function Yv(n,e){for(var t in e){var i=e[t],r=i.f,a=i.o;a!==void 0?n.setAttributeNS(r,t,a):n.removeAttributeNS(r,t)}}function Kv(n,e,t){var i=n.elmFs||(n.elmFs={});for(var r in t){var a=t[r],o=i[r];if(a){if(o){if(o.q.$===a.$){o.q=a;continue}n.removeEventListener(r,o)}o=Jv(e,a),n.addEventListener(r,o,io&&{passive:2>co(a)}),i[r]=o}else n.removeEventListener(r,o),i[r]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){io=!0}}))}catch{}function Jv(n,e){function t(i){var r=t.q,a=Gt(r.a,i);if(an(a)){for(var o,s=co(r),c=a.a,l=s?3>s?c.a:c.aK:c,u=s==1?c.b:s==3&&c.Y,h=(u&&i.stopPropagation(),(s==2?c.b:s==3&&c.V)&&i.preventDefault(),n);o=h.j;){if(typeof o=="function")l=o(l);else for(var d=o.length;d--;)l=o[d](l);h=h.p}h(l,u)}}return t.q=e,t}function Zv(n,e){return n.$==e.$&&Bi(n.a,e.a)}function mu(n,e){var t=[];return Qt(n,e,t,0),t}function Pt(n,e,t,i){var r={$:e,r:t,s:i,t:void 0,u:void 0};return n.push(r),r}function Qt(n,e,t,i){if(n!==e){var r=n.$,a=e.$;if(r!==a){if(r!==1||a!==2)return void Pt(t,0,i,e);e=s0(e),a=1}switch(a){case 5:for(var o=n.l,s=e.l,c=o.length,l=c===s.length;l&&c--;)l=o[c]===s[c];if(l)return void(e.k=n.k);e.k=e.m();var u=[];return Qt(n.k,e.k,u,0),void(u.length>0&&Pt(t,1,i,u));case 4:for(var h=n.j,d=e.j,m=!1,_=n.k;_.$===4;)m=!0,typeof h!="object"?h=[h,_.j]:h.push(_.j),_=_.k;for(var g=e.k;g.$===4;)m=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;return m&&h.length!==d.length?void Pt(t,0,i,e):((m?Qv(h,d):h===d)||Pt(t,2,i,d),void Qt(_,g,t,i+1));case 0:return void(n.a!==e.a&&Pt(t,3,i,e.a));case 1:return void Qc(n,e,t,i,e0);case 2:return void Qc(n,e,t,i,t0);case 3:if(n.h!==e.h)return void Pt(t,0,i,e);var p=ro(n.d,e.d);p&&Pt(t,4,i,p);var f=e.i(n.g,e.g);return void(f&&Pt(t,5,i,f))}}}function Qv(n,e){for(var t=0;n.length>t;t++)if(n[t]!==e[t])return!1;return!0}function Qc(n,e,t,i,r){if(n.c===e.c&&n.f===e.f){var a=ro(n.d,e.d);a&&Pt(t,4,i,a),r(n,e,t,i)}else Pt(t,0,i,e)}function ro(n,e,t){var i;for(var r in n)if(r!=="a1"&&r!=="a0"&&r!=="a3"&&r!=="a4")if(r in e){var a=n[r],o=e[r];a===o&&r!=="value"&&r!=="checked"||t==="a0"&&Zv(a,o)||((i=i||{})[r]=o)}else(i=i||{})[r]=t?t==="a1"?"":t==="a0"||t==="a3"?void 0:{f:n[r].f,o:void 0}:typeof n[r]=="string"?"":null;else{var s=ro(n[r],e[r]||{},r);s&&((i=i||{})[r]=s)}for(var c in e)c in n||((i=i||{})[c]=e[c]);return i}function e0(n,e,t,i){var r=n.e,a=e.e,o=r.length,s=a.length;o>s?Pt(t,6,i,{v:s,i:o-s}):s>o&&Pt(t,7,i,{v:o,e:a});for(var c=s>o?o:s,l=0;c>l;l++){var u=r[l];Qt(u,a[l],t,++i),i+=u.b||0}}function t0(n,e,t,i){for(var r=[],a={},o=[],s=n.e,c=e.e,l=s.length,u=c.length,h=0,d=0,m=i;l>h&&u>d;){var _=(y=s[h]).a,g=(H=c[d]).a,p=y.b,f=H.b,b=void 0,E=void 0;if(_!==g){var T=s[h+1],D=c[d+1];if(T){var C=T.a,w=T.b;E=g===C}if(D){var X=D.a,x=D.b;b=_===X}if(b&&E)Qt(p,x,r,++m),ur(a,r,_,f,d,o),m+=p.b||0,fr(a,r,_,w,++m),m+=w.b||0,h+=2,d+=2;else if(b)m++,ur(a,r,g,f,d,o),Qt(p,x,r,m),m+=p.b||0,h+=1,d+=2;else if(E)fr(a,r,_,p,++m),m+=p.b||0,Qt(w,f,r,++m),m+=w.b||0,h+=2,d+=1;else{if(!T||C!==X)break;fr(a,r,_,p,++m),ur(a,r,g,f,d,o),m+=p.b||0,Qt(w,x,r,++m),m+=w.b||0,h+=2,d+=2}}else Qt(p,f,r,++m),m+=p.b||0,h++,d++}for(;l>h;){var y;m++,fr(a,r,(y=s[h]).a,p=y.b,m),m+=p.b||0,h++}for(;u>d;){var H,V=V||[];ur(a,r,(H=c[d]).a,H.b,void 0,V),d++}(r.length>0||o.length>0||V)&&Pt(t,8,i,{w:r,x:o,y:V})}var _u="_elmW6BL";function ur(n,e,t,i,r,a){var o=n[t];if(!o)return a.push({r,A:o={c:0,z:i,r,s:void 0}}),void(n[t]=o);if(o.c===1){a.push({r,A:o}),o.c=2;var s=[];return Qt(o.z,i,s,o.r),o.r=r,void(o.s.s={w:s,A:o})}ur(n,e,t+_u,i,r,a)}function fr(n,e,t,i,r){var a=n[t];if(a){if(a.c===0){a.c=2;var o=[];return Qt(i,a.z,o,r),void Pt(e,9,r,{w:o,A:a})}fr(n,e,t+_u,i,r)}else{var s=Pt(e,9,r,void 0);n[t]={c:1,z:i,r,s}}}function gu(n,e,t,i){hr(n,e,t,0,0,e.b,i)}function hr(n,e,t,i,r,a,o){for(var s=t[i],c=s.r;c===r;){var l=s.$;if(l===1)gu(n,e.k,s.s,o);else if(l===8)s.t=n,s.u=o,(u=s.s.w).length>0&&hr(n,e,u,0,r,a,o);else if(l===9){s.t=n,s.u=o;var u,h=s.s;h&&(h.A.s=n,(u=h.w).length>0&&hr(n,e,u,0,r,a,o))}else s.t=n,s.u=o;if(!(s=t[++i])||(c=s.r)>a)return i}var d=e.$;if(d===4){for(var m=e.k;m.$===4;)m=m.k;return hr(n,m,t,i,r+1,a,n.elm_event_node_ref)}for(var _=e.e,g=n.childNodes,p=0;_.length>p;p++){r++;var f=d===1?_[p]:_[p].b,b=r+(f.b||0);if(!(r>c||c>b||(s=t[i=hr(g[p],f,t,i,r,b,o)])&&(c=s.r)<=a))return i;r=b}return i}function vu(n,e,t,i){return t.length===0?n:(gu(n,e,t,i),ga(n,t))}function ga(n,e){for(var t=0;e.length>t;t++){var i=e[t],r=i.t,a=n0(r,i);r===n&&(n=a)}return n}function n0(n,e){switch(e.$){case 0:return i0(n,e.s,e.u);case 4:return Is(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return ga(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var t=e.s,i=0;t.i>i;i++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var r=(t=e.s).e,a=n.childNodes[i=t.v];r.length>i;i++)n.insertBefore(Gn(r[i],e.u),a);return n;case 9:if(!(t=e.s))return n.parentNode.removeChild(n),n;var o=t.A;return o.r!==void 0&&n.parentNode.removeChild(n),o.s=ga(n,t.w),n;case 8:return r0(n,e);case 5:return e.s(n);default:Yi(10)}}function i0(n,e,t){var i=n.parentNode,r=Gn(e,t);return r.elm_event_node_ref||(r.elm_event_node_ref=n.elm_event_node_ref),i&&r!==n&&i.replaceChild(r,n),r}function r0(n,e){var t=e.s,i=a0(t.y,e);n=ga(n,t.w);for(var r=t.x,a=0;r.length>a;a++){var o=r[a],s=o.A,c=s.c===2?s.s:Gn(s.z,e.u);n.insertBefore(c,n.childNodes[o.r])}return i&&no(n,i),n}function a0(n,e){if(n){for(var t=bn.createDocumentFragment(),i=0;n.length>i;i++){var r=n[i].A;no(t,r.c===2?r.s:Gn(r.z,e.u))}return t}}function ao(n){if(n.nodeType===3)return Us(n.textContent);if(n.nodeType!==1)return Us("");for(var e=Qe,t=n.attributes,i=t.length;i--;){var r=t[i];e=fn(R(Hv,r.name,r.value),e)}var a=n.tagName.toLowerCase(),o=Qe,s=n.childNodes;for(i=s.length;i--;)o=fn(ao(s[i]),o);return be(La,a,e,o)}function s0(n){for(var e=n.e,t=e.length,i=Array(t),r=0;t>r;r++)i[r]=e[r].b;return{$:1,c:n.c,d:n.d,e:i,f:n.f,b:n.b}}hn(function(n,e,t,i){return to(e,i,n.C,n.N,n.G,function(r,a){var o=n.O,s=i.node,c=ao(s);return xu(a,function(l){var u=o(l),h=mu(c,u);s=vu(s,c,h,r),c=u})})});var o0=hn(function(n,e,t,i){return to(e,i,n.C,n.N,n.G,function(r,a){var o=n.W&&n.W(r),s=n.O,c=bn.title,l=bn.body,u=ao(l);return xu(a,function(h){_a=o;var d=s(h),m=La("body")(Qe)(d.aA),_=mu(u,m);l=vu(l,u,_,r),u=m,_a=0,c!==d.aU&&(bn.title=c=d.aU)})})}),va=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function xu(n,e){e(n);var t=0;function i(){t=t===1?0:(va(i),e(n),1)}return function(r,a){n=r,a?(e(n),t===2&&(t=1)):(t===0&&va(i),t=2)}}function c0(n){var e=n.aN,t=n.aO,i=function(){i.a(e(gs()))};return o0({W:function(r){return i.a=r,gr.addEventListener("popstate",i),0>gr.navigator.userAgent.indexOf("Trident")||gr.addEventListener("hashchange",i),$(function(a,o){if(!(o.ctrlKey||o.metaKey||o.shiftKey||o.button>=1||a.target||a.hasAttribute("download"))){o.preventDefault();var s=a.href,c=gs(),l=Fu(s).a;r(t(l&&c.an===l.an&&c.af===l.af&&c.ak.a===l.ak.a?X0(l):W0(s)))}})},C:function(r){return be(n.C,r,gs(),i)},O:n.O,N:n.N,G:n.G})}function gs(){return Fu(bn.location.href).a||Yi(1)}var l0=$(function(n,e){return R(wn,Lr,tn(function(){e&&history.go(e),n()}))}),u0=$(function(n,e){return R(wn,Lr,tn(function(){history.pushState({},"",e),n()}))}),f0=$(function(n,e){return R(wn,Lr,tn(function(){history.replaceState({},"",e),n()}))}),h0={addEventListener:function(){},removeEventListener:function(){}},gr=typeof window<"u"?window:h0;We(function(n,e,t){return cu(tn(function(){function i(r){Qs(t(r))}return n.addEventListener(e,i,io&&{passive:!0}),function(){n.removeEventListener(e,i)}}))});$(function(n,e){var t=Gt(n,e);return an(t)?Tt(t.a):Ze});function Mu(n,e){return tn(function(t){va(function(){var i=document.getElementById(n);t(i?pi(e(i)):Sv(j0(n)))})})}function d0(n){return tn(function(e){va(function(){e(pi(n()))})})}$(function(n,e){return Mu(e,function(t){return t[n](),qi})});$(function(n,e){return d0(function(){return gr.scroll(n,e),qi})});We(function(n,e,t){return Mu(n,function(i){return i.scrollLeft=e,i.scrollTop=t,qi})});function p0(n){return R(wn,Lr,tn(function(){try{gr.location=n}catch{bn.location.reload(!1)}}))}function m0(n){try{return Tt(decodeURIComponent(n))}catch{return Ze}}var _0=function(n){return{$:1,a:n}},g0=function(n){return{$:0,a:n}},Su=1,v0=2,Eu=0,Ot=zg,yu=We(function(n,e,t){for(;;){if(t.$===-2)return e;var i=t.d,r=n,a=be(n,t.b,t.c,be(yu,n,e,t.e));n=r,e=a,t=i}}),Ns=function(n){return be(yu,We(function(e,t,i){return R(Ot,ke(e,t),i)}),Qe,n)},vs=Xg;We(function(n,e,t){var i=t.c,r=t.d,a=$(function(o,s){return be(vs,o.$?n:a,s,o.a)});return be(vs,a,be(vs,n,e,r),i)});var Nn=function(n){return{$:1,a:n}},so=$(function(n,e){return{$:3,a:n,b:e}}),el=$(function(n,e){return{$:0,a:n,b:e}}),bu=$(function(n,e){return{$:1,a:n,b:e}}),Bn=function(n){return{$:0,a:n}},x0=function(n){return{$:2,a:n}},Tt=function(n){return{$:0,a:n}},Ze={$:1},M0=iv,S0=gv,xa=ov,dr=$(function(n,e){return R(ev,n,Zs(e))}),Ma=$(function(n,e){return ot(R(Qg,n,e))}),Tu=function(n){return R(dr,`
    `,R(Ma,`
`,n))},Pr=We(function(n,e,t){for(;;){if(!t.b)return e;var i=t.b,r=n,a=R(n,t.a,e);n=r,e=a,t=i}}),Au=function(n){return be(Pr,$(function(e,t){return t+1}),0,n)},E0=Hg,y0=We(function(n,e,t){for(;;){if(Xt(n,e)>=1)return t;var i=n,r=e-1,a=R(Ot,e,t);n=i,e=r,t=a}}),b0=$(function(n,e){return be(y0,n,e,Qe)}),T0=$(function(n,e){return be(E0,n,R(b0,0,Au(e)-1),e)}),oo=lv,wu=function(n){var e=oo(n);return e>=97&&122>=e},Ru=function(n){var e=oo(n);return 90>=e&&e>=65},A0=function(n){return wu(n)||Ru(n)},w0=function(n){var e=oo(n);return 57>=e&&e>=48},R0=function(n){return wu(n)||Ru(n)||w0(n)},Vn=function(n){return be(Pr,Ot,Qe,n)},C0=Jg,P0=$(function(n,e){return`

(`+xa(n+1)+") "+Tu(L0(e))}),L0=function(n){return R(D0,n,Qe)},D0=$(function(n,e){e:for(;;)switch(n.$){case 0:var t=n.a,i=n.b,r=function(){var u=C0(t);if(u.$===1)return!1;var h=u.a,d=h.b;return A0(h.a)&&R(M0,R0,d)}();n=i,e=R(Ot,r?"."+t:"['"+t+"']",e);continue e;case 1:i=n.b;var a="["+xa(n.a)+"]";n=i,e=R(Ot,a,e);continue e;case 2:var o=n.a;if(o.b){if(o.b.b){var s=(e.b?"The Json.Decode.oneOf at json"+R(dr,"",Vn(e)):"Json.Decode.oneOf")+" failed in the following "+xa(Au(o))+" ways:";return R(dr,`

`,R(Ot,s,R(T0,P0,o)))}n=i=o.a;continue e}return"Ran into a Json.Decode.oneOf with no possibilities"+(e.b?" at json"+R(dr,"",Vn(e)):"!");default:var c=n.a,l=n.b;return(s=e.b?"Problem with the value at json"+R(dr,"",Vn(e))+`:

    `:`Problem with the given value:

`)+Tu(R(S0,4,l))+`

`+c}}),en=32,Fs=hn(function(n,e,t,i){return{$:0,a:n,b:e,c:t,d:i}}),Os=Gg,Cu=qg,Pu=$(function(n,e){return Xc(e)/Xc(n)}),Bs=Cu(R(Pu,2,en)),U0=un(Fs,0,Bs,Os,Os),Lu=kg,I0=function(n){return{$:1,a:n}};$(function(n,e){return n(e)});$(function(n,e){return e(n)});var N0=Yg,tl=Vg,F0=$(function(n,e){return Xt(n,e)>0?n:e}),O0=function(n){return{$:0,a:n}},Du=Wg,B0=$(function(n,e){for(;;){var t=R(Du,en,n),i=t.b,r=R(Ot,O0(t.a),e);if(!i.b)return Vn(r);n=i,e=r}}),$0=function(n){return n.a},z0=$(function(n,e){for(;;){var t=Cu(e/en);if(t===1)return R(Du,en,n).a;n=R(B0,n,Qe),e=t}}),H0=$(function(n,e){if(e.e){var t=e.e*en,i=N0(R(Pu,en,t-1)),r=n?Vn(e.h):e.h,a=R(z0,r,e.e);return un(Fs,tl(e.g)+t,R(F0,5,i*Bs),a,e.g)}return un(Fs,tl(e.g),Bs,Os,e.g)}),G0=di(function(n,e,t,i,r){for(;;){if(0>e)return R(H0,!1,{h:i,e:t/en|0,g:r});var a=I0(be(Lu,en,e,n));e-=en,i=R(Ot,a,i)}}),V0=$(function(n,e){if(n>0){var t=n%en;return ut(G0,e,n-t-en,n,Qe,be(Lu,t,n-t,e))}return U0}),an=function(n){return!n.$},Uu=pv,k0=mv,Iu=uv,co=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},W0=function(n){return{$:1,a:n}},X0=function(n){return{$:0,a:n}},Ki=function(n){return n},j0=Ki,nl=Pa(function(n,e,t,i,r,a){return{aF:a,af:e,aQ:i,ak:t,an:n,aR:r}}),q0=rv,Y0=Zg,Nu=tv,Wi=$(function(n,e){return 1>n?e:be(Nu,n,Y0(e),e)}),Da=sv,Ji=function(n){return n===""},Ua=$(function(n,e){return 1>n?"":be(Nu,0,n,e)}),K0=cv,il=di(function(n,e,t,i,r){if(Ji(r)||R(q0,"@",r))return Ze;var a=R(Da,":",r);if(a.b){if(a.b.b)return Ze;var o=a.a,s=K0(R(Wi,o+1,r));if(s.$===1)return Ze;var c=s;return Tt(Ps(nl,n,R(Ua,o,r),c,e,t,i))}return Tt(Ps(nl,n,r,Ze,e,t,i))}),rl=hn(function(n,e,t,i){if(Ji(i))return Ze;var r=R(Da,"/",i);if(r.b){var a=r.a;return ut(il,n,R(Wi,a,i),e,t,R(Ua,a,i))}return ut(il,n,"/",e,t,i)}),al=We(function(n,e,t){if(Ji(t))return Ze;var i=R(Da,"?",t);if(i.b){var r=i.a;return un(rl,n,Tt(R(Wi,r+1,t)),e,R(Ua,r,t))}return un(rl,n,Ze,e,t)}),sl=$(function(n,e){if(Ji(e))return Ze;var t=R(Da,"#",e);if(t.b){var i=t.a;return be(al,n,Tt(R(Wi,i+1,e)),R(Ua,i,e))}return be(al,n,Ze,e)}),ol=av,Fu=function(n){return R(ol,"http://",n)?R(sl,0,R(Wi,7,n)):R(ol,"https://",n)?R(sl,1,R(Wi,8,n)):Ze},Lr=function(n){},dn=pi,J0=dn(0),Ou=hn(function(n,e,t,i){if(i.b){var r=i.a,a=i.b;if(a.b){var o=a.a,s=a.b;if(s.b){var c=s.a,l=s.b;if(l.b){var u=l.b;return R(n,r,R(n,o,R(n,c,R(n,l.a,t>500?be(Pr,n,e,Vn(u)):un(Ou,n,e,t+1,u)))))}return R(n,r,R(n,o,R(n,c,e)))}return R(n,r,R(n,o,e))}return R(n,r,e)}return e}),Zi=We(function(n,e,t){return un(Ou,n,e,0,t)}),sn=$(function(n,e){return be(Zi,$(function(t,i){return R(Ot,n(t),i)}),Qe,e)}),Sa=Ds,lo=$(function(n,e){return R(Sa,function(t){return dn(n(t))},e)}),Z0=We(function(n,e,t){return R(Sa,function(i){return R(Sa,function(r){return dn(R(n,i,r))},t)},e)}),Q0=function(n){return be(Zi,Z0(Ot),dn(Qe),n)},ex=Pv,tx=$(function(n,e){var t=e;return cu(R(Sa,ex(n),t))}),nx=We(function(n,e){return R(lo,function(){return 0},Q0(R(sn,tx(n),e)))}),ix=We(function(){return dn(0)}),rx=$(function(n,e){return R(lo,n,e)});ln.Task=Rv(J0,nx,ix,rx);var ax=uu("Task"),wn=$(function(n,e){return ax(R(lo,n,e))}),sx=c0,oi=fu,ox=ou,cx=function(n){return{aK:n}},lx=dv,ux=hv,fx=R(Uu,cx,R(lx,"message",ux)),Bu=function(n){return{$:5,a:n}},Ea=function(n){return{$:4,a:n}},Bt=We(function(n,e,t){return e(n(t))}),hx={$:6},dx=function(n){return{$:1,a:n}},px=function(n){return{$:5,a:n}},$u={$:0},mx=function(n){return{$:3,a:n}},_x=function(n){return{$:4,a:n}},gx=function(n){return{$:2,a:n}},zu=function(n){return{$:8,a:n}},vx=function(n){return{$:7,a:n}},xx=hu,fi=$(function(n,e){switch(e.$){case 0:return $u;case 1:var t=e.a;return dx(R(sn,fi(n),t));case 2:return gx(R(xx,n,e.a));case 3:return mx(e.a);case 4:return _x(e.a);case 6:return hx;case 5:return px(e.a);case 7:return vx(e.a);default:return zu(e.a)}}),Mx=$(function(n,e){return R(l0,n,-e)}),Hu=p0,mi=oi(Qe),Sx=function(n){return be(Pr,$(function(e,t){return be(Mv,e.a,e.b,t)}),xv(),n)},Gu=vv,Ex=Nv("outgoing",function(n){return Sx(ot([ke("data",Ki(n.aa)),ke("tag",Gu(n.as))]))}),Vu=u0,yx=f0,uo=$(function(n,e){switch(e.$){case 0:return mi;case 1:var t=e.a;return oi(R(sn,uo(n),t));case 2:return e.a;case 3:return R(Vu,n.R,e.a);case 4:return R(yx,n.R,e.a);case 6:return R(Mx,n.R,1);case 5:return Hu(e.a);case 7:return R(wn,n.aG,dn(e.a));default:return Ex(e.a)}}),ku=$(function(n,e){return R(uo,{P:Bu,aG:Ea,R:n.R,b:n.b,Q:R(Bt,dn,wn(Ki)),a:n.a},R(fi,Ea,e))}),bx=$(function(n,e){return be(Zi,$(function(t,i){return n(t)?R(Ot,t,i):i}),Qe,e)}),Tx=Kg,Ax=nv,wx=function(n){return R(bx,R(Bt,Ax,R(Bt,Ji,Tx)),R(Ma,"/",n)).b?Ze:Tt(0)},fo=$(function(n,e){return e.$?n:e.a}),ya=function(n){return R(fo,1,wx(n.aQ))},$s={$:-2},br=$s,Rx=We(function(n,e,t){var i=n(e);return i.$?t:R(Ot,i.a,t)}),Wu=$(function(n,e){return be(Zi,Rx(n),Qe,e)}),Ht=di(function(n,e,t,i,r){return{$:-1,a:n,b:e,c:t,d:i,e:r}}),cl=di(function(n,e,t,i,r){if(r.$!==-1||r.a){if(i.$!==-1||i.a||i.d.$!==-1||i.d.a)return ut(Ht,n,e,t,i,r);var a=i.d;return o=i.e,ut(Ht,0,i.b,i.c,ut(Ht,1,a.b,a.c,a.d,a.e),ut(Ht,1,e,t,o,r))}var o,s=r.b,c=r.c,l=r.d,u=r.e;return i.$!==-1||i.a?ut(Ht,n,s,c,ut(Ht,0,e,t,i,l),u):ut(Ht,0,e,t,ut(Ht,1,i.b,i.c,i.d,o=i.e),ut(Ht,1,s,c,l,u))}),Xu=Bg,zs=We(function(n,e,t){if(t.$===-2)return ut(Ht,0,n,e,$s,$s);var i=t.a,r=t.b,a=t.c,o=t.d,s=t.e;switch(R(Xu,n,r)){case 0:return ut(cl,i,r,a,be(zs,n,e,o),s);case 1:return ut(Ht,i,r,e,o,s);default:return ut(cl,i,r,a,o,be(zs,n,e,s))}}),Cx=We(function(n,e,t){var i=be(zs,n,e,t);return i.$!==-1||i.a?i:ut(Ht,1,i.b,i.c,i.d,i.e)}),Px=function(n){return be(Pr,$(function(e,t){return be(Cx,e.a,e.b,t)}),br,n)},Lx=m0,xs=function(n){return R(fo,n,Lx(n))},Dx=function(n){if(n.b){if(n.b.b){var e=n.b.a;return Tt(ke(xs(n.a),xs(e)))}return Tt(ke(xs(n.a),""))}return Ze},Ux=function(n){var e=n.aR;if(e.$===1)return br;var t=e.a;return Ji(t)?br:Px(R(Wu,R(Bt,Ma("="),Dx),R(Ma,"&",t)))},nt=$(function(n,e){return{aH:e.aF,ai:n,aQ:ya(e),aR:Ux(e),a:e}}),Dr=$u,Ix=$(function(){return ke({},Dr)}),ju=function(n){return{$:0,a:n}},Qi=function(n){return{$:0,a:n}},qu=function(n){return{$:1,a:n}},er=function(n){return{$:1,a:n}},An=function(n){return{$:2,a:n}},ba=$(function(n,e){return R(uo,{P:Bu,aG:Ea,R:n.R,b:n.b,Q:R(Bt,dn,wn(Ki)),a:n.a},R(fi,An,e))}),ll=function(n){return n.C},Ta=We(function(n,e,t){var i=t.b;return ke(n(t.a),e(i))}),Nx=function(){return ke({},Dr)},Yu=function(n){return{C:n.C,E:Ze,x:br,F:Ze,G:n.G,K:Ze,N:n.N,O:n.O}},Ku=fu,Tr=Ku(Qe),Fx=function(){return Tr},Ox=function(n){return zu({aa:Gu(n),as:"OPEN_WINDOW_DIALOG"})},Bx=$(function(n,e){return ke(e,Ox("Hello, from Elm!"))}),$x=La("button"),zx=function(n){return La(Vv(n))},Hx=zx,Gx=function(n){return{$:0,a:n}},Vx=du,kx=$(function(n,e){return R(Vx,n,Gx(e))}),Wx=function(n){return R(kx,"click",Iu(n))},Xx=Us,Ju=Xx,jx=function(){return{aA:ot([R($x,ot([Wx(0)]),ot([Ju("Say hello!")])),be(Hx,"forest-demo",Qe,Qe)]),aU:"Homepage"}},tr=$(function(){return Yu({C:Nx,G:Fx,N:Bx,O:jx})}),qx=function(){return ke({},Dr)},Yx=function(){return Tr},Kx=$(function(n,e){return ke(e,Dr)}),Zu=function(n){return{aA:ot([Ju(n)]),aU:n}},Jx=function(){return Zu("Page not found")},nr=$(function(){return Yu({C:qx,G:Yx,N:Kx,O:Jx})}),Qu=function(n){if(ya(n.a)){var e=R(ll,R(nr,n.b,R(nt,0,n.a)),0);return i=e.a,r=e.b,{c:Ze,d:be(Ta,qu,R(Bt,fi(er),ba(n)),ke(i,r))}}var t=R(ll,R(tr,n.b,R(nt,0,n.a)),0),i=t.a,r=t.b;return{c:Ze,d:be(Ta,ju,R(Bt,fi(Qi),ba(n)),ke(i,r))}},Ar=$(function(n,e){return e.$?Ze:Tt(n(e.a))}),Zx=function(n){return n.b},Qx=We(function(n,e,t){var i=R(Ix,R(ox,fx,n),R(nt,0,e)),r=i.a,a=i.b,o=Qu({R:t,c:Ze,b:r,a:e}),s=o.d,c=o.c;return ke({R:t,c:R(Ar,$0,c),d:s.a,b:r,a:e},oi(ot([s.b,R(fo,mi,R(Ar,Zx,c)),R(ku,{R:t,b:r,a:e},a)])))}),cr=hu,ul=function(n){return n.G},eM=$(function(){return Tr}),fl=$(function(n,e){return R(Ar,function(t){return t(n)},e.K)}),hl=$(function(){return 0}),vr=function(n){var e=n.d;switch(e.$){case 0:var t=e.a;return R(Ar,hl(R(Bt,Qi,An)),R(fl,t,R(tr,n.b,R(nt,0,n.a))));case 1:return t=e.a,R(Ar,hl(R(Bt,er,An)),R(fl,t,R(nr,n.b,R(nt,0,n.a))));default:return Ze}},tM=function(n){var e=function(){var r=n.d;switch(r.$){case 0:var a=r.a;return R(cr,An,R(cr,Qi,R(ul,R(tr,n.b,R(nt,0,n.a)),a)));case 1:return a=r.a,R(cr,An,R(cr,er,R(ul,R(nr,n.b,R(nt,0,n.a)),a)));default:return Tr}}(),t=R(nt,0,n.a),i=(ke(vr(n),n.c),Tr);return Ku(ot([R(cr,Ea,R(eM,t,n.b)),e,i]))};$(function(n,e){var t=ke(e,n);e:for(;;)switch(t.a.$){case 0:if(t.b.$)break e;return!1;case 1:if(t.b.$===1)return!1;break e;case 2:if(t.b.$===2)return!1;break e;case 3:if(t.b.$===3)return!1;break e;default:if(t.b.$===4)return!1;break e}return!0});var nM=function(){return!1},iM=function(n){return{$:3,a:n}},rM=iM,dl=$(function(){return rM({aH:Ze,aQ:1,aR:br})}),aM=$(function(n,e){for(;;){if(!e.b)return!1;var t=e.b;if(n(e.a))return!0;e=t}}),pl=We(function(n,e,t){return e.$===1||t.$===1?Ze:Tt(R(n,e.a,t.a))}),ml=$(function(n,e){return ke(n,e)}),sM=function(n){var e=n.B,t=n.J;return R(aM,function(){return!1},ot([be(pl,ml,e,t),be(pl,ml,t,e)]))},_l=We(function(n,e){return sM({B:vr(n),J:vr(e)}),ke(vr(e),e.c),mi}),oM=$(function(n,e){return e.b?be(Zi,Ot,e,n):n}),cM=function(n){return be(Zi,oM,Qe,n)},gl=$(function(n,e){e:for(;;){if(e.$===-2)return Ze;var t=e.c,i=e.d,r=e.e;switch(R(Xu,n,e.b)){case 0:e=i;continue e;case 1:return Tt(t);default:e=r;continue e}}}),vl=$(function(n,e){var t,i=e;return cM(ot([(t=i.F,t.$?Qe:ot([(0,t.a)(n)])),function(){var r=i.E;if(r.$)return Qe;var a=r.a;return Er(n.B.aH,n.J.aH)?Qe:ot([a({B:n.B.aH,J:n.J.aH})])}(),R(Wu,function(r){var a=r.a,o=r.b,s=R(gl,a,n.J.aR),c=R(gl,a,n.B.aR);return Er(c,s)?Ze:Tt(o({B:c,J:s}))},Ns(i.x))]))}),lM=$(function(n,e){var t=function(i){return oi(R(sn,R(Bt,dn,wn(Ki)),i))};switch(n.d.$){case 0:return t(R(sn,An,R(sn,Qi,R(vl,e,R(tr,n.b,R(nt,0,n.a))))));case 1:return t(R(sn,An,R(sn,er,R(vl,e,R(nr,n.b,R(nt,0,n.a))))));default:return mi}}),uM=$(function(n,e){return n.$===1?e:e+":"+xa(n.a)}),xl=We(function(n,e,t){return e.$===1?t:yr(t,yr(n,e.a))}),fM=function(n){return be(xl,"#",n.aF,be(xl,"?",n.aR,yr(R(uM,n.ak,yr(n.an?"https://":"http://",n.af)),n.aQ)))},hM=We(function(n,e,t){return ke(t,Dr)}),dM=$(function(n,e){return $g(vr(e),e.c,n),ke(e.c,mi)}),Ml=function(n){return n.N},pM=$(function(n,e){var t=ke(n,e.d);e:for(;;){if(t.a.$){if(t.b.$===1)return i=t.a.a,r=t.b.a,be(Ta,qu,R(Bt,fi(er),ba(e)),be(Ml,R(nr,e.b,R(nt,0,e.a)),i,r));break e}if(t.b.$)break e;var i=t.a.a,r=t.b.a;return be(Ta,ju,R(Bt,fi(Qi),ba(e)),be(Ml,R(tr,e.b,R(nt,0,e.a)),i,r))}return ke(e.d,mi)}),mM=$(function(n,e){switch(n.$){case 0:return ke(e,n.a.$?Hu(t=n.a.a):R(Vu,e.R,fM(t=n.a.a)));case 1:var t;if(Er(ya(t=n.a),ya(e.a)))return ke(i=Ii(e,{a:t}),oi(ot([R(lM,i,{B:R(nt,0,e.a),J:R(nt,0,i.a)}),be(_l,e,i,{B:R(nt,0,e.a),J:R(nt,0,i.a)})])));var i,r=Qu({R:e.R,c:e.c,b:e.b,a:t}),a=r.d,o=r.c,s=function(){if(o.$)return ke(Ze,mi);var b=o.a,E=b.b;return ke(Tt(b.a),E)}(),c=s.b,l=a.b;return ke(i=Ii(e,{c:s.a,d:a.a,a:t}),oi(ot([l,c,be(_l,e,i,{B:R(nt,0,e.a),J:R(nt,0,i.a)})])));case 2:var u=R(pM,n.a,e);return l=u.b,ke(Ii(e,{d:u.a}),l);case 3:var h=R(dM,n.a,e);return c=h.b,ke(Ii(e,{c:h.a}),c);case 4:var d=n.a,m=be(hM,R(nt,0,e.a),d,e.b),_=m.a,g=m.b,p=ke(R(dl,e.b,R(nt,0,e.a)),R(dl,_,R(nt,0,e.a)));return p.a,p.b,nM(R(nt,0,e.a).aQ),ke(Ii(e,{b:_}),R(ku,Ii(e,{b:_}),g));default:var f=n.a;return ke(e,oi(R(sn,R(Bt,dn,wn(Ki)),f)))}}),_M=fv,gM=function(n){var e=n.O;return{aA:e.aA,aU:e.aU}},vM=zv,xM=vM,lr=$(function(n,e){return{aA:R(sn,xM(n),e.aA),aU:e.aU}}),MM={aA:Qe,aU:""},Sl=function(n){return n.O},SM=$(function(){return Zu("Loading...")}),EM=function(n){var e=n.d;switch(e.$){case 0:var t=e.a;return R(lr,An,R(lr,Qi,R(Sl,R(tr,n.b,R(nt,0,n.a)),t)));case 1:return t=e.a,R(lr,An,R(lr,er,R(Sl,R(nr,n.b,R(nt,0,n.a)),t)));case 2:return MM;default:return R(lr,Lr,R(SM,n.b,R(nt,0,n.a)))}},yM=function(n){return EM(n)},bM=function(n){var e=yM(n);return gM({aT:R(nt,0,n.a),b:n.b,O:e})},TM=sx({C:Qx,aN:_0,aO:g0,G:tM,N:mM,O:bM});const sa={Main:{init:TM(_M)(0)}};let Ms=async({Interop:n})=>{let e=Object.keys({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}).reduce((i,r)=>(r.startsWith("ELM_LAND_")&&(i[r.slice(9)]={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}[r]),i),{}),t;if(n.flags&&(t=await n.flags({env:e})),sa&&sa.Main&&sa.Main.init){let i=sa.Main.init({node:document.getElementById("app"),flags:t});n.onReady&&n.onReady({app:i,env:e})}};const AM=async()=>{try{await Ms({Interop:Object.assign({})["../../src/interop.ts"]})}catch{try{await Ms({Interop:Object.assign({"../../src/interop.js":Ng})["../../src/interop.js"]})}catch{await Ms({Interop:{}})}}};AM();
