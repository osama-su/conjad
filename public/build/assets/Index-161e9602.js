import{o as a,e as d,a as e,d as v,T as V,c as $,w as o,b as n,g as _,u as s,j as S,h,F as x,i as U,t as g,n as j,l as y,p as b}from"./app-1cd7255b.js";import{_ as B,U as F,h as w,G as M,V as T,S as z}from"./AppLayout-dded1cd9.js";function N(u,p){return a(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])}const q=e("h2",{class:"font-semibold text-xl text-gray-800 text-gray-200 leading-tight"}," Form ",-1),A={class:"px-4 sm:px-6 lg:px-8"},D={class:"sm:flex sm:items-center"},E=e("div",{class:"sm:flex-auto"},[e("p",{class:"mt-2 text-sm text-gray-700"},"You can update the frontend form.")],-1),G={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},I={class:"sm:hidden"},L=e("label",{for:"tabs",class:"sr-only"},"Select a tab",-1),R={id:"tabs",name:"tabs",class:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"},Y=["selected"],H={class:"hidden sm:block"},J={class:"flex space-x-4","aria-label":"Tabs"},K=["onClick"],O=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),P={class:"fixed inset-0 z-10 overflow-y-auto"},Q={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},W=["onSubmit"],X={class:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"},Z={class:"mt-3 text-center sm:mt-5"},ee={class:"mt-2"},te={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6"},se={for:"question",class:"block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"},oe={class:"mt-2 sm:col-span-2 sm:mt-0"},ie=["onUpdate:modelValue","name","id"],ne=["onUpdate:modelValue","name","id"],ae={class:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"},re={__name:"Index",props:{steps:Array},setup(u){const p=u,c=v(!1),m=v(null);console.log(p);const k=r=>{m.value=r,c.value=!0,console.log(m.value.questions[0].id)},l=V({questions:p.steps.reduce((r,i)=>(i.questions.forEach(t=>{r[t.id]={id:t.id,title:t.title}}),r),{})}),C=()=>{l.put(route("steps.update",{step:m.value.id}),{onFinish:()=>l.reset("password","password_confirmation")})};return console.log(l),(r,i)=>(a(),$(B,{title:"Users"},{header:o(()=>[q]),default:o(()=>[e("div",A,[e("div",D,[E,e("div",G,[n(s(S),{href:r.route("form.create"),class:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:o(()=>[_(" Add step ")]),_:1},8,["href"])])]),e("div",null,[e("div",I,[L,e("select",R,[(a(!0),d(x,null,h(u.steps,t=>(a(),d("option",{key:t.id,selected:t.current},g(t.name),9,Y))),128))])]),e("div",H,[e("nav",J,[(a(!0),d(x,null,h(u.steps,t=>(a(),d("button",{key:t.id,class:j([t.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"]),onClick:f=>k(t)},g(t.name),11,K))),128))])])]),n(s(z),{as:"template",show:c.value},{default:o(()=>[n(s(F),{as:"div",class:"relative z-10",onClose:i[2]||(i[2]=t=>c.value=!1)},{default:o(()=>[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[O]),_:1}),e("div",P,[e("div",Q,[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[n(s(M),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:o(()=>[e("form",{onSubmit:U(C,["prevent"])},[e("div",null,[e("div",X,[n(s(N),{class:"h-6 w-6 text-green-600","aria-hidden":"true"})]),e("div",Z,[n(s(T),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:o(()=>[_(g(m.value.name),1)]),_:1}),e("div",ee,[(a(!0),d(x,null,h(m.value.questions,t=>(a(),d("div",{key:t.id},[e("div",te,[e("label",se,g(t.title),1),e("div",oe,[y(e("input",{type:"hidden","onUpdate:modelValue":f=>s(l).questions[t.id].id=f,name:`question[${t.id}]`,id:`question-${t.id}`,autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"},null,8,ie),[[b,s(l).questions[t.id].id]]),y(e("input",{type:"text","onUpdate:modelValue":f=>s(l).questions[t.id].title=f,name:`question[${t.title}]`,id:`question-${t.title}`,autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"},null,8,ne),[[b,s(l).questions[t.id].title]])])])]))),128))])])]),e("div",ae,[e("button",{type:"submit",class:"inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2",onClick:i[0]||(i[0]=t=>c.value=!1)},"Save"),e("button",{type:"cancel",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",onClick:i[1]||(i[1]=t=>c.value=!1),ref:"cancelButtonRef"},"Cancel",512)])],40,W)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])]),_:1}))}};export{re as default};