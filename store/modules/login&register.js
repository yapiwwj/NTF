//登录
export default {
  namespaced: true,
  state() {
    return {
      userId: 0,
      username: "1233",
      password: "323",
      email: "32323",
      phoneNumber: "2323",
      code: "3232",
      codeId: "3232",
      userHash: "2323",
    };
  },
  getters: {},
  mutations: {
    updateData(state, obj) {
      state.username = obj.username;
      state.password = obj.password;
      state.email = obj.email;
      state.phoneNumber = obj.phoneNumber;
      state.code = obj.code;
      state.codeId = obj.codeId;
      state.userId = obj.userId
      state.userHash = obj.userHash;
      console.log("数据存入到vuex");
    },
  },
  actions: {},
};
