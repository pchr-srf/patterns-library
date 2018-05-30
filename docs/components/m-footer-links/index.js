var StyleGuideWebComponent=function(){"use strict";var e,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},n=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},s=(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),l=1,c=3,f=8;function o(e,t){var n=e.nodeType,o=e.nodeName;n===l&&function(e,t){for(var n=t.attributes,o=e.attributes,i=null,r=null,a=null,s=null,l=o.length-1;0<=l;--l)if(s=o[l],a=s.name,i=s.namespaceURI,r=s.value,i){var c=s.localName;t.getAttributeNS(i,c||a)!==r&&t.setAttributeNS(i,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==c&&n!==f||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;v(e,t,"checked"),v(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?v(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function v(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var m=3;function y(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(o(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(b(o,n))(i=y(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(b(t.childNodes[l],o)){r=t.childNodes[l];break}r?((i=y(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=y(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function b(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===m&&e.nodeValue===t.nodeValue)}var g=[];var x=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function w(t,n){var e=t;if(t&&n!==t){if(x.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}function C(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=w(n,t)}var A=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function E(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new A(t,r({},o,{detail:n}));return e.dispatchEvent(i)}var N=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),O=/^\s+|\s{2,}|\s+$/g;function T(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function j(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=S.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(P,[])),r&&(e.className+=" "+r.join(" "))}}function P(e,t){var n=t.className;return t.hasClass||e.push(n),e}function S(e){for(var n=e.className,o=!1,i=!0,t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var s=r.map(function(e){var t=T(e).test(n);t?o=!0:i=!1;return{className:e,hasClass:t}});return!(!i&&!o)&&s}function D(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=S.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(L,[])),r){var a=e.className;e.className=r.reduce(R,a)}}}function L(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function R(e,t){var n=T(t,"g");return e.replace(n," ").replace(O," ")}var M=/\s+/,U={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function I(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,l=void 0===s||s;if(U[e]&&(e=U[e]),!n||!e)return null;var c=void 0===o?"undefined":_(o),u=o&&"string"===c;if("function"===c){if(i){var d=i;a=d.capture,l=d.passive}i=o}for(var p=N?{capture:a,passive:l}:a,h=u?function(e){var t=e.target;for(;!S(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,f=e.split(M),v=f.length,m=0;m<v;++m)n.addEventListener(f[m],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,e)}}function F(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=i!==l,v=!1!==l;function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(u&&clearTimeout(u),u=setTimeout(_,i)),v&&!d&&(d=setTimeout(y,l)),r&&!h&&(h=!0,p=o.apply(void 0,k(c))),p}return m.flush=function(){(u||d)&&(p=o.apply(void 0,k(c)));return g(),p},m.cancel=g,m;function _(){d&&clearTimeout(d),b()}function y(){u&&clearTimeout(u),b()}function b(){a&&(p=o.apply(void 0,k(c))),d=u=null,h=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}var V={};function z(e,t){var n=I(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);V[e]||(V[e]={count:0});var o,i=V[e];return i.count++,i.onsubscribe||(i.onsubscribe=F((o=e,function(){E(document,"pubsub/onsubscribe",o),E(document,"pubsub/onsubscribe/"+o,o),V[o]&&delete V[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete V[e]}}I(document,"pubsub/onsubscribe",function(e){var t=e.detail;V[t]||(V[t]={count:0});var n=V[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=a(e,3),n=t[0],o=t[1],i=t[2];E(i,n,o)}),delete n.queue)});var t=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,q=/[-_]+/g;function K(e){return e.replace(t,H)}function H(e,t){return 0==+e||q.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var W=/[A-Z]/g;function $(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var B=function(e,t){return e===t},G=function(e){function l(e,t){var n;u(this,l);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,r=Array(2<i?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];var s=p(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return n(l,e),l}(Error);function Z(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Z.prototype,HTMLElement.prototype),Object.setPrototypeOf(Z,HTMLElement);var J,X="throwed",Y=["title","checked","disabled"],Q={},ee=function(e){return e in Q||(Q[e]=0),++Q[e]},te=((J=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:B;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?J.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];u(this,c);var l=p(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,i=l._hasKeys[t];if(-1===Y.indexOf(t)&&i)throw new G(t,l);var r="_"+t,a=n[t],s=l[r];return o||l.shouldUpdateCallback(a,s)?(l[r]=a,l._props[t]=a,i&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;l.contextNode&&(clearTimeout(l.timeoutId),l.timeoutId=setTimeout(function(){l.contextCallback(l.contextNode,e)},10)),l.unContextEnabled&&l.unContextEnabled(),l.unContextEnabled=z("context/enabled",l._makeContextReady)},l._initialise(e,t),l._id=ee(l.nodeName),l._props={},l._hasKeys={},l.reRender=F(function(){return l.render()},50);var n=l.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,o=K(e),i=o in l;if(-1===Y.indexOf(o)&&i)throw new G(o,l);l._hasKeys[o]=i,Object.defineProperty(l,o,n={get:function(){return this["_"+o]},set:function(e){var t="_"+o;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[o]=e,i&&h(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),l}return n(c,Z),i(c,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var i=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=K(e);if(i.hasAttribute(e)){var n=C(i,e),o=i._hasKeys[t];i["_"+t]=n,i._props[t]=n,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,i)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[K(e)]=w(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(W,$))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var r=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r){var s=new Error(X);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}a.appendChild(r)}if(e)d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");y(t,e)}(this,l),function(){for(var e=void 0;e=g.pop();)delete e.isSameNode;g=[]}(),this._isMorphing=!1}}catch(s){s.message!==X&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;V[e]||(V[e]={count:0,queue:[]});var o=V[e].queue;Array.isArray(o)?o.push([e,t,n]):E(n,e,t)}("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),c}()),ne={},oe=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,te),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!ne[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),ne[e]=!0}}}]),t}(),ie=".m-footer-links {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  display: block;\n  margin-left: 0 !important; }\n  @media (max-width: 991px) {\n    .m-footer-links {\n      max-width: 33.33333%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 33.33333%;\n              flex: 0 0 33.33333%; } }\n  @media (max-width: 575px) {\n    .m-footer-links {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      padding: 0; } }\n\n.m-footer-links__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-footer-links__block {\n  margin-left: 60px; }\n  .m-footer-links__block:first-child {\n    margin-left: 0; }\n  @media (max-width: 575px) {\n    .m-footer-links__block {\n      position: relative; } }\n\n.m-footer-links__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__category {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em;\n      cursor: pointer;\n      position: relative;\n      padding: 20px 60px 20px 30px;\n      border-bottom: 1px solid #2425aa;\n      background: #3b3fd8; } }\n  @media (max-width: 575px) and (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n      .m-footer-links__category:hover, .m-footer-links__category:active, .m-footer-links__category:focus {\n        cursor: pointer; } }\n\n.m-footer-links__category__icon {\n  width: 10px;\n  height: 10px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  margin-top: -5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  display: none; }\n  .is-dropdown-open .m-footer-links__category__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  @media (max-width: 575px) {\n    .m-footer-links__category__icon {\n      display: block; } }\n\n.m-footer-links__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: block;\n  padding-top: 15px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list {\n      padding-top: 10px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list {\n      position: absolute;\n      top: 100%;\n      z-index: 1000;\n      height: 0;\n      min-width: 100%;\n      overflow: hidden;\n      -webkit-transition: height 0.3s ease;\n      transition: height 0.3s ease;\n      position: static;\n      display: block;\n      margin: 0;\n      padding: 0;\n      background: #3032c1; }\n      .is-dropdown-open > .m-footer-links__list {\n        height: auto; } }\n  @media (min-width: 576px) {\n    .m-footer-links__list {\n      height: auto !important; } }\n\n.m-footer-links__list-item {\n  display: block;\n  width: 100%;\n  margin-top: 10px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list-item {\n      margin-top: 8px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list-item {\n      margin-top: 0;\n      border-bottom: 1px solid #3b3fd8; }\n      .m-footer-links__list-item:last-child {\n        border-bottom: none; } }\n\n.m-footer-links__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 5px 0;\n  color: #fff; }\n  @media (min-width: 576px) {\n    .m-footer-links__link {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .is-footer-links__list-item-active > .m-footer-links__link, .m-footer-links__link:hover, .m-footer-links__link:active, .m-footer-links__link:focus {\n    color: rgba(255, 255, 255, 0.65);\n    text-decoration: none; }\n  @media (max-width: 575px) {\n    .m-footer-links__link {\n      padding: 20px 30px; } }\n\n.m-footer-links--cols-2 {\n  max-width: 41.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%; }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list {\n      -webkit-column-count: 2;\n              column-count: 2; } }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list-item {\n      display: inline-block; } }\n  @media (max-width: 991px) {\n    .m-footer-links--cols-2 {\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%; } }\n  @media (max-width: 575px) {\n    .m-footer-links--cols-2 {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n",re=/\n[\s]+$/,ae=/^\n[\s]+/,se=/[\s]+$/,le=/^[\s]+/,ce=/[\n\s]+/g,ue=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],de=["code","pre","textarea"],pe=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===ue.indexOf(r)&&-1===de.indexOf(r)?""===(o=u.nodeValue.replace(ae,"").replace(se,"").replace(re,"").replace(ce," "))?t.removeChild(u):u.nodeValue=o:-1===de.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(ae,i).replace(le," ").replace(se,"").replace(re,"").replace(ce," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===ue.indexOf(r)&&-1===de.indexOf(r)?""===(o=u.nodeValue.replace(ae,"").replace(re,"").replace(ce," "))?t.removeChild(u):u.nodeValue=o:-1===de.indexOf(r)&&(o=u.nodeValue.replace(le," ").replace(ae,"").replace(re,"").replace(ce," "),u.nodeValue=o));var d=c.nodeName;d&&(r=d.toLowerCase()),t.appendChild(c)}}}};var he=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},fe='<axa-icon icon="angle-bracket-down" classes="m-footer-links__category__icon"></axa-icon>';function ve(e){var t,n,o,i=e.title,r=e.items;return(o=document.createElement("div")).setAttribute("class","m-footer-links__block js-dropdown"),pe(o,["\n    ",(t=document.createElement("strong"),t.setAttribute("class","m-footer-links__category js-dropdown__toggle"),pe(t,[i,he(fe)]),t),"\n\n    ",(n=document.createElement("ul"),n.setAttribute("class","m-footer-links__list"),pe(n,["\n      ",Array.isArray(r)&&r.map(function(e,t){var n,o,i=e.name,r=e.url,a=e.isActive;return(o=document.createElement("li")).setAttribute("class","m-footer-links__list-item "+String(a?"is-footer-links__list-item-active":"")),pe(o,["\n          ",(n=document.createElement("a"),n.setAttribute("href",""+String(r)),n.setAttribute("index",""+String(t)),n.setAttribute("class","m-footer-links__link js-footer-links__link"),pe(n,[i]),n),"\n        "]),o}),"\n    "]),n),"\n  "]),o}var me=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function _e(n,e,o){var t,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,a=void 0===r||r,s=i.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=I(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=c,me&&(t.style.cursor="pointer"),u}var ye=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),be="data-prevent-default",ge=function(){function o(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,o=t!==r._lastToggleNode,i=!n&&!o;n?(r._notify(ye.ENTER,t),r._onInteractive()):o&&r._notify(ye.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,i&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===ye.ESCAPE||e.key===ye.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return i(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=r({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=I(this._container,ye.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=I(this._container,ye.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=_e(this._container,ye.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=I(this._container.ownerDocument,ye.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(be)?C(e,be):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ye.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),o}();ge.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ke,xe=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,we=function(){var e=window.requestAnimationFrame||window[xe+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var i=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-i)),o=setTimeout(function(){e(t+n)},n);return i=t+n,o}}return e}(),Ce=(ke=(ke=window.cancelAnimationFrame||window[xe+"CancelAnimationFrame"]||window[xe+"CancelRequestAnimationFrame"])?ke.bind(window):function(e){clearTimeout(e)},function(e){function o(e,t){u(this,o),t=r({},o.DEFAULTS,t);var n=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.handleTransitionEnd=function(e){"height"===e.propertyName&&(n.isOpen&&(e.target.style.height=""),n.offInteractive(),D(n.wcNode,n.options.isAnimatingClass))},n.options=t,n.wcNode=e,n.isOpen=!1,n}return n(o,ge),i(o,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=I(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,j(t,this.options.isAnimatingClass),n.style.overflow="scroll";var o=n.scrollHeight;n.style.overflow="",this.onInteractive(),n.style.height=o+"px",j(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,i=o.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),j(n,this.options.isAnimatingClass),we(function(){o.style.height=i+"px",we(function(){D(n,t.options.isOpenClass),o.style.height=0})}))}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",D(e,this.options.isOpenClass))}},{key:"destroy",value:function(){d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),o}());Ce.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating"};var Ae=function(){function n(e,t){u(this,n),this.wcNode=e,this.options=r({},n.DEFAULTS,t),this.handleClick=this.handleClick.bind(this),this.on()}return i(n,[{key:"on",value:function(){var o=this;this.off(),this.unsubscribe=z("device-state/change",function(e){var t=e.detail.breakpoint,n=-1<"xs".indexOf(t);n&&!o.dropDown?o.dropDown=new Ce(o.wcNode):!n&&o.dropDown&&(o.dropDown.destroy(),delete o.dropDown)}),this.unClick=I(this.wcNode,"click",this.options.link,this.handleClick,{passive:!1})}},{key:"off",value:function(){this.unsubscribe&&this.unsubscribe(),this.unClick&&this.unClick()}},{key:"handleClick",value:function(e,t){var n=C(t,"index"),o=this.wcNode.items;E(this.wcNode,"axa-click",o[n],{bubbles:!0,cancelable:!0,composed:!0})||e.preventDefault()}},{key:"destroy",value:function(){this.off(),this.dropDown&&(this.dropDown.destroy(),delete this.dropDown),delete this.wcNode}}]),n}();Ae.DEFAULTS={link:"js-footer-links__link"};var Ee,Ne,Oe,Te=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,ie,ve))}return n(t,oe),i(t,null,[{key:"observedAttributes",get:function(){return["cols","items","title"]}}]),i(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e,t,n,o=this.cols;this.className=s(this.initialClassName,"m-footer-links",((t="m-footer-links--cols-"+(n=o))in(e={"m-footer-links--cols":o})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}},{key:"didRenderCallback",value:function(){this.footerLinks&&this.footerLinks.destroy(),this.footerLinks=new Ae(this)}},{key:"disconnectedCallback",value:function(){this.footerLinks&&(this.footerLinks.destroy(),delete this.footerLinks)}}]),t}();return Te.tagName="axa-footer-links",Ee=function(){window.customElements.define(Te.tagName,Te)},Ne=0,Oe=function(){if(0===Ne)try{Ee.apply(void 0,arguments),Ne+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Oe,!1),document.addEventListener("WebComponentsReady",Oe,!1),Te}();
