(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0baead"],{"38f8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._m(0),e("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},s=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("监听鼠标移入(图片)")])])}],n=a("1b62"),o=a("362d"),r=a.n(o),d={name:"ImageEvents",mixins:[n["b"]],data(){return{textProp:{x:10,y:10,fontFamily:"Calibri",fontSize:24,text:"",fill:"black"},propStyle1:{x:120,y:120,sides:3,radius:80,fill:"#00D2FF",stroke:"black",strokeWidth:4},propStyle2:{x:300,y:100,radius:60,fill:"red",stroke:"black",strokeWidth:4},image1:this.getImage("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3320388466,1933263842&fm=26&gp=0.jpg"),image2:this.getImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604148522559&di=64249dac7feba736a2221b0b097e3e58&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190318%2F15%2F1552892712-qcNoTJbUlV.jpg")}},created(){setTimeout(()=>{this.addElem()},20)},methods:{addElem(){const t=this.pageLayer[0].layer,e=new r.a.Text(this.textProp),a=new r.a.Image({image:this.image1,x:120,y:50,width:100,height:100}),i=new r.a.Image({image:this.image2,x:240,y:50,width:100,height:100});a.on("mouseover",(function(){e.text("第一张图片"),t.draw()})),a.on("mouseout",(function(){e.text(""),t.draw()})),i.on("mouseover",(function(){e.text("第二张图片"),t.draw()})),i.on("mouseout",(function(){e.text(""),t.draw()})),t.add(e),t.add(a),t.add(i),t.batchDraw()}}},c=d,m=a("2877"),u=Object(m["a"])(c,i,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0baead.7218eaf4.js.map