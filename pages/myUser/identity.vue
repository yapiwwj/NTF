<template>
  <div>
    <div class="infoBox">
      <p>首次注册之前，请绑定您的身份证件</p>
      <!-- <image src="../../static/img/实名认证.png" alt="" /> -->
      <u--image
        :showLoading="true"
        src="../../static/img/identify.png"
        width="100%"
        height="700rpx"
      ></u--image>
      <div style="text-align: center">
        <!-- <van-button
          round
          type="info"
          size="large"
          style="
            width: 90%;
            background: #004aff;
            border-radius: 8px;
            font-size: 14px;
            margin-top: 20px;
          "
          @click="next()"
          >下一步</van-button
        > -->
        <u-button
          type="primary"
          text="下一步"
          style="
            width: 80%;
            background: #3c9cff;
            border-radius: 16rpx;
            font-size: 28rpx;
            margin-top: 40rpx;
          "
          @click="next"
        ></u-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      uni.navigateTo({
        url: "/pages/myUser/identityNext",
      });
    },
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#FCFCFE");
  },
};
</script>

<style lang="scss" scoped>
.infoBox {
  display: flex;
  flex-direction: column;
  p {
    color: #999999;
    font-size: 28rpx;
    text-align: center;
    margin-bottom: 40rpx;
  }
  image {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
