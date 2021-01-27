(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(2),i=s.n(c),r=s(16),n=s.n(r),l=(s(22),s(3)),d=s(4),o=s(6),j=s(5);s(23);var b=function(e){return Object(a.jsx)("li",{className:e.active?"nav-item active":"nav-item",children:Object(a.jsxs)("a",{className:e.collapsed?"nav-link collapsed":"nav-link",href:"/",children:[Object(a.jsx)("i",{className:"fas fa-fw fa-".concat(e.icon)}),Object(a.jsxs)("span",{children:["  ",e.title]})]})})};var h=function(){return Object(a.jsxs)("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar",children:[Object(a.jsxs)("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"/",children:[Object(a.jsx)("div",{className:"sidebar-brand-icon",children:Object(a.jsx)("i",{className:"fas fa-chart-line"})}),Object(a.jsx)("div",{className:"sidebar-brand-text mx-3",children:"Admin"})]}),Object(a.jsx)("hr",{className:"sidebar-divider my-0"}),Object(a.jsx)(b,{title:"Dashboard",icon:"tachometer-alt",active:"true"}),Object(a.jsx)("hr",{className:"sidebar-divider"}),Object(a.jsx)("div",{className:"sidebar-heading",children:"Actions"}),Object(a.jsx)(b,{title:"Pages",icon:"folder",collapsed:"true"}),Object(a.jsx)(b,{title:"Charts",icon:"chart-area"}),Object(a.jsx)(b,{title:"Tables",icon:"table"})]})};var u=function(e){return Object(a.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(a.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(a.jsx)("i",{className:"fa fa-bars"})}),Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item dropdown no-arrow mx-1",children:Object(a.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/",id:"alertsDropdown",children:[Object(a.jsx)("i",{className:"fas fa-bell fa-fw"}),Object(a.jsx)("span",{className:"badge badge-danger badge-counter",children:"0"})]})}),Object(a.jsx)("li",{className:"nav-item dropdown no-arrow mx-1",children:Object(a.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/",id:"messagesDropdown",children:[Object(a.jsx)("i",{className:"fas fa-envelope fa-fw"}),Object(a.jsx)("span",{className:"badge badge-danger badge-counter",children:"7"})]})}),Object(a.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(a.jsx)("li",{className:"nav-item dropdown no-arrow",children:Object(a.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/",id:"userDropdown",children:[Object(a.jsx)("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small",children:e.user?e.user.first_name:"Walter White"}),Object(a.jsx)("img",{className:"img-profile rounded-circle",src:"images/dummy-avatar.jpg",width:"60",alt:"profile"})]})})]})]})};function m(e){return Object(a.jsx)("div",{className:"col-md-4 mb-4",children:Object(a.jsx)("div",{className:"card border-left-".concat(e.status," shadow h-100 py-2"),children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(a.jsxs)("div",{className:"col mr-2",children:[Object(a.jsx)("div",{className:"text-xs font-weight-bold text-".concat(e.status," text-uppercase mb-1"),children:e.title}),Object(a.jsx)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:e.data})]}),Object(a.jsx)("div",{className:"col-auto",children:Object(a.jsx)("i",{className:"fas fa-".concat(e.icon," fa-2x text-gray-300")})})]})})})})}m.defaultProps={status:"primary"};var x=m,O=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:this.props.fullWidth?"col-lg-12 mb-4":"col-lg-6 mb-4",children:Object(a.jsxs)("div",{className:"card shadow mb-4",children:[Object(a.jsx)("div",{className:"card-header py-3",children:Object(a.jsx)("h6",{className:"m-0 font-weight-bold text-primary",children:this.props.title})}),Object(a.jsx)("div",{className:"card-body",children:this.props.children})]})})}}]),s}(i.a.Component);var p=function(e){return Object(a.jsx)("div",{className:"col-lg-6 mb-4",children:Object(a.jsx)("div",{className:"card bg-info text-white shadow",children:Object(a.jsx)("div",{className:"card-body",children:e.title})})})};var g=function(e){return Object(a.jsx)("div",{className:"table-responsive",children:Object(a.jsxs)("table",{className:"table table-bordered",id:"dataTable",width:"100%",cellSpacing:"0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Tipo"}),Object(a.jsx)("th",{children:"Nombre"}),Object(a.jsx)("th",{children:"Descripcion"}),Object(a.jsx)("th",{children:"Precio"}),Object(a.jsx)("th",{children:"Destino"})]})}),Object(a.jsx)("tfoot",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Tipo"}),Object(a.jsx)("th",{children:"Nombre"}),Object(a.jsx)("th",{children:"Descripcion"}),Object(a.jsx)("th",{children:"Precio"}),Object(a.jsx)("th",{children:"Destino"})]})}),Object(a.jsx)("tbody",{children:e.products.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.type}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.description}),Object(a.jsx)("td",{children:"$".concat(e.price)}),Object(a.jsx)("td",{children:e.destination})]},e.type+e.id)}))})]})})};var f=function(){return Object(a.jsx)("footer",{className:"sticky-footer bg-white",children:Object(a.jsx)("div",{className:"container my-auto",children:Object(a.jsx)("div",{className:"copyright text-center my-auto",children:Object(a.jsx)("span",{children:"Copyright \xa9 Dashboard 2020"})})})})},v=s(24),N=["Paquetes","Hoteles","Traslados","Excursiones"],w=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[],users:[],lastProduct:null,loggedUser:!1},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;v.get("/api/all").then((function(t){return e.setState({items:t.data.products})})),v.get("/api/users/all").then((function(t){return e.setState({users:t.data.users})})),v.get("/api/paquetes/last").then((function(t){return e.setState({lastProduct:t.data.product})})),v.get("/api/users/current").then((function(t){return e.setState({loggedUser:t})}))}},{key:"render",value:function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)("div",{id:"root",children:[Object(a.jsx)(h,{}),Object(a.jsx)("div",{id:"content-wrapper",className:"d-flex flex-column",children:Object(a.jsxs)("div",{id:"content",children:[Object(a.jsx)(u,{user:this.state.loggedUser}),Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:Object(a.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:"App Dashboard"})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(x,{title:"Productos in Data Base",data:this.state.items.length,icon:"clipboard-list"}),Object(a.jsx)(x,{title:"Amount in products",data:"$"+this.state.items.reduce((function(e,t){return e+t.price}),0),icon:"dollar-sign",status:"success"}),Object(a.jsx)(x,{title:"Users quantity",data:this.state.users.length,icon:"user-check",status:"warning"})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)(O,{title:"Last product in Data Dase",fullWidth:"False",children:[Object(a.jsx)("div",{className:"text-center",children:this.state.lastProduct?Object(a.jsx)("img",{className:"img-fluid px-3 px-sm-4 mt-3 mb-4",style:{width:"25rem"},src:"http://localhost:5000/img/img_travels/".concat(this.state.lastProduct.image),alt:"last-product"}):Object(a.jsx)("img",{className:"img-fluid px-3 px-sm-4 mt-3 mb-4",style:{width:"25rem"},src:"images/product_dummy.svg",alt:"dummy"})}),Object(a.jsx)("p",{children:this.state.lastProduct?this.state.lastProduct.description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis arcu est, in malesuada est volutpat a. In euismod erat eget nisl iaculis volutpat. Nunc fermentum nec purus nec lacinia. Pellentesque at ex elit. Nam mi nunc, egestas id elit maximus, facilisis consectetur sapien. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque commodo sem tellus, et sagittis eros aliquet a. In ut dui tellus. Nulla elementum vel lectus in congue."}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.state.lastProduct?"/paquetes/".concat(this.state.lastProduct.id):"/",children:"View product detail"})]}),Object(a.jsx)(O,{title:"Categories in Database",fullWidth:"False",children:Object(a.jsx)("div",{className:"row",children:N.map((function(e,t){return Object(a.jsx)(p,{title:e},t)}))})}),Object(a.jsx)(O,{title:"All products in the Database",fullWidth:"True",children:Object(a.jsx)(g,{products:this.state.items})})]})]})]})})]}),Object(a.jsx)(f,{})]})}}]),s}(i.a.Component),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),i(e),r(e)}))};n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("app")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.2ffd1f40.chunk.js.map