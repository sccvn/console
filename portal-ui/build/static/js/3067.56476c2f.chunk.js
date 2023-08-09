"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3067],{75578:function(e,t,n){var i=n(1413),s=n(72791),l=n(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){return(0,l.jsx)(s.Suspense,{fallback:t,children:(0,l.jsx)(e,(0,i.Z)({},n))})}}},31460:function(e,t,n){var i=n(72791),s=n(57689),l=n(64554),a=n(29945),o=n(80184);t.Z=function(e){var t=e.compactMode,n=void 0!==t&&t,r=(0,s.s0)(),c=(0,o.jsx)(a.zxk,{id:"go-to-register",type:"submit",variant:"callAction",color:"primary",onClick:function(){return r("/support/register")},children:"Register your Cluster"}),x="Use your MinIO Subscription Network login credentials to register this cluster.";return n?(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(a.rjZ,{sx:{"& div.leftItems":{marginBottom:0}},children:(0,o.jsx)(a.KfX,{title:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexGrow:1},children:[(0,o.jsx)("span",{children:x})," ",c]}),iconComponent:(0,o.jsx)(a.e6P,{}),help:null})}),(0,o.jsx)("br",{})]}):(0,o.jsx)(l.Z,{sx:{padding:"25px",border:"1px solid #eaeaea",display:"flex",alignItems:"center",justifyContent:"center",flexFlow:{sm:"row",xs:"column"},marginBottom:"15px"},children:(0,o.jsxs)(a.rjZ,{container:!0,children:[(0,o.jsx)(a.rjZ,{item:!0,xs:12,children:(0,o.jsx)(l.Z,{sx:{marginRight:"8px",fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center","& .min-icon":{width:"83px",height:"14px",marginLeft:"5px",marginRight:"5px"}},children:"Register your cluster"})}),(0,o.jsx)(a.rjZ,{item:!0,xs:12,children:(0,o.jsx)(l.Z,{sx:{display:"flex",flexFlow:{xs:"column",md:"row"}},children:(0,o.jsxs)(l.Z,{sx:{display:"flex",flexFlow:"column",flex:"2"},children:[(0,o.jsx)(l.Z,{sx:{fontSize:"16px",display:"flex",flexFlow:"column",marginTop:"15px",marginBottom:"15px"},children:x}),(0,o.jsx)(l.Z,{sx:{flex:"1"},children:(0,o.jsx)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:c})})]})})})]})})}},73067:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var i=n(72791),s=n(57689),l=n(75578),a=n(50099),o=n(29439),r=n(29945),c=n(11087),x=n(81207),d=n(87995),u=n(81551),h=n(9478),p=n(40986),m=n(56028),f=n(80184),g=function(e){var t=e.onClose,n=e.diagStatus,s=e.logsStatus,l=e.open,a=e.disable,c=void 0!==a&&a,h=(0,u.TL)(),g=(0,i.useState)(!1),j=(0,o.Z)(g,2),b=j[0],y=j[1],C=function(){y(!0),x.Z.invoke("PUT","/api/v1/support/callhome",{diagState:!c&&n,logsState:!c&&s}).then((function(e){h((0,d.y1)("Configuration saved successfully")),y(!1),t(!0)})).catch((function(e){y(!1),h((0,d.Ih)(e))}))};return(0,f.jsx)(m.Z,{modalOpen:l,title:c?"Disable Call Home":"Edit Call Home Configurations",onClose:function(){return t(!1)},titleIcon:(0,f.jsx)(r.o0P,{}),children:c?(0,f.jsxs)(i.Fragment,{children:["Please Acknowledge that after doing this action, we will no longer receive updated cluster information automatically, losing the potential benefits that Call Home provides to your MinIO cluster.",(0,f.jsx)(r.rjZ,{item:!0,xs:12,sx:{margin:"15px 0"},children:"Are you sure you want to disable SUBNET Call Home?"}),(0,f.jsx)("br",{}),b&&(0,f.jsx)(r.rjZ,{item:!0,xs:12,sx:{marginBottom:10},children:(0,f.jsx)(p.Z,{})}),(0,f.jsxs)(r.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:[(0,f.jsx)(r.zxk,{id:"reset",type:"button",variant:"regular",disabled:b,onClick:function(){return t(!1)},label:"Cancel",sx:{marginRight:10}}),(0,f.jsx)(r.zxk,{id:"save-lifecycle",type:"submit",variant:"secondary",color:"primary",disabled:b,label:"Yes, Disable Call Home",onClick:C})]})]}):(0,f.jsxs)(i.Fragment,{children:["Are you sure you want to change the following configurations for SUBNET Call Home:",(0,f.jsxs)(r.rjZ,{item:!0,sx:{margin:"20px 0",display:"flex",flexDirection:"column",gap:15},children:[(0,f.jsxs)(r.rjZ,{item:!0,sx:{display:"flex",alignItems:"center",gap:10},children:[(0,f.jsx)(r.J$M,{style:{fill:n?"#4CCB92":"#C83B51",width:20}}),(0,f.jsxs)("span",{children:[(0,f.jsx)("strong",{children:n?"Enable":"Disable"})," - Send Diagnostics Information to SUBNET"]})]}),(0,f.jsxs)(r.rjZ,{item:!0,sx:{display:"flex",alignItems:"center",gap:10},children:[(0,f.jsx)(r.J$M,{style:{fill:s?"#4CCB92":"#C83B51",width:20}}),(0,f.jsxs)("span",{children:[(0,f.jsx)("strong",{children:s?"Enable":"Disable"})," - Send Logs Information to SUBNET"]})]})]}),(0,f.jsx)(r.rjZ,{item:!0,xs:12,sx:{margin:"15px 0"},children:"Please Acknowledge that the information provided will only be available in your SUBNET Account and it will not be shared to other persons or entities besides MinIO team and you."}),b&&(0,f.jsx)(r.rjZ,{item:!0,xs:12,sx:{marginBottom:10},children:(0,f.jsx)(p.Z,{})}),(0,f.jsxs)(r.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:[(0,f.jsx)(r.zxk,{id:"reset",type:"button",variant:"regular",disabled:b,onClick:function(){return t(!1)},label:"Cancel",sx:{marginRight:10}}),(0,f.jsx)(r.zxk,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:b,label:"Yes, Save this Configuration",onClick:C})]})]})})},j=n(31460),b=n(47974),y=n(99670),C=function(){var e=(0,u.TL)(),t=(0,s.s0)(),n=(0,i.useState)(!0),l=(0,o.Z)(n,2),a=l[0],p=l[1],m=(0,i.useState)(!1),C=(0,o.Z)(m,2),v=C[0],Z=C[1],S=(0,i.useState)(!1),k=(0,o.Z)(S,2),w=k[0],I=k[1],B=(0,i.useState)(!1),E=(0,o.Z)(B,2),T=E[0],z=E[1],A=(0,i.useState)(!1),L=(0,o.Z)(A,2),D=L[0],H=L[1],M=(0,i.useState)(!1),F=(0,o.Z)(M,2),N=F[0],O=F[1],U=(0,i.useState)(!1),P=(0,o.Z)(U,2),R=P[0],W=P[1],Y=(0,h.Yc)();(0,i.useEffect)((function(){a&&x.Z.invoke("GET","/api/v1/support/callhome").then((function(e){p(!1),I(!!e.diagnosticsStatus),O(!!e.logsStatus),z(!!e.diagnosticsStatus),H(!!e.logsStatus)})).catch((function(t){p(!1),e((0,d.Ih)(t))}))}),[a,e]);var X="regular";return!Y||w===T&&N===D||(X="callAction"),(0,i.useEffect)((function(){e((0,d.Sc)("call_home"))}),[]),(0,f.jsxs)(i.Fragment,{children:[v&&(0,f.jsx)(g,{onClose:function(e){e&&p(!0),Z(!1)},open:v,logsStatus:N,diagStatus:w,disable:R}),(0,f.jsx)(b.Z,{label:"Call Home",actions:(0,f.jsx)(y.Z,{})}),(0,f.jsxs)(r.Xgh,{children:[!Y&&(0,f.jsx)(j.Z,{compactMode:!0}),(0,f.jsx)(r.ltY,{helpBox:(0,f.jsx)(r.KfX,{title:"Learn more about Call Home",iconComponent:(0,f.jsx)(r.o0P,{}),help:(0,f.jsx)(i.Fragment,{children:(0,f.jsx)(r.xuv,{sx:{display:"flex",flexFlow:"column",fontSize:"14px",flex:"2",marginTop:"10px"},children:(0,f.jsxs)(r.xuv,{children:["Enabling Call Home sends cluster health & status to your registered MinIO Subscription Network account every 24 hours.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"This helps the MinIO support team to provide quick incident responses along with suggestions for possible improvements that can be made to your MinIO instances.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"Your cluster must be"," ",(0,f.jsx)(c.rU,{to:"/support/register",children:"registered"})," in the MinIO Subscription Network (SUBNET) before enabling this feature."]})})})}),children:a?(0,f.jsx)("span",{style:{marginLeft:5},children:(0,f.jsx)(r.aNw,{style:{width:16,height:16}})}):(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(r.rsf,{value:"enableDiag",id:"enableDiag",name:"enableDiag",checked:w,onChange:function(e){I(e.target.checked)},label:"Daily Health Report",disabled:!Y,description:"Daily Health Report enables you to proactively identify potential issues in your deployment before they escalate."}),(0,f.jsx)(r.rsf,{value:"enableLogs",id:"enableLogs",name:"enableLogs",checked:N,onChange:function(e){O(e.target.checked)},label:"Live Error Logs",disabled:!Y,description:"Live Error Logs will enable MinIO's support team and automatic diagnostics system to catch failures early."}),(0,f.jsxs)(r.xuv,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"55px",gap:"0px 10px"},children:[(T||D)&&(0,f.jsx)(r.zxk,{id:"callhome-action",variant:"secondary","data-test-id":"call-home-toggle-button",onClick:function(){W(!0),Z(!0)},disabled:a,children:"Disable Call Home"}),(0,f.jsx)(r.zxk,{id:"callhome-action",type:"button",variant:X,"data-test-id":"call-home-toggle-button",onClick:function(){Y?(W(!1),Z(!0)):t("/support/register")},disabled:a,children:"Save Configuration"})]})]})})]})]})},v=(0,l.Z)(i.lazy((function(){return Promise.all([n.e(5473),n.e(1715),n.e(5994),n.e(7391),n.e(9581),n.e(8833)]).then(n.bind(n,58833))}))),Z=(0,l.Z)(i.lazy((function(){return Promise.all([n.e(5473),n.e(1715),n.e(5994),n.e(7391),n.e(4882),n.e(3554),n.e(1516)]).then(n.bind(n,51516))}))),S=(0,l.Z)(i.lazy((function(){return n.e(483).then(n.bind(n,70483))}))),k=function(){return(0,f.jsxs)(s.Z5,{children:[(0,f.jsx)(s.AW,{path:"register",element:(0,f.jsx)(Z,{})}),(0,f.jsx)(s.AW,{path:"profile",element:(0,f.jsx)(S,{})}),(0,f.jsx)(s.AW,{path:"call-home",element:(0,f.jsx)(C,{})}),(0,f.jsx)(s.AW,{path:"inspect",element:(0,f.jsx)(v,{})}),(0,f.jsx)(s.AW,{path:"*",element:(0,f.jsx)(a.Z,{})})]})}}}]);
//# sourceMappingURL=3067.56476c2f.chunk.js.map