!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},d=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var a=void 0===r?"undefined":t(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(o.apply(null,r));else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}(e={exports:{}},e.exports),e.exports),h="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-mobile-navigation {\n  display: block; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative;\n  overflow: hidden; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(110%, 0, 0);\n          transform: translate3d(110%, 0, 0); }\n\n.is-header-mobile-navigation-nav-open > .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -7.5px;\n  pointer-events: none; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",f=/\n[\s]+$/,v=/^\n[\s]+/,b=/[\s]+$/,m=/^[\s]+/,_=/[\n\s]+/g,y=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],g=["code","pre","textarea"],k=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var d=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,d&&"#text"===d.nodeName?d.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),d=c),s===l-1&&(a=!1,-1===y.indexOf(r)&&-1===g.indexOf(r)?""===(o=d.nodeValue.replace(v,"").replace(b,"").replace(f,"").replace(_," "))?t.removeChild(d):d.nodeValue=o:-1===g.indexOf(r)&&(i=0===s?"":" ",o=d.nodeValue.replace(v,i).replace(m," ").replace(b,"").replace(f,"").replace(_," "),d.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===y.indexOf(r)&&-1===g.indexOf(r)?""===(o=d.nodeValue.replace(v,"").replace(f,"").replace(_," "))?t.removeChild(d):d.nodeValue=o:-1===g.indexOf(r)&&(o=d.nodeValue.replace(m," ").replace(v,"").replace(f,"").replace(_," "),d.nodeValue=o));var u=c.nodeName;u&&(r=u.toLowerCase()),t.appendChild(c)}}}};function x(e){var t,n,o,i,r=e.name,a=e.url,s=void 0===a?"":a,l=e.isActive,c=e.items,d=!!c,u={"is-header-mobile-navigation-active":l},h=p("m-header-mobile-navigation__category","js-header-mobile-navigation__category",u),f=p("m-header-mobile-navigation__list-link","js-header-mobile-navigation__list-link","js-header-mobile-close",u);return(t=document.createElement("li")).setAttribute("class","m-header-mobile-navigation__list-item"),k(t,["\n      ",d?[(o=document.createElement("button"),o.setAttribute("type","button"),o.setAttribute("class",""+String(h)),k(o,["\n          ",r,"\n          ",(n=document.createElement("axa-icon"),n.setAttribute("icon","angle-bracket-down"),n.setAttribute("classes","m-header-mobile-navigation__icon-next"),n),"\n        "]),o),C(c,e)]:(i=document.createElement("a"),i.setAttribute("href",""+String(s)),i.setAttribute("class",""+String(f)),k(i,[r]),i),"\n    "]),t}function C(e,t){var n,o,r,a;return(o=document.createElement("div")).setAttribute("class",""+String(p("m-header-mobile-navigation__nav",{"js-header-mobile-navigation__nav":!t}))),k(o,["\n      ",t&&(a=document.createElement("button"),a.setAttribute("type","button"),a.setAttribute("class","m-header-mobile-navigation__back js-header-mobile-navigation__back"),k(a,["\n          ",(r=document.createElement("axa-icon"),r.setAttribute("icon","angle-bracket-down"),r.setAttribute("classes","m-header-mobile-navigation__icon-back"),r),"\n          ",t.name,"\n        "]),a),"\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-mobile-navigation__list"),k(n,["\n        ",t&&x(i({},t,{name:"index page",items:null})),"\n        ",Array.isArray(e)&&e.map(x),"\n      "]),n),"\n    "]),o}var O=function(e){return C(e.items)},w={},A=function(e){return e in w||(w[e]=0),++w[e]},N=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function E(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new N(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var j=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),P=/^\s+|\s{2,}|\s+$/g;function T(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function S(e,t){var n=t.className;return t.hasClass||e.push(n),e}function R(e){for(var t=e.className,n=!1,o=!0,i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];var s=r.map(function(e){var i=T(e).test(t);i?n=!0:o=!1;return{className:e,hasClass:i}});return!(!o&&!n)&&s}function M(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=R.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(D,[])),r){var a=e.className;e.className=r.reduce(L,a)}}}function D(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function L(e,t){var n=T(t,"g");return e.replace(n," ").replace(P," ")}var U=/\s+/,V={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function F(e,n,o,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,l=r.passive,c=void 0===l||l;if(V[n]&&(n=V[n]),!e||!n)return null;var d=void 0===o?"undefined":t(o),u=o&&"string"===d;if("function"===d){if(i){var p=i;s=p.capture,c=p.passive}i=o}for(var h=j?{capture:s,passive:c}:s,f=u?function(t){var n=t.target;for(;!R(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return i(t,n)}:i,v=n.split(U),b=v.length,m=0;m<b;++m)e.addEventListener(v[m],f,h);return function t(){for(var n=0;n<b;++n)e.removeEventListener(v[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,s=n.maxWait,l=void 0!==s&&s,c=void 0,d=void 0,p=void 0,h=void 0,f=!1,v=t!==l,b=!1!==l;function m(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return c=o,v&&(d&&clearTimeout(d),d=setTimeout(_,t)),b&&!p&&(p=setTimeout(y,l)),i&&!f&&(f=!0,h=e.apply(void 0,u(c))),h}return m.flush=function(){(d||p)&&(h=e.apply(void 0,u(c)));return k(),h},m.cancel=k,m;function _(){p&&clearTimeout(p),g()}function y(){d&&clearTimeout(d),g()}function g(){a&&(h=e.apply(void 0,u(c))),d=null,p=null,f=!1}function k(){d&&(clearTimeout(d),d=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var z=window.__subscriptions;function B(e,t){var n=F(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);z[e]||(z[e]={count:0});var o,i=z[e];return i.count++,i.onsubscribe||(i.onsubscribe=I((o=e,function(){E(document,"pubsub/onsubscribe",o),E(document,"pubsub/onsubscribe/"+o,o),z[o]&&delete z[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete z[e]}}F(document,"pubsub/onsubscribe",function(e){var t=e.detail;z[t]||(z[t]={count:0});var n=z[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=d(e,3),n=t[0],o=t[1],i=t[2];E(i,n,o)}),delete n.queue)});var H,q=function(e,t){return e===t},W=((H=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(){return e.apply(void 0,[].concat(n,o))?H.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,o){var i;n(this,t);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+o.nodeName+"#"+o._id+" and evaluates to -> "+o[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];var d=l(this,(i=t.__proto__||Object.getPrototypeOf(t)).call.apply(i,[this,r].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(d,t),d.name="PropertyExistsException",d}return a(t,e),t}(Error)),$=/[A-Z]/g;function X(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var K=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function G(e,t){var n=e;if(e&&t!==e){if(K.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var Z=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,J=/[-_]+/g;function Q(e){return e.replace(Z,Y)}function Y(e,t){return 0==+e||J.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var ee=["title","checked","disabled"],te=[];var ne=1,oe=3,ie=8;function re(e,t){var n=e.nodeType,o=e.nodeName;n===ne&&function(e,t){for(var n=t.attributes,o=e.attributes,i=null,r=null,a=null,s=null,l=o.length-1;l>=0;--l)if(s=o[l],a=s.name,i=s.namespaceURI,r=s.value,i){var c=s.localName;t.getAttributeNS(i,c||a)!==r&&t.setAttributeNS(i,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var d=n.length-1;d>=0;--d)!1!==(s=n[d]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==oe&&n!==ie||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ae(e,t,"checked"),ae(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ae(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ae(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var se=3;function le(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(re(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ce(o,n))(i=le(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(ce(t.childNodes[l],o)){r=t.childNodes[l];break}r?((i=le(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=le(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ce(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===se&&e.nodeValue===t.nodeValue)}var de=function(e){function t(e){var o;n(this,t);for(var i="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var c=l(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return a(t,e),t}(Error),ue=!!document.createDocumentFragment().children;function pe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(pe.prototype,HTMLElement.prototype),Object.setPrototypeOf(pe,HTMLElement);var he=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function i(){var e,t,o;n(this,i);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=l(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=B("context/available",o._makeContextReady)},l(o,t)}return a(i,e),o(i,[{key:"connectedCallback",value:function(){r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"disconnectedCallback",this)&&r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;z[e]||(z[e]={count:0,queue:[]});var o=z[e].queue;Array.isArray(o)?o.push([e,t,n]):E(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),i}()},function(e){return function(t){function i(){return n(this,i),l(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return a(i,e),o(i,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}}]),i}()},function(e){return function(t){function i(e){n(this,i);var t=l(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));t._reduceProps=function(e,n){var o=e.props,r=e.shouldUpdate,a=t._hasKeys[n];if(-1===ee.indexOf(n)&&a)throw new W(n,t);var s="_"+n,l=o[n],d=t[s];return r||t.shouldUpdateCallback(l,d)?(t[s]=l,t._props[n]=l,a&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,l,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=I(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=Q(e),i=o in t;if(-1===ee.indexOf(o)&&i)throw new W(o,t);t._hasKeys[o]=i,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,i&&c(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(i,e),o(i,[{key:"connectedCallback",value:function(){var e=this;if(r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=Q(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=G(n,t)}(e,t),r=e._hasKeys[n];e._props[n]=o,r&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[Q(e)]=G(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace($,X))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),i}()},function(e){return function(i){function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=s(e,["template"]);n(this,c);var i=l(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,o));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return a(c,e),o(c,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var o=this._template;try{if(n){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ue||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new de(this);l.appendChild(s)}if(n)r(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,l);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(l),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");le(n,e)}(this,d),function(){for(var e=void 0;e=te.pop();)delete e.isSameNode;te=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(e){return function(t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=s(e,["styles"]);n(this,i);var a=l(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return a._styles=o,a}return a(i,e),o(i,[{key:"connectedCallback",value:function(){r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function t(e){n(this,t);var o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o._id=A(o.nodeName),o}return a(t,pe),o(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),fe={},ve=function(e){function t(){var e,o,i;n(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return o=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i._appendStyles=function(){t.appendGlobalStyles(i._styles,i.nodeName)},l(i,o)}return a(t,he),o(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he.uuidv4();if(e&&!fe[t]){var n=document.createElement("style"),o=document.createTextNode(e);fe[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var be=function(){function e(t,o){var r=this;n(this,e),this.open=function(){r.isOpen=!0},this.close=function(){r.isOpen=!1},this.fadeFinish=function(){if(!r.isOpen&&r.opened)for(var e=r.opened.pop();e;){M(e.parentNode,r.options.isSubMenuOpenClass),e=r.opened.pop()}},this.handleCategoryClick=function(e,t){r.options.preventDefault||e.preventDefault();var n=t.parentNode;if(n.lastChild!==t){var o=r.wcNode.parentNode.parentNode,i=o.scrollTop;!function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=R.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(S,[])),r&&(e.className+=" "+r.join(" "))}}(n,r.options.isSubMenuOpenClass),o.scrollTop=0,r.opened.push({parentNode:n,scrollTop:i})}},this.handleBackClick=function(e){r.options.preventDefault||e.preventDefault();var t=r.opened.pop(),n=t.parentNode,o=t.scrollTop,i=r.wcNode.parentNode.parentNode;M(n,r.options.isSubMenuOpenClass),i.scrollTop=o},this.wcNode=t,this.options=i({},e.DEFAULTS,o),this.isOpen=!1,this.opened=[],this.init()}return o(e,[{key:"init",value:function(){this.nav=this.wcNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=F(this.nav,"click",this.options.category,this.handleCategoryClick,{passive:!1}),this.unBackClick=F(this.nav,"click",this.options.back,this.handleBackClick,{passive:!1})}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=B("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=B("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=B("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"destroy",value:function(){this.off(),delete this.wcNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();be.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var me,_e,ye=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:h,template:O}));return e.consumeContext("axa-header"),e}return a(t,ve),o(t,null,[{key:"observedAttributes",get:function(){return["items","relative"]}}]),o(t,[{key:"contextCallback",value:function(e){this.interaction&&(this.interaction.contextNode=e)}},{key:"willRenderCallback",value:function(){var e=this.gpu,t=this.relative;this.className=p(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--gpu":e,"m-header-mobile-navigation--relative":t})}},{key:"didRenderCallback",value:function(){var e=this.contextNode;this.interaction&&this.interaction.destroy(),this.interaction=new be(this),e&&this.contextCallback(e)}},{key:"disconnectedCallback",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return ye.tagName="axa-header-mobile-navigation",me=ye.tagName,_e=ye,customElements.get(me)||customElements.define(me,_e),ye});
