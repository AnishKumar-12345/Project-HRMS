webpackJsonp([56],{"7Otq":function(e,n,t){e.exports=t.p+"static/img/logo.f53fbc9.png"},"7zck":function(e,n){},B6jd:function(e,n){},HjFy:function(e,n,t){e.exports=t.p+"static/img/1a.5b238cd.png"},JZC8:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),a={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("router-view")],1)],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},a,!1,function(e){t("B6jd")},null,null).exports,l=t("/ocq"),p=t("mtWM"),i=t.n(p),s=(t("Pmkt"),{name:"LogIn",data:function(){return{mobile:"",signature:"DIS-HYD",otpNum:"9999",result:[],snackbar:!1,valid:!1,text:"",showText:!0,phoneRules:[function(e){return!!e||"Phone is required"},function(e){return/^[0-9]+$/.test(e)||"only number are accepted"},function(e){return e&&e.length<=10&&e.length>=10||"phone must be  10 number"}],jwt:"",roleName:"",id:""}},mounted:function(){this.getManager()},methods:{login:function(){var e=this;i.a.post("http://103.60.213.11:9001/employee/sendOtp/"+this.mobile+"/"+this.signature,{headers:{"Content-Type":"application/json"}}).then(function(n){200==n.status&&(e.jwt=n.data.jwt,localStorage.setItem("jwt",e.jwt),e.text=" Send OTP Successfully ",e.snackbar=!0,e.showText=!1),400==n.status&&(e.jwt=n.data.jwt,localStorage.setItem("jwt",e.jwt),e.text=" Mobile Number Does Not Exists ",e.snackbar=!0,e.showText=!1)}).catch(function(n){n.response?e.errorStatus=n.response.data.message:e.errorStatus="Error: Network Error"})},resentOtp:function(){var e=this;i.a.post("http://103.60.213.11:9001/employee/validateOtp/"+this.mobile+"/"+this.otpNum,{headers:{"Content-Type":"application/json"}}).then(function(n){200==n.status&&(e.jwt=n.data.jwt,e.roleName=n.data.roleName,e.id=n.data.employeeId,localStorage.setItem("jwt",e.jwt),localStorage.setItem("roleName",e.roleName),localStorage.setItem("id",e.id),e.text="Successfully Login",e.snackbar=!0,"Admin"==e.roleName?e.$router.push({name:"HelloWorld",params:{}}):"Employee"==e.roleName?e.$router.push({name:"UserDashboard",params:{employeeId:e.id}}):e.$router.push({name:"ManagerDashboard",params:{employeeId:e.id}})),console.log("satya"+n.data.roleName),console.log("satya"+e.jwt),console.log("satya"+n.data.employeeId)}).catch(function(n){n.response?e.errorStatus=n.response.data.message:e.errorStatus="Error: Network Error"})},checkForm:function(){this.login()},checkForm1:function(){this.resentOtp()}}}),u={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"loginbg"},[o("v-container",{staticStyle:{"font-family":"Helvetica, sans-serif"}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[o("img",{staticStyle:{"margin-top":"50px"},attrs:{src:t("HjFy"),alt:"dizitiveit.com"}})]),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[o("v-card",{staticStyle:{margin:"0px 20px 0px 0px"},attrs:{elevation:"2","min-height":"100"}},[o("div",{staticClass:"logo"},[o("v-avatar",{attrs:{size:"100"}},[o("img",{attrs:{src:t("7Otq"),alt:"dizitiveit.com"}})])],1),e._v(" "),o("v-card-title",{staticStyle:{display:"flex","justify-content":"space-between","font-family":"Helvetica, sans-serif","font-size":"22px",color:"#1d244f","margin-left":"10px","margin-top":"10px","/* font-weight":"800"}},[e._v("Sign In\n              ")]),e._v(" "),o("v-card-text",{staticStyle:{padding:"10px"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showText,expression:"showText"}],staticStyle:{padding:"10px"}},[o("v-form",{attrs:{type:"POST"},on:{submit:function(n){return n.preventDefault(),e.checkForm.apply(null,arguments)}},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[o("v-text-field",{staticStyle:{"font-size":"22px","font-family":"Helvetica, sans-serif"},attrs:{label:"Mobile Number",rules:e.phoneRules},model:{value:e.mobile,callback:function(n){e.mobile=n},expression:"mobile"}}),e._v(" "),o("div",{staticStyle:{"margin-bottom":"5px","text-align":"right"}},[o("v-btn",{staticStyle:{"background-color":"#1565c0",color:"white"},attrs:{type:"submit"}},[e._v("\n                        Send OTP\n                      ")])],1)],1)],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.showText,expression:"!showText"}],staticStyle:{padding:"10px"}},[o("v-form",{attrs:{type:"POST"},on:{submit:function(n){return n.preventDefault(),e.checkForm1.apply(null,arguments)}},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[o("v-text-field",{staticStyle:{"font-size":"22px","font-family":"Helvetica, sans-serif"},attrs:{label:"Enter OTP"}}),e._v(" "),o("div",{staticStyle:{"margin-bottom":"5px","text-align":"right"}},[o("v-btn",{staticStyle:{"background-color":"#1565c0",color:"white"},attrs:{type:"submit"}},[e._v("\n                      Submit")])],1)],1)],1)])],1)],1)],1)],1),e._v(" "),o("v-snackbar",{attrs:{color:"green"},scopedSlots:e._u([{key:"action",fn:function(n){var t=n.attrs;return[o("v-btn",e._b({attrs:{text:""},on:{click:function(n){e.snackbar=!1}}},"v-btn",t,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(n){e.snackbar=n},expression:"snackbar"}},[e._v("\n    "+e._s(e.text)+"\n\n    ")])],1)},staticRenderFns:[]};var c=t("VU/8")(s,u,!1,function(e){t("JZC8")},"data-v-558e236f",null).exports;o.default.use(l.a);var m=new l.a({routes:[{path:"/",name:"Login",component:c},{path:"/HelloWorld",props:!0,name:"HelloWorld",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"gORT"))}},{path:"/AddHolidays",props:!0,name:"AddHolidays",component:function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"WQ3H"))}},{path:"/PaySlipLineItem",props:!0,name:"PaySlipLineItem",component:function(){return t.e(0).then(t.bind(null,"Ce61"))}},{path:"/LeaveEntitlement",props:!0,name:"LeaveEntitlement",component:function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"zUln"))}},{path:"/UserLeaveEntitlement",props:!0,name:"UserLeaveEntitlement",component:function(){return Promise.all([t.e(0),t.e(44)]).then(t.bind(null,"IcsM"))}},{path:"/ManagerLeaveDashboard",props:!0,name:"ManagerLeaveDashboard",component:function(){return Promise.all([t.e(0),t.e(30)]).then(t.bind(null,"O3/T"))}},{path:"/ManagerLeaveProfile",props:!0,name:"ManagerLeaveProfile",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"2A8v"))}},{path:"/ManagerEmployeeLeaveApply",props:!0,name:"ManagerEmployeeLeaveApply",component:function(){return t.e(50).then(t.bind(null,"z5DM"))}},{path:"/ManagerAudit",props:!0,name:"ManagerAudit",component:function(){return Promise.all([t.e(0),t.e(27)]).then(t.bind(null,"ae1c"))}},{path:"/ManagerLeaveapply",props:!0,name:"ManagerLeaveapply",component:function(){return Promise.all([t.e(0),t.e(28)]).then(t.bind(null,"iWax"))}},{path:"/ManagerAttendanceview",props:!0,name:"ManagerAttendanceview",component:function(){return Promise.all([t.e(0),t.e(34)]).then(t.bind(null,"gBgs"))}},{path:"/ManagerAttendanceProfile",props:!0,name:"ManagerAttendanceProfile",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"fDZt"))}},{path:"/UserProfileUpdate",props:!0,name:"UserProfileUpdate",component:function(){return Promise.all([t.e(0),t.e(46)]).then(t.bind(null,"rahr"))}},{path:"/ManagerProfileUpdate",props:!0,name:"ManagerProfileUpdate",component:function(){return Promise.all([t.e(0),t.e(48)]).then(t.bind(null,"8WO6"))}},{path:"/Roles",props:!0,name:"Roles",component:function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"ecKy"))}},{path:"/UserLeaveprofile",props:!0,name:"UserLeaveprofile",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"fSz4"))}},{path:"/Userpayroll",props:!0,name:"Userpayroll",component:function(){return Promise.all([t.e(0),t.e(26)]).then(t.bind(null,"qWau"))}},{path:"/Userpayslipprofile",props:!0,name:"Userpayslipprofile",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"EgpA"))}},{path:"/Usermenu",props:!0,name:"Usermenu",component:function(){return t.e(0).then(t.bind(null,"eIoJ"))}},{path:"/UserAttendenceview",props:!0,name:"UserAttendenceview",component:function(){return Promise.all([t.e(0),t.e(42)]).then(t.bind(null,"z6eX"))}},{path:"/UserAddAttendence",props:!0,name:"UserAddAttendence",component:function(){return t.e(0).then(t.bind(null,"qR9A"))}},{path:"/UserAttendenceprofile",props:!0,name:"UserAttendenceprofile",component:function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"vJdM"))}},{path:"/EmployeeUpdate",props:!0,name:"EmployeeUpdate",component:function(){return Promise.all([t.e(0),t.e(31)]).then(t.bind(null,"CVif"))}},{path:"/UserDashboard",props:!0,name:"UserDashboard",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"uyVh"))}},{path:"/MonthlySalarySave",props:!0,name:"MonthlySalarySave",component:function(){return t.e(0).then(t.bind(null,"6qk3"))}},{path:"/ManagerDownloadPayslip",props:!0,name:"ManagerDownloadPayslip",component:function(){return Promise.all([t.e(0),t.e(51)]).then(t.bind(null,"coqP"))}},{path:"/EmployeeAllowance",props:!0,name:"EmployeeAllowance",component:function(){return t.e(0).then(t.bind(null,"jHx7"))}},{path:"/EmployeeDeduction",props:!0,name:"EmployeeDeduction",component:function(){return t.e(0).then(t.bind(null,"G7sq"))}},{path:"/EmployeeAllowanceView",props:!0,name:"EmployeeAllowanceView",component:function(){return t.e(0).then(t.bind(null,"CI/f"))}},{path:"/LeaveView",props:!0,name:"LeaveView",component:function(){return t.e(0).then(t.bind(null,"s3TL"))}},{path:"/UserLeaveapply",props:!0,name:"UserLeaveapply",component:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"p02G"))}},{path:"/ApplyLeave",props:!0,name:"ApplyLeave",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"D/dO"))}},{path:"/GeneratePdf",props:!0,name:"GeneratePdf",component:function(){return t.e(0).then(t.bind(null,"pL94"))}},{path:"/PaySlips",props:!0,name:"PaySlips",component:function(){return t.e(0).then(t.bind(null,"wTNj"))}},{path:"/AttendenceProfile",props:!0,name:"AttendenceProfile",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"HBeg"))}},{path:"/Addattendence",props:!0,name:"Addattendence",component:function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,"5Ua3"))}},{path:"/Employeebluckupload",props:!0,name:"Employeebluckupload",component:function(){return Promise.all([t.e(0),t.e(52)]).then(t.bind(null,"ZzgR"))}},{path:"/BranchDetails",props:!0,name:"BranchDetails",component:function(){return Promise.all([t.e(0),t.e(38)]).then(t.bind(null,"PETD"))}},{path:"/UsergetProfile",props:!0,name:"UsergetProfile",component:function(){return Promise.all([t.e(0),t.e(45)]).then(t.bind(null,"9QBD"))}},{path:"/PayRegisterView",props:!0,name:"PayRegisterView",component:function(){return t.e(0).then(t.bind(null,"hSyc"))}},{path:"/PayOutView",props:!0,name:"PayOutView",component:function(){return t.e(0).then(t.bind(null,"H4Ap"))}},{path:"/LeaveMaster",props:!0,name:"LeaveMaster",component:function(){return Promise.all([t.e(0),t.e(41)]).then(t.bind(null,"NSk0"))}},{path:"/DownloadPaySlip",props:!0,name:"DownloadPaySlip",component:function(){return t.e(0).then(t.bind(null,"uwF0"))}},{path:"/AttendanceView",props:!0,name:"AttendanceView",component:function(){return t.e(0).then(t.bind(null,"dtof"))}},{path:"/payRollGeneration",props:!0,name:"payRollGeneration",component:function(){return t.e(0).then(t.bind(null,"fPpz"))}},{path:"/UserLeaveDashboard",props:!0,name:"UserLeaveDashboard",component:function(){return Promise.all([t.e(0),t.e(40)]).then(t.bind(null,"pqGI"))}},{path:"/ManagerDashboard",props:!0,name:"ManagerDashboard",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"hZdP"))}},{path:"/ManagerGetprofile",props:!0,name:"ManagerGetprofile",component:function(){return Promise.all([t.e(0),t.e(49)]).then(t.bind(null,"u6Sg"))}},{path:"/ManagerMenu",props:!0,name:"ManagerMenu",component:function(){return t.e(0).then(t.bind(null,"6MBP"))}},{path:"/ManagerAppbar",props:!0,name:"ManagerAppbar",component:function(){return Promise.all([t.e(0),t.e(25)]).then(t.bind(null,"xmyG"))}},{path:"/ManagerPayroll",props:!0,name:"ManagerPayroll",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"l0WM"))}},{path:"/Department",props:!0,name:"Department",component:function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"pw/F"))}},{path:"/BluckUpload",props:!0,name:"BluckUpload",component:function(){return t.e(0).then(t.bind(null,"bvXH"))}},{path:"/Leaveprofile",props:!0,name:"Leaveprofile",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"SWdB"))}},{path:"/Attendence",props:!0,name:"Attendence",component:function(){return t.e(0).then(t.bind(null,"eArI"))}},{path:"/PayRoll",props:!0,name:"PayRoll",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"KmBe"))}},{path:"/RunPayroll",props:!0,name:"RunPayroll",component:function(){return Promise.all([t.e(0),t.e(47)]).then(t.bind(null,"0j8R"))}},{path:"/subtabs",props:!0,name:"subtabs",component:function(){return t.e(0).then(t.bind(null,"Vvh8"))}},{path:"/subtab",props:!0,name:"subtab",component:function(){return t.e(0).then(t.bind(null,"is0V"))}},{path:"/AllowancesView",props:!0,name:"AllowancesView",component:function(){return t.e(0).then(t.bind(null,"S/2p"))}},{path:"/PayrollView",props:!0,name:"PayrollView",component:function(){return t.e(0).then(t.bind(null,"JWsr"))}},{path:"/Designation",props:!0,name:"Designation",component:function(){return Promise.all([t.e(0),t.e(33)]).then(t.bind(null,"yPwv"))}},{path:"/CompanyProfile",props:!0,name:"CompanyProfile",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"Re8Z"))}},{path:"/OverViewCompany",props:!0,name:"OverViewCompany",component:function(){return t.e(23).then(t.bind(null,"YNWZ"))}},{path:"/EmployeeProfile",props:!0,name:"EmployeeProfile",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"GIdH"))}},{path:"/BasicInfo",props:!0,name:"BasicInfo",component:function(){return Promise.all([t.e(0),t.e(20)]).then(t.bind(null,"mdM3"))}},{path:"/PersonalData",props:!0,name:"PersonalData",component:function(){return t.e(36).then(t.bind(null,"H5ru"))}},{path:"/menubar",props:!0,name:"menubar",component:function(){return t.e(0).then(t.bind(null,"ASxZ"))}},{path:"/Address",props:!0,name:"Address",component:function(){return t.e(19).then(t.bind(null,"i/JV"))}},{path:"/CompanyData",props:!0,name:"CompanyData",component:function(){return Promise.all([t.e(0),t.e(43)]).then(t.bind(null,"B5UP"))}},{path:"/AdditionalDetails",props:!0,name:"AdditionalDetails",component:function(){return t.e(39).then(t.bind(null,"Ibms"))}},{path:"/Tabs.vue",props:!0,name:"Tabs",component:function(){return t.e(0).then(t.bind(null,"53qO"))}},{path:"/Tab.vue",props:!0,name:"Tab",component:function(){return t.e(0).then(t.bind(null,"WmY6"))}},{path:"/AppBar",props:!0,name:"AppBar",component:function(){return Promise.all([t.e(0),t.e(35)]).then(t.bind(null,"wk0j"))}},{path:"/Calender",props:!0,name:"Calender",component:function(){return Promise.all([t.e(0),t.e(32)]).then(t.bind(null,"HBdu"))}},{path:"/Announcement",props:!0,name:"Announcement",component:function(){return Promise.all([t.e(0),t.e(37)]).then(t.bind(null,"mNVI"))}}]}),d=t("3EgV"),h=t.n(d),f=(t("csSS"),t("7zck"),t("3h9r")),b=(t("+2xD"),t("+Rp4"));o.default.component("downloadExcel",b.a),o.default.use(h.a),o.default.use(f.default),o.default.config.productionTip=!1,new o.default({el:"#app",router:m,vuetify:new h.a({iconfont:"mdi",theme:{themes:{dark:{primary:"#E3F2FD",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c",background:"#00a86b"}}}}),components:{App:r},template:"<App/>"})},Pmkt:function(e,n){},csSS:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.62b9ccd10ade2d55470a.js.map