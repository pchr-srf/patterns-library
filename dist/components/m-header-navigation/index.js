!function(){"use strict";function e(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(h.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function t(e,t){for(var n=[],i=Object.keys(t),o=i.length,a=0;a<o;++a){var r=i[a];n.push(r+":"+t[r]+";")}e.style.cssText=n.join("")}function n(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function i(e,t){o(e,t)||(e.className+=" "+t)}function o(e,t){return n(t).test(e.className)}function a(e,t){if(o(e,t)){var i=n(t,"g");e.className=e.className.replace(i," ").replace(ee," ")}}function r(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var a=n[o];if(e[a]===t)return delete e[a]}return!1}function s(e,t,n,i){function a(){for(var t=0;t<h;++t)e.removeEventListener(c[t],u,s);r(this,a)}var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(ne[t]&&(t=ne[t]),!e||!t)return null;var l=void 0===n?"undefined":p(n);"function"===l&&(s=!!i,i=n);for(var u=n&&"string"===l?function(t){for(var a=t.target;!o(a,n)&&a!==e;)a=a.parentNode;if(a!==e)return i(t,a)}:i,c=t.split(te),h=c.length,f=0;f<h;++f)e.addEventListener(c[f],u,s);return a}function l(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new ce(t,_({},i,{detail:n}));e.dispatchEvent(o)}function u(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var c=".a-stroke {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1px;\n  display: block;\n  width: 0;\n  height: 0;\n  background: #f07662;\n  -webkit-transition: height 0.2s ease;\n  transition: height 0.2s ease; }\n  .a-stroke.is-enter {\n    height: 4px; }\n  .a-stroke.is-move {\n    -webkit-transition: height 0.2s ease, left 0.2s ease, width 0.2s ease;\n    transition: height 0.2s ease, left 0.2s ease, width 0.2s ease; }\n  .a-stroke.is-static {\n    left: 0 !important;\n    bottom: 1px; }\n\n.m-header-navigation {\n  display: block;\n  margin-left: auto; }\n  @media (max-width: 991px) {\n    .m-header-navigation {\n      display: none; } }\n\n.m-header-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-header-navigation__list-item {\n  display: block;\n  float: left;\n  margin: 0 8px; }\n\n.m-header-navigation__list-link {\n  color: #00008f;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 75px;\n  padding: 0 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle; }\n  .m-header-navigation__list-link:hover, .m-header-navigation__list-link:focus, .m-header-navigation__list-link:active {\n    color: #00005b; }\n  @media (min-width: 576px) {\n    .m-header-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-header-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-header-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-header-navigation__list-link:hover, .m-header-navigation__list-link:active, .m-header-navigation__list-link:focus {\n    text-decoration: none; }\n",h=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,f=function(e){return function(t,n,i){for(var o in n)o in d&&(n[d[o]]=n[o],delete n[o]);return e(t,n,i)}},d={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=(function(){function e(e){this.value=e}function t(t){function n(o,a){try{var r=t[o](a),s=r.value;s instanceof e?Promise.resolve(s.value).then(function(e){n("next",e)},function(e){n("throw",e)}):i(r.done?"return":"normal",r.value)}catch(e){i("throw",e)}}function i(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):a=null}var o,a;this._invoke=function(e,t){return new Promise(function(i,r){var s={key:e,arg:t,resolve:i,reject:r,next:null};a?a=a.next=s:(o=a=s,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var r=o.get;if(void 0!==r)return r.call(i)},y=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},k=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),x=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},w=1,E=2,N=3,O=4,T=5,S=6,A=7,j=8,L=9,M=10,D=11,F=12,P=13,z=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),R=/\n[\s]+$/,I=/^\n[\s]+/,U=/[\s]+$/,q=/^[\s]+/,V=/[\n\s]+/g,G=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],W=["code","pre"],$=function e(t,n){if(Array.isArray(n))for(var i,o,a=t.nodeName.toLowerCase(),r=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)r=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(r=!1,-1===G.indexOf(a)&&-1===W.indexOf(a)?""===(i=c.nodeValue.replace(I,"").replace(U,"").replace(R,"").replace(V," "))?t.removeChild(c):c.nodeValue=i:-1===W.indexOf(a)&&(o=0===s?"":" ",i=c.nodeValue.replace(I,o).replace(q," ").replace(U,"").replace(R,"").replace(V," "),c.nodeValue=i));else if(u&&u.nodeType){r&&(r=!1,-1===G.indexOf(a)&&-1===W.indexOf(a)?""===(i=c.nodeValue.replace(I,"").replace(R,"").replace(V," "))?t.removeChild(c):c.nodeValue=i:-1===W.indexOf(a)&&(i=c.nodeValue.replace(q," ").replace(I,"").replace(R,"").replace(V," "),c.nodeValue=i));var h=u.nodeName;h&&(a=h.toLowerCase()),t.appendChild(u)}}}},K=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,s){var l;-1!==r.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)l=document.createElementNS(u,e);else{if(e===a)return document.createComment(t.comment);l=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var h=c.toLowerCase(),f=t[c];if("classname"===h&&(h="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(h))if("true"===f)f=h;else if("false"===f)continue;"on"===h.slice(0,2)?l[c]=f:u?"xlink:href"===c?l.setAttributeNS(i,c,f):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,f):l.setAttribute(c,f)}return $(l,s),l}var n="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":p(e))?e:i("",e)}t||(t={});var i=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=f(e)),function(o){function a(e){var n=[];r===A&&(r=O);for(var i=0;i<e.length;i++){var o=e.charAt(i);r===w&&"<"===o?(s.length&&n.push([w,s]),s="",r=E):">"!==o||function(e){return e===L||e===M}(r)||r===P?r===P&&/-$/.test(s)&&"-"===o?(t.comments&&n.push([j,s.substr(0,s.length-1)],[N]),s="",r=w):r===E&&/^!--$/.test(s)?(t.comments&&n.push([E,s],[T,"comment"],[D]),s=o,r=P):r===w||r===P?s+=o:r===E&&/\s/.test(o)?(n.push([E,s]),s="",r=O):r===E?s+=o:r===O&&/[^\s"'=/]/.test(o)?(r=T,s=o):r===O&&/\s/.test(o)?(s.length&&n.push([T,s]),n.push([F])):r===T&&/\s/.test(o)?(n.push([T,s]),s="",r=S):r===T&&"="===o?(n.push([T,s],[D]),s="",r=A):r===T?s+=o:r!==S&&r!==O||"="!==o?r!==S&&r!==O||/\s/.test(o)?r===A&&'"'===o?r=M:r===A&&"'"===o?r=L:r===M&&'"'===o?(n.push([j,s],[F]),s="",r=O):r===L&&"'"===o?(n.push([j,s],[F]),s="",r=O):r!==A||/\s/.test(o)?r===j&&/\s/.test(o)?(n.push([j,s],[F]),s="",r=O):r!==j&&r!==L&&r!==M||(s+=o):(r=j,i--):(n.push([F]),/[\w-]/.test(o)?(s+=o,r=T):r=O):(n.push([D]),r=A):(r===E?n.push([E,s]):r===T?n.push([T,s]):r===j&&s.length&&n.push([j,s]),n.push([N]),s="",r=w)}return r===w&&s.length?(n.push([w,s]),s=""):r===j&&s.length?(n.push([j,s]),s=""):r===M&&s.length?(n.push([j,s]),s=""):r===L&&s.length?(n.push([j,s]),s=""):r===T&&(n.push([T,s]),s=""),n}for(var r=w,s="",l=arguments.length,u=[],c=0;c<o.length;c++)if(c<l-1){var h=arguments[c+1],f=a(o[c]),d=r;d===M&&(d=j),d===L&&(d=j),d===A&&(d=j),d===O&&(d=T),f.push([0,d,h]),u.push.apply(u,f)}else u.push.apply(u,a(o[c]));for(var v=[null,{},[]],m=[[v,-1]],c=0;c<u.length;c++){var _=m[m.length-1][0],g=(f=u[c])[0];if(g===E&&/^\//.test(f[1]))C=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][C]=e(_[0],_[1],_[2].length?_[2]:void 0));else if(g===E){var y=[f[1],{},[]];_[2].push(y),m.push([y,_[2].length-1])}else if(g===T||0===g&&f[1]===T){for(var b,k="";c<u.length;c++)if(u[c][0]===T)k=i(k,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==T)break;if("object"!==p(u[c][2])||k)k=i(k,u[c][2]);else for(b in u[c][2])u[c][2].hasOwnProperty(b)&&!_[1][b]&&(_[1][b]=u[c][2][b])}u[c][0]===D&&c++;for(var x=c;c<u.length;c++)if(u[c][0]===j||u[c][0]===T)_[1][k]?""===u[c][1]||(_[1][k]=i(_[1][k],u[c][1])):_[1][k]=n(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==j&&u[c][1]!==T){!k.length||_[1][k]||c!==x||u[c][0]!==N&&u[c][0]!==F||(_[1][k]=k.toLowerCase()),u[c][0]===N&&c--;break}_[1][k]?""===u[c][2]||(_[1][k]=i(_[1][k],u[c][2])):_[1][k]=n(u[c][2])}}else if(g===T)_[1][f[1]]=!0;else if(0===g&&f[1]===T)_[1][f[2]]=!0;else if(g===N){if(function(e){return z.test(e)}(_[0])&&m.length){var C=m[m.length-1][1];m.pop(),m[m.length-1][0][2][C]=e(_[0],_[1],_[2].length?_[2]:void 0)}}else if(0===g&&f[1]===w)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=i("",f[2])),Array.isArray(f[2][0])?_[2].push.apply(_[2],f[2]):_[2].push(f[2]);else if(g===w)_[2].push(f[1]);else if(g!==D&&g!==F)throw new Error("unhandled: "+g)}if(v[2].length>1&&/^\s*$/.test(v[2][0])&&v[2].shift(),v[2].length>2||2===v[2].length&&/\S/.test(v[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(v[2][0])&&"string"==typeof v[2][0][0]&&Array.isArray(v[2][0][2])&&(v[2][0]=e(v[2][0][0],v[2][0][1],v[2][0][2])),v[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),B=function(e){return"undefined"!=typeof window?function(){var t=document.createElement("div");return t.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(t.childNodes)}():function(){var t=new String(e);return t.__encoded=!0,t}()},H=x(["\n  ","\n"],["\n  ","\n"]),J=x(['\n    <li class="m-header-navigation__list-item">\n      <a class="m-header-navigation__list-link js-header-navigation__list-link" ',' href="','">','</a>\n        <axa-header-sub-navigation indextitle="','" indexurl="',"\" items='","' flyout>\n        </axa-header-sub-navigation>\n    </li>\n  "],['\n    <li class="m-header-navigation__list-item">\n      <a class="m-header-navigation__list-link js-header-navigation__list-link" ',' href="','">','</a>\n        <axa-header-sub-navigation indextitle="','" indexurl="',"\" items='","' flyout>\n        </axa-header-sub-navigation>\n    </li>\n  "]),Y=x(['\n    <li class="m-header-navigation__list-item">\n      <a class="m-header-navigation__list-link js-header-navigation__list-link','" href="','">\n        ',"\n      </a>\n    </li>\n  "],['\n    <li class="m-header-navigation__list-item">\n      <a class="m-header-navigation__list-link js-header-navigation__list-link','" href="','">\n        ',"\n      </a>\n    </li>\n  "]),Z=x(['\n  <ul class="m-header-navigation__list js-header-navigation__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-navigation__list js-header-navigation__list">\n    ',"\n  </ul>\n"]),Q=function(e){return e?" "+e:""},X=function(e){var t=e.items;return K(Z,t&&t.map(function(e){var t=e.url,n=e.name,i=e.items,o=e.classes;return K(H,i?K(J,Q(o),t,B(n),n,t,JSON.stringify(i)):K(Y,Q(o),t,B(n)))}))},ee=/^\s+|\s{2,}|\s+$/g,te=/\s+/,ne={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,a=0;a<i;++a)if(o=n[a],void 0!==e[o])return t[o];return null}()},ie=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,oe=function(){var e=window.requestAnimationFrame||window[ie+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),i=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+i)},i);return t=n+i,o}}return e}(),ae=function(){var e=window.cancelAnimationFrame||window[ie+"CancelAnimationFrame"]||window[ie+"CancelRequestAnimationFrame"];return e=e?e.bind(window):function(e){clearTimeout(e)}}(),re=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},a=0;a<i;++a){var r=t[a];o[r.toUpperCase()]=r}return o}("click","keyup","enter","move","leave","Escape","Esc"),se=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,e),this._rootNode=t,this._options=_({},e.DEFAULTS,n),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return m(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._rootNode.querySelector(e):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=s(this._container,re.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=s(this._container,re.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,t,n){function i(){s.removeEventListener(t,o,a),r(this,i)}function o(t){var i=t.target;if(!e.contains(i)&&e!==i)return n(t)}var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=e.ownerDocument.documentElement;return s.addEventListener(t,o,a),i}(this._container,re.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=s(this._container.ownerDocument,re.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this._options.useDefaultEvent||e.preventDefault();var n=!this._lastToggleNode,i=t!==this._lastToggleNode,o=!n&&!i;n?(this._notify(re.ENTER,t),this._onInteractive()):i&&this._notify(re.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,o&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===re.ESCAPE||e.key===re.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(re.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),e}();se.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var le=function(e){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,n);var i=b(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:n.DEFAULTS.toggleClass,closeClass:"js-header-sub-navigation__index-close",sameClickClose:!t.simpleMenu,useDefaultEvent:!!t.simpleMenu,outerClose:!t.simpleMenu,escapeClose:!t.simpleMenu}));return i.rootNode=e,i.options=_({},n.DEFAULTS,t),i._isStatic=!1,i._handleResize=i._handleResize.bind(i),i._handleTransitionEnd=i._handleTransitionEnd.bind(i),i.init(),i}return y(n,se),m(n,[{key:"init",value:function(){this.rootNode.style.position="relative",this._list=this.rootNode.querySelector(this.options.list),this._stroke=document.createElement("div"),this._stroke.className=this.options.strokeClass,this._list.appendChild(this._stroke)}},{key:"enter",value:function(e){var n=this,o=e.parentNode;this._node=e,this._parentNode=o,oe(function(){n._handleStaticState(!0,!0),oe(function(){i(n._stroke,n.options.enterClass),t(n._stroke,{width:o.offsetWidth+"px",left:o.offsetLeft+"px"})})})}},{key:"move",value:function(e){var n=this,o=e.parentNode;this._node=e,this._parentNode=o,oe(function(){n._handleStaticState(!1),oe(function(){i(n._stroke,n.options.moveClass),t(n._stroke,{width:o.offsetWidth+"px",left:o.offsetLeft+"px"}),n._onMoving()})})}},{key:"leave",value:function(){var e=this;this._offMoving(),oe(function(){e._handleStaticState(!0),oe(function(){a(e._stroke,e.options.moveClass),a(e._stroke,e.options.enterClass)}),e._parentNode=null,e._node=null})}},{key:"_onMoving",value:function(){this._offMoving(),this._unResize=s(function(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}(this.rootNode),"resize",this._handleResize),this._unTransitionEnd=s(this._stroke,"transitionend",this._handleTransitionEnd)}},{key:"_offMoving",value:function(){this._unResize&&this._unResize(),this._unTransitionEnd&&this._unTransitionEnd()}},{key:"_handleStaticState",value:function(e,t){(t||e!==this._isStatic)&&(this._isStatic=e,e?(this._node.appendChild(this._stroke),i(this._stroke,this.options.staticClass)):(this._list.appendChild(this._stroke),a(this._stroke,this.options.staticClass)))}},{key:"_handleResize",value:function(){var e=this;this.resizeTimeout&&(ae(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=oe(function(){var n=e._parentNode,i=n.offsetWidth,o=n.offsetLeft;i&&o&&t(e._stroke,{width:i+"px",left:o+"px"})})}},{key:"_handleTransitionEnd",value:function(e){"left"===e.propertyName&&(this._offMoving(),this._handleStaticState(!0))}},{key:"destroy",value:function(){g(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"destroy",this).call(this),this._stroke&&(this._stroke.parentNode.removeChild(this._stroke),delete this._stroke),delete this.rootNode,delete this.options}}]),n}();le.DEFAULTS={strokeClass:"a-stroke",list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",enterClass:"is-enter",moveClass:"is-move",staticClass:"is-static"};var ue=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,t);var i=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-sub-navigation__index-close",useDefaultEvent:!!n.simpleMenu,outerClose:!n.simpleMenu,escapeClose:!n.simpleMenu}));return i.rootNode=e,i.options=_({},t.DEFAULTS,n),i.init(),i}return y(t,se),m(t,[{key:"init",value:function(){this.list=this.rootNode.querySelector(this.options.list)}},{key:"enter",value:function(e){i(e.parentNode,this.options.stateClass)}},{key:"move",value:function(e,t){a(t.parentNode,this.options.stateClass),i(e.parentNode,this.options.stateClass)}},{key:"leave",value:function(e){a(e.parentNode,this.options.stateClass)}},{key:"destroy",value:function(){g(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),t}();ue.DEFAULTS={list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",stateClass:"is-open"};var ce=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,r=t.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,a,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),he={};s(document,"pubsub/onsubscribe",function(e){var t=e.detail;he[t]||(he[t]={count:0});var n=he[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=k(e,3),n=t[0],i=t[1];l(t[2],n,i)}),delete n.queue)}),Object.setPrototypeOf(u.prototype,HTMLElement.prototype),Object.setPrototypeOf(u,HTMLElement);var fe={},de=function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];v(this,n);var i=b(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,t),i}return y(n,u),m(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var t=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var i=document.createDocumentFragment();this.firstChild;)i.appendChild(this.firstChild);var o=n(function(t){if(!t.hasAttributes)return null;for(var n={},i=t.attributes,o=i.length,a=0;a<o;++a){var r=i[a];n[r.name]=e(r)}return n}(this),i);if(Array.isArray(o))o.forEach(function(e){t.appendChild(e)});else if(o){if("string"==typeof o){var a=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(o)}this._hasRendered=!0}catch(a){"throwed"!==a.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;he[e]||(he[e]={count:0,queue:[]});var i=he[e].queue;Array.isArray(i)?i.push([e,t,n]):l(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(e,t){var n=s(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);he[e]||(he[e]={count:0});var i=he[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,i=Array(t),a=0;a<t;a++)i[a]=arguments[a];return f=i,_&&(d&&clearTimeout(d),d=setTimeout(function(){p&&clearTimeout(p),n()},o)),g&&!p&&(p=setTimeout(function(){d&&clearTimeout(d),n()},h)),s&&!m&&(m=!0,v=e.apply(void 0,C(f))),v}function n(){u&&(v=e.apply(void 0,C(f))),d=null,p=null,m=!1}function i(){d&&(clearTimeout(d),d=null),p&&(clearTimeout(p),p=null),f=void 0,m=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.leading,s=void 0!==r&&r,l=a.trailing,u=void 0===l||l,c=a.maxWait,h=void 0!==c&&c,f=void 0,d=void 0,p=void 0,v=void 0,m=!1,_=o!==h,g=!1!==h;return t.flush=function(){return(d||p)&&(v=e.apply(void 0,C(f))),i(),v},t.cancel=i,t}(function(e){return function(){l(document,"pubsub/onsubscribe",e),l(document,"pubsub/onsubscribe/"+e,e),he[e]&&delete he[e].unsubscribe}}(e),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete he[e]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),pe=(function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}y(t,de),m(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,de),m(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:de.uuidv4();if(e&&!fe[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),fe[e]=!0}}}]),t}()),ve=function(t){function n(){v(this,n);var e=b(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,c,X));return e.selectContext("axa-header"),e}return y(n,pe),m(n,[{key:"connectedCallback",value:function(){g(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-navigation";var t=e(this,"simplemenu");this.stroke=new le(this.parentNode.parentNode,{simpleMenu:t}),this.subNavigation=new ue(this,{simpleMenu:t})}},{key:"disconnectedCallback",value:function(){this.stroke.destroy(),delete this.stroke,this.subNavigation.destroy(),delete this.subNavigation}}]),n}();!function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-header-navigation",ve)})}();
