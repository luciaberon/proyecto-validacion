(this["webpackJsonpproyecto-validacion"]=this["webpackJsonpproyecto-validacion"]||[]).push([[0],{352:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),o=n(43),s=n.n(o),i=n(55),l=n(123),j=n(58),u=n(14),d=n(32),b=n(19),m=n(27),h=n(10),O=n.n(h),p=n(18),x=n(63),g=n(59),f=n.n(g),v={"Access-Control-Allow-Origin":"*"},S=function(){var e=Object(p.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(v),e.next=4,f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/login/",t);case 4:(n=e.sent).data.token&&(localStorage.setItem("user",n.data.token),localStorage.setItem("username",t.username));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){localStorage.clear()},w={register:function(e){console.log("Data",e),f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/register/",e)},login:S,logout:y},C=Object(x.b)("auth/login",function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dataaaaaa",t),e.next=3,w.login(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(x.b)("auth/logout",Object(p.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.logout();case 1:case"end":return e.stop()}}),e)})))),k=Object(x.b)("auth/register",function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.register(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(x.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{checkLogged:function(e){localStorage.getItem("user")?e.isLoggedIn=!0:e.isLoggedIn=!1}},extraReducers:(c={},Object(m.a)(c,C.fulfilled,(function(e){e.isLoggedIn=!0})),Object(m.a)(c,I.fulfilled,(function(e){e.isLoggedIn=!1})),Object(m.a)(c,k.fulfilled,(function(e){e.isLoggedIn=!1})),c)}),A=z.reducer,q=z.actions.checkLogged,E=n(38),B=n(4),D={global:function(e){return{body:{bg:Object(B.h)("#f0e7db","#202023")(e)}}}},N=Object(d.b)({config:{initialColorMode:"dark",useSystemColorMode:!0},styles:D,components:{Heading:{variants:{"section-title":{textDecoration:"underline",fontSize:20,textUnderlineOffset:6,textDecorationColor:"#525252",textDecorationThickness:4,marginTop:3,marginBottom:4}}},Link:{baseStyle:function(e){return{textDecoration:"none"}}}},colors:{glassTeal:"#88ccca"},fonts:{heading:"'Roboto'"}}),L=n(20),T=n(5),R=function(){return Object(T.jsx)(L.a,{styles:"\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');\n    "})},P=n(13),U=n(17),V=n(64),G=(n(322),n(156)),M=n(113),F=n(69),H=n(71),W=n(41),J=n(92),Q=f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("user"))}});function K(){var e=Object(a.useState)(),t=Object(P.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=Q.get("/onboarding/users/".concat(localStorage.getItem("username")));console.log("Response to getUser(): ",e),c(e)}),[]);return Object(T.jsxs)(b.a,{mt:10,children:[Object(T.jsxs)(b.e,{size:"lg",children:["Bienvenido ",n.name," ",n.surname]}),Object(T.jsxs)(b.c,{direction:"column",align:"center",mt:5,children:[" ",Object(T.jsx)(b.e,{size:"md",children:"Documentos aportados"}),Object(T.jsx)(J.b,{m:3,src:n.img1,alt:"img2"}),Object(T.jsx)(J.b,{m:3,src:n.img2,alt:"img2"})]}),!0===n.validate&&Object(T.jsx)(b.e,{size:"md",children:"Enhorabuena, su cuenta esta validada."}),!1===n.validate&&Object(T.jsx)(b.e,{size:"md",children:"Su cuenta ser\xe1 validada por un administrador proximamente."})]})}function X(){var e=V.b().shape({name:V.c().min(3,"Nombre muy corto").max(16,"Nombre muy largo").required("Nombre requerido"),surname:V.c().min(3,"Apellido muy corto").max(16,"Apellido muy largo").required("Apellido requerido"),email:V.c().email("Formato de email inv\xe1lido").required("Email requerido"),password:V.c().min(8,"Contrase\xf1a muy corta").required("Contrase\xf1a requerida"),username:V.a().min(8,"N\xfamero muy corto").required("N\xfamero de documento requerido")}),t=Object(E.b)(),n=Object(u.g)(),c=r.a.useState(!1),a=Object(P.a)(c,2),o=a[0],s=a[1],i=function(){return s(!o)};return Object(T.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(T.jsx)(G.a,{bg:"teal.500",size:"xl"}),Object(T.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(T.jsx)(b.i,{as:"h3",size:"md",children:"Introduzca sus datos para realizar el registro"}),Object(T.jsx)(U.b,{initialValues:{name:"",surname:"",email:"",username:"",password:""},validationSchema:e,onSubmit:function(){var e=Object(p.a)(O.a.mark((function e(c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("VALUES",c),t(k(c)),console.log("USERNAME",c.username),localStorage.setItem("username",c.username),localStorage.setItem("password",c.password),localStorage.setItem("name",c.name),n.push("/onboarding");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){e.values,e.touched,e.isSubmiting,e.handleChange,e.handleBlur;return Object(T.jsxs)(U.a,{children:[Object(T.jsx)(H.a,{id:"name",name:"name",mt:6,variant:"flushed",type:"text",focusBorderColor:"teal.500",w:"350px",colorScheme:"teal",inputProps:{placeholder:"Nombre"}}),Object(T.jsx)(H.a,{id:"surname",name:"surname",mt:6,variant:"flushed",type:"text",placeholder:"Apellidos",colorScheme:"teal",w:"350px",focusBorderColor:"teal.500",inputProps:{placeholder:"Apellido"}}),Object(T.jsx)(H.a,{id:"username",name:"username",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"N\xfamero de documento",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"N\xfamero de documento"}}),Object(T.jsxs)(M.b,{children:[Object(T.jsx)(H.a,{id:"email",name:"email",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"Email",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"Correo electr\xf3nico"}}),Object(T.jsx)(M.c,{mt:6,pointerEvents:"none",children:Object(T.jsx)(W.a,{color:"teal"})})]}),Object(T.jsxs)(M.b,{children:[Object(T.jsx)(H.a,{name:"password",id:"password",mt:6,focusBorderColor:"teal.500",variant:"flushed",w:"350px",inputProps:{placeholder:"Contrase\xf1a",type:o?"text":"password"}}),Object(T.jsx)(M.d,{mt:6,width:"4.5rem",children:Object(T.jsx)(F.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:i,children:o?Object(T.jsx)(W.f,{}):Object(T.jsx)(W.e,{})})})]}),Object(T.jsxs)(F.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})}})]})}var Y=n(78),Z=function(){var e=Object(Y.b)().toggleColorMode;return Object(T.jsx)(F.b,{ml:2,mt:2,"aria-label":"Toggle theme toggle button",colorScheme:Object(Y.c)("purple","orange"),icon:Object(Y.c)(Object(T.jsx)(W.c,{}),Object(T.jsx)(W.d,{})),onClick:e})};function $(){var e=Object(u.g)();return Object(T.jsxs)(b.c,{mb:20,justify:"center",wrap:"wrap",children:[Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.f,{onClick:function(){return e.push("/iniciarsesion")},children:Object(T.jsx)(F.a,{m:2,colorScheme:"teal",children:"Inicia Sesi\xf3n"})}),Object(T.jsx)(b.f,{onClick:function(){return e.push("/")},children:Object(T.jsx)(F.a,{m:2,colorScheme:"teal",children:"Registrate"})})]}),Object(T.jsx)(b.f,{onClick:function(){return y()},children:Object(T.jsx)(F.a,{m:2,colorScheme:"red",children:"Salir"})}),Object(T.jsx)(Z,{})]})}var _=n(171);function ee(){var e=Object(E.b)(),t=Object(u.g)(),n=Object(_.a)(),c=n.register,a=n.handleSubmit,o=n.formState.errors;console.log(o);var s=r.a.useState(!1),l=Object(P.a)(s,2),d=l[0],m=l[1];return Object(T.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(T.jsx)(G.a,{bg:"teal.500",size:"xl"}),Object(T.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(T.jsxs)(b.i,{as:"h3",size:"md",children:["Inicie sesi\xf3n o"," ",Object(T.jsx)(j.b,{to:"/",passHref:!0,children:"reg\xedstrese"})]}),Object(T.jsxs)("form",{onSubmit:a((function(n){e(C(n)),"admin"===localStorage.getItem("username")?t.push("/paneladministracion"):t.push("/validacion")})),children:[Object(T.jsxs)(M.b,{children:[Object(T.jsx)(M.a,Object(i.a)({mt:10,minW:"40ch",variant:"flushed",type:"text",placeholder:"Documento de identidad",colorScheme:"teal",focusBorderColor:"teal.500"},c("username",{required:!0}))),Object(T.jsx)(M.d,{mt:10,pointerEvents:"none",children:Object(T.jsx)(W.b,{color:"teal"}),mr:4})]}),Object(T.jsxs)(M.b,{children:[Object(T.jsx)(M.a,Object(i.a)({mt:6,focusBorderColor:"teal.500",variant:"flushed",type:d?"text":"password",placeholder:"password"},c("password",{required:!0}))),Object(T.jsx)(M.d,{mt:6,width:"4.5rem",children:Object(T.jsx)(F.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:function(){return m(!d)},children:d?Object(T.jsx)(W.f,{}):Object(T.jsx)(W.e,{})})})]}),Object(T.jsxs)(F.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})]})}function te(){return Object(T.jsxs)(b.c,{w:"60vw",display:"flex",direction:"column",align:"center",justify:"center",children:[Object(T.jsx)(b.e,{as:"h1",size:"xl",children:"404"}),Object(T.jsx)(b.e,{as:"h2",size:"md",align:"center",children:"Lo sentimos, no hemos podido encontrar la pagina que estabas buscando."}),Object(T.jsx)(b.f,{href:"/",children:Object(T.jsx)(F.a,{mt:6,colorScheme:"teal",children:"Volver"})})]})}var ne=n(172),ce=n.n(ne);function ae(){var e=localStorage.getItem("username"),t=(localStorage.getItem("token"),localStorage.getItem("name")),n="https://luciaberon.github.io/proyecto-validacion/#/validarusuario/".concat(e);return Object(T.jsxs)(b.c,{direction:"column",align:"center",children:[Object(T.jsxs)(b.e,{size:"md",children:["Gracias por registrarse ",t]}),Object(T.jsx)(b.i,{children:"Para continuar con el proceso, necesitamos que valide su identidad."}),Object(T.jsx)(b.i,{mt:6,children:"Escanee el siguiente c\xf3digo QR con su telefono para continuar:"}),Object(T.jsx)(b.a,{mt:6,children:Object(T.jsx)(ce.a,{value:n})})]})}var re=n(161);function oe(){var e=Object(a.useState)(),t=Object(P.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=Q.get("/panel/users");console.log(e),c(n)}),[]);var r=function(e){!function(e){Q.post("/panel/validate",e)}(e)},o=n.filter((function(e){return!1===e.validate})),s=n.filter((function(e){return!0===e.validate}));return console.log(o),Object(T.jsxs)(b.c,{direction:"column",align:"center",children:[Object(T.jsxs)(b.e,{children:["Bienvenido ","Admin"]}),Object(T.jsxs)(b.i,{children:["Tenemos ",o.length," usuarios por validar"]}),Object(T.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[!o.length&&Object(T.jsx)(b.b,{children:Object(T.jsx)(b.i,{children:"\xa1Enhorabuena! No quedan usuarios por validar."})}),o.map((function(e){return Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(T.jsx)(re.a,{allowToggle:!0,minW:"50rem",children:Object(T.jsxs)(re.d,{borderColor:"teal",focusColor:"teal",children:[Object(T.jsx)("h2",{children:Object(T.jsxs)(re.b,{focusColor:"teal",children:[Object(T.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(T.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(T.jsx)(re.c,{})]})}),Object(T.jsxs)(re.e,{justify:"center",pb:4,children:[Object(T.jsxs)(b.a,{display:"flex",children:[" ",Object(T.jsx)(J.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(T.jsx)(J.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(T.jsx)(F.a,{onClick:function(){return r(e.username)},colorScheme:"teal",m:4,children:"Validar documentos"})]})]})})]})}))," "]}),Object(T.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[Object(T.jsxs)(b.e,{size:"md",children:["Tenemos ",s.length," usuarios validados hasta ahora"]}),!o.length&&Object(T.jsx)(b.b,{children:Object(T.jsx)(b.i,{children:"\xa1Parece que no hay usuarios validados!"})}),s.map((function(e){return Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(T.jsx)(re.a,{allowToggle:!0,minW:"50rem",children:Object(T.jsxs)(re.d,{borderColor:"teal",focusColor:"teal",children:[Object(T.jsx)("h2",{children:Object(T.jsxs)(re.b,{focusColor:"teal",children:[Object(T.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(T.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(T.jsx)(re.c,{})]})}),Object(T.jsxs)(re.e,{justify:"center",pb:4,children:[Object(T.jsxs)(b.a,{display:"flex",children:[" ",Object(T.jsx)(J.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(T.jsx)(J.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(T.jsx)(F.a,{colorScheme:"teal",m:4,children:"Anular validaci\xf3n"})]})]})})]})}))," "]})]})}n(343);var se=n(173),ie=(n(350),n(174)),le=n.n(ie),je=n(175),ue=n.n(je);n(351);function de(){var e=Object(u.h)().username,t=(Object(u.g)(),Object(a.useState)(null)),n=Object(P.a)(t,2),c=(n[0],n[1],Object(a.useState)(null)),r=Object(P.a)(c,2),o=(r[0],r[1],Object(a.useState)([1,2])),s=Object(P.a)(o,2),i=(s[0],s[1],Object(a.useState)()),l=Object(P.a)(i,2),j=l[0],d=l[1],m=Object(a.useState)(),h=Object(P.a)(m,2),O=(h[0],h[1]),p=Object(a.useState)(!1),x=Object(P.a)(p,2);x[0],x[1];return console.log("username uplaod page",e),Object(T.jsxs)(b.c,{direction:"column",align:"center",justify:"center",children:[Object(T.jsx)(b.e,{mb:6,children:"Bienvenido"}),Object(T.jsx)(b.i,{align:"center",children:"Para finalizar tu registro, necesitamos que subas tu documento de identidad. Ten en cuenta lo siguiente, por favor:"}),Object(T.jsxs)(b.j,{centerContent:!0,mt:4,mb:10,children:[Object(T.jsx)(b.g,{children:"Solo aceptamos imagenes en formato jpeg o png"}),Object(T.jsx)(b.g,{children:"Deben ser dos fotografias (anverso y reverso)"}),Object(T.jsx)(b.g,{children:"Tu cuenta no estar\xe1 activada hasta que el administrador no valide tus documentos"})]}),Object(T.jsxs)("form",{onSubmit:function(){var e;e=j,Q.put("/onboarding/photos/".concat(localStorage.getItem("username")),e)},children:[Object(T.jsx)("input",{type:"file",onChange:function(e){console.log("image data",e),d(e)},name:"files",required:!0}),Object(T.jsx)("input",{type:"file",onChange:function(e){console.log("image data",e),O(e)},name:"files",required:!0}),Object(T.jsx)("input",{type:"submit",value:"ENVIAR FOTOS"})]})]})}Object(se.registerPlugin)(le.a,ue.a);var be=function(){var e=Object(u.g)(),t=Object(E.b)(),n=Object(a.useState)(!1),c=Object(P.a)(n,2),r=c[0],o=c[1];return Object(T.jsxs)("div",{children:[r&&Object(T.jsx)("h1",{children:"LOGGED"}),Object(T.jsx)("h2",{children:"P\xc1GINA ONBOARDING"}),Object(T.jsx)("button",{onClick:function(){o(!0),t(C({username:localStorage.getItem("username"),password:localStorage.getItem("password")})),console.log("login done, redirect"),e.push("/validacion")},children:"VALIDAR IDENTIDAD"})]})},me=["auth","component"],he=["auth","component"];var Oe=function(e){var t=e.auth,n=e.component,c=Object(l.a)(e,me);return Object(T.jsx)(u.b,Object(i.a)(Object(i.a)({},c),{},{render:function(){return t?Object(T.jsx)(n,{}):Object(T.jsx)(u.a,{to:"/iniciarsesion"})}}))},pe=function(e){var t=e.auth,n=e.component,c=Object(l.a)(e,he),a="Admin"===localStorage.getItem("username")?"paneladministracion":"panelusuario";return Object(T.jsx)(u.b,Object(i.a)(Object(i.a)({},c),{},{render:function(){return t?Object(T.jsx)(u.a,{to:"/".concat(a)}):Object(T.jsx)(n,{})}}))},xe=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.auth.isLoggedIn}));return console.log("AUTH",t),Object(a.useEffect)((function(){console.log("checking"),e(q())}),[]),Object(T.jsx)(d.a,{theme:N,children:Object(T.jsxs)(b.b,{p:10,mt:5,className:"App",children:[Object(T.jsx)(R,{}),Object(T.jsxs)(j.a,{children:[Object(T.jsx)($,{}),Object(T.jsxs)(u.d,{children:["/// register",Object(T.jsx)(u.b,{exact:!0,path:"/",component:X,auth:t}),"/// onboarding with validate identity button",Object(T.jsx)(u.b,{exact:!0,path:"/onboarding",component:be}),"/// qr code",Object(T.jsx)(u.b,{exact:!0,path:"/validacion",component:ae,auth:t}),"/// login",Object(T.jsx)(pe,{exact:!0,path:"/iniciarsesion",component:ee,auth:t}),"// upload images",Object(T.jsx)(Oe,{exact:!0,path:"/validarusuario/:username",component:de,auth:t}),"// user panel",Object(T.jsx)(Oe,{exact:!0,path:"/panelusuario",component:K,auth:t}),"/// admin panel",Object(T.jsx)(Oe,{exact:!0,path:"/paneladministracion",component:oe,auth:t}),Object(T.jsx)(u.b,{component:te})]})]})]})})},ge=(n(352),n(44)),fe=Object(ge.b)({auth:A}),ve=Object(x.a)({reducer:fe});s.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(E.a,{store:ve,children:Object(T.jsx)(xe,{})})}),document.getElementById("root"))}},[[353,1,2]]]);
//# sourceMappingURL=main.c6c19fb9.chunk.js.map