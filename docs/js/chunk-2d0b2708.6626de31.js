(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2708"],{"23b3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._m(0),e("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},r=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("监听tr属性")])])}],s=a("1b62"),i=a("362d"),d=a.n(i),o={name:"TransformEvents",mixins:[s["b"]],data(){return{prop:{x:160,y:60,width:100,height:90,fill:"red",name:"rect",stroke:"black",draggable:!0}}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const t=this.pageLayer[0].layer,e=new d.a.Text({x:5,y:5});t.add(e);const a=new d.a.Rect(this.prop),n=new d.a.Transformer({nodes:[a]});t.add(a),t.add(n),t.draw(),a.on("dragmove",()=>this.updateText(t,a,e)),a.on("transform",()=>this.updateText(t,a,e))},updateText(t,e,a){var n=["x: "+e.x(),"y: "+e.y(),"rotation: "+e.rotation(),"width: "+e.width(),"height: "+e.height(),"scaleX: "+e.scaleX(),"scaleY: "+e.scaleY()];a.text(n.join("\n")),t.batchDraw()}}},c=o,l=a("2877"),h=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b2708.6626de31.js.map