(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22269b"],{cf02:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app-container"},[e._m(0),a("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},i=[function(){var e=this,a=e._self._c;return a("div",[a("h1",[e._v("剪切方法")])])}],s=t("1b62"),r=t("362d"),d=t.n(r),c={name:"ResizeText2",mixins:[s["b"]],data(){return{}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const e=this.pageLayer[0].layer,a=new d.a.Group({clipFunc:e=>{e.arc(250,120,50,0,2*Math.PI,!1),e.arc(150,120,60,0,2*Math.PI,!1)},draggable:!0}),t=new d.a.Line({points:[73,140,340,23,500,109,300,170],stroke:"blue",strokeWidth:10,fill:"#aaf",tension:.8,closed:!0}),n=new d.a.Line({points:[73,140,340,23,500,109],stroke:"red",strokeWidth:10,fill:"#faa",tension:1.2,scale:{x:.5,y:.5},x:100,y:50,closed:!0});a.add(t),a.add(n),e.add(a),e.draw()}}},o=c,l=t("2877"),u=Object(l["a"])(o,n,i,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d22269b.01151a27.js.map