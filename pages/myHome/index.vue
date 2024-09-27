<template>
	<div class="homeBox">
		<header>
			<div class="log">
				<image src="../../static/img/logo.png" alt="" />
				<span>数藏</span>
			</div>
			<div class="message">
				<!-- <van-icon name="chat-o" dot size="20px" /> -->
				<u-icon name="bell" color="#000000" size="28"></u-icon>
			</div>
		</header>
		<div class="input">
			<image src="../../static/img/find.png" alt="" class="found" />
			<template>
				<u--input
					v-model="value"
					clearable
					prefixIcon="search"
					prefixIconStyle="font-size: 44rpx;color: #909399"
					placeholder="搜索藏品"
					style="background-color: #f6f6f6; width: 68%; border-radius: 64rpx; margin-left: 120rpx; color: #1659fe"
				/>
			</template>
			<image src="../../static/img/white.png" alt="" class="icon" />
		</div>
		<div class="swipeBox" style="margin: 20rpx 40rpx 10rpx 40rpx">
			<u-swiper class="my-swipe" :list="swipeimage" previousMargin="30" nextMargin="30" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>
		</div>
		<div class="cryptoBox">
			<div class="left">
				<image src="../../static/img/crypto.png" alt="" />
				<p class="p1">资金加密</p>
				<p class="p2">邀请好友获得丰富奖励</p>
			</div>
			<div class="right">
				<div>
					<u-icon name="arrow-right" color="#D8D8D8" size="20"></u-icon>
				</div>
			</div>
		</div>
		<footer class="infoBox">
			<!-- <div v-for="(item, index) in menuItems" :key="index" @click="changeTab(index)">
				<span>{{ item.name }}</span>
				<div class="underline" v-if="activeIndex === index"></div>
			</div> -->
			<template>
				<u-tabs
					:list="menuItems"
					:current="current"
					:activeStyle="{
						color: '#3c9cff',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}"
					@change="tabChange"
				></u-tabs>
			</template>
		</footer>
		<view v-show="current === 0"><recommend></recommend></view>
		<view v-show="current === 1"><New></New></view>
		<view v-show="current === 2"><hot></hot></view>
		<view v-show="current === 3"><selection></selection></view>
	</div>
</template>

<script>
import recommend from '../../components/home/recommend';
import New from '../../components/home/new';
import hot from '../../components/home/hot';
import selection from '../../components/home/selection';
// import { getListInfo } from "@/api/home";
import { mapState } from 'vuex';
export default {
	name: 'HomeIndex',
	data() {
		return {
			value: '',
			current: 0,
			swipeimage: [
				'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				'https://cdn.uviewui.com/uview/swiper/swiper2.png',
				'https://cdn.uviewui.com/uview/swiper/swiper3.png'
			],
			menuItems: [
				{
					name: '推荐',
					path: '/pages/RegisterAndLogin/registerVerificatio'
				},
				{
					name: '最新',
					path: '/pages/RegisterAndLogin/registerVerificatio'
				},
				{
					name: '最火',
					path: '/home/hot'
				},
				{
					name: '甄选',
					path: '/home/selection'
				}
			],
			activeIndex: 0, //激活index
			transitionDuration: '0s' //初始下无animation
		};
	},
	components: {
		recommend,
		New,
		hot,
		selection
	},
	computed: {
		...mapState('home', ['swipeimage'])
	},
	methods: {
		// changeTab(index) {
		// 	this.transitionDuration = "0.3s"; // 添加动画效果
		// 	this.activeIndex = index;
		// },
		tabChange(n) {
			this.current = n.index;
		}
	},
	async created() {
		// const res = await getListInfo();
		// console.log(res);
	}
};
</script>
<style lang="scss" scoped>
page {
	background-color: #fcfcfe;
}

header {
	display: flex;
	justify-content: space-between;

	.log {
		display: flex;
		justify-content: flex-start;
		align-items: center;

		image {
			width: 70rpx;
			height: 70rpx;
			padding: 20rpx;
		}

		span {
			font-size: 40rpx;
			font-weight: 600;
		}
	}

	.message {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 10rpx;
	}
}

.input {
	position: relative;

	.found {
		z-index: 2;
		position: absolute;
		top: 26rpx;
		left: 20rpx;
		width: 80rpx;
		height: 40rpx;
	}

	.icon {
		z-index: 2;
		position: absolute;
		top: 10rpx;
		right: 4rpx;
		width: 60rpx;
		height: 60rpx;
	}
}

.swipeBox {
	image {
		width: 670rpx;
		height: 300rpx;
	}
}

.cryptoBox {
	display: flex;
	justify-content: space-between;
	width: 90%;
	height: 120rpx;
	border: 4rpx solid #f4f4f6;
	border-radius: 16rpx;
	background-color: #ffff;
	box-shadow: 20rpx 10rpx 10rpx #cfcfcf;
	margin: auto;

	.left {
		width: 400rpx;
		position: relative;

		image {
			position: absolute;
			top: 15%;
			left: 15%;
			width: 90rpx;
			height: 90rpx;
		}

		.p1 {
			position: absolute;
			top: 15%;
			left: 45%;
			font-size: 32rpx;
			color: #333333;
			margin: 0;
		}

		.p2 {
			position: absolute;
			top: 60%;
			left: 45%;
			width: 80%;
			color: #999999;
			font-size: 24rpx;
		}
	}

	.right {
		position: relative;

		div {
			position: absolute;
			top: 30%;
			right: 20rpx;
		}
	}
}

.infoBox {
	width: 70%;
	margin: 20rpx auto;
	// background-color: red;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;

	div {
		position: relative;

		span {
			display: inline-block;
			color: #333333;
			font-size: 30rpx;
			margin: 10rpx 0;
		}

		.underline {
			position: absolute;
			left: 15%;
			bottom: -10rpx;
			width: calc(100% / 1.5);
			height: 4rpx;
			background-color: #004aff;
			transition: transform 0.3s ease;
			/* 下划线移动动画 */
		}
	}
}

.router-link-active {
	text-decoration: none; //去除默认样式
	color: #007bff; //高亮的颜色
}

a {
	text-decoration: none;
	color: grey;
}
</style>
