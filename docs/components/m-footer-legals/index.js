var StyleGuideWebComponent=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}})()&&Object.assign;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},c=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},p=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},f=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},d=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},h=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function y(){}var _=0;function b(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(t){function e(){return t.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(t).map(function(n){return e[n]=t[n],n}).reduce(b,e),_--),e}(n)),t}var g=t(function(t){t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=y,n.PropTypes=n,n}()});Object.keys(g).reduce(b,g);var m=g.oneOf(["left","center","right"]),O=g.oneOf(["left","right"]),C=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),k=g.oneOf(["ok","pending","error","unknown"]),x=g.oneOf(["row","col","rowgroup","colgroup","auto"]),w=g.oneOfType([g.string,g.number]),T={text:w,value:g.any,rowspan:w,colspan:w,scope:x,align:m,dense:g.bool},j={float:O,strong:g.bool,bold:g.bool},P=g.oneOfType([g.string,g.number]),N=g.oneOfType([P,g.shape(l({},T,{sort:C,sortActive:g.bool}))]),E=g.oneOfType([P,g.shape(l({},T,j,{action:g.bool,state:k}))]),A=g.oneOfType([P,g.shape(l({},T,j))]),S=g.oneOfType([g.arrayOf(N),g.shape({cells:g.arrayOf(N)})]),R=g.oneOfType([g.arrayOf(E),g.shape({cells:g.arrayOf(E),action:g.bool})]),D=g.oneOfType([g.arrayOf(A),g.shape({cells:g.arrayOf(A)})]),L=(g.oneOfType([S,g.arrayOf(S)]),g.oneOfType([R,g.arrayOf(R)]),g.oneOfType([D,g.arrayOf(D)]),t(function(t){!function(){var e={}.hasOwnProperty;function n(){for(var t=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":i(r);if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===a)for(var s in r)e.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?t.exports=n:window.classNames=n}()})),U=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function M(t,e,n){var o=t;if(n)return function(t,e,n){var o=t;switch(n){case g.string:case g.string.isRequired:return t;case g.bool:case g.bool.isRequired:if(!t||e===t)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(U.test(t))try{o=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}return o}(t,e,n);if(t&&e!==t){if(U.test(t))try{o=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else o=!0;return o}var I=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,q=/[-_]+/g;function F(t){return t.replace(I,V)}function V(t,e){return 0==+t||q.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function K(t,e,n){var o=1===t.nodeType,r=t.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[F(e)]);if(o&&!t.hasAttribute(e))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=M(a,e,i)}var H,W,z,B,G=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},$={},J=(H=Object,W=H.getPrototypeOf||function(t){return t.__proto__},z=H.setPrototypeOf||function(t,e){return t.__proto__=e,t},B="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),z(new o,n.prototype)},function(t){var e=W(t);return z(t,z(function(){return B(e,arguments,W(this).constructor)},e))}),Y=function(t){return J(function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),s(n,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in $||($[t]=0),++$[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}())},Z={},X=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(t,o,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},l}}();function Q(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new X(e,l({},o,{detail:n}));return t.dispatchEvent(r)}var tt=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function et(t){for(var e=t.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(t){var r=(i=t,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(e);var i,a;r?n=!0:o=!1;return{className:t,hasClass:r}});return!(!o&&!n)&&s}var nt=/\s+/,ot={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function rt(t,e,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,l=r.passive,u=void 0===l||l;if(ot[e]&&(e=ot[e]),!t||!e)return null;var c=void 0===n?"undefined":i(n),p=n&&"string"===c;if("function"===c){if(o){var f=o;s=f.capture,u=f.passive}o=n}for(var d=tt?{capture:s,passive:u}:s,h=p?function(e){var r=e.target;for(;!et(r,n)&&r!==t;)r=r.parentNode;if(r!==t)return o(e,r)}:o,v=e.split(nt),y=v.length,_=0;_<y;++_)t.addEventListener(v[_],h,d);return function e(){for(var n=0;n<y;++n)t.removeEventListener(v[n],h,d);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,e)}}function it(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,p=void 0,f=void 0,d=!1,h=e!==l,y=!1!==l;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return u=o,h&&(c&&clearTimeout(c),c=setTimeout(b,e)),y&&!p&&(p=setTimeout(g,l)),r&&!d&&(d=!0,f=t.apply(void 0,v(u))),f}return _.flush=function(){(c||p)&&(f=t.apply(void 0,v(u)));return O(),f},_.cancel=O,_;function b(){p&&clearTimeout(p),m()}function g(){c&&clearTimeout(c),m()}function m(){a&&(f=t.apply(void 0,v(u))),c=null,p=null,d=!1}function O(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var at=window.__subscriptions;function st(t,e){var n=rt(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);at[t]||(at[t]={count:0});var o,r=at[t];return r.count++,r.onsubscribe||(r.onsubscribe=it((o=t,function(){Q(document,"pubsub/onsubscribe",o),Q(document,"pubsub/onsubscribe/"+o,o),at[o]&&delete at[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete at[t]}}rt(document,"pubsub/onsubscribe",function(t){var e=t.detail;at[e]||(at[e]={count:0});var n=at[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=h(t,3),n=e[0],o=e[1],r=e[2];Q(r,n,o)}),delete n.queue)});var lt,ut=function(t,e){return t===e},ct=((lt=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut;return function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return function(){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){return t.apply(void 0,[].concat(n,o))?lt.apply(void 0,arguments):void 0}}}})()(!0),[]);var pt=1,ft=3,dt=8;function ht(t,e){var n=t.nodeType,o=t.nodeName;n===pt&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),o=e.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(t){return n&&r&&-1===o.indexOf(t)},a=e.attributes,s=t.attributes,l=null,u=null,c=null,p=null,f=s.length-1;f>=0;--f)if(p=s[f],c=p.name,l=p.namespaceURI,u=p.value,!i(c))if(l){var d=p.localName;e.getAttributeNS(l,d||c)!==u&&e.setAttributeNS(l,c,u)}else e.hasAttribute(c)?e.getAttribute(c)!==u&&("null"===u||"undefined"===u?e.removeAttribute(c):e.setAttribute(c,u)):e.setAttribute(c,u);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(c=p.name,l=p.namespaceURI,i(c))continue;l?(c=p.localName||c,t.hasAttributeNS(l,c)||e.removeAttributeNS(l,c)):t.hasAttributeNS(null,c)||e.removeAttribute(c)}}(t,e),n!==ft&&n!==dt||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===o?function(t,e){var n=t.value,o=e.value;vt(t,e,"checked"),vt(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===o?vt(t,e,"selected"):"TEXTAREA"===o&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function vt(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var yt=3;function _t(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(ht(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(bt(o,n))(r=_t(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var l=s;l<e.childNodes.length;l++)if(bt(e.childNodes[l],o)){i=e.childNodes[l];break}i?((r=_t(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=_t(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),e):null:t}function bt(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===yt&&t.nodeValue===e.nodeValue)}var gt,mt,Ot,Ct,kt=(gt=Object,mt=gt.getPrototypeOf||function(t){return t.__proto__},Ot=gt.setPrototypeOf||function(t,e){return t.__proto__=e,t},Ct="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),Ot(new o,n.prototype)},function(t){var e=mt(t);return Ot(t,Ot(function(){return Ct(e,arguments,mt(this).constructor)},e))})(function(t){function e(t){var n;a(this,e);for(var o="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];var l=f(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,e),l.name="TemplateNoStringReturnException",l}return c(e,t),e}(Error)),xt=!!document.createDocumentFragment().children,wt=/[A-Z]/g;function Tt(t){return t.replace(wt,jt)}function jt(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var Pt=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Nt(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,l=t.ownerDocument.documentElement,u=rt(l,e,function(e){var o=e.target;if(!t.contains(o)&&t!==o)return n(e)},{capture:i,passive:s});return Pt&&(l.style.cursor="pointer"),u}var Et=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,r={},i=0;i<o;++i){var a=e[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),At="axa-change",St="data-prevent-default";((function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,t),this._handleClick=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var o=!n._lastToggleNode,r=e!==n._lastToggleNode,i=!o&&!r;o?(n._notify(Et.ENTER,e),n._onInteractive()):r&&n._notify(Et.MOVE,e,n._lastToggleNode),n._lastToggleNode=e,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),n._close()},this._handleKeyUp=function(t){(t.key===Et.ESCAPE||t.key===Et.ESC||27===t.keyCode)&&(t.preventDefault(),n._close())},this._init(e,o)}return s(t,[{key:"_init",value:function(e,n){e&&(this._wcNode=e),n&&(this._options=l({},t.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=rt(this._container,Et.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,o=e.outerClose,r=e.escapeClose,i=e.preventDefault;n&&(this._unCloseClick=rt(t,Et.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Nt(t,Et.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=rt(t.ownerDocument,Et.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(St)?K(t,St):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Et.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),t})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Rt=G(function(t){var e,n;return n=e=function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),n}(),e.version="2.0.1-beta.237",n},function(t){return function(e){function n(){var t,e,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=o=f(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(i))),o._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,t)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=st("context/available",o._makeContextReady)},f(o,e)}return c(n,t),s(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;at[t]||(at[t]={count:0,queue:[]});var o=at[t].queue;Array.isArray(o)?o.push([t,e,n]):Q(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),s(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),s(n,[{key:"init",value:function(t){var e=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=it(function(){return e.updated&&e.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(t){F(t)})}},{key:"connectedCallback",value:function(){var t=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var n=F(e);if(t.hasAttribute(e)){var r=K(t,e,o[n]);t.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,o){if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,t,e,o),this.shouldUpdateCallback(o,e)){var r=F(t);if(this.hasAttribute(t)){var i=this.constructor.propTypes;this.props[r]=M(o,t,i[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==o&&Q(this,At,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var e=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this);var o=this.constructor.observedAttributes,r=void 0===o?[]:o,i=Object.keys(t).filter(function(t){return r.indexOf(Tt(t))>-1}).reduce(function(t,n){var o=t.props,r=t.shouldUpdate,i=o[n],a=e.props&&e.props[n]?e.props[n]:void 0;return r||e.shouldUpdateCallback(i,a)?(e.props[n]=i,{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,o=this.props;e&&g.checkPropTypes(e,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(Tt)}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),s(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,o=p(t,["template"]);u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var t=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var o=this._template;try{if(e){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});xt||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var s=o(this.props,this.childrenFragment,this),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(t){l.appendChild(t)});else if(s){if("string"==typeof s)throw new kt(this);l.appendChild(s)}if(e)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,l);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(l),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: newTree should be an object");_t(e,t)}(this,c),function(){for(var t=void 0;t=ct.pop();)delete t.isSameNode;ct=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),s(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,o=void 0===e?"":e,r=p(t,["styles"]);u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),n}()}),Dt=(G(Rt,Y),G(Rt,function(t){return function(e){function n(){var t,e,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=o=f(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(i))),o._appendStyles=function(){n.appendGlobalStyles(o._styles,o.nodeName)},f(o,e)}return c(n,t),s(n,null,[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.uuidv4();if(e&&!Z[n]){var o=document.createElement("style"),r=document.createTextNode(e);Z[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},Y)(HTMLElement));var Lt,Ut,Mt,It=function(t){function e(){return a(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,Dt),s(e,[{key:"init",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:".m-footer-legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-right: 15px;\n  padding-left: 15px;\n  display: block;\n  max-width: 100%;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  margin-left: auto;\n  color: rgba(255, 255, 255, 0.65);\n  text-align: right; }\n  @media (min-width: 576px) {\n    .m-footer-legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n  @media (max-width: 991px) {\n    .m-footer-legals {\n      padding-bottom: 15px;\n      margin-left: 0;\n      text-align: center; }\n      .m-footer-legals:first-child:last-child {\n        padding-bottom: 6px; } }\n  @media (max-width: 575px) {\n    .m-footer-legals:last-child {\n      padding-top: 0; }\n    .m-footer-legals:first-child {\n      padding-top: 15px; }\n    .m-footer-legals:first-child:last-child {\n      padding-top: 6px; } }\n\n.m-footer-legals__link {\n  position: relative;\n  display: inline-block;\n  padding: 6px 10px;\n  margin: -6px 0;\n  color: rgba(255, 255, 255, 0.65); }\n  .m-footer-legals__link:hover, .m-footer-legals__link:active, .m-footer-legals__link:focus {\n    color: #fff;\n    text-decoration: none; }\n  .m-footer-legals__link::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-legals__link:first-child::after {\n    display: none; }\n\n.m-footer-legals__copy {\n  display: inline-block;\n  margin-left: 10px; }\n\n.m-footer-legals--bottom {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  /* stylelint-disable-next-line declaration-no-important */\n  text-align: right !important; }\n  .m-footer-legals--bottom .m-footer-legals__link:last-of-type {\n    margin-right: -10px; }\n  .m-footer-legals--bottom .m-footer-legals__copy {\n    display: block;\n    margin-left: 0; }\n"})}},{key:"connectedCallback",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.render()}},{key:"attributeChangedCallback",value:function(){this.render()}},{key:"render",value:function(){var t=K(this,"bottom");this.className=L(this.initialClassName,"m-footer-legals",{"m-footer-legals--bottom":t})}}]),e}();return It.tagName="axa-footer-legals",It.propTypes={bottom:g.bool},Lt=It.tagName,Ut=It,customElements.get(Lt)||customElements.define(Lt,Ut,Mt),It}();
