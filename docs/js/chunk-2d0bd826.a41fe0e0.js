(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd826"],{"2bff":function(e,r,a){"use strict";a.r(r);var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"app-container"},[e._m(0),r("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},t=[function(){var e=this,r=e._self._c;return r("div",[r("h1",[e._v("修改样式")])])}],i=a("1b62"),d=a("362d"),s=a.n(d),c={name:"SelectAndTransformStyling",mixins:[i["b"]],data(){return{circle:{x:150,y:150,radius:70,fill:"red",draggable:!0}}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const e=this.pageLayer[0].layer,r=new s.a.Circle(this.circle),a=new s.a.Transformer({anchorStroke:"red",anchorFill:"yellow",anchorSize:20,borderStroke:"green",borderDash:[3,3],nodes:[r]});e.add(r),e.add(a),e.draw()}}},l=c,o=a("2877"),u=Object(o["a"])(l,n,t,!1,null,null,null);r["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0bd826.a41fe0e0.js.map