(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd826"],{"2bff":function(e,n,r){"use strict";r.r(n);var a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"app-container"},[e._m(0),r("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},t=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("h1",[e._v("修改样式")])])}],i=r("1b62"),c=r("362d"),d=r.n(c),o={name:"SelectAndTransformStyling",mixins:[i["b"]],data:function(){return{circle:{x:150,y:150,radius:70,fill:"red",draggable:!0}}},created:function(){var e=this;setTimeout((function(){e.addElem()}),20)},methods:{addElem:function(){var e=this.pageLayer[0].layer,n=new d.a.Circle(this.circle),r=new d.a.Transformer({anchorStroke:"red",anchorFill:"yellow",anchorSize:20,borderStroke:"green",borderDash:[3,3],nodes:[n]});e.add(n),e.add(r),e.draw()}}},l=o,s=r("2877"),u=Object(s["a"])(l,a,t,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0bd826.ccb7afde.js.map