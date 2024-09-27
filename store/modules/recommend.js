export default {
  namespaced: true,
  state() {
    return {
      todayInfo: [
        //今日宝藏信息
        {
          collectionId: 1,
          image: require("@/static/img/siyang.png"),
          name: "商 四羊青铜方尊",
          subscription: "1w+订阅",
          type: "限量",
          price: 15,
        },
        {
          collectionId: 2,
          image: require("@/static/img/vase.png"),
          name: "清康熙 孔雀蓝釉花瓶",
          subscription: "1k+订阅",
          type: "限量",
          price: 25,
        },
        {
          collectionId: 3,
          image: require("@/static/img/guanyin.png"),
          name: "国博·彩绘木雕观音菩萨坐像",
          subscription: "100+订阅",
          type: "限量",
          price: 35,
        },
      ],
      sellerInfo: [
        //商家信息
        { sellerId: 1, name: "听泉鉴宝", image: require("@/static/img/cat.png") },
        { sellerId: 2, name: "万乾堂", image: require("@/static/img/seller.png") },
        { sellerId: 3, name: "雅集斋", image: require("@/static/img/seller3.png") },
        { sellerId: 4, name: "瓷魅艺术", image: require("@/static/img/seller4.png") },
      ],
      treasureInfo: [
        //臻品推荐，[0]为左，[1]为右
        [
          {
            collectionId: 1,
            image: require("@/static/img/cc.png"),
            name: "中国长城",
            subscription: "1k+订阅",
            type: "限量",
            price: 30,
          },
          {
            collectionId: 2,
            image: require("@/static/img/USA.png"),
            name: "美国自由女神像",
            subscription: "1w+订阅",
            type: "限量",
            price: 25,
          },
          {
            collectionId: 3,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶",
            subscription: "100+订阅",
            type: "限量",
            price: 15,
          },
        ],
        [
          {
            collectionId: 1,
            image: require("@/static/img/tjl.png"),
            name: "印度泰姬陵",
            subscription: "1w+订阅",
            type: "限量",
            price: 25,
          },
          {
            collectionId: 2,
            image: require("@/static/img/cc.png"),
            name: "中国长城",
            subscription: "1k+订阅",
            type: "限量",
            price: 20,
          },
          {
            collectionId: 3,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 25,
          },
        ],
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
};
