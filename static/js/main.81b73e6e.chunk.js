(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[2],{145:function(e,t,c){},146:function(e,t,c){},271:function(e,t,c){var n={"./hello.md":56};function a(e){var t=i(e);return c(t)}function i(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=271},272:function(e,t,c){var n={"./pinned/hello.md":56};function a(e){return Promise.resolve().then((function(){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c(n[e])}))}a.keys=function(){return Object.keys(n)},a.id=272,e.exports=a},310:function(e,t,c){var n={"./About/about.md":[137,0],"./E-Commerce auction web application.md":[82],"./Face Recognition Attendace System.md":[83],"./Mail.md":[84],"./React web app.md":[85],"./Social Network.md":[86],"./Tic-Tac-Toe.md":[87],"./Zippy webpage design.md":[88],"./contact/contact.md":[138,1],"./pinned/hello.md":[56]};function a(e){if(!c.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(c.e)).then((function(){return c(a)}))}a.keys=function(){return Object.keys(n)},a.id=310,e.exports=a},311:function(e,t,c){var n={"./E-Commerce auction web application.md":82,"./Face Recognition Attendace System.md":83,"./Mail.md":84,"./React web app.md":85,"./Social Network.md":86,"./Tic-Tac-Toe.md":87,"./Zippy webpage design.md":88};function a(e){var t=i(e);return c(t)}function i(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=311},312:function(e,t,c){var n={"./About/about.md":[137,0],"./E-Commerce auction web application.md":[82],"./Face Recognition Attendace System.md":[83],"./Mail.md":[84],"./React web app.md":[85],"./Social Network.md":[86],"./Tic-Tac-Toe.md":[87],"./Zippy webpage design.md":[88],"./contact/contact.md":[138,1],"./pinned/hello.md":[56]};function a(e){if(!c.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(c.e)).then((function(){return c(a)}))}a.keys=function(){return Object.keys(n)},a.id=312,e.exports=a},313:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(131),r=c.n(i),s=(c(145),c(32)),o=(c(146),c(16)),d=c(3),l=c(38),u=c.n(l),j=c(30),b=c(60),m=c(15),h=c(19),f=c.n(h),O=c(21),x=c(0),p=function(){var e=c(271).keys().reverse(),t=Object(n.useState)([]),a=Object(m.a)(t,2),i=a[0],r=a[1];return Object(n.useEffect)(Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r([]),t.next=3,e.map((function(e){c(272)("./pinned".concat(e.slice(1))).then((function(e){fetch("https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/".concat(e.default.split("/").slice(-1)[0])).then((function(e){return e.text()})).then((function(e){return Object(O.a)(e)})).then((function(e){return r((function(t){return[].concat(Object(j.a)(t),[e])}))}))})).catch((function(e){return console.log(e)}))}));case 3:case"end":return t.stop()}}),t)}))),[]),Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:i.map((function(e,t){return Object(x.jsxs)("div",{className:"card",id:"carding",children:[Object(x.jsx)("div",{children:Object(x.jsx)(o.b,{to:"/Post/".concat(e.metadata.id),className:"post-title",children:Object(x.jsx)("h2",{className:"card-header",children:e.metadata.title})})}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)(f.a,{children:e.content.split("\x3c!---more---\x3e")[0]})}),Object(x.jsx)(o.b,{to:"/Post/".concat(e.metadata.id),className:"post-ext",children:"Read More"})]})]},t)}))})})},v=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Home"}),Object(x.jsx)(p,{})]})},g=c(62),N=c.n(g),w=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){c.e(0).then(c.bind(null,137)).then((function(e){fetch("https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/".concat(e.default.split("/").slice(-1)[0])).then((function(e){return e.text()})).then((function(e){return Object(O.a)(e)})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}))}),[]),Object(x.jsx)("div",{children:a?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"About"}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(f.a,{rehypePlugins:[N.a],children:a.content.replace("\x3c!---more---\x3e","")})})]}):Object(x.jsx)(x.Fragment,{children:"loading..."})})},y=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){c.e(1).then(c.bind(null,138)).then((function(e){fetch("https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/".concat(e.default.split("/").slice(-1)[0])).then((function(e){return e.text()})).then((function(e){return Object(O.a)(e)})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}))}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Contact"}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(f.a,{rehypePlugins:[N.a],children:a.content,escapeHtml:!1})})]})},k=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"404 Error"})})},E=c(330),M=c(327),T=c.p+"static/media/manoj_g.eb0f42b8.jpeg",P=Object(M.a)((function(e){return{large:{width:e.spacing(12),height:e.spacing(12)}}})),F=function(){var e=P();return Object(x.jsxs)("div",{children:[Object(x.jsx)("center",{id:"image",children:Object(x.jsx)(E.a,{src:T,alt:T,className:e.large})}),Object(x.jsx)("h1",{className:"ui header",children:"Manoj Gowra"})]})},C=function(e){var t=Object(n.useState)(),a=Object(m.a)(t,2),i=a[0],r=a[1],s=e.match.params.id;return Object(n.useEffect)((function(){c(310)("./".concat(s,".md")).then((function(e){fetch("https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/".concat(e.default.split("/").slice(-1)[0])).then((function(e){return e.text()})).then((function(e){return Object(O.a)(e)})).then((function(e){return r(e)}))}))}),[s]),Object(x.jsx)("div",{className:"post-card",children:i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{className:"card-header",children:i.metadata.title}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)(f.a,{children:i.content.replace("\x3c!---more---\x3e","")})})})]}):Object(x.jsx)(x.Fragment,{children:"loading..."})})},S=function(){var e=c(311).keys().reverse(),t=Object(n.useState)([]),a=Object(m.a)(t,2),i=a[0],r=a[1];return Object(n.useEffect)(Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r([]),t.next=3,e.map((function(e){c(312)("./".concat(e.slice(2))).then((function(e){fetch("https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/".concat(e.default.split("/").slice(-1)[0])).then((function(e){return e.text()})).then((function(e){return Object(O.a)(e)})).then((function(e){return r((function(t){return[].concat(Object(j.a)(t),[e])}))}))})).catch((function(e){return console.log(e)}))}));case 3:case"end":return t.stop()}}),t)}))),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Projects"}),Object(x.jsx)("div",{children:i.map((function(e,t){return Object(x.jsxs)("div",{className:"card",id:"carding",children:[Object(x.jsx)("div",{children:Object(x.jsx)(o.b,{to:"/Post/".concat(e.metadata.title),className:"post-title",children:Object(x.jsx)("h3",{className:"card-header",children:e.metadata.title})})}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)(f.a,{escapeHtml:!1,children:e.content.split("\x3c!---more---\x3e")[0]})}),Object(x.jsx)(o.b,{to:"/Post/".concat(e.metadata.title),className:"post-ext",children:"Read More"})]})]},t)}))})]})};var A=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(o.a,{children:Object(x.jsx)("div",{className:"container",id:"whole",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-2 ",children:Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsx)(F,{}),Object(x.jsx)("ul",{className:"nav flex-md-column flex-lg-column flex-xxl-column flex-xl-column",children:Object(x.jsxs)("div",{id:"items",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)(o.b,{to:"/",className:"nav-link",children:"Home"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)(o.b,{to:"/Projects",className:"nav-link",children:"Projects"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)(o.b,{to:"/About",className:"nav-link",children:"About"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)(o.b,{to:"/Contact",className:"nav-link",children:"Contact"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)("a",{className:"nav-link",href:"http://github.com/Manoj-gowra",children:"Github"})})})]})})]})}),Object(x.jsx)("div",{className:"col-md-1"}),Object(x.jsx)("div",{className:"col-md-9 col-lg-9 col-xl-9 col-xxl-9 col-sm-12 ",children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/",exact:!0,component:v}),Object(x.jsx)(d.a,{path:"/About",exact:!0,component:w}),Object(x.jsx)(d.a,{path:"/Contact",exact:!0,component:y}),Object(x.jsx)(d.a,{path:"/Projects",exact:!0,component:S}),Object(x.jsx)(d.a,{exact:!0,path:"/Post/:id",render:function(e){return Object(x.jsx)(C,Object(s.a)({},e))}}),Object(x.jsx)(d.a,{component:k})]})})]})})})})},D=function(e){e&&e instanceof Function&&c.e(5).then(c.bind(null,332)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),D()},56:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/hello.e9caa70c.md"},82:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/E-Commerce auction web application.59f6d64b.md"},83:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Face Recognition Attendace System.98bb5f4a.md"},84:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Mail.3db4b85c.md"},85:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/React web app.9a5563ad.md"},86:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Social Network.ce0b10fa.md"},87:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Tic-Tac-Toe.d79c63e9.md"},88:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Zippy webpage design.3bd26167.md"}},[[313,3,4]]]);
//# sourceMappingURL=main.81b73e6e.chunk.js.map