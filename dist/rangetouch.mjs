function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var defaults={addCSS:!0,thumbWidth:15,watch:!0};function matches(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function trigger(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}var getConstructor=function(e){return null!=e?e.constructor:null},instanceOf=function(e,t){return!!(e&&t&&e instanceof t)},isNullOrUndefined=function(e){return null==e},isObject=function(e){return getConstructor(e)===Object},isNumber=function(e){return getConstructor(e)===Number&&!Number.isNaN(e)},isString=function(e){return getConstructor(e)===String},isBoolean=function(e){return getConstructor(e)===Boolean},isFunction=function(e){return getConstructor(e)===Function},isArray=function(e){return Array.isArray(e)},isNodeList=function(e){return instanceOf(e,NodeList)},isElement=function(e){return instanceOf(e,Element)},isEvent=function(e){return instanceOf(e,Event)},isEmpty=function(e){return isNullOrUndefined(e)||(isString(e)||isArray(e)||isNodeList(e))&&!e.length||isObject(e)&&!Object.keys(e).length},is={nullOrUndefined:isNullOrUndefined,object:isObject,number:isNumber,string:isString,boolean:isBoolean,function:isFunction,array:isArray,nodeList:isNodeList,element:isElement,event:isEvent,empty:isEmpty};function getDecimalPlaces(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}function round(e,t){if(1>t){var n=getDecimalPlaces(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}var RangeTouch=function(){function e(t,n){_classCallCheck(this,e),is.element(t)?this.element=t:is.string(t)&&(this.element=document.querySelector(t)),is.element(this.element)&&is.empty(this.element.rangeTouch)&&(this.config=Object.assign({},defaults,n),this.init())}return _createClass(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(t){if(!e.enabled||!is.event(t))return null;var n,r=t.target,i=t.changedTouches[0],s=parseFloat(r.getAttribute("min"))||0,u=parseFloat(r.getAttribute("max"))||100,o=parseFloat(r.getAttribute("step"))||1,a=r.getBoundingClientRect(),c=100/a.width*(this.config.thumbWidth/2)/100;return 0>(n=100/a.width*(i.clientX-a.left))?n=0:100<n&&(n=100),50>n?n-=(100-2*n)*c:50<n&&(n+=2*(n-50)*c),s+round(n/100*(u-s),o)}},{key:"set",value:function(t){e.enabled&&is.event(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),trigger(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=null;is.empty(t)||is.string(t)?r=Array.from(document.querySelectorAll(is.string(t)?t:'input[type="range"]')):is.element(t)?r=[t]:is.nodeList(t)?r=Array.from(t):is.array(t)&&(r=t.filter(is.element));var i=Object.assign({},defaults,n);if(is.empty(r)&&!i.watch)return null;is.string(t)&&i.watch&&new MutationObserver(function(n){Array.from(n).forEach(function(n){Array.from(n.addedNodes).forEach(function(n){is.element(n)&&matches(n,t)&&new e(n,i)})})}).observe(document.body,{childList:!0,subtree:!0});return r.map(function(t){return new e(t,n)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}();export default RangeTouch;