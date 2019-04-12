var StyleGuideWebComponent=function(){"use strict";var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},t=function(){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:new Date,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";u(this,n),this.timestamp=e,this.message=t,this.priority="",this.priorityName=""}return a(n,[{key:"print",value:function(){console.log(this.timestamp+" priority: "+this.priority+" type: "+this.priorityName+"\n"+this.message+" ")}}]),n}(),e=function(e){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:new Date,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";u(this,r);var n=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return n.priority=2,n.priorityName="information",n}return p(r,t),r}(),n=function(e){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:new Date,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";u(this,r);var n=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return n.priority=1,n.priorityName="warning",n}return p(r,t),r}(),o=function(e){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:new Date,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";u(this,r);var n=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return n.priority=0,n.priorityName="error",n}return p(r,t),a(r,[{key:"print",value:function(){console.error(this.timestamp+" priority: "+this.priority+" type: "+this.priorityName+"\n"+this.message+" ")}}]),r}(),f=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:2;u(this,t),this.priority=e,this.value=0,this.max=0,this.logs=[]}return a(t,[{key:"init",value:function(e,t){this.value=e,this.max=t}},{key:"testComponent",value:function(){Math.sign(this.value)<0&&this.logs.push(new o(Date.now(),"value "+this.value+" is negative, wich is not a valid value")),Math.sign(this.max)<0&&this.logs.push(new o(Date.now(),"max "+this.max+" is negative, wich is not a valid value")),(void 0===this.max||null===this.max)&&1<this.value&&this.logs.push(new e(Date.now(),"indeterminate state is not realised")),void 0!==this.max&&null!==this.max&&parseInt(this.value,10)>parseInt(this.max,10)&&this.logs.push(new n(Date.now(),"value "+this.value+" is bigger than max "+this.max))}},{key:"printMessages",value:function(){var t=this;this.logs.forEach(function(e){t.priority>=e.priority&&e.print()})}}]),t}();function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function y(e,t){return e(t={exports:{}},t.exports),t.exports}var v=y(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function v(e){if("object"===(void 0===e?"undefined":_(e))&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case p:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case u:case d:case c:return e;default:return t}}case y:case h:case o:return t}}}function b(e){return v(e)===p}t.typeOf=v,t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=r,t.ForwardRef=d,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===f||"object"===(void 0===e?"undefined":_(e))&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===d)},t.isAsyncMode=function(e){return b(e)||v(e)===l},t.isConcurrentMode=b,t.isContextConsumer=function(e){return v(e)===u},t.isContextProvider=function(e){return v(e)===c},t.isElement=function(e){return"object"===(void 0===e?"undefined":_(e))&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===i},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===h},t.isPortal=function(e){return v(e)===o},t.isProfiler=function(e){return v(e)===s},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===f}});h(v);v.typeOf,v.AsyncMode,v.ConcurrentMode,v.ContextConsumer,v.ContextProvider,v.Element,v.ForwardRef,v.Fragment,v.Lazy,v.Memo,v.Portal,v.Profiler,v.StrictMode,v.Suspense,v.isValidElementType,v.isAsyncMode,v.isConcurrentMode,v.isContextConsumer,v.isContextProvider,v.isElement,v.isForwardRef,v.isFragment,v.isLazy,v.isMemo,v.isPortal,v.isProfiler,v.isStrictMode,v.isSuspense;var b=y(function(e,t){});h(b);b.typeOf,b.AsyncMode,b.ConcurrentMode,b.ContextConsumer,b.ContextProvider,b.Element,b.ForwardRef,b.Fragment,b.Lazy,b.Memo,b.Portal,b.Profiler,b.StrictMode,b.Suspense,b.isValidElementType,b.isAsyncMode,b.isConcurrentMode,b.isContextConsumer,b.isContextProvider,b.isElement,b.isForwardRef,b.isFragment,b.isLazy,b.isMemo,b.isPortal,b.isProfiler,b.isStrictMode,b.isSuspense,y(function(e){e.exports=v});var g=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function x(){}function k(){}k.resetWarningCache=x;var w=y(function(e){e.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:k,resetWarningCache:x};return n.PropTypes=n}()}),P=0;function T(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===P&&(P++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(T,n),P--),n}(n)),e}var E=w;Object.keys(E).reduce(T,E);var j,A,N,S,M=E.oneOf(["left","center","right"]),R=E.oneOf(["left","right"]),D=(E.oneOf(["top","bottom"]),E.oneOf(["up","down"])),L=E.oneOf(["ok","pending","error","unknown"]),F=E.oneOf(["row","col","rowgroup","colgroup","auto"]),I=E.oneOfType([E.string,E.number]),U={text:I,value:E.any,rowspan:I,colspan:I,scope:F,align:M,dense:E.bool},V={float:R,strong:E.bool,bold:E.bool},$=E.oneOfType([E.string,E.number]),q=E.oneOfType([$,E.shape(i({},U,{sort:D,sortActive:E.bool}))]),z=E.oneOfType([$,E.shape(i({},U,V,{action:E.bool,state:L}))]),H=E.oneOfType([$,E.shape(i({},U,V))]),B=E.oneOfType([E.arrayOf(q),E.shape({cells:E.arrayOf(q)})]),W=E.oneOfType([E.arrayOf(z),E.shape({cells:E.arrayOf(z),action:E.bool})]),K=E.oneOfType([E.arrayOf(H),E.shape({cells:E.arrayOf(H)})]),G=(E.oneOfType([B,E.arrayOf(B)]),E.oneOfType([W,E.arrayOf(W)]),E.oneOfType([K,E.arrayOf(K)]),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),J={},Y=(j=Object,A=j.getPrototypeOf||function(e){return e.__proto__},N=j.setPrototypeOf||function(e,t){return e.__proto__=t,e},S="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),N(new r,n.prototype)},function(e){var t=A(e);return N(e,N(function(){return S(t,arguments,A(this).constructor)},t))}),Z=function(n){return Y(function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),a(t,[{key:"init",value:function(){this._id=function(e){return e in J||(J[e]=0),++J[e]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},X={},Q=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,r,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function ee(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new Q(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var te=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function ne(e){for(var n=e.className,r=!1,o=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(e).test(n);t?r=!0:o=!1;return{className:e,hasClass:t}});return!(!o&&!r)&&s}function re(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}return!1}var oe=/\s+/,ie={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function ae(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(ie[e]&&(e=ie[e]),!n||!e)return null;var u=void 0===r?"undefined":_(r),l=r&&"string"===u;if("function"===u){if(o){var p=o;a=p.capture,c=p.passive}o=r}for(var d=te?{capture:a,passive:c}:a,f=l?function(e){var t=e.target;for(;!ne(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(oe),y=h.length,v=0;v<y;++v)n.addEventListener(h[v],f,d);return function e(){for(var t=0;t<y;++t)n.removeEventListener(h[t],f,d);re(this,e)}}function se(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=o!==c,y=!1!==c;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(l&&clearTimeout(l),l=setTimeout(b,o)),y&&!p&&(p=setTimeout(_,c)),i&&!f&&(f=!0,d=r.apply(void 0,C(u))),d}return v.flush=function(){(l||p)&&(d=r.apply(void 0,C(u)));return m(),d},v.cancel=m,v;function b(){p&&clearTimeout(p),g()}function _(){l&&clearTimeout(l),g()}function g(){a&&(d=r.apply(void 0,C(u))),p=l=null,f=!1}function m(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ce=window.__subscriptions;function ue(e,t){var n=ae(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ce[e]||(ce[e]={count:0});var r=ce[e];return r.count++,r.onsubscribe||(r.onsubscribe=se(function(e){return function(){ee(document,"pubsub/onsubscribe",e),ee(document,"pubsub/onsubscribe/"+e,e),ce[e]&&delete ce[e].unsubscribe}}(e),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete ce[e]}}ae(document,"pubsub/onsubscribe",function(e){var t=e.detail;ce[t]||(ce[t]={count:0});var n=ce[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];ee(o,n,r)}),delete n.queue)});var le,pe=function(e,t){return e===t},de=(le=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:pe;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?le.apply(void 0,arguments):void 0}}}}()(!0),[]);var fe=1,he=3,ye=8;function ve(e,t){var n=e.nodeType;n===fe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,c=null,u=null,l=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var f=p.localName;t.getAttributeNS(c,f||l)!==u&&t.setAttributeNS(c,l,u)}else t.hasAttribute(l)?t.getAttribute(l)!==u&&("null"===u||"undefined"===u?t.removeAttribute(l):t.setAttribute(l,u)):t.setAttribute(l,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,e.hasAttributeNS(c,l)||t.removeAttributeNS(c,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==he&&n!==ye||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function be(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,r=t.value;_e(e,t,"checked"),_e(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?function(e,t){_e(e,t,"selected")}(e,t):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,r=0,o=t.firstChild,i=void 0,a=void 0;for(;o;)if("OPTGROUP"===(a=o.nodeName&&o.nodeName.toUpperCase()))o=(i=o).firstChild;else{if("OPTION"===a){if(o.hasAttributeNS(null,"selected")){n=r;break}r+=1}!(o=o.nextSibling)&&i&&(o=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function _e(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ge=3;function me(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ve(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(Ce(r,n))(o=me(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(Ce(t.childNodes[c],r)){i=t.childNodes[c];break}i?((o=me(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=me(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),be(e,t),t):null:e}function Ce(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ge&&e.nodeValue===t.nodeValue)}var Oe,xe,ke,we,Pe=(Oe=Object,xe=Oe.getPrototypeOf||function(e){return e.__proto__},ke=Oe.setPrototypeOf||function(e,t){return e.__proto__=t,e},we="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),ke(new r,n.prototype)},function(e){var t=xe(e);return ke(e,ke(function(){return we(t,arguments,xe(this).constructor)},t))})(function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error)),Te=!!document.createDocumentFragment().children,Ee=/[A-Z]/g;function je(e){return e.replace(Ee,Ae)}function Ae(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var Ne=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Se(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case E.string:case E.string.isRequired:return t;case E.bool:case E.bool.isRequired:if(!t||n===t)return!0;case E.number:case E.number.isRequired:case E.object:case E.object.isRequired:case E.array:case E.array.isRequired:default:if(Ne.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(Ne.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var Me=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Re=/[-_]+/g;function De(e){return e.replace(Me,Le)}function Le(e,t){return 0==+e||Re.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Fe(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[De(t)]);if(r&&!e.hasAttribute(t))return i!==E.bool&&i!==E.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Se(a,t,i)}var Ie=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ue(n,e,r){var t=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=t.capture,i=void 0===o||o,a=t.passive,s=void 0===a||a,c=n.ownerDocument.documentElement,u=ae(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:i,passive:s});return function(e){Ie&&(e.style.cursor="pointer")}(c),u}var Ve=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),$e="axa-change",qe="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(Ve.ENTER,t),i._onInteractive()):r&&i._notify(Ve.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Ve.ESCAPE||e.key===Ve.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return a(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ae(this._container,Ve.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=ae(e,Ve.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Ue(e,Ve.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=ae(e.ownerDocument,Ve.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(qe)?Fe(e,qe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ve.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ze=G(function(n){var e,t;return t=e=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),t}(),e.version="2.0.1-beta.263",t},function(t){return function(e){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=ue("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ce[e]||(ce[e]={count:0,queue:[]});var r=ce[e].queue;Array.isArray(r)?r.push([e,t,n]):ee(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){return u(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return p(i,t),a(i,[{key:"init",value:function(e){var t=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=se(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){De(e)})}},{key:"connectedCallback",value:function(){var r=this;if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=De(e);if(r.hasAttribute(e)){var n=Fe(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var r=De(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=Se(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&ee(this,$e,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(je(e))}).reduce(function(e,t){var n=e.props,r=e.shouldUpdate,o=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return r||a.shouldUpdateCallback(o,i)?(a.props[t]=o,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected?this.updated&&this.updated():r&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,r=this.props;t&&E.checkPropTypes(t,r,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(je)}}]),i}()},function(t){return function(e){function c(){return u(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,t),a(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Te||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Pe(this);a.appendChild(i)}if(e)l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");me(t,e)}(this,s),function(){for(var e=void 0;e=de.pop();)delete e.isSameNode;de=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function o(){return u(this,o),d(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return p(o,t),a(o,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=s(e,["styles"]);l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()}),He=(G(ze,Z),G(ze,function(o){return function(e){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,o),a(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(e&&!X[t]){var n=document.createElement("style"),r=document.createTextNode(e);X[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},Z)(HTMLElement));var Be=/\n[\s]+$/,We=/^\n[\s]+/,Ke=/[\s]+$/,Ge=/^[\s]+/,Je=/[\n\s]+/g,Ye=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ze=["code","pre","textarea"],Xe=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),l=u),s===c-1&&(a=!1,-1===Ye.indexOf(i)&&-1===Ze.indexOf(i)?""===(r=l.nodeValue.replace(We,"").replace(Ke,"").replace(Be,"").replace(Je," "))?t.removeChild(l):l.nodeValue=r:-1===Ze.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(We,o).replace(Ge," ").replace(Ke,"").replace(Be,"").replace(Je," "),l.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===Ye.indexOf(i)&&-1===Ze.indexOf(i)?""===(r=l.nodeValue.replace(We,"").replace(Be,"").replace(Je," "))?t.removeChild(l):l.nodeValue=r:-1===Ze.indexOf(i)&&(r=l.nodeValue.replace(Ge," ").replace(We,"").replace(Be,"").replace(Je," "),l.nodeValue=r));var p=u.nodeName;p&&(i=p.toLowerCase()),t.appendChild(u)}}}};function Qe(e){var t,n,r,o,i,a,s,c,u=e.classes,l=e.value,p=void 0===l?0:l,d=e.max,f=e.iconShown,h=e.percentageShown,y=100;return Math.sign(p)<0||Math.sign(d)<0?y=0:0===p||""===p?y=0:p<=d?y=p/d*100:(void 0===d||""===d)&&p<=1&&(y=100*p),y=Math.floor(y),(o=document.createElement("article")).setAttribute("class",""+String(u)),Xe(o,["\n    ",(r=document.createElement("div"),r.setAttribute("class","o-progress-bar__container"),Xe(r,["\n      ",h?(a=document.createElement("p"),a.setAttribute("class","o-progress-bar__percentage"),Xe(a,[(i=document.createElement("span"),Xe(i,[y]),i),"%"]),a):"","\n      ",(n=document.createElement("progress"),n.setAttribute("value",""+String(p)),n.setAttribute("max",""+String(d)),n.setAttribute("class","o-progress-bar__progress"),Xe(n,[(t=document.createElement("span"),Xe(t,[y]),t),"%"]),n),"\n      ",f?(c=document.createElement("button"),c.setAttribute("type","button"),c.setAttribute("class","o-progress-bar__icon-button"),Xe(c,["\n          ",(s=document.createElement("axa-icon"),s.setAttribute("icon-class","a-icon__svg--small"),s.setAttribute("icon",""+String("cross-gap")),s.setAttribute("class","o-progress-bar__closing-icon"),s),"\n        "]),c):"","\n    "]),r),"\n  "]),o}var et,tt,nt,rt=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,He),a(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".o-progress-bar {\n  display: block;\n  margin: 0 auto;\n  width: 320px;\n  background-color: #3b3fd8; }\n  @media (min-width: 576px) {\n    .o-progress-bar {\n      width: 100%; } }\n  @media (min-width: 992px) {\n    .o-progress-bar {\n      width: 992px; } }\n\n.o-progress-bar__container {\n  width: 100%;\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #fff; }\n  @media (min-width: 576px) {\n    .o-progress-bar__container {\n      height: 70px; } }\n\n.o-progress-bar__percentage {\n  display: none; }\n  @media (min-width: 576px) {\n    .o-progress-bar__percentage {\n      display: inline-block;\n      width: 80px;\n      margin-left: 30px;\n      font-weight: 600;\n      font-size: 32px; } }\n\n.o-progress-bar__progress {\n  margin-left: 20px;\n  margin-right: 20px; }\n  @media (min-width: 576px) {\n    .o-progress-bar__progress {\n      margin-left: 30px;\n      margin-right: 30px; } }\n\n.o-progress-bar__progress[value] {\n  width: 245px;\n  height: 8px;\n  -webkit-appearance: none;\n  -moz-appearence: none;\n  -moz-appearance: none;\n       appearance: none;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 3px; }\n  @media (min-width: 576px) {\n    .o-progress-bar__progress[value] {\n      width: 500px; } }\n\n.o-progress-bar__progress[value]::-moz-progress-bar {\n  background-color: #fff;\n  border-radius: 3px; }\n\n.o-progress-bar__progress[value]::-webkit-progress-bar {\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 3px; }\n\n.o-progress-bar__progress[value]::-webkit-progress-value {\n  background-color: #fff;\n  border-radius: 3px; }\n\n.o-progress-bar__icon-button {\n  padding: 0;\n  margin-right: 10px;\n  height: 22px;\n  color: #fff;\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer; }\n  @media (min-width: 576px) {\n    .o-progress-bar__icon-button {\n      margin-right: 30px; } }\n\n.o-progress-bar__closing-icon {\n  fill: currentColor; }\n",template:Qe}),this.progressBarHandler=new f(2)}},{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-progress-bar",this.progressBarHandler.init(this.getAttribute("value"),this.getAttribute("max")),this.progressBarHandler.testComponent(),this.progressBarHandler.printMessages()}},{key:"disconnectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}}]),t}();return rt.tagName="axa-progress-bar",rt.propTypes={classes:E.string,value:E.number,max:E.number,iconShown:E.bool,percentageShown:E.bool},et=rt.tagName,tt=rt,customElements.get(et)||customElements.define(et,tt,nt),rt}();