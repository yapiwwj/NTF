export default {
	namespaced: true,
	state() {
		return {
			swipeImg: [
				'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				'https://cdn.uviewui.com/uview/swiper/swiper2.png',
				'https://cdn.uviewui.com/uview/swiper/swiper1.png',
			],
			test: 1,
		};
	},
	getters: {},
	mutations: {
		changeTest(state, n) {
			state.test = n;
		},
	},
	actions: {},
};