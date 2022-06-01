"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[426],{426:function(e,n,t){t.r(n);var r=t(29439),o=t(1413),a=t(72791),s=t(60364),i=t(11135),c=t(25787),l=t(23814),u=t(61889),d=t(45248),Z=t(81207),f=t(5450),p=t(87995),v=t(80184),h=(0,s.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant}}),null);n.default=(0,c.Z)((function(e){return(0,i.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},l.OR),l.qg),l.VX),(0,l.Bz)(e.spacing(4))))}))(h((function(e){var n=e.classes,t=e.match,o=e.loadingTenant,i=(0,s.I0)(),c=(0,a.useState)([]),l=(0,r.Z)(c,2),h=l[0],x=l[1],m=(0,a.useState)(!0),j=(0,r.Z)(m,2),g=j[0],b=j[1],T=t.params.tenantName,w=t.params.tenantNamespace;return(0,a.useEffect)((function(){o&&b(!0)}),[o]),(0,a.useEffect)((function(){g&&Z.Z.invoke("GET","/api/v1/namespaces/".concat(w,"/tenants/").concat(T,"/events")).then((function(e){for(var n=0;n<e.length;n++){var t=Date.now()/1e3|0;e[n].seen=(0,d.v1)((t-e[n].last_seen).toString())}x(e),b(!1)})).catch((function(e){i((0,p.Ih)(e)),b(!1)}))}),[g,w,T,i]),(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)("h1",{className:n.sectionTitle,children:"Events"}),(0,v.jsx)(u.ZP,{item:!0,xs:12,children:(0,v.jsx)(f.Z,{events:h,loading:g})})]})})))},5450:function(e,n,t){var r=t(29439),o=t(72791),a=t(11135),s=t(25787),i=t(40986),c=t(79836),l=t(53382),u=t(53994),d=t(56890),Z=t(35855),f=t(64554),p=t(56125),v=t(20890),h=t(85172),x=t(95678),m=t(39281),j=t(10703),g=t(80184),b=function(e){var n=e.event,t=o.useState(!1),a=(0,r.Z)(t,2),s=a[0],i=a[1];return(0,g.jsxs)(o.Fragment,{children:[(0,g.jsxs)(Z.Z,{sx:{"& > *":{borderBottom:"unset"},cursor:"pointer"},children:[(0,g.jsx)(u.Z,{component:"th",scope:"row",onClick:function(){return i(!s)},children:n.event_type}),(0,g.jsx)(u.Z,{onClick:function(){return i(!s)},children:n.reason}),(0,g.jsx)(u.Z,{onClick:function(){return i(!s)},children:n.seen}),(0,g.jsx)(u.Z,{onClick:function(){return i(!s)},children:n.message.length>=30?"".concat(n.message.slice(0,30),"..."):n.message}),(0,g.jsx)(u.Z,{onClick:function(){return i(!s)},children:s?(0,g.jsx)(x.Z,{}):(0,g.jsx)(h.Z,{})})]}),(0,g.jsx)(Z.Z,{children:(0,g.jsx)(u.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:5,children:(0,g.jsx)(p.Z,{in:s,timeout:"auto",unmountOnExit:!0,children:(0,g.jsx)(f.Z,{sx:{margin:1},children:(0,g.jsx)(v.Z,{style:{background:"#efefef",border:"1px solid #dedede",padding:4,fontSize:14,color:"#666666"},children:n.message})})})})})]})};n.Z=(0,s.Z)((function(e){return(0,a.Z)({events:{"& .MuiTypography-root":{fontSize:14},"& .Mui-expanded":{"& .eventMessage":{display:"none"}}}})}))((function(e){e.classes;var n=e.events;return e.loading?(0,g.jsx)(i.Z,{}):(0,g.jsx)(m.Z,{component:j.Z,children:(0,g.jsxs)(c.Z,{"aria-label":"collapsible table",children:[(0,g.jsx)(d.Z,{children:(0,g.jsxs)(Z.Z,{children:[(0,g.jsx)(u.Z,{children:"Type"}),(0,g.jsx)(u.Z,{children:"Reason"}),(0,g.jsx)(u.Z,{children:"Age"}),(0,g.jsx)(u.Z,{children:"Message"}),(0,g.jsx)(u.Z,{})]})}),(0,g.jsx)(l.Z,{children:n.map((function(e){return(0,g.jsx)(b,{event:e},"".concat(e.event_type,"-").concat(e.seen))}))})]})})}))},85172:function(e,n,t){var r=t(95318);n.Z=void 0;var o=r(t(45649)),a=t(80184),s=(0,o.default)((0,a.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");n.Z=s},95678:function(e,n,t){var r=t(95318);n.Z=void 0;var o=r(t(45649)),a=t(80184),s=(0,o.default)((0,a.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");n.Z=s},39281:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(87462),o=t(63366),a=t(72791),s=t(28182),i=t(90767),c=t(93736),l=t(47630),u=t(95159);function d(e){return(0,u.Z)("MuiTableContainer",e)}(0,t(30208).Z)("MuiTableContainer",["root"]);var Z=t(80184),f=["className","component"],p=(0,l.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,n){return n.root}})({width:"100%",overflowX:"auto"}),v=a.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiTableContainer"}),a=t.className,l=t.component,u=void 0===l?"div":l,v=(0,o.Z)(t,f),h=(0,r.Z)({},t,{component:u}),x=function(e){var n=e.classes;return(0,i.Z)({root:["root"]},d,n)}(h);return(0,Z.jsx)(p,(0,r.Z)({ref:n,as:u,className:(0,s.Z)(x.root,a),ownerState:h},v))}))},56890:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),o=t(63366),a=t(72791),s=t(28182),i=t(90767),c=t(829),l=t(93736),u=t(47630),d=t(95159);function Z(e){return(0,d.Z)("MuiTableHead",e)}(0,t(30208).Z)("MuiTableHead",["root"]);var f=t(80184),p=["className","component"],v=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,n){return n.root}})({display:"table-header-group"}),h={variant:"head"},x="thead",m=a.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiTableHead"}),a=t.className,u=t.component,d=void 0===u?x:u,m=(0,o.Z)(t,p),j=(0,r.Z)({},t,{component:d}),g=function(e){var n=e.classes;return(0,i.Z)({root:["root"]},Z,n)}(j);return(0,f.jsx)(c.Z.Provider,{value:h,children:(0,f.jsx)(v,(0,r.Z)({as:d,className:(0,s.Z)(g.root,a),ref:n,role:d===x?null:"rowgroup",ownerState:j},m))})}))}}]);
//# sourceMappingURL=426.8e611cf9.chunk.js.map