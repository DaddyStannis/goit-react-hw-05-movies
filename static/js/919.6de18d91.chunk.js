(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[919],{713:function(t,n,r){"use strict";function e(t,n,r,e,c,a,u){try{var o=t[a](u),i=o.value}catch(s){return void r(s)}o.done?n(i):Promise.resolve(i).then(e,c)}function c(t){return function(){var n=this,r=arguments;return new Promise((function(c,a){var u=t.apply(n,r);function o(t){e(u,c,a,o,i,"next",t)}function i(t){e(u,c,a,o,i,"throw",t)}o(void 0)}))}}r.d(n,{ot:function(){return b},uV:function(){return d},hd:function(){return v},Hx:function(){return w},FE:function(){return f},YD:function(){return s}});var a=r(757),u=r.n(a),o="6fd348fe18bef9bb707babb2bc9e952a",i="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return p=c(u().mark((function t(){var n,r,e,c=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:1,r=new URLSearchParams({api_key:o,page:n}),e="".concat(i,"trending/movie/day?").concat(r),t.abrupt("return",x(e));case 4:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=c(u().mark((function t(n){var r,e,c,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e=new URLSearchParams({api_key:o,page:r,query:n}),c="".concat(i,"search/movie?").concat(e),t.abrupt("return",x(c));case 4:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function v(t){return l.apply(this,arguments)}function l(){return(l=c(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams({api_key:o}),e="".concat(i,"movie/").concat(n,"?").concat(r),t.abrupt("return",x(e));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=c(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams({api_key:o}),e="".concat(i,"movie/").concat(n,"/credits?").concat(r),t.abrupt("return",x(e));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return y=c(u().mark((function t(n){var r,e,c,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e=new URLSearchParams({api_key:o,page:r}),c="".concat(i,"movie/").concat(n,"/reviews?").concat(e),t.abrupt("return",x(c));case 4:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}function b(t){return g.apply(this,arguments)}function g(){return g=c(u().mark((function t(n){var r,e,c,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:400,e="w".concat(r),c="https://image.tmdb.org/t/p/".concat(e).concat(n),t.abrupt("return",fetch(c).then((function(t){if(t.ok)return t.blob();throw new Error(t.statusText)})));case 4:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return(k=c(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(n).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},919:function(t,n,r){"use strict";r.r(n);var e=r(439),c=r(666),a=r.n(c),u=r(791),o=r(689),i=r(713),s=r(285),p=r(184);n.default=function(){var t=(0,u.useState)([]),n=(0,e.Z)(t,2),r=n[0],c=n[1],f=(0,o.UO)().movieId;(0,u.useEffect)((function(){(0,i.uV)(f).then((function(t){c(t.cast)}))}),[f]);var h=r.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):s.h,alt:t.name,width:"200"}),(0,p.jsx)("h3",{children:t.name}),(0,p.jsxs)("p",{children:["Character: ",(0,p.jsx)("span",{children:t.character})]})]},a()())}));return h.length?(0,p.jsxs)("ul",{children:[" ",h," "]}):(0,p.jsx)("p",{children:"We don't have a cast for this movie."})}},285:function(t,n,r){"use strict";r.d(n,{H:function(){return c},h:function(){return e}});var e="https://inspe.ua/wp-content/themes/inspe/img/no_image.jpg";function c(t){return t<10?"0".concat(t):"".concat(t)}},666:function(t){t.exports=function(){for(var t=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"],n=[],r=0;r<36;r++)n[r]=8===r||13===r||18===r||23===r?"-":t[Math.ceil(Math.random()*t.length-1)];return n.join("")}}}]);
//# sourceMappingURL=919.6de18d91.chunk.js.map