var StyleGuideWebComponent=function(){"use strict";var t,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},l=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},u=function t(e,n,r,o){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},c=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},p=(function(t){!function(){var n={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":e(i);if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i))t.push(r.apply(null,i));else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&t.push(l)}}return t.join(" ")}t.exports?t.exports=r:window.classNames=r}()}(t={exports:{}},t.exports),t.exports),f=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function h(t,e){var n=t;if(t&&e!==t){if(f.test(t))try{n=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else n=!0;return n}function v(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=h(n,e)}var y={},_=function(t){return t in y||(y[t]=0),++y[t]},b=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function m(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new b(e,o({},r,{detail:n}));return t.dispatchEvent(i)}var g=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function x(t){for(var e=t.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var l=i.map(function(t){var o=(i=t,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(e);var i,a;o?n=!0:r=!1;return{className:t,hasClass:o}});return!(!r&&!n)&&l}var O=/\s+/,C={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function k(t,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,l=void 0!==a&&a,s=i.passive,u=void 0===s||s;if(C[n]&&(n=C[n]),!t||!n)return null;var c=void 0===r?"undefined":e(r),d=r&&"string"===c;if("function"===c){if(o){var p=o;l=p.capture,u=p.passive}o=r}for(var f=g?{capture:l,passive:u}:l,h=d?function(e){var n=e.target;for(;!x(n,r)&&n!==t;)n=n.parentNode;if(n!==t)return o(e,n)}:o,v=n.split(O),y=v.length,_=0;_<y;++_)t.addEventListener(v[_],h,f);return function e(){for(var n=0;n<y;++n)t.removeEventListener(v[n],h,f);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}}(this,e)}}function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,p=void 0,f=void 0,h=!1,v=e!==s,y=!1!==s;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,v&&(c&&clearTimeout(c),c=setTimeout(b,e)),y&&!p&&(p=setTimeout(m,s)),o&&!h&&(h=!0,f=t.apply(void 0,d(u))),f}return _.flush=function(){(c||p)&&(f=t.apply(void 0,d(u)));return x(),f},_.cancel=x,_;function b(){p&&clearTimeout(p),g()}function m(){c&&clearTimeout(c),g()}function g(){a&&(f=t.apply(void 0,d(u))),c=null,p=null,h=!1}function x(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,h=!1}}var A={};function E(t,e){var n=k(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);A[t]||(A[t]={count:0});var r,o=A[t];return o.count++,o.onsubscribe||(o.onsubscribe=w((r=t,function(){m(document,"pubsub/onsubscribe",r),m(document,"pubsub/onsubscribe/"+r,r),A[r]&&delete A[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete A[t]}}k(document,"pubsub/onsubscribe",function(t){var e=t.detail;A[e]||(A[e]={count:0});var n=A[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=c(t,3),n=e[0],r=e[1],o=e[2];m(o,n,r)}),delete n.queue)});var P,N=function(t,e){return t===e},j=((P=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return function(){return t.apply(void 0,[].concat(n,r))?P.apply(void 0,arguments):void 0}}}})()(!0),function(t){function e(t,r){var o;n(this,e);for(var i="\n    Native Property >>>"+t+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,l=Array(a>2?a-2:0),u=2;u<a;u++)l[u-2]=arguments[u];var c=s(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this,i].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(c,e),c.name="PropertyExistsException",c}return a(e,t),e}(Error)),T=/[A-Z]/g;function S(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var R=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,M=/[-_]+/g;function L(t){return t.replace(R,D)}function D(t,e){return 0==+t||M.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var U=["title","checked","disabled"],I=[];var V=1,W=3,H=8;function F(t,e){var n=t.nodeType,r=t.nodeName;n===V&&function(t,e){for(var n=e.attributes,r=t.attributes,o=null,i=null,a=null,l=null,s=r.length-1;s>=0;--s)if(l=r[s],a=l.name,o=l.namespaceURI,i=l.value,o){var u=l.localName;e.getAttributeNS(o,u||a)!==i&&e.setAttributeNS(o,a,i)}else e.hasAttribute(a)?e.getAttribute(a)!==i&&("null"===i||"undefined"===i?e.removeAttribute(a):e.setAttribute(a,i)):e.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(l=n[c]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,t.hasAttributeNS(o,a)||e.removeAttributeNS(o,a)):t.hasAttributeNS(null,a)||e.removeAttribute(a))}(t,e),n!==W&&n!==H||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===r?function(t,e){var n=t.value,r=e.value;z(t,e,"checked"),z(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===r?z(t,e,"selected"):"TEXTAREA"===r&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function z(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var q=3;function K(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(F(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=e.childNodes[l],r=t.childNodes[l-a],n||r;l++)if(r)if(n)if(G(r,n))(o=K(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var s=l;s<e.childNodes.length;s++)if(G(e.childNodes[s],r)){i=e.childNodes[s];break}i?((o=K(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=K(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),l--}(t,e),e):null:t}function G(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===q&&t.nodeValue===e.nodeValue)}var $=function(t){function e(t){var r;n(this,e);for(var o="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),l=1;l<i;l++)a[l-1]=arguments[l];var u=s(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(u,e),u.name="TemplateNoStringReturnException",u}return a(e,t),e}(Error);function B(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(B.prototype,HTMLElement.prototype),Object.setPrototypeOf(B,HTMLElement);var Z,J,X,Q=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(t){return function(e){function o(){var t,e,r;n(this,o);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return e=r=s(this,(t=o.__proto__||Object.getPrototypeOf(o)).call.apply(t,[this].concat(a))),r._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,t)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=E("context/available",r._makeContextReady)},s(r,e)}return a(o,t),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;A[t]||(A[t]={count:0,queue:[]});var r=A[t].queue;Array.isArray(r)?r.push([t,e,n]):m(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),o}()},function(t){return function(e){function o(){return n(this,o),s(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,t),r(o,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",t,this)}}]),o}()},function(t){return function(e){function o(t){n(this,o);var e=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t));e._reduceProps=function(t,n){var r=t.props,i=t.shouldUpdate,a=e._hasKeys[n];if(-1===U.indexOf(n)&&a)throw new j(n,e);var l="_"+n,s=r[n],c=e[l];return i||e.shouldUpdateCallback(s,c)?(e[l]=s,e._props[n]=s,a&&u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,s,e),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},e._isConnected=!1,e._props={},e._hasKeys={},e.updatedDebounced=w(function(){return e.updated&&e.updated()},50);var r=e.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(t){var n,r=L(t),o=r in e;if(-1===U.indexOf(r)&&o)throw new j(r,e);e._hasKeys[r]=o,Object.defineProperty(e,r,n={get:function(){return this._props[r]},set:function(t){this.shouldUpdateCallback(this._props[r],t)&&(this._props[r]=t,o&&u(n.__proto__||Object.getPrototypeOf(n),r,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),e}return a(o,t),r(o,[{key:"connectedCallback",value:function(){var t=this;if(i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var n=L(e);if(t.hasAttribute(e)){var r=v(t,e),i=t._hasKeys[n];t._props[n]=r,i&&u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,r,t)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){this.shouldUpdateCallback(n,e)&&(this[L(t)]=h(n))}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return n.indexOf(t.replace(T,S))>-1}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),o}()},function(t){return function(o){function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,r=l(t,["template"]);n(this,u);var o=s(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,r));return o._template=e,o._hasTemplate=!!e,o._hasRendered=!1,o.updated=o.render,o}return a(u,t),r(u,[{key:"render",value:function(){var t=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});var l=r(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(t){s.appendChild(t)});else if(l){if("string"==typeof l)throw new $(this);s.appendChild(l)}if(n)i(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,s);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(s),this._isMorphing=!0,function(t,n){if("object"!==(void 0===t?"undefined":e(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":e(n)))throw new Error("componentMorph: newTree should be an object");K(n,t)}(this,c),function(){for(var t=void 0;t=I.pop();)delete t.isSameNode;I=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),u}()},function(t){return function(e){function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,r=void 0===e?"":e,i=l(t,["styles"]);n(this,o);var a=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a._styles=r,a}return a(o,t),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),o}()})(function(t){function e(t){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r._id=_(r.nodeName),r}return a(e,B),r(e,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}()),Y={},tt=function(t){function e(){var t,r,o;n(this,e);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return r=o=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),o._appendStyles=function(){e.appendGlobalStyles(o._styles,o.nodeName)},s(o,r)}return a(e,Q),r(e,null,[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Q.uuidv4();if(t&&!Y[e]){var n=document.createElement("style"),r=document.createTextNode(t);Y[e]=!0,n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),e}(),et=".m-footer-legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-right: 15px;\n  padding-left: 15px;\n  display: block;\n  max-width: 100%;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  margin-left: auto;\n  color: rgba(255, 255, 255, 0.65);\n  text-align: right; }\n  @media (min-width: 576px) {\n    .m-footer-legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n  @media (max-width: 991px) {\n    .m-footer-legals {\n      padding-bottom: 15px;\n      margin-left: 0;\n      text-align: center; }\n      .m-footer-legals:first-child:last-child {\n        padding-bottom: 6px; } }\n  @media (max-width: 575px) {\n    .m-footer-legals:last-child {\n      padding-top: 0; }\n    .m-footer-legals:first-child {\n      padding-top: 15px; }\n    .m-footer-legals:first-child:last-child {\n      padding-top: 6px; } }\n\n.m-footer-legals__link {\n  position: relative;\n  display: inline-block;\n  padding: 6px 10px;\n  margin: -6px 0;\n  color: rgba(255, 255, 255, 0.65); }\n  .m-footer-legals__link:hover, .m-footer-legals__link:active, .m-footer-legals__link:focus {\n    color: #fff;\n    text-decoration: none; }\n  .m-footer-legals__link::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-legals__link:first-child::after {\n    display: none; }\n\n.m-footer-legals__copy {\n  display: inline-block;\n  margin-left: 10px; }\n\n.m-footer-legals--bottom {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  text-align: right !important; }\n  .m-footer-legals--bottom .m-footer-legals__link:last-of-type {\n    margin-right: -10px; }\n  .m-footer-legals--bottom .m-footer-legals__copy {\n    display: block;\n    margin-left: 0; }\n",nt=function(t){function e(){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{styles:et}))}return a(e,tt),r(e,null,[{key:"observedAttributes",get:function(){return["bottom"]}}]),r(e,[{key:"connectedCallback",value:function(){i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.render()}},{key:"attributeChangedCallback",value:function(){this.render()}},{key:"render",value:function(){var t=v(this,"bottom");this.className=p(this.initialClassName,"m-footer-legals",{"m-footer-legals--bottom":t})}}]),e}();return nt.tagName="axa-footer-legals",Z=function(){window.customElements.define(nt.tagName,nt)},J=0,X=function(){if(0===J)try{Z.apply(void 0,arguments),J+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(t){}},document.addEventListener("DOMContentLoaded",X,!1),document.addEventListener("WebComponentsReady",X,!1),nt}();
