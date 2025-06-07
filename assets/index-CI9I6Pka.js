var nd=Object.defineProperty;var rd=(n,e,t)=>e in n?nd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Rt=(n,e,t)=>rd(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ae(){}const Pr=n=>n;function js(n,e){for(const t in e)n[t]=e[t];return n}function Du(n){return n()}function Ca(){return Object.create(null)}function nt(n){n.forEach(Du)}function zn(n){return typeof n=="function"}function kt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let jr;function T0(n,e){return n===e?!0:(jr||(jr=document.createElement("a")),jr.href=e,n===jr.href)}function id(n){return Object.keys(n).length===0}function Bu(n,...e){if(n==null){for(const r of e)r(void 0);return ae}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function sd(n){let e;return Bu(n,t=>e=t)(),e}function We(n,e,t){n.$$.on_destroy.push(Bu(e,t))}function Re(n,e,t){return n.set(t),e}const wu=typeof window<"u";let R0=wu?()=>window.performance.now():()=>Date.now(),Co=wu?n=>requestAnimationFrame(n):ae;const Fn=new Set;function Fu(n){Fn.forEach(e=>{e.c(n)||(Fn.delete(e),e.f())}),Fn.size!==0&&Co(Fu)}function N0(n){let e;return Fn.size===0&&Co(Fu),{promise:new Promise(t=>{Fn.add(e={c:n,f:t})}),abort(){Fn.delete(e)}}}const od=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function V(n,e){n.appendChild(e)}function Iu(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function ad(n){const e=W("style");return e.textContent="/* empty */",cd(Iu(n),e),e.sheet}function cd(n,e){return V(n.head||n,e),e.sheet}function G(n,e,t){n.insertBefore(e,t||null)}function q(n){n.parentNode&&n.parentNode.removeChild(n)}function Rn(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function W(n){return document.createElement(n)}function ld(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Oe(n){return document.createTextNode(n)}function ee(){return Oe(" ")}function s0(){return Oe("")}function De(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function z(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Dt(n,e,t){const r=e.toLowerCase();r in n?n[r]=typeof n[r]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:z(n,e,t)}function ud(n){return Array.from(n.childNodes)}function St(n,e){e=""+e,n.data!==e&&(n.data=e)}function fd(n,e,t,r){n.style.setProperty(e,t,"")}function Et(n,e,t){n.classList.toggle(e,!!t)}function ku(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}class hd{constructor(e=!1){Rt(this,"is_svg",!1);Rt(this,"e");Rt(this,"n");Rt(this,"t");Rt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=ld(t.nodeName):this.e=W(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)G(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(q)}}function ya(n,e){return new n(e)}const o0=new Map;let a0=0;function dd(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function xd(n,e){const t={stylesheet:ad(e),rules:{}};return o0.set(n,t),t}function gr(n,e,t,r,i,s,o,c=0){const l=16.666/r;let a=`{
`;for(let _=0;_<=1;_+=l){const E=e+(t-e)*s(_);a+=_*100+`%{${o(E,1-E)}}
`}const u=a+`100% {${o(t,1-t)}}
}`,x=`__svelte_${dd(u)}_${c}`,f=Iu(n),{stylesheet:h,rules:d}=o0.get(f)||xd(f,n);d[x]||(d[x]=!0,h.insertRule(`@keyframes ${x} ${u}`,h.cssRules.length));const g=n.style.animation||"";return n.style.animation=`${g?`${g}, `:""}${x} ${r}ms linear ${i}ms 1 both`,a0+=1,x}function mr(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),a0-=i,a0||pd())}function pd(){Co(()=>{a0||(o0.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&q(e)}),o0.clear())})}function _d(n,e,t,r){if(!e)return ae;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ae;const{delay:s=0,duration:o=300,easing:c=Pr,start:l=R0()+s,end:a=l+o,tick:u=ae,css:x}=t(n,{from:e,to:i},r);let f=!0,h=!1,d;function g(){x&&(d=gr(n,0,1,o,s,c,x)),s||(h=!0)}function _(){x&&mr(n,d),f=!1}return N0(E=>{if(!h&&E>=l&&(h=!0),h&&E>=a&&(u(1,0),_()),!f)return!1;if(h){const p=E-l,v=0+1*c(p/o);u(v,1-v)}return!0}),g(),u(0,1),_}function vd(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=r,Su(n,i)}}function Su(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(n),i=r.transform==="none"?"":r.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Er;function ur(n){Er=n}function Tu(){if(!Er)throw new Error("Function called outside component initialization");return Er}function gd(n){Tu().$$.on_mount.push(n)}function md(){const n=Tu();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const s=ku(e,t,{cancelable:r});return i.slice().forEach(o=>{o.call(n,s)}),!s.defaultPrevented}return!0}}const bn=[],fr=[];let In=[];const Aa=[],Ed=Promise.resolve();let Ks=!1;function Cd(){Ks||(Ks=!0,Ed.then(Ru))}function Le(n){In.push(n)}const hi=new Set;let Cn=0;function Ru(){if(Cn!==0)return;const n=Er;do{try{for(;Cn<bn.length;){const e=bn[Cn];Cn++,ur(e),yd(e.$$)}}catch(e){throw bn.length=0,Cn=0,e}for(ur(null),bn.length=0,Cn=0;fr.length;)fr.pop()();for(let e=0;e<In.length;e+=1){const t=In[e];hi.has(t)||(hi.add(t),t())}In.length=0}while(bn.length);for(;Aa.length;)Aa.pop()();Ks=!1,hi.clear(),ur(n)}function yd(n){if(n.fragment!==null){n.update(),nt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Le)}}function Ad(n){const e=[],t=[];In.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),In=e}let sr;function yo(){return sr||(sr=Promise.resolve(),sr.then(()=>{sr=null})),sr}function sn(n,e,t){n.dispatchEvent(ku(`${e?"intro":"outro"}${t}`))}const Zr=new Set;let ft;function ot(){ft={r:0,c:[],p:ft}}function at(){ft.r||nt(ft.c),ft=ft.p}function re(n,e){n&&n.i&&(Zr.delete(n),n.i(e))}function ve(n,e,t,r){if(n&&n.o){if(Zr.has(n))return;Zr.add(n),ft.c.push(()=>{Zr.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const Ao={duration:0};function Nu(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,c,l=0;function a(){o&&mr(n,o)}function u(){const{delay:f=0,duration:h=300,easing:d=Pr,tick:g=ae,css:_}=i||Ao;_&&(o=gr(n,0,1,h,f,d,_,l++)),g(0,1);const E=R0()+f,p=E+h;c&&c.abort(),s=!0,Le(()=>sn(n,!0,"start")),c=N0(v=>{if(s){if(v>=p)return g(1,0),sn(n,!0,"end"),a(),s=!1;if(v>=E){const m=d((v-E)/h);g(m,1-m)}}return s})}let x=!1;return{start(){x||(x=!0,mr(n),zn(i)?(i=i(r),yo().then(u)):u())},invalidate(){x=!1},end(){s&&(a(),s=!1)}}}function Pu(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const c=ft;c.r+=1;let l;function a(){const{delay:u=0,duration:x=300,easing:f=Pr,tick:h=ae,css:d}=i||Ao;d&&(o=gr(n,1,0,x,u,f,d));const g=R0()+u,_=g+x;Le(()=>sn(n,!1,"start")),"inert"in n&&(l=n.inert,n.inert=!0),N0(E=>{if(s){if(E>=_)return h(0,1),sn(n,!1,"end"),--c.r||nt(c.c),!1;if(E>=g){const p=f((E-g)/x);h(1-p,p)}}return s})}return zn(i)?yo().then(()=>{i=i(r),a()}):a(),{end(u){u&&"inert"in n&&(n.inert=l),u&&i.tick&&i.tick(1,0),s&&(o&&mr(n,o),s=!1)}}}function qe(n,e,t,r){let s=e(n,t,{direction:"both"}),o=r?0:1,c=null,l=null,a=null,u;function x(){a&&mr(n,a)}function f(d,g){const _=d.b-o;return g*=Math.abs(_),{a:o,b:d.b,d:_,duration:g,start:d.start,end:d.start+g,group:d.group}}function h(d){const{delay:g=0,duration:_=300,easing:E=Pr,tick:p=ae,css:v}=s||Ao,m={start:R0()+g,b:d};d||(m.group=ft,ft.r+=1),"inert"in n&&(d?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),c||l?l=m:(v&&(x(),a=gr(n,o,d,_,g,E,v)),d&&p(0,1),c=f(m,_),Le(()=>sn(n,d,"start")),N0(A=>{if(l&&A>l.start&&(c=f(l,_),l=null,sn(n,c.b,"start"),v&&(x(),a=gr(n,o,c.b,c.duration,0,E,s.css))),c){if(A>=c.end)p(o=c.b,1-o),sn(n,c.b,"end"),l||(c.b?x():--c.group.r||nt(c.group.c)),c=null;else if(A>=c.start){const D=A-c.start;o=c.a+c.d*E(D/c.duration),p(o,1-o)}}return!!(c||l)}))}return{run(d){zn(s)?yo().then(()=>{s=s({direction:d?"in":"out"}),h(d)}):h(d)},end(){x(),c=l=null}}}function $e(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function bd(n,e){ve(n,1,1,()=>{e.delete(n.key)})}function Dd(n,e){n.f(),bd(n,e)}function Bd(n,e,t,r,i,s,o,c,l,a,u,x){let f=n.length,h=s.length,d=f;const g={};for(;d--;)g[n[d].key]=d;const _=[],E=new Map,p=new Map,v=[];for(d=h;d--;){const b=x(i,s,d),B=t(b);let k=o.get(B);k?v.push(()=>k.p(b,e)):(k=a(B,b),k.c()),E.set(B,_[d]=k),B in g&&p.set(B,Math.abs(d-g[B]))}const m=new Set,A=new Set;function D(b){re(b,1),b.m(c,u),o.set(b.key,b),u=b.first,h--}for(;f&&h;){const b=_[h-1],B=n[f-1],k=b.key,C=B.key;b===B?(u=b.first,f--,h--):E.has(C)?!o.has(k)||m.has(k)?D(b):A.has(C)?f--:p.get(k)>p.get(C)?(A.add(k),D(b)):(m.add(C),f--):(l(B,o),f--)}for(;f--;){const b=n[f];E.has(b.key)||l(b,o)}for(;h;)D(_[h-1]);return nt(v),_}function Ys(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],c=e[s];if(c){for(const l in o)l in c||(r[l]=1);for(const l in c)i[l]||(t[l]=c[l],i[l]=1);n[s]=c}else for(const l in o)i[l]=1}for(const o in r)o in t||(t[o]=void 0);return t}function Xs(n){return typeof n=="object"&&n!==null?n:{}}function Nn(n){n&&n.c()}function an(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),Le(()=>{const s=n.$$.on_mount.map(Du).filter(zn);n.$$.on_destroy?n.$$.on_destroy.push(...s):nt(s),n.$$.on_mount=[]}),i.forEach(Le)}function cn(n,e){const t=n.$$;t.fragment!==null&&(Ad(t.after_update),nt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function wd(n,e){n.$$.dirty[0]===-1&&(bn.push(n),Cd(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Yt(n,e,t,r,i,s,o=null,c=[-1]){const l=Er;ur(n);const a=n.$$={fragment:null,ctx:[],props:s,update:ae,not_equal:i,bound:Ca(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ca(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};o&&o(a.root);let u=!1;if(a.ctx=t?t(n,e.props||{},(x,f,...h)=>{const d=h.length?h[0]:f;return a.ctx&&i(a.ctx[x],a.ctx[x]=d)&&(!a.skip_bound&&a.bound[x]&&a.bound[x](d),u&&wd(n,x)),f}):[],a.update(),u=!0,nt(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const x=ud(e.target);a.fragment&&a.fragment.l(x),x.forEach(q)}else a.fragment&&a.fragment.c();e.intro&&re(n.$$.fragment),an(n,e.target,e.anchor),Ru()}ur(l)}class Xt{constructor(){Rt(this,"$$");Rt(this,"$$set")}$destroy(){cn(this,1),this.$destroy=ae}$on(e,t){if(!zn(t))return ae;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!id(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Fd="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fd);const yn=[];function pt(n,e=ae){let t;const r=new Set;function i(c){if(kt(n,c)&&(n=c,t)){const l=!yn.length;for(const a of r)a[1](),yn.push(a,n);if(l){for(let a=0;a<yn.length;a+=2)yn[a][0](yn[a+1]);yn.length=0}}}function s(c){i(c(n))}function o(c,l=ae){const a=[c,l];return r.add(a),r.size===1&&(t=e(i,s)||ae),c(n),()=>{r.delete(a),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Id(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var kd={exports:{}};function Ou(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var di={exports:{}};const Sd={},Td=Object.freeze(Object.defineProperty({__proto__:null,default:Sd},Symbol.toStringTag,{value:"Module"})),Lu=Id(Td);var ba;function se(){return ba||(ba=1,function(n,e){(function(t,r){n.exports=r()})(U,function(){var t=t||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof U<"u"&&U.crypto&&(s=U.crypto),!s&&typeof Ou=="function")try{s=Lu}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},c=Object.create||function(){function p(){}return function(v){var m;return p.prototype=v,m=new p,p.prototype=null,m}}(),l={},a=l.lib={},u=a.Base=function(){return{extend:function(p){var v=c(this);return p&&v.mixIn(p),(!v.hasOwnProperty("init")||this.init===v.init)&&(v.init=function(){v.$super.init.apply(this,arguments)}),v.init.prototype=v,v.$super=this,v},create:function(){var p=this.extend();return p.init.apply(p,arguments),p},init:function(){},mixIn:function(p){for(var v in p)p.hasOwnProperty(v)&&(this[v]=p[v]);p.hasOwnProperty("toString")&&(this.toString=p.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),x=a.WordArray=u.extend({init:function(p,v){p=this.words=p||[],v!=i?this.sigBytes=v:this.sigBytes=p.length*4},toString:function(p){return(p||h).stringify(this)},concat:function(p){var v=this.words,m=p.words,A=this.sigBytes,D=p.sigBytes;if(this.clamp(),A%4)for(var b=0;b<D;b++){var B=m[b>>>2]>>>24-b%4*8&255;v[A+b>>>2]|=B<<24-(A+b)%4*8}else for(var k=0;k<D;k+=4)v[A+k>>>2]=m[k>>>2];return this.sigBytes+=D,this},clamp:function(){var p=this.words,v=this.sigBytes;p[v>>>2]&=4294967295<<32-v%4*8,p.length=r.ceil(v/4)},clone:function(){var p=u.clone.call(this);return p.words=this.words.slice(0),p},random:function(p){for(var v=[],m=0;m<p;m+=4)v.push(o());return new x.init(v,p)}}),f=l.enc={},h=f.Hex={stringify:function(p){for(var v=p.words,m=p.sigBytes,A=[],D=0;D<m;D++){var b=v[D>>>2]>>>24-D%4*8&255;A.push((b>>>4).toString(16)),A.push((b&15).toString(16))}return A.join("")},parse:function(p){for(var v=p.length,m=[],A=0;A<v;A+=2)m[A>>>3]|=parseInt(p.substr(A,2),16)<<24-A%8*4;return new x.init(m,v/2)}},d=f.Latin1={stringify:function(p){for(var v=p.words,m=p.sigBytes,A=[],D=0;D<m;D++){var b=v[D>>>2]>>>24-D%4*8&255;A.push(String.fromCharCode(b))}return A.join("")},parse:function(p){for(var v=p.length,m=[],A=0;A<v;A++)m[A>>>2]|=(p.charCodeAt(A)&255)<<24-A%4*8;return new x.init(m,v)}},g=f.Utf8={stringify:function(p){try{return decodeURIComponent(escape(d.stringify(p)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(p){return d.parse(unescape(encodeURIComponent(p)))}},_=a.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new x.init,this._nDataBytes=0},_append:function(p){typeof p=="string"&&(p=g.parse(p)),this._data.concat(p),this._nDataBytes+=p.sigBytes},_process:function(p){var v,m=this._data,A=m.words,D=m.sigBytes,b=this.blockSize,B=b*4,k=D/B;p?k=r.ceil(k):k=r.max((k|0)-this._minBufferSize,0);var C=k*b,y=r.min(C*4,D);if(C){for(var F=0;F<C;F+=b)this._doProcessBlock(A,F);v=A.splice(0,C),m.sigBytes-=y}return new x.init(v,y)},clone:function(){var p=u.clone.call(this);return p._data=this._data.clone(),p},_minBufferSize:0});a.Hasher=_.extend({cfg:u.extend(),init:function(p){this.cfg=this.cfg.extend(p),this.reset()},reset:function(){_.reset.call(this),this._doReset()},update:function(p){return this._append(p),this._process(),this},finalize:function(p){p&&this._append(p);var v=this._doFinalize();return v},blockSize:16,_createHelper:function(p){return function(v,m){return new p.init(m).finalize(v)}},_createHmacHelper:function(p){return function(v,m){return new E.HMAC.init(p,m).finalize(v)}}});var E=l.algo={};return l}(Math);return t})}(di)),di.exports}var xi={exports:{}},Da;function P0(){return Da||(Da=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.Base,c=s.WordArray,l=i.x64={};l.Word=o.extend({init:function(a,u){this.high=a,this.low=u}}),l.WordArray=o.extend({init:function(a,u){a=this.words=a||[],u!=r?this.sigBytes=u:this.sigBytes=a.length*8},toX32:function(){for(var a=this.words,u=a.length,x=[],f=0;f<u;f++){var h=a[f];x.push(h.high),x.push(h.low)}return c.create(x,this.sigBytes)},clone:function(){for(var a=o.clone.call(this),u=a.words=this.words.slice(0),x=u.length,f=0;f<x;f++)u[f]=u[f].clone();return a}})}(),t})}(xi)),xi.exports}var pi={exports:{}},Ba;function Rd(){return Ba||(Ba=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){return function(){if(typeof ArrayBuffer=="function"){var r=t,i=r.lib,s=i.WordArray,o=s.init,c=s.init=function(l){if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),(l instanceof Int8Array||typeof Uint8ClampedArray<"u"&&l instanceof Uint8ClampedArray||l instanceof Int16Array||l instanceof Uint16Array||l instanceof Int32Array||l instanceof Uint32Array||l instanceof Float32Array||l instanceof Float64Array)&&(l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),l instanceof Uint8Array){for(var a=l.byteLength,u=[],x=0;x<a;x++)u[x>>>2]|=l[x]<<24-x%4*8;o.call(this,u,a)}else o.apply(this,arguments)};c.prototype=s}}(),t.lib.WordArray})}(pi)),pi.exports}var _i={exports:{}},wa;function Nd(){return wa||(wa=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(l){for(var a=l.words,u=l.sigBytes,x=[],f=0;f<u;f+=2){var h=a[f>>>2]>>>16-f%4*8&65535;x.push(String.fromCharCode(h))}return x.join("")},parse:function(l){for(var a=l.length,u=[],x=0;x<a;x++)u[x>>>1]|=l.charCodeAt(x)<<16-x%2*16;return s.create(u,a*2)}},o.Utf16LE={stringify:function(l){for(var a=l.words,u=l.sigBytes,x=[],f=0;f<u;f+=2){var h=c(a[f>>>2]>>>16-f%4*8&65535);x.push(String.fromCharCode(h))}return x.join("")},parse:function(l){for(var a=l.length,u=[],x=0;x<a;x++)u[x>>>1]|=c(l.charCodeAt(x)<<16-x%2*16);return s.create(u,a*2)}};function c(l){return l<<8&4278255360|l>>>8&16711935}}(),t.enc.Utf16})}(_i)),_i.exports}var vi={exports:{}},Fa;function pn(){return Fa||(Fa=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(l){var a=l.words,u=l.sigBytes,x=this._map;l.clamp();for(var f=[],h=0;h<u;h+=3)for(var d=a[h>>>2]>>>24-h%4*8&255,g=a[h+1>>>2]>>>24-(h+1)%4*8&255,_=a[h+2>>>2]>>>24-(h+2)%4*8&255,E=d<<16|g<<8|_,p=0;p<4&&h+p*.75<u;p++)f.push(x.charAt(E>>>6*(3-p)&63));var v=x.charAt(64);if(v)for(;f.length%4;)f.push(v);return f.join("")},parse:function(l){var a=l.length,u=this._map,x=this._reverseMap;if(!x){x=this._reverseMap=[];for(var f=0;f<u.length;f++)x[u.charCodeAt(f)]=f}var h=u.charAt(64);if(h){var d=l.indexOf(h);d!==-1&&(a=d)}return c(l,a,x)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function c(l,a,u){for(var x=[],f=0,h=0;h<a;h++)if(h%4){var d=u[l.charCodeAt(h-1)]<<h%4*2,g=u[l.charCodeAt(h)]>>>6-h%4*2,_=d|g;x[f>>>2]|=_<<24-f%4*8,f++}return s.create(x,f)}}(),t.enc.Base64})}(vi)),vi.exports}var gi={exports:{}},Ia;function Pd(){return Ia||(Ia=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(l,a){a===void 0&&(a=!0);var u=l.words,x=l.sigBytes,f=a?this._safe_map:this._map;l.clamp();for(var h=[],d=0;d<x;d+=3)for(var g=u[d>>>2]>>>24-d%4*8&255,_=u[d+1>>>2]>>>24-(d+1)%4*8&255,E=u[d+2>>>2]>>>24-(d+2)%4*8&255,p=g<<16|_<<8|E,v=0;v<4&&d+v*.75<x;v++)h.push(f.charAt(p>>>6*(3-v)&63));var m=f.charAt(64);if(m)for(;h.length%4;)h.push(m);return h.join("")},parse:function(l,a){a===void 0&&(a=!0);var u=l.length,x=a?this._safe_map:this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var h=0;h<x.length;h++)f[x.charCodeAt(h)]=h}var d=x.charAt(64);if(d){var g=l.indexOf(d);g!==-1&&(u=g)}return c(l,u,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function c(l,a,u){for(var x=[],f=0,h=0;h<a;h++)if(h%4){var d=u[l.charCodeAt(h-1)]<<h%4*2,g=u[l.charCodeAt(h)]>>>6-h%4*2,_=d|g;x[f>>>2]|=_<<24-f%4*8,f++}return s.create(x,f)}}(),t.enc.Base64url})}(gi)),gi.exports}var mi={exports:{}},ka;function _n(){return ka||(ka=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=[];(function(){for(var g=0;g<64;g++)a[g]=r.abs(r.sin(g+1))*4294967296|0})();var u=l.MD5=c.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,_){for(var E=0;E<16;E++){var p=_+E,v=g[p];g[p]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360}var m=this._hash.words,A=g[_+0],D=g[_+1],b=g[_+2],B=g[_+3],k=g[_+4],C=g[_+5],y=g[_+6],F=g[_+7],w=g[_+8],N=g[_+9],P=g[_+10],M=g[_+11],Y=g[_+12],$=g[_+13],K=g[_+14],j=g[_+15],I=m[0],T=m[1],R=m[2],S=m[3];I=x(I,T,R,S,A,7,a[0]),S=x(S,I,T,R,D,12,a[1]),R=x(R,S,I,T,b,17,a[2]),T=x(T,R,S,I,B,22,a[3]),I=x(I,T,R,S,k,7,a[4]),S=x(S,I,T,R,C,12,a[5]),R=x(R,S,I,T,y,17,a[6]),T=x(T,R,S,I,F,22,a[7]),I=x(I,T,R,S,w,7,a[8]),S=x(S,I,T,R,N,12,a[9]),R=x(R,S,I,T,P,17,a[10]),T=x(T,R,S,I,M,22,a[11]),I=x(I,T,R,S,Y,7,a[12]),S=x(S,I,T,R,$,12,a[13]),R=x(R,S,I,T,K,17,a[14]),T=x(T,R,S,I,j,22,a[15]),I=f(I,T,R,S,D,5,a[16]),S=f(S,I,T,R,y,9,a[17]),R=f(R,S,I,T,M,14,a[18]),T=f(T,R,S,I,A,20,a[19]),I=f(I,T,R,S,C,5,a[20]),S=f(S,I,T,R,P,9,a[21]),R=f(R,S,I,T,j,14,a[22]),T=f(T,R,S,I,k,20,a[23]),I=f(I,T,R,S,N,5,a[24]),S=f(S,I,T,R,K,9,a[25]),R=f(R,S,I,T,B,14,a[26]),T=f(T,R,S,I,w,20,a[27]),I=f(I,T,R,S,$,5,a[28]),S=f(S,I,T,R,b,9,a[29]),R=f(R,S,I,T,F,14,a[30]),T=f(T,R,S,I,Y,20,a[31]),I=h(I,T,R,S,C,4,a[32]),S=h(S,I,T,R,w,11,a[33]),R=h(R,S,I,T,M,16,a[34]),T=h(T,R,S,I,K,23,a[35]),I=h(I,T,R,S,D,4,a[36]),S=h(S,I,T,R,k,11,a[37]),R=h(R,S,I,T,F,16,a[38]),T=h(T,R,S,I,P,23,a[39]),I=h(I,T,R,S,$,4,a[40]),S=h(S,I,T,R,A,11,a[41]),R=h(R,S,I,T,B,16,a[42]),T=h(T,R,S,I,y,23,a[43]),I=h(I,T,R,S,N,4,a[44]),S=h(S,I,T,R,Y,11,a[45]),R=h(R,S,I,T,j,16,a[46]),T=h(T,R,S,I,b,23,a[47]),I=d(I,T,R,S,A,6,a[48]),S=d(S,I,T,R,F,10,a[49]),R=d(R,S,I,T,K,15,a[50]),T=d(T,R,S,I,C,21,a[51]),I=d(I,T,R,S,Y,6,a[52]),S=d(S,I,T,R,B,10,a[53]),R=d(R,S,I,T,P,15,a[54]),T=d(T,R,S,I,D,21,a[55]),I=d(I,T,R,S,w,6,a[56]),S=d(S,I,T,R,j,10,a[57]),R=d(R,S,I,T,y,15,a[58]),T=d(T,R,S,I,$,21,a[59]),I=d(I,T,R,S,k,6,a[60]),S=d(S,I,T,R,M,10,a[61]),R=d(R,S,I,T,b,15,a[62]),T=d(T,R,S,I,N,21,a[63]),m[0]=m[0]+I|0,m[1]=m[1]+T|0,m[2]=m[2]+R|0,m[3]=m[3]+S|0},_doFinalize:function(){var g=this._data,_=g.words,E=this._nDataBytes*8,p=g.sigBytes*8;_[p>>>5]|=128<<24-p%32;var v=r.floor(E/4294967296),m=E;_[(p+64>>>9<<4)+15]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,_[(p+64>>>9<<4)+14]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360,g.sigBytes=(_.length+1)*4,this._process();for(var A=this._hash,D=A.words,b=0;b<4;b++){var B=D[b];D[b]=(B<<8|B>>>24)&16711935|(B<<24|B>>>8)&4278255360}return A},clone:function(){var g=c.clone.call(this);return g._hash=this._hash.clone(),g}});function x(g,_,E,p,v,m,A){var D=g+(_&E|~_&p)+v+A;return(D<<m|D>>>32-m)+_}function f(g,_,E,p,v,m,A){var D=g+(_&p|E&~p)+v+A;return(D<<m|D>>>32-m)+_}function h(g,_,E,p,v,m,A){var D=g+(_^E^p)+v+A;return(D<<m|D>>>32-m)+_}function d(g,_,E,p,v,m,A){var D=g+(E^(_|~p))+v+A;return(D<<m|D>>>32-m)+_}i.MD5=c._createHelper(u),i.HmacMD5=c._createHmacHelper(u)}(Math),t.MD5})}(mi)),mi.exports}var Ei={exports:{}},Sa;function Mu(){return Sa||(Sa=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.Hasher,c=r.algo,l=[],a=c.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,x){for(var f=this._hash.words,h=f[0],d=f[1],g=f[2],_=f[3],E=f[4],p=0;p<80;p++){if(p<16)l[p]=u[x+p]|0;else{var v=l[p-3]^l[p-8]^l[p-14]^l[p-16];l[p]=v<<1|v>>>31}var m=(h<<5|h>>>27)+E+l[p];p<20?m+=(d&g|~d&_)+1518500249:p<40?m+=(d^g^_)+1859775393:p<60?m+=(d&g|d&_|g&_)-1894007588:m+=(d^g^_)-899497514,E=_,_=g,g=d<<30|d>>>2,d=h,h=m}f[0]=f[0]+h|0,f[1]=f[1]+d|0,f[2]=f[2]+g|0,f[3]=f[3]+_|0,f[4]=f[4]+E|0},_doFinalize:function(){var u=this._data,x=u.words,f=this._nDataBytes*8,h=u.sigBytes*8;return x[h>>>5]|=128<<24-h%32,x[(h+64>>>9<<4)+14]=Math.floor(f/4294967296),x[(h+64>>>9<<4)+15]=f,u.sigBytes=x.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(a),r.HmacSHA1=o._createHmacHelper(a)}(),t.SHA1})}(Ei)),Ei.exports}var Ci={exports:{}},Ta;function bo(){return Ta||(Ta=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=[],u=[];(function(){function h(E){for(var p=r.sqrt(E),v=2;v<=p;v++)if(!(E%v))return!1;return!0}function d(E){return(E-(E|0))*4294967296|0}for(var g=2,_=0;_<64;)h(g)&&(_<8&&(a[_]=d(r.pow(g,1/2))),u[_]=d(r.pow(g,1/3)),_++),g++})();var x=[],f=l.SHA256=c.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(h,d){for(var g=this._hash.words,_=g[0],E=g[1],p=g[2],v=g[3],m=g[4],A=g[5],D=g[6],b=g[7],B=0;B<64;B++){if(B<16)x[B]=h[d+B]|0;else{var k=x[B-15],C=(k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3,y=x[B-2],F=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;x[B]=C+x[B-7]+F+x[B-16]}var w=m&A^~m&D,N=_&E^_&p^E&p,P=(_<<30|_>>>2)^(_<<19|_>>>13)^(_<<10|_>>>22),M=(m<<26|m>>>6)^(m<<21|m>>>11)^(m<<7|m>>>25),Y=b+M+w+u[B]+x[B],$=P+N;b=D,D=A,A=m,m=v+Y|0,v=p,p=E,E=_,_=Y+$|0}g[0]=g[0]+_|0,g[1]=g[1]+E|0,g[2]=g[2]+p|0,g[3]=g[3]+v|0,g[4]=g[4]+m|0,g[5]=g[5]+A|0,g[6]=g[6]+D|0,g[7]=g[7]+b|0},_doFinalize:function(){var h=this._data,d=h.words,g=this._nDataBytes*8,_=h.sigBytes*8;return d[_>>>5]|=128<<24-_%32,d[(_+64>>>9<<4)+14]=r.floor(g/4294967296),d[(_+64>>>9<<4)+15]=g,h.sigBytes=d.length*4,this._process(),this._hash},clone:function(){var h=c.clone.call(this);return h._hash=this._hash.clone(),h}});i.SHA256=c._createHelper(f),i.HmacSHA256=c._createHmacHelper(f)}(Math),t.SHA256})}(Ci)),Ci.exports}var yi={exports:{}},Ra;function Od(){return Ra||(Ra=1,function(n,e){(function(t,r,i){n.exports=r(se(),bo())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.algo,c=o.SHA256,l=o.SHA224=c.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=c._doFinalize.call(this);return a.sigBytes-=4,a}});r.SHA224=c._createHelper(l),r.HmacSHA224=c._createHmacHelper(l)}(),t.SHA224})}(yi)),yi.exports}var Ai={exports:{}},Na;function Hu(){return Na||(Na=1,function(n,e){(function(t,r,i){n.exports=r(se(),P0())})(U,function(t){return function(){var r=t,i=r.lib,s=i.Hasher,o=r.x64,c=o.Word,l=o.WordArray,a=r.algo;function u(){return c.create.apply(c,arguments)}var x=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],f=[];(function(){for(var d=0;d<80;d++)f[d]=u()})();var h=a.SHA512=s.extend({_doReset:function(){this._hash=new l.init([new c.init(1779033703,4089235720),new c.init(3144134277,2227873595),new c.init(1013904242,4271175723),new c.init(2773480762,1595750129),new c.init(1359893119,2917565137),new c.init(2600822924,725511199),new c.init(528734635,4215389547),new c.init(1541459225,327033209)])},_doProcessBlock:function(d,g){for(var _=this._hash.words,E=_[0],p=_[1],v=_[2],m=_[3],A=_[4],D=_[5],b=_[6],B=_[7],k=E.high,C=E.low,y=p.high,F=p.low,w=v.high,N=v.low,P=m.high,M=m.low,Y=A.high,$=A.low,K=D.high,j=D.low,I=b.high,T=b.low,R=B.high,S=B.low,Q=k,X=C,le=y,H=F,je=w,He=N,vt=P,Ke=M,me=Y,ue=$,rt=K,Ye=j,it=I,Xe=T,gt=R,Qe=S,Ee=0;Ee<80;Ee++){var xe,be,O=f[Ee];if(Ee<16)be=O.high=d[g+Ee*2]|0,xe=O.low=d[g+Ee*2+1]|0;else{var fe=f[Ee-15],ye=fe.high,Ze=fe.low,J0=(ye>>>1|Ze<<31)^(ye>>>8|Ze<<24)^ye>>>7,Kn=(Ze>>>1|ye<<31)^(Ze>>>8|ye<<24)^(Ze>>>7|ye<<25),Yn=f[Ee-2],Je=Yn.high,st=Yn.low,ei=(Je>>>19|st<<13)^(Je<<3|st>>>29)^Je>>>6,Xn=(st>>>19|Je<<13)^(st<<3|Je>>>29)^(st>>>6|Je<<26),Qn=f[Ee-7],ti=Qn.high,ni=Qn.low,Zn=f[Ee-16],ri=Zn.high,Jn=Zn.low;xe=Kn+ni,be=J0+ti+(xe>>>0<Kn>>>0?1:0),xe=xe+Xn,be=be+ei+(xe>>>0<Xn>>>0?1:0),xe=xe+Jn,be=be+ri+(xe>>>0<Jn>>>0?1:0),O.high=be,O.low=xe}var ii=me&rt^~me&it,er=ue&Ye^~ue&Xe,si=Q&le^Q&je^le&je,oi=X&H^X&He^H&He,ai=(Q>>>28|X<<4)^(Q<<30|X>>>2)^(Q<<25|X>>>7),tr=(X>>>28|Q<<4)^(X<<30|Q>>>2)^(X<<25|Q>>>7),ci=(me>>>14|ue<<18)^(me>>>18|ue<<14)^(me<<23|ue>>>9),li=(ue>>>14|me<<18)^(ue>>>18|me<<14)^(ue<<23|me>>>9),nr=x[Ee],ui=nr.high,rr=nr.low,pe=Qe+li,Te=gt+ci+(pe>>>0<Qe>>>0?1:0),pe=pe+er,Te=Te+ii+(pe>>>0<er>>>0?1:0),pe=pe+rr,Te=Te+ui+(pe>>>0<rr>>>0?1:0),pe=pe+xe,Te=Te+be+(pe>>>0<xe>>>0?1:0),ir=tr+oi,fi=ai+si+(ir>>>0<tr>>>0?1:0);gt=it,Qe=Xe,it=rt,Xe=Ye,rt=me,Ye=ue,ue=Ke+pe|0,me=vt+Te+(ue>>>0<Ke>>>0?1:0)|0,vt=je,Ke=He,je=le,He=H,le=Q,H=X,X=pe+ir|0,Q=Te+fi+(X>>>0<pe>>>0?1:0)|0}C=E.low=C+X,E.high=k+Q+(C>>>0<X>>>0?1:0),F=p.low=F+H,p.high=y+le+(F>>>0<H>>>0?1:0),N=v.low=N+He,v.high=w+je+(N>>>0<He>>>0?1:0),M=m.low=M+Ke,m.high=P+vt+(M>>>0<Ke>>>0?1:0),$=A.low=$+ue,A.high=Y+me+($>>>0<ue>>>0?1:0),j=D.low=j+Ye,D.high=K+rt+(j>>>0<Ye>>>0?1:0),T=b.low=T+Xe,b.high=I+it+(T>>>0<Xe>>>0?1:0),S=B.low=S+Qe,B.high=R+gt+(S>>>0<Qe>>>0?1:0)},_doFinalize:function(){var d=this._data,g=d.words,_=this._nDataBytes*8,E=d.sigBytes*8;g[E>>>5]|=128<<24-E%32,g[(E+128>>>10<<5)+30]=Math.floor(_/4294967296),g[(E+128>>>10<<5)+31]=_,d.sigBytes=g.length*4,this._process();var p=this._hash.toX32();return p},clone:function(){var d=s.clone.call(this);return d._hash=this._hash.clone(),d},blockSize:1024/32});r.SHA512=s._createHelper(h),r.HmacSHA512=s._createHmacHelper(h)}(),t.SHA512})}(Ai)),Ai.exports}var bi={exports:{}},Pa;function Ld(){return Pa||(Pa=1,function(n,e){(function(t,r,i){n.exports=r(se(),P0(),Hu())})(U,function(t){return function(){var r=t,i=r.x64,s=i.Word,o=i.WordArray,c=r.algo,l=c.SHA512,a=c.SHA384=l.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=l._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=l._createHelper(a),r.HmacSHA384=l._createHmacHelper(a)}(),t.SHA384})}(bi)),bi.exports}var Di={exports:{}},Oa;function Md(){return Oa||(Oa=1,function(n,e){(function(t,r,i){n.exports=r(se(),P0())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.x64,a=l.Word,u=i.algo,x=[],f=[],h=[];(function(){for(var _=1,E=0,p=0;p<24;p++){x[_+5*E]=(p+1)*(p+2)/2%64;var v=E%5,m=(2*_+3*E)%5;_=v,E=m}for(var _=0;_<5;_++)for(var E=0;E<5;E++)f[_+5*E]=E+(2*_+3*E)%5*5;for(var A=1,D=0;D<24;D++){for(var b=0,B=0,k=0;k<7;k++){if(A&1){var C=(1<<k)-1;C<32?B^=1<<C:b^=1<<C-32}A&128?A=A<<1^113:A<<=1}h[D]=a.create(b,B)}})();var d=[];(function(){for(var _=0;_<25;_++)d[_]=a.create()})();var g=u.SHA3=c.extend({cfg:c.cfg.extend({outputLength:512}),_doReset:function(){for(var _=this._state=[],E=0;E<25;E++)_[E]=new a.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(_,E){for(var p=this._state,v=this.blockSize/2,m=0;m<v;m++){var A=_[E+2*m],D=_[E+2*m+1];A=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360,D=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360;var b=p[m];b.high^=D,b.low^=A}for(var B=0;B<24;B++){for(var k=0;k<5;k++){for(var C=0,y=0,F=0;F<5;F++){var b=p[k+5*F];C^=b.high,y^=b.low}var w=d[k];w.high=C,w.low=y}for(var k=0;k<5;k++)for(var N=d[(k+4)%5],P=d[(k+1)%5],M=P.high,Y=P.low,C=N.high^(M<<1|Y>>>31),y=N.low^(Y<<1|M>>>31),F=0;F<5;F++){var b=p[k+5*F];b.high^=C,b.low^=y}for(var $=1;$<25;$++){var C,y,b=p[$],K=b.high,j=b.low,I=x[$];I<32?(C=K<<I|j>>>32-I,y=j<<I|K>>>32-I):(C=j<<I-32|K>>>64-I,y=K<<I-32|j>>>64-I);var T=d[f[$]];T.high=C,T.low=y}var R=d[0],S=p[0];R.high=S.high,R.low=S.low;for(var k=0;k<5;k++)for(var F=0;F<5;F++){var $=k+5*F,b=p[$],Q=d[$],X=d[(k+1)%5+5*F],le=d[(k+2)%5+5*F];b.high=Q.high^~X.high&le.high,b.low=Q.low^~X.low&le.low}var b=p[0],H=h[B];b.high^=H.high,b.low^=H.low}},_doFinalize:function(){var _=this._data,E=_.words;this._nDataBytes*8;var p=_.sigBytes*8,v=this.blockSize*32;E[p>>>5]|=1<<24-p%32,E[(r.ceil((p+1)/v)*v>>>5)-1]|=128,_.sigBytes=E.length*4,this._process();for(var m=this._state,A=this.cfg.outputLength/8,D=A/8,b=[],B=0;B<D;B++){var k=m[B],C=k.high,y=k.low;C=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,y=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,b.push(y),b.push(C)}return new o.init(b,A)},clone:function(){for(var _=c.clone.call(this),E=_._state=this._state.slice(0),p=0;p<25;p++)E[p]=E[p].clone();return _}});i.SHA3=c._createHelper(g),i.HmacSHA3=c._createHmacHelper(g)}(Math),t.SHA3})}(Di)),Di.exports}var Bi={exports:{}},La;function Hd(){return La||(La=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),x=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),f=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),h=o.create([0,1518500249,1859775393,2400959708,2840853838]),d=o.create([1352829926,1548603684,1836072691,2053994217,0]),g=l.RIPEMD160=c.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(D,b){for(var B=0;B<16;B++){var k=b+B,C=D[k];D[k]=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360}var y=this._hash.words,F=h.words,w=d.words,N=a.words,P=u.words,M=x.words,Y=f.words,$,K,j,I,T,R,S,Q,X,le;R=$=y[0],S=K=y[1],Q=j=y[2],X=I=y[3],le=T=y[4];for(var H,B=0;B<80;B+=1)H=$+D[b+N[B]]|0,B<16?H+=_(K,j,I)+F[0]:B<32?H+=E(K,j,I)+F[1]:B<48?H+=p(K,j,I)+F[2]:B<64?H+=v(K,j,I)+F[3]:H+=m(K,j,I)+F[4],H=H|0,H=A(H,M[B]),H=H+T|0,$=T,T=I,I=A(j,10),j=K,K=H,H=R+D[b+P[B]]|0,B<16?H+=m(S,Q,X)+w[0]:B<32?H+=v(S,Q,X)+w[1]:B<48?H+=p(S,Q,X)+w[2]:B<64?H+=E(S,Q,X)+w[3]:H+=_(S,Q,X)+w[4],H=H|0,H=A(H,Y[B]),H=H+le|0,R=le,le=X,X=A(Q,10),Q=S,S=H;H=y[1]+j+X|0,y[1]=y[2]+I+le|0,y[2]=y[3]+T+R|0,y[3]=y[4]+$+S|0,y[4]=y[0]+K+Q|0,y[0]=H},_doFinalize:function(){var D=this._data,b=D.words,B=this._nDataBytes*8,k=D.sigBytes*8;b[k>>>5]|=128<<24-k%32,b[(k+64>>>9<<4)+14]=(B<<8|B>>>24)&16711935|(B<<24|B>>>8)&4278255360,D.sigBytes=(b.length+1)*4,this._process();for(var C=this._hash,y=C.words,F=0;F<5;F++){var w=y[F];y[F]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}return C},clone:function(){var D=c.clone.call(this);return D._hash=this._hash.clone(),D}});function _(D,b,B){return D^b^B}function E(D,b,B){return D&b|~D&B}function p(D,b,B){return(D|~b)^B}function v(D,b,B){return D&B|b&~B}function m(D,b,B){return D^(b|~B)}function A(D,b){return D<<b|D>>>32-b}i.RIPEMD160=c._createHelper(g),i.HmacRIPEMD160=c._createHmacHelper(g)}(),t.RIPEMD160})}(Bi)),Bi.exports}var wi={exports:{}},Ma;function Do(){return Ma||(Ma=1,function(n,e){(function(t,r){n.exports=r(se())})(U,function(t){(function(){var r=t,i=r.lib,s=i.Base,o=r.enc,c=o.Utf8,l=r.algo;l.HMAC=s.extend({init:function(a,u){a=this._hasher=new a.init,typeof u=="string"&&(u=c.parse(u));var x=a.blockSize,f=x*4;u.sigBytes>f&&(u=a.finalize(u)),u.clamp();for(var h=this._oKey=u.clone(),d=this._iKey=u.clone(),g=h.words,_=d.words,E=0;E<x;E++)g[E]^=1549556828,_[E]^=909522486;h.sigBytes=d.sigBytes=f,this.reset()},reset:function(){var a=this._hasher;a.reset(),a.update(this._iKey)},update:function(a){return this._hasher.update(a),this},finalize:function(a){var u=this._hasher,x=u.finalize(a);u.reset();var f=u.finalize(this._oKey.clone().concat(x));return f}})})()})}(wi)),wi.exports}var Fi={exports:{}},Ha;function Ud(){return Ha||(Ha=1,function(n,e){(function(t,r,i){n.exports=r(se(),bo(),Do())})(U,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,c=r.algo,l=c.SHA256,a=c.HMAC,u=c.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:25e4}),init:function(x){this.cfg=this.cfg.extend(x)},compute:function(x,f){for(var h=this.cfg,d=a.create(h.hasher,x),g=o.create(),_=o.create([1]),E=g.words,p=_.words,v=h.keySize,m=h.iterations;E.length<v;){var A=d.update(f).finalize(_);d.reset();for(var D=A.words,b=D.length,B=A,k=1;k<m;k++){B=d.finalize(B),d.reset();for(var C=B.words,y=0;y<b;y++)D[y]^=C[y]}g.concat(A),p[0]++}return g.sigBytes=v*4,g}});r.PBKDF2=function(x,f,h){return u.create(h).compute(x,f)}}(),t.PBKDF2})}(Fi)),Fi.exports}var Ii={exports:{}},Ua;function Qt(){return Ua||(Ua=1,function(n,e){(function(t,r,i){n.exports=r(se(),Mu(),Do())})(U,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,c=r.algo,l=c.MD5,a=c.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,x){for(var f,h=this.cfg,d=h.hasher.create(),g=o.create(),_=g.words,E=h.keySize,p=h.iterations;_.length<E;){f&&d.update(f),f=d.update(u).finalize(x),d.reset();for(var v=1;v<p;v++)f=d.finalize(f),d.reset();g.concat(f)}return g.sigBytes=E*4,g}});r.EvpKDF=function(u,x,f){return a.create(f).compute(u,x)}}(),t.EvpKDF})}(Ii)),Ii.exports}var ki={exports:{}},za;function ke(){return za||(za=1,function(n,e){(function(t,r,i){n.exports=r(se(),Qt())})(U,function(t){t.lib.Cipher||function(r){var i=t,s=i.lib,o=s.Base,c=s.WordArray,l=s.BufferedBlockAlgorithm,a=i.enc;a.Utf8;var u=a.Base64,x=i.algo,f=x.EvpKDF,h=s.Cipher=l.extend({cfg:o.extend(),createEncryptor:function(C,y){return this.create(this._ENC_XFORM_MODE,C,y)},createDecryptor:function(C,y){return this.create(this._DEC_XFORM_MODE,C,y)},init:function(C,y,F){this.cfg=this.cfg.extend(F),this._xformMode=C,this._key=y,this.reset()},reset:function(){l.reset.call(this),this._doReset()},process:function(C){return this._append(C),this._process()},finalize:function(C){C&&this._append(C);var y=this._doFinalize();return y},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function C(y){return typeof y=="string"?k:D}return function(y){return{encrypt:function(F,w,N){return C(w).encrypt(y,F,w,N)},decrypt:function(F,w,N){return C(w).decrypt(y,F,w,N)}}}}()});s.StreamCipher=h.extend({_doFinalize:function(){var C=this._process(!0);return C},blockSize:1});var d=i.mode={},g=s.BlockCipherMode=o.extend({createEncryptor:function(C,y){return this.Encryptor.create(C,y)},createDecryptor:function(C,y){return this.Decryptor.create(C,y)},init:function(C,y){this._cipher=C,this._iv=y}}),_=d.CBC=function(){var C=g.extend();C.Encryptor=C.extend({processBlock:function(F,w){var N=this._cipher,P=N.blockSize;y.call(this,F,w,P),N.encryptBlock(F,w),this._prevBlock=F.slice(w,w+P)}}),C.Decryptor=C.extend({processBlock:function(F,w){var N=this._cipher,P=N.blockSize,M=F.slice(w,w+P);N.decryptBlock(F,w),y.call(this,F,w,P),this._prevBlock=M}});function y(F,w,N){var P,M=this._iv;M?(P=M,this._iv=r):P=this._prevBlock;for(var Y=0;Y<N;Y++)F[w+Y]^=P[Y]}return C}(),E=i.pad={},p=E.Pkcs7={pad:function(C,y){for(var F=y*4,w=F-C.sigBytes%F,N=w<<24|w<<16|w<<8|w,P=[],M=0;M<w;M+=4)P.push(N);var Y=c.create(P,w);C.concat(Y)},unpad:function(C){var y=C.words[C.sigBytes-1>>>2]&255;C.sigBytes-=y}};s.BlockCipher=h.extend({cfg:h.cfg.extend({mode:_,padding:p}),reset:function(){var C;h.reset.call(this);var y=this.cfg,F=y.iv,w=y.mode;this._xformMode==this._ENC_XFORM_MODE?C=w.createEncryptor:(C=w.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==C?this._mode.init(this,F&&F.words):(this._mode=C.call(w,this,F&&F.words),this._mode.__creator=C)},_doProcessBlock:function(C,y){this._mode.processBlock(C,y)},_doFinalize:function(){var C,y=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(y.pad(this._data,this.blockSize),C=this._process(!0)):(C=this._process(!0),y.unpad(C)),C},blockSize:128/32});var v=s.CipherParams=o.extend({init:function(C){this.mixIn(C)},toString:function(C){return(C||this.formatter).stringify(this)}}),m=i.format={},A=m.OpenSSL={stringify:function(C){var y,F=C.ciphertext,w=C.salt;return w?y=c.create([1398893684,1701076831]).concat(w).concat(F):y=F,y.toString(u)},parse:function(C){var y,F=u.parse(C),w=F.words;return w[0]==1398893684&&w[1]==1701076831&&(y=c.create(w.slice(2,4)),w.splice(0,4),F.sigBytes-=16),v.create({ciphertext:F,salt:y})}},D=s.SerializableCipher=o.extend({cfg:o.extend({format:A}),encrypt:function(C,y,F,w){w=this.cfg.extend(w);var N=C.createEncryptor(F,w),P=N.finalize(y),M=N.cfg;return v.create({ciphertext:P,key:F,iv:M.iv,algorithm:C,mode:M.mode,padding:M.padding,blockSize:C.blockSize,formatter:w.format})},decrypt:function(C,y,F,w){w=this.cfg.extend(w),y=this._parse(y,w.format);var N=C.createDecryptor(F,w).finalize(y.ciphertext);return N},_parse:function(C,y){return typeof C=="string"?y.parse(C,this):C}}),b=i.kdf={},B=b.OpenSSL={execute:function(C,y,F,w,N){if(w||(w=c.random(64/8)),N)var P=f.create({keySize:y+F,hasher:N}).compute(C,w);else var P=f.create({keySize:y+F}).compute(C,w);var M=c.create(P.words.slice(y),F*4);return P.sigBytes=y*4,v.create({key:P,iv:M,salt:w})}},k=s.PasswordBasedCipher=D.extend({cfg:D.cfg.extend({kdf:B}),encrypt:function(C,y,F,w){w=this.cfg.extend(w);var N=w.kdf.execute(F,C.keySize,C.ivSize,w.salt,w.hasher);w.iv=N.iv;var P=D.encrypt.call(this,C,y,N.key,w);return P.mixIn(N),P},decrypt:function(C,y,F,w){w=this.cfg.extend(w),y=this._parse(y,w.format);var N=w.kdf.execute(F,C.keySize,C.ivSize,y.salt,w.hasher);w.iv=N.iv;var P=D.decrypt.call(this,C,y,N.key,w);return P}})}()})}(ki)),ki.exports}var Si={exports:{}},Wa;function zd(){return Wa||(Wa=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.mode.CFB=function(){var r=t.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize;i.call(this,s,o,l,c),this._prevBlock=s.slice(o,o+l)}}),r.Decryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=s.slice(o,o+l);i.call(this,s,o,l,c),this._prevBlock=a}});function i(s,o,c,l){var a,u=this._iv;u?(a=u.slice(0),this._iv=void 0):a=this._prevBlock,l.encryptBlock(a,0);for(var x=0;x<c;x++)s[o+x]^=a[x]}return r}(),t.mode.CFB})}(Si)),Si.exports}var Ti={exports:{}},qa;function Wd(){return qa||(qa=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.mode.CTR=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=this._iv,u=this._counter;a&&(u=this._counter=a.slice(0),this._iv=void 0);var x=u.slice(0);c.encryptBlock(x,0),u[l-1]=u[l-1]+1|0;for(var f=0;f<l;f++)s[o+f]^=x[f]}});return r.Decryptor=i,r}(),t.mode.CTR})}(Ti)),Ti.exports}var Ri={exports:{}},$a;function qd(){return $a||($a=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var r=t.lib.BlockCipherMode.extend();function i(c){if((c>>24&255)===255){var l=c>>16&255,a=c>>8&255,u=c&255;l===255?(l=0,a===255?(a=0,u===255?u=0:++u):++a):++l,c=0,c+=l<<16,c+=a<<8,c+=u}else c+=1<<24;return c}function s(c){return(c[0]=i(c[0]))===0&&(c[1]=i(c[1])),c}var o=r.Encryptor=r.extend({processBlock:function(c,l){var a=this._cipher,u=a.blockSize,x=this._iv,f=this._counter;x&&(f=this._counter=x.slice(0),this._iv=void 0),s(f);var h=f.slice(0);a.encryptBlock(h,0);for(var d=0;d<u;d++)c[l+d]^=h[d]}});return r.Decryptor=o,r}(),t.mode.CTRGladman})}(Ri)),Ri.exports}var Ni={exports:{}},Va;function $d(){return Va||(Va=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.mode.OFB=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=this._iv,u=this._keystream;a&&(u=this._keystream=a.slice(0),this._iv=void 0),c.encryptBlock(u,0);for(var x=0;x<l;x++)s[o+x]^=u[x]}});return r.Decryptor=i,r}(),t.mode.OFB})}(Ni)),Ni.exports}var Pi={exports:{}},Ga;function Vd(){return Ga||(Ga=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.mode.ECB=function(){var r=t.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),t.mode.ECB})}(Pi)),Pi.exports}var Oi={exports:{}},ja;function Gd(){return ja||(ja=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,c=o-s%o,l=s+c-1;r.clamp(),r.words[l>>>2]|=c<<24-l%4*8,r.sigBytes+=c},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Ansix923})}(Oi)),Oi.exports}var Li={exports:{}},Ka;function jd(){return Ka||(Ka=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Iso10126})}(Li)),Li.exports}var Mi={exports:{}},Ya;function Kd(){return Ya||(Ya=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.pad.Iso97971={pad:function(r,i){r.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(r,i)},unpad:function(r){t.pad.ZeroPadding.unpad(r),r.sigBytes--}},t.pad.Iso97971})}(Mi)),Mi.exports}var Hi={exports:{}},Xa;function Yd(){return Xa||(Xa=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(Hi)),Hi.exports}var Ui={exports:{}},Qa;function Xd(){return Qa||(Qa=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(Ui)),Ui.exports}var zi={exports:{}},Za;function Qd(){return Za||(Za=1,function(n,e){(function(t,r,i){n.exports=r(se(),ke())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.CipherParams,c=i.enc,l=c.Hex,a=i.format;a.Hex={stringify:function(u){return u.ciphertext.toString(l)},parse:function(u){var x=l.parse(u);return o.create({ciphertext:x})}}}(),t.format.Hex})}(zi)),zi.exports}var Wi={exports:{}},Ja;function Zd(){return Ja||(Ja=1,function(n,e){(function(t,r,i){n.exports=r(se(),pn(),_n(),Qt(),ke())})(U,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo,c=[],l=[],a=[],u=[],x=[],f=[],h=[],d=[],g=[],_=[];(function(){for(var v=[],m=0;m<256;m++)m<128?v[m]=m<<1:v[m]=m<<1^283;for(var A=0,D=0,m=0;m<256;m++){var b=D^D<<1^D<<2^D<<3^D<<4;b=b>>>8^b&255^99,c[A]=b,l[b]=A;var B=v[A],k=v[B],C=v[k],y=v[b]*257^b*16843008;a[A]=y<<24|y>>>8,u[A]=y<<16|y>>>16,x[A]=y<<8|y>>>24,f[A]=y;var y=C*16843009^k*65537^B*257^A*16843008;h[b]=y<<24|y>>>8,d[b]=y<<16|y>>>16,g[b]=y<<8|y>>>24,_[b]=y,A?(A=B^v[v[v[C^B]]],D^=v[v[D]]):A=D=1}})();var E=[0,1,2,4,8,16,32,64,128,27,54],p=o.AES=s.extend({_doReset:function(){var v;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var m=this._keyPriorReset=this._key,A=m.words,D=m.sigBytes/4,b=this._nRounds=D+6,B=(b+1)*4,k=this._keySchedule=[],C=0;C<B;C++)C<D?k[C]=A[C]:(v=k[C-1],C%D?D>6&&C%D==4&&(v=c[v>>>24]<<24|c[v>>>16&255]<<16|c[v>>>8&255]<<8|c[v&255]):(v=v<<8|v>>>24,v=c[v>>>24]<<24|c[v>>>16&255]<<16|c[v>>>8&255]<<8|c[v&255],v^=E[C/D|0]<<24),k[C]=k[C-D]^v);for(var y=this._invKeySchedule=[],F=0;F<B;F++){var C=B-F;if(F%4)var v=k[C];else var v=k[C-4];F<4||C<=4?y[F]=v:y[F]=h[c[v>>>24]]^d[c[v>>>16&255]]^g[c[v>>>8&255]]^_[c[v&255]]}}},encryptBlock:function(v,m){this._doCryptBlock(v,m,this._keySchedule,a,u,x,f,c)},decryptBlock:function(v,m){var A=v[m+1];v[m+1]=v[m+3],v[m+3]=A,this._doCryptBlock(v,m,this._invKeySchedule,h,d,g,_,l);var A=v[m+1];v[m+1]=v[m+3],v[m+3]=A},_doCryptBlock:function(v,m,A,D,b,B,k,C){for(var y=this._nRounds,F=v[m]^A[0],w=v[m+1]^A[1],N=v[m+2]^A[2],P=v[m+3]^A[3],M=4,Y=1;Y<y;Y++){var $=D[F>>>24]^b[w>>>16&255]^B[N>>>8&255]^k[P&255]^A[M++],K=D[w>>>24]^b[N>>>16&255]^B[P>>>8&255]^k[F&255]^A[M++],j=D[N>>>24]^b[P>>>16&255]^B[F>>>8&255]^k[w&255]^A[M++],I=D[P>>>24]^b[F>>>16&255]^B[w>>>8&255]^k[N&255]^A[M++];F=$,w=K,N=j,P=I}var $=(C[F>>>24]<<24|C[w>>>16&255]<<16|C[N>>>8&255]<<8|C[P&255])^A[M++],K=(C[w>>>24]<<24|C[N>>>16&255]<<16|C[P>>>8&255]<<8|C[F&255])^A[M++],j=(C[N>>>24]<<24|C[P>>>16&255]<<16|C[F>>>8&255]<<8|C[w&255])^A[M++],I=(C[P>>>24]<<24|C[F>>>16&255]<<16|C[w>>>8&255]<<8|C[N&255])^A[M++];v[m]=$,v[m+1]=K,v[m+2]=j,v[m+3]=I},keySize:256/32});r.AES=s._createHelper(p)}(),t.AES})}(Wi)),Wi.exports}var qi={exports:{}},ec;function Jd(){return ec||(ec=1,function(n,e){(function(t,r,i){n.exports=r(se(),pn(),_n(),Qt(),ke())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.BlockCipher,c=r.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],x=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],h=c.DES=o.extend({_doReset:function(){for(var E=this._key,p=E.words,v=[],m=0;m<56;m++){var A=l[m]-1;v[m]=p[A>>>5]>>>31-A%32&1}for(var D=this._subKeys=[],b=0;b<16;b++){for(var B=D[b]=[],k=u[b],m=0;m<24;m++)B[m/6|0]|=v[(a[m]-1+k)%28]<<31-m%6,B[4+(m/6|0)]|=v[28+(a[m+24]-1+k)%28]<<31-m%6;B[0]=B[0]<<1|B[0]>>>31;for(var m=1;m<7;m++)B[m]=B[m]>>>(m-1)*4+3;B[7]=B[7]<<5|B[7]>>>27}for(var C=this._invSubKeys=[],m=0;m<16;m++)C[m]=D[15-m]},encryptBlock:function(E,p){this._doCryptBlock(E,p,this._subKeys)},decryptBlock:function(E,p){this._doCryptBlock(E,p,this._invSubKeys)},_doCryptBlock:function(E,p,v){this._lBlock=E[p],this._rBlock=E[p+1],d.call(this,4,252645135),d.call(this,16,65535),g.call(this,2,858993459),g.call(this,8,16711935),d.call(this,1,1431655765);for(var m=0;m<16;m++){for(var A=v[m],D=this._lBlock,b=this._rBlock,B=0,k=0;k<8;k++)B|=x[k][((b^A[k])&f[k])>>>0];this._lBlock=b,this._rBlock=D^B}var C=this._lBlock;this._lBlock=this._rBlock,this._rBlock=C,d.call(this,1,1431655765),g.call(this,8,16711935),g.call(this,2,858993459),d.call(this,16,65535),d.call(this,4,252645135),E[p]=this._lBlock,E[p+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function d(E,p){var v=(this._lBlock>>>E^this._rBlock)&p;this._rBlock^=v,this._lBlock^=v<<E}function g(E,p){var v=(this._rBlock>>>E^this._lBlock)&p;this._lBlock^=v,this._rBlock^=v<<E}r.DES=o._createHelper(h);var _=c.TripleDES=o.extend({_doReset:function(){var E=this._key,p=E.words;if(p.length!==2&&p.length!==4&&p.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var v=p.slice(0,2),m=p.length<4?p.slice(0,2):p.slice(2,4),A=p.length<6?p.slice(0,2):p.slice(4,6);this._des1=h.createEncryptor(s.create(v)),this._des2=h.createEncryptor(s.create(m)),this._des3=h.createEncryptor(s.create(A))},encryptBlock:function(E,p){this._des1.encryptBlock(E,p),this._des2.decryptBlock(E,p),this._des3.encryptBlock(E,p)},decryptBlock:function(E,p){this._des3.decryptBlock(E,p),this._des2.encryptBlock(E,p),this._des1.decryptBlock(E,p)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(_)}(),t.TripleDES})}(qi)),qi.exports}var $i={exports:{}},tc;function ex(){return tc||(tc=1,function(n,e){(function(t,r,i){n.exports=r(se(),pn(),_n(),Qt(),ke())})(U,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=o.RC4=s.extend({_doReset:function(){for(var u=this._key,x=u.words,f=u.sigBytes,h=this._S=[],d=0;d<256;d++)h[d]=d;for(var d=0,g=0;d<256;d++){var _=d%f,E=x[_>>>2]>>>24-_%4*8&255;g=(g+h[d]+E)%256;var p=h[d];h[d]=h[g],h[g]=p}this._i=this._j=0},_doProcessBlock:function(u,x){u[x]^=l.call(this)},keySize:256/32,ivSize:0});function l(){for(var u=this._S,x=this._i,f=this._j,h=0,d=0;d<4;d++){x=(x+1)%256,f=(f+u[x])%256;var g=u[x];u[x]=u[f],u[f]=g,h|=u[(u[x]+u[f])%256]<<24-d*8}return this._i=x,this._j=f,h}r.RC4=s._createHelper(c);var a=o.RC4Drop=c.extend({cfg:c.cfg.extend({drop:192}),_doReset:function(){c._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)l.call(this)}});r.RC4Drop=s._createHelper(a)}(),t.RC4})}($i)),$i.exports}var Vi={exports:{}},nc;function tx(){return nc||(nc=1,function(n,e){(function(t,r,i){n.exports=r(se(),pn(),_n(),Qt(),ke())})(U,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=[],l=[],a=[],u=o.Rabbit=s.extend({_doReset:function(){for(var f=this._key.words,h=this.cfg.iv,d=0;d<4;d++)f[d]=(f[d]<<8|f[d]>>>24)&16711935|(f[d]<<24|f[d]>>>8)&4278255360;var g=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],_=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var d=0;d<4;d++)x.call(this);for(var d=0;d<8;d++)_[d]^=g[d+4&7];if(h){var E=h.words,p=E[0],v=E[1],m=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360,A=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,D=m>>>16|A&4294901760,b=A<<16|m&65535;_[0]^=m,_[1]^=D,_[2]^=A,_[3]^=b,_[4]^=m,_[5]^=D,_[6]^=A,_[7]^=b;for(var d=0;d<4;d++)x.call(this)}},_doProcessBlock:function(f,h){var d=this._X;x.call(this),c[0]=d[0]^d[5]>>>16^d[3]<<16,c[1]=d[2]^d[7]>>>16^d[5]<<16,c[2]=d[4]^d[1]>>>16^d[7]<<16,c[3]=d[6]^d[3]>>>16^d[1]<<16;for(var g=0;g<4;g++)c[g]=(c[g]<<8|c[g]>>>24)&16711935|(c[g]<<24|c[g]>>>8)&4278255360,f[h+g]^=c[g]},blockSize:128/32,ivSize:64/32});function x(){for(var f=this._X,h=this._C,d=0;d<8;d++)l[d]=h[d];h[0]=h[0]+1295307597+this._b|0,h[1]=h[1]+3545052371+(h[0]>>>0<l[0]>>>0?1:0)|0,h[2]=h[2]+886263092+(h[1]>>>0<l[1]>>>0?1:0)|0,h[3]=h[3]+1295307597+(h[2]>>>0<l[2]>>>0?1:0)|0,h[4]=h[4]+3545052371+(h[3]>>>0<l[3]>>>0?1:0)|0,h[5]=h[5]+886263092+(h[4]>>>0<l[4]>>>0?1:0)|0,h[6]=h[6]+1295307597+(h[5]>>>0<l[5]>>>0?1:0)|0,h[7]=h[7]+3545052371+(h[6]>>>0<l[6]>>>0?1:0)|0,this._b=h[7]>>>0<l[7]>>>0?1:0;for(var d=0;d<8;d++){var g=f[d]+h[d],_=g&65535,E=g>>>16,p=((_*_>>>17)+_*E>>>15)+E*E,v=((g&4294901760)*g|0)+((g&65535)*g|0);a[d]=p^v}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}r.Rabbit=s._createHelper(u)}(),t.Rabbit})}(Vi)),Vi.exports}var Gi={exports:{}},rc;function nx(){return rc||(rc=1,function(n,e){(function(t,r,i){n.exports=r(se(),pn(),_n(),Qt(),ke())})(U,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=[],l=[],a=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var f=this._key.words,h=this.cfg.iv,d=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],g=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var _=0;_<4;_++)x.call(this);for(var _=0;_<8;_++)g[_]^=d[_+4&7];if(h){var E=h.words,p=E[0],v=E[1],m=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360,A=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,D=m>>>16|A&4294901760,b=A<<16|m&65535;g[0]^=m,g[1]^=D,g[2]^=A,g[3]^=b,g[4]^=m,g[5]^=D,g[6]^=A,g[7]^=b;for(var _=0;_<4;_++)x.call(this)}},_doProcessBlock:function(f,h){var d=this._X;x.call(this),c[0]=d[0]^d[5]>>>16^d[3]<<16,c[1]=d[2]^d[7]>>>16^d[5]<<16,c[2]=d[4]^d[1]>>>16^d[7]<<16,c[3]=d[6]^d[3]>>>16^d[1]<<16;for(var g=0;g<4;g++)c[g]=(c[g]<<8|c[g]>>>24)&16711935|(c[g]<<24|c[g]>>>8)&4278255360,f[h+g]^=c[g]},blockSize:128/32,ivSize:64/32});function x(){for(var f=this._X,h=this._C,d=0;d<8;d++)l[d]=h[d];h[0]=h[0]+1295307597+this._b|0,h[1]=h[1]+3545052371+(h[0]>>>0<l[0]>>>0?1:0)|0,h[2]=h[2]+886263092+(h[1]>>>0<l[1]>>>0?1:0)|0,h[3]=h[3]+1295307597+(h[2]>>>0<l[2]>>>0?1:0)|0,h[4]=h[4]+3545052371+(h[3]>>>0<l[3]>>>0?1:0)|0,h[5]=h[5]+886263092+(h[4]>>>0<l[4]>>>0?1:0)|0,h[6]=h[6]+1295307597+(h[5]>>>0<l[5]>>>0?1:0)|0,h[7]=h[7]+3545052371+(h[6]>>>0<l[6]>>>0?1:0)|0,this._b=h[7]>>>0<l[7]>>>0?1:0;for(var d=0;d<8;d++){var g=f[d]+h[d],_=g&65535,E=g>>>16,p=((_*_>>>17)+_*E>>>15)+E*E,v=((g&4294901760)*g|0)+((g&65535)*g|0);a[d]=p^v}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}r.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(Gi)),Gi.exports}var ji={exports:{}},ic;function rx(){return ic||(ic=1,function(n,e){(function(t,r,i){n.exports=r(se(),pn(),_n(),Qt(),ke())})(U,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo;const c=16,l=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],a=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function x(_,E){let p=E>>24&255,v=E>>16&255,m=E>>8&255,A=E&255,D=_.sbox[0][p]+_.sbox[1][v];return D=D^_.sbox[2][m],D=D+_.sbox[3][A],D}function f(_,E,p){let v=E,m=p,A;for(let D=0;D<c;++D)v=v^_.pbox[D],m=x(_,v)^m,A=v,v=m,m=A;return A=v,v=m,m=A,m=m^_.pbox[c],v=v^_.pbox[c+1],{left:v,right:m}}function h(_,E,p){let v=E,m=p,A;for(let D=c+1;D>1;--D)v=v^_.pbox[D],m=x(_,v)^m,A=v,v=m,m=A;return A=v,v=m,m=A,m=m^_.pbox[1],v=v^_.pbox[0],{left:v,right:m}}function d(_,E,p){for(let b=0;b<4;b++){_.sbox[b]=[];for(let B=0;B<256;B++)_.sbox[b][B]=a[b][B]}let v=0;for(let b=0;b<c+2;b++)_.pbox[b]=l[b]^E[v],v++,v>=p&&(v=0);let m=0,A=0,D=0;for(let b=0;b<c+2;b+=2)D=f(_,m,A),m=D.left,A=D.right,_.pbox[b]=m,_.pbox[b+1]=A;for(let b=0;b<4;b++)for(let B=0;B<256;B+=2)D=f(_,m,A),m=D.left,A=D.right,_.sbox[b][B]=m,_.sbox[b][B+1]=A;return!0}var g=o.Blowfish=s.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var _=this._keyPriorReset=this._key,E=_.words,p=_.sigBytes/4;d(u,E,p)}},encryptBlock:function(_,E){var p=f(u,_[E],_[E+1]);_[E]=p.left,_[E+1]=p.right},decryptBlock:function(_,E){var p=h(u,_[E],_[E+1]);_[E]=p.left,_[E+1]=p.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=s._createHelper(g)}(),t.Blowfish})}(ji)),ji.exports}(function(n,e){(function(t,r,i){n.exports=r(se(),P0(),Rd(),Nd(),pn(),Pd(),_n(),Mu(),bo(),Od(),Hu(),Ld(),Md(),Hd(),Do(),Ud(),Qt(),ke(),zd(),Wd(),qd(),$d(),Vd(),Gd(),jd(),Kd(),Yd(),Xd(),Qd(),Zd(),Jd(),ex(),tx(),nx(),rx())})(U,function(t){return t})})(kd);var sc={};/**
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
 */const Uu={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const L=function(n,e){if(!n)throw Wn(e)},Wn=function(n){return new Error("Firebase Database ("+Uu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const zu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ix=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,a=l?n[i+2]:0,u=s>>2,x=(s&3)<<4|c>>4;let f=(c&15)<<2|a>>6,h=a&63;l||(h=64,o||(f=64)),r.push(t[u],t[x],t[f],t[h])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ix(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const a=i<n.length?t[n.charAt(i)]:64;++i;const x=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||a==null||x==null)throw new sx;const f=s<<2|c>>4;if(r.push(f),a!==64){const h=c<<4&240|a>>2;if(r.push(h),x!==64){const d=a<<6&192|x;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wu=function(n){const e=zu(n);return Bo.encodeByteArray(e,!0)},c0=function(n){return Wu(n).replace(/\./g,"")},l0=function(n){try{return Bo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ox(n){return qu(void 0,n)}function qu(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ax(t)||(n[t]=qu(n[t],e[t]));return n}function ax(n){return n!=="__proto__"}/**
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
 */function cx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lx=()=>cx().__FIREBASE_DEFAULTS__,ux=()=>{if(typeof process>"u"||typeof sc>"u")return;const n=sc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&l0(n[1]);return e&&JSON.parse(e)},wo=()=>{try{return lx()||ux()||fx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$u=n=>{var e,t;return(t=(e=wo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hx=n=>{const e=$u(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Vu=()=>{var n;return(n=wo())===null||n===void 0?void 0:n.config},Gu=n=>{var e;return(e=wo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class O0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function dx(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[c0(JSON.stringify(t)),c0(JSON.stringify(o)),""].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function xx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ju(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function px(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _x(){return Uu.NODE_ADMIN===!0}function vx(){try{return typeof indexedDB=="object"}catch{return!1}}function gx(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const mx="FirebaseError";class Zt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=mx,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ex(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,c,r)}}function Ex(n,e){return n.replace(Cx,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Cx=/\{\$([^}]+)}/g;/**
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
 */function Cr(n){return JSON.parse(n)}function Be(n){return JSON.stringify(n)}/**
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
 */const Ku=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Cr(l0(s[0])||""),t=Cr(l0(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},yx=function(n){const e=Ku(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ax=function(n){const e=Ku(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _t(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Pn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Qs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function u0(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function f0(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(oc(s)&&oc(o)){if(!f0(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function oc(n){return n!==null&&typeof n=="object"}/**
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
 */function qn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class bx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let x=0;x<16;x++)r[x]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let x=0;x<16;x++)r[x]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let x=16;x<80;x++){const f=r[x-3]^r[x-8]^r[x-14]^r[x-16];r[x]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4],a,u;for(let x=0;x<80;x++){x<40?x<20?(a=c^s&(o^c),u=1518500249):(a=s^o^c,u=1859775393):x<60?(a=s&o|c&(s|o),u=2400959708):(a=s^o^c,u=3395469782);const f=(i<<5|i>>>27)+a+l+u+r[x]&4294967295;l=c,c=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Dx(n,e){const t=new Bx(n,e);return t.subscribe.bind(t)}class Bx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");wx(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ki),i.error===void 0&&(i.error=Ki),i.complete===void 0&&(i.complete=Ki);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wx(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ki(){}function Io(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Fx=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},L0=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class ln{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class Ix{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new O0;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sx(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kx(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kx(n){return n===en?void 0:n}function Sx(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ix(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const Rx={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Nx=he.INFO,Px={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Ox=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Px[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ko{constructor(e){this.name=e,this._logLevel=Nx,this._logHandler=Ox,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Lx=(n,e)=>e.some(t=>n instanceof t);let ac,cc;function Mx(){return ac||(ac=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hx(){return cc||(cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yu=new WeakMap,Zs=new WeakMap,Xu=new WeakMap,Yi=new WeakMap,So=new WeakMap;function Ux(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ht(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Yu.set(t,n)}).catch(()=>{}),So.set(e,n),e}function zx(n){if(Zs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Zs.set(n,e)}let Js={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wx(n){Js=n(Js)}function qx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Xi(this),e,...t);return Xu.set(r,e.sort?e.sort():[e]),Ht(r)}:Hx().includes(n)?function(...e){return n.apply(Xi(this),e),Ht(Yu.get(this))}:function(...e){return Ht(n.apply(Xi(this),e))}}function $x(n){return typeof n=="function"?qx(n):(n instanceof IDBTransaction&&zx(n),Lx(n,Mx())?new Proxy(n,Js):n)}function Ht(n){if(n instanceof IDBRequest)return Ux(n);if(Yi.has(n))return Yi.get(n);const e=$x(n);return e!==n&&(Yi.set(n,e),So.set(e,n)),e}const Xi=n=>So.get(n);function Vx(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=Ht(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ht(o.result),l.oldVersion,l.newVersion,Ht(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),c}const Gx=["get","getKey","getAll","getAllKeys","count"],jx=["put","add","delete","clear"],Qi=new Map;function lc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=jx.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gx.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let a=l.store;return r&&(a=a.index(c.shift())),(await Promise.all([a[t](...c),i&&l.done]))[0]};return Qi.set(e,s),s}Wx(n=>({...n,get:(e,t,r)=>lc(e,t)||n.get(e,t,r),has:(e,t)=>!!lc(e,t)||n.has(e,t)}));/**
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
 */class Kx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yx(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Yx(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eo="@firebase/app",uc="0.9.13";/**
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
 */const un=new ko("@firebase/app"),Xx="@firebase/app-compat",Qx="@firebase/analytics-compat",Zx="@firebase/analytics",Jx="@firebase/app-check-compat",e1="@firebase/app-check",t1="@firebase/auth",n1="@firebase/auth-compat",r1="@firebase/database",i1="@firebase/database-compat",s1="@firebase/functions",o1="@firebase/functions-compat",a1="@firebase/installations",c1="@firebase/installations-compat",l1="@firebase/messaging",u1="@firebase/messaging-compat",f1="@firebase/performance",h1="@firebase/performance-compat",d1="@firebase/remote-config",x1="@firebase/remote-config-compat",p1="@firebase/storage",_1="@firebase/storage-compat",v1="@firebase/firestore",g1="@firebase/firestore-compat",m1="firebase",E1="9.23.0";/**
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
 */const to="[DEFAULT]",C1={[eo]:"fire-core",[Xx]:"fire-core-compat",[Zx]:"fire-analytics",[Qx]:"fire-analytics-compat",[e1]:"fire-app-check",[Jx]:"fire-app-check-compat",[t1]:"fire-auth",[n1]:"fire-auth-compat",[r1]:"fire-rtdb",[i1]:"fire-rtdb-compat",[s1]:"fire-fn",[o1]:"fire-fn-compat",[a1]:"fire-iid",[c1]:"fire-iid-compat",[l1]:"fire-fcm",[u1]:"fire-fcm-compat",[f1]:"fire-perf",[h1]:"fire-perf-compat",[d1]:"fire-rc",[x1]:"fire-rc-compat",[p1]:"fire-gcs",[_1]:"fire-gcs-compat",[v1]:"fire-fst",[g1]:"fire-fst-compat","fire-js":"fire-js",[m1]:"fire-js-all"};/**
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
 */const h0=new Map,no=new Map;function y1(n,e){try{n.container.addComponent(e)}catch(t){un.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function On(n){const e=n.name;if(no.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;no.set(e,n);for(const t of h0.values())y1(t,n);return!0}function To(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const A1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new Or("app","Firebase",A1);/**
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
 */class b1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const $n=E1;function M0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:to,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(t||(t=Vu()),!t)throw Ut.create("no-options");const s=h0.get(i);if(s){if(f0(t,s.options)&&f0(r,s.config))return s;throw Ut.create("duplicate-app",{appName:i})}const o=new Tx(i);for(const l of no.values())o.addComponent(l);const c=new b1(t,r,o);return h0.set(i,c),c}function Lr(n=to){const e=h0.get(n);if(!e&&n===to&&Vu())return M0();if(!e)throw Ut.create("no-app",{appName:n});return e}function zt(n,e,t){var r;let i=(r=C1[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(c.join(" "));return}On(new ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const D1="firebase-heartbeat-database",B1=1,yr="firebase-heartbeat-store";let Zi=null;function Qu(){return Zi||(Zi=Vx(D1,B1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(yr)}}}).catch(n=>{throw Ut.create("idb-open",{originalErrorMessage:n.message})})),Zi}async function w1(n){try{return await(await Qu()).transaction(yr).objectStore(yr).get(Zu(n))}catch(e){if(e instanceof Zt)un.warn(e.message);else{const t=Ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(t.message)}}}async function fc(n,e){try{const r=(await Qu()).transaction(yr,"readwrite");await r.objectStore(yr).put(e,Zu(n)),await r.done}catch(t){if(t instanceof Zt)un.warn(t.message);else{const r=Ut.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});un.warn(r.message)}}}function Zu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const F1=1024,I1=30*24*60*60*1e3;class k1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new T1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=I1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hc(),{heartbeatsToSend:t,unsentEntries:r}=S1(this._heartbeatsCache.heartbeats),i=c0(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hc(){return new Date().toISOString().substring(0,10)}function S1(n,e=F1){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),dc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class T1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vx()?gx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await w1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dc(n){return c0(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function R1(n){On(new ln("platform-logger",e=>new Kx(e),"PRIVATE")),On(new ln("heartbeat",e=>new k1(e),"PRIVATE")),zt(eo,uc,n),zt(eo,uc,"esm2017"),zt("fire-js","")}R1("");var N1="firebase",P1="9.23.0";/**
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
 */zt(N1,P1,"app");function Ro(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ju(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const O1=Ju,ef=new Or("auth","Firebase",Ju());/**
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
 */const d0=new ko("@firebase/auth");function L1(n,...e){d0.logLevel<=he.WARN&&d0.warn(`Auth (${$n}): ${n}`,...e)}function Jr(n,...e){d0.logLevel<=he.ERROR&&d0.error(`Auth (${$n}): ${n}`,...e)}/**
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
 */function wt(n,...e){throw No(n,...e)}function ht(n,...e){return No(n,...e)}function M1(n,e,t){const r=Object.assign(Object.assign({},O1()),{[e]:t});return new Or("auth","Firebase",r).create(e,{appName:n.name})}function No(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ef.create(n,...e)}function J(n,e,...t){if(!n)throw No(e,...t)}function Ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jr(e),new Error(e)}function Ft(n,e){n||Ct(e)}/**
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
 */function ro(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function H1(){return xc()==="http:"||xc()==="https:"}function xc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function U1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H1()||xx()||"connection"in navigator)?navigator.onLine:!0}function z1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Fo()||ju()}get(){return U1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Po(n,e){Ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class tf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const W1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const q1=new Mr(3e4,6e4);function nf(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Hr(n,e,t,r,i={}){return rf(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=qn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),tf.fetch()(sf(n,n.config.apiHost,t,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},W1),e);try{const i=new V1(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Kr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,a]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kr(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw M1(n,u,a);wt(n,u)}}catch(i){if(i instanceof Zt)throw i;wt(n,"network-request-failed",{message:String(i)})}}async function $1(n,e,t,r,i={}){const s=await Hr(n,e,t,r,i);return"mfaPendingCredential"in s&&wt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function sf(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Po(n.config,i):`${n.config.apiScheme}://${i}`}class V1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),q1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ht(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function G1(n,e){return Hr(n,"POST","/v1/accounts:delete",e)}async function j1(n,e){return Hr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function hr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K1(n,e=!1){const t=et(n),r=await t.getIdToken(e),i=Oo(r);J(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hr(Ji(i.auth_time)),issuedAtTime:hr(Ji(i.iat)),expirationTime:hr(Ji(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ji(n){return Number(n)*1e3}function Oo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Jr("JWT malformed, contained fewer than 3 sections"),null;try{const i=l0(t);return i?JSON.parse(i):(Jr("Failed to decode base64 JWT payload"),null)}catch(i){return Jr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Y1(n){const e=Oo(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ar(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Zt&&X1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function X1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Q1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class of{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function x0(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ar(n,j1(t,{idToken:r}));J(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ep(s.providerUserInfo):[],c=J1(n.providerData,o),l=n.isAnonymous,a=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),u=l?a:!1,x={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new of(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,x)}async function Z1(n){const e=et(n);await x0(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function J1(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ep(n){return n.map(e=>{var{providerId:t}=e,r=Ro(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tp(n,e){const t=await rf(n,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=sf(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",tf.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Y1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await tp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new br;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
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
 */function Nt(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new of(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ar(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K1(this,e)}reload(){return Z1(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await x0(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ar(this,G1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,l,a,u;const x=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,h=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,d=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(c=t.tenantId)!==null&&c!==void 0?c:void 0,_=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(a=t.createdAt)!==null&&a!==void 0?a:void 0,p=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:m,isAnonymous:A,providerData:D,stsTokenManager:b}=t;J(v&&b,e,"internal-error");const B=br.fromJSON(this.name,b);J(typeof v=="string",e,"internal-error"),Nt(x,e.name),Nt(f,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof A=="boolean",e,"internal-error"),Nt(h,e.name),Nt(d,e.name),Nt(g,e.name),Nt(_,e.name),Nt(E,e.name),Nt(p,e.name);const k=new on({uid:v,auth:e,email:f,emailVerified:m,displayName:x,isAnonymous:A,photoURL:d,phoneNumber:h,tenantId:g,stsTokenManager:B,createdAt:E,lastLoginAt:p});return D&&Array.isArray(D)&&(k.providerData=D.map(C=>Object.assign({},C))),_&&(k._redirectEventId=_),k}static async _fromIdTokenResponse(e,t,r=!1){const i=new br;i.updateFromServerResponse(t);const s=new on({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await x0(s),s}}/**
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
 */const pc=new Map;function yt(n){Ft(n instanceof Function,"Expected a class definition");let e=pc.get(n);return e?(Ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pc.set(n,e),e)}/**
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
 */class af{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}af.type="NONE";const _c=af;/**
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
 */function e0(n,e,t){return`firebase:${n}:${e}:${t}`}class kn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=e0(this.userKey,i.apiKey,s),this.fullPersistenceKey=e0("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new kn(yt(_c),e,r);const i=(await Promise.all(t.map(async a=>{if(await a._isAvailable())return a}))).filter(a=>a);let s=i[0]||yt(_c);const o=e0(r,e.config.apiKey,e.name);let c=null;for(const a of t)try{const u=await a._get(o);if(u){const x=on._fromJSON(e,u);a!==s&&(c=x),s=a;break}}catch{}const l=i.filter(a=>a._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new kn(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async a=>{if(a!==s)try{await a._remove(o)}catch{}})),new kn(s,e,r))}}/**
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
 */function vc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hf(e))return"Blackberry";if(df(e))return"Webos";if(Lo(e))return"Safari";if((e.includes("chrome/")||lf(e))&&!e.includes("edge/"))return"Chrome";if(ff(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cf(n=Me()){return/firefox\//i.test(n)}function Lo(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lf(n=Me()){return/crios\//i.test(n)}function uf(n=Me()){return/iemobile/i.test(n)}function ff(n=Me()){return/android/i.test(n)}function hf(n=Me()){return/blackberry/i.test(n)}function df(n=Me()){return/webos/i.test(n)}function H0(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function np(n=Me()){var e;return H0(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rp(){return px()&&document.documentMode===10}function xf(n=Me()){return H0(n)||ff(n)||df(n)||hf(n)||/windows phone/i.test(n)||uf(n)}function ip(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function pf(n,e=[]){let t;switch(n){case"Browser":t=vc(Me());break;case"Worker":t=`${vc(Me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$n}/${r}`}async function _f(n,e){return Hr(n,"GET","/v2/recaptchaConfig",nf(n,e))}function gc(n){return n!==void 0&&n.enterprise!==void 0}class vf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function sp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function gf(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",sp().appendChild(r)})}function op(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ap="https://www.google.com/recaptcha/enterprise.js?render=",cp="recaptcha-enterprise",lp="NO_RECAPTCHA";class up{constructor(e){this.type=cp,this.auth=U0(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{_f(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const a=new vf(l);return s.tenantId==null?s._agentRecaptchaConfig=a:s._tenantRecaptchaConfigs[s.tenantId]=a,o(a.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;gc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(a=>{o(a)}).catch(()=>{o(lp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&gc(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gf(ap+c).then(()=>{i(c,s,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}/**
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
 */class fp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class hp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mc(this),this.idTokenSubscription=new mc(this),this.beforeStateQueue=new fp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ef,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await x0(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=z1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?et(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}async initializeRecaptchaConfig(){const e=await _f(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new vf(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new up(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&L1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function U0(n){return et(n)}class mc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dx(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function dp(n,e){const t=To(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(f0(s,e??{}))return i;wt(i,"already-initialized")}return t.initialize({options:e})}function xp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(yt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pp(n,e,t){const r=U0(n);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=mf(e),{host:o,port:c}=_p(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),vp()}function mf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _p(n){const e=mf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ec(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ec(o)}}}function Ec(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ef{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,t){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}/**
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
 */async function Sn(n,e){return $1(n,"POST","/v1/accounts:signInWithIdp",nf(n,e))}/**
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
 */const gp="http://localhost";class fn extends Ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ro(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Sn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sn(e,t)}buildRequest(){const e={requestUri:gp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qn(t)}return e}}/**
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
 */class Cf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ur extends Cf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends Ur{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class Lt extends Ur{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */class Mt extends Ur{constructor(){super("twitter.com")}static credential(e,t){return fn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await on._fromIdTokenResponse(e,r,i),o=Cc(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Cc(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Cc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class p0 extends Zt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,p0.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new p0(e,t,r,i)}}function yf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?p0._fromErrorAndOperation(n,s,e,r):s})}async function mp(n,e,t=!1){const r=await Ar(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ln._forOperation(n,"link",r)}/**
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
 */async function Ep(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Ar(n,yf(r,i,e,n),t);J(s.idToken,r,"internal-error");const o=Oo(s.idToken);J(o,r,"internal-error");const{sub:c}=o;return J(n.uid===c,r,"user-mismatch"),Ln._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),s}}/**
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
 */async function Cp(n,e,t=!1){const r="signIn",i=await yf(n,r,e),s=await Ln._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function yp(n,e,t,r){return et(n).onIdTokenChanged(e,t,r)}function Ap(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function bp(n,e,t,r){return et(n).onAuthStateChanged(e,t,r)}const _0="__sak";/**
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
 */class Af{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_0,"1"),this.storage.removeItem(_0),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dp(){const n=Me();return Lo(n)||H0(n)}const Bp=1e3,wp=10;class bf extends Af{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dp()&&ip(),this.fallbackToPolling=xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bf.type="LOCAL";const Fp=bf;/**
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
 */class Df extends Af{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Df.type="SESSION";const Bf=Df;/**
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
 */function Ip(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class z0{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new z0(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async a=>a(t.origin,s)),l=await Ip(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}z0.receivers=[];/**
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
 */function Mo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const a=Mo("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(x){const f=x;if(f.data.eventId===a)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:a,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dt(){return window}function Sp(n){dt().location.href=n}/**
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
 */function wf(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Tp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Np(){return wf()?self:null}/**
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
 */const Ff="firebaseLocalStorageDb",Pp=1,v0="firebaseLocalStorage",If="fbase_key";class zr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function W0(n,e){return n.transaction([v0],e?"readwrite":"readonly").objectStore(v0)}function Op(){const n=indexedDB.deleteDatabase(Ff);return new zr(n).toPromise()}function io(){const n=indexedDB.open(Ff,Pp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(v0,{keyPath:If})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(v0)?e(r):(r.close(),await Op(),e(await io()))})})}async function yc(n,e,t){const r=W0(n,!0).put({[If]:e,value:t});return new zr(r).toPromise()}async function Lp(n,e){const t=W0(n,!1).get(e),r=await new zr(t).toPromise();return r===void 0?null:r.value}function Ac(n,e){const t=W0(n,!0).delete(e);return new zr(t).toPromise()}const Mp=800,Hp=3;class kf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await io(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=z0._getInstance(Np()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tp(),!this.activeServiceWorker)return;this.sender=new kp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await io();return await yc(e,_0,"1"),await Ac(e,_0),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Lp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ac(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=W0(i,!1).getAll();return new zr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kf.type="LOCAL";const Up=kf;new Mr(3e4,6e4);/**
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
 */function zp(n,e){return e?yt(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ho extends Ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wp(n){return Cp(n.auth,new Ho(n),n.bypassAuthState)}function qp(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),Ep(t,new Ho(n),n.bypassAuthState)}async function $p(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),mp(t,new Ho(n),n.bypassAuthState)}/**
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
 */class Sf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(a){this.reject(a)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wp;case"linkViaPopup":case"linkViaRedirect":return $p;case"reauthViaPopup":case"reauthViaRedirect":return qp;default:wt(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vp=new Mr(2e3,1e4);class Dn extends Sf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=Mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vp.get())};e()}}Dn.currentPopupAction=null;/**
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
 */const Gp="pendingRedirect",t0=new Map;class jp extends Sf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=t0.get(this.auth._key());if(!e){try{const r=await Kp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}t0.set(this.auth._key(),e)}return this.bypassAuthState||t0.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kp(n,e){const t=Qp(e),r=Xp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Yp(n,e){t0.set(n._key(),e)}function Xp(n){return yt(n._redirectPersistence)}function Qp(n){return e0(Gp,n.config.apiKey,n.name)}async function Zp(n,e,t=!1){const r=U0(n),i=zp(r,e),o=await new jp(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Jp=10*60*1e3;class e_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!t_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Tf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jp&&this.cachedEventUids.clear(),this.cachedEventUids.has(bc(e))}saveEventToCache(e){this.cachedEventUids.add(bc(e)),this.lastProcessedEventTime=Date.now()}}function bc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function t_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tf(n);default:return!1}}/**
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
 */async function n_(n,e={}){return Hr(n,"GET","/v1/projects",e)}/**
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
 */const r_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i_=/^https?/;async function s_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await n_(n);for(const t of e)try{if(o_(t))return}catch{}wt(n,"unauthorized-domain")}function o_(n){const e=ro(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!i_.test(t))return!1;if(r_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const a_=new Mr(3e4,6e4);function Dc(){const n=dt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function c_(n){return new Promise((e,t)=>{var r,i,s;function o(){Dc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dc(),t(ht(n,"network-request-failed"))},timeout:a_.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)o();else{const c=op("iframefcb");return dt()[c]=()=>{gapi.load?o():t(ht(n,"network-request-failed"))},gf(`https://apis.google.com/js/api.js?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw n0=null,e})}let n0=null;function l_(n){return n0=n0||c_(n),n0}/**
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
 */const u_=new Mr(5e3,15e3),f_="__/auth/iframe",h_="emulator/auth/iframe",d_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function p_(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Po(e,h_):`https://${n.config.authDomain}/${f_}`,r={apiKey:e.apiKey,appName:n.name,v:$n},i=x_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${qn(r).slice(1)}`}async function __(n){const e=await l_(n),t=dt().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:p_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(n,"network-request-failed"),c=dt().setTimeout(()=>{s(o)},u_.get());function l(){dt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const v_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g_=500,m_=600,E_="_blank",C_="http://localhost";class Bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y_(n,e,t,r=g_,i=m_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},v_),{width:r.toString(),height:i.toString(),top:s,left:o}),a=Me().toLowerCase();t&&(c=lf(a)?E_:t),cf(a)&&(e=e||C_,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,d])=>`${f}${h}=${d},`,"");if(np(a)&&c!=="_self")return A_(e||"",c),new Bc(null);const x=window.open(e||"",c,u);J(x,n,"popup-blocked");try{x.focus()}catch{}return new Bc(x)}function A_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const b_="__/auth/handler",D_="emulator/auth/handler",B_=encodeURIComponent("fac");async function wc(n,e,t,r,i,s){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$n,eventId:i};if(e instanceof Cf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Qs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,x]of Object.entries({}))o[u]=x}if(e instanceof Ur){const u=e.getScopes().filter(x=>x!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await n._getAppCheckToken(),a=l?`#${B_}=${encodeURIComponent(l)}`:"";return`${w_(n)}?${qn(c).slice(1)}${a}`}function w_({config:n}){return n.emulator?Po(n,D_):`https://${n.authDomain}/${b_}`}/**
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
 */const es="webStorageSupport";class F_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bf,this._completeRedirectFn=Zp,this._overrideRedirectResult=Yp}async _openPopup(e,t,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wc(e,t,r,ro(),i);return y_(e,o,Mo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await wc(e,t,r,ro(),i);return Sp(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await __(e),r=new e_(e);return t.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(es,{type:es},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[es];o!==void 0&&t(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=s_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xf()||Lo()||H0()}}const I_=F_;var Fc="@firebase/auth",Ic="0.23.2";/**
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
 */class k_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function T_(n){On(new ln("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pf(n)},a=new hp(r,i,s,l);return xp(a,t),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),On(new ln("auth-internal",e=>{const t=U0(e.getProvider("auth").getImmediate());return(r=>new k_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Fc,Ic,S_(n)),zt(Fc,Ic,"esm2017")}/**
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
 */const R_=5*60,N_=Gu("authIdTokenMaxAge")||R_;let kc=null;const P_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>N_)return;const i=t==null?void 0:t.token;kc!==i&&(kc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function O_(n=Lr()){const e=To(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dp(n,{popupRedirectResolver:I_,persistence:[Up,Fp,Bf]}),r=Gu("authTokenSyncURL");if(r){const s=P_(r);Ap(t,s,()=>s(t.currentUser)),yp(t,o=>s(o))}const i=$u("auth");return i&&pp(t,`http://${i}`),t}T_("Browser");var Sc={};const Tc="@firebase/database",Rc="0.14.4";/**
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
 */let Rf="";function L_(n){Rf=n}/**
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
 */class M_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Cr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class H_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Nf=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new M_(e)}}catch{}return new H_},nn=Nf("localStorage"),U_=Nf("sessionStorage");/**
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
 */const Tn=new ko("@firebase/database"),z_=function(){let n=1;return function(){return n++}}(),Pf=function(n){const e=Fx(n),t=new bx;t.update(e);const r=t.digest();return Bo.encodeByteArray(r)},Wr=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Wr.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let dr=null,Nc=!0;const W_=function(n,e){L(!0,"Can't turn on custom loggers persistently."),Tn.logLevel=he.VERBOSE,dr=Tn.log.bind(Tn)},Ne=function(...n){if(Nc===!0&&(Nc=!1,dr===null&&U_.get("logging_enabled")===!0&&W_()),dr){const e=Wr.apply(null,n);dr(e)}},qr=function(n){return function(...e){Ne(n,...e)}},so=function(...n){const e="FIREBASE INTERNAL ERROR: "+Wr(...n);Tn.error(e)},It=function(...n){const e=`FIREBASE FATAL ERROR: ${Wr(...n)}`;throw Tn.error(e),new Error(e)},Ge=function(...n){const e="FIREBASE WARNING: "+Wr(...n);Tn.warn(e)},q_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},$_=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},hn="[MIN_NAME]",Vt="[MAX_NAME]",vn=function(n,e){if(n===e)return 0;if(n===hn||e===Vt)return-1;if(e===hn||n===Vt)return 1;{const t=Pc(n),r=Pc(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},V_=function(n,e){return n===e?0:n<e?-1:1},or=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Be(e))},zo=function(n){if(typeof n!="object"||n===null)return Be(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Be(e[r]),t+=":",t+=zo(n[e[r]]);return t+="}",t},Of=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Pe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Lf=function(n){L(!Uo(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,c,l;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=c+r,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const a=[];for(l=t;l;l-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)a.push(s%2?1:0),s=Math.floor(s/2);a.push(i?1:0),a.reverse();const u=a.join("");let x="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),x=x+f}return x.toLowerCase()},G_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},j_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function K_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const Y_=new RegExp("^-?(0*)\\d{1,10}$"),X_=-2147483648,Q_=2147483647,Pc=function(n){if(Y_.test(n)){const e=Number(n);if(e>=X_&&e<=Q_)return e}return null},Vn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ge("Exception was thrown by user callback.",t),e},Math.floor(0))}},Z_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class J_{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ev{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class r0{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}r0.OWNER="owner";/**
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
 */const Wo="5",Mf="v",Hf="s",Uf="r",zf="f",Wf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qf="ls",$f="p",oo="ac",Vf="websocket",Gf="long_polling";/**
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
 */class jf{constructor(e,t,r,i,s=!1,o="",c=!1,l=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=nn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&nn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function tv(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Kf(n,e,t){L(typeof e=="string","typeof type must == string"),L(typeof t=="object","typeof params must == object");let r;if(e===Vf)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Gf)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tv(n)&&(t.ns=n.namespace);const i=[];return Pe(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class nv{constructor(){this.counters_={}}incrementCounter(e,t=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ox(this.counters_)}}/**
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
 */const ts={},ns={};function qo(n){const e=n.toString();return ts[e]||(ts[e]=new nv),ts[e]}function rv(n,e){const t=n.toString();return ns[t]||(ns[t]=e()),ns[t]}/**
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
 */class iv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Vn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Oc="start",sv="close",ov="pLPCommand",av="pRTLPCB",Yf="id",Xf="pw",Qf="ser",cv="cb",lv="seg",uv="ts",fv="d",hv="dframe",Zf=1870,Jf=30,dv=Zf-Jf,xv=25e3,pv=3e4;class Bn{constructor(e,t,r,i,s,o,c){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qr(e),this.stats_=qo(t),this.urlFn=l=>(this.appCheckToken&&(l[oo]=this.appCheckToken),Kf(t,Gf,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new iv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pv)),$_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $o((...s)=>{const[o,c,l,a,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Oc)this.id=c,this.password=l;else if(o===sv)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,c]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const r={};r[Oc]="t",r[Qf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[cv]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Mf]=Wo,this.transportSessionId&&(r[Hf]=this.transportSessionId),this.lastSessionId&&(r[qf]=this.lastSessionId),this.applicationId&&(r[$f]=this.applicationId),this.appCheckToken&&(r[oo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wf.test(location.hostname)&&(r[Uf]=zf);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bn.forceAllow_=!0}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){return Bn.forceAllow_?!0:!Bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!G_()&&!j_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Wu(t),i=Of(r,dv);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[hv]="t",r[Yf]=e,r[Xf]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $o{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=z_(),window[ov+this.uniqueCallbackIdentifier]=e,window[av+this.uniqueCallbackIdentifier]=t,this.myIFrame=$o.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){Ne("frame writing exception"),c.stack&&Ne(c.stack),Ne(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yf]=this.myID,e[Xf]=this.myPW,e[Qf]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jf+r.length<=Zf;){const o=this.pendingSegs.shift();r=r+"&"+lv+i+"="+o.seg+"&"+uv+i+"="+o.ts+"&"+fv+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(xv)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const _v=16384,vv=45e3;let g0=null;typeof MozWebSocket<"u"?g0=MozWebSocket:typeof WebSocket<"u"&&(g0=WebSocket);class ct{constructor(e,t,r,i,s,o,c){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qr(this.connId),this.stats_=qo(t),this.connURL=ct.connectionURL_(t,o,c,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[Mf]=Wo,typeof location<"u"&&location.hostname&&Wf.test(location.hostname)&&(o[Uf]=zf),t&&(o[Hf]=t),r&&(o[qf]=r),i&&(o[oo]=i),s&&(o[$f]=s),Kf(e,Vf,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,nn.set("previous_websocket_failure",!0);try{let r;_x(),this.mySock=new g0(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&g0!==null&&!ct.forceDisallow_}static previouslyFailed(){return nn.isInMemoryStorage||nn.get("previous_websocket_failure")===!0}markConnectionHealthy(){nn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Cr(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Of(t,_v);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vv))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
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
 */class Dr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bn,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ct&&ct.isAvailable();let r=t&&!ct.previouslyFailed();if(e.webSocketOnly&&(t||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ct];else{const i=this.transports_=[];for(const s of Dr.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Dr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Dr.globalTransportInitialized_=!1;/**
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
 */const gv=6e4,mv=5e3,Ev=10*1024,Cv=100*1024,rs="t",Lc="d",yv="s",Mc="r",Av="e",Hc="o",Uc="a",zc="n",Wc="p",bv="h";class Dv{constructor(e,t,r,i,s,o,c,l,a,u){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qr("c:"+this.id+":"),this.transportManager_=new Dr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Cv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ev?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rs in e){const t=e[rs];t===Uc?this.upgradeIfSecondaryHealthy_():t===Mc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Hc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=or("t",e),r=or("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=or("t",e),r=or("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=or(rs,e);if(Lc in e){const r=e[Lc];if(t===bv){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===zc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===yv?this.onConnectionShutdown_(r):t===Mc?this.onReset_(r):t===Av?so("Server Error: "+r):t===Hc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):so("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Wo!==r&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),xr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(nn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class eh{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class th{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class m0 extends th{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new m0}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const qc=32,$c=768;class de{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ce(){return new de("")}function ie(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Gt(n){return n.pieces_.length-n.pieceNum_}function ge(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new de(n.pieces_,e)}function Vo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Bv(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Br(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function nh(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new de(e,0)}function Ae(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new de(t,0)}function ne(n){return n.pieceNum_>=n.pieces_.length}function Ue(n,e){const t=ie(n),r=ie(e);if(t===null)return e;if(t===r)return Ue(ge(n),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function wv(n,e){const t=Br(n,0),r=Br(e,0);for(let i=0;i<t.length&&i<r.length;i++){const s=vn(t[i],r[i]);if(s!==0)return s}return t.length===r.length?0:t.length<r.length?-1:1}function rh(n,e){if(Gt(n)!==Gt(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function tt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Gt(n)>Gt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Fv{constructor(e,t){this.errorPrefix_=t,this.parts_=Br(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=L0(this.parts_[r]);ih(this)}}function Iv(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=L0(e),ih(n)}function kv(n){const e=n.parts_.pop();n.byteLength_-=L0(e),n.parts_.length>0&&(n.byteLength_-=1)}function ih(n){if(n.byteLength_>$c)throw new Error(n.errorPrefix_+"has a key path longer than "+$c+" bytes ("+n.byteLength_+").");if(n.parts_.length>qc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qc+") or object contains a cycle "+tn(n))}function tn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Go extends th{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Go}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ar=1e3,Sv=60*5*1e3,Vc=30*1e3,Tv=1.3,Rv=3e4,Nv="server_kill",Gc=3;class Bt extends eh{constructor(e,t,r,i,s,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ar,this.maxReconnectDelay_=Sv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Go.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&m0.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Be(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new O0,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,c=>{const l=c.d,a=c.s;Bt.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",c),a!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(a,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&_t(e,"w")){const r=Pn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ax(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):so("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ar,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ar,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Rv&&(this.reconnectDelay_=ar),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Tv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,s=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,r())},a=function(x){L(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(x)};this.realtime_={close:l,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[x,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=x&&x.accessToken,this.appCheckToken_=f&&f.token,c=new Dv(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,h=>{Ge(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Nv)},s))}catch(x){this.log_("Failed to get token: "+x),o||(this.repoInfo_.nodeAdmin&&Ge(x),l())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qs(this.interruptReasons_)&&(this.reconnectDelay_=ar,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>zo(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){Ne("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gc&&(this.reconnectDelay_=Vc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ne("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Rf.replace(/\./g,"-")]=1,Fo()?e["framework.cordova"]=1:ju()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=m0.getInstance().currentlyOnline();return Qs(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
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
 */class te{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new te(e,t)}}/**
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
 */class q0{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new te(hn,e),i=new te(hn,t);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
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
 */let Yr;class sh extends q0{static get __EMPTY_NODE(){return Yr}static set __EMPTY_NODE(e){Yr=e}compare(e,t){return vn(e.name,t.name)}isDefinedOn(e){throw Wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return te.MIN}maxPost(){return new te(Vt,Yr)}makePost(e,t){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Yr)}toString(){return".key"}}const Wt=new sh;/**
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
 */class Xr{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Fe.RED,this.left=i??Ve.EMPTY_NODE,this.right=s??Ve.EMPTY_NODE}copy(e,t,r,i,s){return new Fe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class Pv{copy(e,t,r,i,s){return this}insert(e,t,r){return new Fe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,t=Ve.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ve(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xr(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new Pv;/**
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
 */function Ov(n,e){return vn(n.name,e.name)}function jo(n,e){return vn(n,e)}/**
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
 */let ao;function Lv(n){ao=n}const oh=function(n){return typeof n=="number"?"number:"+Lf(n):"string:"+n},ah=function(n){if(n.isLeafNode()){const e=n.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else L(n===ao||n.isEmpty(),"priority of unexpected type.");L(n===ao||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jc;class we{constructor(e,t=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ah(this.priorityNode_)}static set __childrenNodeConstructor(e){jc=e}static get __childrenNodeConstructor(){return jc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:ie(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=ie(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Gt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oh(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Lf(this.value_):e+=this.value_,this.lazyHash_=Pf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(t),s=we.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+t),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ch,lh;function Mv(n){ch=n}function Hv(n){lh=n}class Uv extends q0{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?vn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Vt,new we("[PRIORITY-POST]",lh))}makePost(e,t){const r=ch(e);return new te(t,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ce=new Uv;/**
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
 */const zv=Math.log(2);class Wv{constructor(e){const t=s=>parseInt(Math.log(s)/zv,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const E0=function(n,e,t,r){n.sort(e);const i=function(l,a){const u=a-l;let x,f;if(u===0)return null;if(u===1)return x=n[l],f=t?t(x):x,new Fe(f,x.node,Fe.BLACK,null,null);{const h=parseInt(u/2,10)+l,d=i(l,h),g=i(h+1,a);return x=n[h],f=t?t(x):x,new Fe(f,x.node,Fe.BLACK,d,g)}},s=function(l){let a=null,u=null,x=n.length;const f=function(d,g){const _=x-d,E=x;x-=d;const p=i(_+1,E),v=n[_],m=t?t(v):v;h(new Fe(m,v.node,g,null,p))},h=function(d){a?(a.left=d,a=d):(u=d,a=d)};for(let d=0;d<l.count;++d){const g=l.nextBitIsOne(),_=Math.pow(2,l.count-(d+1));g?f(_,Fe.BLACK):(f(_,Fe.BLACK),f(_,Fe.RED))}return u},o=new Wv(n.length),c=s(o);return new Ve(r||e,c)};/**
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
 */let is;const An={};class At{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return L(An&&Ce,"ChildrenNode.ts has not been loaded"),is=is||new At({".priority":An},{".priority":Ce}),is}get(e){const t=Pn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ve?t:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,t){L(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let c;i?c=E0(r,e.getCompare()):c=An;const l=e.toString(),a=Object.assign({},this.indexSet_);a[l]=e;const u=Object.assign({},this.indexes_);return u[l]=c,new At(u,a)}addToIndexes(e,t){const r=u0(this.indexes_,(i,s)=>{const o=Pn(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===An)if(o.isDefinedOn(e.node)){const c=[],l=t.getIterator(te.Wrap);let a=l.getNext();for(;a;)a.name!==e.name&&c.push(a),a=l.getNext();return c.push(e),E0(c,o.getCompare())}else return An;else{const c=t.get(e.name);let l=i;return c&&(l=l.remove(new te(e.name,c))),l.insert(e,e.node)}});return new At(r,this.indexSet_)}removeFromIndexes(e,t){const r=u0(this.indexes_,i=>{if(i===An)return i;{const s=t.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new At(r,this.indexSet_)}}/**
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
 */let cr;class Z{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ah(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return cr||(cr=new Z(new Ve(jo),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cr}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?cr:t}}getChild(e){const t=ie(e);return t===null?this:this.getImmediateChild(t).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(L(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new te(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?cr:this.priorityNode_;return new Z(i,o,s)}}updateChild(e,t){const r=ie(e);if(r===null)return t;{L(ie(e)!==".priority"||Gt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ge(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(Ce,(o,c)=>{t[o]=c.val(e),r++,s&&Z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+oh(this.getPriority().val())+":"),this.forEachChild(Ce,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Pf(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new te(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new te(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$r?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Ce),i=t.getIterator(Ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qv extends Z{constructor(){super(new Ve(jo),Z.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const $r=new qv;Object.defineProperties(te,{MIN:{value:new te(hn,Z.EMPTY_NODE)},MAX:{value:new te(Vt,$r)}});sh.__EMPTY_NODE=Z.EMPTY_NODE;we.__childrenNodeConstructor=Z;Lv($r);Hv($r);/**
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
 */const $v=!0;function Ie(n,e=null){if(n===null)return Z.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new we(t,Ie(e))}if(!(n instanceof Array)&&$v){const t=[];let r=!1;if(Pe(n,(o,c)=>{if(o.substring(0,1)!=="."){const l=Ie(c);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new te(o,l)))}}),t.length===0)return Z.EMPTY_NODE;const s=E0(t,Ov,o=>o.name,jo);if(r){const o=E0(t,Ce.getCompare());return new Z(s,Ie(e),new At({".priority":o},{".priority":Ce}))}else return new Z(s,Ie(e),At.Default)}else{let t=Z.EMPTY_NODE;return Pe(n,(r,i)=>{if(_t(n,r)&&r.substring(0,1)!=="."){const s=Ie(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(Ie(e))}}Mv(Ie);/**
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
 */class uh extends q0{constructor(e){super(),this.indexPath_=e,L(!ne(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?vn(e.name,t.name):s}makePost(e,t){const r=Ie(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(t,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,$r);return new te(Vt,e)}toString(){return Br(this.indexPath_,0).join("/")}}/**
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
 */class Vv extends q0{compare(e,t){const r=e.node.compareTo(t.node);return r===0?vn(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,t){const r=Ie(e);return new te(t,r)}toString(){return".value"}}const fh=new Vv;/**
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
 */function hh(n){return{type:"value",snapshotNode:n}}function Mn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function wr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Fr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Gv(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ko{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(i).equals(r.getChild(i))&&c.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(wr(t,c)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(Mn(t,r)):o.trackChildChange(Fr(t,r,c))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ce,(i,s)=>{t.hasChild(i)||r.trackChildChange(wr(i,s))}),t.isLeafNode()||t.forEachChild(Ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Fr(i,s,o))}else r.trackChildChange(Mn(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ir{constructor(e){this.indexedFilter_=new Ko(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ir.getStartPost_(e),this.endPost_=Ir.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new te(t,r))||(r=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Z.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const s=this;return t.forEachChild(Ce,(o,c)=>{s.matches(new te(o,c))||(i=i.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class jv{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ir(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new te(t,r))||(r=Z.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const c=s.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))i=i.updateImmediateChild(c.name,c.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const c=s.getNext();o<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?o++:i=i.updateImmediateChild(c.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const x=this.index_.getCompare();o=(f,h)=>x(h,f)}else o=this.index_.getCompare();const c=e;L(c.numChildren()===this.limit_,"");const l=new te(t,r),a=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(c.hasChild(t)){const x=c.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===t||c.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,l);if(u&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(Fr(t,r,x)),c.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(wr(t,x));const g=c.updateImmediateChild(t,Z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Mn(f.name,f.node)),g.updateImmediateChild(f.name,f.node)):g}}else return r.isEmpty()?e:u&&o(a,l)>=0?(s!=null&&(s.trackChildChange(wr(a.name,a.node)),s.trackChildChange(Mn(t,r))),c.updateImmediateChild(t,r).updateImmediateChild(a.name,Z.EMPTY_NODE)):e}}/**
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
 */class Yo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hn}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new Yo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kv(n){return n.loadsAllData()?new Ko(n.getIndex()):n.hasLimit()?new jv(n):new Ir(n)}function Yv(n,e){const t=n.copy();return t.index_=e,t}function Kc(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ce?t="$priority":n.index_===fh?t="$value":n.index_===Wt?t="$key":(L(n.index_ instanceof uh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Be(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Be(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Be(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Be(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Be(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Yc(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ce&&(e.i=n.index_.toString()),e}/**
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
 */class C0 extends eh{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=C0.getListenId_(e,r),c={};this.listens_[o]=c;const l=Kc(e._queryParams);this.restRequest_(s+".json",l,(a,u)=>{let x=u;if(a===404&&(x=null,a=null),a===null&&this.onDataUpdate_(s,x,!1,r),Pn(this.listens_,o)===c){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,t){const r=C0.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Kc(e._queryParams),r=e._path.toString(),i=new O0;return this.restRequest_(r+".json",t,(s,o)=>{let c=o;s===404&&(c=null,s=null),s===null?(this.onDataUpdate_(r,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qn(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(r&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=Cr(c.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+c.responseText)}r(null,l)}else c.status!==401&&c.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+c.status),r(c.status);r=null}},c.open("GET",o,!0),c.send()})}}/**
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
 */class Xv{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function y0(){return{value:null,children:new Map}}function dh(n,e,t){if(ne(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=ie(e);n.children.has(r)||n.children.set(r,y0());const i=n.children.get(r);e=ge(e),dh(i,e,t)}}function co(n,e,t){n.value!==null?t(e,n.value):Qv(n,(r,i)=>{const s=new de(e.toString()+"/"+r);co(i,s,t)})}function Qv(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class Zv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Pe(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const Xc=10*1e3,Jv=30*1e3,eg=5*60*1e3;class tg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Zv(e);const r=Xc+(Jv-Xc)*Math.random();xr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Pe(e,(i,s)=>{s>0&&_t(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),xr(this.reportStats_.bind(this),Math.floor(Math.random()*2*eg))}}/**
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
 */var lt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function Xo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class A0{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=lt.ACK_USER_WRITE,this.source=Xo()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new de(e));return new A0(ce(),t,this.revert)}}else return L(ie(this.path)===e,"operationForChild called for unrelated child."),new A0(ge(this.path),this.affectedTree,this.revert)}}/**
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
 */class kr{constructor(e,t){this.source=e,this.path=t,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new kr(this.source,ce()):new kr(this.source,ge(this.path))}}/**
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
 */class dn{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=lt.OVERWRITE}operationForChild(e){return ne(this.path)?new dn(this.source,ce(),this.snap.getImmediateChild(e)):new dn(this.source,ge(this.path),this.snap)}}/**
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
 */class Hn{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=lt.MERGE}operationForChild(e){if(ne(this.path)){const t=this.children.subtree(new de(e));return t.isEmpty()?null:t.value?new dn(this.source,ce(),t.value):new Hn(this.source,ce(),t)}else return L(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hn(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class jt{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const t=ie(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ng{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rg(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Gv(o.childName,o.snapshotNode))}),lr(n,i,"child_removed",e,r,t),lr(n,i,"child_added",e,r,t),lr(n,i,"child_moved",s,r,t),lr(n,i,"child_changed",e,r,t),lr(n,i,"value",e,r,t),i}function lr(n,e,t,r,i,s){const o=r.filter(c=>c.type===t);o.sort((c,l)=>sg(n,c,l)),o.forEach(c=>{const l=ig(n,c,s);i.forEach(a=>{a.respondsTo(c.type)&&e.push(a.createEvent(l,n.query_))})})}function ig(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function sg(n,e,t){if(e.childName==null||t.childName==null)throw Wn("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function $0(n,e){return{eventCache:n,serverCache:e}}function pr(n,e,t,r){return $0(new jt(e,t,r),n.serverCache)}function xh(n,e,t,r){return $0(n.eventCache,new jt(e,t,r))}function b0(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function xn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ss;const og=()=>(ss||(ss=new Ve(V_)),ss);class _e{constructor(e,t=og()){this.value=e,this.children=t}static fromObject(e){let t=new _e(null);return Pe(e,(r,i)=>{t=t.set(new de(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ce(),value:this.value};if(ne(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ge(e),t);return s!=null?{path:Ae(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const t=ie(e),r=this.children.get(t);return r!==null?r.subtree(ge(e)):new _e(null)}}set(e,t){if(ne(e))return new _e(t,this.children);{const r=ie(e),s=(this.children.get(r)||new _e(null)).set(ge(e),t),o=this.children.insert(r,s);return new _e(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const t=ie(e),r=this.children.get(t);if(r){const i=r.remove(ge(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(ne(e))return this.value;{const t=ie(e),r=this.children.get(t);return r?r.get(ge(e)):null}}setTree(e,t){if(ne(e))return t;{const r=ie(e),s=(this.children.get(r)||new _e(null)).setTree(ge(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new _e(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ae(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ce(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(ne(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(ge(e),Ae(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ce(),t)}foreachOnPath_(e,t,r){if(ne(e))return this;{this.value&&r(t,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(ge(e),Ae(t,i),r):new _e(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Ae(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new _e(null))}}function _r(n,e,t){if(ne(e))return new ut(new _e(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ue(i,e);return s=s.updateChild(o,t),new ut(n.writeTree_.set(i,s))}else{const i=new _e(t),s=n.writeTree_.setTree(e,i);return new ut(s)}}}function lo(n,e,t){let r=n;return Pe(t,(i,s)=>{r=_r(r,Ae(e,i),s)}),r}function Qc(n,e){if(ne(e))return ut.empty();{const t=n.writeTree_.setTree(e,new _e(null));return new ut(t)}}function uo(n,e){return gn(n,e)!=null}function gn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ue(t.path,e)):null}function Zc(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ce,(r,i)=>{e.push(new te(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function qt(n,e){if(ne(e))return n;{const t=gn(n,e);return t!=null?new ut(new _e(t)):new ut(n.writeTree_.subtree(e))}}function fo(n){return n.writeTree_.isEmpty()}function Un(n,e){return ph(ce(),n.writeTree_,e)}function ph(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=ph(Ae(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Ae(n,".priority"),r)),t}}/**
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
 */function V0(n,e){return mh(e,n)}function ag(n,e,t,r,i){L(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=_r(n.visibleWrites,e,t)),n.lastWriteId=r}function cg(n,e,t,r){L(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=lo(n.visibleWrites,e,t),n.lastWriteId=r}function lg(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function ug(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);L(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&fg(c,r.path)?i=!1:tt(r.path,c.path)&&(s=!0)),o--}if(i){if(s)return hg(n),!0;if(r.snap)n.visibleWrites=Qc(n.visibleWrites,r.path);else{const c=r.children;Pe(c,l=>{n.visibleWrites=Qc(n.visibleWrites,Ae(r.path,l))})}return!0}else return!1}function fg(n,e){if(n.snap)return tt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&tt(Ae(n.path,t),e))return!0;return!1}function hg(n){n.visibleWrites=_h(n.allWrites,dg,ce()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function dg(n){return n.visible}function _h(n,e,t){let r=ut.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let c;if(s.snap)tt(t,o)?(c=Ue(t,o),r=_r(r,c,s.snap)):tt(o,t)&&(c=Ue(o,t),r=_r(r,ce(),s.snap.getChild(c)));else if(s.children){if(tt(t,o))c=Ue(t,o),r=lo(r,c,s.children);else if(tt(o,t))if(c=Ue(o,t),ne(c))r=lo(r,ce(),s.children);else{const l=Pn(s.children,ie(c));if(l){const a=l.getChild(ge(c));r=_r(r,ce(),a)}}}else throw Wn("WriteRecord should have .snap or .children")}}return r}function vh(n,e,t,r,i){if(!r&&!i){const s=gn(n.visibleWrites,e);if(s!=null)return s;{const o=qt(n.visibleWrites,e);if(fo(o))return t;if(t==null&&!uo(o,ce()))return null;{const c=t||Z.EMPTY_NODE;return Un(o,c)}}}else{const s=qt(n.visibleWrites,e);if(!i&&fo(s))return t;if(!i&&t==null&&!uo(s,ce()))return null;{const o=function(a){return(a.visible||i)&&(!r||!~r.indexOf(a.writeId))&&(tt(a.path,e)||tt(e,a.path))},c=_h(n.allWrites,o,e),l=t||Z.EMPTY_NODE;return Un(c,l)}}}function xg(n,e,t){let r=Z.EMPTY_NODE;const i=gn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=qt(n.visibleWrites,e);return t.forEachChild(Ce,(o,c)=>{const l=Un(qt(s,new de(o)),c);r=r.updateImmediateChild(o,l)}),Zc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=qt(n.visibleWrites,e);return Zc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function pg(n,e,t,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ae(e,t);if(uo(n.visibleWrites,s))return null;{const o=qt(n.visibleWrites,s);return fo(o)?i.getChild(t):Un(o,i.getChild(t))}}function _g(n,e,t,r){const i=Ae(e,t),s=gn(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=qt(n.visibleWrites,i);return Un(o,r.getNode().getImmediateChild(t))}else return null}function vg(n,e){return gn(n.visibleWrites,e)}function gg(n,e,t,r,i,s,o){let c;const l=qt(n.visibleWrites,e),a=gn(l,ce());if(a!=null)c=a;else if(t!=null)c=Un(l,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const u=[],x=o.getCompare(),f=s?c.getReverseIteratorFrom(r,o):c.getIteratorFrom(r,o);let h=f.getNext();for(;h&&u.length<i;)x(h,r)!==0&&u.push(h),h=f.getNext();return u}else return[]}function mg(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function D0(n,e,t,r){return vh(n.writeTree,n.treePath,e,t,r)}function Jo(n,e){return xg(n.writeTree,n.treePath,e)}function Jc(n,e,t,r){return pg(n.writeTree,n.treePath,e,t,r)}function B0(n,e){return vg(n.writeTree,Ae(n.treePath,e))}function Eg(n,e,t,r,i,s){return gg(n.writeTree,n.treePath,e,t,r,i,s)}function ea(n,e,t){return _g(n.writeTree,n.treePath,e,t)}function gh(n,e){return mh(Ae(n.treePath,e),n.writeTree)}function mh(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Cg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;L(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,Fr(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,wr(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,Mn(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,Fr(r,e.snapshotNode,i.oldSnap));else throw Wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class yg{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Eh=new yg;class ta{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ea(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xn(this.viewCache_),s=Eg(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Ag(n){return{filter:n}}function bg(n,e){L(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Dg(n,e,t,r,i){const s=new Cg;let o,c;if(t.type===lt.OVERWRITE){const a=t;a.source.fromUser?o=ho(n,e,a.path,a.snap,r,i,s):(L(a.source.fromServer,"Unknown source."),c=a.source.tagged||e.serverCache.isFiltered()&&!ne(a.path),o=w0(n,e,a.path,a.snap,r,i,c,s))}else if(t.type===lt.MERGE){const a=t;a.source.fromUser?o=wg(n,e,a.path,a.children,r,i,s):(L(a.source.fromServer,"Unknown source."),c=a.source.tagged||e.serverCache.isFiltered(),o=xo(n,e,a.path,a.children,r,i,c,s))}else if(t.type===lt.ACK_USER_WRITE){const a=t;a.revert?o=kg(n,e,a.path,r,i,s):o=Fg(n,e,a.path,a.affectedTree,r,i,s)}else if(t.type===lt.LISTEN_COMPLETE)o=Ig(n,e,t.path,r,s);else throw Wn("Unknown operation type: "+t.type);const l=s.getChanges();return Bg(e,o,l),{viewCache:o,changes:l}}function Bg(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=b0(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(hh(b0(e)))}}function Ch(n,e,t,r,i,s){const o=e.eventCache;if(B0(r,t)!=null)return e;{let c,l;if(ne(t))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=xn(e),u=a instanceof Z?a:Z.EMPTY_NODE,x=Jo(r,u);c=n.filter.updateFullNode(e.eventCache.getNode(),x,s)}else{const a=D0(r,xn(e));c=n.filter.updateFullNode(e.eventCache.getNode(),a,s)}else{const a=ie(t);if(a===".priority"){L(Gt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const x=Jc(r,t,u,l);x!=null?c=n.filter.updatePriority(u,x):c=o.getNode()}else{const u=ge(t);let x;if(o.isCompleteForChild(a)){l=e.serverCache.getNode();const f=Jc(r,t,o.getNode(),l);f!=null?x=o.getNode().getImmediateChild(a).updateChild(u,f):x=o.getNode().getImmediateChild(a)}else x=ea(r,a,e.serverCache);x!=null?c=n.filter.updateChild(o.getNode(),a,x,u,i,s):c=o.getNode()}}return pr(e,c,o.isFullyInitialized()||ne(t),n.filter.filtersNodes())}}function w0(n,e,t,r,i,s,o,c){const l=e.serverCache;let a;const u=o?n.filter:n.filter.getIndexedFilter();if(ne(t))a=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(t,r);a=u.updateFullNode(l.getNode(),h,null)}else{const h=ie(t);if(!l.isCompleteForPath(t)&&Gt(t)>1)return e;const d=ge(t),_=l.getNode().getImmediateChild(h).updateChild(d,r);h===".priority"?a=u.updatePriority(l.getNode(),_):a=u.updateChild(l.getNode(),h,_,d,Eh,null)}const x=xh(e,a,l.isFullyInitialized()||ne(t),u.filtersNodes()),f=new ta(i,x,s);return Ch(n,x,t,i,f,c)}function ho(n,e,t,r,i,s,o){const c=e.eventCache;let l,a;const u=new ta(i,e,s);if(ne(t))a=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=pr(e,a,!0,n.filter.filtersNodes());else{const x=ie(t);if(x===".priority")a=n.filter.updatePriority(e.eventCache.getNode(),r),l=pr(e,a,c.isFullyInitialized(),c.isFiltered());else{const f=ge(t),h=c.getNode().getImmediateChild(x);let d;if(ne(f))d=r;else{const g=u.getCompleteChild(x);g!=null?Vo(f)===".priority"&&g.getChild(nh(f)).isEmpty()?d=g:d=g.updateChild(f,r):d=Z.EMPTY_NODE}if(h.equals(d))l=e;else{const g=n.filter.updateChild(c.getNode(),x,d,f,u,o);l=pr(e,g,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function el(n,e){return n.eventCache.isCompleteForChild(e)}function wg(n,e,t,r,i,s,o){let c=e;return r.foreach((l,a)=>{const u=Ae(t,l);el(e,ie(u))&&(c=ho(n,c,u,a,i,s,o))}),r.foreach((l,a)=>{const u=Ae(t,l);el(e,ie(u))||(c=ho(n,c,u,a,i,s,o))}),c}function tl(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function xo(n,e,t,r,i,s,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,a;ne(t)?a=r:a=new _e(null).setTree(t,r);const u=e.serverCache.getNode();return a.children.inorderTraversal((x,f)=>{if(u.hasChild(x)){const h=e.serverCache.getNode().getImmediateChild(x),d=tl(n,h,f);l=w0(n,l,new de(x),d,i,s,o,c)}}),a.children.inorderTraversal((x,f)=>{const h=!e.serverCache.isCompleteForChild(x)&&f.value===null;if(!u.hasChild(x)&&!h){const d=e.serverCache.getNode().getImmediateChild(x),g=tl(n,d,f);l=w0(n,l,new de(x),g,i,s,o,c)}}),l}function Fg(n,e,t,r,i,s,o){if(B0(i,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ne(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return w0(n,e,t,l.getNode().getChild(t),i,s,c,o);if(ne(t)){let a=new _e(null);return l.getNode().forEachChild(Wt,(u,x)=>{a=a.set(new de(u),x)}),xo(n,e,t,a,i,s,c,o)}else return e}else{let a=new _e(null);return r.foreach((u,x)=>{const f=Ae(t,u);l.isCompleteForPath(f)&&(a=a.set(u,l.getNode().getChild(f)))}),xo(n,e,t,a,i,s,c,o)}}function Ig(n,e,t,r,i){const s=e.serverCache,o=xh(e,s.getNode(),s.isFullyInitialized()||ne(t),s.isFiltered());return Ch(n,o,t,r,Eh,i)}function kg(n,e,t,r,i,s){let o;if(B0(r,t)!=null)return e;{const c=new ta(r,e,i),l=e.eventCache.getNode();let a;if(ne(t)||ie(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=D0(r,xn(e));else{const x=e.serverCache.getNode();L(x instanceof Z,"serverChildren would be complete if leaf node"),u=Jo(r,x)}u=u,a=n.filter.updateFullNode(l,u,s)}else{const u=ie(t);let x=ea(r,u,e.serverCache);x==null&&e.serverCache.isCompleteForChild(u)&&(x=l.getImmediateChild(u)),x!=null?a=n.filter.updateChild(l,u,x,ge(t),c,s):e.eventCache.getNode().hasChild(u)?a=n.filter.updateChild(l,u,Z.EMPTY_NODE,ge(t),c,s):a=l,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=D0(r,xn(e)),o.isLeafNode()&&(a=n.filter.updateFullNode(a,o,s)))}return o=e.serverCache.isFullyInitialized()||B0(r,ce())!=null,pr(e,a,o,n.filter.filtersNodes())}}/**
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
 */class Sg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ko(r.getIndex()),s=Kv(r);this.processor_=Ag(s);const o=t.serverCache,c=t.eventCache,l=i.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),a=s.updateFullNode(Z.EMPTY_NODE,c.getNode(),null),u=new jt(l,o.isFullyInitialized(),i.filtersNodes()),x=new jt(a,c.isFullyInitialized(),s.filtersNodes());this.viewCache_=$0(x,u),this.eventGenerator_=new ng(this.query_)}get query(){return this.query_}}function Tg(n){return n.viewCache_.serverCache.getNode()}function Rg(n){return b0(n.viewCache_)}function Ng(n,e){const t=xn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ne(e)&&!t.getImmediateChild(ie(e)).isEmpty())?t.getChild(e):null}function nl(n){return n.eventRegistrations_.length===0}function Pg(n,e){n.eventRegistrations_.push(e)}function rl(n,e,t){const r=[];if(t){L(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function il(n,e,t,r){e.type===lt.MERGE&&e.source.queryId!==null&&(L(xn(n.viewCache_),"We should always have a full cache before handling merges"),L(b0(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=Dg(n.processor_,i,e,t,r);return bg(n.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,yh(n,s.changes,s.viewCache.eventCache.getNode(),null)}function Og(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ce,(s,o)=>{r.push(Mn(s,o))}),t.isFullyInitialized()&&r.push(hh(t.getNode())),yh(n,r,t.getNode(),e)}function yh(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return rg(n.eventGenerator_,e,t,i)}/**
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
 */let F0;class Ah{constructor(){this.views=new Map}}function Lg(n){L(!F0,"__referenceConstructor has already been defined"),F0=n}function Mg(){return L(F0,"Reference.ts has not been loaded"),F0}function Hg(n){return n.views.size===0}function na(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),il(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(il(o,e,t,r));return s}}function bh(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let c=D0(t,i?r:null),l=!1;c?l=!0:r instanceof Z?(c=Jo(t,r),l=!1):(c=Z.EMPTY_NODE,l=!1);const a=$0(new jt(c,l,!1),new jt(r,i,!1));return new Sg(e,a)}return o}function Ug(n,e,t,r,i,s){const o=bh(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Pg(o,t),Og(o,t)}function zg(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const c=Kt(n);if(i==="default")for(const[l,a]of n.views.entries())o=o.concat(rl(a,t,r)),nl(a)&&(n.views.delete(l),a.query._queryParams.loadsAllData()||s.push(a.query));else{const l=n.views.get(i);l&&(o=o.concat(rl(l,t,r)),nl(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return c&&!Kt(n)&&s.push(new(Mg())(e._repo,e._path)),{removed:s,events:o}}function Dh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function $t(n,e){let t=null;for(const r of n.views.values())t=t||Ng(r,e);return t}function Bh(n,e){if(e._queryParams.loadsAllData())return G0(n);{const r=e._queryIdentifier;return n.views.get(r)}}function wh(n,e){return Bh(n,e)!=null}function Kt(n){return G0(n)!=null}function G0(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let I0;function Wg(n){L(!I0,"__referenceConstructor has already been defined"),I0=n}function qg(){return L(I0,"Reference.ts has not been loaded"),I0}let $g=1;class sl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=mg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vg(n,e,t,r,i){return ag(n.pendingWriteTree_,e,t,r,i),i?Gn(n,new dn(Xo(),e,t)):[]}function Gg(n,e,t,r){cg(n.pendingWriteTree_,e,t,r);const i=_e.fromObject(t);return Gn(n,new Hn(Xo(),e,i))}function rn(n,e,t=!1){const r=lg(n.pendingWriteTree_,e);if(ug(n.pendingWriteTree_,e)){let s=new _e(null);return r.snap!=null?s=s.set(ce(),!0):Pe(r.children,o=>{s=s.set(new de(o),!0)}),Gn(n,new A0(r.path,s,t))}else return[]}function Vr(n,e,t){return Gn(n,new dn(Qo(),e,t))}function jg(n,e,t){const r=_e.fromObject(t);return Gn(n,new Hn(Qo(),e,r))}function Kg(n,e){return Gn(n,new kr(Qo(),e))}function Yg(n,e,t){const r=ra(n,t);if(r){const i=ia(r),s=i.path,o=i.queryId,c=Ue(s,e),l=new kr(Zo(o),c);return sa(n,s,l)}else return[]}function Fh(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let c=[];if(o&&(e._queryIdentifier==="default"||wh(o,e))){const l=zg(o,e,t,r);Hg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const a=l.removed;if(c=l.events,!i){const u=a.findIndex(f=>f._queryParams.loadsAllData())!==-1,x=n.syncPointTree_.findOnPath(s,(f,h)=>Kt(h));if(u&&!x){const f=n.syncPointTree_.subtree(s);if(!f.isEmpty()){const h=Jg(f);for(let d=0;d<h.length;++d){const g=h[d],_=g.query,E=Rh(n,g);n.listenProvider_.startListening(vr(_),Sr(n,_),E.hashFn,E.onComplete)}}}!x&&a.length>0&&!r&&(u?n.listenProvider_.stopListening(vr(e),null):a.forEach(f=>{const h=n.queryToTagMap.get(j0(f));n.listenProvider_.stopListening(vr(f),h)}))}e2(n,a)}return c}function Ih(n,e,t,r){const i=ra(n,r);if(i!=null){const s=ia(i),o=s.path,c=s.queryId,l=Ue(o,e),a=new dn(Zo(c),l,t);return sa(n,o,a)}else return[]}function Xg(n,e,t,r){const i=ra(n,r);if(i){const s=ia(i),o=s.path,c=s.queryId,l=Ue(o,e),a=_e.fromObject(t),u=new Hn(Zo(c),l,a);return sa(n,o,u)}else return[]}function Qg(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,h)=>{const d=Ue(f,i);s=s||$t(h,d),o=o||Kt(h)});let c=n.syncPointTree_.get(i);c?(o=o||Kt(c),s=s||$t(c,ce())):(c=new Ah,n.syncPointTree_=n.syncPointTree_.set(i,c));let l;s!=null?l=!0:(l=!1,s=Z.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((h,d)=>{const g=$t(d,ce());g&&(s=s.updateImmediateChild(h,g))}));const a=wh(c,e);if(!a&&!e._queryParams.loadsAllData()){const f=j0(e);L(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=t2();n.queryToTagMap.set(f,h),n.tagToQueryMap.set(h,f)}const u=V0(n.pendingWriteTree_,i);let x=Ug(c,e,t,u,s,l);if(!a&&!o&&!r){const f=Bh(c,e);x=x.concat(n2(n,e,f))}return x}function kh(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,c)=>{const l=Ue(o,e),a=$t(c,l);if(a)return a});return vh(i,e,s,t,!0)}function Zg(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(a,u)=>{const x=Ue(a,t);r=r||$t(u,x)});let i=n.syncPointTree_.get(t);i?r=r||$t(i,ce()):(i=new Ah,n.syncPointTree_=n.syncPointTree_.set(t,i));const s=r!=null,o=s?new jt(r,!0,!1):null,c=V0(n.pendingWriteTree_,e._path),l=bh(i,e,c,s?o.getNode():Z.EMPTY_NODE,s);return Rg(l)}function Gn(n,e){return Sh(e,n.syncPointTree_,null,V0(n.pendingWriteTree_,ce()))}function Sh(n,e,t,r){if(ne(n.path))return Th(n,e,t,r);{const i=e.get(ce());t==null&&i!=null&&(t=$t(i,ce()));let s=[];const o=ie(n.path),c=n.operationForChild(o),l=e.children.get(o);if(l&&c){const a=t?t.getImmediateChild(o):null,u=gh(r,o);s=s.concat(Sh(c,l,a,u))}return i&&(s=s.concat(na(i,n,r,t))),s}}function Th(n,e,t,r){const i=e.get(ce());t==null&&i!=null&&(t=$t(i,ce()));let s=[];return e.children.inorderTraversal((o,c)=>{const l=t?t.getImmediateChild(o):null,a=gh(r,o),u=n.operationForChild(o);u&&(s=s.concat(Th(u,c,l,a)))}),i&&(s=s.concat(na(i,n,r,t))),s}function Rh(n,e){const t=e.query,r=Sr(n,t);return{hashFn:()=>(Tg(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Yg(n,t._path,r):Kg(n,t._path);{const s=K_(i,t);return Fh(n,t,null,s)}}}}function Sr(n,e){const t=j0(e);return n.queryToTagMap.get(t)}function j0(n){return n._path.toString()+"$"+n._queryIdentifier}function ra(n,e){return n.tagToQueryMap.get(e)}function ia(n){const e=n.indexOf("$");return L(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new de(n.substr(0,e))}}function sa(n,e,t){const r=n.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=V0(n.pendingWriteTree_,e);return na(r,t,i,null)}function Jg(n){return n.fold((e,t,r)=>{if(t&&Kt(t))return[G0(t)];{let i=[];return t&&(i=Dh(t)),Pe(r,(s,o)=>{i=i.concat(o)}),i}})}function vr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(qg())(n._repo,n._path):n}function e2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=j0(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function t2(){return $g++}function n2(n,e,t){const r=e._path,i=Sr(n,e),s=Rh(n,t),o=n.listenProvider_.startListening(vr(e),i,s.hashFn,s.onComplete),c=n.syncPointTree_.subtree(r);if(i)L(!Kt(c.value),"If we're adding a query, it shouldn't be shadowed");else{const l=c.fold((a,u,x)=>{if(!ne(a)&&u&&Kt(u))return[G0(u).query];{let f=[];return u&&(f=f.concat(Dh(u).map(h=>h.query))),Pe(x,(h,d)=>{f=f.concat(d)}),f}});for(let a=0;a<l.length;++a){const u=l[a];n.listenProvider_.stopListening(vr(u),Sr(n,u))}}return o}/**
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
 */class oa{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new oa(t)}node(){return this.node_}}class aa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ae(this.path_,e);return new aa(this.syncTree_,t)}node(){return kh(this.syncTree_,this.path_)}}const r2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ol=function(n,e,t){if(!n||typeof n!="object")return n;if(L(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return i2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return s2(n[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},i2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:L(!1,"Unexpected server value: "+n)}},s2=function(n,e,t){n.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Nh=function(n,e,t,r){return ca(e,new aa(t,n),r)},o2=function(n,e,t){return ca(n,new oa(e),t)};function ca(n,e,t){const r=n.getPriority().val(),i=ol(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,c=ol(o.getValue(),e,t);return c!==o.getValue()||i!==o.getPriority().val()?new we(c,Ie(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(Ce,(c,l)=>{const a=ca(l,e.getImmediateChild(c),t);a!==l&&(s=s.updateImmediateChild(c,a))}),s}}/**
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
 */class la{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function ua(n,e){let t=e instanceof de?e:new de(e),r=n,i=ie(t);for(;i!==null;){const s=Pn(r.node.children,i)||{children:{},childCount:0};r=new la(i,r,s),t=ge(t),i=ie(t)}return r}function jn(n){return n.node.value}function Ph(n,e){n.node.value=e,po(n)}function Oh(n){return n.node.childCount>0}function a2(n){return jn(n)===void 0&&!Oh(n)}function K0(n,e){Pe(n.node.children,(t,r)=>{e(new la(t,n,r))})}function Lh(n,e,t,r){t&&e(n),K0(n,i=>{Lh(i,e,!0)})}function c2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Gr(n){return new de(n.parent===null?n.name:Gr(n.parent)+"/"+n.name)}function po(n){n.parent!==null&&l2(n.parent,n.name,n)}function l2(n,e,t){const r=a2(t),i=_t(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,po(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,po(n))}/**
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
 */const u2=/[\[\].#$\/\u0000-\u001F\u007F]/,f2=/[\[\].#$\u0000-\u001F\u007F]/,os=10*1024*1024,fa=function(n){return typeof n=="string"&&n.length!==0&&!u2.test(n)},Mh=function(n){return typeof n=="string"&&n.length!==0&&!f2.test(n)},h2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mh(n)},_o=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Uo(n)||n&&typeof n=="object"&&_t(n,".sv")},ha=function(n,e,t){const r=t instanceof de?new Fv(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tn(r));if(typeof e=="function")throw new Error(n+"contains a function "+tn(r)+" with contents = "+e.toString());if(Uo(e))throw new Error(n+"contains "+e.toString()+" "+tn(r));if(typeof e=="string"&&e.length>os/3&&L0(e)>os)throw new Error(n+"contains a string greater than "+os+" utf8 bytes "+tn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Pe(e,(o,c)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!fa(o)))throw new Error(n+" contains an invalid key ("+o+") "+tn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Iv(r,o),ha(n,c,r),kv(r)}),i&&s)throw new Error(n+' contains ".value" child '+tn(r)+" in addition to actual children.")}},d2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const s=Br(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!fa(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(wv);let i=null;for(t=0;t<e.length;t++){if(r=e[t],i!==null&&tt(i,r))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},x2=function(n,e,t,r){const i=Io(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Pe(e,(o,c)=>{const l=new de(o);if(ha(i,c,Ae(t,l)),Vo(l)===".priority"&&!_o(c))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),d2(i,s)},Hh=function(n,e,t,r){if(!Mh(t))throw new Error(Io(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},p2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Hh(n,e,t)},_2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fa(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!h2(t))throw new Error(Io(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class v2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uh(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!rh(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function xt(n,e,t){Uh(n,t),g2(n,r=>tt(r,e)||tt(e,r))}function g2(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(m2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function m2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();dr&&Ne("event: "+t.toString()),Vn(r)}}}/**
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
 */const E2="repo_interrupt",C2=25;class y2{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=y0(),this.transactionQueueTree_=new la,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function A2(n,e,t){if(n.stats_=qo(n.repoInfo_),n.forceRestClient_||Z_())n.server_=new C0(n.repoInfo_,(r,i,s,o)=>{al(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>cl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Bt(n.repoInfo_,e,(r,i,s,o)=>{al(n,r,i,s,o)},r=>{cl(n,r)},r=>{D2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=rv(n.repoInfo_,()=>new tg(n.stats_,n.server_)),n.infoData_=new Xv,n.infoSyncTree_=new sl({startListening:(r,i,s,o)=>{let c=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(c=Vr(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),xa(n,"connected",!1),n.serverSyncTree_=new sl({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(c,l)=>{const a=o(c,l);xt(n.eventQueue_,r._path,a)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function b2(n){const t=n.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function da(n){return r2({timestamp:b2(n)})}function al(n,e,t,r,i){n.dataUpdateCount++;const s=new de(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const l=u0(t,a=>Ie(a));o=Xg(n.serverSyncTree_,s,l,i)}else{const l=Ie(t);o=Ih(n.serverSyncTree_,s,l,i)}else if(r){const l=u0(t,a=>Ie(a));o=jg(n.serverSyncTree_,s,l)}else{const l=Ie(t);o=Vr(n.serverSyncTree_,s,l)}let c=s;o.length>0&&(c=Tr(n,s)),xt(n.eventQueue_,c,o)}function cl(n,e){xa(n,"connected",e),e===!1&&F2(n)}function D2(n,e){Pe(e,(t,r)=>{xa(n,t,r)})}function xa(n,e,t){const r=new de("/.info/"+e),i=Ie(t);n.infoData_.updateSnapshot(r,i);const s=Vr(n.infoSyncTree_,r,i);xt(n.eventQueue_,r,s)}function zh(n){return n.nextWriteId_++}function B2(n,e,t){const r=Zg(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(i=>{const s=Ie(i).withIndex(e._queryParams.getIndex());Qg(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Vr(n.serverSyncTree_,e._path,s);else{const c=Sr(n.serverSyncTree_,e);o=Ih(n.serverSyncTree_,e._path,s,c)}return xt(n.eventQueue_,e._path,o),Fh(n.serverSyncTree_,e,t,null,!0),s},i=>(Y0(n,"get for query "+Be(e)+" failed: "+i),Promise.reject(new Error(i))))}function w2(n,e,t,r){Y0(n,"update",{path:e.toString(),value:t});let i=!0;const s=da(n),o={};if(Pe(t,(c,l)=>{i=!1,o[c]=Nh(Ae(e,c),Ie(l),n.serverSyncTree_,s)}),i)Ne("update() called with empty data.  Don't do anything."),ll(n,r,"ok",void 0);else{const c=zh(n),l=Gg(n.serverSyncTree_,e,o,c);Uh(n.eventQueue_,l),n.server_.merge(e.toString(),t,(a,u)=>{const x=a==="ok";x||Ge("update at "+e+" failed: "+a);const f=rn(n.serverSyncTree_,c,!x),h=f.length>0?Tr(n,e):e;xt(n.eventQueue_,h,f),ll(n,r,a,u)}),Pe(t,a=>{const u=Gh(n,Ae(e,a));Tr(n,u)}),xt(n.eventQueue_,e,[])}}function F2(n){Y0(n,"onDisconnectEvents");const e=da(n),t=y0();co(n.onDisconnect_,ce(),(i,s)=>{const o=Nh(i,s,n.serverSyncTree_,e);dh(t,i,o)});let r=[];co(t,ce(),(i,s)=>{r=r.concat(Vr(n.serverSyncTree_,i,s));const o=Gh(n,i);Tr(n,o)}),n.onDisconnect_=y0(),xt(n.eventQueue_,ce(),r)}function I2(n){n.persistentConnection_&&n.persistentConnection_.interrupt(E2)}function Y0(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ne(t,...e)}function ll(n,e,t,r){e&&Vn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Wh(n,e,t){return kh(n.serverSyncTree_,e,t)||Z.EMPTY_NODE}function pa(n,e=n.transactionQueueTree_){if(e||X0(n,e),jn(e)){const t=$h(n,e);L(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&k2(n,Gr(e),t)}else Oh(e)&&K0(e,t=>{pa(n,t)})}function k2(n,e,t){const r=t.map(a=>a.currentWriteId),i=Wh(n,e,r);let s=i;const o=i.hash();for(let a=0;a<t.length;a++){const u=t[a];L(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const x=Ue(e,u.path);s=s.updateChild(x,u.currentOutputSnapshotRaw)}const c=s.val(!0),l=e;n.server_.put(l.toString(),c,a=>{Y0(n,"transaction put response",{path:l.toString(),status:a});let u=[];if(a==="ok"){const x=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(rn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&x.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();X0(n,ua(n.transactionQueueTree_,e)),pa(n,n.transactionQueueTree_),xt(n.eventQueue_,e,u);for(let f=0;f<x.length;f++)Vn(x[f])}else{if(a==="datastale")for(let x=0;x<t.length;x++)t[x].status===3?t[x].status=4:t[x].status=0;else{Ge("transaction at "+l.toString()+" failed: "+a);for(let x=0;x<t.length;x++)t[x].status=4,t[x].abortReason=a}Tr(n,e)}},o)}function Tr(n,e){const t=qh(n,e),r=Gr(t),i=$h(n,t);return S2(n,i,r),r}function S2(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],a=Ue(t,l.path);let u=!1,x;if(L(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,x=l.abortReason,i=i.concat(rn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=C2)u=!0,x="maxretry",i=i.concat(rn(n.serverSyncTree_,l.currentWriteId,!0));else{const f=Wh(n,l.path,o);l.currentInputSnapshot=f;const h=e[c].update(f.val());if(h!==void 0){ha("transaction failed: Data returned ",h,l.path);let d=Ie(h);typeof h=="object"&&h!=null&&_t(h,".priority")||(d=d.updatePriority(f.getPriority()));const _=l.currentWriteId,E=da(n),p=o2(d,f,E);l.currentOutputSnapshotRaw=d,l.currentOutputSnapshotResolved=p,l.currentWriteId=zh(n),o.splice(o.indexOf(_),1),i=i.concat(Vg(n.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(rn(n.serverSyncTree_,_,!0))}else u=!0,x="nodata",i=i.concat(rn(n.serverSyncTree_,l.currentWriteId,!0))}xt(n.eventQueue_,t,i),i=[],u&&(e[c].status=2,function(f){setTimeout(f,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(x==="nodata"?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(x),!1,null))))}X0(n,n.transactionQueueTree_);for(let c=0;c<r.length;c++)Vn(r[c]);pa(n,n.transactionQueueTree_)}function qh(n,e){let t,r=n.transactionQueueTree_;for(t=ie(e);t!==null&&jn(r)===void 0;)r=ua(r,t),e=ge(e),t=ie(e);return r}function $h(n,e){const t=[];return Vh(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Vh(n,e,t){const r=jn(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);K0(e,i=>{Vh(n,i,t)})}function X0(n,e){const t=jn(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,Ph(e,t.length>0?t:void 0)}K0(e,r=>{X0(n,r)})}function Gh(n,e){const t=Gr(qh(n,e)),r=ua(n.transactionQueueTree_,e);return c2(r,i=>{as(n,i)}),as(n,r),Lh(r,i=>{as(n,i)}),t}function as(n,e){const t=jn(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(L(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(rn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ph(e,void 0):t.length=s+1,xt(n.eventQueue_,Gr(e),i);for(let o=0;o<r.length;o++)Vn(r[o])}}/**
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
 */function T2(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function R2(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ge(`Invalid query segment '${t}' in query '${n}'`)}return e}const ul=function(n,e){const t=N2(n),r=t.namespace;t.domain==="firebase.com"&&It(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&It("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||q_();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jf(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new de(t.pathString)}},N2=function(n){let e="",t="",r="",i="",s="",o=!0,c="https",l=443;if(typeof n=="string"){let a=n.indexOf("//");a>=0&&(c=n.substring(0,a-1),n=n.substring(a+2));let u=n.indexOf("/");u===-1&&(u=n.length);let x=n.indexOf("?");x===-1&&(x=n.length),e=n.substring(0,Math.min(u,x)),u<x&&(i=T2(n.substring(u,x)));const f=R2(n.substring(Math.min(n.length,x)));a=e.indexOf(":"),a>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(a+1),10)):a=e.length;const h=e.slice(0,a);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const d=e.indexOf(".");r=e.substring(0,d).toLowerCase(),t=e.substring(d+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:c,pathString:i,namespace:s}};/**
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
 */class P2{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class O2{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class L2{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Q0{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return ne(this._path)?null:Vo(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=Yc(this._queryParams),t=zo(e);return t==="{}"?"default":t}get _queryObject(){return Yc(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof Q0))return!1;const t=this._repo===e._repo,r=rh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Bv(this._path)}}function M2(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function H2(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Wt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==hn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==Vt)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===Ce){if(e!=null&&!_o(e)||t!=null&&!_o(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(L(n.getIndex()instanceof uh||n.getIndex()===fh,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Tt extends Q0{constructor(e,t){super(e,t,new Yo,!1)}get parent(){const e=nh(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rr{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new de(e),r=vo(this.ref,e);return new Rr(this._node.getChild(t),r,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Rr(i,vo(this.ref,r),Ce)))}hasChild(e){const t=new de(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cs(n,e){return n=et(n),n._checkNotDeleted("ref"),e!==void 0?vo(n._root,e):n._root}function vo(n,e){return n=et(n),ie(n._path)===null?p2("child","path",e):Hh("child","path",e),new Tt(n._repo,Ae(n._path,e))}function U2(n,e){x2("update",e,n._path);const t=new O0;return w2(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function fl(n){n=et(n);const e=new L2(()=>{}),t=new _a(e);return B2(n._repo,n,t).then(r=>new Rr(r,new Tt(n._repo,n._path),n._queryParams.getIndex()))}class _a{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new P2("value",this,new Rr(e.snapshotNode,new Tt(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new O2(this,e,t):null}matches(e){return e instanceof _a?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class z2{}class W2 extends z2{_apply(e){M2(e,"orderByKey");const t=Yv(e._queryParams,Wt);return H2(t),new Q0(e._repo,e._path,t,!0)}}function hl(){return new W2}function dl(n,...e){let t=et(n);for(const r of e)t=r._apply(t);return t}Lg(Tt);Wg(Tt);/**
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
 */const q2="FIREBASE_DATABASE_EMULATOR_HOST",go={};let $2=!1;function V2(n,e,t,r){n.repoInfo_=new jf(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function G2(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||It("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ul(s,i),c=o.repoInfo,l;typeof process<"u"&&Sc&&(l=Sc[q2]),l?(s=`http://${l}?ns=${c.namespace}`,o=ul(s,i),c=o.repoInfo):o.repoInfo.secure;const a=new ev(n.name,n.options,e);_2("Invalid Firebase Database URL",o),ne(o.path)||It("Database URL must point to the root of a Firebase Database (not including a child path).");const u=K2(c,n,a,new J_(n.name,t));return new Y2(u,n)}function j2(n,e){const t=go[e];(!t||t[n.key]!==n)&&It(`Database ${e}(${n.repoInfo_}) has already been deleted.`),I2(n),delete t[n.key]}function K2(n,e,t,r){let i=go[e.name];i||(i={},go[e.name]=i);let s=i[n.toURLString()];return s&&It("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new y2(n,$2,t,r),i[n.toURLString()]=s,s}class Y2{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(A2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(j2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&It("Cannot call "+e+" on a deleted database.")}}function va(n=Lr(),e){const t=To(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=hx("database");r&&X2(t,...r)}return t}function X2(n,e,t,r={}){n=et(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&It("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&It('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new r0(r0.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:dx(r.mockUserToken,n.app.options.projectId);s=new r0(o)}V2(i,e,t,s)}/**
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
 */function Q2(n){L_($n),On(new ln("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return G2(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),zt(Tc,Rc,n),zt(Tc,Rc,"esm2017")}Bt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Bt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Q2();const Z2={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"};M0(Z2,"sud");const jh=Lr("sud"),ga="https://xt8ss.github.io/ff-site-data";fetch(ga+"/user-ranks.json").then(async n=>await n.json());const xl=O_(jh);va(jh);const J2={logIn:"material-symbols:login-rounded",logOut:"material-symbols:logout-rounded"};let k0=n=>{n.target.closest("button").blur()},e8=n=>(n=n.charAt(0).toUpperCase()+n.slice(1),n),t8=(n,e)=>{let t=localStorage.getItem(n);return pt(t?JSON.parse(t):e)},n8=(n,e)=>n.subscribe(t=>localStorage.setItem(e,JSON.stringify(t))),Kh=n=>JSON.parse(JSON.stringify(n)),r8=n=>n!=null&&Object.keys(n).length,Qr=()=>!sd(bt).preventClosing&&bt.set(Kh(Yh.promptData)),i8=(n,e)=>{mo.update(t=>[...t,{icon:J2[n],text:e}]),setTimeout(()=>mo.update(t=>t.slice(1)),3e3)},pl=()=>history.replaceState(history.state,null,location.origin+location.pathname);const Yh={promptData:{component:null,props:{},focus:"",hasWrapper:!1,preventClosing:!1}};let wn=pt(!1),i0=pt(!1),s8=pt(!1),_l=pt({}),vl=pt(!1),gl=pt(""),ls=pt({select:new Audio}),bt=pt(Kh(Yh.promptData)),mo=pt([]),Nr=t8("fh-changelogSeen",!1);n8(Nr,"fh-changelogSeen");function Xh(n){const e=n-1;return e*e*e+1}function ze(n,{delay:e=0,duration:t=400,easing:r=Pr}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function S0(n,{delay:e=0,duration:t=400,easing:r=Xh,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),c=+o.opacity,l=o.transform==="none"?"":o.transform,a=1-i,u=c*(1-s);return{delay:e,duration:t,easing:r,css:(x,f)=>`
			transform: ${l} scale(${1-a*f});
			opacity: ${c-u*f}
		`}}function ml(n,e,t){const r=n.slice();return r[5]=e[t],r}function o8(n){let e,t=$e(n[1]),r=[];for(let i=0;i<t.length;i+=1)r[i]=El(ml(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=s0()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);G(i,e,s)},p(i,s){if(s&2){t=$e(i[1]);let o;for(o=0;o<t.length;o+=1){const c=ml(i,t,o);r[o]?r[o].p(c,s):(r[o]=El(c),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&q(e),Rn(r,i)}}}function a8(n){let e,t,r;return{c(){e=W("span"),t=Oe("— "),r=Oe(n[1]),z(e,"id","info"),z(e,"class","svelte-etktgh")},m(i,s){G(i,e,s),V(e,t),V(e,r)},p(i,s){s&2&&St(r,i[1])},d(i){i&&q(e)}}}function El(n){let e,t,r=n[5]+"",i;return{c(){e=W("span"),t=Oe("— "),i=Oe(r),z(e,"id","info"),z(e,"class","svelte-etktgh")},m(s,o){G(s,e,o),V(e,t),V(e,i)},p(s,o){o&2&&r!==(r=s[5]+"")&&St(i,r)},d(s){s&&q(e)}}}function c8(n){let e,t,r,i,s,o,c,l,a;function u(h,d){return typeof h[1]=="string"?a8:o8}let x=u(n),f=x(n);return{c(){e=W("hr"),t=ee(),r=W("li"),i=W("span"),s=Oe("v"),o=Oe(n[0]),c=ee(),l=W("i"),l.textContent=`${`${n[3][n[2][1]-1]} ${n[2][0]}, 20${n[2][2]}`}`,a=ee(),f.c(),z(e,"class","svelte-etktgh"),z(i,"id","version"),z(i,"class","svelte-etktgh"),z(l,"id","date"),z(l,"class","svelte-etktgh"),z(r,"class","flex fw fai-center svelte-etktgh")},m(h,d){G(h,e,d),G(h,t,d),G(h,r,d),V(r,i),V(i,s),V(i,o),V(r,c),V(r,l),V(r,a),f.m(r,null)},p(h,[d]){d&1&&St(o,h[0]),x===(x=u(h))&&f?f.p(h,d):(f.d(1),f=x(h),f&&(f.c(),f.m(r,null)))},i:ae,o:ae,d(h){h&&(q(e),q(t),q(r)),f.d()}}}function l8(n,e,t){let{version:r,date:i,logs:s}=e,o=i.split("/"),c=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.$$set=l=>{"version"in l&&t(0,r=l.version),"date"in l&&t(4,i=l.date),"logs"in l&&t(1,s=l.logs)},[r,s,o,c,i]}class u8 extends Xt{constructor(e){super(),Yt(this,e,l8,c8,kt,{version:0,date:4,logs:1})}}function Cl(n,e,t){const r=n.slice();return r[1]=e[t],r}function yl(n){let e,t;const r=[n[1]];let i={};for(let s=0;s<r.length;s+=1)i=js(i,r[s]);return e=new u8({props:i}),{c(){Nn(e.$$.fragment)},m(s,o){an(e,s,o),t=!0},p(s,o){const c=o&1?Ys(r,[Xs(s[1])]):{};e.$set(c)},i(s){t||(re(e.$$.fragment,s),t=!0)},o(s){ve(e.$$.fragment,s),t=!1},d(s){cn(e,s)}}}function f8(n){let e,t,r,i,s=$e(n[0].toReversed()),o=[];for(let l=0;l<s.length;l+=1)o[l]=yl(Cl(n,s,l));const c=l=>ve(o[l],1,1,()=>{o[l]=null});return{c(){e=W("span"),e.textContent="Changelog",t=ee(),r=W("ul");for(let l=0;l<o.length;l+=1)o[l].c();z(e,"class","title"),z(r,"class","flex fd-col smaller-fs svelte-8x0x8v"),z(r,"id","contents")},m(l,a){G(l,e,a),G(l,t,a),G(l,r,a);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(r,null);i=!0},p(l,[a]){if(a&1){s=$e(l[0].toReversed());let u;for(u=0;u<s.length;u+=1){const x=Cl(l,s,u);o[u]?(o[u].p(x,a),re(o[u],1)):(o[u]=yl(x),o[u].c(),re(o[u],1),o[u].m(r,null))}for(ot(),u=s.length;u<o.length;u+=1)c(u);at()}},i(l){if(!i){for(let a=0;a<s.length;a+=1)re(o[a]);i=!0}},o(l){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)ve(o[a]);i=!1},d(l){l&&(q(e),q(t),q(r)),Rn(o,l)}}}function h8(n){return[[{version:"1.0.0",date:"10/9/24",logs:"v1 Release"},{version:"1.0.1",date:"10/9/24",logs:"Added Fish Reeling Times to Resources category"},{version:"1.0.2",date:"17/9/24",logs:["Added ability to copy links","Increased category visibility"]},{version:"1.0.3",date:"16/10/24",logs:["Added Twitter links to Official Links category","Added Developer Forum links to Resources category"]},{version:"1.0.4",date:"1/12/24",logs:"Added Gift Tree Profit Calculator to Resources category"},{version:"1.1.0",date:"1/1/25",logs:["Added category collapse/expand feature","Added End of Year 2024 Progress Post to Resources category"]},{version:"1.2.0",date:"7/6/25",logs:["Added sign-up/log-in feature","Implemented data synchronization process"]}]]}class d8 extends Xt{constructor(e){super(),Yt(this,e,h8,f8,kt,{})}}function x8(n){let e,t,r;return{c(){e=W("span"),e.textContent="Fantastic Hub Policy",t=ee(),r=W("div"),r.innerHTML=`<hr/> <span class="svelte-9ffe04">About</span> <p>This site is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="svelte-9ffe04">Privacy Policy</span> <p>This policy explains what information Fantastic Hub (&quot;we&quot;, &quot;us&quot; or
        &quot;our&quot;) collects, uses, and shares when you use our website.</p> <span class="svelte-9ffe04">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="svelte-9ffe04">How We Use This Information</span> <p>Your information may be utilized to test and improve the site, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="svelte-9ffe04">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,z(e,"class","title"),z(r,"class","flex fd-col smaller-fs svelte-9ffe04"),z(r,"id","contents")},m(i,s){G(i,e,s),G(i,t,s),G(i,r,s)},p:ae,i:ae,o:ae,d(i){i&&(q(e),q(t),q(r))}}}class p8 extends Xt{constructor(e){super(),Yt(this,e,null,x8,kt,{})}}function Al(n){let e,t,r;return{c(){e=W("iconify-icon"),Dt(e,"icon","uil:exclamation"),Dt(e,"id","unseen")},m(i,s){G(i,e,s),r=!0},i(i){r||(i&&Le(()=>{r&&(t||(t=qe(e,ze,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=qe(e,ze,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&q(e),i&&t&&t.end()}}}function _8(n){let e,t,r,i,s,o,c,l,a,u,x,f,h,d,g,_,E,p,v,m=!n[2]&&Al();return{c(){e=W("div"),t=W("div"),t.innerHTML='<iconify-icon icon="logos:discord-icon"></iconify-icon> <span>xt.ss</span>',r=ee(),i=W("a"),i.innerHTML=`<img src="${ga+"/ko-fi/icon.png"}" alt="Ko-fi"/> <span class="tooltip" id="left">Support Me</span>`,s=ee(),o=W("button"),c=W("iconify-icon"),l=ee(),a=W("span"),a.textContent="Changelog",u=ee(),m&&m.c(),x=ee(),f=W("div"),h=Oe(n[0]),d=ee(),g=W("button"),g.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',z(t,"class","info flex"),z(t,"id","credits"),z(i,"href","https://ko-fi.com/xt8ss"),z(i,"target","_blank"),z(i,"class","info bg-change svelte-ga1qhj"),z(i,"id","donate"),Dt(c,"icon","octicon:log-16"),z(a,"class","tooltip"),z(a,"id","right"),z(o,"class","info svelte-ga1qhj"),z(o,"id","changelog"),z(f,"class","info"),z(f,"id","version"),z(g,"class","info"),z(g,"id","policy")},m(A,D){G(A,e,D),V(e,t),V(e,r),V(e,i),V(e,s),V(e,o),V(o,c),V(o,l),V(o,a),V(o,u),m&&m.m(o,null),V(e,x),V(e,f),V(f,h),V(e,d),V(e,g),E=!0,p||(v=[De(o,"click",n[4]),De(g,"click",n[5])],p=!0)},p(A,[D]){A[2]?m&&(ot(),ve(m,1,1,()=>{m=null}),at()):m?D&4&&re(m,1):(m=Al(),m.c(),re(m,1),m.m(o,null)),(!E||D&1)&&St(h,A[0])},i(A){E||(re(m),A&&Le(()=>{E&&(_||(_=qe(e,ze,{duration:250},!0)),_.run(1))}),E=!0)},o(A){ve(m),A&&(_||(_=qe(e,ze,{duration:250},!1)),_.run(0)),E=!1},d(A){A&&q(e),m&&m.d(),A&&_&&_.end(),p=!1,nt(v)}}}function v8(n,e,t){let r,i;We(n,bt,a=>t(1,r=a)),We(n,Nr,a=>t(2,i=a));let{version:s,verifyAndSync:o}=e;const c=a=>{k0(a),Re(bt,r.component=d8,r),Re(Nr,i=!0,i)},l=a=>{k0(a),Re(bt,r.component=p8,r)};return n.$$set=a=>{"version"in a&&t(0,s=a.version),"verifyAndSync"in a&&t(3,o=a.verifyAndSync)},[s,r,i,o,c,l]}class g8 extends Xt{constructor(e){super(),Yt(this,e,v8,_8,kt,{version:0,verifyAndSync:3})}}var Qh={exports:{}},us={exports:{}},bl;function oe(){return bl||(bl=1,function(n,e){(function(t,r){n.exports=r()})(U,function(){var t=t||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof U<"u"&&U.crypto&&(s=U.crypto),!s&&typeof Ou=="function")try{s=Lu}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},c=Object.create||function(){function p(){}return function(v){var m;return p.prototype=v,m=new p,p.prototype=null,m}}(),l={},a=l.lib={},u=a.Base=function(){return{extend:function(p){var v=c(this);return p&&v.mixIn(p),(!v.hasOwnProperty("init")||this.init===v.init)&&(v.init=function(){v.$super.init.apply(this,arguments)}),v.init.prototype=v,v.$super=this,v},create:function(){var p=this.extend();return p.init.apply(p,arguments),p},init:function(){},mixIn:function(p){for(var v in p)p.hasOwnProperty(v)&&(this[v]=p[v]);p.hasOwnProperty("toString")&&(this.toString=p.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),x=a.WordArray=u.extend({init:function(p,v){p=this.words=p||[],v!=i?this.sigBytes=v:this.sigBytes=p.length*4},toString:function(p){return(p||h).stringify(this)},concat:function(p){var v=this.words,m=p.words,A=this.sigBytes,D=p.sigBytes;if(this.clamp(),A%4)for(var b=0;b<D;b++){var B=m[b>>>2]>>>24-b%4*8&255;v[A+b>>>2]|=B<<24-(A+b)%4*8}else for(var k=0;k<D;k+=4)v[A+k>>>2]=m[k>>>2];return this.sigBytes+=D,this},clamp:function(){var p=this.words,v=this.sigBytes;p[v>>>2]&=4294967295<<32-v%4*8,p.length=r.ceil(v/4)},clone:function(){var p=u.clone.call(this);return p.words=this.words.slice(0),p},random:function(p){for(var v=[],m=0;m<p;m+=4)v.push(o());return new x.init(v,p)}}),f=l.enc={},h=f.Hex={stringify:function(p){for(var v=p.words,m=p.sigBytes,A=[],D=0;D<m;D++){var b=v[D>>>2]>>>24-D%4*8&255;A.push((b>>>4).toString(16)),A.push((b&15).toString(16))}return A.join("")},parse:function(p){for(var v=p.length,m=[],A=0;A<v;A+=2)m[A>>>3]|=parseInt(p.substr(A,2),16)<<24-A%8*4;return new x.init(m,v/2)}},d=f.Latin1={stringify:function(p){for(var v=p.words,m=p.sigBytes,A=[],D=0;D<m;D++){var b=v[D>>>2]>>>24-D%4*8&255;A.push(String.fromCharCode(b))}return A.join("")},parse:function(p){for(var v=p.length,m=[],A=0;A<v;A++)m[A>>>2]|=(p.charCodeAt(A)&255)<<24-A%4*8;return new x.init(m,v)}},g=f.Utf8={stringify:function(p){try{return decodeURIComponent(escape(d.stringify(p)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(p){return d.parse(unescape(encodeURIComponent(p)))}},_=a.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new x.init,this._nDataBytes=0},_append:function(p){typeof p=="string"&&(p=g.parse(p)),this._data.concat(p),this._nDataBytes+=p.sigBytes},_process:function(p){var v,m=this._data,A=m.words,D=m.sigBytes,b=this.blockSize,B=b*4,k=D/B;p?k=r.ceil(k):k=r.max((k|0)-this._minBufferSize,0);var C=k*b,y=r.min(C*4,D);if(C){for(var F=0;F<C;F+=b)this._doProcessBlock(A,F);v=A.splice(0,C),m.sigBytes-=y}return new x.init(v,y)},clone:function(){var p=u.clone.call(this);return p._data=this._data.clone(),p},_minBufferSize:0});a.Hasher=_.extend({cfg:u.extend(),init:function(p){this.cfg=this.cfg.extend(p),this.reset()},reset:function(){_.reset.call(this),this._doReset()},update:function(p){return this._append(p),this._process(),this},finalize:function(p){p&&this._append(p);var v=this._doFinalize();return v},blockSize:16,_createHelper:function(p){return function(v,m){return new p.init(m).finalize(v)}},_createHmacHelper:function(p){return function(v,m){return new E.HMAC.init(p,m).finalize(v)}}});var E=l.algo={};return l}(Math);return t})}(us)),us.exports}var fs={exports:{}},Dl;function Z0(){return Dl||(Dl=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.Base,c=s.WordArray,l=i.x64={};l.Word=o.extend({init:function(a,u){this.high=a,this.low=u}}),l.WordArray=o.extend({init:function(a,u){a=this.words=a||[],u!=r?this.sigBytes=u:this.sigBytes=a.length*8},toX32:function(){for(var a=this.words,u=a.length,x=[],f=0;f<u;f++){var h=a[f];x.push(h.high),x.push(h.low)}return c.create(x,this.sigBytes)},clone:function(){for(var a=o.clone.call(this),u=a.words=this.words.slice(0),x=u.length,f=0;f<x;f++)u[f]=u[f].clone();return a}})}(),t})}(fs)),fs.exports}var hs={exports:{}},Bl;function m8(){return Bl||(Bl=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){return function(){if(typeof ArrayBuffer=="function"){var r=t,i=r.lib,s=i.WordArray,o=s.init,c=s.init=function(l){if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),(l instanceof Int8Array||typeof Uint8ClampedArray<"u"&&l instanceof Uint8ClampedArray||l instanceof Int16Array||l instanceof Uint16Array||l instanceof Int32Array||l instanceof Uint32Array||l instanceof Float32Array||l instanceof Float64Array)&&(l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),l instanceof Uint8Array){for(var a=l.byteLength,u=[],x=0;x<a;x++)u[x>>>2]|=l[x]<<24-x%4*8;o.call(this,u,a)}else o.apply(this,arguments)};c.prototype=s}}(),t.lib.WordArray})}(hs)),hs.exports}var ds={exports:{}},wl;function E8(){return wl||(wl=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(l){for(var a=l.words,u=l.sigBytes,x=[],f=0;f<u;f+=2){var h=a[f>>>2]>>>16-f%4*8&65535;x.push(String.fromCharCode(h))}return x.join("")},parse:function(l){for(var a=l.length,u=[],x=0;x<a;x++)u[x>>>1]|=l.charCodeAt(x)<<16-x%2*16;return s.create(u,a*2)}},o.Utf16LE={stringify:function(l){for(var a=l.words,u=l.sigBytes,x=[],f=0;f<u;f+=2){var h=c(a[f>>>2]>>>16-f%4*8&65535);x.push(String.fromCharCode(h))}return x.join("")},parse:function(l){for(var a=l.length,u=[],x=0;x<a;x++)u[x>>>1]|=c(l.charCodeAt(x)<<16-x%2*16);return s.create(u,a*2)}};function c(l){return l<<8&4278255360|l>>>8&16711935}}(),t.enc.Utf16})}(ds)),ds.exports}var xs={exports:{}},Fl;function mn(){return Fl||(Fl=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(l){var a=l.words,u=l.sigBytes,x=this._map;l.clamp();for(var f=[],h=0;h<u;h+=3)for(var d=a[h>>>2]>>>24-h%4*8&255,g=a[h+1>>>2]>>>24-(h+1)%4*8&255,_=a[h+2>>>2]>>>24-(h+2)%4*8&255,E=d<<16|g<<8|_,p=0;p<4&&h+p*.75<u;p++)f.push(x.charAt(E>>>6*(3-p)&63));var v=x.charAt(64);if(v)for(;f.length%4;)f.push(v);return f.join("")},parse:function(l){var a=l.length,u=this._map,x=this._reverseMap;if(!x){x=this._reverseMap=[];for(var f=0;f<u.length;f++)x[u.charCodeAt(f)]=f}var h=u.charAt(64);if(h){var d=l.indexOf(h);d!==-1&&(a=d)}return c(l,a,x)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function c(l,a,u){for(var x=[],f=0,h=0;h<a;h++)if(h%4){var d=u[l.charCodeAt(h-1)]<<h%4*2,g=u[l.charCodeAt(h)]>>>6-h%4*2,_=d|g;x[f>>>2]|=_<<24-f%4*8,f++}return s.create(x,f)}}(),t.enc.Base64})}(xs)),xs.exports}var ps={exports:{}},Il;function C8(){return Il||(Il=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(l,a){a===void 0&&(a=!0);var u=l.words,x=l.sigBytes,f=a?this._safe_map:this._map;l.clamp();for(var h=[],d=0;d<x;d+=3)for(var g=u[d>>>2]>>>24-d%4*8&255,_=u[d+1>>>2]>>>24-(d+1)%4*8&255,E=u[d+2>>>2]>>>24-(d+2)%4*8&255,p=g<<16|_<<8|E,v=0;v<4&&d+v*.75<x;v++)h.push(f.charAt(p>>>6*(3-v)&63));var m=f.charAt(64);if(m)for(;h.length%4;)h.push(m);return h.join("")},parse:function(l,a){a===void 0&&(a=!0);var u=l.length,x=a?this._safe_map:this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var h=0;h<x.length;h++)f[x.charCodeAt(h)]=h}var d=x.charAt(64);if(d){var g=l.indexOf(d);g!==-1&&(u=g)}return c(l,u,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function c(l,a,u){for(var x=[],f=0,h=0;h<a;h++)if(h%4){var d=u[l.charCodeAt(h-1)]<<h%4*2,g=u[l.charCodeAt(h)]>>>6-h%4*2,_=d|g;x[f>>>2]|=_<<24-f%4*8,f++}return s.create(x,f)}}(),t.enc.Base64url})}(ps)),ps.exports}var _s={exports:{}},kl;function En(){return kl||(kl=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=[];(function(){for(var g=0;g<64;g++)a[g]=r.abs(r.sin(g+1))*4294967296|0})();var u=l.MD5=c.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,_){for(var E=0;E<16;E++){var p=_+E,v=g[p];g[p]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360}var m=this._hash.words,A=g[_+0],D=g[_+1],b=g[_+2],B=g[_+3],k=g[_+4],C=g[_+5],y=g[_+6],F=g[_+7],w=g[_+8],N=g[_+9],P=g[_+10],M=g[_+11],Y=g[_+12],$=g[_+13],K=g[_+14],j=g[_+15],I=m[0],T=m[1],R=m[2],S=m[3];I=x(I,T,R,S,A,7,a[0]),S=x(S,I,T,R,D,12,a[1]),R=x(R,S,I,T,b,17,a[2]),T=x(T,R,S,I,B,22,a[3]),I=x(I,T,R,S,k,7,a[4]),S=x(S,I,T,R,C,12,a[5]),R=x(R,S,I,T,y,17,a[6]),T=x(T,R,S,I,F,22,a[7]),I=x(I,T,R,S,w,7,a[8]),S=x(S,I,T,R,N,12,a[9]),R=x(R,S,I,T,P,17,a[10]),T=x(T,R,S,I,M,22,a[11]),I=x(I,T,R,S,Y,7,a[12]),S=x(S,I,T,R,$,12,a[13]),R=x(R,S,I,T,K,17,a[14]),T=x(T,R,S,I,j,22,a[15]),I=f(I,T,R,S,D,5,a[16]),S=f(S,I,T,R,y,9,a[17]),R=f(R,S,I,T,M,14,a[18]),T=f(T,R,S,I,A,20,a[19]),I=f(I,T,R,S,C,5,a[20]),S=f(S,I,T,R,P,9,a[21]),R=f(R,S,I,T,j,14,a[22]),T=f(T,R,S,I,k,20,a[23]),I=f(I,T,R,S,N,5,a[24]),S=f(S,I,T,R,K,9,a[25]),R=f(R,S,I,T,B,14,a[26]),T=f(T,R,S,I,w,20,a[27]),I=f(I,T,R,S,$,5,a[28]),S=f(S,I,T,R,b,9,a[29]),R=f(R,S,I,T,F,14,a[30]),T=f(T,R,S,I,Y,20,a[31]),I=h(I,T,R,S,C,4,a[32]),S=h(S,I,T,R,w,11,a[33]),R=h(R,S,I,T,M,16,a[34]),T=h(T,R,S,I,K,23,a[35]),I=h(I,T,R,S,D,4,a[36]),S=h(S,I,T,R,k,11,a[37]),R=h(R,S,I,T,F,16,a[38]),T=h(T,R,S,I,P,23,a[39]),I=h(I,T,R,S,$,4,a[40]),S=h(S,I,T,R,A,11,a[41]),R=h(R,S,I,T,B,16,a[42]),T=h(T,R,S,I,y,23,a[43]),I=h(I,T,R,S,N,4,a[44]),S=h(S,I,T,R,Y,11,a[45]),R=h(R,S,I,T,j,16,a[46]),T=h(T,R,S,I,b,23,a[47]),I=d(I,T,R,S,A,6,a[48]),S=d(S,I,T,R,F,10,a[49]),R=d(R,S,I,T,K,15,a[50]),T=d(T,R,S,I,C,21,a[51]),I=d(I,T,R,S,Y,6,a[52]),S=d(S,I,T,R,B,10,a[53]),R=d(R,S,I,T,P,15,a[54]),T=d(T,R,S,I,D,21,a[55]),I=d(I,T,R,S,w,6,a[56]),S=d(S,I,T,R,j,10,a[57]),R=d(R,S,I,T,y,15,a[58]),T=d(T,R,S,I,$,21,a[59]),I=d(I,T,R,S,k,6,a[60]),S=d(S,I,T,R,M,10,a[61]),R=d(R,S,I,T,b,15,a[62]),T=d(T,R,S,I,N,21,a[63]),m[0]=m[0]+I|0,m[1]=m[1]+T|0,m[2]=m[2]+R|0,m[3]=m[3]+S|0},_doFinalize:function(){var g=this._data,_=g.words,E=this._nDataBytes*8,p=g.sigBytes*8;_[p>>>5]|=128<<24-p%32;var v=r.floor(E/4294967296),m=E;_[(p+64>>>9<<4)+15]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,_[(p+64>>>9<<4)+14]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360,g.sigBytes=(_.length+1)*4,this._process();for(var A=this._hash,D=A.words,b=0;b<4;b++){var B=D[b];D[b]=(B<<8|B>>>24)&16711935|(B<<24|B>>>8)&4278255360}return A},clone:function(){var g=c.clone.call(this);return g._hash=this._hash.clone(),g}});function x(g,_,E,p,v,m,A){var D=g+(_&E|~_&p)+v+A;return(D<<m|D>>>32-m)+_}function f(g,_,E,p,v,m,A){var D=g+(_&p|E&~p)+v+A;return(D<<m|D>>>32-m)+_}function h(g,_,E,p,v,m,A){var D=g+(_^E^p)+v+A;return(D<<m|D>>>32-m)+_}function d(g,_,E,p,v,m,A){var D=g+(E^(_|~p))+v+A;return(D<<m|D>>>32-m)+_}i.MD5=c._createHelper(u),i.HmacMD5=c._createHmacHelper(u)}(Math),t.MD5})}(_s)),_s.exports}var vs={exports:{}},Sl;function Zh(){return Sl||(Sl=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.Hasher,c=r.algo,l=[],a=c.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,x){for(var f=this._hash.words,h=f[0],d=f[1],g=f[2],_=f[3],E=f[4],p=0;p<80;p++){if(p<16)l[p]=u[x+p]|0;else{var v=l[p-3]^l[p-8]^l[p-14]^l[p-16];l[p]=v<<1|v>>>31}var m=(h<<5|h>>>27)+E+l[p];p<20?m+=(d&g|~d&_)+1518500249:p<40?m+=(d^g^_)+1859775393:p<60?m+=(d&g|d&_|g&_)-1894007588:m+=(d^g^_)-899497514,E=_,_=g,g=d<<30|d>>>2,d=h,h=m}f[0]=f[0]+h|0,f[1]=f[1]+d|0,f[2]=f[2]+g|0,f[3]=f[3]+_|0,f[4]=f[4]+E|0},_doFinalize:function(){var u=this._data,x=u.words,f=this._nDataBytes*8,h=u.sigBytes*8;return x[h>>>5]|=128<<24-h%32,x[(h+64>>>9<<4)+14]=Math.floor(f/4294967296),x[(h+64>>>9<<4)+15]=f,u.sigBytes=x.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(a),r.HmacSHA1=o._createHmacHelper(a)}(),t.SHA1})}(vs)),vs.exports}var gs={exports:{}},Tl;function ma(){return Tl||(Tl=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=[],u=[];(function(){function h(E){for(var p=r.sqrt(E),v=2;v<=p;v++)if(!(E%v))return!1;return!0}function d(E){return(E-(E|0))*4294967296|0}for(var g=2,_=0;_<64;)h(g)&&(_<8&&(a[_]=d(r.pow(g,1/2))),u[_]=d(r.pow(g,1/3)),_++),g++})();var x=[],f=l.SHA256=c.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(h,d){for(var g=this._hash.words,_=g[0],E=g[1],p=g[2],v=g[3],m=g[4],A=g[5],D=g[6],b=g[7],B=0;B<64;B++){if(B<16)x[B]=h[d+B]|0;else{var k=x[B-15],C=(k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3,y=x[B-2],F=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;x[B]=C+x[B-7]+F+x[B-16]}var w=m&A^~m&D,N=_&E^_&p^E&p,P=(_<<30|_>>>2)^(_<<19|_>>>13)^(_<<10|_>>>22),M=(m<<26|m>>>6)^(m<<21|m>>>11)^(m<<7|m>>>25),Y=b+M+w+u[B]+x[B],$=P+N;b=D,D=A,A=m,m=v+Y|0,v=p,p=E,E=_,_=Y+$|0}g[0]=g[0]+_|0,g[1]=g[1]+E|0,g[2]=g[2]+p|0,g[3]=g[3]+v|0,g[4]=g[4]+m|0,g[5]=g[5]+A|0,g[6]=g[6]+D|0,g[7]=g[7]+b|0},_doFinalize:function(){var h=this._data,d=h.words,g=this._nDataBytes*8,_=h.sigBytes*8;return d[_>>>5]|=128<<24-_%32,d[(_+64>>>9<<4)+14]=r.floor(g/4294967296),d[(_+64>>>9<<4)+15]=g,h.sigBytes=d.length*4,this._process(),this._hash},clone:function(){var h=c.clone.call(this);return h._hash=this._hash.clone(),h}});i.SHA256=c._createHelper(f),i.HmacSHA256=c._createHmacHelper(f)}(Math),t.SHA256})}(gs)),gs.exports}var ms={exports:{}},Rl;function y8(){return Rl||(Rl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),ma())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.algo,c=o.SHA256,l=o.SHA224=c.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=c._doFinalize.call(this);return a.sigBytes-=4,a}});r.SHA224=c._createHelper(l),r.HmacSHA224=c._createHmacHelper(l)}(),t.SHA224})}(ms)),ms.exports}var Es={exports:{}},Nl;function Jh(){return Nl||(Nl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Z0())})(U,function(t){return function(){var r=t,i=r.lib,s=i.Hasher,o=r.x64,c=o.Word,l=o.WordArray,a=r.algo;function u(){return c.create.apply(c,arguments)}var x=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],f=[];(function(){for(var d=0;d<80;d++)f[d]=u()})();var h=a.SHA512=s.extend({_doReset:function(){this._hash=new l.init([new c.init(1779033703,4089235720),new c.init(3144134277,2227873595),new c.init(1013904242,4271175723),new c.init(2773480762,1595750129),new c.init(1359893119,2917565137),new c.init(2600822924,725511199),new c.init(528734635,4215389547),new c.init(1541459225,327033209)])},_doProcessBlock:function(d,g){for(var _=this._hash.words,E=_[0],p=_[1],v=_[2],m=_[3],A=_[4],D=_[5],b=_[6],B=_[7],k=E.high,C=E.low,y=p.high,F=p.low,w=v.high,N=v.low,P=m.high,M=m.low,Y=A.high,$=A.low,K=D.high,j=D.low,I=b.high,T=b.low,R=B.high,S=B.low,Q=k,X=C,le=y,H=F,je=w,He=N,vt=P,Ke=M,me=Y,ue=$,rt=K,Ye=j,it=I,Xe=T,gt=R,Qe=S,Ee=0;Ee<80;Ee++){var xe,be,O=f[Ee];if(Ee<16)be=O.high=d[g+Ee*2]|0,xe=O.low=d[g+Ee*2+1]|0;else{var fe=f[Ee-15],ye=fe.high,Ze=fe.low,J0=(ye>>>1|Ze<<31)^(ye>>>8|Ze<<24)^ye>>>7,Kn=(Ze>>>1|ye<<31)^(Ze>>>8|ye<<24)^(Ze>>>7|ye<<25),Yn=f[Ee-2],Je=Yn.high,st=Yn.low,ei=(Je>>>19|st<<13)^(Je<<3|st>>>29)^Je>>>6,Xn=(st>>>19|Je<<13)^(st<<3|Je>>>29)^(st>>>6|Je<<26),Qn=f[Ee-7],ti=Qn.high,ni=Qn.low,Zn=f[Ee-16],ri=Zn.high,Jn=Zn.low;xe=Kn+ni,be=J0+ti+(xe>>>0<Kn>>>0?1:0),xe=xe+Xn,be=be+ei+(xe>>>0<Xn>>>0?1:0),xe=xe+Jn,be=be+ri+(xe>>>0<Jn>>>0?1:0),O.high=be,O.low=xe}var ii=me&rt^~me&it,er=ue&Ye^~ue&Xe,si=Q&le^Q&je^le&je,oi=X&H^X&He^H&He,ai=(Q>>>28|X<<4)^(Q<<30|X>>>2)^(Q<<25|X>>>7),tr=(X>>>28|Q<<4)^(X<<30|Q>>>2)^(X<<25|Q>>>7),ci=(me>>>14|ue<<18)^(me>>>18|ue<<14)^(me<<23|ue>>>9),li=(ue>>>14|me<<18)^(ue>>>18|me<<14)^(ue<<23|me>>>9),nr=x[Ee],ui=nr.high,rr=nr.low,pe=Qe+li,Te=gt+ci+(pe>>>0<Qe>>>0?1:0),pe=pe+er,Te=Te+ii+(pe>>>0<er>>>0?1:0),pe=pe+rr,Te=Te+ui+(pe>>>0<rr>>>0?1:0),pe=pe+xe,Te=Te+be+(pe>>>0<xe>>>0?1:0),ir=tr+oi,fi=ai+si+(ir>>>0<tr>>>0?1:0);gt=it,Qe=Xe,it=rt,Xe=Ye,rt=me,Ye=ue,ue=Ke+pe|0,me=vt+Te+(ue>>>0<Ke>>>0?1:0)|0,vt=je,Ke=He,je=le,He=H,le=Q,H=X,X=pe+ir|0,Q=Te+fi+(X>>>0<pe>>>0?1:0)|0}C=E.low=C+X,E.high=k+Q+(C>>>0<X>>>0?1:0),F=p.low=F+H,p.high=y+le+(F>>>0<H>>>0?1:0),N=v.low=N+He,v.high=w+je+(N>>>0<He>>>0?1:0),M=m.low=M+Ke,m.high=P+vt+(M>>>0<Ke>>>0?1:0),$=A.low=$+ue,A.high=Y+me+($>>>0<ue>>>0?1:0),j=D.low=j+Ye,D.high=K+rt+(j>>>0<Ye>>>0?1:0),T=b.low=T+Xe,b.high=I+it+(T>>>0<Xe>>>0?1:0),S=B.low=S+Qe,B.high=R+gt+(S>>>0<Qe>>>0?1:0)},_doFinalize:function(){var d=this._data,g=d.words,_=this._nDataBytes*8,E=d.sigBytes*8;g[E>>>5]|=128<<24-E%32,g[(E+128>>>10<<5)+30]=Math.floor(_/4294967296),g[(E+128>>>10<<5)+31]=_,d.sigBytes=g.length*4,this._process();var p=this._hash.toX32();return p},clone:function(){var d=s.clone.call(this);return d._hash=this._hash.clone(),d},blockSize:1024/32});r.SHA512=s._createHelper(h),r.HmacSHA512=s._createHmacHelper(h)}(),t.SHA512})}(Es)),Es.exports}var Cs={exports:{}},Pl;function A8(){return Pl||(Pl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Z0(),Jh())})(U,function(t){return function(){var r=t,i=r.x64,s=i.Word,o=i.WordArray,c=r.algo,l=c.SHA512,a=c.SHA384=l.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=l._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=l._createHelper(a),r.HmacSHA384=l._createHmacHelper(a)}(),t.SHA384})}(Cs)),Cs.exports}var ys={exports:{}},Ol;function b8(){return Ol||(Ol=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Z0())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.x64,a=l.Word,u=i.algo,x=[],f=[],h=[];(function(){for(var _=1,E=0,p=0;p<24;p++){x[_+5*E]=(p+1)*(p+2)/2%64;var v=E%5,m=(2*_+3*E)%5;_=v,E=m}for(var _=0;_<5;_++)for(var E=0;E<5;E++)f[_+5*E]=E+(2*_+3*E)%5*5;for(var A=1,D=0;D<24;D++){for(var b=0,B=0,k=0;k<7;k++){if(A&1){var C=(1<<k)-1;C<32?B^=1<<C:b^=1<<C-32}A&128?A=A<<1^113:A<<=1}h[D]=a.create(b,B)}})();var d=[];(function(){for(var _=0;_<25;_++)d[_]=a.create()})();var g=u.SHA3=c.extend({cfg:c.cfg.extend({outputLength:512}),_doReset:function(){for(var _=this._state=[],E=0;E<25;E++)_[E]=new a.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(_,E){for(var p=this._state,v=this.blockSize/2,m=0;m<v;m++){var A=_[E+2*m],D=_[E+2*m+1];A=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360,D=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360;var b=p[m];b.high^=D,b.low^=A}for(var B=0;B<24;B++){for(var k=0;k<5;k++){for(var C=0,y=0,F=0;F<5;F++){var b=p[k+5*F];C^=b.high,y^=b.low}var w=d[k];w.high=C,w.low=y}for(var k=0;k<5;k++)for(var N=d[(k+4)%5],P=d[(k+1)%5],M=P.high,Y=P.low,C=N.high^(M<<1|Y>>>31),y=N.low^(Y<<1|M>>>31),F=0;F<5;F++){var b=p[k+5*F];b.high^=C,b.low^=y}for(var $=1;$<25;$++){var C,y,b=p[$],K=b.high,j=b.low,I=x[$];I<32?(C=K<<I|j>>>32-I,y=j<<I|K>>>32-I):(C=j<<I-32|K>>>64-I,y=K<<I-32|j>>>64-I);var T=d[f[$]];T.high=C,T.low=y}var R=d[0],S=p[0];R.high=S.high,R.low=S.low;for(var k=0;k<5;k++)for(var F=0;F<5;F++){var $=k+5*F,b=p[$],Q=d[$],X=d[(k+1)%5+5*F],le=d[(k+2)%5+5*F];b.high=Q.high^~X.high&le.high,b.low=Q.low^~X.low&le.low}var b=p[0],H=h[B];b.high^=H.high,b.low^=H.low}},_doFinalize:function(){var _=this._data,E=_.words;this._nDataBytes*8;var p=_.sigBytes*8,v=this.blockSize*32;E[p>>>5]|=1<<24-p%32,E[(r.ceil((p+1)/v)*v>>>5)-1]|=128,_.sigBytes=E.length*4,this._process();for(var m=this._state,A=this.cfg.outputLength/8,D=A/8,b=[],B=0;B<D;B++){var k=m[B],C=k.high,y=k.low;C=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,y=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,b.push(y),b.push(C)}return new o.init(b,A)},clone:function(){for(var _=c.clone.call(this),E=_._state=this._state.slice(0),p=0;p<25;p++)E[p]=E[p].clone();return _}});i.SHA3=c._createHelper(g),i.HmacSHA3=c._createHmacHelper(g)}(Math),t.SHA3})}(ys)),ys.exports}var As={exports:{}},Ll;function D8(){return Ll||(Ll=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),x=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),f=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),h=o.create([0,1518500249,1859775393,2400959708,2840853838]),d=o.create([1352829926,1548603684,1836072691,2053994217,0]),g=l.RIPEMD160=c.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(D,b){for(var B=0;B<16;B++){var k=b+B,C=D[k];D[k]=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360}var y=this._hash.words,F=h.words,w=d.words,N=a.words,P=u.words,M=x.words,Y=f.words,$,K,j,I,T,R,S,Q,X,le;R=$=y[0],S=K=y[1],Q=j=y[2],X=I=y[3],le=T=y[4];for(var H,B=0;B<80;B+=1)H=$+D[b+N[B]]|0,B<16?H+=_(K,j,I)+F[0]:B<32?H+=E(K,j,I)+F[1]:B<48?H+=p(K,j,I)+F[2]:B<64?H+=v(K,j,I)+F[3]:H+=m(K,j,I)+F[4],H=H|0,H=A(H,M[B]),H=H+T|0,$=T,T=I,I=A(j,10),j=K,K=H,H=R+D[b+P[B]]|0,B<16?H+=m(S,Q,X)+w[0]:B<32?H+=v(S,Q,X)+w[1]:B<48?H+=p(S,Q,X)+w[2]:B<64?H+=E(S,Q,X)+w[3]:H+=_(S,Q,X)+w[4],H=H|0,H=A(H,Y[B]),H=H+le|0,R=le,le=X,X=A(Q,10),Q=S,S=H;H=y[1]+j+X|0,y[1]=y[2]+I+le|0,y[2]=y[3]+T+R|0,y[3]=y[4]+$+S|0,y[4]=y[0]+K+Q|0,y[0]=H},_doFinalize:function(){var D=this._data,b=D.words,B=this._nDataBytes*8,k=D.sigBytes*8;b[k>>>5]|=128<<24-k%32,b[(k+64>>>9<<4)+14]=(B<<8|B>>>24)&16711935|(B<<24|B>>>8)&4278255360,D.sigBytes=(b.length+1)*4,this._process();for(var C=this._hash,y=C.words,F=0;F<5;F++){var w=y[F];y[F]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}return C},clone:function(){var D=c.clone.call(this);return D._hash=this._hash.clone(),D}});function _(D,b,B){return D^b^B}function E(D,b,B){return D&b|~D&B}function p(D,b,B){return(D|~b)^B}function v(D,b,B){return D&B|b&~B}function m(D,b,B){return D^(b|~B)}function A(D,b){return D<<b|D>>>32-b}i.RIPEMD160=c._createHelper(g),i.HmacRIPEMD160=c._createHmacHelper(g)}(),t.RIPEMD160})}(As)),As.exports}var bs={exports:{}},Ml;function Ea(){return Ml||(Ml=1,function(n,e){(function(t,r){n.exports=r(oe())})(U,function(t){(function(){var r=t,i=r.lib,s=i.Base,o=r.enc,c=o.Utf8,l=r.algo;l.HMAC=s.extend({init:function(a,u){a=this._hasher=new a.init,typeof u=="string"&&(u=c.parse(u));var x=a.blockSize,f=x*4;u.sigBytes>f&&(u=a.finalize(u)),u.clamp();for(var h=this._oKey=u.clone(),d=this._iKey=u.clone(),g=h.words,_=d.words,E=0;E<x;E++)g[E]^=1549556828,_[E]^=909522486;h.sigBytes=d.sigBytes=f,this.reset()},reset:function(){var a=this._hasher;a.reset(),a.update(this._iKey)},update:function(a){return this._hasher.update(a),this},finalize:function(a){var u=this._hasher,x=u.finalize(a);u.reset();var f=u.finalize(this._oKey.clone().concat(x));return f}})})()})}(bs)),bs.exports}var Ds={exports:{}},Hl;function B8(){return Hl||(Hl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),ma(),Ea())})(U,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,c=r.algo,l=c.SHA256,a=c.HMAC,u=c.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:25e4}),init:function(x){this.cfg=this.cfg.extend(x)},compute:function(x,f){for(var h=this.cfg,d=a.create(h.hasher,x),g=o.create(),_=o.create([1]),E=g.words,p=_.words,v=h.keySize,m=h.iterations;E.length<v;){var A=d.update(f).finalize(_);d.reset();for(var D=A.words,b=D.length,B=A,k=1;k<m;k++){B=d.finalize(B),d.reset();for(var C=B.words,y=0;y<b;y++)D[y]^=C[y]}g.concat(A),p[0]++}return g.sigBytes=v*4,g}});r.PBKDF2=function(x,f,h){return u.create(h).compute(x,f)}}(),t.PBKDF2})}(Ds)),Ds.exports}var Bs={exports:{}},Ul;function Jt(){return Ul||(Ul=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Zh(),Ea())})(U,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,c=r.algo,l=c.MD5,a=c.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,x){for(var f,h=this.cfg,d=h.hasher.create(),g=o.create(),_=g.words,E=h.keySize,p=h.iterations;_.length<E;){f&&d.update(f),f=d.update(u).finalize(x),d.reset();for(var v=1;v<p;v++)f=d.finalize(f),d.reset();g.concat(f)}return g.sigBytes=E*4,g}});r.EvpKDF=function(u,x,f){return a.create(f).compute(u,x)}}(),t.EvpKDF})}(Bs)),Bs.exports}var ws={exports:{}},zl;function Se(){return zl||(zl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Jt())})(U,function(t){t.lib.Cipher||function(r){var i=t,s=i.lib,o=s.Base,c=s.WordArray,l=s.BufferedBlockAlgorithm,a=i.enc;a.Utf8;var u=a.Base64,x=i.algo,f=x.EvpKDF,h=s.Cipher=l.extend({cfg:o.extend(),createEncryptor:function(C,y){return this.create(this._ENC_XFORM_MODE,C,y)},createDecryptor:function(C,y){return this.create(this._DEC_XFORM_MODE,C,y)},init:function(C,y,F){this.cfg=this.cfg.extend(F),this._xformMode=C,this._key=y,this.reset()},reset:function(){l.reset.call(this),this._doReset()},process:function(C){return this._append(C),this._process()},finalize:function(C){C&&this._append(C);var y=this._doFinalize();return y},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function C(y){return typeof y=="string"?k:D}return function(y){return{encrypt:function(F,w,N){return C(w).encrypt(y,F,w,N)},decrypt:function(F,w,N){return C(w).decrypt(y,F,w,N)}}}}()});s.StreamCipher=h.extend({_doFinalize:function(){var C=this._process(!0);return C},blockSize:1});var d=i.mode={},g=s.BlockCipherMode=o.extend({createEncryptor:function(C,y){return this.Encryptor.create(C,y)},createDecryptor:function(C,y){return this.Decryptor.create(C,y)},init:function(C,y){this._cipher=C,this._iv=y}}),_=d.CBC=function(){var C=g.extend();C.Encryptor=C.extend({processBlock:function(F,w){var N=this._cipher,P=N.blockSize;y.call(this,F,w,P),N.encryptBlock(F,w),this._prevBlock=F.slice(w,w+P)}}),C.Decryptor=C.extend({processBlock:function(F,w){var N=this._cipher,P=N.blockSize,M=F.slice(w,w+P);N.decryptBlock(F,w),y.call(this,F,w,P),this._prevBlock=M}});function y(F,w,N){var P,M=this._iv;M?(P=M,this._iv=r):P=this._prevBlock;for(var Y=0;Y<N;Y++)F[w+Y]^=P[Y]}return C}(),E=i.pad={},p=E.Pkcs7={pad:function(C,y){for(var F=y*4,w=F-C.sigBytes%F,N=w<<24|w<<16|w<<8|w,P=[],M=0;M<w;M+=4)P.push(N);var Y=c.create(P,w);C.concat(Y)},unpad:function(C){var y=C.words[C.sigBytes-1>>>2]&255;C.sigBytes-=y}};s.BlockCipher=h.extend({cfg:h.cfg.extend({mode:_,padding:p}),reset:function(){var C;h.reset.call(this);var y=this.cfg,F=y.iv,w=y.mode;this._xformMode==this._ENC_XFORM_MODE?C=w.createEncryptor:(C=w.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==C?this._mode.init(this,F&&F.words):(this._mode=C.call(w,this,F&&F.words),this._mode.__creator=C)},_doProcessBlock:function(C,y){this._mode.processBlock(C,y)},_doFinalize:function(){var C,y=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(y.pad(this._data,this.blockSize),C=this._process(!0)):(C=this._process(!0),y.unpad(C)),C},blockSize:128/32});var v=s.CipherParams=o.extend({init:function(C){this.mixIn(C)},toString:function(C){return(C||this.formatter).stringify(this)}}),m=i.format={},A=m.OpenSSL={stringify:function(C){var y,F=C.ciphertext,w=C.salt;return w?y=c.create([1398893684,1701076831]).concat(w).concat(F):y=F,y.toString(u)},parse:function(C){var y,F=u.parse(C),w=F.words;return w[0]==1398893684&&w[1]==1701076831&&(y=c.create(w.slice(2,4)),w.splice(0,4),F.sigBytes-=16),v.create({ciphertext:F,salt:y})}},D=s.SerializableCipher=o.extend({cfg:o.extend({format:A}),encrypt:function(C,y,F,w){w=this.cfg.extend(w);var N=C.createEncryptor(F,w),P=N.finalize(y),M=N.cfg;return v.create({ciphertext:P,key:F,iv:M.iv,algorithm:C,mode:M.mode,padding:M.padding,blockSize:C.blockSize,formatter:w.format})},decrypt:function(C,y,F,w){w=this.cfg.extend(w),y=this._parse(y,w.format);var N=C.createDecryptor(F,w).finalize(y.ciphertext);return N},_parse:function(C,y){return typeof C=="string"?y.parse(C,this):C}}),b=i.kdf={},B=b.OpenSSL={execute:function(C,y,F,w,N){if(w||(w=c.random(64/8)),N)var P=f.create({keySize:y+F,hasher:N}).compute(C,w);else var P=f.create({keySize:y+F}).compute(C,w);var M=c.create(P.words.slice(y),F*4);return P.sigBytes=y*4,v.create({key:P,iv:M,salt:w})}},k=s.PasswordBasedCipher=D.extend({cfg:D.cfg.extend({kdf:B}),encrypt:function(C,y,F,w){w=this.cfg.extend(w);var N=w.kdf.execute(F,C.keySize,C.ivSize,w.salt,w.hasher);w.iv=N.iv;var P=D.encrypt.call(this,C,y,N.key,w);return P.mixIn(N),P},decrypt:function(C,y,F,w){w=this.cfg.extend(w),y=this._parse(y,w.format);var N=w.kdf.execute(F,C.keySize,C.ivSize,y.salt,w.hasher);w.iv=N.iv;var P=D.decrypt.call(this,C,y,N.key,w);return P}})}()})}(ws)),ws.exports}var Fs={exports:{}},Wl;function w8(){return Wl||(Wl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.mode.CFB=function(){var r=t.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize;i.call(this,s,o,l,c),this._prevBlock=s.slice(o,o+l)}}),r.Decryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=s.slice(o,o+l);i.call(this,s,o,l,c),this._prevBlock=a}});function i(s,o,c,l){var a,u=this._iv;u?(a=u.slice(0),this._iv=void 0):a=this._prevBlock,l.encryptBlock(a,0);for(var x=0;x<c;x++)s[o+x]^=a[x]}return r}(),t.mode.CFB})}(Fs)),Fs.exports}var Is={exports:{}},ql;function F8(){return ql||(ql=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.mode.CTR=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=this._iv,u=this._counter;a&&(u=this._counter=a.slice(0),this._iv=void 0);var x=u.slice(0);c.encryptBlock(x,0),u[l-1]=u[l-1]+1|0;for(var f=0;f<l;f++)s[o+f]^=x[f]}});return r.Decryptor=i,r}(),t.mode.CTR})}(Is)),Is.exports}var ks={exports:{}},$l;function I8(){return $l||($l=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var r=t.lib.BlockCipherMode.extend();function i(c){if((c>>24&255)===255){var l=c>>16&255,a=c>>8&255,u=c&255;l===255?(l=0,a===255?(a=0,u===255?u=0:++u):++a):++l,c=0,c+=l<<16,c+=a<<8,c+=u}else c+=1<<24;return c}function s(c){return(c[0]=i(c[0]))===0&&(c[1]=i(c[1])),c}var o=r.Encryptor=r.extend({processBlock:function(c,l){var a=this._cipher,u=a.blockSize,x=this._iv,f=this._counter;x&&(f=this._counter=x.slice(0),this._iv=void 0),s(f);var h=f.slice(0);a.encryptBlock(h,0);for(var d=0;d<u;d++)c[l+d]^=h[d]}});return r.Decryptor=o,r}(),t.mode.CTRGladman})}(ks)),ks.exports}var Ss={exports:{}},Vl;function k8(){return Vl||(Vl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.mode.OFB=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=this._iv,u=this._keystream;a&&(u=this._keystream=a.slice(0),this._iv=void 0),c.encryptBlock(u,0);for(var x=0;x<l;x++)s[o+x]^=u[x]}});return r.Decryptor=i,r}(),t.mode.OFB})}(Ss)),Ss.exports}var Ts={exports:{}},Gl;function S8(){return Gl||(Gl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.mode.ECB=function(){var r=t.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),t.mode.ECB})}(Ts)),Ts.exports}var Rs={exports:{}},jl;function T8(){return jl||(jl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,c=o-s%o,l=s+c-1;r.clamp(),r.words[l>>>2]|=c<<24-l%4*8,r.sigBytes+=c},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Ansix923})}(Rs)),Rs.exports}var Ns={exports:{}},Kl;function R8(){return Kl||(Kl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Iso10126})}(Ns)),Ns.exports}var Ps={exports:{}},Yl;function N8(){return Yl||(Yl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.pad.Iso97971={pad:function(r,i){r.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(r,i)},unpad:function(r){t.pad.ZeroPadding.unpad(r),r.sigBytes--}},t.pad.Iso97971})}(Ps)),Ps.exports}var Os={exports:{}},Xl;function P8(){return Xl||(Xl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(Os)),Os.exports}var Ls={exports:{}},Ql;function O8(){return Ql||(Ql=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(Ls)),Ls.exports}var Ms={exports:{}},Zl;function L8(){return Zl||(Zl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),Se())})(U,function(t){return function(r){var i=t,s=i.lib,o=s.CipherParams,c=i.enc,l=c.Hex,a=i.format;a.Hex={stringify:function(u){return u.ciphertext.toString(l)},parse:function(u){var x=l.parse(u);return o.create({ciphertext:x})}}}(),t.format.Hex})}(Ms)),Ms.exports}var Hs={exports:{}},Jl;function M8(){return Jl||(Jl=1,function(n,e){(function(t,r,i){n.exports=r(oe(),mn(),En(),Jt(),Se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo,c=[],l=[],a=[],u=[],x=[],f=[],h=[],d=[],g=[],_=[];(function(){for(var v=[],m=0;m<256;m++)m<128?v[m]=m<<1:v[m]=m<<1^283;for(var A=0,D=0,m=0;m<256;m++){var b=D^D<<1^D<<2^D<<3^D<<4;b=b>>>8^b&255^99,c[A]=b,l[b]=A;var B=v[A],k=v[B],C=v[k],y=v[b]*257^b*16843008;a[A]=y<<24|y>>>8,u[A]=y<<16|y>>>16,x[A]=y<<8|y>>>24,f[A]=y;var y=C*16843009^k*65537^B*257^A*16843008;h[b]=y<<24|y>>>8,d[b]=y<<16|y>>>16,g[b]=y<<8|y>>>24,_[b]=y,A?(A=B^v[v[v[C^B]]],D^=v[v[D]]):A=D=1}})();var E=[0,1,2,4,8,16,32,64,128,27,54],p=o.AES=s.extend({_doReset:function(){var v;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var m=this._keyPriorReset=this._key,A=m.words,D=m.sigBytes/4,b=this._nRounds=D+6,B=(b+1)*4,k=this._keySchedule=[],C=0;C<B;C++)C<D?k[C]=A[C]:(v=k[C-1],C%D?D>6&&C%D==4&&(v=c[v>>>24]<<24|c[v>>>16&255]<<16|c[v>>>8&255]<<8|c[v&255]):(v=v<<8|v>>>24,v=c[v>>>24]<<24|c[v>>>16&255]<<16|c[v>>>8&255]<<8|c[v&255],v^=E[C/D|0]<<24),k[C]=k[C-D]^v);for(var y=this._invKeySchedule=[],F=0;F<B;F++){var C=B-F;if(F%4)var v=k[C];else var v=k[C-4];F<4||C<=4?y[F]=v:y[F]=h[c[v>>>24]]^d[c[v>>>16&255]]^g[c[v>>>8&255]]^_[c[v&255]]}}},encryptBlock:function(v,m){this._doCryptBlock(v,m,this._keySchedule,a,u,x,f,c)},decryptBlock:function(v,m){var A=v[m+1];v[m+1]=v[m+3],v[m+3]=A,this._doCryptBlock(v,m,this._invKeySchedule,h,d,g,_,l);var A=v[m+1];v[m+1]=v[m+3],v[m+3]=A},_doCryptBlock:function(v,m,A,D,b,B,k,C){for(var y=this._nRounds,F=v[m]^A[0],w=v[m+1]^A[1],N=v[m+2]^A[2],P=v[m+3]^A[3],M=4,Y=1;Y<y;Y++){var $=D[F>>>24]^b[w>>>16&255]^B[N>>>8&255]^k[P&255]^A[M++],K=D[w>>>24]^b[N>>>16&255]^B[P>>>8&255]^k[F&255]^A[M++],j=D[N>>>24]^b[P>>>16&255]^B[F>>>8&255]^k[w&255]^A[M++],I=D[P>>>24]^b[F>>>16&255]^B[w>>>8&255]^k[N&255]^A[M++];F=$,w=K,N=j,P=I}var $=(C[F>>>24]<<24|C[w>>>16&255]<<16|C[N>>>8&255]<<8|C[P&255])^A[M++],K=(C[w>>>24]<<24|C[N>>>16&255]<<16|C[P>>>8&255]<<8|C[F&255])^A[M++],j=(C[N>>>24]<<24|C[P>>>16&255]<<16|C[F>>>8&255]<<8|C[w&255])^A[M++],I=(C[P>>>24]<<24|C[F>>>16&255]<<16|C[w>>>8&255]<<8|C[N&255])^A[M++];v[m]=$,v[m+1]=K,v[m+2]=j,v[m+3]=I},keySize:256/32});r.AES=s._createHelper(p)}(),t.AES})}(Hs)),Hs.exports}var Us={exports:{}},eu;function H8(){return eu||(eu=1,function(n,e){(function(t,r,i){n.exports=r(oe(),mn(),En(),Jt(),Se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.BlockCipher,c=r.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],x=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],h=c.DES=o.extend({_doReset:function(){for(var E=this._key,p=E.words,v=[],m=0;m<56;m++){var A=l[m]-1;v[m]=p[A>>>5]>>>31-A%32&1}for(var D=this._subKeys=[],b=0;b<16;b++){for(var B=D[b]=[],k=u[b],m=0;m<24;m++)B[m/6|0]|=v[(a[m]-1+k)%28]<<31-m%6,B[4+(m/6|0)]|=v[28+(a[m+24]-1+k)%28]<<31-m%6;B[0]=B[0]<<1|B[0]>>>31;for(var m=1;m<7;m++)B[m]=B[m]>>>(m-1)*4+3;B[7]=B[7]<<5|B[7]>>>27}for(var C=this._invSubKeys=[],m=0;m<16;m++)C[m]=D[15-m]},encryptBlock:function(E,p){this._doCryptBlock(E,p,this._subKeys)},decryptBlock:function(E,p){this._doCryptBlock(E,p,this._invSubKeys)},_doCryptBlock:function(E,p,v){this._lBlock=E[p],this._rBlock=E[p+1],d.call(this,4,252645135),d.call(this,16,65535),g.call(this,2,858993459),g.call(this,8,16711935),d.call(this,1,1431655765);for(var m=0;m<16;m++){for(var A=v[m],D=this._lBlock,b=this._rBlock,B=0,k=0;k<8;k++)B|=x[k][((b^A[k])&f[k])>>>0];this._lBlock=b,this._rBlock=D^B}var C=this._lBlock;this._lBlock=this._rBlock,this._rBlock=C,d.call(this,1,1431655765),g.call(this,8,16711935),g.call(this,2,858993459),d.call(this,16,65535),d.call(this,4,252645135),E[p]=this._lBlock,E[p+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function d(E,p){var v=(this._lBlock>>>E^this._rBlock)&p;this._rBlock^=v,this._lBlock^=v<<E}function g(E,p){var v=(this._rBlock>>>E^this._lBlock)&p;this._lBlock^=v,this._rBlock^=v<<E}r.DES=o._createHelper(h);var _=c.TripleDES=o.extend({_doReset:function(){var E=this._key,p=E.words;if(p.length!==2&&p.length!==4&&p.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var v=p.slice(0,2),m=p.length<4?p.slice(0,2):p.slice(2,4),A=p.length<6?p.slice(0,2):p.slice(4,6);this._des1=h.createEncryptor(s.create(v)),this._des2=h.createEncryptor(s.create(m)),this._des3=h.createEncryptor(s.create(A))},encryptBlock:function(E,p){this._des1.encryptBlock(E,p),this._des2.decryptBlock(E,p),this._des3.encryptBlock(E,p)},decryptBlock:function(E,p){this._des3.decryptBlock(E,p),this._des2.encryptBlock(E,p),this._des1.decryptBlock(E,p)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(_)}(),t.TripleDES})}(Us)),Us.exports}var zs={exports:{}},tu;function U8(){return tu||(tu=1,function(n,e){(function(t,r,i){n.exports=r(oe(),mn(),En(),Jt(),Se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=o.RC4=s.extend({_doReset:function(){for(var u=this._key,x=u.words,f=u.sigBytes,h=this._S=[],d=0;d<256;d++)h[d]=d;for(var d=0,g=0;d<256;d++){var _=d%f,E=x[_>>>2]>>>24-_%4*8&255;g=(g+h[d]+E)%256;var p=h[d];h[d]=h[g],h[g]=p}this._i=this._j=0},_doProcessBlock:function(u,x){u[x]^=l.call(this)},keySize:256/32,ivSize:0});function l(){for(var u=this._S,x=this._i,f=this._j,h=0,d=0;d<4;d++){x=(x+1)%256,f=(f+u[x])%256;var g=u[x];u[x]=u[f],u[f]=g,h|=u[(u[x]+u[f])%256]<<24-d*8}return this._i=x,this._j=f,h}r.RC4=s._createHelper(c);var a=o.RC4Drop=c.extend({cfg:c.cfg.extend({drop:192}),_doReset:function(){c._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)l.call(this)}});r.RC4Drop=s._createHelper(a)}(),t.RC4})}(zs)),zs.exports}var Ws={exports:{}},nu;function z8(){return nu||(nu=1,function(n,e){(function(t,r,i){n.exports=r(oe(),mn(),En(),Jt(),Se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=[],l=[],a=[],u=o.Rabbit=s.extend({_doReset:function(){for(var f=this._key.words,h=this.cfg.iv,d=0;d<4;d++)f[d]=(f[d]<<8|f[d]>>>24)&16711935|(f[d]<<24|f[d]>>>8)&4278255360;var g=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],_=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var d=0;d<4;d++)x.call(this);for(var d=0;d<8;d++)_[d]^=g[d+4&7];if(h){var E=h.words,p=E[0],v=E[1],m=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360,A=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,D=m>>>16|A&4294901760,b=A<<16|m&65535;_[0]^=m,_[1]^=D,_[2]^=A,_[3]^=b,_[4]^=m,_[5]^=D,_[6]^=A,_[7]^=b;for(var d=0;d<4;d++)x.call(this)}},_doProcessBlock:function(f,h){var d=this._X;x.call(this),c[0]=d[0]^d[5]>>>16^d[3]<<16,c[1]=d[2]^d[7]>>>16^d[5]<<16,c[2]=d[4]^d[1]>>>16^d[7]<<16,c[3]=d[6]^d[3]>>>16^d[1]<<16;for(var g=0;g<4;g++)c[g]=(c[g]<<8|c[g]>>>24)&16711935|(c[g]<<24|c[g]>>>8)&4278255360,f[h+g]^=c[g]},blockSize:128/32,ivSize:64/32});function x(){for(var f=this._X,h=this._C,d=0;d<8;d++)l[d]=h[d];h[0]=h[0]+1295307597+this._b|0,h[1]=h[1]+3545052371+(h[0]>>>0<l[0]>>>0?1:0)|0,h[2]=h[2]+886263092+(h[1]>>>0<l[1]>>>0?1:0)|0,h[3]=h[3]+1295307597+(h[2]>>>0<l[2]>>>0?1:0)|0,h[4]=h[4]+3545052371+(h[3]>>>0<l[3]>>>0?1:0)|0,h[5]=h[5]+886263092+(h[4]>>>0<l[4]>>>0?1:0)|0,h[6]=h[6]+1295307597+(h[5]>>>0<l[5]>>>0?1:0)|0,h[7]=h[7]+3545052371+(h[6]>>>0<l[6]>>>0?1:0)|0,this._b=h[7]>>>0<l[7]>>>0?1:0;for(var d=0;d<8;d++){var g=f[d]+h[d],_=g&65535,E=g>>>16,p=((_*_>>>17)+_*E>>>15)+E*E,v=((g&4294901760)*g|0)+((g&65535)*g|0);a[d]=p^v}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}r.Rabbit=s._createHelper(u)}(),t.Rabbit})}(Ws)),Ws.exports}var qs={exports:{}},ru;function W8(){return ru||(ru=1,function(n,e){(function(t,r,i){n.exports=r(oe(),mn(),En(),Jt(),Se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=[],l=[],a=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var f=this._key.words,h=this.cfg.iv,d=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],g=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var _=0;_<4;_++)x.call(this);for(var _=0;_<8;_++)g[_]^=d[_+4&7];if(h){var E=h.words,p=E[0],v=E[1],m=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360,A=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,D=m>>>16|A&4294901760,b=A<<16|m&65535;g[0]^=m,g[1]^=D,g[2]^=A,g[3]^=b,g[4]^=m,g[5]^=D,g[6]^=A,g[7]^=b;for(var _=0;_<4;_++)x.call(this)}},_doProcessBlock:function(f,h){var d=this._X;x.call(this),c[0]=d[0]^d[5]>>>16^d[3]<<16,c[1]=d[2]^d[7]>>>16^d[5]<<16,c[2]=d[4]^d[1]>>>16^d[7]<<16,c[3]=d[6]^d[3]>>>16^d[1]<<16;for(var g=0;g<4;g++)c[g]=(c[g]<<8|c[g]>>>24)&16711935|(c[g]<<24|c[g]>>>8)&4278255360,f[h+g]^=c[g]},blockSize:128/32,ivSize:64/32});function x(){for(var f=this._X,h=this._C,d=0;d<8;d++)l[d]=h[d];h[0]=h[0]+1295307597+this._b|0,h[1]=h[1]+3545052371+(h[0]>>>0<l[0]>>>0?1:0)|0,h[2]=h[2]+886263092+(h[1]>>>0<l[1]>>>0?1:0)|0,h[3]=h[3]+1295307597+(h[2]>>>0<l[2]>>>0?1:0)|0,h[4]=h[4]+3545052371+(h[3]>>>0<l[3]>>>0?1:0)|0,h[5]=h[5]+886263092+(h[4]>>>0<l[4]>>>0?1:0)|0,h[6]=h[6]+1295307597+(h[5]>>>0<l[5]>>>0?1:0)|0,h[7]=h[7]+3545052371+(h[6]>>>0<l[6]>>>0?1:0)|0,this._b=h[7]>>>0<l[7]>>>0?1:0;for(var d=0;d<8;d++){var g=f[d]+h[d],_=g&65535,E=g>>>16,p=((_*_>>>17)+_*E>>>15)+E*E,v=((g&4294901760)*g|0)+((g&65535)*g|0);a[d]=p^v}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}r.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(qs)),qs.exports}var $s={exports:{}},iu;function q8(){return iu||(iu=1,function(n,e){(function(t,r,i){n.exports=r(oe(),mn(),En(),Jt(),Se())})(U,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo;const c=16,l=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],a=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function x(_,E){let p=E>>24&255,v=E>>16&255,m=E>>8&255,A=E&255,D=_.sbox[0][p]+_.sbox[1][v];return D=D^_.sbox[2][m],D=D+_.sbox[3][A],D}function f(_,E,p){let v=E,m=p,A;for(let D=0;D<c;++D)v=v^_.pbox[D],m=x(_,v)^m,A=v,v=m,m=A;return A=v,v=m,m=A,m=m^_.pbox[c],v=v^_.pbox[c+1],{left:v,right:m}}function h(_,E,p){let v=E,m=p,A;for(let D=c+1;D>1;--D)v=v^_.pbox[D],m=x(_,v)^m,A=v,v=m,m=A;return A=v,v=m,m=A,m=m^_.pbox[1],v=v^_.pbox[0],{left:v,right:m}}function d(_,E,p){for(let b=0;b<4;b++){_.sbox[b]=[];for(let B=0;B<256;B++)_.sbox[b][B]=a[b][B]}let v=0;for(let b=0;b<c+2;b++)_.pbox[b]=l[b]^E[v],v++,v>=p&&(v=0);let m=0,A=0,D=0;for(let b=0;b<c+2;b+=2)D=f(_,m,A),m=D.left,A=D.right,_.pbox[b]=m,_.pbox[b+1]=A;for(let b=0;b<4;b++)for(let B=0;B<256;B+=2)D=f(_,m,A),m=D.left,A=D.right,_.sbox[b][B]=m,_.sbox[b][B+1]=A;return!0}var g=o.Blowfish=s.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var _=this._keyPriorReset=this._key,E=_.words,p=_.sigBytes/4;d(u,E,p)}},encryptBlock:function(_,E){var p=f(u,_[E],_[E+1]);_[E]=p.left,_[E+1]=p.right},decryptBlock:function(_,E){var p=h(u,_[E],_[E+1]);_[E]=p.left,_[E+1]=p.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=s._createHelper(g)}(),t.Blowfish})}($s)),$s.exports}(function(n,e){(function(t,r,i){n.exports=r(oe(),Z0(),m8(),E8(),mn(),C8(),En(),Zh(),ma(),y8(),Jh(),A8(),b8(),D8(),Ea(),B8(),Jt(),Se(),w8(),F8(),I8(),k8(),S8(),T8(),R8(),N8(),P8(),O8(),L8(),M8(),H8(),U8(),z8(),W8(),q8())})(U,function(t){return t})})(Qh);var Vs=Qh.exports;let ed=["builds","fa-trackItems","fd-currentGameData","fd-endlessModesData","fd-playerStats"];const $8={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"},V8={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};M0($8,"sud");M0(V8,"fc");const su=va(Lr("sud")),G8=va(Lr("fc"));let j8=()=>{for(let n of ed)if(localStorage.getItem(n))return!0},K8=async(n,e)=>{let t={calculator:{},armory:{},frontierdle:{}};for(let i of ed){let s=JSON.parse(localStorage.getItem(i));if(s){if(i==="builds"){let o={};for(let c in s){let l=s[c].id,a=(await fl(dl(cs(G8,`builds/${l}`),hl()))).val();o[l]=await a}t.calculator.builds=o}else if(i==="fa-trackItems")t.armory.tracklist=s;else if(i==="fd-currentGameData")t.frontierdle.currentGamesData=s;else if(i==="fd-endlessModesData"){let o=JSON.parse(localStorage.getItem("fd-userId"));if(!o)continue;for(let c in s){let l=s[c].data;if(!l)continue;let a;try{a=Vs.AES.decrypt(l,o+8).toString(Vs.enc.Utf8)}catch{continue}let u=Vs.AES.encrypt(a,e+581827).toString();s[c].data=u}t.frontierdle.endlessModesData=s,localStorage.removeItem("fd-userId")}else i==="fd-playerStats"&&(t.frontierdle.playerStats=s);localStorage.removeItem(i)}}let r=await(await fl(dl(cs(su,`${n}/siteData`),hl()))).val();for(let i in t)(!Object.keys(t[i]).length||r[i]!==void 0)&&delete t[i];return await U2(cs(su,`${n}/siteData`),t)};function Y8(n){let e,t;return{c(){e=W("hl"),t=Oe(n[0])},m(r,i){G(r,e,i),V(e,t)},p(r,[i]){i&1&&St(t,r[0])},i:ae,o:ae,d(r){r&&q(e)}}}function X8(n,e,t){let{startTime:r}=e;const i=md();let s=Date.now(),o=s+r*1e3,c=r,l=setInterval(()=>{let a=Date.now();t(0,c=r-Math.floor((a-s)/1e3)),a>=o&&(i("end"),clearTimeout(l))},50);return n.$$set=a=>{"startTime"in a&&t(1,r=a.startTime)},[c,r]}class Q8 extends Xt{constructor(e){super(),Yt(this,e,X8,Y8,kt,{startTime:1})}}function Z8(n){let e,t,r,i,s,o,c,l,a,u,x,f;return u=new Q8({props:{startTime:15}}),u.$on("end",n[2]),{c(){e=W("span"),e.textContent=`It looks like you have data from previous sessions waiting to be\r
            synchronized to an account.`,t=ee(),r=W("span"),r.textContent=`This is a one-time synchronization process. Using this account in\r
            another browser with previous session data will erase that data,\r
            forever.`,i=ee(),s=W("span"),s.textContent="The data synchronization process will start shortly.",o=ee(),c=W("span"),l=W("i"),l.textContent="Starting in",a=ee(),Nn(u.$$.fragment),x=Oe("...")},m(h,d){G(h,e,d),G(h,t,d),G(h,r,d),G(h,i,d),G(h,s,d),G(h,o,d),G(h,c,d),V(c,l),V(c,a),an(u,c,null),V(c,x),f=!0},p:ae,i(h){f||(re(u.$$.fragment,h),f=!0)},o(h){ve(u.$$.fragment,h),f=!1},d(h){h&&(q(e),q(t),q(r),q(i),q(s),q(o),q(c)),cn(u)}}}function J8(n){let e,t,r;return{c(){e=W("span"),e.textContent="Your data is being synchronized with your account.",t=ee(),r=W("span"),r.textContent="Don't leave or close this tab!"},m(i,s){G(i,e,s),G(i,t,s),G(i,r,s)},p:ae,i:ae,o:ae,d(i){i&&(q(e),q(t),q(r))}}}function e4(n){let e,t,r,i,s;return{c(){e=W("span"),e.textContent="Your data has been synchronized!",t=ee(),r=W("span"),r.textContent="It is recommended you refresh any other tabs of affiliated sites.",i=ee(),s=W("span"),s.textContent="You can now close this notice."},m(o,c){G(o,e,c),G(o,t,c),G(o,r,c),G(o,i,c),G(o,s,c)},p:ae,i:ae,o:ae,d(o){o&&(q(e),q(t),q(r),q(i),q(s))}}}function t4(n){let e,t=n[0]?"Data Synchronized":n[1]?"Synchronizing Data...":"Data Sync Required",r,i,s,o,c,l,a,u;const x=[e4,J8,Z8],f=[];function h(d,g){return d[0]?0:d[1]?1:2}return l=h(n),a=f[l]=x[l](n),{c(){e=W("span"),r=Oe(t),i=ee(),s=W("hr"),o=ee(),c=W("div"),a.c(),z(e,"class","title"),z(c,"class","contents flex fd-col rg-1 svelte-1utpa68")},m(d,g){G(d,e,g),V(e,r),G(d,i,g),G(d,s,g),G(d,o,g),G(d,c,g),f[l].m(c,null),u=!0},p(d,[g]){(!u||g&3)&&t!==(t=d[0]?"Data Synchronized":d[1]?"Synchronizing Data...":"Data Sync Required")&&St(r,t);let _=l;l=h(d),l===_?f[l].p(d,g):(ot(),ve(f[_],1,1,()=>{f[_]=null}),at(),a=f[l],a?a.p(d,g):(a=f[l]=x[l](d),a.c()),re(a,1),a.m(c,null))},i(d){u||(re(a),u=!0)},o(d){ve(a),u=!1},d(d){d&&(q(e),q(i),q(s),q(o),q(c)),f[l].d()}}}function n4(n,e,t){let r,i;return We(n,i0,o=>t(0,r=o)),We(n,wn,o=>t(1,i=o)),[r,i,()=>Re(wn,i=!0,i)]}class r4 extends Xt{constructor(e){super(),Yt(this,e,n4,t4,kt,{})}}function i4(n,{from:e,to:t},r={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[o,c]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),a=e.top+e.height*c/t.height-(t.top+c),{delay:u=0,duration:x=h=>Math.sqrt(h)*120,easing:f=Xh}=r;return{delay:u,duration:zn(x)?x(Math.sqrt(l*l+a*a)):x,easing:f,css:(h,d)=>{const g=d*l,_=d*a,E=h+d*e.width/t.width,p=h+d*e.height/t.height;return`transform: ${s} translate(${g}px, ${_}px) scale(${E}, ${p});`}}}function ou(n,e,t){const r=n.slice();return r[2]=e[t],r}function s4(n){const e=n.slice(),t=`<span class="font-ms smaller-fs">${td.exec(e[2].text)}</span>`;return e[5]=t,e}function o4(n){let e=n[2].text+"",t;return{c(){t=Oe(e)},m(r,i){G(r,t,i)},p(r,i){i&1&&e!==(e=r[2].text+"")&&St(t,e)},d(r){r&&q(t)}}}function au(n){let e,t=n[2].text.replace(lu,n[5])+"",r;return{c(){e=new hd(!1),r=s0(),e.a=r},m(i,s){e.m(t,i,s),G(i,r,s)},p(i,s){s&1&&t!==(t=i[2].text.replace(lu,i[5])+"")&&e.p(t)},d(i){i&&(q(r),e.d())}}}function cu(n,e){let t,r,i,s,o,c,l,a,u,x=ae,f;function h(E,p){return p&1&&(o=null),o==null&&(o=!!td.test(E[2].text)),o?au:o4}function d(E,p){return p===au?s4(E):E}let g=h(e,-1),_=g(d(e,g));return{key:n,first:null,c(){t=W("div"),r=W("iconify-icon"),s=ee(),_.c(),c=ee(),Dt(r,"icon",i=e[2].icon),z(t,"class","toast flex fai-center cg-1 br-1 bs ta-center"),this.first=t},m(E,p){G(E,t,p),V(t,r),V(t,s),_.m(t,null),V(t,c),f=!0},p(E,p){e=E,(!f||p&1&&i!==(i=e[2].icon))&&Dt(r,"icon",i),g===(g=h(e,p))&&_?_.p(d(e,g),p):(_.d(1),_=g(d(e,g)),_&&(_.c(),_.m(t,c)))},r(){u=t.getBoundingClientRect()},f(){vd(t),x(),Su(t,u)},a(){x(),x=_d(t,u,i4,{duration:250})},i(E){f||(E&&Le(()=>{f&&(a&&a.end(1),l=Nu(t,S0,{}),l.start())}),f=!0)},o(E){l&&l.invalidate(),E&&(a=Pu(t,e[1],{})),f=!1},d(E){E&&q(t),_.d(),E&&a&&a.end()}}}function a4(n){let e,t=[],r=new Map,i,s=$e(n[0]);const o=c=>c[2];for(let c=0;c<s.length;c+=1){let l=ou(n,s,c),a=o(l);r.set(a,t[c]=cu(a,l))}return{c(){e=W("div");for(let c=0;c<t.length;c+=1)t[c].c();z(e,"class","toasts centered flex fjc-center fai-center fd-col pos-abs")},m(c,l){G(c,e,l);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);i=!0},p(c,[l]){if(l&1){s=$e(c[0]),ot();for(let a=0;a<t.length;a+=1)t[a].r();t=Bd(t,l,o,1,c,s,r,e,Dd,cu,null,ou);for(let a=0;a<t.length;a+=1)t[a].a();at()}},i(c){if(!i){for(let l=0;l<s.length;l+=1)re(t[l]);i=!0}},o(c){for(let l=0;l<t.length;l+=1)ve(t[l]);i=!1},d(c){c&&q(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}let td=new RegExp("(?<={).+(?=})"),lu=/{.+} ?/;function c4(n,e,t){let r;We(n,mo,s=>t(0,r=s));function i(s){return r.length?S0(s):ze(s)}return[r,i]}class l4 extends Xt{constructor(e){super(),Yt(this,e,c4,a4,kt,{})}}const{document:Gs,window:mt}=od;function uu(n,e,t){const r=n.slice();return r[58]=e[t][0],r[59]=e[t][1],r}function fu(n,e,t){const r=n.slice();return r[62]=e[t][0],r[63]=e[t][1],r}function hu(n,e,t){const r=n.slice();return r[66]=e[t],r}function du(n,e,t){const r=n.slice();return r[66]=e[t],r}function xu(n){let e;return{c(){e=W("link"),z(e,"rel","preload"),z(e,"as","image"),z(e,"href","backgrounds/"+n[66]+".jpg")},m(t,r){G(t,e,r)},p:ae,d(t){t&&q(e)}}}function pu(n){let e,t;return{c(){e=W("img"),T0(e.src,t="backgrounds/"+n[66]+".jpg")||z(e,"src",t),z(e,"alt",""),z(e,"class","background svelte-13hnz2"),Et(e,"active",n[12]==n[66])},m(r,i){G(r,e,i)},p(r,i){i[0]&1052672&&Et(e,"active",r[12]==r[66])},d(r){r&&q(e)}}}function _u(n){let e,t,r,i;return{c(){e=W("img"),T0(e.src,t="backgrounds/cursedCreation.jpg")||z(e,"src",t),z(e,"alt",""),z(e,"class","background active svelte-13hnz2"),fd(e,"object-fit","fill")},m(s,o){G(s,e,o),i=!0},i(s){i||(s&&Le(()=>{i&&(r||(r=qe(e,ze,{duration:3500},!0)),r.run(1))}),i=!0)},o(s){s&&(r||(r=qe(e,ze,{duration:3500},!1)),r.run(0)),i=!1},d(s){s&&q(e),s&&r&&r.end()}}}function vu(n){let e,t,r=Math.floor(n[18][n[2]]*100)+"",i,s,o,c;return{c(){e=W("span"),t=Oe("Zoom: "),i=Oe(r),s=W("b"),s.textContent="%",z(e,"class","info"),z(e,"id","zoomLevel")},m(l,a){G(l,e,a),V(e,t),V(e,i),V(e,s),c=!0},p(l,a){(!c||a[0]&4)&&r!==(r=Math.floor(l[18][l[2]]*100)+"")&&St(i,r)},i(l){c||(l&&Le(()=>{c&&(o||(o=qe(e,ze,{duration:150},!0)),o.run(1))}),c=!0)},o(l){l&&(o||(o=qe(e,ze,{duration:150},!1)),o.run(0)),c=!1},d(l){l&&q(e),l&&o&&o.end()}}}function gu(n){let e,t;return e=new g8({props:{version:Eo,verifyAndSync:n[17]}}),{c(){Nn(e.$$.fragment)},m(r,i){an(e,r,i),t=!0},p:ae,i(r){t||(re(e.$$.fragment,r),t=!0)},o(r){ve(e.$$.fragment,r),t=!1},d(r){cn(e,r)}}}function mu(n){let e,t,r,i,s,o,c,l,a,u=n[9]&&!n[8]&&Eu(n),x=$e(Object.entries(n[24])),f=[];for(let h=0;h<x.length;h+=1)f[h]=Au(uu(n,x,h));return l=new l4({}),{c(){e=W("main"),t=W("i"),t.textContent='"Need to get somewhere?"',r=ee(),u&&u.c(),i=ee(),s=W("div");for(let h=0;h<f.length;h+=1)f[h].c();c=ee(),Nn(l.$$.fragment),z(t,"class","caption flex fjc-center font-hg br-1 ta-center svelte-13hnz2"),Et(t,"highlighted",n[10]),Et(t,"bs",n[10]),z(s,"class","content flex fd-col fai-center ta-center svelte-13hnz2"),z(e,"class","flex fd-col fai-center svelte-13hnz2"),Et(e,"portrait",n[5])},m(h,d){G(h,e,d),V(e,t),V(e,r),u&&u.m(e,null),V(e,i),V(e,s);for(let g=0;g<f.length;g+=1)f[g]&&f[g].m(s,null);n[44](s),G(h,c,d),an(l,h,d),a=!0},p(h,d){if((!a||d[0]&1024)&&Et(t,"highlighted",h[10]),(!a||d[0]&1024)&&Et(t,"bs",h[10]),h[9]&&!h[8]?u?(u.p(h,d),d[0]&768&&re(u,1)):(u=Eu(h),u.c(),re(u,1),u.m(e,i)):u&&(ot(),ve(u,1,1,()=>{u=null}),at()),d[0]&56672256){x=$e(Object.entries(h[24]));let g;for(g=0;g<x.length;g+=1){const _=uu(h,x,g);f[g]?f[g].p(_,d):(f[g]=Au(_),f[g].c(),f[g].m(s,null))}for(;g<f.length;g+=1)f[g].d(1);f.length=x.length}(!a||d[0]&32)&&Et(e,"portrait",h[5])},i(h){a||(re(u),h&&Le(()=>{a&&(o||(o=qe(e,ze,{duration:1e3,delay:250},!0)),o.run(1))}),re(l.$$.fragment,h),a=!0)},o(h){ve(u),h&&(o||(o=qe(e,ze,{duration:1e3,delay:250},!1)),o.run(0)),ve(l.$$.fragment,h),a=!1},d(h){h&&(q(e),q(c)),u&&u.d(),Rn(f,h),n[44](null),h&&o&&o.end(),cn(l,h)}}}function Eu(n){let e,t,r,i,s,o;return{c(){e=W("button"),e.innerHTML='<iconify-icon icon="ep:arrow-down-bold"></iconify-icon>',z(e,"class","flex pos-abs br-1 no-bg svelte-13hnz2"),z(e,"id","arrow")},m(c,l){G(c,e,l),i=!0,s||(o=De(e,"click",n[37]),s=!0)},p:ae,i(c){i||(c&&Le(()=>{i&&(r&&r.end(1),t=Nu(e,ze,{duration:1e3}),t.start())}),i=!0)},o(c){t&&t.invalidate(),c&&(r=Pu(e,ze,{duration:100})),i=!1},d(c){c&&q(e),c&&r&&r.end(),s=!1,o()}}}function Cu(n){let e,t=$e(Object.entries(n[59])),r=[];for(let i=0;i<t.length;i+=1)r[i]=yu(fu(n,t,i));return{c(){e=W("div");for(let i=0;i<r.length;i+=1)r[i].c();z(e,"class","pages flex fw rg-1 cg-1 fjc-center font-hg svelte-13hnz2")},m(i,s){G(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&56639488){t=$e(Object.entries(i[59]));let o;for(o=0;o<t.length;o+=1){const c=fu(i,t,o);r[o]?r[o].p(c,s):(r[o]=yu(c),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&q(e),Rn(r,i)}}}function u4(n){let e;return{c(){e=W("div"),e.textContent=`${n[63].desc}`,z(e,"class","pageDesc flex fjc-center fai-center svelte-13hnz2")},m(t,r){G(t,e,r)},p:ae,d(t){t&&q(e)}}}function yu(n){let e,t,r,i,s,o,c,l,a,u,x,f,h=n[14]?"Copied!":"Copy Link",d,g,_,E,p;function v(...k){return n[39](n[63],...k)}let m=n[63].desc&&u4(n);function A(){return n[40](n[58],n[62],n[63])}function D(){return n[41](n[58],n[62],n[63])}function b(){return n[42](n[62])}function B(){return n[43](n[62])}return{c(){e=W("a"),t=W("div"),r=W("div"),i=W("img"),o=ee(),c=W("span"),c.textContent=`${n[62]}`,l=ee(),a=W("button"),u=W("iconify-icon"),x=ee(),f=W("span"),d=Oe(h),g=ee(),m&&m.c(),_=ee(),T0(i.src,s="icons/"+n[63].code+".png")||z(i,"src",s),z(i,"alt",""),z(i,"class","svelte-13hnz2"),z(c,"id","pageTitle"),z(c,"class","svelte-13hnz2"),Et(c,"smaller-fs",n[62].length>=30),z(r,"class","flex fjc-center fai-center svelte-13hnz2"),z(r,"id","pageMainInfo"),Dt(u,"icon","mingcute:copy-line"),z(f,"class","tooltip"),z(f,"id","right"),z(a,"class","flex fjc-center fai-center pos-rel br-1 svelte-13hnz2"),z(a,"id","copyBtn"),z(t,"class","pageHeader flex fjc-center fai-center br-1 svelte-13hnz2"),z(e,"href",n[63].link),z(e,"target","_blank"),z(e,"class","page flex fd-col br-1 bg-change svelte-13hnz2")},m(k,C){G(k,e,C),V(e,t),V(t,r),V(r,i),V(r,o),V(r,c),V(t,l),V(t,a),V(a,u),V(a,x),V(a,f),V(f,d),V(e,g),m&&m.m(e,null),V(e,_),E||(p=[De(a,"click",v),De(e,"mouseenter",A),De(e,"focusin",D),De(e,"mouseleave",b),De(e,"focusout",B)],E=!0)},p(k,C){n=k,C[0]&16384&&h!==(h=n[14]?"Copied!":"Copy Link")&&St(d,h),n[63].desc&&m.p(n,C)},d(k){k&&q(e),m&&m.d(),E=!1,nt(p)}}}function Au(n){let e,t,r,i,s,o,c,l,a,u;function x(...h){return n[38](n[58],...h)}let f=n[15][n[58]]&&Cu(n);return{c(){e=W("div"),t=W("button"),r=W("iconify-icon"),s=ee(),o=W("span"),o.textContent=`${e8(n[58])}`,c=ee(),f&&f.c(),l=ee(),Dt(r,"icon",i="ep:arrow-"+(n[15][n[58]]?"down":"right")+"-bold"),Dt(r,"class","toggleArrowIcon pos-abs smaller-fs svelte-13hnz2"),z(t,"class","categoryTitle flex fjc-center fai-center pos-rel font-rf br-1 svelte-13hnz2"),z(e,"class","category border-tp br-1 bs svelte-13hnz2")},m(h,d){G(h,e,d),V(e,t),V(t,r),V(t,s),V(t,o),V(e,c),f&&f.m(e,null),V(e,l),a||(u=De(t,"click",x),a=!0)},p(h,d){n=h,d[0]&32768&&i!==(i="ep:arrow-"+(n[15][n[58]]?"down":"right")+"-bold")&&Dt(r,"icon",i),n[15][n[58]]?f?f.p(n,d):(f=Cu(n),f.c(),f.m(e,l)):f&&(f.d(1),f=null)},d(h){h&&q(e),f&&f.d(),a=!1,u()}}}function bu(n){let e,t,r,i,s,o,c,l;const a=[{prompted:!0},n[3].props];var u=n[3].component;function x(f,h){let d={};for(let g=0;g<a.length;g+=1)d=js(d,a[g]);return h!==void 0&&h[0]&8&&(d=js(d,Ys(a,[a[0],Xs(f[3].props)]))),{props:d}}return u&&(r=ya(u,x(n))),{c(){e=W("div"),t=W("div"),r&&Nn(r.$$.fragment),z(t,"class","flex fd-col border-tp br-1 bs"),z(e,"class","promptCont font-hg")},m(f,h){G(f,e,h),V(e,t),r&&an(r,t,null),n[46](e),o=!0,c||(l=[De(t,"introstart",n[45]),De(e,"click",n[47])],c=!0)},p(f,h){if(h[0]&8&&u!==(u=f[3].component)){if(r){ot();const d=r;ve(d.$$.fragment,1,0,()=>{cn(d,1)}),at()}u?(r=ya(u,x(f,h)),Nn(r.$$.fragment),re(r.$$.fragment,1),an(r,t,null)):r=null}else if(u){const d=h[0]&8?Ys(a,[a[0],Xs(f[3].props)]):{};r.$set(d)}},i(f){o||(r&&re(r.$$.fragment,f),f&&Le(()=>{o&&(i||(i=qe(t,S0,{duration:150},!0)),i.run(1))}),f&&Le(()=>{o&&(s||(s=qe(e,ze,{duration:100},!0)),s.run(1))}),o=!0)},o(f){r&&ve(r.$$.fragment,f),f&&(i||(i=qe(t,S0,{duration:150},!1)),i.run(0)),f&&(s||(s=qe(e,ze,{duration:100},!1)),s.run(0)),o=!1},d(f){f&&q(e),r&&cn(r),f&&i&&i.end(),n[46](null),f&&s&&s.end(),c=!1,nt(l)}}}function f4(n){let e,t,r,i,s,o,c,l,a,u,x,f,h,d,g,_,E;Le(n[34]);let p=$e([...n[20],"cursedCreation"]),v=[];for(let y=0;y<p.length;y+=1)v[y]=xu(du(n,p,y));let m=$e(n[20]),A=[];for(let y=0;y<m.length;y+=1)A[y]=pu(hu(n,m,y));let D=n[13]&&_u(),b=n[11]&&vu(n),B=n[8]&&gu(n),k=n[4]&&mu(n),C=n[3].component&&bu(n);return{c(){e=ee();for(let y=0;y<v.length;y+=1)v[y].c();t=s0(),r=ee(),i=W("div"),s=W("audio"),c=ee(),l=W("div");for(let y=0;y<A.length;y+=1)A[y].c();a=ee(),D&&D.c(),u=ee(),b&&b.c(),x=ee(),B&&B.c(),f=ee(),k&&k.c(),h=ee(),C&&C.c(),d=s0(),T0(s.src,o=ga+"/audios/select.mp3")||z(s,"src",o),z(l,"class","backgrounds")},m(y,F){G(y,e,F);for(let w=0;w<v.length;w+=1)v[w]&&v[w].m(Gs.head,null);V(Gs.head,t),G(y,r,F),G(y,i,F),V(i,s),n[36](s),G(y,c,F),G(y,l,F);for(let w=0;w<A.length;w+=1)A[w]&&A[w].m(l,null);V(l,a),D&&D.m(l,null),G(y,u,F),b&&b.m(y,F),G(y,x,F),B&&B.m(y,F),G(y,f,F),k&&k.m(y,F),G(y,h,F),C&&C.m(y,F),G(y,d,F),g=!0,_||(E=[De(mt,"storage",n[28]),De(mt,"scroll",n[29]),De(mt,"unload",n[30]),De(mt,"wheel",n[31],{passive:!1}),De(mt,"click",n[32]),De(mt,"keydown",n[33]),De(mt,"resize",n[34]),De(Gs,"visibilitychange",n[35])],_=!0)},p(y,F){if(F[0]&1048576){p=$e([...y[20],"cursedCreation"]);let w;for(w=0;w<p.length;w+=1){const N=du(y,p,w);v[w]?v[w].p(N,F):(v[w]=xu(N),v[w].c(),v[w].m(t.parentNode,t))}for(;w<v.length;w+=1)v[w].d(1);v.length=p.length}if(F[0]&1052672){m=$e(y[20]);let w;for(w=0;w<m.length;w+=1){const N=hu(y,m,w);A[w]?A[w].p(N,F):(A[w]=pu(N),A[w].c(),A[w].m(l,a))}for(;w<A.length;w+=1)A[w].d(1);A.length=m.length}y[13]?D?F[0]&8192&&re(D,1):(D=_u(),D.c(),re(D,1),D.m(l,null)):D&&(ot(),ve(D,1,1,()=>{D=null}),at()),y[11]?b?(b.p(y,F),F[0]&2048&&re(b,1)):(b=vu(y),b.c(),re(b,1),b.m(x.parentNode,x)):b&&(ot(),ve(b,1,1,()=>{b=null}),at()),y[8]?B?(B.p(y,F),F[0]&256&&re(B,1)):(B=gu(y),B.c(),re(B,1),B.m(f.parentNode,f)):B&&(ot(),ve(B,1,1,()=>{B=null}),at()),y[4]?k?(k.p(y,F),F[0]&16&&re(k,1)):(k=mu(y),k.c(),re(k,1),k.m(h.parentNode,h)):k&&(ot(),ve(k,1,1,()=>{k=null}),at()),y[3].component?C?(C.p(y,F),F[0]&8&&re(C,1)):(C=bu(y),C.c(),re(C,1),C.m(d.parentNode,d)):C&&(ot(),ve(C,1,1,()=>{C=null}),at())},i(y){g||(re(D),re(b),re(B),re(k),re(C),g=!0)},o(y){ve(D),ve(b),ve(B),ve(k),ve(C),g=!1},d(y){y&&(q(e),q(r),q(i),q(c),q(l),q(u),q(x),q(f),q(h),q(d)),Rn(v,y),q(t),n[36](null),Rn(A,y),D&&D.d(),b&&b.d(y),B&&B.d(y),k&&k.d(y),C&&C.d(y),_=!1,nt(E)}}}let Eo="v1.2.0";function h4(n,e,t){let r,i,s,o,c,l,a,u,x;We(n,i0,O=>t(50,r=O)),We(n,wn,O=>t(26,i=O)),We(n,bt,O=>t(3,s=O)),We(n,vl,O=>t(27,o=O)),We(n,_l,O=>t(51,c=O)),We(n,gl,O=>t(52,l=O)),We(n,Nr,O=>t(53,a=O)),We(n,s8,O=>t(54,u=O)),We(n,ls,O=>t(16,x=O));let f=!1,h=j8();function d(){if(i||h)return setTimeout(()=>{Re(bt,s.preventClosing=!0,s),Re(bt,s.component=r4,s)},i?0:300),!0}let g,_,E,p,v,m=!1,A=!1,D=!1;history.scrollRestoration="manual",gd(()=>{t(4,f=!0),Re(wn,i=!!new URLSearchParams(location.search).get("dataSync"),i),i&&!h&&(Re(wn,i=!1,i),pl()),bp(xl,async()=>{Qr(),Re(_l,c=xl.currentUser,c),Re(vl,o=!!r8(c),o),Re(gl,l=o?c.displayName||l:"",l),o&&(i8("logIn",`Succesfully logged in as {${l}}`),!u&&d())})});let b=[.45,.6,.75,.85,.95,1,1.1,1.25,1.5],B=b.indexOf(1),k=!1,C;function y(){C=setTimeout(()=>{t(11,k=!1)},750)}function F(){clearTimeout(C),t(11,k=!0),y()}let w=["armory","calculator","discord","frontierdle","hub","resources","roblox","twitter","wiki"],N="hub",P=!1;function M(O,fe,ye){let Ze=Math.floor(Math.random()*1001);fe==="Glitches"&&Ze===173?t(13,P=!0):t(12,N=w.includes(ye)?ye:O)}function Y(O){t(12,N="hub"),t(13,P=!1)}localStorage.getItem("fh-version")!=Eo&&(Re(Nr,a=!1,a),localStorage.setItem("fh-version",Eo));function $(){t(5,E=_>g),document.documentElement.style.fontSize=`${(E?g/_/1.35:.75)*b[B]}vh`}setTimeout(()=>{m||t(9,A=!0)},3e3);let K=!1,j={"Official Links":{"Roblox Game":{desc:"The action adventure game where you can fight monsters, fish, gather rare collectibles, hunt birds and more!",link:"https://www.roblox.com/games/510411669/Fantastic-Frontier",code:"roblox"},"Fandom Wiki":{desc:"The main documentation center where players can find and share valuable information with each other.",link:"https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki",code:"wiki"},"Discord Server":{desc:"Where majority of the community resides to discuss, exchange feedback, and keep themselves updated.",link:"https://discord.gg/ff",code:"discord"},"Twitter: Spectrabox":{link:"https://twitter.com/SpectraboxRBLX",code:"twitter"},"Twitter: Gorbachelli":{link:"https://twitter.com/gorbachelli",code:"twitter"}},affiliations:{"Fantastic Armory":{desc:"Equipment and weapon index - search, filter, sort, and track all sorts of gear to find what you want.",link:"https://xt8ss.github.io/fantastic-armory/",code:"armory"},"Fantastic Calculator":{desc:"Build maker and planner - mix and match equipment, and see weapon calculations in real time.",link:"https://xt8ss.github.io/fantastic-calculator/",code:"calculator"},Frontierdle:{desc:"Guessing minigame - find and pinpoint the exact gear of the day by following different clues.",link:"https://xt8ss.github.io/frontierdle/",code:"frontierdle"}},resources:{"Gift Tree Profit Calculator":{link:"https://www.desmos.com/calculator/80uoinggs3",code:"desmos"},"Average Item Obtainment Time":{link:"https://docs.google.com/document/d/1iLfGrtEzzgEQ7JZ0Ud_keQJue8URkKJQuoAY_DVSU2Y",code:"docs"},"Build List":{link:"https://docs.google.com/document/d/1H9HXoExCDVfXx15LQ4Te-2tTjrLFB-XCbMmx44Ynld4",code:"docs"},"Fish Reeling Times":{link:"https://docs.google.com/spreadsheets/d/15FXhST2YRf3i3OxMtEiq56_es_vBtYfrRpI9AfGO4to",code:"docs"},Glitches:{link:"https://docs.google.com/document/d/1-WAkvUDJ7mRNt9aDr0OsmZxjKuPtlI2dKZJAo7OMTc8",code:"docs"},"Max Stat List":{link:"https://docs.google.com/document/d/15vwSRojTqZ8LI09Wq4dvGF1kSTPmH2_gECQvwlSFki8",code:"docs"},"Deep Sea Treasure Chest Rewards":{link:"https://pastebin.com/edEuETpw",code:"pastebin"},"Deli Rewards":{link:"https://pastebin.com/4WiuqQx1",code:"pastebin"},"Firefly Quest & Otherworld Present/Tower Rewards":{link:"https://pastebin.com/BhkSFqsP",code:"pastebin"},"Guttermouth Rewards":{link:"https://pastebin.com/j2C9sdWq",code:"pastebin"},"Items that do not Drop upon Death":{link:"https://pastebin.com/fzXzHdLu",code:"pastebin"},"The Lost Rewards":{link:"https://pastebin.com/dUfLpkCY",code:"pastebin"},"A Special Development Announcement":{link:"https://devforum.roblox.com/t/fantastic-frontier-a-special-development-announcement/1490518",code:"devforum"},"Development Update 12/27/2021":{link:"https://devforum.roblox.com/t/fantastic-frontier-development-update-12272021/1603633",code:"devforum"},"Development Update 2/28/2022":{link:"https://devforum.roblox.com/t/fantastic-frontier-development-update-2282022/1685471",code:"devforum"},"'Pic of the Week': Going Dark":{link:"https://devforum.roblox.com/t/fantastic-frontier-pic-of-the-week-going-dark/1859496",code:"devforum"},"End of Year 2022 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2022-progress-post/2092363",code:"devforum"},"End of Year 2023 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2023-progress-post/2772902",code:"devforum"},"End of Year 2024 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2024-progress-post/3329820",code:"devforum"}}},I=Object.fromEntries(Object.keys(j).map(O=>[O,!0]));function T(O){t(14,K=!0),navigator.clipboard.writeText(O),setTimeout(()=>t(14,K=!1),1500)}async function R(){await K8(l.toLowerCase(),c.uid),setTimeout(()=>{Re(i0,r=!0,r),Re(bt,s.preventClosing=!1,s),pl()},3e3)}const S=O=>{/^f[a-z]{1,2}-/.test(O.key)&&localStorage.setItem(O.key,O.oldValue)},Q=O=>{let fe=_-window.scrollY<=_*.75;!m&&fe&&t(8,m=!0),t(10,D=fe)},X=()=>window.scrollTo(0,0),le=O=>{let fe=O.wheelDeltaY;if(O.ctrlKey){if(O.preventDefault(),b[B]==b[0]&&fe<0||b[B]==b[b.length-1]&&fe>0)return;fe>0?t(2,B++,B):t(2,B--,B),F()}},H=O=>{if(O.target instanceof HTMLElement){let fe=O.target.closest("button");fe&&!fe.classList.contains("no-sound")&&(Re(ls,x.select.currentTime=0,x),x.select.play())}},je=O=>{let fe=["Enter"," "],ye=["BUTTON","INPUT","A"];O.ctrlKey&&(O.key=="-"||O.key=="+"||O.code=="Equal"||O.key=="0")&&(O.preventDefault(),(O.key=="+"||O.code=="Equal")&&b[B]!=b[b.length-1]?t(2,B++,B):O.key=="-"&&b[B]!=b[0]?t(2,B--,B):O.key=="0"&&b[B]!=1&&t(2,B=b.indexOf(1)),F()),s.component&&p&&(!O.ctrlKey&&!O.shiftKey&&!O.altKey&&(O.key=="Escape"||fe.includes(O.key)&&!ye.includes(document.activeElement.tagName))?Qr():setTimeout(()=>{O.key=="Tab"&&!p.contains(document.activeElement)&&Qr()}))};function He(){t(1,_=mt.outerHeight),t(0,g=mt.outerWidth)}const vt=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(1,_=window.outerHeight),t(0,g=window.outerWidth),$()})};function Ke(O){fr[O?"unshift":"push"](()=>{x.select=O,ls.set(x)})}const me=()=>{t(9,A=!1),v.scrollIntoView({behavior:"smooth"})},ue=(O,fe)=>{k0(fe),t(15,I[O]=!I[O],I)},rt=(O,fe)=>{fe.stopPropagation(),fe.preventDefault(),k0(fe),T(O.link)},Ye=(O,fe,ye)=>M(O,fe,ye.code),it=(O,fe,ye)=>M(O,fe,ye.code),Xe=O=>Y(),gt=O=>Y();function Qe(O){fr[O?"unshift":"push"](()=>{v=O,t(7,v)})}const Ee=()=>{let O=p.querySelector("a, button, input");O&&O.focus()};function xe(O){fr[O?"unshift":"push"](()=>{p=O,t(6,p)})}const be=O=>{p.children[0].contains(O.target)||Qr()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(_||g||B)&&$(),n.$$.dirty[0]&8&&s.component===null&&setTimeout(()=>{Re(wn,i=!1,i),Re(i0,r=!1,r)},100),n.$$.dirty[0]&201326592&&o&&i&&h&&R()},[g,_,B,s,f,E,p,v,m,A,D,k,N,P,K,I,x,d,b,F,w,M,Y,$,j,T,i,o,S,Q,X,le,H,je,He,vt,Ke,me,ue,rt,Ye,it,Xe,gt,Qe,Ee,xe,be]}class d4 extends Xt{constructor(e){super(),Yt(this,e,h4,f4,kt,{},null,[-1,-1,-1])}}new d4({target:document.body});
