!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define("RangeTouch",["exports"],t):t(e.RangeTouch={})}(this,function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(e){return null!=e?e.constructor:null},r=function(e,t){return!!(e&&t&&e instanceof t)},u=function(e){return null==e},i=function(e){return n(e)===Object},o=function(e){return n(e)===String},a=function(e){return Array.isArray(e)},c=function(e){return r(e,NodeList)},l={nullOrUndefined:u,object:i,number:function(e){return n(e)===Number&&!Number.isNaN(e)},string:o,boolean:function(e){return n(e)===Boolean},function:function(e){return n(e)===Function},array:a,nodeList:c,element:function(e){return r(e,Element)},event:function(e){return r(e,Event)},empty:function(e){return u(e)||(o(e)||a(e)||c(e))&&!e.length||i(e)&&!Object.keys(e).length}};function s(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}var f={addCSS:!0,thumbWidth:15,watch:!0},d=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),l.element(t)?this.element=t:l.string(t)&&(this.element=document.querySelector(t)),l.element(this.element)&&l.empty(this.element.rangeTouch)&&(this.config=Object.assign({},f,n),this.init())}return n=e,u=[{key:"setup",value:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=null;if(l.empty(t)||l.string(t)?r=Array.from(document.querySelectorAll(l.string(t)?t:'input[type="range"]')):l.element(t)?r=[t]:l.nodeList(t)?r=Array.from(t):l.array(t)&&(r=t.filter(l.element)),l.empty(r))return null;var u=Object.assign({},f,n);l.string(t)&&u.watch&&new MutationObserver(function(n){Array.from(n).forEach(function(n){Array.from(n.addedNodes).forEach(function(n){l.element(n)&&function(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}(n,t)&&new e(n,u)})})}).observe(document.body,{childList:!0,subtree:!0});return r.map(function(t){return new e(t,n)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}],(r=[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(t){if(!e.enabled||!l.event(t))return null;var n,r=t.target,u=t.changedTouches[0],i=parseFloat(r.getAttribute("min"))||0,o=parseFloat(r.getAttribute("max"))||100,a=parseFloat(r.getAttribute("step"))||1,c=r.getBoundingClientRect(),f=100/c.width*(this.config.thumbWidth/2)/100;return 0>(n=100/c.width*(u.clientX-c.left))?n=0:100<n&&(n=100),50>n?n-=(100-2*n)*f:50<n&&(n+=2*(n-50)*f),i+s(n/100*(o-i),a)}},{key:"set",value:function(t){e.enabled&&l.event(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(t.target,"touchend"===t.type?"change":"input"))}}])&&t(n.prototype,r),u&&t(n,u),e;var n,r,u}();e.default=d,Object.defineProperty(e,"__esModule",{value:!0})});