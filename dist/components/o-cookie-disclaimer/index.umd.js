!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var v,_=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(b,t),_--),t}(n)),e}var m=(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n,n}()}(v={exports:{}},v.exports),v.exports);Object.keys(m).reduce(b,m);var g,O,k,C,x=m.oneOf(["left","center","right"]),w=m.oneOf(["left","right"]),T=(m.oneOf(["top","bottom"]),m.oneOf(["up","down"])),N=m.oneOf(["ok","pending","error","unknown"]),j=m.oneOf(["row","col","rowgroup","colgroup","auto"]),A=m.oneOfType([m.string,m.number]),E={text:A,value:m.any,rowspan:A,colspan:A,scope:j,align:x,dense:m.bool},P={float:w,strong:m.bool,bold:m.bool},S=m.oneOfType([m.string,m.number]),R=m.oneOfType([S,m.shape(s({},E,{sort:T,sortActive:m.bool}))]),D=m.oneOfType([S,m.shape(s({},E,P,{action:m.bool,state:N}))]),L=m.oneOfType([S,m.shape(s({},E,P))]),I=m.oneOfType([m.arrayOf(R),m.shape({cells:m.arrayOf(R)})]),U=m.oneOfType([m.arrayOf(D),m.shape({cells:m.arrayOf(D),action:m.bool})]),M=m.oneOfType([m.arrayOf(L),m.shape({cells:m.arrayOf(L)})]),V=(m.oneOfType([I,m.arrayOf(I)]),m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([M,m.arrayOf(M)]),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),q={},F=(g=Object,O=g.getPrototypeOf||function(e){return e.__proto__},k=g.setPrototypeOf||function(e,t){return e.__proto__=t,e},C="object"===("undefined"==typeof Reflect?"undefined":r(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),k(new o,n.prototype)},function(e){var t=O(e);return k(e,k(function(){return C(t,arguments,O(this).constructor)},t))}),H=function(e){return F(function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),a(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in q||(q[e]=0),++q[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},W={},K=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function $(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new K(t,s({},o,{detail:n}));return e.dispatchEvent(r)}var z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function B(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}var G=/\s+/,J={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function Y(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,c=i.passive,l=void 0===c||c;if(J[t]&&(t=J[t]),!e||!t)return null;var u=void 0===n?"undefined":r(n),p=n&&"string"===u;if("function"===u){if(o){var d=o;s=d.capture,l=d.passive}o=n}for(var f=z?{capture:s,passive:l}:s,h=p?function(t){var r=t.target;for(;!B(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,y=t.split(G),v=y.length,_=0;_<v;++_)e.addEventListener(y[_],h,f);return function t(){for(var n=0;n<v;++n)e.removeEventListener(y[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,y=t!==c,v=!1!==c;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return l=o,y&&(u&&clearTimeout(u),u=setTimeout(b,t)),v&&!p&&(p=setTimeout(m,c)),r&&!f&&(f=!0,d=e.apply(void 0,h(l))),d}return _.flush=function(){(u||p)&&(d=e.apply(void 0,h(l)));return O(),d},_.cancel=O,_;function b(){p&&clearTimeout(p),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(d=e.apply(void 0,h(l))),u=null,p=null,f=!1}function O(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var X=window.__subscriptions;function Q(e,t){var n=Y(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);X[e]||(X[e]={count:0});var o,r=X[e];return r.count++,r.onsubscribe||(r.onsubscribe=Z((o=e,function(){$(document,"pubsub/onsubscribe",o),$(document,"pubsub/onsubscribe/"+o,o),X[o]&&delete X[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete X[e]}}Y(document,"pubsub/onsubscribe",function(e){var t=e.detail;X[t]||(X[t]={count:0});var n=X[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=f(e,3),n=t[0],o=t[1],r=t[2];$(r,n,o)}),delete n.queue)});var ee,te=function(e,t){return e===t},ne=((ee=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?ee.apply(void 0,arguments):void 0}}}})()(!0),[]);var oe=1,re=3,ie=8;function ae(e,t){var n=e.nodeType,o=e.nodeName;n===oe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var f=p.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==re&&n!==ie||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;se(e,t,"checked"),se(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?se(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function se(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ce=3;function le(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ae(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ue(o,n))(r=le(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(ue(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=le(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=le(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ue(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ce&&e.nodeValue===t.nodeValue)}var pe,de,fe,he,ye=(pe=Object,de=pe.getPrototypeOf||function(e){return e.__proto__},fe=pe.setPrototypeOf||function(e,t){return e.__proto__=t,e},he="object"===("undefined"==typeof Reflect?"undefined":r(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),fe(new o,n.prototype)},function(e){var t=de(e);return fe(e,fe(function(){return he(t,arguments,de(this).constructor)},t))})(function(e){function t(e){var n;i(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var c=p(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return l(t,e),t}(Error)),ve=!!document.createDocumentFragment().children,_e=/[A-Z]/g;function be(e){return e.replace(_e,me)}function me(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var ge=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Oe(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case m.string:case m.string.isRequired:return e;case m.bool:case m.bool.isRequired:if(!e||t===e)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(ge.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(ge.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var ke=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ce=/[-_]+/g;function xe(e){return e.replace(ke,we)}function we(e,t){return 0==+e||Ce.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Te(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[xe(t)]);if(o&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Oe(a,t,i)}var Ne=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function je(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,c=e.ownerDocument.documentElement,l=Y(c,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return Ne&&(c.style.cursor="pointer"),l}var Ae=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Ee="axa-change",Pe="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(Ae.ENTER,t),n._onInteractive()):r&&n._notify(Ae.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===Ae.ESCAPE||e.key===Ae.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return a(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=Y(this._container,Ae.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=Y(e,Ae.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=je(e,Ae.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=Y(e.ownerDocument,Ae.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Pe)?Te(e,Pe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ae.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Se=V(function(e){var t,n;return n=t=function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),n}(),t.version="2.0.1-beta.237",n},function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=Q("context/available",o._makeContextReady)},p(o,t)}return l(n,e),a(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;X[e]||(X[e]={count:0,queue:[]});var o=X[e].queue;Array.isArray(o)?o.push([e,t,n]):$(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),a(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=Z(function(){return t.updated&&t.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(e){xe(e)})}},{key:"connectedCallback",value:function(){var e=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var n=xe(t);if(e.hasAttribute(t)){var r=Te(e,t,o[n]);e.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,o){if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,e,t,o),this.shouldUpdateCallback(o,t)){var r=xe(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[r]=Oe(o,e,i[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==o&&$(this,Ee,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this);var o=this.constructor.observedAttributes,r=void 0===o?[]:o,i=Object.keys(e).filter(function(e){return r.indexOf(be(e))>-1}).reduce(function(e,n){var o=e.props,r=e.shouldUpdate,i=o[n],a=t.props&&t.props[n]?t.props[n]:void 0;return r||t.shouldUpdateCallback(i,a)?(t.props[n]=i,{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&m.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(be)}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),a(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=u(e,["template"]);c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ve||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this.props,this.childrenFragment,this),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new ye(this);l.appendChild(s)}if(t)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");le(t,e)}(this,u),function(){for(var e=void 0;e=ne.pop();)delete e.isSameNode;ne=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),a(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=u(e,["styles"]);c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()}),Re=(V(Se,H),V(Se,function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._appendStyles=function(){n.appendGlobalStyles(o._styles,o.nodeName)},p(o,t)}return l(n,e),a(n,null,[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!W[n]){var o=document.createElement("style"),r=document.createTextNode(t);W[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},H)(HTMLElement));var De,Le,Ie,Ue=/\n[\s]+$/,Me=/^\n[\s]+/,Ve=/[\s]+$/,qe=/^[\s]+/,Fe=/[\n\s]+/g,He=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],We=["code","pre","textarea"],Ke=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===He.indexOf(i)&&-1===We.indexOf(i)?""===(o=u.nodeValue.replace(Me,"").replace(Ve,"").replace(Ue,"").replace(Fe," "))?t.removeChild(u):u.nodeValue=o:-1===We.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Me,r).replace(qe," ").replace(Ve,"").replace(Ue,"").replace(Fe," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===He.indexOf(i)&&-1===We.indexOf(i)?""===(o=u.nodeValue.replace(Me,"").replace(Ue,"").replace(Fe," "))?t.removeChild(u):u.nodeValue=o:-1===We.indexOf(i)&&(o=u.nodeValue.replace(qe," ").replace(Me,"").replace(Ue,"").replace(Fe," "),u.nodeValue=o));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}},$e=function(e,t){var n,o,r,i,a,s,c=e.classes,l=e.buttonName,u=e.title,p=e.fixed,d=void 0!==p&&p;return(s=document.createElement("article")).setAttribute("class",String(c)+" "+String(d?"o-cookie-disclaimer--fixed":"")),Ke(s,["\n    ",(a=document.createElement("axa-container"),Ke(a,["\n      ",(o=document.createElement("div"),o.setAttribute("class","o-cookie-disclaimer__container o-cookie-disclaimer__container--lx"),Ke(o,["\n        ",(n=document.createElement("h1"),n.setAttribute("class","o-cookie-disclaimer__title"),Ke(n,[u]),n),"\n        ",t,"\n      "]),o),"\n      ",(i=document.createElement("div"),i.setAttribute("class","o-cookie-disclaimer__container o-cookie-disclaimer__container--rx"),Ke(i,["\n        ",(r=document.createElement("axa-button"),r.setAttribute("ghost","ghost"),r.setAttribute("classes","js-cookie-disclaimer__button"),r.setAttribute("color","white"),r.setAttribute("tag","button"),Ke(r,[l]),r),"\n      "]),i),"\n    "]),a),"\n  "]),s},ze=window||global,Be=function(){function e(t){i(this,e),this.wcNode=t,this._off=null}return a(e,[{key:"init",value:function(){var e=this;this._off=Y(this.wcNode.querySelector(".js-cookie-disclaimer__button"),"click",function(){e.cleanupWcNode();var t=ze.localStorage;t&&t.setItem("axa-ch-cookie-disclaimer-accepted",(new Date).getTime())})}},{key:"cleanupWcNode",value:function(){this.wcNode.parentNode.removeChild(this.wcNode)}},{key:"hasAccepted",value:function(){return!!ze.localStorage.getItem("axa-ch-cookie-disclaimer-accepted")}},{key:"destroy",value:function(){"function"==typeof this._off&&this._off(),delete this.wcNode}},{key:"off",get:function(){return this._off}}]),e}(),Ge=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,Re),a(t,[{key:"init",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".o-cookie-disclaimer {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #5f5f5f;\n  color: #fff; }\n  .o-cookie-disclaimer p {\n    margin-top: 0; }\n  @media (min-width: 768px) {\n    .o-cookie-disclaimer .u-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; } }\n\n.o-cookie-disclaimer--fixed {\n  z-index: 2000;\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.o-cookie-disclaimer__title {\n  text-transform: uppercase;\n  font-size: 16px; }\n\n.o-cookie-disclaimer__container {\n  width: 100%; }\n\n@media (min-width: 768px) {\n  .o-cookie-disclaimer__container--lx {\n    width: 70%; } }\n\n.o-cookie-disclaimer__container--rx {\n  margin-top: 16px;\n  text-align: center; }\n  @media (min-width: 768px) {\n    .o-cookie-disclaimer__container--rx {\n      width: calc(30% - 30px);\n      margin-top: 0;\n      margin-left: 30px;\n      text-align: left; } }\n",template:$e}),this.disclaimerHandler=new Be(this)}},{key:"connectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-cookie-disclaimer"}},{key:"disconnectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.disclaimerHandler.destroy(),delete this.disclaimerHandler}},{key:"render",value:function(){this.disclaimerHandler.hasAccepted()?this.disclaimerHandler.cleanupWcNode():c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this)}},{key:"didRenderCallback",value:function(){this.disclaimerHandler.init()}}]),t}();return Ge.tagName="axa-cookie-disclaimer",Ge.propTypes={classes:m.string,buttonName:m.string,title:m.string,fixed:m.bool},De=Ge.tagName,Le=Ge,customElements.get(De)||customElements.define(De,Le,Ie),Ge});
