(function(e){function t(t){for(var a,s,o=t[0],i=t[1],l=t[2],u=0,b=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function s(e){return o.p+"js/"+({about:"about",login:"login",pages:"pages",users:"users"}[e]||e)+"."+{about:"ab68647c",login:"98c547e5",pages:"e08f5bf0",users:"14d84c40"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=s(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ea6":function(e,t,n){},"2fc4":function(e,t,n){},5073:function(e,t,n){"use strict";var a=n("7a23"),r={class:"p-4 flex justify-between"},c={class:"logo md:w-1/4 dark:text-white"},s={class:"flex"},o=Object(a["h"])("h2",{class:"ml-6 text-lg font-bold text-gray-800 dark:text-white"},"Logo",-1),i={class:"search-box-wrapper md:mr-24 w-1/3 md:w-4/12 relative"},l={class:"account-links w-1/5 md:w-1/4 flex justify-between md:justify-end md:pr-3"},u={class:"mr-8 flex justify-end"},d={class:"flex items-center flex-shrink-0 space-x-6"},b={class:"mr-8 flex items-center justify-end relative"},p={class:"flex items-center"},f=Object(a["h"])("span",null,"Messages",-1),h=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("span",{class:"bg-red-100 px-2 border border-red-200 rounded-lg text-xs flex items-center font-medium"},"12")],-1),O={class:"flex items-center"},g=Object(a["h"])("span",null,"Sales",-1),j=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("span",{class:"bg-red-100 px-2 border border-red-200 rounded-lg text-xs flex items-center font-medium"},"11")],-1),m={class:"flex items-center"},x=Object(a["h"])("span",null,"Alerts",-1),v=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("span",{class:"bg-red-100 px-2 border border-red-200 rounded-lg text-xs flex items-center font-medium"},"12")],-1),k={class:"mr-8 flex items-center justify-end relative"},y={class:"flex items-center"},w=Object(a["h"])("span",null,"Profile",-1),S={class:"flex items-center"},T=Object(a["h"])("span",null,"Settings",-1),E={class:"flex items-center"},_=Object(a["h"])("span",null,"Logout",-1);function L(e,t,n,L,I,P){var U=Object(a["z"])("icon"),G=Object(a["z"])("search-box");return Object(a["r"])(),Object(a["d"])("header",r,[Object(a["h"])("div",c,[Object(a["h"])("div",s,[Object(a["h"])("button",{onClick:t[1]||(t[1]=function(){return L.hideLinks.apply(L,arguments)})},[L.textOn?(Object(a["r"])(),Object(a["d"])(U,{key:0,icon:"arrow-left"})):(Object(a["r"])(),Object(a["d"])(U,{key:1,icon:"arrow-right"}))]),o])]),Object(a["h"])("div",i,[Object(a["h"])(G)]),Object(a["h"])("div",l,[Object(a["h"])("div",u,[Object(a["h"])("ul",d,[Object(a["h"])("li",null,[Object(a["h"])("button",{onClick:t[2]||(t[2]=function(){return L.changeTheme.apply(L,arguments)})},["light"===L.theme?(Object(a["r"])(),Object(a["d"])(U,{key:0,icon:"moon",class:["text-purple-700","hover:opacity-50"]})):(Object(a["r"])(),Object(a["d"])(U,{key:1,icon:"sun",class:["text-purple-300","hover:opacity-50"]}))])])])]),Object(a["h"])("div",b,[Object(a["h"])(U,{onClick:L.toggleMessages,icon:"bell",class:["text-purple-700","hover:opacity-50","cursor-pointer","dark:text-purple-300"]},null,8,["onClick"]),Object(a["h"])("ul",{class:[L.alerts.messages?"transition ease-in duration-1000":"hidden","dash-nav-dropdown"]},[Object(a["h"])("li",null,[Object(a["h"])("div",p,[Object(a["h"])(U,{icon:"inbox",class:["fa-fw","text-purple-700","hover:opacity-50","text-sm mr-2"]}),f]),h]),Object(a["h"])("li",null,[Object(a["h"])("div",O,[Object(a["h"])(U,{icon:"bell",class:["fa-fw","text-purple-700","hover:opacity-50","text-sm mr-2"]}),g]),j]),Object(a["h"])("li",null,[Object(a["h"])("div",m,[Object(a["h"])(U,{icon:"bell",class:["fa-fw","text-purple-700","hover:opacity-50","text-sm mr-2"]}),x]),v])],2)]),Object(a["h"])("div",k,[Object(a["g"])(Object(a["B"])(L.loggedUser)+" ",1),Object(a["h"])("img",{onClick:t[3]||(t[3]=function(){return L.toggleProfile.apply(L,arguments)}),src:L.profileImg,class:"object-cover w-8 h-8 rounded-full cursor-pointer",alt:""},null,8,["src"]),Object(a["h"])("ul",{class:[L.alerts.profile?"transition ease-in duration-1000":"hidden","dash-nav-dropdown"]},[Object(a["h"])("li",null,[Object(a["h"])("div",y,[Object(a["h"])(U,{icon:"user",class:["fa-fw","text-purple-700","hover:opacity-50","text-sm mr-2"]}),w])]),Object(a["h"])("li",null,[Object(a["h"])("div",S,[Object(a["h"])(U,{icon:"cog",class:["fa-fw","text-purple-700","hover:opacity-50","text-sm mr-2"]}),T])]),Object(a["h"])("li",null,[Object(a["h"])("div",E,[Object(a["h"])(U,{icon:"sign-out-alt",class:["fa-fw","text-purple-700","hover:opacity-50","text-sm mr-2"]}),_])])],2)])])])}var I=n("5502"),P=n("9373"),U={class:"search-box-container"},G={class:"absolute inset-y-0 flex items-center pl-6"},D=Object(a["h"])("input",{type:"text",class:"search-box dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-purple-300",placeholder:"Search"},null,-1);function R(e,t,n,r,c,s){var o=Object(a["z"])("icon");return Object(a["r"])(),Object(a["d"])("div",U,[Object(a["h"])("span",G,[Object(a["h"])(o,{icon:"search",class:["text-indigo-500","dark:text-purple-300"]})]),D])}var A={name:"SearchBox",props:{searchData:{type:Object,default:function(){}}},components:{Icon:P["a"]}};A.render=R;var N=A,C={name:"Nav",components:{Icon:P["a"],SearchBox:N},setup:function(){var e=Object(I["b"])(),t=Object(a["w"])(Object(a["b"])((function(){return e.getters["dashboard/textOnStatus"]}))),r=Object(a["w"])(Object(a["b"])((function(){return e.getters["dashboard/getTheme"]}))),c=Object(a["v"])({messages:!1,profile:!1}),s=Object(a["b"])((function(){return n("c170")})),o=Object(a["b"])((function(){return e.getters["login/getLoggedUser"]})),i=function(){var n=!t.value;e.dispatch("dashboard/setTextOn",n)},l=function(){return"light"===r.value?e.dispatch("dashboard/setTheme","dark"):e.dispatch("dashboard/setTheme","light")},u=function(){return c.profile&&(c.profile=!1),c.messages=!c.messages},d=function(){return c.messages&&(c.messages=!1),c.profile=!c.profile};return{hideLinks:i,textOn:t,changeTheme:l,theme:r,alerts:c,toggleMessages:u,toggleProfile:d,profileImg:s,loggedUser:o}}};C.render=L;t["a"]=C},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"dark:bg-gray-900"};function c(e,t,n,c,s,o){var i=Object(a["z"])("router-view");return Object(a["r"])(),Object(a["d"])("div",{class:c.theme},[Object(a["h"])("div",r,[Object(a["h"])(i)])],2)}var s=n("5502"),o={setup:function(){var e=Object(s["b"])(),t=Object(a["b"])((function(){return e.getters["dashboard/getTheme"]}));return Object(a["p"])((function(){e.dispatch("dashboard/setSidebarLinks"),e.dispatch("users/fetchUsers"),e.dispatch("pages/fetchPages"),e.dispatch("posts/fetchPosts")})),{theme:t}}};o.render=c;var i=o,l=(n("d3b7"),n("96cf"),n("1da1")),u=n("6c02"),d=(n("b0c0"),{class:"dashboard min-h-screen flex flex-col"}),b={class:"flex flex-1"},p={class:"content-section grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},f={class:"content-section overflow-x-auto"},h={class:"overflow-hidden rounded-lg shadow-xs w-full"};function O(e,t,n,r,c,s){var o=Object(a["z"])("Nav"),i=Object(a["z"])("Sidebar"),l=Object(a["z"])("Title"),u=Object(a["z"])("Info"),O=Object(a["z"])("BoxStat"),g=Object(a["z"])("Table"),j=Object(a["z"])("Pagination"),m=Object(a["z"])("MainContent");return Object(a["r"])(),Object(a["d"])("div",d,[Object(a["h"])(o),Object(a["h"])("div",b,[Object(a["h"])(i),Object(a["h"])(m,null,{default:Object(a["G"])((function(){return[Object(a["h"])(l,{title:r.title.name},null,8,["title"]),Object(a["h"])(u),Object(a["h"])("section",p,[Object(a["h"])(O,{"bg-color":"bg-pink-200","text-color":"text-pink-600",title:"Users",stat:"1500",icon:"users"}),Object(a["h"])(O,{"bg-color":"bg-blue-200","text-color":"text-blue-600",title:"Pages",stat:"10",icon:"file"}),Object(a["h"])(O,{"bg-color":"bg-green-200","text-color":"text-green-600",title:"Posts",stat:"20",icon:"file-alt"}),Object(a["h"])(O,{"bg-color":"bg-indigo-200","text-color":"text-indigo-600",title:"Sales",stat:"1500",icon:"users"})]),Object(a["h"])("section",f,[Object(a["h"])("div",h,[Object(a["h"])(g,{"table-data":r.users,"table-header":r.tableHeader},null,8,["table-data","table-header"]),Object(a["h"])(j)])])]})),_:1})])])}var g=n("5073"),j=n("f082"),m=n("faf8"),x=n("e3d9"),v=n("a279"),k=n("6d48"),y=n("6d7d"),w=n("bfb0"),S={name:"Dashboard",components:{Nav:g["a"],Sidebar:j["a"],Title:m["a"],Info:x["a"],MainContent:v["a"],Table:k["a"],Pagination:y["a"],BoxStat:w["a"]},setup:function(){var e=Object(u["c"])(),t=Object(s["b"])(),n=e,r=Object(a["b"])((function(){return t.getters["login/getLoginStatus"]})),c=Object(a["w"])([{name:"id",editable:!1},{name:"name",editable:!1},{name:"image",editable:!1},{name:"email",editable:!1},{name:"role",editable:!1},{name:"status",editable:!1}]),o=Object(a["b"])((function(){return t.getters["users/getUsers"]}));return{title:n,users:o,tableHeader:c,user:r}}};S.render=O;var T=S,E={class:"create my-8"},_={class:"dark:text-white"},L=Object(a["f"])('<div class="form-wrapper p-10 mt-3 mb-14 bg-white rounded dark:bg-gray-900"><div class="grid grid-cols-1 gap-5"><label class="block" for="title"><span class="dark:text-white">Title</span><input class="bg-gray-200 input-field mt-2 dark:bg-white dark:focus:bg-gray-700" type="text" name="title" id="title"></label><label class="block" for="content" id="content"><span class="dark:text-white">Content</span><textarea class="bg-gray-200 input-field mt-2 h-40 dark:bg-white" id="content"></textarea></label></div></div>',1);function I(e,t,n,r,c,s){return Object(a["r"])(),Object(a["d"])("div",E,[Object(a["h"])("h2",_,"Create new "+Object(a["B"])(r.title),1),L])}var P={name:"Create",setup:function(){var e=Object(u["c"])(),t=e.matched[0].name;return{title:t}}};P.render=I;var U=P,G={textOn:!0,sidebarLinks:[],theme:"light"},D={textOnStatus:function(e){return e.textOn},getSidebarLinks:function(e){return e.sidebarLinks},getTheme:function(e){return e.theme}},R={SET_TEXT_ON:function(e,t){e.textOn=t},SET_SIDEBAR_LINKS:function(e,t){e.sidebarLinks=t},SET_THEME:function(e,t){e.theme=t}},A={setTextOn:function(e,t){var n=e.commit;n("SET_TEXT_ON",t)},setSidebarLinks:function(e){var t=e.commit,n=[{id:1,name:"Dashboard",icon:"home",link:""},{id:2,name:"Pages",icon:"file",link:"pages",sub:[{name:"View Pages",link:"pages",icon:"folder-open"},{name:"Create",link:"pages/create",icon:"pencil-alt"}]},{id:3,name:"Posts",icon:"file-alt",link:"posts",sub:[{name:"View Posts",link:"posts",icon:"folder-open"},{name:"Create",link:"posts/create",icon:"pencil-alt"}]},{id:4,name:"Users",icon:"users",link:"users"},{id:5,name:"Settings",icon:"tools",link:"settings"}];t("SET_SIDEBAR_LINKS",n)},setTheme:function(e,t){var n=e.commit;n("SET_THEME",t)}},N={namespaced:!0,state:G,getters:D,mutations:R,actions:A},C={users:[]},z={getUsers:function(e){return e.users}},B={SET_USERS:function(e,t){e.users=t}},M={fetchUsers:function(e){for(var t=e.commit,n=[],a=1;a<5;a++){var r={id:a,name:"User ".concat(a),username:"user".concat(a),password:"password-".concat(a),email:"user-".concat(a,"@dev.local"),role:0,image:"profile.jpeg",status:"Active"};n.push(r)}t("SET_USERS",n)}},H={namespaced:!0,state:C,getters:z,mutations:B,actions:M},Y={pages:[]},J={getPages:function(e){return e.pages}},K={SET_PAGES:function(e,t){e.pages=t}},q={fetchPages:function(e){var t=e.commit;try{for(var n=[],a=1;a<5;a++){var r={_id:a,title:"Page ".concat(a),slug:"page-".concat(a),author:1,status:a%5?"Published":"Draft",content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. "};n.push(r)}console.log(n),t("SET_PAGES",n)}catch(c){console.log(c)}}},F={namespaced:!0,state:Y,getters:J,mutations:K,actions:q},V={posts:[]},W={getPosts:function(e){return e.posts}},X={SET_POSTS:function(e,t){e.posts=t}},$={fetchPosts:function(e){for(var t=e.commit,n=[],a=1;a<5;a++){var r={_id:a,title:"Post ".concat(a),slug:"post-".concat(a),author:a%2?1:0,status:a%2?"Published":"Draft",content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. "};n.push(r)}t("SET_POSTS",n)}},Z={namespaced:!0,state:V,getters:W,mutations:X,actions:$},Q=n("a1bc"),ee=n("bc3a"),te=n.n(ee),ne={user:[],loginStatus:{error:!1,success:!1,isLogged:!1}},ae={getLoginStatus:function(e){return e.loginStatus},getLoggedUser:function(e){return e.user}},re={SET_LOGINSTATUS_ERROR:function(e,t){e.loginStatus.error=t},SET_LOGINSTATUS_EMPTY:function(e,t){e.loginStatus.empty=t},SET_LOGINSTATUS_SUCCESS:function(e,t){e.loginStatus.success=t},SET_LOGINSTATUS_ISLOGGED:function(e,t){e.loginStatus.isLogged=t},SET_USER:function(e,t){e.user=t}},ce={isUserLogged:function(e){var t=e.dispatch;null===localStorage.getItem("token")||void 0===localStorage.getItem?ue.push("/login",(function(){})):t("checkToken")},userLogin:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,r=t.email,c=t.password,0!==r.length&&0!==c.length){n.next=4;break}return n.abrupt("return",a("SET_LOGINSTATUS_EMPTY",!0));case 4:return n.prev=4,n.next=7,te.a.post("".concat(Q["a"],"/api/auth"),{email:r,password:c});case 7:if(s=n.sent,200!==s.status){n.next=18;break}return a("SET_LOGINSTATUS_ERROR",!1),a("SET_LOGINSTATUS_EMPTY",!1),a("SET_LOGINSTATUS_SUCCESS",!0),n.next=14,a("SET_LOGINSTATUS_ISLOGGED",!0);case 14:localStorage.setItem("token",s.data.token),ue.push({name:"dashboard"}),n.next=21;break;case 18:a("SET_LOGINSTATUS_ERROR",!0),a("SET_LOGINSTATUS_EMPTY",!1),a("SET_LOGINSTATUS_ISLOGGED",!1);case 21:n.next=28;break;case 23:n.prev=23,n.t0=n["catch"](4),a("SET_LOGINSTATUS_ERROR",!0),a("SET_LOGINSTATUS_EMPTY",!1),a("SET_LOGINSTATUS_ISLOGGED",!1);case 28:case"end":return n.stop()}}),n,null,[[4,23]])})))()},checkToken:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,te.a.get("".concat(Q["a"],"/api/auth"),{headers:{token:localStorage.getItem("token")}}).then((function(e){var t={id:e.data.user.id,name:e.data.user.name,email:e.data.user.email};n("SET_USER",t),n("SET_LOGINSTATUS_ISLOGGED",!0)})).catch((function(e){console.log(e),n("SET_LOGINSTATUS_ISLOGGED",!1),ue.push("/login",(function(){}))}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](1),n("SET_LOGINSTATUS_ISLOGGED",!1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()}},se={namespaced:!0,state:ne,getters:ae,mutations:re,actions:ce},oe=Object(s["a"])({state:{},mutations:{},actions:{},modules:{dashboard:N,users:H,pages:F,posts:Z,login:se}}),ie=[{path:"/",name:"dashboard",component:T,beforeEnter:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.dispatch("login/checkToken");case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/pages",children:[{path:"create",name:"createPage",component:U}],name:"pages",component:function(){return n.e("pages").then(n.bind(null,"d3d1"))},beforeEnter:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.dispatch("login/checkToken");case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{path:"/users",name:"users",component:function(){return n.e("users").then(n.bind(null,"3b3a"))},beforeEnter:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.dispatch("login/checkToken");case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{path:"/posts",children:[{path:"create",name:"createPost",component:U}],name:"posts",component:function(){return n.e("users").then(n.bind(null,"649f"))},beforeEnter:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.dispatch("login/checkToken");case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{path:"/settings",name:"settings",component:function(){return n.e("login").then(n.bind(null,"b332"))},beforeEnter:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.dispatch("login/checkToken");case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],le=Object(u["a"])({history:Object(u["b"])("/"),routes:ie}),ue=le,de=(n("2fc4"),Object(a["c"])(i));de.use(oe).use(ue).mount("#app")},"690f":function(e,t,n){var a={"./profile.jpeg":"c170"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="690f"},"6d48":function(e,t,n){"use strict";n("b0c0");var a=n("7a23"),r={class:"overflow-x-auto w-full"},c={class:"w-full whitespace-no-wrap"},s={class:"bg-gray-300 dark:border-indigo-900"},o={class:"text-xs font-semibold tracking-wide text-left text-gray-800 uppercase bg-gray-200 dark:text-gray-100"},i={key:0},l={key:1,class:"hidden"},u={class:"bg-white divide-y dark:bg-gray-900"},d={key:0},b={key:0},p={class:"flex"},f={key:1},h={key:1,class:"hidden"};function O(e,t,O,g,j,m){return Object(a["r"])(),Object(a["d"])("div",r,[Object(a["h"])("table",c,[Object(a["h"])("thead",s,[Object(a["h"])("tr",o,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(O.tableHeader,(function(e,t){return Object(a["r"])(),Object(a["d"])("th",{class:"px-4 py-3 dark:bg-indigo-900",key:t},["image"!==e.name?(Object(a["r"])(),Object(a["d"])("span",i,Object(a["B"])(e.name),1)):(Object(a["r"])(),Object(a["d"])("span",l))])})),128))])]),Object(a["h"])("tbody",u,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(O.tableData,(function(e,t){return Object(a["r"])(),Object(a["d"])("tr",{key:t,class:"text-gray-700 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-900"},[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(O.tableHeader,(function(t,r){return Object(a["r"])(),Object(a["d"])("td",{key:r,class:["name"===t.name?"flex items-center":"","px-4 py-3 dark:text-white"]},[Object(a["H"])(Object(a["h"])("span",null,[null!=e.image?(Object(a["r"])(),Object(a["d"])("img",{key:0,src:n("690f")("./".concat(e.image)),class:"mr-4 object-cover w-8 h-8 rounded-full cursor-pointer",alt:""},null,8,["src"])):Object(a["e"])("",!0)],512),[[a["E"],"name"===t.name]]),"image"!=t.name?(Object(a["r"])(),Object(a["d"])("div",d,["Object"===t.type?(Object(a["r"])(),Object(a["d"])("span",b,[Object(a["h"])("ul",p,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(e[t.name],(function(e,t){return Object(a["r"])(),Object(a["d"])("li",{key:t,class:"mr-2"},Object(a["B"])(e),1)})),128))])])):(Object(a["r"])(),Object(a["d"])("span",f,Object(a["B"])(e[t.name]),1))])):(Object(a["r"])(),Object(a["d"])("div",h))],2)})),128))])})),128))])])])}n("99af");var g={name:"Table",props:{tableData:{type:Object,default:function(){}},tableHeader:{type:Object,default:function(){}}},setup:function(){var e=function(e,t){return"".concat(e,".").concat(t)};return{joinData:e}}};g.render=O;t["a"]=g},"6d7d":function(e,t,n){"use strict";var a=n("7a23"),r={class:"pagination-wrapper dark:bg-indigo-900 dark:border-t-0 dark:border-transparent dark:text-white"},c=Object(a["h"])("span",{class:"flex items-center col-span-3"}," Showing 21-30 of 100 ",-1),s=Object(a["h"])("span",{class:"col-span-2"},null,-1),o=Object(a["h"])("span",{class:"flex col-span-4 mt-2 sm:mt-auto sm:justify-end"},[Object(a["h"])("nav",{"aria-label":"Table navigation"},[Object(a["h"])("ul",{class:"inline-flex items-center"},[Object(a["h"])("li",null,[Object(a["h"])("button",{class:"px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple","aria-label":"Previous"},[Object(a["h"])("svg",{"aria-hidden":"true",class:"w-4 h-4 fill-current",viewBox:"0 0 20 20"},[Object(a["h"])("path",{d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd","fill-rule":"evenodd"})])])]),Object(a["h"])("li",null,[Object(a["h"])("button",{class:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}," 1 ")]),Object(a["h"])("li",null,[Object(a["h"])("button",{class:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}," 2 ")]),Object(a["h"])("li",null,[Object(a["h"])("button",{class:"px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"}," 3 ")]),Object(a["h"])("li",null,[Object(a["h"])("button",{class:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}," 4 ")]),Object(a["h"])("li",null,[Object(a["h"])("span",{class:"px-3 py-1"},"...")]),Object(a["h"])("li",null,[Object(a["h"])("button",{class:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}," 8 ")]),Object(a["h"])("li",null,[Object(a["h"])("button",{class:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}," 9 ")]),Object(a["h"])("li",null,[Object(a["h"])("button",{class:"px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple","aria-label":"Next"},[Object(a["h"])("svg",{class:"w-4 h-4 fill-current","aria-hidden":"true",viewBox:"0 0 20 20"},[Object(a["h"])("path",{d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd","fill-rule":"evenodd"})])])])])])],-1);function i(e,t,n,i,l,u){return Object(a["r"])(),Object(a["d"])("div",r,[c,s,o])}var l={name:"Pagination"};l.render=i;t["a"]=l},9373:function(e,t,n){"use strict";var a=n("7a23");function r(e,t,n,r,c,s){var o=Object(a["z"])("font-awesome-icon");return Object(a["r"])(),Object(a["d"])(o,{icon:n.icon,class:n.styles},null,8,["icon","class"])}var c=n("ecee"),s=n("ad3d"),o=n("c074");c["c"].add(o["u"],o["j"],o["t"],o["g"],o["h"],o["v"],o["r"],o["b"],o["a"],o["o"],o["l"],o["q"],o["d"],o["c"],o["k"],o["f"],o["p"],o["s"],o["e"],o["n"],o["i"],o["m"]);var i={name:"Icon",props:{icon:{type:String,default:"home"},styles:{type:Array,default:function(){return[]}}},components:{FontAwesomeIcon:s["a"]}};i.render=r;t["a"]=i},a1bc:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="http://localhost:3000"},a279:function(e,t,n){"use strict";var a=n("7a23"),r={class:"main-content bg-gray-100 md:p-10 p-5 w-full overflow-x-auto dark:bg-black dark:bg-opacity-75"};function c(e,t,n,c,s,o){return Object(a["r"])(),Object(a["d"])("div",r,[Object(a["y"])(e.$slots,"default")])}var s={};s.render=c;t["a"]=s},bf62:function(e,t,n){"use strict";n("0ea6")},bfb0:function(e,t,n){"use strict";var a=n("7a23"),r={class:"box-stat dark:bg-gray-900 dark:border-gray-900 dark:text-white"},c={class:"inline-block"},s={key:0,class:"font-medium"};function o(e,t,n,o,i,l){var u=Object(a["z"])("icon");return Object(a["r"])(),Object(a["d"])("div",r,[Object(a["h"])("div",{class:[[n.bgColor,n.textColor],"flex h-12 items-center mr-4 justify-center p-3 rounded-full w-12"]},[Object(a["h"])(u,{icon:n.icon,class:["fa-fw"]},null,8,["icon"])],2),Object(a["h"])("div",c,[Object(a["h"])("h3",null,Object(a["B"])(n.title),1),null!==n.stat?(Object(a["r"])(),Object(a["d"])("h2",s,Object(a["B"])(n.stat),1)):Object(a["e"])("",!0)])])}var i=n("9373"),l={name:"BoxStat",components:{Icon:i["a"]},props:{bgColor:{type:String,default:"bg-orange-200"},textColor:{type:String,default:"text-orange-600"},icon:{type:String,default:"users"},title:{type:String,default:"Users"},stat:{type:String}}};l.render=o;t["a"]=l},c170:function(e,t,n){e.exports=n.p+"img/profile.551cb4d1.jpeg"},e3d9:function(e,t,n){"use strict";var a=n("7a23"),r={class:"dash-info bg-indigo-600 p-5 my-5 rounded-lg dark:bg-indigo-900"},c={class:"flex items-center"},s=Object(a["h"])("span",{class:"text-blue-100"},"Big news! We're excited to announce a brand new product.",-1);function o(e,t,n,o,i,l){var u=Object(a["z"])("icon");return Object(a["r"])(),Object(a["d"])("div",r,[Object(a["h"])("div",c,[Object(a["h"])(u,{icon:"bullhorn",class:["text-white","mr-5"]}),s])])}var i=n("9373"),l={name:"Info",components:{Icon:i["a"]}};l.render=o;t["a"]=l},f082:function(e,t,n){"use strict";var a=n("7a23"),r={class:"list-reset flex flex-col"};function c(e,t,n,c,s,o){var i=Object(a["z"])("Link");return Object(a["r"])(),Object(a["d"])("aside",{class:[c.textOn?"md:w-1/5":"w-10 md:w-20","sidebar transition-all duration-100"]},[Object(a["h"])("ul",r,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(c.links,(function(e){return Object(a["r"])(),Object(a["d"])("li",{class:"relative px-2 md:px-6 py-3",key:e.id},[Object(a["h"])(i,{linkData:e},null,8,["linkData"])])})),128))])],2)}var s=n("5502"),o=(n("b0c0"),n("9911"),n("4c53"),Object(a["K"])("data-v-31fe631e"));Object(a["u"])("data-v-31fe631e");var i=Object(a["h"])("span",{class:"active-link hidden absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg","aria-hidden":"true"},null,-1),l={class:"sidebar-link md:ml-4 flex justify-between flex-auto"},u=Object(a["h"])("span",{class:"active-link hidden absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg","aria-hidden":"true"},null,-1),d={class:"sidebar-link md:ml-4 flex justify-between flex-auto"},b={key:2,class:"submenu p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium  rounded-md shadow-inner bg-gray-50 dark:bg-gray-800"};Object(a["s"])();var p=o((function(e,t,n,r,c,s){var p=Object(a["z"])("icon"),f=Object(a["z"])("router-link");return Object(a["r"])(),Object(a["d"])(a["a"],null,[n.linkData.sub?(Object(a["r"])(),Object(a["d"])(f,{key:1,onClick:Object(a["J"])(r.toggleSubmenu,["prevent"]),to:"/".concat(n.linkData.link),class:"text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center dark:text-gray-600 dark:hover:text-gray-200"},{default:o((function(){return[u,Object(a["h"])(p,{icon:n.linkData.icon,class:["fa-fw"]},null,8,["icon"]),Object(a["h"])("div",d,[Object(a["h"])("span",{class:r.textOn?"":"hidden"},Object(a["B"])(n.linkData.name),3),Object(a["h"])("span",null,[Object(a["h"])(p,{icon:"plus",class:["fa-fw","text-xs","text-gray-600"]})])])]})),_:1},8,["onClick","to"])):(Object(a["r"])(),Object(a["d"])(f,{key:0,to:"/".concat(n.linkData.link),class:"text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center dark:text-gray-600 dark:hover:text-gray-200"},{default:o((function(){return[i,Object(a["h"])(p,{icon:n.linkData.icon,class:["fa-fw"]},null,8,["icon"]),Object(a["h"])("div",l,[Object(a["h"])("span",{class:r.textOn?"":"hidden"},Object(a["B"])(n.linkData.name),3),n.linkData.sub?(Object(a["r"])(),Object(a["d"])("span",{key:0,onClick:t[1]||(t[1]=function(){return r.toggleSubmenu.apply(r,arguments)})},[Object(a["h"])(p,{icon:"plus",class:["fa-fw","text-xs","text-gray-600"]})])):Object(a["e"])("",!0)])]})),_:1},8,["to"])),n.linkData.sub&&r.showSubmenu?(Object(a["r"])(),Object(a["d"])("ul",b,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.linkData.sub,(function(e,t){return Object(a["r"])(),Object(a["d"])("li",{key:t,class:"px-2 py-1 transition-colors duration-150 text-gray-500 hover:text-purple-600 dark:text-gray-600 dark:hover:text-gray-200"},[Object(a["h"])(f,{to:"/".concat(e.link),class:"w-full flex items-center justify-center"},{default:o((function(){return[Object(a["h"])(p,{icon:e.icon,class:["fa-fw","text-xs","text-gray-600"]},null,8,["icon"]),Object(a["h"])("div",{class:[r.textOn?"":"hidden","sidebar-link md:ml-2 flex justify-between flex-auto"]},[Object(a["h"])("span",null,Object(a["B"])(e.name),1)],2)]})),_:2},1032,["to"])])})),128))])):Object(a["e"])("",!0)],64)})),f=n("9373"),h={name:"Link",components:{Icon:f["a"]},emits:["togglesubmenu"],props:{linkData:{type:Object,default:function(){return{id:1,name:"Pages",icon:"home",link:"/pages"}}}},setup:function(){var e=Object(s["b"])(),t=Object(a["w"])(Object(a["b"])((function(){return e.getters["dashboard/textOnStatus"]}))),n=Object(a["w"])(!1),r=function(){n.value=!n.value};return{textOn:t,toggleSubmenu:r,showSubmenu:n}}};n("bf62");h.render=p,h.__scopeId="data-v-31fe631e";var O=h,g={name:"Sidebar",components:{Link:O},setup:function(){var e=Object(s["b"])(),t=Object(a["b"])((function(){return e.getters["dashboard/getSidebarLinks"]})),n=Object(a["w"])(Object(a["b"])((function(){return e.getters["dashboard/textOnStatus"]})));return Object(a["p"])((function(){var t=function(){var t=window.innerWidth;parseInt(t)<500&&e.dispatch("dashboard/setTextOn",!1)};t(),window.addEventListener("resize",(function(){t()}))})),{links:t,textOn:n}}};g.render=c;t["a"]=g},faf8:function(e,t,n){"use strict";var a=n("7a23"),r={class:"page-title dark:text-white"};function c(e,t,n,c,s,o){return Object(a["r"])(),Object(a["d"])("h2",r,Object(a["B"])(c.pageTitle),1)}n("fb6a"),n("ac1f"),n("5319"),n("498a");var s={name:"Title",props:{title:{type:String,default:"Page Title"}},setup:function(e){var t=Object(a["b"])((function(){var t=e.title.replace(/([A-Z])/g," $1").trim();return t.charAt(0).toUpperCase()+t.slice(1)}));return{pageTitle:t}}};s.render=c;t["a"]=s}});
//# sourceMappingURL=app.176e8876.js.map