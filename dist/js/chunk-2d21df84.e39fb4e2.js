(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21df84"],{d420:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[e._m(0),t("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),t("el-row",[t("el-col",[t("span",{staticClass:"demonstration"},[e._v("Strength")]),t("el-slider",{on:{input:e.val1},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),t("span",{staticClass:"demonstration"},[e._v("WhiteLevel")]),t("el-slider",{on:{input:e.val2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),t("el-col",{attrs:{span:"12"}},[t("span",{staticClass:"demonstration"},[e._v("Direction")]),t("el-select",{on:{change:e.val3},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}},e._l(e.options,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-col",{attrs:{span:"12"}},[t("el-checkbox",{on:{change:e.val4},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}},[e._v("Blend")])],1)],1)],1)],1)},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v("图像浮雕 (跟着官网做了,但是浮雕是啥不知道啊)")])])}],o=t("1b62"),i=t("362d"),s=t.n(i),c={name:"EmbossImage",mixins:[o["b"]],data:function(){return{options:["top","top-left","top-right","left","right","bottom","bottom-left","bottom-right"],value1:"",value2:"",value3:"",value4:""}},created:function(){var e=this;setTimeout((function(){e.addElem()}),20)},methods:{addElem:function(){var e=this,a=new Image;a.src="./static/cs0.jpg",a.onload=function(){var t=e.pageLayer[0].layer,l=new s.a.Image({image:a,x:80,y:30,draggable:!0});l.cache(),l.filters([s.a.Filters.Emboss]),t.add(l),t.draw(),e.lion=l,e.layer=t}},changeSlider:function(e){this.lion.embossWhiteLevel(e),this.layer.batchDraw()},val1:function(e){this.lion.embossStrength(e/40),this.layer.batchDraw()},val2:function(e){this.lion.embossWhiteLevel(e/40),this.layer.batchDraw()},val3:function(e){this.lion.embossDirection(e),this.layer.batchDraw()},val4:function(e){console.log(e),this.lion.embossBlend(e),this.layer.batchDraw()}}},r=c,u=t("2877"),v=Object(u["a"])(r,l,n,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d21df84.e39fb4e2.js.map