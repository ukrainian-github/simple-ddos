!function(){function e(e){return e&&e.__esModule?e["default"]:e}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){return Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)?Array.from(e):void 0}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t,r){return e&&"string"==typeof e&&-1!==t.indexOf(e)?e:r}function o(){return document.currentScript||document.getElementById("help-ukraine-win")||Array.from(document.querySelectorAll("script")).find(function(e){var t=e.getAttribute("src");if(t){var r=new URL(t,S);return"/cdn/widget.js"===r.pathname&&r.searchParams.has("type")&&r.searchParams.has("position")}return!1})||null}function u(){var e=arguments[0];"string"==typeof e&&(e=document.createElement(e));var t=1,r=arguments[1];if(r&&"object"==typeof r&&null==r.nodeType&&!Array.isArray(r)){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=r[n];"string"==typeof i?e.setAttribute(n,i):null!=i&&(e[n]=i)}t++}for(;t<arguments.length;t++)w(e,arguments[t]);return e}function w(e,t){if("string"==typeof t)e.appendChild(document.createTextNode(t));else if(null==t);else if(null!=t.nodeType)e.appendChild(t);else{if(!Array.isArray(t))throw new RangeError("Unsupported child node: "+t);for(var r=0;r<t.length;r++)w(e,t[r])}}function l(e,t){return h(e,t,"vertical",u("div",{"class":"huww-slide-container huww-widget-one"},f(),u("p",{"class":"huww-title"},"Зупинімо росію!"),u("a",{"class":"huww-link huww-trigger","data-huww-trigger":L[2],href:"#"},"Як я можу допомогти"),p()),m(),u("div",{"class":"huww-expended-widget-wrapper huww-slide-container"},y(),u("div",{"class":"huww-divider"}),u("div",{"class":"huww-expended-widget-hide huww-trigger","data-huww-trigger":L[1]},"Сховати")))}function d(e,t){return h(e,t,"vertical",u("div",{"class":"huww-slide-container huww-widget-two"},f(),u("p",{"class":"huww-title"},"Стоп війні! Ти можеш допомогти!"),u("div",{"class":"huww-divider"}),u("a",{"class":"huww-link huww-trigger","data-huww-trigger":L[2],href:"#"},"Як я можу допомогти"),p()),m(),v())}function s(e,t){return h(e,t,"horizontal",u("div",{"class":"huww-slide-container huww-widget-three"},u("p",{"class":"huww-title"},"Стоп війні!"),u("p",{"class":"huww-subtitle"},"Допоможіть Україні🇺🇦!"),u("a",{"class":"huww-button huww-trigger","data-huww-trigger":L[2],href:"#"},"Більше"),p()),m(),u("div",{"class":"huww-expended-widget-wrapper huww-expended-widget-wrapper-small huww-slide-container"},y(),u("button",{"class":"huww-expended-widget-hide-button huww-trigger","data-huww-trigger":L[1]})))}function c(e,t){return h(e,t,"vertical",u("div",{"class":"huww-slide-container huww-widget-four"},u("p",{"class":"huww-title"},"Допоможіть Україні🇺🇦!"),u("p",{"class":"huww-hashtag"},"#StandWithUkraine"),u("a",{"class":"huww-link huww-trigger","data-huww-trigger":L[2],href:"#"},"Як я можу допомогти"),p(),u("div",{"class":"huww-half-flag"},u("div",{"class":"huww-half-flag-top"}),u("div",{"class":"huww-half-flag-bottom"}))),m(),v())}function h(e,t,r,n,i,a){return u("div",{"class":"huww-widget huww-widget-".concat(e),"data-huww-slide":t},u("div",{"class":"huww-slider huww-slider-direction-".concat(r),style:"width:".concat(400,"px;height:").concat(250,"px;")},g("collapsed",i),g("main",n),g("expanded",a)))}function g(e,t){return u("div",{"class":"huww-slide","data-huww-slide":e},t)}function p(){return u("div",{"class":"huww-button-collapse huww-trigger","data-huww-trigger":L[0]})}function f(){return u("div",{"class":"huww-flag"},u("div",{"class":"huww-flag-top"}),u("div",{"class":"huww-flag-bottom"}))}function m(){return u("div",{"class":"huww-flag-wrapper huww-trigger huww-slide-container","data-huww-trigger":L[1]},u("div",{"class":"huww-separeted-flag-top"}),u("div",{"class":"huww-separeted-flag-bottom"}))}function v(){return u("div",{"class":"huww-expended-widget-wrapper huww-expended-widget-wrapper-small huww-slide-container"},y(),u("div",{"class":"huww-divider"}),u("div",{"class":"huww-expended-widget-hide huww-trigger","data-huww-trigger":L[1]},"Hide"))}function y(){return u("div",{"class":"huww-action-list"},b("https://uahelp.monobank.ua","Пожертвування","💸","Donate"),b("https://war.ukraine.ua","Підтримати Україну","❤","Info","huww-heart"),b(S,"Поділитись віджетом","📌","GetWidget"))}function b(e,t,r,n,i){return u("a",{"class":"huww-action",target:"_blank","data-huww-action":n,href:e,rel:"nofollow noopener"},u("span",{},t),u("span",{"class":i},r))}function A(){document.querySelectorAll(".huww-widget").forEach(function(e){return function(e){var t=e.querySelectorAll(".huww-trigger"),r=e.querySelectorAll(".huww-widget a"),n=D.get();!window.__HELPUKRAINEWIDGET_DISABLE_PERSISTENCE&&n&&(e.dataset.huwwSlide=n),t.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var r=e.dataset.huwwTrigger;n.dataset.huwwSlide=r,D.set(r);try{window.plausible&&window.plausible("ChangeState",{props:{state:r}})}catch(n){}})}),r.forEach(function(e){e.addEventListener("click",function(e){if(t.hasAttribute("href"))try{window.plausible&&window.plausible("Outbound Link: Click",{props:{url:t.getAttribute("href")}})}catch(t){}})})}(e)})}function E(){var t,r,n,a;!function(){if(!window.__HELPUKRAINEWIDGET_DISABLE_ANALYICS){var e=document.createElement("script");e.setAttribute("src","https://analytics.helpukrainewinwidget.org/js/script.js"),e.setAttribute("defer",""),e.setAttribute("data-domain",i(N.widgetDomain.split(",")).concat(["rollup-analytics.helpukrainewinwidget.org"]).join(",")),document.head.appendChild(e)}}(),t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode(e(k))),document.body.append((r=N.widgetType,n=N.widgetPosition,a=N.widgetLayout,{one:l,two:d,three:s,four:c}[r](n,a))),A()}var k="",S="https://helpukrainewinwidget.org",P=["top-left","top-right","bottom-right","bottom-left","middle-left","middle-right"],L=["collapsed","main","expanded"],O=["one","two","three","four"],T="one",j="top-left",x="collapsed",I="data-layout",D=new(function(){"use strict";function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=t}var r,n,i;return r=e,(n=[{key:"get",value:function(){return"true"===localStorage.getItem(this.key)?"collapsed":"false"===localStorage.getItem(this.key)?"main":null}},{key:"set",value:function(e){localStorage.setItem(this.key,("collapsed"===e).toString())}}])&&t(r.prototype,n),i&&t(r,i),e}())("huww-slider-state");"loading"!==document.readyState?setTimeout(E):document.addEventListener("DOMContentLoaded",E);var C,_,N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{widgetType:T,widgetPosition:j,widgetLayout:x,widgetDomain:window.location.hostname},t=o(),r=null==t?void 0:t.getAttribute("src"),i=n({},e);if(!r)return i;try{var u=new URL(r,S);i.widgetType=a(u.searchParams.get("type"),O,e.widgetType),i.widgetPosition=a(u.searchParams.get("position"),P,e.widgetPosition),i.widgetLayout=a(u.searchParams.get("layout"),L,e.widgetLayout),i.widgetDomain=u.searchParams.get("domain")||e.widgetDomain}catch(e){console.error(e)}return i}((C=o(),_=a(null==C?void 0:C.getAttribute("data-type"),O,T),{widgetPosition:a(null==C?void 0:C.getAttribute("data-position"),P,j),widgetType:_,widgetLayout:a(null==C?void 0:C.getAttribute(I),L,x),widgetDomain:(null==C?void 0:C.getAttribute(I))||window.location.hostname}))}();