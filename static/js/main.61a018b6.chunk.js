(this.webpackJsonpbbh=this.webpackJsonpbbh||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(24),r=a.n(c),s=(a(84),a(85),a(11)),i=a.n(s),l=a(15),o=a(2),u=a(4),b=a(9),j=a(10),d=[{title:"Interest",url:"/Interest",cName:"nav-links",hidden:!0},{title:"Company",url:"/customer",cName:"nav-links",hidden:!1},{title:"Users",url:"/Production",cName:"nav-links",hidden:!1},{title:"Report",url:"/ReportInOut",cName:"nav-links",hidden:!1}],h=a(122),p=a(124),O=a(121),f=a(123),m=a(74),v=a(73),x=(a(87),a(7)),g=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(h.a,{className:"container-fluid navbar navbar-expand-lg navbar-dark bg-dark",variant:"dark",expand:"lg",children:[Object(x.jsx)(h.a.Brand,{className:"banner",href:"#home",children:"Attendance"}),Object(x.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(x.jsx)(p.a,{activeKey:window.location.pathname,className:"mr-auto basic-navbar-nav",children:d.map((function(e,t){return Object(x.jsx)("li",{children:Object(x.jsx)(p.a.Link,{href:e.url,hidden:e.hidden,children:e.title})},t)}))}),Object(x.jsx)(O.a,{title:"Hi !!!",id:"basic-nav-nav",children:Object(x.jsx)(O.a.Item,{onClick:function(){return e()},children:"Logout"})}),Object(x.jsxs)(f.a,{inline:!0,hidden:!0,children:[Object(x.jsx)(m.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(x.jsx)(v.a,{variant:"outline-success",children:"Search"})]})]})]})}}]),a}(n.Component),w=a(26),D=a(76),N=a(25),y=a(120),k=a(75),S=a(47),C=a(56),I=a.n(C);a(111),a(112);function F(){var e=Object(n.useState)(new Date),t=Object(w.a)(e,2),a=(t[0],t[1],Object(n.useState)([])),c=Object(w.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)([]),u=Object(w.a)(o,2),b=u[0],j=u[1],d=Object(n.useState)([]),h=Object(w.a)(d,2),p=h[0],O=h[1],f=Object(n.useState)([]),m=Object(w.a)(f,2),g=m[0],C=m[1],F=Object(n.useState)(0),M=Object(w.a)(F,2),A=M[0],R=M[1],G=Object(n.useState)(0),L=Object(w.a)(G,2),Y=L[0],H=L[1],T=Object(n.useState)(0),B=Object(w.a)(T,2),U=B[0],E=B[1],K=Object(n.useState)(0),P=Object(w.a)(K,2),q=P[0],J=P[1],Q=Object(n.useState)(0),z=Object(w.a)(Q,2),W=z[0],X=z[1],V=Object(D.a)({apiKey:"AIzaSyDOXFKM8FWObwsFbyqA6dqnQGTNfQDLGUo",authDomain:"bbhtime-fa236.firebaseapp.com",databaseURL:"https://bbhtime-fa236.firebaseio.com",projectId:"bbhtime-fa236",storageBucket:"bbhtime-fa236.appspot.com",messagingSenderId:"351132412421",appId:"1:351132412421:web:82938d9c881c1908e8ca6c"}),Z=Object(N.c)(V);Object(n.useEffect)(Object(l.a)(i.a.mark((function e(){var t,a,n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=function(){return(r=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],a=1;a<13;a++)t.push(a);H((new Date).getMonth()+1),J((new Date).getMonth()+1),O(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},c=function(){return(c=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=(new Date).getFullYear(),R(a),E(a),t.push(a),t.push(a-1),t.push(a-2),j(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)},n=function(){return c.apply(this,arguments)},a=function(){return(a=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(N.a)(Z,"User"),e.next=3,Object(N.b)(t);case 3:a=e.sent,n=[],a.docs.map((function(e){var t={};t.id=e.data().userid,t.value=e.data().Name,n.push(t)})),s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},t=function(){return a.apply(this,arguments)},function(){return r.apply(this,arguments)}(),n(),t();case 11:case"end":return e.stop()}}),e)}))),[]);var $=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,c,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date("".concat(A,"-").concat(Y,"-01")),a=new Date("".concat(U,"-").concat(q,"-1")),n=new Date(a.getFullYear(),a.getMonth()+1,0),console.log("lastDayOfMonth",n),c=Object(N.e)(Object(N.a)(Z,"stamp"),Object(N.f)("userid","==",W),Object(N.f)("stampin",">=",t),Object(N.f)("stampin","<=",n),Object(N.d)("stampin")),e.next=7,Object(N.b)(c);case 7:r=e.sent,s=[],r.forEach((function(e){var t={date:I()(e.data().stampin.toDate().toDateString()).format("DD-MM-YYYY"),in:I()(e.data().stampin.toDate()).format("HH:mm:ss"),out:e.data().stampout&&I()(e.data().stampout.toDate()).format("HH:mm:ss")};s.push(t)})),console.log("stamplist",s),C(s);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("header",{className:"App-header p-3",children:[Object(x.jsxs)(y.a,{children:[Object(x.jsx)(k.a,{className:"pe-0 w-25  align-items-center",md:"auto",children:Object(x.jsx)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){console.log(e.target.value),X(e.target.value)}.bind(this),children:r.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.value})}))})}),Object(x.jsxs)(k.a,{className:"d-flex align-items-center",md:"2",children:["FROM:",Object(x.jsx)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){console.log(e.target.value),R(e.target.value)}.bind(this),children:b.map((function(e){return Object(x.jsx)("option",{value:e,children:e})}))}),Object(x.jsx)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){console.log(e.target.value),H(e.target.value)}.bind(this),children:p.map((function(e){return Object(x.jsx)("option",{selected:(new Date).getMonth()+1===e,value:e,children:e})}))})]}),Object(x.jsxs)(k.a,{className:"d-flex align-items-center",md:"2",children:["TO:",Object(x.jsx)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){console.log(e.target.value),E(e.target.value)}.bind(this),children:b.map((function(e){return Object(x.jsx)("option",{value:e,children:e})}))}),Object(x.jsx)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){console.log(e.target.value),J(e.target.value)}.bind(this),children:p.map((function(e){return Object(x.jsx)("option",{selected:(new Date).getMonth()+1===e,value:e,children:e})}))})]}),Object(x.jsx)(k.a,{className:"p-0",md:"auto",children:Object(x.jsx)(v.a,{variant:"outline-success",onClick:$,children:"Search"})})]}),Object(x.jsx)(y.a,{className:"mt-2",children:Object(x.jsx)(k.a,{children:Object(x.jsx)("div",{className:"ag-theme-alpine",style:{height:400,width:"100%"},children:Object(x.jsxs)(S.AgGridReact,{rowClassRules:{"bg-warning":"!data.out"},rowData:g,children:[Object(x.jsx)(S.AgGridColumn,{field:"date"}),Object(x.jsx)(S.AgGridColumn,{field:"in",cellStyle:function(e){return e.value>"09:00:00"?{color:"red"}:null}}),Object(x.jsx)(S.AgGridColumn,{field:"out",cellStyle:function(e){return e.value<"20:00:00"?{color:"red"}:null}})]})})})})]})}var M=a(64),A=a(13);var R=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(M.a,{children:Object(x.jsxs)(A.d,{children:[Object(x.jsx)(A.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(A.a,{to:"/ReportInOut"})}}),Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{}),Object(x.jsx)(A.b,{component:F,path:"/ReportInOut"})]})]})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};r.a.render(Object(x.jsx)(R,{}),document.getElementById("root")),G()},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.61a018b6.chunk.js.map