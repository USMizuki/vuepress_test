(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{232:function(t,e,i){"use strict";var s=i(97);i.n(s).a},242:function(t,e,i){"use strict";i.r(e);var s=i(230),a=i(231),l=i.n(a),d={el:"#sliderRenderPagination",data:function(){return{someList:[],options:{currentPage:0,pagination:!1,loop:!0},ops:{vuescroll:{wheelScrollDuration:0,wheelDirectionReverse:!1,checkShifKey:!0},scrollPanel:{initialScrollY:!1,initialScrollX:!1,scrollingX:!0,scrollingY:!1,speed:300,easing:"easeInOutQuad",verticalNativeBarPos:"right",maxHeight:void 0,maxWidth:void 0},rail:{background:"#01a99a",opacity:0,size:"10px",specifyBorderRadius:!1,gutterOfEnds:null,gutterOfSide:"0",keepShow:!1,border:"none"},bar:{showDelay:500,onlyShowBarOnScroll:!0,keepShow:!0,background:"#c1c1c1",opacity:1,hoverStyle:!1,specifyBorderRadius:!1,minSize:!1,size:"6px",disable:!1}}}},components:{slider:s.slider,slideritem:s.slideritem,vuescroll:l.a},mounted:function(){var t=this,e=this;this.$watch((function(){return t.$refs.slider.data.currentPage}),(function(t){options.currentPage=t})),setTimeout((function(){e.someList=[{html:'<img class="card-img" @click=\'slideNext\' src="../profile.jpg">',html_text:"<div>asda1111sdda</div>",style:{}},{html:'<img class="card-img" src="http://www.yukinoo.site/upload/2022/05/src=http---pic1.win4000.com-wallpaper-2020-05-25-5ecb5e4b94709.jpg&refer=http---pic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto.webp">',html_text:"<div>asdasdd222a</div>",style:{}},{html:'<img class="card-img" src="http://www.yukinoo.site/upload/2022/04/src=http___i0.hdslb.com_bfs_article_36ebe0b499013368074c9e6e7825b9aa9a9fd239.jpg&refer=http___i0.hdslb-c76e22bd40b14504b28da7bfbd420670.webp">',html_text:"<div>asdasdd333a</div>",style:{}},{html:'<img class="card-img" src="http://www.yukinoo.site/upload/2022/04/src=http___i0.hdslb.com_bfs_article_36ebe0b499013368074c9e6e7825b9aa9a9fd239.jpg&refer=http___i0.hdslb-c76e22bd40b14504b28da7bfbd420670.webp">',html_text:"<div>asdasdd333a</div>",style:{}},{html:'<img class="card-img" src="http://www.yukinoo.site/upload/2022/04/src=http___i0.hdslb.com_bfs_article_36ebe0b499013368074c9e6e7825b9aa9a9fd239.jpg&refer=http___i0.hdslb-c76e22bd40b14504b28da7bfbd420670.webp">',html_text:"<div>asdasdd333a</div>",style:{}},{html:'<img class="card-img" src="http://www.yukinoo.site/upload/2022/04/src=http___i0.hdslb.com_bfs_article_36ebe0b499013368074c9e6e7825b9aa9a9fd239.jpg&refer=http___i0.hdslb-c76e22bd40b14504b28da7bfbd420670.webp">',html_text:"<div>asdasdd333a</div>",style:{}},{html:'<img class="card-img" src="http://www.yukinoo.site/upload/2022/04/src=http___i0.hdslb.com_bfs_article_36ebe0b499013368074c9e6e7825b9aa9a9fd239.jpg&refer=http___i0.hdslb-c76e22bd40b14504b28da7bfbd420670.webp">',html_text:"<div>asdasdd333a</div>",style:{}},{html:'<img class="card-img" src="http://www.yukinoo.site/upload/2022/04/src=http___i0.hdslb.com_bfs_article_36ebe0b499013368074c9e6e7825b9aa9a9fd239.jpg&refer=http___i0.hdslb-c76e22bd40b14504b28da7bfbd420670.webp">',html_text:"<div>asdasdd333a</div>",style:{}},{html:'<img class="card-img" src="http://www.yukinoo.site/upload/2022/04/src=http___i0.hdslb.com_bfs_article_36ebe0b499013368074c9e6e7825b9aa9a9fd239.jpg&refer=http___i0.hdslb-c76e22bd40b14504b28da7bfbd420670.webp">',html_text:"<div>asdasdd333a</div>",style:{}}]}),100)},methods:{turnTo:function(t){this.$refs.slider.$emit("slideTo",t)},slideNext:function(){this.$refs.slider.$emit("slideNext")},slidePre:function(){this.$refs.slider.$emit("slidePre")},autoplayStart:function(){this.$refs.slider.$emit("autoplayStart")},autoplayStop:function(){this.$refs.slider.$emit("autoplayStop")},appendslider:function(){this.someList.push({html:"slidernew",style:{background:"#333",color:"#fff"}})},unShiftSlider:function(){this.someList.unshift({html:"slidernew",style:{background:"#333",color:"#fff"}})},loadingShow:function(){this.$refs.slider.$emit("loadingShow")},loadingHide:function(){this.$refs.slider.$emit("loadingHide")},slide:function(t){this.options.currentPage=t.currentPage,console.log(t)},onTap:function(t){console.log(t)},onInit:function(t){console.log(t)}}},o=(i(232),i(1)),r=Object(o.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{width:"80%",margin:"20px auto",height:"auto"}},[i("slider",{ref:"slider",attrs:{options:t.options},on:{slide:t.slide,tap:t.onTap,init:t.onInit}},[t._l(t.someList,(function(e,s){return i("slideritem",{key:s,style:e.style,domProps:{innerHTML:t._s(e.html)}})})),t._v(" "),i("div",{attrs:{slot:"loading"},slot:"loading"},[i("div",{staticClass:"loadingDot"})])],2)],1),t._v(" "),i("div",{staticClass:"test",domProps:{innerHTML:t._s(t.someList[t.options.currentPage].html_text)}},[t._v("asdadas")]),t._v(" "),i("div",{staticClass:"your-container"},[i("vuescroll",{staticStyle:{width:"100%",margin:"20px auto",height:"auto","white-space":"nowrap"},attrs:{ops:t.ops}},[i("div",{staticStyle:{position:"relative",margin:"0 auto",display:"table"}},t._l(t.someList,(function(e,s){return i("div",{key:s,class:s===t.options.currentPage?"small-img-active":"small-img",attrs:{index:s},domProps:{innerHTML:t._s(e.html)},on:{click:function(e){return t.turnTo(s)}}})})),0)])],1)])}),[],!1,null,null,null);e.default=r.exports},97:function(t,e,i){}}]);