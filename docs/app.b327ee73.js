(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],a[r]&&m.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},a={1:0},n=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([20,0]),s()})({"0y33":function(t,e,s){},20:function(t,e,s){t.exports=s("Vtdi")},"47fV":function(t,e,s){},"6+LL":function(t,e,s){"use strict";var i=s("NHyl"),a=s.n(i);a.a},"65Q5":function(t,e,s){t.exports=s.p+"img/brain.4ddfaee0.svg"},"6ZLY":function(t,e,s){"use strict";var i=s("gGfW"),a=s.n(i);a.a},"6aVY":function(t,e,s){},"6hfL":function(t,e,s){"use strict";var i=s("JfFT"),a=s.n(i);a.a},"77/2":function(t,e,s){},B9rV:function(t,e,s){"use strict";var i=s("Vng4"),a=s.n(i);a.a},FisY:function(t,e,s){"use strict";var i=s("77/2"),a=s.n(i);a.a},JfFT:function(t,e,s){},KR6G:function(t,e,s){},NHyl:function(t,e,s){},QmHP:function(t,e,s){},RIWD:function(t,e,s){},UHm6:function(t,e,s){},Vng4:function(t,e,s){},Vtdi:function(t,e,s){"use strict";s.r(e);s("VRzm");var i=s("Kw5r"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isLoaded?i("div",{attrs:{id:"app"}},[i("div",{staticClass:"metabar"},[t._m(0),i("div",{staticClass:"brain-logo",attrs:{title:t.message}},[i("router-link",{attrs:{to:{name:"home"}}},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:s("65Q5"),alt:"Logo"}}),i("h1",{staticClass:"name"},[t._v("Brainstorm")])])])],1),i("FormRegistration"),t.isLogged?i("UserProfile"):t._e()],1),i("router-view")],1):t._e()},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._v("similar to "),s("a",{attrs:{href:"https://medium.com/"}},[t._v("Midium")])])}],r=(s("91GP"),s("yT7P")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLogged?t._e():s("div",[s("div",{staticClass:"redistration"},[s("a",{staticClass:"sing-in",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.isModalSingIn=!0}}},[t._v("Sing In")]),s("a",{staticClass:"get-started",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.isModalGetStarted=!0}}},[t._v("Get Started")])]),t.isModalSingIn?s("Modal",{on:{close:function(e){t.isModalSingIn=!1}}},[s("SingIn",{on:{login:function(e){t.isModalSingIn=!1}}})],1):t._e(),t.isModalGetStarted?s("Modal",{on:{close:function(e){t.isModalGetStarted=!1}}},[s("GetStarted",{on:{registered:function(e){t.isModalGetStarted=!1}}})],1):t._e()],1)},l=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.$emit("close")}}},[s("div",{staticClass:"modal-container"},[s("button",{staticClass:"btn-close",on:{click:function(e){t.$emit("close")}}}),s("div",{staticClass:"modal-body"},[t._t("default")],2)])])])])},u=[],d={name:"Modal"},m=d,p=(s("pN94"),s("KHd+")),f=Object(p["a"])(m,c,u,!1,null,"74634c5f",null),v=f.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:t.singIn}},[t._m(0),s("label",{staticClass:"form-group"},[s("div",{staticClass:"title-input"},[t._m(1),s("transition",{attrs:{name:"fadeRight"}},[t.isValidEmail?t._e():s("div",{staticClass:"validation"},[t._v("E-mail is required!")])])],1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidEmail,expression:"isValidEmail"}],attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),s("label",{staticClass:"form-group"},[s("div",{staticClass:"title-input"},[t._m(2),s("transition",{attrs:{name:"fadeRight"}},[t.isValidPassword?t._e():s("div",{staticClass:"validation"},[t._v("Password is required!")])])],1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidPassword,expression:"isValidPassword"}],attrs:{type:"password",minlength:"6",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),s("transition",{attrs:{name:"fadeUp"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"error-msg"},[t._v(t._s(t.errorMessage))])]),s("button",{staticClass:"btn-sent"},[t._v("Send")])],1)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-form"},[s("h1",[t._v("Welcome back.")]),s("h2",[t._v("Sign in to access your personalized homepage, follow authors and topics you love,\n        and clap for stories that matter to you.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"star-required"},[t._v("*")]),t._v("E-mail:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"star-required"},[t._v("*")]),t._v("Password:")])}],_=s("L2JU"),b={name:"SingIn",data:function(){return{email:"",password:"",errorMessage:"",isValidEmail:!0,isValidPassword:!0}},methods:Object(r["a"])({},Object(_["b"])(["loginUser"]),{singIn:function(){var t=this;this.loginUser({email:this.email,password:this.password}).then(function(){t.email=t.password="",t.$emit("login")}).catch(function(e){return t.errorMessage=e.message})}})},C=b,w=(s("gfVg"),Object(p["a"])(C,h,g,!1,null,"551b8045",null)),y=w.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:t.formSubmited}},[t._m(0),s("label",{staticClass:"form-group"},[s("div",{staticClass:"title-input"},[t._m(1),s("transition",{attrs:{name:"fadeRight"}},[t.isValidName?t._e():s("div",{staticClass:"validation"},[t._v("Name is required!")])])],1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidName,expression:"isValidName"}],attrs:{required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),s("label",{staticClass:"form-group"},[s("div",{staticClass:"title-input"},[t._m(2),s("transition",{attrs:{name:"fadeRight"}},[t.isValidPhone?t._e():s("div",{staticClass:"validation"},[t._v("Phone is required!")])])],1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.phone,expression:"phone",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidPhone,expression:"isValidPhone"}],attrs:{type:"number",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),s("label",{staticClass:"form-group"},[s("div",{staticClass:"title-input"},[t._m(3),s("transition",{attrs:{name:"fadeRight"}},[t.isValidEmail?t._e():s("div",{staticClass:"validation"},[t._v("E-mail is required!")])])],1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidEmail,expression:"isValidEmail"}],attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),s("label",{staticClass:"form-group"},[s("div",{staticClass:"title-input"},[t._m(4),s("transition",{attrs:{name:"fadeRight"}},[t.isValidPassword?t._e():s("div",{staticClass:"validation"},[t._v("Min 6 charts")])])],1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidPassword,expression:"isValidPassword"}],attrs:{type:"password",minlength:"6",required:""},domProps:{value:t.password},on:{input:[function(e){e.target.composing||(t.password=e.target.value.trim())},t.validatePasswordEquality],blur:function(e){t.$forceUpdate()}}})]),s("label",{staticClass:"form-group"},[s("div",{staticClass:"title-input"},[t._m(5),s("transition",{attrs:{name:"fadeRight"}},[t.isValidPasswordConf?t._e():s("div",{staticClass:"validation"},[t._v("Not corect!")])])],1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passwordConf,expression:"passwordConf",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidPasswordConf,expression:"isValidPasswordConf"}],attrs:{type:"password"},domProps:{value:t.passwordConf},on:{input:[function(e){e.target.composing||(t.passwordConf=e.target.value.trim())},t.validatePasswordEquality],blur:function(e){t.$forceUpdate()}}})]),s("transition",{attrs:{name:"fadeUp"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"error-msg"},[t._v(t._s(t.errorMessage))])]),s("button",{staticClass:"btn-sent"},[t._v("Send")])],1)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-form"},[s("h1",[t._v("Join Blog.")]),s("h2",[t._v("Create an account to personalize your homepage, follow your favorite\n        authors and publications, applaud stories you love, and more.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"star-required"},[t._v("*")]),t._v("Full Name:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"star-required"},[t._v("*")]),t._v("Phone:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"star-required"},[t._v("*")]),t._v("E-mail:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"star-required"},[t._v("*")]),t._v("Password:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"star-required"},[t._v("*")]),t._v("Password confirmation:")])}],U=(s("f3/d"),{name:"GetStarted",data:function(){return{name:"",phone:"",email:"",password:"",passwordConf:"",errorMessage:"",isValidName:!0,isValidEmail:!0,isValidPhone:!0,isValidPassword:!0,isValidPasswordConf:!0}},methods:Object(r["a"])({},Object(_["b"])(["addUser","loginUser"]),{validatePasswordEquality:function(){this.isValidPasswordConf=this.password===this.passwordConf},formSubmited:function(){var t=this;this.addUser({name:this.name,phone:this.phone,email:this.email,password:this.password}).then(function(){return t.loginUser({email:t.email,password:t.password})}).then(function(){t.name=t.phone=t.email=t.password=t.passwordConf="",t.$emit("registered")}).catch(function(e){return t.errorMessage=e.message})}})}),$=U,j=(s("dDHs"),Object(p["a"])($,P,O,!1,null,"5d6209f2",null)),E=j.exports,x={name:"FormRegistration",components:{Modal:v,SingIn:y,GetStarted:E},data:function(){return{isModalSingIn:!1,isModalGetStarted:!1}},computed:Object(r["a"])({},Object(_["d"])(["isLogged"]))},V=x,k=(s("6ZLY"),Object(p["a"])(V,o,l,!1,null,"1e62ec64",null)),N=k.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{on:{click:function(e){t.menuVisible=!t.menuVisible}}},[s("div",{staticClass:"user-logo"},[t._v(t._s(t.initials))]),s("Menu",{attrs:{open:t.menuVisible}})],1)},I=[],L=(s("KKXr"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[t.isOpen?s("div",{staticClass:"popover"},[s("ul",{staticClass:"menu"},[s("li",[s("router-link",{attrs:{to:{name:"newPost"}}},[t._v("New Story")])],1),s("li",{staticClass:"line"},[s("router-link",{attrs:{to:{name:"posts"}}},[t._v("Your Stories")])],1),s("li",[s("a",{attrs:{href:"#"},on:{click:t.signOut}},[t._v("Sign Out")])])])]):t._e()])}),D=[],M={name:"Menu",props:["open"],data:function(){return{isOpen:!1}},watch:{open:{immediate:!0,handler:function(t){this.isOpen=t}}},methods:Object(r["a"])({},Object(_["b"])(["logout"]),{signOut:function(){var t=this;this.logout().then(function(){return t.$router.push({name:"home"})})},close:function(){this.isOpen=!1}}),mounted:function(){document.addEventListener("click",this.close)},destroyed:function(){document.removeEventListener("click",this.close)}},q=M,T=(s("B9rV"),Object(p["a"])(q,L,D,!1,null,"087c2d94",null)),B=T.exports,A={name:"UserProfile",components:{Menu:B},data:function(){return{menuVisible:!1}},computed:Object(r["a"])({},Object(_["c"])(["currentUser"]),{initials:function(){var t=this.currentUser.name.split(" ");return t.map(function(t){return t.charAt(0)}).join("")}})},R=A,Y=(s("ssqY"),Object(p["a"])(R,S,I,!1,null,"1f5d4c86",null)),F=Y.exports,G={name:"App",data:function(){return{message:"To Home",isLoaded:!1}},components:{UserProfile:F,FormRegistration:N},computed:Object(r["a"])({},Object(_["d"])(["isLogged"])),methods:{fetchState:function(){var t=this;return fetch("state.json").then(function(t){return t.json()}).then(function(e){t.$store.replaceState(Object.assign(t.$store.state,e))})}},created:function(){var t=this;this.$store.state.posts.length?this.isLoaded=!0:this.fetchState().then(function(){return t.isLoaded=!0})}},H=G,K=(s("6+LL"),s("Z/zX"),Object(p["a"])(H,a,n,!1,null,"e9f12fa2",null)),J=K.exports;s("INYr"),s("dRSK");function W(t){return function(e){Object.assign(e.state,localStorage.state?JSON.parse(localStorage.state):null),e.subscribe(function(e,s){localStorage.state=JSON.stringify(Z(s,t))})}}function Z(t,e){return e.reduce(function(e,s){return e[s]=t[s],e},{})}i["a"].use(_["a"]);var z=0,Q=function(){return Date.now()+z++};function X(t,e){return e?t.filter(function(t){return t.userId===e}):[]}var tt=new _["a"].Store({state:{posts:[],users:[],currentUser:"",isLogged:!1},plugins:[W(["posts","users","isLogged","currentUser"])],getters:{currentUser:function(t,e){return t.currentUser?e.findUser(t.currentUser):{}},findUser:function(t){return function(e){return t.users.find(function(t){return t.email===e})}},drafts:function(t){return t.posts.filter(function(t){return t.draft})},posts:function(t){return t.posts.filter(function(t){return!t.draft})},draftsByUserId:function(t,e){return X(e.drafts,e.currentUser.id)},postsByUserId:function(t,e){return X(e.posts,e.currentUser.id)},getPostById:function(t){return function(e){return t.posts.find(function(t){return t.id===e})}}},mutations:{addUser:function(t,e){e.id=Q(),t.users.push(e)},loginUser:function(t,e){var s=e.email,i=e.password;t.isLogged=t.users.some(function(t){return t.email===s&&t.password===i}),t.currentUser=s},logout:function(t){t.isLogged=!1,t.currentUser=""},createPost:function(t,e){e.id=Q(),t.posts.push(e)},deletePost:function(t,e){var s=e.id,i=t.posts.findIndex(function(t){return t.id===s});t.posts.splice(i,1)}},actions:{addUser:function(t,e){var s=t.commit,i=t.getters;if(i.findUser(e.email))return Promise.reject(new Error("Oops! User with such email already exists"));s("addUser",e)},loginUser:function(t,e){var s=t.commit,i=t.state;return s("loginUser",e),i.isLogged?Promise.resolve():Promise.reject(new Error("Oops! These credentials are not valid."))},logout:function(t){var e=t.commit;e("logout")},createPost:function(t,e){var s=t.commit,i=t.getters;s("createPost",Object(r["a"])({userId:i.currentUser.id,userName:i.currentUser.name},e))},deletePost:function(t,e){var s=t.commit;s("deletePost",e)}}}),et=s("jE9Z"),st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isArticle?s("Article"):[s("nav",{staticClass:"nav-bar"},[s("div",{staticClass:"tags controls"},[s("ul",{staticClass:"breadcrumbs"},[s("router-link",{staticClass:"filter",attrs:{tag:"li",to:{name:"home"}}},[t._v("Home")]),s("router-link",{staticClass:"filter",attrs:{tag:"li",to:{name:"home",params:{id:"tech"}}}},[t._v("Tech")]),s("router-link",{staticClass:"filter",attrs:{tag:"li",to:{name:"home",params:{id:"politics"}}}},[t._v("Politics")]),s("router-link",{staticClass:"filter",attrs:{tag:"li",to:{name:"home",params:{id:"culture"}}}},[t._v("Culture")])],1)])]),s("main",[s("transition-group",{staticClass:"grid",attrs:{name:"filter",tag:"div"}},t._l(t.filteredPosts,function(e){return s("div",{key:e.id,staticClass:"container-post"},[s("router-link",{staticClass:"col",attrs:{to:{name:"home",params:{id:e.id}},tag:"div"}},[e.image?s("div",{staticClass:"img-block"},[s("img",{attrs:{src:e.image,alt:"Image Post"}})]):t._e(),s("h2",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.description))]),s("div",{staticClass:"details"},[s("div",{staticClass:"author"},[t._v(t._s(e.userName))]),s("div",{staticClass:"date"},[t._v(t._s(e.date))])])])],1)}))],1)]],2)},it=[],at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container-post"},[s("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),s("p",{staticClass:"description"},[t._v(t._s(t.post.description))]),s("img",{attrs:{src:t.post.image,alt:"Post Image"}}),s("p",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}}),s("div",{staticClass:"tags"},t._l(t.post.tags,function(e){return s("div",{key:e,staticClass:"tag"},[t._v("\n        "+t._s(e)+"\n      ")])}))]),s("Applause")],1)},nt=[],rt=(s("xfY5"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"post-scale"},[s("div",[t._v("Like what you read? Give Lachlan Miller a round of applause.")]),s("p",[t._v("From a quick cheer to a standing ovation, clap to show how much you enjoyed this story.")])]),s("div",{staticClass:"post-action"},[s("div",{staticClass:"clap-post"},[s("button",{staticClass:"clap",attrs:{type:"click"}},[s("i",{staticClass:"icon-thumbs-up"})]),s("span",{staticClass:"counter-like"})]),s("div",{staticClass:"comment-to-post"},[s("i",{staticClass:"icon-comment"}),s("span",{staticClass:"counter-comment"})])])])}],lt={name:"Applause"},ct=lt,ut=(s("f0OC"),Object(p["a"])(ct,rt,ot,!1,null,"77431620",null)),dt=ut.exports,mt={name:"Article",components:{Applause:dt},data:function(){return{post:null}},computed:Object(r["a"])({},Object(_["c"])(["getPostById"])),watch:{$route:{immediate:!0,handler:function(t){var e=Number(t.params.id),s=this.getPostById(e);this.post=s}}}},pt=mt,ft=(s("dQZh"),Object(p["a"])(pt,at,nt,!1,null,"c9dcab8a",null)),vt=ft.exports,ht={name:"Home",components:{Article:vt},computed:Object(r["a"])({},Object(_["c"])(["posts"]),{isArticle:function(){return!isNaN(this.$route.params.id)},currentTopic:function(){return this.$route.params.id||"home"},filteredPosts:function(){var t=this;return"home"===this.currentTopic?this.posts:this.posts.filter(function(e){return e.topic===t.currentTopic})}})},gt=ht,_t=(s("swEb"),Object(p["a"])(gt,st,it,!1,null,"5b8ac015",null)),bt=_t.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("New Post")]),s("form",{ref:"form",on:{submit:function(t){t.preventDefault()}}},[s("label",{staticClass:"steps-post"},[t._m(0),s("transition",{attrs:{name:"fadeRight"}},[t.isValidTitle?t._e():s("div",{staticClass:"validation"},[t._v("Write your publication name!")])]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.post.title,expression:"post.title",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidTitle,expression:"isValidTitle"}],attrs:{type:"text",name:"title",placeholder:"Your publication’s name",maxlength:"100",required:""},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})],1),s("label",{staticClass:"steps-post"},[t._m(1),s("transition",{attrs:{name:"fadeRight"}},[t.isValidDescription?t._e():s("div",{staticClass:"validation"},[t._v("Write a short Description!")])]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.post.description,expression:"post.description",modifiers:{trim:!0}},{name:"validity",rawName:"v-validity",value:t.isValidDescription,expression:"isValidDescription"}],attrs:{type:"text",name:"title",placeholder:"Short Description",maxlength:"280",required:""},domProps:{value:t.post.description},on:{input:function(e){e.target.composing||t.$set(t.post,"description",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})],1),s("UploadFile",{on:{uploadedImage:t.setImage}}),s("vue-editor",{model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),s("div",{staticClass:"tags"},[s("label",{staticClass:"step-name"},[t._v("Tags\n        "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.post.tag,expression:"post.tag",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Add tags..."},domProps:{value:t.post.tag},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),t.addTags(e)):null},input:function(e){e.target.composing||t.$set(t.post,"tag",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),s("div",{staticClass:"block-tag"},t._l(t.post.tags,function(e){return s("div",{key:e,staticClass:"tag-output"},[t._v("\n          "+t._s(e)+"\n          "),s("button",{staticClass:"delete-tag",attrs:{type:"button"},on:{click:function(s){t.deleteTag(e)}}},[t._v("x")])])}))]),s("div",{staticClass:"theme"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.post.topic,expression:"post.topic"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.post,"topic",e.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Select a topic...")]),s("option",{attrs:{value:"tech"}},[t._v("Tech")]),s("option",{attrs:{value:"politics"}},[t._v("Politics")]),s("option",{attrs:{value:"culture"}},[t._v("Culture")]),s("option",{attrs:{value:"other"}},[t._v("Other")])]),s("span",{staticClass:"step-name"},[t._v(t._s(t.post.topic))])]),s("div",{staticClass:"save"},[s("button",{staticClass:"draft",on:{click:t.saveDraft}},[t._v("Save draft")]),s("button",{staticClass:"publication",on:{click:t.publish}},[t._v("Publish")])])],1)])},wt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"step-name"},[t._v("Title"),s("span",{staticClass:"form-asterisk"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"step-name"},[t._v("Description"),s("span",{staticClass:"form-asterisk"},[t._v("*")])])}],yt=(s("Z2Ku"),s("L9s1"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"file-upload"},[s("div",{staticClass:"file-block"},[s("div",{staticClass:"step-name"},[t._v("Image")]),t.image?s("div",{staticClass:"uploaded-img"},[s("img",{staticClass:"img",attrs:{src:t.image}}),s("button",{staticClass:"delete-img",attrs:{type:"click"},on:{click:t.deleteImage}},[t._v("Delete Image")])]):s("div",{staticClass:"icon-block"},[s("i",{staticClass:"icon-camera"}),s("input",{staticClass:"upload-img",attrs:{type:"file",round:""},on:{change:t.onFileChange}})])])])}),Pt=[],Ot={name:"UploadFile",data:function(){return{image:""}},methods:{onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=this,s=new FileReader;s.onload=function(t){e.image=t.target.result,e.$emit("uploadedImage",e.image)},s.readAsDataURL(t)},deleteImage:function(){this.image=""}}},Ut=Ot,$t=(s("r/LK"),Object(p["a"])(Ut,yt,Pt,!1,null,"2ce26d71",null)),jt=$t.exports,Et=s("s+lJ"),xt={name:"NewPosts",components:{VueEditor:Et["VueEditor"],UploadFile:jt},data:function(){return{post:{title:"",description:"",content:"",tag:"",tags:[],topic:"",image:"",draft:!1,date:(new Date).toDateString()},isValidTitle:!0,isValidDescription:!0}},computed:Object(r["a"])({},Object(_["c"])(["getPostById"])),watch:{$route:{immediate:!0,handler:function(t){var e=Number(t.params.id),s=this.getPostById(e);void 0!==s&&(this.post=s)}}},methods:Object(r["a"])({},Object(_["b"])(["createPost"]),{publish:function(){var t=this;this.$refs.form.checkValidity()&&this.createPost(Object(r["a"])({},this.post)).then(function(){return t.$router.push({name:"drafts"})})},saveDraft:function(){this.post.draft=!0,this.publish()},addTags:function(){var t=this.post.tag[0].toUpperCase()+this.post.tag.slice(1).toLowerCase();this.post.tag="",t&&!this.post.tags.includes(t)&&this.post.tags.push(t)},deleteTag:function(t){var e=this.post.tags.indexOf(t);this.post.tags.splice(e,1)},setImage:function(t){this.post.image=t}})},Vt=xt,kt=(s("uzfm"),Object(p["a"])(Vt,Ct,wt,!1,null,"6c2f0d9b",null)),Nt=kt.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[s("h1",[t._v("Your Stories")]),s("router-link",{attrs:{tag:"button",to:{name:"newPost"}}},[t._v("Write a story")])],1),s("div",{staticClass:"tabs"},[s("ul",[s("li",[s("router-link",{attrs:{to:{name:"drafts"}}},[t._v("\n          Drafts\n          "),s("span",{staticClass:"couter"},[t._v(t._s(t.draftsByUserId.length))])])],1),s("li",[s("router-link",{attrs:{to:{name:"public"}}},[t._v("\n          Published\n          "),s("span",{staticClass:"couter"},[t._v(t._s(t.postsByUserId.length))])])],1)])]),s("div",{staticClass:"content-list"},[s("router-view")],1)])},It=[],Lt={name:"ListPosts",computed:Object(r["a"])({},Object(_["c"])(["draftsByUserId","postsByUserId"]))},Dt=Lt,Mt=(s("qKJ6"),Object(p["a"])(Dt,St,It,!1,null,"6c8f4e2b",null)),qt=Mt.exports,Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ListArticles",{attrs:{articles:t.draftsByUserId}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.draftsByUserId.length,expression:"!draftsByUserId.length"}],staticClass:"empty-list"},[t._v("You haven't any drafts yet.")])],1)},Bt=[],At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.articles,function(e){return s("article",{key:e.id},[s("router-link",{staticClass:"post",attrs:{tag:"div",to:{name:"editPost",params:{id:e.id}}}},[s("h2",{staticClass:"title-post",attrs:{title:t.titleEdit}},[t._v(t._s(e.title))]),s("div",{staticClass:"date"},[t._v(t._s(e.date))])]),s("div",{staticClass:"btn-delete-post",attrs:{title:t.titleDelete},on:{click:function(s){t.selectedPost=e}}},[s("i",{staticClass:"icon-trash"})])],1)}),t.selectedPost?s("ConfirmationDialog",{on:{cancel:function(e){t.selectedPost=null},confirm:function(e){t.deleteDraft(t.selectedPost)}}}):t._e()],2)},Rt=[],Yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Modal",{on:{close:function(e){t.$emit("cancel")}}},[s("div",[s("h3",[t._v("You definitely want to delete the story?")]),s("button",{staticClass:"confirm",on:{click:function(e){e.stopPropagation(),t.$emit("confirm")}}},[t._v("Yes")]),s("button",{staticClass:"cencel",on:{click:function(e){e.stopPropagation(),t.$emit("cancel")}}},[t._v("No")])])])],1)},Ft=[],Gt={name:"ConfirmationDialog",components:{Modal:v}},Ht=Gt,Kt=(s("6hfL"),Object(p["a"])(Ht,Yt,Ft,!1,null,"c76d292a",null)),Jt=Kt.exports,Wt={name:"ListArticles",props:["articles"],components:{ConfirmationDialog:Jt},data:function(){return{selectedPost:null,titleDelete:"Delete story",titleEdit:"Edit story"}},methods:Object(r["a"])({},Object(_["b"])(["deletePost"]),{deleteDraft:function(t){this.deletePost(t),this.selectedPost=null}})},Zt=Wt,zt=(s("le2d"),Object(p["a"])(Zt,At,Rt,!1,null,"e50a93e4",null)),Qt=zt.exports,Xt={name:"ListDrafts",components:{ListArticles:Qt},computed:Object(r["a"])({},Object(_["c"])(["draftsByUserId"]))},te=Xt,ee=(s("hbAh"),Object(p["a"])(te,Tt,Bt,!1,null,"d1cc99dc",null)),se=ee.exports,ie=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ListArticles",{attrs:{articles:t.postsByUserId}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.postsByUserId.length,expression:"!postsByUserId.length"}],staticClass:"empty-list"},[t._v("You haven’t published any public stories yet.")])],1)},ae=[],ne={name:"ListPublic",components:{ListArticles:Qt},computed:Object(r["a"])({},Object(_["c"])(["postsByUserId"]))},re=ne,oe=(s("FisY"),Object(p["a"])(re,ie,ae,!1,null,"511e39cb",null)),le=oe.exports;i["a"].use(et["a"]);var ce=new et["a"]({routes:[{path:"/posts",name:"posts",component:qt,redirect:{name:"drafts"},children:[{path:"drafts",name:"drafts",component:se},{path:"public",name:"public",component:le}]},{path:"/posts/new",name:"newPost",component:Nt},{path:"/posts/:id",name:"editPost",component:Nt},{path:"/:id?",name:"home",component:bt}]});i["a"].directive("validity",{bind:function(t,e,s){var i=function(i){"invalid"===i.type&&i.preventDefault();var a=t.validity.valid;s.context.$data[e.expression]=a};t.__listener=i,t.addEventListener("invalid",i),t.addEventListener("input",i)},update:function(t,e){!e.value&&t.validity.valid?t.setCustomValidity("Invalid"):e.value&&t.setCustomValidity("")},unbind:function(t){t.removeEventListener("invalid",t.__listener),t.removeEventListener("input",t.__listener)}});s("oaNO");i["a"].config.productionTip=!1,new i["a"]({store:tt,router:ce,render:function(t){return t(J)}}).$mount("#app")},"W/2i":function(t,e,s){},YOSo:function(t,e,s){},"Z/zX":function(t,e,s){"use strict";var i=s("a8N2"),a=s.n(i);a.a},a8N2:function(t,e,s){},bFDS:function(t,e,s){},dDHs:function(t,e,s){"use strict";var i=s("UHm6"),a=s.n(i);a.a},dQZh:function(t,e,s){"use strict";var i=s("YOSo"),a=s.n(i);a.a},f0OC:function(t,e,s){"use strict";var i=s("KR6G"),a=s.n(i);a.a},gGfW:function(t,e,s){},gfVg:function(t,e,s){"use strict";var i=s("bFDS"),a=s.n(i);a.a},hbAh:function(t,e,s){"use strict";var i=s("6aVY"),a=s.n(i);a.a},hsrp:function(t,e,s){},iUDv:function(t,e,s){},le2d:function(t,e,s){"use strict";var i=s("47fV"),a=s.n(i);a.a},oaNO:function(t,e,s){},pN94:function(t,e,s){"use strict";var i=s("iUDv"),a=s.n(i);a.a},qKJ6:function(t,e,s){"use strict";var i=s("hsrp"),a=s.n(i);a.a},"r/LK":function(t,e,s){"use strict";var i=s("0y33"),a=s.n(i);a.a},ssqY:function(t,e,s){"use strict";var i=s("RIWD"),a=s.n(i);a.a},swEb:function(t,e,s){"use strict";var i=s("W/2i"),a=s.n(i);a.a},uzfm:function(t,e,s){"use strict";var i=s("QmHP"),a=s.n(i);a.a}});
//# sourceMappingURL=app.b327ee73.js.map