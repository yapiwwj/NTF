<template>
  <div>
    <ul class="top">
      <u-cell-group>
        <u-cell
          title="账号与安全"
          icon="account-fill"
          :isLink="true"
          arrow-direction="left"
          url="/pages/myUser/security"
        ></u-cell>
        <u-cell
          title="消息通知设置"
          icon="chat-fill"
          :isLink="true"
          arrow-direction="left"
        ></u-cell>
        <u-cell
          title="通用设置"
          icon="setting-fill"
          :isLink="true"
          arrow-direction="left"
        ></u-cell>
        <u-cell
          title="隐私设置"
          icon="lock-fill"
          :isLink="true"
          arrow-direction="left"
        ></u-cell>
      </u-cell-group>
    </ul>
    <ul class="bottom">
      <u-cell-group>
        <u-cell
          title="关于app"
          icon="question-circle-fill"
          :isLink="true"
          arrow-direction="left"
        ></u-cell>
        <u-cell
          title="分享app"
          icon="share-square"
          :isLink="true"
          arrow-direction="left"
        ></u-cell>
      </u-cell-group>
    </ul>
    <footer style="text-align: center">
      <u-button
        type="primary"
        text="退出登录"
        style="width: 90%; border-radius: 16rpx; font-size: 28rpx"
      ></u-button>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    toUserCenter() {
      this.$router.push("/usercenter");
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
ul {
  padding: 0;
}
.top,
.bottom {
  width: 90%;
  border-radius: 20rpx;
  border: 2rpx solid #cfcfcf;
  box-shadow: 10rpx 4rpx 10rpx #cfcfcf;
  margin: 40rpx auto;
  div {
    background-color: #fcfcfe;
  }
}
.van-cell__left-icon {
  margin-right: 40rpx;
}
// .u-cell__left-icon-wrap{
//   margin-right: 20px;
// }
.u-cell__title-text {
  span {
    margin-left: 40rpx;
  }
}
</style>
