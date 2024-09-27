//藏品
export default {
  namespaced: true,
  state() {
    return {
      collectionsInfo: {
        all: [
          {
            id: 1,
            image: require("@/static/img/cc.png"),
            // image: require("@/static/img/清康熙孔雀蓝釉花瓶.png"),
            name: "长城",
            code: "CH38943JD0R7",
            num: 1, //份数
            source: "我的",
            time: "2024/03/05",
            type: "图文",
            carrier: "明信片",
            price: 30,
            status: "已付款",
          },
          {
            id: 2,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶",
            code: "CH38943JDR8787",
            num: 1, //份数
            source: "xx文化",
            paytime: "2024/03/15",
            orderNumber: "2024020419018079028",
            price: 20,
            status: "已付款",
          },
        ],
        noPay: [],
        hasPay: [
          {
            id: 1,
            image: require("@/static/img/cc.png"),
            // image: require("@/static/img/清康熙孔雀蓝釉花瓶.png"),
            name: "长城",
            code: "CH38943JD0R7",
            num: 1, //份数
            source: "我的",
            time: "2024/03/05",
            type: "图文",
            carrier: "明信片",
            price: 30,
            status: "已付款",
            model: "./static/img/modules/cc.glb",
          },
          {
            id: 2,
            image: require("@/static/img/vase.png"),
            name: "清康熙 孔雀蓝釉花瓶",
            code: "CH38943JDR8787",
            num: 1, //份数
            source: "xx文化",
            paytime: "2024/03/15",
            orderNumber: "2024020419018079028",
            price: 20,
            status: "已付款",
            model: "./static/img/modules/vase.glb",
          },
        ],
        cancel: [],
      },
    };
  },
  getters: {},
  mutations: {},
  actions: {},
};
