(this["webpackJsonpproyecto-validacion"]=this["webpackJsonpproyecto-validacion"]||[]).push([[0],{766:function(e,t,n){},767:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),o=n(26),s=n.n(o),i=n(81),l=n(205),u=n(87),j=n(16),d=n(45),b=n(24),m=n(37),h=n(11),p=n.n(h),O=n(19),x=n(92),g=n(67),f=n.n(g),v={"Access-Control-Allow-Origin":"*"},S=function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(v),e.next=4,f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/login/",t);case 4:(n=e.sent).data.token&&(localStorage.setItem("user",n.data.token),localStorage.setItem("username",t.username));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){localStorage.clear()},w={register:function(e){console.log("Data",e),f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/register/",e)},login:S,logout:y},I=Object(x.b)("auth/login",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dataaaaaa",t),e.next=3,w.login(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(x.b)("auth/logout",Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.logout();case 1:case"end":return e.stop()}}),e)})))),k=Object(x.b)("auth/register",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.register(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(x.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{checkLogged:function(e){localStorage.getItem("user")?e.isLoggedIn=!0:e.isLoggedIn=!1}},extraReducers:(c={},Object(m.a)(c,I.fulfilled,(function(e){e.isLoggedIn=!0})),Object(m.a)(c,C.fulfilled,(function(e){e.isLoggedIn=!1})),Object(m.a)(c,k.fulfilled,(function(e){e.isLoggedIn=!1})),c)}),A=z.reducer,q=z.actions.checkLogged,E=n(53),B=n(4),D={global:function(e){return{body:{bg:Object(B.h)("#f0e7db","#202023")(e)}}}},L=Object(d.b)({config:{initialColorMode:"dark",useSystemColorMode:!0},styles:D,components:{Heading:{variants:{"section-title":{textDecoration:"underline",fontSize:20,textUnderlineOffset:6,textDecorationColor:"#525252",textDecorationThickness:4,marginTop:3,marginBottom:4}}},Link:{baseStyle:function(e){return{textDecoration:"none"}}}},colors:{glassTeal:"#88ccca"},fonts:{heading:"'Roboto'"}}),N=n(25),R=n(5),T=function(){return Object(R.jsx)(N.a,{styles:"\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');\n    "})},P=n(15),U=n(21),V=n(93),G=(n(448),n(243)),M=n(195),F=n(101),H=n(103),W=n(56),J=n(149),Q=f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("user"))}}),K=f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api",headers:{accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("user"))}});function X(){var e=Object(r.useState)(),t=Object(P.a)(e,2),n=t[0];t[1];return Object(r.useEffect)(Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[]),Object(R.jsx)("div",{children:n&&Object(R.jsxs)(b.a,{mt:10,children:[Object(R.jsxs)(b.e,{size:"lg",children:["Bienvenido ",n.name," ",n.surname]}),Object(R.jsxs)(b.c,{direction:"column",align:"center",mt:5,children:[" ",Object(R.jsx)(b.e,{size:"md",children:"Documentos aportados"}),Object(R.jsx)(J.b,{m:3,src:n.urlDni1,alt:"img2"}),Object(R.jsx)(J.b,{m:3,src:n.urlDni2,alt:"img2"})]}),!0===n.validate&&Object(R.jsx)(b.e,{size:"md",children:"Enhorabuena, su cuenta esta validada."}),!1===n.validate&&Object(R.jsx)(b.e,{size:"md",children:"Su cuenta ser\xe1 validada por un administrador proximamente."})]})})}function Y(){var e=V.b().shape({name:V.c().min(3,"Nombre muy corto").max(16,"Nombre muy largo").required("Nombre requerido"),surname:V.c().min(3,"Apellido muy corto").max(16,"Apellido muy largo").required("Apellido requerido"),email:V.c().email("Formato de email inv\xe1lido").required("Email requerido"),password:V.c().min(8,"Contrase\xf1a muy corta").required("Contrase\xf1a requerida"),username:V.a().min(8,"N\xfamero muy corto").required("N\xfamero de documento requerido")}),t=Object(E.b)(),n=Object(j.g)(),c=a.a.useState(!1),r=Object(P.a)(c,2),o=r[0],s=r[1],i=function(){return s(!o)};return Object(R.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(R.jsx)(G.a,{bg:"teal.500",size:"xl"}),Object(R.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(R.jsx)(b.i,{as:"h3",size:"md",children:"Introduzca sus datos para realizar el registro"}),Object(R.jsx)(U.b,{initialValues:{name:"",surname:"",email:"",username:"",password:""},validationSchema:e,onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("VALUES",c),t(k(c)),console.log("USERNAME",c.username),localStorage.setItem("username",c.username),localStorage.setItem("password",c.password),localStorage.setItem("name",c.name),n.push("/onboarding");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){e.values,e.touched,e.isSubmiting,e.handleChange,e.handleBlur;return Object(R.jsxs)(U.a,{children:[Object(R.jsx)(H.a,{id:"name",name:"name",mt:6,variant:"flushed",type:"text",focusBorderColor:"teal.500",w:"350px",colorScheme:"teal",inputProps:{placeholder:"Nombre"}}),Object(R.jsx)(H.a,{id:"surname",name:"surname",mt:6,variant:"flushed",type:"text",placeholder:"Apellidos",colorScheme:"teal",w:"350px",focusBorderColor:"teal.500",inputProps:{placeholder:"Apellido"}}),Object(R.jsx)(H.a,{id:"username",name:"username",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"N\xfamero de documento",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"N\xfamero de documento"}}),Object(R.jsxs)(M.b,{children:[Object(R.jsx)(H.a,{id:"email",name:"email",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"Email",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"Correo electr\xf3nico"}}),Object(R.jsx)(M.c,{mt:6,pointerEvents:"none",children:Object(R.jsx)(W.a,{color:"teal"})})]}),Object(R.jsxs)(M.b,{children:[Object(R.jsx)(H.a,{name:"password",id:"password",mt:6,focusBorderColor:"teal.500",variant:"flushed",w:"350px",inputProps:{placeholder:"Contrase\xf1a",type:o?"text":"password"}}),Object(R.jsx)(M.d,{mt:6,width:"4.5rem",children:Object(R.jsx)(F.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:i,children:o?Object(R.jsx)(W.f,{}):Object(R.jsx)(W.e,{})})})]}),Object(R.jsxs)(F.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})}})]})}var Z=n(122),$=function(){var e=Object(Z.b)().toggleColorMode;return Object(R.jsx)(F.b,{ml:2,mt:2,"aria-label":"Toggle theme toggle button",colorScheme:Object(Z.c)("purple","orange"),icon:Object(Z.c)(Object(R.jsx)(W.c,{}),Object(R.jsx)(W.d,{})),onClick:e})};function _(){var e=Object(j.g)();return Object(R.jsxs)(b.c,{mb:20,justify:"center",wrap:"wrap",children:[Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(b.f,{onClick:function(){return e.push("/iniciarsesion")},children:Object(R.jsx)(F.a,{m:2,colorScheme:"teal",children:"Inicia Sesi\xf3n"})}),Object(R.jsx)(b.f,{onClick:function(){return e.push("/")},children:Object(R.jsx)(F.a,{m:2,colorScheme:"teal",children:"Registrate"})})]}),Object(R.jsx)(b.f,{onClick:function(){return y()},children:Object(R.jsx)(F.a,{m:2,colorScheme:"red",children:"Salir"})}),Object(R.jsx)($,{})]})}var ee=n(298);function te(){var e=Object(E.b)(),t=Object(j.g)(),n=Object(ee.a)(),c=n.register,r=n.handleSubmit,o=n.formState.errors;console.log(o);var s=a.a.useState(!1),l=Object(P.a)(s,2),d=l[0],m=l[1];return Object(R.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(R.jsx)(G.a,{bg:"teal.500",size:"xl"}),Object(R.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(R.jsxs)(b.i,{as:"h3",size:"md",children:["Inicie sesi\xf3n o"," ",Object(R.jsx)(u.b,{to:"/",passHref:!0,children:"reg\xedstrese"})]}),Object(R.jsxs)("form",{onSubmit:r((function(n){e(I(n)),"admin"===localStorage.getItem("username")?t.push("/paneladministracion"):t.push("/validacion")})),children:[Object(R.jsxs)(M.b,{children:[Object(R.jsx)(M.a,Object(i.a)({mt:10,minW:"40ch",variant:"flushed",type:"text",placeholder:"Documento de identidad",colorScheme:"teal",focusBorderColor:"teal.500"},c("username",{required:!0}))),Object(R.jsx)(M.d,{mt:10,pointerEvents:"none",children:Object(R.jsx)(W.b,{color:"teal"}),mr:4})]}),Object(R.jsxs)(M.b,{children:[Object(R.jsx)(M.a,Object(i.a)({mt:6,focusBorderColor:"teal.500",variant:"flushed",type:d?"text":"password",placeholder:"password"},c("password",{required:!0}))),Object(R.jsx)(M.d,{mt:6,width:"4.5rem",children:Object(R.jsx)(F.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:function(){return m(!d)},children:d?Object(R.jsx)(W.f,{}):Object(R.jsx)(W.e,{})})})]}),Object(R.jsxs)(F.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})]})}function ne(){return Object(R.jsxs)(b.c,{w:"60vw",display:"flex",direction:"column",align:"center",justify:"center",children:[Object(R.jsx)(b.e,{as:"h1",size:"xl",children:"404"}),Object(R.jsx)(b.e,{as:"h2",size:"md",align:"center",children:"Lo sentimos, no hemos podido encontrar la pagina que estabas buscando."}),Object(R.jsx)(b.f,{href:"/",children:Object(R.jsx)(F.a,{mt:6,colorScheme:"teal",children:"Volver"})})]})}var ce=n(299),re=n.n(ce);function ae(){var e=localStorage.getItem("username"),t=localStorage.getItem("user"),n=localStorage.getItem("name"),c="https://luciaberon.github.io/proyecto-validacion/#/validarusuario/".concat(e,"?token=").concat(t);return Object(R.jsxs)(b.c,{direction:"column",align:"center",children:[Object(R.jsxs)(b.e,{size:"md",children:["Gracias por registrarse ",n]}),Object(R.jsx)(b.i,{children:"Para continuar con el proceso, necesitamos que valide su identidad."}),Object(R.jsx)(b.i,{mt:6,children:"Escanee el siguiente c\xf3digo QR con su telefono para continuar:"}),Object(R.jsx)(b.a,{mt:6,children:Object(R.jsx)(re.a,{value:c})})]})}var oe=n(248);function se(){var e=Object(r.useState)(),t=Object(P.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){var e=Q.get("/panel/users");console.log(e),c(n)}),[]);var a=function(e){!function(e){Q.post("/panel/validate",e)}(e)},o=n.filter((function(e){return!1===e.validate})),s=n.filter((function(e){return!0===e.validate}));return console.log(o),Object(R.jsxs)(b.c,{direction:"column",align:"center",children:[Object(R.jsxs)(b.e,{children:["Bienvenido ","Admin"]}),Object(R.jsxs)(b.i,{children:["Tenemos ",o.length," usuarios por validar"]}),Object(R.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[!o.length&&Object(R.jsx)(b.b,{children:Object(R.jsx)(b.i,{children:"\xa1Enhorabuena! No quedan usuarios por validar."})}),o.map((function(e){return Object(R.jsxs)(b.a,{children:[Object(R.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(R.jsx)(oe.a,{allowToggle:!0,minW:"50rem",children:Object(R.jsxs)(oe.d,{borderColor:"teal",focusColor:"teal",children:[Object(R.jsx)("h2",{children:Object(R.jsxs)(oe.b,{focusColor:"teal",children:[Object(R.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(R.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(R.jsx)(oe.c,{})]})}),Object(R.jsxs)(oe.e,{justify:"center",pb:4,children:[Object(R.jsxs)(b.a,{display:"flex",children:[" ",Object(R.jsx)(J.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(R.jsx)(J.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(R.jsx)(F.a,{onClick:function(){return a(e.username)},colorScheme:"teal",m:4,children:"Validar documentos"})]})]})})]})}))," "]}),Object(R.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[Object(R.jsxs)(b.e,{size:"md",children:["Tenemos ",s.length," usuarios validados hasta ahora"]}),!o.length&&Object(R.jsx)(b.b,{children:Object(R.jsx)(b.i,{children:"\xa1Parece que no hay usuarios validados!"})}),s.map((function(e){return Object(R.jsxs)(b.a,{children:[Object(R.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(R.jsx)(oe.a,{allowToggle:!0,minW:"50rem",children:Object(R.jsxs)(oe.d,{borderColor:"teal",focusColor:"teal",children:[Object(R.jsx)("h2",{children:Object(R.jsxs)(oe.b,{focusColor:"teal",children:[Object(R.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(R.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(R.jsx)(oe.c,{})]})}),Object(R.jsxs)(oe.e,{justify:"center",pb:4,children:[Object(R.jsxs)(b.a,{display:"flex",children:[" ",Object(R.jsx)(J.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(R.jsx)(J.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(R.jsx)(F.a,{colorScheme:"teal",m:4,children:"Anular validaci\xf3n"})]})]})})]})}))," "]})]})}n(465);var ie=n(300),le=(n(472),n(301)),ue=n.n(le),je=n(302),de=n.n(je);n(473),n(474);function be(){var e=Object(j.h)().username,t=Object(j.g)(),n=new URL(document.URL),c=n.searchParams,a=encodeURI(c.get("token"));console.log("url",n),console.log("urlsp",c),a&&localStorage.setItem("user",a),console.log("token",a);var o=Object(r.useState)(),s=Object(P.a)(o,2),i=s[0],l=s[1],u=Object(r.useState)(),d=Object(P.a)(u,2),m=d[0],h=d[1],p=Object(r.useState)(!1),O=Object(P.a)(p,2),x=(O[0],O[1],function(e){e.preventDefault(),console.log("photo1",i),function(e,t){var n=new FormData;n.append("photo1",e),n.append("photo2",t),console.log("http config",K),console.log("token",localStorage.getItem("user"));var c=K.put("/onboarding/photos/".concat(localStorage.getItem("username")),n);console.log("req",c)}(i,m),t.push("/panelusuario")});return console.log("username uplaod page",e),Object(R.jsxs)(b.c,{direction:"column",align:"center",justify:"center",children:[Object(R.jsx)(b.e,{mb:6,children:"Bienvenido"}),Object(R.jsx)(b.i,{align:"center",children:"Para finalizar tu registro, necesitamos que subas tu documento de identidad. Ten en cuenta lo siguiente, por favor:"}),Object(R.jsxs)(b.j,{centerContent:!0,mt:4,mb:10,children:[Object(R.jsx)(b.g,{children:"Solo aceptamos imagenes en formato jpeg o png"}),Object(R.jsx)(b.g,{children:"Deben ser dos fotografias (anverso y reverso)"}),Object(R.jsx)(b.g,{children:"Tu cuenta no estar\xe1 activada hasta que el administrador no valide tus documentos"})]}),Object(R.jsxs)("form",{onSubmit:function(e){return x(e)},children:[Object(R.jsx)("input",{type:"file",onChange:function(){var e=document.getElementById("photo1").files[0];l(e)},id:"photo1",name:"photo1",required:!0}),Object(R.jsx)("input",{type:"file",onChange:function(){var e=document.getElementById("photo2").files[0];h(e)},id:"photo2",name:"photo2",required:!0}),Object(R.jsx)("input",{type:"submit",value:"ENVIAR FOTOS"})]})]})}Object(ie.registerPlugin)(ue.a,de.a);var me=function(){var e=Object(j.g)(),t=Object(E.b)(),n=Object(r.useState)(!1),c=Object(P.a)(n,2),a=c[0],o=c[1];return Object(R.jsxs)("div",{children:[a&&Object(R.jsx)("h1",{children:"LOGGED"}),Object(R.jsx)("h2",{children:"P\xc1GINA ONBOARDING"}),Object(R.jsx)("button",{onClick:function(){o(!0),t(I({username:localStorage.getItem("username"),password:localStorage.getItem("password")})),console.log("login done, redirect"),e.push("/validacion")},children:"VALIDAR IDENTIDAD"})]})},he=["auth","component"],pe=["auth","component"];var Oe=function(e){var t=e.auth,n=e.component,c=Object(l.a)(e,he);return Object(R.jsx)(j.b,Object(i.a)(Object(i.a)({},c),{},{render:function(){return t?Object(R.jsx)(n,{}):Object(R.jsx)(j.a,{to:"/iniciarsesion"})}}))},xe=function(e){var t=e.auth,n=e.component,c=Object(l.a)(e,pe),r="Admin"===localStorage.getItem("username")?"paneladministracion":"panelusuario";return Object(R.jsx)(j.b,Object(i.a)(Object(i.a)({},c),{},{render:function(){return t?Object(R.jsx)(j.a,{to:"/".concat(r)}):Object(R.jsx)(n,{})}}))},ge=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.auth.isLoggedIn}));return console.log("AUTH",t),Object(r.useEffect)((function(){console.log("checking"),e(q())}),[]),Object(R.jsx)(d.a,{theme:L,children:Object(R.jsxs)(b.b,{p:10,mt:5,className:"App",children:[Object(R.jsx)(T,{}),Object(R.jsxs)(u.a,{children:[Object(R.jsx)(_,{}),Object(R.jsxs)(j.d,{children:["/// register",Object(R.jsx)(j.b,{exact:!0,path:"/",component:Y,auth:t}),"/// onboarding with validate identity button",Object(R.jsx)(j.b,{exact:!0,path:"/onboarding",component:me}),"/// qr code",Object(R.jsx)(j.b,{exact:!0,path:"/validacion",component:ae,auth:t}),"/// login",Object(R.jsx)(xe,{exact:!0,path:"/iniciarsesion",component:te,auth:t}),"// upload images",Object(R.jsx)(j.b,{exact:!0,path:"/validarusuario/:username",component:be,auth:t}),"// user panel",Object(R.jsx)(j.b,{exact:!0,path:"/panelusuario",component:X,auth:t}),"/// admin panel",Object(R.jsx)(Oe,{exact:!0,path:"/paneladministracion",component:se,auth:t}),Object(R.jsx)(j.b,{component:ne})]})]})]})})},fe=(n(766),n(62)),ve=Object(fe.b)({auth:A}),Se=Object(x.a)({reducer:ve});s.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(E.a,{store:Se,children:Object(R.jsx)(ge,{})})}),document.getElementById("root"))}},[[767,1,2]]]);
//# sourceMappingURL=main.7a9769be.chunk.js.map