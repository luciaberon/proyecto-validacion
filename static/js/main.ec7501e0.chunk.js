(this["webpackJsonpproyecto-validacion"]=this["webpackJsonpproyecto-validacion"]||[]).push([[0],{340:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),o=n(59),s=n.n(o),i=n(55),l=n(123),u=n(58),j=n(14),d=n(30),b=n(19),m=n(27),h=n(9),p=n.n(h),O=n(16),x=n(63),g=n(53),f=n.n(g),v={"Access-Control-Allow-Origin":"*"},S=function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(v),e.next=4,f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/login/",t);case 4:(n=e.sent).data.token&&(localStorage.setItem("user",n.data.token),localStorage.setItem("username",t.username));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){localStorage.clear()},w={register:function(e){console.log("Data",e),f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/register/",e)},login:S,logout:y},I=Object(x.b)("auth/login",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.login(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(x.b)("auth/logout",Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.logout();case 1:case"end":return e.stop()}}),e)})))),k=Object(x.b)("auth/register",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.register(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(x.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{checkLogged:function(e){localStorage.getItem("user")?e.isLoggedIn=!0:e.isLoggedIn=!1}},extraReducers:(c={},Object(m.a)(c,I.fulfilled,(function(e){e.isLoggedIn=!0})),Object(m.a)(c,C.fulfilled,(function(e){e.isLoggedIn=!1})),Object(m.a)(c,k.fulfilled,(function(e){e.isLoggedIn=!1})),c)}),q=z.reducer,A=z.actions.checkLogged,E=n(31),B=n(4),D={global:function(e){return{body:{bg:Object(B.h)("#f0e7db","#202023")(e)}}}},L=Object(d.b)({config:{initialColorMode:"dark",useSystemColorMode:!0},styles:D,components:{Heading:{variants:{"section-title":{textDecoration:"underline",fontSize:20,textUnderlineOffset:6,textDecorationColor:"#525252",textDecorationThickness:4,marginTop:3,marginBottom:4}}},Link:{baseStyle:function(e){return{textDecoration:"none"}}}},colors:{glassTeal:"#88ccca"},fonts:{heading:"'Roboto'"}}),N=n(20),T=n(5),R=function(){return Object(T.jsx)(N.a,{styles:"\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');\n    "})},P=n(13),U=n(18),V=n(64),M=(n(319),n(156)),F=n(113),G=n(69),H=n(71),W=n(41),J=n(91),Q=f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("user"))}}),K=f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api",headers:{accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("user"))}});function X(){var e=Object(r.useState)(),t=Object(P.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)(Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.get("/onboarding/users/".concat(localStorage.getItem("username")));case 2:t=e.sent,console.log("Response to getUser(): ",t.data.user),c(t.data.user);case 5:case"end":return e.stop()}}),e)}))),[]),Object(T.jsx)("div",{children:n&&Object(T.jsxs)(b.a,{mt:10,children:[Object(T.jsxs)(b.e,{size:"lg",children:["Bienvenido ",n.name," ",n.surname]}),Object(T.jsxs)(b.c,{direction:"column",align:"center",mt:5,children:[" ",Object(T.jsx)(b.e,{size:"md",children:"Documentos aportados"}),Object(T.jsx)(J.b,{m:3,src:n.urlDni1,alt:"img2"}),Object(T.jsx)(J.b,{m:3,src:n.urlDni2,alt:"img2"})]}),!0===n.validate&&Object(T.jsx)(b.e,{size:"md",children:"Enhorabuena, su cuenta esta validada."}),!1===n.validate&&Object(T.jsx)(b.e,{size:"md",children:"Su cuenta ser\xe1 validada por un administrador proximamente."})]})})}function Y(){var e=V.b().shape({name:V.c().min(3,"Nombre muy corto").max(16,"Nombre muy largo").required("Nombre requerido"),surname:V.c().min(3,"Apellido muy corto").max(16,"Apellido muy largo").required("Apellido requerido"),email:V.c().email("Formato de email inv\xe1lido").required("Email requerido"),password:V.c().min(8,"Contrase\xf1a muy corta").required("Contrase\xf1a requerida"),username:V.a().min(8,"N\xfamero muy corto").required("N\xfamero de documento requerido")}),t=Object(E.b)(),n=Object(j.g)(),c=a.a.useState(!1),r=Object(P.a)(c,2),o=r[0],s=r[1],i=function(){return s(!o)};return Object(T.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(T.jsx)(M.a,{bg:"teal.500",size:"xl"}),Object(T.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(T.jsx)(b.i,{as:"h3",size:"md",children:"Introduzca sus datos para realizar el registro"}),Object(T.jsx)(U.b,{initialValues:{name:"",surname:"",email:"",username:"",password:""},validationSchema:e,onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("VALUES",c),t(k(c)),console.log("USERNAME",c.username),localStorage.setItem("username",c.username),localStorage.setItem("password",c.password),localStorage.setItem("name",c.name),n.push("/onboarding");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){e.values,e.touched,e.isSubmiting,e.handleChange,e.handleBlur;return Object(T.jsxs)(U.a,{children:[Object(T.jsx)(H.a,{id:"name",name:"name",mt:6,variant:"flushed",type:"text",focusBorderColor:"teal.500",w:"350px",colorScheme:"teal",inputProps:{placeholder:"Nombre"}}),Object(T.jsx)(H.a,{id:"surname",name:"surname",mt:6,variant:"flushed",type:"text",placeholder:"Apellidos",colorScheme:"teal",w:"350px",focusBorderColor:"teal.500",inputProps:{placeholder:"Apellido"}}),Object(T.jsx)(H.a,{id:"username",name:"username",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"N\xfamero de documento",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"N\xfamero de documento"}}),Object(T.jsxs)(F.b,{children:[Object(T.jsx)(H.a,{id:"email",name:"email",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"Email",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"Correo electr\xf3nico"}}),Object(T.jsx)(F.c,{mt:6,pointerEvents:"none",children:Object(T.jsx)(W.a,{color:"teal"})})]}),Object(T.jsxs)(F.b,{children:[Object(T.jsx)(H.a,{name:"password",id:"password",mt:6,focusBorderColor:"teal.500",variant:"flushed",w:"350px",inputProps:{placeholder:"Contrase\xf1a",type:o?"text":"password"}}),Object(T.jsx)(F.d,{mt:6,width:"4.5rem",children:Object(T.jsx)(G.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:i,children:o?Object(T.jsx)(W.f,{}):Object(T.jsx)(W.e,{})})})]}),Object(T.jsxs)(G.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})}})]})}var Z=n(78),$=function(){var e=Object(Z.b)().toggleColorMode;return Object(T.jsx)(G.b,{ml:2,mt:2,"aria-label":"Toggle theme toggle button",colorScheme:Object(Z.c)("purple","orange"),icon:Object(Z.c)(Object(T.jsx)(W.c,{}),Object(T.jsx)(W.d,{})),onClick:e})};function _(){var e=Object(j.g)(),t=Object(E.c)((function(e){return e.auth.isLoggedIn}));return console.log("isLogged = ",t),Object(T.jsxs)(b.c,{mb:20,justify:"center",wrap:"wrap",children:[t||Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.f,{onClick:function(){return e.push("/iniciarsesion")},children:Object(T.jsx)(G.a,{m:2,colorScheme:"teal",children:"Inicia Sesi\xf3n"})}),Object(T.jsx)(b.f,{onClick:function(){return e.push("/")},children:Object(T.jsx)(G.a,{m:2,colorScheme:"teal",children:"Registrate"})})]}),t&&Object(T.jsx)(b.f,{onClick:function(){return y()},children:Object(T.jsx)(G.a,{m:2,colorScheme:"red",children:"Salir"})}),Object(T.jsx)($,{})]})}var ee=n(171);function te(){var e=Object(E.b)(),t=Object(j.g)(),n=Object(ee.a)(),c=n.register,r=n.handleSubmit,o=n.formState.errors;console.log(o);var s=a.a.useState(!1),l=Object(P.a)(s,2),d=l[0],m=l[1];return Object(T.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(T.jsx)(M.a,{bg:"teal.500",size:"xl"}),Object(T.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(T.jsxs)(b.i,{as:"h3",size:"md",children:["Inicie sesi\xf3n o"," ",Object(T.jsx)(u.b,{to:"/",passHref:!0,children:"reg\xedstrese"})]}),Object(T.jsxs)("form",{onSubmit:r((function(n){e(I(n)),"admin"===localStorage.getItem("username")?t.push("/paneladministracion"):t.push("/validacion")})),children:[Object(T.jsxs)(F.b,{children:[Object(T.jsx)(F.a,Object(i.a)({mt:10,minW:"40ch",variant:"flushed",type:"text",placeholder:"Documento de identidad",colorScheme:"teal",focusBorderColor:"teal.500"},c("username",{required:!0}))),Object(T.jsx)(F.d,{mt:10,pointerEvents:"none",children:Object(T.jsx)(W.b,{color:"teal"}),mr:4})]}),Object(T.jsxs)(F.b,{children:[Object(T.jsx)(F.a,Object(i.a)({mt:6,focusBorderColor:"teal.500",variant:"flushed",type:d?"text":"password",placeholder:"password"},c("password",{required:!0}))),Object(T.jsx)(F.d,{mt:6,width:"4.5rem",children:Object(T.jsx)(G.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:function(){return m(!d)},children:d?Object(T.jsx)(W.f,{}):Object(T.jsx)(W.e,{})})})]}),Object(T.jsxs)(G.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})]})}function ne(){return Object(T.jsxs)(b.c,{w:"60vw",display:"flex",direction:"column",align:"center",justify:"center",children:[Object(T.jsx)(b.e,{as:"h1",size:"xl",children:"404"}),Object(T.jsx)(b.e,{as:"h2",size:"md",align:"center",children:"Lo sentimos, no hemos podido encontrar la pagina que estabas buscando."}),Object(T.jsx)(b.f,{href:"/",children:Object(T.jsx)(G.a,{mt:6,colorScheme:"teal",children:"Volver"})})]})}var ce=n(172),re=n.n(ce);function ae(){var e=localStorage.getItem("username"),t=localStorage.getItem("user"),n=localStorage.getItem("name"),c="https://luciaberon.github.io/proyecto-validacion/#/validarusuario/".concat(e,"/").concat(t);return Object(T.jsxs)(b.c,{direction:"column",align:"center",children:[Object(T.jsxs)(b.e,{size:"md",children:["Gracias por registrarse ",n]}),Object(T.jsx)(b.i,{children:"Para continuar con el proceso, necesitamos que valide su identidad."}),Object(T.jsx)(b.i,{mt:6,children:"Escanee el siguiente c\xf3digo QR con su telefono para continuar:"}),Object(T.jsx)(b.a,{mt:6,children:Object(T.jsx)(re.a,{value:c})})]})}var oe=n(161);function se(){var e=Object(r.useState)(),t=Object(P.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){var e=Q.get("/panel/users");console.log(e),c(n)}),[]);var a=function(e){!function(e){Q.post("/panel/validate",e)}(e)},o=n.filter((function(e){return!1===e.validate})),s=n.filter((function(e){return!0===e.validate}));return console.log(o),Object(T.jsxs)(b.c,{direction:"column",align:"center",children:[Object(T.jsxs)(b.e,{children:["Bienvenido ","Admin"]}),Object(T.jsxs)(b.i,{children:["Tenemos ",o.length," usuarios por validar"]}),Object(T.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[!o.length&&Object(T.jsx)(b.b,{children:Object(T.jsx)(b.i,{children:"\xa1Enhorabuena! No quedan usuarios por validar."})}),o.map((function(e){return Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(T.jsx)(oe.a,{allowToggle:!0,minW:"50rem",children:Object(T.jsxs)(oe.d,{borderColor:"teal",focusColor:"teal",children:[Object(T.jsx)("h2",{children:Object(T.jsxs)(oe.b,{focusColor:"teal",children:[Object(T.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(T.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(T.jsx)(oe.c,{})]})}),Object(T.jsxs)(oe.e,{justify:"center",pb:4,children:[Object(T.jsxs)(b.a,{display:"flex",children:[" ",Object(T.jsx)(J.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(T.jsx)(J.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(T.jsx)(G.a,{onClick:function(){return a(e.username)},colorScheme:"teal",m:4,children:"Validar documentos"})]})]})})]})}))," "]}),Object(T.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[Object(T.jsxs)(b.e,{size:"md",children:["Tenemos ",s.length," usuarios validados hasta ahora"]}),!o.length&&Object(T.jsx)(b.b,{children:Object(T.jsx)(b.i,{children:"\xa1Parece que no hay usuarios validados!"})}),s.map((function(e){return Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(T.jsx)(oe.a,{allowToggle:!0,minW:"50rem",children:Object(T.jsxs)(oe.d,{borderColor:"teal",focusColor:"teal",children:[Object(T.jsx)("h2",{children:Object(T.jsxs)(oe.b,{focusColor:"teal",children:[Object(T.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(T.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(T.jsx)(oe.c,{})]})}),Object(T.jsxs)(oe.e,{justify:"center",pb:4,children:[Object(T.jsxs)(b.a,{display:"flex",children:[" ",Object(T.jsx)(J.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(T.jsx)(J.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(T.jsx)(G.a,{colorScheme:"teal",m:4,children:"Anular validaci\xf3n"})]})]})})]})}))," "]})]})}function ie(){var e=Object(j.h)().token,t=Object(j.g)();null!==e&&localStorage.setItem("user",e);var n=Object(r.useState)(),c=Object(P.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(),i=Object(P.a)(s,2),l=i[0],u=i[1],d=function(e){e.preventDefault(),console.log("photo1",a),function(e,t){var n=new FormData;n.append("photo1",e),n.append("photo2",t),K.put("/onboarding/photos/".concat(localStorage.getItem("username")),n).then((function(e){return console.log(e)}))}(a,l),t.push("/panelusuario")};return Object(T.jsxs)(b.c,{direction:"column",align:"center",justify:"center",children:[Object(T.jsx)(b.e,{mb:6,children:"Bienvenido"}),Object(T.jsx)(b.i,{align:"center",children:"Para finalizar tu registro, necesitamos que subas tu documento de identidad. Ten en cuenta lo siguiente, por favor:"}),Object(T.jsxs)(b.j,{centerContent:!0,mt:4,mb:10,children:[Object(T.jsx)(b.g,{children:"Solo aceptamos imagenes en formato jpeg o png"}),Object(T.jsx)(b.g,{children:"Deben ser dos fotografias (anverso y reverso)"}),Object(T.jsx)(b.g,{children:"Tu cuenta no estar\xe1 activada hasta que el administrador no valide tus documentos"})]}),Object(T.jsxs)("form",{onSubmit:function(e){return d(e)},children:[Object(T.jsx)("input",{type:"file",onChange:function(){var e=document.getElementById("photo1").files[0];o(e)},id:"photo1",name:"photo1",required:!0}),Object(T.jsx)("input",{type:"file",onChange:function(){var e=document.getElementById("photo2").files[0];u(e)},id:"photo2",name:"photo2",required:!0}),Object(T.jsx)("input",{type:"submit",value:"ENVIAR FOTOS"})]})]})}var le=function(){var e=Object(j.g)(),t=Object(E.b)(),n=Object(r.useState)(!1),c=Object(P.a)(n,2),a=c[0],o=c[1],s=localStorage.getItem("name");return Object(T.jsxs)(b.b,{children:[a&&Object(T.jsx)(b.e,{children:"LOGGED"}),Object(T.jsxs)(b.e,{children:["Gracias por registrarse ",s," "]}),Object(T.jsx)(b.i,{children:"Para continuar, necesitamos que nos proporcione su documento de ideantidad. Por favor, siga los siguientes pasos:"}),Object(T.jsx)(G.a,{colorScheme:"teal",m:5,onClick:function(){o(!0),t(I({username:localStorage.getItem("username"),password:localStorage.getItem("password")})),console.log("login done, redirect"),e.push("/validacion")},children:"VALIDAR IDENTIDAD"})]})},ue=["auth","component"],je=["auth","component"];var de=function(e){var t=e.auth,n=e.component,c=Object(l.a)(e,ue);return Object(T.jsx)(j.b,Object(i.a)(Object(i.a)({},c),{},{render:function(){return t?Object(T.jsx)(n,{}):Object(T.jsx)(j.a,{to:"/iniciarsesion"})}}))},be=function(e){var t=e.auth,n=e.component,c=Object(l.a)(e,je),r="Admin"===localStorage.getItem("username")?"paneladministracion":"panelusuario";return Object(T.jsx)(j.b,Object(i.a)(Object(i.a)({},c),{},{render:function(){return t?Object(T.jsx)(j.a,{to:"/".concat(r)}):Object(T.jsx)(n,{})}}))},me=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.auth.isLoggedIn}));return console.log("AUTH",t),Object(r.useEffect)((function(){console.log("checking"),e(A())}),[]),Object(T.jsx)(d.a,{theme:L,children:Object(T.jsxs)(b.b,{p:10,mt:5,className:"App",children:[Object(T.jsx)(R,{}),Object(T.jsxs)(u.a,{children:[Object(T.jsx)(_,{}),Object(T.jsxs)(j.d,{children:["/// register",Object(T.jsx)(j.b,{exact:!0,path:"/",component:Y,auth:t}),"/// onboarding with validate identity button",Object(T.jsx)(j.b,{exact:!0,path:"/onboarding",component:le}),"/// qr code",Object(T.jsx)(j.b,{exact:!0,path:"/validacion",component:ae,auth:t}),"/// login",Object(T.jsx)(be,{exact:!0,path:"/iniciarsesion",component:te,auth:t}),"// upload images",Object(T.jsx)(j.b,{exact:!0,path:"/validarusuario/:username/:token",component:ie,auth:t}),"// user panel",Object(T.jsx)(j.b,{exact:!0,path:"/panelusuario",component:X,auth:t}),"/// admin panel",Object(T.jsx)(de,{exact:!0,path:"/paneladministracion",component:se,auth:t}),Object(T.jsx)(j.b,{component:ne})]})]})]})})},he=(n(340),n(42)),pe=Object(he.b)({auth:q}),Oe=Object(x.a)({reducer:pe});s.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(E.a,{store:Oe,children:Object(T.jsx)(me,{})})}),document.getElementById("root"))}},[[341,1,2]]]);
//# sourceMappingURL=main.ec7501e0.chunk.js.map