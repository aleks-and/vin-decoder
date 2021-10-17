(this["webpackJsonpvin-decoder"]=this["webpackJsonpvin-decoder"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(17),s=c.n(a),i=c(6),j=c(3),d=c(2),l=c(7),o=c.n(l),b=c(20),u=c(8),h=c(9),O="https://vpic.nhtsa.dot.gov/api",x=function(e){return fetch("".concat(O,"/vehicles/decodevin/").concat(e,"?format=json")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))},v=function(){return fetch("".concat(O,"/vehicles/getvehiclevariablelist?format=json")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))},f=c(0),p=function(e){var t=e.isDecoding,c=e.setIsDecoding,r=e.setDecodedVinData,a=e.decodedVinData,s=e.searchInput,i=e.setSearchInput,j=e.previousVinCode,d=e.setPreviousVinCode,l=Object(n.useContext)(R).setLastSearchResults,O=function(){var e=Object(h.a)(o.a.mark((function e(t){var n,h,O,v,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o=s.value,n=/^[A-Z0-9]{17}$/.test(o.trim()),i(Object(u.a)(Object(u.a)({},s),{},{isValid:n})),n&&j!==s.value){e.next=5;break}return e.abrupt("return");case 5:return c(!0),d(s.value),e.prev=7,e.next=10,x(s.value);case 10:h=e.sent,O=h.Results,v=h.Message,f=O.filter((function(e){return null!==e.Value})),r({isError:!1,isLoaded:!0,data:f,code:s.value,message:v}),l((function(e){return[{data:f,message:v,code:s.value}].concat(Object(b.a)(e.slice(0,4)))})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),r(Object(u.a)(Object(u.a)({},a),{},{isError:!0,isLoaded:!1}));case 21:return e.prev=21,c(!1),e.finish(21);case 24:case"end":return e.stop()}var o}),e,null,[[7,18,21,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Search"}),Object(f.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(f.jsx)("input",{value:s.value,onChange:function(e){i({isValid:!0,value:e.target.value})},type:"text",placeholder:"Enter VIN to decode",maxLength:"17"}),Object(f.jsx)("button",{type:"submit",disabled:t,children:t?"Decoding...":"Decode"})]}),!s.isValid&&Object(f.jsx)("span",{children:"17 characters (A-Z & 0-9)"})]})},g=p,V=function(e){var t=e.isDecoding,c=e.decodedVinData,n=c.data,r=c.message,a=c.isLoaded,s=c.isError;return t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Decoded VIN data"}),Object(f.jsx)("p",{children:"Decoding..."})]}):s?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Decoded VIN data"}),Object(f.jsx)("p",{children:"Something went wrong. Please try again later."})]}):a?0===n.length?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Decoded VIN data"}),Object(f.jsx)("p",{children:"No data for this VIN"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Decoded VIN data"}),Object(f.jsx)("p",{children:r}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Variable name"}),Object(f.jsx)("th",{children:"Variable description"})]})}),Object(f.jsx)("tbody",{children:n.map((function(e){var t=e.Value,c=e.Variable,n=e.VariableId;return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:c}),Object(f.jsx)("td",{children:t})]},n)}))})]})]}):Object(f.jsx)("h2",{children:"Decoded VIN data"})},m=function(e){var t=e.setDecodedVinData,c=e.decodedVinData,r=e.setSearchInput,a=e.setPreviousVinCode,s=Object(n.useContext)(R).lastSearchResults;return 0===s.length?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Last search results"}),Object(f.jsx)("p",{children:"No search performed"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Last search results"}),Object(f.jsx)("ul",{children:s.map((function(e,n){var i=e.code;return Object(f.jsx)("li",{onClick:function(){return function(e){var n=s[e].code;c.code!==n&&(t(Object(u.a)({isError:!1,isLoaded:!0},s[e])),a(n),r({value:n,isValid:!0}))}(n)},children:i},n)}))})]})},I=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)({data:[],message:null,code:null,isLoaded:!1,isError:!1}),s=Object(j.a)(a,2),i=s[0],d=s[1],l=Object(n.useState)({value:"",isValid:!0}),o=Object(j.a)(l,2),b=o[0],u=o[1],h=Object(n.useState)(b.value),O=Object(j.a)(h,2),x=O[0],v=O[1];return Object(f.jsx)("main",{children:Object(f.jsxs)("article",{children:[Object(f.jsx)("h1",{children:"VIN decoder"}),Object(f.jsx)("section",{children:Object(f.jsx)(g,{isDecoding:c,setIsDecoding:r,decodedVinData:i,setDecodedVinData:d,searchInput:b,setSearchInput:u,previousVinCode:x,setPreviousVinCode:v})}),Object(f.jsx)("aside",{children:Object(f.jsx)(m,{decodedVinData:i,setDecodedVinData:d,setSearchInput:u,setPreviousVinCode:v})}),Object(f.jsx)("section",{children:Object(f.jsx)(V,{isDecoding:c,decodedVinData:i})})]})})},D=function(e){return{__html:e}},S=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),d=Object(j.a)(s,2),l=d[0],b=d[1],u=Object(n.useContext)(y),O=u.isVariablesLoaded,x=u.setIsVariablesLoaded,p=Object(n.useContext)(P),g=p.variables,V=p.setVariables;return Object(n.useEffect)((function(){if(!O&&!c&&!l){var e=function(){var e=Object(h.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),b(!1),e.prev=2,e.next=5,v();case 5:t=e.sent,c=t.Results,V(c),x(!0),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),e.t0.message,b(!0);case 15:return e.prev=15,a(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}})),c?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Variable list"}),Object(f.jsx)("p",{children:"Loading..."})]}):l?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Variable list"}),Object(f.jsx)("p",{children:"Something went wrong. Please try again later."})]}):0===g.length?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Variable list"}),Object(f.jsx)("p",{children:"The variable list is empty."})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Variable list"}),Object(f.jsx)("dl",{children:g.map((function(e){var t=e.ID,c=e.Name,n=e.Description;return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)("dt",{children:Object(f.jsx)(i.b,{to:"/variables/".concat(t),children:c})}),Object(f.jsx)("dd",{dangerouslySetInnerHTML:D(n)})]},t)}))})]})},L=S,C=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"404"}),Object(f.jsx)("p",{children:"Page not found"})]})},F={MAIN:"/",VARIABLES:"/variables",VARIABLE:"/variables/:id"},w=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(j.a)(a,2),l=s[0],b=s[1],u=Object(n.useState)(null),O=Object(j.a)(u,2),x=O[0],p=O[1],g=Object(n.useContext)(y),V=g.isVariablesLoaded,m=g.setIsVariablesLoaded,I=Object(n.useContext)(P),S=I.variables,L=I.setVariables,C=Object(d.g)().id;return Object(n.useEffect)((function(){if(!V&&!c&&!l){var e=function(){var e=Object(h.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),b(!1),e.prev=2,e.next=5,v();case 5:t=e.sent,c=t.Results,L(c),m(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),b(!0);case 14:return e.prev=14,r(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}})),Object(n.useEffect)((function(){p(S.find((function(e){return e.ID===Number(C)})))}),[x,S,C]),c?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Variable description"}),Object(f.jsx)("p",{children:"Loading..."})]}):l?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Variable description"}),Object(f.jsx)("p",{children:"Something went wrong. Please try again later."})]}):x?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Variable description"}),Object(f.jsxs)("dl",{children:[Object(f.jsx)("dt",{children:x.Name}),Object(f.jsx)("dd",{dangerouslySetInnerHTML:D(x.Description)})]}),Object(f.jsx)("p",{children:Object(f.jsx)(i.b,{to:F.VARIABLES,children:"Back to list"})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Variable description"}),Object(f.jsx)("p",{children:"Variable not found"})]})},E=w,N=function(){return Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{to:F.MAIN,activeClassName:"active",exact:!0,children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{to:F.VARIABLES,activeClassName:"active",children:"Variables"})})]})},A=(c(35),function(){return Object(f.jsx)("header",{className:"header",children:Object(f.jsx)(N,{})})}),k=function(){var e=Object(d.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},y=r.a.createContext(null),P=r.a.createContext(null),R=r.a.createContext(null),B=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(j.a)(a,2),i=s[0],l=s[1],o=Object(n.useState)([]),b=Object(j.a)(o,2),u=b[0],h=b[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{}),Object(f.jsx)(R.Provider,{value:{lastSearchResults:u,setLastSearchResults:h},children:Object(f.jsx)(P.Provider,{value:{variables:i,setVariables:l},children:Object(f.jsxs)(y.Provider,{value:{isVariablesLoaded:c,setIsVariablesLoaded:r},children:[Object(f.jsx)(A,{}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{path:F.MAIN,exact:!0,children:Object(f.jsx)(I,{})}),Object(f.jsx)(d.a,{path:F.VARIABLES,exact:!0,children:Object(f.jsx)(L,{})}),Object(f.jsx)(d.a,{path:F.VARIABLE,exact:!0,children:Object(f.jsx)(E,{})}),Object(f.jsx)(d.a,{path:"*",children:Object(f.jsx)(C,{})})]})]})})})]})},T=(c(36),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))});s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(B,{})})}),document.getElementById("root")),T()}},[[37,1,2]]]);
//# sourceMappingURL=main.b16bebf5.chunk.js.map