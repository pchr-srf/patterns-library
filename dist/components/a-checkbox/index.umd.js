!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var c=i.set;void 0!==c&&c.call(o,r)}return r},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=(function(e){!function(){var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(r.apply(null,i));else if("object"===a)for(var c in i)n.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(e={exports:{}},e.exports),e.exports),h={},f=function(e){return e in h||(h[e]=0),++h[e]},b=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,c);var s=l.preventDefault;return l.preventDefault=function(){s.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function v(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new b(t,o({},r,{detail:n}));return e.dispatchEvent(i)}var _=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function y(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var c=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&c}var m=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function g(e,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,c=void 0!==a&&a,l=i.passive,s=void 0===l||l;if(x[n]&&(n=x[n]),!e||!n)return null;var u=void 0===r?"undefined":t(r),d=r&&"string"===u;if("function"===u){if(o){var p=o;c=p.capture,s=p.passive}o=r}for(var h=_?{capture:c,passive:s}:c,f=d?function(t){var n=t.target;for(;!y(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,b=n.split(m),v=b.length,g=0;g<v;++g)e.addEventListener(b[g],f,h);return function t(){for(var n=0;n<v;++n)e.removeEventListener(b[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,c=n.maxWait,l=void 0!==c&&c,s=void 0,u=void 0,p=void 0,h=void 0,f=!1,b=t!==l,v=!1!==l;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return s=r,b&&(u&&clearTimeout(u),u=setTimeout(y,t)),v&&!p&&(p=setTimeout(m,l)),o&&!f&&(f=!0,h=e.apply(void 0,d(s))),h}return _.flush=function(){(u||p)&&(h=e.apply(void 0,d(s)));return g(),h},_.cancel=g,_;function y(){p&&clearTimeout(p),x()}function m(){u&&clearTimeout(u),x()}function x(){a&&(h=e.apply(void 0,d(s))),u=null,p=null,f=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),s=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var O=window.__subscriptions;function C(e,t){var n=g(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);O[e]||(O[e]={count:0});var r,o=O[e];return o.count++,o.onsubscribe||(o.onsubscribe=k((r=e,function(){v(document,"pubsub/onsubscribe",r),v(document,"pubsub/onsubscribe/"+r,r),O[r]&&delete O[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete O[e]}}g(document,"pubsub/onsubscribe",function(e){var t=e.detail;O[t]||(O[t]={count:0});var n=O[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];v(o,n,r)}),delete n.queue)});var w,A=function(e,t){return e===t},N=((w=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?w.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,r){var o;n(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,c=Array(a>2?a-2:0),s=2;s<a;s++)c[s-2]=arguments[s];var u=l(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(c)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return a(t,e),t}(Error)),E=/[A-Z]/g;function P(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(e,t){var n=e;if(e&&t!==e){if(j.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function M(e){return e.replace(S,L)}function L(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=["title","checked","disabled"],V=[];var U=1,I=3,F=8;function H(e,t){var n=e.nodeType,r=e.nodeName;n===U&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,c=null,l=r.length-1;l>=0;--l)if(c=r[l],a=c.name,o=c.namespaceURI,i=c.value,o){var s=c.localName;t.getAttributeNS(o,s||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(c=n[u]).specified&&(a=c.name,(o=c.namespaceURI)?(a=c.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==I&&n!==F||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;W(e,t,"checked"),W(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?W(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function W(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var q=3;function $(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(H(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],r=e.childNodes[c-a],n||r;c++)if(r)if(n)if(K(r,n))(o=$(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=c;l<t.childNodes.length;l++)if(K(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=$(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=$(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),c--}(e,t),t):null:e}function K(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===q&&e.nodeValue===t.nodeValue)}var z=function(e){function t(e){var r;n(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];var s=l(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="TemplateNoStringReturnException",s}return a(t,e),t}(Error),G=!!document.createDocumentFragment().children;function B(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(B.prototype,HTMLElement.prototype),Object.setPrototypeOf(B,HTMLElement);var Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function o(){var e,t,r;n(this,o);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return t=r=l(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=C("context/available",r._makeContextReady)},l(r,t)}return a(o,e),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;O[e]||(O[e]={count:0,queue:[]});var r=O[e].queue;Array.isArray(r)?r.push([e,t,n]):v(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),o}()},function(e){return function(t){function o(){return n(this,o),l(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,e),r(o,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}}]),o}()},function(e){return function(t){function o(e){n(this,o);var t=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));t._reduceProps=function(e,n){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[n];if(-1===D.indexOf(n)&&a)throw new N(n,t);var c="_"+n,l=r[n],u=t[c];return i||t.shouldUpdateCallback(l,u)?(t[c]=l,t._props[n]=l,a&&s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,l,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=k(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=M(e),o=r in t;if(-1===D.indexOf(r)&&o)throw new N(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&s(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(o,e),r(o,[{key:"connectedCallback",value:function(){var e=this;if(i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=M(t);if(e.hasAttribute(t)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=T(n,t)}(e,t),i=e._hasKeys[n];e._props[n]=r,i&&s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,r,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[M(e)]=T(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(E,P))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),o}()},function(e){return function(o){function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=c(e,["template"]);n(this,s);var o=l(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return a(s,e),r(s,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});G||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var c=r(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(c))c.forEach(function(e){l.appendChild(e)});else if(c){if("string"==typeof c)throw new z(this);l.appendChild(c)}if(n)i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");$(n,e)}(this,u),function(){for(var e=void 0;e=V.pop();)delete e.isSameNode;V=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(e){return function(t){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,i=c(e,["styles"]);n(this,o);var a=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a._styles=r,a}return a(o,e),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()})(function(e){function t(e){n(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._id=f(r.nodeName),r}return a(t,B),r(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),J={},X=function(e){function t(){var e,r,o;n(this,t);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},l(o,r)}return a(t,Z),r(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(e&&!J[t]){var n=document.createElement("style"),r=document.createTextNode(e);J[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var Q='.a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) {\n  color: #00008f; }\n  .a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) .a-checkbox__icon {\n    border-color: #00008f; }\n    .a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) .a-checkbox__icon::after {\n      border-color: #00008f; }\n\n.a-checkbox .a-checkbox__wrapper {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.5; }\n\n.a-checkbox .a-checkbox__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-checkbox .a-checkbox__input:focus + .a-checkbox__icon {\n    border-color: #00008f; }\n    .a-checkbox .a-checkbox__input:focus + .a-checkbox__icon::after {\n      border-color: #00008f; }\n  .a-checkbox .a-checkbox__input:checked + .a-checkbox__icon::after {\n    border-color: #00008f;\n    background-color: #00008f; }\n  .a-checkbox .a-checkbox__input:disabled + .a-checkbox__icon {\n    cursor: default;\n    border-color: #999; }\n    .a-checkbox .a-checkbox__input:disabled + .a-checkbox__icon::after {\n      border-color: transparent; }\n\n.a-checkbox .a-checkbox__icon {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #999;\n  cursor: pointer;\n  border-radius: 0; }\n  .a-checkbox .a-checkbox__icon::after {\n    width: 8px;\n    height: 8px;\n    border: 1px solid transparent;\n    content: ""; }\n  .a-checkbox .a-checkbox__icon::after {\n    border-radius: 0; }\n\n.a-checkbox--error {\n  color: #c91432; }\n  .a-checkbox--error .a-checkbox__icon {\n    border-color: #c91432; }\n\n.a-checkbox--disabled {\n  color: #999; }\n',Y=/\n[\s]+$/,ee=/^\n[\s]+/,te=/[\s]+$/,ne=/^[\s]+/,re=/[\n\s]+/g,oe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ie=["code","pre","textarea"],ae=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,c=0,l=n.length;c<l;c++){var s=n[c];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),u=s),c===l-1&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=u.nodeValue.replace(ee,"").replace(te,"").replace(Y,"").replace(re," "))?t.removeChild(u):u.nodeValue=r:-1===ie.indexOf(i)&&(o=0===c?"":" ",r=u.nodeValue.replace(ee,o).replace(ne," ").replace(te,"").replace(Y,"").replace(re," "),u.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=u.nodeValue.replace(ee,"").replace(Y,"").replace(re," "))?t.removeChild(u):u.nodeValue=r:-1===ie.indexOf(i)&&(r=u.nodeValue.replace(ne," ").replace(ee,"").replace(Y,"").replace(re," "),u.nodeValue=r));var d=s.nodeName;d&&(i=d.toLowerCase()),t.appendChild(s)}}}};function ce(e,t){var n,r,o,i=e.inputId,a=void 0===i?Z.uuidv4():i,c=e.value,l=e.name,s=e.checked,u=void 0!==s&&s,d=e.disabled,p=void 0!==d&&d;return(o=document.createElement("label")).setAttribute("class","a-checkbox__wrapper"),ae(o,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(a)),n.setAttribute("type","checkbox"),n.setAttribute("name",""+String(l)),u&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(c)),p&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-checkbox__input"),n),"\n    ",(r=document.createElement("span"),r.setAttribute("class","a-checkbox__icon"),r),t,"\n  "]),o}var le,se,ue=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Q,template:ce}))}return a(t,X),r(t,null,[{key:"observedAttributes",get:function(){return["input-id","error","value","name","checked","disabled"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,n=this.disabled;this.className=p(this.initialClassName,"a-checkbox",{"a-checkbox--error":e,"a-checkbox--checked":t,"a-checkbox--disabled":n})}}]),t}();return ue.tagName="axa-checkbox",le=ue.tagName,se=ue,customElements.get(le)||customElements.define(le,se),ue});
