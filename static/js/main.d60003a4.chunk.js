(this["webpackJsonpproyecto-validacion"]=this["webpackJsonpproyecto-validacion"]||[]).push([[0],{340:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(59),s=n.n(o),i=n(55),l=n(123),u=n(58),j=n(14),d=n(30),b=n(19),m=n(27),h=n(9),p=n.n(h),O=n(15),x=n(64),g=n(46),f=n.n(g),v={"Access-Control-Allow-Origin":"*"},S=function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(v),e.next=4,f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/login/",t);case 4:return(n=e.sent).data.token&&(localStorage.setItem("user",n.data.token),localStorage.setItem("username",t.username)),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){localStorage.clear()},w={register:function(e){console.log("Data",e),f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/register/",e)},login:S,logout:y},I=Object(x.b)("auth/login",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.login(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(x.b)("auth/logout",Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.logout();case 1:case"end":return e.stop()}}),e)})))),k=Object(x.b)("auth/register",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.register(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(x.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{checkLogged:function(e){localStorage.getItem("user")?e.isLoggedIn=!0:e.isLoggedIn=!1}},extraReducers:(r={},Object(m.a)(r,I.fulfilled,(function(e){e.isLoggedIn=!0})),Object(m.a)(r,C.fulfilled,(function(e){e.isLoggedIn=!1})),Object(m.a)(r,k.fulfilled,(function(e){e.isLoggedIn=!1})),r)}),A=z.reducer,E=z.actions.checkLogged,q=n(31),B=n(4),D={global:function(e){return{body:{bg:Object(B.h)("#f0e7db","#202023")(e)}}}},L=Object(d.b)({config:{initialColorMode:"dark",useSystemColorMode:!0},styles:D,components:{Heading:{variants:{"section-title":{textDecoration:"underline",fontSize:20,textUnderlineOffset:6,textDecorationColor:"#525252",textDecorationThickness:4,marginTop:3,marginBottom:4}}},Link:{baseStyle:function(e){return{textDecoration:"none"}}}},colors:{glassTeal:"#88ccca"},fonts:{heading:"'Roboto'"}}),T=n(20),N=n(5),R=function(){return Object(N.jsx)(T.a,{styles:"\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');\n    "})},P=n(13),U=n(18),V=n(65),M=(n(319),n(156)),F=n(113),G=n(70),H=n(62),W=n(41),J=n(91),Q=f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("user"))}}),K=(f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api",headers:{accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("user"))}}),function(e,t,n,r){var c=new FormData;c.append("photo1",e),c.append("photo2",t),console.log("token from uplado photos:",localStorage.getItem("user")),console.log("username uplado",n),console.log("tokeeeen uplado",r),f.a.put("/onboarding/photos/".concat(n,")}"),c,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}})});function X(){var e=Object(j.g)(),t=Object(c.useState)(),n=Object(P.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)(Object(O.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.get("/onboarding/users/".concat(localStorage.getItem("username")));case 2:n=t.sent,console.log("Response to getUser(): ",n.data.user),a(n.data.user),null===r.urlDni1&&e.push("/onboarding");case 6:case"end":return t.stop()}}),t)}))),[]),Object(N.jsx)("div",{children:r&&Object(N.jsxs)(b.a,{mt:10,children:[Object(N.jsxs)(b.e,{size:"lg",children:["Bienvenido ",r.name," ",r.surname]}),Object(N.jsxs)(b.c,{direction:"column",align:"center",mt:5,children:[" ",Object(N.jsx)(b.e,{size:"md",children:"Documentos aportados"}),Object(N.jsx)(J.b,{m:3,src:r.urlDni1,alt:"img2"}),Object(N.jsx)(J.b,{m:3,src:r.urlDni2,alt:"img2"})]}),!0===r.validate&&Object(N.jsx)(b.e,{size:"md",children:"Enhorabuena, su cuenta esta validada."}),!1===r.validate&&Object(N.jsx)(b.e,{size:"md",children:"Su cuenta ser\xe1 validada por un administrador proximamente."})]})})}function Y(){var e=V.b().shape({name:V.c().min(3,"Nombre muy corto").max(16,"Nombre muy largo").required("Nombre requerido"),surname:V.c().min(3,"Apellido muy corto").max(16,"Apellido muy largo").required("Apellido requerido"),email:V.c().email("Formato de email inv\xe1lido").required("Email requerido"),password:V.c().min(8,"Contrase\xf1a muy corta").required("Contrase\xf1a requerida"),username:V.a().min(8,"N\xfamero muy corto").required("N\xfamero de documento requerido")}),t=Object(q.b)(),n=Object(j.g)(),r=a.a.useState(!1),c=Object(P.a)(r,2),o=c[0],s=c[1],i=function(){return s(!o)};return Object(N.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(N.jsx)(M.a,{bg:"teal.500",size:"xl"}),Object(N.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(N.jsx)(b.i,{as:"h3",size:"md",children:"Introduzca sus datos para realizar el registro"}),Object(N.jsx)(U.b,{initialValues:{name:"",surname:"",email:"",username:"",password:""},validationSchema:e,onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("VALUES",r),t(k(r)),console.log("USERNAME",r.username),localStorage.setItem("username",r.username),localStorage.setItem("password",r.password),localStorage.setItem("name",r.name),n.push("/onboarding");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){e.values,e.touched,e.isSubmiting,e.handleChange,e.handleBlur;return Object(N.jsxs)(U.a,{children:[Object(N.jsx)(H.a,{id:"name",name:"name",mt:6,variant:"flushed",type:"text",focusBorderColor:"teal.500",w:"350px",colorScheme:"teal",inputProps:{placeholder:"Nombre"}}),Object(N.jsx)(H.a,{id:"surname",name:"surname",mt:6,variant:"flushed",type:"text",placeholder:"Apellidos",colorScheme:"teal",w:"350px",focusBorderColor:"teal.500",inputProps:{placeholder:"Apellido"}}),Object(N.jsx)(H.a,{id:"username",name:"username",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"N\xfamero de documento",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"N\xfamero de documento"}}),Object(N.jsxs)(F.b,{children:[Object(N.jsx)(H.a,{id:"email",name:"email",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"Email",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"Correo electr\xf3nico"}}),Object(N.jsx)(F.c,{mt:6,pointerEvents:"none",children:Object(N.jsx)(W.a,{color:"teal"})})]}),Object(N.jsxs)(F.b,{children:[Object(N.jsx)(H.a,{name:"password",id:"password",mt:6,focusBorderColor:"teal.500",variant:"flushed",w:"350px",inputProps:{placeholder:"Contrase\xf1a",type:o?"text":"password"}}),Object(N.jsx)(F.d,{mt:6,width:"4.5rem",children:Object(N.jsx)(G.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:i,children:o?Object(N.jsx)(W.f,{}):Object(N.jsx)(W.e,{})})})]}),Object(N.jsxs)(G.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})}})]})}var Z=n(78),$=function(){var e=Object(Z.b)().toggleColorMode;return Object(N.jsx)(G.b,{ml:2,mt:2,"aria-label":"Toggle theme toggle button",colorScheme:Object(Z.c)("purple","orange"),icon:Object(Z.c)(Object(N.jsx)(W.c,{}),Object(N.jsx)(W.d,{})),onClick:e})};function _(){var e=Object(j.g)(),t=Object(q.c)((function(e){return e.auth.isLoggedIn}));console.log("isLogged = ",t);return Object(N.jsxs)(b.c,{mb:20,justify:"center",wrap:"wrap",children:[t||Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(b.f,{onClick:function(){return e.push("/iniciarsesion")},children:Object(N.jsx)(G.a,{m:2,colorScheme:"teal",children:"Inicia Sesi\xf3n"})}),Object(N.jsx)(b.f,{onClick:function(){return e.push("/")},children:Object(N.jsx)(G.a,{m:2,colorScheme:"teal",children:"Registrate"})})]}),t&&Object(N.jsx)(b.f,{onClick:function(){return y(),void e.push("/iniciarsesion")},children:Object(N.jsx)(G.a,{m:2,colorScheme:"red",children:"Salir"})}),Object(N.jsx)($,{})]})}var ee=n(171);function te(){var e=Object(q.b)(),t=Object(j.g)(),n=Object(ee.a)(),r=n.register,c=n.handleSubmit,o=n.formState.errors;console.log(o);var s=a.a.useState(!1),l=Object(P.a)(s,2),d=l[0],m=l[1];return Object(N.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(N.jsx)(M.a,{bg:"teal.500",size:"xl"}),Object(N.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(N.jsxs)(b.i,{as:"h3",size:"md",children:["Inicie sesi\xf3n o"," ",Object(N.jsx)(u.b,{to:"/",passHref:!0,children:"reg\xedstrese"})]}),Object(N.jsxs)("form",{onSubmit:c((function(n){e(I(n)),"admin"===localStorage.getItem("username")?t.push("/paneladministracion"):t.push("/panelusuario")})),children:[Object(N.jsxs)(F.b,{children:[Object(N.jsx)(F.a,Object(i.a)({mt:10,minW:"40ch",variant:"flushed",type:"text",placeholder:"Documento de identidad",colorScheme:"teal",focusBorderColor:"teal.500"},r("username",{required:!0}))),Object(N.jsx)(F.d,{mt:10,pointerEvents:"none",children:Object(N.jsx)(W.b,{color:"teal"}),mr:4})]}),Object(N.jsxs)(F.b,{children:[Object(N.jsx)(F.a,Object(i.a)({mt:6,focusBorderColor:"teal.500",variant:"flushed",type:d?"text":"password",placeholder:"password"},r("password",{required:!0}))),Object(N.jsx)(F.d,{mt:6,width:"4.5rem",children:Object(N.jsx)(G.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:function(){return m(!d)},children:d?Object(N.jsx)(W.f,{}):Object(N.jsx)(W.e,{})})})]}),Object(N.jsxs)(G.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})]})}function ne(){return Object(N.jsxs)(b.c,{w:"60vw",display:"flex",direction:"column",align:"center",justify:"center",children:[Object(N.jsx)(b.e,{as:"h1",size:"xl",children:"404"}),Object(N.jsx)(b.e,{as:"h2",size:"md",align:"center",children:"Lo sentimos, no hemos podido encontrar la pagina que estabas buscando."}),Object(N.jsx)(b.f,{href:"/",children:Object(N.jsx)(G.a,{mt:6,colorScheme:"teal",children:"Volver"})})]})}var re=n(172),ce=n.n(re);function ae(){var e=localStorage.getItem("username"),t=localStorage.getItem("user"),n=localStorage.getItem("name"),r="https://luciaberon.github.io/proyecto-validacion/#/validarusuario/".concat(e,"/").concat(t);return Object(N.jsxs)(b.c,{direction:"column",align:"center",children:[Object(N.jsxs)(b.e,{size:"md",children:["Gracias por registrarse ",n]}),Object(N.jsx)(b.i,{children:"Para continuar con el proceso, necesitamos que valide su identidad."}),Object(N.jsx)(b.i,{mt:6,children:"Escanee el siguiente c\xf3digo QR con su telefono para continuar:"}),Object(N.jsx)(b.a,{mt:6,children:Object(N.jsx)(ce.a,{value:r})})]})}var oe=n(161);function se(){var e=Object(c.useState)(),t=Object(P.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=Q.get("/panel/users");console.log(e),r(n)}),[]);var a=function(e){!function(e){Q.post("/panel/validate",e)}(e)},o=n.filter((function(e){return!1===e.validate})),s=n.filter((function(e){return!0===e.validate}));return console.log(o),Object(N.jsxs)(b.c,{direction:"column",align:"center",children:[Object(N.jsxs)(b.e,{children:["Bienvenido ","Admin"]}),Object(N.jsxs)(b.i,{children:["Tenemos ",o.length," usuarios por validar"]}),Object(N.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[!o.length&&Object(N.jsx)(b.b,{children:Object(N.jsx)(b.i,{children:"\xa1Enhorabuena! No quedan usuarios por validar."})}),o.map((function(e){return Object(N.jsxs)(b.a,{children:[Object(N.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(N.jsx)(oe.a,{allowToggle:!0,minW:"50rem",children:Object(N.jsxs)(oe.d,{borderColor:"teal",focusColor:"teal",children:[Object(N.jsx)("h2",{children:Object(N.jsxs)(oe.b,{focusColor:"teal",children:[Object(N.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(N.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(N.jsx)(oe.c,{})]})}),Object(N.jsxs)(oe.e,{justify:"center",pb:4,children:[Object(N.jsxs)(b.a,{display:"flex",children:[" ",Object(N.jsx)(J.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(N.jsx)(J.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(N.jsx)(G.a,{onClick:function(){return a(e.username)},colorScheme:"teal",m:4,children:"Validar documentos"})]})]})})]})}))," "]}),Object(N.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[Object(N.jsxs)(b.e,{size:"md",children:["Tenemos ",s.length," usuarios validados hasta ahora"]}),!o.length&&Object(N.jsx)(b.b,{children:Object(N.jsx)(b.i,{children:"\xa1Parece que no hay usuarios validados!"})}),s.map((function(e){return Object(N.jsxs)(b.a,{children:[Object(N.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(N.jsx)(oe.a,{allowToggle:!0,minW:"50rem",children:Object(N.jsxs)(oe.d,{borderColor:"teal",focusColor:"teal",children:[Object(N.jsx)("h2",{children:Object(N.jsxs)(oe.b,{focusColor:"teal",children:[Object(N.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(N.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(N.jsx)(oe.c,{})]})}),Object(N.jsxs)(oe.e,{justify:"center",pb:4,children:[Object(N.jsxs)(b.a,{display:"flex",children:[" ",Object(N.jsx)(J.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(N.jsx)(J.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(N.jsx)(G.a,{colorScheme:"teal",m:4,children:"Anular validaci\xf3n"})]})]})})]})}))," "]})]})}function ie(){var e=Object(j.h)().token,t=Object(j.h)().username,n=Object(j.g)();null!==e&&localStorage.setItem("user",e);var r=Object(c.useState)(),a=Object(P.a)(r,2),o=a[0],s=a[1],i=Object(c.useState)(),l=Object(P.a)(i,2),u=l[0],d=l[1],m=Object(c.useState)(!1),h=Object(P.a)(m,2),x=h[0],g=h[1],f=function(){var r=Object(O.a)(p.a.mark((function r(c){return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c.preventDefault(),g(!1),console.log("token uplado",localStorage.getItem("user"));try{K(o,u,t,e),n.push("/panelusuario")}catch(c){g(!0)}case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(N.jsxs)(b.c,{direction:"column",align:"center",justify:"center",children:[Object(N.jsx)(b.e,{mb:6,children:"Bienvenido"}),Object(N.jsx)(b.i,{align:"center",children:"Para finalizar tu registro, necesitamos que subas tu documento de identidad. Ten en cuenta lo siguiente, por favor:"}),Object(N.jsxs)(b.j,{centerContent:!0,mt:4,mb:10,children:[Object(N.jsx)(b.g,{children:"Solo aceptamos imagenes en formato jpeg o png"}),Object(N.jsx)(b.g,{children:"Deben ser dos fotografias (anverso y reverso)"}),Object(N.jsx)(b.g,{children:"Tu cuenta no estar\xe1 activada hasta que el administrador no valide tus documentos"})]}),Object(N.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(N.jsx)("input",{type:"file",onChange:function(){var e=document.getElementById("photo1").files[0];s(e)},id:"photo1",name:"photo1",required:!0}),Object(N.jsx)("input",{type:"file",onChange:function(){var e=document.getElementById("photo2").files[0];d(e)},id:"photo2",name:"photo2",required:!0}),Object(N.jsx)("input",{type:"submit",value:"ENVIAR FOTOS"})]}),x&&Object(N.jsx)("div",{children:"Error al cargar las im\xe1genes, intente nuevamente."})]})}var le=function(){var e=Object(j.g)(),t=Object(q.b)(),n=Object(c.useState)(!1),r=Object(P.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(!1),i=Object(P.a)(s,2),l=i[0],u=i[1],d=localStorage.getItem("name");return Object(N.jsxs)(b.b,{children:[a&&Object(N.jsx)(b.e,{children:"LOGGED"}),Object(N.jsxs)(b.e,{children:["Gracias por registrarse ",d," "]}),Object(N.jsx)(b.i,{children:"Para continuar, necesitamos que nos proporcione su documento de ideantidad. Por favor, siga los siguientes pasos:"}),Object(N.jsx)(G.a,{colorScheme:"teal",m:5,onClick:function(){o(!0),u(!1);try{t(I({username:localStorage.getItem("username"),password:localStorage.getItem("password")})).then((function(t){console.log("login done, redirect"),e.push("/validacion")}))}catch(n){u(!0)}},children:"VALIDAR IDENTIDAD"}),l&&Object(N.jsx)("div",{children:"Error al procesar solicitud, intente nuevamente."})]})},ue=["auth","component"],je=["auth","component"];var de=function(e){var t=e.auth,n=e.component,r=Object(l.a)(e,ue);return Object(N.jsx)(j.b,Object(i.a)(Object(i.a)({},r),{},{render:function(){return t?Object(N.jsx)(n,{}):Object(N.jsx)(j.a,{to:"/iniciarsesion"})}}))},be=function(e){var t=e.auth,n=e.component,r=Object(l.a)(e,je),c="Admin"===localStorage.getItem("username")?"paneladministracion":"panelusuario";return console.log("auth?",t),Object(N.jsx)(j.b,Object(i.a)(Object(i.a)({},r),{},{render:function(){return t?Object(N.jsx)(j.a,{to:"/".concat(c)}):Object(N.jsx)(n,{})}}))},me=function(){var e=Object(q.b)(),t=Object(q.c)((function(e){return e.auth.isLoggedIn}));return console.log("AUTH",t),Object(c.useEffect)((function(){console.log("checking"),e(E())}),[]),Object(N.jsx)(d.a,{theme:L,children:Object(N.jsxs)(b.b,{p:10,mt:5,className:"App",children:[Object(N.jsx)(R,{}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(_,{}),Object(N.jsxs)(j.d,{children:["/// register",Object(N.jsx)(be,{exact:!0,path:"/",component:Y,auth:t}),"/// onboarding with validate identity button",Object(N.jsx)(be,{exact:!0,path:"/onboarding",component:le}),"/// qr code",Object(N.jsx)(j.b,{exact:!0,path:"/validacion",component:ae,auth:t}),"/// login",Object(N.jsx)(be,{exact:!0,path:"/iniciarsesion",component:te,auth:t}),"// upload images",Object(N.jsx)(j.b,{exact:!0,path:"/validarusuario/:username/:token",component:ie,auth:t}),"// user panel",Object(N.jsx)(j.b,{exact:!0,path:"/panelusuario",component:X,auth:t}),"/// admin panel",Object(N.jsx)(de,{exact:!0,path:"/paneladministracion",component:se,auth:t}),Object(N.jsx)(j.b,{component:ne})]})]})]})})},he=(n(340),n(42)),pe=Object(he.b)({auth:A}),Oe=Object(x.a)({reducer:pe});s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(q.a,{store:Oe,children:Object(N.jsx)(me,{})})}),document.getElementById("root"))}},[[341,1,2]]]);
//# sourceMappingURL=main.d60003a4.chunk.js.map