<template>
  <div class="register-page">
    <div class="tishi1">快速创建账户,只要1分钟</div>
    <u--form @submit="onSubmit" class="custom-form">
      <view style="width: 95%; margin: 0 auto">
        <uni-easyinput
          class="custom-field"
          v-model="username"
          type="test"
          placeholder="用户名"
          placeholder-style="font-size:26rpx"
        ></uni-easyinput>

        <uni-easyinput
          class="custom-field"
          v-model="password"
          type="password"
          placeholder="密码"
          placeholder-style="font-size:26rpx"
        ></uni-easyinput>
        <div class="tishi2" style="font-size: 28rpx">
          请输入6-12位字符,仅支持小写字母,数字和下划线。
        </div>

        <uni-easyinput
          class="custom-field"
          v-model="tel"
          type="test"
          placeholder="邮箱"
          placeholder-style="font-size:26rpx"
        ></uni-easyinput>

        <uni-easyinput
          class="custom-field"
          v-model="interview"
          type="test"
          placeholder="邀请码（非必要）"
          placeholder-style="font-size:26rpx"
        ></uni-easyinput>
      </view>
      <div class="radioBox">
        <u-radio-group activeColor="#3c9cff">
          <u-radio
            v-model="agreeTerms"
            label="我已满18周岁,并同意用户服务条款"
            labelSize="12px"
            shape="circle"
            style="margin: 20rpx 0 0 0"
          >
          </u-radio>
        </u-radio-group>
      </div>
      <u-button
        type="primary"
        text="立即注册"
        @click="toVerification"
      ></u-button>
    </u--form>
    <div class="tishi3">OR</div>

    <u-button
      type="primary"
      :plain="true"
      :hairline="true"
      text="使用谷歌登陆"
    ></u-button>

    <div class="auxiliary">
      <span class="interview"
        ><router-link to="#" style="color: #0083ff"
          >我要使用邀请码注册</router-link
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      tel: "",
      interview: "",
      agreeTerms: false,
    };
  },
  computed: {
    validateForm() {
      // return (
      // 	this.username !== "" &&
      // 	this.password !== "" &&
      // 	this.tel !== "" &&
      // 	this.agreeTerms
      // );
    },
  },
  methods: {
    toVerification() {
      // this.$router.push("/register/registerVerification");
      uni.navigateTo({
        url: "/pages/RegisterAndLogin/registerVerification",
      });
    },
    async onSubmit() {
      // if (this.validateForm) {
      //   try {
      //     const response = await axios.post("<Your_API_Register_URL>", {
      //       username: this.username,
      //       password: this.password,
      //       tel: this.tel,
      //       interview: this.interview,
      //       agreeTerms: this.agreeTerms,
      //     });
      //     if (response.data.success) {
      //       this.$router.push("/Register-Yanzheng");
      //     } else {
      //       this.$toast.fail("注册失败，请重试！");
      //     }
      //   } catch (error) {
      //     this.$toast.fail("注册出错，请稍后重试！");
      //   }
      // } else {
      //   this.$toast.fail("请正确填写注册信息！");
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
page {
  color: #fcfcfe;
}

.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .tishi1 {
    display: flex;
    font-size: 28rpx;
    font-weight: 250;
    width: 90%;
    // height: 18px;
    color: #999999;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
    padding: 20rpx 0 0 0;
  }
}

// .van-nav-bar {
// 	width: 100%;
// }

.custom-form {
  width: 100%;
  text-align: center;
}

.tishi1,
.tishi3 {
  justify-content: center;
  align-content: center;
}

.tishi1,
.tishi2,
.tishi3 {
  display: flex;
  font-size: 28rpx;
  font-weight: 250;
  width: 85%;
  height: 36rpx;
  color: #999999;
  margin: 10rpx auto;
}

.custom-field,
.custom-button {
  width: 90%;
  margin: 16rpx auto;
  background-color: #f6f6f6;
}

.auxiliary {
  width: 90%;
  text-align: center;
  margin: 40rpx auto;
}

.register {
  width: 100%;
  text-align: center;
  margin: 10rpx auto;
}

.interview {
  color: #0083ff;
  font-size: 28rpx;
}

// .van-field {
// 	border-radius: 8px;
// }
.radioBox {
  display: flex;
  width: 100%;
  margin: 0 60rpx;
}

.u-input {
  width: 80%;
  border-radius: 16rpx;
}

.u-radio {
  width: 80%;
}
.u-button {
  width: 84%;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}
</style>
