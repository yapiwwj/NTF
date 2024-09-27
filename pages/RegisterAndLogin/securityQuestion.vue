<template>
  <div class="security-page">
    <view>
      <u-toast ref="uToast" />
    </view>
    <div class="tishi">回答安全问题</div>

    <!-- <select class="question-box" v-model="selectIndex">
      <option
        class="optionBox"
        :value="index"
        v-for="(item, index) in options"
        :key="index"
      >
        {{ item.question }}
      </option>
    </select> -->
    <uni-section
      title="请选择密保问题"
      type="line"
      style="width: 85%; margin-bottom: 10px"
    >
      <uni-data-select
        v-model="value"
        :localdata="options"
        @change="change"
        :clear="false"
      ></uni-data-select>
    </uni-section>

    <div class="answer-section">
      <uni-easyinput
        class="custom-field"
        v-model="answer"
        placeholder="输入答案"
        placeholder-style="font-size:30rpx;"
        style="margin-bottom: 20rpx"
      ></uni-easyinput>
    </div>
    <div class="pop">
      <p v-if="showErrorMessage" class="error-message">
        您输入的答案不正确,请重新输入。错误3次账号将被锁定,您还有<span
          style="color: #ff5b00"
          >{{ chance }}次</span
        >机会
      </p>
    </div>
    <u-button
      type="primary"
      text="下一步"
      @click="toResetPassword()"
    ></u-button>
    <footer>
      <p class="left" @click="toEmail">使用邮箱验证</p>
      <p class="right">
        <span class="help">需要帮助？</span>
        <span class="kf">联系客服</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      options: [
        { value: 0, text: "父亲的姓名", answer: "123" },
        { value: 1, text: "母亲的姓名", answer: "123" },
        { value: 2, text: "父亲的生日", answer: "123" },
        { value: 3, text: "母亲的生日", answer: "123" },
        { value: 4, text: "最好的朋友是谁？", answer: "123" },
      ],
      chance: 3,
      answer: "",
      showErrorMessage: false,
    };
  },
  methods: {
    change(e) {
      console.log(this.value);
    },
    toEmail() {
      uni.navigateTo({
        url: "/pages/RegisterAndLogin/emailVerification",
      });
    },
    toResetPassword() {
      if (this.answer !== this.options[this.value].answer) {
        this.showErrorMessage = true;
        this.chance--;
        if (this.chance === -1) {
          this.$refs.uToast.show({
            message: "您的账户已被锁定",
          });
          this.showErrorMessage = false;
          this.chance = 3;
        }
      } else {
        uni.navigateTo({
          url: "/pages/RegisterAndLogin/resetPassword",
        });
      }
    },

    async checkAnswer() {
      // try {
      //   // eslint-disable-next-line no-undef
      //   const response = await axios.post("<Your_API_CheckAnswer_URL>", {
      //     answer: this.answer,
      //   });
      //   if (response.data.success) {
      //     this.$router.push("/resetpassword");
      //   } else {
      //     this.chances--;
      //     this.showErrorMessage = true;
      //     this.answer = "";
      //     if (this.chances === 0) {
      //       // 锁定账号或采取其他操作
      //     }
      //   }
      // } catch (error) {
      //   console.error("出现问题:", error);
      //   // eslint-disable-next-line no-undef
      //   Toast("网络请求出现问题");
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
page {
  background-color: #fcfcfe;
}
.security-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding: 0 0 20rpx 0;
}

.answer-section {
  width: 85%;
  display: flex;
}

.question-box {
  color: #646566;
  background-color: #ffff;
  border: 2rpx solid #cccccc;
  border-radius: 16rpx;
  font-size: 28rpx;
  padding: 20rpx 10rpx;
  margin: 20rpx;
  width: 85%;
}

.custom-fied {
  background-color: #f6f6f6;
  padding: 20rpx;
  margin: 40rpx 0;
}

.pop {
  width: 85%;
}
.error-message {
  font-size: 24rpx;
  color: #999999;
  margin: 10rpx 0;

  span {
    font-size: 24rpx;
  }
}

footer {
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 20rpx;

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

.optionBox {
  color: #646566;
}

.u-input {
  width: 100%;
  margin-top: 10rpx;
  margin-bottom: 20rpx;
}

.u-button {
  width: 85%;
  border-radius: 16rpx;
}
</style>
