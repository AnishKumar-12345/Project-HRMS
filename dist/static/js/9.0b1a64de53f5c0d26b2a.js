webpackJsonp([9,25,49],{"7Qc0":function(t,e){},KuFv:function(t,e){},hZdP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("sXC3"),o=a("xmyG"),l=a("u6Sg"),r={name:"ManagerDashboard",props:["userjwt","employeeId"],icons:{mdiAccount:i.a,mdiPencil:i.c,mdiShareVariant:i.d,mdiDelete:i.b},components:{ManagerAppbar:o.default,ManagerGetprofile:l.default},data:function(){return{msg:"Welcome to Your Vue.js App",drawer:null,showText:!0,items:[{action:" mdi-bell-ring",items:[{title:"Attendence",to:"/UserAttendenceprofile"}],title:"Attendence"},{action:"mdi-ticket",items:[{title:"Leave",to:"/UserLeaveprofile"}],title:"Leave"},{action:"mdi-hand-coin ",items:[{title:"payRoll",to:"/ManagerPayroll"}],title:"Payroll"}]}},methods:{logOut:function(){localStorage.removeItem("jwt"),this.$router.push({name:"Login"})}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ManagerAppbar",{attrs:{title:" "}}),this._v(" "),e("div",[e("ManagerGetprofile")],1)],1)},staticRenderFns:[]};var s=a("VU/8")(r,n,!1,function(t){a("KuFv")},"data-v-3127aa23",null);e.default=s.exports},u6Sg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("UYCa"),o=(a("mtWM"),{name:"Attendence",mixins:[i.a],data:function(){return{result:"",userid:"",messageText:""}},mounted:function(){this.getProfile(),this.userid=localStorage.getItem("id")},methods:{getProfile:function(){var t=this;this.userid=localStorage.getItem("id"),console.log("satya id11",this.userid),this.getemployeeprofile(this.userid).then(function(e){t.result=e.data.Profile,console.log("In post",t.result)})}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{"margin-top":"100px"}},[i("v-container",[i("v-card",[i("v-card-text",[i("v-row",{staticStyle:{margin:"0"}},[i("v-card",{attrs:{color:"#1565c0","min-width":"1160"}},[i("v-card-text",[i("v-row",{staticStyle:{margin:"0"}},[i("v-col",{staticStyle:{"text-align":"left",height:"48px"}},[i("b",[t._v("Basic Details")])]),t._v(" "),i("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/ManagerProfileUpdate"}},[i("v-col",{staticStyle:{"text-align":"right"}},[i("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"white"}},[t._v("\n                         mdi-pencil\n                       ")])],1)],1)],1)],1)],1)],1),t._v(" "),i("v-row",[i("v-col",[i("img",{attrs:{src:a("ELc2"),width:"200px",alt:"dizitiveit.com"}})]),t._v(" "),i("v-col",[i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Employee Id")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s(this.result.employee.employeeId))])],1),t._v(" "),i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Name")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s(this.result.employee.firstName+"."+this.result.employee.lastName))])],1),t._v(" "),i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Designation")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s(this.result.desg.desigName))])],1),t._v(" "),i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Supervisor")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s(this.result.employee.supervisorName))])],1),t._v(" "),i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Gender")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s(this.result.employee.gender))])],1),t._v(" "),i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Marital Status")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s("single"))])],1)],1),t._v(" "),i("v-col",[i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Email")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s(this.result.employee.officialEmailId))])],1),t._v(" "),i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Mobile")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left"},attrs:{md:"8"}},[t._v(t._s(this.result.employee.phoneNumber))])],1),t._v(" "),i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Location")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s(this.result.employee.location))])],1),t._v(" "),i("v-row",[i("v-col",{staticStyle:{"text-align":"left","font-weight":"bold",color:"black"},attrs:{md:"4"}},[t._v("Address")]),t._v(" "),i("v-col",{staticStyle:{"text-align":"left",color:"black"},attrs:{md:"8"}},[t._v(t._s(this.result.employee.presentAddress))])],1)],1)],1)],1)],1)],1)],1)])},staticRenderFns:[]},r=a("VU/8")(o,l,!1,null,null,null);e.default=r.exports},xmyG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("8wyc"),o=a("0xri"),l=a.n(o),r={name:"AppBar",mixins:[a("UYCa").a],components:{Clock:l.a},data:function(){return{date:Object(i.a)(Object(i.b)((new Date).toISOString()),"yyyy-MM-dd"),userid:"",messageText:"",isFormValid:!1,snackbar:!1,text:"",msg:"Welcome to Your Vue.js App",drawer:!1,showText:!0,items:[{action:" mdi-bell-ring",items:[{title:"Attendence",to:"/ManagerAttendanceProfile"}],title:"Attendence"},{action:"mdi-ticket",items:[{title:"Leave",to:"/ManagerLeaveProfile"}],title:"Leave"},{action:"mdi-hand-coin ",items:[{title:"Payroll",to:"/ManagerPayroll"}],title:"Payroll"}]}},mounted:function(){this.getToday()},computed:{computedDateFormattedDatefns:function(){return this.date?Object(i.a)(Object(i.b)(this.date),"EEEE, MMMM do yyyy"):""}},methods:{PostIntime:function(){var t=this,e=localStorage.getItem("id");console.log("1234",e),console.log("satya",e),this.InTimePost(e).then(function(e){console.log("In post",e),e.status,t.text=e.data.message,t.snackbar=!0}).then(function(){})},PostOuttime:function(){var t=this,e=localStorage.getItem("id");console.log("check",e),this.OutTimePost(e).then(function(e){console.log("In post",e),e.status,t.text=e.data.message,t.snackbar=!0}).then(function(){})},getToday:function(){var t=this;this.userid=localStorage.getItem("id"),console.log("satya id",this.userid),this.getTodayAttendance(this.userid).then(function(e){t.messageText=e.data.message,console.log("In post",t.messageText)})},logout:function(){localStorage.removeItem("jwt"),this.$router.replace({path:"/",clearHistory:!0})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{staticStyle:{height:"65px",background:"linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%)"},attrs:{app:"",dark:"",prominent:""}},[i("v-app-bar-nav-icon",{attrs:{large:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),0==t.drawer?i("v-toolbar-title",{staticClass:"white--text ",staticStyle:{"margin-bottom":"55px"}},[i("img",{attrs:{src:a("ONM3"),alt:"dizitiveit.com",width:"350px"}})]):t._e(),t._v(" "),1==t.drawer?i("v-toolbar-title",{staticClass:"white--text ",staticStyle:{"margin-bottom":"55px","margin-left":"200px"}},[i("img",{attrs:{src:a("ONM3"),alt:"dizitiveit.com",width:"350px"}})]):t._e(),t._v(" "),i("v-spacer"),t._v(" "),i("v-avatar",{staticClass:"mr-2 mt-1 avt"},[i("img",{attrs:{alt:"user",src:a("Q9AB")}}),t._v(" "),i("v-file-input",{staticClass:"inputpic",attrs:{"hide-input":"","prepend-icon":"mdi-plus"}})],1),t._v(" "),i("v-icon",{staticStyle:{padding:"10px"},attrs:{large:"",color:"white"},on:{click:function(e){return t.logout()}}},[t._v("mdi-logout ")])],1),t._v(" "),i("v-navigation-drawer",{staticStyle:{"margin-top":"65px","z-index":"100",height:"100vh",background:"linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%)",position:"fixed"},attrs:{absolute:"",bottom:"",permanent:"","expand-on-hover":""}},[i("v-divider"),t._v(" "),i("v-list",t._l(t.items,function(e){return i("v-list-group",{key:e.title,staticStyle:{"text-align":"left"},attrs:{"no-action":"","prepend-icon":e.action},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",{staticStyle:{color:"white"},domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0)},[i("v-divider"),t._v(" "),t._v(" "),t._l(e.items,function(e){return i("v-list-item",{key:e.title,staticStyle:{"text-align":"left"},attrs:{to:e.to,router:"",exact:""}},[i("v-list-item-content",[i("v-list-item-title",{staticStyle:{color:"white"},domProps:{textContent:t._s(e.title)}})],1)],1)})],2)}),1)],1),t._v(" "),i("v-navigation-drawer",{staticStyle:{position:"fixed","margin-top":"65px",background:"linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%)"},attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-divider"),t._v(" "),i("v-list",t._l(t.items,function(e){return i("v-list-group",{key:e.title,staticStyle:{"text-align":"left"},attrs:{"no-action":"","prepend-icon":e.action},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",{staticStyle:{color:"white"},domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0)},[i("v-divider"),t._v(" "),t._v(" "),t._l(e.items,function(e){return i("v-list-item",{key:e.title,staticStyle:{"text-align":"left"},attrs:{to:e.to,router:"",exact:""}},[i("v-list-item-content",[i("v-list-item-title",{staticStyle:{color:"white"},domProps:{textContent:t._s(e.title)}})],1)],1)})],2)}),1)],1),t._v(" "),i("div",[i("v-row",{staticStyle:{margin:"20px","margin-bottom":"-80px"}},[i("v-col",{attrs:{cols:"6"}},[i("clock",{staticStyle:{"box-shadow":"rgba(0,107,156, 0.4) 0px 5px, rgba(0,107,156, 0.3) 0px 10px, rgba(0,107,156, 0.2) 0px 15px, rgba(0,107,156, 0.1) 0px 20px, rgba(0,107,156, 0.05) 0px 25px"},attrs:{border:"none",bg:"radial-gradient(circle, #ecffe5, #fffbe1, #235197)"}})],1),t._v(" "),i("v-col",{staticStyle:{"margin-top":"30px"},attrs:{cols:"6"}},[i("v-btn",{staticStyle:{background:"red",color:"white"},attrs:{type:"submit",disabled:t.isFormValid},on:{click:function(e){return t.PostIntime()}}},[t._v("\n       Web Clock In\n      ")]),t._v(" "),i("v-btn",{staticStyle:{background:"red",color:"white"},attrs:{type:"submit"},on:{click:function(e){return t.PostOuttime()}}},[t._v("\n      Web Clock Out\n      ")]),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("span",{staticStyle:{border:"1px solid rgba(0,107,156, 0.4)",padding:"10px","box-shadow":"rgba(0,107,156, 0.4) 5px 5px, rgba(0,107,156, 0.3) 10px 10px, rgba(0,107,156, 0.2) 15px 15px, rgba(0,107,156, 0.1) 20px 20px, rgba(0,107,156, 0.05) 25px 25px"}},[t._v(t._s(t.computedDateFormattedDatefns))])],1)],1)],1),t._v(" "),i("v-snackbar",{attrs:{color:"green"},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[i("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.text)+"\n\n      ")])],1)},staticRenderFns:[]};var s=a("VU/8")(r,n,!1,function(t){a("7Qc0")},null,null);e.default=s.exports}});
//# sourceMappingURL=9.0b1a64de53f5c0d26b2a.js.map