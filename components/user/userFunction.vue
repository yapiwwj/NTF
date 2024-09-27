<template>
  <div class="fnBox">
    <div class="fn" @click="toInquire()">
      <!-- <van-icon
        name="browsing-history-o"
        size="20px"
        style="padding-top: 10px"
      /> -->
      <u-icon
        name="chrome-circle-fill"
        size="20px"
        style="padding-top: 10px"
      ></u-icon>
      <p>区块链查询</p>
    </div>
    <div class="fn" @click="toOrders()">
      <!-- <van-icon name="orders-o" size="20px" style="padding-top: 10px" /> -->
      <u-icon
        name="shopping-cart-fill"
        size="20px"
        style="padding-top: 10px"
      ></u-icon>
      <p>订单</p>
    </div>
    <div class="fn" @click="toSetting()">
      <!-- <van-icon name="setting-o" size="20px" style="padding-top: 10px" /> -->
      <u-icon
        name="setting-fill"
        size="20px"
        style="padding-top: 10px"
      ></u-icon>
      <p>设置</p>
    </div>
    <div class="fn" @click="toHelp()">
      <!-- <van-icon name="service-o" size="20px" style="padding-top: 10px" /> -->
      <u-icon name="server-fill" size="20px" style="padding-top: 10px"></u-icon>
      <p>帮助</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toInquire() {
      uni.navigateTo({
        url: "/pages/myUser/inquire",
      });
    },
    toOrders() {
      uni.navigateTo({
        url: "/pages/myUser/orders",
      });
    },
    toSetting() {
      uni.navigateTo({
        url: "/pages/myUser/setting",
      });
    },
    toHelp() {
      this.$router.push("/usercenter/help");
    },
  },
};
</script>

<style lang="scss" scoped>
.fnBox {
  display: flex;
  justify-content: space-around;
  width: 85%;
  box-shadow: 0.625rem 0.3125rem 0.3125rem #cfcfcf;
  border-radius: 1rem 1rem 0.5rem 0.5rem;
  border: 2px solid #f7f7f7;
  margin: 15px auto;
  .fn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    p {
      color: #3d3d3d;
      font-size: 14px;
      margin: 5px 0 10px 0;
    }
  }
}
</style>
