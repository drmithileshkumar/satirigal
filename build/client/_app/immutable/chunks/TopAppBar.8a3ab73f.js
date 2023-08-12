import{S as oe,i as ae,s as ie,C as ne,D as P,k as le,l as pe,m as ce,h as N,E as V,b as ue,G as M,F as U,I as de,J as fe,K as he,L as Se,H as Te,g as ge,d as _e,M as Ae,N as j,O as me,o as Ce,R as ye,a0 as be,w as Ee}from"./index.fe0a1c86.js";import{r as Be}from"./index.f4007c38.js";import{c as Y,u as Oe,f as Ie}from"./classAdderBuilder.3bb4970d.js";import{_ as R,a as X,M as De,d as Le}from"./Ripple.f4cb968a.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var g={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},H={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},He={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var v=function(r){R(e,r);function e(t){return r.call(this,X(X({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return He},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return g},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(De);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var L=0,w=function(r){R(e,r);function e(t){var a=r.call(this,t)||this;return a.wasDocked=!0,a.isDockedShowing=!0,a.currentAppBarOffsetTop=0,a.isCurrentlyBeingResized=!1,a.resizeThrottleId=L,a.resizeDebounceId=L,a.lastScrollPosition=a.adapter.getViewportScrollY(),a.topAppBarHeight=a.adapter.getTopAppBarHeight(),a}return e.prototype.destroy=function(){r.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),a=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=a,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=L,t.throttledResizeHandler()},H.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=L},H.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,a=this.currentAppBarOffsetTop<0,c=this.currentAppBarOffsetTop>t,p=a&&c;if(p)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==c)return this.isDockedShowing=c,!0}else return this.wasDocked=!0,!0;return p},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-H.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(v);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Re=function(r){R(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(g.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(g.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(w);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Me=function(r){R(e,r);function e(t){var a=r.call(this,t)||this;return a.collapsed=!1,a.isAlwaysCollapsed=!1,a}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){r.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(g.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(g.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(g.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(g.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(v);const{window:G}=be;function Pe(r){let e,t,a,c,p,_,y;const A=r[22].default,l=ne(A,r,r[21],null);let m=[{class:t=Y({[r[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":r[4]==="short","mdc-top-app-bar--short-collapsed":r[0],"mdc-top-app-bar--fixed":r[4]==="fixed","smui-top-app-bar--static":r[4]==="static","smui-top-app-bar--color-secondary":r[5]==="secondary","mdc-top-app-bar--prominent":r[6],"mdc-top-app-bar--dense":r[7],...r[11]})},{style:a=Object.entries(r[12]).map(W).concat([r[3]]).join(" ")},r[15]],f={};for(let o=0;o<m.length;o+=1)f=P(f,m[o]);return{c(){e=le("header"),l&&l.c(),this.h()},l(o){e=pe(o,"HEADER",{class:!0,style:!0});var i=ce(e);l&&l.l(i),i.forEach(N),this.h()},h(){V(e,f)},m(o,i){ue(o,e,i),l&&l.m(e,null),r[25](e),p=!0,_||(y=[M(G,"resize",r[23]),M(G,"scroll",r[24]),U(c=Oe.call(null,e,r[1])),U(r[13].call(null,e)),M(e,"SMUITopAppBarIconButton:nav",r[26])],_=!0)},p(o,i){l&&l.p&&(!p||i[0]&2097152)&&de(l,A,o,o[21],p?he(A,o[21],i,null):fe(o[21]),null),V(e,f=Se(m,[(!p||i[0]&2293&&t!==(t=Y({[o[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":o[4]==="short","mdc-top-app-bar--short-collapsed":o[0],"mdc-top-app-bar--fixed":o[4]==="fixed","smui-top-app-bar--static":o[4]==="static","smui-top-app-bar--color-secondary":o[5]==="secondary","mdc-top-app-bar--prominent":o[6],"mdc-top-app-bar--dense":o[7],...o[11]})))&&{class:t},(!p||i[0]&4104&&a!==(a=Object.entries(o[12]).map(W).concat([o[3]]).join(" ")))&&{style:a},i[0]&32768&&o[15]])),c&&Te(c.update)&&i[0]&2&&c.update.call(null,o[1])},i(o){p||(ge(l,o),p=!0)},o(o){_e(l,o),p=!1},d(o){o&&N(e),l&&l.d(o),r[25](null),_=!1,Ae(y)}}}const W=([r,e])=>`${r}: ${e};`;function we(r,e,t){const a=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let c=j(e,a),{$$slots:p={},$$scope:_}=e;const y=Ie(me());let A=()=>{};function l(s){return s===A}let{use:m=[]}=e,{class:f=""}=e,{style:o=""}=e,{variant:i="standard"}=e,{color:z="primary"}=e,{collapsed:h=A}=e;const Z=!l(h)&&!!h;l(h)&&(h=!1);let{prominent:b=!1}=e,{dense:E=!1}=e,{scrollTarget:d=void 0}=e,S,n,u={},T={},B,q=Be({variant:i,prominent:b,dense:E},s=>{t(18,B=s)}),C,O=i;Ce(()=>(t(9,n=F()),n.init(),()=>{n.destroy()}));function F(){const s={static:v,short:Me,fixed:Re,standard:w}[i]||w;return new s({hasClass:J,addClass:K,removeClass:Q,setStyle:x,getTopAppBarHeight:()=>S.clientHeight,notifyNavigationIconClicked:()=>Le(S,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>d==null?window.pageYOffset:d.scrollTop,getTotalActionItems:()=>S.querySelectorAll(".mdc-top-app-bar__action-item").length})}function J(s){return s in u?u[s]:k().classList.contains(s)}function K(s){u[s]||t(11,u[s]=!0,u)}function Q(s){(!(s in u)||u[s])&&t(11,u[s]=!1,u)}function x(s,D){T[s]!=D&&(D===""||D==null?(delete T[s],t(12,T),t(20,O),t(4,i),t(9,n)):t(12,T[s]=D,T))}function I(){n&&(n.handleTargetScroll(),i==="short"&&t(0,h="isCollapsed"in n&&n.isCollapsed))}function $(){return q}function k(){return S}const ee=()=>i!=="short"&&i!=="fixed"&&n&&n.handleWindowResize(),te=()=>d==null&&I();function re(s){Ee[s?"unshift":"push"](()=>{S=s,t(10,S)})}const se=()=>n&&n.handleNavigationClick();return r.$$set=s=>{e=P(P({},e),ye(s)),t(15,c=j(e,a)),"use"in s&&t(1,m=s.use),"class"in s&&t(2,f=s.class),"style"in s&&t(3,o=s.style),"variant"in s&&t(4,i=s.variant),"color"in s&&t(5,z=s.color),"collapsed"in s&&t(0,h=s.collapsed),"prominent"in s&&t(6,b=s.prominent),"dense"in s&&t(7,E=s.dense),"scrollTarget"in s&&t(8,d=s.scrollTarget),"$$scope"in s&&t(21,_=s.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&262352&&B&&B({variant:i,prominent:b,dense:E}),r.$$.dirty[0]&1049104&&O!==i&&n&&(t(20,O=i),n.destroy(),t(11,u={}),t(12,T={}),t(9,n=F()),n.init()),r.$$.dirty[0]&528&&n&&i==="short"&&"setAlwaysCollapsed"in n&&n.setAlwaysCollapsed(Z),r.$$.dirty[0]&524544&&C!==d&&(C&&C.removeEventListener("scroll",I),d&&d.addEventListener("scroll",I),t(19,C=d))},[h,m,f,o,i,z,b,E,d,n,S,u,T,y,I,c,$,k,B,C,O,_,p,ee,te,re,se]}class Ne extends oe{constructor(e){super(),ae(this,e,we,Pe,ie,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}export{Ne as T};
