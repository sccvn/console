"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9952],{99952:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var i=t(29439),a=t(1413),o=t(72791),s=t(61889),l=t(40986),r=t(29945),c=t(11135),d=t(25787),u=t(23814),x=t(56028),p=t(90673),m=t(87995),h=t(81551),f=t(56087),v=t(38442),Z=t(27454),b=t(51691),j=t(21435),y=t(9505),g=t(23508),k=t(40214),C=t(80184),S=function(e){var n=e.closeAddModalAndRefresh,t=e.addOpen,a=(0,h.TL)(),l=(0,y.Z)((function(){return n(!0)}),(function(e){n(!1),a((0,m.Ih)(e))})),r=(0,i.Z)(l,2),c=r[0],d=r[1],u=(0,o.useState)(""),x=(0,i.Z)(u,2),p=x[0],f=x[1];return(0,C.jsx)(g.Z,{title:"",confirmText:"Create",isOpen:t,isLoading:c,onConfirm:function(){d("POST","/api/v1/kms/keys/",{key:p})},onClose:function(){return n(!1)},confirmButtonProps:{disabled:-1!==p.indexOf(" ")||""===p||c,variant:"callAction"},confirmationContent:(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(k.Z,{helpText:"Create Key",contents:["Create a new cryptographic key in the Key Management Service server connected to MINIO."]}),(0,C.jsx)(s.ZP,{item:!0,xs:12,marginTop:3,children:(0,C.jsx)(j.Z,{id:"key-name",name:"key-name",label:"Key Name",autoFocus:!0,value:p,error:-1!==p.indexOf(" ")?"Key name cannot contain spaces":"",onChange:function(e){f(e.target.value)}})})]})})},P=t(66315),F=t(31776),N=t(82342),I=(0,d.Z)((function(e){return(0,c.Z)((0,a.Z)((0,a.Z)({},u.ID),u.DF))}))((function(e){var n=e.classes,t=e.open,a=e.encryptionCfg,c=e.selectedBucket,d=e.closeModalAndRefresh,u=(0,h.TL)(),b=(0,o.useState)(!1),j=(0,i.Z)(b,2),y=j[0],g=j[1],k=(0,o.useState)(""),I=(0,i.Z)(k,2),K=I[0],w=I[1],A=(0,o.useState)("disabled"),B=(0,i.Z)(A,2),M=B[0],R=B[1],T=(0,o.useState)([]),E=(0,i.Z)(T,2),L=E[0],z=E[1],O=(0,o.useState)(!1),D=(0,i.Z)(O,2),W=D[0],H=D[1],J=(0,o.useState)(!1),_=(0,i.Z)(J,2),Y=_[0],q=_[1];(0,o.useEffect)((function(){a&&("AES256"===a.algorithm?R(P.bJ.SseS3):(R(P.bJ.SseKms),w(a.kmsMasterKeyID||"")))}),[a]),(0,o.useEffect)((function(){"sse-kms"===M&&F.h.kms.kmsListKeys().then((function(e){z(e.data.results),H(!1)})).catch((function(e){H(!1),u((0,m.zb)((0,N.g)(e.error)))}))}),[M,W,u]);return(0,C.jsxs)(o.Fragment,{children:[Y&&(0,C.jsx)(S,{addOpen:Y,closeAddModalAndRefresh:function(e){q(!1),H(!0)}}),(0,C.jsx)(x.Z,{modalOpen:t,onClose:function(){d()},title:"Enable Bucket Encryption",titleIcon:(0,C.jsx)(r.Xn4,{}),children:(0,C.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),y||("disabled"===M?F.h.buckets.disableBucketEncryption(c).then((function(){g(!1),d()})).catch((function(e){g(!1),u((0,m.zb)((0,N.g)(e.error)))})):F.h.buckets.enableBucketEncryption(c,{encType:M,kmsKeyID:K}).then((function(){g(!1),d()})).catch((function(e){g(!1),u((0,m.zb)((0,N.g)(e.error)))})))},children:(0,C.jsxs)(s.ZP,{container:!0,children:[(0,C.jsxs)(s.ZP,{item:!0,xs:12,className:n.modalFormScrollable,children:[(0,C.jsx)(s.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{onChange:function(e){R(e.target.value)},id:"select-encryption-type",name:"select-encryption-type",label:"Encryption Type",value:M,options:[{label:"Disabled",value:"disabled"},{label:"SSE-S3",value:P.bJ.SseS3},{label:"SSE-KMS",value:P.bJ.SseKms}]})}),"sse-kms"===M&&(0,C.jsxs)(s.ZP,{item:!0,xs:12,className:n.formFieldRow,display:"flex",children:[L&&(0,C.jsx)(p.Z,{onChange:function(e){w(e.target.value)},id:"select-kms-key-id",name:"select-kms-key-id",label:"KMS Key ID",value:K,options:L.map((function(e){return{label:e.name||"",value:e.name||""}}))}),(0,C.jsx)(s.ZP,{marginLeft:1,children:(0,C.jsx)(v.s,{scopes:[f.Ft.KMS_IMPORT_KEY],resource:f.C3,errorProps:{disabled:!0},children:(0,C.jsx)(Z.Z,{tooltip:"Add key",children:(0,C.jsx)(r.zxk,{id:"import-key",variant:"regular",icon:(0,C.jsx)(r.dtP,{}),onClick:function(e){q(!0),e.preventDefault()}})})})})]})]}),(0,C.jsxs)(s.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:[(0,C.jsx)(r.zxk,{id:"cancel",type:"submit",variant:"regular",onClick:function(){d()},disabled:y,label:"Cancel"}),(0,C.jsx)(r.zxk,{id:"save",type:"submit",variant:"callAction",disabled:y,label:"Save"})]}),y&&(0,C.jsx)(s.ZP,{item:!0,xs:12,children:(0,C.jsx)(l.Z,{})})]})})})]})}))},21435:function(e,n,t){var i=t(29439),a=t(1413),o=t(72791),s=t(27391),l=t(61889),r=t(30829),c=t(20068),d=t(13400),u=t(20165),x=t(3579),p=t(11135),m=t(72455),h=t(25787),f=t(23814),v=t(29945),Z=t(28182),b=t(80184),j=(0,m.Z)((function(e){return(0,p.Z)((0,a.Z)({},f.gM))}));function y(e){var n=j();return(0,b.jsx)(s.Z,(0,a.Z)({InputProps:{classes:n}},e))}n.Z=(0,h.Z)((function(e){return(0,p.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},f.YI),f.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var n=e.label,t=e.onChange,s=e.value,p=e.id,m=e.name,h=e.type,f=void 0===h?"text":h,j=e.autoComplete,g=void 0===j?"off":j,k=e.disabled,C=void 0!==k&&k,S=e.multiline,P=void 0!==S&&S,F=e.tooltip,N=void 0===F?"":F,I=e.index,K=void 0===I?0:I,w=e.error,A=void 0===w?"":w,B=e.required,M=void 0!==B&&B,R=e.placeholder,T=void 0===R?"":R,E=e.min,L=e.max,z=e.overlayId,O=e.overlayIcon,D=void 0===O?null:O,W=e.overlayObject,H=void 0===W?null:W,J=e.extraInputProps,_=void 0===J?{}:J,Y=e.overlayAction,q=e.noLabelMinWidth,G=void 0!==q&&q,V=e.pattern,X=void 0===V?"":V,Q=e.autoFocus,U=void 0!==Q&&Q,$=e.classes,ee=e.className,ne=void 0===ee?"":ee,te=e.onKeyPress,ie=e.onFocus,ae=e.onPaste,oe=(0,a.Z)({"data-index":K},_),se=(0,o.useState)(!1),le=(0,i.Z)(se,2),re=le[0],ce=le[1];"number"===f&&E&&(oe.min=E),"number"===f&&L&&(oe.max=L),""!==X&&(oe.pattern=X);var de=D,ue=f;return"password"===f&&null===D&&(de=re?(0,b.jsx)(u.Z,{}):(0,b.jsx)(x.Z,{}),ue=re?"text":"password"),(0,b.jsx)(o.Fragment,{children:(0,b.jsxs)(l.ZP,{container:!0,className:(0,Z.Z)(""!==ne?ne:"",""!==A?$.errorInField:$.inputBoxContainer),children:[""!==n&&(0,b.jsxs)(r.Z,{htmlFor:p,className:G?$.noMinWidthLabel:$.inputLabel,children:[(0,b.jsxs)("span",{children:[n,M?"*":""]}),""!==N&&(0,b.jsx)("div",{className:$.tooltipContainer,children:(0,b.jsx)(c.Z,{title:N,placement:"top-start",children:(0,b.jsx)("div",{className:$.tooltip,children:(0,b.jsx)(v.byK,{})})})})]}),(0,b.jsxs)("div",{className:$.textBoxContainer,children:[(0,b.jsx)(y,{id:p,name:m,fullWidth:!0,value:s,autoFocus:U,disabled:C,onChange:t,type:ue,multiline:P,autoComplete:g,inputProps:oe,error:""!==A,helperText:A,placeholder:T,className:$.inputRebase,onKeyPress:te,onFocus:ie,onPaste:ae}),de&&(0,b.jsx)("div",{className:"".concat($.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,b.jsx)(d.Z,{onClick:Y?function(){Y()}:function(){return ce(!re)},id:z,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),H&&(0,b.jsx)("div",{className:"".concat($.overlayAction," ").concat(""!==n?"withLabel":""),children:H})]})]})})}))},90673:function(e,n,t){var i=t(1413),a=t(72791),o=t(61889),s=t(886),l=t(30829),r=t(20068),c=t(68096),d=t(58406),u=t(77865),x=t(11135),p=t(25787),m=t(23814),h=t(29945),f=t(80184),v=(0,p.Z)((function(e){return(0,x.Z)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(s.ZP);n.Z=(0,p.Z)((function(e){return(0,x.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},m.YI),m.Hr),{},{fieldContainer:{display:"flex","@media (max-width: 600px)":{flexFlow:"column"}}}))}))((function(e){var n=e.classes,t=e.id,i=e.name,s=e.onChange,x=e.options,p=e.label,m=e.tooltip,Z=void 0===m?"":m,b=e.value,j=e.disabled,y=void 0!==j&&j;return(0,f.jsx)(a.Fragment,{children:(0,f.jsxs)(o.ZP,{item:!0,xs:12,className:n.fieldContainer,children:[""!==p&&(0,f.jsxs)(l.Z,{htmlFor:t,className:n.inputLabel,children:[(0,f.jsx)("span",{children:p}),""!==Z&&(0,f.jsx)("div",{className:n.tooltipContainer,children:(0,f.jsx)(r.Z,{title:Z,placement:"top-start",children:(0,f.jsx)("div",{className:n.tooltip,children:(0,f.jsx)(h.byK,{})})})})]}),(0,f.jsx)(c.Z,{fullWidth:!0,children:(0,f.jsx)(d.Z,{id:t,name:i,value:b,onChange:s,input:(0,f.jsx)(v,{}),disabled:y,children:x.map((function(e){return(0,f.jsx)(u.Z,{value:e.value,children:e.label},"select-".concat(i,"-").concat(e.label))}))})})]})})}))},40214:function(e,n,t){t(72791);var i=t(64554),a=t(29945),o=t(80184);n.Z=function(e){var n=e.helpText,t=e.contents;return(0,o.jsxs)(i.Z,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,o.jsxs)(i.Z,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,o.jsx)(a.M9A,{}),(0,o.jsx)("div",{children:n})]}),(0,o.jsx)(i.Z,{sx:{fontSize:"14px",marginBottom:"15px"},children:t.map((function(e){return(0,o.jsx)(i.Z,{sx:{paddingBottom:"20px"},children:e})}))})]})}}}]);
//# sourceMappingURL=9952.d3963c5b.chunk.js.map