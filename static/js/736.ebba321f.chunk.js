"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{11:function(n,e,t){var r=t(9439),a=t(2791),o=t(184);e.Z=function(){var n=(0,a.useState)(!1),e=(0,r.Z)(n,2),t=e[0],c=e[1];(0,a.useEffect)((function(){var n=function(){c(window.scrollY>200)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]);return(0,o.jsx)(o.Fragment,{children:t&&(0,o.jsx)("button",{style:{position:"fixed",bottom:"50px",right:"50px",width:"50px",height:"50px",borderRadius:"50%",background:"blue",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px",fontWeight:"bold",border:"3px solid darkblue"},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"\u2b06"})})}},9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,o,c=t(5861),i=t(9439),u=t(4687),s=t.n(u),p=t(2791),l=t(2213),d=t(7689),f=t(168),h=t(5706),g=h.Z.ul(r||(r=(0,f.Z)(["\npadding-bottom: 20px;\nmargin-top: 20px;\ndisplay: flex;\nflex-wrap: wrap;\nflex-direction: row;\nalign-items: center;\njustify-content: space-evenly;\ngap: 16px;\nborder-bottom: 2px solid black;\n"]))),v=h.Z.li(a||(a=(0,f.Z)(["\nbackground-color: cornflowerblue;\nborder: 3px solid darkblue;\nborder-radius: 8px;\n&&:hover,\n&&:focus{\n    cursor: pointer;\n    box-shadow: 0 2px 4px 2px grey;\n    transform: scale(1.07);\n}\n"]))),x=h.Z.p(o||(o=(0,f.Z)(["\nmargin-top: 20px;\nfont-weight: bold;\nfont-size: 18px;\nborder: 2px solid darkblue;\nborder-radius: 10px;\ncolor: white;\nbackground-color: darkblue;\npadding: 10px;\ntext-decoration: wavy;\n\n&&:hover,\n&&:focus{\n    color: darkblue;\n    background-color:  white;\n}\n"]))),w=t(11),m=t(184),b=function(){var n=(0,d.UO)().movieId,e=(0,p.useState)([]),t=(0,i.Z)(e,2),r=t[0],a=t[1],o=(0,p.useState)(!1),u=(0,i.Z)(o,2)[1],f=(0,p.useState)(null),h=(0,i.Z)(f,2)[1];return(0,p.useEffect)((function(){if(n){var e=function(){var e=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,(0,l.uV)(n);case 4:t=e.sent,a(t.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h(e.t0.message);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[r,n]),(0,m.jsxs)("div",{children:[0===r.length&&(0,m.jsx)("p",{children:"Sorry, but we don't have any cast for this movie"}),(0,m.jsx)(g,{children:r.map((function(n){return(0,m.jsx)(v,{children:(0,m.jsxs)("a",{href:"https://www.google.com/search?q="+n.original_name,rel:"noreferrer noopener",target:"_blank",children:[(0,m.jsx)("img",{width:250,src:n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:"https://www.tgv.com.my/assets/images/404/movie-poster.jpg",alt:n.original_name}),(0,m.jsx)(x,{children:n.original_name})]})},n.id)}))}),(0,m.jsx)(w.Z,{})]})}},2213:function(n,e,t){t.d(e,{Hx:function(){return f},I2:function(){return l},Y5:function(){return p},uV:function(){return d},vw:function(){return s}});var r=t(5861),a=t(4687),o=t.n(a),c=t(1243),i="c00883a4a0634ee096d1e1aebe08bf2c",u="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,a.length>1&&void 0!==a[1]?a[1]:12,n.next=4,c.Z.get("".concat(u,"trending/movie/day?language=en-US&api_key=").concat(i,"&page=").concat(e));case 4:return t=n.sent,r=t.data,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(e,"?language=en-US&api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/search/movie?query=").concat(e,"&include_adult=false&language=en-US&api_key=").concat(i,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(e,"/credits?language=en-US&api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(e,"/reviews?language=en-US&api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.ebba321f.chunk.js.map