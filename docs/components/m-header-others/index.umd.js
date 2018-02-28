!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function d(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));e.dispatchEvent(i)}var p=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function h(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var m=/\s+/,v={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function y(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,u=void 0===l||l;if(v[t]&&(t=v[t]),!e||!t)return null;var c=void 0===n?"undefined":r(n),f=n&&"string"===c;if("function"===c){if(o){var d=o;s=d.capture,u=d.passive}o=n}for(var y=p?{capture:s,passive:u}:s,g=f?function(t){var r=t.target;for(;!h(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,b=t.split(m),x=b.length,_=0;_<x;++_)e.addEventListener(b[_],g,y);return function t(){for(var n=0;n<x;++n)e.removeEventListener(b[n],g,y);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var g={};function b(e,t){var n=y(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);g[e]||(g[e]={count:0});var r,o=g[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,d=void 0,p=void 0,h=!1,m=t!==l,v=!1!==l;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,m&&(c&&clearTimeout(c),c=setTimeout(g,t)),v&&!d&&(d=setTimeout(b,l)),o&&!h&&(h=!0,p=e.apply(void 0,f(u))),p}return y.flush=function(){return(c||d)&&(p=e.apply(void 0,f(u))),_(),p},y.cancel=_,y;function g(){d&&clearTimeout(d),x()}function b(){c&&clearTimeout(c),x()}function x(){a&&(p=e.apply(void 0,f(u))),c=null,d=null,h=!1}function _(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,h=!1}}((r=e,function(){d(document,"pubsub/onsubscribe",r),d(document,"pubsub/onsubscribe/"+r,r),g[r]&&delete g[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete g[e]}}function x(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}y(document,"pubsub/onsubscribe",function(e){var t=e.detail;g[t]||(g[t]={count:0});var n=g[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];d(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(x.prototype,HTMLElement.prototype),Object.setPrototypeOf(x,HTMLElement);var _={},w="throwed",k=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,t),r}return s(n,x),i(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i];n[a.name]=t(a)}return n}(this),r);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error(w);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){i.message!==w&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;g[e]||(g[e]={count:0,queue:[]});var r=g[e].queue;Array.isArray(r)?r.push([e,t,n]):d(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=b("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),C=(function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,k),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,k),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.uuidv4();if(e&&!_[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),_[e]=!0}}}]),t}()),E=".m-header-others {\n  padding-right: 15px;\n  padding-left: 15px;\n  display: block; }\n\n.m-header-others__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-header-others__list-item {\n  display: block;\n  border-right: 1px solid #ccc; }\n  .m-header-others__list-item:first-child {\n    border-left: 1px solid #ccc; }\n\n.m-header-others__list-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  white-space: nowrap;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-header-others__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-others__list-link.is-header-others-active, .m-header-others__list-link:hover, .m-header-others__list-link:active, .m-header-others__list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n  .m-header-others__list-link.is-header-others-active {\n    margin-bottom: -2px;\n    background: #fff;\n    border-bottom: 2px solid #fff; }\n";var O=function(e){return function(t,n,r){for(var o in n)o in A&&(n[A[o]]=n[o],delete n[o]);return e(t,n,r)}},A={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var T=1,S=2,N=3,L=4,j=5,P=6,M=7,F=8,R=9,D=10,z=11,G=12,$=13;var q=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var V,B=/\n[\s]+$/,W=/^\n[\s]+/,I=/[\s]+$/,H=/^[\s]+/,J=/[\n\s]+/g,Z=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],K=["code","pre"],Q=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===Z.indexOf(i)&&-1===K.indexOf(i)?""===(r=c.nodeValue.replace(W,"").replace(I,"").replace(B,"").replace(J," "))?t.removeChild(c):c.nodeValue=r:-1===K.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(W,o).replace(H," ").replace(I,"").replace(B,"").replace(J," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===Z.indexOf(i)&&-1===K.indexOf(i)?""===(r=c.nodeValue.replace(W,"").replace(B,"").replace(J," "))?t.removeChild(c):c.nodeValue=r:-1===K.indexOf(i)&&(r=c.nodeValue.replace(H," ").replace(W,"").replace(B,"").replace(J," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},U=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,r,s){var l;-1!==a.indexOf(e)&&(r.namespace=t);var u=!1;if(r.namespace&&(u=r.namespace,delete r.namespace),u)l=document.createElementNS(u,e);else{if(e===i)return document.createComment(r.comment);l=document.createElement(e)}for(var c in r)if(r.hasOwnProperty(c)){var f=c.toLowerCase(),d=r[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?l[c]=d:u?"xlink:href"===c?l.setAttributeNS(n,c,d):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,d):l.setAttribute(c,d)}return Q(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=O(e)),function(i){for(var a=T,s="",l=arguments.length,u=[],c=0;c<i.length;c++)if(c<l-1){var f=arguments[c+1],d=C(i[c]),p=a;p===D&&(p=F),p===R&&(p=F),p===M&&(p=F),p===L&&(p=j),d.push([0,p,f]),u.push.apply(u,d)}else u.push.apply(u,C(i[c]));var h,m=[null,{},[]],v=[[m,-1]];for(c=0;c<u.length;c++){var y=v[v.length-1][0],g=(d=u[c])[0];if(g===S&&/^\//.test(d[1])){var b=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(g===S){var x=[d[1],{},[]];y[2].push(x),v.push([x,y[2].length-1])}else if(g===j||0===g&&d[1]===j){for(var _,w="";c<u.length;c++)if(u[c][0]===j)w=n(w,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==j)break;if("object"!==r(u[c][2])||w)w=n(w,u[c][2]);else for(_ in u[c][2])u[c][2].hasOwnProperty(_)&&!y[1][_]&&(y[1][_]=u[c][2][_])}u[c][0]===z&&c++;for(var k=c;c<u.length;c++)if(u[c][0]===F||u[c][0]===j)y[1][w]?""===u[c][1]||(y[1][w]=n(y[1][w],u[c][1])):y[1][w]=o(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==F&&u[c][1]!==j){!w.length||y[1][w]||c!==k||u[c][0]!==N&&u[c][0]!==G||(y[1][w]=w.toLowerCase()),u[c][0]===N&&c--;break}y[1][w]?""===u[c][2]||(y[1][w]=n(y[1][w],u[c][2])):y[1][w]=o(u[c][2])}}else if(g===j)y[1][d[1]]=!0;else if(0===g&&d[1]===j)y[1][d[2]]=!0;else if(g===N)h=y[0],q.test(h)&&v.length&&(b=v[v.length-1][1],v.pop(),v[v.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===g&&d[1]===T)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=n("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(g===T)y[2].push(d[1]);else if(g!==z&&g!==G)throw new Error("unhandled: "+g)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function C(e){var n,r=[];a===M&&(a=L);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===T&&"<"===i?(s.length&&r.push([T,s]),s="",a=S):">"===i&&(n=a)!==R&&n!==D&&a!==$?(a===S?r.push([S,s]):a===j?r.push([j,s]):a===F&&s.length&&r.push([F,s]),r.push([N]),s="",a=T):a===$&&/-$/.test(s)&&"-"===i?(t.comments&&r.push([F,s.substr(0,s.length-1)],[N]),s="",a=T):a===S&&/^!--$/.test(s)?(t.comments&&r.push([S,s],[j,"comment"],[z]),s=i,a=$):a===T||a===$?s+=i:a===S&&/\s/.test(i)?(r.push([S,s]),s="",a=L):a===S?s+=i:a===L&&/[^\s"'=/]/.test(i)?(a=j,s=i):a===L&&/\s/.test(i)?(s.length&&r.push([j,s]),r.push([G])):a===j&&/\s/.test(i)?(r.push([j,s]),s="",a=P):a===j&&"="===i?(r.push([j,s],[z]),s="",a=M):a===j?s+=i:a!==P&&a!==L||"="!==i?a!==P&&a!==L||/\s/.test(i)?a===M&&'"'===i?a=D:a===M&&"'"===i?a=R:a===D&&'"'===i?(r.push([F,s],[G]),s="",a=L):a===R&&"'"===i?(r.push([F,s],[G]),s="",a=L):a!==M||/\s/.test(i)?a===F&&/\s/.test(i)?(r.push([F,s],[G]),s="",a=L):a!==F&&a!==R&&a!==D||(s+=i):(a=F,o--):(r.push([G]),/[\w-]/.test(i)?(s+=i,a=j):a=L):(r.push([z]),a=M)}return a===T&&s.length?(r.push([T,s]),s=""):a===F&&s.length?(r.push([F,s]),s=""):a===D&&s.length?(r.push([F,s]),s=""):a===R&&s.length?(r.push([F,s]),s=""):a===j&&(r.push([j,s]),s=""),r}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(V={exports:{}},V.exports),V.exports);U.createElement;var X,Y,ee,te=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,r=n.childNodes,Array.isArray(r)?r:[].slice.call(r)):((t=new String(e)).__encoded=!0,t);var t,n,r},ne=c(['\n  <ul class="m-header-others__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-others__list">\n    ',"\n  </ul>\n"]),re=c(['\n      <li class="m-header-others__list-item">\n        <a href="','" class="m-header-others__list-link','">',"</a>\n      </li>\n    "],['\n      <li class="m-header-others__list-item">\n        <a href="','" class="m-header-others__list-link','">',"</a>\n      </li>\n    "]),oe=function(e){var t=e.items;return U(ne,t&&t.map(function(e,t){var n=e.url,r=e.name;return U(re,n,0===t?" is-header-others-active":"",te(r))}))},ie=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,E,oe))}return s(t,C),i(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-others"}}]),t}();return X=function(){window.customElements.define("axa-header-others",ie)},Y=0,ee=function(){if(0===Y)try{X.apply(void 0,arguments),Y+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ee,!1),document.addEventListener("WebComponentsReady",ee,!1),ie});
