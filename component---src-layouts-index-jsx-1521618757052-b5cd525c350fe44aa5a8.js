webpackJsonp([79611799117203,60335399758886],{302:function(n,e){n.exports={layoutContext:{}}},436:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(1),a=o(r),l=t(450),u=o(l),f=t(302),d=o(f);e.default=function(n){return a.default.createElement(u.default,i({},n,d.default))},n.exports=e.default},62:function(n,e,t){!function(e,o){n.exports=o(t(1),t(7))}("undefined"!=typeof self?self:this,function(n,e){return function(n){function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=2)}([function(n,e,t){"use strict";function o(n){console.warn("[react-ga]",n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(n,e,t){"use strict";function o(n){return n.replace(/^\s+|\s+$/g,"")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){var t={};for(var o in n)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}function r(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}function a(n){return(0,k.default)(n,D)}function l(n){for(var e=arguments.length,t=Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];var i=t[0];if("function"==typeof B){if("string"!=typeof i)return void(0,C.default)("ga command must be a string");B.apply(void 0,t),Array.isArray(n)&&n.forEach(function(n){B.apply(void 0,r([n+"."+i].concat(t.slice(1))))})}}function u(n,e){return n?(e&&(e.debug&&e.debug===!0&&(I=!0),e.titleCase===!1&&(D=!1)),void(e&&e.gaOptions?B("create",n,e.gaOptions):B("create",n,"auto"))):void(0,C.default)("gaTrackingID is required in initialize()")}function f(n,e){if(e&&e.testMode===!0)J=!0;else{if("undefined"==typeof window)return!1;(0,M.default)(e)}return Array.isArray(n)?n.forEach(function(n){return"object"!==("undefined"==typeof n?"undefined":v(n))?void(0,C.default)("All configs must be an object"):void u(n.trackingId,n)}):u(n,e),!0}function d(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.length>0&&(B.apply(void 0,e),I&&((0,T.default)("called ga('arguments');"),(0,T.default)("with arguments: "+JSON.stringify(e)))),window.ga}function c(n,e){return n?"object"!==("undefined"==typeof n?"undefined":v(n))?void(0,C.default)("Expected `fieldsObject` arg to be an Object"):(0===Object.keys(n).length&&(0,C.default)("empty `fieldsObject` given to .set()"),l(e,"set",n),void(I&&((0,T.default)("called ga('set', fieldsObject);"),(0,T.default)("with fieldsObject: "+JSON.stringify(n))))):void(0,C.default)("`fieldsObject` is required in .set()")}function s(n,e){l(e,"send",n),I&&((0,T.default)("called ga('send', fieldObject);"),(0,T.default)("with fieldObject: "+JSON.stringify(n)),(0,T.default)("with trackers: "+JSON.stringify(e)))}function p(n,e,t){if(!n)return void(0,C.default)("path is required in .pageview()");var o=(0,j.default)(n);if(""===o)return void(0,C.default)("path cannot be an empty string in .pageview()");var i={};if(t&&(i.title=t),"function"==typeof d&&(l(e,"send",x({hitType:"pageview",page:o},i)),I)){(0,T.default)("called ga('send', 'pageview', path);");var r="";t&&(r=" and title: "+t),(0,T.default)("with path: "+o+r)}}function b(n,e){if(!n)return void(0,C.default)("modalName is required in .modalview(modalName)");var t=(0,_.default)((0,j.default)(n));if(""===t)return void(0,C.default)("modalName cannot be an empty string or a single / in .modalview()");if("function"==typeof d){var o="/modal/"+t;l(e,"send","pageview",o),I&&((0,T.default)("called ga('send', 'pageview', path);"),(0,T.default)("with path: "+o))}}function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.category,t=n.variable,o=n.value,i=n.label,r=arguments[1];if("function"==typeof d){if(!e||!t||!o||"number"!=typeof o)return void(0,C.default)("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");var l={hitType:"timing",timingCategory:a(e),timingVar:a(t),timingValue:o};i&&(l.timingLabel=a(i)),s(l,r)}}function m(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1],t=n.category,o=n.action,r=n.label,l=n.value,u=n.nonInteraction,f=n.transport,c=i(n,["category","action","label","value","nonInteraction","transport"]);if("function"==typeof d){if(!t||!o)return void(0,C.default)("args.category AND args.action are required in event()");var p={hitType:"event",eventCategory:a(t),eventAction:a(o)};r&&(p.eventLabel=a(r)),"undefined"!=typeof l&&("number"!=typeof l?(0,C.default)("Expected `args.value` arg to be a Number."):p.eventValue=l),"undefined"!=typeof u&&("boolean"!=typeof u?(0,C.default)("`args.nonInteraction` must be a boolean."):p.nonInteraction=u),"undefined"!=typeof f&&("string"!=typeof f?(0,C.default)("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(f)===-1&&(0,C.default)("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),p.transport=f)),Object.keys(c).filter(function(n){return"dimension"===n.substr(0,"dimension".length)}).forEach(function(n){p[n]=c[n]}),Object.keys(c).filter(function(n){return"metric"===n.substr(0,"metric".length)}).forEach(function(n){p[n]=c[n]}),s(p,e)}}function h(n,e){var t=n.description,o=n.fatal;if("function"==typeof d){var i={hitType:"exception"};t&&(i.exDescription=a(t)),"undefined"!=typeof o&&("boolean"!=typeof o?(0,C.default)("`args.fatal` must be a boolean."):i.exFatal=o),s(i,e)}}function y(n,e,t){if("function"!=typeof e)return void(0,C.default)("hitCallback function is required");if("function"==typeof d){if(!n||!n.label)return void(0,C.default)("args.label is required in outboundLink()");var o={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:a(n.label)},i=!1,r=function(){i=!0,e()},l=setTimeout(r,250),u=function(){clearTimeout(l),i||e()};o.hitCallback=u,s(o,t)}else setTimeout(e,0)}Object.defineProperty(e,"__esModule",{value:!0}),e.testModeAPI=e.OutboundLink=e.plugin=void 0;var x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};e.initialize=f,e.ga=d,e.set=c,e.send=s,e.pageview=p,e.modalview=b,e.timing=g,e.event=m,e.exception=h,e.outboundLink=y;var w=t(3),k=o(w),O=t(6),_=o(O),E=t(1),j=o(E),z=t(7),M=o(z),A=t(0),C=o(A),P=t(8),T=o(P),L=t(9),S=o(L),q=t(10),N=o(q),I=!1,D=!0,J=!1,B=function(){var n;return J?S.default.ga.apply(S.default,arguments):window.ga?(n=window).ga.apply(n,arguments):(0,C.default)("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually")},H=e.plugin={require:function(n,e){if("function"==typeof d){if(!n)return void(0,C.default)("`name` is required in .require()");var t=(0,j.default)(n);if(""===t)return void(0,C.default)("`name` cannot be an empty string in .require()");if(e){if("object"!==("undefined"==typeof e?"undefined":v(e)))return void(0,C.default)("Expected `options` arg to be an Object");0===Object.keys(e).length&&(0,C.default)("Empty `options` given to .require()"),d("require",t,e),I&&(0,T.default)("called ga('require', '"+t+"', "+JSON.stringify(e))}else d("require",t),I&&(0,T.default)("called ga('require', '"+t+"');")}},execute:function(n,e){var t=void 0,o=void 0;if(1===(arguments.length<=2?0:arguments.length-2)?t=arguments.length<=2?void 0:arguments[2]:(o=arguments.length<=2?void 0:arguments[2],t=arguments.length<=3?void 0:arguments[3]),"function"==typeof d)if("string"!=typeof n)(0,C.default)("Expected `pluginName` arg to be a String.");else if("string"!=typeof e)(0,C.default)("Expected `action` arg to be a String.");else{var i=n+":"+e;t=t||null,o&&t?(d(i,o,t),I&&((0,T.default)("called ga('"+i+"');"),(0,T.default)('actionType: "'+o+'" with payload: '+JSON.stringify(t)))):t?(d(i,t),I&&((0,T.default)("called ga('"+i+"');"),(0,T.default)("with payload: "+JSON.stringify(t)))):(d(i),I&&(0,T.default)("called ga('"+i+"');"))}}};N.default.origTrackLink=N.default.trackLink,N.default.trackLink=y;var R=e.OutboundLink=N.default;e.testModeAPI=S.default;e.default={initialize:f,ga:d,set:c,send:s,pageview:p,modalview:b,timing:g,event:m,exception:h,plugin:H,outboundLink:y,OutboundLink:R,testModeAPI:S.default}},function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return(0,a.default)(n)?((0,d.default)("This arg looks like an email address, redacting."),c):e?(0,u.default)(n):n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=t(4),a=o(r),l=t(5),u=o(l),f=t(0),d=o(f),c="REDACTED (Potential Email Address)"},function(n,e,t){"use strict";function o(n){return/[^@]+@[^@]+/.test(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n){return(0,a.default)(n).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(n,e,t){return e>0&&e+n.length!==t.length&&n.search(l)>-1&&":"!==t.charAt(e-2)&&("-"!==t.charAt(e+n.length)||"-"===t.charAt(e-1))&&t.charAt(e-1).search(/[^\s-]/)<0?n.toLowerCase():n.substr(1).search(/[A-Z]|\../)>-1?n:n.charAt(0).toUpperCase()+n.substr(1)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=t(1),a=o(r),l=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},function(n,e,t){"use strict";function o(n){return"/"===n.substring(0,1)?n.substring(1):n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){!function(n,e,t,o,i,r,a){n.GoogleAnalyticsObject=i,n[i]=n[i]||function(){(n[i].q=n[i].q||[]).push(arguments)},n[i].l=1*new Date,r=e.createElement(t),a=e.getElementsByTagName(t)[0],r.async=1,r.src=o,a.parentNode.insertBefore(r,a)}(window,document,"script",n&&n.gaAddress?n.gaAddress:"https://www.google-analytics.com/analytics.js","ga")}},function(n,e,t){"use strict";function o(n){console.info("[react-ga]",n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.gaCalls=[];e.default={calls:o,ga:function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];o.push([].concat(e))}}},function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},u=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),f=t(11),d=o(f),c=t(12),s=o(c),p=t(0),b=o(p),g="_blank",m=1,h=function(n){function e(){var n,t,o,a;i(this,e);for(var l=arguments.length,u=Array(l),f=0;f<l;f++)u[f]=arguments[f];return t=o=r(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(u))),o.handleClick=function(n){var t=o.props,i=t.target,r=t.eventLabel,a=t.to,l=t.onClick,u={label:r},f=i!==g,d=!(n.ctrlKey||n.shiftKey||n.metaKey||n.button===m);f&&d?(n.preventDefault(),e.trackLink(u,function(){window.location.href=a})):e.trackLink(u,function(){}),l&&l(n)},a=t,r(o,a)}return a(e,n),u(e,[{key:"render",value:function(){var n=l({},this.props,{href:this.props.to,onClick:this.handleClick});return delete n.eventLabel,d.default.createElement("a",n)}}]),e}(f.Component);h.propTypes={eventLabel:s.default.string.isRequired,target:s.default.string,to:s.default.string,onClick:s.default.func},h.defaultProps={target:null,to:null,onClick:null},h.trackLink=function(){(0,b.default)("ga tracking not enabled")},e.default=h},function(e,t){e.exports=n},function(n,t){n.exports=e}])})},755:function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(e,"__esModule",{value:!0}),e.normalize=e.version=void 0;var i=o(['\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n\n  pre {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  a {\n    background-color: transparent;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  textarea {\n    overflow: auto;\n  }\n\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  details {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none;\n  }\n'],['\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n\n  pre {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  a {\n    background-color: transparent;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  textarea {\n    overflow: auto;\n  }\n\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  details {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none;\n  }\n']),r=t(5),a=(e.version="8.0.0",e.normalize=(0,r.css)(i));e.default=a},91:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0,e.Wrapper=void 0;var r=i(["\n  width: 24px;\n  height: 18px;\n  outline: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n"],["\n  width: 24px;\n  height: 18px;\n  outline: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n"]),a=i(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]),l=i(["\n  content: '';\n  position: absolute;\n  background: #6772e5;\n  border-radius: 1px;\n  left: 0px;\n  right: 0px;\n  top: 7px;\n  height: 2px;\n  transform: rotate(45deg);\n  transition: background 0.1s;\n"],["\n  content: '';\n  position: absolute;\n  background: #6772e5;\n  border-radius: 1px;\n  left: 0px;\n  right: 0px;\n  top: 7px;\n  height: 2px;\n  transform: rotate(45deg);\n  transition: background 0.1s;\n"]),u=i(["\n  transform: rotate(-45deg);\n"],["\n  transform: rotate(-45deg);\n"]),f=t(1),d=o(f),c=t(5),s=o(c);e.default=function(n){var e=n.onClick,t=void 0===e?function(){}:e;return d.default.createElement(p,{onClick:t},d.default.createElement(b,null,d.default.createElement(g,null),d.default.createElement(m,null)))};var p=e.Wrapper=s.default.button(r),b=s.default.div(a),g=s.default.div(l),m=g.extend(u)},441:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0;var r=i(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"],["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]),a=i(["\n  margin: 0px;\n  padding: 0px;\n"],["\n  margin: 0px;\n  padding: 0px;\n"]),l=i(["\n  vertical-align: -2px;\n  width: 16px;\n"],["\n  vertical-align: -2px;\n  width: 16px;\n"]),u=i(["\n  min-height: 96px;\n  background: #1b1b1b;\n  padding-top: 12px;\n  padding-bottom: 16px;\n  color: #fff;\n"],["\n  min-height: 96px;\n  background: #1b1b1b;\n  padding-top: 12px;\n  padding-bottom: 16px;\n  color: #fff;\n"]),f=i(["\n  "," display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"],["\n  "," display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]),d=i(["\n  img {\n    height: 64px;\n  }\n"],["\n  img {\n    height: 64px;\n  }\n"]),c=i(["\n  "," flex-basis: 370px;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    align-items: flex-start;\n    text-align: left;\n    flex-basis: auto;\n  }\n"],["\n  "," flex-basis: 370px;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    align-items: flex-start;\n    text-align: left;\n    flex-basis: auto;\n  }\n"]),s=i(["\n  "," flex-basis: 170px;\n  align-items: flex-end;\n\n  @media (max-width: 768px) {\n    align-items: flex-start;\n    flex-basis: auto;\n  }\n"],["\n  "," flex-basis: 170px;\n  align-items: flex-end;\n\n  @media (max-width: 768px) {\n    align-items: flex-start;\n    flex-basis: auto;\n  }\n"]),p=i(["\n  color: #49b9f3;\n\n  &:hover {\n    color: #49b9f3;\n  }\n"],["\n  color: #49b9f3;\n\n  &:hover {\n    color: #49b9f3;\n  }\n"]),b=t(1),g=o(b),m=t(5),h=o(m),y=t(55),x=(o(y),t(357)),v=o(x),w=t(16),k=function(n){return"http://twitter.com/"+n};e.default=function(n){var e=n.blog,t=void 0===e?"https://blog.dataversioncontrol.com/":e,o=n.twitter,i=void 0===o?"FullStackML":o;return g.default.createElement(j,null,g.default.createElement(z,null,g.default.createElement(M,null,g.default.createElement(v.default,null)),g.default.createElement(A,null,g.default.createElement(_,null,"© 2018 Iterative, Inc."),g.default.createElement(_,null,g.default.createElement(P,{href:"mailto:info@dataversioncontrol.com"},"info@dataversioncontrol.com"))),g.default.createElement(C,null,g.default.createElement(_,null,g.default.createElement(P,{href:t},"Blog")),g.default.createElement(_,null,g.default.createElement(P,{href:k(i)},g.default.createElement(E,{src:"twitter.png"}),"@FullStackML")))))};var O=(0,m.css)(r),_=h.default.p(a),E=h.default.img(l),j=h.default.div(u),z=h.default.div(f,w.container),M=h.default.div(d),A=h.default.div(c,O),C=h.default.div(s,O),P=h.default.a(p);n.exports=e.default},442:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},f=i(["\n  background: #1b1b1b;\n  height: 105px;\n\n  "," {\n  }\n\n  @media (max-width: 768px) {\n    padding-top: 10px;\n  }\n"],["\n  background: #1b1b1b;\n  height: 105px;\n\n  "," {\n  }\n\n  @media (max-width: 768px) {\n    padding-top: 10px;\n  }\n"]),d=i(["\n  "," padding-top: 10px;\n  padding-bottom: 2px;\n  display: flex;\n  justify-content: space-between;\n\n  align-items: center;\n\n  @media (max-width: 768px) {\n    justify-content: space-between;\n  }\n"],["\n  "," padding-top: 10px;\n  padding-bottom: 2px;\n  display: flex;\n  justify-content: space-between;\n\n  align-items: center;\n\n  @media (max-width: 768px) {\n    justify-content: space-between;\n  }\n"]),c=t(1),s=o(c),p=t(5),b=o(p),g=t(357),m=o(g),h=t(448),y=o(h),x=t(16),v={getStarted:"https://medium.com/m/global-identity?redirectUrl=https://blog.dataversioncontrol.com/data-version-control-tutorial-9146715eda46",blog:"https://blog.dataversioncontrol.com/",support:"/support",docs:"/docs",discuss:"http://discuss.dataversioncontrol.com/"},w=function(n){function e(){var t,o,i;r(this,e);for(var l=arguments.length,u=Array(l),f=0;f<l;f++)u[f]=arguments[f];return t=o=a(this,n.call.apply(n,[this].concat(u))),o.state={open:!1},o.toggleOpen=function(){return o.setState(function(n){return{open:!n.open}})},i=t,a(o,i)}return l(e,n),e.prototype.render=function(){var n=this.state.open;return s.default.createElement(k,null,s.default.createElement(O,null,s.default.createElement(m.default,null),s.default.createElement(y.default,u({},v,{open:n,onToggle:this.toggleOpen}))))},e}(c.Component);e.default=w;var k=b.default.div(f,h.TopMenu),O=b.default.div(d,x.container);n.exports=e.default},357:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0;var r=i([""],[""]),a=t(1),l=o(a),u=t(55),f=o(u),d=t(5),c=o(d);e.default=function(){return l.default.createElement(s,{to:"/"},l.default.createElement("img",{src:"/logo.png",height:"85"}))};var s=(0,c.default)(f.default)(r);n.exports=e.default},448:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0,e.ItemLocal=e.Item=e.TopMenu=void 0;var r=i([""],[""]),a=i(["\n  background: transparent;\n  border: none;\n  display: none;\n  background: transparent;\n\n  @media (max-width: 768px) {\n    display: block;\n    position: absolute;\n    right: 15px;\n    top: 15px;\n\n    z-index: 999999;\n  }\n"],["\n  background: transparent;\n  border: none;\n  display: none;\n  background: transparent;\n\n  @media (max-width: 768px) {\n    display: block;\n    position: absolute;\n    right: 15px;\n    top: 15px;\n\n    z-index: 999999;\n  }\n"]),l=i(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  padding-bottom: 10px;\n\n  @media (max-width: 768px) {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    flex-direction: column;\n\n    background: #fff;\n    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    flex-grow: 1;\n    transform: scale(0.95);\n    transform-origin: 100% 0;\n    will-change: transform, opacity;\n    transition-property: transform, opacity;\n    transition-duration: 0.25s;\n\n    z-index: -10;\n\n    align-items: start;\n\n    transform: scale(0.95);\n    opacity: 0;\n\n    ",";\n  }\n"],["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  padding-bottom: 10px;\n\n  @media (max-width: 768px) {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    flex-direction: column;\n\n    background: #fff;\n    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    flex-grow: 1;\n    transform: scale(0.95);\n    transform-origin: 100% 0;\n    will-change: transform, opacity;\n    transition-property: transform, opacity;\n    transition-duration: 0.25s;\n\n    z-index: -10;\n\n    align-items: start;\n\n    transform: scale(0.95);\n    opacity: 0;\n\n    ",";\n  }\n"]),u=i(["\n  ",";\n"],["\n  ",";\n"]),f=i(["\n  font-size: 18px;\n  padding: 0px 25px;\n  line-height: 38px;\n  margin-left: 30px;\n  color: #fff;\n  text-decoration: none;\n\n  ",";\n\n  @media (max-width: 768px) {\n    color: #000;\n    line-height: 60px;\n    margin-left: 0px;\n    padding-left: 30px;\n    align-items: flex-start;\n    width: 100%;\n  }\n"],["\n  font-size: 18px;\n  padding: 0px 25px;\n  line-height: 38px;\n  margin-left: 30px;\n  color: #fff;\n  text-decoration: none;\n\n  ",";\n\n  @media (max-width: 768px) {\n    color: #000;\n    line-height: 60px;\n    margin-left: 0px;\n    padding-left: 30px;\n    align-items: flex-start;\n    width: 100%;\n  }\n"]),d=t(1),c=o(d),s=t(55),p=o(s),b=t(5),g=o(b),m=t(91),h=o(m),y=function(){return c.default.createElement("svg",{height:"24",viewBox:"0 0 12 16",version:"1.1",width:"18","aria-hidden":"true"},c.default.createElement("path",{fill:"rgb(255, 255, 255)",d:"M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"}))};e.default=function(n){var e=n.open,t=n.getStarted,o=n.blog,i=n.support,r=n.docs,a=n.discuss,l=n.onToggle,u=void 0===l?function(){}:l;return c.default.createElement(x,null,c.default.createElement(v,{onClick:function(){return u()}},e?c.default.createElement(h.default,null):c.default.createElement(y,null)),c.default.createElement(w,{visible:e},c.default.createElement(E,{to:"/",onClick:function(){return u()}},c.default.createElement(k,null,"Home")),c.default.createElement(_,{href:t,onClick:function(){return u()}},c.default.createElement(k,null,"Tutorial")),c.default.createElement(_,{href:o,onClick:function(){return u()}},c.default.createElement(k,null,"Blog")),c.default.createElement(E,{to:i,onClick:function(){return u()}},c.default.createElement(k,null,"Support")),c.default.createElement(_,{href:a,onClick:function(){return u()}},c.default.createElement(k,null,"Discuss")),c.default.createElement(E,{to:r,docs:!0,onClick:function(){return u()}},c.default.createElement(k,{noline:!0},"Docs"))))};var x=g.default.div(r),v=g.default.div(a),w=e.TopMenu=g.default.div(l,function(n){return n.visible&&"\n         z-index: 888888;\n    transform: none;\n    opacity: 1;\n    pointer-events: auto;\n    "}),k=g.default.span(u,function(n){return!n.noline&&"\n  border-bottom: 1px dashed #fff;\n  "}),O=(0,b.css)(f,function(n){return n.docs&&"\n    border: 2px solid #fff;\n    border-radius: 24px;\n  "}),_=e.Item=g.default.a(u,O),E=e.ItemLocal=(0,g.default)(p.default)(u,O)},450:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function l(n,e){return n.raw=e,n}function u(){y.default.set({page:window.location.pathname}),y.default.pageview(window.location.pathname)}e.__esModule=!0;var f=l(["\n  ","\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit; \n  }\n  \n  body {\n    box-sizing: border-box; \n  }\n  \n  body {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: normal;\n    line-height: 1.7;\n    font-size: 16px;\n    color: #020202; \n  }\n"],["\n  ","\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit; \n  }\n  \n  body {\n    box-sizing: border-box; \n  }\n  \n  body {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: normal;\n    line-height: 1.7;\n    font-size: 16px;\n    color: #020202; \n  }\n"]),d=l(["\n  padding: 0px;\n  margin: 0px;\n"],["\n  padding: 0px;\n  margin: 0px;\n"]),c=t(1),s=o(c),p=t(5),b=o(p),g=t(755),m=o(g),h=t(62),y=o(h),x=t(442),v=o(x),w=t(441),k=o(w);
y.default.initialize("UA-97468780-1"),(0,p.injectGlobal)(f,m.default);var O=function(n){function e(){return i(this,e),r(this,n.apply(this,arguments))}return a(e,n),e.prototype.componentDidMount=function(){u()},e.prototype.componentWillUpdate=function(){u()},e.prototype.render=function(){var n=this.props,e=(n.location,n.children),t="/";return t="/",s.default.createElement(_,null,s.default.createElement(v.default,null),e(),s.default.createElement(k.default,null))},e}(s.default.Component);e.default=O;var _=b.default.div(d);n.exports=e.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-1521618757052-b5cd525c350fe44aa5a8.js.map