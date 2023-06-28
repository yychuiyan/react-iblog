"use strict";(self.webpackChunkiblog_admin=self.webpackChunkiblog_admin||[]).push([[338],{482:function(e,t,n){var a=n(9439),r=n(8848),i=n(9016),o=n(2791),c=n(6211),s=n(184);t.Z=function(e){var t=(0,o.useState)(0),n=(0,a.Z)(t,2),u=n[0],l=n[1],d=(0,o.useState)(0),f=(0,a.Z)(d,2),m=f[0],g=f[1],h=(0,o.useState)(0),p=(0,a.Z)(h,2),Z=p[0],x=p[1];(0,o.useEffect)((function(){l(e.total),g(e.currentPage),x(e.pageSize)}),[e]);return(0,s.jsx)("div",{children:(0,s.jsx)(r.ZP,{locale:c.Z,children:(0,s.jsx)(i.Z,{style:{marginTop:"10px"},current:m,pageSize:Z,total:u,pageSizeOptions:[5,10,50,100],onChange:function(t,n){e.onChange(t,n)},showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"\u5171\u6709 ".concat(e," \u6761\u6570\u636e")}})})})}},2338:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(4165),r=n(5861),i=n(4942),o=n(1413),c=n(9439),s=n(5987),u=n(2791),l=n(9428),d=n(9389),f=n(7863),m=n(7309),g=n(6988),h=n(2516),p=n(2622),Z=n(5796),x=n(8687),v=n(7781),y=n(8863),C=n(482),j=n(7892),S=n.n(j),A=n(456),k=n(184),b=["index"],w=["title","editable","children","dataIndex","record","handleSave"],B=l.Z.confirm,_=d.Z.Search,T=u.createContext(null),I=function(e){e.index;var t=(0,s.Z)(e,b),n=f.Z.useForm(),a=(0,c.Z)(n,1)[0];return(0,k.jsx)(f.Z,{form:a,component:!1,children:(0,k.jsx)(T.Provider,{value:a,children:(0,k.jsx)("tr",(0,o.Z)({},t))})})},z=function(e){var t=e.title,n=e.editable,l=e.children,m=e.dataIndex,g=e.record,h=e.handleSave,p=(0,s.Z)(e,w),Z=(0,u.useState)(!1),x=(0,c.Z)(Z,2),v=x[0],y=x[1],C=(0,u.useRef)(null),j=(0,u.useContext)(T);(0,u.useEffect)((function(){v&&C.current.focus()}),[v]);var S=function(){y(!v),j.setFieldsValue((0,i.Z)({},m,g[m]))},A=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.validateFields();case 3:t=e.sent,S(),h((0,o.Z)((0,o.Z)({},g),t)),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=l;return n&&(b=v?(0,k.jsx)(f.Z.Item,{style:{margin:0},name:m,rules:[{required:!0,message:"".concat(t," is required.")}],children:(0,k.jsx)(d.Z,{ref:C,onPressEnter:A,onBlur:A})}):(0,k.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:S,children:l})),(0,k.jsx)("td",(0,o.Z)((0,o.Z)({},p),{},{children:b}))},F=(0,x.$j)(null,(function(e){return{BlogActions:(0,v.DE)(y,e)}}))((function(e){var t=(0,A.Z)(localStorage.getItem("token"))[0].role[0].role_type,n=function(t){var n=y.map((function(e){return e._id===t._id?{_id:e._id,name:t.name,articleNum:t.articleNum,createTime:t.createTime,updateTime:t.updateTime}:e}));j(n),e.BlogActions.asyncCategoryUpdateAction({name:t.name,id:t._id}).then((function(){e.BlogActions.asyncCategoriesAction(Y,M,"").then((function(e){var t=e.data,n=t.data,a=t.totalCount,r=t.page,i=t.pageSize;j(n),F(a),D(r),q(i)}))}))},i=[{title:"\u5206\u7c7b\u540d\u79f0(\u70b9\u51fb\u53ef\u7f16\u8f91)",dataIndex:"name",key:"name",onCell:function(e){return{record:e,editable:!0,dataIndex:"name",title:"\u5206\u7c7b\u540d\u79f0",handleSave:n}}},{title:"\u6587\u7ae0\u6570\u91cf",dataIndex:"articleNum",key:"articleNum"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createTime",key:"createTime",render:function(e){return e&&S()(1e3*e).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updateTime",key:"updateTime",render:function(e){return e&&S()(1e3*e).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u64cd\u4f5c",key:"action",render:function(e){return(0,k.jsx)("div",{children:(0,k.jsx)(m.Z,{type:"primary",danger:!0,shape:"circle",disabled:t,icon:(0,k.jsx)(p.Z,{}),onClick:function(){Q(e)},style:{marginRight:"5px"}})})}}],o=f.Z.useForm(),s=(0,c.Z)(o,1)[0],x=(0,u.useState)([]),v=(0,c.Z)(x,2),y=v[0],j=v[1],b=(0,u.useState)(0),w=(0,c.Z)(b,2),T=w[0],F=w[1],N=(0,u.useState)(1),P=(0,c.Z)(N,2),Y=P[0],D=P[1],E=(0,u.useState)(10),H=(0,c.Z)(E,2),M=H[0],q=H[1],O=(0,u.useState)(!1),R=(0,c.Z)(O,2),V=R[0],J=R[1];(0,u.useEffect)((function(){e.BlogActions.asyncCategoriesAction(Y,M,"").then((function(e){var t=e.data,n=t.data,a=t.totalCount,r=t.page,i=t.pageSize;j(n),F(a),D(r),q(i)}))}),[Y,M,e.BlogActions]);var K=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.validateFields();case 2:n=s.getFieldsValue(),g.ZP.success("\u5206\u7c7b\u65b0\u589e\u6210\u529f"),s.resetFields(),J(!1),e.BlogActions.asyncCategoryAddAction({name:n.title}).then((function(){e.BlogActions.asyncCategoriesAction(Y,M,"").then((function(e){var t=e.data.data;j(t)}))}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(t){B({title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u5417?",icon:(0,k.jsx)(Z.Z,{}),onOk:function(){e.BlogActions.asyncCategoryDeleteAction(t._id).then((function(n){return void 0===n?(g.ZP.error("\u5206\u7c7b\u5220\u9664\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"),!1):40001===n.code?(g.ZP.error("\u6587\u7ae0\u4e2d\u6709\u5173\u8054\u8be5\u5206\u7c7b\u4fe1\u606f\uff0c\u8bf7\u89e3\u7ed1\u540e\u518d\u6b21\u6267\u884c\u5220\u9664\u64cd\u4f5c"),!1):(j(y.filter((function(e){return e._id!==t._id}))),g.ZP.success("\u5206\u7c7b\u5220\u9664\u6210\u529f"),void e.BlogActions.asyncCategoriesAction(Y,M,"").then((function(e){var t=e.data,n=t.data,a=t.totalCount,r=t.page,i=t.pageSize;j(n),F(a),D(r),q(i)})))}))}})};return(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:"cate_title",children:[(0,k.jsx)(m.Z,{type:"primary",disabled:t,onClick:function(){J(!0)},className:"btn",children:"\u65b0\u589e\u5206\u7c7b"}),(0,k.jsx)(_,{className:"search",allowClear:!0,placeholder:"\u8bf7\u8f93\u5165\u5206\u7c7b\u540d\u79f0",onSearch:function(t){e.BlogActions.asyncCategoriesAction(Y,M,t).then((function(e){var t=e.data,n=t.data,a=t.totalCount,r=t.page,i=t.pageSize;j(n),F(a),D(r),q(i)}))},enterButton:!0})]}),(0,k.jsx)(l.Z,{open:V,title:(0,k.jsx)("div",{style:{textAlign:"left"},children:"\u6dfb\u52a0\u5206\u7c7b"}),okText:"\u65b0\u589e",cancelText:"\u53d6\u6d88",onCancel:function(){s.resetFields(),J(!1)},onOk:function(){K()},children:(0,k.jsx)(f.Z,{form:s,layout:"vertical",name:"basic",className:"userAddFrom",children:(0,k.jsx)(f.Z.Item,{name:"title",label:"\u540d\u79f0",rules:[{required:!0,message:"\u5206\u7c7b\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}],children:(0,k.jsx)(d.Z,{})})})}),(0,k.jsx)(h.Z,{columns:i,dataSource:y,rowKey:function(e){return e._id+Date.now()},pagination:!1,components:{body:{row:I,cell:z}}}),(0,k.jsx)(C.Z,{pageSize:M,currentPage:Y,total:T,onChange:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e.BlogActions.asyncCategoriesAction(t,n,a).then((function(e){var a=e.data.data;j(a),D(t),q(n)}))}})]})}))}}]);
//# sourceMappingURL=338.a842447e.chunk.js.map