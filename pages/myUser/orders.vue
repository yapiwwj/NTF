<template>
  <div>
    <div class="infoBox">
      <header><u-tabs :list="orderList" @click="click"></u-tabs></header>
    </div>
    <view v-show="active === 0">
      <ul class="haveBox">
        <li v-for="(item, index) in collectionsInfo.all" :key="index">
          <!-- <image :src="item.image" alt="" /> -->
          <u--image
            :showLoading="true"
            :src="item.image"
            :lazy-load="true"
            radius="16rpx"
            width="160rpx"
            height="160rpx"
          ></u--image>
          <div class="center">
            <h5>{{ item.name }}</h5>
            <p>{{ item.price }}币</p>
          </div>
          <div class="latest">
            <p>{{ item.status }}</p>
            <button>去付款</button>
          </div>
        </li>
      </ul>
      <div class="nullBox" v-if="!collectionsInfo.all.length">
        <u-empty
          mode="car"
          icon="http://cdn.uviewui.com/uview/empty/car.png"
        ></u-empty>
        <h5>您还没有相关订单</h5>
        <p>此处将展示您购买的数字藏品订单</p>
      </div>
      <footer v-if="collectionsInfo.cancel.length">
        <span>没有更多了</span>
      </footer>
    </view>
    <view v-show="active === 1"
      ><ul class="haveBox">
        <li v-for="(item, index) in collectionsInfo.noPay" :key="index">
          <u--image
            :showLoading="true"
            :src="item.image"
            :lazy-load="true"
            radius="16rpx"
            width="160rpx"
            height="160rpx"
          ></u--image>
          <div class="center">
            <h5>{{ item.name }}</h5>
            <p>{{ item.price }}币</p>
          </div>
          <div class="latest">
            <p>{{ item.status }}</p>
            <button>去付款</button>
          </div>
        </li>
      </ul>
      <div class="nullBox" v-if="!collectionsInfo.noPay.length">
        <u-empty mode="car" icon="http://cdn.uviewui.com/uview/empty/car.png">
        </u-empty>
        <h5>您还没有相关订单</h5>
        <p>此处将展示您购买的数字藏品订单</p>
      </div>
      <footer v-if="collectionsInfo.noPay.length">
        <span>没有更多了</span>
      </footer></view
    >
    <view v-show="active === 2"
      ><ul class="haveBox">
        <li v-for="(item, index) in collectionsInfo.hasPay" :key="index">
          <u--image
            :showLoading="true"
            :src="item.image"
            :lazy-load="true"
            radius="16rpx"
            width="160rpx"
            height="160rpx"
          ></u--image>
          <div class="center">
            <h5>{{ item.name }}</h5>
            <p>{{ item.price }}币</p>
          </div>
          <div class="latest">
            <p>{{ item.status }}</p>
            <button>去付款</button>
          </div>
        </li>
      </ul>
      <div class="nullBox" v-if="!collectionsInfo.hasPay.length">
        <u-empty
          mode="car"
          icon="http://cdn.uviewui.com/uview/empty/car.png"
        ></u-empty>
        <h5>您还没有相关订单</h5>
        <p>此处将展示您购买的数字藏品订单</p>
      </div>
      <footer v-if="collectionsInfo.hasPay.length">
        <span>没有更多了</span>
      </footer></view
    >
    <view v-show="active === 3"
      ><ul class="haveBox">
        <li v-for="(item, index) in collectionsInfo.cancel" :key="index">
          <u--image
            :showLoading="true"
            :src="item.image"
            :lazy-load="true"
            radius="16rpx"
            width="160rpx"
            height="160rpx"
          ></u--image>
          <div class="center">
            <h5>{{ item.name }}</h5>
            <p>{{ item.price }}币</p>
          </div>
          <div class="latest">
            <p>{{ item.status }}</p>
            <button>去付款</button>
          </div>
        </li>
      </ul>
      <div class="nullBox" v-if="!collectionsInfo.cancel.length">
        <u-empty
          mode="car"
          icon="http://cdn.uviewui.com/uview/empty/car.png"
        ></u-empty>
        <h5>您还没有相关订单</h5>
        <p>此处将展示您购买的数字藏品订单</p>
      </div>
      <footer v-if="collectionsInfo.cancel.length">
        <span>没有更多了</span>
      </footer></view
    >
    <showBox></showBox>
  </div>
</template>

<script>
import showBox from "../../components/showBox.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      active: 0, //默认激活第一个
      orderList: [
        { name: "全部" },
        { name: "待付款" },
        { name: "已付款" },
        { name: "已取消" },
      ],
    };
  },
  methods: {
    toUserCenter() {
      this.$router.push("/usercenter");
    },
    click(n) {
      this.active = n.index;
    },
  },
  computed: {
    ...mapState("collections", ["collectionsInfo"]),
  },

  components: {
    showBox,
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#FCFCFE");
  },
};
</script>

<style lang="less" scoped>
ul {
  padding: 0;
}
header {
  display: flex;
  justify-content: center;
}
.haveBox {
  li {
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: 90%;
    background-color: #fff;
    border-radius: 16rpx;
    border: 2rpx solid #cfcfcf;
    box-shadow: 10rpx 4rpx 10rpx #cfcfcf;
    margin: 20rpx auto;
    padding: 10rpx 0;
    // image {
    //   width: 20%;
    //   border-radius: 16px;
    //   padding: 5px 10px 5px 10px;
    // }
    .center {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h5 {
        font-size: 28rpx;
        width: 400rpx;
        color: #3d3d3d;
        margin: 10rpx;
      }
      p {
        color: #ff6e00;
        margin: 10rpx;
      }
    }
    .latest {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        position: absolute;
        right: 40rpx;
        font-size: 28rpx;
        color: #ff6e00;
        margin: 10rpx 0;
      }
      button {
        position: absolute;
        right: 10rpx;
        bottom: 10rpx;
        color: #3c9cff;
        font-size: 24rpx;
        border-radius: 32rpx;
        background-color: #fff;
        border: 2rpx solid #3c9cff;
        padding: 0 60rpx;
      }
    }
  }
}
.nullBox {
  img {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    margin-top: 40rpx;
  }
  h5 {
    color: #3d3d3d;
    text-align: center;
    margin: 20rpx;
  }
  p {
    font-size: 28rpx;
    color: #979797;
    text-align: center;
    margin: 10rpx;
  }
}

footer {
  display: flex;
  justify-content: space-around;
  span {
    // width: 100%;
    color: #3d3d3d;
    font-size: 28rpx;
    padding-top: 20rpx;
  }
}
</style>
