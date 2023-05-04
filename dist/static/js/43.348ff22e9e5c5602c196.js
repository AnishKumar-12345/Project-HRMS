webpackJsonp([43],{B5UP:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"PersonalData",mixins:[s("UYCa").a],data:function(){return{dialog:!1,dialogDelete:!1,id:"",items:["TRUE","FALSE"],count:1,activeComponent:!1,activefiled:!1,activefiled1:!0,activefiled2:!0,valid:!1,generaldata:[],edituser:!1,activeColor:"",snackbar:!1,text:"",user:{companyName:"",registrationNumber:"",gstNumber:"",panNumber:"",esiNumber:"",pfNumber:"",tinNumber:"",numberOfBranches:"",workingHours:"",workingDays:"",status:""},deginationHeaders:[{text:"COMPANY NAME",value:"companyName"},{text:"ESI NUMBER",value:"esiNumber"},{text:"GST NUMBER",value:"gstNumber"},{text:"NUMBER OF BRANCHES",value:"numberOfBranches"},{text:"PAN NUMBER",value:"panNumber"},{text:"PF NUMBER",value:"pfNumber"},{text:"REGISTRATION NUMBER",value:"registrationNumber"},{text:"STATUS",value:"status"},{text:"TIN NUMBER",value:"tinNumber"},{text:"WORKING DAYS",value:"workingDays"},{text:"WORKING HOURS",value:"workingHours"},{text:"LAST MODIFIED DATE",value:"lastModifiedDate"},{text:"ACTION",value:"actions",sortable:!1}],nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length<=30||"Name allows below 30 characters only"},function(e){return/^(?![ .]+$)[a-zA-Z .]*$/.test(e)||"Name must be characters"}],Registration:[function(e){return!!e||"Registration numbers is required"},function(e){return/^([A-Za-z]|[0-9]|)+$/.test(e)||"Registration Number must be numbers and characters"},function(e){return e&&e.length<=21&&e.length>=21||"Number allows below 21 characters only"}],aadharRules:[function(e){return!!e||"Aadhar is required"},function(e){return/^[0-9]+$/.test(e)||"only numbers are accepted"},function(e){return e&&e.length<=12&&e.length>=12||"Aadhar must be  12 numbers"}],panRules:[function(e){return!!e||"PAN is required"},function(e){return/^([A-Za-z]|[0-9]|_)+$/.test(e)||"only numbers and characters are accepted"},function(e){return e&&e.length<=10&&e.length>=10||"PAN must be  10 numbers"}],tinRules:[function(e){return!!e||"TIN is required"},function(e){return/^([A-Za-z]|[0-9]|_)+$/.test(e)||"only numbers and characters are accepted"},function(e){return e&&e.length<=10&&e.length>=10||"TIN must be  10 numbers"}],gstRules:[function(e){return!!e||"GST is required"},function(e){return/^([A-Za-z]|[0-9])+$/.test(e)||"only numbers and characters are accepted"},function(e){return e&&e.length<=15&&e.length>=15||"GST must be  15 numbers"}],pfRules:[function(e){return!!e||"PF is required"},function(e){return/^[[A-Za-z]|[0-9]|[/]]*$/.test(e)||"only numbers and characters are accepted"},function(e){return e&&e.length<=20&&e.length>=20||"PF must be 20 numbers"}],esiRules:[function(e){return!!e||"ESI is required"},function(e){return/^[0-9]+$/.test(e)||"only numbers are accepted"},function(e){return e&&e.length<=17&&e.length>=17||"ESI must be 17 numbers"}],branchRules:[function(e){return!!e||"Branch is required"},function(e){return/^[0-9]+$/.test(e)||"only numbers are accepted"},function(e){return e&&e.length<=2||"Branch must be  numbers"}],hoursRules:[function(e){return!!e||"Hours is required"},function(e){return/^[0-9]+$/.test(e)||"only numbers are accepted"},function(e){return e&&e.length<=2||"Hours greater than two numbers"}],dayRules:[function(e){return!!e||"Days is required"},function(e){return/^[0-9]+$/.test(e)||"only numbers are accepted"},function(e){return e&&e.length<=2||"Days greater than two numbers"}],stausRules:[function(e){return!!e||"Status is required"},function(e){return/^[A-Za-z]+$/.test(e)||"only characters are accepted"}],rules:[function(e){return!!e||" Filed  is required"}],alldegnations:[],branchHeaders:[]}},mounted:function(){this.getCompanys()},methods:{deleteCompanydetails:function(e){this.id=e.companyId,this.dialogDelete=!0,console.log("Delete  reviewId",this.id)},ConfirmDeleteType:function(){var e=this;this.dialogDelete=!0,console.log("Delete Dates",this.id),this.deleteCompanies(this.id).then(function(t){console.log(t),200==t.status?(e.text=t.data.message,e.activeColor="",e.activeColor="green",e.snackbar=!0,e.getCompanys(),e.dialogDelete=!1):(e.text=t.data.error,e.snackbar=!0,e.activeColor="",e.activeColor="red",e.dialogDelete=!1)})},getWColor:function(e){return 8==e?"green":e<"8"?"red":"#dcbb04"},getColor:function(e){return 1==e?"green":"red"},closeCompanydata:function(){this.user={},this.activefiled=!1},openCard:function(){this.$refs.form.reset(),this.activefiled=!0},saveVendor:function(){this.$refs.form.validate(),this.$refs.form.validate()&&(0==this.edituser?this.PostDesig():this.editedDesig())},sendItem:function(e){this.id=e.companyId,console.log("Item2",e),this.user.companyName=e.companyName,this.user.esiNumber=e.esiNumber,this.user.gstNumber=e.gstNumber,this.user.registrationNumber=e.registrationNumber,this.user.panNumber=e.panNumber,this.user.pfNumber=e.pfNumber,this.user.tinNumber=e.tinNumber,this.user.numberOfBranches=e.numberOfBranches,this.user.workingHours=e.workingHours,this.user.workingDays=e.workingDays,this.user.status=e.status,this.edituser=!0,this.dialog=!0},editedDesig:function(){var e=this;console.log("ID",this.id,this.result);var t=this.user;this.getCompanyId(this.id,t).then(function(t){console.log("In post",t),200==t.status?(e.text=t.data.message,e.snackbar=!0,e.getCompanys(),location.reload(),e.activeColor="green"):(e.text=t.data.message,e.snackbar=!0,e.activeColor="red")})},PostDesig:function(){var e=this;console.log("1234",this.user);var t=this.user;console.log("check",t),this.companyreg(t).then(function(t){console.log("In post",t),200==t.status?(e.text=t.data.message,e.snackbar=!0,e.getCompanys(),e.activeColor="green",e.user={},e.activefiled=!1):(e.text=t.data.message,e.snackbar=!0,e.activeColor="red")}).then(function(){})},getCompanys:function(){var e=this;console.log("Get All Company"),this.getCompanyDetails().then(function(t){console.log("Get All Company",t),e.alldegnations=t.Company,console.log("Get All Company11",e.alldegnations)})}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("v-container",{attrs:{fluid:""}},[s("v-row",{staticStyle:{"margin-left":"90px"}},[s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-card",{staticStyle:{margin:"0px auto","margin-bottom":"20px"},attrs:{"max-width":"100%"}},[s("v-card-text",[s("div",{staticStyle:{display:"flex","justify-content":"space-between","border-bottom":"1px solid #e4e6e4","margin-bottom":"5px","background-color":"#1565c0",color:"#fff",height:"40px","line-height":"20px","text-align":"left"}},[s("h2",{staticStyle:{"font-weight":"600","font-size":"16px",color:"rgb(255, 255, 255)",padding:"10px"}},[e._v("\n                  Company Profile\n                ")]),e._v(" "),s("h2",{staticStyle:{"font-weight":"600","font-size":"16px",color:"rgb(255, 255, 255)",padding:"10px",float:"right","margin-left":"67%"}},[e._v("\n                  Add Company Profile\n                ")]),e._v(" "),0==e.activefiled?s("v-icon",{staticClass:" mr-3 icn",on:{click:function(t){e.activefiled=!e.activefiled}}},[e._v("mdi-plus\n                ")]):e._e(),e._v(" "),1==e.activefiled?s("v-icon",{staticClass:" mr-3 icn",on:{click:function(t){return e.closeCompanydata()}}},[e._v("mdi-close\n                ")]):e._e()],1),e._v(" "),0==e.activefiled?s("div",{staticClass:"overView"},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.deginationHeaders,items:this.alldegnations},scopedSlots:e._u([{key:"item.actions",fn:function(t){var r=t.item;return[s("v-icon",{staticClass:"mr-2  white--text",staticStyle:{padding:"4px","border-radius":"4px",background:"blue"},attrs:{small:""},on:{click:function(t){return e.sendItem(r)}}},[e._v("\n                      mdi-pencil\n                    ")]),e._v(" "),s("v-icon",{staticClass:"mr-2  white--text",staticStyle:{padding:"4px","border-radius":"4px",background:"red"},attrs:{small:""},on:{click:function(t){return e.deleteCompanydetails(r)}}},[e._v("\n                      mdi-delete\n                    ")])]}},{key:"item.status",fn:function(t){var r=t.item;return[s("v-chip",{attrs:{color:e.getColor(r.status),dark:""}},[e._v("\n                        "+e._s(r.status)+"\n                      ")])]}},{key:"item.workingHours",fn:function(t){var r=t.item;return[s("v-chip",{attrs:{color:e.getWColor(r.workingHours),dark:""}},[e._v("\n                        "+e._s(r.workingHours)+"\n                      ")])]}}],null,!1,3630229625)})],1):e._e(),e._v(" "),1==e.activefiled?s("div",[s("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.saveVendor.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-container",[s("v-row",{staticStyle:{"margin-right":"-15 px","margin-left":"-15 px"}},[s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Company Name",placeholder:"Company Name",rules:e.nameRules,dense:"",outlined:""},model:{value:e.user.companyName,callback:function(t){e.$set(e.user,"companyName",t)},expression:"user.companyName"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Registration Number",rules:e.Registration,dense:"",outlined:""},model:{value:e.user.registrationNumber,callback:function(t){e.$set(e.user,"registrationNumber",t)},expression:"user.registrationNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"GST Number",rules:e.gstRules,dense:"",outlined:""},model:{value:e.user.gstNumber,callback:function(t){e.$set(e.user,"gstNumber",t)},expression:"user.gstNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"TIN Number",rules:e.tinRules,dense:"",outlined:""},model:{value:e.user.tinNumber,callback:function(t){e.$set(e.user,"tinNumber",t)},expression:"user.tinNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"PAN Number",rules:e.panRules,dense:"",outlined:""},model:{value:e.user.panNumber,callback:function(t){e.$set(e.user,"panNumber",t)},expression:"user.panNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"ESI Number",rules:e.esiRules,dense:"",outlined:""},model:{value:e.user.esiNumber,callback:function(t){e.$set(e.user,"esiNumber",t)},expression:"user.esiNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"PF Number",rules:e.pfRules,dense:"",outlined:""},model:{value:e.user.pfNumber,callback:function(t){e.$set(e.user,"pfNumber",t)},expression:"user.pfNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Number Of Branches",rules:e.branchRules,dense:"",outlined:""},model:{value:e.user.numberOfBranches,callback:function(t){e.$set(e.user,"numberOfBranches",t)},expression:"user.numberOfBranches"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Working Hours",rules:e.hoursRules,dense:"",outlined:""},model:{value:e.user.workingHours,callback:function(t){e.$set(e.user,"workingHours",t)},expression:"user.workingHours"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Working Days",rules:e.dayRules,dense:"",outlined:""},model:{value:e.user.workingDays,callback:function(t){e.$set(e.user,"workingDays",t)},expression:"user.workingDays"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-select",{attrs:{items:e.items,label:"Status",rules:e.stausRules,dense:"",outlined:""},model:{value:e.user.status,callback:function(t){e.$set(e.user,"status",t)},expression:"user.status"}})],1)],1),e._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-btn",{staticStyle:{background:"red",color:"white"},attrs:{type:"submit"}},[e._v("Save")])],1),e._v(" "),s("v-col",{attrs:{cols:""}})],1)],1)],1)],1):e._e()])],1)],1)],1)],1)],1),e._v(" "),s("v-row",[s("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",{staticStyle:{padding:"30px"}},[s("v-card-text",[s("v-card-title",[s("span",[e._v("EDIT COMPANY PROFILE")])]),s("br"),s("br"),e._v(" "),s("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.saveVendor.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-container",[s("v-row",{staticStyle:{"margin-right":"-15 px","margin-left":"-15 px"}},[s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Company Name",placeholder:"Company Name",rules:e.nameRules,dense:"",outlined:""},model:{value:e.user.companyName,callback:function(t){e.$set(e.user,"companyName",t)},expression:"user.companyName"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Registration Number",rules:e.Registration,dense:"",outlined:""},model:{value:e.user.registrationNumber,callback:function(t){e.$set(e.user,"registrationNumber",t)},expression:"user.registrationNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"GST Number",rules:e.gstRules,dense:"",outlined:""},model:{value:e.user.gstNumber,callback:function(t){e.$set(e.user,"gstNumber",t)},expression:"user.gstNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"TIN Number",rules:e.tinRules,dense:"",outlined:""},model:{value:e.user.tinNumber,callback:function(t){e.$set(e.user,"tinNumber",t)},expression:"user.tinNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"PAN Number",rules:e.panRules,dense:"",outlined:""},model:{value:e.user.panNumber,callback:function(t){e.$set(e.user,"panNumber",t)},expression:"user.panNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"ESI Number",rules:e.esiRules,dense:"",outlined:""},model:{value:e.user.esiNumber,callback:function(t){e.$set(e.user,"esiNumber",t)},expression:"user.esiNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"PF Number",rules:e.pfRules,dense:"",outlined:""},model:{value:e.user.pfNumber,callback:function(t){e.$set(e.user,"pfNumber",t)},expression:"user.pfNumber"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Number Of Branches",rules:e.branchRules,dense:"",outlined:""},model:{value:e.user.numberOfBranches,callback:function(t){e.$set(e.user,"numberOfBranches",t)},expression:"user.numberOfBranches"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Working Hours",rules:e.hoursRules,dense:"",outlined:""},model:{value:e.user.workingHours,callback:function(t){e.$set(e.user,"workingHours",t)},expression:"user.workingHours"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Working Days",rules:e.dayRules,dense:"",outlined:""},model:{value:e.user.workingDays,callback:function(t){e.$set(e.user,"workingDays",t)},expression:"user.workingDays"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-select",{attrs:{items:e.items,label:"Status",rules:e.stausRules,dense:"",outlined:""},model:{value:e.user.status,callback:function(t){e.$set(e.user,"status",t)},expression:"user.status"}})],1)],1),e._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-btn",{attrs:{id:"bnt1"},on:{click:function(t){e.dialog=!1}}},[e._v("\n                          Cancel\n                        ")]),e._v(" "),s("v-btn",{attrs:{type:"submit",id:"bnt2"}},[e._v("Save\n                        ")])],1),e._v(" "),s("v-col",{attrs:{cols:""}})],1)],1)],1)],1)],1)],1)],1),e._v(" "),s("v-dialog",{attrs:{persistent:""},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[s("v-card",{staticClass:"pb-4",staticStyle:{padding:"20px"},attrs:{rounded:"xl","min-width":"450","min-height":"150"}},[s("v-card-title",{staticClass:"justify-center pb-3",staticStyle:{color:"black"}},[e._v("Delete Company Profile")]),e._v(" "),s("v-card-subtitle",{staticStyle:{"text-align":"center","margin-top":"1px",color:"black","font-size":"15px"}},[e._v("Are you sure want to delete?")]),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("button",{staticClass:"bnt1",on:{click:function(t){e.dialogDelete=!1}}},[e._v("Cancel")]),e._v(" "),s("button",{staticClass:"bnt2",on:{click:e.ConfirmDeleteType}},[e._v("OK")]),e._v(" "),s("v-spacer")],1)],1)],1),e._v(" "),s("v-snackbar",{attrs:{color:e.activeColor},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[s("v-btn",e._b({attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.text)+"\n\n    ")])],1)},staticRenderFns:[]};var a=s("VU/8")(r,n,!1,function(e){s("ksrY")},"data-v-0d3d2e9b",null);t.default=a.exports},ksrY:function(e,t){}});
//# sourceMappingURL=43.348ff22e9e5c5602c196.js.map