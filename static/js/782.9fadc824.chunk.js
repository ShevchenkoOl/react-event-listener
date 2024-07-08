"use strict";(self.webpackChunkreact_event_listener=self.webpackChunkreact_event_listener||[]).push([[782,892],{782:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var a=e(433),c=e(439),o=e(791),s=e(892),l=e(694),i=e(984),r={container:"contacts_container__7CHN4",title:"contacts_title__ryyzt",list:"contacts_list__QBWBd",item:"contacts_item__82PmL",buttonGroup:"contacts_buttonGroup__TgxO5","red-border":"contacts_red-border__8C5A8",btn:"contacts_btn__w2CK-",btnDel:"contacts_btnDel__rnqwn",modalOverlay:"contacts_modalOverlay__uYIaQ",modalContainer:"contacts_modalContainer__8gSuQ",closeIcon:"contacts_closeIcon__mTD+C",text:"contacts_text__f65ag"},u=e(184),m=function(n){var t=n.name,e=n.onFindContact;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("label",{htmlFor:"find",children:"Find contact by name"}),(0,u.jsx)("input",{onChange:e,type:"text",name:"find",value:t})]})},d=function(n){var t=n.contactsList,e=n.onDeleteContact,a=n.onSelectContact,c=n.name,o=n.onFindContact;return(0,u.jsxs)("div",{className:r.container,children:[(0,u.jsx)("h2",{className:r.titleH2,children:"Contacts List:"}),(0,u.jsx)(m,{name:c,onFindContact:o}),t.length>0?(0,u.jsx)("ul",{className:r.list,children:t.map((function(n){return(0,u.jsxs)("li",{className:r.item,children:[(0,u.jsxs)("span",{children:[n.name,": ",n.number]}),(0,u.jsxs)("div",{className:r.buttonGroup,children:[(0,u.jsx)("button",{className:r.btnDel,onClick:function(){return e(n)},children:"Delete"}),(0,u.jsx)("button",{className:r.btn,onClick:function(){return a(n)},children:"Detail"})]})]},n.id)}))}):(0,u.jsx)("h2",{className:r.title,children:"No contacts found"})]})},h=function(n){var t=n.text,e=n.name,a=n.number,c=n.onSubmit,o=n.onNameChange,s=n.onNumberChange;return(0,u.jsxs)("div",{className:r.container,children:[(0,u.jsx)("h1",{className:r.title,children:t}),(0,u.jsxs)("form",{onSubmit:c,children:[(0,u.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,u.jsx)("input",{onChange:o,type:"text",name:"name",value:e}),(0,u.jsx)("label",{htmlFor:"number",children:"Number:"}),(0,u.jsx)("input",{onChange:s,type:"text",name:"number",value:a}),(0,u.jsx)("button",{className:r.btn,children:"Add contact"})]})]})},_=e(71),f=function(n){var t=n.contact,e=n.onClose;return(0,u.jsx)("div",{className:r.modalOverlay,children:(0,u.jsxs)("div",{className:r.modalContainer,children:[(0,u.jsx)(_.ZyS,{className:r.closeIcon,onClick:e}),(0,u.jsx)("h2",{className:r.title,children:"Contact Detail"}),(0,u.jsxs)("span",{className:r.text,children:[t.name,": ",t.number]})]})})},x=function(){var n=(0,o.useState)(""),t=(0,c.Z)(n,2),e=t[0],r=t[1],m=(0,o.useState)(""),_=(0,c.Z)(m,2),x=_[0],C=_[1],b=(0,o.useState)([]),j=(0,c.Z)(b,2),v=j[0],N=j[1],g=(0,o.useState)(null),p=(0,c.Z)(g,2),y=p[0],F=p[1],k=(0,o.useState)(""),S=(0,c.Z)(k,2),D=S[0],L=S[1],O=v.filter((function(n){return n.name.toLowerCase().includes(D.toLowerCase())}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.default,{}),(0,u.jsx)(h,{text:"Phone Book",name:e,number:x,onNameChange:function(n){r(n.target.value)},onNumberChange:function(n){C(n.target.value)},onSubmit:function(n){n.preventDefault();var t={id:(0,i.x0)(),name:e,number:x};""!==e||""!==x?(N([].concat((0,a.Z)(v),[t])),l.Notify.success("".concat(e," successful added to your phonebook!")),console.log(t),r(""),C("")):l.Notify.failure("To add a contact you need to fill in all fields")}}),v.length>0&&(0,u.jsx)(d,{name:D,contactsList:O,onDeleteContact:function(n){N(v.filter((function(t){return t.id!==n.id}))),l.Notify.success("".concat(n.name," successful deleted from your phonebook!"))},onSelectContact:function(n){F(n)},onFindContact:function(n){var t=n.target.value;L(t),console.log(t)}}),y&&(0,u.jsx)(f,{contact:y,onClose:function(){F(null)}})]})}},892:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});e(791);var a=e(87),c="homePage_container__AYzZD",o="homePage_title__m8Mdo",s="homePage_section__11nvh",l="homePage_nav__+OpNF",i="homePage_activeNav__71u68",r=e(184),u=function(){return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("h1",{className:o,children:"Event Listener"}),(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)(a.OL,{to:"/functionComponent",className:function(n){return n.isActive?"".concat(l," ").concat(i):l},children:"Using the Functional Component (hooks)"}),(0,r.jsx)(a.OL,{to:"/classComponent",className:function(n){return n.isActive?"".concat(l," ").concat(i):l},children:"Using the Class Component"}),(0,r.jsx)(a.OL,{to:"/Feedback",className:function(n){return n.isActive?"".concat(l," ").concat(i):l},children:"Feedback"}),(0,r.jsx)(a.OL,{to:"/Contacts",className:function(n){return n.isActive?"".concat(l," ").concat(i):l},children:"Contacts"})]})]})}}}]);
//# sourceMappingURL=782.9fadc824.chunk.js.map