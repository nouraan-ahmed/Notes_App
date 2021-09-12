(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),o=n(37),a=n.n(o),c=(n(48),n(49),n(3)),i=n(4),l=n(6),h=n(5),d=n(8),u=n(43),b=n(38),j=n(40),p=function(e){return e.children},x=n(39),f=n.n(x).a.create({baseURL:"https://notes-app-b5e05-default-rtdb.firebaseio.com/"}),v=n(0),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).IconClickHandler=function(t){var n=Object.keys(e.props.notes).map((function(n){if(t===n)return Object(d.a)(Object(d.a)({},e.props.notes[n]),{},{favorite:!e.props.notes[n].favorite})}));n=n.filter((function(e){return void 0!==e})),console.log(e.props),f.delete("/notes/"+t+".json").then((function(e){return console.log(e)})),f.post.apply(f,["/notes.json"].concat(Object(u.a)(n))).then((function(e){return console.log(e)}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=null;return console.log(this.props.active),this.props.active&&(t=Object(v.jsx)(b.a,{onClick:function(){return e.IconClickHandler(e.props.igKey)},icon:j.a,className:"hover:text-yellow-500 text-2xl text-white"})),Object(v.jsx)(p,{children:Object(v.jsxs)("div",{class:"bg-primary w-1/4 h-60 m-2 rounded-2xl inline-block border-white border-2",children:[Object(v.jsx)("h4",{class:"text-center font-bold text-white p-5 inline-block",children:this.props.title}),t,Object(v.jsx)("hr",{}),Object(v.jsx)("p",{class:"m-2 text-white p-3",dangerouslySetInnerHTML:{__html:this.props.content}})]})})}}]),n}(r.Component),g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.notes).map((function(t){return Object(v.jsx)(m,{fav:e.props.notes[t].favorite,title:e.props.notes[t].title,content:e.props.notes[t].content},t)}));return Object(v.jsx)(p,{children:Object(v.jsx)("div",{class:"m-8",children:t})})}}]),n}(r.Component),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={notes:null},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=Object.keys(this.props.notes).map((function(t){return Object(d.a)(Object(d.a)({},e.props.notes[t]),{},{favorite:!0})}));this.setState({notes:t})}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.notes).map((function(t){return console.log(e.props),Object(v.jsx)(m,{active:e.props.active,notes:e.props.notes,fav:e.state.favorite,igKey:t,title:e.props.notes[t].title,content:e.props.notes[t].content},t)}));return Object(v.jsx)(p,{children:Object(v.jsx)("div",{class:"m-8",children:t})})}}]),n}(r.Component),y=n(41),w=n(42),k=n.n(w),N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={title:"",content:""},e.PostNoteHandler=function(){var t={title:e.state.title,content:e.state.content,favorite:!1};f.post("/notes.json",t).then((function(e){return console.log(e)}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)(p,{children:Object(v.jsx)("div",{class:"w-2/3 h-2/3",children:Object(v.jsxs)("form",{class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(v.jsxs)("div",{class:"mb-4",children:[Object(v.jsx)("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"username",children:"Title"}),Object(v.jsx)("input",{onChange:function(t){e.setState({title:t.target.value})},class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"title",type:"text",placeholder:"Note Title"})]}),Object(v.jsxs)("div",{class:"mb-6",children:[Object(v.jsx)("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"password",children:"Your Note"}),Object(v.jsx)("div",{children:Object(v.jsx)(y.CKEditor,{editor:k.a,data:this.state.data,onChange:function(t,n){e.setState({content:n.getData()})}})})]}),Object(v.jsx)("div",{class:"flex items-center justify-between",children:Object(v.jsx)("button",{onClick:this.PostNoteHandler,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",children:"ADD"})})]})})})}}]),n}(r.Component),C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"flex h-screen mt-28 justify-center",children:Object(v.jsx)(N,{})})}}]),n}(r.Component),S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={notes:e.props.notes,ActiveButton:"view",clicked:""},e.ComponentViewer="",e.viewHandler=function(){e.setState({ActiveButton:"view"}),e.ComponentViewer=Object(v.jsx)(O,{active:e.state.ActiveButton,notes:e.props.notes})},e.favoriteHandler=function(){return e.setState({ActiveButton:"favorites"}),e.ComponentViewer=Object(v.jsx)(g,{notes:e.props.favs}),0},e.addNoteHandler=function(){return e.setState({ActiveButton:"newNote"}),e.ComponentViewer=Object(v.jsx)(C,{}),0},e.searchHandler=function(){return e.setState({ActiveButton:"search"}),0},e}return Object(i.a)(n,[{key:"render",value:function(){var e="",t="",n="",r="";switch(this.state.ActiveButton){case"view":e="bg-gray-900 text-white",t="text-gray-300 hover:bg-gray-700 hover:text-white",n="text-gray-300 hover:bg-gray-700 hover:text-white",r="text-gray-300 hover:bg-gray-700 hover:text-white";break;case"favorites":e="text-gray-300 hover:bg-gray-700 hover:text-white",t="bg-gray-900 text-white",n="text-gray-300 hover:bg-gray-700 hover:text-white",r="text-gray-300 hover:bg-gray-700 hover:text-white";break;case"newNote":e="text-gray-300 hover:bg-gray-700 hover:text-white",t="text-gray-300 hover:bg-gray-700 hover:text-white",n="bg-gray-900 text-white",r="text-gray-300 hover:bg-gray-700 hover:text-white";break;case"search":e="text-gray-300 hover:bg-gray-700 hover:text-white",t="text-gray-300 hover:bg-gray-700 hover:text-white",n="text-gray-300 hover:bg-gray-700 hover:text-white",r="bg-gray-900 text-white"}return Object(v.jsxs)("div",{children:[Object(v.jsxs)("nav",{className:"bg-gray-800",children:[Object(v.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(v.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(v.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(v.jsxs)("button",{type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[Object(v.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(v.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(v.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})}),Object(v.jsx)("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(v.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})})]})}),Object(v.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(v.jsx)("div",{className:"flex-shrink-0 flex items-center"}),Object(v.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(v.jsxs)("div",{className:"flex space-x-4",children:[Object(v.jsx)("a",{href:"#",onClick:this.viewHandler,className:e+" text-white px-3 py-2 rounded-md text-sm font-medium","aria-current":"page",children:"View Notes"}),Object(v.jsx)("a",{href:"#",onClick:this.favoriteHandler,className:t+" px-3 py-2 rounded-md text-sm font-medium",children:"Favorites"}),Object(v.jsx)("a",{href:"#",onClick:this.addNoteHandler,className:n+" px-3 py-2 rounded-md text-sm font-medium",children:"New Note"})]})})]}),Object(v.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:Object(v.jsx)("div",{className:"ml-3 relative",children:Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"button",className:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true",children:Object(v.jsxs)("div",{className:"flex space-x-4",children:[Object(v.jsx)("input",{type:"text",name:"price",id:"price",className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",placeholder:"Search Notes"}),Object(v.jsx)("a",{href:"#",className:r+" px-3 py-2 rounded-md text-sm font-medium","aria-current":"page",children:"Search"})]})})})})})]})}),Object(v.jsx)("div",{class:"sm:hidden",id:"mobile-menu",children:Object(v.jsxs)("div",{class:"px-2 pt-2 pb-3 space-y-1",children:[Object(v.jsx)("a",{href:"#",class:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium","aria-current":"page",children:"View Notes"}),Object(v.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Favorites"}),Object(v.jsx)("a",{href:"#",class:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"New Note"})]})})]}),Object(v.jsxs)("div",{children:[" ",this.ComponentViewer]})]})}}]),n}(r.Component),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={notes:{},favorites:{}},e}return Object(i.a)(n,[{key:"componentWillMount",value:function(){var e=this;f.get("/notes.json").then((function(e){return e.data})).then((function(t){e.setState({notes:t});e.state.notes;var n=Object.keys(e.state.notes).map((function(t){if(e.state.notes[t].favorite)return Object(d.a)({},e.state.notes[t])}));e.setState({favorites:n.filter((function(e){return void 0!==e}))}),console.log(e.state.notes),console.log(e.state.favorites)}))}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(S,{notes:this.state.notes,favs:this.state.favorites})})}}]),n}(r.Component),H=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(A,{})})}}]),n}(r.Component);var B=function(){return Object(v.jsx)("div",{class:"bg-app bg-cover h-screen m-0 p-0",children:Object(v.jsx)(H,{})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),o(e),a(e)}))};a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root")),M()}},[[86,1,2]]]);
//# sourceMappingURL=main.3806bdce.chunk.js.map