(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2e6f"],{"25a7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[e._m(0),n("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),n("el-row",[n("el-col",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addElem(e.prop)}}},[e._v("创建圆形")])],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("创建图片1")])])}],r=n("1b62"),c=n("362d"),o=n.n(c),s={name:"Sprite",mixins:[r["b"]],data:function(){return{prop:{x:50,y:50,image:"",animation:"idle",animations:{idle:[2,2,70,119,71,2,74,119,146,2,81,119,226,2,76,119],punch:[2,138,74,122,76,138,84,122,346,138,120,122]},frameRate:7,frameIndex:0}}},created:function(){var e=new Image;e.src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3320388466,1933263842&fm=26&gp=0.jpg",this.prop.image=e},methods:{addElem:function(e){var t=this.pageLayer[0].layer,n=new o.a.Sprite(e);t.add(n),t.batchDraw(),console.log("创建图形成功",n)}}},l=s,p=n("2877"),d=Object(p["a"])(l,a,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b2e6f.e43f61aa.js.map