!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};function i(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(i.prototype,HTMLElement.prototype),Object.setPrototypeOf(i,HTMLElement);var e,t,c,u=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i),o(t,[{key:"connectedCallback",value:function(){var e=this.getAttribute("icons-path");if(e){var t=new XMLHttpRequest;t.open("GET",e,!0),t.send(),t.onload=function(){var e=document.createElement("div");e.innerHTML=t.responseText,e.style.display="none",document.body.insertBefore(e,document.body.childNodes[0])}}}}]),t}();return u.tagName="axa-core",e=function(){window.customElements.define(u.tagName,u)},t=0,c=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",c,!1),document.addEventListener("WebComponentsReady",c,!1),u});
