<template>
  <div class="resetpassword-page">
    <view>
      <u-toast ref="uToast" />
    </view>
    <div class="tishi">输入新密码</div>
    <div class="form-container">
      <u--form class="custom-form">
        <uni-easyinput
          class="custom-field"
          v-model="newPassword"
          type="password"
          placeholder="新密码"
          placeholder-style="font-size:26rpx"
        ></uni-easyinput>
        <p class="tishi1">请输入6-12位字符,仅支持小写字母,数字和下划线。</p>

        <uni-easyinput
          class="custom-field"
          v-model="confirmPassword"
          type="password"
          placeholder="确认密码"
          placeholder-style="font-size:26rpx"
        ></uni-easyinput>
        <p class="tishi1">请输入6-12位字符,仅支持小写字母,数字和下划线。</p>
        <u-button
          type="primary"
          size="120rpx"
          text="确认"
          style="margin-top: 30rpx; font-size: 28rpx; width: 85%"
          @click="toLayout()"
        ></u-button>
      </u--form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      timer: null,
    };
  },
  methods: {
    toLayout() {
      if (this.newPassword === this.confirmPassword && this.newPassword) {
        this.$refs.uToast.show({
          type: "success",
          message: "修改成功,正在返回登录页面",
        }),
          (this.timer = setTimeout(() => {
            uni.switchTab({
              url: "/pages/myHome/index",
            });
          }, 1000)),
          (this.newPassword = ""),
          (this.confirmPassword = "");
      } else if (this.newPassword !== this.confirmPassword) {
        this.$refs.uToast.show({
          type: "error",
          message: "密码输入不一致,请重新输入",
        });
      } else {
        this.$refs.uToast.show({
          type: "error",
          message: "输入密码为空",
        });
      }
    },
    async confirmPasswordChange() {
      // if (this.password !== "" && this.confirmPassword !== "") {
      //   if (this.password === this.confirmPassword) {
      //     try {
      //       // eslint-disable-next-line no-undef
      //       const response = await axios.post("<Your_API_UpdatePassword_URL>", {
      //         password: this.password,
      //       });
      //       if (response.data.success) {
      //         this.$toast.success("密码修改成功");
      //         this.$router.push({ path: "/login" });
      //       } else {
      //         this.$toast.fail("密码修改失败，请重试！");
      //       }
      //     } catch (error) {
      //       this.$toast.fail("密码修改出错，请稍后重试！");
      //     }
      //   } else {
      //     this.$toast.fail("两次输入的密码不一致，请重新输入！");
      //   }
      // } else {
      //   this.$toast.fail("请输入新密码和确认密码");
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
page {
  background-color: #fcfcfe;
}

.resetpassword-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Box {
  width: 100%;
}

.tishi {
  display: flex;
  font-size: 28rpx;
  font-weight: 250;
  width: 90%;
  // height: 18px;
  color: #999999;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  padding: 0 0 20rpx 0;
}

.tishi1 {
  font-size: 24rpx;
  font-weight: 250;
  width: 83%;
  // height: 18px;
  color: #999999;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  // padding: 5px 0 0 0;
}

.form-container {
  width: 100%;
}

.custom-field {
  background-color: #f6f6f6;
  width: 85%;
  margin: 20rpx auto;
}

// ::v-deep .van-field input::placeholder {
// 	color: #666;
// }

.custom-button {
  width: 90%;
}

// .u-input {
//   margin-bottom: 0;
//   border-radius: 8px;
// }

// .van-cell-group {
//   background-color: #fcfcfe;
// }
</style>
