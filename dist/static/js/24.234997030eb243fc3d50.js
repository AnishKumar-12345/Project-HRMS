webpackJsonp([24],{"KzS/":function(e,t){},WQ3H:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("UYCa"),i=(a("mtWM"),{name:"Designation",mixins:[l.a],data:function(){return{dialog:!1,holidays:["Regular","Optional"],items:["Male","Female"],count:1,dialogDelete:!1,activeComponent:!1,activeColor:"",activefiled:!1,activefiled1:!0,activefiled2:!0,edituser:!1,snackbar:!1,text:"",valid:!1,employeeId:"25",id:"",user:{holidayName:"",holidayType:"",holidayDate:""},deginationHeaders:[{text:"HOLIDAY NAME",value:"holidayName"},{text:"HOLIDAY TYPE",value:"holidayType"},{text:"HOLIDAY DATE",value:"holidayDate"},{text:"ACTION",value:"actions",sortable:!1}],rules:[function(e){return!!e||" Filed  is required"}],holidys:[],branchHeaders:[]}},mounted:function(){this.getRoll()},methods:{closeHolidaysdata:function(){this.user={},this.activefiled=!1},sendItem:function(e){this.id=e.holidaysId,console.log("Itemcheck",e),this.user.holidayName=e.holidayName,this.user.holidayType=e.holidayType,this.user.holidayDate=e.holidayDate,this.edituser=!0,this.dialog=!0,console.log("Item",this.id)},editedDesig:function(){var e=this;console.log("ID",this.id,this.user);var t=this.user;this.getHolidayId(this.id,t).then(function(t){console.log("In post",t),200==t.status?(e.text=t.data.message,e.snackbar=!0,e.getRoll(),location.reload(),e.activeColor="green"):(e.text=t.data.message,e.snackbar=!0,e.activeColor="red")})},SaveRoles:function(){console.log("json",this.editedVendor,this.valid),this.$refs.form.validate(),console.log("json",this.editedVendor,this.valid),this.$refs.form.validate(),this.$refs.form.validate()&&(0==this.edituser?this.PostRoles():(console.log("Edited"),this.editedDesig()))},PostRoles:function(){var e=this;console.log("1234",this.user);var t=this.user;console.log("check",t),this.PostHolidays(t).then(function(t){console.log("In post",t),200==t.status?(e.text=t.data.message,e.snackbar=!0,e.getRoll(),e.user={},e.activefiled=!1,e.activeColor="green"):(e.text=t.data.message,e.snackbar=!0,e.activeColor="red")})},deletedateType:function(e){this.id=e.holidaysId,this.dialogDelete=!0,console.log("Delete  reviewId",this.id)},ConfirmDeleteType:function(e){var t=this;this.dialogDelete=!0,console.log("Delete Dates",this.id),this.deleteHoliday(this.id).then(function(e){console.log(e),200==e.status?(t.text=e.data.message,t.activeColor="",t.activeColor="green",t.snackbar=!0,t.getRoll(),t.dialogDelete=!1):(t.text=e.data.error,t.snackbar=!0,t.activeColor="",t.activeColor="red",t.dialogDelete=!1)})},getRoll:function(){var e=this;this.getAllholidys().then(function(t){console.log("Get All user",t),e.holidys=t.data.Holidays,console.log("Get All holidys",e.holidys)})}}}),o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticStyle:{"margin-left":"90px"}},[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-card",{staticStyle:{margin:"0px auto","margin-bottom":"20px"},attrs:{"max-width":"100%"}},[a("v-card-text",[a("div",{staticStyle:{display:"flex","justify-content":"space-between","border-bottom":"1px solid #e4e6e4","margin-bottom":"5px","background-color":"#1565c0",color:"#fff",height:"40px","line-height":"20px","text-align":"left"}},[a("h2",{staticStyle:{"font-weight":"600","font-size":"16px",color:"rgb(255, 255, 255)",padding:"10px"}},[e._v("\n                    Holidays\n                  ")]),e._v(" "),a("h2",{staticStyle:{"font-weight":"600","font-size":"16px",color:"rgb(255, 255, 255)",padding:"10px",float:"right","margin-left":"77%",position:"relative"}},[e._v("\n                    Add Holidays\n                  ")]),e._v(" "),0==e.activefiled?a("v-icon",{staticClass:" mr-3 icn",on:{click:function(t){e.activefiled=!e.activefiled}}},[e._v("mdi-plus\n                  ")]):e._e(),e._v(" "),1==e.activefiled?a("v-icon",{staticClass:" mr-3 icn",on:{click:function(t){return e.closeHolidaysdata()}}},[e._v("mdi-close\n                  ")]):e._e()],1),e._v(" "),0==e.activefiled?a("div",{staticClass:"overView"},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.deginationHeaders,items:this.holidys},scopedSlots:e._u([{key:"item.actions",fn:function(t){var l=t.item;return[a("v-icon",{staticClass:"mr-2  white--text",staticStyle:{padding:"4px","border-radius":"4px",background:"blue"},attrs:{small:""},on:{click:function(t){return e.sendItem(l)}}},[e._v("\n                        mdi-pencil\n                      ")]),e._v(" "),a("v-icon",{staticClass:"mr-2  white--text",staticStyle:{padding:"4px","border-radius":"4px",background:"red"},attrs:{small:""},on:{click:function(t){return e.deletedateType(l)}}},[e._v("\n                        mdi-delete\n                      ")])]}}],null,!1,4106602689)})],1):e._e(),e._v(" "),1==e.activefiled?a("div",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.SaveRoles.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",{staticStyle:{"margin-right":"-15 px","margin-left":"-15 px"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Holiday Name",rules:e.rules,dense:"",outlined:""},model:{value:e.user.holidayName,callback:function(t){e.$set(e.user,"holidayName",t)},expression:"user.holidayName"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-autocomplete",{attrs:{label:"Holiday Type",items:e.holidays,rules:e.rules,dense:"",outlined:""},model:{value:e.user.holidayType,callback:function(t){e.$set(e.user,"holidayType",t)},expression:"user.holidayType"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Holiday Date",type:"date",rules:e.rules,dense:"",outlined:""},model:{value:e.user.holidayDate,callback:function(t){e.$set(e.user,"holidayDate",t)},expression:"user.holidayDate"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticStyle:{background:"red",color:"white"},attrs:{type:"submit"}},[e._v("Save")])],1),e._v(" "),a("v-col",{attrs:{cols:""}})],1)],1)],1)],1):e._e()])],1)],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}})],1)],1)],1),e._v(" "),a("v-row",[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{staticStyle:{padding:"20px"}},[a("v-card-text",[a("v-card-title",[a("span",[e._v("EDIT HOLIDAYS")])]),a("br"),e._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.SaveRoles.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",{staticStyle:{"margin-right":"-15 px","margin-left":"-15 px"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Holiday Name",rules:e.rules,dense:"",outlined:""},model:{value:e.user.holidayName,callback:function(t){e.$set(e.user,"holidayName",t)},expression:"user.holidayName"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-autocomplete",{attrs:{label:"Holiday Type",items:e.holidays,rules:e.rules,dense:"",outlined:""},model:{value:e.user.holidayType,callback:function(t){e.$set(e.user,"holidayType",t)},expression:"user.holidayType"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Holiday Date",type:"date",rules:e.rules,dense:"",outlined:""},model:{value:e.user.holidayDate,callback:function(t){e.$set(e.user,"holidayDate",t)},expression:"user.holidayDate"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{id:"bnt1"},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{type:"submit",id:"bnt2"}},[e._v("Save")])],1),e._v(" "),a("v-col",{attrs:{cols:""}})],1)],1)],1)],1)],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{persistent:""},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",{staticClass:"pb-4",staticStyle:{padding:"20px"},attrs:{rounded:"xl","min-width":"450","min-height":"150"}},[a("v-card-title",{staticClass:"justify-center pb-3",staticStyle:{color:"black"}},[e._v("Delete Holiday")]),e._v(" "),a("v-card-subtitle",{staticStyle:{"text-align":"center","margin-top":"1px",color:"black","font-size":"15px"}},[e._v("Are you sure you want to delete this item?")]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("button",{staticClass:"bnt1",on:{click:function(t){e.dialogDelete=!1}}},[e._v("Cancel")]),e._v(" "),a("button",{staticClass:"bnt2",on:{click:e.ConfirmDeleteType}},[e._v("OK")]),e._v(" "),a("v-spacer")],1)],1)],1),e._v(" "),a("v-snackbar",{attrs:{color:e.activeColor},scopedSlots:e._u([{key:"action",fn:function(t){var l=t.attrs;return[a("v-btn",e._b({attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",l,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.text)+"\n\n      ")])],1)},staticRenderFns:[]};var s=a("VU/8")(i,o,!1,function(e){a("KzS/")},"data-v-a33c11ce",null);t.default=s.exports}});
//# sourceMappingURL=24.234997030eb243fc3d50.js.map