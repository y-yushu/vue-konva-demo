(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e7d4"],{d67c:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"app-container"},[t._m(0),n("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),n("el-row",[n("el-col",[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.addElem(t.prop)}}},[t._v("创建图形")])],1)],1)],1)},r=[function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("创建星形")])])}],i=a("1b62"),o=a("362d"),s=a.n(o),l={name:"Star",mixins:[i["b"]],data(){return{prop:{x:100,y:100,numPoints:6,innerRadius:40,outerRadius:70,fill:"yellow",stroke:"black",strokeWidth:4}}},methods:{addElem(t){const n=this.pageLayer[0].layer,a=new s.a.Star(t);n.add(a),n.batchDraw(),console.log("创建图形成功\n",a)}}},c=l,d=a("2877"),u=Object(d["a"])(c,e,r,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21e7d4.5e2f5b25.js.map