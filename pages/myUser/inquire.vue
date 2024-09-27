<template>
  <div>
    <header></header>
    <div>
      <p class="title">请输入哈希值(含区块链地址)</p>
      <p class="promot">支持藏品相关区块链信息查询</p>
      <textarea name="" id="" cols="30" rows="10" v-model="hash"></textarea>
      <u-button
        type="primary"
        text="查询"
        @click="inquire"
        style="
          width: 85%;
          color: #ffff;
          border-radius: 16rpx;
          margin: 0 auto;
          margin-top: 10rpx;
        "
      ></u-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      result: "",
    };
  },
  computed: {
    ...mapState("Pay", ["collectionId"]),
  },
  methods: {
    //查询哈希值
    // async inquire() {
    //   const res = await this.$api.user.hashInquire(this.collectionId);
    //   if (res.code === '200') {
    //     console.log(res.data);
    //     this.result = res.data;
    //   } else {
    //     console.log(erro);
    //   }
    // },
    inquire(){
      uni.navigateTo({
        url: "/pages/myUser/inquireSuccess",
      });
    }
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#FCFCFE");
    console.log(this.$api.user.hashInquire);
  },
  // onLoad() {

  // },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  .title {
    color: #2a2a2a;
    margin: 0 auto;
    margin-top: 60rpx;
  }
  .promot {
    font-size: 24rpx;
    color: #3d3d3d;
    margin: 20rpx auto;
  }
  textarea {
    width: 85%;
    height: 100rpx;
    border: 2rpx solid #007bff;
    background-color: #f6f6f6;
    border-radius: 16rpx;
    margin: 20rpx auto;
  }
}
</style>
