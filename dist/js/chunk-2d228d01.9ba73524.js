(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228d01"],{db7d:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e._m(0),a("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),a("el-row",[a("el-col",[a("el-button",{attrs:{type:"primary"},on:{click:e.toBlue}},[e._v("交给蓝色")]),a("el-button",{attrs:{type:"primary"},on:{click:e.toYellow}},[e._v("交给黄色")])],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("图层区分")])])}],n=a("1b62"),o=a("362d"),i=a.n(o),u={name:"ShapeLayering",mixins:[n["b"]],data:function(){return{yellowGroup:null,blueGroup:null,box:null}},created:function(){var e=this;setTimeout((function(){e.addElem()}),20)},methods:{addElem:function(){var e=this.pageLayer[0].layer,t=new i.a.Group({x:300,y:100,draggable:!0});this.yellowGroup=t;var a=new i.a.Group({x:100,y:100,draggable:!0});this.blueGroup=a;var l=new i.a.Rect({x:10,y:10,width:100,height:50,fill:"red",stroke:"black"});this.box=l;var r=new i.a.Circle({x:0,y:0,radius:50,fill:"yellow",stroke:"black"}),n=new i.a.Circle({x:0,y:0,radius:50,fill:"blue",stroke:"black"});t.add(r),t.add(l),a.add(n),e.add(t),e.add(a),e.draw()},toBlue:function(){this.box.moveTo(this.blueGroup),this.pageLayer[0].layer.draw()},toYellow:function(){this.box.moveTo(this.yellowGroup),this.pageLayer[0].layer.draw()}}},d=u,s=a("2877"),c=Object(s["a"])(d,l,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d228d01.9ba73524.js.map