(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-data-select/components/uni-data-select/uni-data-select"],{"4cb7":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"c263"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.showSelector?t.mixinDatacomResData.length:null),a=t.showSelector&&0!==n?t.__map(t.mixinDatacomResData,(function(e,n){var a=t.__get_orig(e),i=t.formatItemName(e);return{$orig:a,m0:i}})):null;t.$mp.data=Object.assign({},{$root:{g0:n,l0:a}})},c=[]},"5a7c":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-data-select",mixins:[t.mixinDatacom||{}],props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[],cacheKey:"uni-data-select-lastSelectedValue"}},created:function(){var t=this;this.debounceGet=this.debounce((function(){t.query()}),300),this.collection&&!this.localdata.length&&this.debounceGet()},computed:{typePlaceholder:function(){var t=this.placeholder,e={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return e?t+e:t},valueCom:function(){return this.value},textShow:function(){var t=this.current;return t.length>10?t.slice(0,25)+"...":t}},watch:{localdata:{immediate:!0,handler:function(t,e){Array.isArray(t)&&e!==t&&(this.mixinDatacomResData=t)}},valueCom:function(t,e){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(t){t.length&&this.initDefVal()}}},methods:{debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=null;return function(){for(var a=this,i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){t.apply(a,c)}),e)}},query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.debounceGet()},initDefVal:function(){var t="";if(!this.valueCom&&0!==this.valueCom||this.isDisabled(this.valueCom)){var e;if(this.collection&&(e=this.getCache()),e||0===e)t=e;else{var n="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(n=this.mixinDatacomResData[this.defItem-1].value),t=n}(t||0===t)&&this.emit(t)}else t=this.valueCom;var a=this.mixinDatacomResData.find((function(e){return e.value===t}));this.current=a?this.formatItemName(a):""},isDisabled:function(t){var e=!1;return this.mixinDatacomResData.forEach((function(n){n.value===t&&(e=n.disable)})),e},clearVal:function(){this.emit(""),this.collection&&this.removeCache()},change:function(t){t.disable||(this.showSelector=!1,this.current=this.formatItemName(t),this.emit(t.value))},emit:function(t){this.$emit("input",t),this.$emit("update:modelValue",t),this.$emit("change",t),this.collection&&this.setCache(t)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(t){var e=t.text,n=t.value,a=t.channel_code;if(a=a?"(".concat(a,")"):"",this.format){var i="";for(var c in i=this.format,t)i=i.replace(new RegExp("{".concat(c,"}"),"g"),t[c]);return i}return this.collection.indexOf("app-list")>0?"".concat(e,"(").concat(n,")"):e||"未命名".concat(a)},getLoadData:function(){return this.mixinDatacomResData},getCurrentCacheKey:function(){return this.collection},getCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=n.getStorageSync(this.cacheKey)||{};return e[t]},setCache:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),a=n.getStorageSync(this.cacheKey)||{};a[e]=t,n.setStorageSync(this.cacheKey,a)},removeCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=n.getStorageSync(this.cacheKey)||{};delete e[t],n.setStorageSync(this.cacheKey,e)}}};e.default=a}).call(this,n("a9ff")["default"],n("543d")["default"])},78354:function(t,e,n){"use strict";var a=n("7ed1"),i=n.n(a);i.a},"7ed1":function(t,e,n){},aacb:function(t,e,n){"use strict";n.r(e);var a=n("4cb7"),i=n("ebf0");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("78354");var o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=r.exports},ebf0:function(t,e,n){"use strict";n.r(e);var a=n("5a7c"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-data-select/components/uni-data-select/uni-data-select-create-component',
    {
        'uni_modules/uni-data-select/components/uni-data-select/uni-data-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("aacb"))
        })
    },
    [['uni_modules/uni-data-select/components/uni-data-select/uni-data-select-create-component']]
]);
