(this.webpackJsonpfcc2=this.webpackJsonpfcc2||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(7),i=c.n(r),s=(c(13),c(8)),o=c(1),l=c(3),j=(c(14),c(15),c(0)),u=function(e){var t=e.data,c=e.onCancel,a=e.onSubmit,r=Object(n.useState)(Object(o.a)({},t)),i=Object(l.a)(r,2),s=i[0],u=i[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),h=b[0],O=b[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"overlay",onClick:function(){c()}}),Object(j.jsx)("div",{className:"settings",children:Object(j.jsxs)("form",{className:"settings__form",onSubmit:function(e){e.preventDefault(),a(s),c()},children:[Object(j.jsxs)("div",{className:"settings__form-item",children:[Object(j.jsx)("label",{children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(j.jsx)("input",{type:"text",className:s.name?"":"error",value:s.name,onChange:function(e){var t=e.target.value;O(!t.length),u(Object(o.a)(Object(o.a)({},s),{},{name:t}))}})]}),Object(j.jsxs)("div",{className:"settings__form-item",children:[Object(j.jsx)("label",{children:"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u043f\u043e\u043b\u044f"}),Object(j.jsx)("select",{value:s.width,onChange:function(e){return u(Object(o.a)(Object(o.a)({},s),{},{width:e.target.value}))},children:[3,4,5].map((function(e){return Object(j.jsxs)("option",{value:e,children:[e,"x",e]},e)}))})]}),Object(j.jsxs)("div",{className:"settings__form-item",children:[Object(j.jsx)("label",{children:"\u041a\u0442\u043e \u043d\u0430\u0447\u043d\u0451\u0442?"}),Object(j.jsxs)("select",{value:s.starter,onChange:function(e){return u(Object(o.a)(Object(o.a)({},s),{},{starter:e.target.value}))},children:[Object(j.jsx)("option",{value:"user",children:s.name}),Object(j.jsx)("option",{value:"AI",children:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440"})]})]}),Object(j.jsxs)("div",{className:"settings__form-item",children:[Object(j.jsx)("input",{type:"button",value:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c",onClick:function(){u({name:"Player1",width:3,starter:"user"})}}),Object(j.jsx)("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",disabled:h})]})]})})]})};var d=function(){var e=Object(n.useState)({name:localStorage.getItem("tttUserName")?localStorage.getItem("tttUserName"):"Player1",width:localStorage.getItem("tttWidth")?+localStorage.getItem("tttWidth"):3,starter:localStorage.getItem("tttStarter")?localStorage.getItem("tttStarter"):"user",score:localStorage.getItem("tttScore")?localStorage.getItem("tttScore"):"0:0"}),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!localStorage.getItem("tttUserName")),i=Object(l.a)(r,2),d=i[0],b=i[1],h=Object(n.useState)(c.width),O=Object(l.a)(h,1)[0],m=Object(n.useState)(!1),f=Object(l.a)(m,2),g=f[0],x=f[1],p=Object(n.useState)(new Array(Math.pow(O,2)).fill({disabled:!1,userChoice:!1,machineChoice:!1,animated:!1}).map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{id:t})}))),v=Object(l.a)(p,2),S=v[0],C=v[1],w=Object(n.useState)(""),I=Object(l.a)(w,2),N=I[0],_=I[1],k=Object(n.useState)(!1),y=Object(l.a)(k,2),E=y[0],A=y[1],M=Object(n.useState)(!1),U=Object(l.a)(M,2),W=U[0],T=U[1],F=c.score.split(":"),J=Object(l.a)(F,2),L=J[0],P=J[1],B=function(e){for(var t=[],c=[0],n=[e-1],a=0;a<e*e;){for(var r=[],i=1;i<=e;i++)r.push(a+i-1);t.push(r),a+=e}for(a=0;a<e;){for(var s=[],o=0;o<e*e;o+=e)s.push(a+o);t.push(s),a++}for(var l=0;l<e-1;l++)c.push(c[c.length-1]+e+1),n.push(n[n.length-1]+e-1);return t.push(c,n),t}(c.width),D=Object(n.useRef)([]);Object(n.useEffect)((function(){var e=D.current.childNodes[0].clientWidth;D.current.childNodes.forEach((function(t){t.style.height=e+"px"}))}),[]),Object(n.useEffect)((function(){("AI"===c.starter||S.filter((function(e){return!e.userChoice})).length<S.length)&&q()}),[S]),Object(n.useEffect)((function(){g&&setTimeout((function(){R()}),500)}),[g]);var R=function(){var e=S.filter((function(e){return!e.disabled})).map((function(e){return e.id})),t=e[Math.floor(Math.random()*e.length)];C(S.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{machineChoice:!0,disabled:!0}):e}))),T(!1)},q=function(){for(var e=[],t=0;t<B.length;t++){if(B[t].map((function(e){return S[e]})).every((function(e){return g?e.machineChoice:e.userChoice}))){e=Object(s.a)(B[t]);break}}e.length?setTimeout((function(){_(g?"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442 \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u0435\u0442!":"".concat(c.name," \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u0435\u0442!"));var t=(localStorage.getItem("tttScore")?localStorage.getItem("tttScore"):c.score).split(":").map((function(e){return+e}));S[e[0]].userChoice?t[0]++:t[1]++,localStorage.setItem("tttScore",t.join(":")),A(!0),T(!0),D.current.childNodes.forEach((function(t,c){t.classList.add(e.includes(c)?"animated":"nonAnimated")}))}),500):(S.filter((function(e){return e.disabled})).length===S.length&&setTimeout((function(){_("\u041d\u0438\u0447\u044c\u044f!"),A(!0)}),500),x(!g))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"score",children:[Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)("span",{children:c.name})}),Object(j.jsx)("th",{children:"AI"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:L}),Object(j.jsx)("td",{children:P})]})]})}),Object(j.jsx)("button",{onClick:function(){localStorage.removeItem("tttScore"),window.location.reload()},children:"\u041e\u0431\u043d\u0443\u043b\u0438\u0442\u044c"})]}),Object(j.jsxs)("p",{children:["\u041a\u0430\u043a\u043e\u0435 \u0436\u0435 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u0431\u0435\u0437 \u043a\u0440\u0435\u0441\u0442\u0438\u043a\u043e\u0432-\u043d\u043e\u043b\u0438\u043a\u043e\u0432!",Object(j.jsx)("br",{})," \u041d\u0430 \u0431\u0430\u0437\u0435 \u044d\u0442\u043e\u0433\u043e ",Object(j.jsx)("a",{href:"http://www.bugi-verstki.ru/projects/tic-tac-toe/ttt.html",target:"_blank",children:"\u0432\u0430\u043d\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f\u0430"}),"."]}),Object(j.jsx)("div",{ref:D,className:W?"deck disabled":"deck",children:S.map((function(e,t){return Object(j.jsx)("div",{onClick:function(t){return function(e,t){t.userChoice||t.machineChoice||(T(!0),C(S.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{userChoice:!0,disabled:!0}):e}))))}(0,e)},style:{width:100/O+"%"},className:e.userChoice?"deck__cell x":e.machineChoice?"deck__cell o":e.animated?"deck__cell animated":"deck__cell",children:Object(j.jsx)("i",{})},t)}))}),E&&Object(j.jsxs)("div",{className:"reloadLink",children:[Object(j.jsx)("h3",{children:N}),Object(j.jsx)("span",{onClick:function(){window.location.reload()},children:"\u0418\u0433\u0440\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430"})]}),Object(j.jsx)("span",{className:"openSettings",onClick:function(){return b(!0)}}),d&&Object(j.jsx)(u,{data:c,onCancel:function(){b(!1)},onSubmit:function(e){var t=e.name,n=e.width,r=e.starter;localStorage.setItem("tttUserName",t),a(Object(o.a)(Object(o.a)({},c),{},{name:t})),localStorage.setItem("tttWidth",n),a(Object(o.a)(Object(o.a)({},c),{},{width:n})),localStorage.setItem("tttStarter",r),a(Object(o.a)(Object(o.a)({},c),{},{starter:r})),window.location.reload()}})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5dd5d3f7.chunk.js.map