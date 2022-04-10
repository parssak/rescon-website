(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00a6685c"],{"06d0":function(e,t,a){"use strict";a("a4d3"),a("e01a");var n=a("7a23"),r={class:"relative"},s={class:"absolute inset-0"},i=["src"],c=Object(n["j"])("div",{class:"absolute inset-0 bg-gradient-to-r from-accent-grad to-transparent opacity-80","aria-hidden":"true"},null,-1),o={class:"py-8"},u=Object(n["j"])("p",{class:"text-white mb-2 tracking-wider"},"RESCON",-1),l={class:"text-4xl font-semibold tracking-wide text-white sm:text-5xl uppercase lg:text-6xl"},b={key:0,class:"mt-6 text-xl text-indigo-100 max-w-3xl"};function d(e,t,a,d,m,p){var g=Object(n["E"])("Container");return Object(n["y"])(),Object(n["i"])("div",r,[Object(n["j"])("div",s,[Object(n["j"])("img",{class:"w-full h-full object-cover",src:p.imageSrc,alt:""},null,8,i),c,Object(n["j"])("div",{class:Object(n["s"])("absolute inset-0 ".concat(p.blueBG?"bg-accent-dark":"bg-transparent"," "))},null,2)]),Object(n["m"])(g,null,{default:Object(n["L"])((function(){return[Object(n["j"])("div",o,[u,Object(n["j"])("h1",l,Object(n["G"])(a.title),1),a.description?(Object(n["y"])(),Object(n["i"])("p",b,Object(n["G"])(a.description),1)):Object(n["h"])("",!0)])]})),_:1})])}a("caad"),a("2532");var m=a("802e"),p={components:{Container:m["a"]},name:"Header",props:{title:String,description:String},computed:{imageSrc:function(){var e="/rescon-website/",t=e+"/banner/",a=this.$route.path;switch(a){case"/about/overview":return t+"about-overview.png";case"/about/boards":return t+"about-boards.png";case"/about/committees":return t+"about-committees.png";case"/about/team-members":return t+"about-team.png";case"/about/committees/anti-racism-roundtable/overview":return t+"about-arr-overview.png";case"/about/committees/anti-racism-roundtable/bipoc-initiative":return t+"about-arr-bipoc.png";case"/about/committees/anti-racism-roundtable/roundtable-members":return t+"about-arr-members.png";case"/about/committees/anti-racism-roundtable/roundtable-timeline":return t+"about-arr-timeline.png";case"/about/committees/anti-racism-roundtable/roundtable-resources":return t+"about-arr-resources.png";case"/about/committees/anti-racism-roundtable/roundtable-newsroom":return t+"about-arr-newsroom.png";case"/about/committees/building-innovation":return t+"about-innovation.png";case"/about/committees/health-and-safety":return t+"about-health.png";case"/about/committees/technical-council":return t+"about-technical.png";case"/about/committees/training-and-education":return t+"about-training.png";case"/about/our-affiliates":return t+"about-aff.png";case"/about/our-affiliates/training-and-education":return t+"about-aff-train.png";case"/about/our-affiliates/health-and-safety":return t+"about-aff-health.png";case"/about/our-affiliates/industry":return t+"about-aff-industry.png";case"/media/in-the-news":return t+"media-news.png";case"/media/press-releases":return t+"media-pr.png";case"/media/blog":return t+"media-blog.png";case"/media/videos":return t+"media-videos.png";case" /media/newsletters":return t+"media-newsletters.png";case"/submissions":return t+"submissions.png";case"/events/upcoming-events":return t+"events-upcoming.png";case"/events/past-events":return t+"events-past.png";case"/orcca":return t+"orcca.png";case"/collective-agreements":return t+"collective-agreements.png";case"/contact":return t+"contact.png";default:return t+"about-overview.png"}},blueBG:function(){var e=this.$route.path;return e.includes("/about/our-partners")}}},g=a("6b0d"),j=a.n(g);const f=j()(p,[["render",d]]);t["a"]=f},1409:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r=a("6ad7"),s=a.n(r),i=a("9f56"),c=a.n(i),o=a("c0ed"),u=a.n(o),l={class:"grid gap-8 lg:grid-cols-3"},b={class:"flex flex-col items-center"},d=Object(n["j"])("div",{class:"w-full h-64 rounded-xl overflow-hidden"},[Object(n["j"])("img",{src:s.a,alt:"hardhats in a meeting",class:"object-cover w-full h-full"})],-1),m=Object(n["j"])("h3",{class:"mt-4 mb-4 text-2xl text-center"},"Training & Education",-1),p=Object(n["j"])("p",{class:"text-center"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. ",-1),g=Object(n["l"])(" Learn More "),j={class:"flex flex-col items-center"},f=Object(n["j"])("div",{class:"w-full h-64 rounded-xl overflow-hidden"},[Object(n["j"])("img",{src:c.a,alt:"holding a hard hat",class:"object-cover w-full h-full"})],-1),O=Object(n["j"])("h3",{class:"mt-4 mb-4 text-2xl text-center"},"Training & Education",-1),v=Object(n["j"])("p",{class:"text-center"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. ",-1),h=Object(n["l"])(" Learn More "),x={class:"flex flex-col items-center"},w=Object(n["j"])("div",{class:"w-full h-64 rounded-xl overflow-hidden"},[Object(n["j"])("img",{src:u.a,alt:"hardhats-meeting",class:"object-cover w-full h-full"})],-1),y=Object(n["j"])("h3",{class:"mt-4 mb-4 text-2xl text-center"},"Training & Education",-1),L=Object(n["j"])("p",{class:"text-center"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pellentesque consectetur sagittis sapien sed sit interdum dignissim. ",-1),k=Object(n["l"])(" Learn More ");function C(e,t,a,r,s,i){var c=Object(n["E"])("Header"),o=Object(n["E"])("router-link"),u=Object(n["E"])("Container");return Object(n["y"])(),Object(n["i"])(n["a"],null,[Object(n["m"])(c,{title:"our affiliates"}),Object(n["m"])(u,null,{default:Object(n["L"])((function(){return[Object(n["j"])("div",l,[Object(n["j"])("div",b,[d,m,p,Object(n["m"])(o,{class:"btn btn-xl mt-4",to:"/about/our-affiliates/training-and-education"},{default:Object(n["L"])((function(){return[g]})),_:1})]),Object(n["j"])("div",j,[f,O,v,Object(n["m"])(o,{class:"btn btn-xl mt-4",to:"/about/our-affiliates/training-and-education"},{default:Object(n["L"])((function(){return[h]})),_:1})]),Object(n["j"])("div",x,[w,y,L,Object(n["m"])(o,{class:"btn btn-xl mt-4",to:"/about/our-affiliates/training-and-education"},{default:Object(n["L"])((function(){return[k]})),_:1})])])]})),_:1})],64)}var E=a("802e"),M=a("06d0"),S={components:{Header:M["a"],Container:E["a"]}},_=a("6b0d"),G=a.n(_);const q=G()(S,[["render",C]]);t["default"]=q},"6ad7":function(e,t,a){e.exports=a.p+"img/hardhats-meeting.29ca01ea.png"},"802e":function(e,t,a){"use strict";var n=a("7a23"),r={class:"max-w-full lg:max-w-7xl lg:mx-auto"},s={class:"relative md:p-6 w-full"};function i(e,t,a,i,c,o){return Object(n["y"])(),Object(n["i"])("section",{class:Object(n["s"])([c.additionalClasses,"py-12 px-4 sm:px-6 lg:px-8"])},[Object(n["j"])("div",r,[Object(n["j"])("div",s,[Object(n["D"])(e.$slots,"default")])])],2)}var c={name:"Container",data:function(){return{additionalClasses:this.full&&"min-h-screen"}},props:{full:{type:Boolean,default:!1}}},o=a("6b0d"),u=a.n(o);const l=u()(c,[["render",i]]);t["a"]=l},"9f56":function(e,t,a){e.exports=a.p+"img/holding-hardhat.2f23a52e.png"},c0ed:function(e,t,a){e.exports=a.p+"img/hardhats-lean.15154202.png"}}]);
//# sourceMappingURL=chunk-00a6685c.37c9cb73.js.map