!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=".m-header-mobile-others {\n  display: block;\n  background: #fafafa; }\n\n.m-header-mobile-others__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-others__list-item {\n  display: block;\n  border-top: 1px solid #e5e5e5; }\n  .m-header-mobile-others__list-item:first-child {\n    border-top: none; }\n\n.m-header-mobile-others__link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  display: block;\n  padding: 20px 60px;\n  color: #999;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-mobile-others__link {\n      font-size: 16px; } }\n  .m-header-mobile-others__link.is-header-mobile-others-active, .m-header-mobile-others__link:hover, .m-header-mobile-others__link:active, .m-header-mobile-others__link:focus {\n    text-decoration: none;\n    color: #00008f; }\n",t=/\n[\s]+$/,n=/^\n[\s]+/,r=/[\s]+$/,o=/^[\s]+/,i=/[\n\s]+/g,a=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],s=["code","pre","textarea"],l=function e(l,u){if(Array.isArray(u))for(var c,d,p=l.nodeName.toLowerCase(),f=!1,h=0,v=u.length;h<v;h++){var y=u[h];if(Array.isArray(y))e(l,y);else{("number"==typeof y||"boolean"==typeof y||"function"==typeof y||y instanceof Date||y instanceof RegExp)&&(y=y.toString());var b=l.childNodes[l.childNodes.length-1];if("string"==typeof y)f=!0,b&&"#text"===b.nodeName?b.nodeValue+=y:(y=document.createTextNode(y),l.appendChild(y),b=y),h===v-1&&(f=!1,-1===a.indexOf(p)&&-1===s.indexOf(p)?""===(c=b.nodeValue.replace(n,"").replace(r,"").replace(t,"").replace(i," "))?l.removeChild(b):b.nodeValue=c:-1===s.indexOf(p)&&(d=0===h?"":" ",c=b.nodeValue.replace(n,d).replace(o," ").replace(r,"").replace(t,"").replace(i," "),b.nodeValue=c));else if(y&&y.nodeType){f&&(f=!1,-1===a.indexOf(p)&&-1===s.indexOf(p)?""===(c=b.nodeValue.replace(n,"").replace(t,"").replace(i," "))?l.removeChild(b):b.nodeValue=c:-1===s.indexOf(p)&&(c=b.nodeValue.replace(o," ").replace(n,"").replace(t,"").replace(i," "),b.nodeValue=c));var _=y.nodeName;_&&(p=_.toLowerCase()),l.appendChild(y)}}}};var u,c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},v=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},m=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},O=(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=void 0===o?"undefined":c(o);if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===i)for(var a in o)t.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}(u={exports:{}},u.exports),u.exports),x=function(e){var t,n=e.items;return(t=document.createElement("ul")).setAttribute("class","m-header-mobile-others__list"),l(t,["\n    ",Array.isArray(n)&&n.map(function(e){var t,n,r=e.name,o=e.url,i=void 0===o?"":o,a=e.isActive,s=void 0!==a&&a;return(n=document.createElement("li")).setAttribute("class","m-header-mobile-others__list-item"),l(n,["\n        ",(t=document.createElement("a"),t.setAttribute("href",""+String(i)),t.setAttribute("class",""+String(O("m-header-mobile-others__link","js-header-mobile-close",{"is-header-mobile-others-active":s}))),l(t,[r]),t),"\n      "]),n}),"\n  "]),t},C={},k=function(e){return e in C||(C[e]=0),++C[e]},A=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function w(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new A(t,f({},r,{detail:n}));return e.dispatchEvent(o)}var N=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function E(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var P=/\s+/,j={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function T(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.capture,a=void 0!==i&&i,s=o.passive,l=void 0===s||s;if(j[t]&&(t=j[t]),!e||!t)return null;var u=void 0===n?"undefined":c(n),d=n&&"string"===u;if("function"===u){if(r){var p=r;a=p.capture,l=p.passive}r=n}for(var f=N?{capture:a,passive:l}:a,h=d?function(t){var o=t.target;for(;!E(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(P),y=v.length,b=0;b<y;++b)e.addEventListener(v[b],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,d=void 0,p=void 0,f=!1,h=t!==l,v=!1!==l;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,h&&(c&&clearTimeout(c),c=setTimeout(b,t)),v&&!d&&(d=setTimeout(_,l)),o&&!f&&(f=!0,p=e.apply(void 0,g(u))),p}return y.flush=function(){(c||d)&&(p=e.apply(void 0,g(u)));return O(),p},y.cancel=O,y;function b(){d&&clearTimeout(d),m()}function _(){c&&clearTimeout(c),m()}function m(){a&&(p=e.apply(void 0,g(u))),c=null,d=null,f=!1}function O(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var R=window.__subscriptions;function M(e,t){var n=T(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);R[e]||(R[e]={count:0});var r,o=R[e];return o.count++,o.onsubscribe||(o.onsubscribe=S((r=e,function(){w(document,"pubsub/onsubscribe",r),w(document,"pubsub/onsubscribe/"+r,r),R[r]&&delete R[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete R[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;R[t]||(R[t]={count:0});var n=R[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=m(e,3),n=t[0],r=t[1],o=t[2];w(o,n,r)}),delete n.queue)});var L,D=function(e,t){return e===t},V=((L=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?L.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var r;d(this,t);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,a=Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s];var l=b(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return v(t,e),t}(Error)),U=/[A-Z]/g;function I(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var F=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function H(e,t){var n=e;if(e&&t!==e){if(F.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var W=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,q=/[-_]+/g;function z(e){return e.replace(W,$)}function $(e,t){return 0==+e||q.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var K=["title","checked","disabled"],G=[];var B=1,Z=3,J=8;function X(e,t){var n=e.nodeType,r=e.nodeName;n===B&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,l=r.length-1;l>=0;--l)if(s=r[l],a=s.name,o=s.namespaceURI,i=s.value,o){var u=s.localName;t.getAttributeNS(o,u||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(s=n[c]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==Z&&n!==J||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;Q(e,t,"checked"),Q(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?Q(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function Q(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Y=3;function ee(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(X(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(te(r,n))(o=ee(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(te(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=ee(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=ee(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function te(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Y&&e.nodeValue===t.nodeValue)}var ne=function(e){function t(e){var n;d(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=b(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="TemplateNoStringReturnException",s}return v(t,e),t}(Error),re=!!document.createDocumentFragment().children;function oe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(oe.prototype,HTMLElement.prototype),Object.setPrototypeOf(oe,HTMLElement);var ie=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;d(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=b(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=M("context/available",r._makeContextReady)},b(r,t)}return v(n,e),p(n,[{key:"connectedCallback",value:function(){h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;R[e]||(R[e]={count:0,queue:[]});var r=R[e].queue;Array.isArray(r)?r.push([e,t,n]):w(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return d(this,n),b(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return v(n,e),p(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else _(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else _(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else _(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){d(this,n);var t=b(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,r){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[r];if(-1===K.indexOf(r)&&a)throw new V(r,t);var s="_"+r,l=o[r],u=t[s];return i||t.shouldUpdateCallback(l,u)?(t[s]=l,t._props[r]=l,a&&_(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,l,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=S(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=z(e),o=r in t;if(-1===K.indexOf(r)&&o)throw new V(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&_(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return v(n,e),p(n,[{key:"connectedCallback",value:function(){var e=this;if(h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var r=z(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=H(n,t)}(e,t),i=e._hasKeys[r];e._props[r]=o,i&&_(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[z(e)]=H(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(U,I))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=y(e,["template"]);d(this,n);var o=b(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return v(n,e),p(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});re||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var a=r(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(a))a.forEach(function(e){s.appendChild(e)});else if(a){if("string"==typeof a)throw new ne(this);s.appendChild(a)}if(t)h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,s);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(s),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":c(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":c(t)))throw new Error("componentMorph: newTree should be an object");ee(t,e)}(this,l),function(){for(var e=void 0;e=G.pop();)delete e.isSameNode;G=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=y(e,["styles"]);d(this,n);var i=b(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return i._styles=r,i}return v(n,e),p(n,[{key:"connectedCallback",value:function(){h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){d(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=k(n.nodeName),n}return v(t,oe),p(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ae={},se=function(e){function t(){var e,n,r;d(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},b(r,n)}return v(t,ie),p(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ie.uuidv4();if(e&&!ae[t]){var n=document.createElement("style"),r=document.createTextNode(e);ae[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var le,ue,ce=function(t){function n(){return d(this,n),b(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,{styles:e,template:x}))}return v(n,se),p(n,null,[{key:"observedAttributes",get:function(){return["items"]}}]),p(n,[{key:"connectedCallback",value:function(){h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile-others"}}]),n}();return ce.tagName="axa-header-mobile-others",le=ce.tagName,ue=ce,customElements.get(le)||customElements.define(le,ue),ce});
