export default {
  namespaced: true,
  state() {
    return {
      fashionInfo: [
        //火热潮款信息
        {
          collectionId: 1,
          image: require("@/static/img/rou.png"),
          name: "东坡肉形石",
          subscription: "1w+订阅",
          type: "限量",
          price: 20,
        },
        {
          collectionId: 2,
          image: require("@/static/img/siyang.png"),
          name: "商 四羊青铜方尊",
          subscription: "1k+订阅",
          type: "限量",
          price: 15,
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

      hotInfo: [
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
            price: 25,
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
            price: 10,
          },
          {
            collectionId: 5,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶3",
            subscription: "100+订阅",
            type: "限量",
            price: 15,
          },
        ],
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
};
