!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(i):void 0},n=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function e(t,n,i,o){var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var r=Object.getPrototypeOf(t);null!==r&&e(r,n,i,o)}else if("value"in a&&a.writable)a.value=i;else{var s=a.set;void 0!==s&&s.call(o,i)}return i},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=(function(e){!function(){var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=void 0===n?"undefined":b(n);if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===i)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(e={exports:{}},e.exports),e.exports),o="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-mobile-navigation {\n  display: block; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative;\n  overflow: hidden; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(110%, 0, 0);\n          transform: translate3d(110%, 0, 0); }\n\n.is-header-mobile-navigation-nav-open > .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -7.5px;\n  pointer-events: none; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",v=/\n[\s]+$/,m=/^\n[\s]+/,g=/[\s]+$/,_=/^[\s]+/,y=/[\n\s]+/g,k=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],C=["code","pre","textarea"],w=function e(t,n){if(Array.isArray(n))for(var i,o,a=t.nodeName.toLowerCase(),r=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var d=t.childNodes[t.childNodes.length-1];if("string"==typeof c)r=!0,d&&"#text"===d.nodeName?d.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),d=c),s===l-1&&(r=!1,-1===k.indexOf(a)&&-1===C.indexOf(a)?""===(i=d.nodeValue.replace(m,"").replace(g,"").replace(v,"").replace(y," "))?t.removeChild(d):d.nodeValue=i:-1===C.indexOf(a)&&(o=0===s?"":" ",i=d.nodeValue.replace(m,o).replace(_," ").replace(g,"").replace(v,"").replace(y," "),d.nodeValue=i));else if(c&&c.nodeType){r&&(r=!1,-1===k.indexOf(a)&&-1===C.indexOf(a)?""===(i=d.nodeValue.replace(m,"").replace(v,"").replace(y," "))?t.removeChild(d):d.nodeValue=i:-1===C.indexOf(a)&&(i=d.nodeValue.replace(_," ").replace(m,"").replace(v,"").replace(y," "),d.nodeValue=i));var u=c.nodeName;u&&(a=u.toLowerCase()),t.appendChild(c)}}}};function s(e){var t,n,i,o,a=e.name,r=e.url,s=void 0===r?"":r,l=e.isActive,c=e.items,d=!!c,u={"is-header-mobile-navigation-active":l},h=f("m-header-mobile-navigation__category","js-header-mobile-navigation__category",u),p=f("m-header-mobile-navigation__list-link","js-header-mobile-navigation__list-link","js-header-mobile-close",u);return(t=document.createElement("li")).setAttribute("class","m-header-mobile-navigation__list-item"),w(t,["\n      ",d?[(i=document.createElement("button"),i.setAttribute("type","button"),i.setAttribute("class",""+String(h)),w(i,["\n          ",a,"\n          ",(n=document.createElement("axa-icon"),n.setAttribute("icon","angle-bracket-down"),n.setAttribute("classes","m-header-mobile-navigation__icon-next"),n),"\n        "]),i),N(c,e)]:(o=document.createElement("a"),o.setAttribute("href",""+String(s)),o.setAttribute("class",""+String(p)),w(o,[a]),o),"\n    "]),t}function N(e,t){var n,i,o,a;return(i=document.createElement("div")).setAttribute("class",""+String(f("m-header-mobile-navigation__nav",{"js-header-mobile-navigation__nav":!t}))),w(i,["\n      ",t&&(a=document.createElement("button"),a.setAttribute("type","button"),a.setAttribute("class","m-header-mobile-navigation__back js-header-mobile-navigation__back"),w(a,["\n          ",(o=document.createElement("axa-icon"),o.setAttribute("icon","angle-bracket-down"),o.setAttribute("classes","m-header-mobile-navigation__icon-back"),o),"\n          ",t.name,"\n        "]),a),"\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-mobile-navigation__list"),w(n,["\n        ",t&&s(r({},t,{name:"index page",items:null})),"\n        ",Array.isArray(e)&&e.map(s),"\n      "]),n),"\n    "]),i}var l=function(e){return N(e.items)},c=1,O=3,A=8;function E(e,t){var n=e.nodeType,i=e.nodeName;n===c&&function(e,t){for(var n=t.attributes,i=e.attributes,o=null,a=null,r=null,s=null,l=i.length-1;0<=l;--l)if(s=i[l],r=s.name,o=s.namespaceURI,a=s.value,o){var c=s.localName;t.getAttributeNS(o,c||r)!==a&&t.setAttributeNS(o,r,a)}else t.hasAttribute(r)?t.getAttribute(r)!==a&&("null"===a||"undefined"===a?t.removeAttribute(r):t.setAttribute(r,a)):t.setAttribute(r,a);for(var d=n.length-1;0<=d;--d)!1!==(s=n[d]).specified&&(r=s.name,(o=s.namespaceURI)?(r=s.localName||r,e.hasAttributeNS(o,r)||t.removeAttributeNS(o,r)):e.hasAttributeNS(null,r)||t.removeAttribute(r))}(e,t),n!==O&&n!==A||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;T(e,t,"checked"),T(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?T(e,t,"selected"):"TEXTAREA"===i&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function T(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var S=3;function j(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(E(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,a=void 0,r=0,s=0;n=t.childNodes[s],i=e.childNodes[s-r],n||i;s++)if(i)if(n)if(P(i,n))(o=j(i,n))!==n&&(t.replaceChild(o,n),r++);else{a=null;for(var l=s;l<t.childNodes.length;l++)if(P(t.childNodes[l],i)){a=t.childNodes[l];break}a?((o=j(i,a))!==a&&r++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),r++):(o=j(i,n))!==n&&(t.replaceChild(o,n),r++)}else t.appendChild(i),r++;else t.removeChild(n),s--}(e,t),t):null:e}function P(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===S&&e.nodeValue===t.nodeValue)}var R=[];var M=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function L(t,n){var e=t;if(t&&n!==t){if(M.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var D=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,r=t.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,a,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function F(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new D(t,r({},i,{detail:n}));return e.dispatchEvent(o)}var U=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),V=/^\s+|\s{2,}|\s+$/g;function z(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function I(e,t){var n=t.className;return t.hasClass||e.push(n),e}function W(e){for(var n=e.className,i=!1,o=!0,t=arguments.length,a=Array(1<t?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var s=a.map(function(e){var t=z(e).test(n);t?i=!0:o=!1;return{className:e,hasClass:t}});return!(!o&&!i)&&s}function B(e){for(var t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=W.apply(void 0,[e].concat(n));if(!1!==o){var a=[].concat(n);if(Array.isArray(o)&&(a=o.reduce(q,[])),a){var r=e.className;e.className=a.reduce(H,r)}}}function q(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function H(e,t){var n=z(t,"g");return e.replace(n," ").replace(V," ")}var $=/\s+/,X={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,a=0;a<i;++a)if(void 0!==e[o=n[a]])return t[o];return""}()};function K(n,e,i,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},a=t.capture,r=void 0!==a&&a,s=t.passive,l=void 0===s||s;if(X[e]&&(e=X[e]),!n||!e)return null;var c=void 0===i?"undefined":b(i),d=i&&"string"===c;if("function"===c){if(o){var u=o;r=u.capture,l=u.passive}o=i}for(var h=U?{capture:r,passive:l}:r,p=d?function(e){var t=e.target;for(;!W(t,i)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,f=e.split($),v=f.length,m=0;m<v;++m)n.addEventListener(f[m],p,h);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],p,h);!function(e,t){if(!e)return;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var a=n[o];if(e[a]===t)return delete e[a]}}(this,e)}}function G(i){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,a=void 0!==t&&t,n=e.trailing,r=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,d=void 0,u=void 0,h=void 0,p=!1,f=o!==l,v=!1!==l;function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(d&&clearTimeout(d),d=setTimeout(b,o)),v&&!u&&(u=setTimeout(g,l)),a&&!p&&(p=!0,h=i.apply(void 0,x(c))),h}return m.flush=function(){(d||u)&&(h=i.apply(void 0,x(c)));return y(),h},m.cancel=y,m;function b(){u&&clearTimeout(u),_()}function g(){d&&clearTimeout(d),_()}function _(){r&&(h=i.apply(void 0,x(c))),u=d=null,p=!1}function y(){d&&(clearTimeout(d),d=null),u&&(clearTimeout(u),u=null),c=void 0,p=!1}}var Z={};function J(e,t){var n=K(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);Z[e]||(Z[e]={count:0});var i,o=Z[e];return o.count++,o.onsubscribe||(o.onsubscribe=G((i=e,function(){F(document,"pubsub/onsubscribe",i),F(document,"pubsub/onsubscribe/"+i,i),Z[i]&&delete Z[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete Z[e]}}K(document,"pubsub/onsubscribe",function(e){var t=e.detail;Z[t]||(Z[t]={count:0});var n=Z[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=a(e,3),n=t[0],i=t[1],o=t[2];F(o,n,i)}),delete n.queue)});var t=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Q=/[-_]+/g;function Y(e){return e.replace(t,ee)}function ee(e,t){return 0==+e||Q.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var te=/[A-Z]/g;function ne(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var ie=function(e,t){return e===t},oe=function(e){function l(e,t){var n;d(this,l);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,a=Array(2<o?o-2:0),r=2;r<o;r++)a[r-2]=arguments[r];var s=h(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,i].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return n(l,e),l}(Error);function ae(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ae.prototype,HTMLElement.prototype),Object.setPrototypeOf(ae,HTMLElement);var re,se="throwed",le=["title","checked","disabled"],ce={},de=function(e){return e in ce||(ce[e]=0),++ce[e]},ue=((re=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ie;return function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(i,t))?re.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];d(this,c);var l=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));l._reduceProps=function(e,t){var n=e.props,i=e.shouldUpdate,o=l._hasKeys[t];if(-1===le.indexOf(t)&&o)throw new oe(t,l);var a="_"+t,r=n[t],s=l[a];return i||l.shouldUpdateCallback(r,s)?(l[a]=r,l._props[t]=r,o&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,r,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;l.contextNode&&(clearTimeout(l.timeoutId),l.timeoutId=setTimeout(function(){l.contextCallback(l.contextNode,e)},10)),l.unContextEnabled&&l.unContextEnabled(),l.unContextEnabled=J("context/enabled",l._makeContextReady)},l._initialise(e,t),l._id=de(l.nodeName),l._props={},l._hasKeys={},l.reRender=G(function(){return l.render()},50);var n=l.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,i=Y(e),o=i in l;if(-1===le.indexOf(i)&&o)throw new oe(i,l);l._hasKeys[i]=o,Object.defineProperty(l,i,n={get:function(){return this["_"+i]},set:function(e){var t="_"+i;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[i]=e,o&&p(n.__proto__||Object.getPrototypeOf(n),i,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),l}return n(c,ae),i(c,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var o=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=Y(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=L(n,t)}(o,e),i=o._hasKeys[t];o["_"+t]=n,o._props[t]=n,i&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[Y(e)]=L(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(te,ne))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var i=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var a=t(this._props,this.childrenFragment),r=document.createDocumentFragment();if(Array.isArray(a))a.forEach(function(e){r.appendChild(e)});else if(a){if("string"==typeof a){var s=new Error(se);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}r.appendChild(a)}if(e)u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,r);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(r),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");j(t,e)}(this,l),function(){for(var e=void 0;e=R.pop();)delete e.isSameNode;R=[]}(),this._isMorphing=!1}}catch(s){s.message!==se&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;Z[e]||(Z[e]={count:0,queue:[]});var i=Z[e].queue;Array.isArray(i)?i.push([e,t,n]):F(n,e,t)}("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),c}()),he={},pe=function(e){function t(){return d(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,ue),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:ue.uuidv4();if(e&&!he[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),he[e]=!0}}}]),t}(),fe=function(){function n(e,t){var a=this;d(this,n),this.open=function(){a.isOpen=!0},this.close=function(){a.isOpen=!1},this.fadeFinish=function(){if(!a.isOpen)for(var e=a.opened.pop();e;){B(e.parentNode,a.options.isSubMenuOpenClass),e=a.opened.pop()}},this.handleCategoryClick=function(e,t){a.options.preventDefault||e.preventDefault();var n=t.parentNode;if(n.lastChild!==t){var i=a.wcNode.parentNode.parentNode,o=i.scrollTop;!function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=W.apply(void 0,[e].concat(n));if(!0!==o){var a=[].concat(n);Array.isArray(o)&&(a=o.reduce(I,[])),a&&(e.className+=" "+a.join(" "))}}(n,a.options.isSubMenuOpenClass),i.scrollTop=0,a.opened.push({parentNode:n,scrollTop:o})}},this.handleBackClick=function(e){a.options.preventDefault||e.preventDefault();var t=a.opened.pop(),n=t.parentNode,i=t.scrollTop,o=a.wcNode.parentNode.parentNode;B(n,a.options.isSubMenuOpenClass),o.scrollTop=i},this.wcNode=e,this.options=r({},n.DEFAULTS,t),this.isOpen=!1,this.opened=[],this.init()}return i(n,[{key:"init",value:function(){this.nav=this.wcNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=K(this.nav,"click",this.options.category,this.handleCategoryClick,{passive:!1}),this.unBackClick=K(this.nav,"click",this.options.back,this.handleBackClick,{passive:!1})}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=J("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=J("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=J("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"destroy",value:function(){this.off(),delete this.wcNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),n}();fe.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var ve,me,be,ge=function(e){function t(){d(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o,l));return e.selectContext("axa-header"),e}return n(t,pe),i(t,null,[{key:"observedAttributes",get:function(){return["items","relative"]}}]),i(t,[{key:"contextCallback",value:function(e){this.interaction&&(this.interaction.contextNode=e)}},{key:"willRenderCallback",value:function(){var e=this.gpu,t=this.relative;this.className=f(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--gpu":e,"m-header-mobile-navigation--relative":t})}},{key:"didRenderCallback",value:function(){var e=this.contextNode;this.interaction&&this.interaction.destroy(),this.interaction=new fe(this),e&&this.contextCallback(e)}},{key:"disconnectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return ge.tagName="axa-header-mobile-navigation",ve=function(){window.customElements.define(ge.tagName,ge)},me=0,be=function(){if(0===me)try{ve.apply(void 0,arguments),me+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",be,!1),document.addEventListener("WebComponentsReady",be,!1),ge});
