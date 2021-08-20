(this["webpackJsonpbasic-crud-react-nodejs-mysql"]=this["webpackJsonpbasic-crud-react-nodejs-mysql"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),s=n(2),a=(n(12),n(0)),o=function(e){var t=e.mensajeReq;return Object(a.jsxs)("div",{className:"alert alert-success alert-dismissible fixed-top center-block text-center myAlert",children:[Object(a.jsx)("i",{className:"fas fa-check-circle"})," ",Object(a.jsx)("span",{style:{fontSize:"18px"},children:t})]})},i=n(3),u=n.n(i),j=n(4),l=n(5),b=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/frutas");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,c=n.frutas,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),d=n(1),f=function(){var e="https://rafpapp.herokuapp.com",t=Object(d.useState)({nombre:"",color:"",precio:""}),n=Object(s.a)(t,2),c=n[0],r=n[1],a=Object(d.useState)(!1),o=Object(s.a)(a,2),i=o[0],f=o[1],O=Object(d.useState)([]),p=Object(s.a)(O,2),h=p[0],m=p[1],x=Object(d.useState)(""),v=Object(s.a)(x,2),N=v[0],y=v[1],g=Object(d.useState)(!1),C=Object(s.a)(g,2),S=C[0],k=C[1],w=Object(d.useState)(0),F=Object(s.a)(w,2),R=F[0],E=F[1],T=Object(d.useState)(!1),A=Object(s.a)(T,2),D=A[0],I=A[1],U=Object(d.useState)(0),q=Object(s.a)(U,2),J=q[0],P=q[1],L=Object(d.useRef)(),G=function(){f(!0),setTimeout((function(){f(!1)}),1500)};Object(d.useEffect)((function(){I(!0),b().then((function(e){m(e)})),I(!1)}),[J]),Object(d.useEffect)((function(){S||r({nombre:"",color:"",precio:""})}),[S]),Object(d.useEffect)((function(){L.current.focus()}),[]);return[c,function(e){var t=Object(l.a)({},c);t[e.target.id]=e.target.value.toUpperCase(),r(t)},function(){var t=Object(j.a)(u.a.mark((function t(n){var s,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},I(!0),t.next=5,fetch(e+"/crear",s);case 5:return a=t.sent,t.next=8,a.json();case 8:o=t.sent,G(),y(o.mensaje),r({nombre:"",color:"",precio:""}),I(!1),L.current.focus(),P(Date.now());case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i,h,function(){var t=Object(j.a)(u.a.mark((function t(n){var c,r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={method:"DELETE"},I(!0),t.next=5,fetch(e+"/delete/"+n,c);case 5:return r=t.sent,t.next=8,r.json();case 8:s=t.sent,G(),y(s.mensaje),I(!1),P(Date.now()),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),N,function(e){var t=h.find((function(t){return t.id===e})),n=t.nombre,c=t.color,s=t.precio;k(!0),E(e),r({nombre:n,color:c,precio:s})},S,function(){var t=Object(j.a)(u.a.mark((function t(n){var s,a,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s=Object(l.a)(Object(l.a)({},c),{},{id:R}),a={method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(s)},I(!0),t.next=6,fetch(e+"/update",a);case 6:return o=t.sent,t.next=9,o.json();case 9:i=t.sent,y(i.mensaje),k(!1),E(0),G(),r({nombre:"",color:"",precio:""}),I(!1),L.current.focus(),P(Date.now());case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k,D,L]},O=function(e){var t=e.fruit,n=e.deleteFruit,c=e.editFruit,r=t.id,s=t.nombre,o=t.color,i=t.precio;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:s}),Object(a.jsx)("td",{children:o}),Object(a.jsx)("td",{children:i}),Object(a.jsxs)("td",{children:[Object(a.jsx)("button",{onClick:function(){return n(r)},className:"btn btn-danger btn-sm",children:Object(a.jsx)("i",{className:"fas fa-trash"})}),Object(a.jsx)("button",{onClick:function(){return c(r)},className:"btn btn-danger btn-sm ms-1",children:Object(a.jsx)("i",{className:"fas fa-edit"})})]})]})},p=function(e){var t=e.fetchFrutas,n=e.deleteFruit,c=e.editFruit;return Object(a.jsxs)("table",{className:"table table-dark table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"FRUTA"}),Object(a.jsx)("th",{children:"COLOR"}),Object(a.jsx)("th",{children:"PRECIO"}),Object(a.jsx)("th",{children:"ACCIONES"})]})}),Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsx)(O,{fruit:e,deleteFruit:n,editFruit:c},e.id)}))})]})},h=function(){return Object(a.jsx)("div",{className:"d-flex text-center align-items-center myLoading",children:Object(a.jsx)("div",{className:"spinner-border text-primary tamano",role:"status",children:Object(a.jsx)("span",{className:"visually-hidden"})})})},m=function(){var e=f(),t=Object(s.a)(e,13),n=t[0],c=t[1],r=t[2],i=t[3],u=t[4],j=t[5],l=t[6],b=t[7],d=t[8],O=t[9],m=t[10],x=t[11],v=t[12];return Object(a.jsxs)("div",{className:"container mt-5",children:[x&&Object(a.jsx)(h,{}),i?Object(a.jsx)(o,{mensajeReq:l}):"",Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-3"}),Object(a.jsxs)("div",{className:"col-6 mt-3",children:[Object(a.jsx)("h5",{children:d?"MODIFICAR FRUTA":" REGISTRAR FRUTA"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{onSubmit:d?O:r,children:["Nombre fruta:",Object(a.jsx)("input",{type:"text",id:"nombre",ref:v,value:n.nombre,onChange:c,className:"form-control"}),"Color:",Object(a.jsx)("input",{type:"text",id:"color",value:n.color,onChange:c,className:"form-control"}),"Precio:",Object(a.jsx)("input",{type:"text",id:"precio",value:n.precio,onChange:c,className:"form-control"}),Object(a.jsx)("button",{className:"btn btn-primary mt-3",children:d?"Guardar cambios":"Registrar"})]}),d&&Object(a.jsx)("button",{className:"btn btn-danger mt-2",onClick:function(){return m(!1)},children:"Cancelar"}),Object(a.jsx)("hr",{}),Object(a.jsx)(p,{fetchFrutas:u,deleteFruit:j,editFruit:b})]}),Object(a.jsx)("div",{className:"col-3"})]})]})};r.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.46de8400.chunk.js.map