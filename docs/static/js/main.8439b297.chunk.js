(this.webpackJsonpactores=this.webpackJsonpactores||[]).push([[0],{249:function(e,t,r){},252:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(24),a=r.n(c),s=r(151),i=r(17),o=r(1),l=r(254),j=r(262),u=r(21),d=r.n(u),p=r(34),b="[ UI ] establecerActor",h="[ UI ] establecerInfo",O="[ UI ] limpiarState",m="[ UI ] establecerError",x=r(106),f=r.n(x),g=f.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,didOpen:function(e){e.addEventListener("mouseenter",f.a.stopTimer),e.addEventListener("mouseleave",f.a.resumeTimer)}}),v=function(){var e=Object(p.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://whois.nomada.cloud/upload","YWI4NDZjY2YtODcxZi00MzI0LWIzMjAtMmVlZGYyZTJhZmVm",g.fire({icon:"question",title:"Buscando ..."}),(r=new FormData).append("file",t),e.prev=5,e.next=8,fetch("https://whois.nomada.cloud/upload",{method:"POST",headers:{Nomada:"YWI4NDZjY2YtODcxZi00MzI0LWIzMjAtMmVlZGYyZTJhZmVm"},body:r});case 8:return n=e.sent,g.close(),e.next=12,n.json();case 12:return e.abrupt("return",e.sent);case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),y=(r(251),function(){var e=Object(p.a)(d.a.mark((function e(t){var r,n,c,a,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),r="https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&include_adult=false&query=".concat(t),n={method:"GET",redirect:"follow"},e.next=5,fetch(r,n);case 5:return c=e.sent,e.next=8,c.json();case 8:return a=e.sent,s=a.results,i={nombre:"",genero:"",popular:"",imagen:"",peliculas:[]},s.forEach((function(e,t){var r=e.known_for;0===t&&(i.nombre=e.name,1===e.gender?i.genero="Mujer":i.genero="Hombre",i.popular=e.popularity,i.imagen=e.profile_path,console.log(e.profile_path)),r.forEach((function(e){var t={id:e.id,titulo:e.original_title,descripcion:e.overview,imagen:e.poster_path,lanzamiento:e.release_date,puntaje:e.vote_average};i.peliculas.push(t)}))})),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=function(e){return{type:b,payload:e,error:!1}},N=function(e){return{type:h,payload:e}},_=function(){return{type:m}},k=r(42),E=r(7),I=l.a.Dragger,T=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.actor})),r=t.actor,c=t.error,a=Object(i.g)();Object(n.useEffect)((function(){""!==r&&a.replace("/descripcion")}),[r]);var s={name:"file",multiple:!1,showUploadList:!1,customRequest:function(t){var r;e((r=t.file,function(){var e=Object(p.a)(d.a.mark((function e(t){var n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(r);case 3:if(""===(n=e.sent).error){e.next=9;break}t(_()),e.next=15;break;case 9:return c=n.actorName,e.next=12,y(c);case 12:a=e.sent,t(w(c)),t(N(a));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log("Ha ocurrido un error");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}()))}};return Object(E.jsxs)(E.Fragment,{children:[c?Object(E.jsx)("p",{className:"error",children:"Hubo un error, intenta con otra imagen"}):null,Object(E.jsxs)(I,Object(o.a)(Object(o.a)({},s),{},{className:"dragger",accept:".png, .jpg, .JPG, .PNG",children:[Object(E.jsx)("p",{className:"ant-upload-drag-icon",children:Object(E.jsx)(j.a,{style:{fontSize:"4rem"}})}),Object(E.jsx)("p",{className:"ant-upload-text",children:"Haga clic o arrastre el archivo a esta \xe1rea para cargarlo"}),Object(E.jsx)("p",{className:"ant-upload-hint",children:"Los archivos soportados son : .jpg / .png"})]}))]})},z=r(256),Z=z.a.Title,D=function(e){var t=e.mensaje;return Object(E.jsx)(Z,{className:"titulo",style:{fontSize:"2.6rem",color:"#3498DB"},children:t})},M=r(258),S=r(259),Y=r(260);var H=function(){return Object(E.jsx)("div",{className:"root",children:Object(E.jsx)(M.a,{justify:"center",align:"center",children:Object(E.jsx)(S.b,{direction:"vertical",children:Object(E.jsxs)(Y.a,{className:"container",xs:24,sm:24,span:24,children:[Object(E.jsx)(D,{mensaje:"\xbfQui\xe9n es ese actor?"}),Object(E.jsx)(T,{})]})})})})},L=r(257),P=r(117),U=r(261),G=L.a.Header,J=function(){var e=Object(k.b)(),t=Object(i.g)();return Object(E.jsx)(G,{style:{background:"white"},children:Object(E.jsx)(P.a,{onClick:function(){e({type:O}),t.replace("/")},className:"boton-regresar",type:"primary",icon:Object(E.jsx)(U.a,{}),size:"large",children:"Regresar"})})},R=r(255),V=function(e){var t=e.ruta,r=e.medida,n=e.ancho,c=void 0===n?200:n;return Object(E.jsx)(R.a,{src:t,width:"".concat(r,"%"),height:c,alt:"imagen actor",style:{borderRadius:"5px"}})},B=function(){var e=Object(k.c)((function(e){return e.actor})).info,t=e.imagen,r=e.nombre,n=e.genero,c=e.popular,a="https://image.tmdb.org/t/p/w500".concat(t);return Object(E.jsxs)("div",{className:"info-actor",children:[Object(E.jsx)(V,{ruta:a,medida:"100",ancho:250}),Object(E.jsx)(D,{mensaje:r}),Object(E.jsx)("div",{className:"genero",children:n}),Object(E.jsxs)("h3",{children:["Popularidad: ",c]})]})},C=L.a.Sider,W=function(){return Object(E.jsx)(C,{width:"20%",style:{marginTop:"30px",background:"white",marginRight:"20px"},children:Object(E.jsx)(B,{})})},q=z.a.Title,A=function(e){var t=e.pelicula,r=t.titulo,n=t.puntaje,c=t.descripcion,a=t.imagen,s=t.lanzamiento,i="https://image.tmdb.org/t/p/w500".concat(a);return Object(E.jsxs)("div",{className:"pelicula",children:[Object(E.jsxs)("div",{className:"header-pelicula",children:[Object(E.jsx)(q,{level:2,children:r}),Object(E.jsx)("div",{className:"puntaje-info",children:Object(E.jsxs)("div",{className:"puntaje",children:[Object(E.jsx)("i",{class:"fas fa-star"}),Object(E.jsxs)("div",{children:[n,"/10 "]})]})})]}),Object(E.jsxs)("div",{className:"contenedor-pelicula",children:[Object(E.jsx)("div",{className:"imagen-pelicual",children:Object(E.jsx)(V,{ruta:i})}),Object(E.jsxs)("div",{className:"contenido-pelicula",children:[Object(E.jsx)("p",{children:c}),Object(E.jsxs)("p",{children:[Object(E.jsx)("strong",{children:"Fecha de estreno :"}),s]})]})]})]})},F=function(){var e=Object(k.c)((function(e){return e.actor})).info.peliculas;return Object(E.jsx)("div",{className:"lista-peliculas",children:e.map((function(e){return Object(E.jsx)(A,{pelicula:e})}))})},X=L.a.Content,Q=function(){return Object(E.jsxs)(X,{children:[Object(E.jsx)(D,{mensaje:"Pel\xedculas"}),Object(E.jsx)("hr",{}),Object(E.jsx)(F,{})]})},K=function(){return Object(E.jsx)("div",{className:"root",children:Object(E.jsx)(M.a,{style:{width:"80%"},justify:"center",align:"center",xs:24,children:Object(E.jsx)(S.b,{direction:"vertical",size:"large",style:{width:"100%",minHeight:"90%"},children:Object(E.jsxs)(Y.a,{className:"container container-info",xs:24,sm:24,style:{minHeight:"90%"},children:["   ",Object(E.jsx)(J,{}),Object(E.jsxs)(L.a,{style:{background:"white"},children:[Object(E.jsx)(W,{}),Object(E.jsx)(Q,{})]})]})})})})},$=function(){return Object(E.jsx)(s.a,{children:Object(E.jsx)("div",{children:Object(E.jsxs)(i.d,{children:[Object(E.jsx)(i.b,{exact:!0,path:"/",component:H}),Object(E.jsx)(i.b,{exact:!0,path:"/descripcion",component:K}),Object(E.jsx)(i.a,{to:"/"})]})})})},ee=(r(249),r(250),r(81)),te={error:!1,actor:"",info:{}},re=r(148),ne=Object(ee.b)({actor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{actor:t.payload});case h:return Object(o.a)(Object(o.a)({},e),{},{info:t.payload});case O:return te;case m:return Object(o.a)(Object(o.a)({},e),{},{error:!0});default:return e}}}),ce="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.c,ae=Object(ee.d)(ne,ce(Object(ee.a)(re.a)));a.a.render(Object(E.jsx)(k.a,{store:ae,children:Object(E.jsx)($,{})}),document.getElementById("root"))}},[[252,1,2]]]);
//# sourceMappingURL=main.8439b297.chunk.js.map