(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238454"],{ff53:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a._self._c;return t("div",{staticClass:"app-container"},[a._m(0),t("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},s=[function(){var a=this,t=a._self._c;return t("div",[t("h1",[a._v("使用缓存")])])}],r=e("1b62"),o=e("362d"),i=e.n(o),d={name:"ShapeCaching",mixins:[r["b"]],data(){return{}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const a=this.pageLayer[0].layer,t=new i.a.Star({innerRadius:20,outerRadius:50,fill:"red",stroke:"black",strokeWidth:5,numPoints:5,x:60,y:60,draggable:!0,shadowOffset:{x:5,y:5},shadowColor:"black",shadowBlur:5,shadowOpacity:.5,shadowForStrokeEnabled:!1});t.cache();const e=this.$refs.container;for(let n=0;n<10;n++){const n=t.clone({x:Math.random()*e.offsetWidth,y:Math.random()*e.offsetHeight});n.cache(),a.add(n)}a.draw()}}},c=d,l=e("2877"),h=Object(l["a"])(c,n,s,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d238454.1959a41d.js.map