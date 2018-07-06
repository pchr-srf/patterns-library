var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var l=i.set;void 0!==l&&l.call(r,o)}return o},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(o.apply(null,i));else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}(e={exports:{}},e.exports),e.exports),f={},h=function(e){return e in f||(f[e]=0),++f[e]},v=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,o,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function m(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new v(t,r({},o,{detail:n}));return e.dispatchEvent(i)}var y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function _(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var l=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&l}var b=/\s+/,g={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function x(e,n,o,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,l=void 0!==a&&a,s=i.passive,c=void 0===s||s;if(g[n]&&(n=g[n]),!e||!n)return null;var u=void 0===o?"undefined":t(o),d=o&&"string"===u;if("function"===u){if(r){var p=r;l=p.capture,c=p.passive}r=o}for(var f=y?{capture:l,passive:c}:l,h=d?function(t){var n=t.target;for(;!_(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return r(t,n)}:r,v=n.split(b),m=v.length,x=0;x<m;++x)e.addEventListener(v[x],h,f);return function t(){for(var n=0;n<m;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,l=n.maxWait,s=void 0!==l&&l,c=void 0,u=void 0,p=void 0,f=void 0,h=!1,v=t!==s,m=!1!==s;function y(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(u&&clearTimeout(u),u=setTimeout(_,t)),m&&!p&&(p=setTimeout(b,s)),r&&!h&&(h=!0,f=e.apply(void 0,d(c))),f}return y.flush=function(){(u||p)&&(f=e.apply(void 0,d(c)));return x(),f},y.cancel=x,y;function _(){p&&clearTimeout(p),g()}function b(){u&&clearTimeout(u),g()}function g(){a&&(f=e.apply(void 0,d(c))),u=null,p=null,h=!1}function x(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,h=!1}}var C={};function w(e,t){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var o,r=C[e];return r.count++,r.onsubscribe||(r.onsubscribe=O((o=e,function(){m(document,"pubsub/onsubscribe",o),m(document,"pubsub/onsubscribe/"+o,o),C[o]&&delete C[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete C[e]}}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=u(e,3),n=t[0],o=t[1],r=t[2];m(r,n,o)}),delete n.queue)});var k,A=function(e,t){return e===t},N=((k=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?k.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,o){var r;n(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+o.nodeName+"#"+o._id+" and evaluates to -> "+o[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,l=Array(a>2?a-2:0),c=2;c<a;c++)l[c-2]=arguments[c];var u=s(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,i].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return a(t,e),t}(Error)),E=/[A-Z]/g;function P(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(e,t){var n=e;if(e&&t!==e){if(j.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function M(e){return e.replace(S,L)}function L(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=["title","checked","disabled"],V=[];var U=1,I=3,F=8;function z(e,t){var n=e.nodeType,o=e.nodeName;n===U&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,l=null,s=o.length-1;s>=0;--s)if(l=o[s],a=l.name,r=l.namespaceURI,i=l.value,r){var c=l.localName;t.getAttributeNS(r,c||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(l=n[u]).specified&&(a=l.name,(r=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==I&&n!==F||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;H(e,t,"checked"),H(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?H(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function H(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var W=3;function q(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(z(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,l=0;n=t.childNodes[l],o=e.childNodes[l-a],n||o;l++)if(o)if(n)if($(o,n))(r=q(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var s=l;s<t.childNodes.length;s++)if($(t.childNodes[s],o)){i=t.childNodes[s];break}i?((r=q(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=q(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),l--}(e,t),t):null:e}function $(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===W&&e.nodeValue===t.nodeValue)}var K=function(e){function t(e){var o;n(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),l=1;l<i;l++)a[l-1]=arguments[l];var c=s(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return a(t,e),t}(Error),B=!!document.createDocumentFragment().children;function G(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(G.prototype,HTMLElement.prototype),Object.setPrototypeOf(G,HTMLElement);var Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function r(){var e,t,o;n(this,r);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=o=s(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=w("context/available",o._makeContextReady)},s(o,t)}return a(r,e),o(r,[{key:"connectedCallback",value:function(){i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this)&&i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var o=C[e].queue;Array.isArray(o)?o.push([e,t,n]):m(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),r}()},function(e){return function(t){function r(){return n(this,r),s(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return a(r,e),o(r,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerHTML",e,this)}}]),r}()},function(e){return function(t){function r(e){n(this,r);var t=s(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));t._reduceProps=function(e,n){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[n];if(-1===D.indexOf(n)&&a)throw new N(n,t);var l="_"+n,s=o[n],u=t[l];return i||t.shouldUpdateCallback(s,u)?(t[l]=s,t._props[n]=s,a&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,s,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=O(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=M(e),r=o in t;if(-1===D.indexOf(o)&&r)throw new N(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&c(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(r,e),o(r,[{key:"connectedCallback",value:function(){var e=this;if(i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=M(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=T(n,t)}(e,t),i=e._hasKeys[n];e._props[n]=o,i&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[M(e)]=T(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(E,P))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),r}()},function(e){return function(r){function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=l(e,["template"]);n(this,c);var r=s(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return a(c,e),o(c,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var o=this._template;try{if(n){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});B||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var l=o(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){s.appendChild(e)});else if(l){if("string"==typeof l)throw new K(this);s.appendChild(l)}if(n)i(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,s);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(s),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");q(n,e)}(this,u),function(){for(var e=void 0;e=V.pop();)delete e.isSameNode;V=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(e){return function(t){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,i=l(e,["styles"]);n(this,r);var a=s(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return a._styles=o,a}return a(r,e),o(r,[{key:"connectedCallback",value:function(){i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function t(e){n(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o._id=h(o.nodeName),o}return a(t,G),o(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),J={},X=function(e){function t(){var e,o,r;n(this,t);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return o=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},s(r,o)}return a(t,Z),o(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(e&&!J[t]){var n=document.createElement("style"),o=document.createTextNode(e);J[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var Q=".m-footer-social {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block; }\n  .m-footer-social:first-child:last-child {\n    position: static;\n    width: auto;\n    max-width: none;\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n  @media (max-width: 991px) {\n    .m-footer-social {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      margin-bottom: -10px; }\n      .m-footer-social:first-child {\n        margin-bottom: 0; } }\n  @media (max-width: 575px) {\n    .m-footer-social {\n      padding: 25px 30px;\n      margin-bottom: 0; } }\n\n.m-footer-social__title {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-social__title {\n      font-size: 16px; } }\n  @media (max-width: 991px) {\n    .m-footer-social__title {\n      display: none !important; } }\n\n.m-footer-social__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin: 15px -10px 0 -10px; }\n  .m-footer-social__list::before, .m-footer-social__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-social__list::after {\n    clear: both; }\n  .m-footer-social__list:first-child {\n    margin-top: 0; }\n  @media (max-width: 991px) {\n    .m-footer-social__list {\n      margin-top: 25px; } }\n  @media (max-width: 575px) {\n    .m-footer-social__list {\n      margin: -10px; } }\n\n.m-footer-social__list-item {\n  display: block;\n  float: left;\n  margin-right: 10px; }\n  .m-footer-social__list-item:last-child {\n    margin-right: 0; }\n\n.m-footer-social__link {\n  display: block;\n  padding: 10px; }\n\n.m-footer-social__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #fff; }\n\n.m-footer-social--inline .m-footer-social__box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.m-footer-social--inline .m-footer-social__title {\n  display: block;\n  margin-right: 20px; }\n  .m-footer-social--inline .m-footer-social__title::after {\n    content: ':'; }\n\n.m-footer-social--inline .m-footer-social__list {\n  margin-top: 0; }\n\n.m-footer-social--light {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-social--light .m-footer-social__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em; }\n    @media (min-width: 576px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        line-height: 1.21; } }\n  .m-footer-social--light .m-footer-social__icon {\n    width: 20px;\n    height: 20px; }\n",Y=/\n[\s]+$/,ee=/^\n[\s]+/,te=/[\s]+$/,ne=/^[\s]+/,oe=/[\n\s]+/g,re=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ie=["code","pre","textarea"],ae=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),l===s-1&&(a=!1,-1===re.indexOf(i)&&-1===ie.indexOf(i)?""===(o=u.nodeValue.replace(ee,"").replace(te,"").replace(Y,"").replace(oe," "))?t.removeChild(u):u.nodeValue=o:-1===ie.indexOf(i)&&(r=0===l?"":" ",o=u.nodeValue.replace(ee,r).replace(ne," ").replace(te,"").replace(Y,"").replace(oe," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===re.indexOf(i)&&-1===ie.indexOf(i)?""===(o=u.nodeValue.replace(ee,"").replace(Y,"").replace(oe," "))?t.removeChild(u):u.nodeValue=o:-1===ie.indexOf(i)&&(o=u.nodeValue.replace(ne," ").replace(ee,"").replace(Y,"").replace(oe," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}};function le(e){var t,n,o,r=e.title,i=e.items,a=void 0===i?[]:i;return(n=document.createElement("aside")).setAttribute("class","m-footer-social__box"),ae(n,["\n    ",r&&(o=document.createElement("strong"),o.setAttribute("class","m-footer-social__title"),ae(o,[r]),o),"\n\n    ",(t=document.createElement("ul"),t.setAttribute("class","m-footer-social__list"),ae(t,["\n      ",Array.isArray(a)&&a.map(function(e){var t,n,o,r=e.name,i=e.url;return(o=document.createElement("li")).setAttribute("class","m-footer-social__list-item"),ae(o,["\n          ",(n=document.createElement("a"),n.setAttribute("href",""+String(i)),n.setAttribute("class","m-footer-social__link"),ae(n,["\n            ",(t=document.createElement("axa-icon"),t.setAttribute("icon",""+String(r)),t.setAttribute("classes","m-footer-social__icon"),t),"\n          "]),n),"\n        "]),o}),"\n    "]),t),"\n  "]),n}var se,ce,ue=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Q,template:le}))}return a(t,X),o(t,null,[{key:"observedAttributes",get:function(){return["inline","items","light","title"]}}]),o(t,[{key:"willRenderCallback",value:function(){var e=this.inline,t=this.light;this.className=p(this.initialClassName,"m-footer-social",{"m-footer-social--inline":e,"m-footer-social--light":t})}}]),t}();return ue.tagName="axa-footer-social",se=ue.tagName,ce=ue,customElements.get(se)||customElements.define(se,ce),ue}();
