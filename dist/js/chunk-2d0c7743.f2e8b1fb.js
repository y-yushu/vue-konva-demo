(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7743"],{"514e":function(e,a,n){"use strict";n.r(a);var i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app-container"},[e._m(0),n("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),n("el-row",[n("el-col",[n("el-slider",{on:{input:e.changeSlider},model:{value:e.sliderValue,callback:function(a){e.sliderValue=a},expression:"sliderValue"}})],1)],1)],1)},l=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("h1",[e._v("图像Noise")])])}],t=n("1b62"),r=n("362d"),s=n.n(r),c={name:"NoiseImage",mixins:[t["b"]],data:function(){return{layer:null,lion:null,sliderValue:0}},created:function(){var e=this;setTimeout((function(){e.addElem()}),20)},methods:{addElem:function(){var e=this,a=new Image;a.src="./static/cs0.jpg",a.onload=function(){var n=e.pageLayer[0].layer,i=new s.a.Image({image:a,x:80,y:30,draggable:!0});i.cache(),i.filters([s.a.Filters.Noise]),n.add(i),n.draw(),e.lion=i,e.layer=n}},changeSlider:function(e){this.lion.noise(e/20),this.layer.batchDraw()}}},o=c,d=n("2877"),u=Object(d["a"])(o,i,l,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c7743.f2e8b1fb.js.map