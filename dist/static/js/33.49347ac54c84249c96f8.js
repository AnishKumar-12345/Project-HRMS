webpackJsonp([33],{"ws/y":function(e,t){},yPwv:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("bOdI"),s=i.n(a),l=i("UYCa"),n=(i("ASxZ"),i("mtWM"),{name:"Designation",mixins:[l.a],components:{},data:function(){var e;return e={dialog:!1,id:"",dialogDelete:!1,count:1,activeComponent:!1,activefiled:!1,activefiled1:!0,activefiled2:!0,valid:!1,employeeId:"25",snackbar:!1,activeColor:"",text:""},s()(e,"id",""),s()(e,"user",{desigName:"",grade:"",level:""}),s()(e,"edituser",!1),s()(e,"deginationHeaders",[{text:"DESIGNATION NAME",value:"desigName"},{text:"GRADE",value:"grade"},{text:"LEVEL",value:"level"},{text:"ACTION",value:"actions",sortable:!1}]),s()(e,"designationRules",[function(e){return!!e||"Designation is required"},function(e){return/^(?![ .]+$)[a-zA-Z .]*$/.test(e)||"Designation must be characters"}]),s()(e,"gradeRules",[function(e){return!!e||"Grade is required"},function(e){return/^(?![ .]+$)[a-zA-Z .]*$/.test(e)||"Grade must be characters"}]),s()(e,"rules",[function(e){return!!e||" Filed  is required"}]),s()(e,"alldegnations",[]),s()(e,"branchHeaders",[]),e},mounted:function(){this.getDeginations()},methods:{deleteDesig:function(e){this.id=e.desigId,this.dialogDelete=!0,console.log("Delete  reviewId",this.id)},ConfirmDeleteType:function(){var e=this;this.dialogDelete=!0,console.log("Delete Dates",this.id),this.deleteDesignations(this.id).then(function(t){console.log(t),200==t.status?(e.text=t.data.message,e.activeColor="",e.activeColor="green",e.snackbar=!0,e.getDeginations(),e.dialogDelete=!1):(e.text=t.data.error,e.snackbar=!0,e.activeColor="",e.activeColor="red",e.dialogDelete=!1)})},closeDesignationdata:function(){this.user={},this.activefiled=!1},sendItem:function(e){this.id=e.desigId,console.log("Item",this.id),this.user.desigName=e.desigId,this.user.desigName=e.desigName,this.user.grade=e.grade,this.user.level=e.level,console.log("Item",this.id),this.edituser=!0,this.dialog=!0},editedDesig:function(){var e=this;console.log("ID",this.id,this.user);var t=this.user;this.getDesignationId(this.id,t).then(function(t){console.log("In post",t),200==t.status?(e.text=t.data.message,e.snackbar=!0,e.activeColor="green",e.getDeginations(),location.reload()):(e.text=t.data.message,e.snackbar=!0,e.activeColor="red")})},SaveDesig:function(){this.$refs.form.validate(),this.$refs.form.validate()&&(0==this.edituser?this.PostDesig():(console.log("Edited"),this.editedDesig()))},PostDesig:function(){var e=this;console.log("1234",this.user);var t=this.user;console.log("check",t),this.DesignationReq(t).then(function(t){console.log("In post",t),200==t.status?(e.text=t.data.message,e.snackbar=!0,e.$router.push({name:"CompanyProfile"}),e.getDeginations(),e.user={},e.activefiled=!1,e.activeColor="green"):(e.text=t.data.message,e.snackbar=!0,e.activeColor="red")})},getDeginations:function(){var e=this;this.getAllDeginations().then(function(t){console.log("Get All user",t),e.alldegnations=t.Designation,console.log("Get All user",e.alldegnations)})}}}),o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",[i("v-container",{attrs:{fluid:""}},[i("v-row",{staticStyle:{"margin-left":"90px"}},[i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-card",{staticStyle:{margin:"0px auto","margin-bottom":"20px"},attrs:{"max-width":"100%"}},[i("v-card-text",[i("div",{staticStyle:{display:"flex","justify-content":"space-between","border-bottom":"1px solid #e4e6e4","margin-bottom":"5px","background-color":"#1565c0",color:"#fff",height:"40px","line-height":"20px","text-align":"left"}},[i("h2",{staticStyle:{"font-weight":"600","font-size":"16px",color:"rgb(255, 255, 255)",padding:"10px"}},[e._v("\n                  Designation Details\n                ")]),e._v(" "),i("h2",{staticStyle:{"font-weight":"600","font-size":"16px",color:"rgb(255, 255, 255)",padding:"10px",float:"right","margin-left":"68%",position:"relative"}},[e._v("\n                  Add Designation\n                ")]),e._v(" "),0==e.activefiled?i("v-icon",{staticClass:" mr-3 icn",on:{click:function(t){e.activefiled=!e.activefiled}}},[e._v("mdi-plus\n                ")]):e._e(),e._v(" "),1==e.activefiled?i("v-icon",{staticClass:" mr-3 icn",on:{click:function(t){return e.closeDesignationdata()}}},[e._v("mdi-close\n                ")]):e._e()],1),e._v(" "),0==e.activefiled?i("div",{staticClass:"overView"},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.deginationHeaders,items:this.alldegnations},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[i("v-icon",{staticClass:"mr-2  white--text",staticStyle:{padding:"4px","border-radius":"4px",background:"blue"},attrs:{small:""},on:{click:function(t){return e.sendItem(a)}}},[e._v("\n                      mdi-pencil\n                    ")]),e._v(" "),i("v-icon",{staticClass:"mr-2  white--text",staticStyle:{padding:"4px","border-radius":"4px",background:"red"},attrs:{small:""},on:{click:function(t){return e.deleteDesig(a)}}},[e._v("\n                      mdi-delete\n                    ")])]}}],null,!1,2281792945)})],1):e._e(),e._v(" "),1==e.activefiled?i("div",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.SaveDesig.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-container",[i("v-row",{staticStyle:{"margin-right":"-15 px","margin-left":"-15 px"}},[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Designation",rules:e.rules,dense:"",outlined:""},model:{value:e.user.desigName,callback:function(t){e.$set(e.user,"desigName",t)},expression:"user.desigName"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Grade",rules:e.rules,dense:"",outlined:""},model:{value:e.user.grade,callback:function(t){e.$set(e.user,"grade",t)},expression:"user.grade"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Level",rules:e.rules,dense:"",outlined:""},model:{value:e.user.level,callback:function(t){e.$set(e.user,"level",t)},expression:"user.level"}})],1)],1),e._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticStyle:{background:"red",color:"white"},attrs:{type:"submit"}},[e._v("Save")])],1),e._v(" "),i("v-col",{attrs:{cols:""}})],1)],1)],1)],1):e._e()])],1)],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"3"}})],1)],1)],1),e._v(" "),i("v-row",[i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",{staticStyle:{padding:"30px"}},[i("v-card-text",[i("v-card-title",[i("span",[e._v("EDIT DESIGNATION")])]),i("br"),e._v(" "),i("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.SaveDesig.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-container",[i("v-row",{staticStyle:{"margin-right":"-15 px","margin-left":"-15 px"}},[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Designation",rules:e.rules,dense:"",outlined:""},model:{value:e.user.desigName,callback:function(t){e.$set(e.user,"desigName",t)},expression:"user.desigName"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Grade",rules:e.rules,dense:"",outlined:""},model:{value:e.user.grade,callback:function(t){e.$set(e.user,"grade",t)},expression:"user.grade"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Level",rules:e.rules,dense:"",outlined:""},model:{value:e.user.level,callback:function(t){e.$set(e.user,"level",t)},expression:"user.level"}})],1)],1),e._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-btn",{attrs:{id:"bnt1"},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),e._v(" "),i("v-btn",{attrs:{id:"bnt2",type:"submit"}},[e._v("Save")])],1),e._v(" "),i("v-col",{attrs:{cols:""}})],1)],1)],1)],1)],1)],1)],1),e._v(" "),i("v-dialog",{attrs:{persistent:""},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[i("v-card",{staticClass:"pb-4",staticStyle:{padding:"20px"},attrs:{rounded:"xl","min-width":"450","min-height":"150"}},[i("v-card-title",{staticClass:" justify-center pb-3",staticStyle:{color:"black"}},[e._v("Delete Holiday")]),e._v(" "),i("v-card-subtitle",{staticStyle:{"text-align":"center","margin-top":"1px",color:"black","font-size":"15px"}},[e._v("Are you sure you want to delete this item?")]),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("button",{staticClass:"bnt1",on:{click:function(t){e.dialogDelete=!1}}},[e._v("Cancel")]),e._v(" "),i("button",{staticClass:"bnt2",on:{click:e.ConfirmDeleteType}},[e._v("OK")]),e._v(" "),i("v-spacer")],1)],1)],1),e._v(" "),i("v-snackbar",{attrs:{color:e.activeColor},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[i("v-btn",e._b({attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.text)+"\n\n    ")])],1)},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(e){i("ws/y")},"data-v-56134e8c",null);t.default=r.exports}});
//# sourceMappingURL=33.49347ac54c84249c96f8.js.map