import{_ as g,r as p,a as y}from"./AppLayout-e3f92703.js";import{o as s,c as r,w as l,a as e,b as c,g as h,u as i,k as d,e as a,h as f,F as x,f as b,t as m,l as u,n as v}from"./app-de50fa47.js";const w={class:"flex flex-row items-center gap-6"},k=e("h2",{class:"font-semibold text-xl text-gray-800 text-gray-200 leading-tight"}," Areas ",-1),A={class:"px-4 sm:px-6 lg:px-8"},L={class:"sm:flex sm:items-center"},N=e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-base font-semibold leading-6 text-gray-900"},"Areas"),e("p",{class:"mt-2 text-sm text-gray-700"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. ")],-1),B={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},T={class:"mt-8 flow-root"},C={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},H={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},M={class:"min-w-full divide-y divide-gray-300"},V=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"},"Name (Ar)"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Name (En)"),e("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-0"},[e("span",{class:"sr-only"},"Edit")])])],-1),E={class:"divide-y divide-gray-200 bg-white"},j={class:"whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"},D={class:"flex items-center"},F={class:"ml-4"},$={class:"font-medium text-gray-900"},z={class:"mt-1 text-gray-500"},I={class:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},O={class:"text-gray-900"},S={class:"mt-1 text-gray-500"},U={class:"flex flex-row items-center justify-end py-5 pr-4 space-x-4 text-sm font-medium"},q={key:0},G={class:"flex flex-wrap -mb-1"},J=["innerHTML"],R={__name:"Index",props:{city:Object,areas:Array,filters:Array},setup(o){return(n,K)=>(s(),r(g,{title:"Users"},{header:l(()=>[e("div",w,[c(i(d),{href:n.route("cities.index"),class:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:l(()=>[h(" Back to cities ")]),_:1},8,["href"]),k])]),default:l(()=>[e("div",A,[e("div",L,[N,e("div",B,[c(i(d),{href:n.route("areas.create",o.city.id),class:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:l(()=>[h(" Add Area ")]),_:1},8,["href"])])]),e("div",T,[e("div",C,[e("div",H,[e("table",M,[V,e("tbody",E,[(s(!0),a(x,null,f(o.areas.data,t=>(s(),a("tr",{key:t.id},[e("td",j,[e("div",D,[e("div",F,[e("div",$,m(t.name_ar),1),e("div",z,m(t.email),1)])])]),e("td",I,[e("div",O,m(t.title),1),e("div",S,m(t.name_en),1)]),e("td",U,[c(i(d),{href:n.route("areas.edit",[o.city.id,t.id]),class:"text-indigo-600 hover:text-indigo-900"},{default:l(()=>[(s(),r(u(i(p)),{class:"w-5 h-5"}))]),_:2},1032,["href"]),c(i(d),{href:n.route("areas.destroy",[o.city.id,t.id]),method:"delete",as:"button",class:"text-indigo-600 hover:text-indigo-900"},{default:l(()=>[(s(),r(u(i(y)),{class:"w-5 h-5"}))]),_:2},1032,["href"])])]))),128))])]),o.areas.links.length>3?(s(),a("div",q,[e("div",G,[(s(!0),a(x,null,f(o.areas.links,(t,_)=>(s(),a(x,null,[t.url===null?(s(),a("div",{key:_,class:"mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded",innerHTML:t.label},null,8,J)):(s(),r(i(d),{key:1,class:v(["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500",{"bg-white":t.active}]),href:t.url,innerHTML:t.label},null,8,["class","href","innerHTML"]))],64))),256))])])):b("",!0)])])])])]),_:1}))}};export{R as default};