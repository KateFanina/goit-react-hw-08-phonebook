"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[702],{4702:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,i,a,c,s,u,d,l,p,m,x,f,b,h,g=t(9434),Z=t(2791),v=t(3634),j=t(6195),y=t(1296),w=t(168),P=t(8789),k=t(7247),C=t(1286),z=P.ZP.li(r||(r=(0,w.Z)(["\n  display: grid;\n  grid-template-columns: 3fr 40px 40px;\n  margin-bottom: 16px;\n  align-items: center;\n  border-radius: 5px;\n  padding-left: 9px;\n"]))),S=P.ZP.ul(o||(o=(0,w.Z)(["\n  margin: 0;\n  padding-left: 0;\n"]))),F=P.ZP.p(i||(i=(0,w.Z)(["\n  margin: 0;\n  font-size: 18px;\n  margin-right: 20px;\n"]))),_=(0,P.ZP)(k.Z)(a||(a=(0,w.Z)(["\n  fill: blue;\n  &:hover {\n    scale: 1.5;\n  }\n"]))),q=(0,P.ZP)(C.Z)(c||(c=(0,w.Z)(["\n  color: blue;\n  &:hover {\n    scale: 1.5;\n  }\n"]))),E=function(n){return n.contacts.items},L=function(n){return n.contacts.isLoading},A=function(n){return n.contacts.error},T=function(n){return n.filter},R=t(3329),I=function(n){var e,t=n.onContactEdit,r=(0,g.I0)(),o=(0,g.v9)(E),i=(0,g.v9)(T),a=null!==(e=null===i||void 0===i?void 0:i.filter)&&void 0!==e?e:"";return(0,R.jsx)(S,{children:o.filter((function(n){return n.name.toLowerCase().includes(a.toLowerCase())||n.number.includes(a)})).map((function(n){return(0,R.jsxs)(z,{children:[(0,R.jsx)(F,{children:"".concat(n.name,": ").concat(n.number)}),(0,R.jsx)(y.Z,{title:"Edit",children:(0,R.jsx)(j.Z,{type:"button",onClick:function(){return t(n.id)},children:(0,R.jsx)(q,{color:"primary"})})}),(0,R.jsx)(y.Z,{title:"Delete",children:(0,R.jsx)(j.Z,{type:"button",onClick:function(){return r((0,v.GK)(n.id))},children:(0,R.jsx)(_,{color:"primary"})})})]},n.id)}))})},N=t(9439),J=t(5984),K=t(9823),B=t(2506),D=t(6727),G=(0,P.ZP)(B.l0)(s||(s=(0,w.Z)(["\n  margin-bottom: 40px;\n"]))),M=P.ZP.label(u||(u=(0,w.Z)(["\n  color: #2a2a2a;\n  display: grid;\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),V=(0,P.ZP)(B.gN)(d||(d=(0,w.Z)(["\n  color: #2a2a2a;\n  font-size: 18px;\n  border-radius: 8px;\n  border-color: blue;\n  padding: 8px;\n  width: 100%;\n  &:focus {\n    outline-color: #2196f3;\n  }\n"]))),Y=P.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),$=P.ZP.button(p||(p=(0,w.Z)(["\n  font-weight: 600;\n  color: #ffffff;\n  background: dodgerblue;\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0px 3px 3px rgb(0 0 0 / 30%), 2px 0px 2px rgb(0 0 0 / 14%),\n    0px 0px 3px rgb(0 0 0 / 20%);\n  cursor: pointer;\n  font-size: 18px;\n  padding: 8px;\n  &:hover {\n    scale: 1.1;\n    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),H=D.Ry().shape({name:D.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:D.Z_().min(13,"Too Short!").max(14,"Too Long!").required("Required")}),O=function(n){var e=n.handleSubmit,t=n.contact;return(0,R.jsx)(B.J9,{initialValues:{name:(null===t||void 0===t?void 0:t.name)||"",number:(null===t||void 0===t?void 0:t.number)||""},onSubmit:e,validationSchema:H,children:(0,R.jsxs)(G,{autoComplete:"off",children:[(0,R.jsxs)(M,{htmlFor:"name",children:["Name",(0,R.jsx)(V,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,R.jsxs)(M,{htmlFor:"number",children:["Number",(0,R.jsx)(V,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{0,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,R.jsx)(Y,{children:(0,R.jsx)($,{type:"submit",children:null!==t&&void 0!==t&&t.name?"Save contact":"Add contact"})})]})})},Q=t(4808),U=P.ZP.input(m||(m=(0,w.Z)(["\n  color: #2a2a2a;\n  font-size: 18px;\n  border-radius: 8px;\n  border-color: blue;\n  padding: 8px;\n  margin-bottom: 20px;\n  width: 100%;\n  &:focus {\n    outline-color: #2196f3;\n  }\n"]))),W=P.ZP.div(x||(x=(0,w.Z)(["\n  font-size: 22px;\n  color: blue;\n"]))),X=function(){var n=(0,g.I0)();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(W,{children:"Find contact by name or number"}),(0,R.jsx)(U,{type:"text",onChange:function(e){return n((0,Q.T)(e.target.value))}})]})},nn=t(4164),en=P.ZP.div(f||(f=(0,w.Z)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n"]))),tn=P.ZP.div(b||(b=(0,w.Z)(["\n  display: grid;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  left: 50%;\n  min-height: 250px;\n  padding: 12px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 350px;\n"]))),rn=P.ZP.div(h||(h=(0,w.Z)(["\n  align-items: flex-start;\n  display: inline-grid;\n  justify-content: center;\n  margin-top: 20px;\n"]))),on=document.querySelector("#modal-root");var an,cn,sn,un,dn,ln=function(n){(0,Z.useEffect)((function(){return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]);var e=function(e){"Escape"===e.code&&n.onClose()};return(0,nn.createPortal)((0,R.jsx)(en,{onClick:function(e){e.currentTarget===e.target&&n.onClose()},children:(0,R.jsx)(tn,{children:(0,R.jsx)(rn,{children:n.children})})}),on)},pn=P.ZP.div(an||(an=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),mn=(P.ZP.h1(cn||(cn=(0,w.Z)(["\n  font-size: 40px;\n  margin-bottom: 20px;\n  margin-top: 0;\n"]))),P.ZP.h2(sn||(sn=(0,w.Z)(["\n  font-size: 40px;\n  margin-bottom: 20px;\n  margin-top: 0;\n"]))),(0,P.ZP)(K.Z)(un||(un=(0,w.Z)(["\n  grid-template-columns: 40px;\n  justify-content: end;\n  position: absolute;\n  right: 12px;\n  top: 10px;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: mintcream;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  &:hover {\n    fill: blue;\n    cursor: pointer;\n    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"])))),xn=P.ZP.div(dn||(dn=(0,w.Z)(["\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  color: rgb(1, 1, 1);\n  width: 500px;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px auto;\n"]))),fn=function(){var n=(0,g.I0)(),e=(0,g.v9)(L),t=(0,g.v9)(A),r=(0,Z.useState)(""),o=(0,N.Z)(r,2),i=o[0],a=o[1],c=(0,Z.useState)(""),s=(0,N.Z)(c,2),u=s[0],d=s[1],l=(0,Z.useState)(""),p=(0,N.Z)(l,2),m=p[0],x=p[1],f=(0,Z.useState)(!1),b=(0,N.Z)(f,2),h=b[0],j=b[1],y=(0,g.v9)(E),w=function(){j(!h)},P=function(e,t){(function(n){var e=n.contacts,t=n.values,r=[];if(e.some((function(n){return n.number===t.number}))){var o=e.find((function(n){return n.number===t.number})).name;r.push("".concat(t.number," is already belongs to ").concat(o,"!"))}if(e.some((function(n){return n.name===t.name}))){var i=e.find((function(n){return n.name===t.name})).number;r.push("".concat(t.name," is already containce in phonebook with phone ").concat(i,"!"))}return r.length&&!h&&alert(r.join("\n")),!!r.length})({contacts:y,values:e})&&!h||(n(i?(0,v.mP)({id:i,name:e.name,number:e.number}):(0,v.uK)({id:(0,J.x0)(),name:e.name,number:e.number})),a(""),j(!1),t.resetForm({name:"",number:""}))};return(0,Z.useEffect)((function(){n((0,v.yF)())}),[n]),(0,R.jsxs)(xn,{children:[h&&(0,R.jsxs)(ln,{onClose:w,children:[(0,R.jsx)(mn,{onClick:w,children:(0,R.jsx)(K.Z,{})}),(0,R.jsx)(O,{contact:{name:u,number:m},handleSubmit:function(n,e){return P(n,e)}})]}),(0,R.jsxs)(R.Fragment,{children:[!h&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(pn,{}),(0,R.jsx)(O,{handleSubmit:function(n,e){return P(n,e)}})]}),e&&!t&&(0,R.jsx)("b",{children:"Request in progress..."}),(0,R.jsx)(pn,{}),(0,R.jsx)(X,{}),(0,R.jsx)(I,{onContactEdit:function(n){return function(n){var e=y.find((function(e){return e.id===n}));j(!h),a(e.id),d(e.name),x(e.number)}(n)}})]})]})};function bn(){var n=(0,g.I0)(),e=(0,g.v9)(L);return(0,Z.useEffect)((function(){n((0,v.yF)())}),[n]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{children:(0,R.jsx)("title",{children:"Your contacts"})}),(0,R.jsx)(fn,{}),(0,R.jsx)("div",{children:e&&"Request in progress..."})]})}}}]);
//# sourceMappingURL=702.bdab9049.chunk.js.map