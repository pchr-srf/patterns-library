var StyleGuideWebComponent=function(){"use strict";var e,v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},b=(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":v(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),t={},l=function(e){return e in t||(t[e]=0),++t[e]},c=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function h(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new c(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var g=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function y(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var w=/\s+/,O={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function m(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(O[e]&&(e=O[e]),!n||!e)return null;var c=void 0===r?"undefined":v(r),u=r&&"string"===c;if("function"===c){if(o){var p=o;a=p.capture,l=p.passive}o=r}for(var d=g?{capture:a,passive:l}:a,f=u?function(e){var t=e.target;for(;!y(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(w),m=h.length,_=0;_<m;++_)n.addEventListener(h[_],f,d);return function e(){for(var t=0;t<m;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function _(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=o!==l,m=!1!==l;function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(v,o)),m&&!p&&(p=setTimeout(g,l)),i&&!f&&(f=!0,d=r.apply(void 0,x(c))),d}return _.flush=function(){(u||p)&&(d=r.apply(void 0,x(c)));return y(),d},_.cancel=y,_;function v(){p&&clearTimeout(p),b()}function g(){u&&clearTimeout(u),b()}function b(){a&&(d=r.apply(void 0,x(c))),p=u=null,f=!1}function y(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var C=window.__subscriptions;function A(e,t){var n=m(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var r,o=C[e];return o.count++,o.onsubscribe||(o.onsubscribe=_((r=e,function(){h(document,"pubsub/onsubscribe",r),h(document,"pubsub/onsubscribe/"+r,r),C[r]&&delete C[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete C[e]}}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=s(e,3),n=t[0],r=t[1],o=t[2];h(o,n,r)}),delete n.queue)});var k,n=function(e,t){return e===t},E=((k=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:n;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?k.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;u(this,l);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var s=d(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return o(l,e),l}(Error)),N=/[A-Z]/g;function P(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(t,n){var e=t;if(t&&n!==t){if(j.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function M(e){return e.replace(S,L)}function L(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=["title","checked","disabled"],V=[];var U=1,z=3,I=8;function H(e,t){var n=e.nodeType,r=e.nodeName;n===U&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,l=r.length-1;0<=l;--l)if(s=r[l],a=s.name,o=s.namespaceURI,i=s.value,o){var c=s.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==z&&n!==I||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;F(e,t,"checked"),F(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?F(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function F(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var W=3;function q(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(H(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if($(r,n))(o=q(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if($(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=q(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=q(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function $(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===W&&e.nodeValue===t.nodeValue)}var G=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,e),s}(Error),K=!!document.createDocumentFragment().children;function B(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(B.prototype,HTMLElement.prototype),Object.setPrototypeOf(B,HTMLElement);var Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=A("context/available",n._makeContextReady)},d(n,t)}return o(a,t),r(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var r=C[e].queue;Array.isArray(r)?r.push([e,t,n]):h(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=d(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=l._hasKeys[t];if(-1===D.indexOf(t)&&o)throw new E(t,l);var i="_"+t,a=n[t],s=l[i];return r||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,o&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=_(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=M(e),r=n in l;if(-1===D.indexOf(n)&&r)throw new E(n,l);l._hasKeys[n]=r,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&f(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return o(c,t),r(c,[{key:"connectedCallback",value:function(){var o=this;if(p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=M(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=T(n,t)}(o,e),r=o._hasKeys[t];o._props[t]=n,r&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=M(e);this.hasAttribute(e)?this[r]=T(n):this[r]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(N,P))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var r=d(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return o(l,t),r(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});K||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new G(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":v(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":v(t)))throw new Error("componentMorph: newTree should be an object");q(t,e)}(this,s),function(){for(var e=void 0;e=V.pop();)delete e.isSameNode;V=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,i);var o=d(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return o(i,t),r(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=l(t.nodeName),t}return o(n,B),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),J={},X=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},d(n,t)}return o(a,Z),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(e&&!J[t]){var n=document.createElement("style"),r=document.createTextNode(e);J[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Q='.o-error-page {\n  display: block;\n  color: #fff;\n  background: #3b3fd8;\n  text-align: center; }\n\n.o-error-page--pacific {\n  background: #00adc6; }\n\n.o-error-page--teal {\n  background: #027180; }\n\n.o-error-page__container {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .o-error-page__container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .o-error-page__container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .o-error-page__container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .o-error-page__container {\n      max-width: 1140px; } }\n  .o-error-page__container > :first-child {\n    padding-top: 40px; }\n  @media (min-width: 768px) {\n    .o-error-page__container > :first-child {\n      padding-top: 60px; } }\n  @media (min-width: 992px) {\n    .o-error-page__container > :first-child {\n      padding-top: 70px; } }\n  .o-error-page__container > :last-child {\n    padding-bottom: 40px; }\n  @media (min-width: 768px) {\n    .o-error-page__container > :last-child {\n      padding-bottom: 60px; } }\n\n@media (min-width: 768px) {\n  .o-error-page__status,\n  .o-error-page__title,\n  .o-error-page__message {\n    padding-right: 15px;\n    padding-left: 15px;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    max-width: 83.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    margin-left: 8.33333%; } }\n\n.o-error-page__status {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .o-error-page__status {\n      font-size: 16px; } }\n\n.o-error-page__title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif;\n  margin-top: 5px; }\n  @media (min-width: 576px) {\n    .o-error-page__title {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .o-error-page__title {\n      font-size: 48px; } }\n  @media (min-width: 576px) {\n    .o-error-page__title {\n      margin-top: 0; } }\n\n.o-error-page__message {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  margin-top: 40px;\n  white-space: pre-line; }\n  @media (min-width: 576px) {\n    .o-error-page__message {\n      font-size: 20px; } }\n  @media (min-width: 576px) {\n    .o-error-page__message {\n      margin-top: 50px; } }\n  @media (min-width: 768px) {\n    .o-error-page__message {\n      margin-top: 40px; } }\n\n.o-error-page__message--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .o-error-page__message--semibold {\n      font-size: 20px; } }\n\n.o-error-page__list {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  text-align: left; }\n  @media (min-width: 576px) {\n    .o-error-page__list {\n      font-size: 18px; } }\n  @media (min-width: 768px) {\n    .o-error-page__list {\n      padding-right: 15px;\n      padding-left: 15px;\n      position: relative;\n      width: 100%;\n      min-height: 1px;\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%;\n      margin-left: 16.66667%; } }\n\n.o-error-page__list-item {\n  margin-top: 16px; }\n  .o-error-page__list-item:first-child {\n    margin-top: 0; }\n\n.o-error-page__cta {\n  display: block;\n  margin-top: 30px; }\n  @media (min-width: 576px) {\n    .o-error-page__cta {\n      margin-top: 40px; } }\n  @media (min-width: 768px) {\n    .o-error-page__cta {\n      margin-top: 20px; } }\n  @media (min-width: 992px) {\n    .o-error-page__cta {\n      margin-top: 25px; } }\n\n.o-error-page__discover {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #333;\n  background: #fff; }\n\n.o-error-page__discover-text {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .o-error-page__discover-text {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .o-error-page__discover-text {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .o-error-page__discover-text {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .o-error-page__discover-text {\n      max-width: 1140px; } }\n',Y=/\n[\s]+$/,ee=/^\n[\s]+/,te=/[\s]+$/,ne=/^[\s]+/,re=/[\n\s]+/g,oe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ie=["code","pre","textarea"],ae=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=u.nodeValue.replace(ee,"").replace(te,"").replace(Y,"").replace(re," "))?t.removeChild(u):u.nodeValue=r:-1===ie.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(ee,o).replace(ne," ").replace(te,"").replace(Y,"").replace(re," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=u.nodeValue.replace(ee,"").replace(Y,"").replace(re," "))?t.removeChild(u):u.nodeValue=r:-1===ie.indexOf(i)&&(r=u.nodeValue.replace(ne," ").replace(ee,"").replace(Y,"").replace(re," "),u.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}};var se,le,ce=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},ue=function(e,t){e.code;var n,r,o,i,a,s,l,c,u=e.status,p=e.title,d=e.message,f=e.items,h=e.ctaHref,m=e.ctaTitle,_=Array.isArray(f)&&f.length,v=t&&t.childElementCount,g=((i=document.createElement("article")).setAttribute("class","o-error-page__container"),ae(i,["\n      ",(n=document.createElement("h4"),n.setAttribute("class","o-error-page__status"),ae(n,[u]),n),"\n      ",(r=document.createElement("h1"),r.setAttribute("class","o-error-page__title"),ae(r,[p]),r),"\n  \n      ",(o=document.createElement("p"),o.setAttribute("class",""+String(b("o-error-page__message",{"o-error-page__message--semibold":_}))),ae(o,[ce(d)]),o),"\n      \n      ",_&&(a=document.createElement("ul"),a.setAttribute("class","o-error-page__list"),ae(a,["\n          ",f.map(function(e){var t;return(t=document.createElement("li")).setAttribute("class","o-error-page__list-item"),ae(t,[e]),t}),"\n        "]),a)||null,"\n      \n      ",h&&m&&(s=document.createElement("axa-button"),s.setAttribute("href",""+String(h)),s.setAttribute("tag","a"),s.setAttribute("color","white"),s.setAttribute("ghost","ghost"),s.setAttribute("motion","motion"),s.setAttribute("class","o-error-page__cta"),ae(s,[m]),s)||null,"\n    "]),i);return v?[g,(c=document.createElement("arcticle"),c.setAttribute("class","o-error-page__discover"),ae(c,["\n      ",(l=document.createElement("p"),l.setAttribute("class","o-error-page__discover-text"),ae(l,[t]),l),"\n    "]),c)]:g},pe=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Q,template:ue}))}return o(t,X),r(t,null,[{key:"observedAttributes",get:function(){return["code","status","title","message","items","cta-href","cta-title","background"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e,t,n,r=this.background;this.className=b(this.initialClassName,"o-error-page",((t="o-error-page--"+(n=r))in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}}]),t}();return pe.tagName="axa-error-page",se=pe.tagName,le=pe,customElements.get(se)||customElements.define(se,le),pe}();
