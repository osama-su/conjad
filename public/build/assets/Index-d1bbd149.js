import{_ as n}from"./AppLayout-9601efd4.js";import{o,c as r,w as i,a as t,e as a,h as d,F as p,t as e}from"./app-fb9d765a.js";const x=t("h2",{class:"font-semibold text-xl text-gray-800 text-gray-200 leading-tight"}," Inquiries ",-1),m={class:"px-4 sm:px-6 lg:px-8"},_=t("div",{class:"sm:flex sm:items-center"},[t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-base font-semibold leading-6 text-gray-900"},"Inquiries"),t("p",{class:"mt-2 text-sm text-gray-700"},"A list of all the inquiries.")])],-1),h={class:"mt-6 flex flex-col justify-between sm:flex-row sm:justify-start sm:space-x-2"},y=["href"],f={class:"mt-8 flow-root"},u={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},g={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},w={class:"min-w-full divide-y divide-gray-300"},v=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"},"Name"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Email"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Phone"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"When To Buy"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Type of property"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Purchasing value"),t("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-0"},[t("span",{class:"sr-only"},"Edit")])])],-1),b={class:"divide-y divide-gray-200 bg-white"},q={class:"whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"},k={class:"flex items-center"},B={class:"font-medium text-gray-900"},E={class:"whitespace-nowrap py-5 px-3 text-sm"},I={class:"text-gray-900"},j={class:"whitespace-nowrap py-5 px-3 text-sm"},A={class:"text-gray-900"},F={class:"whitespace-nowrap py-5 px-3 text-sm"},N={class:"text-gray-900"},P={class:"whitespace-nowrap py-5 px-3 text-sm"},T={class:"text-gray-900"},C={class:"whitespace-nowrap py-5 px-3 text-sm"},D={class:"text-gray-900"},W={__name:"Index",props:{inquiries:Array,filters:Array},setup(l){return(c,L)=>(o(),r(n,{title:"Inquiries"},{header:i(()=>[x]),default:i(()=>[t("div",m,[_,t("div",h,[t("a",{href:c.route("export"),class:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Export ",8,y)]),t("div",f,[t("div",u,[t("div",g,[t("table",w,[v,t("tbody",b,[(o(!0),a(p,null,d(l.inquiries.data,s=>(o(),a("tr",{key:s.email},[t("td",q,[t("div",k,[t("div",B,e(s.name),1)])]),t("td",E,[t("div",I,e(s.email),1)]),t("td",j,[t("div",A,e(s.phone_number),1)]),t("td",F,[t("div",N,e(s.when_to_buy),1)]),t("td",P,[t("div",T,e(s.type_of_property),1)]),t("td",C,[t("div",D,e(s.purchasing_value),1)])]))),128))])])])])])])]),_:1}))}};export{W as default};
