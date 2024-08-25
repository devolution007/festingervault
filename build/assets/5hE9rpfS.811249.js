import{c as x,r as f,f as k,Z as j,j as e,B as a,J as m}from"./edbS6oUi.811249.js";import{h as I,u as N,D as R,a as M,L as b,b as B,c as L,d as E,e as U,f as A,g as w}from"./DX5UrgBG.811249.js";import{a as P,u as H}from"./CIJEn0hL.811249.js";/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=x("CloudDownload",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=x("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=x("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);function z(i,n){const o=f.useMemo(()=>["wordpress-themes","wordpress-plugins"].includes(i.type),[i]),{list:r}=k(),t=f.useMemo(()=>r==null?void 0:r.find(v=>v.id===i.id),[r]),s=f.useMemo(()=>t?j(t.version,t.installed_version,"gt")===!0:!1,[t,r]),d=f.useMemo(()=>t&&n?j(t.installed_version,n.version,"gt")===!0:!1,[t,n]);return{isInstalled:t,isNewerVersion:s,isInstallable:o,isRollBack:d}}function S({item:i,media:n,size:o,variant:r}){const t=P(),{data:s}=I(),{isPending:d,mutateAsync:v}=N("item/install"),{isInstalled:l,isNewerVersion:c,isInstallable:h,isRollBack:p}=z(i,n),{clearCache:D}=k(),{tab:C}=H("/item/:type/detail/:id/:tab?");function g(_){if(typeof(s==null?void 0:s.plan_type)>"u"){m.error(wp.i18n.__("License not activated","festingervault")),t("/activation");return}m.promise(v({item_id:i.id,method:_===!0?"download":l?"update":"install",media_id:n==null?void 0:n.id}),{description:wp.htmlEntities.decodeEntities(i.title),loading:_===!0?wp.i18n.__("Downloading","festingervault"):p?wp.i18n.sprintf(wp.i18n.__("Roll-Back to version %s","festingervault"),n.version):l?c?wp.i18n.__("Updating","festingervault"):wp.i18n.__("Re-Installing","festingervault"):wp.i18n.__("Installing","festingervault"),success(u){return u.link&&_===!0&&window.open(u.link,"_blank"),D(),wp.i18n.__("Successful","festingervault")},error(u){return u.message}})}return e.jsxs(R,{children:[e.jsx(M,{asChild:!0,children:e.jsxs(a,{variant:r,size:o,className:"flex items-center gap-2",disabled:d,children:[d?e.jsx(b,{className:"h-4 w-4 animate-spin"}):e.jsx(y,{width:16}),o!="icon"&&e.jsx("span",{children:h?p?wp.i18n.__("Roll-Back","festingervault"):l?c?wp.i18n.__("Update","festingervault"):wp.i18n.__("Re-Install","festingervault"):wp.i18n.__("Install","festingervault"):wp.i18n.__("Download","festingervault")})]})}),e.jsx(B,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(L,{className:"text-center",children:[e.jsx(E,{className:"text-center leading-normal",children:wp.htmlEntities.decodeEntities(i.title)}),e.jsx(U,{className:"flex flex-col gap-2 text-center",asChild:!0,children:e.jsxs("div",{children:[e.jsx("div",{children:h?p?wp.i18n.sprintf("Roll-back to version from %s to %s",l.installed_version,n.version):l?c?wp.i18n.sprintf("Update version from %s to %s",l.installed_version,l.version):wp.i18n.sprintf(wp.i18n.__("Re-install version %s","festingervault"),n?n.version:l.version):wp.i18n.sprintf("Install version %s",n?n.version:i.version):wp.i18n.sprintf("Download version %s",n?n.version:i.version)}),e.jsx("div",{children:wp.i18n.sprintf(wp.i18n.__("%d download credit would be consumed from your account."),1)}),e.jsxs("div",{className:"flex flex-row justify-center divide-x",children:[e.jsx("div",{className:"px-4",children:wp.i18n.sprintf(wp.i18n.__("Daily Limit:","festingervault"),s==null?void 0:s.today_limit)}),e.jsx("div",{className:"px-4",children:wp.i18n.sprintf(wp.i18n.__("Used Limit:","festingervault"),s==null?void 0:s.today_limit_used)}),(s==null?void 0:s.plan_title)==="recurring"&&e.jsx("div",{className:"p-4",children:wp.i18n.sprintf(wp.i18n.__("Total Limit:","festingervault"),s==null?void 0:s.total_limit)})]})]})})]}),e.jsx(A,{children:e.jsxs("div",{className:"flex flex-row justify-center gap-4",children:[h&&e.jsx(w,{asChild:!0,children:e.jsxs(a,{onClick:()=>g(!1),variant:"default",className:"gap-2",children:[e.jsx(y,{size:16}),e.jsx("span",{children:p?wp.i18n.__("Roll-Back","festingervault"):l?c?wp.i18n.__("Update","festingervault"):wp.i18n.__("Re-Install","festingervault"):wp.i18n.__("Install","festingervault")})]})}),e.jsx(w,{asChild:!0,children:e.jsxs(a,{onClick:()=>g(!0),variant:"outline",className:"gap-2",children:[e.jsx(T,{size:16}),e.jsx("span",{children:wp.i18n.__("Download","festingervault")})]})}),C!=="changelog"&&e.jsx(w,{asChild:!0,children:e.jsxs(a,{onClick:()=>t("/item/:type/detail/:id/:tab?",{params:{type:i.type,id:i.id,tab:"changelog"}}),variant:"outline",className:"gap-2",children:[e.jsx(q,{size:16}),e.jsx("span",{children:wp.i18n.__("Roll-Back","festingervault")})]})}),e.jsx(w,{asChild:!0,children:e.jsx(a,{variant:"outline",children:wp.i18n.__("Cancel","festingervault")})})]})})]})})]})}export{y as C,T as D,S as I,z as u};
