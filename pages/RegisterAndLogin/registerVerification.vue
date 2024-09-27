<template>
  <div class="RegisterYanzheng-page">
    <view>
      <u-toast ref="uToast" />
    </view>
    <div class="tishi">验证码已经发送到{{ maskedEmail }}，请输入验证码</div>

    <view>
      <u-code-input
        :value="value"
        :maxlength="4"
        hairline
        bold="bold"
        borderColor="#3c9cff"
        size="50"
      ></u-code-input>
    </view>
    <!--  <van-number-keyboard
      v-model="value"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    /> -->

    <!-- 倒计时 -->
    <template class="time">
      <u-count-down
        class="time_custom"
        ref="countDownRef"
        :time="60 * 1000"
        format="mm:ss"
        @finish="countDownFinished"
        style="margin-top: 40rpx"
      ></u-count-down>
    </template>

    <div class="auxiliary">
      <span
        class="forget"
        @click="resendCode"
        :disabled="countingDown"
        style="color: #0083ff"
        >重新获取</span
      >
    </div>

    <u-button type="primary" text="确定" @click="toLogin"></u-button>
    <!-- 原button还绑定verifyCode -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      countingDown: false,
      tel: "123456789@qq.com",
      timer: null,
      bold: true,
      showKeyboard: false,
      disabledKeyboard: true,
    };
  },
  computed: {
    maskedEmail() {
      return this.tel.replace(/(?<=.{3}).(?=[^@]*?@)/g, "*");
    },
  },
  methods: {
    toLogin() {
      this.$refs.uToast.show({
        type: "success",
        message: "验证成功,正在返回登录页面",
      });
      this.timer = setTimeout(() => {
        uni.navigateTo({
          url: "/pages/RegisterAndLogin/login",
        });
      }, 1000);
    },
    countDownFinished() {
      this.countingDown = false;
    },
    resendCode() {
      // 处理重新获取按钮点击事件
      if (this.$refs.countDownRef && this.countingDown === false) {
        // 如果当前倒计时已结束，重启倒计时并启用倒计时状态
        this.$refs.countDownRef.reset();
        this.countingDown = true;
      }
    },
    async verifyCode() {
      // if (this.value.length === 4) {
      //   try {
      //     const response = await axios.post("YOUR_API_VerifyCode_URL", {
      //       code: this.value,
      //       tel: this.tel,
      //     });
      //     if (response.data.success) {
      //       this.$toast.success("验证码正确，注册成功！");
      //       // this.$router.push("/login");
      //     } else {
      //       this.$toast.fail("验证码错误，请重新输入！");
      //       this.value = "";
      //     }
      //   } catch (error) {
      //     this.$toast.fail("验证码验证失败，请稍后重试！");
      //   }
      // } else {
      //   this.$toast.fail("请输入4位验证码！");
      // }
    },
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
};
</script>

<style lang="scss" scoped>
.RegisterYanzheng-page {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tishi {
  display: flex;
  font-size: 28rpx;
  font-weight: 250;
  width: 100%;
  height: 36rpx;
  color: #999999;
  justify-content: center;
  align-items: center;
  padding: 20rpx 0;
}

.auxiliary {
  display: flex;
  height: 38rpx;
  font-size: 28rpx;
  margin: 16rpx 36rpx;
  justify-content: center;
  align-items: center;
}

.time {
  @include flex;
  align-items: center;

  &__item {
    color: #ff6e00;
  }
}

.u-button {
  margin-top: 20rpx;
  width: 80%;
  border-radius: 16rpx;
}
</style>
