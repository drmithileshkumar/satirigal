import{S as j,i as D,s as L,k as M,l as v,n as p,b as O,G as U,Z as w,h as P,M as T,a7 as W,w as E}from"./index.fe0a1c86.js";/* empty css                                                    */function F(s){let e,n,o;return{c(){e=M("input"),this.h()},l(i){e=v(i,"INPUT",{class:!0,id:!0,type:!0,accept:!0}),this.h()},h(){p(e,"class","hidden svelte-17nkj1a"),p(e,"id","file-to-upload"),p(e,"type","file"),p(e,"accept","image/*")},m(i,h){O(i,e,h),s[7](e),n||(o=[U(e,"change",s[6]),U(e,"change",s[8])],n=!0)},p:w,i:w,o:w,d(i){i&&P(e),s[7](null),n=!1,T(o)}}}function H(s,e,n){let{media:o}=e,{url:i}=e,{isClicked:h=!1}=e,C=W(),u,m;const R=()=>{m.click()};async function _(t){if(t.type==="image/svg+xml"){const a=new FileReader;a.readAsDataURL(t),a.onload=()=>{y(a.result,t.name,i)}}else{const a=new Image;a.src=URL.createObjectURL(t),a.onload=()=>{const d=document.createElement("canvas"),c=d.getContext("2d"),k=800,g=300,f=a.width/a.height;let l,r;a.width>a.height?(l=Math.min(a.width,k),r=Math.round(l/f)):(r=Math.min(a.height,g),l=Math.round(r*f)),d.width=l,d.height=r,c.drawImage(a,0,0,l,r);const I=d.toDataURL("image/jpeg",.9);n(3,o=I),y(I,t.name,i)}}}async function y(t,a,d){const c={};if(t.startsWith("data:image/svg+xml"))c.name=a,c.image=t.split(",")[1];else{const l=t.split(",");c.name=a,c.image=l[1]}const g=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"},body:JSON.stringify(c)});if(!g.ok){alert("Upload failed.");return}let f=await g.text();C("onUpload",{mediaPath:f,imgBase64:t}),alert("Image uploaded")}function b(){u=this.files,n(0,u)}function x(t){E[t?"unshift":"push"](()=>{m=t,n(1,m)})}const S=()=>_(u[0]);return s.$$set=t=>{"media"in t&&n(3,o=t.media),"url"in t&&n(4,i=t.url),"isClicked"in t&&n(5,h=t.isClicked)},s.$$.update=()=>{s.$$.dirty&32&&h&&R()},[u,m,_,o,i,h,b,x,S]}class z extends j{constructor(e){super(),D(this,e,H,F,L,{media:3,url:4,isClicked:5})}}export{z as I};