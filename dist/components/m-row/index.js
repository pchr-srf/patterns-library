var StyleGuideWebComponent=function(){"use strict";var t,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},a=function(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},p=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},f=function t(e,n,r,o){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var u=i.set;void 0!==u&&u.call(o,r)}return r},u=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},n=(function(t){!function(){var i={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=void 0===n?"undefined":_(n);if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n))t.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&t.push(o)}}return t.join(" ")}t.exports?t.exports=a:window.classNames=a}()}(t={exports:{}},t.exports),t.exports),e={},s=function(t){return t in e||(e[t]=0),++e[t]},l=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,u=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,r,i,u);var l=s.preventDefault;return s.preventDefault=function(){l.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function h(t,e,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new l(e,i({},r,{detail:n}));return t.dispatchEvent(o)}var b=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function m(t){for(var o=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var u=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&u}var g=/\s+/,C={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function v(n,t,r,o){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,u=e.passive,s=void 0===u||u;if(C[t]&&(t=C[t]),!n||!t)return null;var l=void 0===r?"undefined":_(r),c=r&&"string"===l;if("function"===l){if(o){var d=o;a=d.capture,s=d.passive}o=r}for(var p=b?{capture:a,passive:s}:a,f=c?function(t){var e=t.target;for(;!m(e,r)&&e!==n;)e=e.parentNode;if(e!==n)return o(t,e)}:o,h=t.split(g),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,p);return function t(){for(var e=0;e<v;++e)n.removeEventListener(h[e],f,p);!function(t,e){if(!t)return;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}}(this,t)}}function y(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,u=t.maxWait,s=void 0!==u&&u,l=void 0,c=void 0,d=void 0,p=void 0,f=!1,h=o!==s,v=!1!==s;function y(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return l=e,h&&(c&&clearTimeout(c),c=setTimeout(_,o)),v&&!d&&(d=setTimeout(b,s)),i&&!f&&(f=!0,p=r.apply(void 0,O(l))),p}return y.flush=function(){(c||d)&&(p=r.apply(void 0,O(l)));return g(),p},y.cancel=g,y;function _(){d&&clearTimeout(d),m()}function b(){c&&clearTimeout(c),m()}function m(){a&&(p=r.apply(void 0,O(l))),d=c=null,f=!1}function g(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var x=window.__subscriptions;function w(t,e){var n=v(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);x[t]||(x[t]={count:0});var r,o=x[t];return o.count++,o.onsubscribe||(o.onsubscribe=y((r=t,function(){h(document,"pubsub/onsubscribe",r),h(document,"pubsub/onsubscribe/"+r,r),x[r]&&delete x[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete x[t]}}v(document,"pubsub/onsubscribe",function(t){var e=t.detail;x[e]||(x[e]={count:0});var n=x[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=u(t,3),n=e[0],r=e[1],o=e[2];h(o,n,r)}),delete n.queue)});var k,A=function(t,e){return t===e},N=((k=function(){var t;return(t=console).log.apply(t,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,r=Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,e))?k.apply(void 0,arguments):void 0}}}})()(!0),function(t){function s(t,e){var n;c(this,s);for(var r="\n    Native Property >>>"+t+"<<< exists already at "+e.nodeName+"#"+e._id+" and evaluates to -> "+e[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var u=p(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(u,s),u.name="PropertyExistsException",u}return o(s,t),s}(Error)),P=/[A-Z]/g;function E(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(e,n){var t=e;if(e&&n!==e){if(j.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function M(t){return t.replace(S,D)}function D(t,e){return 0==+t||R.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var L=["title","checked","disabled"],U=[];var I=1,F=3,V=8;function H(t,e){var n=t.nodeType,r=t.nodeName;n===I&&function(t,e){for(var n=e.attributes,r=t.attributes,o=null,i=null,a=null,u=null,s=r.length-1;0<=s;--s)if(u=r[s],a=u.name,o=u.namespaceURI,i=u.value,o){var l=u.localName;e.getAttributeNS(o,l||a)!==i&&e.setAttributeNS(o,a,i)}else e.hasAttribute(a)?e.getAttribute(a)!==i&&("null"===i||"undefined"===i?e.removeAttribute(a):e.setAttribute(a,i)):e.setAttribute(a,i);for(var c=n.length-1;0<=c;--c)!1!==(u=n[c]).specified&&(a=u.name,(o=u.namespaceURI)?(a=u.localName||a,t.hasAttributeNS(o,a)||e.removeAttributeNS(o,a)):t.hasAttributeNS(null,a)||e.removeAttribute(a))}(t,e),n!==F&&n!==V||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===r?function(t,e){var n=t.value,r=e.value;W(t,e,"checked"),W(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===r?W(t,e,"selected"):"TEXTAREA"===r&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function W(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var q=3;function G(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(H(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,u=0;n=e.childNodes[u],r=t.childNodes[u-a],n||r;u++)if(r)if(n)if(K(r,n))(o=G(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var s=u;s<e.childNodes.length;s++)if(K(e.childNodes[s],r)){i=e.childNodes[s];break}i?((o=G(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=G(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),u--}(t,e),e):null:t}function K(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===q&&t.nodeValue===e.nodeValue)}var z=function(t){function u(t){var e;c(this,u);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=p(this,(e=u.__proto__||Object.getPrototypeOf(u)).call.apply(e,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,u),a.name="TemplateNoStringReturnException",a}return o(u,t),u}(Error),$=!!document.createDocumentFragment().children;function B(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(B.prototype,HTMLElement.prototype),Object.setPrototypeOf(B,HTMLElement);var Z=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(e){return function(t){function a(){var t,e,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n=p(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o))))._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,t)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=w("context/available",n._makeContextReady)},p(n,e)}return o(a,e),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;x[t]||(x[t]={count:0,queue:[]});var r=x[t].queue;Array.isArray(r)?r.push([t,e,n]):h(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),a}()},function(e){return function(t){function n(){return c(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),r(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function l(t){c(this,l);var s=p(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,t));s._reduceProps=function(t,e){var n=t.props,r=t.shouldUpdate,o=s._hasKeys[e];if(-1===L.indexOf(e)&&o)throw new N(e,s);var i="_"+e,a=n[e],u=s[i];return r||s.shouldUpdateCallback(a,u)?(s[i]=a,s._props[e]=a,o&&f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),e,a,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._isConnected=!1,s._props={},s._hasKeys={},s.updatedDebounced=y(function(){return s.updated&&s.updated()},50);var e=s.constructor.observedAttributes;return Array.isArray(e)&&e.forEach(function(t){var e,n=M(t),r=n in s;if(-1===L.indexOf(n)&&r)throw new N(n,s);s._hasKeys[n]=r,Object.defineProperty(s,n,e={get:function(){return this._props[n]},set:function(t){this.shouldUpdateCallback(this._props[n],t)&&(this._props[n]=t,r&&f(e.__proto__||Object.getPrototypeOf(e),n,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),s}return o(l,e),r(l,[{key:"connectedCallback",value:function(){var o=this;if(d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this)&&d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var e=M(t);if(o.hasAttribute(t)){var n=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=T(n,e)}(o,t),r=o._hasKeys[e];o._props[e]=n,r&&f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),e,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(this.shouldUpdateCallback(n,e)){var r=M(t);this.hasAttribute(t)?this[r]=T(n):this[r]=null}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return-1<n.indexOf(t.replace(P,E))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),l}()},function(e){return function(t){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=a(t,["template"]);c(this,s);var r=p(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,n));return r._template=e,r._hasTemplate=!!e,r._hasRendered=!1,r.updated=r.render,r}return o(s,e),r(s,[{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});$||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new z(this);a.appendChild(i)}if(t)d(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: newTree should be an object");G(e,t)}(this,u),function(){for(var t=void 0;t=U.pop();)delete t.isSameNode;U=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),s}()},function(e){return function(t){function i(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,r=a(t,["styles"]);c(this,i);var o=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return o(i,e),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),i}()})(function(t){function n(t){c(this,n);var e=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e._id=s(e.nodeName),e}return o(n,B),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}()),J={},X=function(t){function a(){var t,e,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n=p(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},p(n,e)}return o(a,Z),r(a,null,[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(t&&!J[e]){var n=document.createElement("style"),r=document.createTextNode(t);J[e]=!0,n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Q,Y,tt='.u-row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.u-no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .u-no-gutters > .u-col,\n  .u-no-gutters > [class*="u-col"] {\n    padding-right: 0;\n    padding-left: 0; }\n',et=function(t){function e(){return c(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{styles:tt}))}return o(e,X),r(e,null,[{key:"observedAttributes",get:function(){return["classes","no-gutters"]}}]),r(e,[{key:"willRenderCallback",value:function(){var t=this.noGutters,e=this.classes;this.className=n("m-row","u-row",e,{"u-no-gutters":t})}}]),e}();return et.tagName="axa-row",Q=et.tagName,Y=et,customElements.get(Q)||customElements.define(Q,Y),et}();
