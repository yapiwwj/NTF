import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import home from "./modules/home";
import create from "./modules/create";
import collections from "./modules/collections";
import recommend from "./modules/recommend.js";
import New from "./modules/new.js";
import hot from "./modules/hot.js";
import selection from "./modules/selection.js";
import LoginRegister from "./modules/login&register.js";
import Pay from "./modules/pay.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    home,
    create,
    collections,
    recommend,
    New,
    hot,
    selection,
    LoginRegister,
    Pay,
  },
});
