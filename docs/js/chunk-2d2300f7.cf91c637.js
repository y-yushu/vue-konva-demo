(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2300f7"],{eb59:function(e,a,l){"use strict";l.r(a);var i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app-container"},[e._m(0),a("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),a("el-row",[a("el-col",[a("el-slider",{on:{input:e.changeSlider},model:{value:e.sliderValue,callback:function(a){e.sliderValue=a},expression:"sliderValue"}})],1)],1)],1)},n=[function(){var e=this,a=e._self._c;return a("div",[a("h1",[e._v("图像模糊(0 - 100)")])])}],s=l("1b62"),t=l("362d"),r=l.n(t),c={name:"BlurImage",mixins:[s["b"]],data(){return{layer:null,lion:null,sliderValue:20}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const e=new Image;e.src="./static/cs0.jpg",e.onload=()=>{const a=this.pageLayer[0].layer,l=new r.a.Image({image:e,x:80,y:30,blurRadius:this.sliderValue,draggable:!0});l.cache(),l.filters([r.a.Filters.Blur]),a.add(l),a.draw(),this.lion=l,this.layer=a}},changeSlider(e){const a=this.lion;a.blurRadius(e),this.layer.batchDraw()}}},d=c,u=l("2877"),o=Object(u["a"])(d,i,n,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d2300f7.cf91c637.js.map