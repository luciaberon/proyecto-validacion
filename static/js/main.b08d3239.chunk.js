(this["webpackJsonpproyecto-validacion"]=this["webpackJsonpproyecto-validacion"]||[]).push([[0],{340:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(59),s=n.n(o),i=n(55),l=n(123),u=n(58),j=n(14),d=n(31),b=n(19),m=n(28),h=n(9),p=n.n(h),O=n(15),x=n(64),g=n(46),f=n.n(g),v={"Access-Control-Allow-Origin":"*"},S=function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(v),e.next=4,f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/login/",t);case 4:return(n=e.sent).data.token&&(localStorage.setItem("user",n.data.token),localStorage.setItem("username",t.username)),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={register:function(e){console.log("Data",e),f.a.post("https://validacion-desarrollo.herokuapp.com/api/auth/register/",e)},login:S,logout:function(){localStorage.clear()}},w=Object(x.b)("auth/login",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.login(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(x.b)("auth/logout",(function(){console.log("logout?"),y.logout()})),C=Object(x.b)("auth/register",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.register(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(x.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{checkLogged:function(e){localStorage.getItem("user")?e.isLoggedIn=!0:e.isLoggedIn=!1}},extraReducers:(r={},Object(m.a)(r,w.fulfilled,(function(e){e.isLoggedIn=!0})),Object(m.a)(r,I.fulfilled,(function(e){console.log("logging out"),localStorage.clear(),e.isLoggedIn=!1})),Object(m.a)(r,C.fulfilled,(function(e){e.isLoggedIn=!1})),r)}),z=k.reducer,A=k.actions.checkLogged,E=n(24),q=n(4),B={global:function(e){return{body:{bg:Object(q.h)("#f0e7db","#202023")(e)}}}},D=Object(d.b)({config:{initialColorMode:"dark",useSystemColorMode:!0},styles:B,components:{Heading:{variants:{"section-title":{textDecoration:"underline",fontSize:20,textUnderlineOffset:6,textDecorationColor:"#525252",textDecorationThickness:4,marginTop:3,marginBottom:4}}},Link:{baseStyle:function(e){return{textDecoration:"none"}}}},colors:{glassTeal:"#88ccca"},fonts:{heading:"'Roboto'"}}),L=n(20),T=n(5),N=function(){return Object(T.jsx)(L.a,{styles:"\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');\n    "})},R=n(13),P=n(18),U=n(65),V=(n(319),n(156)),M=n(113),F=n(70),G=n(62),H=n(41),W=n(91),J=f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("user"))}}),Q=(f.a.create({baseURL:"https://validacion-desarrollo.herokuapp.com/api",headers:{accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("user"))}}),function(){var e=Object(O.a)(p.a.mark((function e(t,n,r,c){var a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("photo1",t),a.append("photo2",n),console.log("token from uplado photos:",localStorage.getItem("user")),console.log("username uplado",r),console.log("tokeeeen uplado",c),e.next=8,f.a.put("https://validacion-desarrollo.herokuapp.com/api/onboarding/photos/".concat(r),a,{headers:{accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(c)}});case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}());function K(){var e=Object(j.g)(),t=Object(c.useState)(),n=Object(R.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)(Object(O.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.get("/onboarding/users/".concat(localStorage.getItem("username")));case 2:n=t.sent,console.log("Response to getUser(): ",n.data.user),a(n.data.user),null===r.urlDni1&&e.push("/onboarding");case 6:case"end":return t.stop()}}),t)}))),[]),Object(T.jsx)("div",{children:r&&Object(T.jsxs)(b.a,{mt:10,children:[Object(T.jsxs)(b.e,{size:"lg",children:["Bienvenido ",r.name," ",r.surname]}),Object(T.jsxs)(b.c,{direction:"column",align:"center",mt:5,children:[" ",Object(T.jsx)(b.e,{size:"md",children:"Documentos aportados"}),Object(T.jsx)(W.b,{m:3,src:r.urlDni1,alt:"img2"}),Object(T.jsx)(W.b,{m:3,src:r.urlDni2,alt:"img2"})]}),!0===r.validate&&Object(T.jsx)(b.e,{size:"md",children:"Enhorabuena, su cuenta esta validada."}),!1===r.validate&&Object(T.jsx)(b.e,{size:"md",children:"Su cuenta ser\xe1 validada por un administrador proximamente."})]})})}function X(){var e=U.b().shape({name:U.c().min(3,"Nombre muy corto").max(16,"Nombre muy largo").required("Nombre requerido"),surname:U.c().min(3,"Apellido muy corto").max(16,"Apellido muy largo").required("Apellido requerido"),email:U.c().email("Formato de email inv\xe1lido").required("Email requerido"),password:U.c().min(8,"Contrase\xf1a muy corta").required("Contrase\xf1a requerida"),username:U.a().min(8,"N\xfamero muy corto").required("N\xfamero de documento requerido")}),t=Object(E.b)(),n=Object(j.g)(),r=a.a.useState(!1),c=Object(R.a)(r,2),o=c[0],s=c[1],i=function(){return s(!o)};return Object(T.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(T.jsx)(V.a,{bg:"teal.500",size:"xl"}),Object(T.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(T.jsx)(b.i,{as:"h3",size:"md",children:"Introduzca sus datos para realizar el registro"}),Object(T.jsx)(P.b,{initialValues:{name:"",surname:"",email:"",username:"",password:""},validationSchema:e,onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("VALUES",r),t(C(r)),console.log("USERNAME",r.username),localStorage.setItem("username",r.username),localStorage.setItem("password",r.password),localStorage.setItem("name",r.name),n.push("/onboarding");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){e.values,e.touched,e.isSubmiting,e.handleChange,e.handleBlur;return Object(T.jsxs)(P.a,{children:[Object(T.jsx)(G.a,{id:"name",name:"name",mt:6,variant:"flushed",type:"text",focusBorderColor:"teal.500",w:"350px",colorScheme:"teal",inputProps:{placeholder:"Nombre"}}),Object(T.jsx)(G.a,{id:"surname",name:"surname",mt:6,variant:"flushed",type:"text",placeholder:"Apellidos",colorScheme:"teal",w:"350px",focusBorderColor:"teal.500",inputProps:{placeholder:"Apellido"}}),Object(T.jsx)(G.a,{id:"username",name:"username",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"N\xfamero de documento",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"N\xfamero de documento"}}),Object(T.jsxs)(M.b,{children:[Object(T.jsx)(G.a,{id:"email",name:"email",mt:6,w:"350px",variant:"flushed",type:"text",placeholder:"Email",colorScheme:"teal",focusBorderColor:"teal.500",inputProps:{placeholder:"Correo electr\xf3nico"}}),Object(T.jsx)(M.c,{mt:6,pointerEvents:"none",children:Object(T.jsx)(H.a,{color:"teal"})})]}),Object(T.jsxs)(M.b,{children:[Object(T.jsx)(G.a,{name:"password",id:"password",mt:6,focusBorderColor:"teal.500",variant:"flushed",w:"350px",inputProps:{placeholder:"Contrase\xf1a",type:o?"text":"password"}}),Object(T.jsx)(M.d,{mt:6,width:"4.5rem",children:Object(T.jsx)(F.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:i,children:o?Object(T.jsx)(H.f,{}):Object(T.jsx)(H.e,{})})})]}),Object(T.jsxs)(F.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})}})]})}var Y=n(78),Z=function(){var e=Object(Y.b)().toggleColorMode;return Object(T.jsx)(F.b,{ml:2,mt:2,"aria-label":"Toggle theme toggle button",colorScheme:Object(Y.c)("purple","orange"),icon:Object(Y.c)(Object(T.jsx)(H.c,{}),Object(T.jsx)(H.d,{})),onClick:e})};function $(){var e=Object(E.b)(),t=Object(j.g)(),n=Object(E.c)((function(e){return e.auth.isLoggedIn}));console.log("isLogged = ",n);return Object(T.jsxs)(b.c,{mb:20,justify:"center",wrap:"wrap",children:[n||Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.f,{onClick:function(){return t.push("/iniciarsesion")},children:Object(T.jsx)(F.a,{m:2,colorScheme:"teal",children:"Inicia Sesi\xf3n"})}),Object(T.jsx)(b.f,{onClick:function(){return t.push("/")},children:Object(T.jsx)(F.a,{m:2,colorScheme:"teal",children:"Registrate"})})]}),n&&Object(T.jsx)(b.f,{onClick:function(){localStorage.clear(),e(I()),t.push("/iniciarsesion")},children:Object(T.jsx)(F.a,{m:2,colorScheme:"red",children:"Salir"})}),Object(T.jsx)(Z,{})]})}var _=n(171);function ee(){var e=Object(E.b)(),t=Object(j.g)(),n=Object(_.a)(),r=n.register,c=n.handleSubmit,o=n.formState.errors;console.log(o);var s=a.a.useState(!1),l=Object(R.a)(s,2),d=l[0],m=l[1];return Object(T.jsxs)(b.b,{centerContent:!0,display:"flex",direction:"column",justify:"center",align:"center",children:[Object(T.jsx)(V.a,{bg:"teal.500",size:"xl"}),Object(T.jsx)(b.e,{as:"h1",mt:3,children:"Bienvenido"}),Object(T.jsxs)(b.i,{as:"h3",size:"md",children:["Inicie sesi\xf3n o"," ",Object(T.jsx)(u.b,{to:"/",passHref:!0,children:"reg\xedstrese"})]}),Object(T.jsxs)("form",{onSubmit:c((function(n){e(w(n)),"admin"===localStorage.getItem("username")?t.push("/paneladministracion"):t.push("/panelusuario")})),children:[Object(T.jsxs)(M.b,{children:[Object(T.jsx)(M.a,Object(i.a)({mt:10,minW:"40ch",variant:"flushed",type:"text",placeholder:"Documento de identidad",colorScheme:"teal",focusBorderColor:"teal.500"},r("username",{required:!0}))),Object(T.jsx)(M.d,{mt:10,pointerEvents:"none",children:Object(T.jsx)(H.b,{color:"teal"}),mr:4})]}),Object(T.jsxs)(M.b,{children:[Object(T.jsx)(M.a,Object(i.a)({mt:6,focusBorderColor:"teal.500",variant:"flushed",type:d?"text":"password",placeholder:"password"},r("password",{required:!0}))),Object(T.jsx)(M.d,{mt:6,width:"4.5rem",children:Object(T.jsx)(F.b,{colorScheme:"teal",h:"1.75rem",size:"sm",onClick:function(){return m(!d)},children:d?Object(T.jsx)(H.f,{}):Object(T.jsx)(H.e,{})})})]}),Object(T.jsxs)(F.a,{colorScheme:"teal",mt:10,type:"submit",children:[" ","Enviar"," "]})]})]})}function te(){return Object(T.jsxs)(b.c,{w:"60vw",display:"flex",direction:"column",align:"center",justify:"center",children:[Object(T.jsx)(b.e,{as:"h1",size:"xl",children:"404"}),Object(T.jsx)(b.e,{as:"h2",size:"md",align:"center",children:"Lo sentimos, no hemos podido encontrar la pagina que estabas buscando."}),Object(T.jsx)(b.f,{href:"/",children:Object(T.jsx)(F.a,{mt:6,colorScheme:"teal",children:"Volver"})})]})}var ne=n(172),re=n.n(ne);function ce(){var e=localStorage.getItem("username"),t=localStorage.getItem("user"),n=localStorage.getItem("name"),r="https://luciaberon.github.io/proyecto-validacion/#/validarusuario/".concat(e,"/").concat(t);return Object(T.jsxs)(b.c,{direction:"column",align:"center",children:[Object(T.jsxs)(b.e,{size:"md",children:["Gracias por registrarse ",n]}),Object(T.jsx)(b.i,{children:"Para continuar con el proceso, necesitamos que valide su identidad."}),Object(T.jsx)(b.i,{mt:6,children:"Escanee el siguiente c\xf3digo QR con su telefono para continuar:"}),Object(T.jsx)(b.a,{mt:6,children:Object(T.jsx)(re.a,{value:r})})]})}var ae=n(161);function oe(){var e=Object(c.useState)(),t=Object(R.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=J.get("/panel/users");console.log(e),r(n)}),[]);var a=function(e){!function(e){J.post("/panel/validate",e)}(e)},o=n.filter((function(e){return!1===e.validate})),s=n.filter((function(e){return!0===e.validate}));return console.log(o),Object(T.jsxs)(b.c,{direction:"column",align:"center",children:[Object(T.jsxs)(b.e,{children:["Bienvenido ","Admin"]}),Object(T.jsxs)(b.i,{children:["Tenemos ",o.length," usuarios por validar"]}),Object(T.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[!o.length&&Object(T.jsx)(b.b,{children:Object(T.jsx)(b.i,{children:"\xa1Enhorabuena! No quedan usuarios por validar."})}),o.map((function(e){return Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(T.jsx)(ae.a,{allowToggle:!0,minW:"50rem",children:Object(T.jsxs)(ae.d,{borderColor:"teal",focusColor:"teal",children:[Object(T.jsx)("h2",{children:Object(T.jsxs)(ae.b,{focusColor:"teal",children:[Object(T.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(T.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(T.jsx)(ae.c,{})]})}),Object(T.jsxs)(ae.e,{justify:"center",pb:4,children:[Object(T.jsxs)(b.a,{display:"flex",children:[" ",Object(T.jsx)(W.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(T.jsx)(W.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(T.jsx)(F.a,{onClick:function(){return a(e.username)},colorScheme:"teal",m:4,children:"Validar documentos"})]})]})})]})}))," "]}),Object(T.jsxs)(b.a,{direction:"column",align:"center",mt:20,children:[Object(T.jsxs)(b.e,{size:"md",children:["Tenemos ",s.length," usuarios validados hasta ahora"]}),!o.length&&Object(T.jsx)(b.b,{children:Object(T.jsx)(b.i,{children:"\xa1Parece que no hay usuarios validados!"})}),s.map((function(e){return Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(b.e,{size:"lg",mb:3,mt:3,children:[e.name," ",e.lastname]}),Object(T.jsx)(ae.a,{allowToggle:!0,minW:"50rem",children:Object(T.jsxs)(ae.d,{borderColor:"teal",focusColor:"teal",children:[Object(T.jsx)("h2",{children:Object(T.jsxs)(ae.b,{focusColor:"teal",children:[Object(T.jsx)(b.a,{flex:"1",textAlign:"left",children:Object(T.jsx)(b.i,{fontSize:"lg",children:"Documentos aportados"})}),Object(T.jsx)(ae.c,{})]})}),Object(T.jsxs)(ae.e,{justify:"center",pb:4,children:[Object(T.jsxs)(b.a,{display:"flex",children:[" ",Object(T.jsx)(W.a,{src:e.img1,alt:e.name,cursor:"pointer",w:"350px",m:2}),Object(T.jsx)(W.a,{src:e.img2,alt:e.name,cursor:"pointer",w:"350px",m:2})]}),Object(T.jsx)(F.a,{colorScheme:"teal",m:4,children:"Anular validaci\xf3n"})]})]})})]})}))," "]})]})}function se(){var e=Object(j.h)().token,t=Object(j.h)().username,n=Object(j.g)();null!==e&&localStorage.setItem("user",e);var r=Object(c.useState)(),a=Object(R.a)(r,2),o=a[0],s=a[1],i=Object(c.useState)(),l=Object(R.a)(i,2),u=l[0],d=l[1],m=Object(c.useState)(!1),h=Object(R.a)(m,2),x=h[0],g=h[1],f=function(){var r=Object(O.a)(p.a.mark((function r(c){var a;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),g(!1),console.log("token uplado",localStorage.getItem("user")),r.next=5,Q(o,u,t,e);case 5:a=r.sent,console.log("res",a),n.push("/panelusuario"),n.go(0);case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(T.jsxs)(b.c,{direction:"column",align:"center",justify:"center",children:[Object(T.jsx)(b.e,{mb:6,children:"Bienvenido"}),Object(T.jsx)(b.i,{align:"center",children:"Para finalizar tu registro, necesitamos que subas tu documento de identidad. Ten en cuenta lo siguiente, por favor:"}),Object(T.jsxs)(b.j,{centerContent:!0,mt:4,mb:10,children:[Object(T.jsx)(b.g,{children:"Solo aceptamos imagenes en formato jpeg o png"}),Object(T.jsx)(b.g,{children:"Deben ser dos fotografias (anverso y reverso)"}),Object(T.jsx)(b.g,{children:"Tu cuenta no estar\xe1 activada hasta que el administrador no valide tus documentos"})]}),Object(T.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(T.jsx)("input",{type:"file",onChange:function(){var e=document.getElementById("photo1").files[0];s(e)},id:"photo1",name:"photo1",required:!0}),Object(T.jsx)("input",{type:"file",onChange:function(){var e=document.getElementById("photo2").files[0];d(e)},id:"photo2",name:"photo2",required:!0}),Object(T.jsx)("input",{type:"submit",value:"ENVIAR FOTOS"})]}),x&&Object(T.jsx)("div",{children:"Error al cargar las im\xe1genes, intente nuevamente."})]})}var ie=function(){var e=Object(j.g)(),t=Object(E.b)(),n=Object(c.useState)(!1),r=Object(R.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(!1),i=Object(R.a)(s,2),l=i[0],u=i[1],d=localStorage.getItem("name");return Object(T.jsxs)(b.b,{children:[a&&Object(T.jsx)(b.e,{children:"LOGGED"}),Object(T.jsxs)(b.e,{children:["Gracias por registrarse ",d," "]}),Object(T.jsx)(b.i,{children:"Para continuar, necesitamos que nos proporcione su documento de ideantidad. Por favor, siga los siguientes pasos:"}),Object(T.jsx)(F.a,{colorScheme:"teal",m:5,onClick:function(){o(!0),u(!1);try{t(w({username:localStorage.getItem("username"),password:localStorage.getItem("password")})).then((function(t){console.log("login done, redirect"),e.push("/validacion")}))}catch(n){u(!0)}},children:"VALIDAR IDENTIDAD"}),l&&Object(T.jsx)("div",{children:"Error al procesar solicitud, intente nuevamente."})]})},le=["auth","component"],ue=["auth","component"];var je=function(e){var t=e.auth,n=e.component,r=Object(l.a)(e,le);return Object(T.jsx)(j.b,Object(i.a)(Object(i.a)({},r),{},{render:function(){return t?Object(T.jsx)(n,{}):Object(T.jsx)(j.a,{to:"/iniciarsesion"})}}))},de=function(e){var t=e.auth,n=e.component,r=Object(l.a)(e,ue),c="Admin"===localStorage.getItem("username")?"paneladministracion":"panelusuario";return console.log("auth?",t),Object(T.jsx)(j.b,Object(i.a)(Object(i.a)({},r),{},{render:function(){return t?Object(T.jsx)(j.a,{to:"/".concat(c)}):Object(T.jsx)(n,{})}}))},be=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.auth.isLoggedIn}));return console.log("AUTH",t),Object(c.useEffect)((function(){console.log("checking"),e(A()),console.log("checked",t)}),[]),Object(T.jsx)(d.a,{theme:D,children:Object(T.jsxs)(b.b,{p:10,mt:5,className:"App",children:[Object(T.jsx)(N,{}),Object(T.jsxs)(u.a,{children:[Object(T.jsx)($,{}),Object(T.jsxs)(j.d,{children:["/// register",Object(T.jsx)(de,{exact:!0,path:"/",component:X,auth:t}),"/// onboarding with validate identity button",Object(T.jsx)(de,{exact:!0,path:"/onboarding",component:ie}),"/// qr code",Object(T.jsx)(j.b,{exact:!0,path:"/validacion",component:ce,auth:t}),"/// login",Object(T.jsx)(de,{exact:!0,path:"/iniciarsesion",component:ee,auth:t}),"// upload images",Object(T.jsx)(j.b,{exact:!0,path:"/validarusuario/:username/:token",component:se,auth:t}),"// user panel",Object(T.jsx)(je,{exact:!0,path:"/panelusuario",component:K,auth:t}),"/// admin panel",Object(T.jsx)(je,{exact:!0,path:"/paneladministracion",component:oe,auth:t}),Object(T.jsx)(j.b,{component:te})]})]})]})})},me=(n(340),n(42)),he=Object(me.b)({auth:z}),pe=Object(x.a)({reducer:he});s.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(E.a,{store:pe,children:Object(T.jsx)(be,{})})}),document.getElementById("root"))}},[[341,1,2]]]);
//# sourceMappingURL=main.b08d3239.chunk.js.map