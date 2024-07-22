"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[5153],{72237:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(65043),s=n(70579);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){return(0,s.jsx)(a.Suspense,{fallback:t,children:(0,s.jsx)(e,{...n})})}}},35153:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(65043),s=n(89923),o=n(20649),i=n(99161),l=n(56969),r=n(94574),c=n(33097),d=n.n(c),p=n(70579);const x=e=>(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"min-icon",fill:"currentcolor",...e,children:(0,p.jsx)("polygon",{points:"8.5 16.5 21.5 3.6 23.4 5.5 8.5 20.4 .6 12.5 2.5 10.5 8.5 16.5"})}),u=r.Ay.div((e=>{let{theme:t}=e;return{display:"grid",gridTemplateColumns:"repeat(4, minmax(350px, 400px));",justifyContent:"flex-start",marginTop:30,marginLeft:30,"& > div":{borderBottom:"".concat(d()(t,"borderColor","#EAEAEA")," 1px solid"),padding:"25px 40px",justifyContent:"center","&.openSource":{borderRight:"#002562 2px solid",borderLeft:"#002562 2px solid",position:"relative","&.first:before":{content:"' '",width:"calc(100% + 4px)",height:16,display:"block",backgroundColor:"#001F55",position:"absolute",top:-14,left:-2,border:"#002562 2px solid",borderBottom:0,borderTopLeftRadius:12,borderTopRightRadius:12},"&.last":{paddingBottom:30,"&:after":{content:"' '",width:"calc(100% + 4px)",height:16,display:"block",position:"absolute",bottom:-14,left:-2,border:"#002562 2px solid",borderTop:0,borderBottomLeftRadius:12,borderBottomRightRadius:12}}},"&.feature-information":{textAlign:"center"},"&.feature-label":{paddingLeft:5},"&.noBorderBottom":{borderBottom:0}},"& .planName":{fontWeight:600,fontSize:35,marginBottom:20,textAlign:"center",marginTop:10},"& .planIcon":{height:45,display:"flex",alignItems:"flex-start",justifyContent:"center","& svg":{height:35},"&.commercial":{"& svg":{height:20}}},"& .planDescription":{display:"flex",justifyContent:"center"}}})),m=e=>{var t;let{licenseInfo:n}=e,o=n?null===n||void 0===n||null===(t=n.plan)||void 0===t?void 0:t.toLowerCase():"community";const i=(e,t,n)=>{let a="community"!==o?"https://subnet.min.io":e;return(0,p.jsx)(s.$nd,{id:"license-action-".concat(e),variant:n,sx:{marginTop:"12px",width:"80%",height:"55px"},onClick:e=>{e.preventDefault(),window.open("".concat(a,"?ref=con"),"_blank")},label:t})},r=e=>e?(0,p.jsxs)(a.Fragment,{children:[e.content,e.isCheck&&(0,p.jsx)(x,{style:{width:16,height:16}})]}):(0,p.jsx)(a.Fragment,{});return(0,p.jsx)(a.Fragment,{children:(0,p.jsxs)(u,{children:[[null,...l.qZ].map(((e,t)=>(0,p.jsx)(s.azJ,{className:"".concat(1===t?"openSource first":""),children:null!==e&&(0,p.jsxs)(s.azJ,{children:[(0,p.jsx)(s.azJ,{className:"planName",children:e.planName}),(0,p.jsx)(s.azJ,{className:"planIcon ".concat("commercial"===e.planType?"commercial":""),children:null===e||void 0===e?void 0:e.planIcon}),(0,p.jsx)(s.azJ,{className:"planDescription",children:null===e||void 0===e?void 0:e.planDescription})]})}))),l.c_.map(((e,t)=>{const n=t===l.c_.length-1?"noBorderBottom":"";return(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(s.azJ,{className:"feature-label ".concat(n),children:e.featureLabel}),(0,p.jsx)(s.azJ,{className:"feature-information  openSource ".concat(n),children:r(e.featurePlans.openSource||null)}),(0,p.jsx)(s.azJ,{className:"feature-information ".concat(n),children:r(e.featurePlans.eosLite||null)}),(0,p.jsx)(s.azJ,{className:"feature-information ".concat(n),children:r(e.featurePlans.eosPlus||null)})]})})),[null,...l.qZ].map(((e,t)=>(0,p.jsx)(s.azJ,{className:"".concat(1===t?"openSource last":""," noBorderBottom"),sx:{display:"flex",justifyContent:"center"},children:e&&i("https://min.io/signup","commercial"===e.planType?"Subscribe":"Join Slack","commercial"===e.planType?"callAction":"regular")})))]})})};var f=n(73216),h=n(39827),g=n(72237),j=n(48793),b=n(55968),v=n(64159),y=n(21383);const S=(0,g.A)(a.lazy((()=>n.e(8963).then(n.bind(n,98963))))),z=()=>{const e=(0,f.Zp)(),[t,n]=(0,a.useState)(!1),[r,c]=(0,a.useState)(),[d,x]=(0,a.useState)(0),[u,g]=(0,a.useState)(!1),[z,A]=(0,a.useState)(!0);(0,a.useState)(!1);const[C,R]=(0,a.useState)(!1),[w,N]=(0,a.useState)(!1),E=(0,y.jL)();(0,a.useEffect)((()=>{E((0,v.ph)("license"))}),[]);const J=r&&C,I=(0,l.Gy)();(0,a.useEffect)((()=>{!J&&!I&&!z&&!u&&N(!0)}),[J,I,z,u]);const T=(0,a.useCallback)((()=>{u||(g(!0),o.A.invoke("GET","/api/v1/subnet/info").then((e=>{e&&("STANDARD"===e.plan?x(1):["ENTERPRISE","ENTERPRISE-LITE","ENTERPRISE-PLUS"].includes(e.plan)?x(2):x(1),c(e)),R(!0),g(!1)})).catch((()=>{R(!1),g(!1)})))}),[u]);return(0,a.useEffect)((()=>{z&&(T(),A(!1))}),[T,z,A]),u?(0,p.jsx)(s.xA9,{item:!0,xs:12,children:(0,p.jsx)(s.z21,{})}):(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(j.A,{label:"MinIO License and Support plans",actions:(0,p.jsxs)(a.Fragment,{children:[!J&&(0,p.jsx)(s.$nd,{id:"login-with-subnet",onClick:()=>e(i.zZ.REGISTER_SUPPORT),style:{fontSize:"14px",display:"flex",alignItems:"center",textDecoration:"none"},icon:(0,p.jsx)(s.HKb,{}),variant:"callAction",children:"Register your cluster"}),(0,p.jsx)(b.A,{})]})}),(0,p.jsxs)(s.Mxu,{children:[(0,p.jsx)(s.xA9,{item:!0,xs:12,children:J&&(0,p.jsx)(h.A,{email:null===r||void 0===r?void 0:r.email})}),(0,p.jsx)(m,{activateProductModal:t,closeModalAndFetchLicenseInfo:()=>{n(!1),T()},licenseInfo:r,currentPlanID:d,setActivateProductModal:n}),(0,p.jsx)(S,{isOpen:w,onClose:()=>{N(!1)}})]})]})}},39827:(e,t,n)=>{n.d(t,{A:()=>o});n(65043);var a=n(89923),s=n(70579);const o=e=>{let{email:t=""}=e;return(0,s.jsxs)(a.azJ,{sx:{height:67,color:"#ffffff",display:"flex",position:"relative",top:-30,left:-32,width:"calc(100% + 64px)",alignItems:"center",justifyContent:"space-between",backgroundColor:"#2781B0",padding:"0 25px 0 25px","& .registered-box, .reg-badge-box":{display:"flex",alignItems:"center",justifyContent:"flex-start"},"& .reg-badge-box":{marginLeft:"20px","& .min-icon":{fill:"#2781B0"}}},children:[(0,s.jsxs)(a.azJ,{className:"registered-box",children:[(0,s.jsx)(a.azJ,{sx:{fontSize:"16px",fontWeight:400},children:"Register status:"}),(0,s.jsxs)(a.azJ,{className:"reg-badge-box",children:[(0,s.jsx)(a.M3H,{}),(0,s.jsx)(a.azJ,{sx:{fontWeight:600},children:"Registered"})]})]}),(0,s.jsxs)(a.azJ,{className:"registered-acc-box",sx:{alignItems:"center",justifyContent:"flex-start",display:"flex",["@media (max-width: ".concat(a.nmC.sm,"px)")]:{display:"none"}},children:[(0,s.jsx)(a.azJ,{sx:{fontSize:"16px",fontWeight:400},children:"Registered to:"}),(0,s.jsx)(a.azJ,{sx:{marginLeft:"8px",fontWeight:600},children:t})]})]})}}}]);
//# sourceMappingURL=5153.24546201.chunk.js.map