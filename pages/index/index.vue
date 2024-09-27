<template>
  <div class="layoutBox">
    <!-- <image src="../../static/img/背景.png" alt="" /> -->
    <u--image
      :showLoading="true"
      src="../../static/img/layout.png"
      width="100%"
      height="1000rpx"
      :fade="true"
      duration="2000"
    ></u--image>
    <h1>—— 数藏 ——</h1>
    <p>NFT</p>
    <div class="login" @click="toLogin()">
      <!--  <button>登录</button> -->
      <!-- <u-button type="info" text="确定">jjk</u-button> -->
      <u-button type="primary" :plain="true" text="登录"></u-button>
    </div>
    <div class="register" @click="toRegister()">
      <!-- <button>注册</button> -->
      <u-button type="primary" :plain="true" text="注册"></u-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  methods: {
    toLogin() {
      uni.navigateTo({
        url: "/pages/RegisterAndLogin/login",
      });
    },
    toRegister() {
      uni.navigateTo({
        url: "/pages/RegisterAndLogin/register",
      });
    },
  },
  // mounted() {
  //   document
  //     .querySelector("body")
  //     .setAttribute("style", "background-color:#bde6f9");
  // },
};
</script>

<style lang="scss" scoped>
page {
  background-color: #bde6f9;
}

.layoutBox {
  position: relative;
  image {
    z-index: -1;
    position: absolute;
    top: -200rpx;
    left: -30%;
    width: 130%;
    height: 1200rpx;
  }
  h1 {
    position: absolute;
    top: 400rpx;
    width: 100%;
    color: #fff;
    text-align: center;
  }
  p {
    position: absolute;
    top: 510rpx;
    width: 100%;
    color: #fff;
    text-align: center;
  }
  .login {
    position: absolute;
    top: 640rpx;
    width: 100%;
    text-align: center;


    
    button {
      width: 50%;
      height: 70rpx;
      color: #fff;
      border: none;
      border-radius: 16rpx;
      background-color: rgba(#004aff, 0.7);
    }
  }
  .register {
    position: absolute;
    top: 760rpx;
    width: 100%;
    text-align: center;
    button {
      width: 50%;
      height: 70rpx;
      color: #004aff;
      border: 2rpx solid #004aff;
      border-radius: 16rpx;
      background-color: rgba(#fff, 0.8);
    }
  }
}
</style>
