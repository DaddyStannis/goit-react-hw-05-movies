(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[470],{713:function(n,t,e){"use strict";function r(n,t,e,r,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?t(u):Promise.resolve(u).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,c){var i=n.apply(t,e);function o(n){r(i,a,c,o,u,"next",n)}function u(n){r(i,a,c,o,u,"throw",n)}o(void 0)}))}}e.d(t,{ot:function(){return j},uV:function(){return v},hd:function(){return h},Hx:function(){return x},FE:function(){return p},YD:function(){return s}});var c=e(757),i=e.n(c),o="6fd348fe18bef9bb707babb2bc9e952a",u="https://api.themoviedb.org/3/";function s(){return f.apply(this,arguments)}function f(){return f=a(i().mark((function n(){var t,e,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e=new URLSearchParams({api_key:o,page:t}),r="".concat(u,"trending/movie/day?").concat(e),n.abrupt("return",y(r));case 4:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return l=a(i().mark((function n(t){var e,r,a,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:1,r=new URLSearchParams({api_key:o,page:e,query:t}),a="".concat(u,"search/movie?").concat(r),n.abrupt("return",y(a));case 4:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=a(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:o}),r="".concat(u,"movie/").concat(t,"?").concat(e),n.abrupt("return",y(r));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=a(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:o}),r="".concat(u,"movie/").concat(t,"/credits?").concat(e),n.abrupt("return",y(r));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return w=a(i().mark((function n(t){var e,r,a,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:1,r=new URLSearchParams({api_key:o,page:e}),a="".concat(u,"movie/").concat(t,"/reviews?").concat(r),n.abrupt("return",y(a));case 4:case"end":return n.stop()}}),n)}))),w.apply(this,arguments)}function j(n){return b.apply(this,arguments)}function b(){return b=a(i().mark((function n(t){var e,r,a,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:400,r="w".concat(e),a="https://image.tmdb.org/t/p/".concat(r).concat(t),n.abrupt("return",fetch(a).then((function(n){if(n.ok)return n.blob();throw new Error(n.statusText)})));case 4:case"end":return n.stop()}}),n)}))),b.apply(this,arguments)}function y(n){return g.apply(this,arguments)}function g(){return(g=a(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(t).then((function(n){if(n.ok)return n.json();throw new Error(n.statusText)})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},470:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return d}});var r=e(439),a=e(791),c=e(666),i=e.n(c),o=e(87),u=e(689),s=e(713),f=e(938),p=e(642),l={content:"movie-detail-page_content__oS-Cz",button:"movie-detail-page_button__AIuFJ"},h=e(184),d=function(){var n,t,e=(0,u.UO)().movieId,c=(0,a.useState)(null),d=(0,r.Z)(c,2),v=d[0],m=d[1],x=(0,a.useState)(null),w=(0,r.Z)(x,2),j=w[0],b=w[1],y=(0,a.useState)(!1),g=(0,r.Z)(y,2),_=g[0],k=g[1],S=(0,a.useState)(null),L=(0,r.Z)(S,2),U=L[0],R=L[1],P=(0,u.s0)(),Z=(0,u.TH)();(0,a.useEffect)((function(){k(!0),(0,s.hd)(e).then((function(n){m(n),(0,s.ot)(n.poster_path).then((function(n){b(URL.createObjectURL(n))}))})).catch((function(n){R(n.message)})).finally((function(){return k(!1)}))}),[e]);var C=new Date(null===v||void 0===v?void 0:v.release_date).getFullYear(),N=null===v||void 0===v?void 0:v.genres.map((function(n){return n.name})).join(", ");return(0,h.jsxs)("section",{children:[(0,h.jsx)("button",{className:l.button,onClick:function(n){var t;P(null===(t=Z.state)||void 0===t?void 0:t.from)},children:"Go back"}),_&&(0,h.jsx)(f.Z,{}),U&&(0,h.jsx)(p.Z,{errorMessage:U}),v&&(0,h.jsxs)("div",{className:l.content,children:[(0,h.jsx)("img",{src:j,alt:v.title}),(0,h.jsxs)("div",{className:l.info,children:[(0,h.jsxs)("h2",{className:l["movie-name"],children:[v.original_title,"(",(0,h.jsx)("span",{children:C}),")"]}),(0,h.jsxs)("p",{children:["User score",(0,h.jsx)("span",{})]}),(0,h.jsx)("h3",{children:"Overwiev"}),(0,h.jsx)("p",{children:v.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:N})]})]}),(0,h.jsxs)("div",{className:l.submenu,children:[(0,h.jsx)("h4",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"cast",state:{from:null===(n=Z.state)||void 0===n?void 0:n.from},children:"Cast"})},i()()),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"reviews",state:{from:null===(t=Z.state)||void 0===t?void 0:t.from},children:"Reviews"})},i()())]})]}),(0,h.jsx)(u.j3,{})]})}},642:function(n,t,e){"use strict";var r=e(184);t.Z=function(n){var t=n.errorMessage;return(0,r.jsx)("p",{style:{color:"red",fontSize:"20px"},children:t})}},666:function(n){n.exports=function(){for(var n=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"],t=[],e=0;e<36;e++)t[e]=8===e||13===e||18===e||23===e?"-":n[Math.ceil(Math.random()*n.length-1)];return t.join("")}}}]);
//# sourceMappingURL=470.f14a3fcf.chunk.js.map