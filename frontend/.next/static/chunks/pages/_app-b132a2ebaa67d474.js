(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(9819)}])},8418:function(a,b,c){"use strict";function d(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}b.default=void 0;var e,f=(e=c(7294))&&e.__esModule?e:{default:e},g=c(6273),h=c(387),i=c(7190),j={};function k(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;j[b+"%"+c+(e?"%"+e:"")]=!0}}b.default=function(a){var b,c=!1!==a.prefetch,e=h.useRouter(),l=f.default.useMemo(function(){var b=d(g.resolveHref(e,a.href,!0),2),c=b[0],f=b[1];return{href:c,as:a.as?g.resolveHref(e,a.as):f||c}},[e,a.href,a.as]),m=l.href,n=l.as,o=a.children,p=a.replace,q=a.shallow,r=a.scroll,s=a.locale;"string"==typeof o&&(o=f.default.createElement("a",null,o));var t=(b=f.default.Children.only(o))&&"object"==typeof b&&b.ref,u=d(i.useIntersection({rootMargin:"200px"}),2),v=u[0],w=u[1],x=f.default.useCallback(function(a){v(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,v]);f.default.useEffect(function(){var a=w&&c&&g.isLocalURL(m),b=void 0!==s?s:e&&e.locale,d=j[m+"%"+n+(b?"%"+b:"")];a&&!d&&k(e,m,n,{locale:b})},[n,m,w,s,c,e]);var y={ref:x,onClick:function(a){var c,d,f,h,i,j,k,l,o,t;b.props&&"function"==typeof b.props.onClick&&b.props.onClick(a),a.defaultPrevented||(c=a,d=e,f=m,h=n,i=p,j=q,k=r,l=s,"A"===c.currentTarget.nodeName&&((t=(o=c).currentTarget.target)&&"_self"!==t||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.nativeEvent&&2===o.nativeEvent.which||!g.isLocalURL(f))||(c.preventDefault(),null==k&&h.indexOf("#")>=0&&(k=!1),d[i?"replace":"push"](f,h,{shallow:j,locale:l,scroll:k})))}};if(y.onMouseEnter=function(a){g.isLocalURL(m)&&(b.props&&"function"==typeof b.props.onMouseEnter&&b.props.onMouseEnter(a),k(e,m,n,{priority:!0}))},a.passHref||"a"===b.type&&!("href"in b.props)){var z=void 0!==s?s:e&&e.locale,A=e&&e.isLocaleDomain&&g.getDomainLocale(n,z,e&&e.locales,e&&e.domainLocales);y.href=A||g.addBasePath(g.addLocale(n,z,e&&e.defaultLocale))}return f.default.cloneElement(b,y)}},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b,c=a.rootMargin,h=a.disabled||!f,i=d.useRef(),j=function(a){if(Array.isArray(a))return a}(b=d.useState(!1))||function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c}(b,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),k=j[0],l=j[1],m=d.useCallback(function(a){i.current&&(i.current(),i.current=void 0),!h&&!k&&a&&a.tagName&&(i.current=g(a,function(a){return a&&l(a)},{rootMargin:c}))},[h,c,k]);return d.useEffect(function(){if(!f&&!k){var a=e.requestIdleCallback(function(){return l(!0)});return function(){return e.cancelIdleCallback(a)}}},[k]),[m,k]};var d=c(7294),e=c(9311),f="undefined"!=typeof IntersectionObserver;function g(a,b,c){var d=i(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){g.delete(a),f.unobserve(a),0===g.size&&(f.disconnect(),h.delete(e))}}var h=new Map();function i(a){var b=a.rootMargin||"",c=h.get(b);if(c)return c;var d=new Map(),e=new IntersectionObserver(function(a){a.forEach(function(a){var b=d.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return h.set(b,c={id:b,observer:e,elements:d}),c}},9819:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return I}});var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=c(5893),u=c(9008),v=function(a){var b=a.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(function(){return(0,t.jsx)("div",{children:(0,t.jsxs)(u.default,{children:[(0,t.jsx)("title",{children:"fc"}),(0,t.jsx)("meta",{name:"description",content:"fc"}),(0,t.jsx)("meta",{charset:"utf-8"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})})},{}),(0,t.jsx)("div",{children:b})]})},w=c(7566),x=c.n(w),y=c(7294);function z(){return(z=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function A(){return(A=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function B(){return(B=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function C(){return(C=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function D(){return(D=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function E(){return(E=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function F(){return(F=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var G=c(1664);function H(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c(5828);var I=function(a){var b=a.Component,c=a.pageProps;return(0,t.jsxs)(v,{children:[(0,t.jsxs)("div",{id:"root",children:[(0,t.jsx)(function(){return(0,t.jsxs)("header",{className:x().header,children:[(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:x().sns_wrapper,children:[(0,t.jsx)("div",{children:(0,t.jsx)(function(a){return y.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:28.346,height:28.346},a),d||(d=y.createElement("path",{fill:"current",d:"M17.844 6.217v2.854h-1.552c-.462 0-.756.126-.904.377-.104.169-.146.462-.146.861v1.301h2.645l-.313 2.876h-2.331v8.29h-3.419v-8.29h-1.679V11.61h1.679V9.89c0-1.763.609-2.897 1.805-3.379a4.207 4.207 0 011.615-.293h2.6z"})))},{})}),(0,t.jsx)("div",{children:(0,t.jsx)(function(a){return y.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",width:28.346,height:28.346},a),e||(e=y.createElement("g",{fill:"current"},y.createElement("path",{d:"M10.517 13.455h.848l-.424-.923z"}),y.createElement("path",{d:"M14.174 1.502C6.526 1.502.324 6.398.324 12.441c0 3.588 2.196 6.774 5.576 8.771.71.419.089 1.46.089 1.46l-2.78 3.64a.4.4 0 00.101.416.395.395 0 00.282.116.393.393 0 00.24-.091s1.705-.342 4.096-1.512c1.949-.879 3.751-2.044 3.751-2.044.815.117 1.646.183 2.495.183 7.646 0 13.848-4.896 13.848-10.938 0-6.044-6.201-10.94-13.848-10.94zM7.167 15.577h-.003c.001.015.003.029.003.045a.975.975 0 11-1.951 0l.001-.045v-4.609H3.908v-.004a.89.89 0 010-1.776v-.001h4.35a.89.89 0 010 1.782H7.167v4.608zm17.119.976a.97.97 0 01-.776-.388l-.001.001-1.695-2.295-.357.357v1.375a.973.973 0 01-1.888.334.834.834 0 01-.809.642v.02h-3.641v-.024a.976.976 0 01-.807-.594c-.014.035-.023.074-.042.107a.974.974 0 01-.857.511h-.001a.976.976 0 01-.176-.018 1.049 1.049 0 01-.139-.036l-.023-.008a.99.99 0 01-.132-.061l-.006-.003a.89.89 0 01-.125-.085l-.005-.003a.915.915 0 01-.117-.112.967.967 0 01-.222-.418l-.316-.688h-2.42l-.315.688a.976.976 0 11-1.855-.59l.002-.005c.012-.027.024-.055.038-.083l2.364-5.189a.975.975 0 01.96-.801h.033c.479 0 .877.345.959.801l2.318 5.09v-4.727h.008a.977.977 0 111.937 0h.007v4.561h2.574a.83.83 0 01.745.472v-5.14a.976.976 0 111.952 0v1.227l1.87-1.871a.968.968 0 01.729-.332.976.976 0 01.727 1.625l.002.002-.015.015-.047.047-1.519 1.52 1.84 2.489a.976.976 0 01-.759 1.587z"}))))},{})}),(0,t.jsx)("div",{children:(0,t.jsx)(function(a){return y.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:28.346,height:28.346},a),f||(f=y.createElement("g",{fill:"current"},y.createElement("path",{d:"M19.939 1.052H8.407C4.262 1.052.889 4.424.889 8.57v11.208c0 4.144 3.373 7.517 7.518 7.517h11.532c4.145 0 7.518-3.373 7.518-7.517V8.57c-.001-4.146-3.374-7.518-7.518-7.518zm5.088 18.726a5.094 5.094 0 01-5.088 5.088H8.407a5.093 5.093 0 01-5.086-5.088V8.57a5.095 5.095 0 015.086-5.089h11.532a5.095 5.095 0 015.088 5.089v11.208z"}),y.createElement("path",{d:"M14.173 7.286a6.894 6.894 0 00-6.887 6.888c0 3.798 3.088 6.885 6.887 6.885s6.887-3.087 6.887-6.885a6.894 6.894 0 00-6.887-6.888zm0 11.343c-2.458 0-4.457-1.997-4.457-4.455s1.999-4.457 4.457-4.457c2.457 0 4.455 1.999 4.455 4.457s-1.998 4.455-4.455 4.455z"}),y.createElement("circle",{cx:21.302,cy:7.154,r:1.62}))))},{})})]})},{}),(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:x().logo_wrapper,children:[(0,t.jsxs)("div",{className:x().search_wrapper,children:[(0,t.jsx)("input",{type:"text",placeholder:"search",autoComplete:"false"}),(0,t.jsx)("div",{className:x().ic_search,children:(0,t.jsx)(function(a){return y.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",width:28.346,height:28.346},a),g||(g=y.createElement("circle",{fill:"none",stroke:"current",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,cx:11.355,cy:11.313,r:9.067})),h||(h=y.createElement("path",{fill:"none",stroke:"current",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M17.765 17.722l8.752 8.753"})))},{})})]}),(0,t.jsx)("h1",{children:"Logo"}),(0,t.jsxs)("div",{className:x().session_wrapper,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(function(a){return y.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:28.346,height:28.346},a),i||(i=y.createElement("path",{fill:"none",stroke:"current",strokeWidth:2,strokeLinejoin:"round",strokeMiterlimit:10,d:"M7.318 3.423h17.5v21.5h-17.5"})),j||(j=y.createElement("path",{fill:"current",d:"M10.765 21.133l8.131-6.959-8.131-6.961v4.207H2.472v5.505h8.293z"})))},{}),(0,t.jsx)("span",{className:x().session_text,children:"LOGIN"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(function(a){return y.createElement("svg",F({baseProfile:"tiny",xmlns:"http://www.w3.org/2000/svg",width:28.346,height:28.346},a),q||(q=y.createElement("circle",{fill:"none",stroke:"current",strokeWidth:2,strokeMiterlimit:10,cx:14.173,cy:14.173,r:12.856})),r||(r=y.createElement("path",{fill:"none",stroke:"current",strokeWidth:2,strokeMiterlimit:10,d:"M14.173 27.03s7.373-3.443 7.373-12.856-7.373-12.857-7.373-12.857"})),s||(s=y.createElement("path",{fill:"none",stroke:"current",strokeWidth:2,strokeMiterlimit:10,d:"M14.173 27.03s-6.911-3.443-6.911-12.856 6.911-12.856 6.911-12.856M2.542 9.689h23.266M2.542 19.25h23.266M14.173 1.317v25.559"})))},{}),(0,t.jsx)("span",{className:x().session_text,children:"LANGUAGE"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(function(a){return y.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:28.346,height:28.346},a),k||(k=y.createElement("path",{fill:"none",stroke:"current",strokeWidth:2,strokeMiterlimit:10,d:"M26.892 14.479c0 6.171-5.694 11.172-12.719 11.172S1.454 20.65 1.454 14.479c0-6.23 8.43-.967 10.594-4.734 1.688-2.938-.691-4.714 2.125-6.438C18.048.936 26.892 5.623 26.892 14.479z"})),l||(l=y.createElement("ellipse",{fill:"current",cx:8.486,cy:19.092,rx:1.688,ry:1.469})),m||(m=y.createElement("ellipse",{fill:"current",cx:18.486,cy:8.842,rx:2.549,ry:2.219})),n||(n=y.createElement("ellipse",{fill:"current",cx:13.267,cy:21.248,rx:1.688,ry:1.469})),o||(o=y.createElement("ellipse",{fill:"current",cx:18.486,cy:20.561,rx:1.688,ry:1.469})),p||(p=y.createElement("ellipse",{fill:"current",cx:22.142,cy:17.405,rx:1.688,ry:1.469})))},{})})]})]})},{}),(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:x().gnb_wrapper,children:[(0,t.jsx)(G.default,{href:"#",children:"가이드"}),(0,t.jsx)(G.default,{href:"#",children:"내 지갑"}),(0,t.jsx)(G.default,{href:"#",children:"투자정보"}),(0,t.jsx)(G.default,{href:"#",children:"거래소"}),(0,t.jsx)(G.default,{href:"#",children:"관심종목"}),(0,t.jsx)(G.default,{href:"#",children:"고객센터"})]})},{})]})},{}),(0,t.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){H(a,b,c[b])})}return a}({},c)),(0,t.jsx)(function(){return(0,t.jsx)("footer",{children:"footer"})},{})]}),(0,t.jsx)("div",{id:"modal"})]})}},5828:function(){},7566:function(a){a.exports={header:"_header_header__3b9xY",sns_wrapper:"_header_sns_wrapper__fmfSq",logo_wrapper:"_header_logo_wrapper__2Uww7",search_wrapper:"_header_search_wrapper__qk70j",ic_search:"_header_ic_search__gHcSg",session_wrapper:"_header_session_wrapper__39BhE",session_text:"_header_session_text__2gsVl",gnb_wrapper:"_header_gnb_wrapper__1Ol8k"}},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1780),b(387)}),_N_E=a.O()}])