(this["webpackJsonpreact-router-star-wars"]=this["webpackJsonpreact-router-star-wars"]||[]).push([[0],{23:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),l=n(17),r=n.n(l),a=(n(23),n(4)),s=n(2);function o(){return"useRouteMatchParams"===localStorage.getItem("hookType")}function d(){return"useRouteMatch"===localStorage.getItem("hookType")}var j=n(11),u=n(14),p=n(9);function b(e,t){var n=Object(s.f)(),c=Object(i.useRef)({}),l=h(n.location,e,t),r=Object(i.useState)(l),a=Object(p.a)(r,2),o=a[0],d=a[1];return Object(i.useEffect)((function(){var i=n.listen((function(n){var i=h(n,e,t);(function(e,t){var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!0;return n.filter((function(n){return e[n]!==(null===t||void 0===t?void 0:t[n])})).length>0})(i,c.current)&&(c.current=i,d(i))}));return function(){return i()}}),[n,c,d,t,e]),o}function h(e,t,n){var i=Object(s.e)(e.pathname,{path:t});return(n||((null===i||void 0===i?void 0:i.params)?Object.keys(i.params):[])).reduce((function(e,t){var n,c=null===i||void 0===i||null===(n=i.params)||void 0===n?void 0:n[t];return c?Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},t,c)):e}),{})}var v=o()?function(){return b("/film/:filmId")}:d()?function(){var e;return null===(e=Object(s.h)("/film/:filmId"))||void 0===e?void 0:e.params}:function(){return Object(s.g)()};var f=o()?function(){return b("/film/:filmId/peoples/:peopleId",["peopleId"])}:d()?function(){var e;return null===(e=Object(s.h)("/film/:filmId/peoples/:peopleId"))||void 0===e?void 0:e.params}:function(){return Object(s.g)()};function O(e){var t=Object(i.useState)({isLoading:!0,data:{}}),n=Object(p.a)(t,2),c=n[0],l=n[1];return Object(i.useEffect)((function(){var t=!1;return l({isLoading:!0,data:{}}),fetch(e).then((function(e){return e.json()})).then((function(e){t||l({isLoading:!1,data:e})})),function(){t=!0}}),[e]),c}var m=n(0);function x(e){var t=e.peoples;return Object(m.jsxs)("div",{className:"flex",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Peoples list:"}),Object(m.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(m.jsx)(I,{id:(t=e,t.split("people/")[1].split("/")[0])},e);var t}))})]}),Object(m.jsx)(s.c,{children:Object(m.jsx)(s.a,{path:"/film/:filmId/peoples/:peopleId",children:Object(m.jsx)(R,{})})})]})}function g(e){var t=O("https://swapi.dev/api/people/".concat(e,"/")),n=t.data;return{isLoading:t.isLoading,people:n}}function I(e){var t=e.id,n=v().filmId,i=g(t),c=i.people,l=i.isLoading;return Object(m.jsx)("li",{children:Object(m.jsx)(a.b,{to:"/film/".concat(n,"/peoples/").concat(t),children:l?"...":null===c||void 0===c?void 0:c.name})})}function L(){var e=g(f().peopleId),t=e.people;return e.isLoading?Object(m.jsx)("div",{children:"loading"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:null===t||void 0===t?void 0:t.name}),Object(m.jsxs)("p",{children:["Skin color: ",null===t||void 0===t?void 0:t.skin_color]}),Object(m.jsxs)("p",{children:["Gender: ",null===t||void 0===t?void 0:t.gender]}),Object(m.jsxs)("p",{children:["Height: ",null===t||void 0===t?void 0:t.height]})]})}var R=Object(i.memo)(L);var k=o()?function(){return b("/film/:filmId/planets/:planetId",["planetId"])}:d()?function(){var e;return null===(e=Object(s.h)("/film/:filmId/planets/:planetId"))||void 0===e?void 0:e.params}:function(){return Object(s.g)()};function w(e){var t=e.planets;return Object(m.jsxs)("div",{className:"flex",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Planets list:"}),Object(m.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(m.jsx)(y,{id:(t=e,t.split("planets/")[1].split("/")[0])},e);var t}))})]}),Object(m.jsx)(s.c,{children:Object(m.jsx)(s.a,{path:"/film/:filmId/planets/:planetId",children:Object(m.jsx)(S,{})})})]})}function y(e){var t=e.id,n=v().filmId,i=M(t),c=i.planet,l=i.isLoading;return Object(m.jsx)("li",{children:Object(m.jsx)(a.b,{to:"/film/".concat(n,"/planets/").concat(t),children:l?"...":null===c||void 0===c?void 0:c.name})})}function P(){var e=M(k().planetId).planet;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:null===e||void 0===e?void 0:e.name}),Object(m.jsxs)("p",{children:["Climate: ",null===e||void 0===e?void 0:e.climate]}),Object(m.jsxs)("p",{children:["Gravity: ",null===e||void 0===e?void 0:e.gravity]}),Object(m.jsxs)("p",{children:["Diameter: ",null===e||void 0===e?void 0:e.diameter]})]})}var S=Object(i.memo)(P);function M(e){var t=O("https://swapi.dev/api/planets/".concat(e,"/")),n=t.data;return{isLoading:t.isLoading,planet:n}}function E(){var e,t=function(){var e=O("https://swapi.dev/api/films/"),t=e.data;return{isLoading:e.isLoading,films:null===t||void 0===t?void 0:t.results}}(),n=t.films,i=t.isLoading;return console.log("RENDER FilmsList",i?"isLoading":""),i?Object(m.jsx)("div",{children:"loading"}):Object(m.jsxs)("div",{className:"flex",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Films List:"}),Object(m.jsx)("ul",{children:null===n||void 0===n||null===(e=n.map)||void 0===e?void 0:e.call(n,(function(e){return Object(m.jsx)(_,{film:e},e.episode_id)}))})]}),Object(m.jsx)(s.c,{children:Object(m.jsx)(s.a,{path:"/film/:filmId",children:Object(m.jsx)(T,{})})})]})}var N=Object(i.memo)(E);function _(e){var t=e.film;return Object(m.jsx)("li",{children:Object(m.jsx)(a.b,{to:"/film/".concat(t.episode_id),children:t.title})},t.episode_id)}function D(){var e=v().filmId,t=function(e){var t=O("https://swapi.dev/api/films/".concat(e,"/")),n=t.data;return{isLoading:t.isLoading,film:n}}(e),n=t.film,i=t.isLoading;return console.log("RENDER FILM",e,i?"isLoading":n.title),i?Object(m.jsx)("div",{children:"loading"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:n.title}),Object(m.jsxs)("p",{children:["Release date: ",n.release_date]}),Object(m.jsxs)("p",{children:["Director: ",n.director]}),Object(m.jsxs)("p",{children:[Object(m.jsx)(a.b,{to:"/film/".concat(e,"/peoples"),children:"Peoples"})," | ",Object(m.jsx)(a.b,{to:"/film/".concat(e,"/planets"),children:"Planets"})]}),Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{path:"/film/:filmId/peoples",children:Object(m.jsx)(x,{peoples:n.characters.slice(0,10)})}),Object(m.jsx)(s.a,{path:"/film/:filmId/planets",children:Object(m.jsx)(w,{planets:n.planets.slice(0,10)})})]})]})}var T=Object(i.memo)(D);function C(){var e=localStorage.getItem("hookType")||"useParams",t=Object(i.useState)(e),n=Object(p.a)(t,2),c=n[0],l=n[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Select type of hook: "}),Object(m.jsxs)("select",{onChange:function(e){var t=e.target.value;l(t),localStorage.setItem("hookType",t),window.location.href="/"},value:c,children:[Object(m.jsx)("option",{value:"useParams",children:"React Router useParams"}),Object(m.jsx)("option",{value:"useRouteMatch",children:"React Router useRouteMatch"}),Object(m.jsx)("option",{value:"useRouteMatchParams",children:"Custom useRouteMatchParams"})]}),Object(m.jsx)("hr",{})]})}function F(){return Object(m.jsx)(a.a,{basename:"/react-router-star-wars",children:Object(m.jsx)(s.c,{children:Object(m.jsxs)(s.a,{path:"/",children:[Object(m.jsx)(C,{}),Object(m.jsx)(N,{})]})})})}r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a09811b0.chunk.js.map