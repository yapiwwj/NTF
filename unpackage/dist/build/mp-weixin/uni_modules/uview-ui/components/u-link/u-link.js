(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-link/u-link"],{"004c":function(t,n,i){},"440f":function(t,n,i){"use strict";i.r(n);var e=i("c29d"),u=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=u.a},"9e69":function(t,n,i){"use strict";var e=i("004c"),u=i.n(e);u.a},a922:function(t,n,i){"use strict";i.r(n);var e=i("bdaa"),u=i("440f");for(var a in u)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return u[t]}))}(a);i("9e69");var o=i("f0c5"),c=Object(o["a"])(u["default"],e["b"],e["c"],!1,null,"0f0cb6d2",null,!1,e["a"],void 0);n["default"]=c.exports},bdaa:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){}));var e=function(){var t=this.$createElement,n=(this._self._c,this.__get_style([this.linkStyle,this.$u.addStyle(this.customStyle)]));this.$mp.data=Object.assign({},{$root:{s0:n}})},u=[]},c29d:function(t,n,i){"use strict";(function(t){var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(i("7e5d")),a={name:"u-link",mixins:[t.$u.mpMixin,t.$u.mixin,u.default],computed:{linkStyle:function(){var n={color:this.color,fontSize:t.$u.addUnit(this.fontSize),lineHeight:t.$u.addUnit(t.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return n}},methods:{openLink:function(){var n=this;t.setClipboardData({data:this.href,success:function(){t.hideToast(),n.$nextTick((function(){t.$u.toast(n.mpTips)}))}}),this.$emit("click")}}};n.default=a}).call(this,i("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-link/u-link-create-component',
    {
        'uni_modules/uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a922"))
        })
    },
    [['uni_modules/uview-ui/components/u-link/u-link-create-component']]
]);
