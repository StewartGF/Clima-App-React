(this["webpackJsonpclima-app-react"]=this["webpackJsonpclima-app-react"]||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),l=t.n(r),o=(t(15),t(1)),i=t.n(o),m=t(3),s=t(2),u=(t(17),t(6));function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){var a=e.datosBusqueda,t=Object(n.useState)({ciudad:"",pais:""}),r=Object(s.a)(t,2),l=r[0],o=r[1],i=function(e){o(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(t,!0).forEach((function(a){Object(u.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},l,Object(u.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-light bg-light d-flex justify-content-center"},c.a.createElement("a",{href:"/Clima-App-React/",className:"navbar-brand  "},c.a.createElement("i",{className:"fas fa-temperature-high fa-lg"})),c.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),a(l)}},c.a.createElement("input",{required:!0,className:"form-control mr-sm-2 input-lg glowing-border",type:"search",placeholder:"Ciudad","aria-label":"Search",name:"ciudad",onChange:i}),c.a.createElement("select",{className:"form-control mr-sm-2 input-lg glowing-border",name:"pais",required:!0,onChange:i},c.a.createElement("option",{hidden:!0,value:""},"Selecciona un pa\xeds"),c.a.createElement("option",{value:"AR"},"Argentina"),c.a.createElement("option",{value:"BR"},"Brasil"),c.a.createElement("option",{value:"CL"},"Chile"),c.a.createElement("option",{value:"CO"},"Colombia"),c.a.createElement("option",{value:"EC"},"Ecuador"),c.a.createElement("option",{value:"ES"},"Espa\xf1a"),c.a.createElement("option",{value:"MX"},"M\xe9xico"),c.a.createElement("option",{value:"US"},"Estados Unidos")),c.a.createElement("button",{className:"btn  my-2 my-sm-0 input-lg botonBuscar hovered",type:"submit"},"Buscar"))))}function E(e){var a=e.informacion,t=a.name,n=a.main;return t?c.a.createElement("div",{className:"centered-content"},c.a.createElement("div",{className:"container-clima row"},c.a.createElement("div",{className:"LeftContent col-md-8 "},c.a.createElement("h1",null,t),c.a.createElement("p",{className:"tempText"},"Temperatura m\xe1xima"),c.a.createElement("p",{className:"tempValue"}," ",parseInt(n.temp_max-273.15,10)," \xb0"),c.a.createElement("p",{className:"tempText"},"Temperatura m\xednima"),c.a.createElement("p",{className:"tempValue"}," ",parseInt(n.temp_min-273.15,10)," \xb0")),c.a.createElement("div",{className:"RightContent col-md-4 "},c.a.createElement("h1",null,parseInt(n.temp-273.15,10)," \xb0"),c.a.createElement("hr",null),c.a.createElement("p",null,"Temperatura Actual")))):null}var b=t(9);function f(e){var a=e.mensaje;return c.a.createElement("div",{className:"centered-contentLanding animated bounce"},c.a.createElement("div",{className:"container-clima "},c.a.createElement("div",{className:"mensajeLanding"},c.a.createElement("p",null,a)),c.a.createElement("div",{className:"react-typical"},c.a.createElement("p",null,"Puedes buscar el clima en ","",c.a.createElement(b.a,{loop:1/0,wrapper:"b",steps:["Santiago - Chile \ud83d\udccc ",1e3,"Canc\xfan - M\xe9xico \ud83d\udea2 ",1e3,"Madrid - Espa\xf1a \ud83c\udf0e ",1e3,"Miami - Estados Unidos\ud83d\ude96 ",1e3,"Mendoza - Argentina \ud83d\udea0 ",1e3,"Acapulco - M\xe9xico \ud83d\udea4 ",1e3,"Chicago - Estados Unidos \ud83d\ude94 ",1e3,"Seattle - Estados Unidos \ud83c\udf05 ",1e3]}))),c.a.createElement("p",{className:"bottomText"},"Y muchos m\xe1s \ud83d\ude01 !")))}function v(){return c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"centered-content"},c.a.createElement("div",{className:"container-clima row"},c.a.createElement("div",null,c.a.createElement("p",null,"Cargando...")),c.a.createElement("img",{alt:"cargando",src:"imagenes/DoubleRing.svg",style:{width:"30%",height:"30%"}}))))}var g=function(){var e,a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),p=u[0],b=u[1],g=Object(n.useState)(""),h=Object(s.a)(g,2),j=h[0],O=h[1],N=Object(n.useState)(!0),w=Object(s.a)(N,2),y=w[0],C=w[1],x=Object(n.useState)(!1),S=Object(s.a)(x,2),P=S[0],B=S[1];return Object(n.useEffect)((function(){""!==p&&(B(!0),function(){var e=Object(m.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fc8bee85b1a5306e5862da9a91f95dfc",a="https://api.openweathermap.org/data/2.5/weather?q=".concat(p,",").concat(j,"&appid=").concat("fc8bee85b1a5306e5862da9a91f95dfc"),e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(n),B(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[p,j]),e=y?c.a.createElement(f,{mensaje:"Bienvenido! \u270c"}):"404"===r.cod?c.a.createElement(f,{mensaje:"El lugar que est\xe1s buscando no existe"}):"429"===r.cod?c.a.createElement(f,{mensaje:"Parece que mi APIKey expir\xf3, cont\xe1ctame!"}):c.a.createElement(E,{informacion:r}),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"divHeader"},c.a.createElement(d,{datosBusqueda:function(e){""!==e.ciudad&&""!==e.pais?(b(e.ciudad),O(e.pais),C(!1)):C(!0)}})),P&&c.a.createElement(v,null),!P&&c.a.createElement("div",{className:"divContainer"},e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.d5b7c922.chunk.js.map