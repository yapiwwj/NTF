<template>
  <div class="userBox">
    <header class="background"></header>
    <!-- 基本信息 -->
    <div class="infoBox">
      <div class="functionBox">
        <u-icon name="scan" size="40rpx" style="margin: 20rpx 0"></u-icon>
        <u-icon
          name="bell"
          size="20px"
          style="margin: 20rpx 30rpx 20rpx 20rpx"
        ></u-icon>
      </div>
      <div class="whiteBox">
        <header class="userBox">
          <!-- <image src="../../static/img/Avatar.png" alt="" /> -->
          <u--image
            :showLoading="true"
            src="../../static/img/Avatar.png"
            :lazy-load="true"
            width="160rpx"
            height="160rpx"
            style="margin-left: 80rpx;"
          ></u--image>
          <span class="button">
            <u-button
              text="编辑资料"
              style="border-radius: 64rpx; padding: 0 40rpx"
            ></u-button>
          </span>
        </header>
        <div class="baseInfo">
          <h3>{{ info.username }}</h3>
          <p class="id">ID:{{ info.id }} | IP属地:{{ info.ip }}</p>
          <p class="address">区块链地址:{{ info.address }}</p>
        </div>
      </div>
    </div>
    <userFunction></userFunction>
    <!-- 藏品信息盒 -->
    <view class="collectionsBox">
      <header class="title">
        <span
          class="titlebox"
          v-for="(item, index) in collectionList"
          :key="index"
          @click="changeTab(index)"
          >{{ item.name }}
          <span v-if="index === 0">{{ num }}</span>
          <div class="line" v-show="activeIndex === index"></div>
        </span>
      </header>
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
              style="padding-left: 20px"
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
        <li
          v-for="(item3, index3) in popList.pop3"
          :key="'pop3' + index3"
          v-show="popIndex === 2"
        >
          <button
            @click="handleButton(index3)"
            :class="currentButtonIndex === index3 ? 'activeButton' : 'button'"
          >
            {{ item3 }}
          </button>
        </li>
      </ul>
    </view>
    <view v-show="activeIndex === 0"><myCollections></myCollections></view>
    <view v-show="activeIndex === 1"><records></records></view>
    <ShowBox></ShowBox>
  </div>
</template>

<script>
import userFunction from "../../components/user/userFunction";
import myCollections from "../../components/user/myCollections";
import records from "../../components/user/records";
import ShowBox from "../../components/showBox";
import { mapState } from "vuex";
export default {
  name: "SettingIndex",
  data() {
    return {
      info: {
        username: "Admin",
        id: 30328323,
        ip: "浙江",
        address: "8dsdhjjds89—dadsddshdkrjkr47348",
      },
      collectionList: [
        { name: "我的藏品", path: "/usercenter/myCollections" },
        { name: "藏品记录", path: "/usercenter/records" },
      ],
      fillterArr: ["类型", "时间", "来源"],
      popList: {
        pop1: ["全部类型", "图文", "3D模型", "视频", "音频", "文件夹", "场景"],
        pop2: ["2024", "2023", "2022", "2021", "2020"],
        pop3: ["我的", "xx文化"],
      },
      activeIndex: 0, //下划线激活
      currentIndex: null,
      popIndex: null,
      currentButtonIndex: 0, //当前按钮索引，默认第一个
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
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
  computed: {
    ...mapState("collections", ["collectionsInfo"]),
    num() {
      //藏品数量
      return this.collectionsInfo.hasPay.length;
    },
  },
  components: {
    userFunction,
    ShowBox,
    myCollections,
    records,
  },
  // mounted() {
  //   document
  //     .querySelector("body")
  //     .setAttribute("style", "background-color:#FCFCFE");
  // },
};
</script>

<style lang="scss" scoped>
	.page{
		background-color: #FCFCFE;
	}
.background {
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 20%;
  background-image: url(../../static/img/Mesh-20.png);
  background-size: 100% 100%;
}
.infoBox {
  .functionBox {
    display: flex;
    justify-content: flex-end;
  }
  // margin-top: 10px
  .whiteBox {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 20rpx 10rpx 10rpx #cfcfcf;
    border-radius: 32rpx 32rpx 16rpx 16rpx;
    .userBox {
      display: flex;
      justify-content: space-between;
      image {
        width: 20%;
        padding: 20rpx 40rpx;
      }
      .button {
        padding-top: 5%;
        padding-right: 5%;
      }
    }
    .baseInfo {
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      h3 {
        color: #3d3d3d;
        margin: 10rpx 5%;
      }
      .id,
      .address {
        color: #8c8c8c;
        font-size: 24rpx;
        margin: 4rpx 5%;
      }
      .address {
        padding-bottom: 20rpx;
      }
    }
  }
}
.collectionsBox {
  .title {
    display: flex;
    justify-content: flex-start;
    width: 85%;
    // margin-left: 26px;
    .titlebox {
      margin: 0 20rpx;
      .line {
        border: 2rpx solid #004aff;
        margin-top: 10rpx;
      }
    }
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
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0;
    li {
      list-style: none;
    }
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
