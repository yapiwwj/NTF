export default {
  namespaced: true,
  state() {
    return {
      goodInfo: [
        //火热潮款信息
        {
          collectionId: 1,
          image: require("@/static/img/bosi.png"),
          name: "波斯玻璃瓶",
          subscription: "1w+订阅",
          type: "限量",
          price: 10,
        },
        {
          collectionId: 2,
          image: require("@/static/img/guanyin.png"),
          name: "国博·彩绘木雕观音菩萨坐像",
          subscription: "1k+订阅",
          type: "限量",
          price: 35,
        },
        {
          collectionId: 3,
          image: require("@/static/img/tangsancai.png"),
          name: "唐三彩",
          subscription: "100+订阅",
          type: "限量",
          price: 25,
        },
      ],

      selectionInfo: [
        //综合热销，[0]为左，[1]为右
        [
          {
            collectionId: 1,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶1",
            subscription: "1w+订阅",
            type: "限量",
            price: 10,
          },
          {
            collectionId: 2,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶2 清康熙 孔雀蓝釉花瓶2(加长)",
            subscription: "1k+订阅",
            type: "限量",
            price: 10,
          },
          {
            collectionId: 3,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 15,
          },
          {
            collectionId: 4,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 25,
          },
          {
            collectionId: 5,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 10,
          },
        ],
        [
          {
            collectionId: 1,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶1 清康熙 孔雀蓝釉花瓶1(加长)",
            subscription: "1w+订阅",
            type: "限量",
            price: 10,
          },
          {
            collectionId: 2,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶2",
            subscription: "1k+订阅",
            type: "限量",
            price: 15,
          },
          {
            collectionId: 3,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 15,
          },
          {
            collectionId: 4,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 10,
          },
          {
            collectionId: 5,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 20,
          },
        ],
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
};
