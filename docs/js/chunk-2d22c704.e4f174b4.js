(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c704"],{f2df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._m(0),e("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},i=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("普通动画事件")])])}],s=n("1b62"),r=n("362d"),d=n.n(r),c={name:"TweenFilter",mixins:[s["b"]],data(){return{}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const t=this.pageLayer[0].layer,e=new d.a.RegularPolygon({x:200,y:200,sides:6,radius:20,fill:"red",stroke:"black",strokeWidth:4});t.add(e),t.draw();const n=100,a=2e3,i=200,s=new d.a.Animation((function(t){e.x(n*Math.sin(2*t.time*Math.PI/a)+i)}),t);s.start()}}},o=c,l=n("2877"),u=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d22c704.e4f174b4.js.map