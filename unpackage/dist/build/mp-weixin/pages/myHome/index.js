(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myHome/index"],{"0d55":function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("0c32");o(t("66fd"));var r=o(t("c18c"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"0fe2":function(e,n,t){"use strict";t.r(n);var o=t("cfe8"),r=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=r.a},"41f4":function(e,n,t){"use strict";var o=t("7e97"),r=t.n(o);r.a},"458e":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,"7120"))},"u-Input":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--input/u--input")]).then(t.bind(null,"d21d"))},uSwiper:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(t.bind(null,"1572"))},uTabs:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(t.bind(null,"12a5"))}},r=function(){var e=this.$createElement;this._self._c},u=[]},"7e97":function(e,n,t){},c18c:function(e,n,t){"use strict";t.r(n);var o=t("458e"),r=t("0fe2");for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("41f4");var i=t("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"3bc58010",null,!1,o["a"],void 0);n["default"]=c.exports},cfe8:function(e,n,t){"use strict";var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("2eee")),u=o(t("c973")),i=o(t("9523")),c=t("26cb");function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var s={name:"HomeIndex",data:function(){return{value:"",current:0,swipeimage:["https://cdn.uviewui.com/uview/swiper/swiper1.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png"],menuItems:[{name:"推荐",path:"/pages/RegisterAndLogin/registerVerificatio"},{name:"最新",path:"/pages/RegisterAndLogin/registerVerificatio"},{name:"最火",path:"/home/hot"},{name:"甄选",path:"/home/selection"}],activeIndex:0,transitionDuration:"0s"}},components:{recommend:function(){t.e("components/home/recommend").then(function(){return resolve(t("c927"))}.bind(null,t)).catch(t.oe)},New:function(){t.e("components/home/new").then(function(){return resolve(t("9e8c"))}.bind(null,t)).catch(t.oe)},hot:function(){t.e("components/home/hot").then(function(){return resolve(t("53a9"))}.bind(null,t)).catch(t.oe)},selection:function(){t.e("components/home/selection").then(function(){return resolve(t("ce2f"))}.bind(null,t)).catch(t.oe)}},computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},(0,c.mapState)("home",["swipeimage"])),methods:{tabChange:function(e){this.current=e.index}},created:function(){return(0,u.default)(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}};n.default=s}},[["0d55","common/runtime","common/vendor"]]]);