export default {
  namespaced: true,
  state() {
    return {
      cardInfo: [
        {
          createId: 1,
          img: require("@/static/img/cc.png"),
          name: "日暮长城",
          address: "中国·北京",
          type: "图文",
          carrier: "明信片",
          useNum: "6.2w",
        },
        {
          createId: 2,
          img: require("@/static/img/tjl.png"),
          name: "泰姬陵",
          address: "印度·阿格拉",
          type: "图文",
          carrier: "明信片",
          useNum: "3.2w",
        },
        {
          createId: 3,
          img: require("@/static/img/USA.png"),
          name: "自由女神像",
          address: "美国·纽约",
          type: "图文",
          carrier: "明信片",
          useNum: "3.2w",
        },
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
};
