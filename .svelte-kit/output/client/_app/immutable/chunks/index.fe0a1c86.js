function E(){}function ot(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Y(t){return t()}function Q(){return Object.create(null)}function v(t){t.forEach(Y)}function L(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function zt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function lt(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t,e,n){t.$$.on_destroy.push(at(e,n))}function Wt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?ot(n.ctx.slice(),t[1](i(e))):n.ctx}function qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Bt(t,e,n,i,s,o){if(s){const r=Z(e,n,i,o);t.p(r,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Lt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ft(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function It(t){const e={};for(const n in t)e[n]=!0;return e}function Rt(t){return t??""}function Ut(t,e,n){return t.set(n),e}function Gt(t){return t&&L(t.destroy)?t.destroy:E}const Jt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let O=!1;function ft(){O=!0}function dt(){O=!1}function _t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,d=(s>0&&e[n[s]].claim_order<=u?s+1:_t(1,s,a=>e[n[a]].claim_order,u))-1;i[c]=n[d]+1;const _=d+1;n[_]=c,s=Math.max(_,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const d=u<o.length?o[u]:null;t.insertBefore(r[c],d)}}function mt(t,e){t.appendChild(e)}function pt(t,e){if(O){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){O&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function yt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Vt(){return F(" ")}function Xt(){return F("")}function V(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const bt=["width","height"];function gt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&bt.indexOf(i)===-1?t[i]=e[i]:I(t,i,e[i])}function Yt(t,e){for(const n in e)I(t,n,e[n])}function wt(t,e){Object.keys(e).forEach(n=>{xt(t,n,e[n])})}function xt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:I(t,e,n)}function Zt(t){return/-/.test(t)?wt:gt}function te(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function $t(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,s=!1){kt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,e,n,i){return nt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ee(t,e,n){return it(t,e,n,et)}function ne(t,e,n){return it(t,e,n,yt)}function vt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function ie(t){return vt(t," ")}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function re(t,e){t.value=e??""}function ce(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let C;function Et(){if(C===void 0){C=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{C=!0}}return C}function oe(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=et("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Et();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=V(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=V(i.contentWindow,"resize",e),e()}),mt(t,i),()=>{(s||o&&i.contentWindow)&&o(),tt(i)}}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ue(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function le(t,e){return new t(e)}let A;function b(t){A=t}function g(){if(!A)throw new Error("Function called outside component initialization");return A}function ae(t){g().$$.before_update.push(t)}function fe(t){g().$$.on_mount.push(t)}function de(t){g().$$.after_update.push(t)}function _e(t){g().$$.on_destroy.push(t)}function he(){const t=g();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=At(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function me(t,e){return g().$$.context.set(t,e),e}function pe(t){return g().$$.context.get(t)}function ye(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],X=[];let k=[];const q=[],st=Promise.resolve();let B=!1;function rt(){B||(B=!0,st.then(R))}function be(){return rt(),st}function H(t){k.push(t)}function ge(t){q.push(t)}const W=new Set;let x=0;function R(){if(x!==0)return;const t=A;do{try{for(;x<$.length;){const e=$[x];x++,b(e),Nt(e.$$)}}catch(e){throw $.length=0,x=0,e}for(b(null),$.length=0,x=0;X.length;)X.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];W.has(n)||(W.add(n),n())}k.length=0}while($.length);for(;q.length;)q.pop()();B=!1,W.clear(),b(t)}function Nt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function St(t){const e=[],n=[];k.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),k=e}const M=new Set;let w;function jt(){w={r:0,c:[],p:w}}function Ct(){w.r||v(w.c),w=w.p}function U(t,e){t&&t.i&&(M.delete(t),t.i(e))}function ct(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),w.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function we(t,e){const n=e.token={};function i(s,o,r,l){if(e.token!==n)return;e.resolved=l;let c=e.ctx;r!==void 0&&(c=c.slice(),c[r]=l);const u=s&&(e.current=s)(c);let d=!1;e.block&&(e.blocks?e.blocks.forEach((_,a)=>{a!==o&&_&&(jt(),ct(_,1,1,()=>{e.blocks[a]===_&&(e.blocks[a]=null)}),Ct())}):e.block.d(1),u.c(),U(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[o]=u),d&&R()}if(ut(t)){const s=g();if(t.then(o=>{b(s),i(e.then,1,e.value,o),b(null)},o=>{if(b(s),i(e.catch,2,e.error,o),b(null),!e.hasCatch)throw o}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function xe(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function $e(t,e){ct(t,1,1,()=>{e.delete(t.key)})}function ke(t,e,n,i,s,o,r,l,c,u,d,_){let a=t.length,m=o.length,h=a;const T={};for(;h--;)T[t[h].key]=h;const N=[],D=new Map,z=new Map,G=[];for(h=m;h--;){const f=_(s,o,h),p=n(f);let y=r.get(p);y?i&&G.push(()=>y.p(f,e)):(y=u(p,f),y.c()),D.set(p,N[h]=y),p in T&&z.set(p,Math.abs(h-T[p]))}const J=new Set,K=new Set;function P(f){U(f,1),f.m(l,d),r.set(f.key,f),d=f.first,m--}for(;a&&m;){const f=N[m-1],p=t[a-1],y=f.key,S=p.key;f===p?(d=f.first,a--,m--):D.has(S)?!r.has(y)||J.has(y)?P(f):K.has(S)?a--:z.get(y)>z.get(S)?(K.add(y),P(f)):(J.add(S),a--):(c(p,r),a--)}for(;a--;){const f=t[a];D.has(f.key)||c(f,r)}for(;m;)P(N[m-1]);return v(G),N}function ve(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ee(t){return typeof t=="object"&&t!==null?t:{}}function Ae(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ne(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||H(()=>{const r=t.$$.on_mount.map(Y).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),o.forEach(H)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(St(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&($.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,s,o,r,l=[-1]){const c=A;b(t);const u=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Q(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(_,a,...m)=>{const h=m.length?m[0]:a;return u.ctx&&s(u.ctx[_],u.ctx[_]=h)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](h),d&&Tt(t,_)),a}):[],u.update(),d=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ft();const _=$t(e.target);u.fragment&&u.fragment.l(_),_.forEach(tt)}else u.fragment&&u.fragment.c();e.intro&&U(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),dt(),R()}b(c)}class Ce{$destroy(){Ot(this,1),this.$destroy=E}$on(e,n){if(!L(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as $,Mt as A,Ot as B,Wt as C,ot as D,gt as E,Gt as F,V as G,L as H,Bt as I,Ht as J,qt as K,ve as L,v as M,Ft as N,g as O,me as P,_e as Q,Lt as R,Ce as S,Ee as T,pe as U,pt as V,Pt as W,Ut as X,zt as Y,E as Z,Qt as _,Vt as a,Jt as a0,Ae as a1,H as a2,oe as a3,ge as a4,ae as a5,Rt as a6,he as a7,te as a8,ye as a9,re as aa,It as ab,ke as ac,$e as ad,we as ae,xe as af,yt as ag,ne as ah,Yt as ai,Zt as aj,Kt as b,ie as c,ct as d,Xt as e,Ct as f,U as g,tt as h,je as i,de as j,et as k,ee as l,$t as m,I as n,fe as o,ce as p,F as q,vt as r,Dt as s,be as t,se as u,jt as v,X as w,le as x,Ne as y,Se as z};