"use strict";(self.webpackChunkchakra_react_phonebook=self.webpackChunkchakra_react_phonebook||[]).push([[319],{2319:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var s=r(5861),t=r(9439),a=r(7757),i=r.n(a),o=r(410),c=r(4190),l=r(5863),u=r(824),d=r(5777),h=r(8699),x=r(2791),p=r(1087),g=r(184),j=function(e){var n=e.handleLogin,r=(0,x.useState)(!1),s=(0,t.Z)(r,2),a=s[0],i=s[1],j=(0,o.ff)("gray.200","gray.700");return(0,g.jsx)(c.kC,{className:"loginForm",justify:"center",bg:j,children:(0,g.jsxs)(c.Kq,{spacing:1,mx:"auto",maxW:"lg",py:3,px:3,children:[(0,g.jsxs)(c.Kq,{align:"center",children:[(0,g.jsx)(c.X6,{fontSize:"2xl",children:"Sign in to your account "}),(0,g.jsx)(c.xv,{fontSize:"lg",color:"gray.600",children:"to enjoy your Phone Book\u270c\ufe0f"})]}),(0,g.jsx)(c.xu,{rounded:"lg",bg:(0,o.ff)("white","gray.700"),boxShadow:"lg",p:8,children:(0,g.jsxs)(c.Kq,{spacing:2,as:"form",onSubmit:n,children:[(0,g.jsxs)(l.NI,{id:"email",isRequired:!0,children:[(0,g.jsx)(l.lX,{children:"Email address"}),(0,g.jsx)(u.II,{type:"email",name:"email",placeholder:"Enter your email"})]}),(0,g.jsxs)(l.NI,{id:"password",isRequired:!0,children:[(0,g.jsx)(l.lX,{children:"Password"}),(0,g.jsxs)(u.BZ,{children:[(0,g.jsx)(u.II,{type:a?"text":"password",name:"password",pattern:"(?=.*\\d).{7,}",placeholder:"7 characters or more, please"}),(0,g.jsx)(u.xH,{h:"full",children:(0,g.jsx)(d.zx,{variant:"ghost",onClick:function(){return i((function(e){return!e}))},children:a?(0,g.jsx)(h.ON,{}):(0,g.jsx)(h.tp,{})})})]})]}),(0,g.jsxs)(c.Kq,{spacing:2,children:[(0,g.jsx)(c.Kq,{direction:{base:"column",sm:"row"},align:"start",justify:"space-between"}),(0,g.jsx)(d.zx,{type:"submit",bg:"blue.400",color:"white",_hover:{bg:"blue.500"},children:"Sign in"})]}),(0,g.jsx)(c.Kq,{pt:1,children:(0,g.jsxs)(c.xv,{align:"center",children:["Need an account? Register now!",(0,g.jsx)(c.rU,{as:p.OL,to:"/register",color:"blue.400",fontSize:"lg",ml:"1",children:"Sign Up"})]})})]})})]})})},f=r(3402),m=r(5048),w=r(3541),b=r(4903);function y(){var e=(0,b.useLogInUserMutation)(),n=(0,t.Z)(e,1)[0],r=(0,m.I0)(),a=function(){var e=(0,s.Z)(i().mark((function e(s){var t,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),t=s.target,e.next=4,n({email:t.elements.email.value,password:t.elements.password.value}).unwrap();case 4:a=e.sent,(o=a.user.name)&&f.Am.success("Hello ".concat(o," \ud83e\udd73"),{position:"top-center"}),r((0,w.Dj)(a)),t.reset();case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsx)(j,{handleLogin:a})}}}]);
//# sourceMappingURL=319.0994bda2.chunk.js.map