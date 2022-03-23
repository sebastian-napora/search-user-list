(this["webpackJsonpsearch-user-list"]=this["webpackJsonpsearch-user-list"]||[]).push([[0],{59:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,d,u,l,b,m,f,p,h,j,O,x,g=t(0),w=t.n(g),y=t(25),L=t.n(y),k=t(2),v=t(8),S=t(7),F=t(5),T=t(6),U=t.n(T),C=t(9),z=t.n(C),E=(t(26),"/users"),P="Something went wrong",M=function(e){z.a.create({baseURL:"https://mocked-url"});var n=z.a.create({baseURL:"https://jsonplaceholder.typicode.com"});return n.interceptors.response.use((function(e){return e}),(function(e){console.error("Unable to check response",e)})),n},A={users:{getUsers:function(e){return Object(S.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M().get(E);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",P);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},J=function(e){return A[e]}("users"),R=t(3),B="375px",I="425px",N="768px",Q="1024px",_="1440px",q="2560px",D={mobileSmall:"(min-width: ".concat("320px",")"),mobileMedium:"(min-width: ".concat(B,")"),mobileLarge:"(min-width: ".concat(I,")"),tablet:"(min-width: ".concat(N,")"),laptop:"(min-width: ".concat(Q,")"),laptopLarge:"(min-width: ".concat(_,")"),desktop:"(min-width: ".concat(q,")")},G=Object(k.c)(r||(r=Object(R.a)(["\n  color: #cccccc;\n"]))),H=Object(k.c)(a||(a=Object(R.a)(["\n  display: flex;\n  justify-content: left;\n"]))),K=function(e,n){return Object(k.c)(c||(c=Object(R.a)(["\n  @media "," {\n    font-size: ","rem;\n  }\n"])),D[e],n)},V=function(e){return Object(k.c)(i||(i=Object(R.a)(["\n  @media "," {\n    ","\n  }\n"])),D[e],H)},W=k.d.div(o||(o=Object(R.a)(["\n  display: flex;\n  font-size: 1.5rem;\n  padding: 1rem;\n  width: 100%;\n\n  @media "," {\n    font-size: 1rem;\n    padding: 0.5rem 0rem;\n  }\n\n  @media "," {\n    font-size: 1.1rem;\n    padding: 0.5rem 0rem;\n  }\n\n  ","\n  ","\n  ","\n  ","\n"])),D.mobileSmall,D.mobileLarge,K("tablet",1.2),K("laptop",1.5),K("mobileLarge",1.5),K("desktop",1.5)),X=k.d.span(s||(s=Object(R.a)(["\n  width: 10%;\n  ","\n"])),G),Y=k.d.span(d||(d=Object(R.a)(["\n  display: flex;\n  width: 90%;\n\n  @media "," {\n    display: grid;\n    justify-content: center;\n  }\n\n  @media "," {\n    display: flex;\n    justify-content: center;\n  }\n\n  ","\n  ","\n  ","\n  ","\n"])),D.mobileSmall,D.mobileLarge,V("tablet"),V("laptop"),V("mobileLarge"),V("desktop")),Z=k.d.span(u||(u=Object(R.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 1.2rem;\n  margin-left: 1rem;\n  width: 30%;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),G,K("mobileSmall",.9),K("mobileLarge",.9),K("tablet",1),K("laptop",1.2),K("mobileLarge",1.2),K("desktop",1.2)),$=t(1),ee=function(e){var n=function(e){var n=e.findUserPhrease,t=e.isThrowError,r=Object(g.useState)({list:[],filtredList:[]}),a=Object(F.a)(r,2),c=a[0],i=a[1],o=Object(g.useCallback)(function(){var e=Object(S.a)(U.a.mark((function e(n){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getUsers(n);case 2:if((t=e.sent)!==P){e.next=6;break}return i((function(){return{list:[],filtredList:[]}})),e.abrupt("return");case 6:t&&t.data&&i({list:t.data,filtredList:t.data});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]),s=Object(g.useCallback)((function(){i(n?function(e){return Object(v.a)(Object(v.a)({},e),{},{filtredList:e.list.filter((function(e){return e.name.toLowerCase().trim().includes(n.toLowerCase().trim())}))})}:function(e){return Object(v.a)(Object(v.a)({},e),{},{filtredList:e.list})})}),[n]);return Object(g.useEffect)((function(){0===c.list.length&&Object(S.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))(),s()}),[n]),{usersList:c}}({findUserPhrease:e.findUserPhrease,isThrowError:e.isThrowError}),t=n.usersList;return 0===t.list.length||0===t.filtredList.length?Object($.jsx)("div",{children:"No match users..."}):Object($.jsx)($.Fragment,{children:t.filtredList.map((function(e,n){var t=e.name,r=e.username,a=e.id;return Object($.jsxs)(W,{"data-testid":"users-list-container",children:[Object($.jsxs)(X,{"data-testid":"users-list-index-user",children:[n+1,"."]}),Object($.jsxs)(Y,{"data-testid":"users-list-user-details",children:[t," ",Object($.jsxs)(Z,{"data-testid":"users-list-user-name",children:["@",r]})]})]},"".concat(a).concat(t))}))})},ne=function(e,n,t){return Object(k.c)(l||(l=Object(R.a)(["\n  @media "," {\n    max-width: ","px;\n    font-size: ","rem;\n  }\n"])),D[e],n,t)},te=function(e,n){return Object(k.c)(b||(b=Object(R.a)(["\n  @media "," {\n    max-width: ","px;\n  }\n"])),D[e],n)},re=k.d.input(m||(m=Object(R.a)(["\n  font-size: 1.2rem;\n  height: 0.5rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  width: 100%;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),ne("mobileSmall",280,1),ne("mobileLarge",390,1),te("tablet",430),te("laptop",500),te("laptopLarge",600),te("desktop",800)),ae=function(e){var n=e.onChange;return Object($.jsx)(re,{type:"text",placeholder:"Search by user name...",onChange:n})},ce=function(e,n){return Object(k.c)(f||(f=Object(R.a)(["\n  @media "," {\n    width: ","%;\n  }\n"])),D[e],n)},ie=k.d.div(p||(p=Object(R.a)(["\n  text-align: center;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),ce("mobileSmall",100),ce("mobileLarge",60),ce("tablet",50),ce("laptop",40),ce("laptopLarge",30),ce("desktop",20)),oe=k.d.header(h||(h=Object(R.a)(["\n  font-size: 2rem;\n  height: 3.5rem;\n  padding-top: 1rem;\n"]))),se=function(){var e=function(){var e=Object(g.useState)(null),n=Object(F.a)(e,2),t=n[0],r=n[1];return{findUserPhrease:t,onChange:function(e){return r(e.target.value)}}}(),n=e.findUserPhrease,t=e.onChange;return Object($.jsxs)(ie,{children:[Object($.jsx)(oe,{children:"Users list"}),Object($.jsx)(ae,{onChange:t}),Object($.jsx)(ee,{findUserPhrease:n,isThrowError:!1})]})},de=480,ue=768,le=1025,be=1281,me={smartphones:"(min-width: ".concat(320,"px)"),smallTablet:"(min-width: ".concat(de+1,"px)"),tablet:"(min-width: ".concat(ue,"px)"),laptop:"(min-width: ".concat(le,"px)"),desktop:"(min-width: ".concat(be,"px)")},fe={data:"main",id:"T_001",name:"Main",colors:{fonts:{primary:"#f1f1f1",white:"#ffffff",grey:"#838383",greySecondary:"#a6a6a6"},white:"#ffffff",body:"#FFFFFF",primary:"#490e4b",secondary:"#3b0044",greyPrimary:"#cfcfcf",greySecondary:"#e1dcdb",hoverColor:"#f5f5f5",black:"#020000",text:"#000000",label:"#838383",button:{text:"#FFFFFF",background:"#000000"},link:{text:"#3b0044",opacity:1}},mediaQueries:me,font:{text:"AauxPro OT"}},pe={data:{main:fe,otherTheme:fe}},he=function(){var e=function(){var e=pe,n=Object(g.useState)(e.data.main),t=Object(F.a)(n,2),r=t[0],a=t[1],c=Object(g.useState)(!1),i=Object(F.a)(c,2),o=i[0],s=i[1],d=function(e){e&&a(e.data.main),s(!0)};return Object(g.useEffect)((function(){return d(pe)}),[]),{theme:r,themeLoaded:o,setMode:function(e){return a(e)},handleSetTheme:d}}(),n=e.theme,t=e.themeLoaded,r=Object(g.useState)(n),a=Object(F.a)(r,2),c=a[0],i=a[1];return Object(g.useEffect)((function(){i(n)}),[t]),{selectedTheme:c,setSelectedTheme:i,themeLoaded:t}},je=function(e,n){return Object(k.c)(j||(j=Object(R.a)(["\n  @media "," {\n    padding: ","rem;\n  }\n"])),D[e],n)},Oe=k.d.div(O||(O=Object(R.a)(["\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),je("mobileSmall",0),je("mobileLarge",0),je("tablet",2),je("laptop",2),je("laptopLarge",2),je("desktop",2)),xe=Object(k.b)(x||(x=Object(R.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: ",";\n    height: 100vh;\n    margin: 0 !important;\n  }\n\n  a {\n    color: ",";\n    cursor: pointer;\n  }\n\n  button {\n    border: 0;\n    display: inline-block;\n    padding: 12px 24px;\n    font-size: 14px;\n    border-radius: 4px;\n    margin-top: 5px;\n    cursor: pointer;\n    background-color: #1064EA;\n    color: #ffffff;\n    font-family: ",";\n  }\n\n  button.btn {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.body}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.font.text}),(function(e){return e.theme.colors.link.text}),(function(e){return e.theme.font}),(function(e){return e.theme.colors.button.background}),(function(e){return e.theme.colors.button.text})),ge=function(){var e=he(),n=e.selectedTheme,t=e.themeLoaded;return Object($.jsx)($.Fragment,{children:t&&Object($.jsxs)(k.a,{theme:n,children:[Object($.jsx)(xe,{}),Object($.jsx)(Oe,{children:Object($.jsx)(se,{})})]})})};L.a.render(Object($.jsx)(w.a.StrictMode,{children:Object($.jsx)(ge,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.11dad12d.chunk.js.map