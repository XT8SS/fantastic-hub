var zh=Object.defineProperty;var qh=(n,e,t)=>e in n?zh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ut=(n,e,t)=>qh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function oe(){}const ni=n=>n;function jn(n,e){for(const t in e)n[t]=e[t];return n}function lf(n){return n()}function ec(){return Object.create(null)}function Re(n){n.forEach(lf)}function nr(n){return typeof n=="function"}function ht(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let _i;function es(n,e){return n===e?!0:(_i||(_i=document.createElement("a")),_i.href=e,n===_i.href)}function $h(n){return Object.keys(n).length===0}function uf(n,...e){if(n==null){for(const r of e)r(void 0);return oe}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Vh(n){let e;return uf(n,t=>e=t)(),e}function Ie(n,e,t){n.$$.on_destroy.push(uf(e,t))}function be(n,e,t){return n.set(t),e}const ff=typeof window<"u";let ts=ff?()=>window.performance.now():()=>Date.now(),Qo=ff?n=>requestAnimationFrame(n):oe;const Un=new Set;function df(n){Un.forEach(e=>{e.c(n)||(Un.delete(e),e.f())}),Un.size!==0&&Qo(df)}function ns(n){let e;return Un.size===0&&Qo(df),{promise:new Promise(t=>{Un.add(e={c:n,f:t})}),abort(){Un.delete(e)}}}const Gh=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function N(n,e){n.appendChild(e)}function hf(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function jh(n){const e=L("style");return e.textContent="/* empty */",Kh(hf(n),e),e.sheet}function Kh(n,e){return N(n.head||n,e),e.sheet}function W(n,e,t){n.insertBefore(e,t||null)}function U(n){n.parentNode&&n.parentNode.removeChild(n)}function pn(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function L(n){return document.createElement(n)}function Yh(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function te(n){return document.createTextNode(n)}function j(){return te(" ")}function Mr(){return te("")}function re(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function O(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}const Xh=["width","height"];function Kn(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set&&Xh.indexOf(r)===-1?n[r]=e[r]:O(n,r,e[r])}function Oe(n,e,t){const r=e.toLowerCase();r in n?n[r]=typeof n[r]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:O(n,e,t)}function Qh(n){return Array.from(n.childNodes)}function De(n,e){e=""+e,n.data!==e&&(n.data=e)}function ft(n,e){n.value=e??""}function it(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function ct(n,e,t){n.classList.toggle(e,!!t)}function xf(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}class Zh{constructor(e=!1){Ut(this,"is_svg",!1);Ut(this,"e");Ut(this,"n");Ut(this,"t");Ut(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=Yh(t.nodeName):this.e=L(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)W(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(U)}}function tc(n,e){return new n(e)}const Fi=new Map;let ki=0;function Jh(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function ex(n,e){const t={stylesheet:jh(e),rules:{}};return Fi.set(n,t),t}function Hr(n,e,t,r,i,s,o,c=0){const l=16.666/r;let a=`{
`;for(let p=0;p<=1;p+=l){const E=e+(t-e)*s(p);a+=p*100+`%{${o(E,1-E)}}
`}const u=a+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Jh(u)}_${c}`,f=hf(n),{stylesheet:d,rules:x}=Fi.get(f)||ex(f,n);x[h]||(x[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const g=n.style.animation||"";return n.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,ki+=1,h}function Ur(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),ki-=i,ki||tx())}function tx(){Qo(()=>{ki||(Fi.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&U(e)}),Fi.clear())})}function nx(n,e,t,r){if(!e)return oe;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return oe;const{delay:s=0,duration:o=300,easing:c=ni,start:l=ts()+s,end:a=l+o,tick:u=oe,css:h}=t(n,{from:e,to:i},r);let f=!0,d=!1,x;function g(){h&&(x=Hr(n,0,1,o,s,c,h)),s||(d=!0)}function p(){h&&Ur(n,x),f=!1}return ns(E=>{if(!d&&E>=l&&(d=!0),d&&E>=a&&(u(1,0),p()),!f)return!1;if(d){const v=E-l,_=0+1*c(v/o);u(_,1-_)}return!0}),g(),u(0,1),p}function rx(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=r,pf(n,i)}}function pf(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(n),i=r.transform==="none"?"":r.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Wr;function Ir(n){Wr=n}function _f(){if(!Wr)throw new Error("Function called outside component initialization");return Wr}function ix(n){_f().$$.on_mount.push(n)}function vf(){const n=_f();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const s=xf(e,t,{cancelable:r});return i.slice().forEach(o=>{o.call(n,s)}),!s.defaultPrevented}return!0}}const Nn=[],Sr=[];let Wn=[];const nc=[],sx=Promise.resolve();let mo=!1;function ox(){mo||(mo=!0,sx.then(gf))}function Ge(n){Wn.push(n)}const Rs=new Set;let Tn=0;function gf(){if(Tn!==0)return;const n=Wr;do{try{for(;Tn<Nn.length;){const e=Nn[Tn];Tn++,Ir(e),ax(e.$$)}}catch(e){throw Nn.length=0,Tn=0,e}for(Ir(null),Nn.length=0,Tn=0;Sr.length;)Sr.pop()();for(let e=0;e<Wn.length;e+=1){const t=Wn[e];Rs.has(t)||(Rs.add(t),t())}Wn.length=0}while(Nn.length);for(;nc.length;)nc.pop()();mo=!1,Rs.clear(),Ir(n)}function ax(n){if(n.fragment!==null){n.update(),Re(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ge)}}function cx(n){const e=[],t=[];Wn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Wn=e}let Ar;function Zo(){return Ar||(Ar=Promise.resolve(),Ar.then(()=>{Ar=null})),Ar}function hn(n,e,t){n.dispatchEvent(xf(`${e?"intro":"outro"}${t}`))}const Ei=new Set;let wt;function gt(){wt={r:0,c:[],p:wt}}function mt(){wt.r||Re(wt.c),wt=wt.p}function ae(n,e){n&&n.i&&(Ei.delete(n),n.i(e))}function Ce(n,e,t,r){if(n&&n.o){if(Ei.has(n))return;Ei.add(n),wt.c.push(()=>{Ei.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const Jo={duration:0};function mf(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,c,l=0;function a(){o&&Ur(n,o)}function u(){const{delay:f=0,duration:d=300,easing:x=ni,tick:g=oe,css:p}=i||Jo;p&&(o=Hr(n,0,1,d,f,x,p,l++)),g(0,1);const E=ts()+f,v=E+d;c&&c.abort(),s=!0,Ge(()=>hn(n,!0,"start")),c=ns(_=>{if(s){if(_>=v)return g(1,0),hn(n,!0,"end"),a(),s=!1;if(_>=E){const m=x((_-E)/d);g(m,1-m)}}return s})}let h=!1;return{start(){h||(h=!0,Ur(n),nr(i)?(i=i(r),Zo().then(u)):u())},invalidate(){h=!1},end(){s&&(a(),s=!1)}}}function Ef(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const c=wt;c.r+=1;let l;function a(){const{delay:u=0,duration:h=300,easing:f=ni,tick:d=oe,css:x}=i||Jo;x&&(o=Hr(n,1,0,h,u,f,x));const g=ts()+u,p=g+h;Ge(()=>hn(n,!1,"start")),"inert"in n&&(l=n.inert,n.inert=!0),ns(E=>{if(s){if(E>=p)return d(0,1),hn(n,!1,"end"),--c.r||Re(c.c),!1;if(E>=g){const v=f((E-g)/h);d(1-v,v)}}return s})}return nr(i)?Zo().then(()=>{i=i(r),a()}):a(),{end(u){u&&"inert"in n&&(n.inert=l),u&&i.tick&&i.tick(1,0),s&&(o&&Ur(n,o),s=!1)}}}function nt(n,e,t,r){let s=e(n,t,{direction:"both"}),o=r?0:1,c=null,l=null,a=null,u;function h(){a&&Ur(n,a)}function f(x,g){const p=x.b-o;return g*=Math.abs(p),{a:o,b:x.b,d:p,duration:g,start:x.start,end:x.start+g,group:x.group}}function d(x){const{delay:g=0,duration:p=300,easing:E=ni,tick:v=oe,css:_}=s||Jo,m={start:ts()+g,b:x};x||(m.group=wt,wt.r+=1),"inert"in n&&(x?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),c||l?l=m:(_&&(h(),a=Hr(n,o,x,p,g,E,_)),x&&v(0,1),c=f(m,p),Ge(()=>hn(n,x,"start")),ns(C=>{if(l&&C>l.start&&(c=f(l,p),l=null,hn(n,c.b,"start"),_&&(h(),a=Hr(n,o,c.b,c.duration,0,E,s.css))),c){if(C>=c.end)v(o=c.b,1-o),hn(n,c.b,"end"),l||(c.b?h():--c.group.r||Re(c.group.c)),c=null;else if(C>=c.start){const A=C-c.start;o=c.a+c.d*E(A/c.duration),v(o,1-o)}}return!!(c||l)}))}return{run(x){nr(s)?Zo().then(()=>{s=s({direction:x?"in":"out"}),d(x)}):d(x)},end(){h(),c=l=null}}}function Ve(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function lx(n,e){Ce(n,1,1,()=>{e.delete(n.key)})}function ux(n,e){n.f(),lx(n,e)}function fx(n,e,t,r,i,s,o,c,l,a,u,h){let f=n.length,d=s.length,x=f;const g={};for(;x--;)g[n[x].key]=x;const p=[],E=new Map,v=new Map,_=[];for(x=d;x--;){const D=h(i,s,x),b=t(D);let F=o.get(b);F?_.push(()=>F.p(D,e)):(F=a(b,D),F.c()),E.set(b,p[x]=F),b in g&&v.set(b,Math.abs(x-g[b]))}const m=new Set,C=new Set;function A(D){ae(D,1),D.m(c,u),o.set(D.key,D),u=D.first,d--}for(;f&&d;){const D=p[d-1],b=n[f-1],F=D.key,y=b.key;D===b?(u=D.first,f--,d--):E.has(y)?!o.has(F)||m.has(F)?A(D):C.has(y)?f--:v.get(F)>v.get(y)?(C.add(F),A(D)):(m.add(y),f--):(l(b,o),f--)}for(;f--;){const D=n[f];E.has(D.key)||l(D,o)}for(;d;)A(p[d-1]);return Re(_),p}function Yn(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],c=e[s];if(c){for(const l in o)l in c||(r[l]=1);for(const l in c)i[l]||(t[l]=c[l],i[l]=1);n[s]=c}else for(const l in o)i[l]=1}for(const o in r)o in t||(t[o]=void 0);return t}function Eo(n){return typeof n=="object"&&n!==null?n:{}}function _n(n){n&&n.c()}function en(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),Ge(()=>{const s=n.$$.on_mount.map(lf).filter(nr);n.$$.on_destroy?n.$$.on_destroy.push(...s):Re(s),n.$$.on_mount=[]}),i.forEach(Ge)}function tn(n,e){const t=n.$$;t.fragment!==null&&(cx(t.after_update),Re(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function dx(n,e){n.$$.dirty[0]===-1&&(Nn.push(n),ox(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function bt(n,e,t,r,i,s,o=null,c=[-1]){const l=Wr;Ir(n);const a=n.$$={fragment:null,ctx:[],props:s,update:oe,not_equal:i,bound:ec(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ec(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};o&&o(a.root);let u=!1;if(a.ctx=t?t(n,e.props||{},(h,f,...d)=>{const x=d.length?d[0]:f;return a.ctx&&i(a.ctx[h],a.ctx[h]=x)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](x),u&&dx(n,h)),f}):[],a.update(),u=!0,Re(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const h=Qh(e.target);a.fragment&&a.fragment.l(h),h.forEach(U)}else a.fragment&&a.fragment.c();e.intro&&ae(n.$$.fragment),en(n,e.target,e.anchor),gf()}Ir(l)}class Dt{constructor(){Ut(this,"$$");Ut(this,"$$set")}$destroy(){tn(this,1),this.$destroy=oe}$on(e,t){if(!nr(t))return oe;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!$h(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const hx="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hx);const Rn=[];function kt(n,e=oe){let t;const r=new Set;function i(c){if(ht(n,c)&&(n=c,t)){const l=!Rn.length;for(const a of r)a[1](),Rn.push(a,n);if(l){for(let a=0;a<Rn.length;a+=2)Rn[a][0](Rn[a+1]);Rn.length=0}}}function s(c){i(c(n))}function o(c,l=oe){const a=[c,l];return r.add(a),r.size===1&&(t=e(i,s)||oe),c(n),()=>{r.delete(a),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xx(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var Cf={exports:{}};function yf(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ps={exports:{}};const px={},_x=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),Af=xx(_x);var rc;function ue(){return rc||(rc=1,function(n,e){(function(t,r){n.exports=r()})(V,function(){var t=t||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof V<"u"&&V.crypto&&(s=V.crypto),!s&&typeof yf=="function")try{s=Af}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},c=Object.create||function(){function v(){}return function(_){var m;return v.prototype=_,m=new v,v.prototype=null,m}}(),l={},a=l.lib={},u=a.Base=function(){return{extend:function(v){var _=c(this);return v&&_.mixIn(v),(!_.hasOwnProperty("init")||this.init===_.init)&&(_.init=function(){_.$super.init.apply(this,arguments)}),_.init.prototype=_,_.$super=this,_},create:function(){var v=this.extend();return v.init.apply(v,arguments),v},init:function(){},mixIn:function(v){for(var _ in v)v.hasOwnProperty(_)&&(this[_]=v[_]);v.hasOwnProperty("toString")&&(this.toString=v.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=a.WordArray=u.extend({init:function(v,_){v=this.words=v||[],_!=i?this.sigBytes=_:this.sigBytes=v.length*4},toString:function(v){return(v||d).stringify(this)},concat:function(v){var _=this.words,m=v.words,C=this.sigBytes,A=v.sigBytes;if(this.clamp(),C%4)for(var D=0;D<A;D++){var b=m[D>>>2]>>>24-D%4*8&255;_[C+D>>>2]|=b<<24-(C+D)%4*8}else for(var F=0;F<A;F+=4)_[C+F>>>2]=m[F>>>2];return this.sigBytes+=A,this},clamp:function(){var v=this.words,_=this.sigBytes;v[_>>>2]&=4294967295<<32-_%4*8,v.length=r.ceil(_/4)},clone:function(){var v=u.clone.call(this);return v.words=this.words.slice(0),v},random:function(v){for(var _=[],m=0;m<v;m+=4)_.push(o());return new h.init(_,v)}}),f=l.enc={},d=f.Hex={stringify:function(v){for(var _=v.words,m=v.sigBytes,C=[],A=0;A<m;A++){var D=_[A>>>2]>>>24-A%4*8&255;C.push((D>>>4).toString(16)),C.push((D&15).toString(16))}return C.join("")},parse:function(v){for(var _=v.length,m=[],C=0;C<_;C+=2)m[C>>>3]|=parseInt(v.substr(C,2),16)<<24-C%8*4;return new h.init(m,_/2)}},x=f.Latin1={stringify:function(v){for(var _=v.words,m=v.sigBytes,C=[],A=0;A<m;A++){var D=_[A>>>2]>>>24-A%4*8&255;C.push(String.fromCharCode(D))}return C.join("")},parse:function(v){for(var _=v.length,m=[],C=0;C<_;C++)m[C>>>2]|=(v.charCodeAt(C)&255)<<24-C%4*8;return new h.init(m,_)}},g=f.Utf8={stringify:function(v){try{return decodeURIComponent(escape(x.stringify(v)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(v){return x.parse(unescape(encodeURIComponent(v)))}},p=a.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(v){typeof v=="string"&&(v=g.parse(v)),this._data.concat(v),this._nDataBytes+=v.sigBytes},_process:function(v){var _,m=this._data,C=m.words,A=m.sigBytes,D=this.blockSize,b=D*4,F=A/b;v?F=r.ceil(F):F=r.max((F|0)-this._minBufferSize,0);var y=F*D,w=r.min(y*4,A);if(y){for(var k=0;k<y;k+=D)this._doProcessBlock(C,k);_=C.splice(0,y),m.sigBytes-=w}return new h.init(_,w)},clone:function(){var v=u.clone.call(this);return v._data=this._data.clone(),v},_minBufferSize:0});a.Hasher=p.extend({cfg:u.extend(),init:function(v){this.cfg=this.cfg.extend(v),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(v){return this._append(v),this._process(),this},finalize:function(v){v&&this._append(v);var _=this._doFinalize();return _},blockSize:16,_createHelper:function(v){return function(_,m){return new v.init(m).finalize(_)}},_createHmacHelper:function(v){return function(_,m){return new E.HMAC.init(v,m).finalize(_)}}});var E=l.algo={};return l}(Math);return t})}(Ps)),Ps.exports}var Ns={exports:{}},ic;function rs(){return ic||(ic=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.Base,c=s.WordArray,l=i.x64={};l.Word=o.extend({init:function(a,u){this.high=a,this.low=u}}),l.WordArray=o.extend({init:function(a,u){a=this.words=a||[],u!=r?this.sigBytes=u:this.sigBytes=a.length*8},toX32:function(){for(var a=this.words,u=a.length,h=[],f=0;f<u;f++){var d=a[f];h.push(d.high),h.push(d.low)}return c.create(h,this.sigBytes)},clone:function(){for(var a=o.clone.call(this),u=a.words=this.words.slice(0),h=u.length,f=0;f<h;f++)u[f]=u[f].clone();return a}})}(),t})}(Ns)),Ns.exports}var Os={exports:{}},sc;function vx(){return sc||(sc=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){return function(){if(typeof ArrayBuffer=="function"){var r=t,i=r.lib,s=i.WordArray,o=s.init,c=s.init=function(l){if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),(l instanceof Int8Array||typeof Uint8ClampedArray<"u"&&l instanceof Uint8ClampedArray||l instanceof Int16Array||l instanceof Uint16Array||l instanceof Int32Array||l instanceof Uint32Array||l instanceof Float32Array||l instanceof Float64Array)&&(l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),l instanceof Uint8Array){for(var a=l.byteLength,u=[],h=0;h<a;h++)u[h>>>2]|=l[h]<<24-h%4*8;o.call(this,u,a)}else o.apply(this,arguments)};c.prototype=s}}(),t.lib.WordArray})}(Os)),Os.exports}var Ls={exports:{}},oc;function gx(){return oc||(oc=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(l){for(var a=l.words,u=l.sigBytes,h=[],f=0;f<u;f+=2){var d=a[f>>>2]>>>16-f%4*8&65535;h.push(String.fromCharCode(d))}return h.join("")},parse:function(l){for(var a=l.length,u=[],h=0;h<a;h++)u[h>>>1]|=l.charCodeAt(h)<<16-h%2*16;return s.create(u,a*2)}},o.Utf16LE={stringify:function(l){for(var a=l.words,u=l.sigBytes,h=[],f=0;f<u;f+=2){var d=c(a[f>>>2]>>>16-f%4*8&65535);h.push(String.fromCharCode(d))}return h.join("")},parse:function(l){for(var a=l.length,u=[],h=0;h<a;h++)u[h>>>1]|=c(l.charCodeAt(h)<<16-h%2*16);return s.create(u,a*2)}};function c(l){return l<<8&4278255360|l>>>8&16711935}}(),t.enc.Utf16})}(Ls)),Ls.exports}var Ms={exports:{}},ac;function Dn(){return ac||(ac=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(l){var a=l.words,u=l.sigBytes,h=this._map;l.clamp();for(var f=[],d=0;d<u;d+=3)for(var x=a[d>>>2]>>>24-d%4*8&255,g=a[d+1>>>2]>>>24-(d+1)%4*8&255,p=a[d+2>>>2]>>>24-(d+2)%4*8&255,E=x<<16|g<<8|p,v=0;v<4&&d+v*.75<u;v++)f.push(h.charAt(E>>>6*(3-v)&63));var _=h.charAt(64);if(_)for(;f.length%4;)f.push(_);return f.join("")},parse:function(l){var a=l.length,u=this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var f=0;f<u.length;f++)h[u.charCodeAt(f)]=f}var d=u.charAt(64);if(d){var x=l.indexOf(d);x!==-1&&(a=x)}return c(l,a,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function c(l,a,u){for(var h=[],f=0,d=0;d<a;d++)if(d%4){var x=u[l.charCodeAt(d-1)]<<d%4*2,g=u[l.charCodeAt(d)]>>>6-d%4*2,p=x|g;h[f>>>2]|=p<<24-f%4*8,f++}return s.create(h,f)}}(),t.enc.Base64})}(Ms)),Ms.exports}var Hs={exports:{}},cc;function mx(){return cc||(cc=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(l,a){a===void 0&&(a=!0);var u=l.words,h=l.sigBytes,f=a?this._safe_map:this._map;l.clamp();for(var d=[],x=0;x<h;x+=3)for(var g=u[x>>>2]>>>24-x%4*8&255,p=u[x+1>>>2]>>>24-(x+1)%4*8&255,E=u[x+2>>>2]>>>24-(x+2)%4*8&255,v=g<<16|p<<8|E,_=0;_<4&&x+_*.75<h;_++)d.push(f.charAt(v>>>6*(3-_)&63));var m=f.charAt(64);if(m)for(;d.length%4;)d.push(m);return d.join("")},parse:function(l,a){a===void 0&&(a=!0);var u=l.length,h=a?this._safe_map:this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var d=0;d<h.length;d++)f[h.charCodeAt(d)]=d}var x=h.charAt(64);if(x){var g=l.indexOf(x);g!==-1&&(u=g)}return c(l,u,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function c(l,a,u){for(var h=[],f=0,d=0;d<a;d++)if(d%4){var x=u[l.charCodeAt(d-1)]<<d%4*2,g=u[l.charCodeAt(d)]>>>6-d%4*2,p=x|g;h[f>>>2]|=p<<24-f%4*8,f++}return s.create(h,f)}}(),t.enc.Base64url})}(Hs)),Hs.exports}var Us={exports:{}},lc;function wn(){return lc||(lc=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=[];(function(){for(var g=0;g<64;g++)a[g]=r.abs(r.sin(g+1))*4294967296|0})();var u=l.MD5=c.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,p){for(var E=0;E<16;E++){var v=p+E,_=g[v];g[v]=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360}var m=this._hash.words,C=g[p+0],A=g[p+1],D=g[p+2],b=g[p+3],F=g[p+4],y=g[p+5],w=g[p+6],k=g[p+7],B=g[p+8],P=g[p+9],H=g[p+10],M=g[p+11],G=g[p+12],Y=g[p+13],Q=g[p+14],X=g[p+15],I=m[0],T=m[1],R=m[2],S=m[3];I=h(I,T,R,S,C,7,a[0]),S=h(S,I,T,R,A,12,a[1]),R=h(R,S,I,T,D,17,a[2]),T=h(T,R,S,I,b,22,a[3]),I=h(I,T,R,S,F,7,a[4]),S=h(S,I,T,R,y,12,a[5]),R=h(R,S,I,T,w,17,a[6]),T=h(T,R,S,I,k,22,a[7]),I=h(I,T,R,S,B,7,a[8]),S=h(S,I,T,R,P,12,a[9]),R=h(R,S,I,T,H,17,a[10]),T=h(T,R,S,I,M,22,a[11]),I=h(I,T,R,S,G,7,a[12]),S=h(S,I,T,R,Y,12,a[13]),R=h(R,S,I,T,Q,17,a[14]),T=h(T,R,S,I,X,22,a[15]),I=f(I,T,R,S,A,5,a[16]),S=f(S,I,T,R,w,9,a[17]),R=f(R,S,I,T,M,14,a[18]),T=f(T,R,S,I,C,20,a[19]),I=f(I,T,R,S,y,5,a[20]),S=f(S,I,T,R,H,9,a[21]),R=f(R,S,I,T,X,14,a[22]),T=f(T,R,S,I,F,20,a[23]),I=f(I,T,R,S,P,5,a[24]),S=f(S,I,T,R,Q,9,a[25]),R=f(R,S,I,T,b,14,a[26]),T=f(T,R,S,I,B,20,a[27]),I=f(I,T,R,S,Y,5,a[28]),S=f(S,I,T,R,D,9,a[29]),R=f(R,S,I,T,k,14,a[30]),T=f(T,R,S,I,G,20,a[31]),I=d(I,T,R,S,y,4,a[32]),S=d(S,I,T,R,B,11,a[33]),R=d(R,S,I,T,M,16,a[34]),T=d(T,R,S,I,Q,23,a[35]),I=d(I,T,R,S,A,4,a[36]),S=d(S,I,T,R,F,11,a[37]),R=d(R,S,I,T,k,16,a[38]),T=d(T,R,S,I,H,23,a[39]),I=d(I,T,R,S,Y,4,a[40]),S=d(S,I,T,R,C,11,a[41]),R=d(R,S,I,T,b,16,a[42]),T=d(T,R,S,I,w,23,a[43]),I=d(I,T,R,S,P,4,a[44]),S=d(S,I,T,R,G,11,a[45]),R=d(R,S,I,T,X,16,a[46]),T=d(T,R,S,I,D,23,a[47]),I=x(I,T,R,S,C,6,a[48]),S=x(S,I,T,R,k,10,a[49]),R=x(R,S,I,T,Q,15,a[50]),T=x(T,R,S,I,y,21,a[51]),I=x(I,T,R,S,G,6,a[52]),S=x(S,I,T,R,b,10,a[53]),R=x(R,S,I,T,H,15,a[54]),T=x(T,R,S,I,A,21,a[55]),I=x(I,T,R,S,B,6,a[56]),S=x(S,I,T,R,X,10,a[57]),R=x(R,S,I,T,w,15,a[58]),T=x(T,R,S,I,Y,21,a[59]),I=x(I,T,R,S,F,6,a[60]),S=x(S,I,T,R,M,10,a[61]),R=x(R,S,I,T,D,15,a[62]),T=x(T,R,S,I,P,21,a[63]),m[0]=m[0]+I|0,m[1]=m[1]+T|0,m[2]=m[2]+R|0,m[3]=m[3]+S|0},_doFinalize:function(){var g=this._data,p=g.words,E=this._nDataBytes*8,v=g.sigBytes*8;p[v>>>5]|=128<<24-v%32;var _=r.floor(E/4294967296),m=E;p[(v+64>>>9<<4)+15]=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,p[(v+64>>>9<<4)+14]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360,g.sigBytes=(p.length+1)*4,this._process();for(var C=this._hash,A=C.words,D=0;D<4;D++){var b=A[D];A[D]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360}return C},clone:function(){var g=c.clone.call(this);return g._hash=this._hash.clone(),g}});function h(g,p,E,v,_,m,C){var A=g+(p&E|~p&v)+_+C;return(A<<m|A>>>32-m)+p}function f(g,p,E,v,_,m,C){var A=g+(p&v|E&~v)+_+C;return(A<<m|A>>>32-m)+p}function d(g,p,E,v,_,m,C){var A=g+(p^E^v)+_+C;return(A<<m|A>>>32-m)+p}function x(g,p,E,v,_,m,C){var A=g+(E^(p|~v))+_+C;return(A<<m|A>>>32-m)+p}i.MD5=c._createHelper(u),i.HmacMD5=c._createHmacHelper(u)}(Math),t.MD5})}(Us)),Us.exports}var Ws={exports:{}},uc;function bf(){return uc||(uc=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.Hasher,c=r.algo,l=[],a=c.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,h){for(var f=this._hash.words,d=f[0],x=f[1],g=f[2],p=f[3],E=f[4],v=0;v<80;v++){if(v<16)l[v]=u[h+v]|0;else{var _=l[v-3]^l[v-8]^l[v-14]^l[v-16];l[v]=_<<1|_>>>31}var m=(d<<5|d>>>27)+E+l[v];v<20?m+=(x&g|~x&p)+1518500249:v<40?m+=(x^g^p)+1859775393:v<60?m+=(x&g|x&p|g&p)-1894007588:m+=(x^g^p)-899497514,E=p,p=g,g=x<<30|x>>>2,x=d,d=m}f[0]=f[0]+d|0,f[1]=f[1]+x|0,f[2]=f[2]+g|0,f[3]=f[3]+p|0,f[4]=f[4]+E|0},_doFinalize:function(){var u=this._data,h=u.words,f=this._nDataBytes*8,d=u.sigBytes*8;return h[d>>>5]|=128<<24-d%32,h[(d+64>>>9<<4)+14]=Math.floor(f/4294967296),h[(d+64>>>9<<4)+15]=f,u.sigBytes=h.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(a),r.HmacSHA1=o._createHmacHelper(a)}(),t.SHA1})}(Ws)),Ws.exports}var zs={exports:{}},fc;function ea(){return fc||(fc=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=[],u=[];(function(){function d(E){for(var v=r.sqrt(E),_=2;_<=v;_++)if(!(E%_))return!1;return!0}function x(E){return(E-(E|0))*4294967296|0}for(var g=2,p=0;p<64;)d(g)&&(p<8&&(a[p]=x(r.pow(g,1/2))),u[p]=x(r.pow(g,1/3)),p++),g++})();var h=[],f=l.SHA256=c.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(d,x){for(var g=this._hash.words,p=g[0],E=g[1],v=g[2],_=g[3],m=g[4],C=g[5],A=g[6],D=g[7],b=0;b<64;b++){if(b<16)h[b]=d[x+b]|0;else{var F=h[b-15],y=(F<<25|F>>>7)^(F<<14|F>>>18)^F>>>3,w=h[b-2],k=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;h[b]=y+h[b-7]+k+h[b-16]}var B=m&C^~m&A,P=p&E^p&v^E&v,H=(p<<30|p>>>2)^(p<<19|p>>>13)^(p<<10|p>>>22),M=(m<<26|m>>>6)^(m<<21|m>>>11)^(m<<7|m>>>25),G=D+M+B+u[b]+h[b],Y=H+P;D=A,A=C,C=m,m=_+G|0,_=v,v=E,E=p,p=G+Y|0}g[0]=g[0]+p|0,g[1]=g[1]+E|0,g[2]=g[2]+v|0,g[3]=g[3]+_|0,g[4]=g[4]+m|0,g[5]=g[5]+C|0,g[6]=g[6]+A|0,g[7]=g[7]+D|0},_doFinalize:function(){var d=this._data,x=d.words,g=this._nDataBytes*8,p=d.sigBytes*8;return x[p>>>5]|=128<<24-p%32,x[(p+64>>>9<<4)+14]=r.floor(g/4294967296),x[(p+64>>>9<<4)+15]=g,d.sigBytes=x.length*4,this._process(),this._hash},clone:function(){var d=c.clone.call(this);return d._hash=this._hash.clone(),d}});i.SHA256=c._createHelper(f),i.HmacSHA256=c._createHmacHelper(f)}(Math),t.SHA256})}(zs)),zs.exports}var qs={exports:{}},dc;function Ex(){return dc||(dc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),ea())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.algo,c=o.SHA256,l=o.SHA224=c.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=c._doFinalize.call(this);return a.sigBytes-=4,a}});r.SHA224=c._createHelper(l),r.HmacSHA224=c._createHmacHelper(l)}(),t.SHA224})}(qs)),qs.exports}var $s={exports:{}},hc;function Df(){return hc||(hc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),rs())})(V,function(t){return function(){var r=t,i=r.lib,s=i.Hasher,o=r.x64,c=o.Word,l=o.WordArray,a=r.algo;function u(){return c.create.apply(c,arguments)}var h=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],f=[];(function(){for(var x=0;x<80;x++)f[x]=u()})();var d=a.SHA512=s.extend({_doReset:function(){this._hash=new l.init([new c.init(1779033703,4089235720),new c.init(3144134277,2227873595),new c.init(1013904242,4271175723),new c.init(2773480762,1595750129),new c.init(1359893119,2917565137),new c.init(2600822924,725511199),new c.init(528734635,4215389547),new c.init(1541459225,327033209)])},_doProcessBlock:function(x,g){for(var p=this._hash.words,E=p[0],v=p[1],_=p[2],m=p[3],C=p[4],A=p[5],D=p[6],b=p[7],F=E.high,y=E.low,w=v.high,k=v.low,B=_.high,P=_.low,H=m.high,M=m.low,G=C.high,Y=C.low,Q=A.high,X=A.low,I=D.high,T=D.low,R=b.high,S=b.low,J=F,Z=y,le=w,$=k,Ke=B,He=P,xt=H,Ye=M,ge=G,he=Y,st=Q,Xe=X,ot=I,Qe=T,pt=R,Ze=S,me=0;me<80;me++){var pe,Fe,z=f[me];if(me<16)Fe=z.high=x[g+me*2]|0,pe=z.low=x[g+me*2+1]|0;else{var xe=f[me-15],K=xe.high,ke=xe.low,St=(K>>>1|ke<<31)^(K>>>8|ke<<24)^K>>>7,dr=(ke>>>1|K<<31)^(ke>>>8|K<<24)^(ke>>>7|K<<25),hr=f[me-2],at=hr.high,_t=hr.low,Cs=(at>>>19|_t<<13)^(at<<3|_t>>>29)^at>>>6,xr=(_t>>>19|at<<13)^(_t<<3|at>>>29)^(_t>>>6|at<<26),pr=f[me-7],ys=pr.high,As=pr.low,_r=f[me-16],bs=_r.high,vr=_r.low;pe=dr+As,Fe=St+ys+(pe>>>0<dr>>>0?1:0),pe=pe+xr,Fe=Fe+Cs+(pe>>>0<xr>>>0?1:0),pe=pe+vr,Fe=Fe+bs+(pe>>>0<vr>>>0?1:0),z.high=Fe,z.low=pe}var Ds=ge&st^~ge&ot,gr=he&Xe^~he&Qe,ws=J&le^J&Ke^le&Ke,Bs=Z&$^Z&He^$&He,Fs=(J>>>28|Z<<4)^(J<<30|Z>>>2)^(J<<25|Z>>>7),mr=(Z>>>28|J<<4)^(Z<<30|J>>>2)^(Z<<25|J>>>7),ks=(ge>>>14|he<<18)^(ge>>>18|he<<14)^(ge<<23|he>>>9),Is=(he>>>14|ge<<18)^(he>>>18|ge<<14)^(he<<23|ge>>>9),Er=h[me],Ss=Er.high,Cr=Er.low,Ee=Ze+Is,Ue=pt+ks+(Ee>>>0<Ze>>>0?1:0),Ee=Ee+gr,Ue=Ue+Ds+(Ee>>>0<gr>>>0?1:0),Ee=Ee+Cr,Ue=Ue+Ss+(Ee>>>0<Cr>>>0?1:0),Ee=Ee+pe,Ue=Ue+Fe+(Ee>>>0<pe>>>0?1:0),yr=mr+Bs,Ts=Fs+ws+(yr>>>0<mr>>>0?1:0);pt=ot,Ze=Qe,ot=st,Qe=Xe,st=ge,Xe=he,he=Ye+Ee|0,ge=xt+Ue+(he>>>0<Ye>>>0?1:0)|0,xt=Ke,Ye=He,Ke=le,He=$,le=J,$=Z,Z=Ee+yr|0,J=Ue+Ts+(Z>>>0<Ee>>>0?1:0)|0}y=E.low=y+Z,E.high=F+J+(y>>>0<Z>>>0?1:0),k=v.low=k+$,v.high=w+le+(k>>>0<$>>>0?1:0),P=_.low=P+He,_.high=B+Ke+(P>>>0<He>>>0?1:0),M=m.low=M+Ye,m.high=H+xt+(M>>>0<Ye>>>0?1:0),Y=C.low=Y+he,C.high=G+ge+(Y>>>0<he>>>0?1:0),X=A.low=X+Xe,A.high=Q+st+(X>>>0<Xe>>>0?1:0),T=D.low=T+Qe,D.high=I+ot+(T>>>0<Qe>>>0?1:0),S=b.low=S+Ze,b.high=R+pt+(S>>>0<Ze>>>0?1:0)},_doFinalize:function(){var x=this._data,g=x.words,p=this._nDataBytes*8,E=x.sigBytes*8;g[E>>>5]|=128<<24-E%32,g[(E+128>>>10<<5)+30]=Math.floor(p/4294967296),g[(E+128>>>10<<5)+31]=p,x.sigBytes=g.length*4,this._process();var v=this._hash.toX32();return v},clone:function(){var x=s.clone.call(this);return x._hash=this._hash.clone(),x},blockSize:1024/32});r.SHA512=s._createHelper(d),r.HmacSHA512=s._createHmacHelper(d)}(),t.SHA512})}($s)),$s.exports}var Vs={exports:{}},xc;function Cx(){return xc||(xc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),rs(),Df())})(V,function(t){return function(){var r=t,i=r.x64,s=i.Word,o=i.WordArray,c=r.algo,l=c.SHA512,a=c.SHA384=l.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=l._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=l._createHelper(a),r.HmacSHA384=l._createHmacHelper(a)}(),t.SHA384})}(Vs)),Vs.exports}var Gs={exports:{}},pc;function yx(){return pc||(pc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),rs())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.x64,a=l.Word,u=i.algo,h=[],f=[],d=[];(function(){for(var p=1,E=0,v=0;v<24;v++){h[p+5*E]=(v+1)*(v+2)/2%64;var _=E%5,m=(2*p+3*E)%5;p=_,E=m}for(var p=0;p<5;p++)for(var E=0;E<5;E++)f[p+5*E]=E+(2*p+3*E)%5*5;for(var C=1,A=0;A<24;A++){for(var D=0,b=0,F=0;F<7;F++){if(C&1){var y=(1<<F)-1;y<32?b^=1<<y:D^=1<<y-32}C&128?C=C<<1^113:C<<=1}d[A]=a.create(D,b)}})();var x=[];(function(){for(var p=0;p<25;p++)x[p]=a.create()})();var g=u.SHA3=c.extend({cfg:c.cfg.extend({outputLength:512}),_doReset:function(){for(var p=this._state=[],E=0;E<25;E++)p[E]=new a.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(p,E){for(var v=this._state,_=this.blockSize/2,m=0;m<_;m++){var C=p[E+2*m],A=p[E+2*m+1];C=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,A=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360;var D=v[m];D.high^=A,D.low^=C}for(var b=0;b<24;b++){for(var F=0;F<5;F++){for(var y=0,w=0,k=0;k<5;k++){var D=v[F+5*k];y^=D.high,w^=D.low}var B=x[F];B.high=y,B.low=w}for(var F=0;F<5;F++)for(var P=x[(F+4)%5],H=x[(F+1)%5],M=H.high,G=H.low,y=P.high^(M<<1|G>>>31),w=P.low^(G<<1|M>>>31),k=0;k<5;k++){var D=v[F+5*k];D.high^=y,D.low^=w}for(var Y=1;Y<25;Y++){var y,w,D=v[Y],Q=D.high,X=D.low,I=h[Y];I<32?(y=Q<<I|X>>>32-I,w=X<<I|Q>>>32-I):(y=X<<I-32|Q>>>64-I,w=Q<<I-32|X>>>64-I);var T=x[f[Y]];T.high=y,T.low=w}var R=x[0],S=v[0];R.high=S.high,R.low=S.low;for(var F=0;F<5;F++)for(var k=0;k<5;k++){var Y=F+5*k,D=v[Y],J=x[Y],Z=x[(F+1)%5+5*k],le=x[(F+2)%5+5*k];D.high=J.high^~Z.high&le.high,D.low=J.low^~Z.low&le.low}var D=v[0],$=d[b];D.high^=$.high,D.low^=$.low}},_doFinalize:function(){var p=this._data,E=p.words;this._nDataBytes*8;var v=p.sigBytes*8,_=this.blockSize*32;E[v>>>5]|=1<<24-v%32,E[(r.ceil((v+1)/_)*_>>>5)-1]|=128,p.sigBytes=E.length*4,this._process();for(var m=this._state,C=this.cfg.outputLength/8,A=C/8,D=[],b=0;b<A;b++){var F=m[b],y=F.high,w=F.low;y=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,w=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360,D.push(w),D.push(y)}return new o.init(D,C)},clone:function(){for(var p=c.clone.call(this),E=p._state=this._state.slice(0),v=0;v<25;v++)E[v]=E[v].clone();return p}});i.SHA3=c._createHelper(g),i.HmacSHA3=c._createHmacHelper(g)}(Math),t.SHA3})}(Gs)),Gs.exports}var js={exports:{}},_c;function Ax(){return _c||(_c=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),h=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),f=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),d=o.create([0,1518500249,1859775393,2400959708,2840853838]),x=o.create([1352829926,1548603684,1836072691,2053994217,0]),g=l.RIPEMD160=c.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(A,D){for(var b=0;b<16;b++){var F=D+b,y=A[F];A[F]=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360}var w=this._hash.words,k=d.words,B=x.words,P=a.words,H=u.words,M=h.words,G=f.words,Y,Q,X,I,T,R,S,J,Z,le;R=Y=w[0],S=Q=w[1],J=X=w[2],Z=I=w[3],le=T=w[4];for(var $,b=0;b<80;b+=1)$=Y+A[D+P[b]]|0,b<16?$+=p(Q,X,I)+k[0]:b<32?$+=E(Q,X,I)+k[1]:b<48?$+=v(Q,X,I)+k[2]:b<64?$+=_(Q,X,I)+k[3]:$+=m(Q,X,I)+k[4],$=$|0,$=C($,M[b]),$=$+T|0,Y=T,T=I,I=C(X,10),X=Q,Q=$,$=R+A[D+H[b]]|0,b<16?$+=m(S,J,Z)+B[0]:b<32?$+=_(S,J,Z)+B[1]:b<48?$+=v(S,J,Z)+B[2]:b<64?$+=E(S,J,Z)+B[3]:$+=p(S,J,Z)+B[4],$=$|0,$=C($,G[b]),$=$+le|0,R=le,le=Z,Z=C(J,10),J=S,S=$;$=w[1]+X+Z|0,w[1]=w[2]+I+le|0,w[2]=w[3]+T+R|0,w[3]=w[4]+Y+S|0,w[4]=w[0]+Q+J|0,w[0]=$},_doFinalize:function(){var A=this._data,D=A.words,b=this._nDataBytes*8,F=A.sigBytes*8;D[F>>>5]|=128<<24-F%32,D[(F+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360,A.sigBytes=(D.length+1)*4,this._process();for(var y=this._hash,w=y.words,k=0;k<5;k++){var B=w[k];w[k]=(B<<8|B>>>24)&16711935|(B<<24|B>>>8)&4278255360}return y},clone:function(){var A=c.clone.call(this);return A._hash=this._hash.clone(),A}});function p(A,D,b){return A^D^b}function E(A,D,b){return A&D|~A&b}function v(A,D,b){return(A|~D)^b}function _(A,D,b){return A&b|D&~b}function m(A,D,b){return A^(D|~b)}function C(A,D){return A<<D|A>>>32-D}i.RIPEMD160=c._createHelper(g),i.HmacRIPEMD160=c._createHmacHelper(g)}(),t.RIPEMD160})}(js)),js.exports}var Ks={exports:{}},vc;function ta(){return vc||(vc=1,function(n,e){(function(t,r){n.exports=r(ue())})(V,function(t){(function(){var r=t,i=r.lib,s=i.Base,o=r.enc,c=o.Utf8,l=r.algo;l.HMAC=s.extend({init:function(a,u){a=this._hasher=new a.init,typeof u=="string"&&(u=c.parse(u));var h=a.blockSize,f=h*4;u.sigBytes>f&&(u=a.finalize(u)),u.clamp();for(var d=this._oKey=u.clone(),x=this._iKey=u.clone(),g=d.words,p=x.words,E=0;E<h;E++)g[E]^=1549556828,p[E]^=909522486;d.sigBytes=x.sigBytes=f,this.reset()},reset:function(){var a=this._hasher;a.reset(),a.update(this._iKey)},update:function(a){return this._hasher.update(a),this},finalize:function(a){var u=this._hasher,h=u.finalize(a);u.reset();var f=u.finalize(this._oKey.clone().concat(h));return f}})})()})}(Ks)),Ks.exports}var Ys={exports:{}},gc;function bx(){return gc||(gc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),ea(),ta())})(V,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,c=r.algo,l=c.SHA256,a=c.HMAC,u=c.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:25e4}),init:function(h){this.cfg=this.cfg.extend(h)},compute:function(h,f){for(var d=this.cfg,x=a.create(d.hasher,h),g=o.create(),p=o.create([1]),E=g.words,v=p.words,_=d.keySize,m=d.iterations;E.length<_;){var C=x.update(f).finalize(p);x.reset();for(var A=C.words,D=A.length,b=C,F=1;F<m;F++){b=x.finalize(b),x.reset();for(var y=b.words,w=0;w<D;w++)A[w]^=y[w]}g.concat(C),v[0]++}return g.sigBytes=_*4,g}});r.PBKDF2=function(h,f,d){return u.create(d).compute(h,f)}}(),t.PBKDF2})}(Ys)),Ys.exports}var Xs={exports:{}},mc;function an(){return mc||(mc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),bf(),ta())})(V,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,c=r.algo,l=c.MD5,a=c.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,h){for(var f,d=this.cfg,x=d.hasher.create(),g=o.create(),p=g.words,E=d.keySize,v=d.iterations;p.length<E;){f&&x.update(f),f=x.update(u).finalize(h),x.reset();for(var _=1;_<v;_++)f=x.finalize(f),x.reset();g.concat(f)}return g.sigBytes=E*4,g}});r.EvpKDF=function(u,h,f){return a.create(f).compute(u,h)}}(),t.EvpKDF})}(Xs)),Xs.exports}var Qs={exports:{}},Ec;function Le(){return Ec||(Ec=1,function(n,e){(function(t,r,i){n.exports=r(ue(),an())})(V,function(t){t.lib.Cipher||function(r){var i=t,s=i.lib,o=s.Base,c=s.WordArray,l=s.BufferedBlockAlgorithm,a=i.enc;a.Utf8;var u=a.Base64,h=i.algo,f=h.EvpKDF,d=s.Cipher=l.extend({cfg:o.extend(),createEncryptor:function(y,w){return this.create(this._ENC_XFORM_MODE,y,w)},createDecryptor:function(y,w){return this.create(this._DEC_XFORM_MODE,y,w)},init:function(y,w,k){this.cfg=this.cfg.extend(k),this._xformMode=y,this._key=w,this.reset()},reset:function(){l.reset.call(this),this._doReset()},process:function(y){return this._append(y),this._process()},finalize:function(y){y&&this._append(y);var w=this._doFinalize();return w},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function y(w){return typeof w=="string"?F:A}return function(w){return{encrypt:function(k,B,P){return y(B).encrypt(w,k,B,P)},decrypt:function(k,B,P){return y(B).decrypt(w,k,B,P)}}}}()});s.StreamCipher=d.extend({_doFinalize:function(){var y=this._process(!0);return y},blockSize:1});var x=i.mode={},g=s.BlockCipherMode=o.extend({createEncryptor:function(y,w){return this.Encryptor.create(y,w)},createDecryptor:function(y,w){return this.Decryptor.create(y,w)},init:function(y,w){this._cipher=y,this._iv=w}}),p=x.CBC=function(){var y=g.extend();y.Encryptor=y.extend({processBlock:function(k,B){var P=this._cipher,H=P.blockSize;w.call(this,k,B,H),P.encryptBlock(k,B),this._prevBlock=k.slice(B,B+H)}}),y.Decryptor=y.extend({processBlock:function(k,B){var P=this._cipher,H=P.blockSize,M=k.slice(B,B+H);P.decryptBlock(k,B),w.call(this,k,B,H),this._prevBlock=M}});function w(k,B,P){var H,M=this._iv;M?(H=M,this._iv=r):H=this._prevBlock;for(var G=0;G<P;G++)k[B+G]^=H[G]}return y}(),E=i.pad={},v=E.Pkcs7={pad:function(y,w){for(var k=w*4,B=k-y.sigBytes%k,P=B<<24|B<<16|B<<8|B,H=[],M=0;M<B;M+=4)H.push(P);var G=c.create(H,B);y.concat(G)},unpad:function(y){var w=y.words[y.sigBytes-1>>>2]&255;y.sigBytes-=w}};s.BlockCipher=d.extend({cfg:d.cfg.extend({mode:p,padding:v}),reset:function(){var y;d.reset.call(this);var w=this.cfg,k=w.iv,B=w.mode;this._xformMode==this._ENC_XFORM_MODE?y=B.createEncryptor:(y=B.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==y?this._mode.init(this,k&&k.words):(this._mode=y.call(B,this,k&&k.words),this._mode.__creator=y)},_doProcessBlock:function(y,w){this._mode.processBlock(y,w)},_doFinalize:function(){var y,w=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(w.pad(this._data,this.blockSize),y=this._process(!0)):(y=this._process(!0),w.unpad(y)),y},blockSize:128/32});var _=s.CipherParams=o.extend({init:function(y){this.mixIn(y)},toString:function(y){return(y||this.formatter).stringify(this)}}),m=i.format={},C=m.OpenSSL={stringify:function(y){var w,k=y.ciphertext,B=y.salt;return B?w=c.create([1398893684,1701076831]).concat(B).concat(k):w=k,w.toString(u)},parse:function(y){var w,k=u.parse(y),B=k.words;return B[0]==1398893684&&B[1]==1701076831&&(w=c.create(B.slice(2,4)),B.splice(0,4),k.sigBytes-=16),_.create({ciphertext:k,salt:w})}},A=s.SerializableCipher=o.extend({cfg:o.extend({format:C}),encrypt:function(y,w,k,B){B=this.cfg.extend(B);var P=y.createEncryptor(k,B),H=P.finalize(w),M=P.cfg;return _.create({ciphertext:H,key:k,iv:M.iv,algorithm:y,mode:M.mode,padding:M.padding,blockSize:y.blockSize,formatter:B.format})},decrypt:function(y,w,k,B){B=this.cfg.extend(B),w=this._parse(w,B.format);var P=y.createDecryptor(k,B).finalize(w.ciphertext);return P},_parse:function(y,w){return typeof y=="string"?w.parse(y,this):y}}),D=i.kdf={},b=D.OpenSSL={execute:function(y,w,k,B,P){if(B||(B=c.random(64/8)),P)var H=f.create({keySize:w+k,hasher:P}).compute(y,B);else var H=f.create({keySize:w+k}).compute(y,B);var M=c.create(H.words.slice(w),k*4);return H.sigBytes=w*4,_.create({key:H,iv:M,salt:B})}},F=s.PasswordBasedCipher=A.extend({cfg:A.cfg.extend({kdf:b}),encrypt:function(y,w,k,B){B=this.cfg.extend(B);var P=B.kdf.execute(k,y.keySize,y.ivSize,B.salt,B.hasher);B.iv=P.iv;var H=A.encrypt.call(this,y,w,P.key,B);return H.mixIn(P),H},decrypt:function(y,w,k,B){B=this.cfg.extend(B),w=this._parse(w,B.format);var P=B.kdf.execute(k,y.keySize,y.ivSize,w.salt,B.hasher);B.iv=P.iv;var H=A.decrypt.call(this,y,w,P.key,B);return H}})}()})}(Qs)),Qs.exports}var Zs={exports:{}},Cc;function Dx(){return Cc||(Cc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.mode.CFB=function(){var r=t.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize;i.call(this,s,o,l,c),this._prevBlock=s.slice(o,o+l)}}),r.Decryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=s.slice(o,o+l);i.call(this,s,o,l,c),this._prevBlock=a}});function i(s,o,c,l){var a,u=this._iv;u?(a=u.slice(0),this._iv=void 0):a=this._prevBlock,l.encryptBlock(a,0);for(var h=0;h<c;h++)s[o+h]^=a[h]}return r}(),t.mode.CFB})}(Zs)),Zs.exports}var Js={exports:{}},yc;function wx(){return yc||(yc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.mode.CTR=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=this._iv,u=this._counter;a&&(u=this._counter=a.slice(0),this._iv=void 0);var h=u.slice(0);c.encryptBlock(h,0),u[l-1]=u[l-1]+1|0;for(var f=0;f<l;f++)s[o+f]^=h[f]}});return r.Decryptor=i,r}(),t.mode.CTR})}(Js)),Js.exports}var e0={exports:{}},Ac;function Bx(){return Ac||(Ac=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var r=t.lib.BlockCipherMode.extend();function i(c){if((c>>24&255)===255){var l=c>>16&255,a=c>>8&255,u=c&255;l===255?(l=0,a===255?(a=0,u===255?u=0:++u):++a):++l,c=0,c+=l<<16,c+=a<<8,c+=u}else c+=1<<24;return c}function s(c){return(c[0]=i(c[0]))===0&&(c[1]=i(c[1])),c}var o=r.Encryptor=r.extend({processBlock:function(c,l){var a=this._cipher,u=a.blockSize,h=this._iv,f=this._counter;h&&(f=this._counter=h.slice(0),this._iv=void 0),s(f);var d=f.slice(0);a.encryptBlock(d,0);for(var x=0;x<u;x++)c[l+x]^=d[x]}});return r.Decryptor=o,r}(),t.mode.CTRGladman})}(e0)),e0.exports}var t0={exports:{}},bc;function Fx(){return bc||(bc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.mode.OFB=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=this._iv,u=this._keystream;a&&(u=this._keystream=a.slice(0),this._iv=void 0),c.encryptBlock(u,0);for(var h=0;h<l;h++)s[o+h]^=u[h]}});return r.Decryptor=i,r}(),t.mode.OFB})}(t0)),t0.exports}var n0={exports:{}},Dc;function kx(){return Dc||(Dc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.mode.ECB=function(){var r=t.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),t.mode.ECB})}(n0)),n0.exports}var r0={exports:{}},wc;function Ix(){return wc||(wc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,c=o-s%o,l=s+c-1;r.clamp(),r.words[l>>>2]|=c<<24-l%4*8,r.sigBytes+=c},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Ansix923})}(r0)),r0.exports}var i0={exports:{}},Bc;function Sx(){return Bc||(Bc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Iso10126})}(i0)),i0.exports}var s0={exports:{}},Fc;function Tx(){return Fc||(Fc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.pad.Iso97971={pad:function(r,i){r.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(r,i)},unpad:function(r){t.pad.ZeroPadding.unpad(r),r.sigBytes--}},t.pad.Iso97971})}(s0)),s0.exports}var o0={exports:{}},kc;function Rx(){return kc||(kc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(o0)),o0.exports}var a0={exports:{}},Ic;function Px(){return Ic||(Ic=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(a0)),a0.exports}var c0={exports:{}},Sc;function Nx(){return Sc||(Sc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Le())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.CipherParams,c=i.enc,l=c.Hex,a=i.format;a.Hex={stringify:function(u){return u.ciphertext.toString(l)},parse:function(u){var h=l.parse(u);return o.create({ciphertext:h})}}}(),t.format.Hex})}(c0)),c0.exports}var l0={exports:{}},Tc;function Ox(){return Tc||(Tc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Dn(),wn(),an(),Le())})(V,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo,c=[],l=[],a=[],u=[],h=[],f=[],d=[],x=[],g=[],p=[];(function(){for(var _=[],m=0;m<256;m++)m<128?_[m]=m<<1:_[m]=m<<1^283;for(var C=0,A=0,m=0;m<256;m++){var D=A^A<<1^A<<2^A<<3^A<<4;D=D>>>8^D&255^99,c[C]=D,l[D]=C;var b=_[C],F=_[b],y=_[F],w=_[D]*257^D*16843008;a[C]=w<<24|w>>>8,u[C]=w<<16|w>>>16,h[C]=w<<8|w>>>24,f[C]=w;var w=y*16843009^F*65537^b*257^C*16843008;d[D]=w<<24|w>>>8,x[D]=w<<16|w>>>16,g[D]=w<<8|w>>>24,p[D]=w,C?(C=b^_[_[_[y^b]]],A^=_[_[A]]):C=A=1}})();var E=[0,1,2,4,8,16,32,64,128,27,54],v=o.AES=s.extend({_doReset:function(){var _;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var m=this._keyPriorReset=this._key,C=m.words,A=m.sigBytes/4,D=this._nRounds=A+6,b=(D+1)*4,F=this._keySchedule=[],y=0;y<b;y++)y<A?F[y]=C[y]:(_=F[y-1],y%A?A>6&&y%A==4&&(_=c[_>>>24]<<24|c[_>>>16&255]<<16|c[_>>>8&255]<<8|c[_&255]):(_=_<<8|_>>>24,_=c[_>>>24]<<24|c[_>>>16&255]<<16|c[_>>>8&255]<<8|c[_&255],_^=E[y/A|0]<<24),F[y]=F[y-A]^_);for(var w=this._invKeySchedule=[],k=0;k<b;k++){var y=b-k;if(k%4)var _=F[y];else var _=F[y-4];k<4||y<=4?w[k]=_:w[k]=d[c[_>>>24]]^x[c[_>>>16&255]]^g[c[_>>>8&255]]^p[c[_&255]]}}},encryptBlock:function(_,m){this._doCryptBlock(_,m,this._keySchedule,a,u,h,f,c)},decryptBlock:function(_,m){var C=_[m+1];_[m+1]=_[m+3],_[m+3]=C,this._doCryptBlock(_,m,this._invKeySchedule,d,x,g,p,l);var C=_[m+1];_[m+1]=_[m+3],_[m+3]=C},_doCryptBlock:function(_,m,C,A,D,b,F,y){for(var w=this._nRounds,k=_[m]^C[0],B=_[m+1]^C[1],P=_[m+2]^C[2],H=_[m+3]^C[3],M=4,G=1;G<w;G++){var Y=A[k>>>24]^D[B>>>16&255]^b[P>>>8&255]^F[H&255]^C[M++],Q=A[B>>>24]^D[P>>>16&255]^b[H>>>8&255]^F[k&255]^C[M++],X=A[P>>>24]^D[H>>>16&255]^b[k>>>8&255]^F[B&255]^C[M++],I=A[H>>>24]^D[k>>>16&255]^b[B>>>8&255]^F[P&255]^C[M++];k=Y,B=Q,P=X,H=I}var Y=(y[k>>>24]<<24|y[B>>>16&255]<<16|y[P>>>8&255]<<8|y[H&255])^C[M++],Q=(y[B>>>24]<<24|y[P>>>16&255]<<16|y[H>>>8&255]<<8|y[k&255])^C[M++],X=(y[P>>>24]<<24|y[H>>>16&255]<<16|y[k>>>8&255]<<8|y[B&255])^C[M++],I=(y[H>>>24]<<24|y[k>>>16&255]<<16|y[B>>>8&255]<<8|y[P&255])^C[M++];_[m]=Y,_[m+1]=Q,_[m+2]=X,_[m+3]=I},keySize:256/32});r.AES=s._createHelper(v)}(),t.AES})}(l0)),l0.exports}var u0={exports:{}},Rc;function Lx(){return Rc||(Rc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Dn(),wn(),an(),Le())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.BlockCipher,c=r.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=c.DES=o.extend({_doReset:function(){for(var E=this._key,v=E.words,_=[],m=0;m<56;m++){var C=l[m]-1;_[m]=v[C>>>5]>>>31-C%32&1}for(var A=this._subKeys=[],D=0;D<16;D++){for(var b=A[D]=[],F=u[D],m=0;m<24;m++)b[m/6|0]|=_[(a[m]-1+F)%28]<<31-m%6,b[4+(m/6|0)]|=_[28+(a[m+24]-1+F)%28]<<31-m%6;b[0]=b[0]<<1|b[0]>>>31;for(var m=1;m<7;m++)b[m]=b[m]>>>(m-1)*4+3;b[7]=b[7]<<5|b[7]>>>27}for(var y=this._invSubKeys=[],m=0;m<16;m++)y[m]=A[15-m]},encryptBlock:function(E,v){this._doCryptBlock(E,v,this._subKeys)},decryptBlock:function(E,v){this._doCryptBlock(E,v,this._invSubKeys)},_doCryptBlock:function(E,v,_){this._lBlock=E[v],this._rBlock=E[v+1],x.call(this,4,252645135),x.call(this,16,65535),g.call(this,2,858993459),g.call(this,8,16711935),x.call(this,1,1431655765);for(var m=0;m<16;m++){for(var C=_[m],A=this._lBlock,D=this._rBlock,b=0,F=0;F<8;F++)b|=h[F][((D^C[F])&f[F])>>>0];this._lBlock=D,this._rBlock=A^b}var y=this._lBlock;this._lBlock=this._rBlock,this._rBlock=y,x.call(this,1,1431655765),g.call(this,8,16711935),g.call(this,2,858993459),x.call(this,16,65535),x.call(this,4,252645135),E[v]=this._lBlock,E[v+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function x(E,v){var _=(this._lBlock>>>E^this._rBlock)&v;this._rBlock^=_,this._lBlock^=_<<E}function g(E,v){var _=(this._rBlock>>>E^this._lBlock)&v;this._lBlock^=_,this._rBlock^=_<<E}r.DES=o._createHelper(d);var p=c.TripleDES=o.extend({_doReset:function(){var E=this._key,v=E.words;if(v.length!==2&&v.length!==4&&v.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var _=v.slice(0,2),m=v.length<4?v.slice(0,2):v.slice(2,4),C=v.length<6?v.slice(0,2):v.slice(4,6);this._des1=d.createEncryptor(s.create(_)),this._des2=d.createEncryptor(s.create(m)),this._des3=d.createEncryptor(s.create(C))},encryptBlock:function(E,v){this._des1.encryptBlock(E,v),this._des2.decryptBlock(E,v),this._des3.encryptBlock(E,v)},decryptBlock:function(E,v){this._des3.decryptBlock(E,v),this._des2.encryptBlock(E,v),this._des1.decryptBlock(E,v)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(p)}(),t.TripleDES})}(u0)),u0.exports}var f0={exports:{}},Pc;function Mx(){return Pc||(Pc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Dn(),wn(),an(),Le())})(V,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=o.RC4=s.extend({_doReset:function(){for(var u=this._key,h=u.words,f=u.sigBytes,d=this._S=[],x=0;x<256;x++)d[x]=x;for(var x=0,g=0;x<256;x++){var p=x%f,E=h[p>>>2]>>>24-p%4*8&255;g=(g+d[x]+E)%256;var v=d[x];d[x]=d[g],d[g]=v}this._i=this._j=0},_doProcessBlock:function(u,h){u[h]^=l.call(this)},keySize:256/32,ivSize:0});function l(){for(var u=this._S,h=this._i,f=this._j,d=0,x=0;x<4;x++){h=(h+1)%256,f=(f+u[h])%256;var g=u[h];u[h]=u[f],u[f]=g,d|=u[(u[h]+u[f])%256]<<24-x*8}return this._i=h,this._j=f,d}r.RC4=s._createHelper(c);var a=o.RC4Drop=c.extend({cfg:c.cfg.extend({drop:192}),_doReset:function(){c._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)l.call(this)}});r.RC4Drop=s._createHelper(a)}(),t.RC4})}(f0)),f0.exports}var d0={exports:{}},Nc;function Hx(){return Nc||(Nc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Dn(),wn(),an(),Le())})(V,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=[],l=[],a=[],u=o.Rabbit=s.extend({_doReset:function(){for(var f=this._key.words,d=this.cfg.iv,x=0;x<4;x++)f[x]=(f[x]<<8|f[x]>>>24)&16711935|(f[x]<<24|f[x]>>>8)&4278255360;var g=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],p=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var x=0;x<4;x++)h.call(this);for(var x=0;x<8;x++)p[x]^=g[x+4&7];if(d){var E=d.words,v=E[0],_=E[1],m=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,C=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,A=m>>>16|C&4294901760,D=C<<16|m&65535;p[0]^=m,p[1]^=A,p[2]^=C,p[3]^=D,p[4]^=m,p[5]^=A,p[6]^=C,p[7]^=D;for(var x=0;x<4;x++)h.call(this)}},_doProcessBlock:function(f,d){var x=this._X;h.call(this),c[0]=x[0]^x[5]>>>16^x[3]<<16,c[1]=x[2]^x[7]>>>16^x[5]<<16,c[2]=x[4]^x[1]>>>16^x[7]<<16,c[3]=x[6]^x[3]>>>16^x[1]<<16;for(var g=0;g<4;g++)c[g]=(c[g]<<8|c[g]>>>24)&16711935|(c[g]<<24|c[g]>>>8)&4278255360,f[d+g]^=c[g]},blockSize:128/32,ivSize:64/32});function h(){for(var f=this._X,d=this._C,x=0;x<8;x++)l[x]=d[x];d[0]=d[0]+1295307597+this._b|0,d[1]=d[1]+3545052371+(d[0]>>>0<l[0]>>>0?1:0)|0,d[2]=d[2]+886263092+(d[1]>>>0<l[1]>>>0?1:0)|0,d[3]=d[3]+1295307597+(d[2]>>>0<l[2]>>>0?1:0)|0,d[4]=d[4]+3545052371+(d[3]>>>0<l[3]>>>0?1:0)|0,d[5]=d[5]+886263092+(d[4]>>>0<l[4]>>>0?1:0)|0,d[6]=d[6]+1295307597+(d[5]>>>0<l[5]>>>0?1:0)|0,d[7]=d[7]+3545052371+(d[6]>>>0<l[6]>>>0?1:0)|0,this._b=d[7]>>>0<l[7]>>>0?1:0;for(var x=0;x<8;x++){var g=f[x]+d[x],p=g&65535,E=g>>>16,v=((p*p>>>17)+p*E>>>15)+E*E,_=((g&4294901760)*g|0)+((g&65535)*g|0);a[x]=v^_}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}r.Rabbit=s._createHelper(u)}(),t.Rabbit})}(d0)),d0.exports}var h0={exports:{}},Oc;function Ux(){return Oc||(Oc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Dn(),wn(),an(),Le())})(V,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=[],l=[],a=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var f=this._key.words,d=this.cfg.iv,x=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],g=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var p=0;p<4;p++)h.call(this);for(var p=0;p<8;p++)g[p]^=x[p+4&7];if(d){var E=d.words,v=E[0],_=E[1],m=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,C=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,A=m>>>16|C&4294901760,D=C<<16|m&65535;g[0]^=m,g[1]^=A,g[2]^=C,g[3]^=D,g[4]^=m,g[5]^=A,g[6]^=C,g[7]^=D;for(var p=0;p<4;p++)h.call(this)}},_doProcessBlock:function(f,d){var x=this._X;h.call(this),c[0]=x[0]^x[5]>>>16^x[3]<<16,c[1]=x[2]^x[7]>>>16^x[5]<<16,c[2]=x[4]^x[1]>>>16^x[7]<<16,c[3]=x[6]^x[3]>>>16^x[1]<<16;for(var g=0;g<4;g++)c[g]=(c[g]<<8|c[g]>>>24)&16711935|(c[g]<<24|c[g]>>>8)&4278255360,f[d+g]^=c[g]},blockSize:128/32,ivSize:64/32});function h(){for(var f=this._X,d=this._C,x=0;x<8;x++)l[x]=d[x];d[0]=d[0]+1295307597+this._b|0,d[1]=d[1]+3545052371+(d[0]>>>0<l[0]>>>0?1:0)|0,d[2]=d[2]+886263092+(d[1]>>>0<l[1]>>>0?1:0)|0,d[3]=d[3]+1295307597+(d[2]>>>0<l[2]>>>0?1:0)|0,d[4]=d[4]+3545052371+(d[3]>>>0<l[3]>>>0?1:0)|0,d[5]=d[5]+886263092+(d[4]>>>0<l[4]>>>0?1:0)|0,d[6]=d[6]+1295307597+(d[5]>>>0<l[5]>>>0?1:0)|0,d[7]=d[7]+3545052371+(d[6]>>>0<l[6]>>>0?1:0)|0,this._b=d[7]>>>0<l[7]>>>0?1:0;for(var x=0;x<8;x++){var g=f[x]+d[x],p=g&65535,E=g>>>16,v=((p*p>>>17)+p*E>>>15)+E*E,_=((g&4294901760)*g|0)+((g&65535)*g|0);a[x]=v^_}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}r.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(h0)),h0.exports}var x0={exports:{}},Lc;function Wx(){return Lc||(Lc=1,function(n,e){(function(t,r,i){n.exports=r(ue(),Dn(),wn(),an(),Le())})(V,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo;const c=16,l=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],a=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function h(p,E){let v=E>>24&255,_=E>>16&255,m=E>>8&255,C=E&255,A=p.sbox[0][v]+p.sbox[1][_];return A=A^p.sbox[2][m],A=A+p.sbox[3][C],A}function f(p,E,v){let _=E,m=v,C;for(let A=0;A<c;++A)_=_^p.pbox[A],m=h(p,_)^m,C=_,_=m,m=C;return C=_,_=m,m=C,m=m^p.pbox[c],_=_^p.pbox[c+1],{left:_,right:m}}function d(p,E,v){let _=E,m=v,C;for(let A=c+1;A>1;--A)_=_^p.pbox[A],m=h(p,_)^m,C=_,_=m,m=C;return C=_,_=m,m=C,m=m^p.pbox[1],_=_^p.pbox[0],{left:_,right:m}}function x(p,E,v){for(let D=0;D<4;D++){p.sbox[D]=[];for(let b=0;b<256;b++)p.sbox[D][b]=a[D][b]}let _=0;for(let D=0;D<c+2;D++)p.pbox[D]=l[D]^E[_],_++,_>=v&&(_=0);let m=0,C=0,A=0;for(let D=0;D<c+2;D+=2)A=f(p,m,C),m=A.left,C=A.right,p.pbox[D]=m,p.pbox[D+1]=C;for(let D=0;D<4;D++)for(let b=0;b<256;b+=2)A=f(p,m,C),m=A.left,C=A.right,p.sbox[D][b]=m,p.sbox[D][b+1]=C;return!0}var g=o.Blowfish=s.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var p=this._keyPriorReset=this._key,E=p.words,v=p.sigBytes/4;x(u,E,v)}},encryptBlock:function(p,E){var v=f(u,p[E],p[E+1]);p[E]=v.left,p[E+1]=v.right},decryptBlock:function(p,E){var v=d(u,p[E],p[E+1]);p[E]=v.left,p[E+1]=v.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=s._createHelper(g)}(),t.Blowfish})}(x0)),x0.exports}(function(n,e){(function(t,r,i){n.exports=r(ue(),rs(),vx(),gx(),Dn(),mx(),wn(),bf(),ea(),Ex(),Df(),Cx(),yx(),Ax(),ta(),bx(),an(),Le(),Dx(),wx(),Bx(),Fx(),kx(),Ix(),Sx(),Tx(),Rx(),Px(),Nx(),Ox(),Lx(),Mx(),Hx(),Ux(),Wx())})(V,function(t){return t})})(Cf);var Co=Cf.exports,Mc={};/**
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
 */const wf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const q=function(n,e){if(!n)throw rr(e)},rr=function(n){return new Error("Firebase Database ("+wf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Bf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zx=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},na={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,a=l?n[i+2]:0,u=s>>2,h=(s&3)<<4|c>>4;let f=(c&15)<<2|a>>6,d=a&63;l||(d=64,o||(f=64)),r.push(t[u],t[h],t[f],t[d])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zx(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const a=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||a==null||h==null)throw new qx;const f=s<<2|c>>4;if(r.push(f),a!==64){const d=c<<4&240|a>>2;if(r.push(d),h!==64){const x=a<<6&192|h;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ff=function(n){const e=Bf(n);return na.encodeByteArray(e,!0)},Ii=function(n){return Ff(n).replace(/\./g,"")},Si=function(n){try{return na.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $x(n){return kf(void 0,n)}function kf(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Vx(t)||(n[t]=kf(n[t],e[t]));return n}function Vx(n){return n!=="__proto__"}/**
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
 */function Gx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jx=()=>Gx().__FIREBASE_DEFAULTS__,Kx=()=>{if(typeof process>"u"||typeof Mc>"u")return;const n=Mc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Si(n[1]);return e&&JSON.parse(e)},ra=()=>{try{return jx()||Kx()||Yx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},If=n=>{var e,t;return(t=(e=ra())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xx=n=>{const e=If(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Sf=()=>{var n;return(n=ra())===null||n===void 0?void 0:n.config},Tf=n=>{var e;return(e=ra())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ri{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Qx(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ii(JSON.stringify(t)),Ii(JSON.stringify(o)),""].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ia(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Zx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jx(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function e1(){return wf.NODE_ADMIN===!0}function t1(){try{return typeof indexedDB=="object"}catch{return!1}}function n1(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const r1="FirebaseError";class cn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=r1,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?i1(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new cn(i,c,r)}}function i1(n,e){return n.replace(s1,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const s1=/\{\$([^}]+)}/g;/**
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
 */function zr(n){return JSON.parse(n)}function Te(n){return JSON.stringify(n)}/**
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
 */const Pf=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=zr(Si(s[0])||""),t=zr(Si(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},o1=function(n){const e=Pf(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},a1=function(n){const e=Pf(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function It(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Xn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function yo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ti(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Ri(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Hc(s)&&Hc(o)){if(!Ri(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Hc(n){return n!==null&&typeof n=="object"}/**
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
 */function ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function kr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class c1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)r[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=c^s&(o^c),u=1518500249):(a=s^o^c,u=1859775393):h<60?(a=s&o|c&(s|o),u=2400959708):(a=s^o^c,u=3395469782);const f=(i<<5|i>>>27)+a+l+u+r[h]&4294967295;l=c,c=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function l1(n,e){const t=new u1(n,e);return t.subscribe.bind(t)}class u1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");f1(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=p0),i.error===void 0&&(i.error=p0),i.complete===void 0&&(i.complete=p0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function f1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function p0(){}function is(n,e){return`${n} failed: ${e} argument `}/**
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
 */const d1=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,q(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ss=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}class vn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class h1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ri;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p1(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:x1(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x1(n){return n===un?void 0:n}function p1(n){return n.instantiationMode==="EAGER"}/**
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
 */class _1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new h1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_e||(_e={}));const v1={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},g1=_e.INFO,m1={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},E1=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=m1[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sa{constructor(e){this.name=e,this._logLevel=g1,this._logHandler=E1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const C1=(n,e)=>e.some(t=>n instanceof t);let Uc,Wc;function y1(){return Uc||(Uc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A1(){return Wc||(Wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nf=new WeakMap,Ao=new WeakMap,Of=new WeakMap,_0=new WeakMap,oa=new WeakMap;function b1(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Kt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Nf.set(t,n)}).catch(()=>{}),oa.set(e,n),e}function D1(n){if(Ao.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ao.set(n,e)}let bo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ao.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Of.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function w1(n){bo=n(bo)}function B1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(v0(this),e,...t);return Of.set(r,e.sort?e.sort():[e]),Kt(r)}:A1().includes(n)?function(...e){return n.apply(v0(this),e),Kt(Nf.get(this))}:function(...e){return Kt(n.apply(v0(this),e))}}function F1(n){return typeof n=="function"?B1(n):(n instanceof IDBTransaction&&D1(n),C1(n,y1())?new Proxy(n,bo):n)}function Kt(n){if(n instanceof IDBRequest)return b1(n);if(_0.has(n))return _0.get(n);const e=F1(n);return e!==n&&(_0.set(n,e),oa.set(e,n)),e}const v0=n=>oa.get(n);function k1(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=Kt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kt(o.result),l.oldVersion,l.newVersion,Kt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),c}const I1=["get","getKey","getAll","getAllKeys","count"],S1=["put","add","delete","clear"],g0=new Map;function zc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(g0.get(e))return g0.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=S1.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I1.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let a=l.store;return r&&(a=a.index(c.shift())),(await Promise.all([a[t](...c),i&&l.done]))[0]};return g0.set(e,s),s}w1(n=>({...n,get:(e,t,r)=>zc(e,t)||n.get(e,t,r),has:(e,t)=>!!zc(e,t)||n.has(e,t)}));/**
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
 */class T1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(R1(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function R1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Do="@firebase/app",qc="0.9.13";/**
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
 */const gn=new sa("@firebase/app"),P1="@firebase/app-compat",N1="@firebase/analytics-compat",O1="@firebase/analytics",L1="@firebase/app-check-compat",M1="@firebase/app-check",H1="@firebase/auth",U1="@firebase/auth-compat",W1="@firebase/database",z1="@firebase/database-compat",q1="@firebase/functions",$1="@firebase/functions-compat",V1="@firebase/installations",G1="@firebase/installations-compat",j1="@firebase/messaging",K1="@firebase/messaging-compat",Y1="@firebase/performance",X1="@firebase/performance-compat",Q1="@firebase/remote-config",Z1="@firebase/remote-config-compat",J1="@firebase/storage",ep="@firebase/storage-compat",tp="@firebase/firestore",np="@firebase/firestore-compat",rp="firebase",ip="9.23.0";/**
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
 */const wo="[DEFAULT]",sp={[Do]:"fire-core",[P1]:"fire-core-compat",[O1]:"fire-analytics",[N1]:"fire-analytics-compat",[M1]:"fire-app-check",[L1]:"fire-app-check-compat",[H1]:"fire-auth",[U1]:"fire-auth-compat",[W1]:"fire-rtdb",[z1]:"fire-rtdb-compat",[q1]:"fire-fn",[$1]:"fire-fn-compat",[V1]:"fire-iid",[G1]:"fire-iid-compat",[j1]:"fire-fcm",[K1]:"fire-fcm-compat",[Y1]:"fire-perf",[X1]:"fire-perf-compat",[Q1]:"fire-rc",[Z1]:"fire-rc-compat",[J1]:"fire-gcs",[ep]:"fire-gcs-compat",[tp]:"fire-fst",[np]:"fire-fst-compat","fire-js":"fire-js",[rp]:"fire-js-all"};/**
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
 */const Pi=new Map,Bo=new Map;function op(n,e){try{n.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qn(n){const e=n.name;if(Bo.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;Bo.set(e,n);for(const t of Pi.values())op(t,n);return!0}function aa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ap={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new ii("app","Firebase",ap);/**
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
 */class cp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=ip;function os(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(t||(t=Sf()),!t)throw Yt.create("no-options");const s=Pi.get(i);if(s){if(Ri(t,s.options)&&Ri(r,s.config))return s;throw Yt.create("duplicate-app",{appName:i})}const o=new _1(i);for(const l of Bo.values())o.addComponent(l);const c=new cp(t,r,o);return Pi.set(i,c),c}function si(n=wo){const e=Pi.get(n);if(!e&&n===wo&&Sf())return os();if(!e)throw Yt.create("no-app",{appName:n});return e}function Xt(n,e,t){var r;let i=(r=sp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(c.join(" "));return}Qn(new vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const lp="firebase-heartbeat-database",up=1,qr="firebase-heartbeat-store";let m0=null;function Lf(){return m0||(m0=k1(lp,up,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qr)}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),m0}async function fp(n){try{return await(await Lf()).transaction(qr).objectStore(qr).get(Mf(n))}catch(e){if(e instanceof cn)gn.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(t.message)}}}async function $c(n,e){try{const r=(await Lf()).transaction(qr,"readwrite");await r.objectStore(qr).put(e,Mf(n)),await r.done}catch(t){if(t instanceof cn)gn.warn(t.message);else{const r=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gn.warn(r.message)}}}function Mf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const dp=1024,hp=30*24*60*60*1e3;class xp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _p(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=hp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vc(),{heartbeatsToSend:t,unsentEntries:r}=pp(this._heartbeatsCache.heartbeats),i=Ii(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vc(){return new Date().toISOString().substring(0,10)}function pp(n,e=dp){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Gc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _p{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t1()?n1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $c(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $c(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gc(n){return Ii(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function vp(n){Qn(new vn("platform-logger",e=>new T1(e),"PRIVATE")),Qn(new vn("heartbeat",e=>new xp(e),"PRIVATE")),Xt(Do,qc,n),Xt(Do,qc,"esm2017"),Xt("fire-js","")}vp("");var gp="firebase",mp="9.23.0";/**
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
 */Xt(gp,mp,"app");function ca(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Hf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ep=Hf,Uf=new ii("auth","Firebase",Hf());/**
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
 */const Ni=new sa("@firebase/auth");function Cp(n,...e){Ni.logLevel<=_e.WARN&&Ni.warn(`Auth (${sr}): ${n}`,...e)}function Ci(n,...e){Ni.logLevel<=_e.ERROR&&Ni.error(`Auth (${sr}): ${n}`,...e)}/**
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
 */function At(n,...e){throw la(n,...e)}function Bt(n,...e){return la(n,...e)}function yp(n,e,t){const r=Object.assign(Object.assign({},Ep()),{[e]:t});return new ii("auth","Firebase",r).create(e,{appName:n.name})}function la(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Uf.create(n,...e)}function ne(n,e,...t){if(!n)throw la(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ci(e),new Error(e)}function Lt(n,e){n||Rt(e)}/**
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
 */function Fo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ap(){return jc()==="http:"||jc()==="https:"}function jc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function bp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ap()||Zx()||"connection"in navigator)?navigator.onLine:!0}function Dp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lt(t>e,"Short delay should be less than long delay!"),this.isMobile=ia()||Rf()}get(){return bp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ua(n,e){Lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bp=new oi(3e4,6e4);function or(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Bn(n,e,t,r,i={}){return zf(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=ir(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Wf.fetch()(qf(n,n.config.apiHost,t,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function zf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},wp),e);try{const i=new Fp(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,a]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw vi(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw yp(n,u,a);At(n,u)}}catch(i){if(i instanceof cn)throw i;At(n,"network-request-failed",{message:String(i)})}}async function ai(n,e,t,r,i={}){const s=await Bn(n,e,t,r,i);return"mfaPendingCredential"in s&&At(n,"multi-factor-auth-required",{_serverResponse:s}),s}function qf(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ua(n.config,i):`${n.config.apiScheme}://${i}`}class Fp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),Bp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Bt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function kp(n,e){return Bn(n,"POST","/v1/accounts:delete",e)}async function Ip(n,e){return Bn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Tr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sp(n,e=!1){const t=qe(n),r=await t.getIdToken(e),i=fa(r);ne(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Tr(E0(i.auth_time)),issuedAtTime:Tr(E0(i.iat)),expirationTime:Tr(E0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function E0(n){return Number(n)*1e3}function fa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ci("JWT malformed, contained fewer than 3 sections"),null;try{const i=Si(t);return i?JSON.parse(i):(Ci("Failed to decode base64 JWT payload"),null)}catch(i){return Ci("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Tp(n){const e=fa(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof cn&&Rp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Rp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Pp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $f{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await mn(n,Ip(t,{idToken:r}));ne(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Lp(s.providerUserInfo):[],c=Op(n.providerData,o),l=n.isAnonymous,a=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),u=l?a:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new $f(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Np(n){const e=qe(n);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Op(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lp(n){return n.map(e=>{var{providerId:t}=e,r=ca(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Mp(n,e){const t=await zf(n,{},async()=>{const r=ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=qf(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Wf.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Mp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new $r;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Wt(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ca(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $f(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await mn(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sp(this,e)}reload(){return Np(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mn(this,kp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,l,a,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,d=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(c=t.tenantId)!==null&&c!==void 0?c:void 0,p=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(a=t.createdAt)!==null&&a!==void 0?a:void 0,v=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:m,isAnonymous:C,providerData:A,stsTokenManager:D}=t;ne(_&&D,e,"internal-error");const b=$r.fromJSON(this.name,D);ne(typeof _=="string",e,"internal-error"),Wt(h,e.name),Wt(f,e.name),ne(typeof m=="boolean",e,"internal-error"),ne(typeof C=="boolean",e,"internal-error"),Wt(d,e.name),Wt(x,e.name),Wt(g,e.name),Wt(p,e.name),Wt(E,e.name),Wt(v,e.name);const F=new xn({uid:_,auth:e,email:f,emailVerified:m,displayName:h,isAnonymous:C,photoURL:x,phoneNumber:d,tenantId:g,stsTokenManager:b,createdAt:E,lastLoginAt:v});return A&&Array.isArray(A)&&(F.providerData=A.map(y=>Object.assign({},y))),p&&(F._redirectEventId=p),F}static async _fromIdTokenResponse(e,t,r=!1){const i=new $r;i.updateFromServerResponse(t);const s=new xn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oi(s),s}}/**
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
 */const Kc=new Map;function Pt(n){Lt(n instanceof Function,"Expected a class definition");let e=Kc.get(n);return e?(Lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kc.set(n,e),e)}/**
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
 */class Vf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vf.type="NONE";const Yc=Vf;/**
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
 */function yi(n,e,t){return`firebase:${n}:${e}:${t}`}class zn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yi(this.userKey,i.apiKey,s),this.fullPersistenceKey=yi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new zn(Pt(Yc),e,r);const i=(await Promise.all(t.map(async a=>{if(await a._isAvailable())return a}))).filter(a=>a);let s=i[0]||Pt(Yc);const o=yi(r,e.config.apiKey,e.name);let c=null;for(const a of t)try{const u=await a._get(o);if(u){const h=xn._fromJSON(e,u);a!==s&&(c=h),s=a;break}}catch{}const l=i.filter(a=>a._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zn(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async a=>{if(a!==s)try{await a._remove(o)}catch{}})),new zn(s,e,r))}}/**
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
 */function Xc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xf(e))return"Blackberry";if(Qf(e))return"Webos";if(da(e))return"Safari";if((e.includes("chrome/")||jf(e))&&!e.includes("edge/"))return"Chrome";if(Yf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gf(n=je()){return/firefox\//i.test(n)}function da(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jf(n=je()){return/crios\//i.test(n)}function Kf(n=je()){return/iemobile/i.test(n)}function Yf(n=je()){return/android/i.test(n)}function Xf(n=je()){return/blackberry/i.test(n)}function Qf(n=je()){return/webos/i.test(n)}function as(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Hp(n=je()){var e;return as(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Up(){return Jx()&&document.documentMode===10}function Zf(n=je()){return as(n)||Yf(n)||Qf(n)||Xf(n)||/windows phone/i.test(n)||Kf(n)}function Wp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jf(n,e=[]){let t;switch(n){case"Browser":t=Xc(je());break;case"Worker":t=`${Xc(je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${sr}/${r}`}async function ed(n,e){return Bn(n,"GET","/v2/recaptchaConfig",or(n,e))}function Qc(n){return n!==void 0&&n.enterprise!==void 0}class td{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function zp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function nd(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",zp().appendChild(r)})}function qp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $p="https://www.google.com/recaptcha/enterprise.js?render=",Vp="recaptcha-enterprise",Gp="NO_RECAPTCHA";class rd{constructor(e){this.type=Vp,this.auth=ar(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{ed(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const a=new td(l);return s.tenantId==null?s._agentRecaptchaConfig=a:s._tenantRecaptchaConfigs[s.tenantId]=a,o(a.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;Qc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(a=>{o(a)}).catch(()=>{o(Gp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&Qc(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nd($p+c).then(()=>{i(c,s,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Li(n,e,t,r=!1){const i=new rd(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class jp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Kp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zc(this),this.idTokenSubscription=new Zc(this),this.beforeStateQueue=new jp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?qe(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}async initializeRecaptchaConfig(){const e=await ed(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new td(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new rd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ii("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Cp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ar(n){return qe(n)}class Zc{constructor(e){this.auth=e,this.observer=null,this.addObserver=l1(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Yp(n,e){const t=aa(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ri(s,e??{}))return i;At(i,"already-initialized")}return t.initialize({options:e})}function Xp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qp(n,e,t){const r=ar(n);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=id(e),{host:o,port:c}=Zp(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Jp()}function id(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zp(n){const e=id(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jc(o)}}}function Jc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ha{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function sd(n,e){return Bn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function C0(n,e){return ai(n,"POST","/v1/accounts:signInWithPassword",or(n,e))}/**
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
 */async function e_(n,e){return ai(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}async function t_(n,e){return ai(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}/**
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
 */class Vr extends ha{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Vr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Vr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Li(e,r,"signInWithPassword");return C0(e,i)}else return C0(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Li(e,r,"signInWithPassword");return C0(e,s)}else return Promise.reject(i)});case"emailLink":return e_(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return sd(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return t_(e,{idToken:t,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qn(n,e){return ai(n,"POST","/v1/accounts:signInWithIdp",or(n,e))}/**
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
 */const n_="http://localhost";class En extends ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):At("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ca(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new En(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,qn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qn(e,t)}buildRequest(){const e={requestUri:n_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ir(t)}return e}}/**
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
 */function r_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function i_(n){const e=Fr(kr(n)).link,t=e?Fr(kr(e)).deep_link_id:null,r=Fr(kr(n)).deep_link_id;return(r?Fr(kr(r)).link:null)||r||t||e||n}class xa{constructor(e){var t,r,i,s,o,c;const l=Fr(kr(e)),a=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=r_((i=l.mode)!==null&&i!==void 0?i:null);ne(a&&u&&h,"argument-error"),this.apiKey=a,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=i_(e);try{return new xa(t)}catch{return null}}}/**
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
 */class cr{constructor(){this.providerId=cr.PROVIDER_ID}static credential(e,t){return Vr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=xa.parseLink(t);return ne(r,"argument-error"),Vr._fromEmailAndCode(e,r.code,r.tenantId)}}cr.PROVIDER_ID="password";cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ci extends od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends ci{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class qt extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return qt.credential(t,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
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
 */class $t extends ci{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
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
 */class Vt extends ci{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vt.credential(t,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */async function y0(n,e){return ai(n,"POST","/v1/accounts:signUp",or(n,e))}/**
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
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await xn._fromIdTokenResponse(e,r,i),o=el(r);return new Cn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=el(r);return new Cn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function el(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Mi extends cn{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Mi(e,t,r,i)}}function ad(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mi._fromErrorAndOperation(n,s,e,r):s})}async function s_(n,e,t=!1){const r=await mn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Cn._forOperation(n,"link",r)}/**
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
 */async function o_(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await mn(n,ad(r,i,e,n),t);ne(s.idToken,r,"internal-error");const o=fa(s.idToken);ne(o,r,"internal-error");const{sub:c}=o;return ne(n.uid===c,r,"user-mismatch"),Cn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&At(r,"user-mismatch"),s}}/**
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
 */async function cd(n,e,t=!1){const r="signIn",i=await ad(n,r,e),s=await Cn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function a_(n,e){return cd(ar(n),e)}async function c_(n,e,t){var r;const i=ar(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Li(i,s,"signUpPassword");o=y0(i,a)}else o=y0(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Li(i,s,"signUpPassword");return y0(i,u)}else return Promise.reject(a)});const c=await o.catch(a=>Promise.reject(a)),l=await Cn._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(l.user),l}function tl(n,e,t){return a_(qe(n),cr.credential(e,t))}/**
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
 */async function l_(n,e){return Bn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function u_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=qe(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await mn(r,l_(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function f_(n,e){return d_(qe(n),null,e)}async function d_(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(s.password=t);const o=await mn(n,sd(r,s));await n._updateTokensIfNecessary(o,!0)}function h_(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function x_(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function p_(n,e,t,r){return qe(n).onAuthStateChanged(e,t,r)}const Hi="__sak";/**
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
 */class ld{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function __(){const n=je();return da(n)||as(n)}const v_=1e3,g_=10;class ud extends ld{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=__()&&Wp(),this.fallbackToPolling=Zf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Up()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,g_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},v_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ud.type="LOCAL";const m_=ud;/**
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
 */class fd extends ld{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fd.type="SESSION";const dd=fd;/**
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
 */function E_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async a=>a(t.origin,s)),l=await E_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cs.receivers=[];/**
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
 */function pa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class C_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const a=pa("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===a)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:a,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ft(){return window}function y_(n){Ft().location.href=n}/**
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
 */function hd(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function A_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function D_(){return hd()?self:null}/**
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
 */const xd="firebaseLocalStorageDb",w_=1,Ui="firebaseLocalStorage",pd="fbase_key";class li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ls(n,e){return n.transaction([Ui],e?"readwrite":"readonly").objectStore(Ui)}function B_(){const n=indexedDB.deleteDatabase(xd);return new li(n).toPromise()}function ko(){const n=indexedDB.open(xd,w_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ui,{keyPath:pd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ui)?e(r):(r.close(),await B_(),e(await ko()))})})}async function nl(n,e,t){const r=ls(n,!0).put({[pd]:e,value:t});return new li(r).toPromise()}async function F_(n,e){const t=ls(n,!1).get(e),r=await new li(t).toPromise();return r===void 0?null:r.value}function rl(n,e){const t=ls(n,!0).delete(e);return new li(t).toPromise()}const k_=800,I_=3;class _d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ko(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>I_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(D_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await A_(),!this.activeServiceWorker)return;this.sender=new C_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||b_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ko();return await nl(e,Hi,"1"),await rl(e,Hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>F_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ls(i,!1).getAll();return new li(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_d.type="LOCAL";const S_=_d;new oi(3e4,6e4);/**
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
 */function T_(n,e){return e?Pt(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _a extends ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function R_(n){return cd(n.auth,new _a(n),n.bypassAuthState)}function P_(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),o_(t,new _a(n),n.bypassAuthState)}async function N_(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),s_(t,new _a(n),n.bypassAuthState)}/**
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
 */class vd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(a){this.reject(a)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R_;case"linkViaPopup":case"linkViaRedirect":return N_;case"reauthViaPopup":case"reauthViaRedirect":return P_;default:At(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O_=new oi(2e3,1e4);class On extends vd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O_.get())};e()}}On.currentPopupAction=null;/**
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
 */const L_="pendingRedirect",Ai=new Map;class M_ extends vd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ai.get(this.auth._key());if(!e){try{const r=await H_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ai.set(this.auth._key(),e)}return this.bypassAuthState||Ai.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H_(n,e){const t=z_(e),r=W_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function U_(n,e){Ai.set(n._key(),e)}function W_(n){return Pt(n._redirectPersistence)}function z_(n){return yi(L_,n.config.apiKey,n.name)}async function q_(n,e,t=!1){const r=ar(n),i=T_(r,e),o=await new M_(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $_=10*60*1e3;class V_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!G_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Bt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$_&&this.cachedEventUids.clear(),this.cachedEventUids.has(il(e))}saveEventToCache(e){this.cachedEventUids.add(il(e)),this.lastProcessedEventTime=Date.now()}}function il(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function G_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gd(n);default:return!1}}/**
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
 */async function j_(n,e={}){return Bn(n,"GET","/v1/projects",e)}/**
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
 */const K_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y_=/^https?/;async function X_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await j_(n);for(const t of e)try{if(Q_(t))return}catch{}At(n,"unauthorized-domain")}function Q_(n){const e=Fo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Y_.test(t))return!1;if(K_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Z_=new oi(3e4,6e4);function sl(){const n=Ft().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function J_(n){return new Promise((e,t)=>{var r,i,s;function o(){sl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sl(),t(Bt(n,"network-request-failed"))},timeout:Z_.get()})}if(!((i=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ft().gapi)===null||s===void 0)&&s.load)o();else{const c=qp("iframefcb");return Ft()[c]=()=>{gapi.load?o():t(Bt(n,"network-request-failed"))},nd(`https://apis.google.com/js/api.js?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw bi=null,e})}let bi=null;function ev(n){return bi=bi||J_(n),bi}/**
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
 */const tv=new oi(5e3,15e3),nv="__/auth/iframe",rv="emulator/auth/iframe",iv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ov(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ua(e,rv):`https://${n.config.authDomain}/${nv}`,r={apiKey:e.apiKey,appName:n.name,v:sr},i=sv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ir(r).slice(1)}`}async function av(n){const e=await ev(n),t=Ft().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:ov(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(n,"network-request-failed"),c=Ft().setTimeout(()=>{s(o)},tv.get());function l(){Ft().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const cv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lv=500,uv=600,fv="_blank",dv="http://localhost";class ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hv(n,e,t,r=lv,i=uv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},cv),{width:r.toString(),height:i.toString(),top:s,left:o}),a=je().toLowerCase();t&&(c=jf(a)?fv:t),Gf(a)&&(e=e||dv,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,x])=>`${f}${d}=${x},`,"");if(Hp(a)&&c!=="_self")return xv(e||"",c),new ol(null);const h=window.open(e||"",c,u);ne(h,n,"popup-blocked");try{h.focus()}catch{}return new ol(h)}function xv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const pv="__/auth/handler",_v="emulator/auth/handler",vv=encodeURIComponent("fac");async function al(n,e,t,r,i,s){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:sr,eventId:i};if(e instanceof od){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof ci){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await n._getAppCheckToken(),a=l?`#${vv}=${encodeURIComponent(l)}`:"";return`${gv(n)}?${ir(c).slice(1)}${a}`}function gv({config:n}){return n.emulator?ua(n,_v):`https://${n.authDomain}/${pv}`}/**
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
 */const A0="webStorageSupport";class mv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dd,this._completeRedirectFn=q_,this._overrideRedirectResult=U_}async _openPopup(e,t,r,i){var s;Lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await al(e,t,r,Fo(),i);return hv(e,o,pa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await al(e,t,r,Fo(),i);return y_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await av(e),r=new V_(e);return t.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(A0,{type:A0},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[A0];o!==void 0&&t(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=X_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zf()||da()||as()}}const Ev=mv;var cl="@firebase/auth",ll="0.23.2";/**
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
 */class Cv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Av(n){Qn(new vn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jf(n)},a=new Kp(r,i,s,l);return Xp(a,t),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new vn("auth-internal",e=>{const t=ar(e.getProvider("auth").getImmediate());return(r=>new Cv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(cl,ll,yv(n)),Xt(cl,ll,"esm2017")}/**
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
 */const bv=5*60,Dv=Tf("authIdTokenMaxAge")||bv;let ul=null;const wv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Dv)return;const i=t==null?void 0:t.token;ul!==i&&(ul=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bv(n=si()){const e=aa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Yp(n,{popupRedirectResolver:Ev,persistence:[S_,m_,dd]}),r=Tf("authTokenSyncURL");if(r){const s=wv(r);x_(t,s,()=>s(t.currentUser)),h_(t,o=>s(o))}const i=If("auth");return i&&Qp(t,`http://${i}`),t}Av("Browser");var fl={};const dl="@firebase/database",hl="0.14.4";/**
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
 */let md="";function Fv(n){md=n}/**
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
 */class kv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:zr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Iv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return It(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ed=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kv(e)}}catch{}return new Iv},dn=Ed("localStorage"),Sv=Ed("sessionStorage");/**
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
 */const $n=new sa("@firebase/database"),Tv=function(){let n=1;return function(){return n++}}(),Cd=function(n){const e=d1(n),t=new c1;t.update(e);const r=t.digest();return na.encodeByteArray(r)},ui=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ui.apply(null,r):typeof r=="object"?e+=Te(r):e+=r,e+=" "}return e};let Rr=null,xl=!0;const Rv=function(n,e){q(!0,"Can't turn on custom loggers persistently."),$n.logLevel=_e.VERBOSE,Rr=$n.log.bind($n)},We=function(...n){if(xl===!0&&(xl=!1,Rr===null&&Sv.get("logging_enabled")===!0&&Rv()),Rr){const e=ui.apply(null,n);Rr(e)}},fi=function(n){return function(...e){We(n,...e)}},Io=function(...n){const e="FIREBASE INTERNAL ERROR: "+ui(...n);$n.error(e)},Mt=function(...n){const e=`FIREBASE FATAL ERROR: ${ui(...n)}`;throw $n.error(e),new Error(e)},et=function(...n){const e="FIREBASE WARNING: "+ui(...n);$n.warn(e)},Pv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},va=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Nv=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},yn="[MIN_NAME]",nn="[MAX_NAME]",Fn=function(n,e){if(n===e)return 0;if(n===yn||e===nn)return-1;if(e===yn||n===nn)return 1;{const t=pl(n),r=pl(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Ov=function(n,e){return n===e?0:n<e?-1:1},br=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Te(e))},ga=function(n){if(typeof n!="object"||n===null)return Te(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Te(e[r]),t+=":",t+=ga(n[e[r]]);return t+="}",t},yd=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function ze(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ad=function(n){q(!va(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,c,l;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=c+r,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const a=[];for(l=t;l;l-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)a.push(s%2?1:0),s=Math.floor(s/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Lv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Mv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hv(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const Uv=new RegExp("^-?(0*)\\d{1,10}$"),Wv=-2147483648,zv=2147483647,pl=function(n){if(Uv.test(n)){const e=Number(n);if(e>=Wv&&e<=zv)return e}return null},lr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw et("Exception was thrown by user callback.",t),e},Math.floor(0))}},qv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $v{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Vv{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class Di{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Di.OWNER="owner";/**
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
 */const ma="5",bd="v",Dd="s",wd="r",Bd="f",Fd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kd="ls",Id="p",So="ac",Sd="websocket",Td="long_polling";/**
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
 */class Rd{constructor(e,t,r,i,s=!1,o="",c=!1,l=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Gv(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Pd(n,e,t){q(typeof e=="string","typeof type must == string"),q(typeof t=="object","typeof params must == object");let r;if(e===Sd)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Td)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gv(n)&&(t.ns=n.namespace);const i=[];return ze(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class jv{constructor(){this.counters_={}}incrementCounter(e,t=1){It(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return $x(this.counters_)}}/**
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
 */const b0={},D0={};function Ea(n){const e=n.toString();return b0[e]||(b0[e]=new jv),b0[e]}function Kv(n,e){const t=n.toString();return D0[t]||(D0[t]=e()),D0[t]}/**
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
 */class Yv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&lr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _l="start",Xv="close",Qv="pLPCommand",Zv="pRTLPCB",Nd="id",Od="pw",Ld="ser",Jv="cb",eg="seg",tg="ts",ng="d",rg="dframe",Md=1870,Hd=30,ig=Md-Hd,sg=25e3,og=3e4;class Ln{constructor(e,t,r,i,s,o,c){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fi(e),this.stats_=Ea(t),this.urlFn=l=>(this.appCheckToken&&(l[So]=this.appCheckToken),Pd(t,Td,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Yv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(og)),Nv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ca((...s)=>{const[o,c,l,a,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_l)this.id=c,this.password=l;else if(o===Xv)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,c]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const r={};r[_l]="t",r[Ld]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Jv]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bd]=ma,this.transportSessionId&&(r[Dd]=this.transportSessionId),this.lastSessionId&&(r[kd]=this.lastSessionId),this.applicationId&&(r[Id]=this.applicationId),this.appCheckToken&&(r[So]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fd.test(location.hostname)&&(r[wd]=Bd);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ln.forceAllow_=!0}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){return Ln.forceAllow_?!0:!Ln.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Lv()&&!Mv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Ff(t),i=yd(r,ig);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[rg]="t",r[Nd]=e,r[Od]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Te(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ca{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Tv(),window[Qv+this.uniqueCallbackIdentifier]=e,window[Zv+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ca.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){We("frame writing exception"),c.stack&&We(c.stack),We(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nd]=this.myID,e[Od]=this.myPW,e[Ld]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hd+r.length<=Md;){const o=this.pendingSegs.shift();r=r+"&"+eg+i+"="+o.seg+"&"+tg+i+"="+o.ts+"&"+ng+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(sg)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const ag=16384,cg=45e3;let Wi=null;typeof MozWebSocket<"u"?Wi=MozWebSocket:typeof WebSocket<"u"&&(Wi=WebSocket);class Et{constructor(e,t,r,i,s,o,c){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fi(this.connId),this.stats_=Ea(t),this.connURL=Et.connectionURL_(t,o,c,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[bd]=ma,typeof location<"u"&&location.hostname&&Fd.test(location.hostname)&&(o[wd]=Bd),t&&(o[Dd]=t),r&&(o[kd]=r),i&&(o[So]=i),s&&(o[Id]=s),Pd(e,Sd,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dn.set("previous_websocket_failure",!0);try{let r;e1(),this.mySock=new Wi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Wi!==null&&!Et.forceDisallow_}static previouslyFailed(){return dn.isInMemoryStorage||dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=zr(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(q(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=yd(t,ag);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
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
 */class Gr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ln,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Et&&Et.isAvailable();let r=t&&!Et.previouslyFailed();if(e.webSocketOnly&&(t||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Et];else{const i=this.transports_=[];for(const s of Gr.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Gr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gr.globalTransportInitialized_=!1;/**
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
 */const lg=6e4,ug=5e3,fg=10*1024,dg=100*1024,w0="t",vl="d",hg="s",gl="r",xg="e",ml="o",El="a",Cl="n",yl="p",pg="h";class _g{constructor(e,t,r,i,s,o,c,l,a,u){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fi("c:"+this.id+":"),this.transportManager_=new Gr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(w0 in e){const t=e[w0];t===El?this.upgradeIfSecondaryHealthy_():t===gl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ml&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=br("t",e),r=br("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:El,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=br("t",e),r=br("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=br(w0,e);if(vl in e){const r=e[vl];if(t===pg){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Cl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hg?this.onConnectionShutdown_(r):t===gl?this.onReset_(r):t===xg?Io("Server Error: "+r):t===ml?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Io("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ma!==r&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Pr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ug))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ud{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Wd{constructor(e){this.allowedEvents_=e,this.listeners_={},q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){q(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class zi extends Wd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ia()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zi}getInitialEvent(e){return q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Al=32,bl=768;class ve{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function de(){return new ve("")}function ce(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function rn(n){return n.pieces_.length-n.pieceNum_}function Ae(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ve(n.pieces_,e)}function ya(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function vg(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function jr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function zd(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ve(e,0)}function Be(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new ve(t,0)}function se(n){return n.pieceNum_>=n.pieces_.length}function Je(n,e){const t=ce(n),r=ce(e);if(t===null)return e;if(t===r)return Je(Ae(n),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function gg(n,e){const t=jr(n,0),r=jr(e,0);for(let i=0;i<t.length&&i<r.length;i++){const s=Fn(t[i],r[i]);if(s!==0)return s}return t.length===r.length?0:t.length<r.length?-1:1}function qd(n,e){if(rn(n)!==rn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function ut(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(rn(n)>rn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class mg{constructor(e,t){this.errorPrefix_=t,this.parts_=jr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ss(this.parts_[r]);$d(this)}}function Eg(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ss(e),$d(n)}function Cg(n){const e=n.parts_.pop();n.byteLength_-=ss(e),n.parts_.length>0&&(n.byteLength_-=1)}function $d(n){if(n.byteLength_>bl)throw new Error(n.errorPrefix_+"has a key path longer than "+bl+" bytes ("+n.byteLength_+").");if(n.parts_.length>Al)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Al+") or object contains a cycle "+fn(n))}function fn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Aa extends Wd{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Aa}getInitialEvent(e){return q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Dr=1e3,yg=60*5*1e3,Dl=30*1e3,Ag=1.3,bg=3e4,Dg="server_kill",wl=3;class Ot extends Ud{constructor(e,t,r,i,s,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=Ot.nextPersistentConnectionId_++,this.log_=fi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dr,this.maxReconnectDelay_=yg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Aa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Te(s)),q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new ri,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),q(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,c=>{const l=c.d,a=c.s;Ot.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",c),a!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(a,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&It(e,"w")){const r=Xn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||a1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=o1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Io("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bg&&(this.reconnectDelay_=Dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ag)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,r())},a=function(h){q(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(h)};this.realtime_={close:l,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,c=new _g(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,d=>{et(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dg)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&et(h),l())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yo(this.interruptReasons_)&&(this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>ga(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){We("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wl&&(this.reconnectDelay_=Dl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){We("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+md.replace(/\./g,"-")]=1,ia()?e["framework.cordova"]=1:Rf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zi.getInstance().currentlyOnline();return yo(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
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
 */class ie{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ie(e,t)}}/**
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
 */class us{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new ie(yn,e),i=new ie(yn,t);return this.compare(r,i)!==0}minPost(){return ie.MIN}}/**
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
 */let gi;class Vd extends us{static get __EMPTY_NODE(){return gi}static set __EMPTY_NODE(e){gi=e}compare(e,t){return Fn(e.name,t.name)}isDefinedOn(e){throw rr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ie.MIN}maxPost(){return new ie(nn,gi)}makePost(e,t){return q(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,gi)}toString(){return".key"}}const Qt=new Vd;/**
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
 */class mi{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=i??rt.EMPTY_NODE,this.right=s??rt.EMPTY_NODE}copy(e,t,r,i,s){return new Ne(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class wg{copy(e,t,r,i,s){return this}insert(e,t,r){return new Ne(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,t=rt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new rt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new mi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new mi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new mi(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new wg;/**
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
 */function Bg(n,e){return Fn(n.name,e.name)}function ba(n,e){return Fn(n,e)}/**
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
 */let To;function Fg(n){To=n}const Gd=function(n){return typeof n=="number"?"number:"+Ad(n):"string:"+n},jd=function(n){if(n.isLeafNode()){const e=n.val();q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&It(e,".sv"),"Priority must be a string or number.")}else q(n===To||n.isEmpty(),"priority of unexpected type.");q(n===To||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Bl;class Pe{constructor(e,t=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jd(this.priorityNode_)}static set __childrenNodeConstructor(e){Bl=e}static get __childrenNodeConstructor(){return Bl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ce(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=ce(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(q(r!==".priority"||rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gd(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ad(this.value_):e+=this.value_,this.lazyHash_=Cd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(t),s=Pe.VALUE_TYPE_ORDER.indexOf(r);return q(i>=0,"Unknown leaf type: "+t),q(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Kd,Yd;function kg(n){Kd=n}function Ig(n){Yd=n}class Sg extends us{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?Fn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(nn,new Pe("[PRIORITY-POST]",Yd))}makePost(e,t){const r=Kd(e);return new ie(t,new Pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const we=new Sg;/**
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
 */const Tg=Math.log(2);class Rg{constructor(e){const t=s=>parseInt(Math.log(s)/Tg,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qi=function(n,e,t,r){n.sort(e);const i=function(l,a){const u=a-l;let h,f;if(u===0)return null;if(u===1)return h=n[l],f=t?t(h):h,new Ne(f,h.node,Ne.BLACK,null,null);{const d=parseInt(u/2,10)+l,x=i(l,d),g=i(d+1,a);return h=n[d],f=t?t(h):h,new Ne(f,h.node,Ne.BLACK,x,g)}},s=function(l){let a=null,u=null,h=n.length;const f=function(x,g){const p=h-x,E=h;h-=x;const v=i(p+1,E),_=n[p],m=t?t(_):_;d(new Ne(m,_.node,g,null,v))},d=function(x){a?(a.left=x,a=x):(u=x,a=x)};for(let x=0;x<l.count;++x){const g=l.nextBitIsOne(),p=Math.pow(2,l.count-(x+1));g?f(p,Ne.BLACK):(f(p,Ne.BLACK),f(p,Ne.RED))}return u},o=new Rg(n.length),c=s(o);return new rt(r||e,c)};/**
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
 */let B0;const Pn={};class Nt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return q(Pn&&we,"ChildrenNode.ts has not been loaded"),B0=B0||new Nt({".priority":Pn},{".priority":we}),B0}get(e){const t=Xn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof rt?t:null}hasIndex(e){return It(this.indexSet_,e.toString())}addIndex(e,t){q(e!==Qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let c;i?c=qi(r,e.getCompare()):c=Pn;const l=e.toString(),a=Object.assign({},this.indexSet_);a[l]=e;const u=Object.assign({},this.indexes_);return u[l]=c,new Nt(u,a)}addToIndexes(e,t){const r=Ti(this.indexes_,(i,s)=>{const o=Xn(this.indexSet_,s);if(q(o,"Missing index implementation for "+s),i===Pn)if(o.isDefinedOn(e.node)){const c=[],l=t.getIterator(ie.Wrap);let a=l.getNext();for(;a;)a.name!==e.name&&c.push(a),a=l.getNext();return c.push(e),qi(c,o.getCompare())}else return Pn;else{const c=t.get(e.name);let l=i;return c&&(l=l.remove(new ie(e.name,c))),l.insert(e,e.node)}});return new Nt(r,this.indexSet_)}removeFromIndexes(e,t){const r=Ti(this.indexes_,i=>{if(i===Pn)return i;{const s=t.get(e.name);return s?i.remove(new ie(e.name,s)):i}});return new Nt(r,this.indexSet_)}}/**
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
 */let wr;class ee{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jd(this.priorityNode_),this.children_.isEmpty()&&q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wr||(wr=new ee(new rt(ba),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wr}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?wr:t}}getChild(e){const t=ce(e);return t===null?this:this.getImmediateChild(t).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(q(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new ie(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wr:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,t){const r=ce(e);if(r===null)return t;{q(ce(e)!==".priority"||rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ae(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(we,(o,c)=>{t[o]=c.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gd(this.getPriority().val())+":"),this.forEachChild(we,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Cd(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ie(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ie(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ie(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===di?-1:0}withIndex(e){if(e===Qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(we),i=t.getIterator(we);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qt?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Pg extends ee{constructor(){super(new rt(ba),ee.EMPTY_NODE,Nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const di=new Pg;Object.defineProperties(ie,{MIN:{value:new ie(yn,ee.EMPTY_NODE)},MAX:{value:new ie(nn,di)}});Vd.__EMPTY_NODE=ee.EMPTY_NODE;Pe.__childrenNodeConstructor=ee;Fg(di);Ig(di);/**
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
 */const Ng=!0;function Se(n,e=null){if(n===null)return ee.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Pe(t,Se(e))}if(!(n instanceof Array)&&Ng){const t=[];let r=!1;if(ze(n,(o,c)=>{if(o.substring(0,1)!=="."){const l=Se(c);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new ie(o,l)))}}),t.length===0)return ee.EMPTY_NODE;const s=qi(t,Bg,o=>o.name,ba);if(r){const o=qi(t,we.getCompare());return new ee(s,Se(e),new Nt({".priority":o},{".priority":we}))}else return new ee(s,Se(e),Nt.Default)}else{let t=ee.EMPTY_NODE;return ze(n,(r,i)=>{if(It(n,r)&&r.substring(0,1)!=="."){const s=Se(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(Se(e))}}kg(Se);/**
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
 */class Xd extends us{constructor(e){super(),this.indexPath_=e,q(!se(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?Fn(e.name,t.name):s}makePost(e,t){const r=Se(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(t,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,di);return new ie(nn,e)}toString(){return jr(this.indexPath_,0).join("/")}}/**
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
 */class Og extends us{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Fn(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,t){const r=Se(e);return new ie(t,r)}toString(){return".value"}}const Qd=new Og;/**
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
 */function Zd(n){return{type:"value",snapshotNode:n}}function Zn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Kr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Yr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Lg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Da{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){q(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(i).equals(r.getChild(i))&&c.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Kr(t,c)):q(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(Zn(t,r)):o.trackChildChange(Yr(t,r,c))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(we,(i,s)=>{t.hasChild(i)||r.trackChildChange(Kr(i,s))}),t.isLeafNode()||t.forEachChild(we,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Yr(i,s,o))}else r.trackChildChange(Zn(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xr{constructor(e){this.indexedFilter_=new Da(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xr.getStartPost_(e),this.endPost_=Xr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new ie(t,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ee.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return t.forEachChild(we,(o,c)=>{s.matches(new ie(o,c))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Mg{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new ie(t,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const c=s.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))i=i.updateImmediateChild(c.name,c.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const c=s.getNext();o<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?o++:i=i.updateImmediateChild(c.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const c=e;q(c.numChildren()===this.limit_,"");const l=new ie(t,r),a=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(c.hasChild(t)){const h=c.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===t||c.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,l);if(u&&!r.isEmpty()&&d>=0)return s!=null&&s.trackChildChange(Yr(t,r,h)),c.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(Kr(t,h));const g=c.updateImmediateChild(t,ee.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Zn(f.name,f.node)),g.updateImmediateChild(f.name,f.node)):g}}else return r.isEmpty()?e:u&&o(a,l)>=0?(s!=null&&(s.trackChildChange(Kr(a.name,a.node)),s.trackChildChange(Zn(t,r))),c.updateImmediateChild(t,r).updateImmediateChild(a.name,ee.EMPTY_NODE)):e}}/**
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
 */class wa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yn}hasEnd(){return this.endSet_}getIndexEndValue(){return q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new wa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hg(n){return n.loadsAllData()?new Da(n.getIndex()):n.hasLimit()?new Mg(n):new Xr(n)}function Ug(n,e){const t=n.copy();return t.index_=e,t}function Fl(n){const e={};if(n.isDefault())return e;let t;if(n.index_===we?t="$priority":n.index_===Qd?t="$value":n.index_===Qt?t="$key":(q(n.index_ instanceof Xd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Te(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Te(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Te(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Te(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Te(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function kl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==we&&(e.i=n.index_.toString()),e}/**
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
 */class $i extends Ud{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=fi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=$i.getListenId_(e,r),c={};this.listens_[o]=c;const l=Fl(e._queryParams);this.restRequest_(s+".json",l,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(s,h,!1,r),Xn(this.listens_,o)===c){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,t){const r=$i.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Fl(e._queryParams),r=e._path.toString(),i=new ri;return this.restRequest_(r+".json",t,(s,o)=>{let c=o;s===404&&(c=null,s=null),s===null?(this.onDataUpdate_(r,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ir(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(r&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=zr(c.responseText)}catch{et("Failed to parse JSON response for "+o+": "+c.responseText)}r(null,l)}else c.status!==401&&c.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+c.status),r(c.status);r=null}},c.open("GET",o,!0),c.send()})}}/**
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
 */class Wg{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Vi(){return{value:null,children:new Map}}function Jd(n,e,t){if(se(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=ce(e);n.children.has(r)||n.children.set(r,Vi());const i=n.children.get(r);e=Ae(e),Jd(i,e,t)}}function Ro(n,e,t){n.value!==null?t(e,n.value):zg(n,(r,i)=>{const s=new ve(e.toString()+"/"+r);Ro(i,s,t)})}function zg(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class qg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ze(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const Il=10*1e3,$g=30*1e3,Vg=5*60*1e3;class Gg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qg(e);const r=Il+($g-Il)*Math.random();Pr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;ze(e,(i,s)=>{s>0&&It(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),Pr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Vg))}}/**
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
 */var Ct;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ct||(Ct={}));function Ba(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ka(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Gi{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Ct.ACK_USER_WRITE,this.source=Ba()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ve(e));return new Gi(de(),t,this.revert)}}else return q(ce(this.path)===e,"operationForChild called for unrelated child."),new Gi(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qr{constructor(e,t){this.source=e,this.path=t,this.type=Ct.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Qr(this.source,de()):new Qr(this.source,Ae(this.path))}}/**
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
 */class An{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Ct.OVERWRITE}operationForChild(e){return se(this.path)?new An(this.source,de(),this.snap.getImmediateChild(e)):new An(this.source,Ae(this.path),this.snap)}}/**
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
 */class Jn{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Ct.MERGE}operationForChild(e){if(se(this.path)){const t=this.children.subtree(new ve(e));return t.isEmpty()?null:t.value?new An(this.source,de(),t.value):new Jn(this.source,de(),t)}else return q(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jn(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class sn{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const t=ce(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class jg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Kg(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Lg(o.childName,o.snapshotNode))}),Br(n,i,"child_removed",e,r,t),Br(n,i,"child_added",e,r,t),Br(n,i,"child_moved",s,r,t),Br(n,i,"child_changed",e,r,t),Br(n,i,"value",e,r,t),i}function Br(n,e,t,r,i,s){const o=r.filter(c=>c.type===t);o.sort((c,l)=>Xg(n,c,l)),o.forEach(c=>{const l=Yg(n,c,s);i.forEach(a=>{a.respondsTo(c.type)&&e.push(a.createEvent(l,n.query_))})})}function Yg(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Xg(n,e,t){if(e.childName==null||t.childName==null)throw rr("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),i=new ie(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function fs(n,e){return{eventCache:n,serverCache:e}}function Nr(n,e,t,r){return fs(new sn(e,t,r),n.serverCache)}function eh(n,e,t,r){return fs(n.eventCache,new sn(e,t,r))}function ji(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function bn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let F0;const Qg=()=>(F0||(F0=new rt(Ov)),F0);class ye{constructor(e,t=Qg()){this.value=e,this.children=t}static fromObject(e){let t=new ye(null);return ze(e,(r,i)=>{t=t.set(new ve(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:de(),value:this.value};if(se(e))return null;{const r=ce(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ae(e),t);return s!=null?{path:Be(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const t=ce(e),r=this.children.get(t);return r!==null?r.subtree(Ae(e)):new ye(null)}}set(e,t){if(se(e))return new ye(t,this.children);{const r=ce(e),s=(this.children.get(r)||new ye(null)).set(Ae(e),t),o=this.children.insert(r,s);return new ye(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const t=ce(e),r=this.children.get(t);if(r){const i=r.remove(Ae(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new ye(null):new ye(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const t=ce(e),r=this.children.get(t);return r?r.get(Ae(e)):null}}setTree(e,t){if(se(e))return t;{const r=ce(e),s=(this.children.get(r)||new ye(null)).setTree(Ae(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ye(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,de(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(se(e))return null;{const s=ce(e),o=this.children.get(s);return o?o.findOnPath_(Ae(e),Be(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,de(),t)}foreachOnPath_(e,t,r){if(se(e))return this;{this.value&&r(t,this.value);const i=ce(e),s=this.children.get(i);return s?s.foreachOnPath_(Ae(e),Be(t,i),r):new ye(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new ye(null))}}function Or(n,e,t){if(se(e))return new yt(new ye(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Je(i,e);return s=s.updateChild(o,t),new yt(n.writeTree_.set(i,s))}else{const i=new ye(t),s=n.writeTree_.setTree(e,i);return new yt(s)}}}function Po(n,e,t){let r=n;return ze(t,(i,s)=>{r=Or(r,Be(e,i),s)}),r}function Sl(n,e){if(se(e))return yt.empty();{const t=n.writeTree_.setTree(e,new ye(null));return new yt(t)}}function No(n,e){return kn(n,e)!=null}function kn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Je(t.path,e)):null}function Tl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(we,(r,i)=>{e.push(new ie(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ie(r,i.value))}),e}function Zt(n,e){if(se(e))return n;{const t=kn(n,e);return t!=null?new yt(new ye(t)):new yt(n.writeTree_.subtree(e))}}function Oo(n){return n.writeTree_.isEmpty()}function er(n,e){return th(de(),n.writeTree_,e)}function th(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(q(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=th(Be(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Be(n,".priority"),r)),t}}/**
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
 */function ds(n,e){return sh(e,n)}function Zg(n,e,t,r,i){q(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=Or(n.visibleWrites,e,t)),n.lastWriteId=r}function Jg(n,e,t,r){q(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Po(n.visibleWrites,e,t),n.lastWriteId=r}function e2(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function t2(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);q(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&n2(c,r.path)?i=!1:ut(r.path,c.path)&&(s=!0)),o--}if(i){if(s)return r2(n),!0;if(r.snap)n.visibleWrites=Sl(n.visibleWrites,r.path);else{const c=r.children;ze(c,l=>{n.visibleWrites=Sl(n.visibleWrites,Be(r.path,l))})}return!0}else return!1}function n2(n,e){if(n.snap)return ut(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ut(Be(n.path,t),e))return!0;return!1}function r2(n){n.visibleWrites=nh(n.allWrites,i2,de()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function i2(n){return n.visible}function nh(n,e,t){let r=yt.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let c;if(s.snap)ut(t,o)?(c=Je(t,o),r=Or(r,c,s.snap)):ut(o,t)&&(c=Je(o,t),r=Or(r,de(),s.snap.getChild(c)));else if(s.children){if(ut(t,o))c=Je(t,o),r=Po(r,c,s.children);else if(ut(o,t))if(c=Je(o,t),se(c))r=Po(r,de(),s.children);else{const l=Xn(s.children,ce(c));if(l){const a=l.getChild(Ae(c));r=Or(r,de(),a)}}}else throw rr("WriteRecord should have .snap or .children")}}return r}function rh(n,e,t,r,i){if(!r&&!i){const s=kn(n.visibleWrites,e);if(s!=null)return s;{const o=Zt(n.visibleWrites,e);if(Oo(o))return t;if(t==null&&!No(o,de()))return null;{const c=t||ee.EMPTY_NODE;return er(o,c)}}}else{const s=Zt(n.visibleWrites,e);if(!i&&Oo(s))return t;if(!i&&t==null&&!No(s,de()))return null;{const o=function(a){return(a.visible||i)&&(!r||!~r.indexOf(a.writeId))&&(ut(a.path,e)||ut(e,a.path))},c=nh(n.allWrites,o,e),l=t||ee.EMPTY_NODE;return er(c,l)}}}function s2(n,e,t){let r=ee.EMPTY_NODE;const i=kn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(we,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=Zt(n.visibleWrites,e);return t.forEachChild(we,(o,c)=>{const l=er(Zt(s,new ve(o)),c);r=r.updateImmediateChild(o,l)}),Tl(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Zt(n.visibleWrites,e);return Tl(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function o2(n,e,t,r,i){q(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,t);if(No(n.visibleWrites,s))return null;{const o=Zt(n.visibleWrites,s);return Oo(o)?i.getChild(t):er(o,i.getChild(t))}}function a2(n,e,t,r){const i=Be(e,t),s=kn(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=Zt(n.visibleWrites,i);return er(o,r.getNode().getImmediateChild(t))}else return null}function c2(n,e){return kn(n.visibleWrites,e)}function l2(n,e,t,r,i,s,o){let c;const l=Zt(n.visibleWrites,e),a=kn(l,de());if(a!=null)c=a;else if(t!=null)c=er(l,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const u=[],h=o.getCompare(),f=s?c.getReverseIteratorFrom(r,o):c.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<i;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function u2(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function Ki(n,e,t,r){return rh(n.writeTree,n.treePath,e,t,r)}function Ia(n,e){return s2(n.writeTree,n.treePath,e)}function Rl(n,e,t,r){return o2(n.writeTree,n.treePath,e,t,r)}function Yi(n,e){return c2(n.writeTree,Be(n.treePath,e))}function f2(n,e,t,r,i,s){return l2(n.writeTree,n.treePath,e,t,r,i,s)}function Sa(n,e,t){return a2(n.writeTree,n.treePath,e,t)}function ih(n,e){return sh(Be(n.treePath,e),n.writeTree)}function sh(n,e){return{treePath:n,writeTree:e}}/**
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
 */class d2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;q(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),q(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,Yr(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,Kr(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,Zn(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,Yr(r,e.snapshotNode,i.oldSnap));else throw rr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class h2{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const oh=new h2;class Ta{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sa(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bn(this.viewCache_),s=f2(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function x2(n){return{filter:n}}function p2(n,e){q(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),q(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function _2(n,e,t,r,i){const s=new d2;let o,c;if(t.type===Ct.OVERWRITE){const a=t;a.source.fromUser?o=Lo(n,e,a.path,a.snap,r,i,s):(q(a.source.fromServer,"Unknown source."),c=a.source.tagged||e.serverCache.isFiltered()&&!se(a.path),o=Xi(n,e,a.path,a.snap,r,i,c,s))}else if(t.type===Ct.MERGE){const a=t;a.source.fromUser?o=g2(n,e,a.path,a.children,r,i,s):(q(a.source.fromServer,"Unknown source."),c=a.source.tagged||e.serverCache.isFiltered(),o=Mo(n,e,a.path,a.children,r,i,c,s))}else if(t.type===Ct.ACK_USER_WRITE){const a=t;a.revert?o=C2(n,e,a.path,r,i,s):o=m2(n,e,a.path,a.affectedTree,r,i,s)}else if(t.type===Ct.LISTEN_COMPLETE)o=E2(n,e,t.path,r,s);else throw rr("Unknown operation type: "+t.type);const l=s.getChanges();return v2(e,o,l),{viewCache:o,changes:l}}function v2(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ji(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(Zd(ji(e)))}}function ah(n,e,t,r,i,s){const o=e.eventCache;if(Yi(r,t)!=null)return e;{let c,l;if(se(t))if(q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=bn(e),u=a instanceof ee?a:ee.EMPTY_NODE,h=Ia(r,u);c=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const a=Ki(r,bn(e));c=n.filter.updateFullNode(e.eventCache.getNode(),a,s)}else{const a=ce(t);if(a===".priority"){q(rn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Rl(r,t,u,l);h!=null?c=n.filter.updatePriority(u,h):c=o.getNode()}else{const u=Ae(t);let h;if(o.isCompleteForChild(a)){l=e.serverCache.getNode();const f=Rl(r,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=Sa(r,a,e.serverCache);h!=null?c=n.filter.updateChild(o.getNode(),a,h,u,i,s):c=o.getNode()}}return Nr(e,c,o.isFullyInitialized()||se(t),n.filter.filtersNodes())}}function Xi(n,e,t,r,i,s,o,c){const l=e.serverCache;let a;const u=o?n.filter:n.filter.getIndexedFilter();if(se(t))a=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(t,r);a=u.updateFullNode(l.getNode(),d,null)}else{const d=ce(t);if(!l.isCompleteForPath(t)&&rn(t)>1)return e;const x=Ae(t),p=l.getNode().getImmediateChild(d).updateChild(x,r);d===".priority"?a=u.updatePriority(l.getNode(),p):a=u.updateChild(l.getNode(),d,p,x,oh,null)}const h=eh(e,a,l.isFullyInitialized()||se(t),u.filtersNodes()),f=new Ta(i,h,s);return ah(n,h,t,i,f,c)}function Lo(n,e,t,r,i,s,o){const c=e.eventCache;let l,a;const u=new Ta(i,e,s);if(se(t))a=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Nr(e,a,!0,n.filter.filtersNodes());else{const h=ce(t);if(h===".priority")a=n.filter.updatePriority(e.eventCache.getNode(),r),l=Nr(e,a,c.isFullyInitialized(),c.isFiltered());else{const f=Ae(t),d=c.getNode().getImmediateChild(h);let x;if(se(f))x=r;else{const g=u.getCompleteChild(h);g!=null?ya(f)===".priority"&&g.getChild(zd(f)).isEmpty()?x=g:x=g.updateChild(f,r):x=ee.EMPTY_NODE}if(d.equals(x))l=e;else{const g=n.filter.updateChild(c.getNode(),h,x,f,u,o);l=Nr(e,g,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Pl(n,e){return n.eventCache.isCompleteForChild(e)}function g2(n,e,t,r,i,s,o){let c=e;return r.foreach((l,a)=>{const u=Be(t,l);Pl(e,ce(u))&&(c=Lo(n,c,u,a,i,s,o))}),r.foreach((l,a)=>{const u=Be(t,l);Pl(e,ce(u))||(c=Lo(n,c,u,a,i,s,o))}),c}function Nl(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Mo(n,e,t,r,i,s,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,a;se(t)?a=r:a=new ye(null).setTree(t,r);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),x=Nl(n,d,f);l=Xi(n,l,new ve(h),x,i,s,o,c)}}),a.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const x=e.serverCache.getNode().getImmediateChild(h),g=Nl(n,x,f);l=Xi(n,l,new ve(h),g,i,s,o,c)}}),l}function m2(n,e,t,r,i,s,o){if(Yi(i,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(se(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Xi(n,e,t,l.getNode().getChild(t),i,s,c,o);if(se(t)){let a=new ye(null);return l.getNode().forEachChild(Qt,(u,h)=>{a=a.set(new ve(u),h)}),Mo(n,e,t,a,i,s,c,o)}else return e}else{let a=new ye(null);return r.foreach((u,h)=>{const f=Be(t,u);l.isCompleteForPath(f)&&(a=a.set(u,l.getNode().getChild(f)))}),Mo(n,e,t,a,i,s,c,o)}}function E2(n,e,t,r,i){const s=e.serverCache,o=eh(e,s.getNode(),s.isFullyInitialized()||se(t),s.isFiltered());return ah(n,o,t,r,oh,i)}function C2(n,e,t,r,i,s){let o;if(Yi(r,t)!=null)return e;{const c=new Ta(r,e,i),l=e.eventCache.getNode();let a;if(se(t)||ce(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ki(r,bn(e));else{const h=e.serverCache.getNode();q(h instanceof ee,"serverChildren would be complete if leaf node"),u=Ia(r,h)}u=u,a=n.filter.updateFullNode(l,u,s)}else{const u=ce(t);let h=Sa(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?a=n.filter.updateChild(l,u,h,Ae(t),c,s):e.eventCache.getNode().hasChild(u)?a=n.filter.updateChild(l,u,ee.EMPTY_NODE,Ae(t),c,s):a=l,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ki(r,bn(e)),o.isLeafNode()&&(a=n.filter.updateFullNode(a,o,s)))}return o=e.serverCache.isFullyInitialized()||Yi(r,de())!=null,Nr(e,a,o,n.filter.filtersNodes())}}/**
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
 */class y2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Da(r.getIndex()),s=Hg(r);this.processor_=x2(s);const o=t.serverCache,c=t.eventCache,l=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),a=s.updateFullNode(ee.EMPTY_NODE,c.getNode(),null),u=new sn(l,o.isFullyInitialized(),i.filtersNodes()),h=new sn(a,c.isFullyInitialized(),s.filtersNodes());this.viewCache_=fs(h,u),this.eventGenerator_=new jg(this.query_)}get query(){return this.query_}}function A2(n){return n.viewCache_.serverCache.getNode()}function b2(n){return ji(n.viewCache_)}function D2(n,e){const t=bn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!se(e)&&!t.getImmediateChild(ce(e)).isEmpty())?t.getChild(e):null}function Ol(n){return n.eventRegistrations_.length===0}function w2(n,e){n.eventRegistrations_.push(e)}function Ll(n,e,t){const r=[];if(t){q(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function Ml(n,e,t,r){e.type===Ct.MERGE&&e.source.queryId!==null&&(q(bn(n.viewCache_),"We should always have a full cache before handling merges"),q(ji(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=_2(n.processor_,i,e,t,r);return p2(n.processor_,s.viewCache),q(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,ch(n,s.changes,s.viewCache.eventCache.getNode(),null)}function B2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(we,(s,o)=>{r.push(Zn(s,o))}),t.isFullyInitialized()&&r.push(Zd(t.getNode())),ch(n,r,t.getNode(),e)}function ch(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return Kg(n.eventGenerator_,e,t,i)}/**
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
 */let Qi;class lh{constructor(){this.views=new Map}}function F2(n){q(!Qi,"__referenceConstructor has already been defined"),Qi=n}function k2(){return q(Qi,"Reference.ts has not been loaded"),Qi}function I2(n){return n.views.size===0}function Ra(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return q(s!=null,"SyncTree gave us an op for an invalid query."),Ml(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(Ml(o,e,t,r));return s}}function uh(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let c=Ki(t,i?r:null),l=!1;c?l=!0:r instanceof ee?(c=Ia(t,r),l=!1):(c=ee.EMPTY_NODE,l=!1);const a=fs(new sn(c,l,!1),new sn(r,i,!1));return new y2(e,a)}return o}function S2(n,e,t,r,i,s){const o=uh(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),w2(o,t),B2(o,t)}function T2(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const c=on(n);if(i==="default")for(const[l,a]of n.views.entries())o=o.concat(Ll(a,t,r)),Ol(a)&&(n.views.delete(l),a.query._queryParams.loadsAllData()||s.push(a.query));else{const l=n.views.get(i);l&&(o=o.concat(Ll(l,t,r)),Ol(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return c&&!on(n)&&s.push(new(k2())(e._repo,e._path)),{removed:s,events:o}}function fh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Jt(n,e){let t=null;for(const r of n.views.values())t=t||D2(r,e);return t}function dh(n,e){if(e._queryParams.loadsAllData())return hs(n);{const r=e._queryIdentifier;return n.views.get(r)}}function hh(n,e){return dh(n,e)!=null}function on(n){return hs(n)!=null}function hs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zi;function R2(n){q(!Zi,"__referenceConstructor has already been defined"),Zi=n}function P2(){return q(Zi,"Reference.ts has not been loaded"),Zi}let N2=1;class Hl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=u2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xh(n,e,t,r,i){return Zg(n.pendingWriteTree_,e,t,r,i),i?ur(n,new An(Ba(),e,t)):[]}function O2(n,e,t,r){Jg(n.pendingWriteTree_,e,t,r);const i=ye.fromObject(t);return ur(n,new Jn(Ba(),e,i))}function Gt(n,e,t=!1){const r=e2(n.pendingWriteTree_,e);if(t2(n.pendingWriteTree_,e)){let s=new ye(null);return r.snap!=null?s=s.set(de(),!0):ze(r.children,o=>{s=s.set(new ve(o),!0)}),ur(n,new Gi(r.path,s,t))}else return[]}function hi(n,e,t){return ur(n,new An(Fa(),e,t))}function L2(n,e,t){const r=ye.fromObject(t);return ur(n,new Jn(Fa(),e,r))}function M2(n,e){return ur(n,new Qr(Fa(),e))}function H2(n,e,t){const r=Na(n,t);if(r){const i=Oa(r),s=i.path,o=i.queryId,c=Je(s,e),l=new Qr(ka(o),c);return La(n,s,l)}else return[]}function ph(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let c=[];if(o&&(e._queryIdentifier==="default"||hh(o,e))){const l=T2(o,e,t,r);I2(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const a=l.removed;if(c=l.events,!i){const u=a.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(s,(f,d)=>on(d));if(u&&!h){const f=n.syncPointTree_.subtree(s);if(!f.isEmpty()){const d=q2(f);for(let x=0;x<d.length;++x){const g=d[x],p=g.query,E=mh(n,g);n.listenProvider_.startListening(Lr(p),Zr(n,p),E.hashFn,E.onComplete)}}}!h&&a.length>0&&!r&&(u?n.listenProvider_.stopListening(Lr(e),null):a.forEach(f=>{const d=n.queryToTagMap.get(xs(f));n.listenProvider_.stopListening(Lr(f),d)}))}$2(n,a)}return c}function _h(n,e,t,r){const i=Na(n,r);if(i!=null){const s=Oa(i),o=s.path,c=s.queryId,l=Je(o,e),a=new An(ka(c),l,t);return La(n,o,a)}else return[]}function U2(n,e,t,r){const i=Na(n,r);if(i){const s=Oa(i),o=s.path,c=s.queryId,l=Je(o,e),a=ye.fromObject(t),u=new Jn(ka(c),l,a);return La(n,o,u)}else return[]}function W2(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,d)=>{const x=Je(f,i);s=s||Jt(d,x),o=o||on(d)});let c=n.syncPointTree_.get(i);c?(o=o||on(c),s=s||Jt(c,de())):(c=new lh,n.syncPointTree_=n.syncPointTree_.set(i,c));let l;s!=null?l=!0:(l=!1,s=ee.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((d,x)=>{const g=Jt(x,de());g&&(s=s.updateImmediateChild(d,g))}));const a=hh(c,e);if(!a&&!e._queryParams.loadsAllData()){const f=xs(e);q(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const d=V2();n.queryToTagMap.set(f,d),n.tagToQueryMap.set(d,f)}const u=ds(n.pendingWriteTree_,i);let h=S2(c,e,t,u,s,l);if(!a&&!o&&!r){const f=dh(c,e);h=h.concat(G2(n,e,f))}return h}function Pa(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,c)=>{const l=Je(o,e),a=Jt(c,l);if(a)return a});return rh(i,e,s,t,!0)}function z2(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(a,u)=>{const h=Je(a,t);r=r||Jt(u,h)});let i=n.syncPointTree_.get(t);i?r=r||Jt(i,de()):(i=new lh,n.syncPointTree_=n.syncPointTree_.set(t,i));const s=r!=null,o=s?new sn(r,!0,!1):null,c=ds(n.pendingWriteTree_,e._path),l=uh(i,e,c,s?o.getNode():ee.EMPTY_NODE,s);return b2(l)}function ur(n,e){return vh(e,n.syncPointTree_,null,ds(n.pendingWriteTree_,de()))}function vh(n,e,t,r){if(se(n.path))return gh(n,e,t,r);{const i=e.get(de());t==null&&i!=null&&(t=Jt(i,de()));let s=[];const o=ce(n.path),c=n.operationForChild(o),l=e.children.get(o);if(l&&c){const a=t?t.getImmediateChild(o):null,u=ih(r,o);s=s.concat(vh(c,l,a,u))}return i&&(s=s.concat(Ra(i,n,r,t))),s}}function gh(n,e,t,r){const i=e.get(de());t==null&&i!=null&&(t=Jt(i,de()));let s=[];return e.children.inorderTraversal((o,c)=>{const l=t?t.getImmediateChild(o):null,a=ih(r,o),u=n.operationForChild(o);u&&(s=s.concat(gh(u,c,l,a)))}),i&&(s=s.concat(Ra(i,n,r,t))),s}function mh(n,e){const t=e.query,r=Zr(n,t);return{hashFn:()=>(A2(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?H2(n,t._path,r):M2(n,t._path);{const s=Hv(i,t);return ph(n,t,null,s)}}}}function Zr(n,e){const t=xs(e);return n.queryToTagMap.get(t)}function xs(n){return n._path.toString()+"$"+n._queryIdentifier}function Na(n,e){return n.tagToQueryMap.get(e)}function Oa(n){const e=n.indexOf("$");return q(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ve(n.substr(0,e))}}function La(n,e,t){const r=n.syncPointTree_.get(e);q(r,"Missing sync point for query tag that we're tracking");const i=ds(n.pendingWriteTree_,e);return Ra(r,t,i,null)}function q2(n){return n.fold((e,t,r)=>{if(t&&on(t))return[hs(t)];{let i=[];return t&&(i=fh(t)),ze(r,(s,o)=>{i=i.concat(o)}),i}})}function Lr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(P2())(n._repo,n._path):n}function $2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=xs(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function V2(){return N2++}function G2(n,e,t){const r=e._path,i=Zr(n,e),s=mh(n,t),o=n.listenProvider_.startListening(Lr(e),i,s.hashFn,s.onComplete),c=n.syncPointTree_.subtree(r);if(i)q(!on(c.value),"If we're adding a query, it shouldn't be shadowed");else{const l=c.fold((a,u,h)=>{if(!se(a)&&u&&on(u))return[hs(u).query];{let f=[];return u&&(f=f.concat(fh(u).map(d=>d.query))),ze(h,(d,x)=>{f=f.concat(x)}),f}});for(let a=0;a<l.length;++a){const u=l[a];n.listenProvider_.stopListening(Lr(u),Zr(n,u))}}return o}/**
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
 */class Ma{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ma(t)}node(){return this.node_}}class Ha{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Be(this.path_,e);return new Ha(this.syncTree_,t)}node(){return Pa(this.syncTree_,this.path_)}}const j2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ul=function(n,e,t){if(!n||typeof n!="object")return n;if(q(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return K2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Y2(n[".sv"],e);q(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},K2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:q(!1,"Unexpected server value: "+n)}},Y2=function(n,e,t){n.hasOwnProperty("increment")||q(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&q(!1,"Unexpected increment value: "+r);const i=e.node();if(q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Eh=function(n,e,t,r){return Ua(e,new Ha(t,n),r)},Ch=function(n,e,t){return Ua(n,new Ma(e),t)};function Ua(n,e,t){const r=n.getPriority().val(),i=Ul(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,c=Ul(o.getValue(),e,t);return c!==o.getValue()||i!==o.getPriority().val()?new Pe(c,Se(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Pe(i))),o.forEachChild(we,(c,l)=>{const a=Ua(l,e.getImmediateChild(c),t);a!==l&&(s=s.updateImmediateChild(c,a))}),s}}/**
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
 */class Wa{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function za(n,e){let t=e instanceof ve?e:new ve(e),r=n,i=ce(t);for(;i!==null;){const s=Xn(r.node.children,i)||{children:{},childCount:0};r=new Wa(i,r,s),t=Ae(t),i=ce(t)}return r}function fr(n){return n.node.value}function yh(n,e){n.node.value=e,Ho(n)}function Ah(n){return n.node.childCount>0}function X2(n){return fr(n)===void 0&&!Ah(n)}function ps(n,e){ze(n.node.children,(t,r)=>{e(new Wa(t,n,r))})}function bh(n,e,t,r){t&&e(n),ps(n,i=>{bh(i,e,!0)})}function Q2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function xi(n){return new ve(n.parent===null?n.name:xi(n.parent)+"/"+n.name)}function Ho(n){n.parent!==null&&Z2(n.parent,n.name,n)}function Z2(n,e,t){const r=X2(t),i=It(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,Ho(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ho(n))}/**
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
 */const J2=/[\[\].#$\/\u0000-\u001F\u007F]/,em=/[\[\].#$\u0000-\u001F\u007F]/,k0=10*1024*1024,qa=function(n){return typeof n=="string"&&n.length!==0&&!J2.test(n)},Dh=function(n){return typeof n=="string"&&n.length!==0&&!em.test(n)},tm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Dh(n)},Uo=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!va(n)||n&&typeof n=="object"&&It(n,".sv")},nm=function(n,e,t,r){_s(is(n,"value"),e,t)},_s=function(n,e,t){const r=t instanceof ve?new mg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+fn(r));if(typeof e=="function")throw new Error(n+"contains a function "+fn(r)+" with contents = "+e.toString());if(va(e))throw new Error(n+"contains "+e.toString()+" "+fn(r));if(typeof e=="string"&&e.length>k0/3&&ss(e)>k0)throw new Error(n+"contains a string greater than "+k0+" utf8 bytes "+fn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ze(e,(o,c)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!qa(o)))throw new Error(n+" contains an invalid key ("+o+") "+fn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Eg(r,o),_s(n,c,r),Cg(r)}),i&&s)throw new Error(n+' contains ".value" child '+fn(r)+" in addition to actual children.")}},rm=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const s=jr(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!qa(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gg);let i=null;for(t=0;t<e.length;t++){if(r=e[t],i!==null&&ut(i,r))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},im=function(n,e,t,r){const i=is(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ze(e,(o,c)=>{const l=new ve(o);if(_s(i,c,Be(t,l)),ya(l)===".priority"&&!Uo(c))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),rm(i,s)},wh=function(n,e,t,r){if(!Dh(t))throw new Error(is(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sm=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wh(n,e,t)},om=function(n,e){if(ce(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},am=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qa(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!tm(t))throw new Error(is(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class cm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $a(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!qd(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function dt(n,e,t){$a(n,t),lm(n,r=>ut(r,e)||ut(e,r))}function lm(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(um(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function um(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Rr&&We("event: "+t.toString()),lr(r)}}}/**
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
 */const fm="repo_interrupt",dm=25;class hm{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vi(),this.transactionQueueTree_=new Wa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xm(n,e,t){if(n.stats_=Ea(n.repoInfo_),n.forceRestClient_||qv())n.server_=new $i(n.repoInfo_,(r,i,s,o)=>{Wl(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>zl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Ot(n.repoInfo_,e,(r,i,s,o)=>{Wl(n,r,i,s,o)},r=>{zl(n,r)},r=>{_m(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=Kv(n.repoInfo_,()=>new Gg(n.stats_,n.server_)),n.infoData_=new Wg,n.infoSyncTree_=new Hl({startListening:(r,i,s,o)=>{let c=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(c=hi(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),Va(n,"connected",!1),n.serverSyncTree_=new Hl({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(c,l)=>{const a=o(c,l);dt(n.eventQueue_,r._path,a)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function pm(n){const t=n.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function vs(n){return j2({timestamp:pm(n)})}function Wl(n,e,t,r,i){n.dataUpdateCount++;const s=new ve(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const l=Ti(t,a=>Se(a));o=U2(n.serverSyncTree_,s,l,i)}else{const l=Se(t);o=_h(n.serverSyncTree_,s,l,i)}else if(r){const l=Ti(t,a=>Se(a));o=L2(n.serverSyncTree_,s,l)}else{const l=Se(t);o=hi(n.serverSyncTree_,s,l)}let c=s;o.length>0&&(c=tr(n,s)),dt(n.eventQueue_,c,o)}function zl(n,e){Va(n,"connected",e),e===!1&&Em(n)}function _m(n,e){ze(e,(t,r)=>{Va(n,t,r)})}function Va(n,e,t){const r=new ve("/.info/"+e),i=Se(t);n.infoData_.updateSnapshot(r,i);const s=hi(n.infoSyncTree_,r,i);dt(n.eventQueue_,r,s)}function Ga(n){return n.nextWriteId_++}function vm(n,e,t){const r=z2(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(i=>{const s=Se(i).withIndex(e._queryParams.getIndex());W2(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=hi(n.serverSyncTree_,e._path,s);else{const c=Zr(n.serverSyncTree_,e);o=_h(n.serverSyncTree_,e._path,s,c)}return dt(n.eventQueue_,e._path,o),ph(n.serverSyncTree_,e,t,null,!0),s},i=>(pi(n,"get for query "+Te(e)+" failed: "+i),Promise.reject(new Error(i))))}function gm(n,e,t,r,i){pi(n,"set",{path:e.toString(),value:t,priority:r});const s=vs(n),o=Se(t,r),c=Pa(n.serverSyncTree_,e),l=Ch(o,c,s),a=Ga(n),u=xh(n.serverSyncTree_,e,l,a,!0);$a(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,d)=>{const x=f==="ok";x||et("set at "+e+" failed: "+f);const g=Gt(n.serverSyncTree_,a,!x);dt(n.eventQueue_,e,g),Wo(n,i,f,d)});const h=Ka(n,e);tr(n,h),dt(n.eventQueue_,h,[])}function mm(n,e,t,r){pi(n,"update",{path:e.toString(),value:t});let i=!0;const s=vs(n),o={};if(ze(t,(c,l)=>{i=!1,o[c]=Eh(Be(e,c),Se(l),n.serverSyncTree_,s)}),i)We("update() called with empty data.  Don't do anything."),Wo(n,r,"ok",void 0);else{const c=Ga(n),l=O2(n.serverSyncTree_,e,o,c);$a(n.eventQueue_,l),n.server_.merge(e.toString(),t,(a,u)=>{const h=a==="ok";h||et("update at "+e+" failed: "+a);const f=Gt(n.serverSyncTree_,c,!h),d=f.length>0?tr(n,e):e;dt(n.eventQueue_,d,f),Wo(n,r,a,u)}),ze(t,a=>{const u=Ka(n,Be(e,a));tr(n,u)}),dt(n.eventQueue_,e,[])}}function Em(n){pi(n,"onDisconnectEvents");const e=vs(n),t=Vi();Ro(n.onDisconnect_,de(),(i,s)=>{const o=Eh(i,s,n.serverSyncTree_,e);Jd(t,i,o)});let r=[];Ro(t,de(),(i,s)=>{r=r.concat(hi(n.serverSyncTree_,i,s));const o=Ka(n,i);tr(n,o)}),n.onDisconnect_=Vi(),dt(n.eventQueue_,de(),r)}function Cm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(fm)}function pi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),We(t,...e)}function Wo(n,e,t,r){e&&lr(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Bh(n,e,t){return Pa(n.serverSyncTree_,e,t)||ee.EMPTY_NODE}function ja(n,e=n.transactionQueueTree_){if(e||gs(n,e),fr(e)){const t=kh(n,e);q(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ym(n,xi(e),t)}else Ah(e)&&ps(e,t=>{ja(n,t)})}function ym(n,e,t){const r=t.map(a=>a.currentWriteId),i=Bh(n,e,r);let s=i;const o=i.hash();for(let a=0;a<t.length;a++){const u=t[a];q(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Je(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const c=s.val(!0),l=e;n.server_.put(l.toString(),c,a=>{pi(n,"transaction put response",{path:l.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Gt(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();gs(n,za(n.transactionQueueTree_,e)),ja(n,n.transactionQueueTree_),dt(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)lr(h[f])}else{if(a==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{et("transaction at "+l.toString()+" failed: "+a);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=a}tr(n,e)}},o)}function tr(n,e){const t=Fh(n,e),r=xi(t),i=kh(n,t);return Am(n,i,r),r}function Am(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],a=Je(t,l.path);let u=!1,h;if(q(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Gt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dm)u=!0,h="maxretry",i=i.concat(Gt(n.serverSyncTree_,l.currentWriteId,!0));else{const f=Bh(n,l.path,o);l.currentInputSnapshot=f;const d=e[c].update(f.val());if(d!==void 0){_s("transaction failed: Data returned ",d,l.path);let x=Se(d);typeof d=="object"&&d!=null&&It(d,".priority")||(x=x.updatePriority(f.getPriority()));const p=l.currentWriteId,E=vs(n),v=Ch(x,f,E);l.currentOutputSnapshotRaw=x,l.currentOutputSnapshotResolved=v,l.currentWriteId=Ga(n),o.splice(o.indexOf(p),1),i=i.concat(xh(n.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),i=i.concat(Gt(n.serverSyncTree_,p,!0))}else u=!0,h="nodata",i=i.concat(Gt(n.serverSyncTree_,l.currentWriteId,!0))}dt(n.eventQueue_,t,i),i=[],u&&(e[c].status=2,function(f){setTimeout(f,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(h==="nodata"?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(h),!1,null))))}gs(n,n.transactionQueueTree_);for(let c=0;c<r.length;c++)lr(r[c]);ja(n,n.transactionQueueTree_)}function Fh(n,e){let t,r=n.transactionQueueTree_;for(t=ce(e);t!==null&&fr(r)===void 0;)r=za(r,t),e=Ae(e),t=ce(e);return r}function kh(n,e){const t=[];return Ih(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Ih(n,e,t){const r=fr(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);ps(e,i=>{Ih(n,i,t)})}function gs(n,e){const t=fr(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,yh(e,t.length>0?t:void 0)}ps(e,r=>{gs(n,r)})}function Ka(n,e){const t=xi(Fh(n,e)),r=za(n.transactionQueueTree_,e);return Q2(r,i=>{I0(n,i)}),I0(n,r),bh(r,i=>{I0(n,i)}),t}function I0(n,e){const t=fr(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(q(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(q(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Gt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yh(e,void 0):t.length=s+1,dt(n.eventQueue_,xi(e),i);for(let o=0;o<r.length;o++)lr(r[o])}}/**
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
 */function bm(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Dm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):et(`Invalid query segment '${t}' in query '${n}'`)}return e}const ql=function(n,e){const t=wm(n),r=t.namespace;t.domain==="firebase.com"&&Mt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Pv();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Rd(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new ve(t.pathString)}},wm=function(n){let e="",t="",r="",i="",s="",o=!0,c="https",l=443;if(typeof n=="string"){let a=n.indexOf("//");a>=0&&(c=n.substring(0,a-1),n=n.substring(a+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=bm(n.substring(u,h)));const f=Dm(n.substring(Math.min(n.length,h)));a=e.indexOf(":"),a>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(a+1),10)):a=e.length;const d=e.slice(0,a);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{const x=e.indexOf(".");r=e.substring(0,x).toLowerCase(),t=e.substring(x+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:c,pathString:i,namespace:s}};/**
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
 */class Bm{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class Fm{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class km{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return q(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ms{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:ya(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=kl(this._queryParams),t=ga(e);return t==="{}"?"default":t}get _queryObject(){return kl(this._queryParams)}isEqual(e){if(e=qe(e),!(e instanceof ms))return!1;const t=this._repo===e._repo,r=qd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+vg(this._path)}}function Im(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Sm(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Qt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==yn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==nn)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===we){if(e!=null&&!Uo(e)||t!=null&&!Uo(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(q(n.getIndex()instanceof Xd||n.getIndex()===Qd,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Ht extends ms{constructor(e,t){super(e,t,new wa,!1)}get parent(){const e=zd(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jr{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ve(e),r=zo(this.ref,e);return new Jr(this._node.getChild(t),r,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jr(i,zo(this.ref,r),we)))}hasChild(e){const t=new ve(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vn(n,e){return n=qe(n),n._checkNotDeleted("ref"),e!==void 0?zo(n._root,e):n._root}function zo(n,e){return n=qe(n),ce(n._path)===null?sm("child","path",e):wh("child","path",e),new Ht(n._repo,Be(n._path,e))}function $l(n,e){n=qe(n),om("set",n._path),nm("set",e,n._path);const t=new ri;return gm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Tm(n,e){im("update",e,n._path);const t=new ri;return mm(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function qo(n){n=qe(n);const e=new km(()=>{}),t=new Ya(e);return vm(n._repo,n,t).then(r=>new Jr(r,new Ht(n._repo,n._path),n._queryParams.getIndex()))}class Ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new Bm("value",this,new Jr(e.snapshotNode,new Ht(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Fm(this,e,t):null}matches(e){return e instanceof Ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Rm{}class Pm extends Rm{_apply(e){Im(e,"orderByKey");const t=Ug(e._queryParams,Qt);return Sm(t),new ms(e._repo,e._path,t,!0)}}function $o(){return new Pm}function Vo(n,...e){let t=qe(n);for(const r of e)t=r._apply(t);return t}F2(Ht);R2(Ht);/**
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
 */const Nm="FIREBASE_DATABASE_EMULATOR_HOST",Go={};let Om=!1;function Lm(n,e,t,r){n.repoInfo_=new Rd(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function Mm(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ql(s,i),c=o.repoInfo,l;typeof process<"u"&&fl&&(l=fl[Nm]),l?(s=`http://${l}?ns=${c.namespace}`,o=ql(s,i),c=o.repoInfo):o.repoInfo.secure;const a=new Vv(n.name,n.options,e);am("Invalid Firebase Database URL",o),se(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Um(c,n,a,new $v(n.name,t));return new Wm(u,n)}function Hm(n,e){const t=Go[e];(!t||t[n.key]!==n)&&Mt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Cm(n),delete t[n.key]}function Um(n,e,t,r){let i=Go[e.name];i||(i={},Go[e.name]=i);let s=i[n.toURLString()];return s&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new hm(n,Om,t,r),i[n.toURLString()]=s,s}class Wm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Hm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function Xa(n=si(),e){const t=aa(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Xx("database");r&&zm(t,...r)}return t}function zm(n,e,t,r={}){n=qe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Di(Di.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Qx(r.mockUserToken,n.app.options.projectId);s=new Di(o)}Lm(i,e,t,s)}/**
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
 */function qm(n){Fv(sr),Qn(new vn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Mm(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Xt(dl,hl,n),Xt(dl,hl,"esm2017")}Ot.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ot.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};qm();const $m={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"};os($m,"sud");const Sh=si("sud"),Qa="https://xt8ss.github.io/ff-site-data";let Gn;fetch(Qa+"/user-ranks.json").then(async n=>Gn=await n.json());const lt=Bv(Sh),S0=Xa(Sh),Vm=/[^a-zA-Z0-9_]/g,Gm={logIn:"material-symbols:login-rounded",logOut:"material-symbols:logout-rounded"};let vt=n=>{n.target.closest("button").blur()},jm=n=>(n=n.charAt(0).toUpperCase()+n.slice(1),n),Km=(n,e)=>{let t=localStorage.getItem(n);return kt(t?JSON.parse(t):e)},Ym=(n,e)=>n.subscribe(t=>localStorage.setItem(e,JSON.stringify(t))),Th=n=>JSON.parse(JSON.stringify(n)),jt=n=>n!=null&&Object.keys(n).length,Mn=()=>!Vh($e).preventClosing&&$e.set(Th(Ph.promptData)),Vl=(n,e)=>Co.AES.encrypt(n,lt.currentUser.uid+581827).toString(),T0=(n,e)=>Co.AES.decrypt(n,(e||lt.currentUser.uid)+581827).toString(Co.enc.Utf8),Xm=n=>{let e;for(let t in Gn)if(Gn[t].userList.includes(n.toLowerCase())){e=t;break}return e||(e="User"),e},Rh=(n,e)=>{Yo.update(t=>[...t,{icon:Gm[n],text:e}]),setTimeout(()=>Yo.update(t=>t.slice(1)),3e3)},Gl=()=>history.replaceState(history.state,null,location.origin+location.pathname);const Ph={promptData:{component:null,props:{},focus:"",hasWrapper:!1,preventClosing:!1}};let Hn=kt(!1),wi=kt(!1),Bi=kt(!1),jo=kt({}),Ko=kt(!1),ei=kt(""),R0=kt({select:new Audio}),$e=kt(Th(Ph.promptData)),Yo=kt([]),ti=Km("fh-changelogSeen",!1);Ym(ti,"fh-changelogSeen");function Nh(n){const e=n-1;return e*e*e+1}function tt(n,{delay:e=0,duration:t=400,easing:r=ni}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function Ji(n,{delay:e=0,duration:t=400,easing:r=Nh,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),c=+o.opacity,l=o.transform==="none"?"":o.transform,a=1-i,u=c*(1-s);return{delay:e,duration:t,easing:r,css:(h,f)=>`
			transform: ${l} scale(${1-a*f});
			opacity: ${c-u*f}
		`}}function jl(n,e,t){const r=n.slice();return r[5]=e[t],r}function Qm(n){let e,t=Ve(n[1]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Kl(jl(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=Mr()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);W(i,e,s)},p(i,s){if(s&2){t=Ve(i[1]);let o;for(o=0;o<t.length;o+=1){const c=jl(i,t,o);r[o]?r[o].p(c,s):(r[o]=Kl(c),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&U(e),pn(r,i)}}}function Zm(n){let e,t,r;return{c(){e=L("span"),t=te("— "),r=te(n[1]),O(e,"id","info"),O(e,"class","svelte-etktgh")},m(i,s){W(i,e,s),N(e,t),N(e,r)},p(i,s){s&2&&De(r,i[1])},d(i){i&&U(e)}}}function Kl(n){let e,t,r=n[5]+"",i;return{c(){e=L("span"),t=te("— "),i=te(r),O(e,"id","info"),O(e,"class","svelte-etktgh")},m(s,o){W(s,e,o),N(e,t),N(e,i)},p(s,o){o&2&&r!==(r=s[5]+"")&&De(i,r)},d(s){s&&U(e)}}}function Jm(n){let e,t,r,i,s,o,c,l,a;function u(d,x){return typeof d[1]=="string"?Zm:Qm}let h=u(n),f=h(n);return{c(){e=L("hr"),t=j(),r=L("li"),i=L("span"),s=te("v"),o=te(n[0]),c=j(),l=L("i"),l.textContent=`${`${n[3][n[2][1]-1]} ${n[2][0]}, 20${n[2][2]}`}`,a=j(),f.c(),O(e,"class","svelte-etktgh"),O(i,"id","version"),O(i,"class","svelte-etktgh"),O(l,"id","date"),O(l,"class","svelte-etktgh"),O(r,"class","flex fw fai-center svelte-etktgh")},m(d,x){W(d,e,x),W(d,t,x),W(d,r,x),N(r,i),N(i,s),N(i,o),N(r,c),N(r,l),N(r,a),f.m(r,null)},p(d,[x]){x&1&&De(o,d[0]),h===(h=u(d))&&f?f.p(d,x):(f.d(1),f=h(d),f&&(f.c(),f.m(r,null)))},i:oe,o:oe,d(d){d&&(U(e),U(t),U(r)),f.d()}}}function e4(n,e,t){let{version:r,date:i,logs:s}=e,o=i.split("/"),c=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.$$set=l=>{"version"in l&&t(0,r=l.version),"date"in l&&t(4,i=l.date),"logs"in l&&t(1,s=l.logs)},[r,s,o,c,i]}class t4 extends Dt{constructor(e){super(),bt(this,e,e4,Jm,ht,{version:0,date:4,logs:1})}}function Yl(n,e,t){const r=n.slice();return r[1]=e[t],r}function Xl(n){let e,t;const r=[n[1]];let i={};for(let s=0;s<r.length;s+=1)i=jn(i,r[s]);return e=new t4({props:i}),{c(){_n(e.$$.fragment)},m(s,o){en(e,s,o),t=!0},p(s,o){const c=o&1?Yn(r,[Eo(s[1])]):{};e.$set(c)},i(s){t||(ae(e.$$.fragment,s),t=!0)},o(s){Ce(e.$$.fragment,s),t=!1},d(s){tn(e,s)}}}function n4(n){let e,t,r,i,s=Ve(n[0].toReversed()),o=[];for(let l=0;l<s.length;l+=1)o[l]=Xl(Yl(n,s,l));const c=l=>Ce(o[l],1,1,()=>{o[l]=null});return{c(){e=L("span"),e.textContent="Changelog",t=j(),r=L("ul");for(let l=0;l<o.length;l+=1)o[l].c();O(e,"class","title"),O(r,"class","flex fd-col smaller-fs svelte-8x0x8v"),O(r,"id","contents")},m(l,a){W(l,e,a),W(l,t,a),W(l,r,a);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(r,null);i=!0},p(l,[a]){if(a&1){s=Ve(l[0].toReversed());let u;for(u=0;u<s.length;u+=1){const h=Yl(l,s,u);o[u]?(o[u].p(h,a),ae(o[u],1)):(o[u]=Xl(h),o[u].c(),ae(o[u],1),o[u].m(r,null))}for(gt(),u=s.length;u<o.length;u+=1)c(u);mt()}},i(l){if(!i){for(let a=0;a<s.length;a+=1)ae(o[a]);i=!0}},o(l){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)Ce(o[a]);i=!1},d(l){l&&(U(e),U(t),U(r)),pn(o,l)}}}function r4(n){return[[{version:"1.0.0",date:"10/9/24",logs:"v1 Release"},{version:"1.0.1",date:"10/9/24",logs:"Added Fish Reeling Times to Resources category"},{version:"1.0.2",date:"17/9/24",logs:["Added ability to copy links","Increased category visibility"]},{version:"1.0.3",date:"16/10/24",logs:["Added Twitter links to Official Links category","Added Developer Forum links to Resources category"]},{version:"1.0.4",date:"1/12/24",logs:"Added Gift Tree Profit Calculator to Resources category"},{version:"1.1.0",date:"1/1/25",logs:["Added category collapse/expand feature","Added End of Year 2024 Progress Post to Resources category"]},{version:"1.2.0",date:"7/6/25",logs:["Added sign-up/log-in feature","Implemented data synchronization process"]},{version:"1.2.1",date:"7/6/25",logs:"Added Frontierguessr to Affiliations category"}]]}class i4 extends Dt{constructor(e){super(),bt(this,e,r4,n4,ht,{})}}function s4(n){let e,t,r;return{c(){e=L("span"),e.textContent="Fantastic Hub Policy",t=j(),r=L("div"),r.innerHTML=`<hr/> <span class="svelte-9ffe04">About</span> <p>This site is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="svelte-9ffe04">Privacy Policy</span> <p>This policy explains what information Fantastic Hub (&quot;we&quot;, &quot;us&quot; or
        &quot;our&quot;) collects, uses, and shares when you use our website.</p> <span class="svelte-9ffe04">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="svelte-9ffe04">How We Use This Information</span> <p>Your information may be utilized to test and improve the site, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="svelte-9ffe04">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,O(e,"class","title"),O(r,"class","flex fd-col smaller-fs svelte-9ffe04"),O(r,"id","contents")},m(i,s){W(i,e,s),W(i,t,s),W(i,r,s)},p:oe,i:oe,o:oe,d(i){i&&(U(e),U(t),U(r))}}}class o4 extends Dt{constructor(e){super(),bt(this,e,null,s4,ht,{})}}function Ql(n){let e,t;return{c(){e=L("span"),t=te(n[2]),O(e,"class","tooltip"),O(e,"id",n[1])},m(r,i){W(r,e,i),N(e,t)},p(r,i){i&4&&De(t,r[2]),i&2&&O(e,"id",r[1])},d(r){r&&U(e)}}}function a4(n){let e,t,r,i,s,o=n[1]&&Ql(n);return{c(){e=L("div"),t=L("iconify-icon"),r=j(),i=te(n[0]),s=j(),o&&o.c(),Oe(t,"icon",n[3]),it(t,"color",n[4]),O(e,"class","username flex fjc-center fai-center cg-1 pos-rel font-ms")},m(c,l){W(c,e,l),N(e,t),N(e,r),N(e,i),N(e,s),o&&o.m(e,null)},p(c,[l]){l&8&&Oe(t,"icon",c[3]),l&16&&it(t,"color",c[4]),l&1&&De(i,c[0]),c[1]?o?o.p(c,l):(o=Ql(c),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:oe,o:oe,d(c){c&&U(e),o&&o.d()}}}function c4(n,e,t){let{username:r,tooltipPosition:i=null}=e,s,o="line-md:loading-loop",c="black";return n.$$set=l=>{"username"in l&&t(0,r=l.username),"tooltipPosition"in l&&t(1,i=l.tooltipPosition)},n.$$.update=()=>{n.$$.dirty&5&&jt(Gn)&&(t(2,s=Xm(r)),t(3,o=Gn[s].icon.iconifyName),t(4,c=Gn[s].icon.color))},[r,i,s,o,c]}class l4 extends Dt{constructor(e){super(),bt(this,e,c4,a4,ht,{username:0,tooltipPosition:1})}}function Zl(n,e,t){const r=n.slice();return r[59]=e[t],r}function u4(n){let e,t,r,i,s,o,c,l,a,u,h,f,d,x,g,p,E,v,_=n[10]?"Hide":"Show",m,C,A,D,b=!n[8]&&Jl(n);function F(M,G){return M[8]?h4:d4}let y=F(n),w=y(n),k=[{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:f=(n[8]?"New":"")+" Password"},{autocomplete:d=(n[1]||n[8]?"new":"current")+"-password"},{class:"font-ms"}],B={};for(let M=0;M<k.length;M+=1)B=jn(B,k[M]);let P=(n[1]||n[8])&&eu(n),H=!n[1]&&!n[8]&&tu(n);return{c(){b&&b.c(),e=j(),t=L("div"),r=L("div"),i=L("div"),s=L("iconify-icon"),o=j(),w.c(),c=j(),l=L("div"),a=L("iconify-icon"),u=j(),h=L("input"),x=j(),P&&P.c(),g=j(),p=L("div"),H&&H.c(),E=j(),v=L("button"),m=te(_),C=te(" password"),Oe(s,"icon","lucide:user-round"),O(i,"class","flex fai-center br-1"),ct(i,"ff-item",n[8]),ct(i,"border-tp",!n[8]),Oe(a,"icon","material-symbols:lock-outline"),Kn(h,B),O(l,"class","flex fai-center pos-rel border-tp br-1"),O(r,"class","formInputs flex fd-col rg-1"),O(v,"class","textBtn smaller-fs no-bg no-bg-change"),O(p,"class","flex"),it(p,"justify-content",n[1]||n[8]?"flex-end":"space-between")},m(M,G){b&&b.m(M,G),W(M,e,G),W(M,t,G),N(t,r),N(r,i),N(i,s),N(i,o),w.m(i,null),N(r,c),N(r,l),N(l,a),N(l,u),N(l,h),h.autofocus&&h.focus(),ft(h,n[2].password),N(r,x),P&&P.m(r,null),N(t,g),N(t,p),H&&H.m(p,null),N(p,E),N(p,v),N(v,m),N(v,C),A||(D=[re(h,"input",n[34]),re(h,"input",n[35]),re(v,"click",n[39])],A=!0)},p(M,G){M[8]?b&&(b.d(1),b=null):b?b.p(M,G):(b=Jl(M),b.c(),b.m(e.parentNode,e)),y===(y=F(M))&&w?w.p(M,G):(w.d(1),w=y(M),w&&(w.c(),w.m(i,null))),G[0]&256&&ct(i,"ff-item",M[8]),G[0]&256&&ct(i,"border-tp",!M[8]),Kn(h,B=Yn(k,[G[0]&1024&&{type:M[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},G[0]&256&&f!==(f=(M[8]?"New":"")+" Password")&&{placeholder:f},G[0]&258&&d!==(d=(M[1]||M[8]?"new":"current")+"-password")&&{autocomplete:d},{class:"font-ms"}])),G[0]&4&&h.value!==M[2].password&&ft(h,M[2].password),M[1]||M[8]?P?P.p(M,G):(P=eu(M),P.c(),P.m(r,null)):P&&(P.d(1),P=null),!M[1]&&!M[8]?H?H.p(M,G):(H=tu(M),H.c(),H.m(p,E)):H&&(H.d(1),H=null),G[0]&1024&&_!==(_=M[10]?"Hide":"Show")&&De(m,_),G[0]&258&&it(p,"justify-content",M[1]||M[8]?"flex-end":"space-between")},d(M){M&&(U(e),U(t)),b&&b.d(M),w.d(),P&&P.d(),H&&H.d(),A=!1,Re(D)}}}function f4(n){let e,t,r,i,s,o,c,l,a,u,h,f,d,x,g;function p(b,F){return b[7]?p4:x4}let E=p(n),v=E(n);function _(b,F){if(b[7])return v4;if(b[6]||b[9])return _4}let m=_(n),C=m&&m(n),A=!n[0]&&nu(n),D=n[0]&&!n[9]&&ru(n);return{c(){e=L("div"),v.c(),t=j(),r=L("div"),i=L("div"),C&&C.c(),s=j(),o=L("div"),c=L("iconify-icon"),l=j(),a=L("input"),h=j(),A&&A.c(),f=j(),D&&D.c(),d=Mr(),O(e,"class","smaller-fs"),it(e,"letter-spacing","-0.05rem"),it(e,"line-height","3.75rem"),Oe(c,"icon","jam:write"),a.disabled=u=!n[9]&&n[0]&&!!n[2].password,O(a,"type","text"),O(a,"autocomplete","off"),O(a,"minlength","1"),O(a,"maxlength","35"),O(a,"placeholder","Your answer"),O(a,"class","font-ms"),O(o,"class","flex fai-center pos-rel border-tp br-1"),O(i,"class","formInputs flex fd-col rg-1"),O(r,"class","flex fd-col")},m(b,F){W(b,e,F),v.m(e,null),W(b,t,F),W(b,r,F),N(r,i),C&&C.m(i,null),N(i,s),N(i,o),N(o,c),N(o,l),N(o,a),ft(a,n[2].answer),N(r,h),A&&A.m(r,null),W(b,f,F),D&&D.m(b,F),W(b,d,F),x||(g=[re(a,"input",n[25]),re(a,"input",n[26])],x=!0)},p(b,F){E===(E=p(b))&&v?v.p(b,F):(v.d(1),v=E(b),v&&(v.c(),v.m(e,null))),m===(m=_(b))&&C?C.p(b,F):(C&&C.d(1),C=m&&m(b),C&&(C.c(),C.m(i,s))),F[0]&517&&u!==(u=!b[9]&&b[0]&&!!b[2].password)&&(a.disabled=u),F[0]&4&&a.value!==b[2].answer&&ft(a,b[2].answer),b[0]?A&&(A.d(1),A=null):A?A.p(b,F):(A=nu(b),A.c(),A.m(r,null)),b[0]&&!b[9]?D?D.p(b,F):(D=ru(b),D.c(),D.m(d.parentNode,d)):D&&(D.d(1),D=null)},d(b){b&&(U(e),U(t),U(r),U(f),U(d)),v.d(),C&&C.d(),A&&A.d(),D&&D.d(b),x=!1,Re(g)}}}function Jl(n){let e,t=n[1]?"Already have":"Don't have",r,i,s,o=n[1]?"Log In":"Sign Up",c,l,a;return{c(){e=L("div"),r=te(t),i=te(` an account?\r
                `),s=L("button"),c=te(o),s.disabled=n[4],O(s,"class","border-tp br-1"),O(s,"id","switchMethod"),O(e,"class","smaller-fs")},m(u,h){W(u,e,h),N(e,r),N(e,i),N(e,s),N(s,c),l||(a=re(s,"click",n[31]),l=!0)},p(u,h){h[0]&2&&t!==(t=u[1]?"Already have":"Don't have")&&De(r,t),h[0]&2&&o!==(o=u[1]?"Log In":"Sign Up")&&De(c,o),h[0]&16&&(s.disabled=u[4])},d(u){u&&U(e),l=!1,a()}}}function d4(n){let e,t,r;return{c(){e=L("input"),O(e,"type","text"),O(e,"minlength","2"),O(e,"maxlength","20"),O(e,"placeholder","Username"),O(e,"autocomplete","username"),O(e,"class","font-ms")},m(i,s){W(i,e,s),ft(e,n[2].username),t||(r=[re(e,"input",n[32]),re(e,"input",n[33])],t=!0)},p(i,s){s[0]&4&&e.value!==i[2].username&&ft(e,i[2].username)},d(i){i&&U(e),t=!1,Re(r)}}}function h4(n){let e,t=n[11].displayName+"",r;return{c(){e=L("span"),r=te(t),O(e,"class","flex fjc-center"),it(e,"flex","1")},m(i,s){W(i,e,s),N(e,r)},p(i,s){s[0]&2048&&t!==(t=i[11].displayName+"")&&De(r,t)},d(i){i&&U(e)}}}function eu(n){let e,t,r,i,s,o,c,l=[{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:s="Confirm "+(n[8]?"New Password":"Password")},{autocomplete:"new-password"},{class:"font-ms"}],a={};for(let u=0;u<l.length;u+=1)a=jn(a,l[u]);return{c(){e=L("div"),t=L("iconify-icon"),r=j(),i=L("input"),Oe(t,"icon","material-symbols:lock"),Kn(i,a),O(e,"class","flex fai-center pos-rel border-tp br-1")},m(u,h){W(u,e,h),N(e,t),N(e,r),N(e,i),i.autofocus&&i.focus(),ft(i,n[2].confirm),o||(c=[re(i,"input",n[36]),re(i,"input",n[37])],o=!0)},p(u,h){Kn(i,a=Yn(l,[h[0]&1024&&{type:u[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},h[0]&256&&s!==(s="Confirm "+(u[8]?"New Password":"Password"))&&{placeholder:s},{autocomplete:"new-password"},{class:"font-ms"}])),h[0]&4&&i.value!==u[2].confirm&&ft(i,u[2].confirm)},d(u){u&&U(e),o=!1,Re(c)}}}function tu(n){let e,t,r,i;return{c(){e=L("button"),t=te("Forgot password?"),e.disabled=n[4],O(e,"class","textBtn smaller-fs no-bg no-bg-change")},m(s,o){W(s,e,o),N(e,t),r||(i=re(e,"click",n[38]),r=!0)},p(s,o){o[0]&16&&(e.disabled=s[4])},d(s){s&&U(e),r=!1,i()}}}function x4(n){let e,t=n[9]?"another":"a",r,i,s,o,c=n[9]?"again":"",l,a,u,h,f,d,x,g,p,E,v;return{c(){e=te("Before finalizing, we ask you to create "),r=te(t),i=j(),s=L("hl"),s.textContent="security question",o=te(`\r
                to answer in case you ever need to reset your password `),l=te(c),a=te(`.\r
                `),u=L("br"),h=j(),f=L("b"),f.textContent=`The answer should be confidential, easy to recall, and not\r
                    subject to change.`,d=j(),x=L("br"),g=te(`\r
                If you forget the `),p=L("hl"),p.textContent="exact answer",E=te(` (case-sensitive) along\r
                with your password, you may lose access to your account\r
                `),v=L("hl"),v.textContent="permanently!"},m(_,m){W(_,e,m),W(_,r,m),W(_,i,m),W(_,s,m),W(_,o,m),W(_,l,m),W(_,a,m),W(_,u,m),W(_,h,m),W(_,f,m),W(_,d,m),W(_,x,m),W(_,g,m),W(_,p,m),W(_,E,m),W(_,v,m)},p(_,m){m[0]&512&&t!==(t=_[9]?"another":"a")&&De(r,t),m[0]&512&&c!==(c=_[9]?"again":"")&&De(l,c)},d(_){_&&(U(e),U(r),U(i),U(s),U(o),U(l),U(a),U(u),U(h),U(f),U(d),U(x),U(g),U(p),U(E),U(v))}}}function p4(n){let e,t=n[0]?"security question and password":"password",r,i;return{c(){e=te("Answer the following prompt to reset your "),r=te(t),i=te(":")},m(s,o){W(s,e,o),W(s,r,o),W(s,i,o)},p(s,o){o[0]&1&&t!==(t=s[0]?"security question and password":"password")&&De(r,t)},d(s){s&&(U(e),U(r),U(i))}}}function _4(n){let e,t,r,i,s,o;return{c(){e=L("div"),t=L("iconify-icon"),r=j(),i=L("input"),Oe(t,"icon","f7:question-square"),O(i,"type","text"),O(i,"autocomplete","off"),O(i,"minlength","10"),O(i,"maxlength","35"),O(i,"placeholder","Your question"),O(i,"class","font-ms"),O(e,"class","flex fai-center border-tp br-1")},m(c,l){W(c,e,l),N(e,t),N(e,r),N(e,i),ft(i,n[2].question),s||(o=[re(i,"input",n[23]),re(i,"input",n[24])],s=!0)},p(c,l){l[0]&4&&i.value!==c[2].question&&ft(i,c[2].question)},d(c){c&&U(e),s=!1,Re(o)}}}function v4(n){let e,t,r,i,s=(jt(n[11])?n[11].security.question:"...")+"",o;return{c(){e=L("div"),t=L("iconify-icon"),r=j(),i=L("span"),o=te(s),Oe(t,"icon","f7:question-square"),O(i,"class","flex fjc-center"),it(i,"flex","1"),O(e,"class","ff-item flex fai-center br-1")},m(c,l){W(c,e,l),N(e,t),N(e,r),N(e,i),N(i,o)},p(c,l){l[0]&2048&&s!==(s=(jt(c[11])?c[11].security.question:"...")+"")&&De(o,s)},d(c){c&&U(e)}}}function nu(n){let e,t,r,i=n[6]?"Sign Up":n[9]?"Password Reset":"Log In",s,o,c;return{c(){e=L("div"),t=L("button"),r=te("Back to "),s=te(i),t.disabled=n[4],O(t,"class","textBtn smaller-fs no-bg no-bg-change"),O(e,"class","flex")},m(l,a){W(l,e,a),N(e,t),N(t,r),N(t,s),o||(c=re(t,"click",n[27]),o=!0)},p(l,a){a[0]&576&&i!==(i=l[6]?"Sign Up":l[9]?"Password Reset":"Log In")&&De(s,i),a[0]&16&&(t.disabled=l[4])},d(l){l&&U(e),o=!1,c()}}}function ru(n){let e,t,r,i,s,o,c,l,a,u,h,f,d,x=n[10]?"Hide":"Show",g,p,E,v,_=[{disabled:a=!!n[2].answer},{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:u=(n[8]?"New":"")+" Password"},{class:"font-ms"}],m={};for(let C=0;C<_.length;C+=1)m=jn(m,_[C]);return{c(){e=L("span"),e.textContent=`or, alternatively, input your current password in case you know\r
                it:`,t=j(),r=L("div"),i=L("div"),s=L("div"),o=L("iconify-icon"),c=j(),l=L("input"),h=j(),f=L("div"),d=L("button"),g=te(x),p=te(" password"),O(e,"class","smaller-fs"),Oe(o,"icon","material-symbols:lock-outline"),Kn(l,m),O(s,"class","flex fai-center pos-rel border-tp br-1"),O(i,"class","formInputs flex fd-col rg-1"),O(d,"class","textBtn smaller-fs no-bg no-bg-change"),O(f,"class","flex"),it(f,"justify-content","flex-end")},m(C,A){W(C,e,A),W(C,t,A),W(C,r,A),N(r,i),N(i,s),N(s,o),N(s,c),N(s,l),l.autofocus&&l.focus(),ft(l,n[2].password),N(r,h),N(r,f),N(f,d),N(d,g),N(d,p),E||(v=[re(l,"input",n[28]),re(l,"input",n[29]),re(d,"click",n[30])],E=!0)},p(C,A){Kn(l,m=Yn(_,[A[0]&4&&a!==(a=!!C[2].answer)&&{disabled:a},A[0]&1024&&{type:C[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},A[0]&256&&u!==(u=(C[8]?"New":"")+" Password")&&{placeholder:u},{class:"font-ms"}])),A[0]&4&&l.value!==C[2].password&&ft(l,C[2].password),A[0]&1024&&x!==(x=C[10]?"Hide":"Show")&&De(g,x)},d(C){C&&(U(e),U(t),U(r)),E=!1,Re(v)}}}function iu(n){let e,t=Ve(n[5]),r=[];for(let i=0;i<t.length;i+=1)r[i]=su(Zl(n,t,i));return{c(){e=L("div");for(let i=0;i<r.length;i+=1)r[i].c();O(e,"class","flex fd-col smaller-fs"),it(e,"color","var(--ff-red)")},m(i,s){W(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&40){t=Ve(i[5]);let o;for(o=0;o<t.length;o+=1){const c=Zl(i,t,o);r[o]?r[o].p(c,s):(r[o]=su(c),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&U(e),pn(r,i)}}}function su(n){let e,t,r=n[3][n[59]].message+"",i;return{c(){e=L("span"),t=te("- "),i=te(r)},m(s,o){W(s,e,o),N(e,t),N(e,i)},p(s,o){o[0]&40&&r!==(r=s[3][s[59]].message+"")&&De(i,r)},d(s){s&&U(e)}}}function g4(n){let e,t=n[6]||n[9]?`Security ${n[0]?"Reset":"Question"}`:n[1]?"Sign Up":n[7]||n[8]?`${n[0]?"Security":"Password"} Reset`:"Log In",r,i,s,o,c,l,a,u,h=n[6]?"Create Account":n[9]?`Reset ${n[0]?"":"& Log In"}`:n[1]||n[7]||n[8]?"Next":"Log In",f,d,x;function g(_,m){return _[6]||_[9]||_[7]?f4:u4}let p=g(n),E=p(n),v=n[5].length&&iu(n);return{c(){e=L("span"),r=te(t),i=j(),s=L("hr"),o=j(),c=L("div"),E.c(),l=j(),v&&v.c(),a=j(),u=L("button"),f=te(h),O(e,"class","title"),u.disabled=n[4],O(u,"class","mainBtn border-tp br-1"),O(c,"class","signupAndLogin contents flex fd-col smaller-fs"),it(c,"width",n[6]||n[9]||n[7]?"80rem":"")},m(_,m){W(_,e,m),N(e,r),W(_,i,m),W(_,s,m),W(_,o,m),W(_,c,m),E.m(c,null),N(c,l),v&&v.m(c,null),N(c,a),N(c,u),N(u,f),d||(x=re(u,"click",n[40]),d=!0)},p(_,m){m[0]&963&&t!==(t=_[6]||_[9]?`Security ${_[0]?"Reset":"Question"}`:_[1]?"Sign Up":_[7]||_[8]?`${_[0]?"Security":"Password"} Reset`:"Log In")&&De(r,t),p===(p=g(_))&&E?E.p(_,m):(E.d(1),E=p(_),E&&(E.c(),E.m(c,l))),_[5].length?v?v.p(_,m):(v=iu(_),v.c(),v.m(c,a)):v&&(v.d(1),v=null),m[0]&963&&h!==(h=_[6]?"Create Account":_[9]?`Reset ${_[0]?"":"& Log In"}`:_[1]||_[7]||_[8]?"Next":"Log In")&&De(f,h),m[0]&16&&(u.disabled=_[4]),m[0]&704&&it(c,"width",_[6]||_[9]||_[7]?"80rem":"")},i:oe,o:oe,d(_){_&&(U(e),U(i),U(s),U(o),U(c)),E.d(),v&&v.d(),d=!1,x()}}}let P0="@fantastic.frontier";function m4(n,e,t){let r,i,s;Ie(n,$e,K=>t(22,r=K)),Ie(n,Bi,K=>t(41,i=K)),Ie(n,ei,K=>t(42,s=K));let{onlyReset:o=!1,verifyAndSync:c}=e,l=!1,a=!1,u=!1,h=!!o,f=!1,d=!1,x=!1,g=["admin","administrator","administration","advertiser","affiliate","affiliation","anonymous","bot","contributor","creator","designer","dev","developer","editor","guest","helper","management","manager","member","mod","moderation","moderator","name","operator","owner","service","staff","support","system","tester","user","username","visitor","website","xt8","xt8ss","xtss","xt_ss","you","yourname","yourusername"],p={question:"",answer:"",username:s||"",password:"",confirm:""},E={loginWrong:{active:!1,message:"That's not quite right!"},userNotFound:{active:!1,message:"Please make sure your username is correct!"},usernameUnavailable:{active:!1,message:"That username isn't available!"},usernameDupe:{active:!1,message:"That username is already taken!"},usernameLength:{active:!1,message:"Please make your username between 2-20 characters!"},passwordReset:{active:!1,message:"That's not quite right either!"},passwordLength:{active:!1,message:"Please make your password between 6-20 characters!"},passwordMatch:{active:!1,message:"Please make sure your passwords match!"},questionLength:{active:!1,message:"Please make your question between 10-35 characters!"},answerLength:{active:!1,message:"Please make your answer between 1-35 characters!"},answerWrong:{active:!1,message:"That's not quite right!"}},v=!1,_=[],m,C={},A=[];o&&w();async function D(){u||d?(G(),Y(),setTimeout(()=>{_.length||(u?b():d&&y())})):a?(M(),P(),setTimeout(async()=>{if(!_.length){if(await w(),jt(C)){S("usernameDupe");return}t(6,u=!0)}})):f?(P(),setTimeout(()=>{_.length||(t(2,p.answer="",p),t(9,d=!0))})):h?((!o||o&&!p.password)&&Y(),o&&!p.answer&&H(),setTimeout(()=>{if(!_.length){if((!o||o&&!p.password)&&T0(C.security.answer.toString(),C.uid)!==p.answer){S("answerWrong");return}if(o&&!p.answer&&T0(C.password,C.uid)!==p.password){S("loginWrong");return}t(2,p.password="",p),t(2,p.confirm="",p),t(7,h=!1),t(8,f=!0)}})):(H(),setTimeout(async()=>{if(!_.length){if(await w(),!jt(C)){S("loginWrong");return}F()}}))}async function b(){be(Bi,i=!0,i),t(4,v=!0),be(ei,s=p.username,s),await c_(lt,s+P0,p.password),await u_(lt.currentUser,{displayName:s}),await $l(Vn(S0,`${s.toLowerCase()}/userInfo`),k()).then(()=>be(Bi,i=!1,i)),t(4,v=!1),B(),setTimeout(c,200)}async function F(){t(4,v=!0);try{await tl(lt,p.username+P0,p.password)}catch{S("loginWrong"),t(4,v=!1);return}t(4,v=!1),B()}async function y(){t(4,v=!0),o&&(await lt.signOut(),t(2,p.username=C.displayName,p)),await tl(lt,p.username+P0,T0(C.password,C.uid)),await f_(lt.currentUser,p.password),await $l(Vn(S0,`${p.username.toLowerCase()}/userInfo`),k(C.displayName)),t(4,v=!1),B()}async function w(){let K=p.username,ke=p.username.toLowerCase();if(!K||K.length<2||A.includes(ke)){t(11,C={});return}if(!jt(C)||C.username!==ke){t(4,v=!0);let St=(await qo(Vo(Vn(S0,`${ke}/userInfo`),$o()))).val();St?t(11,C={username:ke,...St}):(t(11,C={}),A.push(ke)),t(4,v=!1)}}function k(K){return{displayName:K||p.username,password:Vl(p.password),security:{question:p.question,answer:Vl(p.answer)},uid:lt.currentUser.uid}}function B(){t(21,le=!0),setTimeout(Mn)}function P(){(p.password.length<6||p.password.length>20)&&S("passwordLength"),p.password!==p.confirm&&S("passwordMatch")}function H(){(p.password.length<6||p.password.length>20)&&S("loginWrong")}function M(){g.includes(p.username.toLowerCase())?S("usernameUnavailable"):(p.username.length<2||p.username.length>20)&&S("usernameLength")}function G(){(p.question.length<10||p.question.length>35)&&S("questionLength")}function Y(){(!p.answer.length||p.answer.length>35)&&S("answerLength")}function Q(K){T(Vm,20,K)}function X(K){T(/[^a-zA-Z0-9 \$\.\,\?\"\!\@\#\%\&\/\>\<\'\:\;\~\+\=\-]/g,35,K)}function I(K){T(/[^a-zA-Z0-9\^\$\*\.\[\]\{\}\(\)\?\"\!\@\#\%\&\/\\\,\>\<\'\:\;\|\_\~\`\+\=\-]/g,20,K)}function T(K,ke,St){t(2,p[St]=p[St].replace(K,"").slice(0,ke),p)}function R(){for(let K in p)t(2,p[K]="",p)}function S(K){t(3,E[K].active=!0,E)}function J(){be($e,r.preventClosing=!!v,r)}const Z=vf();let le=!1;function $(){p.question=this.value,t(2,p)}const Ke=()=>X("question");function He(){p.answer=this.value,t(2,p)}const xt=()=>X("answer"),Ye=K=>{vt(K),!v&&(u?t(6,u=!1):d?t(9,d=!1):t(7,h=!1))};function ge(){p.password=this.value,t(2,p)}const he=()=>I("password"),st=K=>{vt(K),t(10,x=!x)},Xe=K=>{vt(K),!v&&(t(1,a=!a),t(10,x=!1))};function ot(){p.username=this.value,t(2,p)}const Qe=()=>Q("username");function pt(){p.password=this.value,t(2,p)}const Ze=()=>I("password");function me(){p.confirm=this.value,t(2,p)}const pe=()=>I("confirm"),Fe=async K=>{if(vt(K),!v){if(await w(),!jt(C)){S("userNotFound");return}t(7,h=!0)}},z=K=>{vt(K),t(10,x=!x)},xe=K=>{vt(K),!v&&D()};return n.$$set=K=>{"onlyReset"in K&&t(0,o=K.onlyReset),"verifyAndSync"in K&&t(18,c=K.verifyAndSync)},n.$$.update=()=>{n.$$.dirty[0]&2&&(a||!a)&&R(),n.$$.dirty[0]&524293&&!l&&o&&(p.answer||p.password)&&(t(4,v=!0),setTimeout(()=>{R(),t(4,v=!1)},100),t(19,l=!0)),n.$$.dirty[0]&1048616&&E&&(t(5,_=Object.keys(E).filter(K=>E[K].active)),_.length&&(clearTimeout(m),t(20,m=setTimeout(()=>{t(5,_=[]);for(let K in E)t(3,E[K].active=!1,E)},2500)))),n.$$.dirty[0]&16&&(v||!v)&&J(),n.$$.dirty[0]&6291456&&r.component===null&&!le&&Z("signupAndLoginClose")},[o,a,p,E,v,_,u,h,f,d,x,C,D,w,Q,X,I,S,c,l,m,le,r,$,Ke,He,xt,Ye,ge,he,st,Xe,ot,Qe,pt,Ze,me,pe,Fe,z,xe]}class Oh extends Dt{constructor(e){super(),bt(this,e,m4,g4,ht,{onlyReset:0,verifyAndSync:18},null,[-1,-1])}}function E4(n){let e,t,r,i,s,o,c,l,a,u,h,f,d,x,g,p;return t=new l4({props:{username:n[0],tooltipPosition:"top"}}),{c(){e=L("span"),_n(t.$$.fragment),r=j(),i=L("hr"),s=j(),o=L("div"),c=L("span"),l=te(`Created\r
        `),a=L("hl"),a.textContent=`${new Date(parseInt(n[2])).toLocaleDateString(void 0,{dateStyle:"long"})}`,u=j(),h=L("button"),h.textContent="Reset Security Question & Password",f=j(),d=L("button"),d.textContent="Log Out",O(e,"class","title"),O(h,"class","textBtn smaller-fs no-bg no-bg-change"),O(d,"class","mainBtn border-tp br-1"),O(o,"class","contents flex fd-col"),it(o,"row-gap","2.5rem")},m(E,v){W(E,e,v),en(t,e,null),W(E,r,v),W(E,i,v),W(E,s,v),W(E,o,v),N(o,c),N(c,l),N(c,a),N(o,u),N(o,h),N(o,f),N(o,d),x=!0,g||(p=[re(h,"click",n[3]),re(d,"click",n[4])],g=!0)},p(E,[v]){const _={};v&1&&(_.username=E[0]),t.$set(_)},i(E){x||(ae(t.$$.fragment,E),x=!0)},o(E){Ce(t.$$.fragment,E),x=!1},d(E){E&&(U(e),U(r),U(i),U(s),U(o)),tn(t),g=!1,Re(p)}}}function C4(n,e,t){let r,i,s;Ie(n,jo,a=>t(5,r=a)),Ie(n,ei,a=>t(0,i=a)),Ie(n,$e,a=>t(1,s=a));let o=r.metadata.createdAt;return[i,s,o,()=>{be($e,s.props.onlyReset=!0,s),be($e,s.component=Oh,s)},()=>{lt.signOut(),Rh("logOut","You logged out"),Mn()}]}class y4 extends Dt{constructor(e){super(),bt(this,e,C4,E4,ht,{})}}function ou(n){let e,t,r;return{c(){e=L("iconify-icon"),Oe(e,"icon","uil:exclamation"),Oe(e,"id","unseen")},m(i,s){W(i,e,s),r=!0},i(i){r||(i&&Ge(()=>{r&&(t||(t=nt(e,tt,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=nt(e,tt,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&U(e),i&&t&&t.end()}}}function A4(n){let e,t,r,i,s=n[3]?"Account":"Log In",o,c,l,a,u,h,f,d,x,g,p,E,v,_,m,C,A,D,b=!n[4]&&ou();return{c(){e=L("div"),t=L("div"),t.innerHTML='<iconify-icon icon="logos:discord-icon"></iconify-icon> <span>xt.ss</span>',r=j(),i=L("button"),o=te(s),c=j(),l=L("a"),l.innerHTML=`<img src="${Qa+"/ko-fi/icon.png"}" alt="Ko-fi"/> <span class="tooltip" id="left">Support Me</span>`,a=j(),u=L("button"),h=L("iconify-icon"),f=j(),d=L("span"),d.textContent="Changelog",x=j(),b&&b.c(),g=j(),p=L("div"),E=te(n[0]),v=j(),_=L("button"),_.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',O(t,"class","info flex"),O(t,"id","credits"),O(i,"class","info flex pos-rel bs svelte-ga1qhj"),O(i,"id","account"),O(l,"href","https://ko-fi.com/xt8ss"),O(l,"target","_blank"),O(l,"class","info bg-change svelte-ga1qhj"),O(l,"id","donate"),Oe(h,"icon","octicon:log-16"),O(d,"class","tooltip"),O(d,"id","right"),O(u,"class","info svelte-ga1qhj"),O(u,"id","changelog"),O(p,"class","info"),O(p,"id","version"),O(_,"class","info"),O(_,"id","policy")},m(F,y){W(F,e,y),N(e,t),N(e,r),N(e,i),N(i,o),N(e,c),N(e,l),N(e,a),N(e,u),N(u,h),N(u,f),N(u,d),N(u,x),b&&b.m(u,null),N(e,g),N(e,p),N(p,E),N(e,v),N(e,_),C=!0,A||(D=[re(i,"click",n[5]),re(u,"click",n[6]),re(_,"click",n[7])],A=!0)},p(F,[y]){(!C||y&8)&&s!==(s=F[3]?"Account":"Log In")&&De(o,s),F[4]?b&&(gt(),Ce(b,1,1,()=>{b=null}),mt()):b?y&16&&ae(b,1):(b=ou(),b.c(),ae(b,1),b.m(u,null)),(!C||y&1)&&De(E,F[0])},i(F){C||(ae(b),F&&Ge(()=>{C&&(m||(m=nt(e,tt,{duration:250},!0)),m.run(1))}),C=!0)},o(F){Ce(b),F&&(m||(m=nt(e,tt,{duration:250},!1)),m.run(0)),C=!1},d(F){F&&U(e),b&&b.d(),F&&m&&m.end(),A=!1,Re(D)}}}function b4(n,e,t){let r,i,s;Ie(n,$e,h=>t(2,r=h)),Ie(n,Ko,h=>t(3,i=h)),Ie(n,ti,h=>t(4,s=h));let{version:o,verifyAndSync:c}=e;const l=h=>{vt(h),be($e,r.props={verifyAndSync:c},r),be($e,r.component=i?y4:Oh,r)},a=h=>{vt(h),be($e,r.component=i4,r),be(ti,s=!0,s)},u=h=>{vt(h),be($e,r.component=o4,r)};return n.$$set=h=>{"version"in h&&t(0,o=h.version),"verifyAndSync"in h&&t(1,c=h.verifyAndSync)},[o,c,r,i,s,l,a,u]}class D4 extends Dt{constructor(e){super(),bt(this,e,b4,A4,ht,{version:0,verifyAndSync:1})}}var Lh={exports:{}},N0={exports:{}},au;function fe(){return au||(au=1,function(n,e){(function(t,r){n.exports=r()})(V,function(){var t=t||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof V<"u"&&V.crypto&&(s=V.crypto),!s&&typeof yf=="function")try{s=Af}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},c=Object.create||function(){function v(){}return function(_){var m;return v.prototype=_,m=new v,v.prototype=null,m}}(),l={},a=l.lib={},u=a.Base=function(){return{extend:function(v){var _=c(this);return v&&_.mixIn(v),(!_.hasOwnProperty("init")||this.init===_.init)&&(_.init=function(){_.$super.init.apply(this,arguments)}),_.init.prototype=_,_.$super=this,_},create:function(){var v=this.extend();return v.init.apply(v,arguments),v},init:function(){},mixIn:function(v){for(var _ in v)v.hasOwnProperty(_)&&(this[_]=v[_]);v.hasOwnProperty("toString")&&(this.toString=v.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=a.WordArray=u.extend({init:function(v,_){v=this.words=v||[],_!=i?this.sigBytes=_:this.sigBytes=v.length*4},toString:function(v){return(v||d).stringify(this)},concat:function(v){var _=this.words,m=v.words,C=this.sigBytes,A=v.sigBytes;if(this.clamp(),C%4)for(var D=0;D<A;D++){var b=m[D>>>2]>>>24-D%4*8&255;_[C+D>>>2]|=b<<24-(C+D)%4*8}else for(var F=0;F<A;F+=4)_[C+F>>>2]=m[F>>>2];return this.sigBytes+=A,this},clamp:function(){var v=this.words,_=this.sigBytes;v[_>>>2]&=4294967295<<32-_%4*8,v.length=r.ceil(_/4)},clone:function(){var v=u.clone.call(this);return v.words=this.words.slice(0),v},random:function(v){for(var _=[],m=0;m<v;m+=4)_.push(o());return new h.init(_,v)}}),f=l.enc={},d=f.Hex={stringify:function(v){for(var _=v.words,m=v.sigBytes,C=[],A=0;A<m;A++){var D=_[A>>>2]>>>24-A%4*8&255;C.push((D>>>4).toString(16)),C.push((D&15).toString(16))}return C.join("")},parse:function(v){for(var _=v.length,m=[],C=0;C<_;C+=2)m[C>>>3]|=parseInt(v.substr(C,2),16)<<24-C%8*4;return new h.init(m,_/2)}},x=f.Latin1={stringify:function(v){for(var _=v.words,m=v.sigBytes,C=[],A=0;A<m;A++){var D=_[A>>>2]>>>24-A%4*8&255;C.push(String.fromCharCode(D))}return C.join("")},parse:function(v){for(var _=v.length,m=[],C=0;C<_;C++)m[C>>>2]|=(v.charCodeAt(C)&255)<<24-C%4*8;return new h.init(m,_)}},g=f.Utf8={stringify:function(v){try{return decodeURIComponent(escape(x.stringify(v)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(v){return x.parse(unescape(encodeURIComponent(v)))}},p=a.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(v){typeof v=="string"&&(v=g.parse(v)),this._data.concat(v),this._nDataBytes+=v.sigBytes},_process:function(v){var _,m=this._data,C=m.words,A=m.sigBytes,D=this.blockSize,b=D*4,F=A/b;v?F=r.ceil(F):F=r.max((F|0)-this._minBufferSize,0);var y=F*D,w=r.min(y*4,A);if(y){for(var k=0;k<y;k+=D)this._doProcessBlock(C,k);_=C.splice(0,y),m.sigBytes-=w}return new h.init(_,w)},clone:function(){var v=u.clone.call(this);return v._data=this._data.clone(),v},_minBufferSize:0});a.Hasher=p.extend({cfg:u.extend(),init:function(v){this.cfg=this.cfg.extend(v),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(v){return this._append(v),this._process(),this},finalize:function(v){v&&this._append(v);var _=this._doFinalize();return _},blockSize:16,_createHelper:function(v){return function(_,m){return new v.init(m).finalize(_)}},_createHmacHelper:function(v){return function(_,m){return new E.HMAC.init(v,m).finalize(_)}}});var E=l.algo={};return l}(Math);return t})}(N0)),N0.exports}var O0={exports:{}},cu;function Es(){return cu||(cu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.Base,c=s.WordArray,l=i.x64={};l.Word=o.extend({init:function(a,u){this.high=a,this.low=u}}),l.WordArray=o.extend({init:function(a,u){a=this.words=a||[],u!=r?this.sigBytes=u:this.sigBytes=a.length*8},toX32:function(){for(var a=this.words,u=a.length,h=[],f=0;f<u;f++){var d=a[f];h.push(d.high),h.push(d.low)}return c.create(h,this.sigBytes)},clone:function(){for(var a=o.clone.call(this),u=a.words=this.words.slice(0),h=u.length,f=0;f<h;f++)u[f]=u[f].clone();return a}})}(),t})}(O0)),O0.exports}var L0={exports:{}},lu;function w4(){return lu||(lu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){return function(){if(typeof ArrayBuffer=="function"){var r=t,i=r.lib,s=i.WordArray,o=s.init,c=s.init=function(l){if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),(l instanceof Int8Array||typeof Uint8ClampedArray<"u"&&l instanceof Uint8ClampedArray||l instanceof Int16Array||l instanceof Uint16Array||l instanceof Int32Array||l instanceof Uint32Array||l instanceof Float32Array||l instanceof Float64Array)&&(l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),l instanceof Uint8Array){for(var a=l.byteLength,u=[],h=0;h<a;h++)u[h>>>2]|=l[h]<<24-h%4*8;o.call(this,u,a)}else o.apply(this,arguments)};c.prototype=s}}(),t.lib.WordArray})}(L0)),L0.exports}var M0={exports:{}},uu;function B4(){return uu||(uu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(l){for(var a=l.words,u=l.sigBytes,h=[],f=0;f<u;f+=2){var d=a[f>>>2]>>>16-f%4*8&65535;h.push(String.fromCharCode(d))}return h.join("")},parse:function(l){for(var a=l.length,u=[],h=0;h<a;h++)u[h>>>1]|=l.charCodeAt(h)<<16-h%2*16;return s.create(u,a*2)}},o.Utf16LE={stringify:function(l){for(var a=l.words,u=l.sigBytes,h=[],f=0;f<u;f+=2){var d=c(a[f>>>2]>>>16-f%4*8&65535);h.push(String.fromCharCode(d))}return h.join("")},parse:function(l){for(var a=l.length,u=[],h=0;h<a;h++)u[h>>>1]|=c(l.charCodeAt(h)<<16-h%2*16);return s.create(u,a*2)}};function c(l){return l<<8&4278255360|l>>>8&16711935}}(),t.enc.Utf16})}(M0)),M0.exports}var H0={exports:{}},fu;function In(){return fu||(fu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(l){var a=l.words,u=l.sigBytes,h=this._map;l.clamp();for(var f=[],d=0;d<u;d+=3)for(var x=a[d>>>2]>>>24-d%4*8&255,g=a[d+1>>>2]>>>24-(d+1)%4*8&255,p=a[d+2>>>2]>>>24-(d+2)%4*8&255,E=x<<16|g<<8|p,v=0;v<4&&d+v*.75<u;v++)f.push(h.charAt(E>>>6*(3-v)&63));var _=h.charAt(64);if(_)for(;f.length%4;)f.push(_);return f.join("")},parse:function(l){var a=l.length,u=this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var f=0;f<u.length;f++)h[u.charCodeAt(f)]=f}var d=u.charAt(64);if(d){var x=l.indexOf(d);x!==-1&&(a=x)}return c(l,a,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function c(l,a,u){for(var h=[],f=0,d=0;d<a;d++)if(d%4){var x=u[l.charCodeAt(d-1)]<<d%4*2,g=u[l.charCodeAt(d)]>>>6-d%4*2,p=x|g;h[f>>>2]|=p<<24-f%4*8,f++}return s.create(h,f)}}(),t.enc.Base64})}(H0)),H0.exports}var U0={exports:{}},du;function F4(){return du||(du=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(l,a){a===void 0&&(a=!0);var u=l.words,h=l.sigBytes,f=a?this._safe_map:this._map;l.clamp();for(var d=[],x=0;x<h;x+=3)for(var g=u[x>>>2]>>>24-x%4*8&255,p=u[x+1>>>2]>>>24-(x+1)%4*8&255,E=u[x+2>>>2]>>>24-(x+2)%4*8&255,v=g<<16|p<<8|E,_=0;_<4&&x+_*.75<h;_++)d.push(f.charAt(v>>>6*(3-_)&63));var m=f.charAt(64);if(m)for(;d.length%4;)d.push(m);return d.join("")},parse:function(l,a){a===void 0&&(a=!0);var u=l.length,h=a?this._safe_map:this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var d=0;d<h.length;d++)f[h.charCodeAt(d)]=d}var x=h.charAt(64);if(x){var g=l.indexOf(x);g!==-1&&(u=g)}return c(l,u,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function c(l,a,u){for(var h=[],f=0,d=0;d<a;d++)if(d%4){var x=u[l.charCodeAt(d-1)]<<d%4*2,g=u[l.charCodeAt(d)]>>>6-d%4*2,p=x|g;h[f>>>2]|=p<<24-f%4*8,f++}return s.create(h,f)}}(),t.enc.Base64url})}(U0)),U0.exports}var W0={exports:{}},hu;function Sn(){return hu||(hu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=[];(function(){for(var g=0;g<64;g++)a[g]=r.abs(r.sin(g+1))*4294967296|0})();var u=l.MD5=c.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,p){for(var E=0;E<16;E++){var v=p+E,_=g[v];g[v]=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360}var m=this._hash.words,C=g[p+0],A=g[p+1],D=g[p+2],b=g[p+3],F=g[p+4],y=g[p+5],w=g[p+6],k=g[p+7],B=g[p+8],P=g[p+9],H=g[p+10],M=g[p+11],G=g[p+12],Y=g[p+13],Q=g[p+14],X=g[p+15],I=m[0],T=m[1],R=m[2],S=m[3];I=h(I,T,R,S,C,7,a[0]),S=h(S,I,T,R,A,12,a[1]),R=h(R,S,I,T,D,17,a[2]),T=h(T,R,S,I,b,22,a[3]),I=h(I,T,R,S,F,7,a[4]),S=h(S,I,T,R,y,12,a[5]),R=h(R,S,I,T,w,17,a[6]),T=h(T,R,S,I,k,22,a[7]),I=h(I,T,R,S,B,7,a[8]),S=h(S,I,T,R,P,12,a[9]),R=h(R,S,I,T,H,17,a[10]),T=h(T,R,S,I,M,22,a[11]),I=h(I,T,R,S,G,7,a[12]),S=h(S,I,T,R,Y,12,a[13]),R=h(R,S,I,T,Q,17,a[14]),T=h(T,R,S,I,X,22,a[15]),I=f(I,T,R,S,A,5,a[16]),S=f(S,I,T,R,w,9,a[17]),R=f(R,S,I,T,M,14,a[18]),T=f(T,R,S,I,C,20,a[19]),I=f(I,T,R,S,y,5,a[20]),S=f(S,I,T,R,H,9,a[21]),R=f(R,S,I,T,X,14,a[22]),T=f(T,R,S,I,F,20,a[23]),I=f(I,T,R,S,P,5,a[24]),S=f(S,I,T,R,Q,9,a[25]),R=f(R,S,I,T,b,14,a[26]),T=f(T,R,S,I,B,20,a[27]),I=f(I,T,R,S,Y,5,a[28]),S=f(S,I,T,R,D,9,a[29]),R=f(R,S,I,T,k,14,a[30]),T=f(T,R,S,I,G,20,a[31]),I=d(I,T,R,S,y,4,a[32]),S=d(S,I,T,R,B,11,a[33]),R=d(R,S,I,T,M,16,a[34]),T=d(T,R,S,I,Q,23,a[35]),I=d(I,T,R,S,A,4,a[36]),S=d(S,I,T,R,F,11,a[37]),R=d(R,S,I,T,k,16,a[38]),T=d(T,R,S,I,H,23,a[39]),I=d(I,T,R,S,Y,4,a[40]),S=d(S,I,T,R,C,11,a[41]),R=d(R,S,I,T,b,16,a[42]),T=d(T,R,S,I,w,23,a[43]),I=d(I,T,R,S,P,4,a[44]),S=d(S,I,T,R,G,11,a[45]),R=d(R,S,I,T,X,16,a[46]),T=d(T,R,S,I,D,23,a[47]),I=x(I,T,R,S,C,6,a[48]),S=x(S,I,T,R,k,10,a[49]),R=x(R,S,I,T,Q,15,a[50]),T=x(T,R,S,I,y,21,a[51]),I=x(I,T,R,S,G,6,a[52]),S=x(S,I,T,R,b,10,a[53]),R=x(R,S,I,T,H,15,a[54]),T=x(T,R,S,I,A,21,a[55]),I=x(I,T,R,S,B,6,a[56]),S=x(S,I,T,R,X,10,a[57]),R=x(R,S,I,T,w,15,a[58]),T=x(T,R,S,I,Y,21,a[59]),I=x(I,T,R,S,F,6,a[60]),S=x(S,I,T,R,M,10,a[61]),R=x(R,S,I,T,D,15,a[62]),T=x(T,R,S,I,P,21,a[63]),m[0]=m[0]+I|0,m[1]=m[1]+T|0,m[2]=m[2]+R|0,m[3]=m[3]+S|0},_doFinalize:function(){var g=this._data,p=g.words,E=this._nDataBytes*8,v=g.sigBytes*8;p[v>>>5]|=128<<24-v%32;var _=r.floor(E/4294967296),m=E;p[(v+64>>>9<<4)+15]=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,p[(v+64>>>9<<4)+14]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360,g.sigBytes=(p.length+1)*4,this._process();for(var C=this._hash,A=C.words,D=0;D<4;D++){var b=A[D];A[D]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360}return C},clone:function(){var g=c.clone.call(this);return g._hash=this._hash.clone(),g}});function h(g,p,E,v,_,m,C){var A=g+(p&E|~p&v)+_+C;return(A<<m|A>>>32-m)+p}function f(g,p,E,v,_,m,C){var A=g+(p&v|E&~v)+_+C;return(A<<m|A>>>32-m)+p}function d(g,p,E,v,_,m,C){var A=g+(p^E^v)+_+C;return(A<<m|A>>>32-m)+p}function x(g,p,E,v,_,m,C){var A=g+(E^(p|~v))+_+C;return(A<<m|A>>>32-m)+p}i.MD5=c._createHelper(u),i.HmacMD5=c._createHmacHelper(u)}(Math),t.MD5})}(W0)),W0.exports}var z0={exports:{}},xu;function Mh(){return xu||(xu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.Hasher,c=r.algo,l=[],a=c.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,h){for(var f=this._hash.words,d=f[0],x=f[1],g=f[2],p=f[3],E=f[4],v=0;v<80;v++){if(v<16)l[v]=u[h+v]|0;else{var _=l[v-3]^l[v-8]^l[v-14]^l[v-16];l[v]=_<<1|_>>>31}var m=(d<<5|d>>>27)+E+l[v];v<20?m+=(x&g|~x&p)+1518500249:v<40?m+=(x^g^p)+1859775393:v<60?m+=(x&g|x&p|g&p)-1894007588:m+=(x^g^p)-899497514,E=p,p=g,g=x<<30|x>>>2,x=d,d=m}f[0]=f[0]+d|0,f[1]=f[1]+x|0,f[2]=f[2]+g|0,f[3]=f[3]+p|0,f[4]=f[4]+E|0},_doFinalize:function(){var u=this._data,h=u.words,f=this._nDataBytes*8,d=u.sigBytes*8;return h[d>>>5]|=128<<24-d%32,h[(d+64>>>9<<4)+14]=Math.floor(f/4294967296),h[(d+64>>>9<<4)+15]=f,u.sigBytes=h.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(a),r.HmacSHA1=o._createHmacHelper(a)}(),t.SHA1})}(z0)),z0.exports}var q0={exports:{}},pu;function Za(){return pu||(pu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=[],u=[];(function(){function d(E){for(var v=r.sqrt(E),_=2;_<=v;_++)if(!(E%_))return!1;return!0}function x(E){return(E-(E|0))*4294967296|0}for(var g=2,p=0;p<64;)d(g)&&(p<8&&(a[p]=x(r.pow(g,1/2))),u[p]=x(r.pow(g,1/3)),p++),g++})();var h=[],f=l.SHA256=c.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(d,x){for(var g=this._hash.words,p=g[0],E=g[1],v=g[2],_=g[3],m=g[4],C=g[5],A=g[6],D=g[7],b=0;b<64;b++){if(b<16)h[b]=d[x+b]|0;else{var F=h[b-15],y=(F<<25|F>>>7)^(F<<14|F>>>18)^F>>>3,w=h[b-2],k=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;h[b]=y+h[b-7]+k+h[b-16]}var B=m&C^~m&A,P=p&E^p&v^E&v,H=(p<<30|p>>>2)^(p<<19|p>>>13)^(p<<10|p>>>22),M=(m<<26|m>>>6)^(m<<21|m>>>11)^(m<<7|m>>>25),G=D+M+B+u[b]+h[b],Y=H+P;D=A,A=C,C=m,m=_+G|0,_=v,v=E,E=p,p=G+Y|0}g[0]=g[0]+p|0,g[1]=g[1]+E|0,g[2]=g[2]+v|0,g[3]=g[3]+_|0,g[4]=g[4]+m|0,g[5]=g[5]+C|0,g[6]=g[6]+A|0,g[7]=g[7]+D|0},_doFinalize:function(){var d=this._data,x=d.words,g=this._nDataBytes*8,p=d.sigBytes*8;return x[p>>>5]|=128<<24-p%32,x[(p+64>>>9<<4)+14]=r.floor(g/4294967296),x[(p+64>>>9<<4)+15]=g,d.sigBytes=x.length*4,this._process(),this._hash},clone:function(){var d=c.clone.call(this);return d._hash=this._hash.clone(),d}});i.SHA256=c._createHelper(f),i.HmacSHA256=c._createHmacHelper(f)}(Math),t.SHA256})}(q0)),q0.exports}var $0={exports:{}},_u;function k4(){return _u||(_u=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Za())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.algo,c=o.SHA256,l=o.SHA224=c.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=c._doFinalize.call(this);return a.sigBytes-=4,a}});r.SHA224=c._createHelper(l),r.HmacSHA224=c._createHmacHelper(l)}(),t.SHA224})}($0)),$0.exports}var V0={exports:{}},vu;function Hh(){return vu||(vu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Es())})(V,function(t){return function(){var r=t,i=r.lib,s=i.Hasher,o=r.x64,c=o.Word,l=o.WordArray,a=r.algo;function u(){return c.create.apply(c,arguments)}var h=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],f=[];(function(){for(var x=0;x<80;x++)f[x]=u()})();var d=a.SHA512=s.extend({_doReset:function(){this._hash=new l.init([new c.init(1779033703,4089235720),new c.init(3144134277,2227873595),new c.init(1013904242,4271175723),new c.init(2773480762,1595750129),new c.init(1359893119,2917565137),new c.init(2600822924,725511199),new c.init(528734635,4215389547),new c.init(1541459225,327033209)])},_doProcessBlock:function(x,g){for(var p=this._hash.words,E=p[0],v=p[1],_=p[2],m=p[3],C=p[4],A=p[5],D=p[6],b=p[7],F=E.high,y=E.low,w=v.high,k=v.low,B=_.high,P=_.low,H=m.high,M=m.low,G=C.high,Y=C.low,Q=A.high,X=A.low,I=D.high,T=D.low,R=b.high,S=b.low,J=F,Z=y,le=w,$=k,Ke=B,He=P,xt=H,Ye=M,ge=G,he=Y,st=Q,Xe=X,ot=I,Qe=T,pt=R,Ze=S,me=0;me<80;me++){var pe,Fe,z=f[me];if(me<16)Fe=z.high=x[g+me*2]|0,pe=z.low=x[g+me*2+1]|0;else{var xe=f[me-15],K=xe.high,ke=xe.low,St=(K>>>1|ke<<31)^(K>>>8|ke<<24)^K>>>7,dr=(ke>>>1|K<<31)^(ke>>>8|K<<24)^(ke>>>7|K<<25),hr=f[me-2],at=hr.high,_t=hr.low,Cs=(at>>>19|_t<<13)^(at<<3|_t>>>29)^at>>>6,xr=(_t>>>19|at<<13)^(_t<<3|at>>>29)^(_t>>>6|at<<26),pr=f[me-7],ys=pr.high,As=pr.low,_r=f[me-16],bs=_r.high,vr=_r.low;pe=dr+As,Fe=St+ys+(pe>>>0<dr>>>0?1:0),pe=pe+xr,Fe=Fe+Cs+(pe>>>0<xr>>>0?1:0),pe=pe+vr,Fe=Fe+bs+(pe>>>0<vr>>>0?1:0),z.high=Fe,z.low=pe}var Ds=ge&st^~ge&ot,gr=he&Xe^~he&Qe,ws=J&le^J&Ke^le&Ke,Bs=Z&$^Z&He^$&He,Fs=(J>>>28|Z<<4)^(J<<30|Z>>>2)^(J<<25|Z>>>7),mr=(Z>>>28|J<<4)^(Z<<30|J>>>2)^(Z<<25|J>>>7),ks=(ge>>>14|he<<18)^(ge>>>18|he<<14)^(ge<<23|he>>>9),Is=(he>>>14|ge<<18)^(he>>>18|ge<<14)^(he<<23|ge>>>9),Er=h[me],Ss=Er.high,Cr=Er.low,Ee=Ze+Is,Ue=pt+ks+(Ee>>>0<Ze>>>0?1:0),Ee=Ee+gr,Ue=Ue+Ds+(Ee>>>0<gr>>>0?1:0),Ee=Ee+Cr,Ue=Ue+Ss+(Ee>>>0<Cr>>>0?1:0),Ee=Ee+pe,Ue=Ue+Fe+(Ee>>>0<pe>>>0?1:0),yr=mr+Bs,Ts=Fs+ws+(yr>>>0<mr>>>0?1:0);pt=ot,Ze=Qe,ot=st,Qe=Xe,st=ge,Xe=he,he=Ye+Ee|0,ge=xt+Ue+(he>>>0<Ye>>>0?1:0)|0,xt=Ke,Ye=He,Ke=le,He=$,le=J,$=Z,Z=Ee+yr|0,J=Ue+Ts+(Z>>>0<Ee>>>0?1:0)|0}y=E.low=y+Z,E.high=F+J+(y>>>0<Z>>>0?1:0),k=v.low=k+$,v.high=w+le+(k>>>0<$>>>0?1:0),P=_.low=P+He,_.high=B+Ke+(P>>>0<He>>>0?1:0),M=m.low=M+Ye,m.high=H+xt+(M>>>0<Ye>>>0?1:0),Y=C.low=Y+he,C.high=G+ge+(Y>>>0<he>>>0?1:0),X=A.low=X+Xe,A.high=Q+st+(X>>>0<Xe>>>0?1:0),T=D.low=T+Qe,D.high=I+ot+(T>>>0<Qe>>>0?1:0),S=b.low=S+Ze,b.high=R+pt+(S>>>0<Ze>>>0?1:0)},_doFinalize:function(){var x=this._data,g=x.words,p=this._nDataBytes*8,E=x.sigBytes*8;g[E>>>5]|=128<<24-E%32,g[(E+128>>>10<<5)+30]=Math.floor(p/4294967296),g[(E+128>>>10<<5)+31]=p,x.sigBytes=g.length*4,this._process();var v=this._hash.toX32();return v},clone:function(){var x=s.clone.call(this);return x._hash=this._hash.clone(),x},blockSize:1024/32});r.SHA512=s._createHelper(d),r.HmacSHA512=s._createHmacHelper(d)}(),t.SHA512})}(V0)),V0.exports}var G0={exports:{}},gu;function I4(){return gu||(gu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Es(),Hh())})(V,function(t){return function(){var r=t,i=r.x64,s=i.Word,o=i.WordArray,c=r.algo,l=c.SHA512,a=c.SHA384=l.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=l._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=l._createHelper(a),r.HmacSHA384=l._createHmacHelper(a)}(),t.SHA384})}(G0)),G0.exports}var j0={exports:{}},mu;function S4(){return mu||(mu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Es())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.x64,a=l.Word,u=i.algo,h=[],f=[],d=[];(function(){for(var p=1,E=0,v=0;v<24;v++){h[p+5*E]=(v+1)*(v+2)/2%64;var _=E%5,m=(2*p+3*E)%5;p=_,E=m}for(var p=0;p<5;p++)for(var E=0;E<5;E++)f[p+5*E]=E+(2*p+3*E)%5*5;for(var C=1,A=0;A<24;A++){for(var D=0,b=0,F=0;F<7;F++){if(C&1){var y=(1<<F)-1;y<32?b^=1<<y:D^=1<<y-32}C&128?C=C<<1^113:C<<=1}d[A]=a.create(D,b)}})();var x=[];(function(){for(var p=0;p<25;p++)x[p]=a.create()})();var g=u.SHA3=c.extend({cfg:c.cfg.extend({outputLength:512}),_doReset:function(){for(var p=this._state=[],E=0;E<25;E++)p[E]=new a.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(p,E){for(var v=this._state,_=this.blockSize/2,m=0;m<_;m++){var C=p[E+2*m],A=p[E+2*m+1];C=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,A=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360;var D=v[m];D.high^=A,D.low^=C}for(var b=0;b<24;b++){for(var F=0;F<5;F++){for(var y=0,w=0,k=0;k<5;k++){var D=v[F+5*k];y^=D.high,w^=D.low}var B=x[F];B.high=y,B.low=w}for(var F=0;F<5;F++)for(var P=x[(F+4)%5],H=x[(F+1)%5],M=H.high,G=H.low,y=P.high^(M<<1|G>>>31),w=P.low^(G<<1|M>>>31),k=0;k<5;k++){var D=v[F+5*k];D.high^=y,D.low^=w}for(var Y=1;Y<25;Y++){var y,w,D=v[Y],Q=D.high,X=D.low,I=h[Y];I<32?(y=Q<<I|X>>>32-I,w=X<<I|Q>>>32-I):(y=X<<I-32|Q>>>64-I,w=Q<<I-32|X>>>64-I);var T=x[f[Y]];T.high=y,T.low=w}var R=x[0],S=v[0];R.high=S.high,R.low=S.low;for(var F=0;F<5;F++)for(var k=0;k<5;k++){var Y=F+5*k,D=v[Y],J=x[Y],Z=x[(F+1)%5+5*k],le=x[(F+2)%5+5*k];D.high=J.high^~Z.high&le.high,D.low=J.low^~Z.low&le.low}var D=v[0],$=d[b];D.high^=$.high,D.low^=$.low}},_doFinalize:function(){var p=this._data,E=p.words;this._nDataBytes*8;var v=p.sigBytes*8,_=this.blockSize*32;E[v>>>5]|=1<<24-v%32,E[(r.ceil((v+1)/_)*_>>>5)-1]|=128,p.sigBytes=E.length*4,this._process();for(var m=this._state,C=this.cfg.outputLength/8,A=C/8,D=[],b=0;b<A;b++){var F=m[b],y=F.high,w=F.low;y=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,w=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360,D.push(w),D.push(y)}return new o.init(D,C)},clone:function(){for(var p=c.clone.call(this),E=p._state=this._state.slice(0),v=0;v<25;v++)E[v]=E[v].clone();return p}});i.SHA3=c._createHelper(g),i.HmacSHA3=c._createHmacHelper(g)}(Math),t.SHA3})}(j0)),j0.exports}var K0={exports:{}},Eu;function T4(){return Eu||(Eu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(r){var i=t,s=i.lib,o=s.WordArray,c=s.Hasher,l=i.algo,a=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),h=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),f=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),d=o.create([0,1518500249,1859775393,2400959708,2840853838]),x=o.create([1352829926,1548603684,1836072691,2053994217,0]),g=l.RIPEMD160=c.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(A,D){for(var b=0;b<16;b++){var F=D+b,y=A[F];A[F]=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360}var w=this._hash.words,k=d.words,B=x.words,P=a.words,H=u.words,M=h.words,G=f.words,Y,Q,X,I,T,R,S,J,Z,le;R=Y=w[0],S=Q=w[1],J=X=w[2],Z=I=w[3],le=T=w[4];for(var $,b=0;b<80;b+=1)$=Y+A[D+P[b]]|0,b<16?$+=p(Q,X,I)+k[0]:b<32?$+=E(Q,X,I)+k[1]:b<48?$+=v(Q,X,I)+k[2]:b<64?$+=_(Q,X,I)+k[3]:$+=m(Q,X,I)+k[4],$=$|0,$=C($,M[b]),$=$+T|0,Y=T,T=I,I=C(X,10),X=Q,Q=$,$=R+A[D+H[b]]|0,b<16?$+=m(S,J,Z)+B[0]:b<32?$+=_(S,J,Z)+B[1]:b<48?$+=v(S,J,Z)+B[2]:b<64?$+=E(S,J,Z)+B[3]:$+=p(S,J,Z)+B[4],$=$|0,$=C($,G[b]),$=$+le|0,R=le,le=Z,Z=C(J,10),J=S,S=$;$=w[1]+X+Z|0,w[1]=w[2]+I+le|0,w[2]=w[3]+T+R|0,w[3]=w[4]+Y+S|0,w[4]=w[0]+Q+J|0,w[0]=$},_doFinalize:function(){var A=this._data,D=A.words,b=this._nDataBytes*8,F=A.sigBytes*8;D[F>>>5]|=128<<24-F%32,D[(F+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360,A.sigBytes=(D.length+1)*4,this._process();for(var y=this._hash,w=y.words,k=0;k<5;k++){var B=w[k];w[k]=(B<<8|B>>>24)&16711935|(B<<24|B>>>8)&4278255360}return y},clone:function(){var A=c.clone.call(this);return A._hash=this._hash.clone(),A}});function p(A,D,b){return A^D^b}function E(A,D,b){return A&D|~A&b}function v(A,D,b){return(A|~D)^b}function _(A,D,b){return A&b|D&~b}function m(A,D,b){return A^(D|~b)}function C(A,D){return A<<D|A>>>32-D}i.RIPEMD160=c._createHelper(g),i.HmacRIPEMD160=c._createHmacHelper(g)}(),t.RIPEMD160})}(K0)),K0.exports}var Y0={exports:{}},Cu;function Ja(){return Cu||(Cu=1,function(n,e){(function(t,r){n.exports=r(fe())})(V,function(t){(function(){var r=t,i=r.lib,s=i.Base,o=r.enc,c=o.Utf8,l=r.algo;l.HMAC=s.extend({init:function(a,u){a=this._hasher=new a.init,typeof u=="string"&&(u=c.parse(u));var h=a.blockSize,f=h*4;u.sigBytes>f&&(u=a.finalize(u)),u.clamp();for(var d=this._oKey=u.clone(),x=this._iKey=u.clone(),g=d.words,p=x.words,E=0;E<h;E++)g[E]^=1549556828,p[E]^=909522486;d.sigBytes=x.sigBytes=f,this.reset()},reset:function(){var a=this._hasher;a.reset(),a.update(this._iKey)},update:function(a){return this._hasher.update(a),this},finalize:function(a){var u=this._hasher,h=u.finalize(a);u.reset();var f=u.finalize(this._oKey.clone().concat(h));return f}})})()})}(Y0)),Y0.exports}var X0={exports:{}},yu;function R4(){return yu||(yu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Za(),Ja())})(V,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,c=r.algo,l=c.SHA256,a=c.HMAC,u=c.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:25e4}),init:function(h){this.cfg=this.cfg.extend(h)},compute:function(h,f){for(var d=this.cfg,x=a.create(d.hasher,h),g=o.create(),p=o.create([1]),E=g.words,v=p.words,_=d.keySize,m=d.iterations;E.length<_;){var C=x.update(f).finalize(p);x.reset();for(var A=C.words,D=A.length,b=C,F=1;F<m;F++){b=x.finalize(b),x.reset();for(var y=b.words,w=0;w<D;w++)A[w]^=y[w]}g.concat(C),v[0]++}return g.sigBytes=_*4,g}});r.PBKDF2=function(h,f,d){return u.create(d).compute(h,f)}}(),t.PBKDF2})}(X0)),X0.exports}var Q0={exports:{}},Au;function ln(){return Au||(Au=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Mh(),Ja())})(V,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,c=r.algo,l=c.MD5,a=c.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,h){for(var f,d=this.cfg,x=d.hasher.create(),g=o.create(),p=g.words,E=d.keySize,v=d.iterations;p.length<E;){f&&x.update(f),f=x.update(u).finalize(h),x.reset();for(var _=1;_<v;_++)f=x.finalize(f),x.reset();g.concat(f)}return g.sigBytes=E*4,g}});r.EvpKDF=function(u,h,f){return a.create(f).compute(u,h)}}(),t.EvpKDF})}(Q0)),Q0.exports}var Z0={exports:{}},bu;function Me(){return bu||(bu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),ln())})(V,function(t){t.lib.Cipher||function(r){var i=t,s=i.lib,o=s.Base,c=s.WordArray,l=s.BufferedBlockAlgorithm,a=i.enc;a.Utf8;var u=a.Base64,h=i.algo,f=h.EvpKDF,d=s.Cipher=l.extend({cfg:o.extend(),createEncryptor:function(y,w){return this.create(this._ENC_XFORM_MODE,y,w)},createDecryptor:function(y,w){return this.create(this._DEC_XFORM_MODE,y,w)},init:function(y,w,k){this.cfg=this.cfg.extend(k),this._xformMode=y,this._key=w,this.reset()},reset:function(){l.reset.call(this),this._doReset()},process:function(y){return this._append(y),this._process()},finalize:function(y){y&&this._append(y);var w=this._doFinalize();return w},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function y(w){return typeof w=="string"?F:A}return function(w){return{encrypt:function(k,B,P){return y(B).encrypt(w,k,B,P)},decrypt:function(k,B,P){return y(B).decrypt(w,k,B,P)}}}}()});s.StreamCipher=d.extend({_doFinalize:function(){var y=this._process(!0);return y},blockSize:1});var x=i.mode={},g=s.BlockCipherMode=o.extend({createEncryptor:function(y,w){return this.Encryptor.create(y,w)},createDecryptor:function(y,w){return this.Decryptor.create(y,w)},init:function(y,w){this._cipher=y,this._iv=w}}),p=x.CBC=function(){var y=g.extend();y.Encryptor=y.extend({processBlock:function(k,B){var P=this._cipher,H=P.blockSize;w.call(this,k,B,H),P.encryptBlock(k,B),this._prevBlock=k.slice(B,B+H)}}),y.Decryptor=y.extend({processBlock:function(k,B){var P=this._cipher,H=P.blockSize,M=k.slice(B,B+H);P.decryptBlock(k,B),w.call(this,k,B,H),this._prevBlock=M}});function w(k,B,P){var H,M=this._iv;M?(H=M,this._iv=r):H=this._prevBlock;for(var G=0;G<P;G++)k[B+G]^=H[G]}return y}(),E=i.pad={},v=E.Pkcs7={pad:function(y,w){for(var k=w*4,B=k-y.sigBytes%k,P=B<<24|B<<16|B<<8|B,H=[],M=0;M<B;M+=4)H.push(P);var G=c.create(H,B);y.concat(G)},unpad:function(y){var w=y.words[y.sigBytes-1>>>2]&255;y.sigBytes-=w}};s.BlockCipher=d.extend({cfg:d.cfg.extend({mode:p,padding:v}),reset:function(){var y;d.reset.call(this);var w=this.cfg,k=w.iv,B=w.mode;this._xformMode==this._ENC_XFORM_MODE?y=B.createEncryptor:(y=B.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==y?this._mode.init(this,k&&k.words):(this._mode=y.call(B,this,k&&k.words),this._mode.__creator=y)},_doProcessBlock:function(y,w){this._mode.processBlock(y,w)},_doFinalize:function(){var y,w=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(w.pad(this._data,this.blockSize),y=this._process(!0)):(y=this._process(!0),w.unpad(y)),y},blockSize:128/32});var _=s.CipherParams=o.extend({init:function(y){this.mixIn(y)},toString:function(y){return(y||this.formatter).stringify(this)}}),m=i.format={},C=m.OpenSSL={stringify:function(y){var w,k=y.ciphertext,B=y.salt;return B?w=c.create([1398893684,1701076831]).concat(B).concat(k):w=k,w.toString(u)},parse:function(y){var w,k=u.parse(y),B=k.words;return B[0]==1398893684&&B[1]==1701076831&&(w=c.create(B.slice(2,4)),B.splice(0,4),k.sigBytes-=16),_.create({ciphertext:k,salt:w})}},A=s.SerializableCipher=o.extend({cfg:o.extend({format:C}),encrypt:function(y,w,k,B){B=this.cfg.extend(B);var P=y.createEncryptor(k,B),H=P.finalize(w),M=P.cfg;return _.create({ciphertext:H,key:k,iv:M.iv,algorithm:y,mode:M.mode,padding:M.padding,blockSize:y.blockSize,formatter:B.format})},decrypt:function(y,w,k,B){B=this.cfg.extend(B),w=this._parse(w,B.format);var P=y.createDecryptor(k,B).finalize(w.ciphertext);return P},_parse:function(y,w){return typeof y=="string"?w.parse(y,this):y}}),D=i.kdf={},b=D.OpenSSL={execute:function(y,w,k,B,P){if(B||(B=c.random(64/8)),P)var H=f.create({keySize:w+k,hasher:P}).compute(y,B);else var H=f.create({keySize:w+k}).compute(y,B);var M=c.create(H.words.slice(w),k*4);return H.sigBytes=w*4,_.create({key:H,iv:M,salt:B})}},F=s.PasswordBasedCipher=A.extend({cfg:A.cfg.extend({kdf:b}),encrypt:function(y,w,k,B){B=this.cfg.extend(B);var P=B.kdf.execute(k,y.keySize,y.ivSize,B.salt,B.hasher);B.iv=P.iv;var H=A.encrypt.call(this,y,w,P.key,B);return H.mixIn(P),H},decrypt:function(y,w,k,B){B=this.cfg.extend(B),w=this._parse(w,B.format);var P=B.kdf.execute(k,y.keySize,y.ivSize,w.salt,B.hasher);B.iv=P.iv;var H=A.decrypt.call(this,y,w,P.key,B);return H}})}()})}(Z0)),Z0.exports}var J0={exports:{}},Du;function P4(){return Du||(Du=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.mode.CFB=function(){var r=t.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize;i.call(this,s,o,l,c),this._prevBlock=s.slice(o,o+l)}}),r.Decryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=s.slice(o,o+l);i.call(this,s,o,l,c),this._prevBlock=a}});function i(s,o,c,l){var a,u=this._iv;u?(a=u.slice(0),this._iv=void 0):a=this._prevBlock,l.encryptBlock(a,0);for(var h=0;h<c;h++)s[o+h]^=a[h]}return r}(),t.mode.CFB})}(J0)),J0.exports}var eo={exports:{}},wu;function N4(){return wu||(wu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.mode.CTR=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=this._iv,u=this._counter;a&&(u=this._counter=a.slice(0),this._iv=void 0);var h=u.slice(0);c.encryptBlock(h,0),u[l-1]=u[l-1]+1|0;for(var f=0;f<l;f++)s[o+f]^=h[f]}});return r.Decryptor=i,r}(),t.mode.CTR})}(eo)),eo.exports}var to={exports:{}},Bu;function O4(){return Bu||(Bu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var r=t.lib.BlockCipherMode.extend();function i(c){if((c>>24&255)===255){var l=c>>16&255,a=c>>8&255,u=c&255;l===255?(l=0,a===255?(a=0,u===255?u=0:++u):++a):++l,c=0,c+=l<<16,c+=a<<8,c+=u}else c+=1<<24;return c}function s(c){return(c[0]=i(c[0]))===0&&(c[1]=i(c[1])),c}var o=r.Encryptor=r.extend({processBlock:function(c,l){var a=this._cipher,u=a.blockSize,h=this._iv,f=this._counter;h&&(f=this._counter=h.slice(0),this._iv=void 0),s(f);var d=f.slice(0);a.encryptBlock(d,0);for(var x=0;x<u;x++)c[l+x]^=d[x]}});return r.Decryptor=o,r}(),t.mode.CTRGladman})}(to)),to.exports}var no={exports:{}},Fu;function L4(){return Fu||(Fu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.mode.OFB=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var c=this._cipher,l=c.blockSize,a=this._iv,u=this._keystream;a&&(u=this._keystream=a.slice(0),this._iv=void 0),c.encryptBlock(u,0);for(var h=0;h<l;h++)s[o+h]^=u[h]}});return r.Decryptor=i,r}(),t.mode.OFB})}(no)),no.exports}var ro={exports:{}},ku;function M4(){return ku||(ku=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.mode.ECB=function(){var r=t.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),t.mode.ECB})}(ro)),ro.exports}var io={exports:{}},Iu;function H4(){return Iu||(Iu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,c=o-s%o,l=s+c-1;r.clamp(),r.words[l>>>2]|=c<<24-l%4*8,r.sigBytes+=c},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Ansix923})}(io)),io.exports}var so={exports:{}},Su;function U4(){return Su||(Su=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Iso10126})}(so)),so.exports}var oo={exports:{}},Tu;function W4(){return Tu||(Tu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.pad.Iso97971={pad:function(r,i){r.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(r,i)},unpad:function(r){t.pad.ZeroPadding.unpad(r),r.sigBytes--}},t.pad.Iso97971})}(oo)),oo.exports}var ao={exports:{}},Ru;function z4(){return Ru||(Ru=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(ao)),ao.exports}var co={exports:{}},Pu;function q4(){return Pu||(Pu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(co)),co.exports}var lo={exports:{}},Nu;function $4(){return Nu||(Nu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),Me())})(V,function(t){return function(r){var i=t,s=i.lib,o=s.CipherParams,c=i.enc,l=c.Hex,a=i.format;a.Hex={stringify:function(u){return u.ciphertext.toString(l)},parse:function(u){var h=l.parse(u);return o.create({ciphertext:h})}}}(),t.format.Hex})}(lo)),lo.exports}var uo={exports:{}},Ou;function V4(){return Ou||(Ou=1,function(n,e){(function(t,r,i){n.exports=r(fe(),In(),Sn(),ln(),Me())})(V,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo,c=[],l=[],a=[],u=[],h=[],f=[],d=[],x=[],g=[],p=[];(function(){for(var _=[],m=0;m<256;m++)m<128?_[m]=m<<1:_[m]=m<<1^283;for(var C=0,A=0,m=0;m<256;m++){var D=A^A<<1^A<<2^A<<3^A<<4;D=D>>>8^D&255^99,c[C]=D,l[D]=C;var b=_[C],F=_[b],y=_[F],w=_[D]*257^D*16843008;a[C]=w<<24|w>>>8,u[C]=w<<16|w>>>16,h[C]=w<<8|w>>>24,f[C]=w;var w=y*16843009^F*65537^b*257^C*16843008;d[D]=w<<24|w>>>8,x[D]=w<<16|w>>>16,g[D]=w<<8|w>>>24,p[D]=w,C?(C=b^_[_[_[y^b]]],A^=_[_[A]]):C=A=1}})();var E=[0,1,2,4,8,16,32,64,128,27,54],v=o.AES=s.extend({_doReset:function(){var _;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var m=this._keyPriorReset=this._key,C=m.words,A=m.sigBytes/4,D=this._nRounds=A+6,b=(D+1)*4,F=this._keySchedule=[],y=0;y<b;y++)y<A?F[y]=C[y]:(_=F[y-1],y%A?A>6&&y%A==4&&(_=c[_>>>24]<<24|c[_>>>16&255]<<16|c[_>>>8&255]<<8|c[_&255]):(_=_<<8|_>>>24,_=c[_>>>24]<<24|c[_>>>16&255]<<16|c[_>>>8&255]<<8|c[_&255],_^=E[y/A|0]<<24),F[y]=F[y-A]^_);for(var w=this._invKeySchedule=[],k=0;k<b;k++){var y=b-k;if(k%4)var _=F[y];else var _=F[y-4];k<4||y<=4?w[k]=_:w[k]=d[c[_>>>24]]^x[c[_>>>16&255]]^g[c[_>>>8&255]]^p[c[_&255]]}}},encryptBlock:function(_,m){this._doCryptBlock(_,m,this._keySchedule,a,u,h,f,c)},decryptBlock:function(_,m){var C=_[m+1];_[m+1]=_[m+3],_[m+3]=C,this._doCryptBlock(_,m,this._invKeySchedule,d,x,g,p,l);var C=_[m+1];_[m+1]=_[m+3],_[m+3]=C},_doCryptBlock:function(_,m,C,A,D,b,F,y){for(var w=this._nRounds,k=_[m]^C[0],B=_[m+1]^C[1],P=_[m+2]^C[2],H=_[m+3]^C[3],M=4,G=1;G<w;G++){var Y=A[k>>>24]^D[B>>>16&255]^b[P>>>8&255]^F[H&255]^C[M++],Q=A[B>>>24]^D[P>>>16&255]^b[H>>>8&255]^F[k&255]^C[M++],X=A[P>>>24]^D[H>>>16&255]^b[k>>>8&255]^F[B&255]^C[M++],I=A[H>>>24]^D[k>>>16&255]^b[B>>>8&255]^F[P&255]^C[M++];k=Y,B=Q,P=X,H=I}var Y=(y[k>>>24]<<24|y[B>>>16&255]<<16|y[P>>>8&255]<<8|y[H&255])^C[M++],Q=(y[B>>>24]<<24|y[P>>>16&255]<<16|y[H>>>8&255]<<8|y[k&255])^C[M++],X=(y[P>>>24]<<24|y[H>>>16&255]<<16|y[k>>>8&255]<<8|y[B&255])^C[M++],I=(y[H>>>24]<<24|y[k>>>16&255]<<16|y[B>>>8&255]<<8|y[P&255])^C[M++];_[m]=Y,_[m+1]=Q,_[m+2]=X,_[m+3]=I},keySize:256/32});r.AES=s._createHelper(v)}(),t.AES})}(uo)),uo.exports}var fo={exports:{}},Lu;function G4(){return Lu||(Lu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),In(),Sn(),ln(),Me())})(V,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.BlockCipher,c=r.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=c.DES=o.extend({_doReset:function(){for(var E=this._key,v=E.words,_=[],m=0;m<56;m++){var C=l[m]-1;_[m]=v[C>>>5]>>>31-C%32&1}for(var A=this._subKeys=[],D=0;D<16;D++){for(var b=A[D]=[],F=u[D],m=0;m<24;m++)b[m/6|0]|=_[(a[m]-1+F)%28]<<31-m%6,b[4+(m/6|0)]|=_[28+(a[m+24]-1+F)%28]<<31-m%6;b[0]=b[0]<<1|b[0]>>>31;for(var m=1;m<7;m++)b[m]=b[m]>>>(m-1)*4+3;b[7]=b[7]<<5|b[7]>>>27}for(var y=this._invSubKeys=[],m=0;m<16;m++)y[m]=A[15-m]},encryptBlock:function(E,v){this._doCryptBlock(E,v,this._subKeys)},decryptBlock:function(E,v){this._doCryptBlock(E,v,this._invSubKeys)},_doCryptBlock:function(E,v,_){this._lBlock=E[v],this._rBlock=E[v+1],x.call(this,4,252645135),x.call(this,16,65535),g.call(this,2,858993459),g.call(this,8,16711935),x.call(this,1,1431655765);for(var m=0;m<16;m++){for(var C=_[m],A=this._lBlock,D=this._rBlock,b=0,F=0;F<8;F++)b|=h[F][((D^C[F])&f[F])>>>0];this._lBlock=D,this._rBlock=A^b}var y=this._lBlock;this._lBlock=this._rBlock,this._rBlock=y,x.call(this,1,1431655765),g.call(this,8,16711935),g.call(this,2,858993459),x.call(this,16,65535),x.call(this,4,252645135),E[v]=this._lBlock,E[v+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function x(E,v){var _=(this._lBlock>>>E^this._rBlock)&v;this._rBlock^=_,this._lBlock^=_<<E}function g(E,v){var _=(this._rBlock>>>E^this._lBlock)&v;this._lBlock^=_,this._rBlock^=_<<E}r.DES=o._createHelper(d);var p=c.TripleDES=o.extend({_doReset:function(){var E=this._key,v=E.words;if(v.length!==2&&v.length!==4&&v.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var _=v.slice(0,2),m=v.length<4?v.slice(0,2):v.slice(2,4),C=v.length<6?v.slice(0,2):v.slice(4,6);this._des1=d.createEncryptor(s.create(_)),this._des2=d.createEncryptor(s.create(m)),this._des3=d.createEncryptor(s.create(C))},encryptBlock:function(E,v){this._des1.encryptBlock(E,v),this._des2.decryptBlock(E,v),this._des3.encryptBlock(E,v)},decryptBlock:function(E,v){this._des3.decryptBlock(E,v),this._des2.encryptBlock(E,v),this._des1.decryptBlock(E,v)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(p)}(),t.TripleDES})}(fo)),fo.exports}var ho={exports:{}},Mu;function j4(){return Mu||(Mu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),In(),Sn(),ln(),Me())})(V,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=o.RC4=s.extend({_doReset:function(){for(var u=this._key,h=u.words,f=u.sigBytes,d=this._S=[],x=0;x<256;x++)d[x]=x;for(var x=0,g=0;x<256;x++){var p=x%f,E=h[p>>>2]>>>24-p%4*8&255;g=(g+d[x]+E)%256;var v=d[x];d[x]=d[g],d[g]=v}this._i=this._j=0},_doProcessBlock:function(u,h){u[h]^=l.call(this)},keySize:256/32,ivSize:0});function l(){for(var u=this._S,h=this._i,f=this._j,d=0,x=0;x<4;x++){h=(h+1)%256,f=(f+u[h])%256;var g=u[h];u[h]=u[f],u[f]=g,d|=u[(u[h]+u[f])%256]<<24-x*8}return this._i=h,this._j=f,d}r.RC4=s._createHelper(c);var a=o.RC4Drop=c.extend({cfg:c.cfg.extend({drop:192}),_doReset:function(){c._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)l.call(this)}});r.RC4Drop=s._createHelper(a)}(),t.RC4})}(ho)),ho.exports}var xo={exports:{}},Hu;function K4(){return Hu||(Hu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),In(),Sn(),ln(),Me())})(V,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=[],l=[],a=[],u=o.Rabbit=s.extend({_doReset:function(){for(var f=this._key.words,d=this.cfg.iv,x=0;x<4;x++)f[x]=(f[x]<<8|f[x]>>>24)&16711935|(f[x]<<24|f[x]>>>8)&4278255360;var g=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],p=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var x=0;x<4;x++)h.call(this);for(var x=0;x<8;x++)p[x]^=g[x+4&7];if(d){var E=d.words,v=E[0],_=E[1],m=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,C=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,A=m>>>16|C&4294901760,D=C<<16|m&65535;p[0]^=m,p[1]^=A,p[2]^=C,p[3]^=D,p[4]^=m,p[5]^=A,p[6]^=C,p[7]^=D;for(var x=0;x<4;x++)h.call(this)}},_doProcessBlock:function(f,d){var x=this._X;h.call(this),c[0]=x[0]^x[5]>>>16^x[3]<<16,c[1]=x[2]^x[7]>>>16^x[5]<<16,c[2]=x[4]^x[1]>>>16^x[7]<<16,c[3]=x[6]^x[3]>>>16^x[1]<<16;for(var g=0;g<4;g++)c[g]=(c[g]<<8|c[g]>>>24)&16711935|(c[g]<<24|c[g]>>>8)&4278255360,f[d+g]^=c[g]},blockSize:128/32,ivSize:64/32});function h(){for(var f=this._X,d=this._C,x=0;x<8;x++)l[x]=d[x];d[0]=d[0]+1295307597+this._b|0,d[1]=d[1]+3545052371+(d[0]>>>0<l[0]>>>0?1:0)|0,d[2]=d[2]+886263092+(d[1]>>>0<l[1]>>>0?1:0)|0,d[3]=d[3]+1295307597+(d[2]>>>0<l[2]>>>0?1:0)|0,d[4]=d[4]+3545052371+(d[3]>>>0<l[3]>>>0?1:0)|0,d[5]=d[5]+886263092+(d[4]>>>0<l[4]>>>0?1:0)|0,d[6]=d[6]+1295307597+(d[5]>>>0<l[5]>>>0?1:0)|0,d[7]=d[7]+3545052371+(d[6]>>>0<l[6]>>>0?1:0)|0,this._b=d[7]>>>0<l[7]>>>0?1:0;for(var x=0;x<8;x++){var g=f[x]+d[x],p=g&65535,E=g>>>16,v=((p*p>>>17)+p*E>>>15)+E*E,_=((g&4294901760)*g|0)+((g&65535)*g|0);a[x]=v^_}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}r.Rabbit=s._createHelper(u)}(),t.Rabbit})}(xo)),xo.exports}var po={exports:{}},Uu;function Y4(){return Uu||(Uu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),In(),Sn(),ln(),Me())})(V,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,c=[],l=[],a=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var f=this._key.words,d=this.cfg.iv,x=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],g=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var p=0;p<4;p++)h.call(this);for(var p=0;p<8;p++)g[p]^=x[p+4&7];if(d){var E=d.words,v=E[0],_=E[1],m=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,C=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,A=m>>>16|C&4294901760,D=C<<16|m&65535;g[0]^=m,g[1]^=A,g[2]^=C,g[3]^=D,g[4]^=m,g[5]^=A,g[6]^=C,g[7]^=D;for(var p=0;p<4;p++)h.call(this)}},_doProcessBlock:function(f,d){var x=this._X;h.call(this),c[0]=x[0]^x[5]>>>16^x[3]<<16,c[1]=x[2]^x[7]>>>16^x[5]<<16,c[2]=x[4]^x[1]>>>16^x[7]<<16,c[3]=x[6]^x[3]>>>16^x[1]<<16;for(var g=0;g<4;g++)c[g]=(c[g]<<8|c[g]>>>24)&16711935|(c[g]<<24|c[g]>>>8)&4278255360,f[d+g]^=c[g]},blockSize:128/32,ivSize:64/32});function h(){for(var f=this._X,d=this._C,x=0;x<8;x++)l[x]=d[x];d[0]=d[0]+1295307597+this._b|0,d[1]=d[1]+3545052371+(d[0]>>>0<l[0]>>>0?1:0)|0,d[2]=d[2]+886263092+(d[1]>>>0<l[1]>>>0?1:0)|0,d[3]=d[3]+1295307597+(d[2]>>>0<l[2]>>>0?1:0)|0,d[4]=d[4]+3545052371+(d[3]>>>0<l[3]>>>0?1:0)|0,d[5]=d[5]+886263092+(d[4]>>>0<l[4]>>>0?1:0)|0,d[6]=d[6]+1295307597+(d[5]>>>0<l[5]>>>0?1:0)|0,d[7]=d[7]+3545052371+(d[6]>>>0<l[6]>>>0?1:0)|0,this._b=d[7]>>>0<l[7]>>>0?1:0;for(var x=0;x<8;x++){var g=f[x]+d[x],p=g&65535,E=g>>>16,v=((p*p>>>17)+p*E>>>15)+E*E,_=((g&4294901760)*g|0)+((g&65535)*g|0);a[x]=v^_}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}r.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(po)),po.exports}var _o={exports:{}},Wu;function X4(){return Wu||(Wu=1,function(n,e){(function(t,r,i){n.exports=r(fe(),In(),Sn(),ln(),Me())})(V,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo;const c=16,l=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],a=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function h(p,E){let v=E>>24&255,_=E>>16&255,m=E>>8&255,C=E&255,A=p.sbox[0][v]+p.sbox[1][_];return A=A^p.sbox[2][m],A=A+p.sbox[3][C],A}function f(p,E,v){let _=E,m=v,C;for(let A=0;A<c;++A)_=_^p.pbox[A],m=h(p,_)^m,C=_,_=m,m=C;return C=_,_=m,m=C,m=m^p.pbox[c],_=_^p.pbox[c+1],{left:_,right:m}}function d(p,E,v){let _=E,m=v,C;for(let A=c+1;A>1;--A)_=_^p.pbox[A],m=h(p,_)^m,C=_,_=m,m=C;return C=_,_=m,m=C,m=m^p.pbox[1],_=_^p.pbox[0],{left:_,right:m}}function x(p,E,v){for(let D=0;D<4;D++){p.sbox[D]=[];for(let b=0;b<256;b++)p.sbox[D][b]=a[D][b]}let _=0;for(let D=0;D<c+2;D++)p.pbox[D]=l[D]^E[_],_++,_>=v&&(_=0);let m=0,C=0,A=0;for(let D=0;D<c+2;D+=2)A=f(p,m,C),m=A.left,C=A.right,p.pbox[D]=m,p.pbox[D+1]=C;for(let D=0;D<4;D++)for(let b=0;b<256;b+=2)A=f(p,m,C),m=A.left,C=A.right,p.sbox[D][b]=m,p.sbox[D][b+1]=C;return!0}var g=o.Blowfish=s.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var p=this._keyPriorReset=this._key,E=p.words,v=p.sigBytes/4;x(u,E,v)}},encryptBlock:function(p,E){var v=f(u,p[E],p[E+1]);p[E]=v.left,p[E+1]=v.right},decryptBlock:function(p,E){var v=d(u,p[E],p[E+1]);p[E]=v.left,p[E+1]=v.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=s._createHelper(g)}(),t.Blowfish})}(_o)),_o.exports}(function(n,e){(function(t,r,i){n.exports=r(fe(),Es(),w4(),B4(),In(),F4(),Sn(),Mh(),Za(),k4(),Hh(),I4(),S4(),T4(),Ja(),R4(),ln(),Me(),P4(),N4(),O4(),L4(),M4(),H4(),U4(),W4(),z4(),q4(),$4(),V4(),G4(),j4(),K4(),Y4(),X4())})(V,function(t){return t})})(Lh);var vo=Lh.exports;let Uh=["builds","fa-trackItems","fd-currentGameData","fd-endlessModesData","fd-playerStats"];const Q4={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"},Z4={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};os(Q4,"sud");os(Z4,"fc");const zu=Xa(si("sud")),J4=Xa(si("fc"));let e8=()=>{for(let n of Uh)if(localStorage.getItem(n))return!0},t8=async(n,e)=>{let t={calculator:{},armory:{},frontierdle:{}};for(let i of Uh){let s=localStorage.getItem(i);if(s!==null){if(s=JSON.parse(s),s==null){localStorage.removeItem(i);continue}if(i==="builds"){let o={};for(let c in s){let l=s[c].id,a=(await qo(Vo(Vn(J4,`builds/${l}`),$o()))).val();o[l]=await a}t.calculator.builds=o}else if(i==="fa-trackItems")t.armory.tracklist=s;else if(i==="fd-currentGameData")t.frontierdle.currentGamesData=s;else if(i==="fd-endlessModesData"){let o=JSON.parse(localStorage.getItem("fd-userId"));if(!o)continue;for(let c in s){let l=s[c].data;if(!l)continue;let a;try{a=vo.AES.decrypt(l,o+8).toString(vo.enc.Utf8)}catch{continue}let u=vo.AES.encrypt(a,e+581827).toString();s[c].data=u}t.frontierdle.endlessModesData=s,localStorage.removeItem("fd-userId")}else i==="fd-playerStats"&&(t.frontierdle.playerStats=s);localStorage.removeItem(i)}}let r=await(await qo(Vo(Vn(zu,`${n}/siteData`),$o()))).val();for(let i in t)(!Object.keys(t[i]).length||r[i]!==void 0)&&delete t[i];return await Tm(Vn(zu,`${n}/siteData`),t)};function n8(n){let e,t;return{c(){e=L("hl"),t=te(n[0])},m(r,i){W(r,e,i),N(e,t)},p(r,[i]){i&1&&De(t,r[0])},i:oe,o:oe,d(r){r&&U(e)}}}function r8(n,e,t){let{startTime:r}=e;const i=vf();let s=Date.now(),o=s+r*1e3,c=r,l=setInterval(()=>{let a=Date.now();t(0,c=r-Math.floor((a-s)/1e3)),a>=o&&(i("end"),clearTimeout(l))},50);return n.$$set=a=>{"startTime"in a&&t(1,r=a.startTime)},[c,r]}class i8 extends Dt{constructor(e){super(),bt(this,e,r8,n8,ht,{startTime:1})}}function s8(n){let e,t,r,i,s,o,c,l,a,u,h,f;return u=new i8({props:{startTime:15}}),u.$on("end",n[2]),{c(){e=L("span"),e.textContent=`It looks like you have data from previous sessions waiting to be\r
            synchronized to an account.`,t=j(),r=L("span"),r.textContent=`This is a one-time synchronization process. Using this account in\r
            another browser with previous session data will erase that data,\r
            forever.`,i=j(),s=L("span"),s.textContent="The data synchronization process will start shortly.",o=j(),c=L("span"),l=L("i"),l.textContent="Starting in",a=j(),_n(u.$$.fragment),h=te("...")},m(d,x){W(d,e,x),W(d,t,x),W(d,r,x),W(d,i,x),W(d,s,x),W(d,o,x),W(d,c,x),N(c,l),N(c,a),en(u,c,null),N(c,h),f=!0},p:oe,i(d){f||(ae(u.$$.fragment,d),f=!0)},o(d){Ce(u.$$.fragment,d),f=!1},d(d){d&&(U(e),U(t),U(r),U(i),U(s),U(o),U(c)),tn(u)}}}function o8(n){let e,t,r;return{c(){e=L("span"),e.textContent="Your data is being synchronized with your account.",t=j(),r=L("span"),r.textContent="Don't leave or close this tab!"},m(i,s){W(i,e,s),W(i,t,s),W(i,r,s)},p:oe,i:oe,o:oe,d(i){i&&(U(e),U(t),U(r))}}}function a8(n){let e,t,r,i,s;return{c(){e=L("span"),e.textContent="Your data has been synchronized!",t=j(),r=L("span"),r.textContent="It is recommended you refresh any other tabs of affiliated sites.",i=j(),s=L("span"),s.textContent="You can now close this notice."},m(o,c){W(o,e,c),W(o,t,c),W(o,r,c),W(o,i,c),W(o,s,c)},p:oe,i:oe,o:oe,d(o){o&&(U(e),U(t),U(r),U(i),U(s))}}}function c8(n){let e,t=n[0]?"Data Synchronized":n[1]?"Synchronizing Data...":"Data Sync Required",r,i,s,o,c,l,a,u;const h=[a8,o8,s8],f=[];function d(x,g){return x[0]?0:x[1]?1:2}return l=d(n),a=f[l]=h[l](n),{c(){e=L("span"),r=te(t),i=j(),s=L("hr"),o=j(),c=L("div"),a.c(),O(e,"class","title"),O(c,"class","contents flex fd-col rg-1 svelte-1utpa68")},m(x,g){W(x,e,g),N(e,r),W(x,i,g),W(x,s,g),W(x,o,g),W(x,c,g),f[l].m(c,null),u=!0},p(x,[g]){(!u||g&3)&&t!==(t=x[0]?"Data Synchronized":x[1]?"Synchronizing Data...":"Data Sync Required")&&De(r,t);let p=l;l=d(x),l===p?f[l].p(x,g):(gt(),Ce(f[p],1,1,()=>{f[p]=null}),mt(),a=f[l],a?a.p(x,g):(a=f[l]=h[l](x),a.c()),ae(a,1),a.m(c,null))},i(x){u||(ae(a),u=!0)},o(x){Ce(a),u=!1},d(x){x&&(U(e),U(i),U(s),U(o),U(c)),f[l].d()}}}function l8(n,e,t){let r,i;return Ie(n,wi,o=>t(0,r=o)),Ie(n,Hn,o=>t(1,i=o)),[r,i,()=>be(Hn,i=!0,i)]}class u8 extends Dt{constructor(e){super(),bt(this,e,l8,c8,ht,{})}}function f8(n,{from:e,to:t},r={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[o,c]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),a=e.top+e.height*c/t.height-(t.top+c),{delay:u=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Nh}=r;return{delay:u,duration:nr(h)?h(Math.sqrt(l*l+a*a)):h,easing:f,css:(d,x)=>{const g=x*l,p=x*a,E=d+x*e.width/t.width,v=d+x*e.height/t.height;return`transform: ${s} translate(${g}px, ${p}px) scale(${E}, ${v});`}}}function qu(n,e,t){const r=n.slice();return r[2]=e[t],r}function d8(n){const e=n.slice(),t=`<span class="font-ms smaller-fs">${Wh.exec(e[2].text)}</span>`;return e[5]=t,e}function h8(n){let e=n[2].text+"",t;return{c(){t=te(e)},m(r,i){W(r,t,i)},p(r,i){i&1&&e!==(e=r[2].text+"")&&De(t,e)},d(r){r&&U(t)}}}function $u(n){let e,t=n[2].text.replace(Gu,n[5])+"",r;return{c(){e=new Zh(!1),r=Mr(),e.a=r},m(i,s){e.m(t,i,s),W(i,r,s)},p(i,s){s&1&&t!==(t=i[2].text.replace(Gu,i[5])+"")&&e.p(t)},d(i){i&&(U(r),e.d())}}}function Vu(n,e){let t,r,i,s,o,c,l,a,u,h=oe,f;function d(E,v){return v&1&&(o=null),o==null&&(o=!!Wh.test(E[2].text)),o?$u:h8}function x(E,v){return v===$u?d8(E):E}let g=d(e,-1),p=g(x(e,g));return{key:n,first:null,c(){t=L("div"),r=L("iconify-icon"),s=j(),p.c(),c=j(),Oe(r,"icon",i=e[2].icon),O(t,"class","toast flex fai-center cg-1 br-1 bs ta-center"),this.first=t},m(E,v){W(E,t,v),N(t,r),N(t,s),p.m(t,null),N(t,c),f=!0},p(E,v){e=E,(!f||v&1&&i!==(i=e[2].icon))&&Oe(r,"icon",i),g===(g=d(e,v))&&p?p.p(x(e,g),v):(p.d(1),p=g(x(e,g)),p&&(p.c(),p.m(t,c)))},r(){u=t.getBoundingClientRect()},f(){rx(t),h(),pf(t,u)},a(){h(),h=nx(t,u,f8,{duration:250})},i(E){f||(E&&Ge(()=>{f&&(a&&a.end(1),l=mf(t,Ji,{}),l.start())}),f=!0)},o(E){l&&l.invalidate(),E&&(a=Ef(t,e[1],{})),f=!1},d(E){E&&U(t),p.d(),E&&a&&a.end()}}}function x8(n){let e,t=[],r=new Map,i,s=Ve(n[0]);const o=c=>c[2];for(let c=0;c<s.length;c+=1){let l=qu(n,s,c),a=o(l);r.set(a,t[c]=Vu(a,l))}return{c(){e=L("div");for(let c=0;c<t.length;c+=1)t[c].c();O(e,"class","toasts centered flex fjc-center fai-center fd-col pos-abs")},m(c,l){W(c,e,l);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);i=!0},p(c,[l]){if(l&1){s=Ve(c[0]),gt();for(let a=0;a<t.length;a+=1)t[a].r();t=fx(t,l,o,1,c,s,r,e,ux,Vu,null,qu);for(let a=0;a<t.length;a+=1)t[a].a();mt()}},i(c){if(!i){for(let l=0;l<s.length;l+=1)ae(t[l]);i=!0}},o(c){for(let l=0;l<t.length;l+=1)Ce(t[l]);i=!1},d(c){c&&U(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}let Wh=new RegExp("(?<={).+(?=})"),Gu=/{.+} ?/;function p8(n,e,t){let r;Ie(n,Yo,s=>t(0,r=s));function i(s){return r.length?Ji(s):tt(s)}return[r,i]}class _8 extends Dt{constructor(e){super(),bt(this,e,p8,x8,ht,{})}}const{document:go,window:Tt}=Gh;function ju(n,e,t){const r=n.slice();return r[58]=e[t][0],r[59]=e[t][1],r}function Ku(n,e,t){const r=n.slice();return r[62]=e[t][0],r[63]=e[t][1],r}function Yu(n,e,t){const r=n.slice();return r[66]=e[t],r}function Xu(n,e,t){const r=n.slice();return r[66]=e[t],r}function Qu(n){let e;return{c(){e=L("link"),O(e,"rel","preload"),O(e,"as","image"),O(e,"href","backgrounds/"+n[66]+".jpg")},m(t,r){W(t,e,r)},p:oe,d(t){t&&U(e)}}}function Zu(n){let e,t;return{c(){e=L("img"),es(e.src,t="backgrounds/"+n[66]+".jpg")||O(e,"src",t),O(e,"alt",""),O(e,"class","background svelte-13hnz2"),ct(e,"active",n[12]==n[66])},m(r,i){W(r,e,i)},p(r,i){i[0]&1052672&&ct(e,"active",r[12]==r[66])},d(r){r&&U(e)}}}function Ju(n){let e,t,r,i;return{c(){e=L("img"),es(e.src,t="backgrounds/cursedCreation.jpg")||O(e,"src",t),O(e,"alt",""),O(e,"class","background active svelte-13hnz2"),it(e,"object-fit","fill")},m(s,o){W(s,e,o),i=!0},i(s){i||(s&&Ge(()=>{i&&(r||(r=nt(e,tt,{duration:3500},!0)),r.run(1))}),i=!0)},o(s){s&&(r||(r=nt(e,tt,{duration:3500},!1)),r.run(0)),i=!1},d(s){s&&U(e),s&&r&&r.end()}}}function ef(n){let e,t,r=Math.floor(n[18][n[2]]*100)+"",i,s,o,c;return{c(){e=L("span"),t=te("Zoom: "),i=te(r),s=L("b"),s.textContent="%",O(e,"class","info"),O(e,"id","zoomLevel")},m(l,a){W(l,e,a),N(e,t),N(e,i),N(e,s),c=!0},p(l,a){(!c||a[0]&4)&&r!==(r=Math.floor(l[18][l[2]]*100)+"")&&De(i,r)},i(l){c||(l&&Ge(()=>{c&&(o||(o=nt(e,tt,{duration:150},!0)),o.run(1))}),c=!0)},o(l){l&&(o||(o=nt(e,tt,{duration:150},!1)),o.run(0)),c=!1},d(l){l&&U(e),l&&o&&o.end()}}}function tf(n){let e,t;return e=new D4({props:{version:Xo,verifyAndSync:n[17]}}),{c(){_n(e.$$.fragment)},m(r,i){en(e,r,i),t=!0},p:oe,i(r){t||(ae(e.$$.fragment,r),t=!0)},o(r){Ce(e.$$.fragment,r),t=!1},d(r){tn(e,r)}}}function nf(n){let e,t,r,i,s,o,c,l,a,u=n[9]&&!n[8]&&rf(n),h=Ve(Object.entries(n[24])),f=[];for(let d=0;d<h.length;d+=1)f[d]=af(ju(n,h,d));return l=new _8({}),{c(){e=L("main"),t=L("i"),t.textContent='"Need to get somewhere?"',r=j(),u&&u.c(),i=j(),s=L("div");for(let d=0;d<f.length;d+=1)f[d].c();c=j(),_n(l.$$.fragment),O(t,"class","caption flex fjc-center font-hg br-1 ta-center svelte-13hnz2"),ct(t,"highlighted",n[10]),ct(t,"bs",n[10]),O(s,"class","content flex fd-col fai-center ta-center svelte-13hnz2"),O(e,"class","flex fd-col fai-center svelte-13hnz2"),ct(e,"portrait",n[5])},m(d,x){W(d,e,x),N(e,t),N(e,r),u&&u.m(e,null),N(e,i),N(e,s);for(let g=0;g<f.length;g+=1)f[g]&&f[g].m(s,null);n[44](s),W(d,c,x),en(l,d,x),a=!0},p(d,x){if((!a||x[0]&1024)&&ct(t,"highlighted",d[10]),(!a||x[0]&1024)&&ct(t,"bs",d[10]),d[9]&&!d[8]?u?(u.p(d,x),x[0]&768&&ae(u,1)):(u=rf(d),u.c(),ae(u,1),u.m(e,i)):u&&(gt(),Ce(u,1,1,()=>{u=null}),mt()),x[0]&56672256){h=Ve(Object.entries(d[24]));let g;for(g=0;g<h.length;g+=1){const p=ju(d,h,g);f[g]?f[g].p(p,x):(f[g]=af(p),f[g].c(),f[g].m(s,null))}for(;g<f.length;g+=1)f[g].d(1);f.length=h.length}(!a||x[0]&32)&&ct(e,"portrait",d[5])},i(d){a||(ae(u),d&&Ge(()=>{a&&(o||(o=nt(e,tt,{duration:1e3,delay:250},!0)),o.run(1))}),ae(l.$$.fragment,d),a=!0)},o(d){Ce(u),d&&(o||(o=nt(e,tt,{duration:1e3,delay:250},!1)),o.run(0)),Ce(l.$$.fragment,d),a=!1},d(d){d&&(U(e),U(c)),u&&u.d(),pn(f,d),n[44](null),d&&o&&o.end(),tn(l,d)}}}function rf(n){let e,t,r,i,s,o;return{c(){e=L("button"),e.innerHTML='<iconify-icon icon="ep:arrow-down-bold"></iconify-icon>',O(e,"class","flex pos-abs br-1 no-bg svelte-13hnz2"),O(e,"id","arrow")},m(c,l){W(c,e,l),i=!0,s||(o=re(e,"click",n[37]),s=!0)},p:oe,i(c){i||(c&&Ge(()=>{i&&(r&&r.end(1),t=mf(e,tt,{duration:1e3}),t.start())}),i=!0)},o(c){t&&t.invalidate(),c&&(r=Ef(e,tt,{duration:100})),i=!1},d(c){c&&U(e),c&&r&&r.end(),s=!1,o()}}}function sf(n){let e,t=Ve(Object.entries(n[59])),r=[];for(let i=0;i<t.length;i+=1)r[i]=of(Ku(n,t,i));return{c(){e=L("div");for(let i=0;i<r.length;i+=1)r[i].c();O(e,"class","pages flex fw rg-1 cg-1 fjc-center font-hg svelte-13hnz2")},m(i,s){W(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&56639488){t=Ve(Object.entries(i[59]));let o;for(o=0;o<t.length;o+=1){const c=Ku(i,t,o);r[o]?r[o].p(c,s):(r[o]=of(c),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&U(e),pn(r,i)}}}function v8(n){let e;return{c(){e=L("div"),e.textContent=`${n[63].desc}`,O(e,"class","pageDesc flex fjc-center fai-center svelte-13hnz2")},m(t,r){W(t,e,r)},p:oe,d(t){t&&U(e)}}}function of(n){let e,t,r,i,s,o,c,l,a,u,h,f,d=n[14]?"Copied!":"Copy Link",x,g,p,E,v;function _(...F){return n[39](n[63],...F)}let m=n[63].desc&&v8(n);function C(){return n[40](n[58],n[62],n[63])}function A(){return n[41](n[58],n[62],n[63])}function D(){return n[42](n[62])}function b(){return n[43](n[62])}return{c(){e=L("a"),t=L("div"),r=L("div"),i=L("img"),o=j(),c=L("span"),c.textContent=`${n[62]}`,l=j(),a=L("button"),u=L("iconify-icon"),h=j(),f=L("span"),x=te(d),g=j(),m&&m.c(),p=j(),es(i.src,s="icons/"+n[63].code+".png")||O(i,"src",s),O(i,"alt",""),O(i,"class","svelte-13hnz2"),O(c,"id","pageTitle"),O(c,"class","svelte-13hnz2"),ct(c,"smaller-fs",n[62].length>=30),O(r,"class","flex fjc-center fai-center svelte-13hnz2"),O(r,"id","pageMainInfo"),Oe(u,"icon","mingcute:copy-line"),O(f,"class","tooltip"),O(f,"id","right"),O(a,"class","flex fjc-center fai-center pos-rel br-1 svelte-13hnz2"),O(a,"id","copyBtn"),O(t,"class","pageHeader flex fjc-center fai-center br-1 svelte-13hnz2"),O(e,"href",n[63].link),O(e,"target","_blank"),O(e,"class","page flex fd-col br-1 bg-change svelte-13hnz2")},m(F,y){W(F,e,y),N(e,t),N(t,r),N(r,i),N(r,o),N(r,c),N(t,l),N(t,a),N(a,u),N(a,h),N(a,f),N(f,x),N(e,g),m&&m.m(e,null),N(e,p),E||(v=[re(a,"click",_),re(e,"mouseenter",C),re(e,"focusin",A),re(e,"mouseleave",D),re(e,"focusout",b)],E=!0)},p(F,y){n=F,y[0]&16384&&d!==(d=n[14]?"Copied!":"Copy Link")&&De(x,d),n[63].desc&&m.p(n,y)},d(F){F&&U(e),m&&m.d(),E=!1,Re(v)}}}function af(n){let e,t,r,i,s,o,c,l,a,u;function h(...d){return n[38](n[58],...d)}let f=n[15][n[58]]&&sf(n);return{c(){e=L("div"),t=L("button"),r=L("iconify-icon"),s=j(),o=L("span"),o.textContent=`${jm(n[58])}`,c=j(),f&&f.c(),l=j(),Oe(r,"icon",i="ep:arrow-"+(n[15][n[58]]?"down":"right")+"-bold"),Oe(r,"class","toggleArrowIcon pos-abs smaller-fs svelte-13hnz2"),O(t,"class","categoryTitle flex fjc-center fai-center pos-rel font-rf br-1 svelte-13hnz2"),O(e,"class","category border-tp br-1 bs svelte-13hnz2")},m(d,x){W(d,e,x),N(e,t),N(t,r),N(t,s),N(t,o),N(e,c),f&&f.m(e,null),N(e,l),a||(u=re(t,"click",h),a=!0)},p(d,x){n=d,x[0]&32768&&i!==(i="ep:arrow-"+(n[15][n[58]]?"down":"right")+"-bold")&&Oe(r,"icon",i),n[15][n[58]]?f?f.p(n,x):(f=sf(n),f.c(),f.m(e,l)):f&&(f.d(1),f=null)},d(d){d&&U(e),f&&f.d(),a=!1,u()}}}function cf(n){let e,t,r,i,s,o,c,l;const a=[{prompted:!0},n[3].props];var u=n[3].component;function h(f,d){let x={};for(let g=0;g<a.length;g+=1)x=jn(x,a[g]);return d!==void 0&&d[0]&8&&(x=jn(x,Yn(a,[a[0],Eo(f[3].props)]))),{props:x}}return u&&(r=tc(u,h(n))),{c(){e=L("div"),t=L("div"),r&&_n(r.$$.fragment),O(t,"class","flex fd-col border-tp br-1 bs"),O(e,"class","promptCont font-hg")},m(f,d){W(f,e,d),N(e,t),r&&en(r,t,null),n[46](e),o=!0,c||(l=[re(t,"introstart",n[45]),re(e,"click",n[47])],c=!0)},p(f,d){if(d[0]&8&&u!==(u=f[3].component)){if(r){gt();const x=r;Ce(x.$$.fragment,1,0,()=>{tn(x,1)}),mt()}u?(r=tc(u,h(f,d)),_n(r.$$.fragment),ae(r.$$.fragment,1),en(r,t,null)):r=null}else if(u){const x=d[0]&8?Yn(a,[a[0],Eo(f[3].props)]):{};r.$set(x)}},i(f){o||(r&&ae(r.$$.fragment,f),f&&Ge(()=>{o&&(i||(i=nt(t,Ji,{duration:150},!0)),i.run(1))}),f&&Ge(()=>{o&&(s||(s=nt(e,tt,{duration:100},!0)),s.run(1))}),o=!0)},o(f){r&&Ce(r.$$.fragment,f),f&&(i||(i=nt(t,Ji,{duration:150},!1)),i.run(0)),f&&(s||(s=nt(e,tt,{duration:100},!1)),s.run(0)),o=!1},d(f){f&&U(e),r&&tn(r),f&&i&&i.end(),n[46](null),f&&s&&s.end(),c=!1,Re(l)}}}function g8(n){let e,t,r,i,s,o,c,l,a,u,h,f,d,x,g,p,E;Ge(n[34]);let v=Ve([...n[20],"cursedCreation"]),_=[];for(let w=0;w<v.length;w+=1)_[w]=Qu(Xu(n,v,w));let m=Ve(n[20]),C=[];for(let w=0;w<m.length;w+=1)C[w]=Zu(Yu(n,m,w));let A=n[13]&&Ju(),D=n[11]&&ef(n),b=n[8]&&tf(n),F=n[4]&&nf(n),y=n[3].component&&cf(n);return{c(){e=j();for(let w=0;w<_.length;w+=1)_[w].c();t=Mr(),r=j(),i=L("div"),s=L("audio"),c=j(),l=L("div");for(let w=0;w<C.length;w+=1)C[w].c();a=j(),A&&A.c(),u=j(),D&&D.c(),h=j(),b&&b.c(),f=j(),F&&F.c(),d=j(),y&&y.c(),x=Mr(),es(s.src,o=Qa+"/audios/select.mp3")||O(s,"src",o),O(l,"class","backgrounds")},m(w,k){W(w,e,k);for(let B=0;B<_.length;B+=1)_[B]&&_[B].m(go.head,null);N(go.head,t),W(w,r,k),W(w,i,k),N(i,s),n[36](s),W(w,c,k),W(w,l,k);for(let B=0;B<C.length;B+=1)C[B]&&C[B].m(l,null);N(l,a),A&&A.m(l,null),W(w,u,k),D&&D.m(w,k),W(w,h,k),b&&b.m(w,k),W(w,f,k),F&&F.m(w,k),W(w,d,k),y&&y.m(w,k),W(w,x,k),g=!0,p||(E=[re(Tt,"storage",n[28]),re(Tt,"scroll",n[29]),re(Tt,"unload",n[30]),re(Tt,"wheel",n[31],{passive:!1}),re(Tt,"click",n[32]),re(Tt,"keydown",n[33]),re(Tt,"resize",n[34]),re(go,"visibilitychange",n[35])],p=!0)},p(w,k){if(k[0]&1048576){v=Ve([...w[20],"cursedCreation"]);let B;for(B=0;B<v.length;B+=1){const P=Xu(w,v,B);_[B]?_[B].p(P,k):(_[B]=Qu(P),_[B].c(),_[B].m(t.parentNode,t))}for(;B<_.length;B+=1)_[B].d(1);_.length=v.length}if(k[0]&1052672){m=Ve(w[20]);let B;for(B=0;B<m.length;B+=1){const P=Yu(w,m,B);C[B]?C[B].p(P,k):(C[B]=Zu(P),C[B].c(),C[B].m(l,a))}for(;B<C.length;B+=1)C[B].d(1);C.length=m.length}w[13]?A?k[0]&8192&&ae(A,1):(A=Ju(),A.c(),ae(A,1),A.m(l,null)):A&&(gt(),Ce(A,1,1,()=>{A=null}),mt()),w[11]?D?(D.p(w,k),k[0]&2048&&ae(D,1)):(D=ef(w),D.c(),ae(D,1),D.m(h.parentNode,h)):D&&(gt(),Ce(D,1,1,()=>{D=null}),mt()),w[8]?b?(b.p(w,k),k[0]&256&&ae(b,1)):(b=tf(w),b.c(),ae(b,1),b.m(f.parentNode,f)):b&&(gt(),Ce(b,1,1,()=>{b=null}),mt()),w[4]?F?(F.p(w,k),k[0]&16&&ae(F,1)):(F=nf(w),F.c(),ae(F,1),F.m(d.parentNode,d)):F&&(gt(),Ce(F,1,1,()=>{F=null}),mt()),w[3].component?y?(y.p(w,k),k[0]&8&&ae(y,1)):(y=cf(w),y.c(),ae(y,1),y.m(x.parentNode,x)):y&&(gt(),Ce(y,1,1,()=>{y=null}),mt())},i(w){g||(ae(A),ae(D),ae(b),ae(F),ae(y),g=!0)},o(w){Ce(A),Ce(D),Ce(b),Ce(F),Ce(y),g=!1},d(w){w&&(U(e),U(r),U(i),U(c),U(l),U(u),U(h),U(f),U(d),U(x)),pn(_,w),U(t),n[36](null),pn(C,w),A&&A.d(),D&&D.d(w),b&&b.d(w),F&&F.d(w),y&&y.d(w),p=!1,Re(E)}}}let Xo="v1.2.1";function m8(n,e,t){let r,i,s,o,c,l,a,u,h;Ie(n,wi,z=>t(50,r=z)),Ie(n,Hn,z=>t(26,i=z)),Ie(n,$e,z=>t(3,s=z)),Ie(n,Ko,z=>t(27,o=z)),Ie(n,jo,z=>t(51,c=z)),Ie(n,ei,z=>t(52,l=z)),Ie(n,ti,z=>t(53,a=z)),Ie(n,Bi,z=>t(54,u=z)),Ie(n,R0,z=>t(16,h=z));let f=!1,d=e8();function x(){if(i||d)return setTimeout(()=>{be($e,s.preventClosing=!0,s),be($e,s.component=u8,s)},i?0:300),!0}let g,p,E,v,_,m=!1,C=!1,A=!1;history.scrollRestoration="manual",ix(()=>{t(4,f=!0),be(Hn,i=!!new URLSearchParams(location.search).get("dataSync"),i),i&&!d&&(be(Hn,i=!1,i),Gl()),p_(lt,async()=>{Mn(),be(jo,c=lt.currentUser,c),be(Ko,o=!!jt(c),o),be(ei,l=o?c.displayName||l:"",l),o&&(Rh("logIn",`Succesfully logged in as {${l}}`),!u&&x())})});let D=[.45,.6,.75,.85,.95,1,1.1,1.25,1.5],b=D.indexOf(1),F=!1,y;function w(){y=setTimeout(()=>{t(11,F=!1)},750)}function k(){clearTimeout(y),t(11,F=!0),w()}let B=["armory","calculator","discord","frontierdle","frontierguessr","hub","resources","roblox","twitter","wiki"],P="hub",H=!1;function M(z,xe,K){let ke=Math.floor(Math.random()*1001);xe==="Glitches"&&ke===173?t(13,H=!0):t(12,P=B.includes(K)?K:z)}function G(z){t(12,P="hub"),t(13,H=!1)}localStorage.getItem("fh-version")!=Xo&&(be(ti,a=!1,a),localStorage.setItem("fh-version",Xo));function Y(){t(5,E=p>g),document.documentElement.style.fontSize=`${(E?g/p/1.35:.75)*D[b]}vh`}setTimeout(()=>{m||t(9,C=!0)},3e3);let Q=!1,X={"Official Links":{"Roblox Game":{desc:"The action adventure game where you can fight monsters, fish, gather rare collectibles, hunt birds and more!",link:"https://www.roblox.com/games/510411669/Fantastic-Frontier",code:"roblox"},"Fandom Wiki":{desc:"The main documentation center where players can find and share valuable information with each other.",link:"https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki",code:"wiki"},"Discord Server":{desc:"Where majority of the community resides to discuss, exchange feedback, and keep themselves updated.",link:"https://discord.gg/ff",code:"discord"},"Twitter: Spectrabox":{link:"https://twitter.com/SpectraboxRBLX",code:"twitter"},"Twitter: Gorbachelli":{link:"https://twitter.com/gorbachelli",code:"twitter"}},affiliations:{"Fantastic Armory":{desc:"Equipment and weapon index - search, filter, sort, and track all sorts of gear to find what you want.",link:"https://xt8ss.github.io/fantastic-armory/",code:"armory"},"Fantastic Calculator":{desc:"Build maker and planner - mix and match equipment, and see weapon calculations in real time.",link:"https://xt8ss.github.io/fantastic-calculator/",code:"calculator"},Frontierdle:{desc:"Gear guessing minigame - find and pinpoint the exact gear of the day by following different clues.",link:"https://xt8ss.github.io/frontierdle/",code:"frontierdle"},Frontierguessr:{desc:"Location guessing minigame - explore and locate yourself around the Frontier using various landmarks.",link:"https://xt8ss.github.io/frontierguessr/",code:"frontierguessr"}},resources:{"Gift Tree Profit Calculator":{link:"https://www.desmos.com/calculator/80uoinggs3",code:"desmos"},"Average Item Obtainment Time":{link:"https://docs.google.com/document/d/1iLfGrtEzzgEQ7JZ0Ud_keQJue8URkKJQuoAY_DVSU2Y",code:"docs"},"Build List":{link:"https://docs.google.com/document/d/1H9HXoExCDVfXx15LQ4Te-2tTjrLFB-XCbMmx44Ynld4",code:"docs"},"Fish Reeling Times":{link:"https://docs.google.com/spreadsheets/d/15FXhST2YRf3i3OxMtEiq56_es_vBtYfrRpI9AfGO4to",code:"docs"},Glitches:{link:"https://docs.google.com/document/d/1-WAkvUDJ7mRNt9aDr0OsmZxjKuPtlI2dKZJAo7OMTc8",code:"docs"},"Max Stat List":{link:"https://docs.google.com/document/d/15vwSRojTqZ8LI09Wq4dvGF1kSTPmH2_gECQvwlSFki8",code:"docs"},"Deep Sea Treasure Chest Rewards":{link:"https://pastebin.com/edEuETpw",code:"pastebin"},"Deli Rewards":{link:"https://pastebin.com/4WiuqQx1",code:"pastebin"},"Firefly Quest & Otherworld Present/Tower Rewards":{link:"https://pastebin.com/BhkSFqsP",code:"pastebin"},"Guttermouth Rewards":{link:"https://pastebin.com/j2C9sdWq",code:"pastebin"},"Items that do not Drop upon Death":{link:"https://pastebin.com/fzXzHdLu",code:"pastebin"},"The Lost Rewards":{link:"https://pastebin.com/dUfLpkCY",code:"pastebin"},"A Special Development Announcement":{link:"https://devforum.roblox.com/t/fantastic-frontier-a-special-development-announcement/1490518",code:"devforum"},"Development Update 12/27/2021":{link:"https://devforum.roblox.com/t/fantastic-frontier-development-update-12272021/1603633",code:"devforum"},"Development Update 2/28/2022":{link:"https://devforum.roblox.com/t/fantastic-frontier-development-update-2282022/1685471",code:"devforum"},"'Pic of the Week': Going Dark":{link:"https://devforum.roblox.com/t/fantastic-frontier-pic-of-the-week-going-dark/1859496",code:"devforum"},"End of Year 2022 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2022-progress-post/2092363",code:"devforum"},"End of Year 2023 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2023-progress-post/2772902",code:"devforum"},"End of Year 2024 Progress Post":{link:"https://devforum.roblox.com/t/fantastic-frontier-end-of-year-2024-progress-post/3329820",code:"devforum"}}},I=Object.fromEntries(Object.keys(X).map(z=>[z,!0]));function T(z){t(14,Q=!0),navigator.clipboard.writeText(z),setTimeout(()=>t(14,Q=!1),1500)}async function R(){await t8(l.toLowerCase(),c.uid),setTimeout(()=>{be(wi,r=!0,r),be($e,s.preventClosing=!1,s),Gl()},3e3)}const S=z=>{/^f[a-z]{1,2}-/.test(z.key)&&localStorage.setItem(z.key,z.oldValue)},J=z=>{let xe=p-window.scrollY<=p*.75;!m&&xe&&t(8,m=!0),t(10,A=xe)},Z=()=>window.scrollTo(0,0),le=z=>{let xe=z.wheelDeltaY;if(z.ctrlKey){if(z.preventDefault(),D[b]==D[0]&&xe<0||D[b]==D[D.length-1]&&xe>0)return;xe>0?t(2,b++,b):t(2,b--,b),k()}},$=z=>{if(z.target instanceof HTMLElement){let xe=z.target.closest("button");xe&&!xe.classList.contains("no-sound")&&(be(R0,h.select.currentTime=0,h),h.select.play())}},Ke=z=>{let xe=["Enter"," "],K=["BUTTON","INPUT","A"];z.ctrlKey&&(z.key=="-"||z.key=="+"||z.code=="Equal"||z.key=="0")&&(z.preventDefault(),(z.key=="+"||z.code=="Equal")&&D[b]!=D[D.length-1]?t(2,b++,b):z.key=="-"&&D[b]!=D[0]?t(2,b--,b):z.key=="0"&&D[b]!=1&&t(2,b=D.indexOf(1)),k()),s.component&&v&&(!z.ctrlKey&&!z.shiftKey&&!z.altKey&&(z.key=="Escape"||xe.includes(z.key)&&!K.includes(document.activeElement.tagName))?Mn():setTimeout(()=>{z.key=="Tab"&&!v.contains(document.activeElement)&&Mn()}))};function He(){t(1,p=Tt.outerHeight),t(0,g=Tt.outerWidth)}const xt=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(1,p=window.outerHeight),t(0,g=window.outerWidth),Y()})};function Ye(z){Sr[z?"unshift":"push"](()=>{h.select=z,R0.set(h)})}const ge=()=>{t(9,C=!1),_.scrollIntoView({behavior:"smooth"})},he=(z,xe)=>{vt(xe),t(15,I[z]=!I[z],I)},st=(z,xe)=>{xe.stopPropagation(),xe.preventDefault(),vt(xe),T(z.link)},Xe=(z,xe,K)=>M(z,xe,K.code),ot=(z,xe,K)=>M(z,xe,K.code),Qe=z=>G(),pt=z=>G();function Ze(z){Sr[z?"unshift":"push"](()=>{_=z,t(7,_)})}const me=()=>{let z=v.querySelector("a, button, input");z&&z.focus()};function pe(z){Sr[z?"unshift":"push"](()=>{v=z,t(6,v)})}const Fe=z=>{v.children[0].contains(z.target)||Mn()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(p||g||b)&&Y(),n.$$.dirty[0]&8&&s.component===null&&setTimeout(()=>{be(Hn,i=!1,i),be(wi,r=!1,r)},100),n.$$.dirty[0]&201326592&&o&&i&&d&&R()},[g,p,b,s,f,E,v,_,m,C,A,F,P,H,Q,I,h,x,D,k,B,M,G,Y,X,T,i,o,S,J,Z,le,$,Ke,He,xt,Ye,ge,he,st,Xe,ot,Qe,pt,Ze,me,pe,Fe]}class E8 extends Dt{constructor(e){super(),bt(this,e,m8,g8,ht,{},null,[-1,-1,-1])}}new E8({target:document.body});
