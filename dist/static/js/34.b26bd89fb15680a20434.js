webpackJsonp([34],{gBgs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("UYCa"),l=n("bvXH"),s=n("qR9A"),o=n("eIoJ"),i={name:"UserAttendenceview",mixins:[a.a],components:{BluckUpload:l.default,UserAddAttendence:s.default,Usermenu:o.default},data:function(){return{tabs:null,AttendenceDetails:[],monitems:["Janury","February","March","April","May","June","July","August","September","October","November","December"],yearitems:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"],user:{inTime:"",outTime:"",attendanceDay:""},selected:"",headers1:[{text:"Employee Id",value:"employeeId"},{text:"In Time",value:"inTime"},{text:"Out Time",value:"outTime"},{text:"Total Hours ",value:"totalHours"},{text:"Date",value:"attendanceDay"}],date:(new Date).toISOString().substr(0,7),menu:!1,modal:!1,date1:(new Date).toISOString().substr(0,7),menu1:!1,modal1:!1,employeelist:[],employeeListData:[],result:[],result1:[],valid:!1,showText:!1,userid:"",snackbar:!1,text:"",attendenceid:"",headers:[{text:"Date",value:"attendanceDay"},{text:"In Time ",value:"inTime"},{text:"Out Time",value:"outTime"},{text:"Action",value:"actions"}],items:["Attendance View","Employee Attedance view","","","","","","","","",""]}},mounted:function(){this.userid=localStorage.getItem("id"),this.getList(),this.getListEmployeedata()},methods:{getList:function(){var e=this;this.getlistOfEmployees().then(function(t){console.log("Get All employee list",t.data.Employee);for(var n=0;n<t.data.Employee.length;n++)e.employeelist.push({text:t.data.Employee[n].employeeId});console.log("Get All employee list",e.employeelist)})},getblukapi:function(){var e=this,t=this.date.substring(5,7),n=this.date.substring(0,4),a=this.userid;console.log("date",t,n,a),this.getAttendenceView(a,t,n).then(function(t){e.result=t.data.Attendance,console.log("In post",e.result)})},getEmployeeAttendance:function(){var e=this,t=this.date.substring(5,7),n=this.date.substring(0,4),a=this.selected;console.log("date",t,n,a),this.getAttendenceView(a,t,n).then(function(t){e.result1=t.data.Attendance,console.log("In post",e.result1)})},getListEmployeedata:function(){var e=this;this.getEmployeeList(this.userid).then(function(t){console.log("Get All employee list",t.data.EmployeeList);for(var n=0;n<t.data.EmployeeList.length;n++)e.employeeListData.push({text:t.data.EmployeeList[n].employeeId+"-"+t.data.EmployeeList[n].empName,value:t.data.EmployeeList[n].employeeId});console.log("Get All employee list",e.employeelist)})}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"managerattendance"}},[n("v-card",{staticStyle:{"margin-left":"110px","margin-top":"20px"},attrs:{width:"90%"}},[n("v-toolbar",{staticStyle:{height:"-20px"},attrs:{color:"cyan",dark:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{centered:""},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},e._l(e.items,function(t){return n("v-tab",{key:t},[e._v("\n              "+e._s(t)+"\n            ")])}),1)]},proxy:!0}])}),e._v(" "),n("v-tabs-items",{model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[n("v-tab-item",[n("v-card",{staticStyle:{padding:"10px"}},[n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"4",sm:"5",md:"3"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,l=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Select Date",readonly:"",dense:"",outlined:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",l,!1),a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("\n            OK\n          ")])],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"1"}},[n("v-btn",{staticStyle:{background:"red",color:"white"},attrs:{type:"submit"},on:{click:function(t){return e.getblukapi()}}},[e._v(" Retrive\n\n                  ")])],1)],1),e._v(" "),n("v-row",[n("v-col")],1),e._v(" "),n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers1,items:this.result,"items-per-page":5},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.sendItem(a)}}},[e._v("\n          mdi-pencil\n        ")])]}}])})],1)],1)],1)],1),e._v(" "),n("v-tab-item",[n("v-row",{staticStyle:{"margin-top":"10px","margin-left":"30px"}},[n("v-col",[n("v-select",{attrs:{items:this.employeeListData,label:"Select Employee",rules:e.rules,dense:"",outlined:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),n("v-col",{attrs:{cols:"4",sm:"5",md:"3"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},on:{"update:returnValue":function(t){e.date1=t},"update:return-value":function(t){e.date1=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,l=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Select Date",readonly:"",dense:"",outlined:""},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}},"v-text-field",l,!1),a))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[e._v(" "),n("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:""},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu1=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu1.save(e.date1)}}},[e._v("\n            OK\n          ")])],1)],1)],1),e._v(" "),n("v-col",[n("v-btn",{staticStyle:{background:"red",color:"white"},on:{click:function(t){return e.getEmployeeAttendance()}}},[e._v("Retrieve")])],1)],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers1,items:this.result1,"items-per-page":5},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.sendItem(a)}}},[e._v("\n          mdi-pencil\n        ")])]}}])})],1)],1)],1),e._v(" "),n("v-snackbar",{attrs:{color:"green"},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.text)+"\n\n      ")])],1)},staticRenderFns:[]};var c=n("VU/8")(i,r,!1,function(e){n("jMun")},"data-v-5372c37f",null);t.default=c.exports},jMun:function(e,t){}});
//# sourceMappingURL=34.b26bd89fb15680a20434.js.map