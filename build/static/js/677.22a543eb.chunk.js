"use strict";(self.webpackChunkiblog_admin=self.webpackChunkiblog_admin||[]).push([[677],{4327:function(e,n,t){t.d(n,{Z:function(){return f}});var s=t(5529),i=t(7309),r=t(50),l=t(3834),a=t(9372),c=t(446),o=t(5323),u=(t(2791),t(8687)),d=t(4880),h=t(7892),m=t.n(h),Z=t(184),f=(0,u.$j)((function(e){return{isCollapsed:e.SideMenuStateReducer.isCollapsed}}),null)((0,d.EN)((function(e){var n=e.time,t=e.showBack,u=e.onRefresh,d=e.onSave,h=e.onBack,f=e.onDraft,p=e.onPublish,x=n?"\u4e0a\u6b21\u4fdd\u5b58\u65f6\u95f4\uff1a".concat(m()(1e3*n).format("YYYY-MM-DD HH:mm:ss")):"\u6682\u65e0\u64cd\u4f5c",g=e.isCollapsed?"calc(100% - 128px)":"calc(100% - 248px)";return(0,Z.jsx)("div",{children:(0,Z.jsx)(s.Z,{className:"save_card",bordered:!1,style:{width:g},children:(0,Z.jsxs)("div",{className:"save",children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)(r.Z,{}),(0,Z.jsx)("span",{children:x})]}),(0,Z.jsxs)("div",{className:"save_right",children:[t&&(0,Z.jsx)(i.Z,{onClick:h||function(){e.history.goBack()},type:"primary",ghost:!0,icon:(0,Z.jsx)(l.Z,{}),className:"save_right_btn",children:"\u8fd4\u56de"}),h&&(0,Z.jsx)(i.Z,{onClick:h,type:"primary",ghost:!0,icon:(0,Z.jsx)(a.Z,{}),className:"save_right_btn",children:"\u8fd4\u56de"}),u&&(0,Z.jsx)(i.Z,{onClick:u,type:"primary",ghost:!0,icon:(0,Z.jsx)(c.Z,{}),className:"save_right_btn",children:"\u5237\u65b0"}),d&&(0,Z.jsx)(i.Z,{onClick:d,icon:(0,Z.jsx)(o.Z,{}),className:"save_right_btn",children:"\u4fdd\u5b58"}),f&&(0,Z.jsx)(i.Z,{onClick:f,icon:(0,Z.jsx)(o.Z,{}),className:"save_right_btn",children:"\u4fdd\u5b58\u8349\u7a3f"}),p&&(0,Z.jsx)(i.Z,{onClick:p,icon:(0,Z.jsx)(o.Z,{}),className:"save_right_btn",children:"\u53d1\u5e03\u6587\u7ae0"})]})]})})})})))},3802:function(e,n,t){t.d(n,{Z:function(){return x}});var s=t(9439),i=t(2791),r=t(9286),l=t(6988),a=t(5518),c=t(9428),o=t(8687),u=t(7781),d=t(8863),h=t(7863),m=t(7309),Z=t(9389),f=t(184),p=function(e){var n=h.Z.useForm(),t=(0,s.Z)(n,1)[0],r=(0,i.useState)(!1),l=(0,s.Z)(r,2),a=l[0],o=l[1];(0,i.useEffect)((function(){e.fileList.length>0&&t.setFieldsValue({url:e.fileList[0].thumbUrl?e.fileList[0].thumbUrl:""})}),[t,e.fileList,e.imgUrl]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(m.Z,{className:"btn-input",onClick:function(){o(!0),""===e.imgUrl.url&&t.resetFields(),e.fileList.length>0&&t.setFieldsValue({url:e.fileList[0].thumbUrl?e.fileList[0].thumbUrl:""})},type:"primary",children:"\u8f93\u5165\u94fe\u63a5"}),(0,f.jsx)("div",{children:(0,f.jsx)(c.Z,{forceRender:!0,title:(0,f.jsx)("div",{style:{textAlign:"left"},children:"\u56fe\u7247\u94fe\u63a5 "}),open:a,onOk:function(){var n=t.getFieldsValue();e.onChangeVal(n.url),o(!1)},onCancel:function(){o(!1)},children:(0,f.jsx)(h.Z,{form:t,children:(0,f.jsx)(h.Z.Item,{label:"\u56fe\u7247\u94fe\u63a5",name:"url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u56fe\u7247\u94fe\u63a5"}],children:(0,f.jsx)(Z.Z,{placeholder:"\u8bf7\u8f93\u5165\u56fe\u7247\u94fe\u63a5"})})})})})]})},x=(0,o.$j)(null,(function(e){return{BlogActions:(0,u.DE)(d,e)}}))((function(e){var n=(0,i.useState)(!1),t=(0,s.Z)(n,2),o=t[0],u=t[1],d=(0,i.useState)(""),h=(0,s.Z)(d,2),m=h[0],Z=h[1],x=(0,i.useState)(""),g=(0,s.Z)(x,2),j=g[0],v=g[1],b=(0,i.useState)([]),y=(0,s.Z)(b,2),C=y[0],k=y[1],A=(0,i.useState)({}),w=(0,s.Z)(A,2),S=w[0],U=w[1];(0,i.useEffect)((function(){k(void 0!==e.imgUrlArr?e.imgUrlArr:[])}),[e.imgUrlArr]);var _=(0,f.jsxs)("div",{children:[(0,f.jsx)(r.Z,{}),(0,f.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{listType:"picture-card",fileList:C,customRequest:function(n){e.BlogActions.asyncFileUploadAction(n).then((function(n){l.ZP.success("\u4e0a\u4f20\u6210\u529f"),n&&(e.handleChange(n),k([{name:n.name,thumbUrl:n.url}]))}))},onPreview:function(e){Z(e.thumbUrl),v(e.name),u(!0)},beforeUpload:function(e){var n="image/jpeg"===e.type||"image/png"===e.type||"image/webp"===e.type||"image/jpg"===e.type||"image/gif"===e.type;n||l.ZP.error("\u53ea\u5141\u8bb8\u4e0a\u4f20 JPG/PNG/WEBP/JPG/GIT \u6587\u4ef6!");var t=e.size/1024/1024<2;return t||l.ZP.error("\u56fe\u7247\u5927\u5c0f\u5fc5\u987b\u5c0f\u4e8e 2MB!"),n&&t},onRemove:function(n){e.handleRemove(n),k([]),U({url:""})},children:C.length>=1?null:_}),(0,f.jsx)(c.Z,{open:o,title:j,footer:null,onCancel:function(){return u(!1)},children:(0,f.jsx)("img",{alt:"example",style:{width:"100%"},src:m})}),(0,f.jsx)(p,{onChangeVal:function(n){e.handleChange(n);var t=n.indexOf("images"),s=n.indexOf("?",t),i=n.substring(t,s);k([{name:i,thumbUrl:n}])},fileList:C||[{name:"",thumbUrl:""}],imgUrl:S})]})}))},677:function(e,n,t){t.r(n);var s=t(4165),i=t(1413),r=t(5861),l=t(9439),a=t(2791),c=t(9389),o=t(458),u=t(7863),d=t(6090),h=t(6988),m=t(6106),Z=t(914),f=t(1306),p=t(4327),x=t(8687),g=t(7781),j=t(8863),v=t(3802),b=t(1092),y=t.n(b),C=t(184),k=c.Z.TextArea,A=o.Z.Option,w={labelCol:{span:6},wrapperCol:{span:18}},S={labelCol:{span:0},wrapperCol:{span:24}};n.default=(0,x.$j)(null,(function(e){return{BlogActions:(0,g.DE)(j,e)}}))((function(e){var n=u.Z.useForm(),t=(0,l.Z)(n,1)[0],x=(0,a.useState)([]),g=(0,l.Z)(x,2),j=g[0],b=g[1],U=(0,a.useState)([]),_=(0,l.Z)(U,2),F=_[0],B=_[1],L=(0,a.useState)(0),N=(0,l.Z)(L,1)[0],P=(0,a.useState)(0),I=(0,l.Z)(P,1)[0],T=(0,a.useState)(),E=(0,l.Z)(T,1)[0],R=(0,a.useRef)(),D=(0,a.useState)(!0),V=(0,l.Z)(D,2),q=V[0],G=V[1],M=(0,a.useState)(!0),O=(0,l.Z)(M,2),Y=O[0],$=O[1],H=(0,a.useState)(!1),J=(0,l.Z)(H,2),z=J[0],W=J[1],K=(0,a.useState)(),Q=(0,l.Z)(K,2),X=Q[0],ee=Q[1];(0,a.useEffect)((function(){e.BlogActions.asyncCategoriesAction(N,I,"").then((function(e){var n=e.data.data;B(n)}))}),[N,I,e.BlogActions]),(0,a.useEffect)((function(){e.BlogActions.asyncTagsAction(N,I,"").then((function(e){var n=e.data.data;b(n)}))}),[N,I,e.BlogActions]);var ne=function(){var n=(0,r.Z)((0,s.Z)().mark((function n(){var r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.validateFields();case 2:return n.next=4,t.getFieldsValue();case 4:r=n.sent,"object"===typeof X&&(r.cover=X.url),r.cover=X,e.BlogActions.asyncArticleAddAction((0,i.Z)((0,i.Z)({},r),{},{publishStatus:2,status:1,views:0,comment:0,like:0,isComment:q,isLike:Y,isTop:z})).then((function(n){d.Z.info({message:"\u65b0\u589e\u6210\u529f-\u4fdd\u5b58\u5230\u8349\u7a3f",description:"\u8df3\u8f6c\u5230\u6587\u7ae0\u5217\u8868"}),setTimeout((function(){e.history.push("/admin/article/list")}),500)}));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),te=function(){var n=(0,r.Z)((0,s.Z)().mark((function n(){var r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.validateFields();case 2:(r=t.getFieldsValue()).cover="object"===typeof X?X.url:X,e.BlogActions.asyncArticleAddAction((0,i.Z)((0,i.Z)({},r),{},{publishStatus:1,status:1,views:0,comment:0,like:0,isComment:q,isLike:Y,isTop:z})).then((function(n){if(console.log("res",n),"\u8be5\u6587\u7ae0\u5df2\u5b58\u5728"===n.msg)return h.ZP.warning("\u6587\u7ae0\u5df2\u5b58\u5728\uff0c\u8bf7\u67e5\u770b\u540e\u518d\u6b21\u63d0\u4ea4\uff01"),!1;d.Z.info({message:"\u65b0\u589e\u6210\u529f-\u53d1\u5e03\u5230\u7ebf\u4e0a",description:"\u5373\u5c06\u8df3\u8f6c\u5230\u6587\u7ae0\u5217\u8868"}),setTimeout((function(){e.history.push("/admin/article/list")}),500)}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p.Z,{time:E,onDraft:ne,onPublish:te}),(0,C.jsxs)("div",{className:"about",children:["\u65b0\u589e\u6587\u7ae0",(0,C.jsxs)(u.Z,{form:t,children:[(0,C.jsxs)(m.Z,{children:[(0,C.jsxs)(Z.Z,{span:12,children:[(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({name:"title"},w),{},{label:"\u6587\u7ae0\u6807\u9898",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6587\u7ae0\u6807\u9898"}],children:(0,C.jsx)(c.Z,{placeholder:"\u8bf7\u8f93\u5165\u6587\u7ae0\u6807\u9898"})})),(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({label:"\u5206\u7c7b",name:"categories"},w),{},{rules:[{required:!0,message:"\u5206\u7c7b\u4e0d\u80fd\u4e3a\u7a7a"}],children:(0,C.jsx)(o.Z,{showSearch:!0,style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u5206\u7c7b\u4fe1\u606f",optionFilterProp:"children",children:F.map((function(e){return(0,C.jsx)(A,{value:e.name,children:e.name},e._id)}))})})),(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({label:"\u6807\u7b7e",name:"tags"},w),{},{rules:[{required:!0,message:"\u6807\u7b7e\u4e0d\u80fd\u4e3a\u7a7a"}],children:(0,C.jsx)(o.Z,{mode:"multiple",style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u5bf9\u5e94\u7684\u6807\u7b7e",optionLabelProp:"label",children:j.map((function(e){return(0,C.jsx)(A,{value:e.name,label:e.name,children:e.name},e._id)}))})})),(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({name:"introduction"},w),{},{label:"\u6587\u7ae0\u7b80\u4ecb",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6587\u7ae0\u7b80\u4ecb"}],children:(0,C.jsx)(k,{showCount:!0,rows:6,maxLength:500})}))]}),(0,C.jsxs)(Z.Z,{span:10,children:[(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({name:"cover"},w),{},{label:"\u6587\u7ae0\u5c01\u9762",children:(0,C.jsx)(v.Z,{handleChange:function(e){ee(e)},handleRemove:function(e){ee("")}})})),(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({name:"isComment"},w),{},{label:"\u8bc4\u8bba",children:(0,C.jsx)(f.Z,{checked:q,onChange:function(e){G(e)}})})),(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({name:"isLike"},w),{},{label:"\u70b9\u8d5e",children:(0,C.jsx)(f.Z,{checked:Y,onChange:function(e){$(e)}})})),(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({name:"isTop"},w),{},{label:"\u7f6e\u9876",children:(0,C.jsx)(f.Z,{checked:z,onChange:function(e){W(e)}})}))]})]}),(0,C.jsx)(m.Z,{children:(0,C.jsx)(Z.Z,{span:24,children:(0,C.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({name:"content"},S),{},{style:{width:"100%"},children:(0,C.jsx)(y(),{preview:!1,subfield:!1,placeholder:"\u8bf7\u64b0\u5199\u6587\u7ae0",ref:R,addImg:function(n){return function(n){var t=new FormData;t.append("file",n),e.BlogActions.asyncFileUploadAction(t).then((function(e){e&&R.current.$img2Url(n.name,e.url)}))}(n)}})}))})})]})]})]})}))}}]);
//# sourceMappingURL=677.22a543eb.chunk.js.map