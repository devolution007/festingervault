import{c as j,j as e,S as y,B as h,E as w,H as _,d as b,s as C}from"./CXQqwsZ_.2c9267.js";import{S as u,C as c,a as p,c as o,o as k,A as D}from"./2wnDsYA5.2c9267.js";import{c as z,i as M}from"./KD1BARN2.2c9267.js";import{u as x,L as S}from"./CYxPwrsS.2c9267.js";import{G as N,_ as f,a as g}from"./CjxrQgq9.2c9267.js";import{u as I,C as E}from"./CjwdgHrs.2c9267.js";import"./CkHSz6Xa.2c9267.js";/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=j("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=j("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=j("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=j("ShieldEllipsis",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);function H(){return e.jsxs("div",{className:"relative flex flex-col items-center gap-3 p-6 py-12",children:[e.jsx(N,{size:50}),e.jsx("div",{children:e.jsx(u,{className:"aspect-video h-52 rounded-md"})}),e.jsx(u,{className:"w-52 h-5"})]})}function V({item:s}){return e.jsxs("div",{className:"relative flex flex-col items-center gap-3 p-6 py-12",children:[e.jsx(N,{size:50}),e.jsx("div",{children:e.jsx("img",{src:s.image,className:"aspect-video h-52 rounded-md"})}),e.jsx("h1",{className:"text-xl",children:wp.htmlEntities.decodeEntities(s.title)}),e.jsxs("div",{className:"flex flex-row gap-5 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"space-x-2",children:[e.jsx("span",{children:"In"}),e.jsx("span",{children:z(s.category)})]}),e.jsx("div",{className:"flex flex-row items-center gap-1 text-green-600",children:moment.unix(s.updated).isBefore(moment().add(1,"week"))?e.jsxs(e.Fragment,{children:[e.jsx(v,{size:18})," ",e.jsx("span",{children:"Recently Updated"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Y,{size:18})," ",e.jsx("span",{children:moment.unix(s.updated).fromNow()})]})}),s.additional_content_count>0&&e.jsxs("div",{className:"flex flex-row items-center gap-1 text-green-600",children:[e.jsx(v,{size:18}),e.jsx("span",{children:"Demo Included"})]})]})]})}function P({item:s}){return x("/item/:type/detail/:id/:tab?"),e.jsx("div",{className:"flex flex-col gap-5 sm:gap-7",children:e.jsxs(c,{children:[e.jsx(p,{className:"border-b p-5 sm:p-7",children:wp.i18n.__("Description")}),e.jsx(o,{className:"p-5 sm:p-7 text-sm leading-relaxed font-light",children:wp.htmlEntities.decodeEntities(s.summary)})]})})}function T({item:s,tabs:i}){var r;const t=x("/item/:type/detail/:id/:tab?"),{InstallButton:m}=I(s),n=((r=i.find(l=>l.id===t.tab))==null?void 0:r.id)??"description";return e.jsxs("div",{className:"flex flex-row items-center justify-between border-b-2 border-b-card",children:[e.jsx("div",{className:"flex flex-row",children:i.map(({id:l,label:a,external:d})=>e.jsx(y,{className:k("rounded-none border-b-2 border-transparent px-6 py-4 text-sm transition-colors hover:border-b-blue-600",l===n&&"border-b-blue-800"),children:d?e.jsx("a",{href:d,target:"_blank",children:wp.i18n.__("Support")}):e.jsx(S,{to:"/item/:type/detail/:id/:tab?",params:{...t,tab:l},children:a})},l))}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(m,{}),s.preview&&e.jsx(h,{asChild:!0,className:"flex gap-2",variant:"outline",size:"sm",children:e.jsxs("a",{href:s.preview,target:"_blank",referrerPolicy:"no-referrer",children:[e.jsx("span",{children:wp.i18n.__("Live Preview")}),e.jsx(w,{size:16})]})}),e.jsx(h,{size:"icon",variant:"outline",children:e.jsx(_,{size:16})}),e.jsx(h,{size:"icon",variant:"outline",children:e.jsx(F,{size:16})})]})]})}function A({item:s,tabs:i}){var l;const t=x("/item/:type/detail/:id/:tab?"),m=((l=i.find(a=>a.id===t.tab))==null?void 0:l.id)??"description",n=i.find(a=>a.id===m),r=(n==null?void 0:n.el)??(()=>e.jsx("div",{children:"Invalid Tab?"}));return e.jsx(r,{})}function B({item:s}){var l,a;const i=x("/item/:type/detail/:id/:tab?"),{data:t,isError:m,isLoading:n,isFetching:r}=b("item/changelog",{item_id:i.id});return t&&e.jsx("div",{className:"flex flex-col gap-5 sm:gap-7",children:e.jsxs(c,{children:[e.jsx(p,{className:"border-b p-5 sm:p-7",children:"Changelog"}),e.jsx(o,{className:"p-5 text-sm sm:p-7",children:((l=t==null?void 0:t.data)==null?void 0:l.length)>0?e.jsx("div",{className:"divide-y",children:(a=t==null?void 0:t.data)==null?void 0:a.map(d=>e.jsxs("div",{className:"flex flex-row items-center justify-between gap-4 p-4 first:pt-0 last:pb-0",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-xl",children:d.version}),e.jsx("div",{className:"text-muted-foreground",children:d.slug}),e.jsx("div",{className:"text-muted-foreground",children:moment.unix(d.updated).fromNow()})]}),e.jsx("div",{children:e.jsx(h,{size:"iconSmall",variant:"outline",children:e.jsx(E,{size:14})})})]},d.id))}):e.jsx("div",{className:"",children:"No Items Found"})})]})})}function R({item:s}){return x("/item/:type/detail/:id/:tab?"),e.jsx("div",{className:"flex flex-col gap-5 sm:gap-7",children:e.jsxs(c,{children:[e.jsx(p,{className:"border-b p-5 sm:p-7",children:"Demo Contents"}),e.jsx(o,{className:"p-5 sm:p-7 text-sm",children:"Coming Soon"})]})})}function $({item:s}){return x("/item/:type/detail/:id/:tab?"),e.jsx("div",{className:"flex flex-col gap-5 sm:gap-7",children:e.jsxs(c,{children:[e.jsx(p,{className:"border-b p-5 sm:p-7",children:"Documentation"}),e.jsx(o,{className:"p-5 sm:p-7 text-sm",children:"Coming Soon"})]})})}function G({item:s}){return e.jsxs(c,{children:[e.jsxs(p,{className:"flex flex-row items-center justify-between border-b",children:[e.jsx("h3",{className:"text-lg",children:wp.i18n.__("Virus Total")}),s.virus_total&&e.jsx("a",{href:`https://www.virustotal.com/gui/file/${s.virus_total.hash}`,target:"_blank",className:"border-b border-dashed border-blue-500 text-sm text-blue-500",children:"View Detail"})]}),e.jsx(o,{className:"p-4 sm:p-5",children:s.virus_total?e.jsxs("div",{className:"flex flex-row gap-2",children:[e.jsx("div",{children:e.jsx(C,{size:38,className:"text-green-600"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{children:s.virus_total.filename}),e.jsxs("div",{className:"space-x-3 text-xs text-muted-foreground",children:[e.jsxs("span",{children:[s.virus_total.stats.malicious," threats"]}),e.jsx("span",{children:moment.unix(s.virus_total.updated).format("D MMM YYYY, h:mm a")})]})]})]}):e.jsxs("div",{className:"flex animate-pulse flex-row items-center gap-2",children:[e.jsx("div",{children:e.jsx(L,{size:38,className:"text-purple-400"})}),e.jsx("div",{className:"flex-1",children:e.jsx("div",{className:"",children:"Scanning..."})})]})})]})}function U({item:s}){const i=React.useMemo(()=>[{label:"Version",el:()=>s.version},{label:"Status",el:()=>"Functional"},{label:"Updated",el:()=>moment.unix(s.updated).format("MMM D, YYYY")},{label:"Published",el:()=>moment.unix(s.created).format("MMM D, YYYY")},{label:"Access",el:()=>e.jsx("span",{className:"capitalize",children:s.access})}],[s]);return e.jsxs(c,{children:[e.jsx(p,{className:"flex flex-row items-center justify-between border-b",children:e.jsx("h3",{className:"text-lg",children:wp.i18n.__("Details")})}),e.jsx(o,{className:"space-y-3",children:i.map(t=>e.jsxs("div",{className:"grid grid-cols-3 gap-3 text-sm font-light",children:[e.jsx("div",{className:"col-span-1 text-muted-foreground",children:t.label}),e.jsx("div",{className:"col-span-2",children:e.jsx(t.el,{})})]},t.label))})]})}function W({item:s}){return e.jsxs("div",{className:"flex flex-col gap-5 sm:gap-7",children:[e.jsx(c,{children:e.jsxs(o,{className:"grid grid-cols-2 divide-x text-center",children:[e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"text-2xl font-semibold",children:e.jsx(f,{start:0,end:s.download_count,duration:2.75,formattingFn:i=>g(i)})}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Downloads"})]}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"text-2xl",children:e.jsx(f,{start:0,end:s.install_count,duration:2.75,formattingFn:i=>g(i)})}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Installs"})]})]})}),e.jsx(G,{item:s}),e.jsx(U,{item:s})]})}function ee(){const s=x("/item/:type/detail/:id/:tab?"),{data:i,isError:t,isLoading:m,isFetching:n}=b("item/detail",{item_id:s.id}),r=React.useMemo(()=>{var l;return i?[{id:"description",label:"Description",el:()=>e.jsx(P,{item:i})},{id:"changelog",label:"Changelog",el:()=>e.jsx(B,{item:i}),enabled:i.media_count>0},{id:"demo-contents",label:"Demo Contents",el:()=>e.jsx(R,{item:i}),enabled:i.additional_content_count>0},{id:"documentation",label:"Documentation",el:()=>e.jsx($,{item:i}),enabled:!1},{id:"support",label:"Support",external:i.support_url,enabled:((l=i==null?void 0:i.support_url)==null?void 0:l.length)>0}].filter(a=>a.enabled??!0):[]},[i]);return e.jsx(D,{title:(i==null?void 0:i.title)??"Item Detail",description:"",preloader:e.jsx(H,{}),breadcrump:[{label:M[s.type].label,href:`/item/${s.type}`},{label:wp.htmlEntities.decodeEntities(i==null?void 0:i.title)}],isError:t,isFetching:n,isLoading:m,children:i&&e.jsxs(e.Fragment,{children:[e.jsx(V,{item:i}),e.jsx("div",{className:"wp-full",children:e.jsx(T,{item:i,tabs:r})}),e.jsxs("div",{className:"flex flex-row gap-5 sm:gap-7",children:[e.jsx("div",{className:"flex-1",children:e.jsx(A,{item:i,tabs:r})}),e.jsx("div",{className:"w-80",children:e.jsx(W,{item:i})})]})]})})}export{ee as default};
