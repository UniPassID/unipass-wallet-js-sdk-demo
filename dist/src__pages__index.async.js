"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[858],{5334:function(L,h,s){s.r(h),s.d(h,{default:function(){return j}});var c=s(57420),i=s.n(c),C=s(41576),E=s.n(C),g=s(77407),U=s.n(g),M=s(12598),n=s(66169),m=s(18028),P=s(72440),O=s(58757),f=s(44140),e=s(48902);function j(){var v=(0,O.useState)(!0),D=U()(v,2),d=D[0],x=D[1],o=(0,M.L)(),T=o.registerCode,b=o.loginCode,I=o.passwordToken,R=o.loading,W=function(){var u=E()(i()().mark(function l(r){var t;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T(r.email);case 2:t=a.sent,t&&f.m8.push("/register_step2");case 4:case"end":return a.stop()}},l)}));return function(r){return u.apply(this,arguments)}}(),y=function(){var u=E()(i()().mark(function l(r){var t,p;return i()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,I(r.email,r.password);case 2:if(t=_.sent,!t){_.next=8;break}return _.next=6,b(r.email);case 6:p=_.sent,p&&f.m8.push("/login_step2");case 8:case"end":return _.stop()}},l)}));return function(r){return u.apply(this,arguments)}}();return(0,e.jsxs)("div",{children:[d?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h3",{children:"step1: register"}),(0,e.jsxs)(n.Z,{name:"get verify code",labelCol:{span:4},wrapperCol:{span:16},onFinish:W,autoComplete:"off",children:[(0,e.jsx)(n.Z.Item,{label:"email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:(0,e.jsx)(m.Z,{})}),(0,e.jsx)(n.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(P.Z,{type:"primary",htmlType:"submit",children:"Next"})})]})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h3",{children:"step1: login"}),(0,e.jsxs)(n.Z,{name:"get verify code",labelCol:{span:4},wrapperCol:{span:16},onFinish:y,autoComplete:"off",children:[(0,e.jsx)(n.Z.Item,{label:"email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:(0,e.jsx)(m.Z,{})}),(0,e.jsx)(n.Z.Item,{label:"password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,e.jsx)(m.Z,{})}),(0,e.jsx)(n.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(P.Z,{type:"primary",loading:R,htmlType:"submit",children:"Next"})})]})]}),(0,e.jsx)("h4",{style:{cursor:"pointer"},onClick:function(){x(!d)},children:d?"login":"register"})]})}}}]);