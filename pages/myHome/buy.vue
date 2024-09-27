<template>
  <view>
    <view class="videoBox">
      <video src="../../static/img/home.png"></video>
    </view>
    <header>
      <div class="threeLook" @click="toThree">3D查看</div>
    </header>
    <div class="titleBox">
      <h3>{{ buyInfo.name }}</h3>
      <div class="xlBox">
        <span class="xl">限量</span>
        <span class="num">120000份</span>
      </div>
    </div>
    <div class="line">
      <span style="margin-right: 20rpx; color: #b1b1b1">————</span>
      <u-icon name="lock-fill" color="#b1b1b1"></u-icon>
      <span style="margin-right: 20rpx; color: #b1b1b1">购买即可体验内容</span>
      <span style="color: #b1b1b1">————</span>
    </div>
    <ul class="function">
      <li v-for="(item, index) in functionList" :key="index">
        <u-icon :name="item.name" size="20" color="#fff"></u-icon>
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <div class="infoBox">
      <p style="padding: 40rpx; font-weight: 600">藏品简介</p>
      <div style="width: 98%; margin: 0 auto">
        <u--image
          :showLoading="true"
          src="../../static/img/instruction.jpg"
          width="100%"
          height="1400rpx"
          style="border-radius: 16rpx"
        ></u--image>
      </div>
    </div>
    <footer class="fix">
      <span style="color: #fe994d">{{ buyInfo.price.toFixed(2) }}币</span>
      <div class="button" @click="toPay">
        <p>购买</p>
        <p style="font-size: 24rpx">剩余1000份</p>
      </div>
    </footer>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      functionList: [
        { name: "eye", title: "AR浏览" },
        { name: "rmb-circle", title: "藏品出售" },
        { name: "gift", title: "藏品转让" },
        { name: "info-circle", title: "更多讯息" },
        { name: "file-text", title: "区块链证书" },
      ],
      buyInfo: null,
    };
  },
  computed: {
    ...mapState("LoginRegister", ["userId", "userHash"]),
  },
  methods: {
    toThree() {
      uni.navigateTo({
        url: "/pages/myHome/threeShow",
      });
    },
    toPay() {
      uni.navigateTo({
        url: "/pages/myHome/pay?info=" + JSON.stringify(this.buyInfo),
      });
    },
//     async toLian(){
// const res = await 
//     },
    onClick(e) {
      uni.showToast({
        title: `点击${e.content.text}`,
        icon: "none",
      });
    },
    buttonClick(e) {
      console.log(e);
      this.options[2].info++;
    },
  },
  mounted() {
    console.log(this.userId);
    // console.log(this.$api.buy);
  },
  onLoad(n) {
    this.buyInfo = JSON.parse(n.info);
    console.log(this.buyInfo);
  },
};
</script>

<style lang="scss" scoped>
* {
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
}
page {
  background-color: #fcfcfe;
  overflow-y: scroll;
  overflow-x: hidden;
}
.videoBox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: 600rpx;
  margin: 0 auto;
  video {
    width: 100%;
    height: 90%;
    margin: 0 auto;
    border-radius: 16rpx;
    margin-top: 40rpx;
  }
}
header {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20rpx;
  .threeLook {
    font-size: 28rpx;
    color: #3c9cff;
    border: 2rpx solid #3c9cff;
    border-radius: 16rpx;
    padding: 0 40rpx;
  }
}
.titleBox {
  width: 60%;
  // background-color: #3c9cff;
  margin: 0 auto;
  h3 {
    text-align: center;
    margin: 10rpx 0;
  }
  .xlBox {
    // display: flex;
    // justify-content: space-around;
    text-align: center;
    margin: 0 auto;
    width: 60%;
    .xl {
      font-size: 24rpx;
      color: #fff;
      background-color: #fe994d;
      border-radius: 16rpx 0 0 8px;
      padding: 12rpx 16rpx;
    }
    .num {
      color: #fe994d;
      background-color: #fff;
      border: 2rpx solid #fe994d;
      font-size: 24rpx;
      line-height: 62rpx;
      padding: 10rpx 16rpx;
    }
  }
}
.line {
  display: flex;
  justify-content: center;
  margin: 20rpx 0;
  span {
    font-size: 24rpx;
    color: #383838;
  }
}
.function {
  display: flex;
  justify-content: center;
  border-radius: 64rpx 64rpx 0 0;
  // padding-bottom: 5px;
  background-color: rgba(#3c9cff, 0.7);

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 10rpx 20rpx;
    p {
      font-size: 24rpx;
    }
  }
}
.infoBox {
  width: 98%;
  height: 1700rpx;
  border-radius: 16rpx;
  background-color: rgba(#3c9cff, 0.2);
  margin: 20rpx auto;
}
.fix {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  /* #ifdef H5 */
  left: var(--window-left);
  right: var(--window-right);
  /* #endif */
  bottom: 20rpx;
  background-color: rgba(#fff, 0.8);
  span {
    line-height: 124rpx;
    font-size: 50rpx;
  }
  .button {
    padding: 20rpx 100rpx;
    font-size: 30rpx;
    border: none;
    border-radius: 64rpx;
    margin-right: 20rpx;
    background-color: #3c9cff;
    p {
      color: #fff;
      text-align: center;
      margin: 0;
    }
  }
}
</style>
