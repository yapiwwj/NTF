<template>
  <view class="forget-page">
    <div class="tishi">邮箱验证</div>
    <view class="u-demo-block__content">
      <uni-easyinput
          class="custom-field"
          v-model="email"
          type="text"
          placeholder="邮箱"
          placeholder-style="font-size:28rpx"
        ></uni-easyinput>
    </view>
    <view
			class="u-demo-block__content"
			style="margin-top: 30rpx;"
		>
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input placeholder="验证码" style="
          margin-bottom: 10rpx;
          font-size: 28rpx;
          background-color: #ffff;
        ">
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<u--input placeholder="验证码">
			<!-- #endif -->
				<template slot="suffix">
					<u-code
						ref="uCode"
						@change="codeChange"
						seconds="60"
						changeText="X秒重新"
       style="font-size: 28rpx;"
					></u-code>
					<u-button
						@tap="getCode"
						:text="tips"
            type="primary" :plain="true" :hairline="true"
						size="mini"
            
					></u-button>
				</template>
			<!-- #ifndef APP-NVUE -->
			</u-input>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			</u--input>
			<!-- #endif -->
		</view>
    <u-button
      type="primary"
      text="下一步"
      style="width: 85%; margin: 20rpx 0"
      @click="toNext"
    ></u-button>
    <footer>
      <p class="left" @click="toSecurity">使用密保验证</p>
      <p class="right">
        <span class="help">需要帮助？</span>
        <span class="kf">联系客服</span>
      </p>
    </footer>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tips: "",
      value: "",
      email:''
    };
  },
  watch: {
    value(newValue, oldValue) {
      // console.log('v-model', newValue);
    },
  },
  methods: {
    show1() {
      console.log("111");
    },
    toSecurity() {
      uni.navigateTo({
        url: "/pages/RegisterAndLogin/securityQuestion",
      });
    },
    toNext() {
      uni.navigateTo({
        url: "/pages/RegisterAndLogin/resetPassword",
      });
    },
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        // 模拟向后端请求验证码
        uni.showLoading({
          title: "正在获取验证码",
        });
        setTimeout(() => {
          uni.hideLoading();
          // 这里此提示会被this.start()方法中的提示覆盖
          uni.$u.toast("验证码已发送");
          // 通知验证码组件内部开始倒计时
          this.$refs.uCode.start();
        }, 1000);
      } else {
        uni.$u.toast("倒计时结束后再发送");
      }
    },
    change(e) {
      console.log("change", e);
    },
  },
};
</script>
<style lang="scss" scoped>
page {
  background-color: #fcfcfe;
}

.forget-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .tishi {
    display: flex;
    font-size: 28rpx;
    font-weight: 250;
    width: 90%;
    color: #999999;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 20rpx;
  }

  .u-demo-block__content {
    width: 85%;
  }

  footer {
    display: flex;
    justify-content: space-between;
    width: 85%;

    p {
      font-size: 28rpx;
    }

    .left {
      color: #0083ff;
    }

    .right {
      .help {
        color: #999999;
      }

      .kf {
        color: #0083ff;
      }
    }
  }
}
</style>
