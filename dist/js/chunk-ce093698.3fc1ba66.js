(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce093698"],{"06d0":function(e,t,n){"use strict";n("a4d3"),n("e01a");var a=n("7a23"),r={class:"relative"},i={class:"absolute inset-0"},s=["src"],c=Object(a["j"])("div",{class:"absolute inset-0 bg-gradient-to-r from-accent-grad to-transparent opacity-80","aria-hidden":"true"},null,-1),o={class:"py-8"},u=Object(a["j"])("p",{class:"text-white mb-2 tracking-wider"},"RESCON",-1),l={class:"text-4xl font-semibold tracking-wide text-white sm:text-5xl uppercase lg:text-6xl"},b={key:0,class:"mt-6 text-xl text-indigo-100 max-w-3xl"};function d(e,t,n,d,m,p){var g=Object(a["E"])("Container");return Object(a["y"])(),Object(a["i"])("div",r,[Object(a["j"])("div",i,[Object(a["j"])("img",{class:"w-full h-full object-cover",src:p.imageSrc,alt:""},null,8,s),c,Object(a["j"])("div",{class:Object(a["s"])("absolute inset-0 ".concat(p.blueBG?"bg-accent-dark":"bg-transparent"," "))},null,2)]),Object(a["m"])(g,null,{default:Object(a["L"])((function(){return[Object(a["j"])("div",o,[u,Object(a["j"])("h1",l,Object(a["G"])(n.title),1),n.description?(Object(a["y"])(),Object(a["i"])("p",b,Object(a["G"])(n.description),1)):Object(a["h"])("",!0)])]})),_:1})])}n("caad"),n("2532");var m=n("802e"),p={components:{Container:m["a"]},name:"Header",props:{title:String,description:String},computed:{imageSrc:function(){var e="/rescon-website/",t=e+"/banner/",n=this.$route.path;switch(n){case"/about/overview":return t+"about-overview.png";case"/about/boards":return t+"about-boards.png";case"/about/committees":return t+"about-committees.png";case"/about/team-members":return t+"about-team.png";case"/about/committees/anti-racism-roundtable/overview":return t+"about-arr-overview.png";case"/about/committees/anti-racism-roundtable/bipoc-initiative":return t+"about-arr-bipoc.png";case"/about/committees/anti-racism-roundtable/roundtable-members":return t+"about-arr-members.png";case"/about/committees/anti-racism-roundtable/roundtable-timeline":return t+"about-arr-timeline.png";case"/about/committees/anti-racism-roundtable/roundtable-resources":return t+"about-arr-resources.png";case"/about/committees/anti-racism-roundtable/roundtable-newsroom":return t+"about-arr-newsroom.png";case"/about/committees/building-innovation":return t+"about-innovation.png";case"/about/committees/health-and-safety":return t+"about-health.png";case"/about/committees/technical-council":return t+"about-technical.png";case"/about/committees/training-and-education":return t+"about-training.png";case"/about/our-affiliates":return t+"about-aff.png";case"/about/our-affiliates/training-and-education":return t+"about-aff-train.png";case"/about/our-affiliates/health-and-safety":return t+"about-aff-health.png";case"/about/our-affiliates/industry":return t+"about-aff-industry.png";case"/media/in-the-news":return t+"media-news.png";case"/media/press-releases":return t+"media-pr.png";case"/media/blog":return t+"media-blog.png";case"/media/videos":return t+"media-videos.png";case" /media/newsletters":return t+"media-newsletters.png";case"/submissions":return t+"submissions.png";case"/events/upcoming-events":return t+"events-upcoming.png";case"/events/past-events":return t+"events-past.png";case"/orcca":return t+"orcca.png";case"/collective-agreements":return t+"collective-agreements.png";case"/contact":return t+"contact.png";default:return t+"about-overview.png"}},blueBG:function(){var e=this.$route.path;return e.includes("/about/our-partners")}}},g=n("6b0d"),f=n.n(g);const j=f()(p,[["render",d]]);t["a"]=j},"12a2":function(e,t,n){},"6b72":function(e,t,n){"use strict";n("12a2")},"802e":function(e,t,n){"use strict";var a=n("7a23"),r={class:"max-w-full lg:max-w-7xl lg:mx-auto"},i={class:"relative md:p-6 w-full"};function s(e,t,n,s,c,o){return Object(a["y"])(),Object(a["i"])("section",{class:Object(a["s"])([c.additionalClasses,"py-12 px-4 sm:px-6 lg:px-8"])},[Object(a["j"])("div",r,[Object(a["j"])("div",i,[Object(a["D"])(e.$slots,"default")])])],2)}var c={name:"Container",data:function(){return{additionalClasses:this.full&&"min-h-screen"}},props:{full:{type:Boolean,default:!1}}},o=n("6b0d"),u=n.n(o);const l=u()(c,[["render",s]]);t["a"]=l},bf7b:function(e,t,n){e.exports=n.p+"img/small-meeting.d5be41a1.png"},d794:function(e,t,n){"use strict";n("a4d3"),n("e01a");var a=n("7a23"),r={class:"grid gap-12 lg:grid-cols-2"},i=["innerHTML"],s={class:"object-cover w-full h-full rounded-xl overflow-hidden"};function c(e,t,n,c,o,u){var l=Object(a["E"])("Container");return Object(a["y"])(),Object(a["g"])(l,{class:Object(a["s"])(n.dark&&"bg-accent-dark")},{default:Object(a["L"])((function(){return[Object(a["j"])("div",r,[Object(a["j"])("section",{class:Object(a["s"])([n.flip&&"lg:order-1","lg:py-24"])},[Object(a["j"])("h2",{class:Object(a["s"])(n.dark&&"text-white")},Object(a["G"])(n.title),3),Object(a["j"])("p",{class:Object(a["s"])(n.dark&&"text-white")},[Object(a["j"])("span",{innerHTML:n.description},null,8,i)],2),Object(a["D"])(e.$slots,"extra-content")],2),Object(a["j"])("section",null,[Object(a["j"])("div",s,[Object(a["D"])(e.$slots,"default")])])])]})),_:3},8,["class"])}var o=n("802e"),u={components:{Container:o["a"]},props:{title:{type:String,default:"Title"},description:{type:String,default:"Description"},flip:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}}},l=(n("6b72"),n("6b0d")),b=n.n(l);const d=b()(u,[["render",c]]);t["a"]=d},ebe6:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=n("bf7b"),i=n.n(r),s=Object(a["j"])("img",{src:i.a,alt:"small meeting",class:"w-full h-full object-cover"},null,-1),c=Object(a["j"])("h3",null,"Our Commitment",-1),o=Object(a["j"])("p",null," The RESCON Anti-Racism Roundtable will provide a forum for leading industry associations to work together to address the immediate challenges of systemic and overt anti-Black racism in the construction industry while consistently fostering diversity, equity, and inclusion of all underrepresented minorities within our workforce for the long term. ",-1),u=Object(a["j"])("h3",{class:"mt-12 md:mt-20"},"Our Approach",-1),l=Object(a["j"])("p",null," The RESCON CARE Anti-Racism Roundtable brings together Builders, Sub-Trades, Education Stakeholders, Employment Agencies, the Provincial and Municipal Government, and Unions to develop short- and long-term goals surrounding racism in construction. ",-1);function b(e,t,n,r,i,b){var d=Object(a["E"])("Header"),m=Object(a["E"])("Split"),p=Object(a["E"])("Container");return Object(a["y"])(),Object(a["i"])(a["a"],null,[Object(a["m"])(d,{title:"Anti-Racism Roundtable"}),Object(a["m"])(m,{flip:!0,title:"opening statement",description:'RESCON is proud of the incredibly diverse and multicultural workforce in the construction industry. We acknowledge that having people from all backgrounds highly benefits our industry, as it offers unique perspectives that lead to new innovative ideas. Our ability to work together and respect each other has been the backbone of achieving excellence in construction and continues to help us better serve the communities in which we build. <br><br> RESCON has always taken a leadership role in the fight against racism and discrimination. Any form of racism, discrimination or hate is not welcome in the construction industry. <br><br> RESCON, representing more than 200 residential builders in the province, along with members of its Anti-Racism Roundtable are " Construction Against Racism Everywhere" (CARE).'},{default:Object(a["L"])((function(){return[s]})),_:1}),Object(a["m"])(p,{class:"bg-accent-lightest"},{default:Object(a["L"])((function(){return[c,o,u,l]})),_:1})],64)}var d=n("802e"),m=n("d794"),p=n("06d0"),g={components:{Header:p["a"],Split:m["a"],Container:d["a"]}},f=n("6b0d"),j=n.n(f);const h=j()(g,[["render",b]]);t["default"]=h}}]);
//# sourceMappingURL=chunk-ce093698.3fc1ba66.js.map