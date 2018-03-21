webpackJsonp([52357358931610],{62:function(e,n,t){!function(n,r){e.exports=r(t(1),t(7))}("undefined"!=typeof self?self:this,function(e,n){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n,t){"use strict";function r(e){console.warn("[react-ga]",e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},function(e,n,t){"use strict";function r(e){return e.replace(/^\s+|\s+$/g,"")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function a(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function o(e){return(0,k.default)(e,I)}function u(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=t[0];if("function"==typeof R){if("string"!=typeof i)return void(0,L.default)("ga command must be a string");R.apply(void 0,t),Array.isArray(e)&&e.forEach(function(e){R.apply(void 0,a([e+"."+i].concat(t.slice(1))))})}}function l(e,n){return e?(n&&(n.debug&&n.debug===!0&&(z=!0),n.titleCase===!1&&(I=!1)),void(n&&n.gaOptions?R("create",e,n.gaOptions):R("create",e,"auto"))):void(0,L.default)("gaTrackingID is required in initialize()")}function f(e,n){if(n&&n.testMode===!0)J=!0;else{if("undefined"==typeof window)return!1;(0,P.default)(n)}return Array.isArray(e)?e.forEach(function(e){return"object"!==("undefined"==typeof e?"undefined":m(e))?void(0,L.default)("All configs must be an object"):void l(e.trackingId,e)}):l(e,n),!0}function d(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.length>0&&(R.apply(void 0,n),z&&((0,q.default)("called ga('arguments');"),(0,q.default)("with arguments: "+JSON.stringify(n)))),window.ga}function c(e,n){return e?"object"!==("undefined"==typeof e?"undefined":m(e))?void(0,L.default)("Expected `fieldsObject` arg to be an Object"):(0===Object.keys(e).length&&(0,L.default)("empty `fieldsObject` given to .set()"),u(n,"set",e),void(z&&((0,q.default)("called ga('set', fieldsObject);"),(0,q.default)("with fieldsObject: "+JSON.stringify(e))))):void(0,L.default)("`fieldsObject` is required in .set()")}function s(e,n){u(n,"send",e),z&&((0,q.default)("called ga('send', fieldObject);"),(0,q.default)("with fieldObject: "+JSON.stringify(e)),(0,q.default)("with trackers: "+JSON.stringify(n)))}function p(e,n,t){if(!e)return void(0,L.default)("path is required in .pageview()");var r=(0,E.default)(e);if(""===r)return void(0,L.default)("path cannot be an empty string in .pageview()");var i={};if(t&&(i.title=t),"function"==typeof d&&(u(n,"send",h({hitType:"pageview",page:r},i)),z)){(0,q.default)("called ga('send', 'pageview', path);");var a="";t&&(a=" and title: "+t),(0,q.default)("with path: "+r+a)}}function g(e,n){if(!e)return void(0,L.default)("modalName is required in .modalview(modalName)");var t=(0,_.default)((0,E.default)(e));if(""===t)return void(0,L.default)("modalName cannot be an empty string or a single / in .modalview()");if("function"==typeof d){var r="/modal/"+t;u(n,"send","pageview",r),z&&((0,q.default)("called ga('send', 'pageview', path);"),(0,q.default)("with path: "+r))}}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.category,t=e.variable,r=e.value,i=e.label,a=arguments[1];if("function"==typeof d){if(!n||!t||!r||"number"!=typeof r)return void(0,L.default)("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");var u={hitType:"timing",timingCategory:o(n),timingVar:o(t),timingValue:r};i&&(u.timingLabel=o(i)),s(u,a)}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],t=e.category,r=e.action,a=e.label,u=e.value,l=e.nonInteraction,f=e.transport,c=i(e,["category","action","label","value","nonInteraction","transport"]);if("function"==typeof d){if(!t||!r)return void(0,L.default)("args.category AND args.action are required in event()");var p={hitType:"event",eventCategory:o(t),eventAction:o(r)};a&&(p.eventLabel=o(a)),"undefined"!=typeof u&&("number"!=typeof u?(0,L.default)("Expected `args.value` arg to be a Number."):p.eventValue=u),"undefined"!=typeof l&&("boolean"!=typeof l?(0,L.default)("`args.nonInteraction` must be a boolean."):p.nonInteraction=l),"undefined"!=typeof f&&("string"!=typeof f?(0,L.default)("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(f)===-1&&(0,L.default)("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),p.transport=f)),Object.keys(c).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){p[e]=c[e]}),Object.keys(c).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){p[e]=c[e]}),s(p,n)}}function v(e,n){var t=e.description,r=e.fatal;if("function"==typeof d){var i={hitType:"exception"};t&&(i.exDescription=o(t)),"undefined"!=typeof r&&("boolean"!=typeof r?(0,L.default)("`args.fatal` must be a boolean."):i.exFatal=r),s(i,n)}}function x(e,n,t){if("function"!=typeof n)return void(0,L.default)("hitCallback function is required");if("function"==typeof d){if(!e||!e.label)return void(0,L.default)("args.label is required in outboundLink()");var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:o(e.label)},i=!1,a=function(){i=!0,n()},u=setTimeout(a,250),l=function(){clearTimeout(u),i||n()};r.hitCallback=l,s(r,t)}else setTimeout(n,0)}Object.defineProperty(n,"__esModule",{value:!0}),n.testModeAPI=n.OutboundLink=n.plugin=void 0;var h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.initialize=f,n.ga=d,n.set=c,n.send=s,n.pageview=p,n.modalview=g,n.timing=b,n.event=y,n.exception=v,n.outboundLink=x;var w=t(3),k=r(w),O=t(6),_=r(O),j=t(1),E=r(j),A=t(7),P=r(A),M=t(0),L=r(M),C=t(8),q=r(C),S=t(9),N=r(S),T=t(10),D=r(T),z=!1,I=!0,J=!1,R=function(){var e;return J?N.default.ga.apply(N.default,arguments):window.ga?(e=window).ga.apply(e,arguments):(0,L.default)("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually")},W=n.plugin={require:function(e,n){if("function"==typeof d){if(!e)return void(0,L.default)("`name` is required in .require()");var t=(0,E.default)(e);if(""===t)return void(0,L.default)("`name` cannot be an empty string in .require()");if(n){if("object"!==("undefined"==typeof n?"undefined":m(n)))return void(0,L.default)("Expected `options` arg to be an Object");0===Object.keys(n).length&&(0,L.default)("Empty `options` given to .require()"),d("require",t,n),z&&(0,q.default)("called ga('require', '"+t+"', "+JSON.stringify(n))}else d("require",t),z&&(0,q.default)("called ga('require', '"+t+"');")}},execute:function(e,n){var t=void 0,r=void 0;if(1===(arguments.length<=2?0:arguments.length-2)?t=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],t=arguments.length<=3?void 0:arguments[3]),"function"==typeof d)if("string"!=typeof e)(0,L.default)("Expected `pluginName` arg to be a String.");else if("string"!=typeof n)(0,L.default)("Expected `action` arg to be a String.");else{var i=e+":"+n;t=t||null,r&&t?(d(i,r,t),z&&((0,q.default)("called ga('"+i+"');"),(0,q.default)('actionType: "'+r+'" with payload: '+JSON.stringify(t)))):t?(d(i,t),z&&((0,q.default)("called ga('"+i+"');"),(0,q.default)("with payload: "+JSON.stringify(t)))):(d(i),z&&(0,q.default)("called ga('"+i+"');"))}}};D.default.origTrackLink=D.default.trackLink,D.default.trackLink=x;var X=n.OutboundLink=D.default;n.testModeAPI=N.default;n.default={initialize:f,ga:d,set:c,send:s,pageview:p,modalview:g,timing:b,event:y,exception:v,plugin:W,outboundLink:x,OutboundLink:X,testModeAPI:N.default}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return(0,o.default)(e)?((0,d.default)("This arg looks like an email address, redacting."),c):n?(0,l.default)(e):e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i;var a=t(4),o=r(a),u=t(5),l=r(u),f=t(0),d=r(f),c="REDACTED (Potential Email Address)"},function(e,n,t){"use strict";function r(e){return/[^@]+@[^@]+/.test(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(0,o.default)(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,n,t){return n>0&&n+e.length!==t.length&&e.search(u)>-1&&":"!==t.charAt(n-2)&&("-"!==t.charAt(n+e.length)||"-"===t.charAt(n-1))&&t.charAt(n-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i;var a=t(1),o=r(a),u=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},function(e,n,t){"use strict";function r(e){return"/"===e.substring(0,1)?e.substring(1):e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){!function(e,n,t,r,i,a,o){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,a=n.createElement(t),o=n.getElementsByTagName(t)[0],a.async=1,a.src=r,o.parentNode.insertBefore(a,o)}(window,document,"script",e&&e.gaAddress?e.gaAddress:"https://www.google-analytics.com/analytics.js","ga")}},function(e,n,t){"use strict";function r(e){console.info("[react-ga]",e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=n.gaCalls=[];n.default={calls:r,ga:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];r.push([].concat(n))}}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),f=t(11),d=r(f),c=t(12),s=r(c),p=t(0),g=r(p),b="_blank",y=1,v=function(e){function n(){var e,t,r,o;i(this,n);for(var u=arguments.length,l=Array(u),f=0;f<u;f++)l[f]=arguments[f];return t=r=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),r.handleClick=function(e){var t=r.props,i=t.target,a=t.eventLabel,o=t.to,u=t.onClick,l={label:a},f=i!==b,d=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===y);f&&d?(e.preventDefault(),n.trackLink(l,function(){window.location.href=o})):n.trackLink(l,function(){}),u&&u(e)},o=t,a(r,o)}return o(n,e),l(n,[{key:"render",value:function(){var e=u({},this.props,{href:this.props.to,onClick:this.handleClick});return delete e.eventLabel,d.default.createElement("a",e)}}]),n}(f.Component);v.propTypes={eventLabel:s.default.string.isRequired,target:s.default.string,to:s.default.string,onClick:s.default.func},v.defaultProps={target:null,to:null,onClick:null},v.trackLink=function(){(0,g.default)("ga tracking not enabled")},n.default=v},function(n,t){n.exports=e},function(e,t){e.exports=n}])})},92:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0;var a=i([""],[""]),o=i(["\n  text-align: center;\n  font-size: 34px;\n  font-weight: bold;\n"],["\n  text-align: center;\n  font-size: 34px;\n  font-weight: bold;\n"]),u=i(["\n  margin-top: 130px;\n  min-height: 200px;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  justify-content: space-around;\n"],["\n  margin-top: 130px;\n  min-height: 200px;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  justify-content: space-around;\n"]),l=i(["\n  flex-basis: 200px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.3s;\n\n  &:hover {\n    border-radius: 12px;\n    transform: scale(1.05);\n    background: rgba(225, 241, 255, 0.3);\n  }\n"],["\n  flex-basis: 200px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.3s;\n\n  &:hover {\n    border-radius: 12px;\n    transform: scale(1.05);\n    background: rgba(225, 241, 255, 0.3);\n  }\n"]),f=i(["\n  height: 150px;\n  width: 100%;\n\n  background: url(",") no-repeat center center;\n\n  "," "," "," "," ",";\n"],["\n  height: 150px;\n  width: 100%;\n\n  background: url(",") no-repeat center center;\n\n  "," "," "," "," ",";\n"]),d=i(["\n  height: 72px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  height: 72px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),c=i(["\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  outline: none\n  cursor: pointer;\n  \n  padding: 9px 35px 15px 30px;\n  color: #fff;\n  font-weight: bold;\n\n  "," "," "," ",";\n"],["\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  outline: none\n  cursor: pointer;\n  \n  padding: 9px 35px 15px 30px;\n  color: #fff;\n  font-weight: bold;\n\n  "," "," "," ",";\n"]),s=i(["\n  margin: 0px;\n  padding: 0px;\n  color: #bfc6ce;\n  font-weight: bold;\n"],["\n  margin: 0px;\n  padding: 0px;\n  color: #bfc6ce;\n  font-weight: bold;\n"]),p=t(1),g=r(p),b=t(5),y=r(b),v=t(62),x=r(v);x.default.initialize("UA-97468780-1");var h="win",m="osx",w="linux_rpm",k="linux",O="pip",_=function(e){x.default.event({category:"Landing//Download",action:e})},j=function(e){var n=e.id,t=e.link,r=e.icon,i=e.renderDownload,a=e.text,o=e.onClick;return g.default.createElement(M,{href:t,target:"_blank",onClick:function(e){return o()&&"#"===t&&e.preventDefault()}},g.default.createElement(L,{src:"/icons/"+r+".png",type:n}),g.default.createElement(C,null,i?i():g.default.createElement(q,{type:n},a)))};n.default=function(e){var n=e.downloadOSX,t=e.downloadLinux,r=e.downloadLinuxRPM,i=e.downloadWin;return g.default.createElement(E,null,g.default.createElement(A,null,"Please select your operating system"),g.default.createElement(P,null,g.default.createElement(j,{onClick:function(){return _("osx")},id:m,link:n,icon:"osx",text:"OS X"}),g.default.createElement(j,{onClick:function(){return _("linux")},id:k,link:t,icon:"linux",text:"Linux DEB"}),g.default.createElement(j,{onClick:function(){return _("linux_rpm")},id:w,link:r,icon:"linux_rpm",text:"Linux RPM"}),g.default.createElement(j,{onClick:function(){return _("windows")},id:h,link:i,icon:"windows",text:"Windows"}),g.default.createElement(j,{onClick:function(){return _("pip")},id:O,link:"#",icon:"pip",renderDownload:function(){return g.default.createElement(S,null,"$ pip install dvc")}})))};var E=y.default.div(a),A=y.default.h3(o),P=y.default.section(u),M=y.default.a(l),L=y.default.div(f,function(e){return e.src},function(e){return e.type===h&&"background-position-x: 40px;"},function(e){return e.type===m&&" background-position-x: 50px;"},function(e){return e.type===k&&"background-position-x: 50px;"},function(e){return e.type===w&&"background-position-x: 50px;"},function(e){return e.type===O&&"background-position-x: 40px;"}),C=y.default.div(d),q=y.default.button(c,function(e){return e.type===h&&"\n    text-shadow: 0px -1px 0px #008abf;\n    background-image: url('/buttons/windows_button.png');\n  "},function(e){return e.type===m&&"\n    text-shadow: 0px -1px 0px #054086;\n    background-image: url('/buttons/windows_button.png');\n  "},function(e){return e.type===k&&"\n    color: #323232;\n    text-shadow: 0px -1px 0px #ffffff;\n    background-image: url('/buttons/linux_button.png');\n  "},function(e){return e.type===w&&"\n    text-shadow: 0px -1px 0px #607a8b;\n    background-image: url('/buttons/linux_rpm_button.png');\n  "}),S=y.default.p(s);e.exports=n.default},453:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0,n.query=void 0;var a=i([""],[""]),o=i(["\n  ",";\n  margin-top: 40px;\n  margin-bottom: 20px;\n"],["\n  ",";\n  margin-top: 40px;\n  margin-bottom: 20px;\n"]),u=i(["\n  margin-top: -72px;\n  padding-top: 132px;\n  padding-bottom: 50px;\n  background: url(/hills.png) top center no-repeat;\n\n  @media (max-width: 768px) {\n    background-size: cover;\n  }\n"],["\n  margin-top: -72px;\n  padding-top: 132px;\n  padding-bottom: 50px;\n  background: url(/hills.png) top center no-repeat;\n\n  @media (max-width: 768px) {\n    background-size: cover;\n  }\n"]),l=t(1),f=r(l),d=t(5),c=r(d),s=t(16),p=t(92),g=r(p),b=t(67),y=r(b),v=t(66),x=r(v);n.default=function(e){var n=e.data.site.siteMetadata,t=n.downloadOSX,r=n.downloadLinux,i=n.downloadLinuxRPM,a=n.downloadWin,o=n.twitter,u=n.linkedin,l=n.facebook;return f.default.createElement(h,null,f.default.createElement(m,null,f.default.createElement(g.default,{downloadOSX:t,downloadLinux:r,downloadLinuxRPM:i,downloadWin:a})),f.default.createElement(w,null,f.default.createElement(y.default,null),f.default.createElement(x.default,{twitter:o,linkedin:u,facebook:l})))};var h=(n.query="** extracted graphql fragment **",c.default.div(a)),m=c.default.div(o,s.container),w=c.default.div(u)}});
//# sourceMappingURL=component---src-pages-download-js-1521594592594-6a15424bd6bf94a0acc2.js.map