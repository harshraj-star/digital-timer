(this["webpackJsonpdigital-timer"]=this["webpackJsonpdigital-timer"]||[]).push([[0],{14:function(e,t,a){},18:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(16),s=a.n(m),c=(a(14),a(6)),r=a(9);var i=function(e){return l.a.createElement("div",null,0===e.time.h?"":l.a.createElement("span",null,e.time.h>=10?e.time.h:"0"+e.time.h),"\xa0\xa0",l.a.createElement("span",null,e.time.h>=10?e.time.h:"0"+e.time.h),"\xa0:\xa0",l.a.createElement("span",null,e.time.m>=10?e.time.m:"0"+e.time.m),"\xa0:\xa0",l.a.createElement("span",null,e.time.s>=10?e.time.s:"0"+e.time.s),"\xa0:\xa0",l.a.createElement("span",null,e.time.ms>=10?e.time.ms:"0"+e.time.ms))};var u=function(e){return l.a.createElement("div",null,0===e.status?l.a.createElement("button",{className:"btn__start",onClick:e.start},"Start"):"",1===e.status?l.a.createElement("div",null,l.a.createElement("button",{className:"btn__pause",onClick:e.pause},"Pause"),l.a.createElement("button",{className:"btn__reset",onClick:e.reset},"Reset")):"",2===e.status?l.a.createElement("div",null,l.a.createElement("button",{className:"btn__resume",onClick:e.resume},"Resume"),l.a.createElement("button",{className:"btn__reset",onClick:e.reset},"Reset")):"")};var o=function(){var e=Object(n.useState)({ms:0,s:0,m:0,h:0}),t=Object(r.a)(e,2),a=t[0],m=t[1],s=Object(n.useState)(),o=Object(r.a)(s,2),E=o[0],b=o[1],_=Object(n.useState)(0),p=Object(r.a)(_,2),v=p[0],h=p[1],d=function(){console.log("it is working"),j(),h(1),b(setInterval(j,10))},f=a.ms,N=a.s,g=a.m,k=a.h,j=function(){return 60===g&&(k++,g=0),60===N&&(g++,N=0),100===f&&(N++,f=0),f++,m({ms:f,s:N,m:g,h:k})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container__page"},l.a.createElement("div",{className:"main__display"},l.a.createElement(i,{time:a})),l.a.createElement("div",{className:"button__display"},l.a.createElement(u,{status:v,resume:function(){return d()},reset:function(){clearInterval(E),h(0),m({ms:0,s:0,m:0,h:0})},pause:function(){clearInterval(E),h(2)},start:d})),l.a.createElement("div",{className:"home__display"},l.a.createElement(c.b,{to:"/home"}," ",l.a.createElement("button",{className:"button__view"},"View History")," "))))},E=a(1);var b=function(){var e=Object(E.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main__class"},l.a.createElement("h1",null,"past button press event is to visit ",l.a.createElement("strong",{className:"location__style"},e.pathname," "),"  page")),l.a.createElement("div",{className:"home__main"},l.a.createElement(c.b,{to:"/"}," ",l.a.createElement("button",{className:"button__back"},"Home")," ")))};var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:o}),l.a.createElement(E.a,{exact:!0,path:"/home",component:b})))};s.a.render(l.a.createElement(c.a,null,l.a.createElement(_,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ccd96062.chunk.js.map