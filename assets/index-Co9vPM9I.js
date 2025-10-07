(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},Or=[],Gn=()=>{},vv=()=>!1,vo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),bu=n=>n.startsWith("onUpdate:"),Bt=Object.assign,Mu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},_v=Object.prototype.hasOwnProperty,ot=(n,e)=>_v.call(n,e),Ge=Array.isArray,Nr=n=>_o(n)==="[object Map]",Jh=n=>_o(n)==="[object Set]",je=n=>typeof n=="function",Tt=n=>typeof n=="string",Fi=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Qh=n=>(vt(n)||je(n))&&je(n.then)&&je(n.catch),ep=Object.prototype.toString,_o=n=>ep.call(n),xv=n=>_o(n).slice(8,-1),tp=n=>_o(n)==="[object Object]",Eu=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xs=yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Sv=/-(\w)/g,yn=xo(n=>n.replace(Sv,(e,t)=>t?t.toUpperCase():"")),yv=/\B([A-Z])/g,fr=xo(n=>n.replace(yv,"-$1").toLowerCase()),So=xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),jo=xo(n=>n?`on${So(n)}`:""),Pi=(n,e)=>!Object.is(n,e),Da=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ql=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ec=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let bf;const yo=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tu(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Tt(i)?Tv(i):Tu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Tt(n)||vt(n))return n}const bv=/;(?![^(]*\))/g,Mv=/:([^]+)/,Ev=/\/\*[^]*?\*\//g;function Tv(n){const e={};return n.replace(Ev,"").split(bv).forEach(t=>{if(t){const i=t.split(Mv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wu(n){let e="";if(Tt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=wu(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const wv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Av=yu(wv);function np(n){return!!n||n===""}const ip=n=>!!(n&&n.__v_isRef===!0),Ss=n=>Tt(n)?n:n==null?"":Ge(n)||vt(n)&&(n.toString===ep||!je(n.toString))?ip(n)?Ss(n.value):JSON.stringify(n,rp,2):String(n),rp=(n,e)=>ip(e)?rp(n,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[$o(i,s)+" =>"]=r,t),{})}:Jh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$o(t))}:Fi(e)?$o(e):vt(e)&&!Ge(e)&&!tp(e)?String(e):e,$o=(n,e="")=>{var t;return Fi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class Cv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){++this._on===1&&(this.prevScope=qt,qt=this)}off(){this._on>0&&--this._on===0&&(qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Rv(){return qt}let ht;const qo=new WeakSet;class sp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qt&&qt.active&&qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||op(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mf(this),lp(this);const e=ht,t=Rn;ht=this,Rn=!0;try{return this.fn()}finally{cp(this),ht=e,Rn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ru(e);this.deps=this.depsTail=void 0,Mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tc(this)&&this.run()}get dirty(){return tc(this)}}let ap=0,ys,bs;function op(n,e=!1){if(n.flags|=8,e){n.next=bs,bs=n;return}n.next=ys,ys=n}function Au(){ap++}function Cu(){if(--ap>0)return;if(bs){let e=bs;for(bs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ys;){let e=ys;for(ys=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function lp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cp(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ru(i),Pv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function tc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(up(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function up(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Rs)||(n.globalVersion=Rs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!tc(n))))return;n.flags|=2;const e=n.dep,t=ht,i=Rn;ht=n,Rn=!0;try{lp(n);const r=n.fn(n._value);(e.version===0||Pi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,Rn=i,cp(n),n.flags&=-3}}function Ru(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ru(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Rn=!0;const fp=[];function di(){fp.push(Rn),Rn=!1}function hi(){const n=fp.pop();Rn=n===void 0?!0:n}function Mf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let Rs=0;class Iv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!Rn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Iv(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,dp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,Rs++,this.notify(e)}notify(e){Au();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cu()}}}function dp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)dp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const nc=new WeakMap,rr=Symbol(""),ic=Symbol(""),Ps=Symbol("");function Ut(n,e,t){if(Rn&&ht){let i=nc.get(n);i||nc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Pu),r.map=i,r.key=t),r.track()}}function ii(n,e,t,i,r,s){const a=nc.get(n);if(!a){Rs++;return}const o=l=>{l&&l.trigger()};if(Au(),e==="clear")a.forEach(o);else{const l=Ge(n),c=l&&Eu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Ps||!Fi(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Ps)),e){case"add":l?c&&o(a.get("length")):(o(a.get(rr)),Nr(n)&&o(a.get(ic)));break;case"delete":l||(o(a.get(rr)),Nr(n)&&o(a.get(ic)));break;case"set":Nr(n)&&o(a.get(rr));break}}Cu()}function mr(n){const e=at(n);return e===n?e:(Ut(e,"iterate",Ps),xn(n)?e:e.map(Pt))}function bo(n){return Ut(n=at(n),"iterate",Ps),n}const Dv={__proto__:null,[Symbol.iterator](){return Yo(this,Symbol.iterator,Pt)},concat(...n){return mr(this).concat(...n.map(e=>Ge(e)?mr(e):e))},entries(){return Yo(this,"entries",n=>(n[1]=Pt(n[1]),n))},every(n,e){return qn(this,"every",n,e,void 0,arguments)},filter(n,e){return qn(this,"filter",n,e,t=>t.map(Pt),arguments)},find(n,e){return qn(this,"find",n,e,Pt,arguments)},findIndex(n,e){return qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return qn(this,"findLast",n,e,Pt,arguments)},findLastIndex(n,e){return qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ko(this,"includes",n)},indexOf(...n){return Ko(this,"indexOf",n)},join(n){return mr(this).join(n)},lastIndexOf(...n){return Ko(this,"lastIndexOf",n)},map(n,e){return qn(this,"map",n,e,void 0,arguments)},pop(){return ls(this,"pop")},push(...n){return ls(this,"push",n)},reduce(n,...e){return Ef(this,"reduce",n,e)},reduceRight(n,...e){return Ef(this,"reduceRight",n,e)},shift(){return ls(this,"shift")},some(n,e){return qn(this,"some",n,e,void 0,arguments)},splice(...n){return ls(this,"splice",n)},toReversed(){return mr(this).toReversed()},toSorted(n){return mr(this).toSorted(n)},toSpliced(...n){return mr(this).toSpliced(...n)},unshift(...n){return ls(this,"unshift",n)},values(){return Yo(this,"values",Pt)}};function Yo(n,e,t){const i=bo(n),r=i[e]();return i!==n&&!xn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Lv=Array.prototype;function qn(n,e,t,i,r,s){const a=bo(n),o=a!==n&&!xn(n),l=a[e];if(l!==Lv[e]){const f=l.apply(n,s);return o?Pt(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,Pt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Ef(n,e,t,i){const r=bo(n);let s=t;return r!==n&&(xn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Pt(o),l,n)}),r[e](s,...i)}function Ko(n,e,t){const i=at(n);Ut(i,"iterate",Ps);const r=i[e](...t);return(r===-1||r===!1)&&Lu(t[0])?(t[0]=at(t[0]),i[e](...t)):r}function ls(n,e,t=[]){di(),Au();const i=at(n)[e].apply(n,t);return Cu(),hi(),i}const Uv=yu("__proto__,__v_isRef,__isVue"),hp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fi));function Ov(n){Fi(n)||(n=String(n));const e=at(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class pp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Xv:_p:s?vp:gp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ge(e);if(!r){let l;if(a&&(l=Dv[t]))return l;if(t==="hasOwnProperty")return Ov}const o=Reflect.get(e,t,Ft(e)?e:i);return(Fi(t)?hp.has(t):Uv(t))||(r||Ut(e,"get",t),s)?o:Ft(o)?a&&Eu(t)?o:o.value:vt(o)?r?xp(o):Fr(o):o}}class mp extends pp{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Di(s);if(!xn(i)&&!Di(i)&&(s=at(s),i=at(i)),!Ge(e)&&Ft(s)&&!Ft(i))return l?!1:(s.value=i,!0)}const a=Ge(e)&&Eu(t)?Number(t)<e.length:ot(e,t),o=Reflect.set(e,t,i,Ft(e)?e:r);return e===at(r)&&(a?Pi(i,s)&&ii(e,"set",t,i):ii(e,"add",t,i)),o}deleteProperty(e,t){const i=ot(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ii(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Fi(t)||!hp.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",Ge(e)?"length":rr),Reflect.ownKeys(e)}}class Nv extends pp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Fv=new mp,Bv=new Nv,zv=new mp(!0);const rc=n=>n,na=n=>Reflect.getPrototypeOf(n);function kv(n,e,t){return function(...i){const r=this.__v_raw,s=at(r),a=Nr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?rc:e?Za:Pt;return!e&&Ut(s,"iterate",l?ic:rr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ia(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Hv(n,e){const t={get(r){const s=this.__v_raw,a=at(s),o=at(r);n||(Pi(r,o)&&Ut(a,"get",r),Ut(a,"get",o));const{has:l}=na(a),c=e?rc:n?Za:Pt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ut(at(r),"iterate",rr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=at(s),o=at(r);return n||(Pi(r,o)&&Ut(a,"has",r),Ut(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=at(o),c=e?rc:n?Za:Pt;return!n&&Ut(l,"iterate",rr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Bt(t,n?{add:ia("add"),set:ia("set"),delete:ia("delete"),clear:ia("clear")}:{add(r){!e&&!xn(r)&&!Di(r)&&(r=at(r));const s=at(this);return na(s).has.call(s,r)||(s.add(r),ii(s,"add",r,r)),this},set(r,s){!e&&!xn(s)&&!Di(s)&&(s=at(s));const a=at(this),{has:o,get:l}=na(a);let c=o.call(a,r);c||(r=at(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Pi(s,u)&&ii(a,"set",r,s):ii(a,"add",r,s),this},delete(r){const s=at(this),{has:a,get:o}=na(s);let l=a.call(s,r);l||(r=at(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&ii(s,"delete",r,void 0),c},clear(){const r=at(this),s=r.size!==0,a=r.clear();return s&&ii(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=kv(r,n,e)}),t}function Iu(n,e){const t=Hv(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ot(t,r)&&r in i?t:i,r,s)}const Vv={get:Iu(!1,!1)},Gv={get:Iu(!1,!0)},Wv={get:Iu(!0,!1)};const gp=new WeakMap,vp=new WeakMap,_p=new WeakMap,Xv=new WeakMap;function jv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $v(n){return n.__v_skip||!Object.isExtensible(n)?0:jv(xv(n))}function Fr(n){return Di(n)?n:Du(n,!1,Fv,Vv,gp)}function qv(n){return Du(n,!1,zv,Gv,vp)}function xp(n){return Du(n,!0,Bv,Wv,_p)}function Du(n,e,t,i,r){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=$v(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Br(n){return Di(n)?Br(n.__v_raw):!!(n&&n.__v_isReactive)}function Di(n){return!!(n&&n.__v_isReadonly)}function xn(n){return!!(n&&n.__v_isShallow)}function Lu(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function Yv(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&Ql(n,"__v_skip",!0),n}const Pt=n=>vt(n)?Fr(n):n,Za=n=>vt(n)?xp(n):n;function Ft(n){return n?n.__v_isRef===!0:!1}function zr(n){return Kv(n,!1)}function Kv(n,e){return Ft(n)?n:new Zv(n,e)}class Zv{constructor(e,t){this.dep=new Pu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:Pt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||xn(e)||Di(e);e=i?e:at(e),Pi(e,t)&&(this._rawValue=e,this._value=i?e:Pt(e),this.dep.trigger())}}function Sp(n){return Ft(n)?n.value:n}const Jv={get:(n,e,t)=>e==="__v_raw"?n:Sp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function yp(n){return Br(n)?n:new Proxy(n,Jv)}class Qv{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return op(this,!0),!0}get value(){const e=this.dep.track();return up(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function e_(n,e,t=!1){let i,r;return je(n)?i=n:(i=n.get,r=n.set),new Qv(i,r,t)}const ra={},Ja=new WeakMap;let qi;function t_(n,e=!1,t=qi){if(t){let i=Ja.get(t);i||Ja.set(t,i=[]),i.push(n)}}function n_(n,e,t=ft){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=S=>r?S:xn(S)||r===!1||r===0?ri(S,1):ri(S);let u,f,d,p,m=!1,v=!1;if(Ft(n)?(f=()=>n.value,m=xn(n)):Br(n)?(f=()=>c(n),m=!0):Ge(n)?(v=!0,m=n.some(S=>Br(S)||xn(S)),f=()=>n.map(S=>{if(Ft(S))return S.value;if(Br(S))return c(S);if(je(S))return l?l(S,2):S()})):je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){di();try{d()}finally{hi()}}const S=qi;qi=u;try{return l?l(n,3,[p]):n(p)}finally{qi=S}}:f=Gn,e&&r){const S=f,A=r===!0?1/0:r;f=()=>ri(S(),A)}const g=Rv(),h=()=>{u.stop(),g&&g.active&&Mu(g.effects,u)};if(s&&e){const S=e;e=(...A)=>{S(...A),h()}}let M=v?new Array(n.length).fill(ra):ra;const y=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const A=u.run();if(r||m||(v?A.some((I,R)=>Pi(I,M[R])):Pi(A,M))){d&&d();const I=qi;qi=u;try{const R=[A,M===ra?void 0:v&&M[0]===ra?[]:M,p];M=A,l?l(e,3,R):e(...R)}finally{qi=I}}}else u.run()};return o&&o(y),u=new sp(f),u.scheduler=a?()=>a(y,!1):y,p=S=>t_(S,!1,u),d=u.onStop=()=>{const S=Ja.get(u);if(S){if(l)l(S,4);else for(const A of S)A();Ja.delete(u)}},e?i?y(!0):M=u.run():a?a(y.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ri(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ft(n))ri(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)ri(n[i],e,t);else if(Jh(n)||Nr(n))n.forEach(i=>{ri(i,e,t)});else if(tp(n)){for(const i in n)ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ri(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ks(n,e,t,i){try{return i?n(...i):n()}catch(r){Mo(r,e,t)}}function Xn(n,e,t,i){if(je(n)){const r=ks(n,e,t,i);return r&&Qh(r)&&r.catch(s=>{Mo(s,e,t)}),r}if(Ge(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Xn(n[s],e,t,i));return r}}function Mo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ft;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){di(),ks(s,null,10,[n,l,c]),hi();return}}i_(n,t,r,i,a)}function i_(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Gt=[];let Fn=-1;const kr=[];let wi=null,Ir=0;const bp=Promise.resolve();let Qa=null;function r_(n){const e=Qa||bp;return n?e.then(this?n.bind(this):n):e}function s_(n){let e=Fn+1,t=Gt.length;for(;e<t;){const i=e+t>>>1,r=Gt[i],s=Is(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Uu(n){if(!(n.flags&1)){const e=Is(n),t=Gt[Gt.length-1];!t||!(n.flags&2)&&e>=Is(t)?Gt.push(n):Gt.splice(s_(e),0,n),n.flags|=1,Mp()}}function Mp(){Qa||(Qa=bp.then(Tp))}function a_(n){Ge(n)?kr.push(...n):wi&&n.id===-1?wi.splice(Ir+1,0,n):n.flags&1||(kr.push(n),n.flags|=1),Mp()}function Tf(n,e,t=Fn+1){for(;t<Gt.length;t++){const i=Gt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Gt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ep(n){if(kr.length){const e=[...new Set(kr)].sort((t,i)=>Is(t)-Is(i));if(kr.length=0,wi){wi.push(...e);return}for(wi=e,Ir=0;Ir<wi.length;Ir++){const t=wi[Ir];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}wi=null,Ir=0}}const Is=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Tp(n){try{for(Fn=0;Fn<Gt.length;Fn++){const e=Gt[Fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ks(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Fn<Gt.length;Fn++){const e=Gt[Fn];e&&(e.flags&=-2)}Fn=-1,Gt.length=0,Ep(),Qa=null,(Gt.length||kr.length)&&Tp()}}let cn=null,wp=null;function eo(n){const e=cn;return cn=n,wp=n&&n.type.__scopeId||null,e}function o_(n,e=cn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Of(-1);const s=eo(e);let a;try{a=n(...r)}finally{eo(s),i._d&&Of(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Zo(n,e){if(cn===null)return n;const t=Co(cn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=ft]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&ri(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function ki(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(di(),Xn(l,t,8,[n.el,o,n,e]),hi())}}const l_=Symbol("_vte"),c_=n=>n.__isTeleport;function Ou(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ou(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Nu(n,e){return je(n)?Bt({name:n.name},e,{setup:n}):n}function Ap(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ms(n,e,t,i,r=!1){if(Ge(n)){n.forEach((m,v)=>Ms(m,e&&(Ge(e)?e[v]:e),t,i,r));return}if(Es(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ms(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Co(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===ft?o.refs={}:o.refs,f=o.setupState,d=at(f),p=f===ft?()=>!1:m=>ot(d,m);if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,p(c)&&(f[c]=null)):Ft(c)&&(c.value=null)),je(l))ks(l,o,12,[a,u]);else{const m=Tt(l),v=Ft(l);if(m||v){const g=()=>{if(n.f){const h=m?p(l)?f[l]:u[l]:l.value;r?Ge(h)&&Mu(h,s):Ge(h)?h.includes(s)||h.push(s):m?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else m?(u[l]=a,p(l)&&(f[l]=a)):v&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,an(g,t)):g()}}}yo().requestIdleCallback;yo().cancelIdleCallback;const Es=n=>!!n.type.__asyncLoader,Cp=n=>n.type.__isKeepAlive;function u_(n,e){Rp(n,"a",e)}function f_(n,e){Rp(n,"da",e)}function Rp(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Eo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Cp(r.parent.vnode)&&d_(i,e,t,r),r=r.parent}}function d_(n,e,t,i){const r=Eo(e,n,i,!0);Pp(()=>{Mu(i[e],r)},t)}function Eo(n,e,t=Ot,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{di();const o=Hs(t),l=Xn(e,t,n,a);return o(),hi(),l});return i?r.unshift(s):r.push(s),s}}const vi=n=>(e,t=Ot)=>{(!Us||n==="sp")&&Eo(n,(...i)=>e(...i),t)},h_=vi("bm"),To=vi("m"),p_=vi("bu"),m_=vi("u"),Fu=vi("bum"),Pp=vi("um"),g_=vi("sp"),v_=vi("rtg"),__=vi("rtc");function x_(n,e=Ot){Eo("ec",n,e)}const S_="components";function Ds(n,e){return b_(S_,n,!0,e)||n}const y_=Symbol.for("v-ndc");function b_(n,e,t=!0,i=!1){const r=cn||Ot;if(r){const s=r.type;{const o=h0(s,!1);if(o&&(o===e||o===yn(e)||o===So(yn(e))))return s}const a=wf(r[n]||s[n],e)||wf(r.appContext[n],e);return!a&&i?s:a}}function wf(n,e){return n&&(n[e]||n[yn(e)]||n[So(yn(e))])}function sc(n,e,t,i){let r;const s=t,a=Ge(n);if(a||Tt(n)){const o=a&&Br(n);let l=!1,c=!1;o&&(l=!xn(n),c=Di(n),n=bo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Za(Pt(n[u])):Pt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(vt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ac=n=>n?Yp(n)?Co(n):ac(n.parent):null,Ts=Bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ac(n.parent),$root:n=>ac(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Dp(n),$forceUpdate:n=>n.f||(n.f=()=>{Uu(n.update)}),$nextTick:n=>n.n||(n.n=r_.bind(n.proxy)),$watch:n=>W_.bind(n)}),Jo=(n,e)=>n!==ft&&!n.__isScriptSetup&&ot(n,e),M_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Jo(i,e))return a[e]=1,i[e];if(r!==ft&&ot(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&ot(c,e))return a[e]=3,s[e];if(t!==ft&&ot(t,e))return a[e]=4,t[e];oc&&(a[e]=0)}}const u=Ts[e];let f,d;if(u)return e==="$attrs"&&Ut(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==ft&&ot(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ot(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Jo(r,e)?(r[e]=t,!0):i!==ft&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==ft&&ot(n,a)||Jo(e,a)||(o=s[0])&&ot(o,a)||ot(i,a)||ot(Ts,a)||ot(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Af(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let oc=!0;function E_(n){const e=Dp(n),t=n.proxy,i=n.ctx;oc=!1,e.beforeCreate&&Cf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:m,activated:v,deactivated:g,beforeDestroy:h,beforeUnmount:M,destroyed:y,unmounted:S,render:A,renderTracked:I,renderTriggered:R,errorCaptured:D,serverPrefetch:w,expose:b,inheritAttrs:C,components:z,directives:H,filters:J}=e;if(c&&T_(c,i,null),a)for(const j in a){const O=a[j];je(O)&&(i[j]=O.bind(t))}if(r){const j=r.call(t,t);vt(j)&&(n.data=Fr(j))}if(oc=!0,s)for(const j in s){const O=s[j],le=je(O)?O.bind(t,t):je(O.get)?O.get.bind(t,t):Gn,ve=!je(O)&&je(O.set)?O.set.bind(t):Gn,be=Yi({get:le,set:ve});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>be.value,set:Le=>be.value=Le})}if(o)for(const j in o)Ip(o[j],i,t,j);if(l){const j=je(l)?l.call(t):l;Reflect.ownKeys(j).forEach(O=>{I_(O,j[O])})}u&&Cf(u,n,"c");function F(j,O){Ge(O)?O.forEach(le=>j(le.bind(t))):O&&j(O.bind(t))}if(F(h_,f),F(To,d),F(p_,p),F(m_,m),F(u_,v),F(f_,g),F(x_,D),F(__,I),F(v_,R),F(Fu,M),F(Pp,S),F(g_,w),Ge(b))if(b.length){const j=n.exposed||(n.exposed={});b.forEach(O=>{Object.defineProperty(j,O,{get:()=>t[O],set:le=>t[O]=le,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===Gn&&(n.render=A),C!=null&&(n.inheritAttrs=C),z&&(n.components=z),H&&(n.directives=H),w&&Ap(n)}function T_(n,e,t=Gn){Ge(n)&&(n=lc(n));for(const i in n){const r=n[i];let s;vt(r)?"default"in r?s=La(r.from||i,r.default,!0):s=La(r.from||i):s=La(r),Ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Cf(n,e,t){Xn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ip(n,e,t,i){let r=i.includes(".")?Xp(t,i):()=>t[i];if(Tt(n)){const s=e[n];je(s)&&sr(r,s)}else if(je(n))sr(r,n.bind(t));else if(vt(n))if(Ge(n))n.forEach(s=>Ip(s,e,t,i));else{const s=je(n.handler)?n.handler.bind(t):e[n.handler];je(s)&&sr(r,s,n)}}function Dp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>to(l,c,a,!0)),to(l,e,a)),vt(e)&&s.set(e,l),l}function to(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&to(n,s,t,!0),r&&r.forEach(a=>to(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=w_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const w_={data:Rf,props:Pf,emits:Pf,methods:gs,computed:gs,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:gs,directives:gs,watch:C_,provide:Rf,inject:A_};function Rf(n,e){return e?n?function(){return Bt(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function A_(n,e){return gs(lc(n),lc(e))}function lc(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ht(n,e){return n?[...new Set([].concat(n,e))]:e}function gs(n,e){return n?Bt(Object.create(null),n,e):e}function Pf(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:Bt(Object.create(null),Af(n),Af(e??{})):e}function C_(n,e){if(!n)return e;if(!e)return n;const t=Bt(Object.create(null),n);for(const i in e)t[i]=Ht(n[i],e[i]);return t}function Lp(){return{app:null,config:{isNativeTag:vv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R_=0;function P_(n,e){return function(i,r=null){je(i)||(i=Bt({},i)),r!=null&&!vt(r)&&(r=null);const s=Lp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:R_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:g0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&je(u.install)?(a.add(u),u.install(c,...f)):je(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||pt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Co(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Xn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Hr;Hr=c;try{return u()}finally{Hr=f}}};return c}}let Hr=null;function I_(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function La(n,e,t=!1){const i=l0();if(i||Hr){let r=Hr?Hr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Up={},Op=()=>Object.create(Up),Np=n=>Object.getPrototypeOf(n)===Up;function D_(n,e,t,i=!1){const r={},s=Op();n.propsDefaults=Object.create(null),Fp(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:qv(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function L_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=at(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(wo(n.emitsOptions,d))continue;const p=e[d];if(l)if(ot(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const m=yn(d);r[m]=cc(l,o,m,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Fp(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ot(e,f)&&((u=fr(f))===f||!ot(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=cc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ot(e,f))&&(delete s[f],c=!0)}c&&ii(n.attrs,"set","")}function Fp(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(xs(l))continue;const c=e[l];let u;r&&ot(r,u=yn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:wo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=at(t),c=o||ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=cc(r,l,f,c[f],n,!ot(c,f))}}return a}function cc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ot(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Hs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===fr(t))&&(i=!0))}return i}const U_=new WeakMap;function Bp(n,e,t=!1){const i=t?U_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!je(n)){const u=f=>{l=!0;const[d,p]=Bp(f,e,!0);Bt(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return vt(n)&&i.set(n,Or),Or;if(Ge(s))for(let u=0;u<s.length;u++){const f=yn(s[u]);If(f)&&(a[f]=ft)}else if(s)for(const u in s){const f=yn(u);if(If(f)){const d=s[u],p=a[f]=Ge(d)||je(d)?{type:d}:Bt({},d),m=p.type;let v=!1,g=!0;if(Ge(m))for(let h=0;h<m.length;++h){const M=m[h],y=je(M)&&M.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(g=!1)}else v=je(m)&&m.name==="Boolean";p[0]=v,p[1]=g,(v||ot(p,"default"))&&o.push(f)}}const c=[a,o];return vt(n)&&i.set(n,c),c}function If(n){return n[0]!=="$"&&!xs(n)}const Bu=n=>n==="_"||n==="__"||n==="_ctx"||n==="$stable",zu=n=>Ge(n)?n.map(Bn):[Bn(n)],O_=(n,e,t)=>{if(e._n)return e;const i=o_((...r)=>zu(e(...r)),t);return i._c=!1,i},zp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Bu(r))continue;const s=n[r];if(je(s))e[r]=O_(r,s,i);else if(s!=null){const a=zu(s);e[r]=()=>a}}},kp=(n,e)=>{const t=zu(e);n.slots.default=()=>t},Hp=(n,e,t)=>{for(const i in e)(t||!Bu(i))&&(n[i]=e[i])},N_=(n,e,t)=>{const i=n.slots=Op();if(n.vnode.shapeFlag&32){const r=e.__;r&&Ql(i,"__",r,!0);const s=e._;s?(Hp(i,e,t),t&&Ql(i,"_",s,!0)):zp(e,i)}else e&&kp(n,e)},F_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=ft;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Hp(r,e,t):(s=!e.$stable,zp(e,r)),a=e}else e&&(kp(n,e),a={default:1});if(s)for(const o in r)!Bu(o)&&a[o]==null&&delete r[o]},an=Z_;function B_(n){return z_(n)}function z_(n,e){const t=yo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Gn,insertStaticContent:m}=n,v=(P,x,V,$=null,Q=null,W=null,ae=void 0,K=null,ne=!!x.dynamicChildren)=>{if(P===x)return;P&&!cs(P,x)&&($=pe(P),Le(P,Q,W,!0),P=null),x.patchFlag===-2&&(ne=!1,x.dynamicChildren=null);const{type:re,ref:xe,shapeFlag:E}=x;switch(re){case Ao:g(P,x,V,$);break;case jr:h(P,x,V,$);break;case Ua:P==null&&M(x,V,$,ae);break;case ln:z(P,x,V,$,Q,W,ae,K,ne);break;default:E&1?A(P,x,V,$,Q,W,ae,K,ne):E&6?H(P,x,V,$,Q,W,ae,K,ne):(E&64||E&128)&&re.process(P,x,V,$,Q,W,ae,K,ne,ze)}xe!=null&&Q?Ms(xe,P&&P.ref,W,x||P,!x):xe==null&&P&&P.ref!=null&&Ms(P.ref,null,W,P,!0)},g=(P,x,V,$)=>{if(P==null)i(x.el=o(x.children),V,$);else{const Q=x.el=P.el;x.children!==P.children&&c(Q,x.children)}},h=(P,x,V,$)=>{P==null?i(x.el=l(x.children||""),V,$):x.el=P.el},M=(P,x,V,$)=>{[P.el,P.anchor]=m(P.children,x,V,$,P.el,P.anchor)},y=({el:P,anchor:x},V,$)=>{let Q;for(;P&&P!==x;)Q=d(P),i(P,V,$),P=Q;i(x,V,$)},S=({el:P,anchor:x})=>{let V;for(;P&&P!==x;)V=d(P),r(P),P=V;r(x)},A=(P,x,V,$,Q,W,ae,K,ne)=>{x.type==="svg"?ae="svg":x.type==="math"&&(ae="mathml"),P==null?I(x,V,$,Q,W,ae,K,ne):w(P,x,Q,W,ae,K,ne)},I=(P,x,V,$,Q,W,ae,K)=>{let ne,re;const{props:xe,shapeFlag:E,transition:_,dirs:L}=P;if(ne=P.el=a(P.type,W,xe&&xe.is,xe),E&8?u(ne,P.children):E&16&&D(P.children,ne,null,$,Q,Qo(P,W),ae,K),L&&ki(P,null,$,"created"),R(ne,P,P.scopeId,ae,$),xe){for(const ee in xe)ee!=="value"&&!xs(ee)&&s(ne,ee,null,xe[ee],W,$);"value"in xe&&s(ne,"value",null,xe.value,W),(re=xe.onVnodeBeforeMount)&&On(re,$,P)}L&&ki(P,null,$,"beforeMount");const k=k_(Q,_);k&&_.beforeEnter(ne),i(ne,x,V),((re=xe&&xe.onVnodeMounted)||k||L)&&an(()=>{re&&On(re,$,P),k&&_.enter(ne),L&&ki(P,null,$,"mounted")},Q)},R=(P,x,V,$,Q)=>{if(V&&p(P,V),$)for(let W=0;W<$.length;W++)p(P,$[W]);if(Q){let W=Q.subTree;if(x===W||$p(W.type)&&(W.ssContent===x||W.ssFallback===x)){const ae=Q.vnode;R(P,ae,ae.scopeId,ae.slotScopeIds,Q.parent)}}},D=(P,x,V,$,Q,W,ae,K,ne=0)=>{for(let re=ne;re<P.length;re++){const xe=P[re]=K?Ai(P[re]):Bn(P[re]);v(null,xe,x,V,$,Q,W,ae,K)}},w=(P,x,V,$,Q,W,ae)=>{const K=x.el=P.el;let{patchFlag:ne,dynamicChildren:re,dirs:xe}=x;ne|=P.patchFlag&16;const E=P.props||ft,_=x.props||ft;let L;if(V&&Hi(V,!1),(L=_.onVnodeBeforeUpdate)&&On(L,V,x,P),xe&&ki(x,P,V,"beforeUpdate"),V&&Hi(V,!0),(E.innerHTML&&_.innerHTML==null||E.textContent&&_.textContent==null)&&u(K,""),re?b(P.dynamicChildren,re,K,V,$,Qo(x,Q),W):ae||O(P,x,K,null,V,$,Qo(x,Q),W,!1),ne>0){if(ne&16)C(K,E,_,V,Q);else if(ne&2&&E.class!==_.class&&s(K,"class",null,_.class,Q),ne&4&&s(K,"style",E.style,_.style,Q),ne&8){const k=x.dynamicProps;for(let ee=0;ee<k.length;ee++){const G=k[ee],Ee=E[G],oe=_[G];(oe!==Ee||G==="value")&&s(K,G,Ee,oe,Q,V)}}ne&1&&P.children!==x.children&&u(K,x.children)}else!ae&&re==null&&C(K,E,_,V,Q);((L=_.onVnodeUpdated)||xe)&&an(()=>{L&&On(L,V,x,P),xe&&ki(x,P,V,"updated")},$)},b=(P,x,V,$,Q,W,ae)=>{for(let K=0;K<x.length;K++){const ne=P[K],re=x[K],xe=ne.el&&(ne.type===ln||!cs(ne,re)||ne.shapeFlag&198)?f(ne.el):V;v(ne,re,xe,null,$,Q,W,ae,!0)}},C=(P,x,V,$,Q)=>{if(x!==V){if(x!==ft)for(const W in x)!xs(W)&&!(W in V)&&s(P,W,x[W],null,Q,$);for(const W in V){if(xs(W))continue;const ae=V[W],K=x[W];ae!==K&&W!=="value"&&s(P,W,K,ae,Q,$)}"value"in V&&s(P,"value",x.value,V.value,Q)}},z=(P,x,V,$,Q,W,ae,K,ne)=>{const re=x.el=P?P.el:o(""),xe=x.anchor=P?P.anchor:o("");let{patchFlag:E,dynamicChildren:_,slotScopeIds:L}=x;L&&(K=K?K.concat(L):L),P==null?(i(re,V,$),i(xe,V,$),D(x.children||[],V,xe,Q,W,ae,K,ne)):E>0&&E&64&&_&&P.dynamicChildren?(b(P.dynamicChildren,_,V,Q,W,ae,K),(x.key!=null||Q&&x===Q.subTree)&&Vp(P,x,!0)):O(P,x,V,xe,Q,W,ae,K,ne)},H=(P,x,V,$,Q,W,ae,K,ne)=>{x.slotScopeIds=K,P==null?x.shapeFlag&512?Q.ctx.activate(x,V,$,ae,ne):J(x,V,$,Q,W,ae,ne):ie(P,x,ne)},J=(P,x,V,$,Q,W,ae)=>{const K=P.component=o0(P,$,Q);if(Cp(P)&&(K.ctx.renderer=ze),c0(K,!1,ae),K.asyncDep){if(Q&&Q.registerDep(K,F,ae),!P.el){const ne=K.subTree=pt(jr);h(null,ne,x,V),P.placeholder=ne.el}}else F(K,P,x,V,Q,W,ae)},ie=(P,x,V)=>{const $=x.component=P.component;if(Y_(P,x,V))if($.asyncDep&&!$.asyncResolved){j($,x,V);return}else $.next=x,$.update();else x.el=P.el,$.vnode=x},F=(P,x,V,$,Q,W,ae)=>{const K=()=>{if(P.isMounted){let{next:E,bu:_,u:L,parent:k,vnode:ee}=P;{const we=Gp(P);if(we){E&&(E.el=ee.el,j(P,E,ae)),we.asyncDep.then(()=>{P.isUnmounted||K()});return}}let G=E,Ee;Hi(P,!1),E?(E.el=ee.el,j(P,E,ae)):E=ee,_&&Da(_),(Ee=E.props&&E.props.onVnodeBeforeUpdate)&&On(Ee,k,E,ee),Hi(P,!0);const oe=Lf(P),Te=P.subTree;P.subTree=oe,v(Te,oe,f(Te.el),pe(Te),P,Q,W),E.el=oe.el,G===null&&K_(P,oe.el),L&&an(L,Q),(Ee=E.props&&E.props.onVnodeUpdated)&&an(()=>On(Ee,k,E,ee),Q)}else{let E;const{el:_,props:L}=x,{bm:k,m:ee,parent:G,root:Ee,type:oe}=P,Te=Es(x);Hi(P,!1),k&&Da(k),!Te&&(E=L&&L.onVnodeBeforeMount)&&On(E,G,x),Hi(P,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(oe);const we=P.subTree=Lf(P);v(null,we,V,$,P,Q,W),x.el=we.el}if(ee&&an(ee,Q),!Te&&(E=L&&L.onVnodeMounted)){const we=x;an(()=>On(E,G,we),Q)}(x.shapeFlag&256||G&&Es(G.vnode)&&G.vnode.shapeFlag&256)&&P.a&&an(P.a,Q),P.isMounted=!0,x=V=$=null}};P.scope.on();const ne=P.effect=new sp(K);P.scope.off();const re=P.update=ne.run.bind(ne),xe=P.job=ne.runIfDirty.bind(ne);xe.i=P,xe.id=P.uid,ne.scheduler=()=>Uu(xe),Hi(P,!0),re()},j=(P,x,V)=>{x.component=P;const $=P.vnode.props;P.vnode=x,P.next=null,L_(P,x.props,$,V),F_(P,x.children,V),di(),Tf(P),hi()},O=(P,x,V,$,Q,W,ae,K,ne=!1)=>{const re=P&&P.children,xe=P?P.shapeFlag:0,E=x.children,{patchFlag:_,shapeFlag:L}=x;if(_>0){if(_&128){ve(re,E,V,$,Q,W,ae,K,ne);return}else if(_&256){le(re,E,V,$,Q,W,ae,K,ne);return}}L&8?(xe&16&&me(re,Q,W),E!==re&&u(V,E)):xe&16?L&16?ve(re,E,V,$,Q,W,ae,K,ne):me(re,Q,W,!0):(xe&8&&u(V,""),L&16&&D(E,V,$,Q,W,ae,K,ne))},le=(P,x,V,$,Q,W,ae,K,ne)=>{P=P||Or,x=x||Or;const re=P.length,xe=x.length,E=Math.min(re,xe);let _;for(_=0;_<E;_++){const L=x[_]=ne?Ai(x[_]):Bn(x[_]);v(P[_],L,V,null,Q,W,ae,K,ne)}re>xe?me(P,Q,W,!0,!1,E):D(x,V,$,Q,W,ae,K,ne,E)},ve=(P,x,V,$,Q,W,ae,K,ne)=>{let re=0;const xe=x.length;let E=P.length-1,_=xe-1;for(;re<=E&&re<=_;){const L=P[re],k=x[re]=ne?Ai(x[re]):Bn(x[re]);if(cs(L,k))v(L,k,V,null,Q,W,ae,K,ne);else break;re++}for(;re<=E&&re<=_;){const L=P[E],k=x[_]=ne?Ai(x[_]):Bn(x[_]);if(cs(L,k))v(L,k,V,null,Q,W,ae,K,ne);else break;E--,_--}if(re>E){if(re<=_){const L=_+1,k=L<xe?x[L].el:$;for(;re<=_;)v(null,x[re]=ne?Ai(x[re]):Bn(x[re]),V,k,Q,W,ae,K,ne),re++}}else if(re>_)for(;re<=E;)Le(P[re],Q,W,!0),re++;else{const L=re,k=re,ee=new Map;for(re=k;re<=_;re++){const Pe=x[re]=ne?Ai(x[re]):Bn(x[re]);Pe.key!=null&&ee.set(Pe.key,re)}let G,Ee=0;const oe=_-k+1;let Te=!1,we=0;const ce=new Array(oe);for(re=0;re<oe;re++)ce[re]=0;for(re=L;re<=E;re++){const Pe=P[re];if(Ee>=oe){Le(Pe,Q,W,!0);continue}let Ae;if(Pe.key!=null)Ae=ee.get(Pe.key);else for(G=k;G<=_;G++)if(ce[G-k]===0&&cs(Pe,x[G])){Ae=G;break}Ae===void 0?Le(Pe,Q,W,!0):(ce[Ae-k]=re+1,Ae>=we?we=Ae:Te=!0,v(Pe,x[Ae],V,null,Q,W,ae,K,ne),Ee++)}const ye=Te?H_(ce):Or;for(G=ye.length-1,re=oe-1;re>=0;re--){const Pe=k+re,Ae=x[Pe],_e=x[Pe+1],We=Pe+1<xe?_e.el||_e.placeholder:$;ce[re]===0?v(null,Ae,V,We,Q,W,ae,K,ne):Te&&(G<0||re!==ye[G]?be(Ae,V,We,2):G--)}}},be=(P,x,V,$,Q=null)=>{const{el:W,type:ae,transition:K,children:ne,shapeFlag:re}=P;if(re&6){be(P.component.subTree,x,V,$);return}if(re&128){P.suspense.move(x,V,$);return}if(re&64){ae.move(P,x,V,ze);return}if(ae===ln){i(W,x,V);for(let E=0;E<ne.length;E++)be(ne[E],x,V,$);i(P.anchor,x,V);return}if(ae===Ua){y(P,x,V);return}if($!==2&&re&1&&K)if($===0)K.beforeEnter(W),i(W,x,V),an(()=>K.enter(W),Q);else{const{leave:E,delayLeave:_,afterLeave:L}=K,k=()=>{P.ctx.isUnmounted?r(W):i(W,x,V)},ee=()=>{E(W,()=>{k(),L&&L()})};_?_(W,k,ee):ee()}else i(W,x,V)},Le=(P,x,V,$=!1,Q=!1)=>{const{type:W,props:ae,ref:K,children:ne,dynamicChildren:re,shapeFlag:xe,patchFlag:E,dirs:_,cacheIndex:L}=P;if(E===-2&&(Q=!1),K!=null&&(di(),Ms(K,null,V,P,!0),hi()),L!=null&&(x.renderCache[L]=void 0),xe&256){x.ctx.deactivate(P);return}const k=xe&1&&_,ee=!Es(P);let G;if(ee&&(G=ae&&ae.onVnodeBeforeUnmount)&&On(G,x,P),xe&6)te(P.component,V,$);else{if(xe&128){P.suspense.unmount(V,$);return}k&&ki(P,null,x,"beforeUnmount"),xe&64?P.type.remove(P,x,V,ze,$):re&&!re.hasOnce&&(W!==ln||E>0&&E&64)?me(re,x,V,!1,!0):(W===ln&&E&384||!Q&&xe&16)&&me(ne,x,V),$&&rt(P)}(ee&&(G=ae&&ae.onVnodeUnmounted)||k)&&an(()=>{G&&On(G,x,P),k&&ki(P,null,x,"unmounted")},V)},rt=P=>{const{type:x,el:V,anchor:$,transition:Q}=P;if(x===ln){et(V,$);return}if(x===Ua){S(P);return}const W=()=>{r(V),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(P.shapeFlag&1&&Q&&!Q.persisted){const{leave:ae,delayLeave:K}=Q,ne=()=>ae(V,W);K?K(P.el,W,ne):ne()}else W()},et=(P,x)=>{let V;for(;P!==x;)V=d(P),r(P),P=V;r(x)},te=(P,x,V)=>{const{bum:$,scope:Q,job:W,subTree:ae,um:K,m:ne,a:re,parent:xe,slots:{__:E}}=P;Df(ne),Df(re),$&&Da($),xe&&Ge(E)&&E.forEach(_=>{xe.renderCache[_]=void 0}),Q.stop(),W&&(W.flags|=8,Le(ae,P,x,V)),K&&an(K,x),an(()=>{P.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},me=(P,x,V,$=!1,Q=!1,W=0)=>{for(let ae=W;ae<P.length;ae++)Le(P[ae],x,V,$,Q)},pe=P=>{if(P.shapeFlag&6)return pe(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const x=d(P.anchor||P.el),V=x&&x[l_];return V?d(V):x};let Oe=!1;const Fe=(P,x,V)=>{P==null?x._vnode&&Le(x._vnode,null,null,!0):v(x._vnode||null,P,x,null,null,null,V),x._vnode=P,Oe||(Oe=!0,Tf(),Ep(),Oe=!1)},ze={p:v,um:Le,m:be,r:rt,mt:J,mc:D,pc:O,pbc:b,n:pe,o:n};return{render:Fe,hydrate:void 0,createApp:P_(Fe)}}function Qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Hi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function k_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Vp(n,e,t=!1){const i=n.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ai(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Vp(a,o)),o.type===Ao&&(o.el=a.el),o.type===jr&&!o.el&&(o.el=a.el)}}function H_(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Gp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gp(e)}function Df(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const V_=Symbol.for("v-scx"),G_=()=>La(V_);function sr(n,e,t){return Wp(n,e,t)}function Wp(n,e,t=ft){const{immediate:i,deep:r,flush:s,once:a}=t,o=Bt({},t),l=e&&i||!e&&s!=="post";let c;if(Us){if(s==="sync"){const p=G_();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Gn,p.resume=Gn,p.pause=Gn,p}}const u=Ot;o.call=(p,m,v)=>Xn(p,u,m,v);let f=!1;s==="post"?o.scheduler=p=>{an(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,m)=>{m?p():Uu(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=n_(n,e,o);return Us&&(c?c.push(d):l&&d()),d}function W_(n,e,t){const i=this.proxy,r=Tt(n)?n.includes(".")?Xp(i,n):()=>i[n]:n.bind(i,i);let s;je(e)?s=e:(s=e.handler,t=e);const a=Hs(this),o=Wp(r,s.bind(i),t);return a(),o}function Xp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const X_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yn(e)}Modifiers`]||n[`${fr(e)}Modifiers`];function j_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),a=s&&X_(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Tt(u)?u.trim():u)),a.number&&(r=t.map(ec)));let o,l=i[o=jo(e)]||i[o=jo(yn(e))];!l&&s&&(l=i[o=jo(fr(e))]),l&&Xn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Xn(c,n,6,r)}}function jp(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!je(n)){const l=c=>{const u=jp(c,e,!0);u&&(o=!0,Bt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(vt(n)&&i.set(n,null),null):(Ge(s)?s.forEach(l=>a[l]=null):Bt(a,s),vt(n)&&i.set(n,a),a)}function wo(n,e){return!n||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,fr(e))||ot(n,e))}function Lf(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:m,inheritAttrs:v}=n,g=eo(n);let h,M;try{if(t.shapeFlag&4){const S=r||i,A=S;h=Bn(c.call(A,S,u,f,p,d,m)),M=o}else{const S=e;h=Bn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),M=e.props?o:$_(o)}}catch(S){ws.length=0,Mo(S,n,1),h=pt(jr)}let y=h;if(M&&v!==!1){const S=Object.keys(M),{shapeFlag:A}=y;S.length&&A&7&&(s&&S.some(bu)&&(M=q_(M,s)),y=$r(y,M,!1,!0))}return t.dirs&&(y=$r(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Ou(y,t.transition),h=y,eo(g),h}const $_=n=>{let e;for(const t in n)(t==="class"||t==="style"||vo(t))&&((e||(e={}))[t]=n[t]);return e},q_=(n,e)=>{const t={};for(const i in n)(!bu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Y_(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!wo(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Uf(i,a,c):!0:!!a;return!1}function Uf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!wo(t,s))return!0}return!1}function K_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $p=n=>n.__isSuspense;function Z_(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):a_(n)}const ln=Symbol.for("v-fgt"),Ao=Symbol.for("v-txt"),jr=Symbol.for("v-cmt"),Ua=Symbol.for("v-stc"),ws=[];let un=null;function Yt(n=!1){ws.push(un=n?null:[])}function J_(){ws.pop(),un=ws[ws.length-1]||null}let Ls=1;function Of(n,e=!1){Ls+=n,n<0&&un&&e&&(un.hasOnce=!0)}function Q_(n){return n.dynamicChildren=Ls>0?un||Or:null,J_(),Ls>0&&un&&un.push(n),n}function Kt(n,e,t,i,r,s){return Q_(tt(n,e,t,i,r,s,!0))}function no(n){return n?n.__v_isVNode===!0:!1}function cs(n,e){return n.type===e.type&&n.key===e.key}const qp=({key:n})=>n??null,Oa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||Ft(n)||je(n)?{i:cn,r:n,k:e,f:!!t}:n:null);function tt(n,e=null,t=null,i=0,r=null,s=n===ln?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qp(e),ref:e&&Oa(e),scopeId:wp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return o?(ku(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),Ls>0&&!a&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const pt=e0;function e0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===y_)&&(n=jr),no(n)){const o=$r(n,e,!0);return t&&ku(o,t),Ls>0&&!s&&un&&(o.shapeFlag&6?un[un.indexOf(n)]=o:un.push(o)),o.patchFlag=-2,o}if(p0(n)&&(n=n.__vccOpts),e){e=t0(e);let{class:o,style:l}=e;o&&!Tt(o)&&(e.class=wu(o)),vt(l)&&(Lu(l)&&!Ge(l)&&(l=Bt({},l)),e.style=Tu(l))}const a=Tt(n)?1:$p(n)?128:c_(n)?64:vt(n)?4:je(n)?2:0;return tt(n,e,t,i,r,a,s,!0)}function t0(n){return n?Lu(n)||Np(n)?Bt({},n):n:null}function $r(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?r0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&qp(c),ref:e&&e.ref?t&&s?Ge(s)?s.concat(Oa(e)):[s,Oa(e)]:Oa(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ln?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$r(n.ssContent),ssFallback:n.ssFallback&&$r(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ou(u,l.clone(u)),u}function n0(n=" ",e=0){return pt(Ao,null,n,e)}function i0(n,e){const t=pt(Ua,null,n);return t.staticCount=e,t}function Bn(n){return n==null||typeof n=="boolean"?pt(jr):Ge(n)?pt(ln,null,n.slice()):no(n)?Ai(n):pt(Ao,null,String(n))}function Ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$r(n)}function ku(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ku(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Np(e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[n0(e)]):t=8);n.children=e,n.shapeFlag|=t}function r0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=wu([e.class,i.class]));else if(r==="style")e.style=Tu([e.style,i.style]);else if(vo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ge(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function On(n,e,t,i=null){Xn(n,e,7,[t,i])}const s0=Lp();let a0=0;function o0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||s0,s={uid:a0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(i,r),emitsOptions:jp(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=j_.bind(null,s),n.ce&&n.ce(s),s}let Ot=null;const l0=()=>Ot||cn;let io,uc;{const n=yo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};io=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),uc=e("__VUE_SSR_SETTERS__",t=>Us=t)}const Hs=n=>{const e=Ot;return io(n),n.scope.on(),()=>{n.scope.off(),io(e)}},Nf=()=>{Ot&&Ot.scope.off(),io(null)};function Yp(n){return n.vnode.shapeFlag&4}let Us=!1;function c0(n,e=!1,t=!1){e&&uc(e);const{props:i,children:r}=n.vnode,s=Yp(n);D_(n,i,s,e),N_(n,r,t||e);const a=s?u0(n,e):void 0;return e&&uc(!1),a}function u0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,M_);const{setup:i}=t;if(i){di();const r=n.setupContext=i.length>1?d0(n):null,s=Hs(n),a=ks(i,n,0,[n.props,r]),o=Qh(a);if(hi(),s(),(o||n.sp)&&!Es(n)&&Ap(n),o){if(a.then(Nf,Nf),e)return a.then(l=>{Ff(n,l)}).catch(l=>{Mo(l,n,0)});n.asyncDep=a}else Ff(n,a)}else Kp(n)}function Ff(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=yp(e)),Kp(n)}function Kp(n,e,t){const i=n.type;n.render||(n.render=i.render||Gn);{const r=Hs(n);di();try{E_(n)}finally{hi(),r()}}}const f0={get(n,e){return Ut(n,"get",""),n[e]}};function d0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,f0),slots:n.slots,emit:n.emit,expose:e}}function Co(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yp(Yv(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ts)return Ts[t](n)},has(e,t){return t in e||t in Ts}})):n.proxy}function h0(n,e=!0){return je(n)?n.displayName||n.name:n.name||e&&n.__name}function p0(n){return je(n)&&"__vccOpts"in n}const Yi=(n,e)=>e_(n,e,Us);function m0(n,e,t){const i=arguments.length;return i===2?vt(e)&&!Ge(e)?no(e)?pt(n,null,[e]):pt(n,e):pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&no(t)&&(t=[t]),pt(n,e,t))}const g0="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fc;const Bf=typeof window<"u"&&window.trustedTypes;if(Bf)try{fc=Bf.createPolicy("vue",{createHTML:n=>n})}catch{}const Zp=fc?n=>fc.createHTML(n):n=>n,v0="http://www.w3.org/2000/svg",_0="http://www.w3.org/1998/Math/MathML",ti=typeof document<"u"?document:null,zf=ti&&ti.createElement("template"),x0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ti.createElementNS(v0,n):e==="mathml"?ti.createElementNS(_0,n):t?ti.createElement(n,{is:t}):ti.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ti.createTextNode(n),createComment:n=>ti.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ti.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{zf.innerHTML=Zp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=zf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},S0=Symbol("_vtc");function y0(n,e,t){const i=n[S0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const kf=Symbol("_vod"),b0=Symbol("_vsh"),M0=Symbol(""),E0=/(^|;)\s*display\s*:/;function T0(n,e,t){const i=n.style,r=Tt(t);let s=!1;if(t&&!r){if(e)if(Tt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Na(i,o,"")}else for(const a in e)t[a]==null&&Na(i,a,"");for(const a in t)a==="display"&&(s=!0),Na(i,a,t[a])}else if(r){if(e!==t){const a=i[M0];a&&(t+=";"+a),i.cssText=t,s=E0.test(t)}}else e&&n.removeAttribute("style");kf in n&&(n[kf]=s?i.display:"",n[b0]&&(i.display="none"))}const Hf=/\s*!important$/;function Na(n,e,t){if(Ge(t))t.forEach(i=>Na(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=w0(n,e);Hf.test(t)?n.setProperty(fr(i),t.replace(Hf,""),"important"):n[i]=t}}const Vf=["Webkit","Moz","ms"],el={};function w0(n,e){const t=el[e];if(t)return t;let i=yn(e);if(i!=="filter"&&i in n)return el[e]=i;i=So(i);for(let r=0;r<Vf.length;r++){const s=Vf[r]+i;if(s in n)return el[e]=s}return e}const Gf="http://www.w3.org/1999/xlink";function Wf(n,e,t,i,r,s=Av(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gf,e.slice(6,e.length)):n.setAttributeNS(Gf,e,t):t==null||s&&!np(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Fi(t)?String(t):t)}function Xf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=np(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Dr(n,e,t,i){n.addEventListener(e,t,i)}function A0(n,e,t,i){n.removeEventListener(e,t,i)}const jf=Symbol("_vei");function C0(n,e,t,i,r=null){const s=n[jf]||(n[jf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=R0(e);if(i){const c=s[e]=D0(i,r);Dr(n,o,c,l)}else a&&(A0(n,o,a,l),s[e]=void 0)}}const $f=/(?:Once|Passive|Capture)$/;function R0(n){let e;if($f.test(n)){e={};let i;for(;i=n.match($f);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fr(n.slice(2)),e]}let tl=0;const P0=Promise.resolve(),I0=()=>tl||(P0.then(()=>tl=0),tl=Date.now());function D0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Xn(L0(i,t.value),e,5,[i])};return t.value=n,t.attached=I0(),t}function L0(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const qf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,U0=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?y0(n,i,a):e==="style"?T0(n,t,i):vo(e)?bu(e)||C0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O0(n,e,i,a))?(Xf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wf(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Tt(i))?Xf(n,yn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wf(n,e,i,a))};function O0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qf(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return qf(e)&&Tt(t)?!1:e in n}const Yf=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ge(e)?t=>Da(e,t):e};function N0(n){n.target.composing=!0}function Kf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nl=Symbol("_assign"),il={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[nl]=Yf(r);const s=i||r.props&&r.props.type==="number";Dr(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),s&&(o=ec(o)),n[nl](o)}),t&&Dr(n,"change",()=>{n.value=n.value.trim()}),e||(Dr(n,"compositionstart",N0),Dr(n,"compositionend",Kf),Dr(n,"change",Kf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[nl]=Yf(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?ec(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},F0=["ctrl","shift","alt","meta"],B0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>F0.some(t=>n[`${t}Key`]&&!e.includes(t))},z0=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=B0[e[a]];if(o&&o(r,e))return}return n(r,...s)})},k0=Bt({patchProp:U0},x0);let Zf;function H0(){return Zf||(Zf=B_(k0))}const V0=(...n)=>{const e=H0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=W0(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,G0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function G0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function W0(n){return Tt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="179",X0=0,Jf=1,j0=2,Jp=1,$0=2,ei=3,Li=0,Zt=1,si=2,ci=0,Vr=1,dc=2,Qf=3,ed=4,q0=5,Ji=100,Y0=101,K0=102,Z0=103,J0=104,Q0=200,ex=201,tx=202,nx=203,hc=204,pc=205,ix=206,rx=207,sx=208,ax=209,ox=210,lx=211,cx=212,ux=213,fx=214,mc=0,gc=1,vc=2,qr=3,_c=4,xc=5,Sc=6,yc=7,Qp=0,dx=1,hx=2,Ii=0,px=1,mx=2,gx=3,vx=4,_x=5,xx=6,Sx=7,em=300,Yr=301,Kr=302,bc=303,Mc=304,Ro=306,Ec=1e3,er=1001,Tc=1002,Pn=1003,yx=1004,sa=1005,kn=1006,rl=1007,tr=1008,pi=1009,tm=1010,nm=1011,Os=1012,Vu=1013,or=1014,oi=1015,ui=1016,Gu=1017,Wu=1018,Ns=1020,im=35902,rm=1021,sm=1022,wn=1023,Fs=1026,Bs=1027,am=1028,Xu=1029,om=1030,ju=1031,$u=1033,Fa=33776,Ba=33777,za=33778,ka=33779,wc=35840,Ac=35841,Cc=35842,Rc=35843,Pc=36196,Ic=37492,Dc=37496,Lc=37808,Uc=37809,Oc=37810,Nc=37811,Fc=37812,Bc=37813,zc=37814,kc=37815,Hc=37816,Vc=37817,Gc=37818,Wc=37819,Xc=37820,jc=37821,Ha=36492,$c=36494,qc=36495,lm=36283,Yc=36284,Kc=36285,Zc=36286,bx=3200,Mx=3201,Ex=0,Tx=1,Ci="",vn="srgb",Zr="srgb-linear",ro="linear",ct="srgb",gr=7680,td=519,wx=512,Ax=513,Cx=514,cm=515,Rx=516,Px=517,Ix=518,Dx=519,nd=35044,id="300 es",Hn=2e3,so=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,Jc=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Lx(n,e){return(n%e+e)%e}function al(n,e,t){return(1-t)*n+t*e}function us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==m){let g=1-o;const h=l*d+c*p+u*m+f*v,M=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const A=Math.sqrt(y),I=Math.atan2(A,h*M);g=Math.sin(g*I)/A,o=Math.sin(o*I)/A}const S=o*M;if(l=l*g+d*S,c=c*g+p*S,u=u*g+m*S,f=f*g+v*S,g===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+u*f+l*p-c*d,e[t+1]=l*m+u*d+c*f-o*p,e[t+2]=c*m+u*p+o*d-l*f,e[t+3]=u*m-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"YXZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"ZXY":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"ZYX":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"YZX":this._x=d*u*f+c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f-d*p*m;break;case"XZY":this._x=d*u*f-c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new X,rd=new Gs;class qe{constructor(e,t,i,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],m=i[8],v=r[0],g=r[3],h=r[6],M=r[1],y=r[4],S=r[7],A=r[2],I=r[5],R=r[8];return s[0]=a*v+o*M+l*A,s[3]=a*g+o*y+l*I,s[6]=a*h+o*S+l*R,s[1]=c*v+u*M+f*A,s[4]=c*g+u*y+f*I,s[7]=c*h+u*S+f*R,s[2]=d*v+p*M+m*A,s[5]=d*g+p*y+m*I,s[8]=d*h+p*S+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,m=t*f+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new qe;function um(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ux(){const n=ao("canvas");return n.style.display="block",n}const sd={};function Gr(n){n in sd||(sd[n]=!0,console.warn(n))}function Ox(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ad=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nx(){const n={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?ro:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zr]:{primaries:e,whitePoint:i,transfer:ro,toXYZ:ad,fromXYZ:od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:ad,fromXYZ:od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}const it=Nx();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vr;class Fx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vr===void 0&&(vr=ao("canvas")),vr.width=e.width,vr.height=e.height;const r=vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bx=0;class qu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cl(r[a].image)):s.push(cl(r[a]))}else s=cl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zx=0;const ul=new X;class Jt extends ns{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=er,r=er,s=kn,a=tr,o=wn,l=pi,c=Jt.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Vs(),this.name="",this.source=new qu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=em;Jt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],m=l[9],v=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(p+1)/2,A=(h+1)/2,I=(u+d)/4,R=(f+v)/4,D=(m+g)/4;return y>S&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=I/i,s=R/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=I/r,s=D/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=D/s),this.set(i,r,s,t),this}let M=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kx extends ns{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Jt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new qu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends kx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fm extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hx extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),oa.subVectors(this.max,fs),_r.subVectors(e.a,fs),xr.subVectors(e.b,fs),Sr.subVectors(e.c,fs),Si.subVectors(xr,_r),yi.subVectors(Sr,xr),Vi.subVectors(_r,Sr);let t=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-Vi.z,Vi.y,Si.z,0,-Si.x,yi.z,0,-yi.x,Vi.z,0,-Vi.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-Vi.y,Vi.x,0];return!fl(t,_r,xr,Sr,oa)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,_r,xr,Sr,oa))?!1:(la.crossVectors(Si,yi),t=[la.x,la.y,la.z],fl(t,_r,xr,Sr,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new X,new X,new X,new X,new X,new X,new X,new X],bn=new X,aa=new Ws,_r=new X,xr=new X,Sr=new X,Si=new X,yi=new X,Vi=new X,fs=new X,oa=new X,la=new X,Gi=new X;function fl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Gi.fromArray(n,s);const o=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Vx=new Ws,ds=new X,dl=new X;class Yu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(dl)),this.expandByPoint(ds.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new X,hl=new X,ca=new X,bi=new X,pl=new X,ua=new X,ml=new X;class Gx{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){hl.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(hl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=bi.dot(this.direction),l=-bi.dot(ca),c=bi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,m;if(u>0)if(f=a*l-o,d=a*o-l,m=s*u,f>=0)if(d>=-m)if(d<=m){const v=1/u;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hl).addScaledVector(ca,d),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){pl.subVectors(t,e),ua.subVectors(i,e),ml.crossVectors(pl,ua);let a=this.direction.dot(ml),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=o*this.direction.dot(ua.crossVectors(bi,ua));if(l<0)return null;const c=o*this.direction.dot(pl.cross(bi));if(c<0||l+c>a)return null;const u=-o*bi.dot(ml);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,a,o,l,c,u,f,d,p,m,v,g){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,p,m,v,g)}set(e,t,i,r,s,a,o,l,c,u,f,d,p,m,v,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=m,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,m=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,m=c*u,v=c*f;t[0]=d+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,m=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,m=o*u,v=o*f;t[0]=l*u,t[4]=m*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=m*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+m,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=p*f-m,t[2]=m*f-p,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wx,e,Xx)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Mi.crossVectors(i,rn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Mi.crossVectors(i,rn)),Mi.normalize(),fa.crossVectors(rn,Mi),r[0]=Mi.x,r[4]=fa.x,r[8]=rn.x,r[1]=Mi.y,r[5]=fa.y,r[9]=rn.y,r[2]=Mi.z,r[6]=fa.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],m=i[2],v=i[6],g=i[10],h=i[14],M=i[3],y=i[7],S=i[11],A=i[15],I=r[0],R=r[4],D=r[8],w=r[12],b=r[1],C=r[5],z=r[9],H=r[13],J=r[2],ie=r[6],F=r[10],j=r[14],O=r[3],le=r[7],ve=r[11],be=r[15];return s[0]=a*I+o*b+l*J+c*O,s[4]=a*R+o*C+l*ie+c*le,s[8]=a*D+o*z+l*F+c*ve,s[12]=a*w+o*H+l*j+c*be,s[1]=u*I+f*b+d*J+p*O,s[5]=u*R+f*C+d*ie+p*le,s[9]=u*D+f*z+d*F+p*ve,s[13]=u*w+f*H+d*j+p*be,s[2]=m*I+v*b+g*J+h*O,s[6]=m*R+v*C+g*ie+h*le,s[10]=m*D+v*z+g*F+h*ve,s[14]=m*w+v*H+g*j+h*be,s[3]=M*I+y*b+S*J+A*O,s[7]=M*R+y*C+S*ie+A*le,s[11]=M*D+y*z+S*F+A*ve,s[15]=M*w+y*H+S*j+A*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],m=e[3],v=e[7],g=e[11],h=e[15];return m*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+v*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+g*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],m=e[12],v=e[13],g=e[14],h=e[15],M=f*g*c-v*d*c+v*l*p-o*g*p-f*l*h+o*d*h,y=m*d*c-u*g*c-m*l*p+a*g*p+u*l*h-a*d*h,S=u*v*c-m*f*c+m*o*p-a*v*p-u*o*h+a*f*h,A=m*f*l-u*v*l-m*o*d+a*v*d+u*o*g-a*f*g,I=t*M+i*y+r*S+s*A;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=M*R,e[1]=(v*d*s-f*g*s-v*r*p+i*g*p+f*r*h-i*d*h)*R,e[2]=(o*g*s-v*l*s+v*r*c-i*g*c-o*r*h+i*l*h)*R,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*R,e[4]=y*R,e[5]=(u*g*s-m*d*s+m*r*p-t*g*p-u*r*h+t*d*h)*R,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*h-t*l*h)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*R,e[8]=S*R,e[9]=(m*f*s-u*v*s-m*i*p+t*v*p+u*i*h-t*f*h)*R,e[10]=(a*v*s-m*o*s+m*i*c-t*v*c-a*i*h+t*o*h)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*R,e[12]=A*R,e[13]=(u*v*r-m*f*r+m*i*d-t*v*d-u*i*g+t*f*g)*R,e[14]=(m*o*r-a*v*r-m*i*l+t*v*l+a*i*g-t*o*g)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,m=s*f,v=a*u,g=a*f,h=o*f,M=l*c,y=l*u,S=l*f,A=i.x,I=i.y,R=i.z;return r[0]=(1-(v+h))*A,r[1]=(p+S)*A,r[2]=(m-y)*A,r[3]=0,r[4]=(p-S)*I,r[5]=(1-(d+h))*I,r[6]=(g+M)*I,r[7]=0,r[8]=(m+y)*R,r[9]=(g-M)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const a=yr.set(r[4],r[5],r[6]).length(),o=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/a,f=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Hn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===Hn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===so)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Hn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===Hn)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===so)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new X,Mn=new wt,Wx=new X(0,0,0),Xx=new X(1,1,1),Mi=new X,fa=new X,rn=new X,ld=new wt,cd=new Gs;class jn{constructor(e=0,t=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";let dm=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jx=0;const ud=new X,br=new Gs,Zn=new wt,da=new X,hs=new X,$x=new X,qx=new Gs,fd=new X(1,0,0),dd=new X(0,1,0),hd=new X(0,0,1),pd={type:"added"},Yx={type:"removed"},Mr={type:"childadded",child:null},gl={type:"childremoved",child:null};class fn extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new X,t=new jn,i=new Gs,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new qe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(dd,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return ud.copy(e).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(dd,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?da.copy(e):da.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(hs,da,this.up):Zn.lookAt(da,hs,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Zn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yx),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new X(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new X,Jn=new X,vl=new X,Qn=new X,Er=new X,Tr=new X,md=new X,_l=new X,xl=new X,Sl=new X,yl=new bt,bl=new bt,Ml=new bt;class Tn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),Jn.subVectors(i,t),vl.subVectors(e,t);const a=En.dot(En),o=En.dot(Jn),l=En.dot(vl),c=Jn.dot(Jn),u=Jn.dot(vl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,m=(a*u-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return yl.setScalar(0),bl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(e,t),bl.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yl,s.x),a.addScaledVector(bl,s.y),a.addScaledVector(Ml,s.z),a}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),Jn.subVectors(e,t),En.cross(Jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),En.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Er.subVectors(r,i),Tr.subVectors(s,i),_l.subVectors(e,i);const l=Er.dot(_l),c=Tr.dot(_l);if(l<=0&&c<=0)return t.copy(i);xl.subVectors(e,r);const u=Er.dot(xl),f=Tr.dot(xl);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Er,a);Sl.subVectors(e,s);const p=Er.dot(Sl),m=Tr.dot(Sl);if(m>=0&&p<=m)return t.copy(s);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Tr,o);const g=u*m-p*f;if(g<=0&&f-u>=0&&p-m>=0)return md.subVectors(s,r),o=(f-u)/(f-u+(p-m)),t.copy(r).addScaledVector(md,o);const h=1/(g+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(Er,a).addScaledVector(Tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ha={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Lx(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=El(a,s,e+1/3),this.g=El(a,s,e),this.b=El(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=hm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return it.workingToColorSpace(Dt.copy(this),e),Math.round(Qe(Dt.r*255,0,255))*65536+Math.round(Qe(Dt.g*255,0,255))*256+Math.round(Qe(Dt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=vn){it.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(ha);const i=al(Ei.h,ha.h,t),r=al(Ei.s,ha.s,t),s=al(Ei.l,ha.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new He;He.NAMES=hm;let Kx=0;class Po extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Vr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=pc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==pc&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ku extends Po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new X,pa=new Ke;let Zx=0;class Wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nd,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nd&&(e.usage=this.usage),e}}class pm extends Wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mm extends Wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sn extends Wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jx=0;const mn=new wt,Tl=new fn,wr=new X,sn=new Ws,ps=new Ws,Rt=new X;class _i extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?mm:pm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(sn.min,ps.min),sn.expandByPoint(Rt),Rt.addVectors(sn.max,ps.max),sn.expandByPoint(Rt)):(sn.expandByPoint(ps.min),sn.expandByPoint(ps.max))}sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(wr.fromBufferAttribute(e,c),Rt.add(wr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new X,l[D]=new X;const c=new X,u=new X,f=new X,d=new Ke,p=new Ke,m=new Ke,v=new X,g=new X;function h(D,w,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(d),m.sub(d);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(C),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(C),o[D].add(v),o[w].add(v),o[b].add(v),l[D].add(g),l[w].add(g),l[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,w=M.length;D<w;++D){const b=M[D],C=b.start,z=b.count;for(let H=C,J=C+z;H<J;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new X,S=new X,A=new X,I=new X;function R(D){A.fromBufferAttribute(r,D),I.copy(A);const w=o[D];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(I,w);const C=S.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,C)}for(let D=0,w=M.length;D<w;++D){const b=M[D],C=b.start,z=b.count;for(let H=C,J=C+z;H<J;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let h=0;h<u;h++)d[m++]=c[p++]}return new Wn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gd=new wt,Wi=new Gx,ma=new Yu,vd=new X,ga=new X,va=new X,_a=new X,wl=new X,xa=new X,_d=new X,Sa=new X;class An extends fn{constructor(e=new _i,t=new Ku){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(wl.fromBufferAttribute(f,e),a?xa.addScaledVector(wl,u):xa.addScaledVector(wl.sub(t),u))}t.add(xa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(ma.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ma,vd)===null||Wi.origin.distanceToSquared(vd)>(e.far-e.near)**2))&&(gd.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(gd),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],h=a[g.materialIndex],M=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=M,A=y;S<A;S+=3){const I=o.getX(S),R=o.getX(S+1),D=o.getX(S+2);r=ya(this,h,e,i,c,u,f,I,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,h=v;g<h;g+=3){const M=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);r=ya(this,a,e,i,c,u,f,M,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],h=a[g.materialIndex],M=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=M,A=y;S<A;S+=3){const I=S,R=S+1,D=S+2;r=ya(this,h,e,i,c,u,f,I,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,h=v;g<h;g+=3){const M=g,y=g+1,S=g+2;r=ya(this,a,e,i,c,u,f,M,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Qx(n,e,t,i,r,s,a,o){let l;if(e.side===Zt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Li,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:n}}function ya(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ga),n.getVertexPosition(l,va),n.getVertexPosition(c,_a);const u=Qx(n,e,t,i,ga,va,_a,_d);if(u){const f=new X;Tn.getBarycoord(_d,ga,va,_a,f),r&&(u.uv=Tn.getInterpolatedAttribute(r,o,l,c,f,new Ke)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,o,l,c,f,new Ke)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new X,materialIndex:0};Tn.getNormal(ga,va,_a,d.normal),u.face=d,u.barycoord=f}return u}class Xs extends _i{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(f,2));function m(v,g,h,M,y,S,A,I,R,D,w){const b=S/R,C=A/D,z=S/2,H=A/2,J=I/2,ie=R+1,F=D+1;let j=0,O=0;const le=new X;for(let ve=0;ve<F;ve++){const be=ve*C-H;for(let Le=0;Le<ie;Le++){const rt=Le*b-z;le[v]=rt*M,le[g]=be*y,le[h]=J,c.push(le.x,le.y,le.z),le[v]=0,le[g]=0,le[h]=I>0?1:-1,u.push(le.x,le.y,le.z),f.push(Le/R),f.push(1-ve/D),j+=1}}for(let ve=0;ve<D;ve++)for(let be=0;be<R;be++){const Le=d+be+ie*ve,rt=d+be+ie*(ve+1),et=d+(be+1)+ie*(ve+1),te=d+(be+1)+ie*ve;l.push(Le,rt,te),l.push(rt,et,te),O+=6}o.addGroup(p,O,w),p+=O,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Jr(n[t]);for(const r in i)e[r]=i[r]}return e}function eS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const oo={clone:Jr,merge:Vt};var tS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tS,this.fragmentShader=nS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=eS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vm extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new X,xd=new Ke,Sd=new Ke;class _n extends vm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,xd,Sd),t.subVectors(Sd,xd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=-90,Cr=1;class iS extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Ar,Cr,e,t);r.layers=this.layers,this.add(r);const s=new _n(Ar,Cr,e,t);s.layers=this.layers,this.add(s);const a=new _n(Ar,Cr,e,t);a.layers=this.layers,this.add(a);const o=new _n(Ar,Cr,e,t);o.layers=this.layers,this.add(o);const l=new _n(Ar,Cr,e,t);l.layers=this.layers,this.add(l);const c=new _n(Ar,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class _m extends Jt{constructor(e=[],t=Yr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rS extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _m(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xs(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:ci});s.uniforms.tEquirect.value=t;const a=new An(r,s),o=t.minFilter;return t.minFilter===tr&&(t.minFilter=kn),new iS(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ba extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sS={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),h=this._getHandJoint(c,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class aS extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cl=new X,oS=new X,lS=new qe;class Ki{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cl.subVectors(i,t).cross(oS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lS.getNormalMatrix(e),r=this.coplanarPoint(Cl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Yu,cS=new Ke(.5,.5),Ma=new X;class xm{constructor(e=new Ki,t=new Ki,i=new Ki,r=new Ki,s=new Ki,a=new Ki){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],m=s[8],v=s[9],g=s[10],h=s[11],M=s[12],y=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,p-u,h-m,A-M).normalize(),r[1].setComponents(c+a,p+u,h+m,A+M).normalize(),r[2].setComponents(c+o,p+f,h+v,A+y).normalize(),r[3].setComponents(c-o,p-f,h-v,A-y).normalize(),i)r[4].setComponents(l,d,g,S).normalize(),r[5].setComponents(c-l,p-d,h-g,A-S).normalize();else if(r[4].setComponents(c-l,p-d,h-g,A-S).normalize(),t===Hn)r[5].setComponents(c+l,p+d,h+g,A+S).normalize();else if(t===so)r[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=cS.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sm extends Jt{constructor(e,t,i=or,r,s,a,o=Pn,l=Pn,c,u=Fs,f=1){if(u!==Fs&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Io extends _i{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,p=[],m=[],v=[],g=[];for(let h=0;h<u;h++){const M=h*d-a;for(let y=0;y<c;y++){const S=y*f-s;m.push(S,-M,0),v.push(0,0,1),g.push(y/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<o;M++){const y=M+c*h,S=M+c*(h+1),A=M+1+c*(h+1),I=M+1+c*h;p.push(y,S,I),p.push(S,A,I)}this.setIndex(p),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zu extends _i{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new X,d=new X,p=[],m=[],v=[],g=[];for(let h=0;h<=i;h++){const M=[],y=h/i;let S=0;h===0&&a===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const I=A/t;f.x=-e*Math.cos(r+I*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(r+I*s)*Math.sin(a+y*o),m.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(I+S,1-y),M.push(c++)}u.push(M)}for(let h=0;h<i;h++)for(let M=0;M<t;M++){const y=u[h][M+1],S=u[h][M],A=u[h+1][M],I=u[h+1][M+1];(h!==0||a>0)&&p.push(y,S,I),(h!==i-1||l<Math.PI)&&p.push(S,A,I)}this.setIndex(p),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uS extends Po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fS extends Po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ym extends vm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dS extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yd(n,e,t,i){const r=pS(i);switch(t){case rm:return n*e;case am:return n*e/r.components*r.byteLength;case Xu:return n*e/r.components*r.byteLength;case om:return n*e*2/r.components*r.byteLength;case ju:return n*e*2/r.components*r.byteLength;case sm:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case $u:return n*e*4/r.components*r.byteLength;case Fa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Rc:return Math.max(n,16)*Math.max(e,8)/4;case wc:case Cc:return Math.max(n,8)*Math.max(e,8)/2;case Pc:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ha:case $c:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lm:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kc:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pS(n){switch(n){case pi:case tm:return{byteLength:1,components:1};case Os:case nm:case ui:return{byteLength:2,components:1};case Gu:case Wu:return{byteLength:2,components:4};case or:case Vu:case oi:return{byteLength:4,components:1};case im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){const m=f[d],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var gS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vS=`#ifdef USE_ALPHAHASH
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
#endif`,_S=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bS=`#ifdef USE_AOMAP
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
#endif`,MS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ES=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RS=`#ifdef USE_IRIDESCENCE
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
#endif`,PS=`#ifdef USE_BUMPMAP
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
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zS=`#define PI 3.141592653589793
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
} // validated`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HS=`vec3 transformedNormal = objectNormal;
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
#endif`,VS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,YS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,ZS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
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
#endif`,QS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iy=`#ifdef USE_GRADIENTMAP
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
}`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oy=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,ly=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,py=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,my=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,by=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ty=`#if defined( USE_POINTS_UV )
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
#endif`,wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,By=`#ifdef USE_NORMALMAP
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
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nb=`#ifdef USE_SKINNING
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
#endif`,ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ub=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gb=`uniform sampler2D t2D;
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,bb=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mb=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Eb=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Pb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ib=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Db=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Lb=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Ub=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ob=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Nb=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fb=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Bb=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zb=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,kb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hb=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Vb=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Gb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Wb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Xb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,jb=`uniform vec3 color;
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
}`,$b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ye={alphahash_fragment:gS,alphahash_pars_fragment:vS,alphamap_fragment:_S,alphamap_pars_fragment:xS,alphatest_fragment:SS,alphatest_pars_fragment:yS,aomap_fragment:bS,aomap_pars_fragment:MS,batching_pars_vertex:ES,batching_vertex:TS,begin_vertex:wS,beginnormal_vertex:AS,bsdfs:CS,iridescence_fragment:RS,bumpmap_pars_fragment:PS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:DS,clipping_planes_pars_vertex:LS,clipping_planes_vertex:US,color_fragment:OS,color_pars_fragment:NS,color_pars_vertex:FS,color_vertex:BS,common:zS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:HS,displacementmap_pars_vertex:VS,displacementmap_vertex:GS,emissivemap_fragment:WS,emissivemap_pars_fragment:XS,colorspace_fragment:jS,colorspace_pars_fragment:$S,envmap_fragment:qS,envmap_common_pars_fragment:YS,envmap_pars_fragment:KS,envmap_pars_vertex:ZS,envmap_physical_pars_fragment:ly,envmap_vertex:JS,fog_vertex:QS,fog_pars_vertex:ey,fog_fragment:ty,fog_pars_fragment:ny,gradientmap_pars_fragment:iy,lightmap_pars_fragment:ry,lights_lambert_fragment:sy,lights_lambert_pars_fragment:ay,lights_pars_begin:oy,lights_toon_fragment:cy,lights_toon_pars_fragment:uy,lights_phong_fragment:fy,lights_phong_pars_fragment:dy,lights_physical_fragment:hy,lights_physical_pars_fragment:py,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:vy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:Sy,logdepthbuf_vertex:yy,map_fragment:by,map_pars_fragment:My,map_particle_fragment:Ey,map_particle_pars_fragment:Ty,metalnessmap_fragment:wy,metalnessmap_pars_fragment:Ay,morphinstance_vertex:Cy,morphcolor_vertex:Ry,morphnormal_vertex:Py,morphtarget_pars_vertex:Iy,morphtarget_vertex:Dy,normal_fragment_begin:Ly,normal_fragment_maps:Uy,normal_pars_fragment:Oy,normal_pars_vertex:Ny,normal_vertex:Fy,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:ky,clearcoat_pars_fragment:Hy,iridescence_pars_fragment:Vy,opaque_fragment:Gy,packing:Wy,premultiplied_alpha_fragment:Xy,project_vertex:jy,dithering_fragment:$y,dithering_pars_fragment:qy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:Jy,shadowmap_vertex:Qy,shadowmask_pars_fragment:eb,skinbase_vertex:tb,skinning_pars_vertex:nb,skinning_vertex:ib,skinnormal_vertex:rb,specularmap_fragment:sb,specularmap_pars_fragment:ab,tonemapping_fragment:ob,tonemapping_pars_fragment:lb,transmission_fragment:cb,transmission_pars_fragment:ub,uv_pars_fragment:fb,uv_pars_vertex:db,uv_vertex:hb,worldpos_vertex:pb,background_vert:mb,background_frag:gb,backgroundCube_vert:vb,backgroundCube_frag:_b,cube_vert:xb,cube_frag:Sb,depth_vert:yb,depth_frag:bb,distanceRGBA_vert:Mb,distanceRGBA_frag:Eb,equirect_vert:Tb,equirect_frag:wb,linedashed_vert:Ab,linedashed_frag:Cb,meshbasic_vert:Rb,meshbasic_frag:Pb,meshlambert_vert:Ib,meshlambert_frag:Db,meshmatcap_vert:Lb,meshmatcap_frag:Ub,meshnormal_vert:Ob,meshnormal_frag:Nb,meshphong_vert:Fb,meshphong_frag:Bb,meshphysical_vert:zb,meshphysical_frag:kb,meshtoon_vert:Hb,meshtoon_frag:Vb,points_vert:Gb,points_frag:Wb,shadow_vert:Xb,shadow_frag:jb,sprite_vert:$b,sprite_frag:qb},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},zn={basic:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Vt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Vt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Vt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Vt([Se.points,Se.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Vt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Vt([Se.common,Se.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Vt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Vt([Se.sprite,Se.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Vt([Se.common,Se.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Vt([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};zn.physical={uniforms:Vt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ea={r:0,b:0,g:0},ji=new jn,Yb=new wt;function Kb(n,e,t,i,r,s,a){const o=new He(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function m(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function v(y){let S=!1;const A=m(y);A===null?h(o,l):A&&A.isColor&&(h(A,1),S=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,S){const A=m(S);A&&(A.isCubeTexture||A.mapping===Ro)?(u===void 0&&(u=new An(new Xs(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Jr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ji.copy(S.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(ji)),u.material.toneMapped=it.getTransfer(A.colorSpace)!==ct,(f!==A||d!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new An(new Io(2,2),new Wt({name:"BackgroundMaterial",uniforms:Jr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,S){y.getRGB(Ea,gm(n)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,S,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:v,addToRenderList:g,dispose:M}}function Zb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(b,C,z,H,J){let ie=!1;const F=f(H,z,C);s!==F&&(s=F,c(s.object)),ie=p(b,H,z,J),ie&&m(b,H,z,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,S(b,C,z,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,C,z){const H=z.wireframe===!0;let J=i[b.id];J===void 0&&(J={},i[b.id]=J);let ie=J[C.id];ie===void 0&&(ie={},J[C.id]=ie);let F=ie[H];return F===void 0&&(F=d(l()),ie[H]=F),F}function d(b){const C=[],z=[],H=[];for(let J=0;J<t;J++)C[J]=0,z[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,C,z,H){const J=s.attributes,ie=C.attributes;let F=0;const j=z.getAttributes();for(const O in j)if(j[O].location>=0){const ve=J[O];let be=ie[O];if(be===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),ve===void 0||ve.attribute!==be||be&&ve.data!==be.data)return!0;F++}return s.attributesNum!==F||s.index!==H}function m(b,C,z,H){const J={},ie=C.attributes;let F=0;const j=z.getAttributes();for(const O in j)if(j[O].location>=0){let ve=ie[O];ve===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor));const be={};be.attribute=ve,ve&&ve.data&&(be.data=ve.data),J[O]=be,F++}s.attributes=J,s.attributesNum=F,s.index=H}function v(){const b=s.newAttributes;for(let C=0,z=b.length;C<z;C++)b[C]=0}function g(b){h(b,0)}function h(b,C){const z=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;z[b]=1,H[b]===0&&(n.enableVertexAttribArray(b),H[b]=1),J[b]!==C&&(n.vertexAttribDivisor(b,C),J[b]=C)}function M(){const b=s.newAttributes,C=s.enabledAttributes;for(let z=0,H=C.length;z<H;z++)C[z]!==b[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function y(b,C,z,H,J,ie,F){F===!0?n.vertexAttribIPointer(b,C,z,J,ie):n.vertexAttribPointer(b,C,z,H,J,ie)}function S(b,C,z,H){v();const J=H.attributes,ie=z.getAttributes(),F=C.defaultAttributeValues;for(const j in ie){const O=ie[j];if(O.location>=0){let le=J[j];if(le===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const ve=le.normalized,be=le.itemSize,Le=e.get(le);if(Le===void 0)continue;const rt=Le.buffer,et=Le.type,te=Le.bytesPerElement,me=et===n.INT||et===n.UNSIGNED_INT||le.gpuType===Vu;if(le.isInterleavedBufferAttribute){const pe=le.data,Oe=pe.stride,Fe=le.offset;if(pe.isInstancedInterleavedBuffer){for(let ze=0;ze<O.locationSize;ze++)h(O.location+ze,pe.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ze=0;ze<O.locationSize;ze++)g(O.location+ze);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ze=0;ze<O.locationSize;ze++)y(O.location+ze,be/O.locationSize,et,ve,Oe*te,(Fe+be/O.locationSize*ze)*te,me)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<O.locationSize;pe++)h(O.location+pe,le.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<O.locationSize;pe++)g(O.location+pe);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let pe=0;pe<O.locationSize;pe++)y(O.location+pe,be/O.locationSize,et,ve,be*te,be/O.locationSize*pe*te,me)}}else if(F!==void 0){const ve=F[j];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(O.location,ve);break;case 3:n.vertexAttrib3fv(O.location,ve);break;case 4:n.vertexAttrib4fv(O.location,ve);break;default:n.vertexAttrib1fv(O.location,ve)}}}}M()}function A(){D();for(const b in i){const C=i[b];for(const z in C){const H=C[z];for(const J in H)u(H[J].object),delete H[J];delete C[z]}delete i[b]}}function I(b){if(i[b.id]===void 0)return;const C=i[b.id];for(const z in C){const H=C[z];for(const J in H)u(H[J].object),delete H[J];delete C[z]}delete i[b.id]}function R(b){for(const C in i){const z=i[C];if(z[b.id]===void 0)continue;const H=z[b.id];for(const J in H)u(H[J].object),delete H[J];delete z[b.id]}}function D(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function Jb(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let m=0;m<f;m++)p+=u[m];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v]*d[v];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==pi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:A,maxSamples:I}}function eM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ki,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const M=s?0:i,y=M*4;let S=h.clippingState||null;l.value=S,S=u(m,d,y,p);for(let A=0;A!==y;++A)S[A]=t[A];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const h=p+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<h)&&(g=new Float32Array(h));for(let y=0,S=p;y!==v;++y,S+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function tM(n){let e=new WeakMap;function t(a,o){return o===bc?a.mapping=Yr:o===Mc&&(a.mapping=Kr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bc||o===Mc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rS(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Lr=4,bd=[.125,.215,.35,.446,.526,.582],Qi=20,Rl=new ym,Md=new He;let Pl=null,Il=0,Dl=0,Ll=!1;const Zi=(1+Math.sqrt(5))/2,Rr=1/Zi,Ed=[new X(-Zi,Rr,0),new X(Zi,Rr,0),new X(-Rr,0,Zi),new X(Rr,0,Zi),new X(0,Zi,-Rr),new X(0,Zi,Rr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],nM=new X;class Td{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=nM}=s;Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Il,Dl),this._renderer.xr.enabled=Ll,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ui,format:wn,colorSpace:Zr,depthBuffer:!1},r=wd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iM(s)),this._blurMaterial=rM(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,i,r,s){const l=new _n(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Md),f.toneMapping=Ii,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new Ku({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new An(new Xs,v);let h=!1;const M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,h=!0):(v.color.copy(Md),h=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;Ta(r,S*A,y>2?A:0,A,A),f.setRenderTarget(r),h&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yr||e.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new An(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Rl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ed[(r-s-1)%Ed.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qi-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):Qi;g>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qi}`);const h=[];let M=0;for(let R=0;R<Qi;++R){const D=R/v,w=Math.exp(-D*D/2);h.push(w),R===0?M+=w:R<g&&(M+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-i;const S=this._sizeLods[r],A=3*S*(r>y-Lr?r-y+Lr:0),I=4*(this._cubeSize-S);Ta(t,A,I,3*S,2*S),l.setRenderTarget(t),l.render(f,Rl)}}function iM(n){const e=[],t=[],i=[];let r=n;const s=n-Lr+1+bd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Lr?l=bd[a-n+Lr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,m=6,v=3,g=2,h=1,M=new Float32Array(v*m*p),y=new Float32Array(g*m*p),S=new Float32Array(h*m*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,D=I>2?0:-1,w=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];M.set(w,v*m*I),y.set(d,g*m*I);const b=[I,I,I,I,I,I];S.set(b,h*m*I)}const A=new _i;A.setAttribute("position",new Wn(M,v)),A.setAttribute("uv",new Wn(y,g)),A.setAttribute("faceIndex",new Wn(S,h)),e.push(A),r>Lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wd(n,e,t){const i=new In(n,e,t);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ta(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rM(n,e,t){const i=new Float32Array(Qi),r=new X(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ad(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Cd(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}function sM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bc||l===Mc,u=l===Yr||l===Kr;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Td(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Td(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function aM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oM(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,m=f.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let y=0,S=M.length;y<S;y+=3){const A=M[y+0],I=M[y+1],R=M[y+2];d.push(A,I,I,R,R,A)}}else if(m!==void 0){const M=m.array;v=m.version;for(let y=0,S=M.length/3-1;y<S;y+=3){const A=y+0,I=y+1,R=y+2;d.push(A,I,I,R,R,A)}}else return;const g=new(um(d)?mm:pm)(d,1);g.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function lM(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,m){m!==0&&(n.drawElementsInstanced(i,p,s,d*a,m),t.update(p,i,m))}function u(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];t.update(g,i,1)}function f(d,p,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],v[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,m);let h=0;for(let M=0;M<m;M++)h+=p[M]*v[M];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function cM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uM(n,e,t){const i=new WeakMap,r=new bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let A=o.attributes.position.count*S,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*I*4*f),D=new fm(R,A,I,f);D.type=oi,D.needsUpdate=!0;const w=S*4;for(let C=0;C<f;C++){const z=h[C],H=M[C],J=y[C],ie=A*I*4*C;for(let F=0;F<z.count;F++){const j=F*w;m===!0&&(r.fromBufferAttribute(z,F),R[ie+j+0]=r.x,R[ie+j+1]=r.y,R[ie+j+2]=r.z,R[ie+j+3]=0),v===!0&&(r.fromBufferAttribute(H,F),R[ie+j+4]=r.x,R[ie+j+5]=r.y,R[ie+j+6]=r.z,R[ie+j+7]=0),g===!0&&(r.fromBufferAttribute(J,F),R[ie+j+8]=r.x,R[ie+j+9]=r.y,R[ie+j+10]=r.z,R[ie+j+11]=J.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new Ke(A,I)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function fM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Mm=new Jt,Rd=new Sm(1,1),Em=new fm,Tm=new Hx,wm=new _m,Pd=[],Id=[],Dd=new Float32Array(16),Ld=new Float32Array(9),Ud=new Float32Array(4);function is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pd[r];if(s===void 0&&(s=new Float32Array(r),Pd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Do(n,e){let t=Id[e];t===void 0&&(t=new Int32Array(e),Id[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),Ct(t,i)}}function vM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Ld.set(i),n.uniformMatrix3fv(this.addr,!1,Ld),Ct(t,i)}}function _M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Dd.set(i),n.uniformMatrix4fv(this.addr,!1,Dd),Ct(t,i)}}function xM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function MM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function AM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Rd.compareFunction=cm,s=Rd):s=Mm,t.setTexture2D(e||s,r)}function CM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tm,r)}function RM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wm,r)}function PM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Em,r)}function IM(n){switch(n){case 5126:return dM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return vM;case 35676:return _M;case 5124:case 35670:return xM;case 35667:case 35671:return SM;case 35668:case 35672:return yM;case 35669:case 35673:return bM;case 5125:return MM;case 36294:return EM;case 36295:return TM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}function DM(n,e){n.uniform1fv(this.addr,e)}function LM(n,e){const t=is(e,this.size,2);n.uniform2fv(this.addr,t)}function UM(n,e){const t=is(e,this.size,3);n.uniform3fv(this.addr,t)}function OM(n,e){const t=is(e,this.size,4);n.uniform4fv(this.addr,t)}function NM(n,e){const t=is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FM(n,e){const t=is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function BM(n,e){const t=is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zM(n,e){n.uniform1iv(this.addr,e)}function kM(n,e){n.uniform2iv(this.addr,e)}function HM(n,e){n.uniform3iv(this.addr,e)}function VM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function WM(n,e){n.uniform2uiv(this.addr,e)}function XM(n,e){n.uniform3uiv(this.addr,e)}function jM(n,e){n.uniform4uiv(this.addr,e)}function $M(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Mm,s[a])}function qM(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Tm,s[a])}function YM(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||wm,s[a])}function KM(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Em,s[a])}function ZM(n){switch(n){case 5126:return DM;case 35664:return LM;case 35665:return UM;case 35666:return OM;case 35674:return NM;case 35675:return FM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return kM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return KM}}class JM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=IM(t.type)}}class QM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZM(t.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ul=/(\w+)(\])?(\[|\.)?/g;function Od(n,e){n.seq.push(e),n.map[e.id]=e}function tE(n,e,t){const i=n.name,r=i.length;for(Ul.lastIndex=0;;){const s=Ul.exec(i),a=Ul.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Od(t,c===void 0?new JM(o,n,e):new QM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new eE(o),Od(t,f)),t=f}}}class Va{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);tE(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Nd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nE=37297;let iE=0;function rE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Fd=new qe;function sE(n){it._getMatrix(Fd,it.workingColorSpace,n);const e=`mat3( ${Fd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case ro:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+rE(n.getShaderSource(e),o)}else return s}function aE(n,e){const t=sE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oE(n,e){let t;switch(e){case px:t="Linear";break;case mx:t="Reinhard";break;case gx:t="Cineon";break;case vx:t="ACESFilmic";break;case xx:t="AgX";break;case Sx:t="Neutral";break;case _x:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wa=new X;function lE(){it.getLuminanceCoefficients(wa);const n=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function uE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function vs(n){return n!==""}function zd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(dE,pE)}const hE=new Map;function pE(n,e){let t=Ye[e];if(t===void 0){const i=hE.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const mE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(n){return n.replace(mE,gE)}function gE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function _E(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yr:case Kr:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function SE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qp:e="ENVMAP_BLENDING_MULTIPLY";break;case dx:e="ENVMAP_BLENDING_MIX";break;case hx:e="ENVMAP_BLENDING_ADD";break}return e}function yE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vE(t),c=_E(t),u=xE(t),f=SE(t),d=yE(t),p=cE(t),m=uE(s),v=r.createProgram();let g,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vs).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vs).join(`
`),h.length>0&&(h+=`
`)):(g=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),h=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ii?oE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),lE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),a=Qc(a),a=zd(a,t),a=kd(a,t),o=Qc(o),o=zd(o,t),o=kd(o,t),a=Hd(a),o=Hd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=M+g+a,S=M+h+o,A=Nd(r,r.VERTEX_SHADER,y),I=Nd(r,r.FRAGMENT_SHADER,S);r.attachShader(v,A),r.attachShader(v,I),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(C){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(A)||"",J=r.getShaderInfoLog(I)||"",ie=z.trim(),F=H.trim(),j=J.trim();let O=!0,le=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,I);else{const ve=Bd(r,A,"vertex"),be=Bd(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+ie+`
`+ve+`
`+be)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(F===""||j==="")&&(le=!1);le&&(C.diagnostics={runnable:O,programLog:ie,vertexShader:{log:F,prefix:g},fragmentShader:{log:j,prefix:h}})}r.deleteShader(A),r.deleteShader(I),D=new Va(r,v),w=fE(r,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,nE)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=I,this}let ME=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TE(e),t.set(e,i)),i}}class TE{constructor(e){this.id=ME++,this.code=e,this.usedTimes=0}}function wE(n,e,t,i,r,s,a){const o=new dm,l=new EE,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,C,z,H){const J=z.fog,ie=H.geometry,F=w.isMeshStandardMaterial?z.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||F),O=j&&j.mapping===Ro?j.image.height:null,le=m[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ve=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,be=ve!==void 0?ve.length:0;let Le=0;ie.morphAttributes.position!==void 0&&(Le=1),ie.morphAttributes.normal!==void 0&&(Le=2),ie.morphAttributes.color!==void 0&&(Le=3);let rt,et,te,me;if(le){const st=zn[le];rt=st.vertexShader,et=st.fragmentShader}else rt=w.vertexShader,et=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),me=l.getFragmentShaderID(w);const pe=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),Fe=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,St=!!w.map,P=!!w.matcap,x=!!j,V=!!w.aoMap,$=!!w.lightMap,Q=!!w.bumpMap,W=!!w.normalMap,ae=!!w.displacementMap,K=!!w.emissiveMap,ne=!!w.metalnessMap,re=!!w.roughnessMap,xe=w.anisotropy>0,E=w.clearcoat>0,_=w.dispersion>0,L=w.iridescence>0,k=w.sheen>0,ee=w.transmission>0,G=xe&&!!w.anisotropyMap,Ee=E&&!!w.clearcoatMap,oe=E&&!!w.clearcoatNormalMap,Te=E&&!!w.clearcoatRoughnessMap,we=L&&!!w.iridescenceMap,ce=L&&!!w.iridescenceThicknessMap,ye=k&&!!w.sheenColorMap,Pe=k&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,_e=!!w.specularColorMap,We=!!w.specularIntensityMap,U=ee&&!!w.transmissionMap,he=ee&&!!w.thicknessMap,ge=!!w.gradientMap,Re=!!w.alphaMap,ue=w.alphaTest>0,se=!!w.alphaHash,De=!!w.extensions;let Xe=Ii;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const dt={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:rt,fragmentShader:et,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ze,batchingColor:ze&&H._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&H.instanceColor!==null,instancingMorph:Fe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Zr,alphaToCoverage:!!w.alphaToCoverage,map:St,matcap:P,envMap:x,envMapMode:x&&j.mapping,envMapCubeUVHeight:O,aoMap:V,lightMap:$,bumpMap:Q,normalMap:W,displacementMap:d&&ae,emissiveMap:K,normalMapObjectSpace:W&&w.normalMapType===Tx,normalMapTangentSpace:W&&w.normalMapType===Ex,metalnessMap:ne,roughnessMap:re,anisotropy:xe,anisotropyMap:G,clearcoat:E,clearcoatMap:Ee,clearcoatNormalMap:oe,clearcoatRoughnessMap:Te,dispersion:_,iridescence:L,iridescenceMap:we,iridescenceThicknessMap:ce,sheen:k,sheenColorMap:ye,sheenRoughnessMap:Pe,specularMap:Ae,specularColorMap:_e,specularIntensityMap:We,transmission:ee,transmissionMap:U,thicknessMap:he,gradientMap:ge,opaque:w.transparent===!1&&w.blending===Vr&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:se,combine:w.combine,mapUv:St&&v(w.map.channel),aoMapUv:V&&v(w.aoMap.channel),lightMapUv:$&&v(w.lightMap.channel),bumpMapUv:Q&&v(w.bumpMap.channel),normalMapUv:W&&v(w.normalMap.channel),displacementMapUv:ae&&v(w.displacementMap.channel),emissiveMapUv:K&&v(w.emissiveMap.channel),metalnessMapUv:ne&&v(w.metalnessMap.channel),roughnessMapUv:re&&v(w.roughnessMap.channel),anisotropyMapUv:G&&v(w.anisotropyMap.channel),clearcoatMapUv:Ee&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(w.sheenRoughnessMap.channel),specularMapUv:Ae&&v(w.specularMap.channel),specularColorMapUv:_e&&v(w.specularColorMap.channel),specularIntensityMapUv:We&&v(w.specularIntensityMap.channel),transmissionMapUv:U&&v(w.transmissionMap.channel),thicknessMapUv:he&&v(w.thicknessMap.channel),alphaMapUv:Re&&v(w.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(W||xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ie.attributes.uv&&(St||Re),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Oe,skinning:H.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:St&&w.map.isVideoTexture===!0&&it.getTransfer(w.map.colorSpace)===ct,decodeVideoTextureEmissive:K&&w.emissiveMap.isVideoTexture===!0&&it.getTransfer(w.emissiveMap.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===si,flipSided:w.side===Zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)b.push(C),b.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(M(b,w),y(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function M(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const b=m[w.type];let C;if(b){const z=zn[b];C=oo.clone(z.uniforms)}else C=w.uniforms;return C}function A(w,b){let C;for(let z=0,H=u.length;z<H;z++){const J=u[z];if(J.cacheKey===b){C=J,++C.usedTimes;break}}return C===void 0&&(C=new bE(n,b,w,s),u.push(C)),C}function I(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:A,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:D}}function AE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,m,v,g){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:m,renderOrder:f.renderOrder,z:v,group:g},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=m,h.renderOrder=f.renderOrder,h.z=v,h.group=g),e++,h}function o(f,d,p,m,v,g){const h=a(f,d,p,m,v,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,m,v,g){const h=a(f,d,p,m,v,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||CE),i.length>1&&i.sort(d||Gd),r.length>1&&r.sort(d||Gd)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function RE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Wd,n.set(i,[a])):r>=s.length?(a=new Wd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function PE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new He};break;case"SpotLight":t={position:new X,direction:new X,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function IE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DE=0;function LE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UE(n){const e=new PE,t=IE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new wt,a=new wt;function o(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,m=0,v=0,g=0,h=0,M=0,y=0,S=0,A=0,I=0,R=0;c.sort(LE);for(let w=0,b=c.length;w<b;w++){const C=c[w],z=C.color,H=C.intensity,J=C.distance,ie=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*H,f+=z.g*H,d+=z.b*H;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],H);R++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,O=t.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=C.shadow.matrix,M++}i.directional[p]=F,p++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(z).multiplyScalar(H),F.distance=J,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[v]=F;const j=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,j.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[v]=j.matrix,C.castShadow){const O=t.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=ie,S++}v++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(z).multiplyScalar(H),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=F,g++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const j=C.shadow,O=t.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=C.shadow.matrix,y++}i.point[m]=F,m++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(H),F.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[h]=F,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==h||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==S||D.numSpotMaps!==A||D.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,D.directionalLength=p,D.pointLength=m,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=h,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=S,D.numSpotMaps=A,D.numLightProbes=R,i.version=DE++)}function l(c,u){let f=0,d=0,p=0,m=0,v=0;const g=u.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const y=c[h];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Xd(n){const e=new UE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function OE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Xd(n),e.set(r,[o])):s>=a.length?(o=new Xd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
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
}`;function BE(n,e,t){let i=new xm;const r=new Ke,s=new Ke,a=new bt,o=new uS({depthPacking:Mx}),l=new fS,c={},u=t.maxTextureSize,f={[Li]:Zt,[Zt]:Li,[si]:si},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:NE,fragmentShader:FE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new _i;m.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new An(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jp;let h=this.type;this.render=function(I,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ci),z.buffers.depth.getReversed()?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=h!==ei&&this.type===ei,J=h===ei&&this.type!==ei;for(let ie=0,F=I.length;ie<F;ie++){const j=I[ie],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const le=O.getFrameExtents();if(r.multiply(le),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,O.mapSize.y=s.y)),O.map===null||H===!0||J===!0){const be=this.type!==ei?{minFilter:Pn,magFilter:Pn}:{};O.map!==null&&O.map.dispose(),O.map=new In(r.x,r.y,be),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const ve=O.getViewportCount();for(let be=0;be<ve;be++){const Le=O.getViewport(be);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),z.viewport(a),O.updateMatrices(j,be),i=O.getFrustum(),S(R,D,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===ei&&M(O,D),O.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(w,b,C)};function M(I,R){const D=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new In(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,v,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,D,p,v,null)}function y(I,R,D,w){let b=null;const C=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)b=C;else if(b=D.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=b.uuid,H=R.uuid;let J=c[z];J===void 0&&(J={},c[z]=J);let ie=J[H];ie===void 0&&(ie=b.clone(),J[H]=ie,R.addEventListener("dispose",A)),b=ie}if(b.visible=R.visible,b.wireframe=R.wireframe,w===ei?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:f[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=n.properties.get(b);z.light=D}return b}function S(I,R,D,w,b){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===ei)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const H=e.update(I),J=I.material;if(Array.isArray(J)){const ie=H.groups;for(let F=0,j=ie.length;F<j;F++){const O=ie[F],le=J[O.materialIndex];if(le&&le.visible){const ve=y(I,le,w,b);I.onBeforeShadow(n,I,R,D,H,ve,O),n.renderBufferDirect(D,null,H,ve,I,O),I.onAfterShadow(n,I,R,D,H,ve,O)}}}else if(J.visible){const ie=y(I,J,w,b);I.onBeforeShadow(n,I,R,D,H,ie,null),n.renderBufferDirect(D,null,H,ie,I,null),I.onAfterShadow(n,I,R,D,H,ie,null)}}const z=I.children;for(let H=0,J=z.length;H<J;H++)S(z[H],R,D,w,b)}function A(I){I.target.removeEventListener("dispose",A);for(const D in c){const w=c[D],b=I.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const zE={[mc]:gc,[vc]:Sc,[_c]:yc,[qr]:xc,[gc]:mc,[Sc]:vc,[yc]:_c,[xc]:qr};function kE(n,e){function t(){let U=!1;const he=new bt;let ge=null;const Re=new bt(0,0,0,0);return{setMask:function(ue){ge!==ue&&!U&&(n.colorMask(ue,ue,ue,ue),ge=ue)},setLocked:function(ue){U=ue},setClear:function(ue,se,De,Xe,dt){dt===!0&&(ue*=Xe,se*=Xe,De*=Xe),he.set(ue,se,De,Xe),Re.equals(he)===!1&&(n.clearColor(ue,se,De,Xe),Re.copy(he))},reset:function(){U=!1,ge=null,Re.set(-1,0,0,0)}}}function i(){let U=!1,he=!1,ge=null,Re=null,ue=null;return{setReversed:function(se){if(he!==se){const De=e.get("EXT_clip_control");se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),he=se;const Xe=ue;ue=null,this.setClear(Xe)}},getReversed:function(){return he},setTest:function(se){se?pe(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(se){ge!==se&&!U&&(n.depthMask(se),ge=se)},setFunc:function(se){if(he&&(se=zE[se]),Re!==se){switch(se){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case vc:n.depthFunc(n.LESS);break;case qr:n.depthFunc(n.LEQUAL);break;case _c:n.depthFunc(n.EQUAL);break;case xc:n.depthFunc(n.GEQUAL);break;case Sc:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=se}},setLocked:function(se){U=se},setClear:function(se){ue!==se&&(he&&(se=1-se),n.clearDepth(se),ue=se)},reset:function(){U=!1,ge=null,Re=null,ue=null,he=!1}}}function r(){let U=!1,he=null,ge=null,Re=null,ue=null,se=null,De=null,Xe=null,dt=null;return{setTest:function(st){U||(st?pe(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(st){he!==st&&!U&&(n.stencilMask(st),he=st)},setFunc:function(st,$n,Un){(ge!==st||Re!==$n||ue!==Un)&&(n.stencilFunc(st,$n,Un),ge=st,Re=$n,ue=Un)},setOp:function(st,$n,Un){(se!==st||De!==$n||Xe!==Un)&&(n.stencilOp(st,$n,Un),se=st,De=$n,Xe=Un)},setLocked:function(st){U=st},setClear:function(st){dt!==st&&(n.clearStencil(st),dt=st)},reset:function(){U=!1,he=null,ge=null,Re=null,ue=null,se=null,De=null,Xe=null,dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],m=null,v=!1,g=null,h=null,M=null,y=null,S=null,A=null,I=null,R=new He(0,0,0),D=0,w=!1,b=null,C=null,z=null,H=null,J=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=j>=1):O.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=j>=2);let le=null,ve={};const be=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),rt=new bt().fromArray(be),et=new bt().fromArray(Le);function te(U,he,ge,Re){const ue=new Uint8Array(4),se=n.createTexture();n.bindTexture(U,se),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<ge;De++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(he+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return se}const me={};me[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),a.setFunc(qr),Q(!1),W(Jf),pe(n.CULL_FACE),V(ci);function pe(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Oe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Fe(U,he){return f[U]!==he?(n.bindFramebuffer(U,he),f[U]=he,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function ze(U,he){let ge=p,Re=!1;if(U){ge=d.get(he),ge===void 0&&(ge=[],d.set(he,ge));const ue=U.textures;if(ge.length!==ue.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let se=0,De=ue.length;se<De;se++)ge[se]=n.COLOR_ATTACHMENT0+se;ge.length=ue.length,Re=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Re=!0);Re&&n.drawBuffers(ge)}function St(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const P={[Ji]:n.FUNC_ADD,[Y0]:n.FUNC_SUBTRACT,[K0]:n.FUNC_REVERSE_SUBTRACT};P[Z0]=n.MIN,P[J0]=n.MAX;const x={[Q0]:n.ZERO,[ex]:n.ONE,[tx]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[ox]:n.SRC_ALPHA_SATURATE,[sx]:n.DST_COLOR,[ix]:n.DST_ALPHA,[nx]:n.ONE_MINUS_SRC_COLOR,[pc]:n.ONE_MINUS_SRC_ALPHA,[ax]:n.ONE_MINUS_DST_COLOR,[rx]:n.ONE_MINUS_DST_ALPHA,[lx]:n.CONSTANT_COLOR,[cx]:n.ONE_MINUS_CONSTANT_COLOR,[ux]:n.CONSTANT_ALPHA,[fx]:n.ONE_MINUS_CONSTANT_ALPHA};function V(U,he,ge,Re,ue,se,De,Xe,dt,st){if(U===ci){v===!0&&(Oe(n.BLEND),v=!1);return}if(v===!1&&(pe(n.BLEND),v=!0),U!==q0){if(U!==g||st!==w){if((h!==Ji||S!==Ji)&&(n.blendEquation(n.FUNC_ADD),h=Ji,S=Ji),st)switch(U){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case Qf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,y=null,A=null,I=null,R.set(0,0,0),D=0,g=U,w=st}return}ue=ue||he,se=se||ge,De=De||Re,(he!==h||ue!==S)&&(n.blendEquationSeparate(P[he],P[ue]),h=he,S=ue),(ge!==M||Re!==y||se!==A||De!==I)&&(n.blendFuncSeparate(x[ge],x[Re],x[se],x[De]),M=ge,y=Re,A=se,I=De),(Xe.equals(R)===!1||dt!==D)&&(n.blendColor(Xe.r,Xe.g,Xe.b,dt),R.copy(Xe),D=dt),g=U,w=!1}function $(U,he){U.side===si?Oe(n.CULL_FACE):pe(n.CULL_FACE);let ge=U.side===Zt;he&&(ge=!ge),Q(ge),U.blending===Vr&&U.transparent===!1?V(ci):V(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Re=U.stencilWrite;o.setTest(Re),Re&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),K(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function W(U){U!==X0?(pe(n.CULL_FACE),U!==C&&(U===Jf?n.cullFace(n.BACK):U===j0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),C=U}function ae(U){U!==z&&(F&&n.lineWidth(U),z=U)}function K(U,he,ge){U?(pe(n.POLYGON_OFFSET_FILL),(H!==he||J!==ge)&&(n.polygonOffset(he,ge),H=he,J=ge)):Oe(n.POLYGON_OFFSET_FILL)}function ne(U){U?pe(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function re(U){U===void 0&&(U=n.TEXTURE0+ie-1),le!==U&&(n.activeTexture(U),le=U)}function xe(U,he,ge){ge===void 0&&(le===null?ge=n.TEXTURE0+ie-1:ge=le);let Re=ve[ge];Re===void 0&&(Re={type:void 0,texture:void 0},ve[ge]=Re),(Re.type!==U||Re.texture!==he)&&(le!==ge&&(n.activeTexture(ge),le=ge),n.bindTexture(U,he||me[U]),Re.type=U,Re.texture=he)}function E(){const U=ve[le];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(U){rt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),rt.copy(U))}function Pe(U){et.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),et.copy(U))}function Ae(U,he){let ge=c.get(he);ge===void 0&&(ge=new WeakMap,c.set(he,ge));let Re=ge.get(U);Re===void 0&&(Re=n.getUniformBlockIndex(he,U.name),ge.set(U,Re))}function _e(U,he){const Re=c.get(he).get(U);l.get(he)!==Re&&(n.uniformBlockBinding(he,Re,U.__bindingPointIndex),l.set(he,Re))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,ve={},f={},d=new WeakMap,p=[],m=null,v=!1,g=null,h=null,M=null,y=null,S=null,A=null,I=null,R=new He(0,0,0),D=0,w=!1,b=null,C=null,z=null,H=null,J=null,rt.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Oe,bindFramebuffer:Fe,drawBuffers:ze,useProgram:St,setBlending:V,setMaterial:$,setFlipSided:Q,setCullFace:W,setLineWidth:ae,setPolygonOffset:K,setScissorTest:ne,activeTexture:re,bindTexture:xe,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:we,texImage3D:ce,updateUBOMapping:Ae,uniformBlockBinding:_e,texStorage2D:oe,texStorage3D:Te,texSubImage2D:k,texSubImage3D:ee,compressedTexSubImage2D:G,compressedTexSubImage3D:Ee,scissor:ye,viewport:Pe,reset:We}}function HE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return p?new OffscreenCanvas(E,_):ao("canvas")}function v(E,_,L){let k=1;const ee=xe(E);if((ee.width>L||ee.height>L)&&(k=L/Math.max(ee.width,ee.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const G=Math.floor(k*ee.width),Ee=Math.floor(k*ee.height);f===void 0&&(f=m(G,Ee));const oe=_?m(G,Ee):f;return oe.width=G,oe.height=Ee,oe.getContext("2d").drawImage(E,0,0,G,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+G+"x"+Ee+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function g(E){return E.generateMipmaps}function h(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,_,L,k,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=_;if(_===n.RED&&(L===n.FLOAT&&(G=n.R32F),L===n.HALF_FLOAT&&(G=n.R16F),L===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.R8UI),L===n.UNSIGNED_SHORT&&(G=n.R16UI),L===n.UNSIGNED_INT&&(G=n.R32UI),L===n.BYTE&&(G=n.R8I),L===n.SHORT&&(G=n.R16I),L===n.INT&&(G=n.R32I)),_===n.RG&&(L===n.FLOAT&&(G=n.RG32F),L===n.HALF_FLOAT&&(G=n.RG16F),L===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RG8UI),L===n.UNSIGNED_SHORT&&(G=n.RG16UI),L===n.UNSIGNED_INT&&(G=n.RG32UI),L===n.BYTE&&(G=n.RG8I),L===n.SHORT&&(G=n.RG16I),L===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGB8UI),L===n.UNSIGNED_SHORT&&(G=n.RGB16UI),L===n.UNSIGNED_INT&&(G=n.RGB32UI),L===n.BYTE&&(G=n.RGB8I),L===n.SHORT&&(G=n.RGB16I),L===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),L===n.UNSIGNED_INT&&(G=n.RGBA32UI),L===n.BYTE&&(G=n.RGBA8I),L===n.SHORT&&(G=n.RGBA16I),L===n.INT&&(G=n.RGBA32I)),_===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),_===n.RGBA){const Ee=ee?ro:it.getTransfer(k);L===n.FLOAT&&(G=n.RGBA32F),L===n.HALF_FLOAT&&(G=n.RGBA16F),L===n.UNSIGNED_BYTE&&(G=Ee===ct?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(E,_){let L;return E?_===null||_===or||_===Ns?L=n.DEPTH24_STENCIL8:_===oi?L=n.DEPTH32F_STENCIL8:_===Os&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===or||_===Ns?L=n.DEPTH_COMPONENT24:_===oi?L=n.DEPTH_COMPONENT32F:_===Os&&(L=n.DEPTH_COMPONENT16),L}function A(E,_){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pn&&E.minFilter!==kn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function I(E){const _=E.target;_.removeEventListener("dispose",I),D(_),_.isVideoTexture&&u.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),b(_)}function D(E){const _=i.get(E);if(_.__webglInit===void 0)return;const L=E.source,k=d.get(L);if(k){const ee=k[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(E),Object.keys(k).length===0&&d.delete(L)}i.remove(E)}function w(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const L=E.source,k=d.get(L);delete k[_.__cacheKey],a.memory.textures--}function b(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let ee=0;ee<_.__webglFramebuffer[k].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[k][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)n.deleteFramebuffer(_.__webglFramebuffer[k]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=E.textures;for(let k=0,ee=L.length;k<ee;k++){const G=i.get(L[k]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(L[k])}i.remove(E)}let C=0;function z(){C=0}function H(){const E=C;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),C+=1,E}function J(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ie(E,_){const L=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){const k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(L,E,_);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function F(E,_){const L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){me(L,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function j(E,_){const L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){me(L,E,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function O(E,_){const L=i.get(E);if(E.version>0&&L.__version!==E.version){pe(L,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const le={[Ec]:n.REPEAT,[er]:n.CLAMP_TO_EDGE,[Tc]:n.MIRRORED_REPEAT},ve={[Pn]:n.NEAREST,[yx]:n.NEAREST_MIPMAP_NEAREST,[sa]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[tr]:n.LINEAR_MIPMAP_LINEAR},be={[wx]:n.NEVER,[Dx]:n.ALWAYS,[Ax]:n.LESS,[cm]:n.LEQUAL,[Cx]:n.EQUAL,[Ix]:n.GEQUAL,[Rx]:n.GREATER,[Px]:n.NOTEQUAL};function Le(E,_){if(_.type===oi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kn||_.magFilter===rl||_.magFilter===sa||_.magFilter===tr||_.minFilter===kn||_.minFilter===rl||_.minFilter===sa||_.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,le[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,le[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,le[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ve[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pn||_.minFilter!==sa&&_.minFilter!==tr||_.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function rt(E,_){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",I));const k=_.source;let ee=d.get(k);ee===void 0&&(ee={},d.set(k,ee));const G=J(_);if(G!==E.__cacheKey){ee[G]===void 0&&(ee[G]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),ee[G].usedTimes++;const Ee=ee[E.__cacheKey];Ee!==void 0&&(ee[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(_)),E.__cacheKey=G,E.__webglTexture=ee[G].texture}return L}function et(E,_,L){return Math.floor(Math.floor(E/L)/_)}function te(E,_,L,k){const G=E.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,L,k,_.data);else{G.sort((ce,ye)=>ce.start-ye.start);let Ee=0;for(let ce=1;ce<G.length;ce++){const ye=G[Ee],Pe=G[ce],Ae=ye.start+ye.count,_e=et(Pe.start,_.width,4),We=et(ye.start,_.width,4);Pe.start<=Ae+1&&_e===We&&et(Pe.start+Pe.count-1,_.width,4)===_e?ye.count=Math.max(ye.count,Pe.start+Pe.count-ye.start):(++Ee,G[Ee]=Pe)}G.length=Ee+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ce=0,ye=G.length;ce<ye;ce++){const Pe=G[ce],Ae=Math.floor(Pe.start/4),_e=Math.ceil(Pe.count/4),We=Ae%_.width,U=Math.floor(Ae/_.width),he=_e,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,We,U,he,ge,L,k,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function me(E,_,L){let k=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=n.TEXTURE_3D);const ee=rt(E,_),G=_.source;t.bindTexture(k,E.__webglTexture,n.TEXTURE0+L);const Ee=i.get(G);if(G.version!==Ee.__version||ee===!0){t.activeTexture(n.TEXTURE0+L);const oe=it.getPrimaries(it.workingColorSpace),Te=_.colorSpace===Ci?null:it.getPrimaries(_.colorSpace),we=_.colorSpace===Ci||oe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ce=v(_.image,!1,r.maxTextureSize);ce=re(_,ce);const ye=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let Ae=y(_.internalFormat,ye,Pe,_.colorSpace,_.isVideoTexture);Le(k,_);let _e;const We=_.mipmaps,U=_.isVideoTexture!==!0,he=Ee.__version===void 0||ee===!0,ge=G.dataReady,Re=A(_,ce);if(_.isDepthTexture)Ae=S(_.format===Bs,_.type),he&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ae,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ce.width,ce.height,0,ye,Pe,null));else if(_.isDataTexture)if(We.length>0){U&&he&&t.texStorage2D(n.TEXTURE_2D,Re,Ae,We[0].width,We[0].height);for(let ue=0,se=We.length;ue<se;ue++)_e=We[ue],U?ge&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,_e.width,_e.height,ye,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,ue,Ae,_e.width,_e.height,0,ye,Pe,_e.data);_.generateMipmaps=!1}else U?(he&&t.texStorage2D(n.TEXTURE_2D,Re,Ae,ce.width,ce.height),ge&&te(_,ce,ye,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ae,ce.width,ce.height,0,ye,Pe,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ae,We[0].width,We[0].height,ce.depth);for(let ue=0,se=We.length;ue<se;ue++)if(_e=We[ue],_.format!==wn)if(ye!==null)if(U){if(ge)if(_.layerUpdates.size>0){const De=yd(_e.width,_e.height,_.format,_.type);for(const Xe of _.layerUpdates){const dt=_e.data.subarray(Xe*De/_e.data.BYTES_PER_ELEMENT,(Xe+1)*De/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Xe,_e.width,_e.height,1,ye,dt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,_e.width,_e.height,ce.depth,ye,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Ae,_e.width,_e.height,ce.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,_e.width,_e.height,ce.depth,ye,Pe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Ae,_e.width,_e.height,ce.depth,0,ye,Pe,_e.data)}else{U&&he&&t.texStorage2D(n.TEXTURE_2D,Re,Ae,We[0].width,We[0].height);for(let ue=0,se=We.length;ue<se;ue++)_e=We[ue],_.format!==wn?ye!==null?U?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ge&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,_e.width,_e.height,ye,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,ue,Ae,_e.width,_e.height,0,ye,Pe,_e.data)}else if(_.isDataArrayTexture)if(U){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ae,ce.width,ce.height,ce.depth),ge)if(_.layerUpdates.size>0){const ue=yd(ce.width,ce.height,_.format,_.type);for(const se of _.layerUpdates){const De=ce.data.subarray(se*ue/ce.data.BYTES_PER_ELEMENT,(se+1)*ue/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ce.width,ce.height,1,ye,Pe,De)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Pe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ce.width,ce.height,ce.depth,0,ye,Pe,ce.data);else if(_.isData3DTexture)U?(he&&t.texStorage3D(n.TEXTURE_3D,Re,Ae,ce.width,ce.height,ce.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Pe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ce.width,ce.height,ce.depth,0,ye,Pe,ce.data);else if(_.isFramebufferTexture){if(he)if(U)t.texStorage2D(n.TEXTURE_2D,Re,Ae,ce.width,ce.height);else{let ue=ce.width,se=ce.height;for(let De=0;De<Re;De++)t.texImage2D(n.TEXTURE_2D,De,Ae,ue,se,0,ye,Pe,null),ue>>=1,se>>=1}}else if(We.length>0){if(U&&he){const ue=xe(We[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ae,ue.width,ue.height)}for(let ue=0,se=We.length;ue<se;ue++)_e=We[ue],U?ge&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ye,Pe,_e):t.texImage2D(n.TEXTURE_2D,ue,Ae,ye,Pe,_e);_.generateMipmaps=!1}else if(U){if(he){const ue=xe(ce);t.texStorage2D(n.TEXTURE_2D,Re,Ae,ue.width,ue.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Pe,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ae,ye,Pe,ce);g(_)&&h(k),Ee.__version=G.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function pe(E,_,L){if(_.image.length!==6)return;const k=rt(E,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const G=i.get(ee);if(ee.version!==G.__version||k===!0){t.activeTexture(n.TEXTURE0+L);const Ee=it.getPrimaries(it.workingColorSpace),oe=_.colorSpace===Ci?null:it.getPrimaries(_.colorSpace),Te=_.colorSpace===Ci||Ee===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!we&&!ce?ye[se]=v(_.image[se],!0,r.maxCubemapSize):ye[se]=ce?_.image[se].image:_.image[se],ye[se]=re(_,ye[se]);const Pe=ye[0],Ae=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),We=y(_.internalFormat,Ae,_e,_.colorSpace),U=_.isVideoTexture!==!0,he=G.__version===void 0||k===!0,ge=ee.dataReady;let Re=A(_,Pe);Le(n.TEXTURE_CUBE_MAP,_);let ue;if(we){U&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,We,Pe.width,Pe.height);for(let se=0;se<6;se++){ue=ye[se].mipmaps;for(let De=0;De<ue.length;De++){const Xe=ue[De];_.format!==wn?Ae!==null?U?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,Xe.width,Xe.height,Ae,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,We,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,Xe.width,Xe.height,Ae,_e,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,We,Xe.width,Xe.height,0,Ae,_e,Xe.data)}}}else{if(ue=_.mipmaps,U&&he){ue.length>0&&Re++;const se=xe(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,We,se.width,se.height)}for(let se=0;se<6;se++)if(ce){U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Ae,_e,ye[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,ye[se].width,ye[se].height,0,Ae,_e,ye[se].data);for(let De=0;De<ue.length;De++){const dt=ue[De].image[se].image;U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,dt.width,dt.height,Ae,_e,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,We,dt.width,dt.height,0,Ae,_e,dt.data)}}else{U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,_e,ye[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,Ae,_e,ye[se]);for(let De=0;De<ue.length;De++){const Xe=ue[De];U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,Ae,_e,Xe.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,We,Ae,_e,Xe.image[se])}}}g(_)&&h(n.TEXTURE_CUBE_MAP),G.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Oe(E,_,L,k,ee,G){const Ee=s.convert(L.format,L.colorSpace),oe=s.convert(L.type),Te=y(L.internalFormat,Ee,oe,L.colorSpace),we=i.get(_),ce=i.get(L);if(ce.__renderTarget=_,!we.__hasExternalTextures){const ye=Math.max(1,_.width>>G),Pe=Math.max(1,_.height>>G);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,G,Te,ye,Pe,_.depth,0,Ee,oe,null):t.texImage2D(ee,G,Te,ye,Pe,0,Ee,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),K(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,ee,ce.__webglTexture,0,ae(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,ee,ce.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(E,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const k=_.depthTexture,ee=k&&k.isDepthTexture?k.type:null,G=S(_.stencilBuffer,ee),Ee=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=ae(_);K(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,G,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,E)}else{const k=_.textures;for(let ee=0;ee<k.length;ee++){const G=k[ee],Ee=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),Te=y(G.internalFormat,Ee,oe,G.colorSpace),we=ae(_);L&&K(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Te,_.width,_.height):K(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Te,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(_.depthTexture);k.__renderTarget=_,(!k.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie(_.depthTexture,0);const ee=k.__webglTexture,G=ae(_);if(_.depthTexture.format===Fs)K(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Bs)K(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function St(E){const _=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",ee)};k.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=k}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const k=E.texture.mipmaps;k&&k.length>0?ze(_.__webglFramebuffer[0],E):ze(_.__webglFramebuffer,E)}else if(L){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=n.createRenderbuffer(),Fe(_.__webglDepthbuffer[k],E,!1);else{const ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,G)}}else{const k=E.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Fe(_.__webglDepthbuffer,E,!1);else{const ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(E,_,L){const k=i.get(E);_!==void 0&&Oe(k.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&St(E)}function x(E){const _=E.texture,L=i.get(E),k=i.get(_);E.addEventListener("dispose",R);const ee=E.textures,G=E.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=_.version,a.memory.textures++),G){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let Te=0;Te<_.mipmaps.length;Te++)L.__webglFramebuffer[oe][Te]=n.createFramebuffer()}else L.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)L.__webglFramebuffer[oe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let oe=0,Te=ee.length;oe<Te;oe++){const we=i.get(ee[oe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&K(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const Te=ee[oe];L.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);const we=s.convert(Te.format,Te.colorSpace),ce=s.convert(Te.type),ye=y(Te.internalFormat,we,ce,Te.colorSpace,E.isXRRenderTarget===!0),Pe=ae(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ye,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Le(n.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)Oe(L.__webglFramebuffer[oe][Te],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te);else Oe(L.__webglFramebuffer[oe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let oe=0,Te=ee.length;oe<Te;oe++){const we=ee[oe],ce=i.get(we);let ye=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ye=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),Le(ye,we),Oe(L.__webglFramebuffer,E,we,n.COLOR_ATTACHMENT0+oe,ye,0),g(we)&&h(ye)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,k.__webglTexture),Le(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)Oe(L.__webglFramebuffer[Te],E,_,n.COLOR_ATTACHMENT0,oe,Te);else Oe(L.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,oe,0);g(_)&&h(oe),t.unbindTexture()}E.depthBuffer&&St(E)}function V(E){const _=E.textures;for(let L=0,k=_.length;L<k;L++){const ee=_[L];if(g(ee)){const G=M(E),Ee=i.get(ee).__webglTexture;t.bindTexture(G,Ee),h(G),t.unbindTexture()}}}const $=[],Q=[];function W(E){if(E.samples>0){if(K(E)===!1){const _=E.textures,L=E.width,k=E.height;let ee=n.COLOR_BUFFER_BIT;const G=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(E),oe=_.length>1;if(oe)for(let we=0;we<_.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=E.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let we=0;we<_.length;we++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[we]);const ce=i.get(_[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,L,k,0,0,L,k,ee,n.NEAREST),l===!0&&($.length=0,Q.length=0,$.push(n.COLOR_ATTACHMENT0+we),E.depthBuffer&&E.resolveDepthBuffer===!1&&($.push(G),Q.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<_.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[we]);const ce=i.get(_[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ae(E){return Math.min(r.maxSamples,E.samples)}function K(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ne(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function re(E,_){const L=E.colorSpace,k=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==Zr&&L!==Ci&&(it.getTransfer(L)===ct?(k!==wn||ee!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function xe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=ie,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=O,this.rebindTextures=P,this.setupRenderTarget=x,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=K}function VE(n,e){function t(i,r=Ci){let s;const a=it.getTransfer(r);if(i===pi)return n.UNSIGNED_BYTE;if(i===Gu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===im)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tm)return n.BYTE;if(i===nm)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===Vu)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===ui)return n.HALF_FLOAT;if(i===rm)return n.ALPHA;if(i===sm)return n.RGB;if(i===wn)return n.RGBA;if(i===Fs)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===am)return n.RED;if(i===Xu)return n.RED_INTEGER;if(i===om)return n.RG;if(i===ju)return n.RG_INTEGER;if(i===$u)return n.RGBA_INTEGER;if(i===Fa||i===Ba||i===za||i===ka)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Ac||i===Cc||i===Rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pc||i===Ic||i===Dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pc||i===Ic)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Uc||i===Oc||i===Nc||i===Fc||i===Bc||i===zc||i===kc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ha||i===$c||i===qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ha)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lm||i===Yc||i===Kc||i===Zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ha)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Am extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Am(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wt({vertexShader:GE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new Io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends ns{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,m=null;const v=new XE,g={},h=t.getContextAttributes();let M=null,y=null;const S=[],A=[],I=new Ke;let R=null;const D=new _n;D.viewport=new bt;const w=new _n;w.viewport=new bt;const b=[D,w],C=new dS;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=S[te];return me===void 0&&(me=new Al,S[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=S[te];return me===void 0&&(me=new Al,S[te]=me),me.getGripSpace()},this.getHand=function(te){let me=S[te];return me===void 0&&(me=new Al,S[te]=me),me.getHandSpace()};function J(te){const me=A.indexOf(te.inputSource);if(me===-1)return;const pe=S[me];pe!==void 0&&(pe.update(te.inputSource,te.frame,c||a),pe.dispatchEvent({type:te.type,data:te.inputSource}))}function ie(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",F);for(let te=0;te<S.length;te++){const me=A[te];me!==null&&(A[te]=null,S[te].disconnect(me))}z=null,H=null,v.reset();for(const te in g)delete g[te];e.setRenderTarget(M),p=null,d=null,f=null,r=null,y=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",F),h.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Oe=null,Fe=null;h.depth&&(Fe=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=h.stencil?Bs:Fs,Oe=h.stencil?Ns:or);const ze={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};d=f.createProjectionLayer(ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new In(d.textureWidth,d.textureHeight,{format:wn,type:pi,depthTexture:new Sm(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new In(p.framebufferWidth,p.framebufferHeight,{format:wn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(te){for(let me=0;me<te.removed.length;me++){const pe=te.removed[me],Oe=A.indexOf(pe);Oe>=0&&(A[Oe]=null,S[Oe].disconnect(pe))}for(let me=0;me<te.added.length;me++){const pe=te.added[me];let Oe=A.indexOf(pe);if(Oe===-1){for(let ze=0;ze<S.length;ze++)if(ze>=A.length){A.push(pe),Oe=ze;break}else if(A[ze]===null){A[ze]=pe,Oe=ze;break}if(Oe===-1)break}const Fe=S[Oe];Fe&&Fe.connect(pe)}}const j=new X,O=new X;function le(te,me,pe){j.setFromMatrixPosition(me.matrixWorld),O.setFromMatrixPosition(pe.matrixWorld);const Oe=j.distanceTo(O),Fe=me.projectionMatrix.elements,ze=pe.projectionMatrix.elements,St=Fe[14]/(Fe[10]-1),P=Fe[14]/(Fe[10]+1),x=(Fe[9]+1)/Fe[5],V=(Fe[9]-1)/Fe[5],$=(Fe[8]-1)/Fe[0],Q=(ze[8]+1)/ze[0],W=St*$,ae=St*Q,K=Oe/(-$+Q),ne=K*-$;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ne),te.translateZ(K),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Fe[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const re=St+K,xe=P+K,E=W-ne,_=ae+(Oe-ne),L=x*P/xe*re,k=V*P/xe*re;te.projectionMatrix.makePerspective(E,_,L,k,re,xe),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ve(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let me=te.near,pe=te.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),C.near=w.near=D.near=me,C.far=w.far=D.far=pe,(z!==C.near||H!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,H=C.far),C.layers.mask=te.layers.mask|6,D.layers.mask=C.layers.mask&3,w.layers.mask=C.layers.mask&5;const Oe=te.parent,Fe=C.cameras;ve(C,Oe);for(let ze=0;ze<Fe.length;ze++)ve(Fe[ze],Oe);Fe.length===2?le(C,D,w):C.projectionMatrix.copy(D.projectionMatrix),be(te,C,Oe)};function be(te,me,pe){pe===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Jc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(C)},this.getCameraTexture=function(te){return g[te]};let Le=null;function rt(te,me){if(u=me.getViewerPose(c||a),m=me,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Oe=!1;pe.length!==C.cameras.length&&(C.cameras.length=0,Oe=!0);for(let P=0;P<pe.length;P++){const x=pe[P];let V=null;if(p!==null)V=p.getViewport(x);else{const Q=f.getViewSubImage(d,x);V=Q.viewport,P===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let $=b[P];$===void 0&&($=new _n,$.layers.enable(P),$.viewport=new bt,b[P]=$),$.matrix.fromArray(x.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(x.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(V.x,V.y,V.width,V.height),P===0&&(C.matrix.copy($.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Oe===!0&&C.cameras.push($)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const P=f.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&v.init(P,r.renderState)}if(Fe&&Fe.includes("camera-access")&&(e.state.unbindTexture(),f))for(let P=0;P<pe.length;P++){const x=pe[P].camera;if(x){let V=g[x];V||(V=new Am,g[x]=V);const $=f.getCameraImage(x);V.sourceTexture=$}}}for(let pe=0;pe<S.length;pe++){const Oe=A[pe],Fe=S[pe];Oe!==null&&Fe!==void 0&&Fe.update(Oe,me,c||a)}Le&&Le(te,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),m=null}const et=new bm;et.setAnimationLoop(rt),this.setAnimationLoop=function(te){Le=te},this.dispose=function(){}}}const $i=new jn,$E=new wt;function qE(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,gm(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,M,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),v(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,M,y):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Zt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Zt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const M=e.get(h),y=M.envMap,S=M.envMapRotation;y&&(g.envMap.value=y,$i.copy(S),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),g.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler($i)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,M,y){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*M,g.scale.value=y*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,M){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){const M=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const S=y.program;i.uniformBlockBinding(M,S)}function c(M,y){let S=r[M.id];S===void 0&&(m(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",g));const A=y.program;i.updateUBOMapping(M,A);const I=e.render.frame;s[M.id]!==I&&(d(M),s[M.id]=I)}function u(M){const y=f();M.__bindingPointIndex=y;const S=n.createBuffer(),A=M.__size,I=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=r[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let I=0,R=S.length;I<R;I++){const D=Array.isArray(S[I])?S[I]:[S[I]];for(let w=0,b=D.length;w<b;w++){const C=D[w];if(p(C,I,w,A)===!0){const z=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let J=0;for(let ie=0;ie<H.length;ie++){const F=H[ie],j=v(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,z+J,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,J),J+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,y,S,A){const I=M.value,R=y+"_"+S;if(A[R]===void 0)return typeof I=="number"||typeof I=="boolean"?A[R]=I:A[R]=I.clone(),!0;{const D=A[R];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return A[R]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function m(M){const y=M.uniforms;let S=0;const A=16;for(let R=0,D=y.length;R<D;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,C=w.length;b<C;b++){const z=w[b],H=Array.isArray(z.value)?z.value:[z.value];for(let J=0,ie=H.length;J<ie;J++){const F=H[J],j=v(F),O=S%A,le=O%j.boundary,ve=O+le;S+=le,ve!==0&&A-ve<j.storage&&(S+=A-ve),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=j.storage}}}const I=S%A;return I>0&&(S+=A-I),M.__size=S,M.__cache={},this}function v(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class KE{constructor(e={}){const{canvas:t=Ux(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,h=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=vn;let I=0,R=0,D=null,w=-1,b=null;const C=new bt,z=new bt;let H=null;const J=new He(0);let ie=0,F=t.width,j=t.height,O=1,le=null,ve=null;const be=new bt(0,0,F,j),Le=new bt(0,0,F,j);let rt=!1;const et=new xm;let te=!1,me=!1;const pe=new wt,Oe=new X,Fe=new bt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function P(){return D===null?O:1}let x=i;function V(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hu}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",ue,!1),x===null){const N="webgl2";if(x=V(N,T),x===null)throw V(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,Q,W,ae,K,ne,re,xe,E,_,L,k,ee,G,Ee,oe,Te,we,ce,ye,Pe,Ae,_e,We;function U(){$=new aM(x),$.init(),Ae=new VE(x,$),Q=new Qb(x,$,e,Ae),W=new kE(x,$),Q.reversedDepthBuffer&&d&&W.buffers.depth.setReversed(!0),ae=new cM(x),K=new AE,ne=new HE(x,$,W,K,Q,Ae,ae),re=new tM(S),xe=new sM(S),E=new mS(x),_e=new Zb(x,E),_=new oM(x,E,ae,_e),L=new fM(x,_,E,ae),ce=new uM(x,Q,ne),oe=new eM(K),k=new wE(S,re,xe,$,Q,_e,oe),ee=new qE(S,K),G=new RE,Ee=new OE($),we=new Kb(S,re,xe,W,L,p,l),Te=new BE(S,L,Q),We=new YE(x,ae,Q,W),ye=new Jb(x,$,ae),Pe=new lM(x,$,ae),ae.programs=k.programs,S.capabilities=Q,S.extensions=$,S.properties=K,S.renderLists=G,S.shadowMap=Te,S.state=W,S.info=ae}U();const he=new jE(S,x);this.xr=he,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(F,j,!1))},this.getSize=function(T){return T.set(F,j)},this.setSize=function(T,N,q=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,j=N,t.width=Math.floor(T*O),t.height=Math.floor(N*O),q===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(F*O,j*O).floor()},this.setDrawingBufferSize=function(T,N,q){F=T,j=N,O=q,t.width=Math.floor(T*q),t.height=Math.floor(N*q),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,N,q,Z){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,N,q,Z),W.viewport(C.copy(be).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,N,q,Z){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,N,q,Z),W.scissor(z.copy(Le).multiplyScalar(O).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){W.setScissorTest(rt=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,q=!0){let Z=0;if(T){let B=!1;if(D!==null){const fe=D.texture.format;B=fe===$u||fe===ju||fe===Xu}if(B){const fe=D.texture.type,Me=fe===pi||fe===or||fe===Os||fe===Ns||fe===Gu||fe===Wu,Ie=we.getClearColor(),Ce=we.getClearAlpha(),ke=Ie.r,Ve=Ie.g,Ne=Ie.b;Me?(m[0]=ke,m[1]=Ve,m[2]=Ne,m[3]=Ce,x.clearBufferuiv(x.COLOR,0,m)):(v[0]=ke,v[1]=Ve,v[2]=Ne,v[3]=Ce,x.clearBufferiv(x.COLOR,0,v))}else Z|=x.COLOR_BUFFER_BIT}N&&(Z|=x.DEPTH_BUFFER_BIT),q&&(Z|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),we.dispose(),G.dispose(),Ee.dispose(),K.dispose(),re.dispose(),xe.dispose(),L.dispose(),_e.dispose(),We.dispose(),k.dispose(),he.dispose(),he.removeEventListener("sessionstart",Un),he.removeEventListener("sessionend",gf),Bi.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ae.autoReset,N=Te.enabled,q=Te.autoUpdate,Z=Te.needsUpdate,B=Te.type;U(),ae.autoReset=T,Te.enabled=N,Te.autoUpdate=q,Te.needsUpdate=Z,Te.type=B}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const N=T.target;N.removeEventListener("dispose",se),De(N)}function De(T){Xe(T),K.remove(T)}function Xe(T){const N=K.get(T).programs;N!==void 0&&(N.forEach(function(q){k.releaseProgram(q)}),T.isShaderMaterial&&k.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,q,Z,B,fe){N===null&&(N=ze);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Ie=fv(T,N,q,Z,B);W.setMaterial(Z,Me);let Ce=q.index,ke=1;if(Z.wireframe===!0){if(Ce=_.getWireframeAttribute(q),Ce===void 0)return;ke=2}const Ve=q.drawRange,Ne=q.attributes.position;let Ze=Ve.start*ke,lt=(Ve.start+Ve.count)*ke;fe!==null&&(Ze=Math.max(Ze,fe.start*ke),lt=Math.min(lt,(fe.start+fe.count)*ke)),Ce!==null?(Ze=Math.max(Ze,0),lt=Math.min(lt,Ce.count)):Ne!=null&&(Ze=Math.max(Ze,0),lt=Math.min(lt,Ne.count));const yt=lt-Ze;if(yt<0||yt===1/0)return;_e.setup(B,Z,Ie,q,Ce);let mt,ut=ye;if(Ce!==null&&(mt=E.get(Ce),ut=Pe,ut.setIndex(mt)),B.isMesh)Z.wireframe===!0?(W.setLineWidth(Z.wireframeLinewidth*P()),ut.setMode(x.LINES)):ut.setMode(x.TRIANGLES);else if(B.isLine){let Be=Z.linewidth;Be===void 0&&(Be=1),W.setLineWidth(Be*P()),B.isLineSegments?ut.setMode(x.LINES):B.isLineLoop?ut.setMode(x.LINE_LOOP):ut.setMode(x.LINE_STRIP)}else B.isPoints?ut.setMode(x.POINTS):B.isSprite&&ut.setMode(x.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Be=B._multiDrawStarts,_t=B._multiDrawCounts,nt=B._multiDrawCount,tn=Ce?E.get(Ce).bytesPerElement:1,pr=K.get(Z).currentProgram.getUniforms();for(let nn=0;nn<nt;nn++)pr.setValue(x,"_gl_DrawID",nn),ut.render(Be[nn]/tn,_t[nn])}else if(B.isInstancedMesh)ut.renderInstances(Ze,yt,B.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_t=Math.min(q.instanceCount,Be);ut.renderInstances(Ze,yt,_t)}else ut.render(Ze,yt)};function dt(T,N,q){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=Zt,T.needsUpdate=!0,ta(T,N,q),T.side=Li,T.needsUpdate=!0,ta(T,N,q),T.side=si):ta(T,N,q)}this.compile=function(T,N,q=null){q===null&&(q=T),h=Ee.get(q),h.init(N),y.push(h),q.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),T!==q&&T.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const Z=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Ie=fe[Me];dt(Ie,q,B),Z.add(Ie)}else dt(fe,q,B),Z.add(fe)}),h=y.pop(),Z},this.compileAsync=function(T,N,q=null){const Z=this.compile(T,N,q);return new Promise(B=>{function fe(){if(Z.forEach(function(Me){K.get(Me).currentProgram.isReady()&&Z.delete(Me)}),Z.size===0){B(T);return}setTimeout(fe,10)}$.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let st=null;function $n(T){st&&st(T)}function Un(){Bi.stop()}function gf(){Bi.start()}const Bi=new bm;Bi.setAnimationLoop($n),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(T){st=T,he.setAnimationLoop(T),T===null?Bi.stop():Bi.start()},he.addEventListener("sessionstart",Un),he.addEventListener("sessionend",gf),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,N,D),h=Ee.get(T,y.length),h.init(N),y.push(h),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(pe,Hn,N.reversedDepth),me=this.localClippingEnabled,te=oe.init(this.clippingPlanes,me),g=G.get(T,M.length),g.init(),M.push(g),he.enabled===!0&&he.isPresenting===!0){const fe=S.xr.getDepthSensingMesh();fe!==null&&Wo(fe,N,-1/0,S.sortObjects)}Wo(T,N,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(le,ve),St=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,St&&we.addToRenderList(g,T),this.info.render.frame++,te===!0&&oe.beginShadows();const q=h.state.shadowsArray;Te.render(q,T,N),te===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,B=g.transmissive;if(h.setupLights(),N.isArrayCamera){const fe=N.cameras;if(B.length>0)for(let Me=0,Ie=fe.length;Me<Ie;Me++){const Ce=fe[Me];_f(Z,B,T,Ce)}St&&we.render(T);for(let Me=0,Ie=fe.length;Me<Ie;Me++){const Ce=fe[Me];vf(g,T,Ce,Ce.viewport)}}else B.length>0&&_f(Z,B,T,N),St&&we.render(T),vf(g,T,N);D!==null&&R===0&&(ne.updateMultisampleRenderTarget(D),ne.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(S,T,N),_e.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(h=y[y.length-1],te===!0&&oe.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Wo(T,N,q,Z){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){Z&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const Me=L.update(T),Ie=T.material;Ie.visible&&g.push(T,Me,Ie,q,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||et.intersectsObject(T))){const Me=L.update(T),Ie=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Fe.copy(Me.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(Ie)){const Ce=Me.groups;for(let ke=0,Ve=Ce.length;ke<Ve;ke++){const Ne=Ce[ke],Ze=Ie[Ne.materialIndex];Ze&&Ze.visible&&g.push(T,Me,Ze,q,Fe.z,Ne)}}else Ie.visible&&g.push(T,Me,Ie,q,Fe.z,null)}}const fe=T.children;for(let Me=0,Ie=fe.length;Me<Ie;Me++)Wo(fe[Me],N,q,Z)}function vf(T,N,q,Z){const B=T.opaque,fe=T.transmissive,Me=T.transparent;h.setupLightsView(q),te===!0&&oe.setGlobalState(S.clippingPlanes,q),Z&&W.viewport(C.copy(Z)),B.length>0&&ea(B,N,q),fe.length>0&&ea(fe,N,q),Me.length>0&&ea(Me,N,q),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function _f(T,N,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Z.id]===void 0&&(h.state.transmissionRenderTarget[Z.id]=new In(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?ui:pi,minFilter:tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const fe=h.state.transmissionRenderTarget[Z.id],Me=Z.viewport||C;fe.setSize(Me.z*S.transmissionResolutionScale,Me.w*S.transmissionResolutionScale);const Ie=S.getRenderTarget(),Ce=S.getActiveCubeFace(),ke=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(J),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),St&&we.render(q);const Ve=S.toneMapping;S.toneMapping=Ii;const Ne=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),h.setupLightsView(Z),te===!0&&oe.setGlobalState(S.clippingPlanes,Z),ea(T,q,Z),ne.updateMultisampleRenderTarget(fe),ne.updateRenderTargetMipmap(fe),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let lt=0,yt=N.length;lt<yt;lt++){const mt=N[lt],ut=mt.object,Be=mt.geometry,_t=mt.material,nt=mt.group;if(_t.side===si&&ut.layers.test(Z.layers)){const tn=_t.side;_t.side=Zt,_t.needsUpdate=!0,xf(ut,q,Z,Be,_t,nt),_t.side=tn,_t.needsUpdate=!0,Ze=!0}}Ze===!0&&(ne.updateMultisampleRenderTarget(fe),ne.updateRenderTargetMipmap(fe))}S.setRenderTarget(Ie,Ce,ke),S.setClearColor(J,ie),Ne!==void 0&&(Z.viewport=Ne),S.toneMapping=Ve}function ea(T,N,q){const Z=N.isScene===!0?N.overrideMaterial:null;for(let B=0,fe=T.length;B<fe;B++){const Me=T[B],Ie=Me.object,Ce=Me.geometry,ke=Me.group;let Ve=Me.material;Ve.allowOverride===!0&&Z!==null&&(Ve=Z),Ie.layers.test(q.layers)&&xf(Ie,N,q,Ce,Ve,ke)}}function xf(T,N,q,Z,B,fe){T.onBeforeRender(S,N,q,Z,B,fe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(S,N,q,Z,T,fe),B.transparent===!0&&B.side===si&&B.forceSinglePass===!1?(B.side=Zt,B.needsUpdate=!0,S.renderBufferDirect(q,N,Z,B,T,fe),B.side=Li,B.needsUpdate=!0,S.renderBufferDirect(q,N,Z,B,T,fe),B.side=si):S.renderBufferDirect(q,N,Z,B,T,fe),T.onAfterRender(S,N,q,Z,B,fe)}function ta(T,N,q){N.isScene!==!0&&(N=ze);const Z=K.get(T),B=h.state.lights,fe=h.state.shadowsArray,Me=B.state.version,Ie=k.getParameters(T,B.state,fe,N,q),Ce=k.getProgramCacheKey(Ie);let ke=Z.programs;Z.environment=T.isMeshStandardMaterial?N.environment:null,Z.fog=N.fog,Z.envMap=(T.isMeshStandardMaterial?xe:re).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",se),ke=new Map,Z.programs=ke);let Ve=ke.get(Ce);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Me)return yf(T,Ie),Ve}else Ie.uniforms=k.getUniforms(T),T.onBeforeCompile(Ie,S),Ve=k.acquireProgram(Ie,Ce),ke.set(Ce,Ve),Z.uniforms=Ie.uniforms;const Ne=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=oe.uniform),yf(T,Ie),Z.needsLights=hv(T),Z.lightsStateVersion=Me,Z.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function Sf(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Va.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function yf(T,N){const q=K.get(T);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function fv(T,N,q,Z,B){N.isScene!==!0&&(N=ze),ne.resetTextureUnits();const fe=N.fog,Me=Z.isMeshStandardMaterial?N.environment:null,Ie=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Zr,Ce=(Z.isMeshStandardMaterial?xe:re).get(Z.envMap||Me),ke=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ne=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,lt=!!q.morphAttributes.color;let yt=Ii;Z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(yt=S.toneMapping);const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=mt!==void 0?mt.length:0,Be=K.get(Z),_t=h.state.lights;if(te===!0&&(me===!0||T!==b)){const kt=T===b&&Z.id===w;oe.setState(Z,T,kt)}let nt=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==_t.state.version||Be.outputColorSpace!==Ie||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==Ce||Z.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==oe.numPlanes||Be.numIntersection!==oe.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Ve||Be.morphTargets!==Ne||Be.morphNormals!==Ze||Be.morphColors!==lt||Be.toneMapping!==yt||Be.morphTargetsCount!==ut)&&(nt=!0):(nt=!0,Be.__version=Z.version);let tn=Be.currentProgram;nt===!0&&(tn=ta(Z,N,B));let pr=!1,nn=!1,os=!1;const xt=tn.getUniforms(),hn=Be.uniforms;if(W.useProgram(tn.program)&&(pr=!0,nn=!0,os=!0),Z.id!==w&&(w=Z.id,nn=!0),pr||b!==T){W.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xt.setValue(x,"projectionMatrix",T.projectionMatrix),xt.setValue(x,"viewMatrix",T.matrixWorldInverse);const jt=xt.map.cameraPosition;jt!==void 0&&jt.setValue(x,Oe.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&xt.setValue(x,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xt.setValue(x,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,nn=!0,os=!0)}if(B.isSkinnedMesh){xt.setOptional(x,B,"bindMatrix"),xt.setOptional(x,B,"bindMatrixInverse");const kt=B.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),xt.setValue(x,"boneTexture",kt.boneTexture,ne))}B.isBatchedMesh&&(xt.setOptional(x,B,"batchingTexture"),xt.setValue(x,"batchingTexture",B._matricesTexture,ne),xt.setOptional(x,B,"batchingIdTexture"),xt.setValue(x,"batchingIdTexture",B._indirectTexture,ne),xt.setOptional(x,B,"batchingColorTexture"),B._colorsTexture!==null&&xt.setValue(x,"batchingColorTexture",B._colorsTexture,ne));const pn=q.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ce.update(B,q,tn),(nn||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,xt.setValue(x,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(hn.envMap.value=Ce,hn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&N.environment!==null&&(hn.envMapIntensity.value=N.environmentIntensity),nn&&(xt.setValue(x,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&dv(hn,os),fe&&Z.fog===!0&&ee.refreshFogUniforms(hn,fe),ee.refreshMaterialUniforms(hn,Z,O,j,h.state.transmissionRenderTarget[T.id]),Va.upload(x,Sf(Be),hn,ne)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Va.upload(x,Sf(Be),hn,ne),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xt.setValue(x,"center",B.center),xt.setValue(x,"modelViewMatrix",B.modelViewMatrix),xt.setValue(x,"normalMatrix",B.normalMatrix),xt.setValue(x,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const kt=Z.uniformsGroups;for(let jt=0,Xo=kt.length;jt<Xo;jt++){const zi=kt[jt];We.update(zi,tn),We.bind(zi,tn)}}return tn}function dv(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function hv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,N,q){const Z=K.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),K.get(T.texture).__webglTexture=N,K.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const q=K.get(T);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0};const pv=x.createFramebuffer();this.setRenderTarget=function(T,N=0,q=0){D=T,I=N,R=q;let Z=!0,B=null,fe=!1,Me=!1;if(T){const Ce=K.get(T);if(Ce.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(x.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)ne.setupRenderTarget(T);else if(Ce.__hasExternalTextures)ne.rebindTextures(T,K.get(T.texture).__webglTexture,K.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(Ce.__boundDepthTexture!==Ne){if(Ne!==null&&K.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const Ve=K.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?B=Ve[N][q]:B=Ve[N],fe=!0):T.samples>0&&ne.useMultisampledRTT(T)===!1?B=K.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[q]:B=Ve,C.copy(T.viewport),z.copy(T.scissor),H=T.scissorTest}else C.copy(be).multiplyScalar(O).floor(),z.copy(Le).multiplyScalar(O).floor(),H=rt;if(q!==0&&(B=pv),W.bindFramebuffer(x.FRAMEBUFFER,B)&&Z&&W.drawBuffers(T,B),W.viewport(C),W.scissor(z),W.setScissorTest(H),fe){const Ce=K.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,q)}else if(Me){const Ce=N;for(let ke=0;ke<T.textures.length;ke++){const Ve=K.get(T.textures[ke]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,q,Ce)}}else if(T!==null&&q!==0){const Ce=K.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ce.__webglTexture,q)}w=-1},this.readRenderTargetPixels=function(T,N,q,Z,B,fe,Me,Ie=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){W.bindFramebuffer(x.FRAMEBUFFER,Ce);try{const ke=T.textures[Ie],Ve=ke.format,Ne=ke.type;if(!Q.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-Z&&q>=0&&q<=T.height-B&&(T.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ie),x.readPixels(N,q,Z,B,Ae.convert(Ve),Ae.convert(Ne),fe))}finally{const ke=D!==null?K.get(D).__webglFramebuffer:null;W.bindFramebuffer(x.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,N,q,Z,B,fe,Me,Ie=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce)if(N>=0&&N<=T.width-Z&&q>=0&&q<=T.height-B){W.bindFramebuffer(x.FRAMEBUFFER,Ce);const ke=T.textures[Ie],Ve=ke.format,Ne=ke.type;if(!Q.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ze),x.bufferData(x.PIXEL_PACK_BUFFER,fe.byteLength,x.STREAM_READ),T.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ie),x.readPixels(N,q,Z,B,Ae.convert(Ve),Ae.convert(Ne),0);const lt=D!==null?K.get(D).__webglFramebuffer:null;W.bindFramebuffer(x.FRAMEBUFFER,lt);const yt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Ox(x,yt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ze),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,fe),x.deleteBuffer(Ze),x.deleteSync(yt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,q=0){const Z=Math.pow(2,-q),B=Math.floor(T.image.width*Z),fe=Math.floor(T.image.height*Z),Me=N!==null?N.x:0,Ie=N!==null?N.y:0;ne.setTexture2D(T,0),x.copyTexSubImage2D(x.TEXTURE_2D,q,0,0,Me,Ie,B,fe),W.unbindTexture()};const mv=x.createFramebuffer(),gv=x.createFramebuffer();this.copyTextureToTexture=function(T,N,q=null,Z=null,B=0,fe=null){fe===null&&(B!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=B,B=0):fe=0);let Me,Ie,Ce,ke,Ve,Ne,Ze,lt,yt;const mt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(q!==null)Me=q.max.x-q.min.x,Ie=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,Ve=q.min.y,Ne=q.isBox3?q.min.z:0;else{const pn=Math.pow(2,-B);Me=Math.floor(mt.width*pn),Ie=Math.floor(mt.height*pn),T.isDataArrayTexture?Ce=mt.depth:T.isData3DTexture?Ce=Math.floor(mt.depth*pn):Ce=1,ke=0,Ve=0,Ne=0}Z!==null?(Ze=Z.x,lt=Z.y,yt=Z.z):(Ze=0,lt=0,yt=0);const ut=Ae.convert(N.format),Be=Ae.convert(N.type);let _t;N.isData3DTexture?(ne.setTexture3D(N,0),_t=x.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ne.setTexture2DArray(N,0),_t=x.TEXTURE_2D_ARRAY):(ne.setTexture2D(N,0),_t=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,N.unpackAlignment);const nt=x.getParameter(x.UNPACK_ROW_LENGTH),tn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),pr=x.getParameter(x.UNPACK_SKIP_PIXELS),nn=x.getParameter(x.UNPACK_SKIP_ROWS),os=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ke),x.pixelStorei(x.UNPACK_SKIP_ROWS,Ve),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ne);const xt=T.isDataArrayTexture||T.isData3DTexture,hn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const pn=K.get(T),kt=K.get(N),jt=K.get(pn.__renderTarget),Xo=K.get(kt.__renderTarget);W.bindFramebuffer(x.READ_FRAMEBUFFER,jt.__webglFramebuffer),W.bindFramebuffer(x.DRAW_FRAMEBUFFER,Xo.__webglFramebuffer);for(let zi=0;zi<Ce;zi++)xt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,K.get(T).__webglTexture,B,Ne+zi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,K.get(N).__webglTexture,fe,yt+zi)),x.blitFramebuffer(ke,Ve,Me,Ie,Ze,lt,Me,Ie,x.DEPTH_BUFFER_BIT,x.NEAREST);W.bindFramebuffer(x.READ_FRAMEBUFFER,null),W.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||K.has(T)){const pn=K.get(T),kt=K.get(N);W.bindFramebuffer(x.READ_FRAMEBUFFER,mv),W.bindFramebuffer(x.DRAW_FRAMEBUFFER,gv);for(let jt=0;jt<Ce;jt++)xt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,pn.__webglTexture,B,Ne+jt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,pn.__webglTexture,B),hn?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,kt.__webglTexture,fe,yt+jt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,kt.__webglTexture,fe),B!==0?x.blitFramebuffer(ke,Ve,Me,Ie,Ze,lt,Me,Ie,x.COLOR_BUFFER_BIT,x.NEAREST):hn?x.copyTexSubImage3D(_t,fe,Ze,lt,yt+jt,ke,Ve,Me,Ie):x.copyTexSubImage2D(_t,fe,Ze,lt,ke,Ve,Me,Ie);W.bindFramebuffer(x.READ_FRAMEBUFFER,null),W.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else hn?T.isDataTexture||T.isData3DTexture?x.texSubImage3D(_t,fe,Ze,lt,yt,Me,Ie,Ce,ut,Be,mt.data):N.isCompressedArrayTexture?x.compressedTexSubImage3D(_t,fe,Ze,lt,yt,Me,Ie,Ce,ut,mt.data):x.texSubImage3D(_t,fe,Ze,lt,yt,Me,Ie,Ce,ut,Be,mt):T.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,fe,Ze,lt,Me,Ie,ut,Be,mt.data):T.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,fe,Ze,lt,mt.width,mt.height,ut,mt.data):x.texSubImage2D(x.TEXTURE_2D,fe,Ze,lt,Me,Ie,ut,Be,mt);x.pixelStorei(x.UNPACK_ROW_LENGTH,nt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,tn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,pr),x.pixelStorei(x.UNPACK_SKIP_ROWS,nn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,os),fe===0&&N.generateMipmaps&&x.generateMipmap(_t),W.unbindTexture()},this.copyTextureToTexture3D=function(T,N,q=null,Z=null,B=0){return Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,q,Z,B)},this.initRenderTarget=function(T){K.get(T).__webglFramebuffer===void 0&&ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){I=0,R=0,D=null,W.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const jd={uniforms:{color1:{value:new He(.2,.4,.8)},color2:{value:new He(.8,.2,.4)}},vertexShader:`
    uniform float progress;
    uniform float amplitude;
    uniform float frequency;
    uniform float speed;
    varying vec3 vPos;
    varying vec3 vNormal;
    varying vec3 vViewDir;
      uniform float time;

    void main() {
      vec3 pos = position;
      vPos = position;
      vNormal = normalMatrix * normal;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewDir = -mvPosition.xyz;
      float phase = mod(progress, 10.0);
      pos.y += sin(pos.x * frequency * 2.0 + phase) * amplitude;
      pos.y += 0.5 * sin(pos.z * frequency * 2.0 + phase * 1.5) * amplitude;
      pos.x += 0.3 * cos(pos.y * frequency * 1.5 + phase * 0.8) * amplitude;
      vPos = pos;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    uniform float amplitude;
    uniform float frequency;
    uniform float speed;
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec3 vPos;
    varying vec3 vNormal;
    varying vec3 vViewDir;
    uniform float progress;

    void main() {
      float mixFactor = sin(vPos.y * frequency * 0.25 + progress) * 0.5 + 0.5;

      vec3 waveColor = mix(color1, color2, mixFactor);

      float dist = length(vPos.xy);
      vec3 radialColor = vec3(dist * 0.5 + 0.5);

      float rim = 1.0 - max(dot(normalize(vNormal), normalize(vViewDir)), 0.0);
      rim = pow(rim, 2.5);
      vec3 glowColor = vec3(1.0, 0.8, 0.5) * rim;

      vec3 finalColor = waveColor * radialColor * 0.6 + glowColor * 0.4;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};function ZE(n){return new Wt({uniforms:n,vertexShader:jd.vertexShader,fragmentShader:jd.fragmentShader})}const Ga={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JE=new ym(-1,1,1,-1,0,1);class QE extends _i{constructor(){super(),this.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Sn([0,2,0,0,2,0],2))}}const eT=new QE;class Cm{constructor(e){this._mesh=new An(eT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class tT extends js{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oo.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cm(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class $d extends js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class nT extends js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class iT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tT(Ga),this.copyPass.material.blending=ci,this.clock=new hS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$d!==void 0&&(a instanceof $d?i=!0:a instanceof nT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rT extends js{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const sT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Qr extends js{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(s,a,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new In(s,a,{type:ui});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new In(s,a,{type:ui});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=sT;this.highPassUniforms=oo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ke(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=oo.clone(Ga.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,blending:dc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new Ku,this._fsQuad=new Cm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ke(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Qr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Qr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Qr.BlurDirectionX=new Ke(1,0);Qr.BlurDirectionY=new Ke(0,1);function aT(n,e,t){const i=new iT(n),r=new rT(e,t);i.addPass(r);const s=new Qr(new Ke(window.innerWidth,window.innerHeight),.8,1,.9);return i.addPass(s),i}function ni(n,e,t,i){return n+(e-n)*Math.min(1,t*i)}function oT(n,e,t,i){n.lerp(e,Math.min(1,t*i))}function lT(n,e,t,i){n.x=ni(n.x,e.x,t,i),n.y=ni(n.y,e.y,t,i),n.z=ni(n.z,e.z,t,i)}class cT{canvas;scene;camera;renderer;object;composer;animationId;uniforms;lastTime=0;lastFov;isVisible=!0;sceneSettings;targets={fov:75,rotation:new jn(0,0,0),scale:new X(1,1,1),yaw:0,pitch:0};uniformTargets={speed:0,amplitude:0,frequency:0,color1:new He(16777215),color2:new He(16777215)};lerpSpeed=1;constructor(e,t,i){this.sceneSettings=i,this.canvas=e,this.uniforms=t,this.uniformTargets.speed=t.speed.value,this.uniformTargets.amplitude=t.amplitude.value,this.uniformTargets.frequency=t.frequency.value,this.scene=new aS,this.camera=new _n(i.fov||75,window.innerWidth/window.innerHeight,i.near||.1,i.far||100),this.camera.position.z=3,this.targets.fov=i.fov||75,this.targets.rotation.y=i.yaw||0,this.targets.rotation.x=i.pitch||0,this.camera.fov=this.targets.fov,this.camera.rotation.y=this.targets.yaw,this.camera.rotation.x=this.targets.pitch,this.camera.updateProjectionMatrix(),this.lastFov=this.camera.fov,this.renderer=new KE({canvas:this.canvas,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.createObject(),this.composer=aT(this.renderer,this.scene,this.camera),this.animate=this.animate.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),window.addEventListener("resize",this.onWindowResize),document.addEventListener("visibilitychange",this.onVisibilityChange),this.animate()}createObject(){const e=ZE(this.uniforms);this.object=new An(new Zu(1,128,128),e),this.object.scale.set(this.sceneSettings.scaleX,this.sceneSettings.scaleX,this.sceneSettings.scaleY),this.scene.add(this.object)}progress=0;animate(){if(!this.isVisible)return;this.animationId=requestAnimationFrame(this.animate);const e=performance.now()*.001;let t=e-this.lastTime;this.lastTime=e,t=Math.min(t,.05),t=Math.min(t,.05),this.uniforms.time.value=e;const i=ni(this.camera.fov,this.targets.fov,this.lerpSpeed,t);Math.abs(i-this.lastFov)>.01&&(this.camera.fov=i,this.camera.updateProjectionMatrix(),this.lastFov=i),this.object.scale.equals(this.targets.scale)||oT(this.object.scale,this.targets.scale,this.lerpSpeed,t),(Math.abs(this.object.rotation.x-this.targets.rotation.x)>1e-4||Math.abs(this.object.rotation.y-this.targets.rotation.y)>1e-4||Math.abs(this.object.rotation.z-this.targets.rotation.z)>1e-4)&&lT(this.object.rotation,this.targets.rotation,this.lerpSpeed,t),this.camera.rotation.y=ni(this.camera.rotation.y,this.targets.yaw,this.lerpSpeed,t),this.camera.rotation.x=ni(this.camera.rotation.x,this.targets.pitch,this.lerpSpeed,t),this.uniforms.speed.value=ni(this.uniforms.speed.value,this.uniformTargets.speed,.001,1),this.uniforms.amplitude.value=ni(this.uniforms.amplitude.value,this.uniformTargets.amplitude,this.lerpSpeed,t),this.uniforms.frequency.value=ni(this.uniforms.frequency.value,this.uniformTargets.frequency,this.lerpSpeed,t),this.uniforms.color1.value.lerp(this.uniformTargets.color1,this.lerpSpeed*t),this.uniforms.color2.value.lerp(this.uniformTargets.color2,this.lerpSpeed*t),this.progress+=this.uniforms.speed.value*t,this.uniforms.progress.value=this.progress,this.uniforms.deltaTime.value=t,this.composer.render()}onWindowResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}onVisibilityChange(){this.isVisible=!document.hidden,this.isVisible?this.animate():cancelAnimationFrame(this.animationId)}setYaw(e){this.targets.yaw=e}setPitch(e){this.targets.pitch=e}setFov(e){this.targets.fov=e}setRotation(e,t,i){this.targets.rotation.set(e,t,i)}setScale(e,t,i){this.targets.scale.set(e,t,i)}setUniforms(e){e.speed!==void 0&&(this.uniformTargets.speed=e.speed),e.amplitude!==void 0&&(this.uniformTargets.amplitude=e.amplitude),e.frequency!==void 0&&(this.uniformTargets.frequency=e.frequency),e.color1!==void 0&&this.uniformTargets.color1.copy(e.color1),e.color2!==void 0&&this.uniformTargets.color2.copy(e.color2)}dispose(){cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onWindowResize),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.renderer.dispose(),this.object.geometry&&this.object.geometry.dispose(),this.object.material&&this.object.material.dispose(),this.composer?.dispose()}}const qd=[{uniforms:{speed:{value:.41},amplitude:{value:.2},frequency:{value:4.68},time:{value:0},color1:{value:new He("#3366CC")},color2:{value:new He("#CC3366")},progress:{value:0},deltaTime:{value:0}},settings:{fov:40,yaw:0,pitch:0,backgroundColor:0,near:.1,far:1e3,scaleX:5,scaleY:.58,scaleZ:.92,rotationX:0,rotationY:0,rotationZ:0}},{uniforms:{speed:{value:1},amplitude:{value:.5},frequency:{value:2},time:{value:0},color1:{value:new He("#a62f1a")},color2:{value:new He("#E68F19")},progress:{value:0},deltaTime:{value:0}},settings:{fov:65,yaw:0,pitch:0,backgroundColor:0,near:.1,far:1e3,scaleX:1,scaleY:1,scaleZ:1,rotationX:0,rotationY:0,rotationZ:0}},{uniforms:{speed:{value:.39},amplitude:{value:.04},frequency:{value:.51},time:{value:0},color1:{value:new He("#8050B3")},color2:{value:new He("#33CC99")},progress:{value:0},deltaTime:{value:0}},settings:{fov:25,yaw:.22,pitch:0,backgroundColor:0,near:.1,far:1e3,scaleX:1,scaleY:1,scaleZ:1,rotationX:1,rotationY:1,rotationZ:1}},{uniforms:{speed:{value:1.45},amplitude:{value:.75},frequency:{value:4.66},time:{value:0},color1:{value:new He("#3366cc")},color2:{value:new He("#cc3366")},progress:{value:0},deltaTime:{value:0}},settings:{fov:20,yaw:0,pitch:.3,backgroundColor:0,near:.1,far:1e3,scaleX:.53,scaleY:.58,scaleZ:.62,rotationX:0,rotationY:6.4633,rotationZ:0}}],uT={class:"scene-container"},fT=Nu({__name:"ShaderCube",props:{currentPage:{}},setup(n){const e=n;sr(()=>e.currentPage,c=>{console.log("Page changed:",c),l(c)});const t=zr(null),i=zr(0),r=Fr({amplitude:0,frequency:0,speed:0,fov:75,yaw:0,pitch:0,time:0,color1:"#ffffff",color2:"#ffffff",rotationX:0,rotationY:0,rotationZ:0,scaleX:0,scaleY:0,scaleZ:0}),s=Fr({speed:{value:r.speed},amplitude:{value:r.amplitude},frequency:{value:r.frequency},time:{value:r.time},color1:{value:new He(r.color1)},color2:{value:new He(r.color2)},progress:{value:0},deltaTime:{value:0}}),a=Fr(qd[0].settings);let o;function l(c){const u=qd[c];r.speed=u.uniforms.speed.value,r.amplitude=u.uniforms.amplitude.value,r.frequency=u.uniforms.frequency.value,r.color1=`#${u.uniforms.color1.value.getHexString()}`,r.color2=`#${u.uniforms.color2.value.getHexString()}`,r.fov=u.settings.fov,r.yaw=u.settings.yaw,r.pitch=u.settings.pitch,r.scaleX=u.settings.scaleX,r.scaleY=u.settings.scaleY,r.scaleZ=u.settings.scaleZ,r.rotationX=u.settings.rotationX,r.rotationY=u.settings.rotationY,r.rotationZ=u.settings.rotationZ,o.setUniforms({speed:u.uniforms.speed.value,amplitude:u.uniforms.amplitude.value,frequency:u.uniforms.frequency.value,color1:u.uniforms.color1.value,color2:u.uniforms.color2.value}),o.setFov(u.settings.fov),o.setYaw(u.settings.yaw),o.setYaw(u.settings.pitch),o.setScale(u.settings.scaleX,u.settings.scaleY,u.settings.scaleZ),o.setRotation(u.settings.rotationX,u.settings.rotationY,u.settings.rotationZ)}return To(()=>{o=new cT(t.value,s,a),l(i.value),sr(i,c=>{l(c)}),sr(r,c=>{o.setUniforms({speed:c.speed,amplitude:c.amplitude,frequency:c.frequency,color1:new He(c.color1),color2:new He(c.color2)}),o.setFov(c.fov),o.setYaw(c.yaw),o.setPitch(c.pitch),o.setScale(c.scaleX,c.scaleY,c.scaleZ),o.setRotation(c.rotationX,c.rotationY,c.rotationZ)},{deep:!0})}),Fu(()=>{o.dispose()}),(c,u)=>(Yt(),Kt("div",uT,[tt("canvas",{ref_key:"canvas",ref:t,class:"background-canvas"},null,512)]))}}),dr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},dT=dr(fT,[["__scopeId","data-v-95e718c5"]]),hT={},pT={class:"parent"},mT={class:"social-icons"},gT={href:"https://github.com/KOODIJONI",target:"_blank","aria-label":"GitHub Profile"},vT={href:"https://www.linkedin.com/in/joni-m%C3%A4yr%C3%A4-ba07632b3/",target:"_blank","aria-label":"LinkedIn Profile"},_T={href:"mailto:jjmayra1@outlook.com",target:"_blank","aria-label":"Send Email"};function xT(n,e){const t=Ds("font-awesome-icon");return Yt(),Kt("div",pT,[tt("div",mT,[tt("a",gT,[pt(t,{icon:["fab","github"],class:"icon"})]),tt("a",vT,[pt(t,{icon:["fab","linkedin"],class:"icon"})]),tt("a",_T,[pt(t,{icon:["fas","envelope"],class:"icon"})])])])}const Lo=dr(hT,[["render",xT],["__scopeId","data-v-b41c4f3c"]]),ST={},yT={class:"intro-page"};function bT(n,e,t,i,r,s){const a=Ds("socialIcons");return Yt(),Kt("div",yT,[e[0]||(e[0]=tt("div",{class:"title"},[tt("h1",{class:"name-text"},"Joni Mäyrä"),tt("p",{class:"bottom-text"},"Ohjelmistokehitys")],-1)),pt(a)])}const MT=dr(ST,[["render",bT],["__scopeId","data-v-d4602447"]]),ET={class:"header"},TT={class:"nav"},wT=["href"],AT={__name:"header",setup(n){const e=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}];return(t,i)=>(Yt(),Kt("header",ET,[tt("nav",TT,[tt("ul",null,[(Yt(),Kt(ln,null,sc(e,r=>tt("li",{key:r.name},[tt("a",{href:r.href},Ss(r.name),9,wT)])),64))])])]))}},CT={components:{SocialIcons:Lo}},RT={class:"about-page"};function PT(n,e,t,i,r,s){const a=Ds("socialIcons");return Yt(),Kt("div",RT,[e[0]||(e[0]=i0('<div class="title" data-v-a49b1d1b><h1 class="heading-text" data-v-a49b1d1b>Tietoa minusta</h1><p class="sub-heading" data-v-a49b1d1b>Kuka olen ja mitä teen?</p></div><div class="content" data-v-a49b1d1b><p class="about-text" data-v-a49b1d1b> Olen Joni Mäyrä, ohjelmistokehittäjä ja tietotekniikan opiskelija AMK:ssa. Erikoistun laiteläheiseen ohjelmistokehitykseen. Minulla on vahva pohja ohjelmoinnissa ja teknisissä ratkaisuissa, ja kehitän itseäni jatkuvasti uusissa teknologioissa. </p><p class="about-text" data-v-a49b1d1b> Rakastan luoda moderneja, käyttäjäystävällisiä ja visuaalisesti näyttäviä sovelluksia, erityisesti 3D-grafiikan ja vuorovaikutteisten animaatioiden parissa. Työskentelen mm. JavaScript-, TypeScript-, Node.js-, Three.js- ja C++-teknologioilla. </p><p class="about-text" data-v-a49b1d1b> Olen toteuttanut projekteja VST3-kitarasäröefekteistä, Qt- ja Unity-sovelluksiin sekä responsiivisiin web-portfolioihin, yhdistäen frontendin, backendin ja reaaliaikaisen visualisoinnin. </p></div>',2)),pt(a)])}const IT=dr(CT,[["render",PT],["__scopeId","data-v-a49b1d1b"]]);function DT(n=".container"){const e=zr(0);let t=null;function i(){if(!t)return;const r=t.scrollTop,s=window.innerHeight;e.value=Math.round(r/s)}return To(()=>{t=document.querySelector(n),t&&t.addEventListener("scroll",i)}),Fu(()=>{t&&t.removeEventListener("scroll",i)}),{currentPage:e}}function Yd(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Qu(n,e){n===void 0&&(n={}),e===void 0&&(e={});const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof n[i]>"u"?n[i]=e[i]:Yd(e[i])&&Yd(n[i])&&Object.keys(e[i]).length>0&&Qu(n[i],e[i])})}const Rm={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function hr(){const n=typeof document<"u"?document:{};return Qu(n,Rm),n}const LT={document:Rm,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function Xt(){const n=typeof window<"u"?window:{};return Qu(n,LT),n}function UT(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function OT(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Pm(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function lo(){return Date.now()}function NT(n){const e=Xt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function FT(n,e){e===void 0&&(e="x");const t=Xt();let i,r,s;const a=NT(n);return t.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function Aa(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function BT(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function on(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!BT(i)){const r=Object.keys(Object(i)).filter(s=>e.indexOf(s)<0);for(let s=0,a=r.length;s<a;s+=1){const o=r[s],l=Object.getOwnPropertyDescriptor(i,o);l!==void 0&&l.enumerable&&(Aa(n[o])&&Aa(i[o])?i[o].__swiper__?n[o]=i[o]:on(n[o],i[o]):!Aa(n[o])&&Aa(i[o])?(n[o]={},i[o].__swiper__?n[o]=i[o]:on(n[o],i[o])):n[o]=i[o])}}}return n}function Ca(n,e,t){n.style.setProperty(e,t)}function Im(n){let{swiper:e,targetPosition:t,side:i}=n;const r=Xt(),s=-e.translate;let a=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(d,p)=>c==="next"&&d>=p||c==="prev"&&d<=p,f=()=>{o=new Date().getTime(),a===null&&(a=o);const d=Math.max(Math.min((o-a)/l,1),0),p=.5-Math.cos(d*Math.PI)/2;let m=s+p*(t-s);if(u(m,t)&&(m=t),e.wrapperEl.scrollTo({[i]:m}),u(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function ef(n){return n.querySelector(".swiper-slide-transform")||n.shadowRoot&&n.shadowRoot.querySelector(".swiper-slide-transform")||n}function li(n,e){e===void 0&&(e="");const t=Xt(),i=[...n.children];return t.HTMLSlotElement&&n instanceof HTMLSlotElement&&i.push(...n.assignedElements()),e?i.filter(r=>r.matches(e)):i}function zT(n,e){const t=[e];for(;t.length>0;){const i=t.shift();if(n===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function kT(n,e){const t=Xt();let i=e.contains(n);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(n),i||(i=zT(n,e))),i}function co(n){try{console.warn(n);return}catch{}}function uo(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:UT(e)),t}function HT(n,e){const t=[];for(;n.previousElementSibling;){const i=n.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function VT(n,e){const t=[];for(;n.nextElementSibling;){const i=n.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function Ri(n,e){return Xt().getComputedStyle(n,null).getPropertyValue(e)}function Kd(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function GT(n,e){const t=[];let i=n.parentElement;for(;i;)t.push(i),i=i.parentElement;return t}function Zd(n,e,t){const i=Xt();return n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function WT(n){return e=>Math.abs(e)>0&&n.browser&&n.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}let Ol;function XT(){const n=Xt(),e=hr();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function Dm(){return Ol||(Ol=XT()),Ol}let Nl;function jT(n){let{userAgent:e}=n===void 0?{}:n;const t=Dm(),i=Xt(),r=i.navigator.platform,s=e||i.navigator.userAgent,a={ios:!1,android:!1},o=i.screen.width,l=i.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const f=s.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=r==="Win32";let m=r==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&m&&t.touch&&v.indexOf(`${o}x${l}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),m=!1),c&&!p&&(a.os="android",a.android=!0),(u||d||f)&&(a.os="ios",a.ios=!0),a}function Lm(n){return n===void 0&&(n={}),Nl||(Nl=jT(n)),Nl}let Fl;function $T(){const n=Xt(),e=Lm();let t=!1;function i(){const o=n.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){const o=String(n.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=i(),a=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:r}}function Um(){return Fl||(Fl=$T()),Fl}function qT(n){let{swiper:e,on:t,emit:i}=n;const r=Xt();let s=null,a=null;const o=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(f=>{a=r.requestAnimationFrame(()=>{const{width:d,height:p}=e;let m=d,v=p;f.forEach(g=>{let{contentBoxSize:h,contentRect:M,target:y}=g;y&&y!==e.el||(m=M?M.width:(h[0]||h).inlineSize,v=M?M.height:(h[0]||h).blockSize)}),(m!==d||v!==p)&&o()})}),s.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",u)})}function YT(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;const s=[],a=Xt(),o=function(u,f){f===void 0&&(f={});const d=a.MutationObserver||a.WebkitMutationObserver,p=new d(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const v=function(){r("observerUpdate",m[0])};a.requestAnimationFrame?a.requestAnimationFrame(v):a.setTimeout(v,0)});p.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:e.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),s.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=GT(e.hostEl);for(let f=0;f<u.length;f+=1)o(u[f])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var KT={on(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=t?"unshift":"push";return n.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][r](e)}),i},once(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(n,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];e.apply(i,a)}return r.__emitterProxy=e,i.on(n,r,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[i](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[i].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,i;for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),i=n):(e=s[0].events,t=s[0].data,i=s[0].context||n),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(c=>{c.apply(i,[l,...t])}),n.eventsListeners&&n.eventsListeners[l]&&n.eventsListeners[l].forEach(c=>{c.apply(i,t)})}),n}};function ZT(){const n=this;let e,t;const i=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=i.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=i.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(Ri(i,"padding-left")||0,10)-parseInt(Ri(i,"padding-right")||0,10),t=t-parseInt(Ri(i,"padding-top")||0,10)-parseInt(Ri(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function JT(){const n=this;function e(b,C){return parseFloat(b.getPropertyValue(n.getDirectionLabel(C))||0)}const t=n.params,{wrapperEl:i,slidesEl:r,size:s,rtlTranslate:a,wrongRTL:o}=n,l=n.virtual&&t.virtual.enabled,c=l?n.virtual.slides.length:n.slides.length,u=li(r,`.${n.params.slideClass}, swiper-slide`),f=l?n.virtual.slides.length:u.length;let d=[];const p=[],m=[];let v=t.slidesOffsetBefore;typeof v=="function"&&(v=t.slidesOffsetBefore.call(n));let g=t.slidesOffsetAfter;typeof g=="function"&&(g=t.slidesOffsetAfter.call(n));const h=n.snapGrid.length,M=n.slidesGrid.length;let y=t.spaceBetween,S=-v,A=0,I=0;if(typeof s>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*s:typeof y=="string"&&(y=parseFloat(y)),n.virtualSize=-y,u.forEach(b=>{a?b.style.marginLeft="":b.style.marginRight="",b.style.marginBottom="",b.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Ca(i,"--swiper-centered-offset-before",""),Ca(i,"--swiper-centered-offset-after",""));const R=t.grid&&t.grid.rows>1&&n.grid;R?n.grid.initSlides(u):n.grid&&n.grid.unsetSlides();let D;const w=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(b=>typeof t.breakpoints[b].slidesPerView<"u").length>0;for(let b=0;b<f;b+=1){D=0;let C;if(u[b]&&(C=u[b]),R&&n.grid.updateSlide(b,C,u),!(u[b]&&Ri(C,"display")==="none")){if(t.slidesPerView==="auto"){w&&(u[b].style[n.getDirectionLabel("width")]="");const z=getComputedStyle(C),H=C.style.transform,J=C.style.webkitTransform;if(H&&(C.style.transform="none"),J&&(C.style.webkitTransform="none"),t.roundLengths)D=n.isHorizontal()?Zd(C,"width"):Zd(C,"height");else{const ie=e(z,"width"),F=e(z,"padding-left"),j=e(z,"padding-right"),O=e(z,"margin-left"),le=e(z,"margin-right"),ve=z.getPropertyValue("box-sizing");if(ve&&ve==="border-box")D=ie+O+le;else{const{clientWidth:be,offsetWidth:Le}=C;D=ie+F+j+O+le+(Le-be)}}H&&(C.style.transform=H),J&&(C.style.webkitTransform=J),t.roundLengths&&(D=Math.floor(D))}else D=(s-(t.slidesPerView-1)*y)/t.slidesPerView,t.roundLengths&&(D=Math.floor(D)),u[b]&&(u[b].style[n.getDirectionLabel("width")]=`${D}px`);u[b]&&(u[b].swiperSlideSize=D),m.push(D),t.centeredSlides?(S=S+D/2+A/2+y,A===0&&b!==0&&(S=S-s/2-y),b===0&&(S=S-s/2-y),Math.abs(S)<1/1e3&&(S=0),t.roundLengths&&(S=Math.floor(S)),I%t.slidesPerGroup===0&&d.push(S),p.push(S)):(t.roundLengths&&(S=Math.floor(S)),(I-Math.min(n.params.slidesPerGroupSkip,I))%n.params.slidesPerGroup===0&&d.push(S),p.push(S),S=S+D+y),n.virtualSize+=D+y,A=D,I+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+g,a&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${n.virtualSize+y}px`),t.setWrapperSize&&(i.style[n.getDirectionLabel("width")]=`${n.virtualSize+y}px`),R&&n.grid.updateWrapperSize(D,d),!t.centeredSlides){const b=[];for(let C=0;C<d.length;C+=1){let z=d[C];t.roundLengths&&(z=Math.floor(z)),d[C]<=n.virtualSize-s&&b.push(z)}d=b,Math.floor(n.virtualSize-s)-Math.floor(d[d.length-1])>1&&d.push(n.virtualSize-s)}if(l&&t.loop){const b=m[0]+y;if(t.slidesPerGroup>1){const C=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),z=b*t.slidesPerGroup;for(let H=0;H<C;H+=1)d.push(d[d.length-1]+z)}for(let C=0;C<n.virtual.slidesBefore+n.virtual.slidesAfter;C+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+b),p.push(p[p.length-1]+b),n.virtualSize+=b}if(d.length===0&&(d=[0]),y!==0){const b=n.isHorizontal()&&a?"marginLeft":n.getDirectionLabel("marginRight");u.filter((C,z)=>!t.cssMode||t.loop?!0:z!==u.length-1).forEach(C=>{C.style[b]=`${y}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let b=0;m.forEach(z=>{b+=z+(y||0)}),b-=y;const C=b>s?b-s:0;d=d.map(z=>z<=0?-v:z>C?C+g:z)}if(t.centerInsufficientSlides){let b=0;m.forEach(z=>{b+=z+(y||0)}),b-=y;const C=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(b+C<s){const z=(s-b-C)/2;d.forEach((H,J)=>{d[J]=H-z}),p.forEach((H,J)=>{p[J]=H+z})}}if(Object.assign(n,{slides:u,snapGrid:d,slidesGrid:p,slidesSizesGrid:m}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Ca(i,"--swiper-centered-offset-before",`${-d[0]}px`),Ca(i,"--swiper-centered-offset-after",`${n.size/2-m[m.length-1]/2}px`);const b=-n.snapGrid[0],C=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(z=>z+b),n.slidesGrid=n.slidesGrid.map(z=>z+C)}if(f!==c&&n.emit("slidesLengthChange"),d.length!==h&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),p.length!==M&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const b=`${t.containerModifierClass}backface-hidden`,C=n.el.classList.contains(b);f<=t.maxBackfaceHiddenSlides?C||n.el.classList.add(b):C&&n.el.classList.remove(b)}}function QT(n){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const a=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const o=e.activeIndex+s;if(o>e.slides.length&&!i)break;t.push(a(o))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const o=t[s].offsetHeight;r=o>r?o:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function ew(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(n.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-n.cssOverflowAdjustment()}const Jd=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function tw(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:r,snapGrid:s}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-n;r&&(a=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<i.length;l+=1){const c=i[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const f=(a+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),d=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),p=-(a-u),m=p+e.slidesSizesGrid[l],v=p>=0&&p<=e.size-e.slidesSizesGrid[l],g=p>=0&&p<e.size-1||m>1&&m<=e.size||p<=0&&m>=e.size;g&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),Jd(c,g,t.slideVisibleClass),Jd(c,v,t.slideFullyVisibleClass),c.progress=r?-f:f,c.originalProgress=r?-d:d}}function nw(n){const e=this;if(typeof n>"u"){const u=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:a,progressLoop:o}=e;const l=s,c=a;if(i===0)r=0,s=!0,a=!0;else{r=(n-e.minTranslate())/i;const u=Math.abs(n-e.minTranslate())<1,f=Math.abs(n-e.maxTranslate())<1;s=u||r<=0,a=f||r>=1,u&&(r=0),f&&(r=1)}if(t.loop){const u=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),d=e.slidesGrid[u],p=e.slidesGrid[f],m=e.slidesGrid[e.slidesGrid.length-1],v=Math.abs(n);v>=d?o=(v-d)/m:o=(v+m-p)/m,o>1&&(o-=1)}Object.assign(e,{progress:r,progressLoop:o,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!a)&&e.emit("fromEdge"),e.emit("progress",r)}const Bl=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function iw(){const n=this,{slides:e,params:t,slidesEl:i,activeIndex:r}=n,s=n.virtual&&t.virtual.enabled,a=n.grid&&t.grid&&t.grid.rows>1,o=f=>li(i,`.${t.slideClass}${f}, swiper-slide${f}`)[0];let l,c,u;if(s)if(t.loop){let f=r-n.virtual.slidesBefore;f<0&&(f=n.virtual.slides.length+f),f>=n.virtual.slides.length&&(f-=n.virtual.slides.length),l=o(`[data-swiper-slide-index="${f}"]`)}else l=o(`[data-swiper-slide-index="${r}"]`);else a?(l=e.find(f=>f.column===r),u=e.find(f=>f.column===r+1),c=e.find(f=>f.column===r-1)):l=e[r];l&&(a||(u=VT(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=HT(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(f=>{Bl(f,f===l,t.slideActiveClass),Bl(f,f===u,t.slideNextClass),Bl(f,f===c,t.slidePrevClass)}),n.emitSlidesClasses()}const Wa=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,i=e.closest(t());if(i){let r=i.querySelector(`.${n.params.lazyPreloaderClass}`);!r&&n.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},zl=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},eu=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),r=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const a=r,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+i+c)),n.slides.forEach((l,c)=>{o.includes(l.column)&&zl(n,c)});return}const s=r+i-1;if(n.params.rewind||n.params.loop)for(let a=r-e;a<=s+e;a+=1){const o=(a%t+t)%t;(o<r||o>s)&&zl(n,o)}else for(let a=Math.max(r-e,0);a<=Math.min(s+e,t-1);a+=1)a!==r&&(a>s||a<r)&&zl(n,a)};function rw(n){const{slidesGrid:e,params:t}=n,i=n.rtlTranslate?n.translate:-n.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?i>=e[s]&&i<e[s+1]-(e[s+1]-e[s])/2?r=s:i>=e[s]&&i<e[s+1]&&(r=s+1):i>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function sw(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:a,snapIndex:o}=e;let l=n,c;const u=p=>{let m=p-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=rw(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const p=Math.min(r.slidesPerGroupSkip,l);c=p+Math.floor((l-p)/r.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===s&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const f=e.grid&&r.grid&&r.grid.rows>1;let d;if(e.virtual&&r.virtual.enabled&&r.loop)d=u(l);else if(f){const p=e.slides.find(v=>v.column===l);let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(p),0)),d=Math.floor(m/r.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?d=parseInt(p,10):d=l}else d=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:d,previousIndex:s,activeIndex:l}),e.initialized&&eu(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==d&&e.emit("realIndexChange"),e.emit("slideChange"))}function aw(n,e){const t=this,i=t.params;let r=n.closest(`.${i.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(o=>{!r&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(r=o)});let s=!1,a;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){s=!0,a=o;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var ow={updateSize:ZT,updateSlides:JT,updateAutoHeight:QT,updateSlidesOffset:ew,updateSlidesProgress:tw,updateProgress:nw,updateSlidesClasses:iw,updateActiveIndex:sw,updateClickedSlide:aw};function lw(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let a=FT(s,n);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function cw(n,e){const t=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=i?-n:n:l=n,r.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:r.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let u;const f=t.maxTranslate()-t.minTranslate();f===0?u=0:u=(n-t.minTranslate())/f,u!==a&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function uw(){return-this.snapGrid[0]}function fw(){return-this.snapGrid[this.snapGrid.length-1]}function dw(n,e,t,i,r){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(i&&n>l?u=l:i&&n<c?u=c:u=n,s.updateProgress(u),a.cssMode){const f=s.isHorizontal();if(e===0)o[f?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return Im({swiper:s,targetPosition:-u,side:f?"left":"top"}),!0;o.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(d){!s||s.destroyed||d.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var hw={getTranslate:lw,setTranslate:cw,minTranslate:uw,maxTranslate:fw,translateTo:dw};function pw(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function Om(n){let{swiper:e,runCallbacks:t,direction:i,step:r}=n;const{activeIndex:s,previousIndex:a}=e;let o=i;o||(s>a?o="next":s<a?o="prev":o="reset"),e.emit(`transition${r}`),t&&o==="reset"?e.emit(`slideResetTransition${r}`):t&&s!==a&&(e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function mw(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Om({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function gw(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Om({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var vw={setTransition:pw,transitionStart:mw,transitionEnd:gw};function _w(n,e,t,i,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let a=n;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:d,wrapperEl:p,enabled:m}=s;if(!m&&!i&&!r||s.destroyed||s.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const v=Math.min(s.params.slidesPerGroupSkip,a);let g=v+Math.floor((a-v)/s.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const h=-l[g];if(o.normalizeSlideIndex)for(let R=0;R<c.length;R+=1){const D=-Math.floor(h*100),w=Math.floor(c[R]*100),b=Math.floor(c[R+1]*100);typeof c[R+1]<"u"?D>=w&&D<b-(b-w)/2?a=R:D>=w&&D<b&&(a=R+1):D>=w&&(a=R)}if(s.initialized&&a!==f&&(!s.allowSlideNext&&(d?h>s.translate&&h>s.minTranslate():h<s.translate&&h<s.minTranslate())||!s.allowSlidePrev&&h>s.translate&&h>s.maxTranslate()&&(f||0)!==a))return!1;a!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(h);let M;a>f?M="next":a<f?M="prev":M="reset";const y=s.virtual&&s.params.virtual.enabled;if(!(y&&r)&&(d&&-h===s.translate||!d&&h===s.translate))return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(h),M!=="reset"&&(s.transitionStart(t,M),s.transitionEnd(t,M)),!1;if(o.cssMode){const R=s.isHorizontal(),D=d?h:-h;if(e===0)y&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),y&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[R?"scrollLeft":"scrollTop"]=D})):p[R?"scrollLeft":"scrollTop"]=D,y&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return Im({swiper:s,targetPosition:D,side:R?"left":"top"}),!0;p.scrollTo({[R?"left":"top"]:D,behavior:"smooth"})}return!0}const I=Um().isSafari;return y&&!r&&I&&s.isElement&&s.virtual.update(!1,!1,a),s.setTransition(e),s.setTranslate(h),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,i),s.transitionStart(t,M),e===0?s.transitionEnd(t,M):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(D){!s||s.destroyed||D.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,M))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function xw(n,e,t,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let a=n;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)a=a+r.virtual.slidesBefore;else{let o;if(s){const d=a*r.params.grid.rows;o=r.slides.find(p=>p.getAttribute("data-swiper-slide-index")*1===d).column}else o=r.getSlideIndexByData(a);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params;let u=r.params.slidesPerView;u==="auto"?u=r.slidesPerViewDynamic():(u=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let f=l-o<u;if(c&&(f=f||o<Math.ceil(u/2)),i&&c&&r.params.slidesPerView!=="auto"&&!s&&(f=!1),f){const d=c?o<r.activeIndex?"prev":"next":o-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:d,slideTo:!0,activeSlideIndex:d==="next"?o+1:o-l+1,slideRealIndex:d==="next"?r.realIndex:void 0})}if(s){const d=a*r.params.grid.rows;a=r.slides.find(p=>p.getAttribute("data-swiper-slide-index")*1===d).column}else a=r.getSlideIndexByData(a)}return requestAnimationFrame(()=>{r.slideTo(a,e,t,i)}),r}function Sw(n,e,t){e===void 0&&(e=!0);const i=this,{enabled:r,params:s,animating:a}=i;if(!r||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:o,c=i.virtual&&s.virtual.enabled;if(s.loop){if(a&&!c&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,n,e,t)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,n,e,t):i.slideTo(i.activeIndex+l,n,e,t)}function yw(n,e,t){e===void 0&&(e=!0);const i=this,{params:r,snapGrid:s,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);const u=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=o?i.translate:-i.translate;function d(M){return M<0?-Math.floor(Math.abs(M)):Math.floor(M)}const p=d(f),m=s.map(M=>d(M)),v=r.freeMode&&r.freeMode.enabled;let g=s[m.indexOf(p)-1];if(typeof g>"u"&&(r.cssMode||v)){let M;s.forEach((y,S)=>{p>=y&&(M=S)}),typeof M<"u"&&(g=v?s[M]:s[M>0?M-1:M])}let h=0;if(typeof g<"u"&&(h=a.indexOf(g),h<0&&(h=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(h=h-i.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),r.rewind&&i.isBeginning){const M=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(M,n,e,t)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(h,n,e,t)}),!0;return i.slideTo(h,n,e,t)}function bw(n,e,t){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof n>"u"&&(n=i.params.speed),i.slideTo(i.activeIndex,n,e,t)}function Mw(n,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof n>"u"&&(n=r.params.speed);let s=r.activeIndex;const a=Math.min(r.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[o]){const c=r.snapGrid[o],u=r.snapGrid[o+1];l-c>(u-c)*i&&(s+=r.params.slidesPerGroup)}else{const c=r.snapGrid[o-1],u=r.snapGrid[o];l-c<=(u-c)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,n,e,t)}function Ew(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,i=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let r=n.getSlideIndexWhenGrid(n.clickedIndex),s;const a=n.isElement?"swiper-slide":`.${e.slideClass}`,o=n.grid&&n.params.grid&&n.params.grid.rows>1;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?n.slideToLoop(s):r>(o?(n.slides.length-i)/2-(n.params.grid.rows-1):n.slides.length-i)?(n.loopFix(),r=n.getSlideIndex(li(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),Pm(()=>{n.slideTo(r)})):n.slideTo(r)}else n.slideTo(r)}var Tw={slideTo:_w,slideToLoop:xw,slideNext:Sw,slidePrev:yw,slideReset:bw,slideToClosest:Mw,slideToClickedSlide:Ew};function ww(n,e){const t=this,{params:i,slidesEl:r}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const s=()=>{li(r,`.${i.slideClass}, swiper-slide`).forEach((p,m)=>{p.setAttribute("data-swiper-slide-index",m)})},a=()=>{const d=li(r,`.${i.slideBlankClass}`);d.forEach(p=>{p.remove()}),d.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||o)&&a();const l=i.slidesPerGroup*(o?i.grid.rows:1),c=t.slides.length%l!==0,u=o&&t.slides.length%i.grid.rows!==0,f=d=>{for(let p=0;p<d;p+=1){const m=t.isElement?uo("swiper-slide",[i.slideBlankClass]):uo("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(m)}};if(c){if(i.loopAddBlankSlides){const d=l-t.slides.length%l;f(d),t.recalcSlides(),t.updateSlides()}else co("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(u){if(i.loopAddBlankSlides){const d=i.grid.rows-t.slides.length%i.grid.rows;f(d),t.recalcSlides(),t.updateSlides()}else co("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();t.loopFix({slideRealIndex:n,direction:i.centeredSlides?void 0:"next",initial:e})}function Aw(n){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:r,activeSlideIndex:s,initial:a,byController:o,byMousewheel:l}=n===void 0?{}:n;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:u,allowSlidePrev:f,allowSlideNext:d,slidesEl:p,params:m}=c,{centeredSlides:v,initialSlide:g}=m;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&m.virtual.enabled){t&&(!m.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):m.centeredSlides&&c.snapIndex<m.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=f,c.allowSlideNext=d,c.emit("loopFix");return}let h=m.slidesPerView;h==="auto"?h=c.slidesPerViewDynamic():(h=Math.ceil(parseFloat(m.slidesPerView,10)),v&&h%2===0&&(h=h+1));const M=m.slidesPerGroupAuto?h:m.slidesPerGroup;let y=v?Math.max(M,Math.ceil(h/2)):M;y%M!==0&&(y+=M-y%M),y+=m.loopAdditionalSlides,c.loopedSlides=y;const S=c.grid&&m.grid&&m.grid.rows>1;u.length<h+y||c.params.effect==="cards"&&u.length<h+y*2?co("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):S&&m.grid.fill==="row"&&co("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const A=[],I=[],R=S?Math.ceil(u.length/m.grid.rows):u.length,D=a&&R-g<h&&!v;let w=D?g:c.activeIndex;typeof s>"u"?s=c.getSlideIndex(u.find(F=>F.classList.contains(m.slideActiveClass))):w=s;const b=i==="next"||!i,C=i==="prev"||!i;let z=0,H=0;const ie=(S?u[s].column:s)+(v&&typeof r>"u"?-h/2+.5:0);if(ie<y){z=Math.max(y-ie,M);for(let F=0;F<y-ie;F+=1){const j=F-Math.floor(F/R)*R;if(S){const O=R-j-1;for(let le=u.length-1;le>=0;le-=1)u[le].column===O&&A.push(le)}else A.push(R-j-1)}}else if(ie+h>R-y){H=Math.max(ie-(R-y*2),M),D&&(H=Math.max(H,h-R+g+1));for(let F=0;F<H;F+=1){const j=F-Math.floor(F/R)*R;S?u.forEach((O,le)=>{O.column===j&&I.push(le)}):I.push(j)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&u.length<h+y*2&&(I.includes(s)&&I.splice(I.indexOf(s),1),A.includes(s)&&A.splice(A.indexOf(s),1)),C&&A.forEach(F=>{u[F].swiperLoopMoveDOM=!0,p.prepend(u[F]),u[F].swiperLoopMoveDOM=!1}),b&&I.forEach(F=>{u[F].swiperLoopMoveDOM=!0,p.append(u[F]),u[F].swiperLoopMoveDOM=!1}),c.recalcSlides(),m.slidesPerView==="auto"?c.updateSlides():S&&(A.length>0&&C||I.length>0&&b)&&c.slides.forEach((F,j)=>{c.grid.updateSlide(j,F,c.slides)}),m.watchSlidesProgress&&c.updateSlidesOffset(),t){if(A.length>0&&C){if(typeof e>"u"){const F=c.slidesGrid[w],O=c.slidesGrid[w+z]-F;l?c.setTranslate(c.translate-O):(c.slideTo(w+Math.ceil(z),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-O,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-O))}else if(r){const F=S?A.length/m.grid.rows:A.length;c.slideTo(c.activeIndex+F,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(I.length>0&&b)if(typeof e>"u"){const F=c.slidesGrid[w],O=c.slidesGrid[w-H]-F;l?c.setTranslate(c.translate-O):(c.slideTo(w-H,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-O,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-O))}else{const F=S?I.length/m.grid.rows:I.length;c.slideTo(c.activeIndex-F,0,!1,!0)}}if(c.allowSlidePrev=f,c.allowSlideNext=d,c.controller&&c.controller.control&&!o){const F={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(j=>{!j.destroyed&&j.params.loop&&j.loopFix({...F,slideTo:j.params.slidesPerView===m.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...F,slideTo:c.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}c.emit("loopFix")}function Cw(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||!t||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const i=[];n.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[s]=r}),n.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{t.append(r)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var Rw={loopCreate:ww,loopFix:Aw,loopDestroy:Cw};function Pw(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Iw(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var Dw={setGrabCursor:Pw,unsetGrabCursor:Iw};function Lw(n,e){e===void 0&&(e=this);function t(i){if(!i||i===hr()||i===Xt())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(n);return!r&&!i.getRootNode?null:r||t(i.getRootNode().host)}return t(e)}function Qd(n,e,t){const i=Xt(),{params:r}=n,s=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return s&&(t<=a||t>=i.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Uw(n){const e=this,t=hr();let i=n;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Qd(e,i,i.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:o}=e;if(!o||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i.target;if(s.touchEventsTarget==="wrapper"&&!kT(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);const f=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,d=!!(i.target&&i.target.shadowRoot);if(s.noSwiping&&(d?Lw(f,l):l.closest(f))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;const p=a.currentX,m=a.currentY;if(!Qd(e,i,p))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=m,r.touchStartTime=lo(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let v=!0;l.matches(r.focusableElements)&&(v=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(r.focusableElements))&&t.activeElement.blur();const g=v&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||g)&&!l.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Ow(n){const e=hr(),t=this,i=t.touchEventsData,{params:r,touches:s,rtlTranslate:a,enabled:o}=t;if(!o||!r.simulateTouch&&n.pointerType==="mouse")return;let l=n;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(A=>A.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,f=c.pageY;if(l.preventedByNestedSwiper){s.startX=u,s.startY=f;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:u,startY:f,currentX:u,currentY:f}),i.touchStartTime=lo());return}if(r.touchReleaseOnEdges&&!r.loop)if(t.isVertical()){if(f<s.startY&&t.translate<=t.maxTranslate()||f>s.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(a&&(u>s.startX&&-t.translate<=t.maxTranslate()||u<s.startX&&-t.translate>=t.minTranslate()))return;if(!a&&(u<s.startX&&t.translate<=t.maxTranslate()||u>s.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=u,s.currentY=f;const d=s.currentX-s.startX,p=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(d**2+p**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let A;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:d*d+p*p>=25&&(A=Math.atan2(Math.abs(p),Math.abs(d))*180/Math.PI,i.isScrolling=t.isHorizontal()?A>r.touchAngle:90-A>r.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let m=t.isHorizontal()?d:p,v=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),s.diff=m,m*=r.touchRatio,a&&(m=-m,v=-v);const g=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=v>0?"prev":"next";const h=t.params.loop&&!r.cssMode,M=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(h&&M&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(A)}i.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),r._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&g!==t.touchesDirection&&h&&M&&Math.abs(m)>=1){Object.assign(s,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let y=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),m>0?(h&&M&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(y=!1,r.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+m)**S))):m<0&&(h&&M&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(y=!1,r.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-m)**S))),y&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(m)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function Nw(n){const e=this,t=e.touchEventsData;let i=n;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].find(A=>A.identifier===t.touchId),!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const f=lo(),d=f-t.touchStartTime;if(e.allowClick){const A=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(A&&A[0]||i.target,A),e.emit("tap click",i),d<300&&f-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=lo(),Pm(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(a.followFinger?p=l?e.translate:-e.translate:p=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-e.maxTranslate()&&!e.params.loop;let v=0,g=e.slidesSizesGrid[0];for(let A=0;A<c.length;A+=A<a.slidesPerGroupSkip?1:a.slidesPerGroup){const I=A<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[A+I]<"u"?(m||p>=c[A]&&p<c[A+I])&&(v=A,g=c[A+I]-c[A]):(m||p>=c[A])&&(v=A,g=c[c.length-1]-c[c.length-2])}let h=null,M=null;a.rewind&&(e.isBeginning?M=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(h=0));const y=(p-c[v])/g,S=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(y>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?h:v+S):e.slideTo(v)),e.swipeDirection==="prev"&&(y>1-a.longSwipesRatio?e.slideTo(v+S):M!==null&&y<0&&Math.abs(y)>a.longSwipesRatio?e.slideTo(M):e.slideTo(v))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(v+S):e.slideTo(v):(e.swipeDirection==="next"&&e.slideTo(h!==null?h:v+S),e.swipeDirection==="prev"&&e.slideTo(M!==null?M:v))}}function eh(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=n,a=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!o?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!a?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=r,n.allowSlideNext=i,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function Fw(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function Bw(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=n;if(!i)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let r;const s=n.maxTranslate()-n.minTranslate();s===0?r=0:r=(n.translate-n.minTranslate())/s,r!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function zw(n){const e=this;Wa(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function kw(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const Nm=(n,e)=>{const t=hr(),{params:i,el:r,wrapperEl:s,device:a}=n,o=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!r||typeof r=="string"||(t[l]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:o}),r[l]("touchstart",n.onTouchStart,{passive:!1}),r[l]("pointerdown",n.onTouchStart,{passive:!1}),t[l]("touchmove",n.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",n.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",n.onTouchEnd,{passive:!0}),t[l]("pointerup",n.onTouchEnd,{passive:!0}),t[l]("pointercancel",n.onTouchEnd,{passive:!0}),t[l]("touchcancel",n.onTouchEnd,{passive:!0}),t[l]("pointerout",n.onTouchEnd,{passive:!0}),t[l]("pointerleave",n.onTouchEnd,{passive:!0}),t[l]("contextmenu",n.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",n.onClick,!0),i.cssMode&&s[l]("scroll",n.onScroll),i.updateOnWindowResize?n[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",eh,!0):n[c]("observerUpdate",eh,!0),r[l]("load",n.onLoad,{capture:!0}))};function Hw(){const n=this,{params:e}=n;n.onTouchStart=Uw.bind(n),n.onTouchMove=Ow.bind(n),n.onTouchEnd=Nw.bind(n),n.onDocumentTouchStart=kw.bind(n),e.cssMode&&(n.onScroll=Bw.bind(n)),n.onClick=Fw.bind(n),n.onLoad=zw.bind(n),Nm(n,"on")}function Vw(){Nm(this,"off")}var Gw={attachEvents:Hw,detachEvents:Vw};const th=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function Ww(){const n=this,{realIndex:e,initialized:t,params:i,el:r}=n,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=hr(),o=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?n.el:a.querySelector(i.breakpointsBase),c=n.getBreakpoint(s,o,l);if(!c||n.currentBreakpoint===c)return;const f=(c in s?s[c]:void 0)||n.originalParams,d=th(n,i),p=th(n,f),m=n.params.grabCursor,v=f.grabCursor,g=i.enabled;d&&!p?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),n.emitContainerClasses()):!d&&p&&(r.classList.add(`${i.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),n.emitContainerClasses()),m&&!v?n.unsetGrabCursor():!m&&v&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(I=>{if(typeof f[I]>"u")return;const R=i[I]&&i[I].enabled,D=f[I]&&f[I].enabled;R&&!D&&n[I].disable(),!R&&D&&n[I].enable()});const h=f.direction&&f.direction!==i.direction,M=i.loop&&(f.slidesPerView!==i.slidesPerView||h),y=i.loop;h&&t&&n.changeDirection(),on(n.params,f);const S=n.params.enabled,A=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),g&&!S?n.disable():!g&&S&&n.enable(),n.currentBreakpoint=c,n.emit("_beforeBreakpoint",f),t&&(M?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!y&&A?(n.loopCreate(e),n.updateSlides()):y&&!A&&n.loopDestroy()),n.emit("breakpoint",f)}function Xw(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let i=!1;const r=Xt(),s=e==="window"?r.innerHeight:t.clientHeight,a=Object.keys(n).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:s*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var jw={setBreakpoint:Ww,getBreakpoint:Xw};function $w(n,e){const t=[];return n.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&t.push(e+r)}):typeof i=="string"&&t.push(e+i)}),t}function qw(){const n=this,{classNames:e,params:t,rtl:i,el:r,device:s}=n,a=$w(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),r.classList.add(...e),n.emitContainerClasses()}function Yw(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var Kw={addClasses:qw,removeClasses:Yw};function Zw(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:i}=t;if(i){const r=n.slides.length-1,s=n.slidesGrid[r]+n.slidesSizesGrid[r]+i*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var Jw={checkOverflow:Zw},nh={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Qw(n,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],s=i[r];if(typeof s!="object"||s===null){on(e,i);return}if(n[r]===!0&&(n[r]={enabled:!0}),r==="navigation"&&n[r]&&n[r].enabled&&!n[r].prevEl&&!n[r].nextEl&&(n[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&n[r]&&n[r].enabled&&!n[r].el&&(n[r].auto=!0),!(r in n&&"enabled"in s)){on(e,i);return}typeof n[r]=="object"&&!("enabled"in n[r])&&(n[r].enabled=!0),n[r]||(n[r]={enabled:!1}),on(e,i)}}const kl={eventsEmitter:KT,update:ow,translate:hw,transition:vw,slide:Tw,loop:Rw,grabCursor:Dw,events:Gw,breakpoints:jw,checkOverflow:Jw,classes:Kw},Hl={};class gn{constructor(){let e,t;for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=on({},t),e&&!t.el&&(t.el=e);const a=hr();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const u=[];return a.querySelectorAll(t.el).forEach(f=>{const d=on({},t,{el:f});u.push(new gn(d))}),u}const o=this;o.__swiper__=!0,o.support=Dm(),o.device=Lm({userAgent:t.userAgent}),o.browser=Um(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const l={};o.modules.forEach(u=>{u({params:t,swiper:o,extendParams:Qw(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=on({},nh,l);return o.params=on({},c,Hl,t),o.originalParams=on({},o.params),o.passedParams=on({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(u=>{o.on(u,o.params.on[u])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,r=li(t,`.${i.slideClass}, swiper-slide`),s=Kd(r[0]);return Kd(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=li(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),a=(i.maxTranslate()-r)*e+r;i.translateTo(a,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:r,slides:s,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=i;let u=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let f=s[c]?Math.ceil(s[c].swiperSlideSize):0,d;for(let p=c+1;p<s.length;p+=1)s[p]&&!d&&(f+=Math.ceil(s[p].swiperSlideSize),u+=1,f>l&&(d=!0));for(let p=c-1;p>=0;p-=1)s[p]&&!d&&(f+=s[p].swiperSlideSize,u+=1,f>l&&(d=!0))}else if(e==="current")for(let f=c+1;f<s.length;f+=1)(t?a[f]+o[f]-a[c]<l:a[f]-a[c]<l)&&(u+=1);else for(let f=c-1;f>=0;f-=1)a[c]-a[f]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Wa(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):li(i,r())[0];return!a&&t.params.createElements&&(a=uo("div",t.params.wrapperClass),i.append(a),li(i,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||Ri(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||Ri(i,"direction")==="rtl"),wrongRTL:Ri(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?Wa(t,s):s.addEventListener("load",a=>{Wa(t,a.target)})}),eu(t),t.initialized=!0,eu(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:r,el:s,wrapperEl:a,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),OT(i)),i.destroyed=!0),null}static extendDefaults(e){on(Hl,e)}static get extendedDefaults(){return Hl}static get defaults(){return nh}static installModule(e){gn.prototype.__modules__||(gn.prototype.__modules__=[]);const t=gn.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>gn.installModule(t)),gn):(gn.installModule(e),gn)}}Object.keys(kl).forEach(n=>{Object.keys(kl[n]).forEach(e=>{gn.prototype[e]=kl[n][e]})});gn.use([qT,YT]);function e1(n){const{effect:e,swiper:t,on:i,setTranslate:r,setTransition:s,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=n;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const f=a?a():{};Object.assign(t.params,f),Object.assign(t.originalParams,f)}),i("setTranslate _virtualUpdated",()=>{t.params.effect===e&&r()}),i("setTransition",(f,d)=>{t.params.effect===e&&s(d)}),i("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>d.remove())}),l()}});let u;i("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(u=!0),requestAnimationFrame(()=>{u&&t.slides&&t.slides.length&&(r(),u=!1)}))})}function t1(n,e){const t=ef(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function ih(n,e,t){const i=`swiper-slide-shadow${t?`-${t}`:""}${` swiper-slide-shadow-${n}`}`,r=ef(e);let s=r.querySelector(`.${i.split(" ").join(".")}`);return s||(s=uo("div",i.split(" ")),r.append(s)),s}function n1(n){let{swiper:e,extendParams:t,on:i}=n;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),e1({effect:"coverflow",swiper:e,on:i,setTranslate:()=>{const{width:a,height:o,slides:l,slidesSizesGrid:c}=e,u=e.params.coverflowEffect,f=e.isHorizontal(),d=e.translate,p=f?-d+a/2:-d+o/2,m=f?u.rotate:-u.rotate,v=u.depth,g=WT(e);for(let h=0,M=l.length;h<M;h+=1){const y=l[h],S=c[h],A=y.swiperSlideOffset,I=(p-A-S/2)/S,R=typeof u.modifier=="function"?u.modifier(I):I*u.modifier;let D=f?m*R:0,w=f?0:m*R,b=-v*Math.abs(R),C=u.stretch;typeof C=="string"&&C.indexOf("%")!==-1&&(C=parseFloat(u.stretch)/100*S);let z=f?0:C*R,H=f?C*R:0,J=1-(1-u.scale)*Math.abs(R);Math.abs(H)<.001&&(H=0),Math.abs(z)<.001&&(z=0),Math.abs(b)<.001&&(b=0),Math.abs(D)<.001&&(D=0),Math.abs(w)<.001&&(w=0),Math.abs(J)<.001&&(J=0);const ie=`translate3d(${H}px,${z}px,${b}px)  rotateX(${g(w)}deg) rotateY(${g(D)}deg) scale(${J})`,F=t1(u,y);if(F.style.transform=ie,y.style.zIndex=-Math.abs(Math.round(R))+1,u.slideShadows){let j=f?y.querySelector(".swiper-slide-shadow-left"):y.querySelector(".swiper-slide-shadow-top"),O=f?y.querySelector(".swiper-slide-shadow-right"):y.querySelector(".swiper-slide-shadow-bottom");j||(j=ih("coverflow",y,f?"left":"top")),O||(O=ih("coverflow",y,f?"right":"bottom")),j&&(j.style.opacity=R>0?R:0),O&&(O.style.opacity=-R>0?-R:0)}}},setTransition:a=>{e.slides.map(l=>ef(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const i1={name:"ProjectsCarousel",props:{projects:{type:Array,required:!0}},mounted(){new gn(".projects-carousel",{modules:[n1],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,coverflowEffect:{rotate:-5,stretch:0,depth:150,modifier:1,slideShadows:!0},spaceBetween:40,breakpoints:{320:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:40},1440:{slidesPerView:4,spaceBetween:50}}})}},r1={class:"swiper projects-carousel"},s1={class:"swiper-wrapper"},a1=["src"],o1={class:"project_name"},l1={class:"project_desc"},c1={class:"project-tech"},u1=["href"];function f1(n,e,t,i,r,s){return Yt(),Kt("div",r1,[tt("div",s1,[(Yt(!0),Kt(ln,null,sc(t.projects,a=>(Yt(),Kt("div",{class:"swiper-slide",key:a.name},[tt("img",{src:a.image,alt:"Project Image",class:"project-image"},null,8,a1),tt("h2",o1,Ss(a.name),1),tt("p",l1,Ss(a.description),1),tt("div",c1,[(Yt(!0),Kt(ln,null,sc(a.tech,o=>(Yt(),Kt("span",{key:o,class:"tech-badge"},Ss(o),1))),128))]),tt("a",{href:a.link,target:"_blank",class:"project-link"},"GitHub",8,u1)]))),128))])])}const d1=dr(i1,[["render",f1],["__scopeId","data-v-12207acb"]]),h1={components:{ProjectsCarousel:d1,socialIcons:Lo},data(){const n=[{name:"GuitarDistortion VST3",description:"Perus kitarasäröefekti VST3-pluginina ja standalone-sovelluksena.",tech:["C++","JUCE","Audio Processing"],link:"https://github.com/KOODIJONI/GuitarDistortion_vst3_plugin",image:"/images/guitardistortion.png"},{name:"AllGuitarScales",description:"Näyttää kitarasoinnut kaikilla otelaudan nauhoilla.",tech:["C++","Qt"],link:"https://github.com/KOODIJONI/GuitarScales",image:"/images/AllGuitarScales.png"},{name:"Convolutional Neural Network for Audio Classification",description:"Koulutin ja toteutin CNN-mallin, joka tunnistaa ääniavainsanoja reaaliajassa. Projekti sisältää oman käyttöliittymän ja mallin tason toteutukset.",tech:["Python","NumPy"],link:"https://github.com/KOODIJONI/Convolutional_neural_network_for_audio_classification",image:"/images/neuralnetwork.png"},{name:"RocketBank",description:"Pankkijärjestelmäprojekti kurssille: backend, web-frontend ja Qt-sovellus.",tech:["Node.js","MySQL","Qt","JavaScript"],link:"https://github.com/KOODIJONI/OhjelmistokehityksenSovellusprojekti-k25",image:"/images/rocketbank.png"},{name:"Portfolio-verkkosivu",description:"Henkilökohtainen portfolio, jossa on räätälöity shader-tausta ja moderni käyttöliittymä.",tech:["Node.js","Vue","Three","Typescript"],link:"https://github.com/KOODIJONI/",image:"/images/tama.png"}];return{projects:[...n,...n,...n]}}},p1={class:"projects-page"};function m1(n,e,t,i,r,s){const a=Ds("ProjectsCarousel"),o=Ds("socialIcons");return Yt(),Kt("div",p1,[e[0]||(e[0]=tt("div",{class:"title"},[tt("h1",{class:"name-text"},"Projektini"),tt("p",{class:"bottom-text"},"Kuratoitu kokoelma ohjelmointi- ja sovellusprojekteistani")],-1)),pt(a,{projects:r.projects},null,8,["projects"]),pt(o)])}const g1=dr(h1,[["render",m1],["__scopeId","data-v-ba6816d9"]]);function Fm(n,e){return function(){return n.apply(e,arguments)}}const{toString:v1}=Object.prototype,{getPrototypeOf:tf}=Object,{iterator:Uo,toStringTag:Bm}=Symbol,Oo=(n=>e=>{const t=v1.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ln=n=>(n=n.toLowerCase(),e=>Oo(e)===n),No=n=>e=>typeof e===n,{isArray:rs}=Array,es=No("undefined");function $s(n){return n!==null&&!es(n)&&n.constructor!==null&&!es(n.constructor)&&Qt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const zm=Ln("ArrayBuffer");function _1(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&zm(n.buffer),e}const x1=No("string"),Qt=No("function"),km=No("number"),qs=n=>n!==null&&typeof n=="object",S1=n=>n===!0||n===!1,Xa=n=>{if(Oo(n)!=="object")return!1;const e=tf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Bm in n)&&!(Uo in n)},y1=n=>{if(!qs(n)||$s(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},b1=Ln("Date"),M1=Ln("File"),E1=Ln("Blob"),T1=Ln("FileList"),w1=n=>qs(n)&&Qt(n.pipe),A1=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Qt(n.append)&&((e=Oo(n))==="formdata"||e==="object"&&Qt(n.toString)&&n.toString()==="[object FormData]"))},C1=Ln("URLSearchParams"),[R1,P1,I1,D1]=["ReadableStream","Request","Response","Headers"].map(Ln),L1=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ys(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),rs(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if($s(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,n[o],o,n)}}function Hm(n,e){if($s(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const nr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Vm=n=>!es(n)&&n!==nr;function tu(){const{caseless:n,skipUndefined:e}=Vm(this)&&this||{},t={},i=(r,s)=>{const a=n&&Hm(t,s)||s;Xa(t[a])&&Xa(r)?t[a]=tu(t[a],r):Xa(r)?t[a]=tu({},r):rs(r)?t[a]=r.slice():(!e||!es(r))&&(t[a]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Ys(arguments[r],i);return t}const U1=(n,e,t,{allOwnKeys:i}={})=>(Ys(e,(r,s)=>{t&&Qt(r)?n[s]=Fm(r,t):n[s]=r},{allOwnKeys:i}),n),O1=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),N1=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},F1=(n,e,t,i)=>{let r,s,a;const o={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)a=r[s],(!i||i(a,n,e))&&!o[a]&&(e[a]=n[a],o[a]=!0);n=t!==!1&&tf(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},B1=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},z1=n=>{if(!n)return null;if(rs(n))return n;let e=n.length;if(!km(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},k1=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&tf(Uint8Array)),H1=(n,e)=>{const i=(n&&n[Uo]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},V1=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},G1=Ln("HTMLFormElement"),W1=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),rh=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),X1=Ln("RegExp"),Gm=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Ys(t,(r,s)=>{let a;(a=e(r,s,n))!==!1&&(i[s]=a||r)}),Object.defineProperties(n,i)},j1=n=>{Gm(n,(e,t)=>{if(Qt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Qt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},$1=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return rs(n)?i(n):i(String(n).split(e)),t},q1=()=>{},Y1=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function K1(n){return!!(n&&Qt(n.append)&&n[Bm]==="FormData"&&n[Uo])}const Z1=n=>{const e=new Array(10),t=(i,r)=>{if(qs(i)){if(e.indexOf(i)>=0)return;if($s(i))return i;if(!("toJSON"in i)){e[r]=i;const s=rs(i)?[]:{};return Ys(i,(a,o)=>{const l=t(a,r+1);!es(l)&&(s[o]=l)}),e[r]=void 0,s}}return i};return t(n,0)},J1=Ln("AsyncFunction"),Q1=n=>n&&(qs(n)||Qt(n))&&Qt(n.then)&&Qt(n.catch),Wm=((n,e)=>n?setImmediate:e?((t,i)=>(nr.addEventListener("message",({source:r,data:s})=>{r===nr&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),nr.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Qt(nr.postMessage)),eA=typeof queueMicrotask<"u"?queueMicrotask.bind(nr):typeof process<"u"&&process.nextTick||Wm,tA=n=>n!=null&&Qt(n[Uo]),Y={isArray:rs,isArrayBuffer:zm,isBuffer:$s,isFormData:A1,isArrayBufferView:_1,isString:x1,isNumber:km,isBoolean:S1,isObject:qs,isPlainObject:Xa,isEmptyObject:y1,isReadableStream:R1,isRequest:P1,isResponse:I1,isHeaders:D1,isUndefined:es,isDate:b1,isFile:M1,isBlob:E1,isRegExp:X1,isFunction:Qt,isStream:w1,isURLSearchParams:C1,isTypedArray:k1,isFileList:T1,forEach:Ys,merge:tu,extend:U1,trim:L1,stripBOM:O1,inherits:N1,toFlatObject:F1,kindOf:Oo,kindOfTest:Ln,endsWith:B1,toArray:z1,forEachEntry:H1,matchAll:V1,isHTMLForm:G1,hasOwnProperty:rh,hasOwnProp:rh,reduceDescriptors:Gm,freezeMethods:j1,toObjectSet:$1,toCamelCase:W1,noop:q1,toFiniteNumber:Y1,findKey:Hm,global:nr,isContextDefined:Vm,isSpecCompliantForm:K1,toJSONObject:Z1,isAsyncFn:J1,isThenable:Q1,setImmediate:Wm,asap:eA,isIterable:tA};function $e(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}Y.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.status}}});const Xm=$e.prototype,jm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{jm[n]={value:n}});Object.defineProperties($e,jm);Object.defineProperty(Xm,"isAxiosError",{value:!0});$e.from=(n,e,t,i,r,s)=>{const a=Object.create(Xm);Y.toFlatObject(n,a,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const o=n&&n.message?n.message:"Error",l=e==null&&n?n.code:e;return $e.call(a,o,l,t,i,r),n&&a.cause==null&&Object.defineProperty(a,"cause",{value:n,configurable:!0}),a.name=n&&n.name||"Error",s&&Object.assign(a,s),a};const nA=null;function nu(n){return Y.isPlainObject(n)||Y.isArray(n)}function $m(n){return Y.endsWith(n,"[]")?n.slice(0,-2):n}function sh(n,e,t){return n?n.concat(e).map(function(r,s){return r=$m(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function iA(n){return Y.isArray(n)&&!n.some(nu)}const rA=Y.toFlatObject(Y,{},null,function(e){return/^is[A-Z]/.test(e)});function Fo(n,e,t){if(!Y.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=Y.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,g){return!Y.isUndefined(g[v])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,a=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(e);if(!Y.isFunction(r))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(Y.isDate(m))return m.toISOString();if(Y.isBoolean(m))return m.toString();if(!l&&Y.isBlob(m))throw new $e("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(m)||Y.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,v,g){let h=m;if(m&&!g&&typeof m=="object"){if(Y.endsWith(v,"{}"))v=i?v:v.slice(0,-2),m=JSON.stringify(m);else if(Y.isArray(m)&&iA(m)||(Y.isFileList(m)||Y.endsWith(v,"[]"))&&(h=Y.toArray(m)))return v=$m(v),h.forEach(function(y,S){!(Y.isUndefined(y)||y===null)&&e.append(a===!0?sh([v],S,s):a===null?v:v+"[]",c(y))}),!1}return nu(m)?!0:(e.append(sh(g,v,s),c(m)),!1)}const f=[],d=Object.assign(rA,{defaultVisitor:u,convertValue:c,isVisitable:nu});function p(m,v){if(!Y.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(m),Y.forEach(m,function(h,M){(!(Y.isUndefined(h)||h===null)&&r.call(e,h,Y.isString(M)?M.trim():M,v,d))===!0&&p(h,v?v.concat(M):[M])}),f.pop()}}if(!Y.isObject(n))throw new TypeError("data must be an object");return p(n),e}function ah(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function nf(n,e){this._pairs=[],n&&Fo(n,this,e)}const qm=nf.prototype;qm.append=function(e,t){this._pairs.push([e,t])};qm.toString=function(e){const t=e?function(i){return e.call(this,i,ah)}:ah;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function sA(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ym(n,e,t){if(!e)return n;const i=t&&t.encode||sA;Y.isFunction(t)&&(t={serialize:t});const r=t&&t.serialize;let s;if(r?s=r(e,t):s=Y.isURLSearchParams(e)?e.toString():new nf(e,t).toString(i),s){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class oh{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Km={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},aA=typeof URLSearchParams<"u"?URLSearchParams:nf,oA=typeof FormData<"u"?FormData:null,lA=typeof Blob<"u"?Blob:null,cA={isBrowser:!0,classes:{URLSearchParams:aA,FormData:oA,Blob:lA},protocols:["http","https","file","blob","url","data"]},rf=typeof window<"u"&&typeof document<"u",iu=typeof navigator=="object"&&navigator||void 0,uA=rf&&(!iu||["ReactNative","NativeScript","NS"].indexOf(iu.product)<0),fA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dA=rf&&window.location.href||"http://localhost",hA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rf,hasStandardBrowserEnv:uA,hasStandardBrowserWebWorkerEnv:fA,navigator:iu,origin:dA},Symbol.toStringTag,{value:"Module"})),Nt={...hA,...cA};function pA(n,e){return Fo(n,new Nt.classes.URLSearchParams,{visitor:function(t,i,r,s){return Nt.isNode&&Y.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function mA(n){return Y.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function gA(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function Zm(n){function e(t,i,r,s){let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=t.length;return a=!a&&Y.isArray(r)?r.length:a,l?(Y.hasOwnProp(r,a)?r[a]=[r[a],i]:r[a]=i,!o):((!r[a]||!Y.isObject(r[a]))&&(r[a]=[]),e(t,i,r[a],s)&&Y.isArray(r[a])&&(r[a]=gA(r[a])),!o)}if(Y.isFormData(n)&&Y.isFunction(n.entries)){const t={};return Y.forEachEntry(n,(i,r)=>{e(mA(i),r,t,0)}),t}return null}function vA(n,e,t){if(Y.isString(n))try{return(e||JSON.parse)(n),Y.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Ks={transitional:Km,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=Y.isObject(e);if(s&&Y.isHTMLForm(e)&&(e=new FormData(e)),Y.isFormData(e))return r?JSON.stringify(Zm(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e)||Y.isReadableStream(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return pA(e,this.formSerializer).toString();if((o=Y.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Fo(o?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),vA(e)):e}],transformResponse:[function(e){const t=this.transitional||Ks.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(Y.isResponse(e)||Y.isReadableStream(e))return e;if(e&&Y.isString(e)&&(i&&!this.responseType||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(o){if(a)throw o.name==="SyntaxError"?$e.from(o,$e.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],n=>{Ks.headers[n]={}});const _A=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xA=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!t||e[t]&&_A[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},lh=Symbol("internals");function ms(n){return n&&String(n).trim().toLowerCase()}function ja(n){return n===!1||n==null?n:Y.isArray(n)?n.map(ja):String(n)}function SA(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const yA=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Vl(n,e,t,i,r){if(Y.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!Y.isString(e)){if(Y.isString(i))return e.indexOf(i)!==-1;if(Y.isRegExp(i))return i.test(e)}}function bA(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function MA(n,e){const t=Y.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let en=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(o,l,c){const u=ms(l);if(!u)throw new Error("header name must be a non-empty string");const f=Y.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=ja(o))}const a=(o,l)=>Y.forEach(o,(c,u)=>s(c,u,l));if(Y.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(Y.isString(e)&&(e=e.trim())&&!yA(e))a(xA(e),t);else if(Y.isObject(e)&&Y.isIterable(e)){let o={},l,c;for(const u of e){if(!Y.isArray(u))throw TypeError("Object iterator must return a key-value pair");o[c=u[0]]=(l=o[c])?Y.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}a(o,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=ms(e),e){const i=Y.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return SA(r);if(Y.isFunction(t))return t.call(this,r,i);if(Y.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ms(e),e){const i=Y.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Vl(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(a){if(a=ms(a),a){const o=Y.findKey(i,a);o&&(!t||Vl(i,i[o],o,t))&&(delete i[o],r=!0)}}return Y.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||Vl(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return Y.forEach(this,(r,s)=>{const a=Y.findKey(i,s);if(a){t[a]=ja(r),delete t[s];return}const o=e?bA(s):String(s).trim();o!==s&&delete t[s],t[o]=ja(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Y.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&Y.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[lh]=this[lh]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=ms(a);i[o]||(MA(r,a),i[o]=!0)}return Y.isArray(e)?e.forEach(s):s(e),this}};en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.reduceDescriptors(en.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});Y.freezeMethods(en);function Gl(n,e){const t=this||Ks,i=e||t,r=en.from(i.headers);let s=i.data;return Y.forEach(n,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Jm(n){return!!(n&&n.__CANCEL__)}function ss(n,e,t){$e.call(this,n??"canceled",$e.ERR_CANCELED,e,t),this.name="CanceledError"}Y.inherits(ss,$e,{__CANCEL__:!0});function Qm(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new $e("Request failed with status code "+t.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function EA(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function TA(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];a||(a=c),t[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-a<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function wA(n,e){let t=0,i=1e3/e,r,s;const a=(c,u=Date.now())=>{t=u,r=null,s&&(clearTimeout(s),s=null),n(...c)};return[(...c)=>{const u=Date.now(),f=u-t;f>=i?a(c,u):(r=c,s||(s=setTimeout(()=>{s=null,a(r)},i-f)))},()=>r&&a(r)]}const fo=(n,e,t=3)=>{let i=0;const r=TA(50,250);return wA(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=a-i,c=r(l),u=a<=o;i=a;const f={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:c||void 0,estimated:c&&o&&u?(o-a)/c:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};n(f)},t)},ch=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},uh=n=>(...e)=>Y.asap(()=>n(...e)),AA=Nt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Nt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Nt.origin),Nt.navigator&&/(msie|trident)/i.test(Nt.navigator.userAgent)):()=>!0,CA=Nt.hasStandardBrowserEnv?{write(n,e,t,i,r,s){const a=[n+"="+encodeURIComponent(e)];Y.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),Y.isString(i)&&a.push("path="+i),Y.isString(r)&&a.push("domain="+r),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function RA(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function PA(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function eg(n,e,t){let i=!RA(e);return n&&(i||t==!1)?PA(n,e):e}const fh=n=>n instanceof en?{...n}:n;function lr(n,e){e=e||{};const t={};function i(c,u,f,d){return Y.isPlainObject(c)&&Y.isPlainObject(u)?Y.merge.call({caseless:d},c,u):Y.isPlainObject(u)?Y.merge({},u):Y.isArray(u)?u.slice():u}function r(c,u,f,d){if(Y.isUndefined(u)){if(!Y.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!Y.isUndefined(u))return i(void 0,u)}function a(c,u){if(Y.isUndefined(u)){if(!Y.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function o(c,u,f){if(f in e)return i(c,u);if(f in n)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(c,u,f)=>r(fh(c),fh(u),f,!0)};return Y.forEach(Object.keys({...n,...e}),function(u){const f=l[u]||r,d=f(n[u],e[u],u);Y.isUndefined(d)&&f!==o||(t[u]=d)}),t}const tg=n=>{const e=lr({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:a,auth:o}=e;if(e.headers=a=en.from(a),e.url=Ym(eg(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),Y.isFormData(t)){if(Nt.hasStandardBrowserEnv||Nt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(Y.isFunction(t.getHeaders)){const l=t.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,f])=>{c.includes(u.toLowerCase())&&a.set(u,f)})}}if(Nt.hasStandardBrowserEnv&&(i&&Y.isFunction(i)&&(i=i(e)),i||i!==!1&&AA(e.url))){const l=r&&s&&CA.read(s);l&&a.set(r,l)}return e},IA=typeof XMLHttpRequest<"u",DA=IA&&function(n){return new Promise(function(t,i){const r=tg(n);let s=r.data;const a=en.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,p,m;function v(){p&&p(),m&&m(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let g=new XMLHttpRequest;g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout;function h(){if(!g)return;const y=en.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),A={data:!o||o==="text"||o==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:y,config:n,request:g};Qm(function(R){t(R),v()},function(R){i(R),v()},A),g=null}"onloadend"in g?g.onloadend=h:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(h)},g.onabort=function(){g&&(i(new $e("Request aborted",$e.ECONNABORTED,n,g)),g=null)},g.onerror=function(S){const A=S&&S.message?S.message:"Network Error",I=new $e(A,$e.ERR_NETWORK,n,g);I.event=S||null,i(I),g=null},g.ontimeout=function(){let S=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const A=r.transitional||Km;r.timeoutErrorMessage&&(S=r.timeoutErrorMessage),i(new $e(S,A.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,n,g)),g=null},s===void 0&&a.setContentType(null),"setRequestHeader"in g&&Y.forEach(a.toJSON(),function(S,A){g.setRequestHeader(A,S)}),Y.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),o&&o!=="json"&&(g.responseType=r.responseType),c&&([d,m]=fo(c,!0),g.addEventListener("progress",d)),l&&g.upload&&([f,p]=fo(l),g.upload.addEventListener("progress",f),g.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=y=>{g&&(i(!y||y.type?new ss(null,n,g):y),g.abort(),g=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const M=EA(r.url);if(M&&Nt.protocols.indexOf(M)===-1){i(new $e("Unsupported protocol "+M+":",$e.ERR_BAD_REQUEST,n));return}g.send(s||null)})},LA=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,r;const s=function(c){if(!r){r=!0,o();const u=c instanceof Error?c:this.reason;i.abort(u instanceof $e?u:new ss(u instanceof Error?u.message:u))}};let a=e&&setTimeout(()=>{a=null,s(new $e(`timeout ${e} of ms exceeded`,$e.ETIMEDOUT))},e);const o=()=>{n&&(a&&clearTimeout(a),a=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),n=null)};n.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>Y.asap(o),l}},UA=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},OA=async function*(n,e){for await(const t of NA(n))yield*UA(t,e)},NA=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},dh=(n,e,t,i)=>{const r=OA(n,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){o(),l.close();return}let f=u.byteLength;if(t){let d=s+=f;t(d)}l.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},hh=64*1024,{isFunction:Ra}=Y,FA=(({Request:n,Response:e})=>({Request:n,Response:e}))(Y.global),{ReadableStream:ph,TextEncoder:mh}=Y.global,gh=(n,...e)=>{try{return!!n(...e)}catch{return!1}},BA=n=>{n=Y.merge.call({skipUndefined:!0},FA,n);const{fetch:e,Request:t,Response:i}=n,r=e?Ra(e):typeof fetch=="function",s=Ra(t),a=Ra(i);if(!r)return!1;const o=r&&Ra(ph),l=r&&(typeof mh=="function"?(m=>v=>m.encode(v))(new mh):async m=>new Uint8Array(await new t(m).arrayBuffer())),c=s&&o&&gh(()=>{let m=!1;const v=new t(Nt.origin,{body:new ph,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!v}),u=a&&o&&gh(()=>Y.isReadableStream(new i("").body)),f={stream:u&&(m=>m.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!f[m]&&(f[m]=(v,g)=>{let h=v&&v[m];if(h)return h.call(v);throw new $e(`Response type '${m}' is not supported`,$e.ERR_NOT_SUPPORT,g)})});const d=async m=>{if(m==null)return 0;if(Y.isBlob(m))return m.size;if(Y.isSpecCompliantForm(m))return(await new t(Nt.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(Y.isArrayBufferView(m)||Y.isArrayBuffer(m))return m.byteLength;if(Y.isURLSearchParams(m)&&(m=m+""),Y.isString(m))return(await l(m)).byteLength},p=async(m,v)=>{const g=Y.toFiniteNumber(m.getContentLength());return g??d(v)};return async m=>{let{url:v,method:g,data:h,signal:M,cancelToken:y,timeout:S,onDownloadProgress:A,onUploadProgress:I,responseType:R,headers:D,withCredentials:w="same-origin",fetchOptions:b}=tg(m),C=e||fetch;R=R?(R+"").toLowerCase():"text";let z=LA([M,y&&y.toAbortSignal()],S),H=null;const J=z&&z.unsubscribe&&(()=>{z.unsubscribe()});let ie;try{if(I&&c&&g!=="get"&&g!=="head"&&(ie=await p(D,h))!==0){let be=new t(v,{method:"POST",body:h,duplex:"half"}),Le;if(Y.isFormData(h)&&(Le=be.headers.get("content-type"))&&D.setContentType(Le),be.body){const[rt,et]=ch(ie,fo(uh(I)));h=dh(be.body,hh,rt,et)}}Y.isString(w)||(w=w?"include":"omit");const F=s&&"credentials"in t.prototype,j={...b,signal:z,method:g.toUpperCase(),headers:D.normalize().toJSON(),body:h,duplex:"half",credentials:F?w:void 0};H=s&&new t(v,j);let O=await(s?C(H,b):C(v,j));const le=u&&(R==="stream"||R==="response");if(u&&(A||le&&J)){const be={};["status","statusText","headers"].forEach(te=>{be[te]=O[te]});const Le=Y.toFiniteNumber(O.headers.get("content-length")),[rt,et]=A&&ch(Le,fo(uh(A),!0))||[];O=new i(dh(O.body,hh,rt,()=>{et&&et(),J&&J()}),be)}R=R||"text";let ve=await f[Y.findKey(f,R)||"text"](O,m);return!le&&J&&J(),await new Promise((be,Le)=>{Qm(be,Le,{data:ve,headers:en.from(O.headers),status:O.status,statusText:O.statusText,config:m,request:H})})}catch(F){throw J&&J(),F&&F.name==="TypeError"&&/Load failed|fetch/i.test(F.message)?Object.assign(new $e("Network Error",$e.ERR_NETWORK,m,H),{cause:F.cause||F}):$e.from(F,F&&F.code,m,H)}}},zA=new Map,ng=n=>{let e=n?n.env:{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let a=s.length,o=a,l,c,u=zA;for(;o--;)l=s[o],c=u.get(l),c===void 0&&u.set(l,c=o?new Map:BA(e)),u=c;return c};ng();const ru={http:nA,xhr:DA,fetch:{get:ng}};Y.forEach(ru,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const vh=n=>`- ${n}`,kA=n=>Y.isFunction(n)||n===null||n===!1,ig={getAdapter:(n,e)=>{n=Y.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let a=0;a<t;a++){i=n[a];let o;if(r=i,!kA(i)&&(r=ru[(o=String(i)).toLowerCase()],r===void 0))throw new $e(`Unknown adapter '${o}'`);if(r&&(Y.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(vh).join(`
`):" "+vh(a[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ru};function Wl(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new ss(null,n)}function _h(n){return Wl(n),n.headers=en.from(n.headers),n.data=Gl.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),ig.getAdapter(n.adapter||Ks.adapter,n)(n).then(function(i){return Wl(n),i.data=Gl.call(n,n.transformResponse,i),i.headers=en.from(i.headers),i},function(i){return Jm(i)||(Wl(n),i&&i.response&&(i.response.data=Gl.call(n,n.transformResponse,i.response),i.response.headers=en.from(i.response.headers))),Promise.reject(i)})}const rg="1.12.2",Bo={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Bo[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const xh={};Bo.transitional=function(e,t,i){function r(s,a){return"[Axios v"+rg+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new $e(r(a," has been removed"+(t?" in "+t:"")),$e.ERR_DEPRECATED);return t&&!xh[a]&&(xh[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};Bo.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function HA(n,e,t){if(typeof n!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],a=e[s];if(a){const o=n[s],l=o===void 0||a(o,s,n);if(l!==!0)throw new $e("option "+s+" must be "+l,$e.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new $e("Unknown option "+s,$e.ERR_BAD_OPTION)}}const $a={assertOptions:HA,validators:Bo},Nn=$a.validators;let ar=class{constructor(e){this.defaults=e||{},this.interceptors={request:new oh,response:new oh}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=lr(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&$a.assertOptions(i,{silentJSONParsing:Nn.transitional(Nn.boolean),forcedJSONParsing:Nn.transitional(Nn.boolean),clarifyTimeoutError:Nn.transitional(Nn.boolean)},!1),r!=null&&(Y.isFunction(r)?t.paramsSerializer={serialize:r}:$a.assertOptions(r,{encode:Nn.function,serialize:Nn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),$a.assertOptions(t,{baseUrl:Nn.spelling("baseURL"),withXsrfToken:Nn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&Y.merge(s.common,s[t.method]);s&&Y.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),t.headers=en.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(t)===!1||(l=l&&v.synchronous,o.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const m=[_h.bind(this),void 0];for(m.unshift(...o),m.push(...c),d=m.length,u=Promise.resolve(t);f<d;)u=u.then(m[f++],m[f++]);return u}d=o.length;let p=t;for(;f<d;){const m=o[f++],v=o[f++];try{p=m(p)}catch(g){v.call(this,g);break}}try{u=_h.call(this,p)}catch(m){return Promise.reject(m)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=lr(this.defaults,e);const t=eg(e.baseURL,e.url,e.allowAbsoluteUrls);return Ym(t,e.params,e.paramsSerializer)}};Y.forEach(["delete","get","head","options"],function(e){ar.prototype[e]=function(t,i){return this.request(lr(i||{},{method:e,url:t,data:(i||{}).data}))}});Y.forEach(["post","put","patch"],function(e){function t(i){return function(s,a,o){return this.request(lr(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}ar.prototype[e]=t(),ar.prototype[e+"Form"]=t(!0)});let VA=class sg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new ss(s,a,o),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new sg(function(r){e=r}),cancel:e}}};function GA(n){return function(t){return n.apply(null,t)}}function WA(n){return Y.isObject(n)&&n.isAxiosError===!0}const su={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(su).forEach(([n,e])=>{su[e]=n});function ag(n){const e=new ar(n),t=Fm(ar.prototype.request,e);return Y.extend(t,ar.prototype,e,{allOwnKeys:!0}),Y.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return ag(lr(n,r))},t}const Mt=ag(Ks);Mt.Axios=ar;Mt.CanceledError=ss;Mt.CancelToken=VA;Mt.isCancel=Jm;Mt.VERSION=rg;Mt.toFormData=Fo;Mt.AxiosError=$e;Mt.Cancel=Mt.CanceledError;Mt.all=function(e){return Promise.all(e)};Mt.spread=GA;Mt.isAxiosError=WA;Mt.mergeConfig=lr;Mt.AxiosHeaders=en;Mt.formToJSON=n=>Zm(Y.isHTMLForm(n)?new FormData(n):n);Mt.getAdapter=ig.getAdapter;Mt.HttpStatusCode=su;Mt.default=Mt;const{Axios:E2,AxiosError:T2,CanceledError:w2,isCancel:A2,CancelToken:C2,VERSION:R2,all:P2,Cancel:I2,isAxiosError:D2,spread:L2,toFormData:U2,AxiosHeaders:O2,HttpStatusCode:N2,formToJSON:F2,getAdapter:B2,mergeConfig:z2}=Mt,XA={class:"contact-page"},jA={class:"content"},$A={components:{SocialIcons:Lo}},qA=Object.assign($A,{__name:"contactPage",setup(n){const e=zr(""),t=zr(""),i=zr(""),r=async()=>{try{await Mt.post("https://formspree.io/f/xkgvwrnb",{name:e.value,email:t.value,message:i.value},{headers:{Accept:"application/json"}}),alert(`Kiitos ${e.value}, viestisi on lähetetty!`),e.value="",t.value="",i.value=""}catch{alert("Viestin lähetys epäonnistui. Yritä uudelleen.")}};return(s,a)=>(Yt(),Kt("div",XA,[a[4]||(a[4]=tt("div",{class:"title"},[tt("h1",{class:"heading-text"},"Ota yhteyttä"),tt("p",{class:"sub-heading"},"Lähetä viesti tai seuraa minua sosiaalisessa mediassa")],-1)),tt("div",jA,[tt("form",{class:"contact-form",onSubmit:z0(r,["prevent"])},[Zo(tt("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),placeholder:"Nimi",required:""},null,512),[[il,e.value]]),Zo(tt("input",{type:"email","onUpdate:modelValue":a[1]||(a[1]=o=>t.value=o),placeholder:"Sähköposti",required:""},null,512),[[il,t.value]]),Zo(tt("textarea",{"onUpdate:modelValue":a[2]||(a[2]=o=>i.value=o),placeholder:"Viesti",rows:"6",required:""},null,512),[[il,i.value]]),a[3]||(a[3]=tt("button",{type:"submit"},"Lähetä",-1))],32)]),pt(Lo)]))}}),YA=dr(qA,[["__scopeId","data-v-3439303c"]]),KA={class:"container"},ZA=Nu({__name:"App",setup(n){const{currentPage:e}=DT();return To(()=>{if(window.location.hash){const t=window.location.hash,i=document.querySelector(".container"),r=i?.querySelector(t);i&&r&&i.scrollTo({top:r.offsetTop,behavior:"smooth"})}}),(t,i)=>(Yt(),Kt(ln,null,[pt(AT),tt("div",KA,[pt(MT,{id:"home"}),pt(IT,{id:"about"}),pt(g1,{id:"projects"}),pt(YA,{id:"contact"})]),pt(dT,{currentPage:Sp(e)},null,8,["currentPage"])],64))}});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function au(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function JA(n){if(Array.isArray(n))return n}function QA(n){if(Array.isArray(n))return au(n)}function eC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function tC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,og(i.key),i)}}function nC(n,e,t){return e&&tC(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function qa(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=sf(n))||e){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,a=!0,o=!1;return{s:function(){t=t.call(n)},n:function(){var l=t.next();return a=l.done,l},e:function(l){o=!0,s=l},f:function(){try{a||t.return==null||t.return()}finally{if(o)throw s}}}}function Je(n,e,t){return(e=og(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function iC(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function rC(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,a,o=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=s.call(t)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return o}}function sC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function de(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Sh(Object(t),!0).forEach(function(i){Je(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Sh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function zo(n,e){return JA(n)||rC(n,e)||sf(n,e)||sC()}function Dn(n){return QA(n)||iC(n)||sf(n)||aC()}function oC(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function og(n){var e=oC(n,"string");return typeof e=="symbol"?e:e+""}function ho(n){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ho(n)}function sf(n,e){if(n){if(typeof n=="string")return au(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?au(n,e):void 0}}var yh=function(){},af={},lg={},cg=null,ug={mark:yh,measure:yh};try{typeof window<"u"&&(af=window),typeof document<"u"&&(lg=document),typeof MutationObserver<"u"&&(cg=MutationObserver),typeof performance<"u"&&(ug=performance)}catch{}var lC=af.navigator||{},bh=lC.userAgent,Mh=bh===void 0?"":bh,Ui=af,gt=lg,Eh=cg,Pa=ug;Ui.document;var xi=!!gt.documentElement&&!!gt.head&&typeof gt.addEventListener=="function"&&typeof gt.createElement=="function",fg=~Mh.indexOf("MSIE")||~Mh.indexOf("Trident/"),Xl,cC=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,uC=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,dg={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},fC={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},hg=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],zt="classic",Zs="duotone",pg="sharp",mg="sharp-duotone",gg="chisel",vg="etch",_g="jelly",xg="jelly-duo",Sg="jelly-fill",yg="notdog",bg="notdog-duo",Mg="slab",Eg="slab-press",Tg="thumbprint",wg="whiteboard",dC="Classic",hC="Duotone",pC="Sharp",mC="Sharp Duotone",gC="Chisel",vC="Etch",_C="Jelly",xC="Jelly Duo",SC="Jelly Fill",yC="Notdog",bC="Notdog Duo",MC="Slab",EC="Slab Press",TC="Thumbprint",wC="Whiteboard",Ag=[zt,Zs,pg,mg,gg,vg,_g,xg,Sg,yg,bg,Mg,Eg,Tg,wg];Xl={},Je(Je(Je(Je(Je(Je(Je(Je(Je(Je(Xl,zt,dC),Zs,hC),pg,pC),mg,mC),gg,gC),vg,vC),_g,_C),xg,xC),Sg,SC),yg,yC),Je(Je(Je(Je(Je(Xl,bg,bC),Mg,MC),Eg,EC),Tg,TC),wg,wC);var AC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},CC={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},RC=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),PC={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Cg=["fak","fa-kit","fakd","fa-kit-duotone"],Th={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},IC=["kit"],DC="kit",LC="kit-duotone",UC="Kit",OC="Kit Duotone";Je(Je({},DC,UC),LC,OC);var NC={kit:{"fa-kit":"fak"}},FC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},BC={kit:{fak:"fa-kit"}},wh={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},jl,Ia={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zC=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],kC="classic",HC="duotone",VC="sharp",GC="sharp-duotone",WC="chisel",XC="etch",jC="jelly",$C="jelly-duo",qC="jelly-fill",YC="notdog",KC="notdog-duo",ZC="slab",JC="slab-press",QC="thumbprint",eR="whiteboard",tR="Classic",nR="Duotone",iR="Sharp",rR="Sharp Duotone",sR="Chisel",aR="Etch",oR="Jelly",lR="Jelly Duo",cR="Jelly Fill",uR="Notdog",fR="Notdog Duo",dR="Slab",hR="Slab Press",pR="Thumbprint",mR="Whiteboard";jl={},Je(Je(Je(Je(Je(Je(Je(Je(Je(Je(jl,kC,tR),HC,nR),VC,iR),GC,rR),WC,sR),XC,aR),jC,oR),$C,lR),qC,cR),YC,uR),Je(Je(Je(Je(Je(jl,KC,fR),ZC,dR),JC,hR),QC,pR),eR,mR);var gR="kit",vR="kit-duotone",_R="Kit",xR="Kit Duotone";Je(Je({},gR,_R),vR,xR);var SR={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},yR={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},ou={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},bR=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Rg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(zC,bR),MR=["solid","regular","light","thin","duotone","brands","semibold"],Pg=[1,2,3,4,5,6,7,8,9,10],ER=Pg.concat([11,12,13,14,15,16,17,18,19,20]),TR=["aw","fw","pull-left","pull-right"],wR=[].concat(Dn(Object.keys(yR)),MR,TR,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ia.GROUP,Ia.SWAP_OPACITY,Ia.PRIMARY,Ia.SECONDARY]).concat(Pg.map(function(n){return"".concat(n,"x")})).concat(ER.map(function(n){return"w-".concat(n)})),AR={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},mi="___FONT_AWESOME___",lu=16,Ig="fa",Dg="svg-inline--fa",cr="data-fa-i2svg",cu="data-fa-pseudo-element",CR="data-fa-pseudo-element-pending",of="data-prefix",lf="data-icon",Ah="fontawesome-i2svg",RR="async",PR=["HTML","HEAD","STYLE","SCRIPT"],Lg=["::before","::after",":before",":after"],Ug=(function(){try{return!0}catch{return!1}})();function Js(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[zt]}})}var Og=de({},dg);Og[zt]=de(de(de(de({},{"fa-duotone":"duotone"}),dg[zt]),Th.kit),Th["kit-duotone"]);var IR=Js(Og),uu=de({},PC);uu[zt]=de(de(de(de({},{duotone:"fad"}),uu[zt]),wh.kit),wh["kit-duotone"]);var Ch=Js(uu),fu=de({},ou);fu[zt]=de(de({},fu[zt]),BC.kit);var Ng=Js(fu),du=de({},SR);du[zt]=de(de({},du[zt]),NC.kit);Js(du);var DR=cC,Fg="fa-layers-text",LR=uC,UR=de({},AC);Js(UR);var OR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$l=fC,NR=[].concat(Dn(IC),Dn(wR)),As=Ui.FontAwesomeConfig||{};function FR(n){var e=gt.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function BR(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(gt&&typeof gt.querySelector=="function"){var zR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zR.forEach(function(n){var e=zo(n,2),t=e[0],i=e[1],r=BR(FR(t));r!=null&&(As[i]=r)})}var Bg={styleDefault:"solid",familyDefault:zt,cssPrefix:Ig,replacementClass:Dg,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};As.familyPrefix&&(As.cssPrefix=As.familyPrefix);var ts=de(de({},Bg),As);ts.autoReplaceSvg||(ts.observeMutations=!1);var Ue={};Object.keys(Bg).forEach(function(n){Object.defineProperty(Ue,n,{enumerable:!0,set:function(t){ts[n]=t,Cs.forEach(function(i){return i(Ue)})},get:function(){return ts[n]}})});Object.defineProperty(Ue,"familyPrefix",{enumerable:!0,set:function(e){ts.cssPrefix=e,Cs.forEach(function(t){return t(Ue)})},get:function(){return ts.cssPrefix}});Ui.FontAwesomeConfig=Ue;var Cs=[];function kR(n){return Cs.push(n),function(){Cs.splice(Cs.indexOf(n),1)}}var Pr=lu,Vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function HR(n){if(!(!n||!xi)){var e=gt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=gt.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return gt.head.insertBefore(e,i),n}}var VR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rh(){for(var n=12,e="";n-- >0;)e+=VR[Math.random()*62|0];return e}function as(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function cf(n){return n.classList?as(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zg(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function GR(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(zg(n[t]),'" ')},"").trim()}function ko(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function uf(n){return n.size!==Vn.size||n.x!==Vn.x||n.y!==Vn.y||n.rotate!==Vn.rotate||n.flipX||n.flipY}function WR(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function XR(n){var e=n.transform,t=n.width,i=t===void 0?lu:t,r=n.height,s=r===void 0?lu:r,a="";return fg?a+="translate(".concat(e.x/Pr-i/2,"em, ").concat(e.y/Pr-s/2,"em) "):a+="translate(calc(-50% + ".concat(e.x/Pr,"em), calc(-50% + ").concat(e.y/Pr,"em)) "),a+="scale(".concat(e.size/Pr*(e.flipX?-1:1),", ").concat(e.size/Pr*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var jR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function kg(){var n=Ig,e=Dg,t=Ue.cssPrefix,i=Ue.replacementClass,r=jR;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),a=new RegExp("\\--".concat(n,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(i))}return r}var Ph=!1;function ql(){Ue.autoAddCss&&!Ph&&(HR(kg()),Ph=!0)}var $R={mixout:function(){return{dom:{css:kg,insertCss:ql}}},hooks:function(){return{beforeDOMElementCreation:function(){ql()},beforeI2svg:function(){ql()}}}},gi=Ui||{};gi[mi]||(gi[mi]={});gi[mi].styles||(gi[mi].styles={});gi[mi].hooks||(gi[mi].hooks={});gi[mi].shims||(gi[mi].shims=[]);var Cn=gi[mi],Hg=[],Vg=function(){gt.removeEventListener("DOMContentLoaded",Vg),po=1,Hg.map(function(e){return e()})},po=!1;xi&&(po=(gt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(gt.readyState),po||gt.addEventListener("DOMContentLoaded",Vg));function qR(n){xi&&(po?setTimeout(n,0):Hg.push(n))}function Qs(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?zg(n):"<".concat(e," ").concat(GR(i),">").concat(s.map(Qs).join(""),"</").concat(e,">")}function Ih(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Yl=function(e,t,i,r){var s=Object.keys(e),a=s.length,o=t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function Gg(n){return Dn(n).length!==1?null:n.codePointAt(0).toString(16)}function Dh(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function Wg(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=Dh(e);typeof Cn.hooks.addPack=="function"&&!r?Cn.hooks.addPack(n,Dh(e)):Cn.styles[n]=de(de({},Cn.styles[n]||{}),s),n==="fas"&&Wg("fa",e)}var zs=Cn.styles,YR=Cn.shims,Xg=Object.keys(Ng),KR=Xg.reduce(function(n,e){return n[e]=Object.keys(Ng[e]),n},{}),ff=null,jg={},$g={},qg={},Yg={},Kg={};function ZR(n){return~NR.indexOf(n)}function JR(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!ZR(r)?r:null}var Zg=function(){var e=function(s){return Yl(zs,function(a,o,l){return a[l]=Yl(o,s,{}),a},{})};jg=e(function(r,s,a){if(s[3]&&(r[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=a})}return r}),$g=e(function(r,s,a){if(r[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=a})}return r}),Kg=e(function(r,s,a){var o=s[2];return r[a]=a,o.forEach(function(l){r[l]=a}),r});var t="far"in zs||Ue.autoFetchSvg,i=Yl(YR,function(r,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});qg=i.names,Yg=i.unicodes,ff=Ho(Ue.styleDefault,{family:Ue.familyDefault})};kR(function(n){ff=Ho(n.styleDefault,{family:Ue.familyDefault})});Zg();function df(n,e){return(jg[n]||{})[e]}function QR(n,e){return($g[n]||{})[e]}function ir(n,e){return(Kg[n]||{})[e]}function Jg(n){return qg[n]||{prefix:null,iconName:null}}function eP(n){var e=Yg[n],t=df("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Oi(){return ff}var Qg=function(){return{prefix:null,iconName:null,rest:[]}};function tP(n){var e=zt,t=Xg.reduce(function(i,r){return i[r]="".concat(Ue.cssPrefix,"-").concat(r),i},{});return Ag.forEach(function(i){(n.includes(t[i])||n.some(function(r){return KR[i].includes(r)}))&&(e=i)}),e}function Ho(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?zt:t,r=IR[i][n];if(i===Zs&&!n)return"fad";var s=Ch[i][n]||Ch[i][r],a=n in Cn.styles?n:null,o=s||a||null;return o}function nP(n){var e=[],t=null;return n.forEach(function(i){var r=JR(Ue.cssPrefix,i);r?t=r:i&&e.push(i)}),{iconName:t,rest:e}}function Lh(n){return n.sort().filter(function(e,t,i){return i.indexOf(e)===t})}var Uh=Rg.concat(Cg);function Vo(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,i=t===void 0?!1:t,r=null,s=Lh(n.filter(function(p){return Uh.includes(p)})),a=Lh(n.filter(function(p){return!Uh.includes(p)})),o=s.filter(function(p){return r=p,!hg.includes(p)}),l=zo(o,1),c=l[0],u=c===void 0?null:c,f=tP(s),d=de(de({},nP(a)),{},{prefix:Ho(u,{family:f})});return de(de(de({},d),aP({values:n,family:f,styles:zs,config:Ue,canonical:d,givenPrefix:r})),iP(i,r,d))}function iP(n,e,t){var i=t.prefix,r=t.iconName;if(n||!i||!r)return{prefix:i,iconName:r};var s=e==="fa"?Jg(r):{},a=ir(i,r);return r=s.iconName||a||r,i=s.prefix||i,i==="far"&&!zs.far&&zs.fas&&!Ue.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}var rP=Ag.filter(function(n){return n!==zt||n!==Zs}),sP=Object.keys(ou).filter(function(n){return n!==zt}).map(function(n){return Object.keys(ou[n])}).flat();function aP(n){var e=n.values,t=n.family,i=n.canonical,r=n.givenPrefix,s=r===void 0?"":r,a=n.styles,o=a===void 0?{}:a,l=n.config,c=l===void 0?{}:l,u=t===Zs,f=e.includes("fa-duotone")||e.includes("fad"),d=c.familyDefault==="duotone",p=i.prefix==="fad"||i.prefix==="fa-duotone";if(!u&&(f||d||p)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&rP.includes(t)){var m=Object.keys(o).find(function(g){return sP.includes(g)});if(m||c.autoFetchSvg){var v=RC.get(t).defaultShortPrefixId;i.prefix=v,i.iconName=ir(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||s==="fa")&&(i.prefix=Oi()||"fas"),i}var oP=(function(){function n(){eC(this,n),this.definitions={}}return nC(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=de(de({},t.definitions[o]||{}),a[o]),Wg(o,a[o]),Zg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];t[o]||(t[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(t[o][f]=c)}),t[o][l]=c}),t}}])})(),Oh=[],Ur={},Xr={},lP=Object.keys(Xr);function cP(n,e){var t=e.mixoutsTo;return Oh=n,Ur={},Object.keys(Xr).forEach(function(i){lP.indexOf(i)===-1&&delete Xr[i]}),Oh.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(t[a]=r[a]),ho(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){t[a]||(t[a]={}),t[a][o]=r[a][o]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(a){Ur[a]||(Ur[a]=[]),Ur[a].push(s[a])})}i.provides&&i.provides(Xr)}),t}function hu(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var s=Ur[n]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(i))}),e}function ur(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=Ur[n]||[];r.forEach(function(s){s.apply(null,t)})}function Ni(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Xr[n]?Xr[n].apply(null,e):void 0}function pu(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||Oi();if(e)return e=ir(t,e)||e,Ih(ev.definitions,t,e)||Ih(Cn.styles,t,e)}var ev=new oP,uP=function(){Ue.autoReplaceSvg=!1,Ue.observeMutations=!1,ur("noAuto")},fP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xi?(ur("beforeI2svg",e),Ni("pseudoElements2svg",e),Ni("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;Ue.autoReplaceSvg===!1&&(Ue.autoReplaceSvg=!0),Ue.observeMutations=!0,qR(function(){hP({autoReplaceSvgRoot:t}),ur("watch",e)})}},dP={icon:function(e){if(e===null)return null;if(ho(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ir(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Ho(e[0]);return{prefix:i,iconName:ir(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(Ue.cssPrefix,"-"))>-1||e.match(DR))){var r=Vo(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Oi(),iconName:ir(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Oi();return{prefix:s,iconName:ir(s,e)||e}}}},dn={noAuto:uP,config:Ue,dom:fP,parse:dP,library:ev,findIconDefinition:pu,toHtml:Qs},hP=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?gt:t;(Object.keys(Cn.styles).length>0||Ue.autoFetchSvg)&&xi&&Ue.autoReplaceSvg&&dn.dom.i2svg({node:i})};function Go(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return Qs(i)})}}),Object.defineProperty(n,"node",{get:function(){if(xi){var i=gt.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function pP(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,a=n.transform;if(uf(a)&&t.found&&!i.found){var o=t.width,l=t.height,c={x:o/l/2,y:.5};r.style=ko(de(de({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function mP(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,a=s===!0?"".concat(e,"-").concat(Ue.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:de(de({},r),{},{id:a}),children:i}]}]}function gP(n){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in n})}function hf(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,a=n.transform,o=n.symbol,l=n.maskId,c=n.extra,u=n.watchable,f=u===void 0?!1:u,d=i.found?i:t,p=d.width,m=d.height,v=[Ue.replacementClass,s?"".concat(Ue.cssPrefix,"-").concat(s):""].filter(function(A){return c.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(c.classes).join(" "),g={children:[],attributes:de(de({},c.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(m)})};!gP(c.attributes)&&!c.attributes["aria-hidden"]&&(g.attributes["aria-hidden"]="true"),f&&(g.attributes[cr]="");var h=de(de({},g),{},{prefix:r,iconName:s,main:t,mask:i,maskId:l,transform:a,symbol:o,styles:de({},c.styles)}),M=i.found&&t.found?Ni("generateAbstractMask",h)||{children:[],attributes:{}}:Ni("generateAbstractIcon",h)||{children:[],attributes:{}},y=M.children,S=M.attributes;return h.children=y,h.attributes=S,o?mP(h):pP(h)}function Nh(n){var e=n.content,t=n.width,i=n.height,r=n.transform,s=n.extra,a=n.watchable,o=a===void 0?!1:a,l=de(de({},s.attributes),{},{class:s.classes.join(" ")});o&&(l[cr]="");var c=de({},s.styles);uf(r)&&(c.transform=XR({transform:r,width:t,height:i}),c["-webkit-transform"]=c.transform);var u=ko(c);u.length>0&&(l.style=u);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),f}function vP(n){var e=n.content,t=n.extra,i=de(de({},t.attributes),{},{class:t.classes.join(" ")}),r=ko(t.styles);r.length>0&&(i.style=r);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),s}var Kl=Cn.styles;function mu(n){var e=n[0],t=n[1],i=n.slice(4),r=zo(i,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(Ue.cssPrefix,"-").concat($l.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ue.cssPrefix,"-").concat($l.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Ue.cssPrefix,"-").concat($l.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:a}}var _P={found:!1,width:512,height:512};function xP(n,e){!Ug&&!Ue.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function gu(n,e){var t=e;return e==="fa"&&Ue.styleDefault!==null&&(e=Oi()),new Promise(function(i,r){if(t==="fa"){var s=Jg(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&Kl[e]&&Kl[e][n]){var a=Kl[e][n];return i(mu(a))}xP(n,e),i(de(de({},_P),{},{icon:Ue.showMissingIcons&&n?Ni("missingIconAbstract")||{}:{}}))})}var Fh=function(){},vu=Ue.measurePerformance&&Pa&&Pa.mark&&Pa.measure?Pa:{mark:Fh,measure:Fh},_s='FA "7.0.0"',SP=function(e){return vu.mark("".concat(_s," ").concat(e," begins")),function(){return tv(e)}},tv=function(e){vu.mark("".concat(_s," ").concat(e," ends")),vu.measure("".concat(_s," ").concat(e),"".concat(_s," ").concat(e," begins"),"".concat(_s," ").concat(e," ends"))},pf={begin:SP,end:tv},Ya=function(){};function Bh(n){var e=n.getAttribute?n.getAttribute(cr):null;return typeof e=="string"}function yP(n){var e=n.getAttribute?n.getAttribute(of):null,t=n.getAttribute?n.getAttribute(lf):null;return e&&t}function bP(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(Ue.replacementClass)}function MP(){if(Ue.autoReplaceSvg===!0)return Ka.replace;var n=Ka[Ue.autoReplaceSvg];return n||Ka.replace}function EP(n){return gt.createElementNS("http://www.w3.org/2000/svg",n)}function TP(n){return gt.createElement(n)}function nv(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?EP:TP:t;if(typeof n=="string")return gt.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(a){r.setAttribute(a,n.attributes[a])});var s=n.children||[];return s.forEach(function(a){r.appendChild(nv(a,{ceFn:i}))}),r}function wP(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ka={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(nv(r),t)}),t.getAttribute(cr)===null&&Ue.keepOriginalSource){var i=gt.createComment(wP(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~cf(t).indexOf(Ue.replacementClass))return Ka.replace(e);var r=new RegExp("".concat(Ue.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(o,l){return l===Ue.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var a=i.map(function(o){return Qs(o)}).join(`
`);t.setAttribute(cr,""),t.innerHTML=a}};function zh(n){n()}function iv(n,e){var t=typeof e=="function"?e:Ya;if(n.length===0)t();else{var i=zh;Ue.mutateApproach===RR&&(i=Ui.requestAnimationFrame||zh),i(function(){var r=MP(),s=pf.begin("mutate");n.map(r),s(),t()})}}var mf=!1;function rv(){mf=!0}function _u(){mf=!1}var mo=null;function kh(n){if(Eh&&Ue.observeMutations){var e=n.treeCallback,t=e===void 0?Ya:e,i=n.nodeCallback,r=i===void 0?Ya:i,s=n.pseudoElementsCallback,a=s===void 0?Ya:s,o=n.observeMutationsRoot,l=o===void 0?gt:o;mo=new Eh(function(c){if(!mf){var u=Oi();as(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Bh(f.addedNodes[0])&&(Ue.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&Ue.searchPseudoElements&&a([f.target],!0),f.type==="attributes"&&Bh(f.target)&&~OR.indexOf(f.attributeName))if(f.attributeName==="class"&&yP(f.target)){var d=Vo(cf(f.target)),p=d.prefix,m=d.iconName;f.target.setAttribute(of,p||u),m&&f.target.setAttribute(lf,m)}else bP(f.target)&&r(f.target)})}}),xi&&mo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function AP(){mo&&mo.disconnect()}function CP(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),t}function RP(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=Vo(cf(n));return r.prefix||(r.prefix=Oi()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=QR(r.prefix,n.innerText)||df(r.prefix,Gg(n.innerText))),!r.iconName&&Ue.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function PP(n){var e=as(n.attributes).reduce(function(t,i){return t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t},{});return e}function IP(){return{iconName:null,prefix:null,transform:Vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=RP(n),i=t.iconName,r=t.prefix,s=t.rest,a=PP(n),o=hu("parseNodeAttributes",{},n),l=e.styleParser?CP(n):[];return de({iconName:i,prefix:r,transform:Vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var DP=Cn.styles;function sv(n){var e=Ue.autoReplaceSvg==="nest"?Hh(n,{styleParser:!1}):Hh(n);return~e.extra.classes.indexOf(Fg)?Ni("generateLayersText",n,e):Ni("generateSvgReplacementMutation",n,e)}function LP(){return[].concat(Dn(Cg),Dn(Rg))}function Vh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xi)return Promise.resolve();var t=gt.documentElement.classList,i=function(f){return t.add("".concat(Ah,"-").concat(f))},r=function(f){return t.remove("".concat(Ah,"-").concat(f))},s=Ue.autoFetchSvg?LP():hg.concat(Object.keys(DP));s.includes("fa")||s.push("fa");var a=[".".concat(Fg,":not([").concat(cr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(cr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=as(n.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();var l=pf.begin("onTree"),c=o.reduce(function(u,f){try{var d=sv(f);d&&u.push(d)}catch(p){Ug||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){iv(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function UP(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sv(n).then(function(t){t&&iv([t],e)})}function OP(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:pu(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:pu(r||{})),n(i,de(de({},t),{},{mask:r}))}}var NP=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?Vn:i,s=t.symbol,a=s===void 0?!1:s,o=t.mask,l=o===void 0?null:o,c=t.maskId,u=c===void 0?null:c,f=t.classes,d=f===void 0?[]:f,p=t.attributes,m=p===void 0?{}:p,v=t.styles,g=v===void 0?{}:v;if(e){var h=e.prefix,M=e.iconName,y=e.icon;return Go(de({type:"icon"},e),function(){return ur("beforeDOMElementCreation",{iconDefinition:e,params:t}),hf({icons:{main:mu(y),mask:l?mu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:M,transform:de(de({},Vn),r),symbol:a,maskId:u,extra:{attributes:m,styles:g,classes:d}})})}},FP={mixout:function(){return{icon:OP(NP)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Vh,t.nodeCallback=UP,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?gt:i,s=t.callback,a=s===void 0?function(){}:s;return Vh(r,a)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,s=i.prefix,a=i.transform,o=i.symbol,l=i.mask,c=i.maskId,u=i.extra;return new Promise(function(f,d){Promise.all([gu(r,s),l.iconName?gu(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var m=zo(p,2),v=m[0],g=m[1];f([t,hf({icons:{main:v,mask:g},prefix:s,iconName:r,transform:a,symbol:o,maskId:c,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.transform,o=t.styles,l=ko(o);l.length>0&&(r.style=l);var c;return uf(a)&&(c=Ni("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},BP={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Go({type:"layer"},function(){ur("beforeDOMElementCreation",{assembler:t,params:i});var a=[];return t(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(Ue.cssPrefix,"-layers")].concat(Dn(s)).join(" ")},children:a}]})}}}},zP={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i.title;var r=i.classes,s=r===void 0?[]:r,a=i.attributes,o=a===void 0?{}:a,l=i.styles,c=l===void 0?{}:l;return Go({type:"counter",content:t},function(){return ur("beforeDOMElementCreation",{content:t,params:i}),vP({content:t.toString(),extra:{attributes:o,styles:c,classes:["".concat(Ue.cssPrefix,"-layers-counter")].concat(Dn(s))}})})}}}},kP={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Vn:r,a=i.classes,o=a===void 0?[]:a,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Go({type:"text",content:t},function(){return ur("beforeDOMElementCreation",{content:t,params:i}),Nh({content:t,transform:de(de({},Vn),s),extra:{attributes:c,styles:f,classes:["".concat(Ue.cssPrefix,"-layers-text")].concat(Dn(o))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.transform,s=i.extra,a=null,o=null;if(fg){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();a=c.width/l,o=c.height/l}return Promise.resolve([t,Nh({content:t.innerHTML,width:a,height:o,transform:r,extra:s,watchable:!0})])}}},av=new RegExp('"',"ug"),Gh=[1105920,1112319],Wh=de(de(de(de({},{FontAwesome:{normal:"fas",400:"fas"}}),CC),AR),FC),xu=Object.keys(Wh).reduce(function(n,e){return n[e.toLowerCase()]=Wh[e],n},{}),HP=Object.keys(xu).reduce(function(n,e){var t=xu[e];return n[e]=t[900]||Dn(Object.entries(t))[0][1],n},{});function VP(n){var e=n.replace(av,"");return Gg(Dn(e)[0]||"")}function GP(n){var e=n.getPropertyValue("font-feature-settings").includes("ss01"),t=n.getPropertyValue("content"),i=t.replace(av,""),r=i.codePointAt(0),s=r>=Gh[0]&&r<=Gh[1],a=i.length===2?i[0]===i[1]:!1;return s||a||e}function WP(n,e){var t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(xu[t]||{})[r]||HP[t]}function Xh(n,e){var t="".concat(CR).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var s=as(n.children),a=s.filter(function(I){return I.getAttribute(cu)===e})[0],o=Ui.getComputedStyle(n,e),l=o.getPropertyValue("font-family"),c=l.match(LR),u=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(a&&!c)return n.removeChild(a),i();if(c&&f!=="none"&&f!==""){var d=o.getPropertyValue("content"),p=WP(l,u),m=VP(d),v=c[0].startsWith("FontAwesome"),g=GP(o),h=df(p,m),M=h;if(v){var y=eP(m);y.iconName&&y.prefix&&(h=y.iconName,p=y.prefix)}if(h&&!g&&(!a||a.getAttribute(of)!==p||a.getAttribute(lf)!==M)){n.setAttribute(t,M),a&&n.removeChild(a);var S=IP(),A=S.extra;A.attributes[cu]=e,gu(h,p).then(function(I){var R=hf(de(de({},S),{},{icons:{main:I,mask:Qg()},prefix:p,iconName:M,extra:A,watchable:!0})),D=gt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(D,n.firstChild):n.appendChild(D),D.outerHTML=R.map(function(w){return Qs(w)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function XP(n){return Promise.all([Xh(n,"::before"),Xh(n,"::after")])}function jP(n){return n.parentNode!==document.head&&!~PR.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(cu)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var $P=function(e){return!!e&&Lg.some(function(t){return e.includes(t)})},qP=function(e){if(!e)return[];for(var t=new Set,i=[e],r=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],s=function(){var p=o[a];i=i.flatMap(function(m){return m.split(p).map(function(v){return v.replace(/,\s*$/,"").trim()})})},a=0,o=r;a<o.length;a++)s();i=i.flatMap(function(d){return d.includes("(")?d:d.split(",").map(function(p){return p.trim()})});var l=qa(i),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;if($P(u)){var f=Lg.reduce(function(d,p){return d.replace(p,"")},u);f!==""&&f!=="*"&&t.add(f)}}}catch(d){l.e(d)}finally{l.f()}return t};function jh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(xi){var t;if(e)t=n;else if(Ue.searchPseudoElementsFullScan)t=n.querySelectorAll("*");else{var i=new Set,r=qa(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var a=s.value;try{var o=qa(a.cssRules),l;try{for(o.s();!(l=o.n()).done;){var c=l.value,u=qP(c.selectorText),f=qa(u),d;try{for(f.s();!(d=f.n()).done;){var p=d.value;i.add(p)}}catch(v){f.e(v)}finally{f.f()}}}catch(v){o.e(v)}finally{o.f()}}catch(v){Ue.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(a.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!i.size)return;var m=Array.from(i).join(", ");try{t=n.querySelectorAll(m)}catch{}}return new Promise(function(v,g){var h=as(t).filter(jP).map(XP),M=pf.begin("searchPseudoElements");rv(),Promise.all(h).then(function(){M(),_u(),v()}).catch(function(){M(),_u(),g()})})}}var YP={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=jh,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?gt:i;Ue.searchPseudoElements&&jh(r)}}},$h=!1,KP={mixout:function(){return{dom:{unwatch:function(){rv(),$h=!0}}}},hooks:function(){return{bootstrap:function(){kh(hu("mutationObserverCallbacks",{}))},noAuto:function(){AP()},watch:function(t){var i=t.observeMutationsRoot;$h?_u():kh(hu("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},qh=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return i.flipX=!0,i;if(a&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(a){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},t)},ZP={mixout:function(){return{parse:{transform:function(t){return qh(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=qh(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,s=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(a/2*-1," -256)")},p={outer:o,inner:f,path:d};return{tag:"g",attributes:de({},p.outer),children:[{tag:"g",attributes:de({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:de(de({},i.icon.attributes),p.path)}]}]}}}},Zl={x:0,y:0,width:"100%",height:"100%"};function Yh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function JP(n){return n.tag==="g"?n.children:[n]}var QP={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),s=r?Vo(r.split(" ").map(function(a){return a.trim()})):Qg();return s.prefix||(s.prefix=Oi()),t.mask=s,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.mask,o=t.maskId,l=t.transform,c=s.width,u=s.icon,f=a.width,d=a.icon,p=WR({transform:l,containerWidth:f,iconWidth:c}),m={tag:"rect",attributes:de(de({},Zl),{},{fill:"white"})},v=u.children?{children:u.children.map(Yh)}:{},g={tag:"g",attributes:de({},p.inner),children:[Yh(de({tag:u.tag,attributes:de(de({},u.attributes),p.path)},v))]},h={tag:"g",attributes:de({},p.outer),children:[g]},M="mask-".concat(o||Rh()),y="clip-".concat(o||Rh()),S={tag:"mask",attributes:de(de({},Zl),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,h]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:JP(d)},S]};return i.push(A,{tag:"rect",attributes:de({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(M,")")},Zl)}),{children:i,attributes:r}}}},e2={provides:function(e){var t=!1;Ui.matchMedia&&(t=Ui.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:de(de({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=de(de({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:de(de({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:de(de({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:de(de({},a),{},{values:"1;0;1;1;0;1;"})}),i.push(o),i.push({tag:"path",attributes:de(de({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:de(de({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:de(de({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:de(de({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},t2={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},n2=[$R,FP,BP,zP,kP,YP,KP,ZP,QP,e2,t2];cP(n2,{mixoutsTo:dn});dn.noAuto;dn.config;var i2=dn.library;dn.dom;var Su=dn.parse;dn.findIconDefinition;dn.toHtml;var r2=dn.icon;dn.layer;dn.text;dn.counter;function Lt(n,e,t){return(e=l2(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Kh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ai(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Kh(Object(t),!0).forEach(function(i){Lt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Kh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function s2(n,e){if(n==null)return{};var t,i,r=a2(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)t=s[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function a2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function o2(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function l2(n){var e=o2(n,"string");return typeof e=="symbol"?e:e+""}function go(n){"@babel/helpers - typeof";return go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},go(n)}function Jl(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Lt({},n,e):{}}function c2(n){var e,t=(e={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-border":n.border,"fa-li":n.listItem,"fa-inverse":n.inverse,"fa-flip":n.flip===!0,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both"},Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(e,"fa-".concat(n.size),n.size!==null),"fa-rotate-".concat(n.rotation),n.rotation!==null),"fa-rotate-by",n.rotateBy),"fa-pull-".concat(n.pull),n.pull!==null),"fa-swap-opacity",n.swapOpacity),"fa-bounce",n.bounce),"fa-shake",n.shake),"fa-beat",n.beat),"fa-fade",n.fade),"fa-beat-fade",n.beatFade),Lt(Lt(Lt(Lt(e,"fa-flash",n.flash),"fa-spin-pulse",n.spinPulse),"fa-spin-reverse",n.spinReverse),"fa-width-auto",n.widthAuto));return Object.keys(t).map(function(i){return t[i]?i:null}).filter(function(i){return i})}var u2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ov={exports:{}};(function(n){(function(e){var t=function(h,M,y){if(!c(M)||f(M)||d(M)||p(M)||l(M))return M;var S,A=0,I=0;if(u(M))for(S=[],I=M.length;A<I;A++)S.push(t(h,M[A],y));else{S={};for(var R in M)Object.prototype.hasOwnProperty.call(M,R)&&(S[h(R,y)]=t(h,M[R],y))}return S},i=function(h,M){M=M||{};var y=M.separator||"_",S=M.split||/(?=[A-Z])/;return h.split(S).join(y)},r=function(h){return m(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(M,y){return y?y.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},s=function(h){var M=r(h);return M.substr(0,1).toUpperCase()+M.substr(1)},a=function(h,M){return i(h,M).toLowerCase()},o=Object.prototype.toString,l=function(h){return typeof h=="function"},c=function(h){return h===Object(h)},u=function(h){return o.call(h)=="[object Array]"},f=function(h){return o.call(h)=="[object Date]"},d=function(h){return o.call(h)=="[object RegExp]"},p=function(h){return o.call(h)=="[object Boolean]"},m=function(h){return h=h-0,h===h},v=function(h,M){var y=M&&"process"in M?M.process:M;return typeof y!="function"?h:function(S,A){return y(S,h,A)}},g={camelize:r,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(h,M){return t(v(r,M),h)},decamelizeKeys:function(h,M){return t(v(a,M),h,M)},pascalizeKeys:function(h,M){return t(v(s,M),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=g:e.humps=g})(u2)})(ov);var f2=ov.exports,d2=["class","style"];function h2(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=f2.camelize(t.slice(0,i)),s=t.slice(i+1).trim();return e[r]=s,e},{})}function p2(n){return n.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function lv(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var i=(n.children||[]).map(function(l){return lv(l)}),r=Object.keys(n.attributes||{}).reduce(function(l,c){var u=n.attributes[c];switch(c){case"class":l.class=p2(u);break;case"style":l.style=h2(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});t.class;var s=t.style,a=s===void 0?{}:s,o=s2(t,d2);return m0(n.tag,ai(ai(ai({},e),{},{class:r.class,style:ai(ai({},r.style),a)},r.attrs),o),i)}var cv=!1;try{cv=!0}catch{}function m2(){if(!cv&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Zh(n){if(n&&go(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Su.icon)return Su.icon(n);if(n===null)return null;if(go(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}var g2=Nu({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,t){var i=t.attrs,r=Yi(function(){return Zh(e.icon)}),s=Yi(function(){return Jl("classes",c2(e))}),a=Yi(function(){return Jl("transform",typeof e.transform=="string"?Su.transform(e.transform):e.transform)}),o=Yi(function(){return Jl("mask",Zh(e.mask))}),l=Yi(function(){var u=ai(ai(ai(ai({},s.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return u.title=e.title,u.titleId=e.titleId,r2(r.value,u)});sr(l,function(u){if(!u)return m2("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var c=Yi(function(){return l.value?lv(l.value.abstract[0],{},i):null});return function(){return c.value}}});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var v2={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var _2={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},x2={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},S2={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};i2.add(_2,x2,S2,v2);const uv=V0(ZA);uv.component("font-awesome-icon",g2);uv.mount("#app");
