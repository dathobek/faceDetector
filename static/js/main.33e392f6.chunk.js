(this.webpackJsonpfacedetector=this.webpackJsonpfacedetector||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(10),i=n(49),c=n.n(i),r=(n(106),n(94)),l=n(95),o=n(100),b=n(99),d=(n(107),function(e){var t=e.onRouteChange;return e.isSignedIn?Object(a.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(a.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(a.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(a.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})}),h=function(e){var t=e.onRouteChange;return Object(a.jsx)("article",{className:"br2 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})},u=function(e){var t=e.onRouteChange;return Object(a.jsx)("article",{className:"br2 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Name"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})})]})})})},j=n(96),m=n.n(j),p=(n(108),n.p+"static/media/brain.ce614ebc.png"),g=function(){return Object(a.jsx)("div",{className:"ma4 mt0",children:Object(a.jsx)(m.a,{className:"Tilt br2 shadow-2",options:{max:35},style:{height:150,width:150},children:Object(a.jsxs)("div",{className:"Tilt-inner pa3",children:[" ",Object(a.jsx)("img",{alt:"Logo",src:p})," "]})})})},x=(n(109),function(e){var t=e.onInputChange,n=e.onButtonChange;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"f3",children:"This Magic box will detect faces in your pictures..Give it a try"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(a.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"Paste your image link",onChange:t}),Object(a.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),f=(n(110),function(e){var t=e.imageUrl;e.box;return Object(a.jsx)("div",{className:"center ma",children:Object(a.jsxs)("div",{className:"absolute mt2",children:[Object(a.jsx)("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),Object(a.jsx)("div",{className:"bounding-box"})]})})}),O=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"white f3",children:"Athobe,your current Rank is...."}),Object(a.jsx)("div",{className:"white f1",children:"#5"})]})},v=n(97),w=n.n(v),N=n(98),C=new(n.n(N).a.App)({apiKey:"df35e99d9fbc464ba1b68d69f176278f"}),k={particles:{number:{value:150,density:{enable:!0,value_area:800}}}},y=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_Row*s,rightCol:a-t.right_col*a,bottomRow:s-t.button_row*s}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonChange=function(){e.setState({imageUrl:e.state.input}),C.models.predict("c0c0ac362b03416da06ab3fa36fb58e3",e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,s=e.box;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(w.a,{className:"particle",params:k}),Object(a.jsx)(d,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===this.state.route?Object(a.jsxs)("div",{children:[Object(a.jsx)(g,{}),Object(a.jsx)(O,{}),Object(a.jsx)(x,{onInputChange:this.onInputChange,onButtonChange:this.onButtonChange}),Object(a.jsx)(f,{box:s,imageUrl:n})]}):"signin"===this.state.route?Object(a.jsx)(h,{onRouteChange:this.onRouteChange}):Object(a.jsx)(u,{onRouteChange:this.onRouteChange})]})}}]),n}(s.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,380)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(378);c.a.render(Object(a.jsx)(y,{}),document.getElementById("root")),S()}},[[379,1,2]]]);
//# sourceMappingURL=main.33e392f6.chunk.js.map