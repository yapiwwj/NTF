<template>
  <div class="forget-page">
    <div class="tishi">选择验证方式</div>

    <template>
      <u-radio-group
        v-model="verificationMethod"
        placement="column"
        @change="groupChange"
        activeColor="#3c9cff"
      >
        <u-radio
          customStyle="{marginBottom: '16rpx'}"
          label="邮箱验证"
          name="邮箱验证"
          @change="radioChange"
          :class="{ selected: isChosen1 }"
          style="
            margin-bottom: 10rpx;
            padding: 20rpx 20rpx;
            font-size: 30rpx;
            background-color: #fff;
          "
        ></u-radio>
        <u-radio
          customStyle="{marginBottom: '16rpx'}"
          label="回答安全问题"
          name="回答安全问题"
          @change="radioChange"
          :class="{ selected: isChosen2 }"
          style="
            margin-bottom: 30rpx;
            padding: 20rpx 20rpx;
            font-size: 30rpx;
            background-color: #fff;
          "
        ></u-radio>
      </u-radio-group>
    </template>
    <u-button type="primary" text="下一步" @click="toNext"></u-button>

    <div class="auxiliary">
      <span class="help" style="color: #999999">
        需要帮助？
        <router-link to="/#" style="color: #0083ff">联系客服</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      verificationMethod: "", // 选中的验证方式
      isChosen1: false,
      isChosen2: false,
    };
  },
  methods: {
    // redirectToVerification() {
    //   if (this.verificationMethod === "securityQuestion") {
    //     this.$router.push("/security-question"); // 跳转到回答安全问题页面
    //   } else if (this.verificationMethod === "phoneVerification") {
    //     this.$router.push("/phone-verification"); // 跳转到手机验证码验证页面
    //   }
    // },
    groupChange(n) {
      // console.log("groupChange", n);
    },
    radioChange(n) {
      if (n === "邮箱验证") {
        this.isChosen1 = !this.isChosen1;
        this.isChosen2 = false;
      } else if (n === "回答安全问题") {
        this.isChosen2 = !this.isChosen2;
        this.isChosen1 = false;
      }
    },
    toNext() {
      if (this.isChosen1) {
        uni.navigateTo({
          url: "/pages/RegisterAndLogin/emailVerification",
        });
      } else if (this.isChosen2) {
        uni.navigateTo({
          url: "/pages/RegisterAndLogin/securityQuestion",
        });
      }
    },
    back() {
      // this.$router.push("/login");
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
}

// .u-nav-bar {
// 	width: 100%;
// }

.u-radio-group {
  width: 100%;
  font-size: 32rpx;
}

.tishi {
  display: flex;
  font-size: 28rpx;
  font-weight: 250;
  width: 90%;
  color: #999999;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.u-radio {
  width: 80%;
  border: 2rpx solid #e5e5e5;
  border-radius: 16rpx;
  padding: 16rpx 24rpx;
  margin: 20rpx auto;
}

.u-button {
  width: 85%;
}

.van-radio__label {
  color: #333333;
}

.auxiliary {
  display: flex;
  width: 100%;
  margin: 16rpx 36rpx;
  font-size: 28rpx;
  justify-content: center;
  align-items: center;
  padding-top: 10rpx;
}

.selected {
  border: 4rpx solid #3c9cff;
}
</style>
