(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fcb1"],{ea10:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._m(0),e("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},s=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("边框样式(鼠标移入改变)")])])}],i=r("1b62"),n=r("362d"),o=r.n(n),c={name:"Stroke",mixins:[i["b"]],data(){return{regular1:{x:100,y:100,sides:6,radius:70,fill:"red",stroke:"black",strokeWidth:4}}},created(){setTimeout(()=>{this.initialize()},20)},methods:{initialize(){const t=this.pageLayer[0].layer,e=new o.a.RegularPolygon(this.regular1);e.on("mouseover touchstart",()=>{e.setAttrs({stroke:"blue",strokeWidth:20}),t.draw()}),e.on("mouseout touchend",()=>{e.setAttrs({stroke:"black",strokeWidth:4}),t.draw()}),t.add(e),t.batchDraw()}}},u=c,d=r("2877"),l=Object(d["a"])(u,a,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22fcb1.eecf91ca.js.map