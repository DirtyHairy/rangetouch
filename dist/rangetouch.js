!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("RangeTouch",t):e.RangeTouch=t()}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t={addCSS:!0,thumbWidth:15,watch:!0};var n=function(e){return null!=e?e.constructor:null},r=function(e,t){return!!(e&&t&&e instanceof t)},u=function(e){return null==e},i=function(e){return n(e)===Object},o=function(e){return n(e)===String},a=function(e){return Array.isArray(e)},c=function(e){return r(e,NodeList)},l={nullOrUndefined:u,object:i,number:function(e){return n(e)===Number&&!Number.isNaN(e)},string:o,boolean:function(e){return n(e)===Boolean},function:function(e){return n(e)===Function},array:a,nodeList:c,element:function(e){return r(e,Element)},event:function(e){return r(e,Event)},empty:function(e){return u(e)||(o(e)||a(e)||c(e))&&!e.length||i(e)&&!Object.keys(e).length}};function s(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}return function(){function n(e,r){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,n),l.element(e)?this.element=e:l.string(e)&&(this.element=document.querySelector(e)),l.element(this.element)&&l.empty(this.element.rangeTouch)&&(this.config=Object.assign({},t,r),this.init())}return r=n,i=[{key:"setup",value:function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},u=null;l.empty(e)||l.string(e)?u=Array.from(document.querySelectorAll(l.string(e)?e:'input[type="range"]')):l.element(e)?u=[e]:l.nodeList(e)?u=Array.from(e):l.array(e)&&(u=e.filter(l.element));var i=Object.assign({},t,r);if(l.empty(u)&&!i.watch)return null;l.string(e)&&i.watch&&new MutationObserver(function(t){Array.from(t).forEach(function(t){Array.from(t.addedNodes).forEach(function(t){l.element(t)&&function(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}(t,e)&&new n(t,i)})})}).observe(document.body,{childList:!0,subtree:!0});return u.map(function(e){return new n(e,r)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}],(u=[{key:"init",value:function(){n.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){n.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(e){if(!n.enabled||!l.event(e))return null;var t,r=e.target,u=e.changedTouches[0],i=parseFloat(r.getAttribute("min"))||0,o=parseFloat(r.getAttribute("max"))||100,a=parseFloat(r.getAttribute("step"))||1,c=r.getBoundingClientRect(),f=100/c.width*(this.config.thumbWidth/2)/100;return 0>(t=100/c.width*(u.clientX-c.left))?t=0:100<t&&(t=100),50>t?t-=(100-2*t)*f:50<t&&(t+=2*(t-50)*f),i+s(t/100*(o-i),a)}},{key:"set",value:function(e){n.enabled&&l.event(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(e.target,"touchend"===e.type?"change":"input"))}}])&&e(r.prototype,u),i&&e(r,i),n;var r,u,i}()});
//# sourceMappingURL=rangetouch.js.map
