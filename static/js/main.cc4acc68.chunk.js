(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(50),i=n.n(o),s=n(24),c=n(155),u=n(154),l=n(7),h=n(9),p=n(11),m=n(10),d=n(12),f=n(16);function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=function(e){s.a.set(Object(f.a)({page:e},n)),s.a.pageview(e)};return function(n){function a(){return Object(l.a)(this,a),Object(p.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,n),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;o(e)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.pathname,n=e.location.pathname;t!==n&&o(n)}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,t))}}]),a}(a.Component)}var g=n(27),v=n.n(g),w=n(30),E=n.n(w),O=n(76),j=n.n(O),S=r.a.createContext(null),k=r.a.createContext(null),y=function(e){return function(t){return r.a.createElement(k.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},C=k,U=n(15),I=n.n(U),P=n(21),x=n(23),D=n.n(x),T=(n(93),n(95),{apiKey:"AIzaSyD3568Uh4KVxHm9N7ibZohQ1bp9ChVttXQ",authDomain:"notepad-d8d76.firebaseapp.com",databaseURL:"https://notepad-d8d76.firebaseio.com",projectId:"notepad-d8d76",storageBucket:"notepad-d8d76.appspot.com",messagingSenderId:"1018760532537"}),A=function e(){var t=this;Object(l.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged((a=Object(P.a)(I.a.mark(function a(r){var o;return I.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!r){a.next=7;break}return a.next=3,r.getIdToken();case 3:o=a.sent,t.user(r.uid).once("value").then(function(t){var n=t.val();r=Object(f.a)({uid:r.uid,email:r.email,jwt:o},n),e(r)}),a.next=8;break;case 7:n();case 8:case"end":return a.stop()}},a,this)})),function(e){return a.apply(this,arguments)}));var a},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.messages=function(){return t.db.ref("messages")},D.a.initializeApp(T),this.emailAuthProvider=D.a.auth.EmailAuthProvider,this.auth=D.a.auth(),this.db=D.a.database(),this.googleProvider=new D.a.auth.GoogleAuthProvider,this.facebookProvider=new D.a.auth.FacebookAuthProvider,this.twitterProvider=new D.a.auth.TwitterAuthProvider},L=function(e){var t=function(t){function n(e){var t;return Object(l.a)(this,n),(t=Object(p.a)(this,Object(m.a)(n).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(d.a)(n,t),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var t=this.state.authUser;return r.a.createElement(S.Provider,{value:t},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return y(t)},W=n(156),M=n(20),N="/notes",F=function(e){return function(t){var n=function(n){function a(){return Object(l.a)(this,a),Object(p.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,n),Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this.props,n=t.firebase,a=t.history;this.listener=n.onAuthUserListener(function(t){e(t)||a.push("/signin")},function(){return a.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(S.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(M.a)(W.a,y)(n)}},B=y(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),R=function(e){e.authUser;return r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(v.a.Link,{href:"/#".concat(N)},"Notes"),r.a.createElement(v.a.Link,{href:"/#".concat("/account")},"Account"),r.a.createElement(B,null))},J=function(){return r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(v.a.Link,{href:"/#".concat("/signin")},"Sign in"))},G=function(){return r.a.createElement(E.a,{bg:"light",expand:"lg"},r.a.createElement(E.a.Brand,{href:"/"},"Notepad"),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(S.Consumer,null,function(e){return e?r.a.createElement(R,{authUser:e}):r.a.createElement(J,null)})),r.a.createElement(j.a,{key:"info",variant:"info"},"Under construction - ",r.a.createElement(s.a.OutboundLink,{eventLabel:"https://github.com/ayildirim/notepad",to:"https://github.com/ayildirim/notepad",target:"_blank"},"See what's cooking")),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}))},_=n(18),z=n(153),Q={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},K=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){n.props.firebase.user(e.user.uid).set({username:a,email:r}).then(function(){n.setState(Object(f.a)({},Q)),n.props.history.push(N)}).catch(function(e){n.setState({error:e})})}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(_.a)({},e.target.name,e.target.checked))},n.state=Object(f.a)({},Q),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,i=e.error,s=a!==o||""===a||""===t||""===n;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:s,type:"submit"},"Sign Up"),i&&r.a.createElement("p",null,i.message))}}]),t}(a.Component),V=function(){return r.a.createElement("p",null,"Don't have an account?"," ",r.a.createElement(z.a,{to:"/signup"},"Sign Up"))},H=Object(M.a)(W.a,y)(K),X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(H,null))},Y={email:"",error:null},Z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(Object(f.a)({},Y))}).catch(function(e){n.setState({error:e})})},n.onChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.state=Object(f.a)({},Y),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),$=function(){return r.a.createElement("p",null,r.a.createElement(z.a,{to:"/pw-forget"},"Forgot Password?"))},q=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(ee,null))},ee=y(Z),te={email:"",password:"",error:null},ne="auth/account-exists-with-different-credential",ae="\n  An account with an E-Mail address to\n  this social login already exists. Try to login from\n  this account instead and associate your social logins on\n  your account page.\n",re=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(Object(f.a)({},te)),n.props.history.push(N)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.state=Object(f.a)({},te),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),oe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then(function(e){n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email}).then(function(){n.setState({error:null}),n.props.history.push(N)}).catch(function(e){n.setState({error:e})})}).catch(function(e){e.code===ne&&(e.message=ae),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),ie=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then(function(e){n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email}).then(function(){n.setState({error:null}),n.props.history.push(N)}).catch(function(e){n.setState({error:e})})}).catch(function(e){e.code===ne&&(e.message=ae),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Facebook"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),se=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithTwitter().then(function(e){n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email}).then(function(){n.setState({error:null}),n.props.history.push(N)}).catch(function(e){n.setState({error:e})})}).catch(function(e){e.code===ne&&(e.message=ae),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Twitter"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),ce=Object(M.a)(W.a,y)(re),ue=Object(M.a)(W.a,y)(oe),le=Object(M.a)(W.a,y)(ie),he=Object(M.a)(W.a,y)(se),pe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(ce,null),r.a.createElement(ue,null),r.a.createElement(le,null),r.a.createElement(he,null),r.a.createElement($,null),r.a.createElement(V,null))},me={passwordOne:"",passwordTwo:"",error:null},de=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(Object(f.a)({},me))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.state=Object(f.a)({},me),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),fe=y(de),be=[{id:"password",provider:""},{id:"google.com",provider:"googleProvider"},{id:"facebook.com",provider:"facebookProvider"},{id:"twitter.com",provider:"twitterProvider"}],ge=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).fetchSignInMethods=function(){n.props.firebase.auth.fetchSignInMethodsForEmail(n.props.authUser.email).then(function(e){return n.setState({activeSignInMethods:e,error:null})}).catch(function(e){return n.setState({error:e})})},n.onSocialLoginLink=function(e){n.props.firebase.auth.currentUser.linkWithPopup(n.props.firebase[e]).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.onDefaultLoginLink=function(e){var t=n.props.firebase.emailAuthProvider.credential(n.props.authUser.email,e);n.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.onUnlink=function(e){n.props.firebase.auth.currentUser.unlink(e).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.state={activeSignInMethods:[],error:null},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeSignInMethods,a=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",null,be.map(function(t){var a=1===n.length,o=n.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(we,{onlyOneLeft:a,isEnabled:o,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(ve,{onlyOneLeft:a,isEnabled:o,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))})),a&&a.message)}}]),t}(a.Component),ve=function(e){var t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,o=e.onLink,i=e.onUnlink;return n?r.a.createElement("button",{type:"button",onClick:function(){return i(a.id)},disabled:t},"Deactivate"," ",a.id):r.a.createElement("button",{type:"button",onClick:function(){return o(a.provider)}},"Link"," ",a.id)},we=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=n.state.passwordOne;n.props.onLink(t),n.setState({passwordOne:"",passwordTwo:""})},n.onChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.state={passwordOne:"",passwordTwo:""},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,o=e.onUnlink,i=this.state,s=i.passwordOne,c=i.passwordTwo,u=s!==c||""===s;return n?r.a.createElement("button",{type:"button",onClick:function(){return o(a.id)},disabled:t},"Deactivate"," ",a.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:s,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:c,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:u,type:"submit"},"Link"," ",a.id))}}]),t}(a.Component),Ee=y(ge),Oe=F(function(e){return!!e})(function(){return r.a.createElement(S.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account:",e.email),r.a.createElement(ee,null),r.a.createElement(fe,null),r.a.createElement(Ee,{authUser:e}))})}),je=n(77),Se=n.n(je),ke=n(43),ye=n.n(ke),Ce=n(25),Ue=n.n(Ce),Ie=n(39),Pe=n.n(Ie),xe=n(78),De=n.n(xe),Te=n(52),Ae=n.n(Te),Le=n(31),We=n.n(Le),Me="http://notepad.ahmet.se:3001";var Ne=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={data:[],message:"",messageIdToUpdate:null},n}var n,a;return Object(d.a)(t,e),Object(h.a)(t,[{key:"recordText",value:(a=Object(P.a)(I.a.mark(function e(){var t,n,a,r;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.message,a=t.messageIdToUpdate,r=this.props.backend,null!==a){e.next=7;break}return e.next=5,r.putDataToDB(n);case 5:e.next=9;break;case 7:return e.next=9,r.updateDB(a,n);case 9:this.setState({messageIdToUpdate:null,message:""}),this.refreshUI();case 11:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.message,o=t.messageIdToUpdate,i=this.props.backend;return r.a.createElement(S.Consumer,null,function(t){return r.a.createElement(Se.a,null,r.a.createElement(De.a,{className:"justify-content-md-center"},r.a.createElement(Pe.a,{md:12},r.a.createElement(Ue.a,null,r.a.createElement(Ue.a.Body,null,r.a.createElement(Ue.a.Title,null,r.a.createElement(Ae.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(Ae.a.Control,{as:"textarea",rows:"3",onChange:function(t){return e.setState({message:t.target.value})},placeholder:"Write a note",value:a}))),r.a.createElement(ye.a,{onClick:function(){e.recordText()}},null===o?"Add":"Save")))),n.length<=0?"You have not taken any notes.":n.map(function(t,n){return r.a.createElement(Pe.a,{md:12,key:"key".concat(n)},r.a.createElement(Ue.a,null,r.a.createElement(Ue.a.Body,null,r.a.createElement(Ue.a.Title,null,t.message),r.a.createElement(ye.a,{variant:"danger",onClick:function(){i.deleteFromDB(t._id),e.refreshUI()}},"Delete"),r.a.createElement(ye.a,{variant:"info",onClick:function(){return e.setState({messageIdToUpdate:t._id,message:t.message})}},"Edit"))))})))})}},{key:"componentDidMount",value:function(){this.refreshUI()}},{key:"refreshUI",value:(n=Object(P.a)(I.a.mark(function e(){var t=this;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.backend.getDataFromDb().then(function(e){return t.setState({data:e.data})});case 2:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})}]),t}(a.Component),Fe=Object(M.a)(function(e){return function(t){function n(){var e,t,a,r,o;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(s)))).getDataFromDb=Object(P.a)(I.a.mark(function e(){var t;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We.a.post("".concat(Me,"/api/getData"),{jwt:JSON.parse(localStorage.getItem("authUser")).jwt});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)})),t.putDataToDB=(o=Object(P.a)(I.a.mark(function e(t){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We.a.post("".concat(Me,"/api/putData"),{message:t,jwt:JSON.parse(localStorage.getItem("authUser")).jwt});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)}),t.deleteFromDB=(r=Object(P.a)(I.a.mark(function e(t){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We.a.delete("".concat(Me,"/api/deleteData"),{data:{_id:t,jwt:JSON.parse(localStorage.getItem("authUser")).jwt}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)}),t.updateDB=(a=Object(P.a)(I.a.mark(function e(t,n){var a;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We.a.post("".concat(Me,"/api/updateData"),{id:t,update:{message:n},jwt:JSON.parse(localStorage.getItem("authUser")).jwt});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)})),function(e,t){return a.apply(this,arguments)}),t}return Object(d.a)(n,t),Object(h.a)(n,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,{backend:this}))}}]),n}(a.Component)},F(function(e){return!!e}))(Ne),Be=L(function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(G,null),r.a.createElement("hr",null),r.a.createElement(u.a,{exact:!0,path:"/",component:b(Fe)}),r.a.createElement(u.a,{exact:!0,path:N,component:b(Fe)}),r.a.createElement(u.a,{exact:!0,path:"/signup",component:b(X)}),r.a.createElement(u.a,{exact:!0,path:"/signin",component:b(pe)}),r.a.createElement(u.a,{exact:!0,path:"/pw-forget",component:b(q)}),r.a.createElement(u.a,{exact:!0,path:"/account",component:b(Oe)}),r.a.createElement("hr",null)))}),Re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Je(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(150);s.a.initialize("UA-129029377-1",{testMode:!1}),i.a.render(r.a.createElement(C.Provider,{value:new A},r.a.createElement(Be,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Re?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Je(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Je(e)})}}()},80:function(e,t,n){e.exports=n(152)}},[[80,2,1]]]);
//# sourceMappingURL=main.cc4acc68.chunk.js.map