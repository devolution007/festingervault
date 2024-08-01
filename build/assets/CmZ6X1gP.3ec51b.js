import{c as t,s as h,j as e,L as n,h as o,a as d,B as r}from"./ChQuhNz2.3ec51b.js";import{C as p,a as m,c as x,b as u,e as j,d as g}from"./BFV4CDd5.3ec51b.js";import{S as a}from"./MDlO7Wm2.3ec51b.js";import{u as y}from"./BUcbSi7v.3ec51b.js";/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),E={"wordpress-themes":{slug:"wordpress-themes",label:"WordPress Themes",description:"Tailored Premium WordPress themes"},"wordpress-plugins":{slug:"wordpress-plugins",label:"WordPress Plugins",description:"Tailored Premium WordPress plugins"},"elementor-template-kits":{slug:"elementor-template-kits",label:"Template Kits",description:"Elementor Template Kits"},wishlist:{slug:"wishlist",label:"Requests",description:"Wishlisted Items"}};function $(){return e.jsxs(p,{children:[e.jsx(m,{className:"aspect-video overflow-hidden rounded-t-sm p-0 sm:p-0",children:e.jsx(a,{className:"aspect-video rounded-none rounded-t-sm"})}),e.jsxs(x,{className:"mt-4 space-y-2 pb-0",children:[e.jsx(a,{className:"h-4 w-full"}),e.jsx(a,{className:"h-4 w-3/4"}),e.jsx(a,{className:"h-4 w-full"}),e.jsx(a,{className:"h-4 w-3/4"})]})]})}function T({item:s}){const l=h(),{InstallButton:i,isInstalled:b}=y(s);return e.jsxs(p,{className:"group/item flex flex-col justify-between transition-all duration-300",children:[e.jsxs("div",{children:[e.jsxs(m,{className:"group/image relative aspect-video overflow-hidden rounded-t-sm bg-slate-400 p-0 sm:p-0",children:[s.image&&e.jsx(n,{to:`/item/${s.type}/detail/${s.id}`,children:e.jsx("img",{src:s.image,className:"aspect-video rounded-t-sm object-cover"})}),s.version&&e.jsx(o,{className:d(["absolute bottom-1 flex items-center gap-1 rounded-sm uppercase transition-opacity group-hover/image:opacity-80","left-1"]),variant:"background",title:"Version",children:s.version}),s.access&&e.jsx(o,{className:d(["absolute bottom-1 flex items-center gap-1 rounded-sm uppercase transition-opacity","right-1 border-0"]),variant:s.access,children:s.access})]}),e.jsxs(x,{className:"mt-4 space-y-1 pb-0",children:[e.jsx(u,{className:"leading-normal",children:e.jsx(n,{to:`/item/${s.type}/detail/${s.id}`,children:wp.htmlEntities.decodeEntities(s.title)})}),e.jsxs(j,{className:"line-clamp-2",children:["In ",s.category]}),e.jsxs("div",{className:"flex items-center gap-2 text-gray-400",children:[e.jsxs("div",{className:"flex items-center gap-1 text-xs",children:[e.jsx(f,{width:11})," ",moment.unix(s.updated).fromNow()]}),e.jsxs("div",{className:"flex items-center gap-1 text-xs",children:[e.jsx(k,{width:11})," ",s.version]})]})]})]}),e.jsx(g,{children:e.jsxs("div",{className:"flex gap-2 pt-3",children:[e.jsx("div",{children:e.jsx(i,{})}),e.jsx("div",{children:e.jsx(r,{variant:"outline",size:"sm",className:"flex items-center gap-2",disabled:!0,onClick:c=>{l(`/item/${s.type}/detail/${s.id}`)},children:e.jsx(N,{width:16})})}),e.jsx("div",{children:e.jsx(r,{variant:"outline",disabled:!0,size:"sm",className:"flex items-center gap-2",onClick:c=>{},children:e.jsx(w,{width:16})})}),e.jsx("div",{children:e.jsx(r,{variant:"outline",size:"sm",disabled:!0,className:"flex items-center gap-2",onClick:c=>{},children:e.jsx(v,{width:16})})})]})})]})}function W(s){return s.replace(/(?:^|-)([a-z])/g,function(l,i){return` ${i.toUpperCase()}`}).trim()}export{$ as P,T as a,W as c,E as i};
