var StyleGuideWebComponent=function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(){}var y=t(function(e){e.exports=function(){function e(e,t,n,o,i,r){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=h,n.PropTypes=n}()}),v=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===v&&(v++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(b,n),v--),n}(n)),e}var m=y;Object.keys(m).reduce(b,m);var g,C,O,w,x=m.oneOf(["left","center","right"]),T=m.oneOf(["left","right"]),N=(m.oneOf(["top","bottom"]),m.oneOf(["up","down"])),A=m.oneOf(["ok","pending","error","unknown"]),j=m.oneOf(["row","col","rowgroup","colgroup","auto"]),E=m.oneOfType([m.string,m.number]),S={text:E,value:m.any,rowspan:E,colspan:E,scope:j,align:x,dense:m.bool},P={float:T,strong:m.bool,bold:m.bool},D=m.oneOfType([m.string,m.number]),R=m.oneOfType([D,m.shape(r({},S,{sort:N,sortActive:m.bool}))]),L=m.oneOfType([D,m.shape(r({},S,P,{action:m.bool,state:A}))]),I=m.oneOfType([D,m.shape(r({},S,P))]),U=m.oneOfType([m.arrayOf(R),m.shape({cells:m.arrayOf(R)})]),F=m.oneOfType([m.arrayOf(L),m.shape({cells:m.arrayOf(L),action:m.bool})]),M=m.oneOfType([m.arrayOf(I),m.shape({cells:m.arrayOf(I)})]),V=(m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([F,m.arrayOf(F)]),m.oneOfType([M,m.arrayOf(M)]),t(function(e){!function(){var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=s.apply(null,n);i&&e.push(i)}else if("object"===o)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()})),q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},z={},B=(g=Object,C=g.getPrototypeOf||function(e){return e.__proto__},O=g.setPrototypeOf||function(e,t){return e.__proto__=t,e},w="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),O(new o,n.prototype)},function(e){var t=C(e);return O(e,O(function(){return w(t,arguments,C(this).constructor)},t))}),W=function(n){return B(function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),a(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in z||(z[e]=0),++z[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},K={},Y=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,r,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function H(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new Y(t,r({},o,{detail:n}));return e.dispatchEvent(i)}var $=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),G=/^\s+|\s{2,}|\s+$/g;function J(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function X(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Q.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(Z,[])),r&&(e.className+=" "+r.join(" "))}}function Z(e,t){var n=t.className;return t.hasClass||e.push(n),e}function Q(e){for(var n=e.className,o=!1,i=!0,t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var s=r.map(function(e){var t=J(e).test(n);t?o=!0:i=!1;return{className:e,hasClass:t}});return!(!i&&!o)&&s}function ee(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Q.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(te,[])),r){var a=e.className;e.className=r.reduce(ne,a)}}}function te(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function ne(e,t){var n=J(t,"g");return e.replace(n," ").replace(G," ")}function oe(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}return!1}var ie=/\s+/,re={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function ae(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,c=void 0===s||s;if(re[e]&&(e=re[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),u=o&&"string"===l;if("function"===l){if(i){var p=i;a=p.capture,c=p.passive}i=o}for(var d=$?{capture:a,passive:c}:a,f=u?function(e){var t=e.target;for(;!Q(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,h=e.split(ie),y=h.length,v=0;v<y;++v)n.addEventListener(h[v],f,d);return function e(){for(var t=0;t<y;++t)n.removeEventListener(h[t],f,d);oe(this,e)}}function se(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=i!==c,y=!1!==c;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(u&&clearTimeout(u),u=setTimeout(_,i)),y&&!p&&(p=setTimeout(b,c)),r&&!f&&(f=!0,d=o.apply(void 0,k(l))),d}return v.flush=function(){(u||p)&&(d=o.apply(void 0,k(l)));return g(),d},v.cancel=g,v;function _(){p&&clearTimeout(p),m()}function b(){u&&clearTimeout(u),m()}function m(){a&&(d=o.apply(void 0,k(l))),p=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ce=window.__subscriptions;function le(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ce[e]||(ce[e]={count:0,queue:[]});var o=ce[e].queue;Array.isArray(o)?o.push([e,t,n]):H(n,e,t)}function ue(e,t){var n=ae(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ce[e]||(ce[e]={count:0});var o,i=ce[e];return i.count++,i.onsubscribe||(i.onsubscribe=se((o=e,function(){H(document,"pubsub/onsubscribe",o),H(document,"pubsub/onsubscribe/"+o,o),ce[o]&&delete ce[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete ce[e]}}ae(document,"pubsub/onsubscribe",function(e){var t=e.detail;ce[t]||(ce[t]={count:0});var n=ce[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=f(e,3),n=t[0],o=t[1],i=t[2];H(i,n,o)}),delete n.queue)});var pe,de=function(e,t){return e===t},fe=(pe=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:de;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?pe.apply(void 0,arguments):void 0}}}}()(!0),[]);var he=1,ye=3,ve=8;function _e(e,t){var n=e.nodeType;n===he&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,i=o&&Array.isArray(o)&&o.length,r=function(e){return n&&i&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!r(u))if(c){var f=p.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,r(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ye&&n!==ve||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function be(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;me(e,t,"checked"),me(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?me(e,t,"selected"):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,i=t.firstChild,r=void 0,a=void 0;for(;i;)if("OPTGROUP"===(a=i.nodeName&&i.nodeName.toUpperCase()))i=(r=i).firstChild;else{if("OPTION"===a){if(i.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(i=i.nextSibling)&&r&&(i=r.nextSibling,r=null)}t.selectedIndex=n}(0,t)}function me(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ge=3;function ke(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(_e(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Ce(o,n))(i=ke(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var c=s;c<t.childNodes.length;c++)if(Ce(t.childNodes[c],o)){r=t.childNodes[c];break}r?((i=ke(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=ke(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),be(e,t),t):null:e}function Ce(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ge&&e.nodeValue===t.nodeValue)}var Oe,we,xe,Te,Ne=(Oe=Object,we=Oe.getPrototypeOf||function(e){return e.__proto__},xe=Oe.setPrototypeOf||function(e,t){return e.__proto__=t,e},Te="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),xe(new o,n.prototype)},function(e){var t=we(e);return xe(e,xe(function(){return Te(t,arguments,we(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(1<o?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error)),Ae=!!document.createDocumentFragment().children,je=/[A-Z]/g;function Ee(e){return e.replace(je,Se)}function Se(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var Pe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function De(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||n===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(Pe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Pe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Re=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Le=/[-_]+/g;function Ie(e){return e.replace(Re,Ue)}function Ue(e,t){return 0==+e||Le.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Fe(e,t,n){var o=1===e.nodeType,i=e.constructor.propTypes,r=n;!n&&o&&(r=(void 0===i?{}:i)[Ie(t)]);if(o&&!e.hasAttribute(t))return r!==m.bool&&r!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=De(a,t,r)}function Me(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}var Ve=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function qe(n,e,o){var t,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,a=void 0===r||r,s=i.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=ae(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,Ve&&(t.style.cursor="pointer"),u}var ze=Me("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Be="axa-change",We="data-prevent-default";(function(){function o(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,o=t!==r._lastToggleNode,i=!n&&!o;n?(r._notify(ze.ENTER,t),r._onInteractive()):o&&r._notify(ze.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,i&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===ze.ESCAPE||e.key===ze.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return a(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=r({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ae(this._container,ze.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,i=t.escapeClose,r=t.preventDefault;n&&(this._unCloseClick=ae(e,ze.CLICK,n,this._handleClose,{passive:!r})),o&&(this._unOuterClick=qe(e,ze.CLICK,this._handleClose,{passive:!r})),i&&(this._unCloseEscape=ae(e.ownerDocument,ze.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(We)?Fe(e,We):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ze.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ke=q(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),t}(),e.version="2.0.1-beta.253",t},function(t){return function(e){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=ue("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,le("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function r(){return l(this,r),d(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,t),a(r,[{key:"init",value:function(e){var t=this;u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=se(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ie(e)})}},{key:"connectedCallback",value:function(){var o=this;if(u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=Ie(e);if(o.hasAttribute(e)){var n=Fe(o,e,i[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Ie(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[o]=De(n,e,i[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&H(this,Be,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Ee(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,i=n[t],r=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(i,r)?(a.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&m.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Ee)}}]),r}()},function(t){return function(e){function c(){return l(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,t),a(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Ae||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var r=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new Ne(this);a.appendChild(r)}if(e)u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");ke(t,e)}(this,s),function(){for(var e=void 0;e=fe.pop();)delete e.isSameNode;fe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function i(){return l(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return p(i,t),a(i,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=s(e,["styles"]);u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()}),Ye=(q(Ke,W),q(Ke,function(i){return function(e){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,i),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:i.uuidv4();if(e&&!K[t]){var n=document.createElement("style"),o=document.createTextNode(e);K[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},W)(HTMLElement));var He=/\n[\s]+$/,$e=/^\n[\s]+/,Ge=/[\s]+$/,Je=/^[\s]+/,Xe=/[\n\s]+/g,Ze=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Qe=["code","pre","textarea"];function et(e,t){var n,o;return[(n=document.createElement("div"),n.setAttribute("class","m-sticky__placeholder js-sticky__placeholder"),n),(o=document.createElement("div"),o.setAttribute("class","m-sticky__box js-sticky__box"),function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Ze.indexOf(r)&&-1===Qe.indexOf(r)?""===(o=u.nodeValue.replace($e,"").replace(Ge,"").replace(He,"").replace(Xe," "))?t.removeChild(u):u.nodeValue=o:-1===Qe.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace($e,i).replace(Je," ").replace(Ge,"").replace(He,"").replace(Xe," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ze.indexOf(r)&&-1===Qe.indexOf(r)?""===(o=u.nodeValue.replace($e,"").replace(He,"").replace(Xe," "))?t.removeChild(u):u.nodeValue=o:-1===Qe.indexOf(r)&&(o=u.nodeValue.replace(Je," ").replace($e,"").replace(He,"").replace(Xe," "),u.nodeValue=o));var p=l.nodeName;p&&(r=p.toLowerCase()),t.appendChild(l)}}}}(o,[t]),o)]}var tt="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var nt,ot=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,it=function(){var e=window.requestAnimationFrame||window[ot+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var i=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-i)),o=setTimeout(function(){e(t+n)},n);return i=t+n,o}}return e}(),rt=(nt=(nt=window.cancelAnimationFrame||window[ot+"CancelAnimationFrame"]||window[ot+"CancelRequestAnimationFrame"])?nt.bind(window):function(e){clearTimeout(e)},void 0),at=0,st=["resize","orientationchange"].join(" "),ct=[st,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),lt=function(){function e(){var h=this;l(this,e),this._change=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).type;0<=st.indexOf(e)&&(h.forceRepaint=!0),h.framePending||it(function(){for(var e=h.containerNodes,t=h.forceRepaint,n=h.lastScrollTop,o=h.isDirectionFrozen,i=h.lastDirection,r=tt(),a=r-n,s=o?i:0<a?1:a<0?-1:i,c=0,l=e.length;c<l;c++){var u=e[c],p=u.getBoundingClientRect(),d=p.top,f=p.bottom;le("sticky-container/"+(d<=0&&0<=f?"active":"idle"),{containerTop:d,containerBottom:f,direction:s,forceRepaint:t},u)}h.lastScrollTop=r,h.lastDirection=s,h.framePending=!1,h.forceRepaint=!1})},this._freezeDirection=function(){h.isDirectionFrozen=!0,h.lastDirection=-1},this._thawDirection=function(){h.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return a(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=ae(window,ct,this._change),this._unFreezeDirection=ue("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=ue("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(e){var t,n,o;e&&(t=this.containerNodes,n=e,-1<(o=t.indexOf(n))&&t.splice(o,1)),--at<=0&&rt&&(this._off(),delete this.containerNodes,rt=null)}}]),e}();function ut(e,t){for(var n=[],o=Object.keys(t),i=o.length,r=0;r<i;++r){var a=o[r];n.push(a+":"+t[a]+";")}e.style.cssText=n.join("")}var pt=Me("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),dt=function(){function t(e){l(this,t),vt.call(this),this.wcNode=e,this.state=pt.IS_IN_FLOW,this.lastDirection=0,this.placeholder=e.querySelector(t.DEFAULTS.placeholderClass),this.box=e.querySelector(t.DEFAULTS.boxClass),this.spy=(rt||(rt=new lt),at++,rt)}return a(t,[{key:"_on",value:function(){this._off(),this._unActive=ue("sticky-container/active",this._update,this._contextNode),this._unIdle=ue("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this._on()}}]),t}();dt.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var ft,ht,yt,vt=function(){var v=this;this._update=function(e){var t=e.detail,n=t.containerBottom,o=t.direction,i=t.forceRepaint,r=v.wcNode,a=v.state,s=o!==v.lastDirection,c=r.offsetHeight,l=r.offsetWidth,u=r.getBoundingClientRect(),p=u.left,d=u.top,f=0<d,h=d<=0&&c<=n,y=d<=0&&n<c;s&&1===o?(X(r,dt.DEFAULTS.isScrollDown),ee(r,dt.DEFAULTS.isScrollUp)):s&&-1===o&&(X(r,dt.DEFAULTS.isScrollUp),ee(r,dt.DEFAULTS.isScrollDown)),h&&(i||a!==pt.IS_STICKY)&&(v.state=pt.IS_STICKY,X(r,dt.DEFAULTS.isStickyClass),ee(r,dt.DEFAULTS.isBottomClass),ut(v.placeholder,{height:c+"px"}),ut(v.box,{left:p+"px",width:l+"px"})),y&&(i||a!==pt.IS_BOTTOM)&&(v.state=pt.IS_BOTTOM,ee(r,dt.DEFAULTS.isStickyClass),X(r,dt.DEFAULTS.isBottomClass),ut(v.placeholder,{height:c+"px"}),ut(v.box,{left:p+"px",width:l+"px"})),f&&(i||a!==pt.IS_IN_FLOW)&&(v.state=pt.IS_IN_FLOW,ee(r,dt.DEFAULTS.isStickyClass),ee(r,dt.DEFAULTS.isBottomClass),ut(v.placeholder,{height:""}),ut(v.box,{left:"",width:""}))}},_t=function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,Ye),a(t,[{key:"init",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-sticky {\n  display: block; }\n\n.m-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.m-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .m-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .m-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .m-sticky__box {\n    position: static; }\n\n.m-sticky--debug > .m-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .m-sticky--debug > .m-sticky__box::before, .m-sticky--debug > .m-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.m-sticky--debug.is-sticky-sticky > .m-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .m-sticky--debug.is-sticky-sticky > .m-sticky__box::before {\n    content: 'is-sticky'; }\n\n.m-sticky--debug.is-sticky-bottom > .m-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .m-sticky--debug.is-sticky-bottom > .m-sticky__box::before {\n    content: 'is-bottom'; }\n\n.m-sticky--debug.is-sticky-in-flow > .m-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.m-sticky--debug.is-sticky-scroll-up > .m-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.m-sticky--debug.is-sticky-scroll-down > .m-sticky__box::after {\n  content: 'is-scroll-down'; }\n",template:et}),this.consumeContext("axa-sticky-container")}},{key:"willRenderCallback",value:function(){var e=this.props.debug;this.className=V(this.initialClassName,"m-sticky js-sticky",{"m-sticky--debug":e})}},{key:"didRenderCallback",value:function(){this.sticky&&this.sticky.destroy(),this.sticky=new dt(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"contextCallback",value:function(e){this.sticky&&(this.sticky.contextNode=e)}},{key:"disconnectedCallback",value:function(){this.sticky&&(this.sticky.destroy(),delete this.sticky)}}]),t}();return _t.tagName="axa-sticky",_t.propTypes={debug:m.bool},ft=_t.tagName,ht=_t,customElements.get(ft)||customElements.define(ft,ht,yt),e.AXASticky=_t,e.default=_t,e}({});
