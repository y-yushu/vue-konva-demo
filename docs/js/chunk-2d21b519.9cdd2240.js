(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b519"],{beee:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._m(0),e("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),e("el-row",[e("el-col",[e("el-button",{attrs:{type:"primary"},on:{click:t.toTop}},[t._v("黄色置顶")]),e("el-button",{attrs:{type:"primary"},on:{click:t.toBottom}},[t._v("黄色置底")]),e("el-button",{attrs:{type:"primary"},on:{click:t.toUp}},[t._v("黄色升级")]),e("el-button",{attrs:{type:"primary"},on:{click:t.toDown}},[t._v("黄色降级")]),e("el-button",{attrs:{type:"primary"},on:{click:t.setZIndex}},[t._v("黄色等级置为3")])],1)],1)],1)},r=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("图层区分")])])}],n=o("1b62"),l=o("362d"),s=o.n(l),i={name:"ShapeLayering",mixins:[n["b"]],data(){return{yellowBox:null}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const t=this.pageLayer[0].layer,e=["red","orange","yellow","green","blue","purple"];e.forEach((e,o)=>{const a=new s.a.Rect({x:30*o+210,y:18*o+40,width:100,height:50,fill:e,stroke:"black",strokeWidth:4,draggable:!0,name:e});a.on("mouseover",(function(){document.body.style.cursor="pointer"})),a.on("mouseout",(function(){document.body.style.cursor="default"})),"yellow"===e&&(this.yellowBox=a),t.add(a)}),t.draw()},toTop(){const t=this.pageLayer[0].layer;this.yellowBox.moveToTop(),t.draw()},toBottom(){const t=this.pageLayer[0].layer;this.yellowBox.moveToBottom(),t.draw()},toUp(){const t=this.pageLayer[0].layer;this.yellowBox.moveUp(),t.draw()},toDown(){const t=this.pageLayer[0].layer;this.yellowBox.moveDown(),t.draw()},setZIndex(){const t=this.pageLayer[0].layer;this.yellowBox.setZIndex(3),t.draw()}}},c=i,y=o("2877"),d=Object(y["a"])(c,a,r,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21b519.9cdd2240.js.map