import App from "./App";

// #ifndef VUE3
import Vue from "vue";
import uView from "@/uni_modules/uview-ui";
import store from "./store/index.js";
import api from "./api/index.js";
import "./uni.promisify.adaptor";

Vue.use(uView);

Vue.prototype.$store = store;
Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.config.devtools = true;
App.mpType = "app";
const app = new Vue({
  store,
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
