var rh=Object.defineProperty;var ih=(n,e,t)=>e in n?rh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ft=(n,e,t)=>ih(n,typeof e!="symbol"?e+"":e,t);import{checkSyncNeed as sh,syncUserData as oh}from"https://xt8ss.github.io/ff-site-data/data-sync.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function te(){}const Or=n=>n;function Un(n,e){for(const t in e)n[t]=e[t];return n}function d0(n){return n()}function La(){return Object.create(null)}function be(n){n.forEach(d0)}function Gn(n){return typeof n=="function"}function Je(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Yr;function Fi(n,e){return n===e?!0:(Yr||(Yr=document.createElement("a")),Yr.href=e,n===Yr.href)}function ah(n){return Object.keys(n).length===0}function h0(n,...e){if(n==null){for(const r of e)r(void 0);return te}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function lh(n){let e;return h0(n,t=>e=t)(),e}function ve(n,e,t){n.$$.on_destroy.push(h0(e,t))}function _e(n,e,t){return n.set(t),e}const f0=typeof window<"u";let Ni=f0?()=>window.performance.now():()=>Date.now(),To=f0?n=>requestAnimationFrame(n):te;const Fn=new Set;function p0(n){Fn.forEach(e=>{e.c(n)||(Fn.delete(e),e.f())}),Fn.size!==0&&To(p0)}function Pi(n){let e;return Fn.size===0&&To(p0),{promise:new Promise(t=>{Fn.add(e={c:n,f:t})}),abort(){Fn.delete(e)}}}const ch=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function S(n,e){n.appendChild(e)}function _0(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function uh(n){const e=F("style");return e.textContent="/* empty */",dh(_0(n),e),e.sheet}function dh(n,e){return S(n.head||n,e),e.sheet}function L(n,e,t){n.insertBefore(e,t||null)}function O(n){n.parentNode&&n.parentNode.removeChild(n)}function cn(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function F(n){return document.createElement(n)}function hh(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function K(n){return document.createTextNode(n)}function z(){return K(" ")}function mr(){return K("")}function Q(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function R(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}const fh=["width","height"];function Hn(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set&&fh.indexOf(r)===-1?n[r]=e[r]:R(n,r,e[r])}function ke(n,e,t){const r=e.toLowerCase();r in n?n[r]=typeof n[r]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:R(n,e,t)}function ph(n){return Array.from(n.childNodes)}function ge(n,e){e=""+e,n.data!==e&&(n.data=e)}function Xe(n,e){n.value=e??""}function je(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function $e(n,e,t){n.classList.toggle(e,!!t)}function x0(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}class _h{constructor(e=!1){Ft(this,"is_svg",!1);Ft(this,"e");Ft(this,"n");Ft(this,"t");Ft(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=hh(t.nodeName):this.e=F(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)L(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(O)}}function Ma(n,e){return new n(e)}const ai=new Map;let li=0;function xh(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function gh(n,e){const t={stylesheet:uh(e),rules:{}};return ai.set(n,t),t}function vr(n,e,t,r,i,s,o,a=0){const c=16.666/r;let l=`{
`;for(let _=0;_<=1;_+=c){const y=e+(t-e)*s(_);l+=_*100+`%{${o(y,1-y)}}
`}const u=l+`100% {${o(t,1-t)}}
}`,h=`__svelte_${xh(u)}_${a}`,d=_0(n),{stylesheet:f,rules:p}=ai.get(d)||gh(d,n);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const m=n.style.animation||"";return n.style.animation=`${m?`${m}, `:""}${h} ${r}ms linear ${i}ms 1 both`,li+=1,h}function yr(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),li-=i,li||mh())}function mh(){To(()=>{li||(ai.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&O(e)}),ai.clear())})}function vh(n,e,t,r){if(!e)return te;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return te;const{delay:s=0,duration:o=300,easing:a=Or,start:c=Ni()+s,end:l=c+o,tick:u=te,css:h}=t(n,{from:e,to:i},r);let d=!0,f=!1,p;function m(){h&&(p=vr(n,0,1,o,s,a,h)),s||(f=!0)}function _(){h&&yr(n,p),d=!1}return Pi(y=>{if(!f&&y>=c&&(f=!0),f&&y>=l&&(u(1,0),_()),!d)return!1;if(f){const g=y-c,x=0+1*a(g/o);u(x,1-x)}return!0}),m(),u(0,1),_}function yh(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=r,g0(n,i)}}function g0(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(n),i=r.transform==="none"?"":r.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Er;function ur(n){Er=n}function m0(){if(!Er)throw new Error("Function called outside component initialization");return Er}function Eh(n){m0().$$.on_mount.push(n)}function v0(){const n=m0();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const s=x0(e,t,{cancelable:r});return i.slice().forEach(o=>{o.call(n,s)}),!s.defaultPrevented}return!0}}const Dn=[],dr=[];let Nn=[];const Ua=[],Ch=Promise.resolve();let no=!1;function bh(){no||(no=!0,Ch.then(y0))}function Oe(n){Nn.push(n)}const Ji=new Set;let An=0;function y0(){if(An!==0)return;const n=Er;do{try{for(;An<Dn.length;){const e=Dn[An];An++,ur(e),wh(e.$$)}}catch(e){throw Dn.length=0,An=0,e}for(ur(null),Dn.length=0,An=0;dr.length;)dr.pop()();for(let e=0;e<Nn.length;e+=1){const t=Nn[e];Ji.has(t)||(Ji.add(t),t())}Nn.length=0}while(Dn.length);for(;Ua.length;)Ua.pop()();no=!1,Ji.clear(),ur(n)}function wh(n){if(n.fragment!==null){n.update(),be(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Oe)}}function Ah(n){const e=[],t=[];Nn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Nn=e}let rr;function So(){return rr||(rr=Promise.resolve(),rr.then(()=>{rr=null})),rr}function an(n,e,t){n.dispatchEvent(x0(`${e?"intro":"outro"}${t}`))}const Zr=new Set;let ut;function et(){ut={r:0,c:[],p:ut}}function tt(){ut.r||be(ut.c),ut=ut.p}function ie(n,e){n&&n.i&&(Zr.delete(n),n.i(e))}function he(n,e,t,r){if(n&&n.o){if(Zr.has(n))return;Zr.add(n),ut.c.push(()=>{Zr.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const Ro={duration:0};function E0(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,a,c=0;function l(){o&&yr(n,o)}function u(){const{delay:d=0,duration:f=300,easing:p=Or,tick:m=te,css:_}=i||Ro;_&&(o=vr(n,0,1,f,d,p,_,c++)),m(0,1);const y=Ni()+d,g=y+f;a&&a.abort(),s=!0,Oe(()=>an(n,!0,"start")),a=Pi(x=>{if(s){if(x>=g)return m(1,0),an(n,!0,"end"),l(),s=!1;if(x>=y){const v=p((x-y)/f);m(v,1-v)}}return s})}let h=!1;return{start(){h||(h=!0,yr(n),Gn(i)?(i=i(r),So().then(u)):u())},invalidate(){h=!1},end(){s&&(l(),s=!1)}}}function C0(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const a=ut;a.r+=1;let c;function l(){const{delay:u=0,duration:h=300,easing:d=Or,tick:f=te,css:p}=i||Ro;p&&(o=vr(n,1,0,h,u,d,p));const m=Ni()+u,_=m+h;Oe(()=>an(n,!1,"start")),"inert"in n&&(c=n.inert,n.inert=!0),Pi(y=>{if(s){if(y>=_)return f(0,1),an(n,!1,"end"),--a.r||be(a.c),!1;if(y>=m){const g=d((y-m)/h);f(1-g,g)}}return s})}return Gn(i)?So().then(()=>{i=i(r),l()}):l(),{end(u){u&&"inert"in n&&(n.inert=c),u&&i.tick&&i.tick(1,0),s&&(o&&yr(n,o),s=!1)}}}function qe(n,e,t,r){let s=e(n,t,{direction:"both"}),o=r?0:1,a=null,c=null,l=null,u;function h(){l&&yr(n,l)}function d(p,m){const _=p.b-o;return m*=Math.abs(_),{a:o,b:p.b,d:_,duration:m,start:p.start,end:p.start+m,group:p.group}}function f(p){const{delay:m=0,duration:_=300,easing:y=Or,tick:g=te,css:x}=s||Ro,v={start:Ni()+m,b:p};p||(v.group=ut,ut.r+=1),"inert"in n&&(p?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),a||c?c=v:(x&&(h(),l=vr(n,o,p,_,m,y,x)),p&&g(0,1),a=d(v,_),Oe(()=>an(n,p,"start")),Pi(E=>{if(c&&E>c.start&&(a=d(c,_),c=null,an(n,a.b,"start"),x&&(h(),l=vr(n,o,a.b,a.duration,0,y,s.css))),a){if(E>=a.end)g(o=a.b,1-o),an(n,a.b,"end"),c||(a.b?h():--a.group.r||be(a.group.c)),a=null;else if(E>=a.start){const A=E-a.start;o=a.a+a.d*y(A/a.duration),g(o,1-o)}}return!!(a||c)}))}return{run(p){Gn(s)?So().then(()=>{s=s({direction:p?"in":"out"}),f(p)}):f(p)},end(){h(),a=c=null}}}function Pe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ih(n,e){he(n,1,1,()=>{e.delete(n.key)})}function kh(n,e){n.f(),Ih(n,e)}function Dh(n,e,t,r,i,s,o,a,c,l,u,h){let d=n.length,f=s.length,p=d;const m={};for(;p--;)m[n[p].key]=p;const _=[],y=new Map,g=new Map,x=[];for(p=f;p--;){const I=h(i,s,p),C=t(I);let k=o.get(C);k?x.push(()=>k.p(I,e)):(k=l(C,I),k.c()),y.set(C,_[p]=k),C in m&&g.set(C,Math.abs(p-m[C]))}const v=new Set,E=new Set;function A(I){ie(I,1),I.m(a,u),o.set(I.key,I),u=I.first,f--}for(;d&&f;){const I=_[f-1],C=n[d-1],k=I.key,b=C.key;I===C?(u=I.first,d--,f--):y.has(b)?!o.has(k)||v.has(k)?A(I):E.has(b)?d--:g.get(k)>g.get(b)?(E.add(k),A(I)):(v.add(b),d--):(c(C,o),d--)}for(;d--;){const I=n[d];y.has(I.key)||c(I,o)}for(;f;)A(_[f-1]);return be(x),_}function Wn(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(t[c]=a[c],i[c]=1);n[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in t||(t[o]=void 0);return t}function ro(n){return typeof n=="object"&&n!==null?n:{}}function un(n){n&&n.c()}function Gt(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),Oe(()=>{const s=n.$$.on_mount.map(d0).filter(Gn);n.$$.on_destroy?n.$$.on_destroy.push(...s):be(s),n.$$.on_mount=[]}),i.forEach(Oe)}function Kt(n,e){const t=n.$$;t.fragment!==null&&(Ah(t.after_update),be(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Th(n,e){n.$$.dirty[0]===-1&&(Dn.push(n),bh(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function at(n,e,t,r,i,s,o=null,a=[-1]){const c=Er;ur(n);const l=n.$$={fragment:null,ctx:[],props:s,update:te,not_equal:i,bound:La(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:La(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(n,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=p)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](p),u&&Th(n,h)),d}):[],l.update(),u=!0,be(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=ph(e.target);l.fragment&&l.fragment.l(h),h.forEach(O)}else l.fragment&&l.fragment.c();e.intro&&ie(n.$$.fragment),Gt(n,e.target,e.anchor),y0()}ur(c)}class lt{constructor(){Ft(this,"$$");Ft(this,"$$set")}$destroy(){Kt(this,1),this.$destroy=te}$on(e,t){if(!Gn(t))return te;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ah(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Sh="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Sh);const In=[];function pt(n,e=te){let t;const r=new Set;function i(a){if(Je(n,a)&&(n=a,t)){const c=!In.length;for(const l of r)l[1](),In.push(l,n);if(c){for(let l=0;l<In.length;l+=2)In[l][0](In[l+1]);In.length=0}}}function s(a){i(a(n))}function o(a,c=te){const l=[a,c];return r.add(l),r.size===1&&(t=e(i,s)||te),a(n),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}var X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rh(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var b0={exports:{}};function Bh(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Zi={exports:{}};const Fh={},Nh=Object.freeze(Object.defineProperty({__proto__:null,default:Fh},Symbol.toStringTag,{value:"Module"})),Ph=Rh(Nh);var Ha;function oe(){return Ha||(Ha=1,function(n,e){(function(t,r){n.exports=r()})(X,function(){var t=t||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof X<"u"&&X.crypto&&(s=X.crypto),!s&&typeof Bh=="function")try{s=Ph}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function g(){}return function(x){var v;return g.prototype=x,v=new g,g.prototype=null,v}}(),c={},l=c.lib={},u=l.Base=function(){return{extend:function(g){var x=a(this);return g&&x.mixIn(g),(!x.hasOwnProperty("init")||this.init===x.init)&&(x.init=function(){x.$super.init.apply(this,arguments)}),x.init.prototype=x,x.$super=this,x},create:function(){var g=this.extend();return g.init.apply(g,arguments),g},init:function(){},mixIn:function(g){for(var x in g)g.hasOwnProperty(x)&&(this[x]=g[x]);g.hasOwnProperty("toString")&&(this.toString=g.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=l.WordArray=u.extend({init:function(g,x){g=this.words=g||[],x!=i?this.sigBytes=x:this.sigBytes=g.length*4},toString:function(g){return(g||f).stringify(this)},concat:function(g){var x=this.words,v=g.words,E=this.sigBytes,A=g.sigBytes;if(this.clamp(),E%4)for(var I=0;I<A;I++){var C=v[I>>>2]>>>24-I%4*8&255;x[E+I>>>2]|=C<<24-(E+I)%4*8}else for(var k=0;k<A;k+=4)x[E+k>>>2]=v[k>>>2];return this.sigBytes+=A,this},clamp:function(){var g=this.words,x=this.sigBytes;g[x>>>2]&=4294967295<<32-x%4*8,g.length=r.ceil(x/4)},clone:function(){var g=u.clone.call(this);return g.words=this.words.slice(0),g},random:function(g){for(var x=[],v=0;v<g;v+=4)x.push(o());return new h.init(x,g)}}),d=c.enc={},f=d.Hex={stringify:function(g){for(var x=g.words,v=g.sigBytes,E=[],A=0;A<v;A++){var I=x[A>>>2]>>>24-A%4*8&255;E.push((I>>>4).toString(16)),E.push((I&15).toString(16))}return E.join("")},parse:function(g){for(var x=g.length,v=[],E=0;E<x;E+=2)v[E>>>3]|=parseInt(g.substr(E,2),16)<<24-E%8*4;return new h.init(v,x/2)}},p=d.Latin1={stringify:function(g){for(var x=g.words,v=g.sigBytes,E=[],A=0;A<v;A++){var I=x[A>>>2]>>>24-A%4*8&255;E.push(String.fromCharCode(I))}return E.join("")},parse:function(g){for(var x=g.length,v=[],E=0;E<x;E++)v[E>>>2]|=(g.charCodeAt(E)&255)<<24-E%4*8;return new h.init(v,x)}},m=d.Utf8={stringify:function(g){try{return decodeURIComponent(escape(p.stringify(g)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(g){return p.parse(unescape(encodeURIComponent(g)))}},_=l.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(g){typeof g=="string"&&(g=m.parse(g)),this._data.concat(g),this._nDataBytes+=g.sigBytes},_process:function(g){var x,v=this._data,E=v.words,A=v.sigBytes,I=this.blockSize,C=I*4,k=A/C;g?k=r.ceil(k):k=r.max((k|0)-this._minBufferSize,0);var b=k*I,w=r.min(b*4,A);if(b){for(var T=0;T<b;T+=I)this._doProcessBlock(E,T);x=E.splice(0,b),v.sigBytes-=w}return new h.init(x,w)},clone:function(){var g=u.clone.call(this);return g._data=this._data.clone(),g},_minBufferSize:0});l.Hasher=_.extend({cfg:u.extend(),init:function(g){this.cfg=this.cfg.extend(g),this.reset()},reset:function(){_.reset.call(this),this._doReset()},update:function(g){return this._append(g),this._process(),this},finalize:function(g){g&&this._append(g);var x=this._doFinalize();return x},blockSize:16,_createHelper:function(g){return function(x,v){return new g.init(v).finalize(x)}},_createHmacHelper:function(g){return function(x,v){return new y.HMAC.init(g,v).finalize(x)}}});var y=c.algo={};return c}(Math);return t})}(Zi)),Zi.exports}var es={exports:{}},Wa;function Oi(){return Wa||(Wa=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.Base,a=s.WordArray,c=i.x64={};c.Word=o.extend({init:function(l,u){this.high=l,this.low=u}}),c.WordArray=o.extend({init:function(l,u){l=this.words=l||[],u!=r?this.sigBytes=u:this.sigBytes=l.length*8},toX32:function(){for(var l=this.words,u=l.length,h=[],d=0;d<u;d++){var f=l[d];h.push(f.high),h.push(f.low)}return a.create(h,this.sigBytes)},clone:function(){for(var l=o.clone.call(this),u=l.words=this.words.slice(0),h=u.length,d=0;d<h;d++)u[d]=u[d].clone();return l}})}(),t})}(es)),es.exports}var ts={exports:{}},qa;function Oh(){return qa||(qa=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){return function(){if(typeof ArrayBuffer=="function"){var r=t,i=r.lib,s=i.WordArray,o=s.init,a=s.init=function(c){if(c instanceof ArrayBuffer&&(c=new Uint8Array(c)),(c instanceof Int8Array||typeof Uint8ClampedArray<"u"&&c instanceof Uint8ClampedArray||c instanceof Int16Array||c instanceof Uint16Array||c instanceof Int32Array||c instanceof Uint32Array||c instanceof Float32Array||c instanceof Float64Array)&&(c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength)),c instanceof Uint8Array){for(var l=c.byteLength,u=[],h=0;h<l;h++)u[h>>>2]|=c[h]<<24-h%4*8;o.call(this,u,l)}else o.apply(this,arguments)};a.prototype=s}}(),t.lib.WordArray})}(ts)),ts.exports}var ns={exports:{}},za;function Lh(){return za||(za=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(c){for(var l=c.words,u=c.sigBytes,h=[],d=0;d<u;d+=2){var f=l[d>>>2]>>>16-d%4*8&65535;h.push(String.fromCharCode(f))}return h.join("")},parse:function(c){for(var l=c.length,u=[],h=0;h<l;h++)u[h>>>1]|=c.charCodeAt(h)<<16-h%2*16;return s.create(u,l*2)}},o.Utf16LE={stringify:function(c){for(var l=c.words,u=c.sigBytes,h=[],d=0;d<u;d+=2){var f=a(l[d>>>2]>>>16-d%4*8&65535);h.push(String.fromCharCode(f))}return h.join("")},parse:function(c){for(var l=c.length,u=[],h=0;h<l;h++)u[h>>>1]|=a(c.charCodeAt(h)<<16-h%2*16);return s.create(u,l*2)}};function a(c){return c<<8&4278255360|c>>>8&16711935}}(),t.enc.Utf16})}(ns)),ns.exports}var rs={exports:{}},Va;function vn(){return Va||(Va=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(c){var l=c.words,u=c.sigBytes,h=this._map;c.clamp();for(var d=[],f=0;f<u;f+=3)for(var p=l[f>>>2]>>>24-f%4*8&255,m=l[f+1>>>2]>>>24-(f+1)%4*8&255,_=l[f+2>>>2]>>>24-(f+2)%4*8&255,y=p<<16|m<<8|_,g=0;g<4&&f+g*.75<u;g++)d.push(h.charAt(y>>>6*(3-g)&63));var x=h.charAt(64);if(x)for(;d.length%4;)d.push(x);return d.join("")},parse:function(c){var l=c.length,u=this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var d=0;d<u.length;d++)h[u.charCodeAt(d)]=d}var f=u.charAt(64);if(f){var p=c.indexOf(f);p!==-1&&(l=p)}return a(c,l,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(c,l,u){for(var h=[],d=0,f=0;f<l;f++)if(f%4){var p=u[c.charCodeAt(f-1)]<<f%4*2,m=u[c.charCodeAt(f)]>>>6-f%4*2,_=p|m;h[d>>>2]|=_<<24-d%4*8,d++}return s.create(h,d)}}(),t.enc.Base64})}(rs)),rs.exports}var is={exports:{}},ja;function Mh(){return ja||(ja=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(c,l){l===void 0&&(l=!0);var u=c.words,h=c.sigBytes,d=l?this._safe_map:this._map;c.clamp();for(var f=[],p=0;p<h;p+=3)for(var m=u[p>>>2]>>>24-p%4*8&255,_=u[p+1>>>2]>>>24-(p+1)%4*8&255,y=u[p+2>>>2]>>>24-(p+2)%4*8&255,g=m<<16|_<<8|y,x=0;x<4&&p+x*.75<h;x++)f.push(d.charAt(g>>>6*(3-x)&63));var v=d.charAt(64);if(v)for(;f.length%4;)f.push(v);return f.join("")},parse:function(c,l){l===void 0&&(l=!0);var u=c.length,h=l?this._safe_map:this._map,d=this._reverseMap;if(!d){d=this._reverseMap=[];for(var f=0;f<h.length;f++)d[h.charCodeAt(f)]=f}var p=h.charAt(64);if(p){var m=c.indexOf(p);m!==-1&&(u=m)}return a(c,u,d)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function a(c,l,u){for(var h=[],d=0,f=0;f<l;f++)if(f%4){var p=u[c.charCodeAt(f-1)]<<f%4*2,m=u[c.charCodeAt(f)]>>>6-f%4*2,_=p|m;h[d>>>2]|=_<<24-d%4*8,d++}return s.create(h,d)}}(),t.enc.Base64url})}(is)),is.exports}var ss={exports:{}},Ga;function yn(){return Ga||(Ga=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=[];(function(){for(var m=0;m<64;m++)l[m]=r.abs(r.sin(m+1))*4294967296|0})();var u=c.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(m,_){for(var y=0;y<16;y++){var g=_+y,x=m[g];m[g]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360}var v=this._hash.words,E=m[_+0],A=m[_+1],I=m[_+2],C=m[_+3],k=m[_+4],b=m[_+5],w=m[_+6],T=m[_+7],D=m[_+8],q=m[_+9],V=m[_+10],W=m[_+11],j=m[_+12],ne=m[_+13],ae=m[_+14],re=m[_+15],N=v[0],M=v[1],U=v[2],P=v[3];N=h(N,M,U,P,E,7,l[0]),P=h(P,N,M,U,A,12,l[1]),U=h(U,P,N,M,I,17,l[2]),M=h(M,U,P,N,C,22,l[3]),N=h(N,M,U,P,k,7,l[4]),P=h(P,N,M,U,b,12,l[5]),U=h(U,P,N,M,w,17,l[6]),M=h(M,U,P,N,T,22,l[7]),N=h(N,M,U,P,D,7,l[8]),P=h(P,N,M,U,q,12,l[9]),U=h(U,P,N,M,V,17,l[10]),M=h(M,U,P,N,W,22,l[11]),N=h(N,M,U,P,j,7,l[12]),P=h(P,N,M,U,ne,12,l[13]),U=h(U,P,N,M,ae,17,l[14]),M=h(M,U,P,N,re,22,l[15]),N=d(N,M,U,P,A,5,l[16]),P=d(P,N,M,U,w,9,l[17]),U=d(U,P,N,M,W,14,l[18]),M=d(M,U,P,N,E,20,l[19]),N=d(N,M,U,P,b,5,l[20]),P=d(P,N,M,U,V,9,l[21]),U=d(U,P,N,M,re,14,l[22]),M=d(M,U,P,N,k,20,l[23]),N=d(N,M,U,P,q,5,l[24]),P=d(P,N,M,U,ae,9,l[25]),U=d(U,P,N,M,C,14,l[26]),M=d(M,U,P,N,D,20,l[27]),N=d(N,M,U,P,ne,5,l[28]),P=d(P,N,M,U,I,9,l[29]),U=d(U,P,N,M,T,14,l[30]),M=d(M,U,P,N,j,20,l[31]),N=f(N,M,U,P,b,4,l[32]),P=f(P,N,M,U,D,11,l[33]),U=f(U,P,N,M,W,16,l[34]),M=f(M,U,P,N,ae,23,l[35]),N=f(N,M,U,P,A,4,l[36]),P=f(P,N,M,U,k,11,l[37]),U=f(U,P,N,M,T,16,l[38]),M=f(M,U,P,N,V,23,l[39]),N=f(N,M,U,P,ne,4,l[40]),P=f(P,N,M,U,E,11,l[41]),U=f(U,P,N,M,C,16,l[42]),M=f(M,U,P,N,w,23,l[43]),N=f(N,M,U,P,q,4,l[44]),P=f(P,N,M,U,j,11,l[45]),U=f(U,P,N,M,re,16,l[46]),M=f(M,U,P,N,I,23,l[47]),N=p(N,M,U,P,E,6,l[48]),P=p(P,N,M,U,T,10,l[49]),U=p(U,P,N,M,ae,15,l[50]),M=p(M,U,P,N,b,21,l[51]),N=p(N,M,U,P,j,6,l[52]),P=p(P,N,M,U,C,10,l[53]),U=p(U,P,N,M,V,15,l[54]),M=p(M,U,P,N,A,21,l[55]),N=p(N,M,U,P,D,6,l[56]),P=p(P,N,M,U,re,10,l[57]),U=p(U,P,N,M,w,15,l[58]),M=p(M,U,P,N,ne,21,l[59]),N=p(N,M,U,P,k,6,l[60]),P=p(P,N,M,U,W,10,l[61]),U=p(U,P,N,M,I,15,l[62]),M=p(M,U,P,N,q,21,l[63]),v[0]=v[0]+N|0,v[1]=v[1]+M|0,v[2]=v[2]+U|0,v[3]=v[3]+P|0},_doFinalize:function(){var m=this._data,_=m.words,y=this._nDataBytes*8,g=m.sigBytes*8;_[g>>>5]|=128<<24-g%32;var x=r.floor(y/4294967296),v=y;_[(g+64>>>9<<4)+15]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,_[(g+64>>>9<<4)+14]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,m.sigBytes=(_.length+1)*4,this._process();for(var E=this._hash,A=E.words,I=0;I<4;I++){var C=A[I];A[I]=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360}return E},clone:function(){var m=a.clone.call(this);return m._hash=this._hash.clone(),m}});function h(m,_,y,g,x,v,E){var A=m+(_&y|~_&g)+x+E;return(A<<v|A>>>32-v)+_}function d(m,_,y,g,x,v,E){var A=m+(_&g|y&~g)+x+E;return(A<<v|A>>>32-v)+_}function f(m,_,y,g,x,v,E){var A=m+(_^y^g)+x+E;return(A<<v|A>>>32-v)+_}function p(m,_,y,g,x,v,E){var A=m+(y^(_|~g))+x+E;return(A<<v|A>>>32-v)+_}i.MD5=a._createHelper(u),i.HmacMD5=a._createHmacHelper(u)}(Math),t.MD5})}(ss)),ss.exports}var os={exports:{}},Ka;function w0(){return Ka||(Ka=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.Hasher,a=r.algo,c=[],l=a.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,h){for(var d=this._hash.words,f=d[0],p=d[1],m=d[2],_=d[3],y=d[4],g=0;g<80;g++){if(g<16)c[g]=u[h+g]|0;else{var x=c[g-3]^c[g-8]^c[g-14]^c[g-16];c[g]=x<<1|x>>>31}var v=(f<<5|f>>>27)+y+c[g];g<20?v+=(p&m|~p&_)+1518500249:g<40?v+=(p^m^_)+1859775393:g<60?v+=(p&m|p&_|m&_)-1894007588:v+=(p^m^_)-899497514,y=_,_=m,m=p<<30|p>>>2,p=f,f=v}d[0]=d[0]+f|0,d[1]=d[1]+p|0,d[2]=d[2]+m|0,d[3]=d[3]+_|0,d[4]=d[4]+y|0},_doFinalize:function(){var u=this._data,h=u.words,d=this._nDataBytes*8,f=u.sigBytes*8;return h[f>>>5]|=128<<24-f%32,h[(f+64>>>9<<4)+14]=Math.floor(d/4294967296),h[(f+64>>>9<<4)+15]=d,u.sigBytes=h.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(l),r.HmacSHA1=o._createHmacHelper(l)}(),t.SHA1})}(os)),os.exports}var as={exports:{}},$a;function Bo(){return $a||($a=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=[],u=[];(function(){function f(y){for(var g=r.sqrt(y),x=2;x<=g;x++)if(!(y%x))return!1;return!0}function p(y){return(y-(y|0))*4294967296|0}for(var m=2,_=0;_<64;)f(m)&&(_<8&&(l[_]=p(r.pow(m,1/2))),u[_]=p(r.pow(m,1/3)),_++),m++})();var h=[],d=c.SHA256=a.extend({_doReset:function(){this._hash=new o.init(l.slice(0))},_doProcessBlock:function(f,p){for(var m=this._hash.words,_=m[0],y=m[1],g=m[2],x=m[3],v=m[4],E=m[5],A=m[6],I=m[7],C=0;C<64;C++){if(C<16)h[C]=f[p+C]|0;else{var k=h[C-15],b=(k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3,w=h[C-2],T=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;h[C]=b+h[C-7]+T+h[C-16]}var D=v&E^~v&A,q=_&y^_&g^y&g,V=(_<<30|_>>>2)^(_<<19|_>>>13)^(_<<10|_>>>22),W=(v<<26|v>>>6)^(v<<21|v>>>11)^(v<<7|v>>>25),j=I+W+D+u[C]+h[C],ne=V+q;I=A,A=E,E=v,v=x+j|0,x=g,g=y,y=_,_=j+ne|0}m[0]=m[0]+_|0,m[1]=m[1]+y|0,m[2]=m[2]+g|0,m[3]=m[3]+x|0,m[4]=m[4]+v|0,m[5]=m[5]+E|0,m[6]=m[6]+A|0,m[7]=m[7]+I|0},_doFinalize:function(){var f=this._data,p=f.words,m=this._nDataBytes*8,_=f.sigBytes*8;return p[_>>>5]|=128<<24-_%32,p[(_+64>>>9<<4)+14]=r.floor(m/4294967296),p[(_+64>>>9<<4)+15]=m,f.sigBytes=p.length*4,this._process(),this._hash},clone:function(){var f=a.clone.call(this);return f._hash=this._hash.clone(),f}});i.SHA256=a._createHelper(d),i.HmacSHA256=a._createHmacHelper(d)}(Math),t.SHA256})}(as)),as.exports}var ls={exports:{}},Ya;function Uh(){return Ya||(Ya=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Bo())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.algo,a=o.SHA256,c=o.SHA224=a.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var l=a._doFinalize.call(this);return l.sigBytes-=4,l}});r.SHA224=a._createHelper(c),r.HmacSHA224=a._createHmacHelper(c)}(),t.SHA224})}(ls)),ls.exports}var cs={exports:{}},Qa;function A0(){return Qa||(Qa=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Oi())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Hasher,o=r.x64,a=o.Word,c=o.WordArray,l=r.algo;function u(){return a.create.apply(a,arguments)}var h=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],d=[];(function(){for(var p=0;p<80;p++)d[p]=u()})();var f=l.SHA512=s.extend({_doReset:function(){this._hash=new c.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(p,m){for(var _=this._hash.words,y=_[0],g=_[1],x=_[2],v=_[3],E=_[4],A=_[5],I=_[6],C=_[7],k=y.high,b=y.low,w=g.high,T=g.low,D=x.high,q=x.low,V=v.high,W=v.low,j=E.high,ne=E.low,ae=A.high,re=A.low,N=I.high,M=I.low,U=C.high,P=C.low,ue=k,ce=b,ye=w,Y=T,xt=D,ct=q,en=V,gt=W,Me=j,Te=ne,Tt=ae,mt=re,St=N,vt=M,tn=U,yt=P,Ue=0;Ue<80;Ue++){var Re,Ye,Rt=d[Ue];if(Ue<16)Ye=Rt.high=p[m+Ue*2]|0,Re=Rt.low=p[m+Ue*2+1]|0;else{var bn=d[Ue-15],B=bn.high,Z=bn.low,Be=(B>>>1|Z<<31)^(B>>>8|Z<<24)^B>>>7,$r=(Z>>>1|B<<31)^(Z>>>8|B<<24)^(Z>>>7|B<<25),ka=d[Ue-2],wn=ka.high,nr=ka.low,jd=(wn>>>19|nr<<13)^(wn<<3|nr>>>29)^wn>>>6,Da=(nr>>>19|wn<<13)^(nr<<3|wn>>>29)^(nr>>>6|wn<<26),Ta=d[Ue-7],Gd=Ta.high,Kd=Ta.low,Sa=d[Ue-16],$d=Sa.high,Ra=Sa.low;Re=$r+Kd,Ye=Be+Gd+(Re>>>0<$r>>>0?1:0),Re=Re+Da,Ye=Ye+jd+(Re>>>0<Da>>>0?1:0),Re=Re+Ra,Ye=Ye+$d+(Re>>>0<Ra>>>0?1:0),Rt.high=Ye,Rt.low=Re}var Yd=Me&Tt^~Me&St,Ba=Te&mt^~Te&vt,Qd=ue&ye^ue&xt^ye&xt,Xd=ce&Y^ce&ct^Y&ct,Jd=(ue>>>28|ce<<4)^(ue<<30|ce>>>2)^(ue<<25|ce>>>7),Fa=(ce>>>28|ue<<4)^(ce<<30|ue>>>2)^(ce<<25|ue>>>7),Zd=(Me>>>14|Te<<18)^(Me>>>18|Te<<14)^(Me<<23|Te>>>9),eh=(Te>>>14|Me<<18)^(Te>>>18|Me<<14)^(Te<<23|Me>>>9),Na=h[Ue],th=Na.high,Pa=Na.low,Ke=yt+eh,Bt=tn+Zd+(Ke>>>0<yt>>>0?1:0),Ke=Ke+Ba,Bt=Bt+Yd+(Ke>>>0<Ba>>>0?1:0),Ke=Ke+Pa,Bt=Bt+th+(Ke>>>0<Pa>>>0?1:0),Ke=Ke+Re,Bt=Bt+Ye+(Ke>>>0<Re>>>0?1:0),Oa=Fa+Xd,nh=Jd+Qd+(Oa>>>0<Fa>>>0?1:0);tn=St,yt=vt,St=Tt,vt=mt,Tt=Me,mt=Te,Te=gt+Ke|0,Me=en+Bt+(Te>>>0<gt>>>0?1:0)|0,en=xt,gt=ct,xt=ye,ct=Y,ye=ue,Y=ce,ce=Ke+Oa|0,ue=Bt+nh+(ce>>>0<Ke>>>0?1:0)|0}b=y.low=b+ce,y.high=k+ue+(b>>>0<ce>>>0?1:0),T=g.low=T+Y,g.high=w+ye+(T>>>0<Y>>>0?1:0),q=x.low=q+ct,x.high=D+xt+(q>>>0<ct>>>0?1:0),W=v.low=W+gt,v.high=V+en+(W>>>0<gt>>>0?1:0),ne=E.low=ne+Te,E.high=j+Me+(ne>>>0<Te>>>0?1:0),re=A.low=re+mt,A.high=ae+Tt+(re>>>0<mt>>>0?1:0),M=I.low=M+vt,I.high=N+St+(M>>>0<vt>>>0?1:0),P=C.low=P+yt,C.high=U+tn+(P>>>0<yt>>>0?1:0)},_doFinalize:function(){var p=this._data,m=p.words,_=this._nDataBytes*8,y=p.sigBytes*8;m[y>>>5]|=128<<24-y%32,m[(y+128>>>10<<5)+30]=Math.floor(_/4294967296),m[(y+128>>>10<<5)+31]=_,p.sigBytes=m.length*4,this._process();var g=this._hash.toX32();return g},clone:function(){var p=s.clone.call(this);return p._hash=this._hash.clone(),p},blockSize:1024/32});r.SHA512=s._createHelper(f),r.HmacSHA512=s._createHmacHelper(f)}(),t.SHA512})}(cs)),cs.exports}var us={exports:{}},Xa;function Hh(){return Xa||(Xa=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Oi(),A0())})(X,function(t){return function(){var r=t,i=r.x64,s=i.Word,o=i.WordArray,a=r.algo,c=a.SHA512,l=a.SHA384=c.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=c._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=c._createHelper(l),r.HmacSHA384=c._createHmacHelper(l)}(),t.SHA384})}(us)),us.exports}var ds={exports:{}},Ja;function Wh(){return Ja||(Ja=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Oi())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.x64,l=c.Word,u=i.algo,h=[],d=[],f=[];(function(){for(var _=1,y=0,g=0;g<24;g++){h[_+5*y]=(g+1)*(g+2)/2%64;var x=y%5,v=(2*_+3*y)%5;_=x,y=v}for(var _=0;_<5;_++)for(var y=0;y<5;y++)d[_+5*y]=y+(2*_+3*y)%5*5;for(var E=1,A=0;A<24;A++){for(var I=0,C=0,k=0;k<7;k++){if(E&1){var b=(1<<k)-1;b<32?C^=1<<b:I^=1<<b-32}E&128?E=E<<1^113:E<<=1}f[A]=l.create(I,C)}})();var p=[];(function(){for(var _=0;_<25;_++)p[_]=l.create()})();var m=u.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var _=this._state=[],y=0;y<25;y++)_[y]=new l.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(_,y){for(var g=this._state,x=this.blockSize/2,v=0;v<x;v++){var E=_[y+2*v],A=_[y+2*v+1];E=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360,A=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360;var I=g[v];I.high^=A,I.low^=E}for(var C=0;C<24;C++){for(var k=0;k<5;k++){for(var b=0,w=0,T=0;T<5;T++){var I=g[k+5*T];b^=I.high,w^=I.low}var D=p[k];D.high=b,D.low=w}for(var k=0;k<5;k++)for(var q=p[(k+4)%5],V=p[(k+1)%5],W=V.high,j=V.low,b=q.high^(W<<1|j>>>31),w=q.low^(j<<1|W>>>31),T=0;T<5;T++){var I=g[k+5*T];I.high^=b,I.low^=w}for(var ne=1;ne<25;ne++){var b,w,I=g[ne],ae=I.high,re=I.low,N=h[ne];N<32?(b=ae<<N|re>>>32-N,w=re<<N|ae>>>32-N):(b=re<<N-32|ae>>>64-N,w=ae<<N-32|re>>>64-N);var M=p[d[ne]];M.high=b,M.low=w}var U=p[0],P=g[0];U.high=P.high,U.low=P.low;for(var k=0;k<5;k++)for(var T=0;T<5;T++){var ne=k+5*T,I=g[ne],ue=p[ne],ce=p[(k+1)%5+5*T],ye=p[(k+2)%5+5*T];I.high=ue.high^~ce.high&ye.high,I.low=ue.low^~ce.low&ye.low}var I=g[0],Y=f[C];I.high^=Y.high,I.low^=Y.low}},_doFinalize:function(){var _=this._data,y=_.words;this._nDataBytes*8;var g=_.sigBytes*8,x=this.blockSize*32;y[g>>>5]|=1<<24-g%32,y[(r.ceil((g+1)/x)*x>>>5)-1]|=128,_.sigBytes=y.length*4,this._process();for(var v=this._state,E=this.cfg.outputLength/8,A=E/8,I=[],C=0;C<A;C++){var k=v[C],b=k.high,w=k.low;b=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360,w=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360,I.push(w),I.push(b)}return new o.init(I,E)},clone:function(){for(var _=a.clone.call(this),y=_._state=this._state.slice(0),g=0;g<25;g++)y[g]=y[g].clone();return _}});i.SHA3=a._createHelper(m),i.HmacSHA3=a._createHmacHelper(m)}(Math),t.SHA3})}(ds)),ds.exports}var hs={exports:{}},Za;function qh(){return Za||(Za=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),h=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),d=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),f=o.create([0,1518500249,1859775393,2400959708,2840853838]),p=o.create([1352829926,1548603684,1836072691,2053994217,0]),m=c.RIPEMD160=a.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(A,I){for(var C=0;C<16;C++){var k=I+C,b=A[k];A[k]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360}var w=this._hash.words,T=f.words,D=p.words,q=l.words,V=u.words,W=h.words,j=d.words,ne,ae,re,N,M,U,P,ue,ce,ye;U=ne=w[0],P=ae=w[1],ue=re=w[2],ce=N=w[3],ye=M=w[4];for(var Y,C=0;C<80;C+=1)Y=ne+A[I+q[C]]|0,C<16?Y+=_(ae,re,N)+T[0]:C<32?Y+=y(ae,re,N)+T[1]:C<48?Y+=g(ae,re,N)+T[2]:C<64?Y+=x(ae,re,N)+T[3]:Y+=v(ae,re,N)+T[4],Y=Y|0,Y=E(Y,W[C]),Y=Y+M|0,ne=M,M=N,N=E(re,10),re=ae,ae=Y,Y=U+A[I+V[C]]|0,C<16?Y+=v(P,ue,ce)+D[0]:C<32?Y+=x(P,ue,ce)+D[1]:C<48?Y+=g(P,ue,ce)+D[2]:C<64?Y+=y(P,ue,ce)+D[3]:Y+=_(P,ue,ce)+D[4],Y=Y|0,Y=E(Y,j[C]),Y=Y+ye|0,U=ye,ye=ce,ce=E(ue,10),ue=P,P=Y;Y=w[1]+re+ce|0,w[1]=w[2]+N+ye|0,w[2]=w[3]+M+U|0,w[3]=w[4]+ne+P|0,w[4]=w[0]+ae+ue|0,w[0]=Y},_doFinalize:function(){var A=this._data,I=A.words,C=this._nDataBytes*8,k=A.sigBytes*8;I[k>>>5]|=128<<24-k%32,I[(k+64>>>9<<4)+14]=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,A.sigBytes=(I.length+1)*4,this._process();for(var b=this._hash,w=b.words,T=0;T<5;T++){var D=w[T];w[T]=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360}return b},clone:function(){var A=a.clone.call(this);return A._hash=this._hash.clone(),A}});function _(A,I,C){return A^I^C}function y(A,I,C){return A&I|~A&C}function g(A,I,C){return(A|~I)^C}function x(A,I,C){return A&C|I&~C}function v(A,I,C){return A^(I|~C)}function E(A,I){return A<<I|A>>>32-I}i.RIPEMD160=a._createHelper(m),i.HmacRIPEMD160=a._createHmacHelper(m)}(),t.RIPEMD160})}(hs)),hs.exports}var fs={exports:{}},el;function Fo(){return el||(el=1,function(n,e){(function(t,r){n.exports=r(oe())})(X,function(t){(function(){var r=t,i=r.lib,s=i.Base,o=r.enc,a=o.Utf8,c=r.algo;c.HMAC=s.extend({init:function(l,u){l=this._hasher=new l.init,typeof u=="string"&&(u=a.parse(u));var h=l.blockSize,d=h*4;u.sigBytes>d&&(u=l.finalize(u)),u.clamp();for(var f=this._oKey=u.clone(),p=this._iKey=u.clone(),m=f.words,_=p.words,y=0;y<h;y++)m[y]^=1549556828,_[y]^=909522486;f.sigBytes=p.sigBytes=d,this.reset()},reset:function(){var l=this._hasher;l.reset(),l.update(this._iKey)},update:function(l){return this._hasher.update(l),this},finalize:function(l){var u=this._hasher,h=u.finalize(l);u.reset();var d=u.finalize(this._oKey.clone().concat(h));return d}})})()})}(fs)),fs.exports}var ps={exports:{}},tl;function zh(){return tl||(tl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Bo(),Fo())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,c=a.SHA256,l=a.HMAC,u=a.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:c,iterations:25e4}),init:function(h){this.cfg=this.cfg.extend(h)},compute:function(h,d){for(var f=this.cfg,p=l.create(f.hasher,h),m=o.create(),_=o.create([1]),y=m.words,g=_.words,x=f.keySize,v=f.iterations;y.length<x;){var E=p.update(d).finalize(_);p.reset();for(var A=E.words,I=A.length,C=E,k=1;k<v;k++){C=p.finalize(C),p.reset();for(var b=C.words,w=0;w<I;w++)A[w]^=b[w]}m.concat(E),g[0]++}return m.sigBytes=x*4,m}});r.PBKDF2=function(h,d,f){return u.create(f).compute(h,d)}}(),t.PBKDF2})}(ps)),ps.exports}var _s={exports:{}},nl;function Jt(){return nl||(nl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),w0(),Fo())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,c=a.MD5,l=a.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:c,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,h){for(var d,f=this.cfg,p=f.hasher.create(),m=o.create(),_=m.words,y=f.keySize,g=f.iterations;_.length<y;){d&&p.update(d),d=p.update(u).finalize(h),p.reset();for(var x=1;x<g;x++)d=p.finalize(d),p.reset();m.concat(d)}return m.sigBytes=y*4,m}});r.EvpKDF=function(u,h,d){return l.create(d).compute(u,h)}}(),t.EvpKDF})}(_s)),_s.exports}var xs={exports:{}},rl;function De(){return rl||(rl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Jt())})(X,function(t){t.lib.Cipher||function(r){var i=t,s=i.lib,o=s.Base,a=s.WordArray,c=s.BufferedBlockAlgorithm,l=i.enc;l.Utf8;var u=l.Base64,h=i.algo,d=h.EvpKDF,f=s.Cipher=c.extend({cfg:o.extend(),createEncryptor:function(b,w){return this.create(this._ENC_XFORM_MODE,b,w)},createDecryptor:function(b,w){return this.create(this._DEC_XFORM_MODE,b,w)},init:function(b,w,T){this.cfg=this.cfg.extend(T),this._xformMode=b,this._key=w,this.reset()},reset:function(){c.reset.call(this),this._doReset()},process:function(b){return this._append(b),this._process()},finalize:function(b){b&&this._append(b);var w=this._doFinalize();return w},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function b(w){return typeof w=="string"?k:A}return function(w){return{encrypt:function(T,D,q){return b(D).encrypt(w,T,D,q)},decrypt:function(T,D,q){return b(D).decrypt(w,T,D,q)}}}}()});s.StreamCipher=f.extend({_doFinalize:function(){var b=this._process(!0);return b},blockSize:1});var p=i.mode={},m=s.BlockCipherMode=o.extend({createEncryptor:function(b,w){return this.Encryptor.create(b,w)},createDecryptor:function(b,w){return this.Decryptor.create(b,w)},init:function(b,w){this._cipher=b,this._iv=w}}),_=p.CBC=function(){var b=m.extend();b.Encryptor=b.extend({processBlock:function(T,D){var q=this._cipher,V=q.blockSize;w.call(this,T,D,V),q.encryptBlock(T,D),this._prevBlock=T.slice(D,D+V)}}),b.Decryptor=b.extend({processBlock:function(T,D){var q=this._cipher,V=q.blockSize,W=T.slice(D,D+V);q.decryptBlock(T,D),w.call(this,T,D,V),this._prevBlock=W}});function w(T,D,q){var V,W=this._iv;W?(V=W,this._iv=r):V=this._prevBlock;for(var j=0;j<q;j++)T[D+j]^=V[j]}return b}(),y=i.pad={},g=y.Pkcs7={pad:function(b,w){for(var T=w*4,D=T-b.sigBytes%T,q=D<<24|D<<16|D<<8|D,V=[],W=0;W<D;W+=4)V.push(q);var j=a.create(V,D);b.concat(j)},unpad:function(b){var w=b.words[b.sigBytes-1>>>2]&255;b.sigBytes-=w}};s.BlockCipher=f.extend({cfg:f.cfg.extend({mode:_,padding:g}),reset:function(){var b;f.reset.call(this);var w=this.cfg,T=w.iv,D=w.mode;this._xformMode==this._ENC_XFORM_MODE?b=D.createEncryptor:(b=D.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==b?this._mode.init(this,T&&T.words):(this._mode=b.call(D,this,T&&T.words),this._mode.__creator=b)},_doProcessBlock:function(b,w){this._mode.processBlock(b,w)},_doFinalize:function(){var b,w=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(w.pad(this._data,this.blockSize),b=this._process(!0)):(b=this._process(!0),w.unpad(b)),b},blockSize:128/32});var x=s.CipherParams=o.extend({init:function(b){this.mixIn(b)},toString:function(b){return(b||this.formatter).stringify(this)}}),v=i.format={},E=v.OpenSSL={stringify:function(b){var w,T=b.ciphertext,D=b.salt;return D?w=a.create([1398893684,1701076831]).concat(D).concat(T):w=T,w.toString(u)},parse:function(b){var w,T=u.parse(b),D=T.words;return D[0]==1398893684&&D[1]==1701076831&&(w=a.create(D.slice(2,4)),D.splice(0,4),T.sigBytes-=16),x.create({ciphertext:T,salt:w})}},A=s.SerializableCipher=o.extend({cfg:o.extend({format:E}),encrypt:function(b,w,T,D){D=this.cfg.extend(D);var q=b.createEncryptor(T,D),V=q.finalize(w),W=q.cfg;return x.create({ciphertext:V,key:T,iv:W.iv,algorithm:b,mode:W.mode,padding:W.padding,blockSize:b.blockSize,formatter:D.format})},decrypt:function(b,w,T,D){D=this.cfg.extend(D),w=this._parse(w,D.format);var q=b.createDecryptor(T,D).finalize(w.ciphertext);return q},_parse:function(b,w){return typeof b=="string"?w.parse(b,this):b}}),I=i.kdf={},C=I.OpenSSL={execute:function(b,w,T,D,q){if(D||(D=a.random(64/8)),q)var V=d.create({keySize:w+T,hasher:q}).compute(b,D);else var V=d.create({keySize:w+T}).compute(b,D);var W=a.create(V.words.slice(w),T*4);return V.sigBytes=w*4,x.create({key:V,iv:W,salt:D})}},k=s.PasswordBasedCipher=A.extend({cfg:A.cfg.extend({kdf:C}),encrypt:function(b,w,T,D){D=this.cfg.extend(D);var q=D.kdf.execute(T,b.keySize,b.ivSize,D.salt,D.hasher);D.iv=q.iv;var V=A.encrypt.call(this,b,w,q.key,D);return V.mixIn(q),V},decrypt:function(b,w,T,D){D=this.cfg.extend(D),w=this._parse(w,D.format);var q=D.kdf.execute(T,b.keySize,b.ivSize,w.salt,D.hasher);D.iv=q.iv;var V=A.decrypt.call(this,b,w,q.key,D);return V}})}()})}(xs)),xs.exports}var gs={exports:{}},il;function Vh(){return il||(il=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.mode.CFB=function(){var r=t.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize;i.call(this,s,o,c,a),this._prevBlock=s.slice(o,o+c)}}),r.Decryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=s.slice(o,o+c);i.call(this,s,o,c,a),this._prevBlock=l}});function i(s,o,a,c){var l,u=this._iv;u?(l=u.slice(0),this._iv=void 0):l=this._prevBlock,c.encryptBlock(l,0);for(var h=0;h<a;h++)s[o+h]^=l[h]}return r}(),t.mode.CFB})}(gs)),gs.exports}var ms={exports:{}},sl;function jh(){return sl||(sl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.mode.CTR=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=this._iv,u=this._counter;l&&(u=this._counter=l.slice(0),this._iv=void 0);var h=u.slice(0);a.encryptBlock(h,0),u[c-1]=u[c-1]+1|0;for(var d=0;d<c;d++)s[o+d]^=h[d]}});return r.Decryptor=i,r}(),t.mode.CTR})}(ms)),ms.exports}var vs={exports:{}},ol;function Gh(){return ol||(ol=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var r=t.lib.BlockCipherMode.extend();function i(a){if((a>>24&255)===255){var c=a>>16&255,l=a>>8&255,u=a&255;c===255?(c=0,l===255?(l=0,u===255?u=0:++u):++l):++c,a=0,a+=c<<16,a+=l<<8,a+=u}else a+=1<<24;return a}function s(a){return(a[0]=i(a[0]))===0&&(a[1]=i(a[1])),a}var o=r.Encryptor=r.extend({processBlock:function(a,c){var l=this._cipher,u=l.blockSize,h=this._iv,d=this._counter;h&&(d=this._counter=h.slice(0),this._iv=void 0),s(d);var f=d.slice(0);l.encryptBlock(f,0);for(var p=0;p<u;p++)a[c+p]^=f[p]}});return r.Decryptor=o,r}(),t.mode.CTRGladman})}(vs)),vs.exports}var ys={exports:{}},al;function Kh(){return al||(al=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.mode.OFB=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=this._iv,u=this._keystream;l&&(u=this._keystream=l.slice(0),this._iv=void 0),a.encryptBlock(u,0);for(var h=0;h<c;h++)s[o+h]^=u[h]}});return r.Decryptor=i,r}(),t.mode.OFB})}(ys)),ys.exports}var Es={exports:{}},ll;function $h(){return ll||(ll=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.mode.ECB=function(){var r=t.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),t.mode.ECB})}(Es)),Es.exports}var Cs={exports:{}},cl;function Yh(){return cl||(cl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,a=o-s%o,c=s+a-1;r.clamp(),r.words[c>>>2]|=a<<24-c%4*8,r.sigBytes+=a},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Ansix923})}(Cs)),Cs.exports}var bs={exports:{}},ul;function Qh(){return ul||(ul=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Iso10126})}(bs)),bs.exports}var ws={exports:{}},dl;function Xh(){return dl||(dl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.pad.Iso97971={pad:function(r,i){r.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(r,i)},unpad:function(r){t.pad.ZeroPadding.unpad(r),r.sigBytes--}},t.pad.Iso97971})}(ws)),ws.exports}var As={exports:{}},hl;function Jh(){return hl||(hl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(As)),As.exports}var Is={exports:{}},fl;function Zh(){return fl||(fl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(Is)),Is.exports}var ks={exports:{}},pl;function ef(){return pl||(pl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),De())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.CipherParams,a=i.enc,c=a.Hex,l=i.format;l.Hex={stringify:function(u){return u.ciphertext.toString(c)},parse:function(u){var h=c.parse(u);return o.create({ciphertext:h})}}}(),t.format.Hex})}(ks)),ks.exports}var Ds={exports:{}},_l;function tf(){return _l||(_l=1,function(n,e){(function(t,r,i){n.exports=r(oe(),vn(),yn(),Jt(),De())})(X,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo,a=[],c=[],l=[],u=[],h=[],d=[],f=[],p=[],m=[],_=[];(function(){for(var x=[],v=0;v<256;v++)v<128?x[v]=v<<1:x[v]=v<<1^283;for(var E=0,A=0,v=0;v<256;v++){var I=A^A<<1^A<<2^A<<3^A<<4;I=I>>>8^I&255^99,a[E]=I,c[I]=E;var C=x[E],k=x[C],b=x[k],w=x[I]*257^I*16843008;l[E]=w<<24|w>>>8,u[E]=w<<16|w>>>16,h[E]=w<<8|w>>>24,d[E]=w;var w=b*16843009^k*65537^C*257^E*16843008;f[I]=w<<24|w>>>8,p[I]=w<<16|w>>>16,m[I]=w<<8|w>>>24,_[I]=w,E?(E=C^x[x[x[b^C]]],A^=x[x[A]]):E=A=1}})();var y=[0,1,2,4,8,16,32,64,128,27,54],g=o.AES=s.extend({_doReset:function(){var x;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var v=this._keyPriorReset=this._key,E=v.words,A=v.sigBytes/4,I=this._nRounds=A+6,C=(I+1)*4,k=this._keySchedule=[],b=0;b<C;b++)b<A?k[b]=E[b]:(x=k[b-1],b%A?A>6&&b%A==4&&(x=a[x>>>24]<<24|a[x>>>16&255]<<16|a[x>>>8&255]<<8|a[x&255]):(x=x<<8|x>>>24,x=a[x>>>24]<<24|a[x>>>16&255]<<16|a[x>>>8&255]<<8|a[x&255],x^=y[b/A|0]<<24),k[b]=k[b-A]^x);for(var w=this._invKeySchedule=[],T=0;T<C;T++){var b=C-T;if(T%4)var x=k[b];else var x=k[b-4];T<4||b<=4?w[T]=x:w[T]=f[a[x>>>24]]^p[a[x>>>16&255]]^m[a[x>>>8&255]]^_[a[x&255]]}}},encryptBlock:function(x,v){this._doCryptBlock(x,v,this._keySchedule,l,u,h,d,a)},decryptBlock:function(x,v){var E=x[v+1];x[v+1]=x[v+3],x[v+3]=E,this._doCryptBlock(x,v,this._invKeySchedule,f,p,m,_,c);var E=x[v+1];x[v+1]=x[v+3],x[v+3]=E},_doCryptBlock:function(x,v,E,A,I,C,k,b){for(var w=this._nRounds,T=x[v]^E[0],D=x[v+1]^E[1],q=x[v+2]^E[2],V=x[v+3]^E[3],W=4,j=1;j<w;j++){var ne=A[T>>>24]^I[D>>>16&255]^C[q>>>8&255]^k[V&255]^E[W++],ae=A[D>>>24]^I[q>>>16&255]^C[V>>>8&255]^k[T&255]^E[W++],re=A[q>>>24]^I[V>>>16&255]^C[T>>>8&255]^k[D&255]^E[W++],N=A[V>>>24]^I[T>>>16&255]^C[D>>>8&255]^k[q&255]^E[W++];T=ne,D=ae,q=re,V=N}var ne=(b[T>>>24]<<24|b[D>>>16&255]<<16|b[q>>>8&255]<<8|b[V&255])^E[W++],ae=(b[D>>>24]<<24|b[q>>>16&255]<<16|b[V>>>8&255]<<8|b[T&255])^E[W++],re=(b[q>>>24]<<24|b[V>>>16&255]<<16|b[T>>>8&255]<<8|b[D&255])^E[W++],N=(b[V>>>24]<<24|b[T>>>16&255]<<16|b[D>>>8&255]<<8|b[q&255])^E[W++];x[v]=ne,x[v+1]=ae,x[v+2]=re,x[v+3]=N},keySize:256/32});r.AES=s._createHelper(g)}(),t.AES})}(Ds)),Ds.exports}var Ts={exports:{}},xl;function nf(){return xl||(xl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),vn(),yn(),Jt(),De())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.BlockCipher,a=r.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],l=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],d=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],f=a.DES=o.extend({_doReset:function(){for(var y=this._key,g=y.words,x=[],v=0;v<56;v++){var E=c[v]-1;x[v]=g[E>>>5]>>>31-E%32&1}for(var A=this._subKeys=[],I=0;I<16;I++){for(var C=A[I]=[],k=u[I],v=0;v<24;v++)C[v/6|0]|=x[(l[v]-1+k)%28]<<31-v%6,C[4+(v/6|0)]|=x[28+(l[v+24]-1+k)%28]<<31-v%6;C[0]=C[0]<<1|C[0]>>>31;for(var v=1;v<7;v++)C[v]=C[v]>>>(v-1)*4+3;C[7]=C[7]<<5|C[7]>>>27}for(var b=this._invSubKeys=[],v=0;v<16;v++)b[v]=A[15-v]},encryptBlock:function(y,g){this._doCryptBlock(y,g,this._subKeys)},decryptBlock:function(y,g){this._doCryptBlock(y,g,this._invSubKeys)},_doCryptBlock:function(y,g,x){this._lBlock=y[g],this._rBlock=y[g+1],p.call(this,4,252645135),p.call(this,16,65535),m.call(this,2,858993459),m.call(this,8,16711935),p.call(this,1,1431655765);for(var v=0;v<16;v++){for(var E=x[v],A=this._lBlock,I=this._rBlock,C=0,k=0;k<8;k++)C|=h[k][((I^E[k])&d[k])>>>0];this._lBlock=I,this._rBlock=A^C}var b=this._lBlock;this._lBlock=this._rBlock,this._rBlock=b,p.call(this,1,1431655765),m.call(this,8,16711935),m.call(this,2,858993459),p.call(this,16,65535),p.call(this,4,252645135),y[g]=this._lBlock,y[g+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function p(y,g){var x=(this._lBlock>>>y^this._rBlock)&g;this._rBlock^=x,this._lBlock^=x<<y}function m(y,g){var x=(this._rBlock>>>y^this._lBlock)&g;this._lBlock^=x,this._rBlock^=x<<y}r.DES=o._createHelper(f);var _=a.TripleDES=o.extend({_doReset:function(){var y=this._key,g=y.words;if(g.length!==2&&g.length!==4&&g.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var x=g.slice(0,2),v=g.length<4?g.slice(0,2):g.slice(2,4),E=g.length<6?g.slice(0,2):g.slice(4,6);this._des1=f.createEncryptor(s.create(x)),this._des2=f.createEncryptor(s.create(v)),this._des3=f.createEncryptor(s.create(E))},encryptBlock:function(y,g){this._des1.encryptBlock(y,g),this._des2.decryptBlock(y,g),this._des3.encryptBlock(y,g)},decryptBlock:function(y,g){this._des3.decryptBlock(y,g),this._des2.encryptBlock(y,g),this._des1.decryptBlock(y,g)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(_)}(),t.TripleDES})}(Ts)),Ts.exports}var Ss={exports:{}},gl;function rf(){return gl||(gl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),vn(),yn(),Jt(),De())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=o.RC4=s.extend({_doReset:function(){for(var u=this._key,h=u.words,d=u.sigBytes,f=this._S=[],p=0;p<256;p++)f[p]=p;for(var p=0,m=0;p<256;p++){var _=p%d,y=h[_>>>2]>>>24-_%4*8&255;m=(m+f[p]+y)%256;var g=f[p];f[p]=f[m],f[m]=g}this._i=this._j=0},_doProcessBlock:function(u,h){u[h]^=c.call(this)},keySize:256/32,ivSize:0});function c(){for(var u=this._S,h=this._i,d=this._j,f=0,p=0;p<4;p++){h=(h+1)%256,d=(d+u[h])%256;var m=u[h];u[h]=u[d],u[d]=m,f|=u[(u[h]+u[d])%256]<<24-p*8}return this._i=h,this._j=d,f}r.RC4=s._createHelper(a);var l=o.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)c.call(this)}});r.RC4Drop=s._createHelper(l)}(),t.RC4})}(Ss)),Ss.exports}var Rs={exports:{}},ml;function sf(){return ml||(ml=1,function(n,e){(function(t,r,i){n.exports=r(oe(),vn(),yn(),Jt(),De())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],c=[],l=[],u=o.Rabbit=s.extend({_doReset:function(){for(var d=this._key.words,f=this.cfg.iv,p=0;p<4;p++)d[p]=(d[p]<<8|d[p]>>>24)&16711935|(d[p]<<24|d[p]>>>8)&4278255360;var m=this._X=[d[0],d[3]<<16|d[2]>>>16,d[1],d[0]<<16|d[3]>>>16,d[2],d[1]<<16|d[0]>>>16,d[3],d[2]<<16|d[1]>>>16],_=this._C=[d[2]<<16|d[2]>>>16,d[0]&4294901760|d[1]&65535,d[3]<<16|d[3]>>>16,d[1]&4294901760|d[2]&65535,d[0]<<16|d[0]>>>16,d[2]&4294901760|d[3]&65535,d[1]<<16|d[1]>>>16,d[3]&4294901760|d[0]&65535];this._b=0;for(var p=0;p<4;p++)h.call(this);for(var p=0;p<8;p++)_[p]^=m[p+4&7];if(f){var y=f.words,g=y[0],x=y[1],v=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,E=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,A=v>>>16|E&4294901760,I=E<<16|v&65535;_[0]^=v,_[1]^=A,_[2]^=E,_[3]^=I,_[4]^=v,_[5]^=A,_[6]^=E,_[7]^=I;for(var p=0;p<4;p++)h.call(this)}},_doProcessBlock:function(d,f){var p=this._X;h.call(this),a[0]=p[0]^p[5]>>>16^p[3]<<16,a[1]=p[2]^p[7]>>>16^p[5]<<16,a[2]=p[4]^p[1]>>>16^p[7]<<16,a[3]=p[6]^p[3]>>>16^p[1]<<16;for(var m=0;m<4;m++)a[m]=(a[m]<<8|a[m]>>>24)&16711935|(a[m]<<24|a[m]>>>8)&4278255360,d[f+m]^=a[m]},blockSize:128/32,ivSize:64/32});function h(){for(var d=this._X,f=this._C,p=0;p<8;p++)c[p]=f[p];f[0]=f[0]+1295307597+this._b|0,f[1]=f[1]+3545052371+(f[0]>>>0<c[0]>>>0?1:0)|0,f[2]=f[2]+886263092+(f[1]>>>0<c[1]>>>0?1:0)|0,f[3]=f[3]+1295307597+(f[2]>>>0<c[2]>>>0?1:0)|0,f[4]=f[4]+3545052371+(f[3]>>>0<c[3]>>>0?1:0)|0,f[5]=f[5]+886263092+(f[4]>>>0<c[4]>>>0?1:0)|0,f[6]=f[6]+1295307597+(f[5]>>>0<c[5]>>>0?1:0)|0,f[7]=f[7]+3545052371+(f[6]>>>0<c[6]>>>0?1:0)|0,this._b=f[7]>>>0<c[7]>>>0?1:0;for(var p=0;p<8;p++){var m=d[p]+f[p],_=m&65535,y=m>>>16,g=((_*_>>>17)+_*y>>>15)+y*y,x=((m&4294901760)*m|0)+((m&65535)*m|0);l[p]=g^x}d[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,d[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,d[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,d[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,d[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,d[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,d[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,d[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}r.Rabbit=s._createHelper(u)}(),t.Rabbit})}(Rs)),Rs.exports}var Bs={exports:{}},vl;function of(){return vl||(vl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),vn(),yn(),Jt(),De())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],c=[],l=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var d=this._key.words,f=this.cfg.iv,p=this._X=[d[0],d[3]<<16|d[2]>>>16,d[1],d[0]<<16|d[3]>>>16,d[2],d[1]<<16|d[0]>>>16,d[3],d[2]<<16|d[1]>>>16],m=this._C=[d[2]<<16|d[2]>>>16,d[0]&4294901760|d[1]&65535,d[3]<<16|d[3]>>>16,d[1]&4294901760|d[2]&65535,d[0]<<16|d[0]>>>16,d[2]&4294901760|d[3]&65535,d[1]<<16|d[1]>>>16,d[3]&4294901760|d[0]&65535];this._b=0;for(var _=0;_<4;_++)h.call(this);for(var _=0;_<8;_++)m[_]^=p[_+4&7];if(f){var y=f.words,g=y[0],x=y[1],v=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,E=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,A=v>>>16|E&4294901760,I=E<<16|v&65535;m[0]^=v,m[1]^=A,m[2]^=E,m[3]^=I,m[4]^=v,m[5]^=A,m[6]^=E,m[7]^=I;for(var _=0;_<4;_++)h.call(this)}},_doProcessBlock:function(d,f){var p=this._X;h.call(this),a[0]=p[0]^p[5]>>>16^p[3]<<16,a[1]=p[2]^p[7]>>>16^p[5]<<16,a[2]=p[4]^p[1]>>>16^p[7]<<16,a[3]=p[6]^p[3]>>>16^p[1]<<16;for(var m=0;m<4;m++)a[m]=(a[m]<<8|a[m]>>>24)&16711935|(a[m]<<24|a[m]>>>8)&4278255360,d[f+m]^=a[m]},blockSize:128/32,ivSize:64/32});function h(){for(var d=this._X,f=this._C,p=0;p<8;p++)c[p]=f[p];f[0]=f[0]+1295307597+this._b|0,f[1]=f[1]+3545052371+(f[0]>>>0<c[0]>>>0?1:0)|0,f[2]=f[2]+886263092+(f[1]>>>0<c[1]>>>0?1:0)|0,f[3]=f[3]+1295307597+(f[2]>>>0<c[2]>>>0?1:0)|0,f[4]=f[4]+3545052371+(f[3]>>>0<c[3]>>>0?1:0)|0,f[5]=f[5]+886263092+(f[4]>>>0<c[4]>>>0?1:0)|0,f[6]=f[6]+1295307597+(f[5]>>>0<c[5]>>>0?1:0)|0,f[7]=f[7]+3545052371+(f[6]>>>0<c[6]>>>0?1:0)|0,this._b=f[7]>>>0<c[7]>>>0?1:0;for(var p=0;p<8;p++){var m=d[p]+f[p],_=m&65535,y=m>>>16,g=((_*_>>>17)+_*y>>>15)+y*y,x=((m&4294901760)*m|0)+((m&65535)*m|0);l[p]=g^x}d[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,d[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,d[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,d[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,d[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,d[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,d[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,d[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}r.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(Bs)),Bs.exports}var Fs={exports:{}},yl;function af(){return yl||(yl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),vn(),yn(),Jt(),De())})(X,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo;const a=16,c=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],l=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function h(_,y){let g=y>>24&255,x=y>>16&255,v=y>>8&255,E=y&255,A=_.sbox[0][g]+_.sbox[1][x];return A=A^_.sbox[2][v],A=A+_.sbox[3][E],A}function d(_,y,g){let x=y,v=g,E;for(let A=0;A<a;++A)x=x^_.pbox[A],v=h(_,x)^v,E=x,x=v,v=E;return E=x,x=v,v=E,v=v^_.pbox[a],x=x^_.pbox[a+1],{left:x,right:v}}function f(_,y,g){let x=y,v=g,E;for(let A=a+1;A>1;--A)x=x^_.pbox[A],v=h(_,x)^v,E=x,x=v,v=E;return E=x,x=v,v=E,v=v^_.pbox[1],x=x^_.pbox[0],{left:x,right:v}}function p(_,y,g){for(let I=0;I<4;I++){_.sbox[I]=[];for(let C=0;C<256;C++)_.sbox[I][C]=l[I][C]}let x=0;for(let I=0;I<a+2;I++)_.pbox[I]=c[I]^y[x],x++,x>=g&&(x=0);let v=0,E=0,A=0;for(let I=0;I<a+2;I+=2)A=d(_,v,E),v=A.left,E=A.right,_.pbox[I]=v,_.pbox[I+1]=E;for(let I=0;I<4;I++)for(let C=0;C<256;C+=2)A=d(_,v,E),v=A.left,E=A.right,_.sbox[I][C]=v,_.sbox[I][C+1]=E;return!0}var m=o.Blowfish=s.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var _=this._keyPriorReset=this._key,y=_.words,g=_.sigBytes/4;p(u,y,g)}},encryptBlock:function(_,y){var g=d(u,_[y],_[y+1]);_[y]=g.left,_[y+1]=g.right},decryptBlock:function(_,y){var g=f(u,_[y],_[y+1]);_[y]=g.left,_[y+1]=g.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=s._createHelper(m)}(),t.Blowfish})}(Fs)),Fs.exports}(function(n,e){(function(t,r,i){n.exports=r(oe(),Oi(),Oh(),Lh(),vn(),Mh(),yn(),w0(),Bo(),Uh(),A0(),Hh(),Wh(),qh(),Fo(),zh(),Jt(),De(),Vh(),jh(),Gh(),Kh(),$h(),Yh(),Qh(),Xh(),Jh(),Zh(),ef(),tf(),nf(),rf(),sf(),of(),af())})(X,function(t){return t})})(b0);var io=b0.exports,El={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(n,e){if(!n)throw Kn(e)},Kn=function(n){return new Error("Firebase Database ("+I0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},lf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},No={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(k0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):lf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new cf;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D0=function(n){const e=k0(n);return No.encodeByteArray(e,!0)},ci=function(n){return D0(n).replace(/\./g,"")},ui=function(n){try{return No.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n){return T0(void 0,n)}function T0(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!df(t)||(n[t]=T0(n[t],e[t]));return n}function df(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=()=>hf().__FIREBASE_DEFAULTS__,pf=()=>{if(typeof process>"u"||typeof El>"u")return;const n=El.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_f=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ui(n[1]);return e&&JSON.parse(e)},Po=()=>{try{return ff()||pf()||_f()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},S0=n=>{var e,t;return(t=(e=Po())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},xf=n=>{const e=S0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},R0=()=>{var n;return(n=Po())===null||n===void 0?void 0:n.config},B0=n=>{var e;return(e=Po())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ci(JSON.stringify(t)),ci(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function mf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function F0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vf(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yf(){return I0.NODE_ADMIN===!0}function Ef(){try{return typeof indexedDB=="object"}catch{return!1}}function Cf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="FirebaseError";class Zt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=bf,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,r)}}function wf(n,e){return n.replace(Af,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Af=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){return JSON.parse(n)}function Ee(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Cr(ui(s[0])||""),t=Cr(ui(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},If=function(n){const e=N0(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},kf=function(n){const e=N0(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function qn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function so(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function di(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function hi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Cl(s)&&Cl(o)){if(!hi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Cl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)r[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Tf(n,e){const t=new Sf(n,e);return t.subscribe.bind(t)}class Sf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Rf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ns),i.error===void 0&&(i.error=Ns),i.complete===void 0&&(i.complete=Ns);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ns(){}function Lo(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,H(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Mi=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){return n&&n._delegate?n._delegate:n}class dn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Li;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pf(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nf(n){return n===nn?void 0:n}function Pf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ff(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const Lf={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Mf=de.INFO,Uf={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Hf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Uf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mo{constructor(e){this.name=e,this._logLevel=Mf,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Wf=(n,e)=>e.some(t=>n instanceof t);let bl,wl;function qf(){return bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zf(){return wl||(wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P0=new WeakMap,oo=new WeakMap,O0=new WeakMap,Ps=new WeakMap,Uo=new WeakMap;function Vf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ht(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&P0.set(t,n)}).catch(()=>{}),Uo.set(e,n),e}function jf(n){if(oo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});oo.set(n,e)}let ao={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||O0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gf(n){ao=n(ao)}function Kf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Os(this),e,...t);return O0.set(r,e.sort?e.sort():[e]),Ht(r)}:zf().includes(n)?function(...e){return n.apply(Os(this),e),Ht(P0.get(this))}:function(...e){return Ht(n.apply(Os(this),e))}}function $f(n){return typeof n=="function"?Kf(n):(n instanceof IDBTransaction&&jf(n),Wf(n,qf())?new Proxy(n,ao):n)}function Ht(n){if(n instanceof IDBRequest)return Vf(n);if(Ps.has(n))return Ps.get(n);const e=$f(n);return e!==n&&(Ps.set(n,e),Uo.set(e,n)),e}const Os=n=>Uo.get(n);function Yf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ht(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ht(o.result),c.oldVersion,c.newVersion,Ht(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Qf=["get","getKey","getAll","getAllKeys","count"],Xf=["put","add","delete","clear"],Ls=new Map;function Al(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ls.get(e))return Ls.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Xf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qf.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ls.set(e,s),s}Gf(n=>({...n,get:(e,t,r)=>Al(e,t)||n.get(e,t,r),has:(e,t)=>!!Al(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Zf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lo="@firebase/app",Il="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Mo("@firebase/app"),ep="@firebase/app-compat",tp="@firebase/analytics-compat",np="@firebase/analytics",rp="@firebase/app-check-compat",ip="@firebase/app-check",sp="@firebase/auth",op="@firebase/auth-compat",ap="@firebase/database",lp="@firebase/database-compat",cp="@firebase/functions",up="@firebase/functions-compat",dp="@firebase/installations",hp="@firebase/installations-compat",fp="@firebase/messaging",pp="@firebase/messaging-compat",_p="@firebase/performance",xp="@firebase/performance-compat",gp="@firebase/remote-config",mp="@firebase/remote-config-compat",vp="@firebase/storage",yp="@firebase/storage-compat",Ep="@firebase/firestore",Cp="@firebase/firestore-compat",bp="firebase",wp="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="[DEFAULT]",Ap={[lo]:"fire-core",[ep]:"fire-core-compat",[np]:"fire-analytics",[tp]:"fire-analytics-compat",[ip]:"fire-app-check",[rp]:"fire-app-check-compat",[sp]:"fire-auth",[op]:"fire-auth-compat",[ap]:"fire-rtdb",[lp]:"fire-rtdb-compat",[cp]:"fire-fn",[up]:"fire-fn-compat",[dp]:"fire-iid",[hp]:"fire-iid-compat",[fp]:"fire-fcm",[pp]:"fire-fcm-compat",[_p]:"fire-perf",[xp]:"fire-perf-compat",[gp]:"fire-rc",[mp]:"fire-rc-compat",[vp]:"fire-gcs",[yp]:"fire-gcs-compat",[Ep]:"fire-fst",[Cp]:"fire-fst-compat","fire-js":"fire-js",[bp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Map,uo=new Map;function Ip(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zn(n){const e=n.name;if(uo.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;uo.set(e,n);for(const t of fi.values())Ip(t,n);return!0}function Ho(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new Lr("app","Firebase",kp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=wp;function L0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:co,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(t||(t=R0()),!t)throw Wt.create("no-options");const s=fi.get(i);if(s){if(hi(t,s.options)&&hi(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}const o=new Of(i);for(const c of uo.values())o.addComponent(c);const a=new Dp(t,r,o);return fi.set(i,a),a}function Wo(n=co){const e=fi.get(n);if(!e&&n===co&&R0())return L0();if(!e)throw Wt.create("no-app",{appName:n});return e}function qt(n,e,t){var r;let i=(r=Ap[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}zn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="firebase-heartbeat-database",Sp=1,br="firebase-heartbeat-store";let Ms=null;function M0(){return Ms||(Ms=Yf(Tp,Sp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(br)}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Ms}async function Rp(n){try{return await(await M0()).transaction(br).objectStore(br).get(U0(n))}catch(e){if(e instanceof Zt)hn.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(t.message)}}}async function kl(n,e){try{const r=(await M0()).transaction(br,"readwrite");await r.objectStore(br).put(e,U0(n)),await r.done}catch(t){if(t instanceof Zt)hn.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});hn.warn(r.message)}}}function U0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=1024,Fp=30*24*60*60*1e3;class Np{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Op(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Fp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dl(),{heartbeatsToSend:t,unsentEntries:r}=Pp(this._heartbeatsCache.heartbeats),i=ci(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dl(){return new Date().toISOString().substring(0,10)}function Pp(n,e=Bp){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Tl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ef()?Cf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return kl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return kl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tl(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n){zn(new dn("platform-logger",e=>new Jf(e),"PRIVATE")),zn(new dn("heartbeat",e=>new Np(e),"PRIVATE")),qt(lo,Il,n),qt(lo,Il,"esm2017"),qt("fire-js","")}Lp("");var Mp="firebase",Up="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(Mp,Up,"app");function qo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function H0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hp=H0,W0=new Lr("auth","Firebase",H0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Mo("@firebase/auth");function Wp(n,...e){pi.logLevel<=de.WARN&&pi.warn(`Auth (${Yn}): ${n}`,...e)}function ei(n,...e){pi.logLevel<=de.ERROR&&pi.error(`Auth (${Yn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,...e){throw zo(n,...e)}function dt(n,...e){return zo(n,...e)}function qp(n,e,t){const r=Object.assign(Object.assign({},Hp()),{[e]:t});return new Lr("auth","Firebase",r).create(e,{appName:n.name})}function zo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return W0.create(n,...e)}function $(n,e,...t){if(!n)throw zo(e,...t)}function Ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ei(e),new Error(e)}function It(n,e){n||Ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function zp(){return Sl()==="http:"||Sl()==="https:"}function Sl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zp()||mf()||"connection"in navigator)?navigator.onLine:!0}function jp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=Oo()||F0()}get(){return Vp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Mr(3e4,6e4);function Qn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function En(n,e,t,r,i={}){return z0(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$n(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),q0.fetch()(V0(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function z0(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gp),e);try{const i=new $p(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qr(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qp(n,u,l);ot(n,u)}}catch(i){if(i instanceof Zt)throw i;ot(n,"network-request-failed",{message:String(i)})}}async function Ur(n,e,t,r,i={}){const s=await En(n,e,t,r,i);return"mfaPendingCredential"in s&&ot(n,"multi-factor-auth-required",{_serverResponse:s}),s}function V0(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Vo(n.config,i):`${n.config.apiScheme}://${i}`}class $p{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),Kp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=dt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(n,e){return En(n,"POST","/v1/accounts:delete",e)}async function Qp(n,e){return En(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xp(n,e=!1){const t=Se(n),r=await t.getIdToken(e),i=jo(r);$(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hr(Us(i.auth_time)),issuedAtTime:hr(Us(i.iat)),expirationTime:hr(Us(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Us(n){return Number(n)*1e3}function jo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=ui(t);return i?JSON.parse(i):(ei("Failed to decode base64 JWT payload"),null)}catch(i){return ei("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jp(n){const e=jo(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Zt&&Zp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Zp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n){var e;const t=n.auth,r=await n.getIdToken(),i=await fn(n,Qp(t,{idToken:r}));$(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?r_(s.providerUserInfo):[],a=n_(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new j0(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function t_(n){const e=Se(n);await _i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function n_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function r_(n){return n.map(e=>{var{providerId:t}=e,r=qo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(n,e){const t=await z0(n,{},async()=>{const r=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=V0(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",q0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await i_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new wr;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new e_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new j0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fn(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xp(this,e)}reload(){return t_(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fn(this,Yp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,_=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=t.createdAt)!==null&&l!==void 0?l:void 0,g=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:v,isAnonymous:E,providerData:A,stsTokenManager:I}=t;$(x&&I,e,"internal-error");const C=wr.fromJSON(this.name,I);$(typeof x=="string",e,"internal-error"),Nt(h,e.name),Nt(d,e.name),$(typeof v=="boolean",e,"internal-error"),$(typeof E=="boolean",e,"internal-error"),Nt(f,e.name),Nt(p,e.name),Nt(m,e.name),Nt(_,e.name),Nt(y,e.name),Nt(g,e.name);const k=new ln({uid:x,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:E,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:C,createdAt:y,lastLoginAt:g});return A&&Array.isArray(A)&&(k.providerData=A.map(b=>Object.assign({},b))),_&&(k._redirectEventId=_),k}static async _fromIdTokenResponse(e,t,r=!1){const i=new wr;i.updateFromServerResponse(t);const s=new ln({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _i(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Map;function bt(n){It(n instanceof Function,"Expected a class definition");let e=Rl.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}G0.type="NONE";const Bl=G0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,e,t){return`firebase:${n}:${e}:${t}`}class Pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ti(this.userKey,i.apiKey,s),this.fullPersistenceKey=ti("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pn(bt(Bl),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||bt(Bl);const o=ti(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=ln._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Pn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Pn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X0(e))return"Blackberry";if(J0(e))return"Webos";if(Go(e))return"Safari";if((e.includes("chrome/")||$0(e))&&!e.includes("edge/"))return"Chrome";if(Q0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function K0(n=Le()){return/firefox\//i.test(n)}function Go(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $0(n=Le()){return/crios\//i.test(n)}function Y0(n=Le()){return/iemobile/i.test(n)}function Q0(n=Le()){return/android/i.test(n)}function X0(n=Le()){return/blackberry/i.test(n)}function J0(n=Le()){return/webos/i.test(n)}function Ui(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function s_(n=Le()){var e;return Ui(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function o_(){return vf()&&document.documentMode===10}function Z0(n=Le()){return Ui(n)||Q0(n)||J0(n)||X0(n)||/windows phone/i.test(n)||Y0(n)}function a_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n,e=[]){let t;switch(n){case"Browser":t=Fl(Le());break;case"Worker":t=`${Fl(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yn}/${r}`}async function tu(n,e){return En(n,"GET","/v2/recaptchaConfig",Qn(n,e))}function Nl(n){return n!==void 0&&n.enterprise!==void 0}class nu{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ru(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=dt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",l_().appendChild(r)})}function c_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const u_="https://www.google.com/recaptcha/enterprise.js?render=",d_="recaptcha-enterprise",h_="NO_RECAPTCHA";class iu{constructor(e){this.type=d_,this.auth=Xn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new nu(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Nl(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(h_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Nl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ru(u_+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function xi(n,e,t,r=!1){const i=new iu(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pl(this),this.idTokenSubscription=new Pl(this),this.beforeStateQueue=new f_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _i(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Se(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}async initializeRecaptchaConfig(){const e=await tu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new nu(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new iu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Wp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xn(n){return Se(n)}class Pl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tf(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n,e){const t=Ho(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(hi(s,e??{}))return i;ot(i,"already-initialized")}return t.initialize({options:e})}function x_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g_(n,e,t){const r=Xn(n);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=su(e),{host:o,port:a}=m_(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),v_()}function su(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function m_(n){const e=su(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ol(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ol(o)}}}function Ol(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function v_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,t){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}async function ou(n,e){return En(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(n,e){return Ur(n,"POST","/v1/accounts:signInWithPassword",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(n,e){return Ur(n,"POST","/v1/accounts:signInWithEmailLink",Qn(n,e))}async function E_(n,e){return Ur(n,"POST","/v1/accounts:signInWithEmailLink",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Ko{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ar(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ar(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await xi(e,r,"signInWithPassword");return Hs(e,i)}else return Hs(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await xi(e,r,"signInWithPassword");return Hs(e,s)}else return Promise.reject(i)});case"emailLink":return y_(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ou(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return E_(e,{idToken:t,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e){return Ur(n,"POST","/v1/accounts:signInWithIdp",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="http://localhost";class pn extends Ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=qo(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return On(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,On(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,On(e,t)}buildRequest(){const e={requestUri:C_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$n(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function w_(n){const e=lr(cr(n)).link,t=e?lr(cr(e)).deep_link_id:null,r=lr(cr(n)).deep_link_id;return(r?lr(cr(r)).link:null)||r||t||e||n}class $o{constructor(e){var t,r,i,s,o,a;const c=lr(cr(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=b_((i=c.mode)!==null&&i!==void 0?i:null);$(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=w_(e);try{return new $o(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.providerId=Jn.PROVIDER_ID}static credential(e,t){return Ar._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=$o.parseLink(t);return $(r,"argument-error"),Ar._fromEmailAndCode(e,r.code,r.tenantId)}}Jn.PROVIDER_ID="password";Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Hr{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Hr{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Hr{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(n,e){return Ur(n,"POST","/v1/accounts:signUp",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=Ll(r);return new _n({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ll(r);return new _n({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ll(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Zt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new gi(e,t,r,i)}}function lu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gi._fromErrorAndOperation(n,s,e,r):s})}async function A_(n,e,t=!1){const r=await fn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _n._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await fn(n,lu(r,i,e,n),t);$(s.idToken,r,"internal-error");const o=jo(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(n.uid===a,r,"user-mismatch"),_n._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(n,e,t=!1){const r="signIn",i=await lu(n,r,e),s=await _n._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function k_(n,e){return cu(Xn(n),e)}async function D_(n,e,t){var r;const i=Xn(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await xi(i,s,"signUpPassword");o=Ws(i,l)}else o=Ws(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await xi(i,s,"signUpPassword");return Ws(i,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await _n._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Ml(n,e,t){return k_(Se(n),Jn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e){return En(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Se(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await fn(r,T_(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function R_(n,e){return B_(Se(n),null,e)}async function B_(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(s.password=t);const o=await fn(n,ou(r,s));await n._updateTokensIfNecessary(o,!0)}function F_(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function N_(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function P_(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}const mi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mi,"1"),this.storage.removeItem(mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){const n=Le();return Go(n)||Ui(n)}const L_=1e3,M_=10;class du extends uu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=O_()&&a_(),this.fallbackToPolling=Z0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);o_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,M_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},L_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}du.type="LOCAL";const U_=du;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends uu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hu.type="SESSION";const fu=hu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Hi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await H_(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Yo("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function q_(n){ht().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function z_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function j_(){return pu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="firebaseLocalStorageDb",G_=1,vi="firebaseLocalStorage",xu="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wi(n,e){return n.transaction([vi],e?"readwrite":"readonly").objectStore(vi)}function K_(){const n=indexedDB.deleteDatabase(_u);return new Wr(n).toPromise()}function fo(){const n=indexedDB.open(_u,G_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vi,{keyPath:xu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vi)?e(r):(r.close(),await K_(),e(await fo()))})})}async function Ul(n,e,t){const r=Wi(n,!0).put({[xu]:e,value:t});return new Wr(r).toPromise()}async function $_(n,e){const t=Wi(n,!1).get(e),r=await new Wr(t).toPromise();return r===void 0?null:r.value}function Hl(n,e){const t=Wi(n,!0).delete(e);return new Wr(t).toPromise()}const Y_=800,Q_=3;class gu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Q_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hi._getInstance(j_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await z_(),!this.activeServiceWorker)return;this.sender=new W_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fo();return await Ul(e,mi,"1"),await Hl(e,mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ul(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wi(i,!1).getAll();return new Wr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gu.type="LOCAL";const X_=gu;new Mr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(n,e){return e?bt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Ko{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return On(e,this._buildIdpRequest())}_linkToIdToken(e,t){return On(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return On(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Z_(n){return cu(n.auth,new Qo(n),n.bypassAuthState)}function ex(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),I_(t,new Qo(n),n.bypassAuthState)}async function tx(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),A_(t,new Qo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z_;case"linkViaPopup":case"linkViaRedirect":return tx;case"reauthViaPopup":case"reauthViaRedirect":return ex;default:ot(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=new Mr(2e3,1e4);class Tn extends mu{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=Yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nx.get())};e()}}Tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="pendingRedirect",ni=new Map;class ix extends mu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ni.get(this.auth._key());if(!e){try{const r=await sx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ni.set(this.auth._key(),e)}return this.bypassAuthState||ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sx(n,e){const t=lx(e),r=ax(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function ox(n,e){ni.set(n._key(),e)}function ax(n){return bt(n._redirectPersistence)}function lx(n){return ti(rx,n.config.apiKey,n.name)}async function cx(n,e,t=!1){const r=Xn(n),i=J_(r,e),o=await new ix(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=10*60*1e3;class dx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!vu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ux&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wl(e))}saveEventToCache(e){this.cachedEventUids.add(Wl(e)),this.lastProcessedEventTime=Date.now()}}function Wl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hx(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(n,e={}){return En(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_x=/^https?/;async function xx(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fx(n);for(const t of e)try{if(gx(t))return}catch{}ot(n,"unauthorized-domain")}function gx(n){const e=ho(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!_x.test(t))return!1;if(px.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=new Mr(3e4,6e4);function ql(){const n=ht().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vx(n){return new Promise((e,t)=>{var r,i,s;function o(){ql(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ql(),t(dt(n,"network-request-failed"))},timeout:mx.get()})}if(!((i=(r=ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ht().gapi)===null||s===void 0)&&s.load)o();else{const a=c_("iframefcb");return ht()[a]=()=>{gapi.load?o():t(dt(n,"network-request-failed"))},ru(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ri=null,e})}let ri=null;function yx(n){return ri=ri||vx(n),ri}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=new Mr(5e3,15e3),Cx="__/auth/iframe",bx="emulator/auth/iframe",wx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ax=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ix(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vo(e,bx):`https://${n.config.authDomain}/${Cx}`,r={apiKey:e.apiKey,appName:n.name,v:Yn},i=Ax.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${$n(r).slice(1)}`}async function kx(n){const e=await yx(n),t=ht().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:Ix(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dt(n,"network-request-failed"),a=ht().setTimeout(()=>{s(o)},Ex.get());function c(){ht().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tx=500,Sx=600,Rx="_blank",Bx="http://localhost";class zl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fx(n,e,t,r=Tx,i=Sx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Dx),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Le().toLowerCase();t&&(a=$0(l)?Rx:t),K0(l)&&(e=e||Bx,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(s_(l)&&a!=="_self")return Nx(e||"",a),new zl(null);const h=window.open(e||"",a,u);$(h,n,"popup-blocked");try{h.focus()}catch{}return new zl(h)}function Nx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="__/auth/handler",Ox="emulator/auth/handler",Lx=encodeURIComponent("fac");async function Vl(n,e,t,r,i,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Yn,eventId:i};if(e instanceof au){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",so(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Hr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${Lx}=${encodeURIComponent(c)}`:"";return`${Mx(n)}?${$n(a).slice(1)}${l}`}function Mx({config:n}){return n.emulator?Vo(n,Ox):`https://${n.authDomain}/${Px}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="webStorageSupport";class Ux{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fu,this._completeRedirectFn=cx,this._overrideRedirectResult=ox}async _openPopup(e,t,r,i){var s;It((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Vl(e,t,r,ho(),i);return Fx(e,o,Yo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Vl(e,t,r,ho(),i);return q_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(It(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kx(e),r=new dx(e);return t.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qs,{type:qs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qs];o!==void 0&&t(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Z0()||Go()||Ui()}}const Hx=Ux;var jl="@firebase/auth",Gl="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zx(n){zn(new dn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(n)},l=new p_(r,i,s,c);return x_(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),zn(new dn("auth-internal",e=>{const t=Xn(e.getProvider("auth").getImmediate());return(r=>new Wx(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(jl,Gl,qx(n)),qt(jl,Gl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=5*60,jx=B0("authIdTokenMaxAge")||Vx;let Kl=null;const Gx=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>jx)return;const i=t==null?void 0:t.token;Kl!==i&&(Kl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kx(n=Wo()){const e=Ho(n,"auth");if(e.isInitialized())return e.getImmediate();const t=__(n,{popupRedirectResolver:Hx,persistence:[X_,U_,fu]}),r=B0("authTokenSyncURL");if(r){const s=Gx(r);N_(t,s,()=>s(t.currentUser)),F_(t,o=>s(o))}const i=S0("auth");return i&&g_(t,`http://${i}`),t}zx("Browser");var $l={};const Yl="@firebase/database",Ql="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu="";function $x(n){yu=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Cr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Yx(e)}}catch{}return new Qx},sn=Eu("localStorage"),Xx=Eu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new Mo("@firebase/database"),Jx=function(){let n=1;return function(){return n++}}(),Cu=function(n){const e=Bf(n),t=new Df;t.update(e);const r=t.digest();return No.encodeByteArray(r)},qr=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=qr.apply(null,r):typeof r=="object"?e+=Ee(r):e+=r,e+=" "}return e};let fr=null,Xl=!0;const Zx=function(n,e){H(!0,"Can't turn on custom loggers persistently."),Ln.logLevel=de.VERBOSE,fr=Ln.log.bind(Ln)},Fe=function(...n){if(Xl===!0&&(Xl=!1,fr===null&&Xx.get("logging_enabled")===!0&&Zx()),fr){const e=qr.apply(null,n);fr(e)}},zr=function(n){return function(...e){Fe(n,...e)}},po=function(...n){const e="FIREBASE INTERNAL ERROR: "+qr(...n);Ln.error(e)},kt=function(...n){const e=`FIREBASE FATAL ERROR: ${qr(...n)}`;throw Ln.error(e),new Error(e)},Ve=function(...n){const e="FIREBASE WARNING: "+qr(...n);Ln.warn(e)},eg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},tg=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},xn="[MIN_NAME]",$t="[MAX_NAME]",Zn=function(n,e){if(n===e)return 0;if(n===xn||e===$t)return-1;if(e===xn||n===$t)return 1;{const t=Jl(n),r=Jl(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},ng=function(n,e){return n===e?0:n<e?-1:1},ir=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ee(e))},Jo=function(n){if(typeof n!="object"||n===null)return Ee(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ee(e[r]),t+=":",t+=Jo(n[e[r]]);return t+="}",t},bu=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Ge(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const wu=function(n){H(!Xo(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,c;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},rg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ig=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sg(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const og=new RegExp("^-?(0*)\\d{1,10}$"),ag=-2147483648,lg=2147483647,Jl=function(n){if(og.test(n)){const e=Number(n);if(e>=ag&&e<=lg)return e}return null},er=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ve("Exception was thrown by user callback.",t),e},Math.floor(0))}},cg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class ii{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ii.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="5",Au="v",Iu="s",ku="r",Du="f",Tu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Su="ls",Ru="p",_o="ac",Bu="websocket",Fu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,r,i,s=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Pu(n,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let r;if(e===Bu)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fu)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hg(n)&&(t.ns=n.namespace);const i=[];return Ge(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.counters_={}}incrementCounter(e,t=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return uf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs={},Vs={};function ea(n){const e=n.toString();return zs[e]||(zs[e]=new fg),zs[e]}function pg(n,e){const t=n.toString();return Vs[t]||(Vs[t]=e()),Vs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&er(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="start",xg="close",gg="pLPCommand",mg="pRTLPCB",Ou="id",Lu="pw",Mu="ser",vg="cb",yg="seg",Eg="ts",Cg="d",bg="dframe",Uu=1870,Hu=30,wg=Uu-Hu,Ag=25e3,Ig=3e4;class Sn{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zr(e),this.stats_=ea(t),this.urlFn=c=>(this.appCheckToken&&(c[_o]=this.appCheckToken),Pu(t,Fu,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _g(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ig)),tg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ta((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zl)this.id=a,this.password=c;else if(o===xg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Zl]="t",r[Mu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vg]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Au]=Zo,this.transportSessionId&&(r[Iu]=this.transportSessionId),this.lastSessionId&&(r[Su]=this.lastSessionId),this.applicationId&&(r[Ru]=this.applicationId),this.appCheckToken&&(r[_o]=this.appCheckToken),typeof location<"u"&&location.hostname&&Tu.test(location.hostname)&&(r[ku]=Du);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sn.forceAllow_=!0}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){return Sn.forceAllow_?!0:!Sn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rg()&&!ig()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=D0(t),i=bu(r,wg);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[bg]="t",r[Ou]=e,r[Lu]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ee(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ta{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jx(),window[gg+this.uniqueCallbackIdentifier]=e,window[mg+this.uniqueCallbackIdentifier]=t,this.myIFrame=ta.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ou]=this.myID,e[Lu]=this.myPW,e[Mu]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hu+r.length<=Uu;){const o=this.pendingSegs.shift();r=r+"&"+yg+i+"="+o.seg+"&"+Eg+i+"="+o.ts+"&"+Cg+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(Ag)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=16384,Dg=45e3;let yi=null;typeof MozWebSocket<"u"?yi=MozWebSocket:typeof WebSocket<"u"&&(yi=WebSocket);class nt{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zr(this.connId),this.stats_=ea(t),this.connURL=nt.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[Au]=Zo,typeof location<"u"&&location.hostname&&Tu.test(location.hostname)&&(o[ku]=Du),t&&(o[Iu]=t),r&&(o[Su]=r),i&&(o[_o]=i),s&&(o[Ru]=s),Pu(e,Bu,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let r;yf(),this.mySock=new yi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yi!==null&&!nt.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Cr(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=bu(t,kg);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Dg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Sn,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=nt&&nt.isAvailable();let r=t&&!nt.previouslyFailed();if(e.webSocketOnly&&(t||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nt];else{const i=this.transports_=[];for(const s of Ir.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ir.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ir.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=6e4,Sg=5e3,Rg=10*1024,Bg=100*1024,js="t",ec="d",Fg="s",tc="r",Ng="e",nc="o",rc="a",ic="n",sc="p",Pg="h";class Og{constructor(e,t,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zr("c:"+this.id+":"),this.transportManager_=new Ir(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=pr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(js in e){const t=e[js];t===rc?this.upgradeIfSecondaryHealthy_():t===tc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===nc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ir("t",e),r=ir("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ic,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ir("t",e),r=ir("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ir(js,e);if(ec in e){const r=e[ec];if(t===Pg){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ic){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Fg?this.onConnectionShutdown_(r):t===tc?this.onReset_(r):t===Ng?po("Server Error: "+r):t===nc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):po("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zo!==r&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),pr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Sg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends qu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ei}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=32,ac=768;class fe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function le(){return new fe("")}function se(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Yt(n){return n.pieces_.length-n.pieceNum_}function pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new fe(n.pieces_,e)}function zu(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Lg(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Vu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ju(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new fe(e,0)}function Ce(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new fe(t,0)}function ee(n){return n.pieceNum_>=n.pieces_.length}function He(n,e){const t=se(n),r=se(e);if(t===null)return e;if(t===r)return He(pe(n),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Gu(n,e){if(Yt(n)!==Yt(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function rt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Yt(n)>Yt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Mg{constructor(e,t){this.errorPrefix_=t,this.parts_=Vu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Mi(this.parts_[r]);Ku(this)}}function Ug(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Mi(e),Ku(n)}function Hg(n){const e=n.parts_.pop();n.byteLength_-=Mi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ku(n){if(n.byteLength_>ac)throw new Error(n.errorPrefix_+"has a key path longer than "+ac+" bytes ("+n.byteLength_+").");if(n.parts_.length>oc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oc+") or object contains a cycle "+rn(n))}function rn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends qu{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new na}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=1e3,Wg=60*5*1e3,lc=30*1e3,qg=1.3,zg=3e4,Vg="server_kill",cc=3;class At extends Wu{constructor(e,t,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=At.nextPersistentConnectionId_++,this.log_=zr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=sr,this.maxReconnectDelay_=Wg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");na.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Ee(s)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Li,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;At.warnOnListenWarnings_(c,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&_t(e,"w")){const r=qn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=If(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):po("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zg&&(this.reconnectDelay_=sr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+At.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Og(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,f=>{Ve(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Vg)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ve(h),c())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],so(this.interruptReasons_)&&(this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Jo(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){Fe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cc&&(this.reconnectDelay_=lc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Fe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+yu.replace(/\./g,"-")]=1,Oo()?e["framework.cordova"]=1:F0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ei.getInstance().currentlyOnline();return so(this.interruptReasons_)&&e}}At.nextPersistentConnectionId_=0;At.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new J(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new J(xn,e),i=new J(xn,t);return this.compare(r,i)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr;class $u extends qi{static get __EMPTY_NODE(){return Xr}static set __EMPTY_NODE(e){Xr=e}compare(e,t){return Zn(e.name,t.name)}isDefinedOn(e){throw Kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return J.MIN}maxPost(){return new J($t,Xr)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Xr)}toString(){return".key"}}const zt=new $u;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ae{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ae.RED,this.left=i??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,t,r,i,s){return new Ae(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ae.RED=!0;Ae.BLACK=!1;class jg{copy(e,t,r,i,s){return this}insert(e,t,r){return new Ae(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,t=ze.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ze(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ae.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ae.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Jr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Jr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Jr(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new jg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e){return Zn(n.name,e.name)}function ra(n,e){return Zn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;function Kg(n){xo=n}const Yu=function(n){return typeof n=="number"?"number:"+wu(n):"string:"+n},Qu=function(n){if(n.isLeafNode()){const e=n.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else H(n===xo||n.isEmpty(),"priority of unexpected type.");H(n===xo||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc;class we{constructor(e,t=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qu(this.priorityNode_)}static set __childrenNodeConstructor(e){uc=e}static get __childrenNodeConstructor(){return uc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:se(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=se(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||Yt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=wu(this.value_):e+=this.value_,this.lazyHash_=Cu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(t),s=we.VALUE_TYPE_ORDER.indexOf(r);return H(i>=0,"Unknown leaf type: "+t),H(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu,Ju;function $g(n){Xu=n}function Yg(n){Ju=n}class Qg extends qi{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?Zn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return J.MIN}maxPost(){return new J($t,new we("[PRIORITY-POST]",Ju))}makePost(e,t){const r=Xu(e);return new J(t,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const me=new Qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=Math.log(2);class Jg{constructor(e){const t=s=>parseInt(Math.log(s)/Xg,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ci=function(n,e,t,r){n.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new Ae(d,h.node,Ae.BLACK,null,null);{const f=parseInt(u/2,10)+c,p=i(c,f),m=i(f+1,l);return h=n[f],d=t?t(h):h,new Ae(d,h.node,Ae.BLACK,p,m)}},s=function(c){let l=null,u=null,h=n.length;const d=function(p,m){const _=h-p,y=h;h-=p;const g=i(_+1,y),x=n[_],v=t?t(x):x;f(new Ae(v,x.node,m,null,g))},f=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const m=c.nextBitIsOne(),_=Math.pow(2,c.count-(p+1));m?d(_,Ae.BLACK):(d(_,Ae.BLACK),d(_,Ae.RED))}return u},o=new Jg(n.length),a=s(o);return new ze(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;const kn={};class wt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return H(kn&&me,"ChildrenNode.ts has not been loaded"),Gs=Gs||new wt({".priority":kn},{".priority":me}),Gs}get(e){const t=qn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ze?t:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,t){H(e!==zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(J.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ci(r,e.getCompare()):a=kn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new wt(u,l)}addToIndexes(e,t){const r=di(this.indexes_,(i,s)=>{const o=qn(this.indexSet_,s);if(H(o,"Missing index implementation for "+s),i===kn)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(J.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ci(a,o.getCompare())}else return kn;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new J(e.name,a))),c.insert(e,e.node)}});return new wt(r,this.indexSet_)}removeFromIndexes(e,t){const r=di(this.indexes_,i=>{if(i===kn)return i;{const s=t.get(e.name);return s?i.remove(new J(e.name,s)):i}});return new wt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or;class G{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Qu(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return or||(or=new G(new ze(ra),null,wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||or}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?or:t}}getChild(e){const t=se(e);return t===null?this:this.getImmediateChild(t).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new J(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?or:this.priorityNode_;return new G(i,o,s)}}updateChild(e,t){const r=se(e);if(r===null)return t;{H(se(e)!==".priority"||Yt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(pe(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(me,(o,a)=>{t[o]=a.val(e),r++,s&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yu(this.getPriority().val())+":"),this.forEachChild(me,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Cu(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new J(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new J(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new J(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,J.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vr?-1:0}withIndex(e){if(e===zt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(me),i=t.getIterator(me);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zt?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zg extends G{constructor(){super(new ze(ra),G.EMPTY_NODE,wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Vr=new Zg;Object.defineProperties(J,{MIN:{value:new J(xn,G.EMPTY_NODE)},MAX:{value:new J($t,Vr)}});$u.__EMPTY_NODE=G.EMPTY_NODE;we.__childrenNodeConstructor=G;Kg(Vr);Yg(Vr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=!0;function Ie(n,e=null){if(n===null)return G.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new we(t,Ie(e))}if(!(n instanceof Array)&&em){const t=[];let r=!1;if(Ge(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ie(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),t.push(new J(o,c)))}}),t.length===0)return G.EMPTY_NODE;const s=Ci(t,Gg,o=>o.name,ra);if(r){const o=Ci(t,me.getCompare());return new G(s,Ie(e),new wt({".priority":o},{".priority":me}))}else return new G(s,Ie(e),wt.Default)}else{let t=G.EMPTY_NODE;return Ge(n,(r,i)=>{if(_t(n,r)&&r.substring(0,1)!=="."){const s=Ie(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(Ie(e))}}$g(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends qi{constructor(e){super(),this.indexPath_=e,H(!ee(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?Zn(e.name,t.name):s}makePost(e,t){const r=Ie(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new J(t,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Vr);return new J($t,e)}toString(){return Vu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends qi{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Zn(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,t){const r=Ie(e);return new J(t,r)}toString(){return".value"}}const ed=new tm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){return{type:"value",snapshotNode:n}}function Vn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function kr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Dr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function nm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(kr(t,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Vn(t,r)):o.trackChildChange(Dr(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(me,(i,s)=>{t.hasChild(i)||r.trackChildChange(kr(i,s))}),t.isLeafNode()||t.forEachChild(me,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Dr(i,s,o))}else r.trackChildChange(Vn(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.indexedFilter_=new ia(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tr.getStartPost_(e),this.endPost_=Tr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new J(t,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=G.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const s=this;return t.forEachChild(me,(o,a)=>{s.matches(new J(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Tr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new J(t,r))||(r=G.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const c=new J(t,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Dr(t,r,h)),a.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(kr(t,h));const m=a.updateImmediateChild(t,G.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Vn(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return r.isEmpty()?e:u&&o(l,c)>=0?(s!=null&&(s.trackChildChange(kr(l.name,l.node)),s.trackChildChange(Vn(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(l.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xn}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new sa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function im(n){return n.loadsAllData()?new ia(n.getIndex()):n.hasLimit()?new rm(n):new Tr(n)}function sm(n,e){const t=n.copy();return t.index_=e,t}function dc(n){const e={};if(n.isDefault())return e;let t;if(n.index_===me?t="$priority":n.index_===ed?t="$value":n.index_===zt?t="$key":(H(n.index_ instanceof Zu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ee(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ee(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ee(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ee(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ee(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function hc(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==me&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Wu{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bi.getListenId_(e,r),a={};this.listens_[o]=a;const c=dc(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),qn(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const r=bi.getListenId_(e,t);delete this.listens_[r]}get(e){const t=dc(e._queryParams),r=e._path.toString(),i=new Li;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$n(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Cr(a.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(){return{value:null,children:new Map}}function nd(n,e,t){if(ee(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=se(e);n.children.has(r)||n.children.set(r,wi());const i=n.children.get(r);e=pe(e),nd(i,e,t)}}function go(n,e,t){n.value!==null?t(e,n.value):am(n,(r,i)=>{const s=new fe(e.toString()+"/"+r);go(i,s,t)})}function am(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ge(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=10*1e3,cm=30*1e3,um=5*60*1e3;class dm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lm(e);const r=fc+(cm-fc)*Math.random();pr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Ge(e,(i,s)=>{s>0&&_t(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),pr(this.reportStats_.bind(this),Math.floor(Math.random()*2*um))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function rd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function aa(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=it.ACK_USER_WRITE,this.source=rd()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new fe(e));return new Ai(le(),t,this.revert)}}else return H(se(this.path)===e,"operationForChild called for unrelated child."),new Ai(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.source=e,this.path=t,this.type=it.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new Sr(this.source,le()):new Sr(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=it.OVERWRITE}operationForChild(e){return ee(this.path)?new gn(this.source,le(),this.snap.getImmediateChild(e)):new gn(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=it.MERGE}operationForChild(e){if(ee(this.path)){const t=this.children.subtree(new fe(e));return t.isEmpty()?null:t.value?new gn(this.source,le(),t.value):new Rr(this.source,le(),t)}else return H(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rr(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const t=se(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fm(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(nm(o.childName,o.snapshotNode))}),ar(n,i,"child_removed",e,r,t),ar(n,i,"child_added",e,r,t),ar(n,i,"child_moved",s,r,t),ar(n,i,"child_changed",e,r,t),ar(n,i,"value",e,r,t),i}function ar(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,c)=>_m(n,a,c)),o.forEach(a=>{const c=pm(n,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function pm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function _m(n,e,t){if(e.childName==null||t.childName==null)throw Kn("Should only compare child_ events.");const r=new J(e.childName,e.snapshotNode),i=new J(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e){return{eventCache:n,serverCache:e}}function _r(n,e,t,r){return zi(new Qt(e,t,r),n.serverCache)}function id(n,e,t,r){return zi(n.eventCache,new Qt(e,t,r))}function Ii(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function mn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;const xm=()=>(Ks||(Ks=new ze(ng)),Ks);class xe{constructor(e,t=xm()){this.value=e,this.children=t}static fromObject(e){let t=new xe(null);return Ge(e,(r,i)=>{t=t.set(new fe(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:le(),value:this.value};if(ee(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(pe(e),t);return s!=null?{path:Ce(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const t=se(e),r=this.children.get(t);return r!==null?r.subtree(pe(e)):new xe(null)}}set(e,t){if(ee(e))return new xe(t,this.children);{const r=se(e),s=(this.children.get(r)||new xe(null)).set(pe(e),t),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const t=se(e),r=this.children.get(t);if(r){const i=r.remove(pe(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(ee(e))return this.value;{const t=se(e),r=this.children.get(t);return r?r.get(pe(e)):null}}setTree(e,t){if(ee(e))return t;{const r=se(e),s=(this.children.get(r)||new xe(null)).setTree(pe(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ce(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,le(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(ee(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(pe(e),Ce(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,le(),t)}foreachOnPath_(e,t,r){if(ee(e))return this;{this.value&&r(t,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(pe(e),Ce(t,i),r):new xe(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Ce(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new xe(null))}}function xr(n,e,t){if(ee(e))return new st(new xe(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=He(i,e);return s=s.updateChild(o,t),new st(n.writeTree_.set(i,s))}else{const i=new xe(t),s=n.writeTree_.setTree(e,i);return new st(s)}}}function pc(n,e,t){let r=n;return Ge(t,(i,s)=>{r=xr(r,Ce(e,i),s)}),r}function _c(n,e){if(ee(e))return st.empty();{const t=n.writeTree_.setTree(e,new xe(null));return new st(t)}}function mo(n,e){return Cn(n,e)!=null}function Cn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(He(t.path,e)):null}function xc(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(me,(r,i)=>{e.push(new J(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new J(r,i.value))}),e}function Vt(n,e){if(ee(e))return n;{const t=Cn(n,e);return t!=null?new st(new xe(t)):new st(n.writeTree_.subtree(e))}}function vo(n){return n.writeTree_.isEmpty()}function jn(n,e){return sd(le(),n.writeTree_,e)}function sd(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(H(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=sd(Ce(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Ce(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n,e){return cd(e,n)}function gm(n,e,t,r,i){H(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=xr(n.visibleWrites,e,t)),n.lastWriteId=r}function mm(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function vm(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ym(a,r.path)?i=!1:rt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Em(n),!0;if(r.snap)n.visibleWrites=_c(n.visibleWrites,r.path);else{const a=r.children;Ge(a,c=>{n.visibleWrites=_c(n.visibleWrites,Ce(r.path,c))})}return!0}else return!1}function ym(n,e){if(n.snap)return rt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&rt(Ce(n.path,t),e))return!0;return!1}function Em(n){n.visibleWrites=od(n.allWrites,Cm,le()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Cm(n){return n.visible}function od(n,e,t){let r=st.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)rt(t,o)?(a=He(t,o),r=xr(r,a,s.snap)):rt(o,t)&&(a=He(o,t),r=xr(r,le(),s.snap.getChild(a)));else if(s.children){if(rt(t,o))a=He(t,o),r=pc(r,a,s.children);else if(rt(o,t))if(a=He(o,t),ee(a))r=pc(r,le(),s.children);else{const c=qn(s.children,se(a));if(c){const l=c.getChild(pe(a));r=xr(r,le(),l)}}}else throw Kn("WriteRecord should have .snap or .children")}}return r}function ad(n,e,t,r,i){if(!r&&!i){const s=Cn(n.visibleWrites,e);if(s!=null)return s;{const o=Vt(n.visibleWrites,e);if(vo(o))return t;if(t==null&&!mo(o,le()))return null;{const a=t||G.EMPTY_NODE;return jn(o,a)}}}else{const s=Vt(n.visibleWrites,e);if(!i&&vo(s))return t;if(!i&&t==null&&!mo(s,le()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(rt(l.path,e)||rt(e,l.path))},a=od(n.allWrites,o,e),c=t||G.EMPTY_NODE;return jn(a,c)}}}function bm(n,e,t){let r=G.EMPTY_NODE;const i=Cn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=Vt(n.visibleWrites,e);return t.forEachChild(me,(o,a)=>{const c=jn(Vt(s,new fe(o)),a);r=r.updateImmediateChild(o,c)}),xc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Vt(n.visibleWrites,e);return xc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wm(n,e,t,r,i){H(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ce(e,t);if(mo(n.visibleWrites,s))return null;{const o=Vt(n.visibleWrites,s);return vo(o)?i.getChild(t):jn(o,i.getChild(t))}}function Am(n,e,t,r){const i=Ce(e,t),s=Cn(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=Vt(n.visibleWrites,i);return jn(o,r.getNode().getImmediateChild(t))}else return null}function Im(n,e){return Cn(n.visibleWrites,e)}function km(n,e,t,r,i,s,o){let a;const c=Vt(n.visibleWrites,e),l=Cn(c,le());if(l!=null)a=l;else if(t!=null)a=jn(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&u.length<i;)h(f,r)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Dm(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function ki(n,e,t,r){return ad(n.writeTree,n.treePath,e,t,r)}function la(n,e){return bm(n.writeTree,n.treePath,e)}function gc(n,e,t,r){return wm(n.writeTree,n.treePath,e,t,r)}function Di(n,e){return Im(n.writeTree,Ce(n.treePath,e))}function Tm(n,e,t,r,i,s){return km(n.writeTree,n.treePath,e,t,r,i,s)}function ca(n,e,t){return Am(n.writeTree,n.treePath,e,t)}function ld(n,e){return cd(Ce(n.treePath,e),n.writeTree)}function cd(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,Dr(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,kr(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,Vn(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,Dr(r,e.snapshotNode,i.oldSnap));else throw Kn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const ud=new Rm;class ua{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ca(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mn(this.viewCache_),s=Tm(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){return{filter:n}}function Fm(n,e){H(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Nm(n,e,t,r,i){const s=new Sm;let o,a;if(t.type===it.OVERWRITE){const l=t;l.source.fromUser?o=yo(n,e,l.path,l.snap,r,i,s):(H(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ee(l.path),o=Ti(n,e,l.path,l.snap,r,i,a,s))}else if(t.type===it.MERGE){const l=t;l.source.fromUser?o=Om(n,e,l.path,l.children,r,i,s):(H(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Eo(n,e,l.path,l.children,r,i,a,s))}else if(t.type===it.ACK_USER_WRITE){const l=t;l.revert?o=Um(n,e,l.path,r,i,s):o=Lm(n,e,l.path,l.affectedTree,r,i,s)}else if(t.type===it.LISTEN_COMPLETE)o=Mm(n,e,t.path,r,s);else throw Kn("Unknown operation type: "+t.type);const c=s.getChanges();return Pm(e,o,c),{viewCache:o,changes:c}}function Pm(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ii(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(td(Ii(e)))}}function dd(n,e,t,r,i,s){const o=e.eventCache;if(Di(r,t)!=null)return e;{let a,c;if(ee(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=mn(e),u=l instanceof G?l:G.EMPTY_NODE,h=la(r,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=ki(r,mn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=se(t);if(l===".priority"){H(Yt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=gc(r,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=pe(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=gc(r,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=ca(r,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,i,s):a=o.getNode()}}return _r(e,a,o.isFullyInitialized()||ee(t),n.filter.filtersNodes())}}function Ti(n,e,t,r,i,s,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(ee(t))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,r);l=u.updateFullNode(c.getNode(),f,null)}else{const f=se(t);if(!c.isCompleteForPath(t)&&Yt(t)>1)return e;const p=pe(t),_=c.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?l=u.updatePriority(c.getNode(),_):l=u.updateChild(c.getNode(),f,_,p,ud,null)}const h=id(e,l,c.isFullyInitialized()||ee(t),u.filtersNodes()),d=new ua(i,h,s);return dd(n,h,t,i,d,a)}function yo(n,e,t,r,i,s,o){const a=e.eventCache;let c,l;const u=new ua(i,e,s);if(ee(t))l=n.filter.updateFullNode(e.eventCache.getNode(),r,o),c=_r(e,l,!0,n.filter.filtersNodes());else{const h=se(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),r),c=_r(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=pe(t),f=a.getNode().getImmediateChild(h);let p;if(ee(d))p=r;else{const m=u.getCompleteChild(h);m!=null?zu(d)===".priority"&&m.getChild(ju(d)).isEmpty()?p=m:p=m.updateChild(d,r):p=G.EMPTY_NODE}if(f.equals(p))c=e;else{const m=n.filter.updateChild(a.getNode(),h,p,d,u,o);c=_r(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function mc(n,e){return n.eventCache.isCompleteForChild(e)}function Om(n,e,t,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=Ce(t,c);mc(e,se(u))&&(a=yo(n,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=Ce(t,c);mc(e,se(u))||(a=yo(n,a,u,l,i,s,o))}),a}function vc(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Eo(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ee(t)?l=r:l=new xe(null).setTree(t,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=vc(n,f,d);c=Ti(n,c,new fe(h),p,i,s,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=vc(n,p,d);c=Ti(n,c,new fe(h),m,i,s,o,a)}}),c}function Lm(n,e,t,r,i,s,o){if(Di(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(ee(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ti(n,e,t,c.getNode().getChild(t),i,s,a,o);if(ee(t)){let l=new xe(null);return c.getNode().forEachChild(zt,(u,h)=>{l=l.set(new fe(u),h)}),Eo(n,e,t,l,i,s,a,o)}else return e}else{let l=new xe(null);return r.foreach((u,h)=>{const d=Ce(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Eo(n,e,t,l,i,s,a,o)}}function Mm(n,e,t,r,i){const s=e.serverCache,o=id(e,s.getNode(),s.isFullyInitialized()||ee(t),s.isFiltered());return dd(n,o,t,r,ud,i)}function Um(n,e,t,r,i,s){let o;if(Di(r,t)!=null)return e;{const a=new ua(r,e,i),c=e.eventCache.getNode();let l;if(ee(t)||se(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ki(r,mn(e));else{const h=e.serverCache.getNode();H(h instanceof G,"serverChildren would be complete if leaf node"),u=la(r,h)}u=u,l=n.filter.updateFullNode(c,u,s)}else{const u=se(t);let h=ca(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,pe(t),a,s):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,G.EMPTY_NODE,pe(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ki(r,mn(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Di(r,le())!=null,_r(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ia(r.getIndex()),s=im(r);this.processor_=Bm(s);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(G.EMPTY_NODE,a.getNode(),null),u=new Qt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Qt(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zi(h,u),this.eventGenerator_=new hm(this.query_)}get query(){return this.query_}}function Wm(n){return n.viewCache_.serverCache.getNode()}function qm(n){return Ii(n.viewCache_)}function zm(n,e){const t=mn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ee(e)&&!t.getImmediateChild(se(e)).isEmpty())?t.getChild(e):null}function yc(n){return n.eventRegistrations_.length===0}function Vm(n,e){n.eventRegistrations_.push(e)}function Ec(n,e,t){const r=[];if(t){H(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function Cc(n,e,t,r){e.type===it.MERGE&&e.source.queryId!==null&&(H(mn(n.viewCache_),"We should always have a full cache before handling merges"),H(Ii(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=Nm(n.processor_,i,e,t,r);return Fm(n.processor_,s.viewCache),H(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,hd(n,s.changes,s.viewCache.eventCache.getNode(),null)}function jm(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(me,(s,o)=>{r.push(Vn(s,o))}),t.isFullyInitialized()&&r.push(td(t.getNode())),hd(n,r,t.getNode(),e)}function hd(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return fm(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;class fd{constructor(){this.views=new Map}}function Gm(n){H(!Si,"__referenceConstructor has already been defined"),Si=n}function Km(){return H(Si,"Reference.ts has not been loaded"),Si}function $m(n){return n.views.size===0}function da(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return H(s!=null,"SyncTree gave us an op for an invalid query."),Cc(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(Cc(o,e,t,r));return s}}function pd(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=ki(t,i?r:null),c=!1;a?c=!0:r instanceof G?(a=la(t,r),c=!1):(a=G.EMPTY_NODE,c=!1);const l=zi(new Qt(a,c,!1),new Qt(r,i,!1));return new Hm(e,l)}return o}function Ym(n,e,t,r,i,s){const o=pd(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Vm(o,t),jm(o,t)}function Qm(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=Xt(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Ec(l,t,r)),yc(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Ec(c,t,r)),yc(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!Xt(n)&&s.push(new(Km())(e._repo,e._path)),{removed:s,events:o}}function _d(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function jt(n,e){let t=null;for(const r of n.views.values())t=t||zm(r,e);return t}function xd(n,e){if(e._queryParams.loadsAllData())return ji(n);{const r=e._queryIdentifier;return n.views.get(r)}}function gd(n,e){return xd(n,e)!=null}function Xt(n){return ji(n)!=null}function ji(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;function Xm(n){H(!Ri,"__referenceConstructor has already been defined"),Ri=n}function Jm(){return H(Ri,"Reference.ts has not been loaded"),Ri}let Zm=1;class bc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=Dm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function md(n,e,t,r,i){return gm(n.pendingWriteTree_,e,t,r,i),i?Gr(n,new gn(rd(),e,t)):[]}function on(n,e,t=!1){const r=mm(n.pendingWriteTree_,e);if(vm(n.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(le(),!0):Ge(r.children,o=>{s=s.set(new fe(o),!0)}),Gr(n,new Ai(r.path,s,t))}else return[]}function jr(n,e,t){return Gr(n,new gn(oa(),e,t))}function e1(n,e,t){const r=xe.fromObject(t);return Gr(n,new Rr(oa(),e,r))}function t1(n,e){return Gr(n,new Sr(oa(),e))}function n1(n,e,t){const r=fa(n,t);if(r){const i=pa(r),s=i.path,o=i.queryId,a=He(s,e),c=new Sr(aa(o),a);return _a(n,s,c)}else return[]}function vd(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||gd(o,e))){const c=Qm(o,e,t,r);$m(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(s,(d,f)=>Xt(f));if(u&&!h){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=o1(d);for(let p=0;p<f.length;++p){const m=f[p],_=m.query,y=bd(n,m);n.listenProvider_.startListening(gr(_),Br(n,_),y.hashFn,y.onComplete)}}}!h&&l.length>0&&!r&&(u?n.listenProvider_.stopListening(gr(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(Gi(d));n.listenProvider_.stopListening(gr(d),f)}))}a1(n,l)}return a}function yd(n,e,t,r){const i=fa(n,r);if(i!=null){const s=pa(i),o=s.path,a=s.queryId,c=He(o,e),l=new gn(aa(a),c,t);return _a(n,o,l)}else return[]}function r1(n,e,t,r){const i=fa(n,r);if(i){const s=pa(i),o=s.path,a=s.queryId,c=He(o,e),l=xe.fromObject(t),u=new Rr(aa(a),c,l);return _a(n,o,u)}else return[]}function i1(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=He(d,i);s=s||jt(f,p),o=o||Xt(f)});let a=n.syncPointTree_.get(i);a?(o=o||Xt(a),s=s||jt(a,le())):(a=new fd,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;s!=null?c=!0:(c=!1,s=G.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const m=jt(p,le());m&&(s=s.updateImmediateChild(f,m))}));const l=gd(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=Gi(e);H(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=l1();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Vi(n.pendingWriteTree_,i);let h=Ym(a,e,t,u,s,c);if(!l&&!o&&!r){const d=xd(a,e);h=h.concat(c1(n,e,d))}return h}function ha(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=He(o,e),l=jt(a,c);if(l)return l});return ad(i,e,s,t,!0)}function s1(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=He(l,t);r=r||jt(u,h)});let i=n.syncPointTree_.get(t);i?r=r||jt(i,le()):(i=new fd,n.syncPointTree_=n.syncPointTree_.set(t,i));const s=r!=null,o=s?new Qt(r,!0,!1):null,a=Vi(n.pendingWriteTree_,e._path),c=pd(i,e,a,s?o.getNode():G.EMPTY_NODE,s);return qm(c)}function Gr(n,e){return Ed(e,n.syncPointTree_,null,Vi(n.pendingWriteTree_,le()))}function Ed(n,e,t,r){if(ee(n.path))return Cd(n,e,t,r);{const i=e.get(le());t==null&&i!=null&&(t=jt(i,le()));let s=[];const o=se(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=ld(r,o);s=s.concat(Ed(a,c,l,u))}return i&&(s=s.concat(da(i,n,r,t))),s}}function Cd(n,e,t,r){const i=e.get(le());t==null&&i!=null&&(t=jt(i,le()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=ld(r,o),u=n.operationForChild(o);u&&(s=s.concat(Cd(u,a,c,l)))}),i&&(s=s.concat(da(i,n,r,t))),s}function bd(n,e){const t=e.query,r=Br(n,t);return{hashFn:()=>(Wm(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?n1(n,t._path,r):t1(n,t._path);{const s=sg(i,t);return vd(n,t,null,s)}}}}function Br(n,e){const t=Gi(e);return n.queryToTagMap.get(t)}function Gi(n){return n._path.toString()+"$"+n._queryIdentifier}function fa(n,e){return n.tagToQueryMap.get(e)}function pa(n){const e=n.indexOf("$");return H(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new fe(n.substr(0,e))}}function _a(n,e,t){const r=n.syncPointTree_.get(e);H(r,"Missing sync point for query tag that we're tracking");const i=Vi(n.pendingWriteTree_,e);return da(r,t,i,null)}function o1(n){return n.fold((e,t,r)=>{if(t&&Xt(t))return[ji(t)];{let i=[];return t&&(i=_d(t)),Ge(r,(s,o)=>{i=i.concat(o)}),i}})}function gr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Jm())(n._repo,n._path):n}function a1(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=Gi(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function l1(){return Zm++}function c1(n,e,t){const r=e._path,i=Br(n,e),s=bd(n,t),o=n.listenProvider_.startListening(gr(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)H(!Xt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!ee(l)&&u&&Xt(u))return[ji(u).query];{let d=[];return u&&(d=d.concat(_d(u).map(f=>f.query))),Ge(h,(f,p)=>{d=d.concat(p)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(gr(u),Br(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xa(t)}node(){return this.node_}}class ga{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ce(this.path_,e);return new ga(this.syncTree_,t)}node(){return ha(this.syncTree_,this.path_)}}const u1=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},wc=function(n,e,t){if(!n||typeof n!="object")return n;if(H(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return d1(n[".sv"],e,t);if(typeof n[".sv"]=="object")return h1(n[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},d1=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+n)}},h1=function(n,e,t){n.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const i=e.node();if(H(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},f1=function(n,e,t,r){return ma(e,new ga(t,n),r)},wd=function(n,e,t){return ma(n,new xa(e),t)};function ma(n,e,t){const r=n.getPriority().val(),i=wc(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=wc(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,Ie(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(me,(a,c)=>{const l=ma(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function ya(n,e){let t=e instanceof fe?e:new fe(e),r=n,i=se(t);for(;i!==null;){const s=qn(r.node.children,i)||{children:{},childCount:0};r=new va(i,r,s),t=pe(t),i=se(t)}return r}function tr(n){return n.node.value}function Ad(n,e){n.node.value=e,Co(n)}function Id(n){return n.node.childCount>0}function p1(n){return tr(n)===void 0&&!Id(n)}function Ki(n,e){Ge(n.node.children,(t,r)=>{e(new va(t,n,r))})}function kd(n,e,t,r){t&&e(n),Ki(n,i=>{kd(i,e,!0)})}function _1(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Kr(n){return new fe(n.parent===null?n.name:Kr(n.parent)+"/"+n.name)}function Co(n){n.parent!==null&&x1(n.parent,n.name,n)}function x1(n,e,t){const r=p1(t),i=_t(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,Co(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Co(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=/[\[\].#$\/\u0000-\u001F\u007F]/,m1=/[\[\].#$\u0000-\u001F\u007F]/,$s=10*1024*1024,Dd=function(n){return typeof n=="string"&&n.length!==0&&!g1.test(n)},Td=function(n){return typeof n=="string"&&n.length!==0&&!m1.test(n)},v1=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Td(n)},Ac=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Xo(n)||n&&typeof n=="object"&&_t(n,".sv")},y1=function(n,e,t,r){Ea(Lo(n,"value"),e,t)},Ea=function(n,e,t){const r=t instanceof fe?new Mg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+rn(r));if(typeof e=="function")throw new Error(n+"contains a function "+rn(r)+" with contents = "+e.toString());if(Xo(e))throw new Error(n+"contains "+e.toString()+" "+rn(r));if(typeof e=="string"&&e.length>$s/3&&Mi(e)>$s)throw new Error(n+"contains a string greater than "+$s+" utf8 bytes "+rn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ge(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Dd(o)))throw new Error(n+" contains an invalid key ("+o+") "+rn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ug(r,o),Ea(n,a,r),Hg(r)}),i&&s)throw new Error(n+' contains ".value" child '+rn(r)+" in addition to actual children.")}},Sd=function(n,e,t,r){if(!Td(t))throw new Error(Lo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},E1=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sd(n,e,t)},C1=function(n,e){if(se(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},b1=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!v1(t))throw new Error(Lo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rd(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!Gu(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function ft(n,e,t){Rd(n,t),A1(n,r=>rt(r,e)||rt(e,r))}function A1(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(I1(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function I1(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();fr&&Fe("event: "+t.toString()),er(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="repo_interrupt",D1=25;class T1{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new w1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wi(),this.transactionQueueTree_=new va,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function S1(n,e,t){if(n.stats_=ea(n.repoInfo_),n.forceRestClient_||cg())n.server_=new bi(n.repoInfo_,(r,i,s,o)=>{Ic(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>kc(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new At(n.repoInfo_,e,(r,i,s,o)=>{Ic(n,r,i,s,o)},r=>{kc(n,r)},r=>{B1(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=pg(n.repoInfo_,()=>new dm(n.stats_,n.server_)),n.infoData_=new om,n.infoSyncTree_=new bc({startListening:(r,i,s,o)=>{let a=[];const c=n.infoData_.getNode(r._path);return c.isEmpty()||(a=jr(n.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ba(n,"connected",!1),n.serverSyncTree_=new bc({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);ft(n.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function R1(n){const t=n.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ca(n){return u1({timestamp:R1(n)})}function Ic(n,e,t,r,i){n.dataUpdateCount++;const s=new fe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const c=di(t,l=>Ie(l));o=r1(n.serverSyncTree_,s,c,i)}else{const c=Ie(t);o=yd(n.serverSyncTree_,s,c,i)}else if(r){const c=di(t,l=>Ie(l));o=e1(n.serverSyncTree_,s,c)}else{const c=Ie(t);o=jr(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Yi(n,s)),ft(n.eventQueue_,a,o)}function kc(n,e){ba(n,"connected",e),e===!1&&P1(n)}function B1(n,e){Ge(e,(t,r)=>{ba(n,t,r)})}function ba(n,e,t){const r=new fe("/.info/"+e),i=Ie(t);n.infoData_.updateSnapshot(r,i);const s=jr(n.infoSyncTree_,r,i);ft(n.eventQueue_,r,s)}function Bd(n){return n.nextWriteId_++}function F1(n,e,t){const r=s1(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(i=>{const s=Ie(i).withIndex(e._queryParams.getIndex());i1(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=jr(n.serverSyncTree_,e._path,s);else{const a=Br(n.serverSyncTree_,e);o=yd(n.serverSyncTree_,e._path,s,a)}return ft(n.eventQueue_,e._path,o),vd(n.serverSyncTree_,e,t,null,!0),s},i=>($i(n,"get for query "+Ee(e)+" failed: "+i),Promise.reject(new Error(i))))}function N1(n,e,t,r,i){$i(n,"set",{path:e.toString(),value:t,priority:r});const s=Ca(n),o=Ie(t,r),a=ha(n.serverSyncTree_,e),c=wd(o,a,s),l=Bd(n),u=md(n.serverSyncTree_,e,c,l,!0);Rd(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Ve("set at "+e+" failed: "+d);const m=on(n.serverSyncTree_,l,!p);ft(n.eventQueue_,e,m),L1(n,i,d,f)});const h=Ld(n,e);Yi(n,h),ft(n.eventQueue_,h,[])}function P1(n){$i(n,"onDisconnectEvents");const e=Ca(n),t=wi();go(n.onDisconnect_,le(),(i,s)=>{const o=f1(i,s,n.serverSyncTree_,e);nd(t,i,o)});let r=[];go(t,le(),(i,s)=>{r=r.concat(jr(n.serverSyncTree_,i,s));const o=Ld(n,i);Yi(n,o)}),n.onDisconnect_=wi(),ft(n.eventQueue_,le(),r)}function O1(n){n.persistentConnection_&&n.persistentConnection_.interrupt(k1)}function $i(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Fe(t,...e)}function L1(n,e,t,r){e&&er(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Fd(n,e,t){return ha(n.serverSyncTree_,e,t)||G.EMPTY_NODE}function wa(n,e=n.transactionQueueTree_){if(e||Qi(n,e),tr(e)){const t=Pd(n,e);H(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&M1(n,Kr(e),t)}else Id(e)&&Ki(e,t=>{wa(n,t)})}function M1(n,e,t){const r=t.map(l=>l.currentWriteId),i=Fd(n,e,r);let s=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];H(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=He(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{$i(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(on(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Qi(n,ya(n.transactionQueueTree_,e)),wa(n,n.transactionQueueTree_),ft(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)er(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ve("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Yi(n,e)}},o)}function Yi(n,e){const t=Nd(n,e),r=Kr(t),i=Pd(n,t);return U1(n,i,r),r}function U1(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=He(t,c.path);let u=!1,h;if(H(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(on(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=D1)u=!0,h="maxretry",i=i.concat(on(n.serverSyncTree_,c.currentWriteId,!0));else{const d=Fd(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Ea("transaction failed: Data returned ",f,c.path);let p=Ie(f);typeof f=="object"&&f!=null&&_t(f,".priority")||(p=p.updatePriority(d.getPriority()));const _=c.currentWriteId,y=Ca(n),g=wd(p,d,y);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=g,c.currentWriteId=Bd(n),o.splice(o.indexOf(_),1),i=i.concat(md(n.serverSyncTree_,c.path,g,c.currentWriteId,c.applyLocally)),i=i.concat(on(n.serverSyncTree_,_,!0))}else u=!0,h="nodata",i=i.concat(on(n.serverSyncTree_,c.currentWriteId,!0))}ft(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Qi(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)er(r[a]);wa(n,n.transactionQueueTree_)}function Nd(n,e){let t,r=n.transactionQueueTree_;for(t=se(e);t!==null&&tr(r)===void 0;)r=ya(r,t),e=pe(e),t=se(e);return r}function Pd(n,e){const t=[];return Od(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Od(n,e,t){const r=tr(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);Ki(e,i=>{Od(n,i,t)})}function Qi(n,e){const t=tr(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,Ad(e,t.length>0?t:void 0)}Ki(e,r=>{Qi(n,r)})}function Ld(n,e){const t=Kr(Nd(n,e)),r=ya(n.transactionQueueTree_,e);return _1(r,i=>{Ys(n,i)}),Ys(n,r),kd(r,i=>{Ys(n,i)}),t}function Ys(n,e){const t=tr(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(H(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(H(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(on(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ad(e,void 0):t.length=s+1,ft(n.eventQueue_,Kr(e),i);for(let o=0;o<r.length;o++)er(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function W1(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ve(`Invalid query segment '${t}' in query '${n}'`)}return e}const Dc=function(n,e){const t=q1(n),r=t.namespace;t.domain==="firebase.com"&&kt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||eg();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Nu(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new fe(t.pathString)}},q1=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=H1(n.substring(u,h)));const d=W1(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),t=e.substring(p+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:c,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class V1{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return ee(this._path)?null:zu(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=hc(this._queryParams),t=Jo(e);return t==="{}"?"default":t}get _queryObject(){return hc(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof Xi))return!1;const t=this._repo===e._repo,r=Gu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lg(this._path)}}function G1(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function K1(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===zt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==xn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==$t)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===me){if(e!=null&&!Ac(e)||t!=null&&!Ac(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(H(n.getIndex()instanceof Zu||n.getIndex()===ed,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Dt extends Xi{constructor(e,t){super(e,t,new sa,!1)}get parent(){const e=ju(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Fr{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new fe(e),r=bo(this.ref,e);return new Fr(this._node.getChild(t),r,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Fr(i,bo(this.ref,r),me)))}hasChild(e){const t=new fe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qs(n,e){return n=Se(n),n._checkNotDeleted("ref"),e!==void 0?bo(n._root,e):n._root}function bo(n,e){return n=Se(n),se(n._path)===null?E1("child","path",e):Sd("child","path",e),new Dt(n._repo,Ce(n._path,e))}function Tc(n,e){n=Se(n),C1("set",n._path),y1("set",e,n._path);const t=new Li;return N1(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function $1(n){n=Se(n);const e=new j1(()=>{}),t=new Aa(e);return F1(n._repo,n,t).then(r=>new Fr(r,new Dt(n._repo,n._path),n._queryParams.getIndex()))}class Aa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new z1("value",this,new Fr(e.snapshotNode,new Dt(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new V1(this,e,t):null}matches(e){return e instanceof Aa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Y1{}class Q1 extends Y1{_apply(e){G1(e,"orderByKey");const t=sm(e._queryParams,zt);return K1(t),new Xi(e._repo,e._path,t,!0)}}function X1(){return new Q1}function J1(n,...e){let t=Se(n);for(const r of e)t=r._apply(t);return t}Gm(Dt);Xm(Dt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="FIREBASE_DATABASE_EMULATOR_HOST",wo={};let ev=!1;function tv(n,e,t,r){n.repoInfo_=new Nu(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function nv(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Dc(s,i),a=o.repoInfo,c;typeof process<"u"&&$l&&(c=$l[Z1]),c?(s=`http://${c}?ns=${a.namespace}`,o=Dc(s,i),a=o.repoInfo):o.repoInfo.secure;const l=new dg(n.name,n.options,e);b1("Invalid Firebase Database URL",o),ee(o.path)||kt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=iv(a,n,l,new ug(n.name,t));return new sv(u,n)}function rv(n,e){const t=wo[e];(!t||t[n.key]!==n)&&kt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),O1(n),delete t[n.key]}function iv(n,e,t,r){let i=wo[e.name];i||(i={},wo[e.name]=i);let s=i[n.toURLString()];return s&&kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new T1(n,ev,t,r),i[n.toURLString()]=s,s}class sv{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(S1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kt("Cannot call "+e+" on a deleted database.")}}function ov(n=Wo(),e){const t=Ho(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=xf("database");r&&av(t,...r)}return t}function av(n,e,t,r={}){n=Se(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&kt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ii(ii.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:gf(r.mockUserToken,n.app.options.projectId);s=new ii(o)}tv(i,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n){$x(Yn),zn(new dn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return nv(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),qt(Yl,Ql,n),qt(Yl,Ql,"esm2017")}At.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};At.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};lv();const cv={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"};L0(cv,"sud");const Md=Wo("sud"),Ia="https://xt8ss.github.io/ff-site-data";let Mn;fetch(Ia+"/user-ranks.json").then(async n=>Mn=await n.json());const Qe=Kx(Md),Xs=ov(Md),uv=/[^a-zA-Z0-9_]/g,dv={logIn:"material-symbols:login-rounded",logOut:"material-symbols:logout-rounded"};let Ze=n=>{n.target.closest("button").blur()},hv=n=>(n=n.charAt(0).toUpperCase()+n.slice(1),n),fv=(n,e)=>{let t=localStorage.getItem(n);return pt(t&&JSON.parse(t)||e)},pv=(n,e)=>n.subscribe(t=>localStorage.setItem(e,JSON.stringify(t))),Ud=n=>JSON.parse(JSON.stringify(n)),Ut=n=>n!=null&&Object.keys(n).length,Rn=()=>!lh(Ne).preventClosing&&Ne.set(Ud(Wd.promptData)),Sc=(n,e)=>io.AES.encrypt(n,Qe.currentUser.uid+581827).toString(),Js=(n,e)=>io.AES.decrypt(n,(e||Qe.currentUser.uid)+581827).toString(io.enc.Utf8),_v=n=>{let e;for(let t in Mn)if(Mn[t].userList.includes(n.toLowerCase())){e=t;break}return e||(e="User"),e},Hd=(n,e)=>{ko.update(t=>[...t,{icon:dv[n],text:e}]),setTimeout(()=>ko.update(t=>t.slice(1)),3e3)},Rc=()=>history.replaceState(history.state,null,location.origin+location.pathname);const Wd={promptData:{component:null,props:{},focus:"",hasWrapper:!1,preventClosing:!1}};let Bn=pt(!1),si=pt(!1),oi=pt(!1),Ao=pt({}),Io=pt(!1),Nr=pt(""),Zs=pt({select:new Audio}),Ne=pt(Ud(Wd.promptData)),ko=pt([]),Pr=fv("fh-changelogSeen",!1);pv(Pr,"fh-changelogSeen");function qd(n){const e=n-1;return e*e*e+1}function We(n,{delay:e=0,duration:t=400,easing:r=Or}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function Bi(n,{delay:e=0,duration:t=400,easing:r=qd,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,c=o.transform==="none"?"":o.transform,l=1-i,u=a*(1-s);return{delay:e,duration:t,easing:r,css:(h,d)=>`
			transform: ${c} scale(${1-l*d});
			opacity: ${a-u*d}
		`}}function Bc(n,e,t){const r=n.slice();return r[5]=e[t],r}function xv(n){let e,t=Pe(n[1]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Fc(Bc(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=mr()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);L(i,e,s)},p(i,s){if(s&2){t=Pe(i[1]);let o;for(o=0;o<t.length;o+=1){const a=Bc(i,t,o);r[o]?r[o].p(a,s):(r[o]=Fc(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&O(e),cn(r,i)}}}function gv(n){let e,t,r;return{c(){e=F("span"),t=K("— "),r=K(n[1]),R(e,"id","info"),R(e,"class","svelte-etktgh")},m(i,s){L(i,e,s),S(e,t),S(e,r)},p(i,s){s&2&&ge(r,i[1])},d(i){i&&O(e)}}}function Fc(n){let e,t,r=n[5]+"",i;return{c(){e=F("span"),t=K("— "),i=K(r),R(e,"id","info"),R(e,"class","svelte-etktgh")},m(s,o){L(s,e,o),S(e,t),S(e,i)},p(s,o){o&2&&r!==(r=s[5]+"")&&ge(i,r)},d(s){s&&O(e)}}}function mv(n){let e,t,r,i,s,o,a,c,l;function u(f,p){return typeof f[1]=="string"?gv:xv}let h=u(n),d=h(n);return{c(){e=F("hr"),t=z(),r=F("li"),i=F("span"),s=K("v"),o=K(n[0]),a=z(),c=F("i"),c.textContent=`${`${n[3][n[2][1]-1]} ${n[2][0]}, 20${n[2][2]}`}`,l=z(),d.c(),R(e,"class","svelte-etktgh"),R(i,"id","version"),R(i,"class","svelte-etktgh"),R(c,"id","date"),R(c,"class","svelte-etktgh"),R(r,"class","flex fw fai-center svelte-etktgh")},m(f,p){L(f,e,p),L(f,t,p),L(f,r,p),S(r,i),S(i,s),S(i,o),S(r,a),S(r,c),S(r,l),d.m(r,null)},p(f,[p]){p&1&&ge(o,f[0]),h===(h=u(f))&&d?d.p(f,p):(d.d(1),d=h(f),d&&(d.c(),d.m(r,null)))},i:te,o:te,d(f){f&&(O(e),O(t),O(r)),d.d()}}}function vv(n,e,t){let{version:r,date:i,logs:s}=e,o=i.split("/"),a=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.$$set=c=>{"version"in c&&t(0,r=c.version),"date"in c&&t(4,i=c.date),"logs"in c&&t(1,s=c.logs)},[r,s,o,a,i]}class yv extends lt{constructor(e){super(),at(this,e,vv,mv,Je,{version:0,date:4,logs:1})}}function Nc(n,e,t){const r=n.slice();return r[1]=e[t],r}function Pc(n){let e,t;const r=[n[1]];let i={};for(let s=0;s<r.length;s+=1)i=Un(i,r[s]);return e=new yv({props:i}),{c(){un(e.$$.fragment)},m(s,o){Gt(e,s,o),t=!0},p(s,o){const a=o&1?Wn(r,[ro(s[1])]):{};e.$set(a)},i(s){t||(ie(e.$$.fragment,s),t=!0)},o(s){he(e.$$.fragment,s),t=!1},d(s){Kt(e,s)}}}function Ev(n){let e,t,r,i,s=Pe(n[0].toReversed()),o=[];for(let c=0;c<s.length;c+=1)o[c]=Pc(Nc(n,s,c));const a=c=>he(o[c],1,1,()=>{o[c]=null});return{c(){e=F("span"),e.textContent="Changelog",t=z(),r=F("ul");for(let c=0;c<o.length;c+=1)o[c].c();R(e,"class","title"),R(r,"class","flex fd-col smaller-fs svelte-8x0x8v"),R(r,"id","contents")},m(c,l){L(c,e,l),L(c,t,l),L(c,r,l);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(r,null);i=!0},p(c,[l]){if(l&1){s=Pe(c[0].toReversed());let u;for(u=0;u<s.length;u+=1){const h=Nc(c,s,u);o[u]?(o[u].p(h,l),ie(o[u],1)):(o[u]=Pc(h),o[u].c(),ie(o[u],1),o[u].m(r,null))}for(et(),u=s.length;u<o.length;u+=1)a(u);tt()}},i(c){if(!i){for(let l=0;l<s.length;l+=1)ie(o[l]);i=!0}},o(c){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)he(o[l]);i=!1},d(c){c&&(O(e),O(t),O(r)),cn(o,c)}}}function Cv(n){return[[{version:"1.0.0",date:"10/9/24",logs:"v1 Release"},{version:"1.0.1",date:"10/9/24",logs:"Added Fish Reeling Times to Resources category"},{version:"1.0.2",date:"17/9/24",logs:["Added ability to copy links","Increased category visibility"]},{version:"1.0.3",date:"16/10/24",logs:["Added Twitter links to Official Links category","Added Developer Forum links to Resources category"]},{version:"1.0.4",date:"1/12/24",logs:"Added Gift Tree Profit Calculator to Resources category"},{version:"1.1.0",date:"1/1/25",logs:["Added category collapse/expand feature","Added End of Year 2024 Progress Post to Resources category"]},{version:"1.2.0",date:"7/6/25",logs:["Added sign-up/log-in feature","Implemented data synchronization process"]},{version:"1.2.1",date:"7/6/25",logs:"Added Frontierguessr to Affiliations category"},{version:"1.2.2",date:"13/6/25",logs:"Added Frontier Clock to Affiliations category"},{version:"1.2.3",date:"18/6/25",logs:["Added Gift Tree Calculator to Affiliations category","Removed Gift Tree Profit Calculator from Resources category"]},{version:"1.2.4",date:"5/9/25",logs:"Added Ratboy's Nightmare Dungeon Rewards to Resources category"}]]}class bv extends lt{constructor(e){super(),at(this,e,Cv,Ev,Je,{})}}function wv(n){let e,t,r;return{c(){e=F("span"),e.textContent="Fantastic Hub Policy",t=z(),r=F("div"),r.innerHTML=`<hr/> <span class="svelte-9ffe04">About</span> <p>This site is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="svelte-9ffe04">Privacy Policy</span> <p>This policy explains what information Fantastic Hub (&quot;we&quot;, &quot;us&quot; or
        &quot;our&quot;) collects, uses, and shares when you use our website.</p> <span class="svelte-9ffe04">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="svelte-9ffe04">How We Use This Information</span> <p>Your information may be utilized to test and improve the site, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="svelte-9ffe04">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,R(e,"class","title"),R(r,"class","flex fd-col smaller-fs svelte-9ffe04"),R(r,"id","contents")},m(i,s){L(i,e,s),L(i,t,s),L(i,r,s)},p:te,i:te,o:te,d(i){i&&(O(e),O(t),O(r))}}}class Av extends lt{constructor(e){super(),at(this,e,null,wv,Je,{})}}function Oc(n){let e,t;return{c(){e=F("span"),t=K(n[2]),R(e,"class","tooltip"),R(e,"id",n[1])},m(r,i){L(r,e,i),S(e,t)},p(r,i){i&4&&ge(t,r[2]),i&2&&R(e,"id",r[1])},d(r){r&&O(e)}}}function Iv(n){let e,t,r,i,s,o=n[1]&&Oc(n);return{c(){e=F("div"),t=F("iconify-icon"),r=z(),i=K(n[0]),s=z(),o&&o.c(),ke(t,"icon",n[3]),je(t,"color",n[4]),R(e,"class","username flex fjc-center fai-center cg-1 pos-rel font-ms")},m(a,c){L(a,e,c),S(e,t),S(e,r),S(e,i),S(e,s),o&&o.m(e,null)},p(a,[c]){c&8&&ke(t,"icon",a[3]),c&16&&je(t,"color",a[4]),c&1&&ge(i,a[0]),a[1]?o?o.p(a,c):(o=Oc(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:te,o:te,d(a){a&&O(e),o&&o.d()}}}function kv(n,e,t){let{username:r,tooltipPosition:i=null}=e,s,o="line-md:loading-loop",a="black";return n.$$set=c=>{"username"in c&&t(0,r=c.username),"tooltipPosition"in c&&t(1,i=c.tooltipPosition)},n.$$.update=()=>{n.$$.dirty&5&&Ut(Mn)&&(t(2,s=_v(r)),t(3,o=Mn[s].icon.iconifyName),t(4,a=Mn[s].icon.color))},[r,i,s,o,a]}class Dv extends lt{constructor(e){super(),at(this,e,kv,Iv,Je,{username:0,tooltipPosition:1})}}function Lc(n,e,t){const r=n.slice();return r[59]=e[t],r}function Tv(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,p,m,_,y,g,x=n[10]?"Hide":"Show",v,E,A,I,C=!n[8]&&Mc(n);function k(W,j){return W[8]?Bv:Rv}let b=k(n),w=b(n),T=[{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:d=(n[8]?"New":"")+" Password"},{autocomplete:f=(n[1]||n[8]?"new":"current")+"-password"},{class:"font-ms"}],D={};for(let W=0;W<T.length;W+=1)D=Un(D,T[W]);let q=(n[1]||n[8])&&Uc(n),V=!n[1]&&!n[8]&&Hc(n);return{c(){C&&C.c(),e=z(),t=F("div"),r=F("div"),i=F("div"),s=F("iconify-icon"),o=z(),w.c(),a=z(),c=F("div"),l=F("iconify-icon"),u=z(),h=F("input"),p=z(),q&&q.c(),m=z(),_=F("div"),V&&V.c(),y=z(),g=F("button"),v=K(x),E=K(" password"),ke(s,"icon","lucide:user-round"),R(i,"class","flex fai-center br-1"),$e(i,"ff-item",n[8]),$e(i,"border-tp",!n[8]),ke(l,"icon","material-symbols:lock-outline"),Hn(h,D),R(c,"class","flex fai-center pos-rel border-tp br-1"),R(r,"class","formInputs flex fd-col rg-1"),R(g,"class","textBtn smaller-fs no-bg no-bg-change"),R(_,"class","flex"),je(_,"justify-content",n[1]||n[8]?"flex-end":"space-between")},m(W,j){C&&C.m(W,j),L(W,e,j),L(W,t,j),S(t,r),S(r,i),S(i,s),S(i,o),w.m(i,null),S(r,a),S(r,c),S(c,l),S(c,u),S(c,h),h.autofocus&&h.focus(),Xe(h,n[2].password),S(r,p),q&&q.m(r,null),S(t,m),S(t,_),V&&V.m(_,null),S(_,y),S(_,g),S(g,v),S(g,E),A||(I=[Q(h,"input",n[34]),Q(h,"input",n[35]),Q(g,"click",n[39])],A=!0)},p(W,j){W[8]?C&&(C.d(1),C=null):C?C.p(W,j):(C=Mc(W),C.c(),C.m(e.parentNode,e)),b===(b=k(W))&&w?w.p(W,j):(w.d(1),w=b(W),w&&(w.c(),w.m(i,null))),j[0]&256&&$e(i,"ff-item",W[8]),j[0]&256&&$e(i,"border-tp",!W[8]),Hn(h,D=Wn(T,[j[0]&1024&&{type:W[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},j[0]&256&&d!==(d=(W[8]?"New":"")+" Password")&&{placeholder:d},j[0]&258&&f!==(f=(W[1]||W[8]?"new":"current")+"-password")&&{autocomplete:f},{class:"font-ms"}])),j[0]&4&&h.value!==W[2].password&&Xe(h,W[2].password),W[1]||W[8]?q?q.p(W,j):(q=Uc(W),q.c(),q.m(r,null)):q&&(q.d(1),q=null),!W[1]&&!W[8]?V?V.p(W,j):(V=Hc(W),V.c(),V.m(_,y)):V&&(V.d(1),V=null),j[0]&1024&&x!==(x=W[10]?"Hide":"Show")&&ge(v,x),j[0]&258&&je(_,"justify-content",W[1]||W[8]?"flex-end":"space-between")},d(W){W&&(O(e),O(t)),C&&C.d(W),w.d(),q&&q.d(),V&&V.d(),A=!1,be(I)}}}function Sv(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,p,m;function _(C,k){return C[7]?Nv:Fv}let y=_(n),g=y(n);function x(C,k){if(C[7])return Ov;if(C[6]||C[9])return Pv}let v=x(n),E=v&&v(n),A=!n[0]&&Wc(n),I=n[0]&&!n[9]&&qc(n);return{c(){e=F("div"),g.c(),t=z(),r=F("div"),i=F("div"),E&&E.c(),s=z(),o=F("div"),a=F("iconify-icon"),c=z(),l=F("input"),h=z(),A&&A.c(),d=z(),I&&I.c(),f=mr(),R(e,"class","smaller-fs"),je(e,"letter-spacing","-0.05rem"),je(e,"line-height","3.75rem"),ke(a,"icon","jam:write"),l.disabled=u=!n[9]&&n[0]&&!!n[2].password,R(l,"type","text"),R(l,"autocomplete","off"),R(l,"minlength","1"),R(l,"maxlength","35"),R(l,"placeholder","Your answer"),R(l,"class","font-ms"),R(o,"class","flex fai-center pos-rel border-tp br-1"),R(i,"class","formInputs flex fd-col rg-1"),R(r,"class","flex fd-col")},m(C,k){L(C,e,k),g.m(e,null),L(C,t,k),L(C,r,k),S(r,i),E&&E.m(i,null),S(i,s),S(i,o),S(o,a),S(o,c),S(o,l),Xe(l,n[2].answer),S(r,h),A&&A.m(r,null),L(C,d,k),I&&I.m(C,k),L(C,f,k),p||(m=[Q(l,"input",n[25]),Q(l,"input",n[26])],p=!0)},p(C,k){y===(y=_(C))&&g?g.p(C,k):(g.d(1),g=y(C),g&&(g.c(),g.m(e,null))),v===(v=x(C))&&E?E.p(C,k):(E&&E.d(1),E=v&&v(C),E&&(E.c(),E.m(i,s))),k[0]&517&&u!==(u=!C[9]&&C[0]&&!!C[2].password)&&(l.disabled=u),k[0]&4&&l.value!==C[2].answer&&Xe(l,C[2].answer),C[0]?A&&(A.d(1),A=null):A?A.p(C,k):(A=Wc(C),A.c(),A.m(r,null)),C[0]&&!C[9]?I?I.p(C,k):(I=qc(C),I.c(),I.m(f.parentNode,f)):I&&(I.d(1),I=null)},d(C){C&&(O(e),O(t),O(r),O(d),O(f)),g.d(),E&&E.d(),A&&A.d(),I&&I.d(C),p=!1,be(m)}}}function Mc(n){let e,t=n[1]?"Already have":"Don't have",r,i,s,o=n[1]?"Log In":"Sign Up",a,c,l;return{c(){e=F("div"),r=K(t),i=K(` an account?\r
                `),s=F("button"),a=K(o),s.disabled=n[4],R(s,"class","border-tp br-1"),R(s,"id","switchMethod"),R(e,"class","smaller-fs")},m(u,h){L(u,e,h),S(e,r),S(e,i),S(e,s),S(s,a),c||(l=Q(s,"click",n[31]),c=!0)},p(u,h){h[0]&2&&t!==(t=u[1]?"Already have":"Don't have")&&ge(r,t),h[0]&2&&o!==(o=u[1]?"Log In":"Sign Up")&&ge(a,o),h[0]&16&&(s.disabled=u[4])},d(u){u&&O(e),c=!1,l()}}}function Rv(n){let e,t,r;return{c(){e=F("input"),R(e,"type","text"),R(e,"minlength","2"),R(e,"maxlength","20"),R(e,"placeholder","Username"),R(e,"autocomplete","username"),R(e,"class","font-ms")},m(i,s){L(i,e,s),Xe(e,n[2].username),t||(r=[Q(e,"input",n[32]),Q(e,"input",n[33])],t=!0)},p(i,s){s[0]&4&&e.value!==i[2].username&&Xe(e,i[2].username)},d(i){i&&O(e),t=!1,be(r)}}}function Bv(n){let e,t=n[11].displayName+"",r;return{c(){e=F("span"),r=K(t),R(e,"class","flex fjc-center"),je(e,"flex","1")},m(i,s){L(i,e,s),S(e,r)},p(i,s){s[0]&2048&&t!==(t=i[11].displayName+"")&&ge(r,t)},d(i){i&&O(e)}}}function Uc(n){let e,t,r,i,s,o,a,c=[{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:s="Confirm "+(n[8]?"New Password":"Password")},{autocomplete:"new-password"},{class:"font-ms"}],l={};for(let u=0;u<c.length;u+=1)l=Un(l,c[u]);return{c(){e=F("div"),t=F("iconify-icon"),r=z(),i=F("input"),ke(t,"icon","material-symbols:lock"),Hn(i,l),R(e,"class","flex fai-center pos-rel border-tp br-1")},m(u,h){L(u,e,h),S(e,t),S(e,r),S(e,i),i.autofocus&&i.focus(),Xe(i,n[2].confirm),o||(a=[Q(i,"input",n[36]),Q(i,"input",n[37])],o=!0)},p(u,h){Hn(i,l=Wn(c,[h[0]&1024&&{type:u[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},h[0]&256&&s!==(s="Confirm "+(u[8]?"New Password":"Password"))&&{placeholder:s},{autocomplete:"new-password"},{class:"font-ms"}])),h[0]&4&&i.value!==u[2].confirm&&Xe(i,u[2].confirm)},d(u){u&&O(e),o=!1,be(a)}}}function Hc(n){let e,t,r,i;return{c(){e=F("button"),t=K("Forgot password?"),e.disabled=n[4],R(e,"class","textBtn smaller-fs no-bg no-bg-change")},m(s,o){L(s,e,o),S(e,t),r||(i=Q(e,"click",n[38]),r=!0)},p(s,o){o[0]&16&&(e.disabled=s[4])},d(s){s&&O(e),r=!1,i()}}}function Fv(n){let e,t=n[9]?"another":"a",r,i,s,o,a=n[9]?"again":"",c,l,u,h,d,f,p,m,_,y,g;return{c(){e=K("Before finalizing, we ask you to create "),r=K(t),i=z(),s=F("hl"),s.textContent="security question",o=K(`\r
                to answer in case you ever need to reset your password `),c=K(a),l=K(`.\r
                `),u=F("br"),h=z(),d=F("b"),d.textContent=`The answer should be confidential, easy to recall, and not\r
                    subject to change.`,f=z(),p=F("br"),m=K(`\r
                If you forget the `),_=F("hl"),_.textContent="exact answer",y=K(` (case-sensitive) along\r
                with your password, you may lose access to your account\r
                `),g=F("hl"),g.textContent="permanently!"},m(x,v){L(x,e,v),L(x,r,v),L(x,i,v),L(x,s,v),L(x,o,v),L(x,c,v),L(x,l,v),L(x,u,v),L(x,h,v),L(x,d,v),L(x,f,v),L(x,p,v),L(x,m,v),L(x,_,v),L(x,y,v),L(x,g,v)},p(x,v){v[0]&512&&t!==(t=x[9]?"another":"a")&&ge(r,t),v[0]&512&&a!==(a=x[9]?"again":"")&&ge(c,a)},d(x){x&&(O(e),O(r),O(i),O(s),O(o),O(c),O(l),O(u),O(h),O(d),O(f),O(p),O(m),O(_),O(y),O(g))}}}function Nv(n){let e,t=n[0]?"security question and password":"password",r,i;return{c(){e=K("Answer the following prompt to reset your "),r=K(t),i=K(":")},m(s,o){L(s,e,o),L(s,r,o),L(s,i,o)},p(s,o){o[0]&1&&t!==(t=s[0]?"security question and password":"password")&&ge(r,t)},d(s){s&&(O(e),O(r),O(i))}}}function Pv(n){let e,t,r,i,s,o;return{c(){e=F("div"),t=F("iconify-icon"),r=z(),i=F("input"),ke(t,"icon","f7:question-square"),R(i,"type","text"),R(i,"autocomplete","off"),R(i,"minlength","10"),R(i,"maxlength","35"),R(i,"placeholder","Your question"),R(i,"class","font-ms"),R(e,"class","flex fai-center border-tp br-1")},m(a,c){L(a,e,c),S(e,t),S(e,r),S(e,i),Xe(i,n[2].question),s||(o=[Q(i,"input",n[23]),Q(i,"input",n[24])],s=!0)},p(a,c){c[0]&4&&i.value!==a[2].question&&Xe(i,a[2].question)},d(a){a&&O(e),s=!1,be(o)}}}function Ov(n){let e,t,r,i,s=(Ut(n[11])?n[11].security.question:"...")+"",o;return{c(){e=F("div"),t=F("iconify-icon"),r=z(),i=F("span"),o=K(s),ke(t,"icon","f7:question-square"),R(i,"class","flex fjc-center"),je(i,"flex","1"),R(e,"class","ff-item flex fai-center br-1")},m(a,c){L(a,e,c),S(e,t),S(e,r),S(e,i),S(i,o)},p(a,c){c[0]&2048&&s!==(s=(Ut(a[11])?a[11].security.question:"...")+"")&&ge(o,s)},d(a){a&&O(e)}}}function Wc(n){let e,t,r,i=n[6]?"Sign Up":n[9]?"Password Reset":"Log In",s,o,a;return{c(){e=F("div"),t=F("button"),r=K("Back to "),s=K(i),t.disabled=n[4],R(t,"class","textBtn smaller-fs no-bg no-bg-change"),R(e,"class","flex")},m(c,l){L(c,e,l),S(e,t),S(t,r),S(t,s),o||(a=Q(t,"click",n[27]),o=!0)},p(c,l){l[0]&576&&i!==(i=c[6]?"Sign Up":c[9]?"Password Reset":"Log In")&&ge(s,i),l[0]&16&&(t.disabled=c[4])},d(c){c&&O(e),o=!1,a()}}}function qc(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,p=n[10]?"Hide":"Show",m,_,y,g,x=[{disabled:l=!!n[2].answer},{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:u=(n[8]?"New":"")+" Password"},{class:"font-ms"}],v={};for(let E=0;E<x.length;E+=1)v=Un(v,x[E]);return{c(){e=F("span"),e.textContent=`or, alternatively, input your current password in case you know\r
                it:`,t=z(),r=F("div"),i=F("div"),s=F("div"),o=F("iconify-icon"),a=z(),c=F("input"),h=z(),d=F("div"),f=F("button"),m=K(p),_=K(" password"),R(e,"class","smaller-fs"),ke(o,"icon","material-symbols:lock-outline"),Hn(c,v),R(s,"class","flex fai-center pos-rel border-tp br-1"),R(i,"class","formInputs flex fd-col rg-1"),R(f,"class","textBtn smaller-fs no-bg no-bg-change"),R(d,"class","flex"),je(d,"justify-content","flex-end")},m(E,A){L(E,e,A),L(E,t,A),L(E,r,A),S(r,i),S(i,s),S(s,o),S(s,a),S(s,c),c.autofocus&&c.focus(),Xe(c,n[2].password),S(r,h),S(r,d),S(d,f),S(f,m),S(f,_),y||(g=[Q(c,"input",n[28]),Q(c,"input",n[29]),Q(f,"click",n[30])],y=!0)},p(E,A){Hn(c,v=Wn(x,[A[0]&4&&l!==(l=!!E[2].answer)&&{disabled:l},A[0]&1024&&{type:E[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},A[0]&256&&u!==(u=(E[8]?"New":"")+" Password")&&{placeholder:u},{class:"font-ms"}])),A[0]&4&&c.value!==E[2].password&&Xe(c,E[2].password),A[0]&1024&&p!==(p=E[10]?"Hide":"Show")&&ge(m,p)},d(E){E&&(O(e),O(t),O(r)),y=!1,be(g)}}}function zc(n){let e,t=Pe(n[5]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Vc(Lc(n,t,i));return{c(){e=F("div");for(let i=0;i<r.length;i+=1)r[i].c();R(e,"class","flex fd-col smaller-fs"),je(e,"color","var(--ff-red)")},m(i,s){L(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&40){t=Pe(i[5]);let o;for(o=0;o<t.length;o+=1){const a=Lc(i,t,o);r[o]?r[o].p(a,s):(r[o]=Vc(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&O(e),cn(r,i)}}}function Vc(n){let e,t,r=n[3][n[59]].message+"",i;return{c(){e=F("span"),t=K("- "),i=K(r)},m(s,o){L(s,e,o),S(e,t),S(e,i)},p(s,o){o[0]&40&&r!==(r=s[3][s[59]].message+"")&&ge(i,r)},d(s){s&&O(e)}}}function Lv(n){let e,t=n[6]||n[9]?`Security ${n[0]?"Reset":"Question"}`:n[1]?"Sign Up":n[7]||n[8]?`${n[0]?"Security":"Password"} Reset`:"Log In",r,i,s,o,a,c,l,u,h=n[6]?"Create Account":n[9]?`Reset ${n[0]?"":"& Log In"}`:n[1]||n[7]||n[8]?"Next":"Log In",d,f,p;function m(x,v){return x[6]||x[9]||x[7]?Sv:Tv}let _=m(n),y=_(n),g=n[5].length&&zc(n);return{c(){e=F("span"),r=K(t),i=z(),s=F("hr"),o=z(),a=F("div"),y.c(),c=z(),g&&g.c(),l=z(),u=F("button"),d=K(h),R(e,"class","title"),u.disabled=n[4],R(u,"class","mainBtn border-tp br-1"),R(a,"class","signupAndLogin contents flex fd-col smaller-fs"),je(a,"width",n[6]||n[9]||n[7]?"80rem":"")},m(x,v){L(x,e,v),S(e,r),L(x,i,v),L(x,s,v),L(x,o,v),L(x,a,v),y.m(a,null),S(a,c),g&&g.m(a,null),S(a,l),S(a,u),S(u,d),f||(p=Q(u,"click",n[40]),f=!0)},p(x,v){v[0]&963&&t!==(t=x[6]||x[9]?`Security ${x[0]?"Reset":"Question"}`:x[1]?"Sign Up":x[7]||x[8]?`${x[0]?"Security":"Password"} Reset`:"Log In")&&ge(r,t),_===(_=m(x))&&y?y.p(x,v):(y.d(1),y=_(x),y&&(y.c(),y.m(a,c))),x[5].length?g?g.p(x,v):(g=zc(x),g.c(),g.m(a,l)):g&&(g.d(1),g=null),v[0]&963&&h!==(h=x[6]?"Create Account":x[9]?`Reset ${x[0]?"":"& Log In"}`:x[1]||x[7]||x[8]?"Next":"Log In")&&ge(d,h),v[0]&16&&(u.disabled=x[4]),v[0]&704&&je(a,"width",x[6]||x[9]||x[7]?"80rem":"")},i:te,o:te,d(x){x&&(O(e),O(i),O(s),O(o),O(a)),y.d(),g&&g.d(),f=!1,p()}}}let eo="@fantastic.frontier";function Mv(n,e,t){let r,i,s;ve(n,Ne,B=>t(22,r=B)),ve(n,oi,B=>t(41,i=B)),ve(n,Nr,B=>t(42,s=B));let{onlyReset:o=!1,verifyAndSync:a}=e,c=!1,l=!1,u=!!o,h=!1,d=!1,f=!1,p=!1,m=["admin","administrator","administration","advertiser","affiliate","affiliation","anonymous","bot","contributor","creator","designer","dev","developer","editor","guest","helper","management","manager","member","mod","moderation","moderator","name","operator","owner","service","staff","support","system","tester","user","username","visitor","website","xt8","xt8ss","xtss","xt_ss","you","yourname","yourusername"],_={question:"",answer:"",username:s||"",password:"",confirm:""},y={loginWrong:{active:!1,message:"That's not quite right!"},userNotFound:{active:!1,message:"Please make sure your username is correct!"},usernameUnavailable:{active:!1,message:"That username isn't available!"},usernameDupe:{active:!1,message:"That username is already taken!"},usernameLength:{active:!1,message:"Please make your username between 2-20 characters!"},passwordReset:{active:!1,message:"That's not quite right either!"},passwordLength:{active:!1,message:"Please make your password between 6-20 characters!"},passwordMatch:{active:!1,message:"Please make sure your passwords match!"},questionLength:{active:!1,message:"Please make your question between 10-35 characters!"},answerLength:{active:!1,message:"Please make your answer between 1-35 characters!"},answerWrong:{active:!1,message:"That's not quite right!"}},g=!1,x=[],v,E={},A=[];o&&w();async function I(){l||d?(j(),ne(),setTimeout(()=>{x.length||(l?C():d&&b())})):c?(W(),q(),setTimeout(async()=>{if(!x.length){if(await w(),Ut(E)){P("usernameDupe");return}t(6,l=!0)}})):h?(q(),setTimeout(()=>{x.length||(t(2,_.answer="",_),t(9,d=!0))})):u?((!o||o&&!_.password)&&ne(),o&&!_.answer&&V(),setTimeout(()=>{if(!x.length){if((!o||o&&!_.password)&&Js(E.security.answer.toString(),E.uid)!==_.answer){P("answerWrong");return}if(o&&!_.answer&&Js(E.password,E.uid)!==_.password){P("loginWrong");return}t(2,_.password="",_),t(2,_.confirm="",_),t(7,u=!1),t(8,h=!0)}})):(V(),setTimeout(async()=>{if(!x.length){if(await w(),!Ut(E)){P("loginWrong");return}k()}}))}async function C(){_e(oi,i=!0,i),t(4,g=!0),_e(Nr,s=_.username,s),await D_(Qe,s+eo,_.password),await S_(Qe.currentUser,{displayName:s}),await Tc(Qs(Xs,`${s.toLowerCase()}/userInfo`),T()).then(()=>_e(oi,i=!1,i)),t(4,g=!1),D(),setTimeout(a,200)}async function k(){t(4,g=!0);try{await Ml(Qe,_.username+eo,_.password)}catch{P("loginWrong"),t(4,g=!1);return}t(4,g=!1),D()}async function b(){t(4,g=!0),o&&(await Qe.signOut(),t(2,_.username=E.displayName,_)),await Ml(Qe,_.username+eo,Js(E.password,E.uid)),await R_(Qe.currentUser,_.password),await Tc(Qs(Xs,`${_.username.toLowerCase()}/userInfo`),T(E.displayName)),t(4,g=!1),D()}async function w(){let B=_.username,Z=_.username.toLowerCase();if(!B||B.length<2||A.includes(Z)){t(11,E={});return}if(!Ut(E)||E.username!==Z){t(4,g=!0);let Be=(await $1(J1(Qs(Xs,`${Z}/userInfo`),X1()))).val();Be?t(11,E={username:Z,...Be}):(t(11,E={}),A.push(Z)),t(4,g=!1)}}function T(B){return{displayName:B||_.username,password:Sc(_.password),security:{question:_.question,answer:Sc(_.answer)},uid:Qe.currentUser.uid}}function D(){t(21,ye=!0),setTimeout(Rn)}function q(){(_.password.length<6||_.password.length>20)&&P("passwordLength"),_.password!==_.confirm&&P("passwordMatch")}function V(){(_.password.length<6||_.password.length>20)&&P("loginWrong")}function W(){m.includes(_.username.toLowerCase())?P("usernameUnavailable"):(_.username.length<2||_.username.length>20)&&P("usernameLength")}function j(){(_.question.length<10||_.question.length>35)&&P("questionLength")}function ne(){(!_.answer.length||_.answer.length>35)&&P("answerLength")}function ae(B){M(uv,20,B)}function re(B){M(/[^a-zA-Z0-9 \$\.\,\?\"\!\@\#\%\&\/\>\<\'\:\;\~\+\=\-]/g,35,B)}function N(B){M(/[^a-zA-Z0-9\^\$\*\.\[\]\{\}\(\)\?\"\!\@\#\%\&\/\\\,\>\<\'\:\;\|\_\~\`\+\=\-]/g,20,B)}function M(B,Z,Be){t(2,_[Be]=_[Be].replace(B,"").slice(0,Z),_)}function U(){for(let B in _)t(2,_[B]="",_)}function P(B){t(3,y[B].active=!0,y)}function ue(){_e(Ne,r.preventClosing=!!g,r)}const ce=v0();let ye=!1;function Y(){_.question=this.value,t(2,_)}const xt=()=>re("question");function ct(){_.answer=this.value,t(2,_)}const en=()=>re("answer"),gt=B=>{Ze(B),!g&&(l?t(6,l=!1):d?t(9,d=!1):t(7,u=!1))};function Me(){_.password=this.value,t(2,_)}const Te=()=>N("password"),Tt=B=>{Ze(B),t(10,f=!f)},mt=B=>{Ze(B),!g&&(t(1,c=!c),t(10,f=!1))};function St(){_.username=this.value,t(2,_)}const vt=()=>ae("username");function tn(){_.password=this.value,t(2,_)}const yt=()=>N("password");function Ue(){_.confirm=this.value,t(2,_)}const Re=()=>N("confirm"),Ye=async B=>{if(Ze(B),!g){if(await w(),!Ut(E)){P("userNotFound");return}t(7,u=!0)}},Rt=B=>{Ze(B),t(10,f=!f)},bn=B=>{Ze(B),!g&&I()};return n.$$set=B=>{"onlyReset"in B&&t(0,o=B.onlyReset),"verifyAndSync"in B&&t(18,a=B.verifyAndSync)},n.$$.update=()=>{n.$$.dirty[0]&2&&(c||!c)&&U(),n.$$.dirty[0]&524293&&o&&(_.answer||_.password)&&!p&&(t(19,p=!0),t(4,g=!0),setTimeout(()=>{U(),t(4,g=!1)})),n.$$.dirty[0]&1048616&&y&&(t(5,x=Object.keys(y).filter(B=>y[B].active)),x.length&&(clearTimeout(v),t(20,v=setTimeout(()=>{t(5,x=[]);for(let B in y)t(3,y[B].active=!1,y)},2500)))),n.$$.dirty[0]&16&&(g||!g)&&ue(),n.$$.dirty[0]&6291456&&r.component===null&&!ye&&ce("signupAndLoginClose")},[o,c,_,y,g,x,l,u,h,d,f,E,I,w,ae,re,N,P,a,p,v,ye,r,Y,xt,ct,en,gt,Me,Te,Tt,mt,St,vt,tn,yt,Ue,Re,Ye,Rt,bn]}class zd extends lt{constructor(e){super(),at(this,e,Mv,Lv,Je,{onlyReset:0,verifyAndSync:18},null,[-1,-1])}}function Uv(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,p,m,_;return t=new Dv({props:{username:n[0],tooltipPosition:"top"}}),{c(){e=F("span"),un(t.$$.fragment),r=z(),i=F("hr"),s=z(),o=F("div"),a=F("span"),c=K(`Created\r
        `),l=F("hl"),l.textContent=`${new Date(parseInt(n[2])).toLocaleDateString(void 0,{dateStyle:"long"})}`,u=z(),h=F("button"),h.textContent="Reset Security Question & Password",d=z(),f=F("button"),f.textContent="Log Out",R(e,"class","title"),R(h,"class","textBtn smaller-fs no-bg no-bg-change"),R(f,"class","mainBtn border-tp br-1"),R(o,"class","contents flex fd-col"),je(o,"row-gap","2.5rem")},m(y,g){L(y,e,g),Gt(t,e,null),L(y,r,g),L(y,i,g),L(y,s,g),L(y,o,g),S(o,a),S(a,c),S(a,l),S(o,u),S(o,h),S(o,d),S(o,f),p=!0,m||(_=[Q(h,"click",n[3]),Q(f,"click",n[4])],m=!0)},p(y,[g]){const x={};g&1&&(x.username=y[0]),t.$set(x)},i(y){p||(ie(t.$$.fragment,y),p=!0)},o(y){he(t.$$.fragment,y),p=!1},d(y){y&&(O(e),O(r),O(i),O(s),O(o)),Kt(t),m=!1,be(_)}}}function Hv(n,e,t){let r,i,s;ve(n,Ao,l=>t(5,r=l)),ve(n,Nr,l=>t(0,i=l)),ve(n,Ne,l=>t(1,s=l));let o=r.metadata.createdAt;return[i,s,o,()=>{_e(Ne,s.props.onlyReset=!0,s),_e(Ne,s.component=zd,s)},()=>{Qe.signOut(),Hd("logOut","You logged out"),Rn()}]}class Wv extends lt{constructor(e){super(),at(this,e,Hv,Uv,Je,{})}}function jc(n){let e,t,r;return{c(){e=F("iconify-icon"),ke(e,"icon","uil:exclamation"),ke(e,"id","unseen")},m(i,s){L(i,e,s),r=!0},i(i){r||(i&&Oe(()=>{r&&(t||(t=qe(e,We,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=qe(e,We,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&O(e),i&&t&&t.end()}}}function qv(n){let e,t,r,i,s=n[3]?"Account":"Log In",o,a,c,l,u,h,d,f,p,m,_,y,g,x,v,E,A,I,C=!n[4]&&jc();return{c(){e=F("div"),t=F("div"),t.innerHTML='<iconify-icon icon="logos:discord-icon"></iconify-icon> <span>xt.ss</span>',r=z(),i=F("button"),o=K(s),a=z(),c=F("a"),c.innerHTML=`<img src="${Ia+"/ko-fi/icon.png"}" alt="Ko-fi"/> <span class="tooltip" id="left">Support Me</span>`,l=z(),u=F("button"),h=F("iconify-icon"),d=z(),f=F("span"),f.textContent="Changelog",p=z(),C&&C.c(),m=z(),_=F("div"),y=K(n[0]),g=z(),x=F("button"),x.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',R(t,"class","info flex"),R(t,"id","credits"),R(i,"class","info flex pos-rel bs svelte-ga1qhj"),R(i,"id","account"),R(c,"href","https://ko-fi.com/xt8ss"),R(c,"target","_blank"),R(c,"class","info bg-change svelte-ga1qhj"),R(c,"id","donate"),ke(h,"icon","octicon:log-16"),R(f,"class","tooltip"),R(f,"id","right"),R(u,"class","info svelte-ga1qhj"),R(u,"id","changelog"),R(_,"class","info"),R(_,"id","version"),R(x,"class","info"),R(x,"id","policy")},m(k,b){L(k,e,b),S(e,t),S(e,r),S(e,i),S(i,o),S(e,a),S(e,c),S(e,l),S(e,u),S(u,h),S(u,d),S(u,f),S(u,p),C&&C.m(u,null),S(e,m),S(e,_),S(_,y),S(e,g),S(e,x),E=!0,A||(I=[Q(i,"click",n[5]),Q(u,"click",n[6]),Q(x,"click",n[7])],A=!0)},p(k,[b]){(!E||b&8)&&s!==(s=k[3]?"Account":"Log In")&&ge(o,s),k[4]?C&&(et(),he(C,1,1,()=>{C=null}),tt()):C?b&16&&ie(C,1):(C=jc(),C.c(),ie(C,1),C.m(u,null)),(!E||b&1)&&ge(y,k[0])},i(k){E||(ie(C),k&&Oe(()=>{E&&(v||(v=qe(e,We,{duration:250},!0)),v.run(1))}),E=!0)},o(k){he(C),k&&(v||(v=qe(e,We,{duration:250},!1)),v.run(0)),E=!1},d(k){k&&O(e),C&&C.d(),k&&v&&v.end(),A=!1,be(I)}}}function zv(n,e,t){let r,i,s;ve(n,Ne,h=>t(2,r=h)),ve(n,Io,h=>t(3,i=h)),ve(n,Pr,h=>t(4,s=h));let{version:o,verifyAndSync:a}=e;const c=h=>{Ze(h),_e(Ne,r.props={verifyAndSync:a},r),_e(Ne,r.component=i?Wv:zd,r)},l=h=>{Ze(h),_e(Ne,r.component=bv,r),_e(Pr,s=!0,s)},u=h=>{Ze(h),_e(Ne,r.component=Av,r)};return n.$$set=h=>{"version"in h&&t(0,o=h.version),"verifyAndSync"in h&&t(1,a=h.verifyAndSync)},[o,a,r,i,s,c,l,u]}class Vv extends lt{constructor(e){super(),at(this,e,zv,qv,Je,{version:0,verifyAndSync:1})}}function jv(n){let e,t;return{c(){e=F("hl"),t=K(n[0])},m(r,i){L(r,e,i),S(e,t)},p(r,[i]){i&1&&ge(t,r[0])},i:te,o:te,d(r){r&&O(e)}}}function Gv(n,e,t){let{startTime:r}=e;const i=v0();let s=Date.now(),o=s+r*1e3,a=r,c=setInterval(()=>{let l=Date.now();t(0,a=r-Math.floor((l-s)/1e3)),l>=o&&(i("end"),clearTimeout(c))},50);return n.$$set=l=>{"startTime"in l&&t(1,r=l.startTime)},[a,r]}class Kv extends lt{constructor(e){super(),at(this,e,Gv,jv,Je,{startTime:1})}}function $v(n){let e,t,r,i,s,o,a,c,l,u,h,d;return u=new Kv({props:{startTime:15}}),u.$on("end",n[2]),{c(){e=F("span"),e.textContent=`It looks like you have data from previous sessions waiting to be\r
            synchronized to an account.`,t=z(),r=F("span"),r.textContent=`This is a one-time synchronization process. Using this account in\r
            another browser with previous session data will erase that data,\r
            forever.`,i=z(),s=F("span"),s.textContent="The data synchronization process will start shortly.",o=z(),a=F("span"),c=F("i"),c.textContent="Starting in",l=z(),un(u.$$.fragment),h=K("...")},m(f,p){L(f,e,p),L(f,t,p),L(f,r,p),L(f,i,p),L(f,s,p),L(f,o,p),L(f,a,p),S(a,c),S(a,l),Gt(u,a,null),S(a,h),d=!0},p:te,i(f){d||(ie(u.$$.fragment,f),d=!0)},o(f){he(u.$$.fragment,f),d=!1},d(f){f&&(O(e),O(t),O(r),O(i),O(s),O(o),O(a)),Kt(u)}}}function Yv(n){let e,t,r;return{c(){e=F("span"),e.textContent="Your data is being synchronized with your account.",t=z(),r=F("span"),r.textContent="Don't leave or close this tab!"},m(i,s){L(i,e,s),L(i,t,s),L(i,r,s)},p:te,i:te,o:te,d(i){i&&(O(e),O(t),O(r))}}}function Qv(n){let e,t,r,i,s;return{c(){e=F("span"),e.textContent="Your data has been synchronized!",t=z(),r=F("span"),r.textContent="It is recommended you refresh any other tabs of affiliated sites.",i=z(),s=F("span"),s.textContent="You can now close this notice."},m(o,a){L(o,e,a),L(o,t,a),L(o,r,a),L(o,i,a),L(o,s,a)},p:te,i:te,o:te,d(o){o&&(O(e),O(t),O(r),O(i),O(s))}}}function Xv(n){let e,t=n[0]?"Data Synchronized":n[1]?"Synchronizing Data...":"Data Sync Required",r,i,s,o,a,c,l,u;const h=[Qv,Yv,$v],d=[];function f(p,m){return p[0]?0:p[1]?1:2}return c=f(n),l=d[c]=h[c](n),{c(){e=F("span"),r=K(t),i=z(),s=F("hr"),o=z(),a=F("div"),l.c(),R(e,"class","title"),R(a,"class","contents flex fd-col rg-1 svelte-1utpa68")},m(p,m){L(p,e,m),S(e,r),L(p,i,m),L(p,s,m),L(p,o,m),L(p,a,m),d[c].m(a,null),u=!0},p(p,[m]){(!u||m&3)&&t!==(t=p[0]?"Data Synchronized":p[1]?"Synchronizing Data...":"Data Sync Required")&&ge(r,t);let _=c;c=f(p),c===_?d[c].p(p,m):(et(),he(d[_],1,1,()=>{d[_]=null}),tt(),l=d[c],l?l.p(p,m):(l=d[c]=h[c](p),l.c()),ie(l,1),l.m(a,null))},i(p){u||(ie(l),u=!0)},o(p){he(l),u=!1},d(p){p&&(O(e),O(i),O(s),O(o),O(a)),d[c].d()}}}function Jv(n,e,t){let r,i;return ve(n,si,o=>t(0,r=o)),ve(n,Bn,o=>t(1,i=o)),[r,i,()=>_e(Bn,i=!0,i)]}class Zv extends lt{constructor(e){super(),at(this,e,Jv,Xv,Je,{})}}function ey(n,{from:e,to:t},r={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*o/t.width-(t.left+o),l=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:h=f=>Math.sqrt(f)*120,easing:d=qd}=r;return{delay:u,duration:Gn(h)?h(Math.sqrt(c*c+l*l)):h,easing:d,css:(f,p)=>{const m=p*c,_=p*l,y=f+p*e.width/t.width,g=f+p*e.height/t.height;return`transform: ${s} translate(${m}px, ${_}px) scale(${y}, ${g});`}}}function Gc(n,e,t){const r=n.slice();return r[2]=e[t],r}function ty(n){const e=n.slice(),t=`<span class="font-ms smaller-fs">${Vd.exec(e[2].text)}</span>`;return e[5]=t,e}function ny(n){let e=n[2].text+"",t;return{c(){t=K(e)},m(r,i){L(r,t,i)},p(r,i){i&1&&e!==(e=r[2].text+"")&&ge(t,e)},d(r){r&&O(t)}}}function Kc(n){let e,t=n[2].text.replace(Yc,n[5])+"",r;return{c(){e=new _h(!1),r=mr(),e.a=r},m(i,s){e.m(t,i,s),L(i,r,s)},p(i,s){s&1&&t!==(t=i[2].text.replace(Yc,i[5])+"")&&e.p(t)},d(i){i&&(O(r),e.d())}}}function $c(n,e){let t,r,i,s,o,a,c,l,u,h=te,d;function f(y,g){return g&1&&(o=null),o==null&&(o=!!Vd.test(y[2].text)),o?Kc:ny}function p(y,g){return g===Kc?ty(y):y}let m=f(e,-1),_=m(p(e,m));return{key:n,first:null,c(){t=F("div"),r=F("iconify-icon"),s=z(),_.c(),a=z(),ke(r,"icon",i=e[2].icon),R(t,"class","toast flex fai-center cg-1 br-1 bs ta-center"),this.first=t},m(y,g){L(y,t,g),S(t,r),S(t,s),_.m(t,null),S(t,a),d=!0},p(y,g){e=y,(!d||g&1&&i!==(i=e[2].icon))&&ke(r,"icon",i),m===(m=f(e,g))&&_?_.p(p(e,m),g):(_.d(1),_=m(p(e,m)),_&&(_.c(),_.m(t,a)))},r(){u=t.getBoundingClientRect()},f(){yh(t),h(),g0(t,u)},a(){h(),h=vh(t,u,ey,{duration:250})},i(y){d||(y&&Oe(()=>{d&&(l&&l.end(1),c=E0(t,Bi,{}),c.start())}),d=!0)},o(y){c&&c.invalidate(),y&&(l=C0(t,e[1],{})),d=!1},d(y){y&&O(t),_.d(),y&&l&&l.end()}}}function ry(n){let e,t=[],r=new Map,i,s=Pe(n[0]);const o=a=>a[2];for(let a=0;a<s.length;a+=1){let c=Gc(n,s,a),l=o(c);r.set(l,t[a]=$c(l,c))}return{c(){e=F("div");for(let a=0;a<t.length;a+=1)t[a].c();R(e,"class","toasts centered flex fjc-center fai-center fd-col pos-abs")},m(a,c){L(a,e,c);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);i=!0},p(a,[c]){if(c&1){s=Pe(a[0]),et();for(let l=0;l<t.length;l+=1)t[l].r();t=Dh(t,c,o,1,a,s,r,e,kh,$c,null,Gc);for(let l=0;l<t.length;l+=1)t[l].a();tt()}},i(a){if(!i){for(let c=0;c<s.length;c+=1)ie(t[c]);i=!0}},o(a){for(let c=0;c<t.length;c+=1)he(t[c]);i=!1},d(a){a&&O(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}let Vd=new RegExp("(?<={).+(?=})"),Yc=/{.+} ?/;function iy(n,e,t){let r;ve(n,ko,s=>t(0,r=s));function i(s){return r.length?Bi(s):We(s)}return[r,i]}class sy extends lt{constructor(e){super(),at(this,e,iy,ry,Je,{})}}const{document:to,window:Et}=ch;function Qc(n,e,t){const r=n.slice();return r[59]=e[t][0],r[60]=e[t][1],r}function Xc(n,e,t){const r=n.slice();return r[63]=e[t][0],r[64]=e[t][1],r}function Jc(n,e,t){const r=n.slice();return r[67]=e[t],r}function Zc(n,e,t){const r=n.slice();return r[67]=e[t],r}function e0(n){let e;return{c(){e=F("link"),R(e,"rel","preload"),R(e,"as","image"),R(e,"href","backgrounds/"+n[67]+".jpg")},m(t,r){L(t,e,r)},p:te,d(t){t&&O(e)}}}function t0(n){let e,t;return{c(){e=F("img"),Fi(e.src,t="backgrounds/"+n[67]+".jpg")||R(e,"src",t),R(e,"alt",""),R(e,"class","background svelte-1mxxea7"),$e(e,"active",n[12]==n[67])},m(r,i){L(r,e,i)},p(r,i){i[0]&1052672&&$e(e,"active",r[12]==r[67])},d(r){r&&O(e)}}}function n0(n){let e,t,r,i;return{c(){e=F("img"),Fi(e.src,t="backgrounds/cursedCreation.jpg")||R(e,"src",t),R(e,"alt",""),R(e,"class","background active svelte-1mxxea7"),je(e,"object-fit","fill")},m(s,o){L(s,e,o),i=!0},i(s){i||(s&&Oe(()=>{i&&(r||(r=qe(e,We,{duration:3500},!0)),r.run(1))}),i=!0)},o(s){s&&(r||(r=qe(e,We,{duration:3500},!1)),r.run(0)),i=!1},d(s){s&&O(e),s&&r&&r.end()}}}function r0(n){let e,t,r=Math.floor(n[18][n[2]]*100)+"",i,s,o,a;return{c(){e=F("span"),t=K("Zoom: "),i=K(r),s=F("b"),s.textContent="%",R(e,"class","info"),R(e,"id","zoomLevel")},m(c,l){L(c,e,l),S(e,t),S(e,i),S(e,s),a=!0},p(c,l){(!a||l[0]&4)&&r!==(r=Math.floor(c[18][c[2]]*100)+"")&&ge(i,r)},i(c){a||(c&&Oe(()=>{a&&(o||(o=qe(e,We,{duration:150},!0)),o.run(1))}),a=!0)},o(c){c&&(o||(o=qe(e,We,{duration:150},!1)),o.run(0)),a=!1},d(c){c&&O(e),c&&o&&o.end()}}}function i0(n){let e,t;return e=new Vv({props:{version:Do,verifyAndSync:n[17]}}),{c(){un(e.$$.fragment)},m(r,i){Gt(e,r,i),t=!0},p:te,i(r){t||(ie(e.$$.fragment,r),t=!0)},o(r){he(e.$$.fragment,r),t=!1},d(r){Kt(e,r)}}}function s0(n){let e,t,r,i,s,o,a,c,l,u=n[9]&&!n[8]&&o0(n),h=Pe(Object.entries(n[24])),d=[];for(let f=0;f<h.length;f+=1)d[f]=c0(Qc(n,h,f));return c=new sy({}),{c(){e=F("main"),t=F("i"),t.textContent='"Need to get somewhere?"',r=z(),u&&u.c(),i=z(),s=F("div");for(let f=0;f<d.length;f+=1)d[f].c();a=z(),un(c.$$.fragment),R(t,"class","caption flex fjc-center font-hg br-1 ta-center svelte-1mxxea7"),$e(t,"highlighted",n[10]),$e(t,"bs",n[10]),R(s,"class","content flex fd-col fai-center ta-center svelte-1mxxea7"),R(e,"class","flex fd-col fai-center svelte-1mxxea7"),$e(e,"portrait",n[5])},m(f,p){L(f,e,p),S(e,t),S(e,r),u&&u.m(e,null),S(e,i),S(e,s);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(s,null);n[45](s),L(f,a,p),Gt(c,f,p),l=!0},p(f,p){if((!l||p[0]&1024)&&$e(t,"highlighted",f[10]),(!l||p[0]&1024)&&$e(t,"bs",f[10]),f[9]&&!f[8]?u?(u.p(f,p),p[0]&768&&ie(u,1)):(u=o0(f),u.c(),ie(u,1),u.m(e,i)):u&&(et(),he(u,1,1,()=>{u=null}),tt()),p[0]&56672256){h=Pe(Object.entries(f[24]));let m;for(m=0;m<h.length;m+=1){const _=Qc(f,h,m);d[m]?d[m].p(_,p):(d[m]=c0(_),d[m].c(),d[m].m(s,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=h.length}(!l||p[0]&32)&&$e(e,"portrait",f[5])},i(f){l||(ie(u),f&&Oe(()=>{l&&(o||(o=qe(e,We,{duration:1e3,delay:250},!0)),o.run(1))}),ie(c.$$.fragment,f),l=!0)},o(f){he(u),f&&(o||(o=qe(e,We,{duration:1e3,delay:250},!1)),o.run(0)),he(c.$$.fragment,f),l=!1},d(f){f&&(O(e),O(a)),u&&u.d(),cn(d,f),n[45](null),f&&o&&o.end(),Kt(c,f)}}}function o0(n){let e,t,r,i,s,o;return{c(){e=F("button"),e.innerHTML='<iconify-icon icon="ep:arrow-down-bold"></iconify-icon>',R(e,"class","flex pos-abs br-1 no-bg svelte-1mxxea7"),R(e,"id","arrow")},m(a,c){L(a,e,c),i=!0,s||(o=Q(e,"click",n[38]),s=!0)},p:te,i(a){i||(a&&Oe(()=>{i&&(r&&r.end(1),t=E0(e,We,{duration:1e3}),t.start())}),i=!0)},o(a){t&&t.invalidate(),a&&(r=C0(e,We,{duration:100})),i=!1},d(a){a&&O(e),a&&r&&r.end(),s=!1,o()}}}function a0(n){let e,t=Pe(Object.entries(n[60])),r=[];for(let i=0;i<t.length;i+=1)r[i]=l0(Xc(n,t,i));return{c(){e=F("div");for(let i=0;i<r.length;i+=1)r[i].c();R(e,"class","pages flex fw rg-1 cg-1 fjc-center font-hg svelte-1mxxea7")},m(i,s){L(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&56639488){t=Pe(Object.entries(i[60]));let o;for(o=0;o<t.length;o+=1){const a=Xc(i,t,o);r[o]?r[o].p(a,s):(r[o]=l0(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&O(e),cn(r,i)}}}function oy(n){let e;return{c(){e=F("div"),e.textContent=`${n[64].desc}`,R(e,"class","pageDesc flex fjc-center fai-center svelte-1mxxea7")},m(t,r){L(t,e,r)},p:te,d(t){t&&O(e)}}}function l0(n){let e,t,r,i,s,o,a,c,l,u,h,d,f=n[14]?"Copied!":"Copy Link",p,m,_,y,g;function x(...k){return n[40](n[64],...k)}let v=n[64].desc&&oy(n);function E(){return n[41](n[59],n[63],n[64])}function A(){return n[42](n[59],n[63],n[64])}function I(){return n[43](n[63])}function C(){return n[44](n[63])}return{c(){e=F("a"),t=F("div"),r=F("div"),i=F("img"),o=z(),a=F("span"),a.textContent=`${n[63]}`,c=z(),l=F("button"),u=F("iconify-icon"),h=z(),d=F("span"),p=K(f),m=z(),v&&v.c(),_=z(),Fi(i.src,s=n[59]==="affiliations"?`${n[64].link}/favicon.png`:`icons/${n[64].code}.png`)||R(i,"src",s),R(i,"alt",""),R(i,"class","svelte-1mxxea7"),R(a,"id","pageTitle"),R(a,"class","svelte-1mxxea7"),$e(a,"smaller-fs",n[63].length>=30),R(r,"class","flex fjc-center fai-center svelte-1mxxea7"),R(r,"id","pageMainInfo"),ke(u,"icon","mingcute:copy-line"),R(d,"class","tooltip"),R(d,"id","right"),R(l,"class","flex fjc-center fai-center pos-rel br-1 svelte-1mxxea7"),R(l,"id","copyBtn"),R(t,"class","pageHeader flex fjc-center fai-center br-1 svelte-1mxxea7"),R(e,"href",n[64].link),R(e,"target","_blank"),R(e,"class","page flex fd-col br-1 bg-change svelte-1mxxea7")},m(k,b){L(k,e,b),S(e,t),S(t,r),S(r,i),S(r,o),S(r,a),S(t,c),S(t,l),S(l,u),S(l,h),S(l,d),S(d,p),S(e,m),v&&v.m(e,null),S(e,_),y||(g=[Q(l,"click",x),Q(e,"mouseenter",E),Q(e,"focusin",A),Q(e,"mouseleave",I),Q(e,"focusout",C)],y=!0)},p(k,b){n=k,b[0]&16384&&f!==(f=n[14]?"Copied!":"Copy Link")&&ge(p,f),n[64].desc&&v.p(n,b)},d(k){k&&O(e),v&&v.d(),y=!1,be(g)}}}function c0(n){let e,t,r,i,s,o,a,c,l,u;function h(...f){return n[39](n[59],...f)}let d=n[15][n[59]]&&a0(n);return{c(){e=F("div"),t=F("button"),r=F("iconify-icon"),s=z(),o=F("span"),o.textContent=`${hv(n[59])}`,a=z(),d&&d.c(),c=z(),ke(r,"icon",i="ep:arrow-"+(n[15][n[59]]?"down":"right")+"-bold"),ke(r,"class","toggleArrowIcon pos-abs smaller-fs svelte-1mxxea7"),R(t,"class","categoryTitle flex fjc-center fai-center pos-rel font-rf br-1 svelte-1mxxea7"),R(e,"class","category border-tp br-1 bs svelte-1mxxea7")},m(f,p){L(f,e,p),S(e,t),S(t,r),S(t,s),S(t,o),S(e,a),d&&d.m(e,null),S(e,c),l||(u=Q(t,"click",h),l=!0)},p(f,p){n=f,p[0]&32768&&i!==(i="ep:arrow-"+(n[15][n[59]]?"down":"right")+"-bold")&&ke(r,"icon",i),n[15][n[59]]?d?d.p(n,p):(d=a0(n),d.c(),d.m(e,c)):d&&(d.d(1),d=null)},d(f){f&&O(e),d&&d.d(),l=!1,u()}}}function u0(n){let e,t,r,i,s,o,a,c;const l=[{prompted:!0},n[3].props];var u=n[3].component;function h(d,f){let p={};for(let m=0;m<l.length;m+=1)p=Un(p,l[m]);return f!==void 0&&f[0]&8&&(p=Un(p,Wn(l,[l[0],ro(d[3].props)]))),{props:p}}return u&&(r=Ma(u,h(n))),{c(){e=F("div"),t=F("div"),r&&un(r.$$.fragment),R(t,"class","flex fd-col border-tp br-1 bs"),R(e,"class","promptCont font-hg")},m(d,f){L(d,e,f),S(e,t),r&&Gt(r,t,null),n[47](e),o=!0,a||(c=[Q(t,"introstart",n[46]),Q(e,"click",n[48])],a=!0)},p(d,f){if(f[0]&8&&u!==(u=d[3].component)){if(r){et();const p=r;he(p.$$.fragment,1,0,()=>{Kt(p,1)}),tt()}u?(r=Ma(u,h(d,f)),un(r.$$.fragment),ie(r.$$.fragment,1),Gt(r,t,null)):r=null}else if(u){const p=f[0]&8?Wn(l,[l[0],ro(d[3].props)]):{};r.$set(p)}},i(d){o||(r&&ie(r.$$.fragment,d),d&&Oe(()=>{o&&(i||(i=qe(t,Bi,{duration:150},!0)),i.run(1))}),d&&Oe(()=>{o&&(s||(s=qe(e,We,{duration:100},!0)),s.run(1))}),o=!0)},o(d){r&&he(r.$$.fragment,d),d&&(i||(i=qe(t,Bi,{duration:150},!1)),i.run(0)),d&&(s||(s=qe(e,We,{duration:100},!1)),s.run(0)),o=!1},d(d){d&&O(e),r&&Kt(r),d&&i&&i.end(),n[47](null),d&&s&&s.end(),a=!1,be(c)}}}function ay(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,p,m,_,y;Oe(n[35]);let g=Pe([...n[20],"cursedCreation"]),x=[];for(let w=0;w<g.length;w+=1)x[w]=e0(Zc(n,g,w));let v=Pe(n[20]),E=[];for(let w=0;w<v.length;w+=1)E[w]=t0(Jc(n,v,w));let A=n[13]&&n0(),I=n[11]&&r0(n),C=n[8]&&i0(n),k=n[4]&&s0(n),b=n[3].component&&u0(n);return{c(){e=z();for(let w=0;w<x.length;w+=1)x[w].c();t=mr(),r=z(),i=F("div"),s=F("audio"),a=z(),c=F("div");for(let w=0;w<E.length;w+=1)E[w].c();l=z(),A&&A.c(),u=z(),I&&I.c(),h=z(),C&&C.c(),d=z(),k&&k.c(),f=z(),b&&b.c(),p=mr(),Fi(s.src,o=Ia+"/audios/select.mp3")||R(s,"src",o),R(c,"class","backgrounds")},m(w,T){L(w,e,T);for(let D=0;D<x.length;D+=1)x[D]&&x[D].m(to.head,null);S(to.head,t),L(w,r,T),L(w,i,T),S(i,s),n[37](s),L(w,a,T),L(w,c,T);for(let D=0;D<E.length;D+=1)E[D]&&E[D].m(c,null);S(c,l),A&&A.m(c,null),L(w,u,T),I&&I.m(w,T),L(w,h,T),C&&C.m(w,T),L(w,d,T),k&&k.m(w,T),L(w,f,T),b&&b.m(w,T),L(w,p,T),m=!0,_||(y=[Q(Et,"storage",n[29]),Q(Et,"scroll",n[30]),Q(Et,"unload",n[31]),Q(Et,"wheel",n[32],{passive:!1}),Q(Et,"click",n[33]),Q(Et,"keydown",n[34]),Q(Et,"resize",n[35]),Q(to,"visibilitychange",n[36])],_=!0)},p(w,T){if(T[0]&1048576){g=Pe([...w[20],"cursedCreation"]);let D;for(D=0;D<g.length;D+=1){const q=Zc(w,g,D);x[D]?x[D].p(q,T):(x[D]=e0(q),x[D].c(),x[D].m(t.parentNode,t))}for(;D<x.length;D+=1)x[D].d(1);x.length=g.length}if(T[0]&1052672){v=Pe(w[20]);let D;for(D=0;D<v.length;D+=1){const q=Jc(w,v,D);E[D]?E[D].p(q,T):(E[D]=t0(q),E[D].c(),E[D].m(c,l))}for(;D<E.length;D+=1)E[D].d(1);E.length=v.length}w[13]?A?T[0]&8192&&ie(A,1):(A=n0(),A.c(),ie(A,1),A.m(c,null)):A&&(et(),he(A,1,1,()=>{A=null}),tt()),w[11]?I?(I.p(w,T),T[0]&2048&&ie(I,1)):(I=r0(w),I.c(),ie(I,1),I.m(h.parentNode,h)):I&&(et(),he(I,1,1,()=>{I=null}),tt()),w[8]?C?(C.p(w,T),T[0]&256&&ie(C,1)):(C=i0(w),C.c(),ie(C,1),C.m(d.parentNode,d)):C&&(et(),he(C,1,1,()=>{C=null}),tt()),w[4]?k?(k.p(w,T),T[0]&16&&ie(k,1)):(k=s0(w),k.c(),ie(k,1),k.m(f.parentNode,f)):k&&(et(),he(k,1,1,()=>{k=null}),tt()),w[3].component?b?(b.p(w,T),T[0]&8&&ie(b,1)):(b=u0(w),b.c(),ie(b,1),b.m(p.parentNode,p)):b&&(et(),he(b,1,1,()=>{b=null}),tt())},i(w){m||(ie(A),ie(I),ie(C),ie(k),ie(b),m=!0)},o(w){he(A),he(I),he(C),he(k),he(b),m=!1},d(w){w&&(O(e),O(r),O(i),O(a),O(c),O(u),O(h),O(d),O(f),O(p)),cn(x,w),O(t),n[37](null),cn(E,w),A&&A.d(),I&&I.d(w),C&&C.d(w),k&&k.d(w),b&&b.d(w),_=!1,be(y)}}}let Do="v1.2.4";function ly(n,e,t){let r,i,s,o,a,c,l,u,h;ve(n,si,B=>t(51,r=B)),ve(n,Bn,B=>t(27,i=B)),ve(n,Ne,B=>t(3,s=B)),ve(n,Io,B=>t(28,o=B)),ve(n,Ao,B=>t(52,a=B)),ve(n,Nr,B=>t(53,c=B)),ve(n,Pr,B=>t(54,l=B)),ve(n,oi,B=>t(55,u=B)),ve(n,Zs,B=>t(16,h=B));let d=!1,f=sh();function p(){if(i||f)return setTimeout(()=>{_e(Ne,s.preventClosing=!0,s),_e(Ne,s.component=Zv,s)},i?0:300),!0}let m=CSS.supports("height: 100dvh"),_,y,g,x,v,E=!1,A=!1,I=!1;history.scrollRestoration="manual";let C="";Eh(()=>{t(4,d=!0),_e(Bn,i=!!new URLSearchParams(location.search).get("dataSync"),i),i&&!f&&(_e(Bn,i=!1,i),Rc()),P_(Qe,async()=>{Rn(),_e(Ao,a=Qe.currentUser,a),_e(Io,o=!!Ut(a),o),_e(Nr,c=o?a.displayName||c:"",c),o?(C=c,Hd("logIn",`Succesfully logged in as {${c}}`),!u&&p()):C&&t(26,f=!1)})});let k=[.45,.6,.75,.85,.95,1,1.1,1.25,1.5],b=k.indexOf(1),w=!1,T;function D(){T=setTimeout(()=>{t(11,w=!1)},750)}function q(){clearTimeout(T),t(11,w=!0),D()}let V=["armory","calculator","clock","discord","frontierdle","frontierguessr","giftTrees","hub","resources","roblox","twitter","wiki"],W="hub",j=!1;function ne(B,Z,Be){let $r=Math.floor(Math.random()*1001);Z==="Glitches"&&$r===173?t(13,j=!0):t(12,W=V.includes(Be)?Be:B)}function ae(B){t(12,W="hub"),t(13,j=!1)}localStorage.getItem("fh-version")!=Do&&(_e(Pr,l=!1,l),localStorage.setItem("fh-version",Do));function re(){t(5,g=y>_),document.documentElement.style.fontSize=`${(g?_/y/1.35:.75)*k[b]}${m?"d":""}vh`}setTimeout(()=>{E||t(9,A=!0)},3e3);let N=!1,M={"Official Links":{"Roblox Game":{desc:"The action adventure game where you can fight monsters, fish, gather rare collectibles, hunt birds and more!",link:"https://www.roblox.com/games/510411669/Fantastic-Frontier",code:"roblox"},"Fandom Wiki":{desc:"The main documentation center where players can find and share valuable information with each other.",link:"https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki",code:"wiki"},"Discord Server":{desc:"Where majority of the community resides to discuss, exchange feedback, and keep themselves updated.",link:"https://discord.gg/ff",code:"discord"},"Twitter: Spectrabox":{link:"https://twitter.com/SpectraboxRBLX",code:"twitter"},"Twitter: Gorbachelli":{link:"https://twitter.com/gorbachelli",code:"twitter"}},affiliations:{"Fantastic Armory":{desc:"Equipment and weapon index - search, filter, sort, and track all sorts of gear to find what you want.",link:"https://xt8ss.github.io/fantastic-armory/",code:"armory"},"Fantastic Calculator":{desc:"Build maker and planner - mix and match equipment, and see weapon calculations in real time.",link:"https://xt8ss.github.io/fantastic-calculator/",code:"calculator"},"Frontier Clock":{desc:"Time and event tracker - know NPC schedules and never miss another day/night cycle again.",link:"https://xt8ss.github.io/frontier-clock/",code:"clock"},Frontierdle:{desc:"Gear guessing minigame - find and pinpoint the exact gear of the day by following different clues.",link:"https://xt8ss.github.io/frontierdle/",code:"frontierdle"},Frontierguessr:{desc:"Location guessing minigame - explore and locate yourself around the Frontier using various landmarks.",link:"https://xt8ss.github.io/frontierguessr/",code:"frontierguessr"},"Gift Tree Calculator":{desc:"Profit calculator and visualizer for Gift Tree harvesting.",link:"https://xt8ss.github.io/gift-tree-calculator/",code:"giftTrees"}},resources:{"Average Item Obtainment Time":{link:"https://docs.google.com/document/d/1iLfGrtEzzgEQ7JZ0Ud_keQJue8URkKJQuoAY_DVSU2Y",code:"docs"},"Build List":{link:"https://docs.google.com/document/d/1H9HXoExCDVfXx15LQ4Te-2tTjrLFB-XCbMmx44Ynld4",code:"docs"},"Fish Reeling Times":{link:"https://docs.google.com/spreadsheets/d/15FXhST2YRf3i3OxMtEiq56_es_vBtYfrRpI9AfGO4to",code:"docs"},Glitches:{link:"https://docs.google.com/document/d/1-WAkvUDJ7mRNt9aDr0OsmZxjKuPtlI2dKZJAo7OMTc8",code:"docs"},"Max Stat List":{link:"https://docs.google.com/document/d/15vwSRojTqZ8LI09Wq4dvGF1kSTPmH2_gECQvwlSFki8",code:"docs"},"Deep Sea Treasure Chest Rewards":{link:"https://pastebin.com/edEuETpw",code:"pastebin"},"Deli Rewards":{link:"https://pastebin.com/4WiuqQx1",code:"pastebin"},"Firefly Quest & Otherworld Present/Tower Rewards":{link:"https://pastebin.com/BhkSFqsP",code:"pastebin"},"Guttermouth Rewards":{link:"https://pastebin.com/j2C9sdWq",code:"pastebin"},"Items that do not Drop upon Death":{link:"https://pastebin.com/fzXzHdLu",code:"pastebin"},"Ratboy's Nightmare Dungeon Rewards":{link:"https://pastebin.com/p3XvcNw0",code:"pastebin"},"The Lost Rewards":{link:"https://pastebin.com/dUfLpkCY",code:"pastebin"},"A Special Development Announcement":{link:"https://devforum.roblox.com/t/fantastic-frontier-a-special-development-announcement/1490518",code:"devforum"},"Development Update 12/27/2021":{link:"https://devforum.roblox.com/t/fantastic-frontier-development-update-12272021/1603633",code:"devforum"},"Development Update 2/28/2022":{link:"https://devforum.roblox.com/t/fantastic-frontier-development-update-2282022/1685471",code:"devforum"},"'Pic of the Week': Going Dark":{link:"https://devforum.roblox.com/t/fantastic-frontier-pic-of-the-week-going-dark/1859496",code:"devforum"},"End of Year 2022 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2022-progress-post/2092363",code:"devforum"},"End of Year 2023 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2023-progress-post/2772902",code:"devforum"},"End of Year 2024 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2024-progress-post/3329820",code:"devforum"}}},U=Object.fromEntries(Object.keys(M).map(B=>[B,!0]));function P(B){t(14,N=!0),navigator.clipboard.writeText(B),setTimeout(()=>t(14,N=!1),1500)}async function ue(){await oh(c.toLowerCase(),a.uid),setTimeout(()=>{_e(si,r=!0,r),_e(Ne,s.preventClosing=!1,s),Rc()},3e3)}const ce=B=>{/^f[a-z]{1,2}-/.test(B.key)&&localStorage.setItem(B.key,B.oldValue)},ye=B=>{let Z=y-window.scrollY<=y*.75;!E&&Z&&t(8,E=!0),t(10,I=Z)},Y=()=>window.scrollTo(0,0),xt=B=>{let Z=B.wheelDeltaY;if(B.ctrlKey){if(B.preventDefault(),k[b]==k[0]&&Z<0||k[b]==k[k.length-1]&&Z>0)return;Z>0?t(2,b++,b):t(2,b--,b),q()}},ct=B=>{if(B.target instanceof HTMLElement){let Z=B.target.closest("button");Z&&!Z.classList.contains("no-sound")&&(_e(Zs,h.select.currentTime=0,h),h.select.play())}},en=B=>{let Z=["Enter"," "],Be=["BUTTON","INPUT","A"];B.ctrlKey&&(B.key=="-"||B.key=="+"||B.code=="Equal"||B.key=="0")&&(B.preventDefault(),(B.key=="+"||B.code=="Equal")&&k[b]!=k[k.length-1]?t(2,b++,b):B.key=="-"&&k[b]!=k[0]?t(2,b--,b):B.key=="0"&&k[b]!=1&&t(2,b=k.indexOf(1)),q()),s.component&&x&&(!B.ctrlKey&&!B.shiftKey&&!B.altKey&&(B.key=="Escape"||Z.includes(B.key)&&!Be.includes(document.activeElement.tagName))?Rn():setTimeout(()=>{B.key=="Tab"&&!x.contains(document.activeElement)&&Rn()}))};function gt(){t(1,y=Et.outerHeight),t(0,_=Et.outerWidth)}const Me=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(1,y=window.outerHeight),t(0,_=window.outerWidth),re()})};function Te(B){dr[B?"unshift":"push"](()=>{h.select=B,Zs.set(h)})}const Tt=()=>{t(9,A=!1),v.scrollIntoView({behavior:"smooth"})},mt=(B,Z)=>{Ze(Z),t(15,U[B]=!U[B],U)},St=(B,Z)=>{Z.stopPropagation(),Z.preventDefault(),Ze(Z),P(B.link)},vt=(B,Z,Be)=>ne(B,Z,Be.code),tn=(B,Z,Be)=>ne(B,Z,Be.code),yt=B=>ae(),Ue=B=>ae();function Re(B){dr[B?"unshift":"push"](()=>{v=B,t(7,v)})}const Ye=()=>{let B=x.querySelector("a, button, input");B&&B.focus()};function Rt(B){dr[B?"unshift":"push"](()=>{x=B,t(6,x)})}const bn=B=>{x.children[0].contains(B.target)||Rn()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(y||_||b)&&re(),n.$$.dirty[0]&8&&s.component===null&&setTimeout(()=>{_e(Bn,i=!1,i),_e(si,r=!1,r)},100),n.$$.dirty[0]&469762048&&o&&i&&f&&ue()},[_,y,b,s,d,g,x,v,E,A,I,w,W,j,N,U,h,p,k,q,V,ne,ae,re,M,P,f,i,o,ce,ye,Y,xt,ct,en,gt,Me,Te,Tt,mt,St,vt,tn,yt,Ue,Re,Ye,Rt,bn]}class cy extends lt{constructor(e){super(),at(this,e,ly,ay,Je,{},null,[-1,-1,-1])}}new cy({target:document.body});
