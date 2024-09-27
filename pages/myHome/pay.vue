<template>
  <view>
    <header>
      <p class="title">支付金额</p>
      <p class="num">{{ goodInfo.payMoney.toFixed(2) }}币</p>
    </header>
    <view class="payWayBox">
      <div class="payWay" v-for="(item, index) in wayList" :key="index">
        <u-icon :name="item.icon" :color="item.color" size="28"></u-icon>
        <span>{{ item.title }}</span>
        <u-radio-group
          class="radio"
          v-model="value"
          iconPlacement="right"
          @change="groupChange"
        >
          <u-radio :name="item.name" @change="radioChange"></u-radio>
        </u-radio-group>
      </div>
    </view>
    <u-button
      type="primary"
      text="确认支付"
      @click="pay"
      style="width: 85%"
    ></u-button>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
      wayList: [
        {
          title: "数藏币支付",
          name: "数藏币支付",
          icon: "rmb-circle-fill",
          color: "#faca44",
        },
      ],
      goodInfo: {
        id: "",
        payMoney: 0,
        goodName: "",
      },
    };
  },
  computed: {
    ...mapState("LoginRegister", ["userId", "userHash"]),
  },
  methods: {
    ...mapMutations("Pay", ["postCollectionId"]),
    radioChange(n) {
      //   console.log(n);
    },
    groupChange(n) {
      //   console.log(n);
    },
    pay() {
      console.log(this.userId, this.userHash);
      this.getLian();
    },
    async getLian() {
      const res = await this.$api.buy.consume(
        this.goodInfo.id, //藏品id
        this.userId,
        this.userHash
      );
      if (res.code === '200') {
        console.log(res.data);
        // this.postCollectionId(res.data)获取返回的藏品hash
      }
    },
  },

  onLoad(e) {
    const info = JSON.parse(e.info);
    // this.payMoney = JSON.parse(e.price);
    this.goodInfo.id = info.id;
    this.goodInfo.payMoney = info.price;
    this.goodInfo.goodName = info.name;
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 80%;
  //   background-color: pink;
  margin: 0 auto;
  padding: 80rpx 0;
  p {
    text-align: center;
  }
  .title {
    color: #a8a6a7;
  }
  .num {
    color: #ff6e00;
    font-size: 60rpx;
    padding: 20rpx 0;
  }
}
.payWayBox {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 100rpx;
  .payWay {
    position: relative;
    border-bottom: 2rpx solid #c1c2c6;
    // background-color: pink;
    padding: 20rpx 0;
    .radio {
      position: absolute;
      top: 30%;
      right: 0;
    }
    span {
      position: absolute;
      top: 25%;
      left: 70rpx;
    }
  }
}
</style>
