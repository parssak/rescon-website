(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc39d09"],{"06d0":function(e,t,n){"use strict";n("a4d3"),n("e01a");var a=n("7a23"),c={class:"relative"},r={class:"absolute inset-0"},s=["src"],i=Object(a["j"])("div",{class:"absolute inset-0 bg-gradient-to-r from-accent-grad to-transparent opacity-80","aria-hidden":"true"},null,-1),o={class:"py-8"},u=Object(a["j"])("p",{class:"text-white mb-2 tracking-wider"},"RESCON",-1),l={class:"text-4xl font-semibold tracking-wide text-white sm:text-5xl uppercase lg:text-6xl"},b={key:0,class:"mt-6 text-xl text-indigo-100 max-w-3xl"};function d(e,t,n,d,m,p){var g=Object(a["E"])("Container");return Object(a["y"])(),Object(a["i"])("div",c,[Object(a["j"])("div",r,[Object(a["j"])("img",{class:"w-full h-full object-cover",src:p.imageSrc,alt:""},null,8,s),i,Object(a["j"])("div",{class:Object(a["s"])("absolute inset-0 ".concat(p.blueBG?"bg-accent-dark":"bg-transparent"," "))},null,2)]),Object(a["m"])(g,null,{default:Object(a["L"])((function(){return[Object(a["j"])("div",o,[u,Object(a["j"])("h1",l,Object(a["G"])(n.title),1),n.description?(Object(a["y"])(),Object(a["i"])("p",b,Object(a["G"])(n.description),1)):Object(a["h"])("",!0)])]})),_:1})])}n("caad"),n("2532");var m=n("802e"),p={components:{Container:m["a"]},name:"Header",props:{title:String,description:String},computed:{imageSrc:function(){var e="/rescon-website/",t=e+"/banner/",n=this.$route.path;switch(n){case"/about/overview":return t+"about-overview.png";case"/about/boards":return t+"about-boards.png";case"/about/committees":return t+"about-committees.png";case"/about/team-members":return t+"about-team.png";case"/about/committees/anti-racism-roundtable/overview":return t+"about-arr-overview.png";case"/about/committees/anti-racism-roundtable/bipoc-initiative":return t+"about-arr-bipoc.png";case"/about/committees/anti-racism-roundtable/roundtable-members":return t+"about-arr-members.png";case"/about/committees/anti-racism-roundtable/roundtable-timeline":return t+"about-arr-timeline.png";case"/about/committees/anti-racism-roundtable/roundtable-resources":return t+"about-arr-resources.png";case"/about/committees/anti-racism-roundtable/roundtable-newsroom":return t+"about-arr-newsroom.png";case"/about/committees/building-innovation":return t+"about-innovation.png";case"/about/committees/health-and-safety":return t+"about-health.png";case"/about/committees/technical-council":return t+"about-technical.png";case"/about/committees/training-and-education":return t+"about-training.png";case"/about/our-affiliates":return t+"about-aff.png";case"/about/our-affiliates/training-and-education":return t+"about-aff-train.png";case"/about/our-affiliates/health-and-safety":return t+"about-aff-health.png";case"/about/our-affiliates/industry":return t+"about-aff-industry.png";case"/media/in-the-news":return t+"media-news.png";case"/media/press-releases":return t+"media-pr.png";case"/media/blog":return t+"media-blog.png";case"/media/videos":return t+"media-videos.png";case" /media/newsletters":return t+"media-newsletters.png";case"/submissions":return t+"submissions.png";case"/events/upcoming-events":return t+"events-upcoming.png";case"/events/past-events":return t+"events-past.png";case"/orcca":return t+"orcca.png";case"/collective-agreements":return t+"collective-agreements.png";case"/contact":return t+"contact.png";default:return t+"about-overview.png"}},blueBG:function(){var e=this.$route.path;return e.includes("/about/our-partners")}}},g=n("6b0d"),j=n.n(g);const O=j()(p,[["render",d]]);t["a"]=O},"802e":function(e,t,n){"use strict";var a=n("7a23"),c={class:"max-w-full lg:max-w-7xl lg:mx-auto"},r={class:"relative md:p-6 w-full"};function s(e,t,n,s,i,o){return Object(a["y"])(),Object(a["i"])("section",{class:Object(a["s"])([i.additionalClasses,"py-12 px-4 sm:px-6 lg:px-8"])},[Object(a["j"])("div",c,[Object(a["j"])("div",r,[Object(a["D"])(e.$slots,"default")])])],2)}var i={name:"Container",data:function(){return{additionalClasses:this.full&&"min-h-screen"}},props:{full:{type:Boolean,default:!1}}},o=n("6b0d"),u=n.n(o);const l=u()(i,[["render",s]]);t["a"]=l},"896c":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=n("bf81"),r=n.n(c),s={class:"relative w-max"},i={class:"flex rounded-md uppercase bg-gray-100 w-max"},o=Object(a["j"])("span",{class:"px-4 py-2"}," Select time period ",-1),u=Object(a["j"])("img",{src:r.a,alt:"",class:"w-3 h-3 ml-2"},null,-1),l=["onClick"],b=Object(a["j"])("h2",{class:"mt-12"},"May 1, 2019 - April 30, 2022",-1),d={class:"grid gap-6"},m={class:"text-accent underline"};function p(e,t,n,c,r,p){var g=Object(a["E"])("Header"),j=Object(a["E"])("MenuButton"),O=Object(a["E"])("MenuItem"),v=Object(a["E"])("MenuItems"),f=Object(a["E"])("Menu"),w=Object(a["E"])("DownloadIcon"),h=Object(a["E"])("Container");return Object(a["y"])(),Object(a["i"])(a["a"],null,[Object(a["m"])(g,{title:"collective agreements"}),Object(a["m"])(h,null,{default:Object(a["L"])((function(){return[Object(a["m"])(f,null,{default:Object(a["L"])((function(){return[Object(a["j"])("div",s,[Object(a["j"])("span",i,[o,Object(a["m"])(j,{class:"bg-accent text-white px-4 py-2 rounded-r-md flex items-center"},{default:Object(a["L"])((function(){return[Object(a["l"])(Object(a["G"])(r.selected)+" ",1),u]})),_:1})]),Object(a["m"])(v,{class:"absolute top-full right-0 grid border mt-2 rounded-md bg-white shadow-sm border"},{default:Object(a["L"])((function(){return[(Object(a["y"])(!0),Object(a["i"])(a["a"],null,Object(a["C"])(r.options,(function(e){return Object(a["y"])(),Object(a["g"])(O,{key:e},{default:Object(a["L"])((function(t){var n=t.active;return[Object(a["j"])("button",{class:Object(a["s"])("px-2 py-1 ".concat(n?"bg-accent-lightest":"")),onClick:function(){return p.setSelected(e)}},Object(a["G"])(e),11,l)]})),_:2},1024)})),128))]})),_:1})])]})),_:1}),b,Object(a["j"])("div",d,[(Object(a["y"])(!0),Object(a["i"])(a["a"],null,Object(a["C"])(r.newsletters,(function(e,t){return Object(a["y"])(),Object(a["i"])("a",{key:t,class:"flex items-center space-x-2",href:"#"},[Object(a["m"])(w,{class:"w-7 h-7 text-accent"}),Object(a["j"])("p",m,Object(a["G"])(e)+" "+Object(a["G"])(r.selected),1)])})),128))])]})),_:1})],64)}var g=n("802e"),j=n("06d0"),O=n("d511"),v=n("ee9d"),f=["2017","2018","2019","2020","2021","2022"],w=["DRCLB Collective Agreement","MTABA Collective Agreement","TRCLB Collective Agreement","DRCLB Collective Agreement","MTABA Collective Agreement","TRCLB Collective Agreement","DRCLB Collective Agreement","MTABA Collective Agreement","TRCLB Collective Agreement","DRCLB Collective Agreement","MTABA Collective Agreement","TRCLB Collective Agreement","DRCLB Collective Agreement","MTABA Collective Agreement","TRCLB Collective Agreement"],h={components:{Header:j["a"],Container:g["a"],Menu:O["d"],MenuButton:O["e"],MenuItems:O["g"],MenuItem:O["f"],DownloadIcon:v["a"]},data:function(){return{options:f,selected:"2020",newsletters:w}},methods:{setSelected:function(e){this.selected=e}}},C=n("6b0d"),x=n.n(C);const A=x()(h,[["render",p]]);t["default"]=A},bf81:function(e,t,n){e.exports=n.p+"img/down.30fdbeae.svg"},ee9d:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("7a23");function c(e,t){return Object(a["y"])(),Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[Object(a["m"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})])}}}]);
//# sourceMappingURL=chunk-0bc39d09.d938bf5b.js.map