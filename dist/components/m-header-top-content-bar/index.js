var StyleGuideWebComponent=function(){"use strict";var n=".m-header-top-content-bar {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff; }\n  .m-header-mobile .m-header-top-content-bar {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar {\n      padding-top: 5px;\n      padding-bottom: 5px; } }\n\n.m-header-top-content-bar,\n.m-header-top-content-bar--corporate {\n  background: #027180; }\n\n.m-header-top-content-bar--commercial {\n  background: #00005b; }\n\n.m-header-top-content-bar--warning {\n  background: #c91432; }\n\n.m-header-top-content-bar__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-top-content-bar__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-top-content-bar__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-top-content-bar__box {\n      max-width: 1140px; } }\n  .m-header-mobile .m-header-top-content-bar__box {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; } }\n\n.m-header-top-content-bar__text {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin-right: 24px; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__text {\n      font-size: 13px;\n      line-height: 1.38; } }\n\n.m-header-top-content-bar__button {\n  margin-top: 10px; }\n  .m-header-mobile .m-header-top-content-bar__button {\n    margin-top: 10px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__button {\n      margin-top: 0; } }\n",p=/\n[\s]+$/,h=/^\n[\s]+/,f=/[\s]+$/,v=/^[\s]+/,m=/[\n\s]+/g,b=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],y=["code","pre","textarea"],r=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var d=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,d&&"#text"===d.nodeName?d.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),d=c),l===s-1&&(a=!1,-1===b.indexOf(i)&&-1===y.indexOf(i)?""===(r=d.nodeValue.replace(h,"").replace(f,"").replace(p,"").replace(m," "))?t.removeChild(d):d.nodeValue=r:-1===y.indexOf(i)&&(o=0===l?"":" ",r=d.nodeValue.replace(h,o).replace(v," ").replace(f,"").replace(p,"").replace(m," "),d.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===b.indexOf(i)&&-1===y.indexOf(i)?""===(r=d.nodeValue.replace(h,"").replace(p,"").replace(m," "))?t.removeChild(d):d.nodeValue=r:-1===y.indexOf(i)&&(r=d.nodeValue.replace(v," ").replace(h,"").replace(p,"").replace(m," "),d.nodeValue=r));var u=c.nodeName;u&&(i=u.toLowerCase()),t.appendChild(c)}}}};function o(e,t){var n;return(n=document.createElement("div")).setAttribute("class","m-header-top-content-bar__box"),r(n,[t]),n}var i=1,a=3,l=8;function s(e,t){var n=e.nodeType,r=e.nodeName;n===i&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,l=null,s=r.length-1;0<=s;--s)if(l=r[s],a=l.name,o=l.namespaceURI,i=l.value,o){var c=l.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var d=n.length-1;0<=d;--d)!1!==(l=n[d]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==a&&n!==l||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;c(e,t,"checked"),c(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?c(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function c(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},C=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},w=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},k=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},O=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},A=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},N=3;function E(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(s(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=t.childNodes[l],r=e.childNodes[l-a],n||r;l++)if(r)if(n)if(T(r,n))(o=E(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var s=l;s<t.childNodes.length;s++)if(T(t.childNodes[s],r)){i=t.childNodes[s];break}i?((o=E(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=E(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),l--}(e,t),t):null:e}function T(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===N&&e.nodeValue===t.nodeValue)}var P=[];var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function S(t,n){var e=t;if(t&&n!==t){if(j.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var R=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function M(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new R(t,x({},r,{detail:n}));return e.dispatchEvent(o)}var L=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function V(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var l=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&l}var D=/\s+/,U={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function z(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,l=t.passive,s=void 0===l||l;if(U[e]&&(e=U[e]),!n||!e)return null;var c=void 0===r?"undefined":_(r),d=r&&"string"===c;if("function"===c){if(o){var u=o;a=u.capture,s=u.passive}o=r}for(var p=L?{capture:a,passive:s}:a,h=d?function(e){var t=e.target;for(;!V(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,f=e.split(D),v=f.length,m=0;m<v;++m)n.addEventListener(f[m],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function F(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,l=e.maxWait,s=void 0!==l&&l,c=void 0,d=void 0,u=void 0,p=void 0,h=!1,f=o!==s,v=!1!==s;function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(d&&clearTimeout(d),d=setTimeout(b,o)),v&&!u&&(u=setTimeout(y,s)),i&&!h&&(h=!0,p=r.apply(void 0,A(c))),p}return m.flush=function(){(d||u)&&(p=r.apply(void 0,A(c)));return x(),p},m.cancel=x,m;function b(){u&&clearTimeout(u),_()}function y(){d&&clearTimeout(d),_()}function _(){a&&(p=r.apply(void 0,A(c))),u=d=null,h=!1}function x(){d&&(clearTimeout(d),d=null),u&&(clearTimeout(u),u=null),c=void 0,h=!1}}var I={};function W(e,t){var n=z(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);I[e]||(I[e]={count:0});var r,o=I[e];return o.count++,o.onsubscribe||(o.onsubscribe=F((r=e,function(){M(document,"pubsub/onsubscribe",r),M(document,"pubsub/onsubscribe/"+r,r),I[r]&&delete I[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete I[e]}}z(document,"pubsub/onsubscribe",function(e){var t=e.detail;I[t]||(I[t]={count:0});var n=I[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=O(e,3),n=t[0],r=t[1],o=t[2];M(o,n,r)}),delete n.queue)});var t=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,H=/[-_]+/g;function q(e){return e.replace(t,$)}function $(e,t){return 0==+e||H.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var K=/[A-Z]/g;function G(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var e=function(e,t){return e===t},B=function(e){function s(e,t){var n;d(this,s);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var l=w(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,s),l.name="PropertyExistsException",l}return C(s,e),s}(Error);function Z(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Z.prototype,HTMLElement.prototype),Object.setPrototypeOf(Z,HTMLElement);var J,X,Q,Y,ee="throwed",te=["title","checked","disabled"],ne={},re=function(e){return e in ne||(ne[e]=0),++ne[e]},oe=((J=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?J.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];d(this,c);var s=w(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));s._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=s._hasKeys[t];if(-1===te.indexOf(t)&&o)throw new B(t,s);var i="_"+t,a=n[t],l=s[i];return r||s.shouldUpdateCallback(a,l)?(s[i]=a,s._props[t]=a,o&&k(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;s.contextNode&&(clearTimeout(s.timeoutId),s.timeoutId=setTimeout(function(){s.contextCallback(s.contextNode,e)},10)),s.unContextEnabled&&s.unContextEnabled(),s.unContextEnabled=W("context/enabled",s._makeContextReady)},s._initialise(e,t),s._id=re(s.nodeName),s._props={},s._hasKeys={},s.reRender=F(function(){return s.render()},50);var n=s.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,r=q(e),o=r in s;if(-1===te.indexOf(r)&&o)throw new B(r,s);s._hasKeys[r]=o,Object.defineProperty(s,r,n={get:function(){return this["_"+r]},set:function(e){var t="_"+r;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[r]=e,o&&k(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),s}return C(c,Z),u(c,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var o=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=q(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=S(n,t)}(o,e),r=o._hasKeys[t];o["_"+t]=n,o._props[t]=n,r&&k(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[q(e)]=S(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(K,G))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i){var l=new Error(ee);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+l.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),l}a.appendChild(i)}if(e)g(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");E(t,e)}(this,s),function(){for(var e=void 0;e=P.pop();)delete e.isSameNode;P=[]}(),this._isMorphing=!1}}catch(l){l.message!==ee&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+l+"\n\nStack Trace: "+l.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):g(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;I[e]||(I[e]={count:0,queue:[]});var r=I[e].queue;Array.isArray(r)?r.push([e,t,n]):M(n,e,t)}("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else k(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else k(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else k(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),c}()),ie={},ae=function(e){function t(){return d(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,oe),u(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:oe.uuidv4();if(e&&!ie[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),ie[e]=!0}}}]),t}(),le=function(e){function t(){return d(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o))}return C(t,ae),u(t,null,[{key:"observedAttributes",get:function(){return["type"]}}]),u(t,[{key:"willRenderCallback",value:function(){var e=this.type;this.className=this.initialClassName+" m-header-top-content-bar m-header-top-content-bar--"+e}}]),t}();return le.tagName="axa-header-top-content-bar",X=function(){window.customElements.define(le.tagName,le)},Q=0,Y=function(){if(0===Q)try{X.apply(void 0,arguments),Q+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Y,!1),document.addEventListener("WebComponentsReady",Y,!1),le}();
