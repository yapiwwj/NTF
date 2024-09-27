<template>
  <div>
    <header></header>
    <div class="background">
      <image src="../../static/img/background.png" alt="" />
    </div>
    <ul class="infoBox">
      <li>
        <!-- <div class="button"> -->
        <!-- <button style="float:right ;" @click="pop()" >创作</button> -->

        <!-- </div> -->
        <view class="button">
          <view style="width: 70%"></view>
          <button style="margin: 0" @click="open">创作</button>
        </view>
      </li>
      <li class="titleEdit">
        <u-icon
          name="edit-pen-fill"
          size="15"
          color="#8388b4"
          style="padding: 10rpx"
          @click="changeTitle"
        ></u-icon>
        <div class="input">
          <input
            ref="inputTitle"
            v-model="value"
            style="
               {
                'background-color':inputbackground ;
              }
            "
            @focus="handleFocus"
            @blur="handleblur"
          />
        </div>
      </li>
      <li class="backimage" v-if="selectButtonIndex === 1">
        <u--image
          :showLoading="true"
          :src="image"
          :lazy-load="true"
          width="100%"
          radius=" 32rpx"
        ></u--image>
        <div class="textareaBox">
          <!-- <span>在此写下您的寄语...</span> -->
          <textarea
            name=""
            id=""
            v-model="textarea"
            placeholder="请在此写下您的寄语..."
            style="padding-left: 40rpx"
          ></textarea>
        </div>
      </li>
      <li class="frontimage" v-if="selectButtonIndex === 0">
        <u--image
          :showLoading="true"
          :src="image"
          :lazy-load="true"
          width="100%"
          radius=" 32rpx"
        ></u--image>
        <div>
          <u-upload
            class="upload"
            :action="action"
            :file-list="fileList"
            style="opacity: 0.5"
          ></u-upload>
          <div class="font">
            <p>点击可替换图片</p>
          </div>
        </div>
      </li>
      <li class="selectBox">
        <div class="select" v-for="(item, index) in selectArr" :key="index">
          <button
            :class="{
              Button: selectButtonIndex !== index,
              activeButton: selectButtonIndex === index,
            }"
            @click="selectButton(index)"
          >
            {{ item }}
          </button>
        </div>
      </li>
    </ul>
    <footer>
      <view class="popShow">
        <uni-popup ref="popup" type="bottom" background-color="#fff">
          <u-icon
            style="margin: 20rpx"
            name="arrow-left"
            color="#2979ff"
            size="22"
            @click="close"
          ></u-icon>
          <div class="textBox">
            <text class="text">选择份数</text>
          </div>
          <div>
            <u-number-box
              v-model="selectNumber"
              button-size="36"
              color="#ffffff"
              bgColor="#3c9cff"
              iconStyle="color: #fff"
              style="margin: 20rpx 0"
            ></u-number-box>
          </div>
          <div class="tishi">
            <text style="font-size: 28rpx">确定创作后永久上链，不可篡改</text>
          </div>
          <u-button
            type="primary"
            text="确定"
            style="width: 80%; border-radius: 16rpx; margin-bottom: 20rpx"
            @click="close"
          ></u-button>
        </uni-popup>
      </view>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createId: "",
      num: 1,
      show: false, //展示弹窗
      selectNumber: 1,
      saveNumber: 0,
      selectArr: ["正面", "背面"],
      selectButtonIndex: 1, //默认选择背面
      image: "",
      value: "", //input标题双向绑定
      textarea: "",
      action: "", //上传至服务器
      inputBackground: "rgba(255, 255, 255, 0)", //设置input输入框的背景不透明度
    };
  },
  methods: {
    open() {
      this.selectNumber = 1;
      this.$refs.popup.open("bottom");
    },

    // 关闭并且上链
    close() {
      this.saveNumber = this.selectNumber;
      // console.log(this.saveNumber);可打印
      this.$refs.popup.close();
      this.selectNumber = 1;
      //上链
      this.getLian();
    },
    async getLian() {
      const res = await this.$api.create.createCollection(
        this.image,
        this.createId,
        this.saveNumber
      );
      if (res.code === '200') {
        console.log(res.data);
      } else {
        console.log(err);
      }
    },

    toCreate() {
      this.selectButtonIndex === 1;
      this.$router.push("/create");
    },
    selectButton(index) {
      this.selectButtonIndex = index;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    handleInfo(createId, image, name) {
      //处理信息
      this.createId = createId;
      this.image = image;
      this.value = name;
      console.log(this.createId, this.image, this.value);
    },
    changeTitle() {
      //修改标题
      this.inputBackground =
        this.inputBackground === "rgba(255, 255, 255, 0)"
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(255, 255, 255, 0)";
    },
    handleFocus() {
      //聚焦
      this.inputBackground = "rgba(255, 255, 255, 0.5)";
    },
    handleblur() {
      //失焦
      this.inputBackground = "rgba(255, 255, 255, 0)";
    },
  },
  mounted() {
    // const { image, name } = this.$route.query;
    // this.handleInfo(image, name);
  },
  onLoad(options) {
    const { createId, image, name } = options;
    this.handleInfo(createId, image, name);
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
li {
  list-style: none;
}
.background {
  image {
    z-index: -10;
    position: absolute;
    bottom: 20rpx;
    width: 100%;
    height: 100%;
  }
}
.button {
  display: flex;
  justify-content: space-between;
  button {
    color: #fff;
    font-size: 28rpx;
    border: none;
    border-radius: 16rpx;
    background-color: #3c9cff;
    padding: 0 50rpx;
  }
}
.infoBox {
  width: 90%;
  margin: 20rpx auto;
  li {
    .input {
      display: inline-block;
      input {
        color: #8388b4;
        border: none;
        background: rgba(#fff, 0);
      }
    }
    image {
      width: 100%;
      border-radius: 32rpx;
      margin: 20rpx 0;
    }
  }
  li:nth-child(2) {
    padding-left: 20rpx;
  }
  .backimage {
    position: relative;
    .textareaBox {
      position: absolute;
      top: 40rpx;
      left: 30rpx;
      width: 90%;
      height: 100%;
      textarea {
        overflow: auto;
        word-break: break-all;
        width: 95%;
        height: 75%;
        font-size: 28rpx;
        color: #fff;
        border: none;
        border-radius: 16rpx;
        background-color: rgba(#fff, 0.3);
      }
    }
  }
  .frontimage {
    position: relative;
    image {
      opacity: 0.2;
    }
    .upload {
      position: absolute;
      top: 20%;
      left: 38%;
    }
    .font {
      position: absolute;
      top: 60%;
      width: 100%;
      text-align: center;
      p {
        color: #fff;
        font-size: 24rpx;
        opacity: 0.8;
        margin: 20rpx;
      }
    }
  }
  .selectBox {
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 40rpx auto;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 10rpx;
    .select {
      .Button {
        color: #8388b4;
        font-size: 24rpx;
        border: none;
        // border-radius: 16px;
        background-color: rgba(#ffff, 0);
        padding: 0 30rpx;
      }
      .activeButton {
        color: #fff;
        font-size: 24rpx;
        border: none;
        border-radius: 32rpx;
        background-color: #3c9cff;
        padding: 0 40rpx;
      }
    }
  }
}
footer {
  display: flex;
  align-items: center;
  .title {
    width: 100%;
    text-align: center;
    border-bottom: 4rpx solid #a9c2ff;
    padding-bottom: 20rpx;
  }
  .promot {
    font-size: 28rpx;
    width: 100%;
    text-align: center;
    margin-top: 40rpx;
  }
  div {
    text-align: center;
    button {
      color: #fff;
      background-color: #004aff;
      border: none;
      border-radius: 16rpx;
      padding: 10rpx 140rpx;
    }
  }
}
.van-stepper--round .van-stepper__plus {
  background-color: #004aff;
}
.titleEdit {
  display: flex;
}
button::after {
  border: none;
}
.u-upload {
  clear: both;
}
.textBox {
  padding-bottom: 20rpx;
  border-bottom: 2rpx solid #3c9cff;
}
.u-number-box {
  justify-content: center;
}
.tishi {
  padding: 20rpx 0;
}
</style>
