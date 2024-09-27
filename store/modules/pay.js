export default {
  namespaced: true,
  state() {
    return {
      collectionId: "120",
    };
  },
  getters: {},
  mutations: {
    postCollectionId(state, n) {
      state.collectionId = n;
    },
  },
  actions: {},
};
