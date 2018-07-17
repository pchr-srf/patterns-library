var StyleGuideWebComponent=function(){"use strict";var e,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var c=i.set;void 0!==c&&c.call(o,r)}return r},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},l=(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":y(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),t={},s=function(e){return e in t||(t[e]=0),++t[e]},f=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,c);var s=l.preventDefault;return l.preventDefault=function(){s.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function v(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new f(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var _=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function m(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var c=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&c}var g=/\s+/,O={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function b(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,c=t.passive,l=void 0===c||c;if(O[e]&&(e=O[e]),!n||!e)return null;var s=void 0===r?"undefined":y(r),u=r&&"string"===s;if("function"===s){if(o){var d=o;a=d.capture,l=d.passive}o=r}for(var p=_?{capture:a,passive:l}:a,h=u?function(e){var t=e.target;for(;!m(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,f=e.split(g),v=f.length,b=0;b<v;++b)n.addEventListener(f[b],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function C(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,c=e.maxWait,l=void 0!==c&&c,s=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=o!==l,v=!1!==l;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s=t,f&&(u&&clearTimeout(u),u=setTimeout(y,o)),v&&!d&&(d=setTimeout(_,l)),i&&!h&&(h=!0,p=r.apply(void 0,x(s))),p}return b.flush=function(){(u||d)&&(p=r.apply(void 0,x(s)));return g(),p},b.cancel=g,b;function y(){d&&clearTimeout(d),m()}function _(){u&&clearTimeout(u),m()}function m(){a&&(p=r.apply(void 0,x(s))),d=u=null,h=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),s=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var k=window.__subscriptions;function w(e,t){var n=b(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);k[e]||(k[e]={count:0});var r,o=k[e];return o.count++,o.onsubscribe||(o.onsubscribe=C((r=e,function(){v(document,"pubsub/onsubscribe",r),v(document,"pubsub/onsubscribe/"+r,r),k[r]&&delete k[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete k[e]}}b(document,"pubsub/onsubscribe",function(e){var t=e.detail;k[t]||(k[t]={count:0});var n=k[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];v(o,n,r)}),delete n.queue)});var A,n=function(e,t){return e===t},N=((A=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:n;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?A.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;u(this,l);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var c=p(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,l),c.name="PropertyExistsException",c}return o(l,e),l}(Error)),E=/[A-Z]/g;function P(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(t,n){var e=t;if(t&&n!==t){if(j.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function M(e){return e.replace(S,L)}function L(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=["title","checked","disabled"],V=[];var U=1,I=3,z=8;function F(e,t){var n=e.nodeType,r=e.nodeName;n===U&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,c=null,l=r.length-1;0<=l;--l)if(c=r[l],a=c.name,o=c.namespaceURI,i=c.value,o){var s=c.localName;t.getAttributeNS(o,s||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;0<=u;--u)!1!==(c=n[u]).specified&&(a=c.name,(o=c.namespaceURI)?(a=c.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==I&&n!==z||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;H(e,t,"checked"),H(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?H(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function H(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var W=3;function q(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(F(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],r=e.childNodes[c-a],n||r;c++)if(r)if(n)if($(r,n))(o=q(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=c;l<t.childNodes.length;l++)if($(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=q(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=q(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),c--}(e,t),t):null:e}function $(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===W&&e.nodeValue===t.nodeValue)}var K=function(e){function c(e){var t;u(this,c);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=p(this,(t=c.__proto__||Object.getPrototypeOf(c)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,c),a.name="TemplateNoStringReturnException",a}return o(c,e),c}(Error),B=!!document.createDocumentFragment().children;function G(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(G.prototype,HTMLElement.prototype),Object.setPrototypeOf(G,HTMLElement);var Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=w("context/available",n._makeContextReady)},p(n,t)}return o(a,t),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;k[e]||(k[e]={count:0,queue:[]});var r=k[e].queue;Array.isArray(r)?r.push([e,t,n]):v(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function s(e){u(this,s);var l=p(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=l._hasKeys[t];if(-1===D.indexOf(t)&&o)throw new N(t,l);var i="_"+t,a=n[t],c=l[i];return r||l.shouldUpdateCallback(a,c)?(l[i]=a,l._props[t]=a,o&&h(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=C(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=M(e),r=n in l;if(-1===D.indexOf(n)&&r)throw new N(n,l);l._hasKeys[n]=r,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return o(s,t),r(s,[{key:"connectedCallback",value:function(){var o=this;if(d(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"connectedCallback",this)&&d(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=M(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=T(n,t)}(o,e),r=o._hasKeys[t];o._props[t]=n,r&&h(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),t,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=M(e);this.hasAttribute(e)?this[r]=T(n):this[r]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(E,P))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),s}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var r=p(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return o(l,t),r(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});B||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new K(this);a.appendChild(i)}if(e)d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");q(t,e)}(this,c),function(){for(var e=void 0;e=V.pop();)delete e.isSameNode;V=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,i);var o=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return o(i,t),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=s(t.nodeName),t}return o(n,G),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),J={},X=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},p(n,t)}return o(a,Z),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(e&&!J[t]){var n=document.createElement("style"),r=document.createTextNode(e);J[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Q="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.a-choice {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .a-choice + .a-choice {\n    margin-left: 14px; }\n  .a-choice:hover:not(.a-choice--disabled):not(.a-choice--error) .a-choice__label, .a-choice:active:not(.a-choice--disabled):not(.a-choice--error) .a-choice__label {\n    border-color: #00008f;\n    color: #00008f;\n    background-color: #fff; }\n\n.a-choice__label {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin: 0;\n  color: #333;\n  border: 1px solid #ccc;\n  background-color: #f5f5f5; }\n  @media (min-width: 576px) {\n    .a-choice__label {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-choice__label:hover, .a-choice__label:active, .a-choice__label:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .a-choice__label:disabled {\n    cursor: default !important; }\n  @media (min-width: 576px) {\n    .a-choice__label {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.a-choice--error .a-choice__label {\n  border-color: #c91432; }\n\n.a-choice__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-choice__input:checked + .a-choice__label {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    border-color: #00008f;\n    color: #00008f;\n    background-color: #fff; }\n    @media (min-width: 576px) {\n      .a-choice__input:checked + .a-choice__label {\n        font-size: 14px;\n        line-height: 1.21; } }\n  .a-choice__input:disabled + .a-choice__label {\n    cursor: default;\n    color: #999;\n    border-color: #ccc; }\n",Y=/\n[\s]+$/,ee=/^\n[\s]+/,te=/[\s]+$/,ne=/^[\s]+/,re=/[\n\s]+/g,oe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ie=["code","pre","textarea"],ae=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,c=0,l=n.length;c<l;c++){var s=n[c];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),u=s),c===l-1&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=u.nodeValue.replace(ee,"").replace(te,"").replace(Y,"").replace(re," "))?t.removeChild(u):u.nodeValue=r:-1===ie.indexOf(i)&&(o=0===c?"":" ",r=u.nodeValue.replace(ee,o).replace(ne," ").replace(te,"").replace(Y,"").replace(re," "),u.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=u.nodeValue.replace(ee,"").replace(Y,"").replace(re," "))?t.removeChild(u):u.nodeValue=r:-1===ie.indexOf(i)&&(r=u.nodeValue.replace(ne," ").replace(ee,"").replace(Y,"").replace(re," "),u.nodeValue=r));var d=s.nodeName;d&&(i=d.toLowerCase()),t.appendChild(s)}}}};function ce(e,t){var n,r,o,i=e.inputId,a=void 0===i?Z.uuidv4():i,c=e.value,l=e.name,s=e.checked,u=void 0!==s&&s,d=e.disabled,p=void 0!==d&&d;return(o=document.createElement("label")).setAttribute("class","a-choice__wrapper"),ae(o,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(a)),n.setAttribute("type","radio"),n.setAttribute("name",""+String(l)),u&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(c)),p&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-choice__input"),n),"\n      ",(r=document.createElement("span"),r.setAttribute("class","a-choice__label"),ae(r,[t]),r),"\n  "]),o}var le,se,ue=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Q,template:ce}))}return o(t,X),r(t,null,[{key:"observedAttributes",get:function(){return["input-id","error","value","name","checked","disabled"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,n=this.disabled;this.className=l(this.initialClassName,"a-choice",{"a-choice--error":e,"a-choice--checked":t,"a-choice--disabled":n})}}]),t}();return ue.tagName="axa-choice",le=ue.tagName,se=ue,customElements.get(le)||customElements.define(le,se),ue}();
