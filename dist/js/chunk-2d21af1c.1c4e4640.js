(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21af1c"],{be58:function(e,a,n){"use strict";n.r(a);var l=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app-container"},[e._m(0),n("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),n("el-row",[n("el-col",[n("el-slider",{on:{input:e.changeSlider},model:{value:e.sliderValue,callback:function(a){e.sliderValue=a},expression:"sliderValue"}})],1)],1)],1)},t=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("h1",[e._v("图像Multiple")])])}],i=n("1b62"),r=n("362d"),c=n.n(r),s={name:"MultipleImage",mixins:[i["b"]],data:function(){return{layer:null,lion:null,sliderValue:20}},created:function(){var e=this;setTimeout((function(){e.addElem()}),20)},methods:{addElem:function(){var e=this,a=new Image;a.src="./static/cs0.jpg",a.onload=function(){var n=e.pageLayer[0].layer,l=new c.a.Image({image:a,x:80,y:30,draggable:!0});l.cache(),l.filters([c.a.Filters.Blur,c.a.Filters.Invert]),n.add(l),n.draw(),e.lion=l,e.layer=n}},changeSlider:function(e){this.lion.blurRadius(e/5*2),this.layer.batchDraw()}}},u=s,o=n("2877"),d=Object(o["a"])(u,l,t,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21af1c.1c4e4640.js.map