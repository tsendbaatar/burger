(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],[,,,,,,,,,,,function(e,t,r){e.exports={BreadTop:"style_BreadTop__qhFgz",Seed:"style_Seed__1aIWm",Second:"style_Second__G5hMM",Third:"style_Third__2ydru",Fourth:"style_Fourth__2Krnz",Salad:"style_Salad__2_ZHR",Meat:"style_Meat__pos4e",Cheese:"style_Cheese__3DKMp",Bacon:"style_Bacon__2VVbq",BreadBottom:"style_BreadBottom__1A5SR"}},,,,,,,,,function(e,t,r){e.exports={SideBar:"style_SideBar__2v786",Logo:"style_Logo__22u-p",Open:"style_Open__3trwf",Close:"style_Close__27FYO"}},,,function(e,t,r){e.exports={BuildControl:"style_BuildControl__1rMzq",Label:"style_Label__qF8_y",Less:"style_Less__3HFds",More:"style_More__3LilQ"}},,,,,,function(e,t,r){e.exports={MenuItem:"style_MenuItem__zC99A",active:"style_active__29kVU"}},,,function(e,t,r){e.exports={Toolbar:"style_Toolbar__3Z-aT",HideOnMobile:"style_HideOnMobile__2t1fU"}},function(e,t,r){e.exports={BuildControls:"style_BuildControls__2xDPq",OrderButton:"style_OrderButton__3xGnj",enable:"style_enable__sUOL1"}},function(e,t,r){e.exports={Button:"style_Button__2SudY",Success:"style_Success__EvJlk",Danger:"style_Danger__fyo3W"}},,,,,,,,,,function(e,t,r){e.exports={Content:"style_Content__2hza8"}},function(e,t,r){e.exports={HamburgerMenu:"style_HamburgerMenu__2VIHo"}},function(e,t,r){e.exports={Logo:"style_Logo__1FPMq"}},,function(e,t,r){e.exports={Menu:"style_Menu__35Sc0"}},function(e,t,r){e.exports={Burger:"style_Burger__TG-7P"}},function(e,t,r){e.exports={Shadow:"style_Shadow__2VCB_"}},function(e,t,r){e.exports={Modal:"style_Modal__3oiip"}},function(e,t,r){e.exports={Loader:"style_Loader__2LOQD",load1:"style_load1__2nXqX"}},function(e,t,r){e.exports={Order:"style_Order__13zH1"}},function(e,t,r){e.exports={ContactData:"style_ContactData__3qJCq"}},function(e,t,r){e.exports={ShippingPage:"style_ShippingPage__240kX"}},function(e,t,r){e.exports={Login:"style_Login__K1Abr"}},function(e,t,r){e.exports={SignUp:"style_SignUp__OoAfF"}},,,,,,,function(e,t,r){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1),c=r.n(s),o=r(24),a=r.n(o),i=(r(64),r(6)),u=r(7),d=r(9),l=r(8),j=r(44),b=r.n(j),p=r(45),O=r.n(p),h=function(e){return Object(n.jsxs)("div",{onClick:e.toggleSideBar,className:O.a.HamburgerMenu,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})},g=r(46),f=r.n(g),_=r.p+"static/media/burger-logo.ec69c7f6.png",x=function(){return Object(n.jsx)("div",{className:f.a.Logo,children:Object(n.jsx)("img",{alt:"logo",src:_})})},m=r(4),S=r(48),y=r.n(S),v=r(15),R=r(29),C=r.n(R),E=function(e){return Object(n.jsx)("li",{className:C.a.MenuItem,children:Object(n.jsx)(v.b,{exact:e.exact,activeClassName:C.a.active,to:e.link,children:e.children})})},I=Object(m.b)((function(e){return{userId:e.signupReducer.userId}}))((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:y.a.Menu,children:e.userId?Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(E,{exact:!0,link:"/",children:"\u0428\u0438\u043d\u044d \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430"}),Object(n.jsx)(E,{link:"/orders",children:"\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u0430\u043d\u0443\u0443\u0434"}),Object(n.jsx)(E,{link:"/logout",children:"\u0413\u0430\u0440\u0430\u0445"})]}):Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(E,{link:"/login",children:"\u041d\u044d\u0432\u0442\u0440\u044d\u0445"}),Object(n.jsx)(E,{link:"/signup",children:"\u0411\u04af\u0440\u0442\u0433\u04af\u04af\u043b\u044d\u0445"})]})})})})),N=r(32),w=r.n(N),k=function(e){return Object(n.jsxs)("header",{className:w.a.Toolbar,children:[Object(n.jsx)("div",{children:Object(n.jsx)(h,{toggleSideBar:e.toggleSideBar})}),Object(n.jsx)("div",{children:Object(n.jsx)(x,{})}),Object(n.jsx)("nav",{className:w.a.HideOnMobile,children:Object(n.jsx)(I,{})})]})},B=r(11),T=r.n(B),D=function(e){return"bread-top"===e.type?Object(n.jsxs)("div",{className:T.a.BreadTop,children:[Object(n.jsx)("div",{className:T.a.Seed}),Object(n.jsx)("div",{className:"".concat(T.a.Seed," ").concat(T.a.Second)}),Object(n.jsx)("div",{className:"".concat(T.a.Seed," ").concat(T.a.Third)}),Object(n.jsx)("div",{className:"".concat(T.a.Seed," ").concat(T.a.Fourth)})]}):"salad"===e.type?Object(n.jsx)("div",{className:T.a.Salad}):"bacon"===e.type?Object(n.jsx)("div",{className:T.a.Bacon}):"meat"===e.type?Object(n.jsx)("div",{className:T.a.Meat}):"cheese"===e.type?Object(n.jsx)("div",{className:T.a.Cheese}):"bread-bottom"===e.type?Object(n.jsx)("div",{className:T.a.BreadBottom}):Object(n.jsx)("div",{children:"..."})},M=r(49),L=r.n(M),A=r(5),U=Object(m.b)((function(e){return{orts:e.burgerReducer.ingredients}}))(Object(A.g)((function(e){var t=Object.entries(e.orts),r=[];return t.map((function(e){for(var t=0;t<e[1];t++)r.push(Object(n.jsx)(D,{type:e[0]},"".concat(e[0]).concat(t+1)))})),0===r.length&&(r=Object(n.jsx)("p",{children:"\u0425\u0430\u0447\u0438\u0440\u0442\u0430\u0439 \u0442\u0430\u043b\u0445\u043d\u044b \u043e\u0440\u0446\u0438\u0439\u0433 \u0441\u043e\u043d\u0433\u043e\u043d\u043e \u0443\u0443 ..."})),Object(n.jsxs)("div",{className:L.a.Burger,children:[Object(n.jsx)(D,{type:"bread-top"}),r,Object(n.jsx)(D,{type:"bread-bottom"})]})}))),P=r(2),G=r(23),H=r.n(G),V=function(e){return Object(n.jsxs)("div",{className:H.a.BuildControl,children:[Object(n.jsx)("div",{className:H.a.Label,children:e.orts}),Object(n.jsx)("button",{disabled:e.disabled[e.type],onClick:function(){return e.ortsHasah(e.type)},className:H.a.Less,children:"\u0425\u0430\u0441\u0430\u0445"}),Object(n.jsx)("button",{onClick:function(){return e.ortsNemeh(e.type)},className:H.a.More,children:"\u041d\u044d\u043c\u044d\u0445"})]})},F=r(33),q=r.n(F),z=Object(m.b)((function(e){return{ingredients:e.burgerReducer.ingredients,price:e.burgerReducer.totalPrice,purchasing:e.burgerReducer.purchasing,ingredientName:e.burgerReducer.ingredientName}}),(function(e){return{ortsNemeh:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ortsNer:e}}(t))},ortsHasah:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ortsNer:e}}(t))}}}))((function(e){var t=Object(P.a)({},e.ingredients);for(var r in t)t[r]=t[r]<=0;return Object(n.jsxs)("div",{className:q.a.BuildControls,children:[Object(n.jsxs)("p",{children:["\u0411\u0443\u0440\u0433\u0435\u0440\u0438\u0439\u043d \u04af\u043d\u044d: ",e.price]}),Object.keys(e.ingredientName).map((function(r){return Object(n.jsx)(V,{ortsNemeh:e.ortsNemeh,ortsHasah:e.ortsHasah,disabled:t,type:r,orts:e.ingredientName[r]},r)})),Object(n.jsx)("button",{onClick:e.showConfirmModal,disabled:!e.purchasing,className:q.a.OrderButton,children:"\u0417\u0430\u0445\u0438\u0430\u043b\u0430\u0445"})]})})),Q=r(50),W=r.n(Q),X=function(e){return e.show?Object(n.jsx)("div",{onClick:e.onClick,className:W.a.Shadow}):null},J=r(51),Y=r.n(J),K=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(X,{show:e.show,clickClose:e.closeConfirmModal}),Object(n.jsx)("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},className:Y.a.Modal,children:e.children})]})},Z=r(34),$=r.n(Z),ee=function(e){return Object(n.jsx)("button",{onClick:e.clicked,className:"".concat($.a.Button," ").concat($.a[e.buttonType]),children:e.text})},te=Object(m.b)((function(e){return{ingredients:e.burgerReducer.ingredients,ingredientNames:e.burgerReducer.ingredientName,price:e.burgerReducer.totalPrice}}))((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430"}),Object(n.jsx)("p",{children:"\u0422\u0430\u043d\u044b \u0441\u043e\u043d\u0433\u043e\u0441\u043e\u043d \u043e\u0440\u0446\u0443\u0443\u0434"}),Object(n.jsx)("ul",{children:Object.keys(e.ingredients).map((function(t){return Object(n.jsxs)("li",{children:[e.ingredientNames[t]," : ",e.ingredients[t]]},t)}))}),Object(n.jsx)("p",{children:Object(n.jsxs)("b",{children:["\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u044b\u043d \u0434\u04af\u043d: ",e.price," \u0442\u04e9\u0433\u0440\u04e9\u0433"]})}),Object(n.jsx)("p",{children:"\u0426\u0430\u0430\u0448\u0430\u0430 \u04af\u0440\u0433\u044d\u043b\u0436\u043b\u04af\u04af\u043b\u044d\u0445 \u04af\u04af."}),Object(n.jsx)(ee,{clicked:e.onCancel,buttonType:"Danger",text:"\u0422\u0430\u0442\u0433\u0430\u043b\u0437\u0430\u0445"}),Object(n.jsx)(ee,{clicked:e.onContinue,buttonType:"Success",text:"\u04ae\u0440\u0433\u044d\u043b\u0436\u043b\u04af\u04af\u043b\u044d\u0445"})]})})),re=r(19),ne=r.n(re),se=ne.a.create({baseURL:"https://burger-c9afd.firebaseio.com/"}),ce=r(52),oe=r.n(ce),ae=function(e){return Object(n.jsx)("div",{className:oe.a.Loader,children:"Loading..."})},ie=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={confirmOrder:!1,lastCustomerName:"N/A",loading:!1},e.showConfirmModal=function(){e.setState({confirmOrder:!0})},e.closeConfirmModal=function(){e.setState({confirmOrder:!1})},e.continueOrder=function(){var t=[];for(var r in e.props.burgeriinOrts)t.push(r+"="+e.props.burgeriinOrts[r]);t.push("dun="+e.props.niitUne);t.join("&");e.props.history.push("/ship"),e.closeConfirmModal()},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(K,{closeConfirmModal:this.closeConfirmModal,show:this.state.confirmOrder,children:this.state.loading?Object(n.jsx)(ae,{}):Object(n.jsx)(te,{onCancel:this.closeConfirmModal,onContinue:this.continueOrder})}),this.state.loading&&Object(n.jsx)(ae,{}),Object(n.jsxs)("p",{children:["\u0421\u04af\u04af\u043b\u0447\u0438\u0439\u043d \u0437\u0430\u0445\u0438\u0430\u043b\u0430\u0433\u0447: ",this.state.lastCustomerName]}),Object(n.jsx)(U,{}),Object(n.jsx)(z,{showConfirmModal:this.showConfirmModal,ortsNemeh:this.props.burgertOrtsNem,ortsHasah:this.props.burgereesOrtsHas})]})}}]),r}(s.Component),ue=r(20),de=r.n(ue),le=function(e){var t=[de.a.SideBar,de.a.Close];return e.showSideBar&&(t=[de.a.SideBar,de.a.Open]),Object(n.jsxs)("div",{children:[Object(n.jsx)(X,{show:e.showSideBar,onClick:e.toggleSideBar}),Object(n.jsx)("div",{className:t.join(" "),children:Object(n.jsxs)("div",{className:de.a.Logo,children:[Object(n.jsx)(x,{}),Object(n.jsx)(I,{})]})})]})},je=(r(87),r(53)),be=r.n(je),pe=function(e){return Object(n.jsxs)("div",{className:be.a.Order,children:[Object(n.jsxs)("p",{children:["\u041e\u0440\u0446 : \u0413\u0430\u0445\u0430\u0439\u043d \u043c\u0430\u0445 : ",e.order.ingredients.bacon,", \u0421\u0430\u043b\u0430\u0434 :"," ",e.order.ingredients.salad,", \u04ae\u0445\u0440\u0438\u0439\u043d \u043c\u0430\u0445 :"," ",e.order.ingredients.meat,", \u0411\u044f\u0441\u043b\u0430\u0433 :"," ",e.order.ingredients.cheese]}),Object(n.jsxs)("p",{children:["\u0425\u0430\u044f\u0433 : ",e.order.address.name," | ",e.order.address.street," |",e.order.address.city]}),Object(n.jsxs)("p",{children:["\u04ae\u043d\u0438\u0439\u043d \u0434\u04af\u043d : ",Object(n.jsxs)("strong",{children:[e.order.price,"\u20ae"]})]})]})},Oe=function(){return{type:"LOAD_ORDERS_START"}},he=function(e){return{type:"LOAD_ORDERS_SUCCESS",orders:e}},ge=function(e){return{type:"LOAD_ORDERS_ERROR",error:e}},fe=function(){return{type:"SAVE_ORDER_START"}},_e=function(){return{type:"SAVE_ORDER_SUCCESS"}},xe=function(e){return{type:"SAVE_ORDER_ERROR",error:e}},me=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.loadOrders(this.props.userId)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.props.loading?Object(n.jsx)(ae,{}):this.props.orders.map((function(e){return Object(n.jsx)(pe,{order:e[1]},e[0])}))})}}]),r}(c.a.Component),Se=Object(m.b)((function(e){return{orders:e.orderReducer.orders,loading:e.orderReducer.loading,userId:e.signupReducer.userId}}),(function(e){return{loadOrders:function(t){return e(function(e){return function(t,r){t(Oe());var n=r().signupReducer.token;se.get("/orders.json?&auth=".concat(n,'&orderBy="userId"&equalTo="').concat(e,'"')).then((function(e){var r=Object.entries(e.data).reverse();t(he(r))})).catch((function(e){return t(ge(e))}))}}(t))}}}))(me),ye=r(54),ve=r.n(ye),Re=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:null,city:null,street:null},e.changeName=function(t){e.setState({name:t.target.value})},e.changeStreet=function(t){e.setState({street:t.target.value})},e.changeCity=function(t){e.setState({city:t.target.value})},e.saveOrder=function(){var t={userId:e.props.userId,ingredients:e.props.ingredients,price:e.props.price,address:{name:e.state.name,city:e.state.city,street:e.state.street}};e.props.saveOrderAction(t)},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(){this.props.newOrderStatus.finished&&!this.props.newOrderStatus.error&&this.props.history.replace("/orders")}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:ve.a.ContactData,children:["\u0414\u04af\u043d: ",this.props.price," \u20ae",Object(n.jsx)("div",{children:this.props.newOrderStatus.error&&"\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u044b\u0433 \u0445\u0430\u0434\u0433\u0430\u043b\u0430\u0445 \u044f\u0432\u0446\u0430\u0434 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430 : ".concat(this.props.newOrderStatus.error)}),this.props.newOrderStatus.saving?Object(n.jsx)(ae,{}):Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{onChange:this.changeName,type:"text",name:"name",placeholder:"\u0422\u0430\u043d\u044b \u043d\u044d\u0440"}),Object(n.jsx)("input",{onChange:this.changeStreet,type:"text",name:"street",placeholder:"\u0422\u0430\u043d\u044b \u0433\u044d\u0440\u0438\u0439\u043d \u0445\u0430\u044f\u0433"}),Object(n.jsx)("input",{onChange:this.changeCity,type:"text",name:"city",placeholder:"\u0422\u0430\u043d\u044b \u0445\u043e\u0442"}),Object(n.jsx)(ee,{text:"\u0418\u043b\u0433\u044d\u044d\u0445",btnType:"Success",clicked:this.saveOrder})]})]})}}]),r}(c.a.Component),Ce=Object(m.b)((function(e){return{price:e.burgerReducer.totalPrice,ingredients:e.burgerReducer.ingredients,newOrderStatus:e.orderReducer.newOrder,userId:e.signupReducer.userId}}),(function(e){return{saveOrderAction:function(t){return e(function(e){return function(t,r){t(fe());var n=r().signupReducer.token;se.post("/orders.json?auth=".concat(n),e).then((function(e){t(_e())})).catch((function(e){t(xe(e))}))}}(t))}}}))(Object(A.g)(Re)),Ee=r(55),Ie=r.n(Ee),Ne=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).cancelOrder=function(){e.props.history.goBack()},e.showContactData=function(){e.props.history.replace("/ship/contact")},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:Ie.a.ShippingPage,children:[Object(n.jsx)("p",{children:Object(n.jsx)("strong",{children:"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430 \u0430\u043c\u0442\u0442\u0430\u0439 \u0431\u0430\u0439\u0445 \u0431\u043e\u043b\u043d\u043e \u0433\u044d\u0436 \u043d\u0430\u0439\u0434\u0430\u0436 \u0431\u0430\u0439\u043d\u0430."})}),Object(n.jsx)("p",{children:Object(n.jsxs)("strong",{children:["\u0414\u04af\u043d:",this.props.price]})}),Object(n.jsx)(U,{}),Object(n.jsx)(ee,{clicked:this.cancelOrder,btnType:"Danger",text:"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u042b\u0413 \u0426\u0423\u0426\u041b\u0410\u0425"}),Object(n.jsx)(ee,{clicked:this.showContactData,btnType:"Success",text:"\u0425\u04ae\u0420\u0413\u042d\u041b\u0422\u0418\u0419\u041d \u041c\u042d\u0414\u042d\u042d\u041b\u042d\u041b \u041e\u0420\u0423\u0423\u041b\u0410\u0425"}),Object(n.jsx)(A.b,{path:"/ship/contact",children:Object(n.jsx)(Ce,{})})]})}}]),r}(c.a.Component),we=Object(m.b)((function(e){return{price:e.burgerReducer.totalPrice}}))(Ne),ke=r(56),Be=r.n(ke),Te=function(){return{type:"SIGNUP_USER_START"}},De=function(e,t){return{type:"SIGNUP_USER_SUCCESS",token:e,userId:t}},Me=function(e){return{type:"SIGNUP_USER_ERROR",Error:e}},Le=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expireDate"),localStorage.removeItem("refreshToken"),{type:"LOGOUT"}},Ae=function(e){return function(t){setTimeout((function(){t(Le())}),e)}},Ue=function(){return{type:"LOGIN_USER_START"}},Pe=function(e,t){return{type:"LOGIN_USER_SUCCESS",token:e,userId:t}},Ge=function(e){return{type:"LOGIN_USER_ERROR",error:e}},He=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword=function(t){e.setState({password:t.target.value})},e.login=function(){e.props.login(e.state.email,e.state.password)},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:Be.a.Login,children:[this.props.userId&&Object(n.jsx)(A.a,{to:"/orders"}),Object(n.jsx)("input",{onChange:this.changeEmail,type:"text",placeholder:"\u0418\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433"}),Object(n.jsx)("input",{onChange:this.changePassword,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433"}),this.props.loginIn&&Object(n.jsx)(ae,{}),this.props.firebaseError&&Object(n.jsxs)("div",{style:{color:"red"},children:[this.props.firebaseError," : ",this.props.firebaseErrorCode]}),Object(n.jsx)(ee,{text:"\u041b\u043e\u0433\u0438\u043d",btnType:"Success",clicked:this.login})]})}}]),r}(s.Component),Ve=Object(m.b)((function(e){return{loginIn:e.signupReducer.loginIn,firebaseError:e.signupReducer.firebaseError,firebaseErrorCode:e.signupReducer.firebaseErrorCode,userId:e.signupReducer.userId}}),(function(e){return{login:function(t,r){return e(function(e,t){return function(r){r(Ue());var n={email:e,password:t,returnSecureToken:!0};ne.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVQwbzDsSi0L_BCVjB3ENHQsGtIP_eOl0",n).then((function(e){var t=e.data.idToken,n=e.data.localId,s=e.data.expiresIn,c=new Date((new Date).getTime()+1e3*s),o=e.data.refreshToken;localStorage.setItem("token",t),localStorage.setItem("userId",n),localStorage.setItem("expireDate",c),localStorage.setItem("refreshToken",o),r(Pe(t,n)),r(Ae(1e3*s))})).catch((function(e){r(Ge(e))}))}}(t,r))}}}))(He),Fe=r(57),qe=r.n(Fe),ze=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password1:"",password2:"",error:""},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword1=function(t){e.setState({password1:t.target.value})},e.changePassword2=function(t){e.setState({password2:t.target.value})},e.signup=function(){e.state.password1===e.state.password2?e.props.signupUser(e.state.email,e.state.password1):e.setState({error:"\u041d\u0443\u0443\u0446 \u04af\u0433 \u0445\u043e\u043e\u0440\u043e\u043d\u0434\u043e\u043e \u0442\u0430\u0430\u0440\u0430\u0445\u0433\u04af\u0439 \u0431\u0430\u0439\u043d\u0430!!!"})},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:qe.a.SignUp,children:[this.props.userId&&Object(n.jsx)(A.a,{to:"/"}),Object(n.jsx)("div",{children:"\u041c\u044d\u0434\u044d\u044d\u043b\u044d\u043b\u044d\u044d \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}),Object(n.jsx)("input",{onChange:this.changeEmail,type:"text",placeholder:"\u0418\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433"}),Object(n.jsx)("input",{onChange:this.changePassword1,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}),Object(n.jsx)("input",{onChange:this.changePassword2,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433 \u0434\u0430\u0432\u0442\u0430\u043d \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}),this.state.error&&Object(n.jsx)("div",{style:{color:"red"},children:this.state.error}),this.props.firebaseError&&Object(n.jsx)("div",{style:{color:"red"},children:this.props.firebaseError}),this.props.saving&&Object(n.jsx)(ae,{}),Object(n.jsx)(ee,{text:"\u0411\u04af\u0440\u0442\u0433\u04af\u04af\u043b\u044d\u0445",btnType:"Success",clicked:this.signup})]})}}]),r}(s.Component),Qe=Object(m.b)((function(e){return{saving:e.signupReducer.saving,firebaseError:e.signupReducer.firebaseError,userId:e.signupReducer.userId}}),(function(e){return{signupUser:function(t,r){return e(function(e,t){return function(r){r(Te());var n={email:e,password:t,returnSecureToken:!0};ne.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVQwbzDsSi0L_BCVjB3ENHQsGtIP_eOl0",n).then((function(e){var t=e.data.idToken,n=e.data.localId;localStorage.setItem("token",t),localStorage.setItem("userId",n),r(De(t,n))})).catch((function(e){r(Me(e))}))}}(t,r))}}}))(ze),We=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){e.props.logout()},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(A.a,{to:"/login"})})}}]),r}(c.a.Component),Xe=Object(m.b)(null,(function(e){return{logout:function(){return e(Le())}}}))(We),Je=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={showSideBar:!1},e.toggleSideBar=function(){e.setState((function(e){return{showSideBar:!e.showSideBar}}))},e.componentDidMount=function(){var t=localStorage.getItem("token"),r=localStorage.getItem("userId"),n=new Date(localStorage.getItem("expireDate"));localStorage.getItem("refreshToken");t&&(n>new Date?(e.props.autoLogin(t,r),e.props.autologoutAfterMillSec(n.getTime()-(new Date).getTime())):e.props.logout())},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(k,{toggleSideBar:this.toggleSideBar}),Object(n.jsx)(le,{showSideBar:this.state.showSideBar,toggleSideBar:this.toggleSideBar}),Object(n.jsx)("main",{className:b.a.Content,children:this.props.userId?Object(n.jsxs)(A.d,{children:[Object(n.jsx)(A.b,{path:"/logout",component:Xe}),Object(n.jsx)(A.b,{path:"/orders",component:Se}),Object(n.jsx)(A.b,{path:"/ship",component:we}),Object(n.jsx)(A.b,{path:"/",component:ie})]}):Object(n.jsxs)(A.d,{children:[Object(n.jsx)(A.b,{path:"/signup",component:Qe}),Object(n.jsx)(A.b,{path:"/login",component:Ve}),Object(n.jsx)(A.a,{to:"/login"})]})})]})}}]),r}(s.Component),Ye=Object(m.b)((function(e){return{userId:e.signupReducer.userId}}),(function(e){return{autoLogin:function(t,r){return e(Pe(t,r))},logout:function(){return e(Le())},autologoutAfterMillSec:function(){return e(Ae())}}}))(Je),Ke=r(17),Ze=r(58),$e=r(22),et={ingredients:{salad:0,cheese:0,bacon:0,meat:0},totalPrice:1500,purchasing:!1,ingredientName:{bacon:"\u0413\u0430\u0445\u0430\u0439\u043d \u043c\u0430\u0445",cheese:"\u0411\u044f\u0441\u043b\u0430\u0433",meat:"\u04ae\u0445\u0440\u0438\u0439\u043d \u043c\u0430\u0445",salad:"\u041d\u0430\u0432\u0447"}},tt={salad:150,cheese:250,bacon:800,meat:1500},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;if("ADD_INGREDIENT"===t.type)return Object(P.a)(Object(P.a)({},e),{},{ingredients:Object(P.a)(Object(P.a)({},e.ingredients),{},Object($e.a)({},t.ortsNer,e.ingredients[t.ortsNer]+1)),totalPrice:e.totalPrice+tt[t.ortsNer],purchasing:!0});if("REMOVE_INGREDIENT"===t.type){var r=e.totalPrice-tt[t.ortsNer];return Object(P.a)(Object(P.a)({},e),{},{ingredients:Object(P.a)(Object(P.a)({},e.ingredients),{},Object($e.a)({},t.ortsNer,e.ingredients[t.ortsNer]-1)),totalPrice:r,purchasing:r>1500})}return e},nt={orders:[],loading:!1,error:null,newOrder:{saving:!1,finished:!1,error:null}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ORDERS_START":return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case"LOAD_ORDERS_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{loading:!1,orders:t.orders});case"LOAD_ORDERS_ERROR":return Object(P.a)(Object(P.a)({},e),{},{loading:!1,error:t.error});case"SAVE_ORDER_START":return Object(P.a)(Object(P.a)({},e),{},{newOrder:Object(P.a)(Object(P.a)({},e.newOrder),{},{saving:!0})});case"SAVE_ORDER_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{newOrder:Object(P.a)(Object(P.a)({},e.newOrder),{},{saving:!1,finished:!0,error:null})});case"SAVE_ORDER_ERROR":return Object(P.a)(Object(P.a)({},e),{},{newOrder:Object(P.a)(Object(P.a)({},e.newOrder),{},{saving:!1,finished:!0,error:t.error})});default:return e}},ct={saving:!1,loginIn:!1,firebaseError:null,firebaseErrorCode:null,token:null,userId:null},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_USER_START":return Object(P.a)(Object(P.a)({},e),{},{saving:!0});case"SIGNUP_USER_ERROR":return Object(P.a)(Object(P.a)({},e),{},{saving:!1,firebaseError:t.error.response.data.error.message});case"SIGNUP_USER_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{saving:!1,token:t.token,userId:t.userId});case"LOGIN_USER_START":return Object(P.a)(Object(P.a)({},e),{},{loginIn:!0});case"LOGIN_USER_ERROR":return Object(P.a)(Object(P.a)({},e),{},{loginIn:!1,firebaseError:t.error.response.data.error.message,firebaseErrorCode:t.error.response.data.error.code});case"LOGIN_USER_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{loginIn:!1,token:t.token,userId:t.userId});case"LOGOUT":return Object(P.a)(Object(P.a)({},e),{},{token:null,userId:null,firebaseError:null,firebaseErrorCode:null});default:return e}},at=Object(Ke.c)({burgerReducer:rt,orderReducer:st,signupReducer:ot}),it=[function(e){return function(t){return function(r){console.log("MyLoggerMW: Dispatch = ",r),console.log("MyLoggerMW: StateBefore",e.getState());var n=t(r);return console.log("MyLoggerMW: StateAfter",e.getState()),n}}},Ze.a],ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ke.d,dt=Object(Ke.e)(at,ut(Ke.a.apply(void 0,it)));a.a.render(Object(n.jsx)(m.a,{store:dt,children:Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v.a,{children:Object(n.jsx)(Ye,{})})})}),document.getElementById("root"))}],[[88,1,2]]]);
//# sourceMappingURL=main.0c03a59a.chunk.js.map