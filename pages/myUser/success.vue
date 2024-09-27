<template>
  <div class="infoBox">
    <!-- <image src="../../static/img/认证成功.png" alt="" /> -->
    <div style="width: 80%;margin: 0 auto;">
      <u--image
      :showLoading="true"
      src="../../static/img/success.png"
      width="100%"
    ></u--image>
    </div>
    <h3>认证成功</h3>
    <p>您已成功验证，解锁创作、购买功能</p>
    <footer style="text-align: center; margin-top: 1.25rem">
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
        text="继续"
        style="
          width: 85%;
          background: #3c9cff;
          border-radius: 16rpx;
          font-size: 28rpx;
          margin-top: 40rpx;
        "
        @click="next"
      ></u-button>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      uni.switchTab({
        url: "/pages/myUser/index",
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
  // display: flex;
  // flex-direction: column;
  margin-top: 200rpx;
  image {
    width: 50%;
    margin: 0 auto;
  }
  h3 {
    text-align: center;
    color: #333333;
    margin: 20rpx auto;
    margin-top: 40rpx;
  }
  p {
    color: #999999;
    font-size: 28rpx;
    text-align: center;
    margin: 0;
  }
}
</style>
