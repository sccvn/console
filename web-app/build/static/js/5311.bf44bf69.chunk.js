"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[5311],{5311:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var l=n(65043),s=n(89923),a=n(56629),i=n(53518),r=n(64159),c=n(20554),o=n(12848),d=n(77403),u=n(70579);const x=e=>{let{closeVersioningModalAndRefresh:t,modalOpen:n,selectedBucket:x,versioningInfo:h={},objectLockingEnabled:g}=e;const p=(0,c.jL)(),[f,m]=(0,l.useState)(!1),[b,j]=(0,l.useState)("Enabled"===(null===h||void 0===h?void 0:h.status)),[v,k]=(0,l.useState)(!(null===h||void 0===h||!h.excludeFolders)),[w,C]=(0,l.useState)((e=>{const t=null===e||void 0===e?void 0:e.excludedPrefixes;return t?t.map((e=>e.prefix)).join(","):""})(h));return(0,u.jsx)(s.ngX,{onClose:()=>t(!1),open:n,title:"Versioning on Bucket",children:(0,u.jsxs)(s.Hbc,{withBorders:!1,containerPadding:!1,children:[(0,u.jsx)(s.dOG,{id:"activateVersioning",label:"Versioning Status",checked:b,onChange:e=>{j(e.target.checked)},indicatorLabels:["Enabled","Disabled"]}),b&&!g&&(0,u.jsxs)(l.Fragment,{children:[(0,u.jsx)(s.dOG,{id:"excludeFolders",label:"Exclude Folders",checked:v,onChange:e=>{k(e.target.checked)},indicatorLabels:["Enabled","Disabled"]}),(0,u.jsx)(o.A,{elements:w,label:"Excluded Prefixes",name:"excludedPrefixes",onChange:e=>{let t="";t=Array.isArray(e)?e.join(","):e,C(t)},withBorder:!0})]}),(0,u.jsxs)(s.azJ,{sx:d.Uz.modalButtonBar,children:[(0,u.jsx)(s.$nd,{id:"clear",type:"button",variant:"regular",color:"primary",onClick:()=>{C(""),k(!1),j(!1)},label:"Clear"}),(0,u.jsx)(s.$nd,{type:"submit",variant:"callAction",onClick:()=>{f||(m(!0),a.F.buckets.setBucketVersioning(x,{enabled:b,excludeFolders:!!b&&v,excludePrefixes:b?w.split(",").filter((e=>""!==e.trim())):[]}).then((()=>{m(!1),t(!0)})).catch((e=>{m(!1),p((0,r.C9)((0,i.S)(e.error)))})))},id:"saveTag",label:"Save"})]})]})})}},12848:(e,t,n)=>{n.d(t,{A:()=>c});var l=n(65043),s=n(33097),a=n.n(s),i=n(89923),r=n(70579);const c=e=>{let{elements:t,name:n,label:s,tooltip:c="",commonPlaceholder:o="",onChange:d,withBorder:u=!1}=e;const[x,h]=(0,l.useState)([""]),g=(0,l.createRef)();(0,l.useEffect)((()=>{if(1===x.length&&""===x[0]&&t&&""!==t){const e=t.split(",");e.push(""),h(e)}}),[t,x]),(0,l.useEffect)((()=>{if(x.length>1){const e=g.current;e&&e.scrollIntoView(!1)}}),[x,g]);const p=(0,l.useCallback)((e=>{d(e)}),[d]),f=(0,l.useRef)(!0);(0,l.useEffect)((()=>{if(f.current)return void(f.current=!1);const e=x.filter((e=>""!==e.trim())).join(",");p(e)}),[x]);const m=e=>{e.persist();let t=[...x];const n=a()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,h(t)},b=x.map(((e,t)=>(0,r.jsx)(i.cl_,{id:"".concat(n,"-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:x[t],onChange:m,index:t,placeholder:o,overlayIcon:t===x.length-1?(0,r.jsx)(i.REV,{}):null,overlayAction:()=>{(e=>{if(""!==e[e.length-1].trim()){const t=[...e];t.push(""),h(t)}})(x)}},"csv-multi-".concat(n,"-").concat(t.toString()))));return(0,r.jsx)(l.Fragment,{children:(0,r.jsxs)(i.azJ,{sx:{display:"flex"},className:"inputItem",children:[(0,r.jsxs)(i.l1Y,{sx:{alignItems:"flex-start"},children:[(0,r.jsx)("span",{children:s}),""!==c&&(0,r.jsx)(i.azJ,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,r.jsx)(i.m_M,{tooltip:c,placement:"top",children:(0,r.jsx)(i.azJ,{className:c,children:(0,r.jsx)(i.NTw,{})})})})]}),(0,r.jsxs)(i.azJ,{withBorders:u,sx:{width:"100%",overflowY:"auto",height:150,position:"relative"},children:[b,(0,r.jsx)("div",{ref:g})]})]})})}}}]);
//# sourceMappingURL=5311.bf44bf69.chunk.js.map