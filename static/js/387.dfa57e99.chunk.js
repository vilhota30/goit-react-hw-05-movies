"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{11:function(n,e,t){var r=t(9439),a=t(2791),c=t(184);e.Z=function(){var n=(0,a.useState)(!1),e=(0,r.Z)(n,2),t=e[0],o=e[1];(0,a.useEffect)((function(){var n=function(){o(window.scrollY>200)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]);return(0,c.jsx)(c.Fragment,{children:t&&(0,c.jsx)("button",{style:{position:"fixed",bottom:"50px",right:"50px",width:"50px",height:"50px",borderRadius:"50%",background:"blue",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px",fontWeight:"bold",border:"3px solid darkblue"},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"\u2b06"})})}},4387:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,o=t(5861),u=t(9439),i=t(4687),s=t.n(i),p=t(2791),d=t(168),l=t(5706),f=l.Z.ul(r||(r=(0,d.Z)(["\npadding-bottom: 20px;\npadding-right: 40px;\nmargin-top: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 16px;\nborder: 3px solid darkblue;\n"]))),x=l.Z.p(a||(a=(0,d.Z)(["\nmargin-top: 20px;\nfont-weight: bold;\nfont-size: 16px;\nborder: 2px solid blue;\nborder-radius: 10px;\nbackground-color: blueviolet;\npadding: 10px;\n"]))),h=l.Z.p(c||(c=(0,d.Z)(["\ntext-align: justify;\nmargin-top: 10px;\npadding: 10px;\nbackground-color: mediumaquamarine;\nborder-radius: 8px;\n"]))),v=t(7689),g=t(2213),b=t(11),m=t(6445),w=t(184),k=function(){var n=(0,v.UO)().movieId,e=(0,p.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],c=(0,p.useState)(!1),i=(0,u.Z)(c,2),d=i[0],l=i[1],k=(0,p.useState)(null),Z=(0,u.Z)(k,2)[1];return(0,p.useEffect)((function(){if(n){var e=function(){var e=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,(0,g.Hx)(n);case 4:t=e.sent,a(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.message);case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n]),null===r||d?(0,w.jsx)(m.Z,{}):(0,w.jsxs)("div",{children:[0===r.length&&(0,w.jsx)(x,{children:"Sorry, but we don't have any reviews for this cast..."}),(0,w.jsx)(f,{children:r.map((function(n){return(0,w.jsxs)("li",{children:[(0,w.jsx)("h3",{children:n.author}),(0,w.jsx)(h,{children:n.content})]},n.id)}))}),(0,w.jsx)(b.Z,{})]})}},2213:function(n,e,t){t.d(e,{Hx:function(){return f},I2:function(){return d},Y5:function(){return p},uV:function(){return l},vw:function(){return s}});var r=t(5861),a=t(4687),c=t.n(a),o=t(1243),u="c00883a4a0634ee096d1e1aebe08bf2c",i="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,a.length>1&&void 0!==a[1]?a[1]:12,n.next=4,o.Z.get("".concat(i,"trending/movie/day?language=en-US&api_key=").concat(u,"&page=").concat(e));case 4:return t=n.sent,r=t.data,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(e,"?language=en-US&api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/search/movie?query=").concat(e,"&include_adult=false&language=en-US&api_key=").concat(u,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?language=en-US&api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?language=en-US&api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.dfa57e99.chunk.js.map