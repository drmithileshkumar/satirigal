import{U as B}from"./index.fe0a1c86.js";var D=function(r,i){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])},D(r,i)};function _(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");D(r,i);function t(){this.constructor=r}r.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var y=function(){return y=Object.assign||function(i){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},y.apply(this,arguments)};function A(r){var i=typeof Symbol=="function"&&Symbol.iterator,t=i&&r[i],e=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&e>=r.length&&(r=void 0),{value:r&&r[e++],done:!r}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function T(r,i){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var e=t.call(r),a,n=[],s;try{for(;(i===void 0||i-- >0)&&!(a=e.next()).done;)n.push(a.value)}catch(u){s={error:u}}finally{try{a&&!a.done&&(t=e.return)&&t.call(e)}finally{if(s)throw s.error}}return n}function Y(r,i,t){if(t||arguments.length===2)for(var e=0,a=i.length,n;e<a;e++)(n||!(e in i))&&(n||(n=Array.prototype.slice.call(i,0,e)),n[e]=i[e]);return r.concat(n||Array.prototype.slice.call(i))}/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var I=function(){function r(i){i===void 0&&(i={}),this.adapter=i}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
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
 */function j(r,i){if(r.closest)return r.closest(i);for(var t=r;t;){if(G(t,i))return t;t=t.parentElement}return null}function G(r,i){var t=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return t.call(r,i)}function k(r){var i=r;if(i.offsetParent!==null)return i.scrollWidth;var t=i.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var e=t.scrollWidth;return document.documentElement.removeChild(t),e}const P=Object.freeze(Object.defineProperty({__proto__:null,closest:j,estimateScrollWidth:k,matches:G},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google Inc.
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
 */function X(r){return r===void 0&&(r=window),q(r)?{passive:!0}:!1}function q(r){r===void 0&&(r=window);var i=!1;try{var t={get passive(){return i=!0,!1}},e=function(){};r.document.addEventListener("test",e,t),r.document.removeEventListener("test",e,t)}catch{i=!1}return i}const W=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:X},Symbol.toStringTag,{value:"Module"}));function N(r,i,t,e={bubbles:!0},a=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!r)throw new Error("Tried to dipatch event without element.");const n=new CustomEvent(i,Object.assign(Object.assign({},e),{detail:t}));if(r==null||r.dispatchEvent(n),a&&i.startsWith("SMUI")){const s=new CustomEvent(i.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},e),{detail:t}));r==null||r.dispatchEvent(s),s.defaultPrevented&&n.preventDefault()}return n}var b;function V(r,i){i===void 0&&(i=!1);var t=r.CSS,e=b;if(typeof b=="boolean"&&!i)return b;var a=t&&typeof t.supports=="function";if(!a)return!1;var n=t.supports("--css-vars","yes"),s=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return e=n||s,i||(b=e),e}function Z(r,i,t){if(!r)return{x:0,y:0};var e=i.x,a=i.y,n=e+t.left,s=a+t.top,u,d;if(r.type==="touchstart"){var v=r;u=v.changedTouches[0].pageX-n,d=v.changedTouches[0].pageY-s}else{var p=r;u=p.pageX-n,d=p.pageY-s}return{x:u,y:d}}/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var $={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},E={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},M={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var L=["touchstart","pointerdown","mousedown","keydown"],U=["touchend","pointerup","mouseup","contextmenu"],w=[],J=function(r){_(i,r);function i(t){var e=r.call(this,y(y({},i.defaultAdapter),t))||this;return e.activationAnimationHasEnded=!1,e.activationTimer=0,e.fgDeactivationRemovalTimer=0,e.fgScale="0",e.frame={width:0,height:0},e.initialSize=0,e.layoutFrame=0,e.maxRadius=0,e.unboundedCoords={left:0,top:0},e.activationState=e.defaultActivationState(),e.activationTimerCallback=function(){e.activationAnimationHasEnded=!0,e.runDeactivationUXLogicIfReady()},e.activateHandler=function(a){e.activateImpl(a)},e.deactivateHandler=function(){e.deactivateImpl()},e.focusHandler=function(){e.handleFocus()},e.blurHandler=function(){e.handleBlur()},e.resizeHandler=function(){e.layout()},e}return Object.defineProperty(i,"cssClasses",{get:function(){return $},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var a=i.cssClasses,n=a.ROOT,s=a.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},i.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));var e=i.cssClasses,a=e.ROOT,n=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(a),t.adapter.removeClass(n),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},i.prototype.activate=function(t){this.activateImpl(t)},i.prototype.deactivate=function(){this.deactivateImpl()},i.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},i.prototype.setUnbounded=function(t){var e=i.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(i.cssClasses.BG_FOCUSED)})},i.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(i.cssClasses.BG_FOCUSED)})},i.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},i.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers=function(t){var e,a;if(t){try{for(var n=A(L),s=n.next();!s.done;s=n.next()){var u=s.value;this.adapter.registerInteractionHandler(u,this.activateHandler)}}catch(d){e={error:d}}finally{try{s&&!s.done&&(a=n.return)&&a.call(n)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},i.prototype.registerDeactivationHandlers=function(t){var e,a;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var n=A(U),s=n.next();!s.done;s=n.next()){var u=s.value;this.adapter.registerDocumentInteractionHandler(u,this.deactivateHandler)}}catch(d){e={error:d}}finally{try{s&&!s.done&&(a=n.return)&&a.call(n)}finally{if(e)throw e.error}}},i.prototype.deregisterRootHandlers=function(){var t,e;try{for(var a=A(L),n=a.next();!n.done;n=a.next()){var s=n.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(u){t={error:u}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},i.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var a=A(U),n=a.next();!n.done;n=a.next()){var s=n.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(u){t={error:u}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}},i.prototype.removeCssVars=function(){var t=this,e=i.strings,a=Object.keys(e);a.forEach(function(n){n.indexOf("VAR_")===0&&t.adapter.updateCssVariable(e[n],null)})},i.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var a=this.activationState;if(!a.isActivated){var n=this.previousActivationEvent,s=n&&t!==void 0&&n.type!==t.type;if(!s){a.isActivated=!0,a.isProgrammatic=t===void 0,a.activationEvent=t,a.wasActivatedByPointer=a.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var u=t!==void 0&&w.length>0&&w.some(function(d){return e.adapter.containsEventTarget(d)});if(u){this.resetActivationState();return}t!==void 0&&(w.push(t.target),this.registerDeactivationHandlers(t)),a.wasElementMadeActive=this.checkElementMadeActive(t),a.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){w=[],!a.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(a.wasElementMadeActive=e.checkElementMadeActive(t),a.wasElementMadeActive&&e.animateActivation()),a.wasElementMadeActive||(e.activationState=e.defaultActivationState())})}}}},i.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},i.prototype.animateActivation=function(){var t=this,e=i.strings,a=e.VAR_FG_TRANSLATE_START,n=e.VAR_FG_TRANSLATE_END,s=i.cssClasses,u=s.FG_DEACTIVATION,d=s.FG_ACTIVATION,v=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var p="",c="";if(!this.adapter.isUnbounded()){var m=this.getFgTranslationCoordinates(),h=m.startPoint,o=m.endPoint;p=h.x+"px, "+h.y+"px",c=o.x+"px, "+o.y+"px"}this.adapter.updateCssVariable(a,p),this.adapter.updateCssVariable(n,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(u),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},v)},i.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,e=t.activationEvent,a=t.wasActivatedByPointer,n;a?n=Z(e,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):n={x:this.frame.width/2,y:this.frame.height/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:n,endPoint:s}},i.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=i.cssClasses.FG_DEACTIVATION,a=this.activationState,n=a.hasDeactivationUXRun,s=a.isActivated,u=n||!s;u&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e)},M.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses=function(){var t=i.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},i.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},i.numbers.TAP_DELAY_MS)},i.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var a=y({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(a)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(a),t.resetActivationState()}))}},i.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,a=t.wasElementMadeActive;(e||a)&&this.runDeactivationUXLogicIfReady()},i.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width),a=function(){var s=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return s+i.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?e:a();var n=Math.floor(e*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!==0?this.initialSize=n-1:this.initialSize=n,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},i.prototype.updateLayoutCssVars=function(){var t=i.strings,e=t.VAR_FG_SIZE,a=t.VAR_LEFT,n=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(a,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},i}(I);const{applyPassive:S}=W,{matches:K}=P;function tt(r,{ripple:i=!0,surface:t=!1,unbounded:e=!1,disabled:a=!1,color:n,active:s,rippleElement:u,eventTarget:d,activeTarget:v,addClass:p=o=>r.classList.add(o),removeClass:c=o=>r.classList.remove(o),addStyle:m=(o,g)=>r.style.setProperty(o,g),initPromise:h=Promise.resolve()}={}){let o,g=B("SMUI:addLayoutListener"),C,R=s,F=d,H=v;function x(){t?(p("mdc-ripple-surface"),n==="primary"?(p("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):n==="secondary"?(c("smui-ripple-surface--primary"),p("smui-ripple-surface--secondary")):(c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary"))):(c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),o&&R!==s&&(R=s,s?o.activate():s===!1&&o.deactivate()),i&&!o?(o=new J({addClass:p,browserSupportsCssVars:()=>V(window),computeBoundingRect:()=>(u||r).getBoundingClientRect(),containsEventTarget:l=>r.contains(l),deregisterDocumentInteractionHandler:(l,f)=>document.documentElement.removeEventListener(l,f,S()),deregisterInteractionHandler:(l,f)=>(d||r).removeEventListener(l,f,S()),deregisterResizeHandler:l=>window.removeEventListener("resize",l),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>s??K(v||r,":active"),isSurfaceDisabled:()=>!!a,isUnbounded:()=>!!e,registerDocumentInteractionHandler:(l,f)=>document.documentElement.addEventListener(l,f,S()),registerInteractionHandler:(l,f)=>(d||r).addEventListener(l,f,S()),registerResizeHandler:l=>window.addEventListener("resize",l),removeClass:c,updateCssVariable:m}),h.then(()=>{o&&(o.init(),o.setUnbounded(e))})):o&&!i&&h.then(()=>{o&&(o.destroy(),o=void 0)}),o&&(F!==d||H!==v)&&(F=d,H=v,o.destroy(),requestAnimationFrame(()=>{o&&(o.init(),o.setUnbounded(e))})),!i&&e&&p("mdc-ripple-upgraded--unbounded")}x(),g&&(C=g(z));function z(){o&&o.layout()}return{update(l){({ripple:i,surface:t,unbounded:e,disabled:a,color:n,active:s,rippleElement:u,eventTarget:d,activeTarget:v,addClass:p,removeClass:c,addStyle:m,initPromise:h}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:f=>r.classList.add(f),removeClass:f=>r.classList.remove(f),addStyle:(f,O)=>r.style.setProperty(f,O),initPromise:Promise.resolve()},l)),x()},destroy(){o&&(o.destroy(),o=void 0,c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),C&&C()}}}export{I as M,tt as R,_,y as a,A as b,T as c,N as d,W as e,Y as f,X as g,J as h,G as m,P as p,V as s};
