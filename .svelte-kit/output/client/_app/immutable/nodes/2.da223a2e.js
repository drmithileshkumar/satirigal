import{r as I}from"../chunks/index.ade5cbd2.js";import{S as T,i as A,s as w,k as p,a as C,y as v,$ as M,l as d,h as i,c as R,m as S,z as P,n as u,V as _,b as g,A as b,g as k,d as x,B as E,W as Y,X as j,o as G,Q as N,q as O,r as q,Z as z}from"../chunks/index.fe0a1c86.js";import{C as B,a as L}from"../chunks/ActionIcons.2788abc4.js";import"../chunks/paths.66d34cb2.js";import{c as $}from"../chunks/stores.69f96dac.js";async function D({fetch:m,params:t,url:a}){if(!(a.host==="satirigal.com"||a.host==="localhost:5173"||a.host==="localhost:4173"||a.host==="localhost:3000"))throw I(301,"https://satirigal.com");return{}}const te=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function H(m){let t,a;return{c(){t=p("h1"),a=O("Your regular dose of satires coming soon...")},l(e){t=d(e,"H1",{});var o=S(t);a=q(o,"Your regular dose of satires coming soon..."),o.forEach(i)},m(e,o){g(e,t,o),_(t,a)},p:z,d(e){e&&i(t)}}}function K(m){let t,a;return t=new L({props:{style:"display:flex; align-items:center; justify-content:center;",$$slots:{default:[H]},$$scope:{ctx:m}}}),{c(){v(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,o){b(t,e,o),a=!0},p(e,o){const r={};o&256&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){a||(k(t.$$.fragment,e),a=!0)},o(e){x(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function Q(m){let t,a,e,o,r,c,l,f;return document.title=t=y,l=new B({props:{$$slots:{default:[K]},$$scope:{ctx:m}}}),{c(){a=p("link"),e=p("meta"),o=p("meta"),r=C(),c=p("article"),v(l.$$.fragment),this.h()},l(n){const s=M("svelte-56e86n",document.head);a=d(s,"LINK",{rel:!0,href:!0}),e=d(s,"META",{name:!0,content:!0}),o=d(s,"META",{name:!0,content:!0}),s.forEach(i),r=R(n),c=d(n,"ARTICLE",{class:!0});var h=S(c);P(l.$$.fragment,h),h.forEach(i),this.h()},h(){u(a,"rel","canonical"),u(a,"href","https://satirigal.com"),u(e,"name","description"),u(e,"content",V),u(o,"name","keywords"),u(o,"content",U),u(c,"class","container svelte-1hek5uo")},m(n,s){_(document.head,a),_(document.head,e),_(document.head,o),g(n,r,s),g(n,c,s),b(l,c,null),f=!0},p(n,[s]){(!f||s&0)&&t!==(t=y)&&(document.title=t);const h={};s&256&&(h.$$scope={dirty:s,ctx:n}),l.$set(h)},i(n){f||(k(l.$$.fragment,n),f=!0)},o(n){x(l.$$.fragment,n),f=!1},d(n){i(a),i(e),i(o),n&&i(r),n&&i(c),E(l)}}}let U="Politics, Economics, Satire, Satirical, Geo-politics",y="Satirigal: Satirical Girl",V="Your regular dose of satires";function W(m,t,a){let e;Y(m,$,l=>a(2,e=l)),j($,e="Satirigal",e);const o=["TRAIN YOUR BRAIN","Geniuses are not born, they are made.","They thought your kid has not got it.","Practice! Practice! Practice!"];let r,c=0;return G(()=>{r=setInterval(()=>c=(c+1)%o.length,o.length*1e3)}),N(()=>clearInterval(r)),[]}class ae extends T{constructor(t){super(),A(this,t,W,Q,w,{})}}export{ae as component,te as universal};
