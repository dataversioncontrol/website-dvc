webpackJsonp([79611799117203,60335399758886],{301:function(n,e){n.exports={layoutContext:{}}},435:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(1),a=o(r),l=t(449),u=o(l),d=t(301),s=o(d);e.default=function(n){return a.default.createElement(u.default,i({},n,s.default))},n.exports=e.default},754:function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(e,"__esModule",{value:!0}),e.normalize=e.version=void 0;var i=o(['\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n\n  pre {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  a {\n    background-color: transparent;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  textarea {\n    overflow: auto;\n  }\n\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  details {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none;\n  }\n'],['\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n\n  pre {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  a {\n    background-color: transparent;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  textarea {\n    overflow: auto;\n  }\n\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  details {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none;\n  }\n']),r=t(5),a=(e.version="8.0.0",e.normalize=(0,r.css)(i));e.default=a},90:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0,e.Wrapper=void 0;var r=i(["\n  width: 24px;\n  height: 18px;\n  outline: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n"],["\n  width: 24px;\n  height: 18px;\n  outline: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n"]),a=i(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]),l=i(["\n  content: '';\n  position: absolute;\n  background: #6772e5;\n  border-radius: 1px;\n  left: 0px;\n  right: 0px;\n  top: 7px;\n  height: 2px;\n  transform: rotate(45deg);\n  transition: background 0.1s;\n"],["\n  content: '';\n  position: absolute;\n  background: #6772e5;\n  border-radius: 1px;\n  left: 0px;\n  right: 0px;\n  top: 7px;\n  height: 2px;\n  transform: rotate(45deg);\n  transition: background 0.1s;\n"]),u=i(["\n  transform: rotate(-45deg);\n"],["\n  transform: rotate(-45deg);\n"]),d=t(1),s=o(d),p=t(5),f=o(p);e.default=function(n){var e=n.onClick,t=void 0===e?function(){}:e;return s.default.createElement(c,{onClick:t},s.default.createElement(m,null,s.default.createElement(b,null),s.default.createElement(x,null)))};var c=e.Wrapper=f.default.button(r),m=f.default.div(a),b=f.default.div(l),x=b.extend(u)},440:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0;var r=i(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"],["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]),a=i(["\n  margin: 0px;\n  padding: 0px;\n"],["\n  margin: 0px;\n  padding: 0px;\n"]),l=i(["\n  vertical-align: -2px;\n  width: 16px;\n"],["\n  vertical-align: -2px;\n  width: 16px;\n"]),u=i(["\n  min-height: 96px;\n  background: #1b1b1b;\n  padding-top: 12px;\n  padding-bottom: 16px;\n  color: #fff;\n"],["\n  min-height: 96px;\n  background: #1b1b1b;\n  padding-top: 12px;\n  padding-bottom: 16px;\n  color: #fff;\n"]),d=i(["\n  "," display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"],["\n  "," display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]),s=i(["\n  img {\n    height: 64px;\n  }\n"],["\n  img {\n    height: 64px;\n  }\n"]),p=i(["\n  "," flex-basis: 370px;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    align-items: flex-start;\n    text-align: left;\n    flex-basis: auto;\n  }\n"],["\n  "," flex-basis: 370px;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    align-items: flex-start;\n    text-align: left;\n    flex-basis: auto;\n  }\n"]),f=i(["\n  "," flex-basis: 170px;\n  align-items: flex-end;\n\n  @media (max-width: 768px) {\n    align-items: flex-start;\n    flex-basis: auto;\n  }\n"],["\n  "," flex-basis: 170px;\n  align-items: flex-end;\n\n  @media (max-width: 768px) {\n    align-items: flex-start;\n    flex-basis: auto;\n  }\n"]),c=i(["\n  color: #49b9f3;\n\n  &:hover {\n    color: #49b9f3;\n  }\n"],["\n  color: #49b9f3;\n\n  &:hover {\n    color: #49b9f3;\n  }\n"]),m=t(1),b=o(m),x=t(5),g=o(x),h=t(38),y=(o(h),t(356)),w=o(y),v=t(16),k=function(n){return"http://twitter.com/"+n};e.default=function(n){var e=n.blog,t=void 0===e?"https://blog.dataversioncontrol.com/":e,o=n.twitter,i=void 0===o?"FullStackML":o;return b.default.createElement(j,null,b.default.createElement(M,null,b.default.createElement(O,null,b.default.createElement(w.default,null)),b.default.createElement(C,null,b.default.createElement(E,null,"© 2018 Iterative, Inc."),b.default.createElement(E,null,b.default.createElement(P,{href:"mailto:info@dataversioncontrol.com"},"info@dataversioncontrol.com"))),b.default.createElement(T,null,b.default.createElement(E,null,b.default.createElement(P,{href:t},"Blog")),b.default.createElement(E,null,b.default.createElement(P,{href:k(i)},b.default.createElement(_,{src:"twitter.png"}),"@FullStackML")))))};var z=(0,x.css)(r),E=g.default.p(a),_=g.default.img(l),j=g.default.div(u),M=g.default.div(d,v.container),O=g.default.div(s),C=g.default.div(p,z),T=g.default.div(f,z),P=g.default.a(c);n.exports=e.default},441:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},d=i(["\n  background: #1b1b1b;\n  height: 105px;\n\n  "," {\n  }\n\n  @media (max-width: 768px) {\n    padding-top: 10px;\n  }\n"],["\n  background: #1b1b1b;\n  height: 105px;\n\n  "," {\n  }\n\n  @media (max-width: 768px) {\n    padding-top: 10px;\n  }\n"]),s=i(["\n  "," padding-top: 10px;\n  padding-bottom: 2px;\n  display: flex;\n  justify-content: space-between;\n\n  align-items: center;\n\n  @media (max-width: 768px) {\n    justify-content: space-between;\n  }\n"],["\n  "," padding-top: 10px;\n  padding-bottom: 2px;\n  display: flex;\n  justify-content: space-between;\n\n  align-items: center;\n\n  @media (max-width: 768px) {\n    justify-content: space-between;\n  }\n"]),p=t(1),f=o(p),c=t(5),m=o(c),b=t(356),x=o(b),g=t(447),h=o(g),y=t(16),w={getStarted:"https://medium.com/m/global-identity?redirectUrl=https://blog.dataversioncontrol.com/data-version-control-tutorial-9146715eda46",blog:"https://blog.dataversioncontrol.com/",support:"/support",docs:"/docs",discuss:"http://discuss.dataversioncontrol.com/"},v=function(n){function e(){var t,o,i;r(this,e);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return t=o=a(this,n.call.apply(n,[this].concat(u))),o.state={open:!1},o.toggleOpen=function(){return o.setState(function(n){return{open:!n.open}})},i=t,a(o,i)}return l(e,n),e.prototype.render=function(){var n=this.state.open;return f.default.createElement(k,null,f.default.createElement(z,null,f.default.createElement(x.default,null),f.default.createElement(h.default,u({},w,{open:n,onToggle:this.toggleOpen}))))},e}(p.Component);e.default=v;var k=m.default.div(d,g.TopMenu),z=m.default.div(s,y.container);n.exports=e.default},356:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0;var r=i([""],[""]),a=t(1),l=o(a),u=t(38),d=o(u),s=t(5),p=o(s);e.default=function(){return l.default.createElement(f,{to:"/"},l.default.createElement("img",{src:"/logo.png",height:"85"}))};var f=(0,p.default)(d.default)(r);n.exports=e.default},447:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0,e.ItemLocal=e.Item=e.TopMenu=void 0;var r=i([""],[""]),a=i(["\n  background: transparent;\n  border: none;\n  display: none;\n  background: transparent;\n\n  @media (max-width: 768px) {\n    display: block;\n    position: absolute;\n    right: 15px;\n    top: 15px;\n\n    z-index: 999999;\n  }\n"],["\n  background: transparent;\n  border: none;\n  display: none;\n  background: transparent;\n\n  @media (max-width: 768px) {\n    display: block;\n    position: absolute;\n    right: 15px;\n    top: 15px;\n\n    z-index: 999999;\n  }\n"]),l=i(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  padding-bottom: 10px;\n\n  @media (max-width: 768px) {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    flex-direction: column;\n\n    background: #fff;\n    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    flex-grow: 1;\n    transform: scale(0.95);\n    transform-origin: 100% 0;\n    will-change: transform, opacity;\n    transition-property: transform, opacity;\n    transition-duration: 0.25s;\n\n    z-index: -10;\n\n    align-items: start;\n\n    transform: scale(0.95);\n    opacity: 0;\n\n    ",";\n  }\n"],["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  padding-bottom: 10px;\n\n  @media (max-width: 768px) {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    flex-direction: column;\n\n    background: #fff;\n    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    flex-grow: 1;\n    transform: scale(0.95);\n    transform-origin: 100% 0;\n    will-change: transform, opacity;\n    transition-property: transform, opacity;\n    transition-duration: 0.25s;\n\n    z-index: -10;\n\n    align-items: start;\n\n    transform: scale(0.95);\n    opacity: 0;\n\n    ",";\n  }\n"]),u=i(["\n  ",";\n"],["\n  ",";\n"]),d=i(["\n  font-size: 18px;\n  padding: 0px 25px;\n  line-height: 38px;\n  margin-left: 30px;\n  color: #fff;\n  text-decoration: none;\n\n  ",";\n\n  @media (max-width: 768px) {\n    color: #000;\n    line-height: 60px;\n    margin-left: 0px;\n    padding-left: 30px;\n    align-items: flex-start;\n    width: 100%;\n  }\n"],["\n  font-size: 18px;\n  padding: 0px 25px;\n  line-height: 38px;\n  margin-left: 30px;\n  color: #fff;\n  text-decoration: none;\n\n  ",";\n\n  @media (max-width: 768px) {\n    color: #000;\n    line-height: 60px;\n    margin-left: 0px;\n    padding-left: 30px;\n    align-items: flex-start;\n    width: 100%;\n  }\n"]),s=t(1),p=o(s),f=t(38),c=o(f),m=t(5),b=o(m),x=t(90),g=o(x),h=function(){return p.default.createElement("svg",{height:"24",viewBox:"0 0 12 16",version:"1.1",width:"18","aria-hidden":"true"},p.default.createElement("path",{fill:"rgb(255, 255, 255)",d:"M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"}))};e.default=function(n){var e=n.open,t=n.getStarted,o=n.blog,i=n.support,r=n.docs,a=n.discuss,l=n.onToggle,u=void 0===l?function(){}:l;return p.default.createElement(y,null,p.default.createElement(w,{onClick:function(){return u()}},e?p.default.createElement(g.default,null):p.default.createElement(h,null)),p.default.createElement(v,{visible:e},p.default.createElement(_,{to:"/",onClick:function(){return u()}},p.default.createElement(k,null,"Home")),p.default.createElement(E,{href:t,onClick:function(){return u()}},p.default.createElement(k,null,"Tutorial")),p.default.createElement(E,{href:o,onClick:function(){return u()}},p.default.createElement(k,null,"Blog")),p.default.createElement(_,{to:i,onClick:function(){return u()}},p.default.createElement(k,null,"Support")),p.default.createElement(E,{href:a,onClick:function(){return u()}},p.default.createElement(k,null,"Discuss")),p.default.createElement(_,{to:r,docs:!0,onClick:function(){return u()}},p.default.createElement(k,{noline:!0},"Docs"))))};var y=b.default.div(r),w=b.default.div(a),v=e.TopMenu=b.default.div(l,function(n){return n.visible&&"\n         z-index: 888888;\n    transform: none;\n    opacity: 1;\n    pointer-events: auto;\n    "}),k=b.default.span(u,function(n){return!n.noline&&"\n  border-bottom: 1px dashed #fff;\n  "}),z=(0,m.css)(d,function(n){return n.docs&&"\n    border: 2px solid #fff;\n    border-radius: 24px;\n  "}),E=e.Item=b.default.a(u,z),_=e.ItemLocal=(0,b.default)(c.default)(u,z)},449:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function l(n,e){return n.raw=e,n}e.__esModule=!0;var u=l(["\n  ","\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit; \n  }\n  \n  body {\n    box-sizing: border-box; \n  }\n  \n  body {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: normal;\n    line-height: 1.7;\n    font-size: 16px;\n    color: #020202; \n  }\n"],["\n  ","\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit; \n  }\n  \n  body {\n    box-sizing: border-box; \n  }\n  \n  body {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: normal;\n    line-height: 1.7;\n    font-size: 16px;\n    color: #020202; \n  }\n"]),d=l(["\n  padding: 0px;\n  margin: 0px;\n"],["\n  padding: 0px;\n  margin: 0px;\n"]),s=t(1),p=o(s),f=t(5),c=o(f),m=t(754),b=o(m),x=t(441),g=o(x),h=t(440),y=o(h);(0,f.injectGlobal)(u,b.default);var w=function(n){function e(){return i(this,e),r(this,n.apply(this,arguments))}return a(e,n),e.prototype.render=function(){var n=this.props,e=(n.location,n.children),t="/";return t="/",p.default.createElement(v,null,p.default.createElement(g.default,null),e(),p.default.createElement(y.default,null))},e}(p.default.Component);e.default=w;var v=c.default.div(d);n.exports=e.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-1521590244874-92fb60eb7e7ba6fa039f.js.map