"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4619],{94619:function(e,a,t){t.r(a);var s=t(29439),l=t(1413),n=t(72791),i=t(56028),o=t(61889),r=t(75952),c=t(21435),d=t(11135),u=t(25787),p=t(23814),f=t(81207),m=t(90673),x=t(87995),h=t(25469),Z=t(80184);a.default=(0,u.Z)((function(e){return(0,d.Z)((0,l.Z)((0,l.Z)({},p.DF),p.ID))}))((function(e){var a=e.modalOpen,t=e.onClose,l=e.classes,d=e.bucket,u=(0,h.TL)(),p=(0,n.useState)(""),v=(0,s.Z)(p,2),k=v[0],b=v[1],j=(0,n.useState)("readonly"),g=(0,s.Z)(j,2),C=g[0],y=g[1];return(0,Z.jsx)(i.Z,{modalOpen:a,title:"Add Access Rule",onClose:t,titleIcon:(0,Z.jsx)(r.sR0,{}),children:(0,Z.jsxs)(o.ZP,{container:!0,children:[(0,Z.jsx)(o.ZP,{item:!0,xs:12,className:l.formFieldRow,children:(0,Z.jsx)(c.Z,{value:k,label:"Prefix",id:"prefix",name:"prefix",placeholder:"Enter Prefix",onChange:function(e){b(e.target.value)},tooltip:"Leave this field blank to apply the rule to all prefixes and objects at the bucket root. Do not include the wildcard asterisk ``*`` as part of the prefix *unless* it is an explicit part of the prefix name. The Console automatically appends an asterisk to the appropriate sections of the resulting IAM policy."})}),(0,Z.jsx)(o.ZP,{item:!0,xs:12,children:(0,Z.jsx)(m.Z,{id:"access",name:"Access",onChange:function(e){y(e.target.value)},label:"Access",value:C,options:[{label:"readonly",value:"readonly"},{label:"writeonly",value:"writeonly"},{label:"readwrite",value:"readwrite"}],disabled:!1})}),(0,Z.jsxs)(o.ZP,{item:!0,xs:12,className:l.modalButtonBar,children:[(0,Z.jsx)(r.zxk,{id:"clear",type:"button",variant:"regular",onClick:function(){b(""),y("readonly")},label:"Clear"}),(0,Z.jsx)(r.zxk,{id:"add-access-save",type:"submit",variant:"callAction",disabled:""===k.trim(),onClick:function(){f.Z.invoke("PUT","/api/v1/bucket/".concat(d,"/access-rules"),{prefix:k,access:C}).then((function(e){t()})).catch((function(e){u((0,x.Ih)(e)),t()}))},label:"Save"})]})]})})}))},56028:function(e,a,t){var s=t(29439),l=t(1413),n=t(72791),i=t(78687),o=t(13400),r=t(55646),c=t(5574),d=t(65661),u=t(39157),p=t(11135),f=t(25787),m=t(23814),x=t(25469),h=t(29823),Z=t(28057),v=t(87995),k=t(80184);a.Z=(0,f.Z)((function(e){return(0,p.Z)((0,l.Z)((0,l.Z)({},m.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},m.sN))}))((function(e){var a=e.onClose,t=e.modalOpen,p=e.title,f=e.children,m=e.classes,b=e.wideLimit,j=void 0===b||b,g=e.noContentPadding,C=e.titleIcon,y=void 0===C?null:C,w=(0,x.TL)(),N=(0,n.useState)(!1),P=(0,s.Z)(N,2),B=P[0],M=P[1],S=(0,i.v9)((function(e){return e.system.modalSnackBar}));(0,n.useEffect)((function(){w((0,v.MK)(""))}),[w]),(0,n.useEffect)((function(){if(S){if(""===S.message)return void M(!1);"error"!==S.type&&M(!0)}}),[S]);var A=j?{classes:{paper:m.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},D="";return S&&(D=S.detailedErrorMsg,(""===S.detailedErrorMsg||S.detailedErrorMsg.length<5)&&(D=S.message)),(0,k.jsxs)(c.Z,(0,l.Z)((0,l.Z)({open:t,classes:m},A),{},{scroll:"paper",onClose:function(e,t){"backdropClick"!==t&&a()},className:m.root,children:[(0,k.jsxs)(d.Z,{className:m.title,children:[(0,k.jsxs)("div",{className:m.titleText,children:[y," ",p]}),(0,k.jsx)("div",{className:m.closeContainer,children:(0,k.jsx)(o.Z,{"aria-label":"close",id:"close",className:m.closeButton,onClick:a,disableRipple:!0,size:"small",children:(0,k.jsx)(h.Z,{})})})]}),(0,k.jsx)(Z.Z,{isModal:!0}),(0,k.jsx)(r.Z,{open:B,className:m.snackBarModal,onClose:function(){M(!1),w((0,v.MK)(""))},message:D,ContentProps:{className:"".concat(m.snackBar," ").concat(S&&"error"===S.type?m.errorSnackBar:"")},autoHideDuration:S&&"error"===S.type?1e4:5e3}),(0,k.jsx)(u.Z,{className:g?"":m.content,children:f})]}))}))}}]);
//# sourceMappingURL=4619.beba8be5.chunk.js.map