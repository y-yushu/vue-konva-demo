(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6de946e"],{"159b":function(t,e,i){var n=i("da84"),r=i("fdbc"),a=i("17c2"),o=i("9112");for(var s in r){var c=n[s],f=c&&c.prototype;if(f&&f.forEach!==a)try{o(f,"forEach",a)}catch(u){f.forEach=a}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,r=i("a640"),a=i("ae40"),o=r("forEach"),s=a("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,i){"use strict";var n=i("23e7"),r=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4de4":function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").filter,a=i("1dde"),o=i("ae40"),s=a("filter"),c=o("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},a434:function(t,e,i){"use strict";var n=i("23e7"),r=i("23cb"),a=i("a691"),o=i("50c4"),s=i("7b0b"),c=i("65f0"),f=i("8418"),u=i("1dde"),d=i("ae40"),l=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,m=Math.min,g=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l||!h},{splice:function(t,e){var i,n,u,d,l,h,b=s(this),w=o(b.length),y=r(t,w),x=arguments.length;if(0===x?i=n=0:1===x?(i=0,n=w-y):(i=x-2,n=m(v(a(e),0),w-y)),w+i-n>g)throw TypeError(p);for(u=c(b,n),d=0;d<n;d++)l=y+d,l in b&&f(u,d,b[l]);if(u.length=n,i<n){for(d=y;d<w-n;d++)l=d+n,h=d+i,l in b?b[h]=b[l]:delete b[h];for(d=w;d>w-n+i;d--)delete b[d-1]}else if(i>n)for(d=w-n;d>y;d--)l=d+n-1,h=d+i-1,l in b?b[h]=b[l]:delete b[h];for(d=0;d<i;d++)b[d+y]=arguments[d+2];return b.length=w-n+i,u}})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},c975:function(t,e,i){"use strict";var n=i("23e7"),r=i("4d64").indexOf,a=i("a640"),o=i("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,f=a("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!f||!u},{indexOf:function(t){return c?s.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},dc19:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[t._m(0),i("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),i("el-row",[i("el-col",[i("el-button",{attrs:{type:"primary"},on:{click:t.selectsAll}},[t._v("选中所有形状")])],1)],1)],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("基础展示（Shift增加一个;Ctrl减少一个）")])])}],a=(i("99af"),i("4de4"),i("4160"),i("c975"),i("fb6a"),i("a434"),i("159b"),i("1b62")),o=i("362d"),s=i.n(o),c={name:"SelectAndTransform",mixins:[a["b"]],data:function(){return{starStyle:{fill:"blue",numPoints:3,innerRadius:20,outerRadius:25,draggable:!0,shadowOffsetX:5,shadowOffsetY:5},starPosition:{x1:"",x2:"",y1:"",y2:""},isFirst:!0}},created:function(){var t=this;setTimeout((function(){t.addElem()}),20)},methods:{addElem:function(){for(var t=this.pageStage,e=this.pageLayer[0].layer,i=[],n=0;n<10;n++){var r=new s.a.Star(Object.assign({},this.starStyle,{x:t.width()*Math.random(),y:t.height()*Math.random(),name:"star_".concat(n)}));i.push(r),e.add(r)}var a=new s.a.Transformer({name:"tr"});e.add(a),this.selectsAll(t),e.draw();var o=new s.a.Rect({fill:"rgba(0,0,255,0.5)",visible:!1});e.add(o),this.mousedownTouchstart(t,o,e),this.mousemoveTouchmove(t,o,e),this.mouseupTouchend(t,e,o,a),this.clickTap(t,e,o,a)},selectsAll:function(t){var e=this.pageLayer[0].layer,i=[],n="";e.children.forEach((function(t){-1!==t.getName().indexOf("star_")&&i.push(t),"tr"===t.getName()&&(n=t)})),n.nodes(i),e.batchDraw()},mousedownTouchstart:function(t,e,i){var n=this;t.on("mousedown touchstart",(function(r){if(r.target===t){var a=t.getPointerPosition().x,o=t.getPointerPosition().y,s=t.getPointerPosition().x,c=t.getPointerPosition().y;n.starPosition={x1:a,x2:s,y1:o,y2:c},e.visible(!0),e.width(0),e.height(0),i.draw()}}))},mousemoveTouchmove:function(t,e,i){var n=this;t.on("mousemove touchmove",(function(){if(e.visible()){var r=n.starPosition,a=r.x1,o=r.y1,s=t.getPointerPosition().x,c=t.getPointerPosition().y;e.setAttrs({x:Math.min(a,s),y:Math.min(o,c),width:Math.abs(s-a),height:Math.abs(c-o)}),i.batchDraw()}}))},mouseupTouchend:function(t,e,i,n){t.on("mouseup touchend",(function(){if(i.visible()){setTimeout((function(){i.visible(!1),e.batchDraw()}));var t=[];e.children.forEach((function(e){-1!==e.getName().indexOf("star_")&&t.push(e)}));var r=i.getClientRect(),a=t.filter((function(t){return s.a.Util.haveIntersection(r,t.getClientRect())}));n.nodes(a),e.batchDraw()}}))},clickTap:function(t,e,i,n){t.on("click tap",(function(r){if(!i.visible()){if(r.target===t)return n.nodes([]),void e.draw();if(-1!==r.target.getName().indexOf("star_")){var a=r.evt.shiftKey||r.evt.ctrlKey||r.evt.metaKey,o=n.nodes().indexOf(r.target)>=0;if(a||o){if(a&&o){var s=n.nodes().slice();s.splice(s.indexOf(r.target),1),n.nodes(s)}else if(a&&!o){var c=n.nodes().concat([r.target]);n.nodes(c)}}else n.nodes([r.target]);e.draw()}}}))}}},f=c,u=i("2877"),d=Object(u["a"])(f,n,r,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-f6de946e.a5ac72da.js.map