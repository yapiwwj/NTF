(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-swiper/u-swiper"],{"01d6":function(e,t,i){"use strict";i.r(t);var n=i("ecf0"),u=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=u.a},1572:function(e,t,i){"use strict";i.r(t);var n=i("7e19"),u=i("01d6");for(var o in u)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return u[e]}))}(o);i("9061");var r=i("f0c5"),a=Object(r["a"])(u["default"],n["b"],n["c"],!1,null,"ed671f4a",null,!1,n["a"],void 0);t["default"]=a.exports},"7e19":function(e,t,i){"use strict";i.d(t,"b",(function(){return u})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uLoadingIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(i.bind(null,"fdce"))},uSwiperIndicator:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-swiper-indicator/u-swiper-indicator")]).then(i.bind(null,"3de6"))}},u=function(){var e=this,t=e.$createElement,i=(e._self._c,e.$u.addUnit(e.height)),n=e.$u.addUnit(e.radius),u=e.loading?null:e.$u.addUnit(e.height),o=e.loading?null:e.$u.addUnit(e.previousMargin),r=e.loading?null:e.$u.addUnit(e.nextMargin),a=e.loading?null:e.__map(e.list,(function(t,i){var n=e.__get_orig(t),u=e.__get_style([e.itemStyle(i)]),o=e.getItemType(t),r="image"===o?e.$u.addUnit(e.height):null,a="image"===o?e.$u.addUnit(e.radius):null,d="image"===o?e.getSource(t):null,c=e.getItemType(t),l="video"===c?e.$u.addUnit(e.height):null,s="video"===c?e.getSource(t):null,g="video"===c?e.getPoster(t):null,f="video"===c?e.showTitle&&e.$u.test.object(t)&&t.title:null,m=e.showTitle&&e.$u.test.object(t)&&t.title&&e.$u.test.image(e.getSource(t));return{$orig:n,s0:u,m0:o,g5:r,g6:a,m1:d,m2:c,g7:l,m3:s,m4:g,g8:f,g9:m}})),d=e.__get_style([e.$u.addStyle(e.indicatorStyle)]),c=e.loading||!e.indicator||e.showTitle?null:e.list.length;e.$mp.data=Object.assign({},{$root:{g0:i,g1:n,g2:u,g3:o,g4:r,l0:a,s1:d,g10:c}})},o=[]},9061:function(e,t,i){"use strict";var n=i("e7d2"),u=i.n(n);u.a},e7d2:function(e,t,i){},ecf0:function(e,t,i){"use strict";(function(e){var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(i("7037")),o=n(i("de2b")),r={name:"u-swiper",mixins:[e.$u.mpMixin,e.$u.mixin,o.default],data:function(){return{currentIndex:0}},watch:{current:function(e,t){e!==t&&(this.currentIndex=e)}},computed:{itemStyle:function(){var t=this;return function(i){var n={};return t.nextMargin&&t.previousMargin&&(n.borderRadius=e.$u.addUnit(t.radius),i!==t.currentIndex&&(n.transform="scale(0.92)")),n}}},methods:{getItemType:function(t){return"string"===typeof t?e.$u.test.video(this.getSource(t))?"video":"image":"object"===(0,u.default)(t)&&this.keyName?t.type?"image"===t.type?"image":"video"===t.type?"video":"image":e.$u.test.video(this.getSource(t))?"video":"image":void 0},getSource:function(t){return"string"===typeof t?t:"object"===(0,u.default)(t)&&this.keyName?t[this.keyName]:(e.$u.error("请按格式传递列表参数"),"")},change:function(e){var t=e.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=t,this.$emit("change",e.detail)},pauseVideo:function(t){var i=this.getSource(this.list[t]);if(e.$u.test.video(i)){var n=e.createVideoContext("video-".concat(t),this);n.pause()}},getPoster:function(e){return"object"===(0,u.default)(e)&&e.poster?e.poster:""},clickHandler:function(e){this.$emit("click",e)}}};t.default=r}).call(this,i("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-swiper/u-swiper-create-component',
    {
        'uni_modules/uview-ui/components/u-swiper/u-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1572"))
        })
    },
    [['uni_modules/uview-ui/components/u-swiper/u-swiper-create-component']]
]);
