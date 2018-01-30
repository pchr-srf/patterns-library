var StyleGuideWebComponent=function(){"use strict";function e(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(m.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function t(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function n(e,t){for(var n=[],i=Object.keys(t),o=i.length,r=0;r<o;++r){var a=i[r];n.push(a+":"+t[a]+";")}e.style.cssText=n.join("")}function i(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function o(e,t){r(e,t)||(e.className+=" "+t)}function r(e,t){return i(t).test(e.className)}function a(e,t){if(r(e,t)){var n=i(t,"g");e.className=e.className.replace(n," ").replace(J," ")}}function s(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}return!1}function l(e,t,n,i){function o(){for(var t=0;t<f;++t)e.removeEventListener(c[t],u,a);s(this,o)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Q[t]&&(t=Q[t]),!e||!t)return null;var l=void 0===n?"undefined":Y(n);"function"===l&&(a=!!i,i=n);for(var u=n&&"string"===l?function(t){for(var o=t.target;!r(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return i(t,o)}:i,c=t.split(Z),f=c.length,h=0;h<f;++h)e.addEventListener(c[h],u,a);return o}function u(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new he(t,pe({},i,{detail:n}));e.dispatchEvent(o)}function c(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var v=".a-stroke,\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1px;\n  display: block;\n  width: 0;\n  height: 0;\n  background: #f07662;\n  -webkit-transition: height 0.2s ease;\n  transition: height 0.2s ease; }\n\n.a-stroke.is-stroke-enter {\n  height: 4px; }\n\n.a-stroke.is-stroke-move {\n  -webkit-transition: height 0.2s ease, left 0.2s ease, width 0.2s ease;\n  transition: height 0.2s ease, left 0.2s ease, width 0.2s ease; }\n\n.a-stroke.is-stroke-static {\n  left: 0 !important;\n  bottom: 1px; }\n\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  bottom: 1px;\n  width: 100%;\n  height: 4px;\n  content: ''; }\n  .is-stroke-interactive .m-header-navigation__list-link.is-header-navigation-active::after {\n    height: 0; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-open::after {\n  -webkit-transition-property: none;\n  transition-property: none;\n  -webkit-transition-duration: 0s;\n          transition-duration: 0s; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-move::after {\n  height: 4px; }\n\n.m-header-navigation {\n  display: block;\n  margin-left: auto; }\n  @media (max-width: 991px) {\n    .m-header-navigation {\n      display: none; } }\n\n.m-header-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-header-navigation__list-item {\n  display: block;\n  float: left;\n  margin: 0 8px; }\n\n.m-header-navigation__list-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 75px;\n  padding: 0 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle; }\n  @media (min-width: 576px) {\n    .m-header-navigation__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-navigation__list-link.is-header-navigation-active, .m-header-navigation__list-link:hover, .m-header-navigation__list-link:active, .m-header-navigation__list-link:focus {\n    color: #00005b;\n    text-decoration: none; }\n",m=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,y=function(e){return function(t,n,i){for(var o in n)o in g&&(n[g[o]]=n[o],delete n[o]);return e(t,n,i)}},g={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=1,k=2,C=3,w=4,x=5,O=6,E=7,N=8,j=9,T=10,S=11,A=12,P=13,L=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),M=/\n[\s]+$/,D=/^\n[\s]+/,F=/[\s]+$/,R=/^[\s]+/,z=/[\n\s]+/g,U=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],q=["code","pre"],I=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===U.indexOf(r)&&-1===q.indexOf(r)?""===(i=c.nodeValue.replace(D,"").replace(F,"").replace(M,"").replace(z," "))?t.removeChild(c):c.nodeValue=i:-1===q.indexOf(r)&&(o=0===s?"":" ",i=c.nodeValue.replace(D,o).replace(R," ").replace(F,"").replace(M,"").replace(z," "),c.nodeValue=i));else if(u&&u.nodeType){a&&(a=!1,-1===U.indexOf(r)&&-1===q.indexOf(r)?""===(i=c.nodeValue.replace(D,"").replace(M,"").replace(z," "))?t.removeChild(c):c.nodeValue=i:-1===q.indexOf(r)&&(i=c.nodeValue.replace(R," ").replace(D,"").replace(M,"").replace(z," "),c.nodeValue=i));var f=u.nodeName;f&&(r=f.toLowerCase()),t.appendChild(u)}}}},G=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,s){var l;-1!==a.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)l=document.createElementNS(u,e);else{if(e===r)return document.createComment(t.comment);l=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),h=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===h)h=f;else if("false"===h)continue;"on"===f.slice(0,2)?l[c]=h:u?"xlink:href"===c?l.setAttributeNS(i,c,h):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,h):l.setAttribute(c,h)}return I(l,s),l}var n="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":_(e))?e:i("",e)}t||(t={});var i=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=y(e)),function(o){function r(e){var n=[];a===E&&(a=w);for(var i=0;i<e.length;i++){var o=e.charAt(i);a===b&&"<"===o?(s.length&&n.push([b,s]),s="",a=k):">"!==o||function(e){return e===j||e===T}(a)||a===P?a===P&&/-$/.test(s)&&"-"===o?(t.comments&&n.push([N,s.substr(0,s.length-1)],[C]),s="",a=b):a===k&&/^!--$/.test(s)?(t.comments&&n.push([k,s],[x,"comment"],[S]),s=o,a=P):a===b||a===P?s+=o:a===k&&/\s/.test(o)?(n.push([k,s]),s="",a=w):a===k?s+=o:a===w&&/[^\s"'=/]/.test(o)?(a=x,s=o):a===w&&/\s/.test(o)?(s.length&&n.push([x,s]),n.push([A])):a===x&&/\s/.test(o)?(n.push([x,s]),s="",a=O):a===x&&"="===o?(n.push([x,s],[S]),s="",a=E):a===x?s+=o:a!==O&&a!==w||"="!==o?a!==O&&a!==w||/\s/.test(o)?a===E&&'"'===o?a=T:a===E&&"'"===o?a=j:a===T&&'"'===o?(n.push([N,s],[A]),s="",a=w):a===j&&"'"===o?(n.push([N,s],[A]),s="",a=w):a!==E||/\s/.test(o)?a===N&&/\s/.test(o)?(n.push([N,s],[A]),s="",a=w):a!==N&&a!==j&&a!==T||(s+=o):(a=N,i--):(n.push([A]),/[\w-]/.test(o)?(s+=o,a=x):a=w):(n.push([S]),a=E):(a===k?n.push([k,s]):a===x?n.push([x,s]):a===N&&s.length&&n.push([N,s]),n.push([C]),s="",a=b)}return a===b&&s.length?(n.push([b,s]),s=""):a===N&&s.length?(n.push([N,s]),s=""):a===T&&s.length?(n.push([N,s]),s=""):a===j&&s.length?(n.push([N,s]),s=""):a===x&&(n.push([x,s]),s=""),n}for(var a=b,s="",l=arguments.length,u=[],c=0;c<o.length;c++)if(c<l-1){var f=arguments[c+1],h=r(o[c]),p=a;p===T&&(p=N),p===j&&(p=N),p===E&&(p=N),p===w&&(p=x),h.push([0,p,f]),u.push.apply(u,h)}else u.push.apply(u,r(o[c]));for(var d=[null,{},[]],v=[[d,-1]],c=0;c<u.length;c++){var m=v[v.length-1][0],y=(h=u[c])[0];if(y===k&&/^\//.test(h[1]))R=v[v.length-1][1],v.length>1&&(v.pop(),v[v.length-1][0][2][R]=e(m[0],m[1],m[2].length?m[2]:void 0));else if(y===k){var g=[h[1],{},[]];m[2].push(g),v.push([g,m[2].length-1])}else if(y===x||0===y&&h[1]===x){for(var M,D="";c<u.length;c++)if(u[c][0]===x)D=i(D,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==x)break;if("object"!==_(u[c][2])||D)D=i(D,u[c][2]);else for(M in u[c][2])u[c][2].hasOwnProperty(M)&&!m[1][M]&&(m[1][M]=u[c][2][M])}u[c][0]===S&&c++;for(var F=c;c<u.length;c++)if(u[c][0]===N||u[c][0]===x)m[1][D]?""===u[c][1]||(m[1][D]=i(m[1][D],u[c][1])):m[1][D]=n(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==N&&u[c][1]!==x){!D.length||m[1][D]||c!==F||u[c][0]!==C&&u[c][0]!==A||(m[1][D]=D.toLowerCase()),u[c][0]===C&&c--;break}m[1][D]?""===u[c][2]||(m[1][D]=i(m[1][D],u[c][2])):m[1][D]=n(u[c][2])}}else if(y===x)m[1][h[1]]=!0;else if(0===y&&h[1]===x)m[1][h[2]]=!0;else if(y===C){if(function(e){return L.test(e)}(m[0])&&v.length){var R=v[v.length-1][1];v.pop(),v[v.length-1][0][2][R]=e(m[0],m[1],m[2].length?m[2]:void 0)}}else if(0===y&&h[1]===b)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=i("",h[2])),Array.isArray(h[2][0])?m[2].push.apply(m[2],h[2]):m[2].push(h[2]);else if(y===b)m[2].push(h[1]);else if(y!==S&&y!==A)throw new Error("unhandled: "+y)}if(d[2].length>1&&/^\s*$/.test(d[2][0])&&d[2].shift(),d[2].length>2||2===d[2].length&&/\S/.test(d[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(d[2][0])&&"string"==typeof d[2][0][0]&&Array.isArray(d[2][0][2])&&(d[2][0]=e(d[2][0][0],d[2][0][1],d[2][0][2])),d[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),V=function(e){return"undefined"!=typeof window?function(){var t=document.createElement("div");return t.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(t.childNodes)}():function(){var t=new String(e);return t.__encoded=!0,t}()},W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},$=t(['\n    <li class="m-header-navigation__list-item">\n      <a class="m-header-navigation__list-link '," "," ",'" href="','">',"</a>\n\n      ","\n    </li>\n"],['\n    <li class="m-header-navigation__list-item">\n      <a class="m-header-navigation__list-link '," "," ",'" href="','">',"</a>\n\n      ","\n    </li>\n"]),K=t(['<axa-header-sub-navigation indextitle="','" indexurl="',"\" items='","' flyout>\n        </axa-header-sub-navigation>"],['<axa-header-sub-navigation indextitle="','" indexurl="',"\" items='","' flyout>\n        </axa-header-sub-navigation>"]),B=t(['\n  <ul class="m-header-navigation__list js-header-navigation__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-navigation__list js-header-navigation__list">\n    ',"\n  </ul>\n"]),H=function(e){var t=e.items,n=e.simplemenu;return G(B,t&&t.map(function(e){return function(e){var t=e.url,n=e.name,i=e.items,o=e.classes,r=e.isActive,a=e.simplemenu;return G($,i||a?"js-header-navigation__list-link":"",r?"is-header-navigation-active":"",function(e){return e?" "+e:""}(o),t,V(n),i?G(K,n,t,JSON.stringify(i)):"")}(W({},e,{simplemenu:n}))}))},J=/^\s+|\s{2,}|\s+$/g,Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=/\s+/,Q={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(o=n[r],void 0!==e[o])return t[o];return null}()},X=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,ee=function(){var e=window.requestAnimationFrame||window[X+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),i=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+i)},i);return t=n+i,o}}return e}(),te=function(){var e=window.cancelAnimationFrame||window[X+"CancelAnimationFrame"]||window[X+"CancelRequestAnimationFrame"];return e=e?e.bind(window):function(e){clearTimeout(e)}}(),ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ie=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),oe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var a=t[r];o[a.toUpperCase()]=a}return o}("click","keyup","enter","move","leave","Escape","Esc"),re=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._rootNode=t,this._options=ne({},e.DEFAULTS,n),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return ie(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._rootNode.querySelector(e):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=l(this._container,oe.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=l(this._container,oe.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,t,n){function i(){a.removeEventListener(t,o,r),s(this,i)}function o(t){var i=t.target;if(!e.contains(i)&&e!==i)return n(t)}var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.ownerDocument.documentElement;return a.addEventListener(t,o,r),i}(this._container,oe.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=l(this._container.ownerDocument,oe.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this._options.useDefaultEvent||e.preventDefault();var n=!this._lastToggleNode,i=t!==this._lastToggleNode,o=!n&&!i;n?(this._notify(oe.ENTER,t),this._onInteractive()):i&&this._notify(oe.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,o&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===oe.ESCAPE||e.key===oe.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(oe.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),e}();re.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},se=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),le=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-sub-navigation__index-close",sameClickClose:!n.simpleMenu,useDefaultEvent:!!n.simpleMenu,outerClose:!n.simpleMenu,escapeClose:!n.simpleMenu}));return i.rootNode=e,i.options=ae({},t.DEFAULTS,n),i._isStatic=!1,i._handleResize=i._handleResize.bind(i),i._handleTransitionEnd=i._handleTransitionEnd.bind(i),i.init(),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,re),se(t,[{key:"init",value:function(){this.rootNode.style.position="relative",this._list=this.rootNode.querySelector(this.options.list),this._stroke=document.createElement("div"),this._stroke.className=this.options.strokeClass,this._list.appendChild(this._stroke)}},{key:"enter",value:function(e){var t=this,i=e.parentNode;this._node=e,this._parentNode=i,r(e,this.options.activeClass)&&(this._activeNode=e,o(e,this.options.activeOpenClass),o(e,this.options.activeMoveClass)),ee(function(){t._handleStaticState(!0,!0),o(t._list,t.options.interactiveClass),ee(function(){o(t._stroke,t.options.enterClass),n(t._stroke,{width:i.offsetWidth+"px",left:i.offsetLeft+"px"})})})}},{key:"move",value:function(e){var t=this,i=e.parentNode;this._node=e,this._parentNode=i,this._activeNode&&a(this._activeNode,this.options.activeMoveClass),ee(function(){t._handleStaticState(!1),ee(function(){o(t._stroke,t.options.moveClass),n(t._stroke,{width:i.offsetWidth+"px",left:i.offsetLeft+"px"}),t._onMoving()})})}},{key:"leave",value:function(){var e=this,t=this._node;this._offMoving(),this._activeNode&&(a(this._activeNode,this.options.activeMoveClass),a(this._activeNode,this.options.activeOpenClass),this._activeNode=null),r(t,this.options.activeClass)&&o(t,this.options.activeOpenClass),ee(function(){e._handleStaticState(!0),a(e._list,e.options.interactiveClass),ee(function(){a(e._stroke,e.options.moveClass),a(e._stroke,e.options.enterClass),a(t,e.options.activeOpenClass)}),e._parentNode=null,e._node=null})}},{key:"_onMoving",value:function(){this._offMoving(),this._unResize=l(function(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}(this.rootNode),"resize",this._handleResize),this._unTransitionEnd=l(this._stroke,"transitionend",this._handleTransitionEnd)}},{key:"_offMoving",value:function(){this._unResize&&this._unResize(),this._unTransitionEnd&&this._unTransitionEnd()}},{key:"_handleStaticState",value:function(e,t){(t||e!==this._isStatic)&&(this._isStatic=e,e?(this._node.appendChild(this._stroke),o(this._stroke,this.options.staticClass)):(this._list.appendChild(this._stroke),a(this._stroke,this.options.staticClass)))}},{key:"_handleResize",value:function(){var e=this;this.resizeTimeout&&(te(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=ee(function(){var t=e._parentNode,i=t.offsetWidth,o=t.offsetLeft;i&&o&&n(e._stroke,{width:i+"px",left:o+"px"})})}},{key:"_handleTransitionEnd",value:function(e){"left"===e.propertyName&&(this._offMoving(),this._handleStaticState(!0))}},{key:"destroy",value:function(){(function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this._stroke&&(this._stroke.parentNode.removeChild(this._stroke),delete this._stroke),delete this.rootNode,delete this.options}}]),t}();le.DEFAULTS={strokeClass:"a-stroke",list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",enterClass:"is-stroke-enter",moveClass:"is-stroke-move",staticClass:"is-stroke-static",interactiveClass:"is-stroke-interactive",activeClass:"is-header-navigation-active",activeOpenClass:"is-stroke-active-open",activeMoveClass:"is-stroke-active-move"};var ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),fe=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",useDefaultEvent:!("simpleMenu"in n)||!!n.simpleMenu,outerClose:!n.simpleMenu,escapeClose:!n.simpleMenu}));return i.rootNode=e,i.options=ue({},t.DEFAULTS,n),i.init(),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,re),ce(t,[{key:"init",value:function(){this.list=this.rootNode.querySelector(this.options.list)}},{key:"enter",value:function(e){o(e.parentNode,this.options.openClass)}},{key:"move",value:function(e,t){a(t.parentNode,this.options.openClass),o(e.parentNode,this.options.openClass)}},{key:"leave",value:function(e){a(e.parentNode,this.options.openClass)}},{key:"destroy",value:function(){(function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),t}();fe.DEFAULTS={list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",openClass:"is-header-sub-navigation-open"};var he=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,r,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},de=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ve={};l(document,"pubsub/onsubscribe",function(e){var t=e.detail;ve[t]||(ve[t]={count:0});var n=ve[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=de(e,3),n=t[0],i=t[1];u(t[2],n,i)}),delete n.queue)});var me=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();Object.setPrototypeOf(d.prototype,HTMLElement.prototype),Object.setPrototypeOf(d,HTMLElement);var ye={},ge=function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];f(this,n);var i=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,t),i}return p(n,d),me(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var t=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var i=document.createDocumentFragment();this.firstChild;)i.appendChild(this.firstChild);var o=n(function(t){if(!t.hasAttributes)return null;for(var n={},i=t.attributes,o=i.length,r=0;r<o;++r){var a=i[r];n[a.name]=e(a)}return n}(this),i);if(Array.isArray(o))o.forEach(function(e){t.appendChild(e)});else if(o){if("string"==typeof o){var r=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(o)}this._hasRendered=!0}catch(r){"throwed"!==r.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;ve[e]||(ve[e]={count:0,queue:[]});var i=ve[e].queue;Array.isArray(i)?i.push([e,t,n]):u(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(e,t){var n=l(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);ve[e]||(ve[e]={count:0});var i=ve[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];return p=i,g&&(d&&clearTimeout(d),d=setTimeout(function(){v&&clearTimeout(v),n()},o)),_&&!v&&(v=setTimeout(function(){d&&clearTimeout(d),n()},h)),s&&!y&&(y=!0,m=e.apply(void 0,c(p))),m}function n(){u&&(m=e.apply(void 0,c(p))),d=null,v=null,y=!1}function i(){d&&(clearTimeout(d),d=null),v&&(clearTimeout(v),v=null),p=void 0,y=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.leading,s=void 0!==a&&a,l=r.trailing,u=void 0===l||l,f=r.maxWait,h=void 0!==f&&f,p=void 0,d=void 0,v=void 0,m=void 0,y=!1,g=o!==h,_=!1!==h;return t.flush=function(){return(d||v)&&(m=e.apply(void 0,c(p))),i(),m},t.cancel=i,t}(function(e){return function(){u(document,"pubsub/onsubscribe",e),u(document,"pubsub/onsubscribe/"+e,e),ve[e]&&delete ve[e].unsubscribe}}(e),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete ve[e]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),_e=(function(e){function t(){return f(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}p(t,ge),me(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return f(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,ge),me(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ge.uuidv4();if(e&&!ye[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),ye[e]=!0}}}]),t}()),be=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),ke=function(t){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,v,H));return e.selectContext("axa-header"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,_e),be(n,[{key:"connectedCallback",value:function(){(function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-navigation";var t=e(this,"simplemenu");this.stroke=new le(this.parentNode.parentNode,{simpleMenu:t}),this.subNavigation=new fe(this,{simpleMenu:t})}},{key:"disconnectedCallback",value:function(){this.stroke.destroy(),delete this.stroke,this.subNavigation.destroy(),delete this.subNavigation}}]),n}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-header-navigation",ke)}),ke}();
