(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IP2g:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));n("E9XD");var r=n("7O5W"),a=n("17x9"),o=n.n(a),i=n("q1tI"),l=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function b(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function m(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),a=y(e.slice(0,r)),o=e.slice(r+1).trim();return a.startsWith("webkit")?t[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:t[a]=o,t}),{})}var d=!1;try{d=!0}catch(w){}function O(t){return r.parse.icon?r.parse.icon(t):null===t?null:"object"===c(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?s({},t,e):{}}function v(t){var e=t.forwardedRef,n=p(t,["forwardedRef"]),a=n.icon,o=n.mask,i=n.symbol,l=n.className,c=n.title,u=n.titleId,y=O(a),m=g("classes",[].concat(b(function(t){var e,n=t.spin,r=t.pulse,a=t.fixedWidth,o=t.inverse,i=t.border,l=t.listItem,c=t.flip,u=t.size,f=t.rotation,p=t.pull,b=(s(e={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(e,"fa-rotate-".concat(f),null!=f&&0!==f),s(e,"fa-pull-".concat(p),null!=p),s(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map((function(t){return b[t]?t:null})).filter((function(t){return t}))}(n)),b(l.split(" ")))),w=g("transform","string"==typeof n.transform?r.parse.transform(n.transform):n.transform),j=g("mask",O(o)),x=Object(r.icon)(y,f({},m,{},w,{},j,{symbol:i,title:c,titleId:u}));if(!x)return function(){var t;!d&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var E=x.abstract,P={ref:e};return Object.keys(n).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(P[t]=n[t])})),h(E[0],P)}v.displayName="FontAwesomeIcon",v.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return t(e,n)})),o=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=m(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[y(e)]=r}return t}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,c=p(r,["style"]);return o.attrs.style=f({},o.attrs.style,{},l),e.apply(void 0,[n.tag,f({},o.attrs,{},c)].concat(b(a)))}.bind(null,l.a.createElement)},pssB:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n("MUpH"),a=n("q1tI"),o=n.n(a),i=n("WlC/"),l=n("5SEd"),c=n("wHSu"),s=n("L6Je"),u=n("9CUm"),f=n("IP2g");function p(){var t=Object(r.a)(["\n  background-color: #dacb9e;\n  width: 4rem;\n  height: 4rem;\n  margin-top: -2rem;\n  border-radius: 4rem;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  right: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return t},t}function b(){var t=Object(r.a)(["\n  font-size: 2rem;\n  color: white;\n"]);return b=function(){return t},t}function y(){var t=Object(r.a)(["\n  border-top: 1px solid #e0e0e0;\n  padding: 3rem 0;\n  position: relative;\n"]);return y=function(){return t},t}function m(){var t=Object(r.a)(["\n  margin: 0 auto;\n  max-width: 900px;\n  padding-top: 140px;\n"]);return m=function(){return t},t}var d=l.a.div(m()),O=l.a.div(y()),g=Object(l.a)((function(t){return o.a.createElement(f.a,t)}))(b()),v=l.a.div(p());function h(t){return o.a.createElement(d,null,o.a.createElement(O,null,t.icon?o.a.createElement(v,null,o.a.createElement(g,{icon:t.icon})):"",t.children))}function w(){var t=Object(r.a)(["\n  font-family: 'Fondamento', serif;\n  font-weight: 400;\n  font-size: 5rem;\n  text-align: center;\n"]);return w=function(){return t},t}var j=l.a.h1(w());function x(t){var e=t.pageContext,n=Object(i.useTranslation)().t;return o.a.createElement(s.a,{language:e.i18n.language},o.a.createElement(u.a,{title:n("Page not found")+" - "+n("The H.E.L.L. Company")}),o.a.createElement(h,{icon:c.b},o.a.createElement(j,null,n("Oops! Page not found."))))}}}]);