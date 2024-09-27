<template>
  <div class="login-page">
    <view>
      <u-toast ref="uToast" />
    </view>
    <template>
      <u--form class="custom-form">
        <uni-easyinput
          class="custom-field"
          v-model="userInfo.username"
          placeholder="用户名"
          size="28rpx"
          placeholder-style="font-size:26rpx;"
        ></uni-easyinput>
        <view style="margin: 10rpx 0">
          <uni-easyinput
            class="custom-field"
            v-model="userInfo.password"
            type="password"
            placeholder="密码"
            placeholder-style="font-size:26rpx"
          ></uni-easyinput>
          <p class="tishi">请输入6-12位字符,仅支持小写字母，数字和下划线。</p>
        </view>
        <u-button
          type="primary"
          size="120rpx"
          text="确定"
          style="margin-top: 1.25rem; font-size: 0.875rem"
          @click="toHome()"
        ></u-button>
      </u--form>
    </template>
    <div class="auxiliary">
      <span class="forget" style="color: #0083ff" @click="toForget"
        >忘记密码？</span
      >
      <span class="help" style="color: #999999"
        >需要帮助？
        <span to="/#" style="color: #0083ff">联系客服</span>
      </span>
    </div>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
        email: "1315016187@qq.com",
        phoneNumber: 12345678910,
        code: 1,
        codeId: 1,
        userId: "",
        userHash: "",
      },
      timer: null,
      dsds: "dsdsd",
    };
  },
  methods: {
    ...mapMutations("LoginRegister", ["updateData"]),
    toHome() {
      this.$refs.uToast.show({
        type: "success",
        message: "登录成功",
      }),
        (this.timer = setTimeout(() => {
          uni.switchTab({
            url: "/pages/myHome/index",
          });
        }, 1000)),
        (this.username = ""),
        (this.password = "");
    },
    // login(){
    //   uni.request({
    //     url:'/user/register'
    //   })
    // }
    // async login() {
    //   const Data = {
    //     username: this.userInfo.username,
    //     password: this.userInfo.password,
    //     email: this.userInfo.email,
    //     phone: this.userInfo.phoneNumber,
    //     code: this.userInfo.code,
    //     codeId: this.userInfo.codeId,
    //   };
    //   const requestData = JSON.stringify(Data);
    //   const res = await this.$api.loginAndRegister.login(requestData);
    //   const info = JSON.parse(res.info);
    //   if (res.code === "200") {
    //     this.userId = info.id;
    //     this.userHash = info.address;
    //     // console.log(this.userId, this.userHash);
    //     this.updateData(this.userInfo);
    //     console.log(res.code,"注册成功!");
    //     // console.log(this.userId,"eweewe",this.userHash);
    //     //执行登录
    //     this.toHome();
    //   }
    // },
    toForget() {
      uni.navigateTo({
        url: "/pages/RegisterAndLogin/forgetPassword",
      });
    },
    async onSubmit() {},
  },
  mounted() {
    // document
    // 	.querySelector("body")
    // 	.setAttribute("style", "background-color:#FCFCFE");
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

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

// .van-nav-bar {
// 	width: 100%;
// }

.custom-form {
  width: 100%;
  text-align: center;
  margin-top: 1.875rem;
}

.tishi {
  // display: flex;
  font-size: 0.75rem;
  font-weight: 250;
  width: 90%;
  height: 1.125rem;
  color: #999999;
  // margin: 0 auto;
  justify-content: center;
  padding-left: 20rpx;
  // align-content: center;
}

.custom-field,
.custom-button {
  width: 90%;
  margin: 0.5rem auto;
  background-color: #004aff;
  border-radius: 0.5rem;
}

.custom-field {
  width: 80%;
  background-color: #f6f6f6;
}

.auxiliary {
  display: flex;
  width: 80%;
  font-size: 0.875rem;
  justify-content: space-between;
  margin-top: 15rpx;
}

.forget {
  text-align: left;
}

.help {
  text-align: right;
}

.u-button {
  width: 80%;
}
.custom-easyinput {
  background-color: #f6f6f6;
}
</style>
