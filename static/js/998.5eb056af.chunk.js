(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[998],{9125:function(e,t,n){"use strict";n.d(t,{h:function(){return w}});var r=n(9434),o=n(4395),i=n(4663),a=n(4554),s=n(1087),c="MainNav_activeLink__E9PKy",l="MainNav_link__bEYAi",u=n(6151),d=n(521),p=n(1961),v=n(184),f=function(){return(0,v.jsxs)(a.Z,{children:[(0,v.jsx)(s.OL,{to:"/register",className:function(e){return e.isActive?c:l},children:(0,v.jsxs)(u.Z,{type:"button",color:"error",variant:"contained",size:"small",sx:{width:150,backgroundColor:"white",color:"brown",gap:"5px"},children:["Register",(0,v.jsx)(p.Z,{sx:{color:"brown"}})]})}),(0,v.jsx)(s.OL,{to:"/login",className:function(e){return e.isActive?c:l},children:(0,v.jsxs)(u.Z,{type:"button",color:"error",variant:"contained",size:"small",sx:{width:150,backgroundColor:"white",color:"brown",gap:"5px"},children:["Login",(0,v.jsx)(d.Z,{sx:{color:"brown"}})]})})]})},m=n(4217),h=n(4684),x=n(7541),g=function(){var e=(0,r.v9)(m.Qb);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.OL,{to:"/",className:function(e){return e.isActive?c:l},children:(0,v.jsxs)(u.Z,{type:"button",color:"error",variant:"contained",size:"small",sx:{width:150,backgroundColor:"white",color:"brown",gap:"5px"},children:["Home",(0,v.jsx)(x.Z,{sx:{color:"brown"}})]})}),e&&(0,v.jsx)(s.OL,{to:"/contacts",className:function(e){return e.isActive?c:l},children:(0,v.jsxs)(u.Z,{type:"button",color:"error",variant:"contained",size:"small",sx:{width:150,backgroundColor:"white",color:"brown",gap:"10px"},children:["Contacts",(0,v.jsx)(h.Z,{sx:{color:"brown"}})]})})]})},b=n(890),y=n(9273),Z=n(6488),j=function(){var e=(0,r.v9)(m.dy),t=(0,r.I0)();return(0,v.jsxs)(a.Z,{component:"section",sx:{display:"flex",alignItems:"center"},children:[(0,v.jsxs)(b.Z,{sx:{mr:"10px"},children:["Welcome, ",e,"!"]}),(0,v.jsxs)(u.Z,{type:"button",onClick:function(){t((0,y.ni)())},color:"error",variant:"contained",size:"small",sx:{width:150,backgroundColor:"white",color:"brown",gap:"5px"},children:["LogOut",(0,v.jsx)(Z.Z,{sx:{color:"brown"}})]})]})},w=function(){var e=(0,r.v9)(m.Qb);return(0,v.jsx)(o.Z,{position:"static",style:{background:"brown"},children:(0,v.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,v.jsx)(a.Z,{children:(0,v.jsx)(g,{})}),e?(0,v.jsx)(j,{}):(0,v.jsx)(f,{})]})})}},3998:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var r=n(9439),o=n(208),i=n(2791),a=n(890),s=n(9214),c=n(6151),l=n(9434),u=n(7898),d="ContactForm_form__dhl+T",p=n(184),v=function(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),n=t[0],v=t[1],f=(0,i.useState)(""),m=(0,r.Z)(f,2),h=m[0],x=m[1],g=(0,l.v9)((function(e){return e.contacts.items})),b=(0,l.I0)(),y=function(){v(""),x("")};return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.toLowerCase().trim(),r=g.find((function(e){return e.name.toLowerCase().trim()===t})),i=g.filter((function(e){return e.name.toLowerCase().trim()===t})).map((function(e){return e.id}));console.log(i[0]);var a=i[0];r?window.confirm("".concat(n," is already in contact,  do  you want to  replace ?"))&&(console.log("patch"),b((0,o.VA)({id:a,name:n,number:h})),y()):(console.log("add"),b((0,o.uK)({name:n,number:h})),y())},className:d,children:[(0,p.jsx)(a.Z,{children:" Name"}),(0,p.jsx)(s.Z,{fullWidth:!0,autoComplete:"off",variant:"outlined",color:"success",required:!0,type:"name",value:n,onChange:function(e){v(e.target.value)},size:"small",margin:"normal"}),(0,p.jsx)(a.Z,{children:" Number"}),(0,p.jsx)(s.Z,{fullWidth:!0,autoComplete:"off",variant:"outlined",color:"success",type:"tel",value:h,placeholder:"only numbers",onChange:function(e){x(e.target.value)},inputProps:{pattern:"[0-9]{9,13}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438\u0437 9-13 \u0446\u0438\u0444\u0440 "},required:!0,size:"small",margin:"normal"}),(0,p.jsxs)(c.Z,{color:"error",type:"submit",variant:"contained",size:"small",sx:{width:150,gap:"5px"},children:["Add contact",(0,p.jsx)(u.Z,{sx:{color:"white"}})]})]})},f=n(4942),m=n(3366),h=n(7462),x=n(8182),g=n(4419),b=n(627),y=n(2065),Z=n(6934),j=n(1402),w=n(335),C=n(9103),I=n(162),k=n(2071),S=n(6199),A=n(5878),O=n(1217);function P(e){return(0,O.Z)("MuiListItem",e)}var L=(0,A.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var N=(0,A.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function _(e){return(0,O.Z)("MuiListItemSecondaryAction",e)}(0,A.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var R=["className"],z=(0,Z.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,h.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),F=i.forwardRef((function(e,t){var n=(0,j.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,o=(0,m.Z)(n,R),a=i.useContext(S.Z),s=(0,h.Z)({},n,{disableGutters:a.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,g.Z)(r,_,n)}(s);return(0,p.jsx)(z,(0,h.Z)({className:(0,x.Z)(c.root,r),ownerState:s,ref:t},o))}));F.muiName="ListItemSecondaryAction";var M=F,G=["className"],T=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],E=(0,Z.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,h.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,h.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,f.Z)({},"& > .".concat(N.root),{paddingRight:48}),(t={},(0,f.Z)(t,"&.".concat(L.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,f.Z)(t,"&.".concat(L.selected),(0,f.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(L.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,f.Z)(t,"&.".concat(L.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,f.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(L.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),V=(0,Z.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),q=i.forwardRef((function(e,t){var n=(0,j.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,o=void 0===r?"center":r,a=n.autoFocus,s=void 0!==a&&a,c=n.button,l=void 0!==c&&c,u=n.children,d=n.className,v=n.component,f=n.components,y=void 0===f?{}:f,Z=n.componentsProps,A=void 0===Z?{}:Z,O=n.ContainerComponent,N=void 0===O?"li":O,_=n.ContainerProps,R=(_=void 0===_?{}:_).className,z=n.dense,F=void 0!==z&&z,q=n.disabled,D=void 0!==q&&q,W=n.disableGutters,H=void 0!==W&&W,B=n.disablePadding,K=void 0!==B&&B,U=n.divider,Y=void 0!==U&&U,Q=n.focusVisibleClassName,J=n.secondaryAction,X=n.selected,$=void 0!==X&&X,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,re=void 0===ne?{}:ne,oe=(0,m.Z)(n.ContainerProps,G),ie=(0,m.Z)(n,T),ae=i.useContext(S.Z),se=i.useMemo((function(){return{dense:F||ae.dense||!1,alignItems:o,disableGutters:H}}),[o,ae.dense,F,H]),ce=i.useRef(null);(0,I.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var le=i.Children.toArray(u),ue=le.length&&(0,C.Z)(le[le.length-1],["ListItemSecondaryAction"]),de=(0,h.Z)({},n,{alignItems:o,autoFocus:s,button:l,dense:se.dense,disabled:D,disableGutters:H,disablePadding:K,divider:Y,hasSecondaryAction:ue,selected:$}),pe=function(e){var t=e.alignItems,n=e.button,r=e.classes,o=e.dense,i=e.disabled,a={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,g.Z)(a,P,r)}(de),ve=(0,k.Z)(ce,t),fe=re.root||y.Root||E,me=te.root||A.root||{},he=(0,h.Z)({className:(0,x.Z)(pe.root,me.className,d),disabled:D},ie),xe=v||"li";return l&&(he.component=v||"div",he.focusVisibleClassName=(0,x.Z)(L.focusVisible,Q),xe=w.Z),ue?(xe=he.component||v?xe:"div","li"===N&&("li"===xe?xe="div":"li"===he.component&&(he.component="div")),(0,p.jsx)(S.Z.Provider,{value:se,children:(0,p.jsxs)(V,(0,h.Z)({as:N,className:(0,x.Z)(pe.container,R),ref:ve,ownerState:de},oe,{children:[(0,p.jsx)(fe,(0,h.Z)({},me,!(0,b.Z)(fe)&&{as:xe,ownerState:(0,h.Z)({},de,me.ownerState)},he,{children:le})),le.pop()]}))})):(0,p.jsx)(S.Z.Provider,{value:se,children:(0,p.jsxs)(fe,(0,h.Z)({},me,{as:xe,ref:ve},!(0,b.Z)(fe)&&{ownerState:(0,h.Z)({},de,me.ownerState)},he,{children:[le,J&&(0,p.jsx)(M,{children:J})]}))})})),D=n(7247),W=function(e){var t=e.id,n=e.name,r=e.number,i=(0,l.I0)();return(0,p.jsxs)(q,{sx:{display:"flex",alignItems:"center"},children:[(0,p.jsx)(a.Z,{children:"".concat(n,":")}),(0,p.jsx)(a.Z,{sx:{ml:"15px"},children:r}),(0,p.jsx)(c.Z,{color:"error",endIcon:(0,p.jsx)(D.Z,{}),onClick:function(){!function(e){i((0,o.GK)(e))}(t)},variant:"contained",size:"small",sx:{width:90,ml:"15px"},children:"Delete"})]})},H=n(493),B="NOT_FOUND";var K=function(e,t){return e===t};function U(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,o=void 0===r?K:r,i=n.maxSize,a=void 0===i?1:i,s=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),l=1===a?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:B},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}return B}return{get:r,put:function(t,o){r(t)===B&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(a,c);function u(){var t=l.get(arguments);if(t===B){if(t=e.apply(null,arguments),s){var n=l.getEntries(),r=n.find((function(e){return s(e.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return u.clearCache=function(){return l.clear()},u}function Y(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function Q(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i,a=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=s,u=l.memoizeOptions,d=void 0===u?n:u,p=Array.isArray(d)?d:[d],v=Y(r),f=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),m=e((function(){for(var e=[],t=v.length,n=0;n<t;n++)e.push(v[n].apply(null,arguments));return i=f.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:f,dependencies:v,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var J=Q(U),X=function(e){return e.contacts.items},$=function(e){return e.filter},ee=J([X,$],(function(e,t){var n=t.toLowerCase();if(console.log(e),e)return e.filter((function(e){return e.name.toString().toLowerCase().includes(n)}))})),te=function(){var e=(0,l.v9)(X),t=(0,l.v9)($);console.log(e),console.log(t);var n=(0,l.I0)();(0,i.useEffect)((function(){n((0,o.yF)())}),[n]);var r=(0,l.v9)(ee);return console.log(r),(0,p.jsx)(H.Z,{sx:{width:"350px"},children:r.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,p.jsx)(W,{name:n,number:r,id:t},t)}))})},ne=n(6895),re=n(4554),oe=function(){var e=(0,l.I0)();return(0,p.jsxs)(re.Z,{sx:{width:"350px"},children:[(0,p.jsx)(a.Z,{variant:"body1",component:"p",children:"Find contacts by name"}),(0,p.jsx)(s.Z,{variant:"outlined",onChange:function(t){console.log(t.target.value),e((0,ne.W1)(t.target.value))},type:"text",color:"success",name:"filter",size:"small",margin:"dense",fullWidth:!0})]})},ie=function(e){var t=e.text;return(0,p.jsx)(a.Z,{variant:"h4",component:"h2",sx:{mb:"5px",mt:"5px"},children:t})},ae=n(1614),se=n(2007),ce=n.n(se),le=function(e){var t=e.children;return(0,p.jsx)(ae.Z,{sx:{padding:"30px",display:"flex",flexDirection:"column",alignItems:"center"},children:t})};ae.Z.propTypes={children:ce().node};var ue=n(9125),de=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(ue.h,{}),(0,p.jsxs)(le,{children:[(0,p.jsx)(ie,{text:"Phonebook"}),(0,p.jsx)(v,{}),(0,p.jsx)(ie,{text:"Contacts"}),(0,p.jsx)(oe,{}),(0,p.jsx)(te,{})]})]})}},7247:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=a},7898:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"}),"PlaylistAdd");t.Z=a},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=998.5eb056af.chunk.js.map