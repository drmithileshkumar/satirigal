import{r as h}from"../chunks/index.ade5cbd2.js";import{S as $,i as w,s as b,k as f,a as k,y as v,$ as I,l as _,h as p,c as P,z as y,n as m,V as d,b as D,A as S,g as j,d as z,B as A,W as E,X as F}from"../chunks/index.fe0a1c86.js";import{F as M}from"../chunks/FullPost.1df8107c.js";import{c as g}from"../chunks/stores.69f96dac.js";async function O({parent:i,fetch:n,params:o,url:e}){if(!(e.host==="satirigal.com"||e.host==="localhost:5173"||e.host==="localhost:4173"||e.host==="localhost:3000"))throw h(301,"https://satirigal.com");let a=`/api/comment/${o.commentID}`,s=await n(a);if(!s.ok)throw console.log("redirected..."),h(301,"/");return{comment:await s.json()}}const V=Object.freeze(Object.defineProperty({__proto__:null,load:O},Symbol.toStringTag,{value:"Module"}));function T(i){let n,o,e,r,a,s,c;return document.title=n=i[0].post.title,s=new M({props:{post:i[0].post,profile:q}}),{c(){o=f("link"),r=f("meta"),a=k(),v(s.$$.fragment),this.h()},l(t){const l=I("svelte-puw1mw",document.head);o=_(l,"LINK",{rel:!0,href:!0}),r=_(l,"META",{name:!0,content:!0}),l.forEach(p),a=P(t),y(s.$$.fragment,t),this.h()},h(){m(o,"rel","canonical"),m(o,"href",e="https://satirigal.com/post/$"+i[0].post.postID),m(r,"name","description"),m(r,"content","satirigal.com")},m(t,l){d(document.head,o),d(document.head,r),D(t,a,l),S(s,t,l),c=!0},p(t,[l]){(!c||l&1)&&n!==(n=t[0].post.title)&&(document.title=n),(!c||l&1&&e!==(e="https://satirigal.com/post/$"+t[0].post.postID))&&m(o,"href",e);const u={};l&1&&(u.post=t[0].post),s.$set(u)},i(t){c||(j(s.$$.fragment,t),c=!0)},o(t){z(s.$$.fragment,t),c=!1},d(t){p(o),p(r),t&&p(a),A(s,t)}}}let q="";function B(i,n,o){let e;E(i,g,a=>o(1,e=a)),F(g,e="Post",e);let{data:r}=n;return i.$$set=a=>{"data"in a&&o(0,r=a.data)},[r]}class W extends ${constructor(n){super(),w(this,n,B,T,b,{data:0})}}export{W as component,V as universal};
