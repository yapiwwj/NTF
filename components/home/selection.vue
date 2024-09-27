<template>
  <div class="recommendBox">
    <!-- 今日宝藏 -->
    <header>
      <div class="line1"></div>
      <div class="line2"></div>
      精品鼎荐
    </header>
    <div class="todayBox">
      <div
        class="infoBox"
        v-for="item in goodInfo"
        :key="item.createId"
        @click="toBuy(item)"
      >
        <!-- <image :src="item.image" alt="" /> -->
        <u--image
          :showLoading="true"
          :src="item.image"
          :lazy-load="true"
          width="100%"
          radius="16rpx 16rpx 0 0"
        ></u--image>
        <h5>{{ item.name }}</h5>
        <p>{{ item.subscription }}</p>
        <footer>
          <div class="flexBox">
            <div class="left">
              <span class="font">{{ item.type }} </span>
            </div>
            <p class="right">{{ item.price }}币</p>
          </div>
        </footer>
      </div>
    </div>
    <br />
    <!-- 臻品推荐 -->
    <header>
      <div class="line1"></div>
      <div class="line2"></div>
      甄心全意
    </header>
    <div class="treasuresBox">
      <!-- 左边商品 -->
      <div class="leftPart">
        <div
          class="treasureBox"
          v-for="item in selectionInfo[0]"
          :key="item.createId"
          @click="toBuy(item)"
        >
          <!-- <image :src="item.image" alt="" /> -->
          <u--image
            :showLoading="true"
            :src="item.image"
            :lazy-load="true"
            width="100%"
            radius="16rpx 16rpx 0 0"
          ></u--image>
          <h5>{{ item.name }}</h5>
          <p>{{ item.subscription }}</p>
          <footer>
            <div class="tflexBox">
              <div class="tLeft">
                <span class="tfont">{{ item.type }}</span>
              </div>
              <p class="tRight">{{ item.price }}币</p>
            </div>
          </footer>
        </div>
      </div>
      <div class="rightPart">
        <div
          class="treasureBox"
          v-for="item in selectionInfo[1]"
          :key="item.createId"
          @click="toBuy(item)"
        >
          <!-- <image :src="item.image" alt="" /> -->
          <u--image
            :showLoading="true"
            :src="item.image"
            :lazy-load="true"
            width="100%"
            radius="16rpx 16rpx 0 0"
          ></u--image>
          <h5>{{ item.name }}</h5>
          <p>{{ item.subscription }}</p>
          <footer>
            <div class="tflexBox">
              <div class="tLeft">
                <span class="tfont">{{ item.type }}</span>
              </div>
              <p class="tRight">{{ item.price }}币</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
    <!-- 底部留出 -->
    <showBox></showBox>
    <!-- <footer class="showBox"></footer> -->
  </div>
</template>

<script>
import showBox from "../showBox";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    toBuy(item) {
      console.log(item);
      uni.navigateTo({
        url: "/pages/myHome/buy?info=" + JSON.stringify(item),
      });
    },
  },
  computed: {
    ...mapState("selection", ["goodInfo", "selectionInfo"]),
  },
  components: {
    showBox,
  },
};
</script>

<style lang="scss" scoped>
.recommendBox {
  header {
    position: relative;
    text-align: center;
    font-size: 28rpx;
    color: #2c2c2c;
    margin: 20rpx 0 10rpx 0;
    .line1 {
      position: absolute;
      top: 50%;
      left: 35%;
      width: 30rpx;
      border: 2rpx solid #979797;
    }
    .line2 {
      position: absolute;
      top: 50%;
      right: 35%;
      width: 30rpx;
      border: 2rpx solid #979797;
    }
  }
  .todayBox {
    display: flex;
    justify-content: space-around;
    .infoBox {
      width: 30%;
      border-radius: 32rpx 32rpx 16rpx 16rpx;
      box-shadow: 20rpx 10rpx 10rpx #cfcfcf;
      image {
        width: 100%;
        border-radius: 32rpx 32rpx 0 0;
      }
      h5 {
        color: #3d3d3d;
        font-size: 26rpx;
        margin: 0;
      }
      p {
        color: #b1b1b1;
        font-size: 24rpx;
        margin: 10rpx 0;
      }
      footer {
        .flexBox {
          display: flex;
          justify-content: space-between;
          .left {
            position: relative;
            background-color: #ff6e00;
            border-radius: 16rpx 0 0 16rpx;
            margin-bottom: 10rpx;
            .font {
              font-size: 24rpx;
              color: #fff;
              text-align: center;
              padding: 10rpx;
            }
          }
          .right {
            color: #ff6e00;
            font-size: 32rpx;
            margin: 0 10rpx 10rpx 0;
            text-align: center;
          }
        }
      }
    }
  }

  .treasuresBox {
    display: flex;
    justify-content: space-around;
    margin-left: 30rpx;
    // background-color: pink;
    .treasureBox {
      // background-color: #ff6e00;
      width: 90%;
      // width: 10.3125rem;
      border-radius: 32rpx 32rpx 16rpx 16rpx;
      box-shadow: 20rpx 10rpx 10rpx #cfcfcf;
      margin-bottom: 20rpx;
      image {
        width: 100%;
        border-radius: 32rpx 32rpx 0 0;
      }
      h5 {
        color: #3d3d3d;
        font-size: 32rpx;
        margin: 0;
      }
      p {
        color: #b1b1b1;
        font-size: 28rpx;
        margin: 10rpx 0;
      }
      footer {
        .tflexBox {
          display: flex;
          justify-content: space-between;
          .tLeft {
            position: relative;
            background-color: #ff6e00;
            border-radius: 16rpx 0 0 16rpx;
            margin-bottom: 12rpx;
            .tfont {
              font-size: 28rpx;
              color: #fff;
              text-align: center;
              padding: 10rpx;
            }
          }
          .tRight {
            color: #ff6e00;
            font-size: 36rpx;
            margin: 0 10rpx 10rpx 0;
            text-align: center;
          }
        }
      }
    }
  }
}
.showBox {
  height: 120rpx;
}
</style>
