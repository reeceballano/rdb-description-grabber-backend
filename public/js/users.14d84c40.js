(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{"3b3a":function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),n={class:"users min-h-screen flex flex-col"},l={class:"flex flex-1"};function b(t,e,c,b,o,r){var i=Object(a["z"])("Nav"),s=Object(a["z"])("Sidebar"),j=Object(a["z"])("Title"),O=Object(a["z"])("Info"),d=Object(a["z"])("MainContent");return Object(a["r"])(),Object(a["d"])("div",n,[Object(a["h"])(i),Object(a["h"])("div",l,[Object(a["h"])(s),Object(a["h"])(d,null,{default:Object(a["G"])((function(){return[Object(a["h"])(j,{title:b.title.name},null,8,["title"]),Object(a["h"])(O)]})),_:1})])])}var o=c("6c02"),r=c("5073"),i=c("f082"),s=c("faf8"),j=c("e3d9"),O=c("a279"),d={components:{Nav:r["a"],Sidebar:i["a"],Title:s["a"],Info:j["a"],MainContent:O["a"]},setup:function(){var t=Object(o["c"])(),e=t;return{title:e}}};d.render=b;e["default"]=d},"649f":function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),n={class:"posts min-h-screen flex flex-col"},l={class:"flex flex-1"},b={class:"content-section grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3"},o={class:"content-section overflow-x-auto"},r={class:"overflow-hidden rounded-lg shadow-xs w-full"};function i(t,e,c,i,s,j){var O=Object(a["z"])("Nav"),d=Object(a["z"])("Sidebar"),u=Object(a["z"])("Title"),f=Object(a["z"])("Info"),h=Object(a["z"])("router-view"),v=Object(a["z"])("BoxStat"),x=Object(a["z"])("Table"),g=Object(a["z"])("Pagination"),p=Object(a["z"])("MainContent");return Object(a["r"])(),Object(a["d"])("div",n,[Object(a["h"])(O),Object(a["h"])("div",l,[Object(a["h"])(d),Object(a["h"])(p,null,{default:Object(a["G"])((function(){return[Object(a["h"])(u,{title:i.title.name},null,8,["title"]),Object(a["h"])(f),Object(a["h"])(h),Object(a["h"])("section",b,[Object(a["h"])(v,{"bg-color":"bg-green-200","text-color":"text-green-600",title:"Published",stat:"10",icon:"file"}),Object(a["h"])(v,{"bg-color":"bg-blue-200","text-color":"text-blue-600",title:"Draft",stat:"5",icon:"file-alt"}),Object(a["h"])(v,{"bg-color":"bg-red-200","text-color":"text-red-600",title:"Deleted",stat:"5",icon:"trash-alt"})]),Object(a["h"])("section",o,[Object(a["h"])("div",r,[Object(a["h"])(x,{"table-data":i.posts,"table-header":i.postHeader},null,8,["table-data","table-header"]),Object(a["h"])(g)])])]})),_:1})])])}var s=c("5502"),j=c("6c02"),O=c("5073"),d=c("f082"),u=c("faf8"),f=c("e3d9"),h=c("a279"),v=c("bfb0"),x=c("6d48"),g=c("6d7d"),p={name:"Posts",components:{Nav:O["a"],Sidebar:d["a"],Title:u["a"],Info:f["a"],MainContent:h["a"],BoxStat:v["a"],Table:x["a"],Pagination:g["a"]},setup:function(){var t=Object(j["c"])(),e=Object(s["b"])(),c=t,n=Object(a["b"])((function(){return e.getters["posts/getPosts"]})),l=[{name:"_id"},{name:"title"},{name:"author"},{name:"status"}];return{title:c,posts:n,postHeader:l}}};p.render=i;e["default"]=p}}]);
//# sourceMappingURL=users.14d84c40.js.map