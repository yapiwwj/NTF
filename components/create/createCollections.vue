<template>
  <div>
    <ul>
      <li v-for="item in cardInfo" :key="item.createId">
        <!-- <image :src="item.image" alt="" /> -->
        <u--image
            :showLoading="true"
            :src="item.img"
            :lazy-load="true"
            width="100%"
            radius=" 32rpx"
          ></u--image>
        <div class="font">
          <h3>{{ item.name }}</h3>
          <p>{{ item.address }}</p>
          <div class="card">
            <span class="type">{{ item.type }}</span>
            <span class="carrier">{{ item.carrier }}</span>
          </div>
        </div>
        <footer>
          <div class="left">
            <ul>
              <li>
                <!-- <van-icon
                  name="eye-o"
                  color="#ffff"
                  size="20px"
                  style="padding: 10px"
                /> -->
                <u-icon
                  name="eye"
                  color="#ffff"
                  size="20"
                  style="padding: 0 20rpx"
                ></u-icon>
              </li>
              <li>
                <p>{{ item.useNum }}人使用</p>
              </li>
            </ul>
          </div>
          <div class="right">
            <button @click="toBench(item.createId,item.img, item.name)">立即使用</button>
          </div>
        </footer>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    toBench(createId,image, name) {
      //前往工作台，携带参数
      // this.$router.push({
      //   path: "/create/workBench",
      //   query: {
      //     image,
      //     name,
      //   },
      // });
      uni.navigateTo({
        url: `/pages/myCreate/workBench?createId=${createId}&image=${image}&name=${name}`
      });
    },
  },
  computed: {
    ...mapState("create", ["cardInfo"]),
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
  li {
    list-style: none;
    position: relative;
    // background-color: pink;
    width: 95%;
    border-radius: 32rpx;
    margin: 20rpx auto;
    image {
      width: 100%;
      border-radius: 32rpx;
    }
    .font {
      position: absolute;
      top: 30rpx;
      left: 30rpx;
      h3 {
        color: #ffff;
        margin-bottom: 0;
      }
      p {
        color: #ffff;
        font-size: 30rpx;
        margin: 20rpx 0;
      }
    }
    .card {
      display: flex;
      .type,
      .carrier {
        color: #fff;
        font-size: 24rpx;
        background-color: rgba(255, 255, 255, 0.3);
        border: 2rpx solid #fff;
        border-radius: 10rpx;
        padding: 10rpx;
        margin-right: 20rpx;
      }
    }
    footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      border-radius: 0 0 32rpx 32rpx;
      background-color: rgba(44, 44, 48, 0.8);
      .left {
        float: left;
        ul {
          display: flex;
          p {
            width: 200rpx;
            color: #fff;
            font-size: 28rpx;
            margin: 0;
          }
        }
      }
      .right {
        position: absolute;
        right: 10rpx;
        top: 12%;
        button {
          font-size: 24rpx;
          color: #fff;
          border-radius: 32rpx;
          border: none;
          background: linear-gradient(to right, #024bff, #a8c0e8);
          padding: 0 40rpx;
        }
      }
    }
  }
}
</style>
