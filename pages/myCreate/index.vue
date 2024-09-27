<template>
  <div>
    <div class="infoBox">
      <template>
        <u-tabs
          :list="titleList"
          :activeStyle="{
            color: '#3c9cff',
            fontWeight: 'bold',
            transform: 'scale(1.05)',
          }"
          @click="click"
          lineWidth="100rpx"
        ></u-tabs>
      </template>
      <div class="selectBox">
        <view class="left" v-for="(item, index) in fillterArr" :key="index">
          <div class="flexBox">
            <span
              :class="{
                activeFont: currentIndex === index,
                font: currentIndex !== index,
              }"
              @click="handleChosen(index)"
              >{{ item }}
            </span>

            <u-icon
              :name="currentIndex === index ? 'arrow-up' : 'arrow-down'"
              :color="currentIndex === index ? '#007bff' : '#3D3D3D'"
            ></u-icon>
          </div>
        </view>
        <view class="center"></view>
        <view class="right">
          <span class="flexBox">
            <u-icon
              name="search"
              size="40rpx"
              style="padding-left: 20rpx"
            ></u-icon>
            <u-icon
              name="list-dot"
              size="40rpx"
              style="padding-left: 20rpx"
            ></u-icon>
          </span>
        </view>
      </div>
      <ul class="popBox">
        <li
          v-for="(item1, index1) in popList.pop1"
          :key="'pop1' + index1"
          v-show="popIndex === 0"
        >
          <button
            @click="handleButton(index1)"
            :class="currentButtonIndex === index1 ? 'activeButton' : 'button'"
          >
            {{ item1 }}
          </button>
        </li>
        <li
          v-for="(item2, index2) in popList.pop2"
          :key="'pop2' + index2"
          v-show="popIndex === 1"
        >
          <button
            @click="handleButton(index2)"
            :class="currentButtonIndex === index2 ? 'activeButton' : 'button'"
          >
            {{ item2 }}
          </button>
        </li>
      </ul>
    </div>
    <view v-show="activeIndex === 0">
      <createCollections></createCollections>
    </view>
    <view v-show="activeIndex === 1">实物定制</view>
    <view v-show="activeIndex === 2">AI作画</view>
    <view v-show="activeIndex === 3">3D模型</view>
    <view v-show="activeIndex === 4">视觉艺术</view>
    <view v-show="activeIndex === 5">区块链查询</view>
    <footer>
      <showBox></showBox>
    </footer>
  </div>
</template>

<script>
import showBox from "@/components/showBox.vue";
import createCollections from "../../components/create/createCollections";
export default {
  name: "CreateIndex",
  data() {
    return {
      activeIndex: 0,
      titleList: [
        { name: "创建物品" },
        { name: "实物定制" },
        { name: "AI作画" },
        { name: "3D模型" },
        { name: "视觉艺术" },
        { name: "区块链查询" },
      ],
      fillterArr: ["类型", "载体"],
      popIndex: null,
      popList: {
        pop1: ["全部类型", "图文", "3D模型", "视频", "音频", "文件夹", "场景"],
        pop2: ["明信片", "相册", "星球", "电影胶片"],
      },
      currentIndex: null,
      currentButtonIndex: 0,
    };
  },
  methods: {
    click(n) {
      this.activeIndex = n.index;
    },
    handleChosen(index) {
      this.currentIndex = this.currentIndex === index ? null : index;
      this.popIndex = this.currentIndex;
      this.currentButtonIndex = 0;
    },
    handleButton(index) {
      this.currentButtonIndex = index;
    },
  },
  components: {
    showBox,
    createCollections,
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#FCFCFE");
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
}
.selectBox {
  display: flex;
  justify-content: space-around;
  border-top: 2rpx solid #d8d8d8;
  border-bottom: 2rpx solid #d8d8d8;
  padding: 20rpx 0;
  .flexBox {
    display: flex;
    .left {
      width: 160rpx;
    }
  }
  .center {
    width: 20%;
  }
  .right {
    float: right;
  }
}
.popBox {
  z-index: 10;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 98%;
  box-shadow: 20rpx 2rpx 10rpx #cfcfcf;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0;
  li {
    list-style: none;
  }
}
.font {
  color: #3d3d3d;
  font-size: 28rpx;
  padding: 0 10rpx 0 0;
}
.activeFont {
  color: #007bff;
  font-size: 28rpx;
  padding: 0 10rpx 0 0;
}
button {
  font-size: 24rpx;
  color: #007bff;
  background-color: #fff;
  border: 2rpx solid #007bff;
  border-radius: 32rpx;
  padding: 0 40rpx;
  margin: 10rpx;
}
.activeButton {
  color: #fff;
  background-color: #007bff;
}
</style>
