(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213732"],{ad70:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[e._m(0),t("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),t("el-row",[t("el-col",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addElem(e.wedge)}}},[e._v("创建扇形")])],1)],1)],1)},r=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("创建扇形")])])}],i=n("1b62"),o=n("362d"),s=n.n(o),d={name:"WedgeT",mixins:[i["b"]],data(){return{wedge:{x:200,y:200,radius:70,angle:60,fill:"red",stroke:"black",strokeWidth:4,rotation:-120}}},methods:{addElem(e){const t=this.pageLayer[0].layer,n=new s.a.Wedge(e);t.add(n),t.batchDraw(),console.log("创建图形成功\n",n)}}},l=d,c=n("2877"),u=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d213732.eecb5169.js.map