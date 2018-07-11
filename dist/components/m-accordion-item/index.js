var StyleGuideWebComponent=function(){"use strict";var e={},t=function(t){return t in e||(e[t]=0),++e[t]},n=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,r,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new n(t,s({},i,{detail:o}));return e.dispatchEvent(r)}var _=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),m=/^\s+|\s{2,}|\s+$/g;function y(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function g(e,t){var n=t.className;return t.hasClass||e.push(n),e}function b(e){for(var t=e.className,n=!1,o=!0,i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];var s=r.map(function(e){var i=y(e).test(t);i?n=!0:o=!1;return{className:e,hasClass:i}});return!(!o&&!n)&&s}function C(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function x(e,t){var n=y(t,"g");return e.replace(n," ").replace(m," ")}var w=/\s+/,k={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function O(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,c=r.passive,l=void 0===c||c;if(k[t]&&(t=k[t]),!e||!t)return null;var u=void 0===n?"undefined":o(n),d=n&&"string"===u;if("function"===u){if(i){var p=i;s=p.capture,l=p.passive}i=n}for(var h=_?{capture:s,passive:l}:s,f=d?function(t){var o=t.target;for(;!b(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return i(t,o)}:i,v=t.split(w),m=v.length,y=0;y<m;++y)e.addEventListener(v[y],f,h);return function t(){for(var n=0;n<m;++n)e.removeEventListener(v[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,s=n.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,p=void 0,h=!1,v=t!==c,_=!1!==c;function m(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return l=o,v&&(u&&clearTimeout(u),u=setTimeout(y,t)),_&&!d&&(d=setTimeout(g,c)),i&&!h&&(h=!0,p=e.apply(void 0,f(l))),p}return m.flush=function(){(u||d)&&(p=e.apply(void 0,f(l)));return C(),p},m.cancel=C,m;function y(){d&&clearTimeout(d),b()}function g(){u&&clearTimeout(u),b()}function b(){a&&(p=e.apply(void 0,f(l))),u=null,d=null,h=!1}function C(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var N=window.__subscriptions;function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;N[e]||(N[e]={count:0,queue:[]});var o=N[e].queue;Array.isArray(o)?o.push([e,t,n]):v(n,e,t)}function T(e,t){var n=O(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);N[e]||(N[e]={count:0});var o,i=N[e];return i.count++,i.onsubscribe||(i.onsubscribe=E((o=e,function(){v(document,"pubsub/onsubscribe",o),v(document,"pubsub/onsubscribe/"+o,o),N[o]&&delete N[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete N[e]}}O(document,"pubsub/onsubscribe",function(e){var t=e.detail;N[t]||(N[t]={count:0});var n=N[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],i=t[2];v(i,n,o)}),delete n.queue)});var P,j=function(e,t){return e===t},S=((P=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(){return e.apply(void 0,[].concat(n,o))?P.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var o;i(this,t);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];var l=d(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return l(t,e),t}(Error)),D=/[A-Z]/g;function R(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var L=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function M(e,t){var n=e;if(e&&t!==e){if(L.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var I=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,U=/[-_]+/g;function V(e){return e.replace(I,F)}function F(e,t){return 0==+e||U.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function z(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=M(n,t)}var q=["title","checked","disabled"],K=[];var H=1,W=3,$=8;function G(e,t){var n=e.nodeType,o=e.nodeName;n===H&&function(e,t){for(var n=t.attributes,o=e.attributes,i=null,r=null,a=null,s=null,c=o.length-1;c>=0;--c)if(s=o[c],a=s.name,i=s.namespaceURI,r=s.value,i){var l=s.localName;t.getAttributeNS(i,l||a)!==r&&t.setAttributeNS(i,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var u=n.length-1;u>=0;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==W&&n!==$||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;B(e,t,"checked"),B(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?B(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function B(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Z=3;function J(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(G(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(X(o,n))(i=J(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var c=s;c<t.childNodes.length;c++)if(X(t.childNodes[c],o)){r=t.childNodes[c];break}r?((i=J(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=J(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function X(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Z&&e.nodeValue===t.nodeValue)}var Y=function(e){function t(e){var n;i(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var c=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return l(t,e),t}(Error),Q=!!document.createDocumentFragment().children;function ee(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ee.prototype,HTMLElement.prototype),Object.setPrototypeOf(ee,HTMLElement);var te=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=T("context/available",o._makeContextReady)},d(o,t)}return l(n,e),r(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,A("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return i(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){i(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var i=e.props,r=e.shouldUpdate,a=t._hasKeys[o];if(-1===q.indexOf(o)&&a)throw new S(o,t);var s="_"+o,c=i[o],l=t[s];return r||t.shouldUpdateCallback(c,l)?(t[s]=c,t._props[o]=c,a&&p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,c,t),{props:i,shouldUpdate:!0}):{props:i,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=E(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=V(e),i=o in t;if(-1===q.indexOf(o)&&i)throw new S(o,t);t._hasKeys[o]=i,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,i&&p(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return l(n,e),r(n,[{key:"connectedCallback",value:function(){var e=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var o=V(t);if(e.hasAttribute(t)){var i=z(e,t),r=e._hasKeys[o];e._props[o]=i,r&&p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,i,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[V(e)]=M(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(D,R))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=u(e,["template"]);i(this,n);var r=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return l(n,e),r(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var i=this._template;try{if(t){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});Q||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=i(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new Y(this);l.appendChild(s)}if(t)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":o(t)))throw new Error("componentMorph: newTree should be an object");J(t,e)}(this,u),function(){for(var e=void 0;e=K.pop();)delete e.isSameNode;K=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=u(e,["styles"]);i(this,n);var a=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return a._styles=o,a}return l(n,e),r(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function n(e){i(this,n);var o=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return o._id=t(o.nodeName),o}return l(n,ee),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ne={},oe=function(e){function t(){var e,n,o;i(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=o=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},d(o,n)}return l(t,te),r(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!ne[t]){var n=document.createElement("style"),o=document.createTextNode(e);ne[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ie=/\n[\s]+$/,re=/^\n[\s]+/,ae=/[\s]+$/,se=/^[\s]+/,ce=/[\n\s]+/g,le=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ue=["code","pre","textarea"],de=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===le.indexOf(r)&&-1===ue.indexOf(r)?""===(o=u.nodeValue.replace(re,"").replace(ae,"").replace(ie,"").replace(ce," "))?t.removeChild(u):u.nodeValue=o:-1===ue.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(re,i).replace(se," ").replace(ae,"").replace(ie,"").replace(ce," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===le.indexOf(r)&&-1===ue.indexOf(r)?""===(o=u.nodeValue.replace(re,"").replace(ie,"").replace(ce," "))?t.removeChild(u):u.nodeValue=o:-1===ue.indexOf(r)&&(o=u.nodeValue.replace(se," ").replace(re,"").replace(ie,"").replace(ce," "),u.nodeValue=o));var d=l.nodeName;d&&(r=d.toLowerCase()),t.appendChild(l)}}}};var pe,he=(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var a=void 0===r?"undefined":o(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}(pe={exports:{}},pe.exports),pe.exports),fe=function(e,t){var n,o,i,r,s,c,l,u,d,p=e.header,h=e.headerSecondary,f=e.headerColor,v=e.icon,_=void 0===v?"":v,m=he("m-accordion-item__heading","m-accordion-item__heading--primary",(a(n={},"m-accordion-item__heading--"+f,f),a(n,"m-accordion-item__heading--with-secondary",h),n)),y=he("m-accordion-item__header","js-accordion-item__toggle",{"m-accordion-item__header--with-icon":_}),g=((o=document.createElement("axa-icon")).setAttribute("icon",""+String(_)),o.setAttribute("classes","m-accordion-item__icon"),o),b=((i=document.createElement("axa-icon")).setAttribute("icon","chevron-down"),i.setAttribute("classes","m-accordion-item__chevron"),i);return[(c=document.createElement("div"),c.setAttribute("class",""+String(y)),de(c,["\n          ",_&&g,"\n          ",(s=document.createElement("div"),s.setAttribute("class","m-accordion-item__heading-wrapper"),de(s,["\n            ",(r=document.createElement("span"),r.setAttribute("class",""+String(m)),de(r,[p]),r)," \n            ",h&&(l=document.createElement("span"),l.setAttribute("class","m-accordion-item__heading m-accordion-item__heading--secondary"),de(l,["\n                      ",h,"\n                "]),l),"\n          "]),s),"\n          ",b,"\n        "]),c),(d=document.createElement("div"),d.setAttribute("class","m-accordion-item__body js-accordion-item__body"),de(d,["\n          ",(u=document.createElement("div"),u.setAttribute("class","m-accordion-item__content"),de(u,["\n          ",t,"\n          "]),u),"\n        "]),d)]},ve=".m-accordion-item {\n  display: block; }\n\n.m-accordion-item__header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 18px 60px 18px 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0 solid #ccc;\n  border-top-width: 1px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer; }\n\n.m-accordion-item__header--with-icon .m-accordion-item__heading-wrapper {\n  margin-left: 20px; }\n\n.m-accordion-item__header--with-icon ~ .m-accordion-item__body {\n  padding-left: 32px; }\n  .m-accordion-item__header--with-icon ~ .m-accordion-item__body .m-accordion-item__content {\n    padding: 2px 60px 18px 10px; }\n\n.m-accordion-item__heading-wrapper {\n  margin-left: 8px; }\n\n.m-accordion-item__heading {\n  display: block; }\n\n.m-accordion-item__heading--primary {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--primary {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-accordion-item__heading--with-secondary {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--with-secondary {\n      font-size: 16px; } }\n\n.m-accordion-item__heading--blue {\n  color: #00008f; }\n\n.m-accordion-item__heading--secondary {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--secondary {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.m-accordion-item__chevron {\n  position: absolute;\n  top: calc(50% - (16px / 2));\n  right: 18px;\n  display: block;\n  height: 16px;\n  width: 16px;\n  color: #00008f;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.m-accordion-item__icon {\n  display: block;\n  height: 30px;\n  width: 30px;\n  color: #00008f; }\n\n.m-accordion-item__body {\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n\n.m-accordion-item__content {\n  margin-left: 18px;\n  padding: 2px 60px 18px 0; }\n\n.is-accordion-item-open .m-accordion-item__chevron {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.is-accordion-item-open .m-accordion-item__body {\n  height: auto; }\n";var _e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function me(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,r=void 0===i||i,a=o.passive,s=void 0===a||a,c=e.ownerDocument.documentElement,l=O(c,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:r,passive:s});return _e&&(c.style.cursor="pointer"),l}var ye=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),ge="data-prevent-default",be=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,i=t!==n._lastToggleNode,r=!o&&!i;o?(n._notify(ye.ENTER,t),n._onInteractive()):i&&n._notify(ye.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,r&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===ye.ESCAPE||e.key===ye.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return r(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=O(this._container,ye.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=O(this._container,ye.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=me(this._container,ye.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=O(this._container.ownerDocument,ye.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ge)?z(e,ge):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ye.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e}();be.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ce,xe=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,we=function(){var e=window.requestAnimationFrame||window[xe+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),ke=(Ce=(Ce=window.cancelAnimationFrame||window[xe+"CancelAnimationFrame"]||window[xe+"CancelRequestAnimationFrame"])?Ce.bind(window):function(e){clearTimeout(e)},function(e){function t(e,n){i(this,t),n=s({},t.DEFAULTS,n);var o=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.toggleState=function(e){var t=e.detail;o.wcNode===t?o.isOpen?o.close():o.open():o.isOpen&&o.close()},o.handleTransitionEnd=function(e){"height"===e.propertyName&&(e.target.style.height="",o.offInteractive())},o.handleToggleClick=function(){A("accordion-item/toggle",o.wcNode,o._contextNode)},o.isOpen=!1,o.options=n,o.wcNode=e,o.init(),o}return l(t,be),r(t,[{key:"init",value:function(){this.toggle=this.wcNode.querySelector(this.options.toggle),this.body=this.wcNode.querySelector(this.options.body),this.on()}},{key:"on",value:function(){this.off(),this.offToggleClicked=O(this.toggle,"click",this.handleToggleClick)}},{key:"off",value:function(){this.offToggleClicked&&this.offToggleClicked()}},{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=O(this.body,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"open",value:function(){var e=this.wcNode,t=e.lastElementChild;if(!this.isOpen){this.isOpen=!0,t.style.overflow="scroll";var n=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=n+"px",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=b.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(g,[])),r&&(e.className+=" "+r.join(" "))}}(e,this.options.isOpen)}}},{key:"close",value:function(){var e=this,t=this.wcNode,n=t.lastElementChild,o=n.scrollHeight;this.isOpen&&(this.isOpen=!1,this.offInteractive(),we(function(){n.style.height=o+"px",we(function(){!function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=b.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(C,[])),r){var a=e.className;e.className=r.reduce(x,a)}}}(t,e.options.isOpen),n.style.height=0})}))}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeToggle=T("accordion-item/toggle",this.toggleState,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeToggle&&this.unSubscribeToggle()}},{key:"destroy",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.off(),this.offInteractive(),this.offContextEnabled(),delete this.wcNode,delete this.options}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),t}());ke.DEFAULTS={containerClass:!1,toggle:".js-accordion-item__toggle",body:".js-accordion-item__body",isOpen:"is-accordion-item-open"};var Oe,Ee,Ne=function(e){function t(){i(this,t);var e=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ve,template:fe}));return e.consumeContext("axa-accordion"),e}return l(t,oe),r(t,null,[{key:"observedAttributes",get:function(){return["icon","header","header-secondary","header-color","multiple"]}}]),r(t,[{key:"connectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-accordion-item",this.interaction=new ke(this)}},{key:"disconnectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}}]),t}();return Ne.tagName="axa-accordion-item",Oe=Ne.tagName,Ee=Ne,customElements.get(Oe)||customElements.define(Oe,Ee),Ne}();
