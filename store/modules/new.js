export default {
  namespaced: true,
  state() {
    return {
      lastInfo: [
        //今日宝藏信息
        {
          collectionId: 1,
          image: require("@/static/img/tiantan.png"),
          name: "天坛",
          subscription: "1w+订阅",
          type: "限量",
          price: 10,
        },
        {
          collectionId: 2,
          image: require("@/static/img/tangsancai.png"),
          name: "唐三彩",
          subscription: "1k+订阅",
          type: "限量",
          price: 25,
        },
        {
          collectionId: 3,
          image: require("@/static/img/bosi.png"),
          name: "波斯玻璃瓶",
          subscription: "100+订阅",
          type: "限量",
          price: 10,
        },
      ],

      newInfo: [
        //臻品推荐，[0]为左，[1]为右
        [
          {
            collectionId: 1,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶1",
            subscription: "1w+订阅",
            type: "限量",
            price: 20,
          },
          {
            collectionId: 2,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶2 清康熙 孔雀蓝釉花瓶2(加长)",
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
            price: 10,
          },
          {
            collectionId: 4,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 15,
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
            price: 20,
          },
          {
            collectionId: 2,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶2",
            subscription: "1k+订阅",
            type: "限量",
            price: 25,
          },
          {
            collectionId: 3,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 30,
          },
          {
            collectionId: 4,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 15,
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
