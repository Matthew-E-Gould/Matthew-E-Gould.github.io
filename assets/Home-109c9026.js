import{d as O,p as x,m as E,a as te,b as N,c as oe,g as F,e as ie,u as ne,f as ae,h as se,t as S,i as j,j as T,k as t,l as V,I as q,n as $,o as J,q as K,r as le,s as W,v as re,w as de,V as Y,x as Q,y as ce,z as ue,A as me,B as X,C as A,_ as Z,D as h,E as f,F as a,G as C,H as _,J as I,K as m,L as B,M as w,N as ge,O as he,P as pe,Q as H,R as fe,S as ve,T as ye,U as G,W as we,X as be,Y as ke,Z as M,$ as v,a0 as Ce,a1 as R,a2 as z,a3 as U,a4 as _e,a5 as Ie,a6 as Se,a7 as De,a8 as Ve,a9 as xe}from"./index-6ed37db2.js";import{V as y}from"./VSheet-49de4e0e.js";import{m as Fe,V as Te,a as L,f as Re}from"./forwardRefs-c3c2df1c.js";const je=O("experienceTimelineEntries",{state:()=>({entries:[{color:"green",year:"2019",title:"USW Graduation",description:"Graduated With a First Masters In Computer Sciences"},{color:"green",year:"",title:"Started at Alacrity",description:"Alacrity provides graduates with 'demand-lead businesses' provided by strategic partners. Graduates then develop teams and then work to solutions in hopes of developing Software As A Service (saas) products"},{color:"green",year:"",title:"Co-Founded Finative",description:"Co-founded with 4 other people, I took the Role as Sole software Developer for the team"},{color:"amber",year:"2020",title:"Moved to a Remote Work-Style",description:"During the pandemic I worked with teammates and employees to develop and deliver features that were outlined in our product specs"},{color:"amber",year:"2021",title:"Finative Undergoes Structural Changes",description:"We had lost 2 of our co-founders but we able to secure a grant from Alacrity to hire 2 developers."},{color:"red",year:"2021",title:"Finative Closes",description:"I was the last founder of Finative, since I had been handling the development team and had not built a relationship with our target clients I deemed that it would be best to close the company as there was little runway left"},{color:"blue",year:"2021",title:"Restarted Doing Freelance Work",description:""},{color:"green",year:"",title:"Joined RECOVAR as a late Co-Founder",description:"Joined a team of 3 people, in this team I was lead developer alongside 2 other developers"},{color:"blue",year:"",title:"RECOVAR Declines Seed Funding Valuating it at £500K",description:""},{color:"red",year:"",title:"RECOVAR Closes",description:"Due to complications around what our strategic partner wanted and understood about the development of the product, we deemed it best to close RECOVAR as personal finances started to run dry for all founders."},{color:"blue",year:"",title:"Another Return to Freelance Work",description:""},{color:"green",year:"2023",title:"Worked as a senior developer at Haelu",description:""},{color:"blue",year:"",title:"Started Doing Games Dev Projects in Godot",description:""},{color:"blue",year:"",title:"Redesigned CV Site",description:"A complete UI overhaul including making the entire site an SPA running in the newest Vuetify version."},{color:"blue",year:"2024",title:"Expanded my Understanding of Games Development",description:"By understanding and producing the admin of the discipline like, games briefs and specs, I further my understanding of games development and project management."}]}),actions:{},getters:{}});const Ae=x({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...E(),...te(),...N(),...oe()},"VTimeline"),Ee=F()({name:"VTimeline",props:Ae(),setup(e,s){let{slots:i}=s;const{themeClasses:c}=ie(e),{densityClasses:l}=ne(e),{rtlClasses:n}=ae();se({VTimelineDivider:{lineColor:S(e,"lineColor")},VTimelineItem:{density:S(e,"density"),lineInset:S(e,"lineInset")}});const r=j(()=>{const o=e.side?e.side:e.density!=="default"?"end":null;return o&&`v-timeline--side-${o}`}),u=j(()=>{const o=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return o;case"start":return o[0];case"end":return o[1];default:return null}});return T(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,u.value,{"v-timeline--inset-line":!!e.lineInset},c.value,l.value,r.value,n.value,e.class],style:[{"--v-timeline-line-thickness":V(e.lineThickness)},e.style]},i)),{}}}),Pe=x({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:q,iconColor:String,lineColor:String,...E(),...$(),...J(),...K()},"VTimelineDivider"),We=F()({name:"VTimelineDivider",props:Pe(),setup(e,s){let{slots:i}=s;const{sizeClasses:c,sizeStyles:l}=le(e,"v-timeline-divider__dot"),{backgroundColorStyles:n,backgroundColorClasses:r}=W(S(e,"dotColor")),{roundedClasses:u}=re(e,"v-timeline-divider__dot"),{elevationClasses:o}=de(e),{backgroundColorClasses:d,backgroundColorStyles:g}=W(S(e,"lineColor"));return T(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",d.value],style:g.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",o.value,u.value,c.value],style:l.value},[t("div",{class:["v-timeline-divider__inner-dot",r.value,u.value],style:n.value},[i.default?t(Q,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(Y,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",d.value],style:g.value},null)])),{}}}),Be=x({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:q,iconColor:String,lineInset:[Number,String],...E(),...ce(),...K(),...$(),...J(),...N()},"VTimelineItem"),He=F()({name:"VTimelineItem",props:Be(),setup(e,s){let{slots:i}=s;const{dimensionStyles:c}=ue(e),l=me(0),n=X();return A(n,r=>{var u;r&&(l.value=((u=r.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:u.getBoundingClientRect().width)??0)},{flush:"post"}),T(()=>{var r,u;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":V(l.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${V(e.lineInset)})`:V(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:c.value},[(r=i.default)==null?void 0:r.call(i)]),t(We,{ref:n,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((u=i.opposite)==null?void 0:u.call(i))])])}),{}}}),Ge={props:["sheetColor"],data:()=>({timelineStore:je()}),computed:{entries(){return this.timelineStore.entries}},methods:{getFlex(e){return e%2?"justify-end":"justify-start"}}},Me=m("h1",null,"Experience Timeline",-1),ze=["textContent"];function Ue(e,s,i,c,l,n){return h(),f(y,{color:i.sheetColor,class:"pa-4"},{default:a(()=>[t(y,{color:i.sheetColor==="grey-lighten-4"?"grey-lighten-2":"grey",rounded:"pill",class:"px-2 mx-1 mb-2"},{default:a(()=>[Me]),_:1},8,["color"]),t(Ee,{align:"start",class:"px-2"},{default:a(()=>[(h(!0),C(I,null,_(n.entries,(r,u)=>(h(),f(He,{key:u,"dot-color":r.color,size:"small"},{opposite:a(()=>[m("div",{class:B(`pt-1 headline font-weight-bold text-${r.color}`),textContent:w(r.year)},null,10,ze)]),default:a(()=>[m("div",null,[m("h2",{class:B(`mt-n1 headline font-weight-light mb-4 text-${r.color} d-flex ${n.getFlex(u)}`)},w(r.title),3),m("div",null,w(r.description),1)])]),_:2},1032,["dot-color"]))),128))]),_:1})]),_:1},8,["color"])}const Le=Z(Ge,[["render",Ue]]),Oe=O("homeList",{state:()=>({rows:[{title:"Skills",cardWidths:"400",cardHeights:"300",entries:[{textColor:"#FFF",image:"src/assets/images/skills/dev.jpg",title:"Software Development",confidence:5,content:["Passionate for software development and found joy in programming, whether in profession, education or recreation.","Developed software in his own time towards the end of collage and throughout university.","While working at Finative, I produced a working product (that was used in internal betas), that was constantly updated with new features, as a project leader for 14 months."]},{textColor:"#FFF",image:"src/assets/images/skills/remote.jpg",title:"Remote Work",confidence:5,content:["Let's be honest, everyone has had to get used to working on a remote environment in 2020, for me that started in March when the Alacrity foundation went into lock-down, since then I have also experienced losing teammates, hiring new team, training new team and giving meaningful feedback to teammates.","As an individual that plays video games, I am comfortable with communicating concisely in many varieties over the internet.","I am also very comfortable with working in-person."]},{textColor:"#FFF",image:"src/assets/images/skills/security.jpg",title:"Software Security",confidence:4,content:["Had training on secure systems concepts during formal years at University.","Moved on to apply the learnt concepts to personal and professional projects through use of middleware, policies and input validation to assure that systems were secure.","I am looking into cryptology at a further level so that improved decisions can be made about when, where & how to use cryptography in the future."]},{textColor:"#FFF",image:"src/assets/images/skills/printer.jpg",title:"CAD & 3D Printing",confidence:4.5,content:["Trained in engineering for 4 years and can use CAD software to follow engineering specifications.","Owns a 3D printer and has learnt to work with slicing tools to improve the quality of models.","Can improve production time and improve quality of post print builds by using different scaffolding structures and hardware."]},{textColor:"#FFF",image:"src/assets/images/skills/networkSec.jpg",title:"Network Security & IT",confidence:3.5,content:["Maintains a home network that implements automated monitoring and alerts.","Hosted Servers and have had them connected by external users via port forwarding and cloud hosting.","Used raspberry pi's to assure network traffic is safe and filters out content from undesired domains using PiHole."]}]},{title:"Previous Positions & Projects",titleBtn:"Previous Work",cardWidths:"215",cardHeights:"200",entries:[{textColor:"#000",image:"src/assets/images/work/haelu.jpg",title:"Haelu",link:"https://haelu.co.uk/",subtitle:"Health platform to help track post-hospital recuperation of patients",content:["Helped Haelu architect and build a new product from the ground up","Aided in training new staff for their product development","Attended regular meetings about the products development and progress"]},{textColor:"#F00",image:"src/assets/images/work/initia.jpg",title:"Initia",subtitle:"HR platform to help companies track the security clearing process of new employees",content:["Helped Initia develop their product ready for a state of release","Implemented updated components that follow DRY principles"]},{textColor:"#000",image:"",title:"myCrypting",link:"",subtitle:"Accounting platform to help track assets bought on coinbase",content:["Developed clear statistical analysis of the cryptocurrencies that people were holding on coinbase","Clear instructions on how to populate the site with data","Serverless architecture","I would have liked to develop the platform to work with multiple exchanges"]},{textColor:"#F58641",image:"src/assets/images/work/recovar.jpg",title:"RECOVAR",subtitle:"Software to assist with the decommission of old equipment at sites",content:["Attended key stakeholder meetings","Attended board meetings","Developed a website and mobile application that would work in tandem to aid in the decommissioning process","Data-mined the locations of decommissioning sites for key stakeholder"]},{textColor:"#000",image:"",title:"Web trawler",link:"https://github.com/Matthew-E-Gould/Keyword_based_webcrawler",subtitle:"Input keyword(s) you're looking for and a starting site and find linked pages that contained those keyword(s)",content:["Developed a solution that would work on both the dark web and clear web","Would return data on what web pages were linked together and which web pages had your desired keyword(s)","Would have liked to have built out an responsive UI that would allow you to better visualise the data"]},{textColor:"#000",image:"src/assets/images/work/intuitix.jpg",title:"Intuitix",link:"https://intuitix.co/",subtitle:"Innovation management platform for large companies",content:["Implemented site polling so that users were kept up to date","Developed multi-threaded processes to reduce data analysis times","Code optimisation"]},{textColor:"#000",image:"src/assets/images/work/finative.jpg",title:"Finative",subtitle:"Client portal for brokerages",content:[]},{textColor:"#000",image:"",title:"Dice Game",subtitle:"2019 summer project",content:["Implemented use of polymorphism to give dice different characteristics with minimal code","Implemented an inventory system so players could keep their dice","Implemented a saving and loading system so that users could resume their game","Implemented Virtual Intelligence that would make different enemies play differently","I would have like to of developed a user interface that users could interact with"]},{textColor:"#000",image:"",title:"Smart Home Alarm",subtitle:"Masters Dissertation",content:["Implemented a system on the raspberry pi","Recognition of faces so that the system could determine if people were meant to be there","Developed biometric system that would allow for users to see information about a person if they wanted to file a report"]},{textColor:"#000",image:"",title:"Minesweeper",subtitle:"2018 summer project",link:"https://github.com/Matthew-E-Gould/MultiSweeper",content:["Built in python","Developed to work on on multiple platforms","Would have liked to implement a turn-based multiplayer system"]}]},{title:"Education",cardWidths:"200",cardHeights:"200",entries:[{textColor:"#000",image:"src/assets/images/edu/alacrity.jpg",title:"Alacrity",dialogTitle:"The Alacrity foundation",subtitle:"2019 - 2021",link:"https://alacrityfoundation.co.uk/",content:["Technical lead","Incubator that helped post-grads make their way to entrepreneurship","Worked with co-founders to start 2 companies","Runner up for rising star in the welsh start up awards","Presented ideas to the foundation and to teams","Helped other teams with issues","Helped other 'students' during the bootcamp","1st company, Finative, did not receive seed investment because I was the only founder left","2nd company, RECOVAR, declined seed funding because we felt that our issue was that our first customer, whom helped us develop the product had no intentions of buying it","Technical lead for both Finative and RECOVAR"]},{textColor:"#0FF",image:"src/assets/images/edu/usw.jpg",title:"USW",dialogTitle:"University of South Wales",link:"https://www.southwales.ac.uk/",subtitle:"2015 - 2019",content:["During collage I found a fondness towards software development so I decided to study computer science during university.","Bsc - 2:1","Masters - 1st"]},{textColor:"#000",image:"src/assets/images/edu/bte.jpg",title:"BTE",dialogTitle:"Bristol Technology and Engineering Academy",subtitle:"2013 - 2015",content:["Went to an engineering collage for A-levels and to further my studies in engineering.","Studied, Engineering, Physics and Maths"]},{textColor:"#000",image:"src/assets/images/edu/rgs.jpg",title:"RGS",dialogTitle:"Redland Green School",subtitle:"2008 - 2013",link:"https://www.redlandgreen.bristol.sch.uk/",content:["Going to school I discovered interests in computers and engineering, however a course was not available around computers at GCSE.","9 GCSEs graded A* - C"]}]},{title:"Hobbies",cardWidths:"300",cardHeights:"200",entries:[{textColor:"#FFF",image:"src/assets/images/skills/dev.jpg",title:"Software Development",content:[]},{textColor:"#F0F",image:"src/assets/images/hobbies/motorbike.jpg",title:"Motorbiking",content:[]},{textColor:"#FFF",image:"src/assets/images/hobbies/telescope.jpg",title:"Astronomy",content:[]},{textColor:"#FFF",image:"src/assets/images/hobbies/game.jpg",title:"Video Gaming",content:[]}]}]}),actions:{},getters:{}});const Ne=x({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Fe({origin:"center center",scrollStrategy:"block",transition:{component:Te},zIndex:2400})},"VDialog"),qe=F()({name:"VDialog",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:i}=s;const c=ge(e,"modelValue"),{scopeId:l}=he(),n=X();function r(o){var b,k;const d=o.relatedTarget,g=o.target;if(d!==g&&((b=n.value)!=null&&b.contentEl)&&((k=n.value)!=null&&k.globalTop)&&![document,n.value.contentEl].includes(g)&&!n.value.contentEl.contains(g)){const D=ve(n.value.contentEl);if(!D.length)return;const P=D[0],ee=D[D.length-1];d===P?ee.focus():P.focus()}}pe&&A(()=>c.value&&e.retainFocus,o=>{o?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0}),A(c,async o=>{var d,g;await fe(),o?(d=n.value.contentEl)==null||d.focus({preventScroll:!0}):(g=n.value.activatorEl)==null||g.focus({preventScroll:!0})});const u=j(()=>H({"aria-haspopup":"dialog","aria-expanded":String(c.value)},e.activatorProps));return T(()=>{const o=L.filterProps(e);return t(L,H({ref:n,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},o,{modelValue:c.value,"onUpdate:modelValue":d=>c.value=d,"aria-modal":"true",activatorProps:u.value,role:"dialog"},l),{activator:i.activator,default:function(){for(var d=arguments.length,g=new Array(d),b=0;b<d;b++)g[b]=arguments[b];return t(Q,{root:"VDialog"},{default:()=>{var k;return[(k=i.default)==null?void 0:k.call(i,...g)]}})}})}),Re({},n)}}),$e={name:"Home",props:{},emits:[],data(){return{currentDialog:null,homeListStore:Oe()}},mounted(){},methods:{decide(e=[!0,!1],s=-1){let i=null;return s===-1?i=e[this.getRndInteger(0,e.length)]:i=e[s%e.length+1],i},getRndInteger(e=0,s=1){return Math.floor(Math.random()*(s-e))+e},entryClicked(e){this.currentDialog=e},closeDialogue(){this.currentDialog=!1},getStar(e,s){let i=s-(e-1),c="mdi-";return i>=1?c+="star":i>0?c+="star-half-full":c+="star-outline",c},linkClicked(e){window.open(e,"_blank").focus()},scrollToRow(e){document.getElementById(e.title).scrollIntoView()}},computed:{rows(){return this.homeListStore.rows}},watch:{template(e,s){}},components:{GenericItemCard:ye,WorkTimeline:Le}},p=e=>(Ve("data-v-42236d9d"),e=e(),xe(),e),Je=p(()=>m("h1",null,"About Me",-1)),Ke=p(()=>m("p",{class:"pl-2"},"Welcome to my digital space! I'm a Computer Science master's graduate with a penchant for blazing trails in the tech world. Two startup ventures might not have panned out, but they've been my greatest teachers, fueling my appetite for risk and challenge.",-1)),Ye=p(()=>m("p",{class:"pl-2"},"I thrive in the world of code, leading from the front with hands-on experience in steering development teams. From freelancing adventures to personal coding projects, I don't just embrace challenges — I code them into elegant solutions.",-1)),Qe=p(()=>m("p",{class:"pl-2"},"My journey began in a non-traditional way; I Started in the realms of engineering and 3D printing, combining creativity and technical finesse. Each project is a canvas, and I'm here to paint a better future.",-1)),Xe=p(()=>m("p",{class:"pl-2"},"Whether you're a fellow enthusiast, a potential collaborator, or someone seeking a unique perspective in the tech realm, let's connect and explore the endless possibilities together.",-1)),Ze=p(()=>m("p",{class:"pl-2 pt-4"},[m("b",null,[m("u",null,"TL;DR:")]),v(" Unstoppable techie with a Master's in Computer Science, that has a wide variety of skills in a tight-nit field of subjects. I will not stop learning and becoming the best version of myself that I can. I am quickly learning that failure does breed greatness.")],-1)),et=p(()=>m("h1",null,"What I'm doing right now",-1)),tt=p(()=>m("p",{class:"pl-2"},"I am currently working on games development and this CV site. From my experience I have found that working for myself was really rewarding so I want to do this in a field that I have great respect for and devote a bit of my consumer time in.",-1)),ot=p(()=>m("p",{class:"pl-2"},"I am also working on this website, upcoming features include a dev-blog, an ARG experience, and an expansion to the UI to be mobile friendly.",-1)),it=p(()=>m("p",{class:"pl-2"},"Finally, I am also working on improving my local networks functionality and security.",-1));function nt(e,s,i,c,l,n){const r=G("GenericItemCard"),u=G("WorkTimeline");return h(),f(we,{id:"inspire"},{default:a(()=>[t(be,null,{default:a(()=>[t(y,{color:"grey-lighten-2",class:"pa-4"},{default:a(()=>[t(y,{color:"grey",rounded:"pill",class:"px-2 mx-1 mb-2"},{default:a(()=>[Je]),_:1}),Ke,Ye,Qe,Xe,Ze]),_:1}),(h(!0),C(I,null,_(n.rows,(o,d)=>(h(),f(y,{key:d,class:"mx-auto pa-2 pt-6",color:d%2?"grey-lighten-2":"grey-lighten-4"},{default:a(()=>[t(y,{color:d%2?"grey":"grey-lighten-2",rounded:"pill",class:"px-2 mx-1 mb-2",id:o.title},{default:a(()=>[v(w(`${o.title} (${o.entries.length} items)`),1)]),_:2},1032,["color","id"]),t(Se,{"show-arrows":""},{default:a(()=>[(h(!0),C(I,null,_(o.entries,g=>(h(),f(r,{key:g.title,entry:g,row:o,onCustomClick:n.entryClicked},null,8,["entry","row","onCustomClick"]))),128))]),_:2},1024)]),_:2},1032,["color"]))),128)),t(u,{sheetColor:"grey-lighten-4"}),t(y,{color:"grey-lighten-2",class:"pa-4 pb-16"},{default:a(()=>[t(y,{color:"grey",rounded:"pill",class:"px-2 mx-1 mb-2"},{default:a(()=>[et]),_:1}),tt,ot,it]),_:1})]),_:1}),t(qe,{modelValue:l.currentDialog,"onUpdate:modelValue":s[2]||(s[2]=o=>l.currentDialog=o),width:"720"},{default:a(()=>[t(ke,null,{default:a(()=>[t(M,null,{default:a(()=>[v(w(l.currentDialog.dialogTitle!=null?l.currentDialog.dialogTitle:l.currentDialog.title),1)]),_:1}),l.currentDialog.subtitle!=null?(h(),f(Ce,{key:0},{default:a(()=>[v(w(l.currentDialog.subtitle),1)]),_:1})):R("",!0),l.currentDialog.link!=null?(h(),f(z,{key:1,variant:"text",onClick:s[0]||(s[0]=o=>n.linkClicked(l.currentDialog.link)),"append-icon":"mdi-open-in-new",class:"mt-4"},{default:a(()=>[v(w(l.currentDialog.link),1)]),_:1})):R("",!0),l.currentDialog.confidence!=null?(h(),f(M,{key:2},{default:a(()=>[v(" Confidence: "),(h(),C(I,null,_(5,o=>t(Y,{icon:n.getStar(o,l.currentDialog.confidence)},null,8,["icon"])),64))]),_:1})):R("",!0),t(U),t(_e,null,{default:a(()=>[t(Ie,{lines:"two"},{default:a(()=>[(h(!0),C(I,null,_(l.currentDialog.content,(o,d)=>(h(),f(De,{key:d,"prepend-icon":"mdi-circle"},{default:a(()=>[v(w(o),1)]),_:2},1024))),128))]),_:1})]),_:1}),t(U),t(z,{variant:"text",onClick:s[1]||(s[1]=o=>n.closeDialogue())},{default:a(()=>[v(" Close ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const rt=Z($e,[["render",nt],["__scopeId","data-v-42236d9d"]]);export{rt as default};