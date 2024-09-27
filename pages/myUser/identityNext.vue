<template>
  <div>
    <div class="infoBox">
      <p>请输入您的身份证件</p>
      <div class="inputBox" style="margin: 0 auto">
        <!-- <van-field
          v-model="name"
          label="请输入姓名"
          style="background-color: #f6f6f6; margin: 15px 0; border-radius: 8px"
        /> -->
        <u--input
          placeholder="请输入姓名"
          v-model="name"
          style="background-color: #f6f6f6; margin: 20rpx 0; border-radius: 16rpx"
          @change="change"
        ></u--input>
        <view>
          <u-keyboard
            ref="uKeyboard"
            mode="card"
            :show="show"
            @confirm="confirm"
            @cancel="cancel"
            @change="valChange"
            @backspace="backspace"
          ></u-keyboard>
          <u--input
            placeholder="请输入身份证件"
            v-model="id"
            style="
              background-color: #f6f6f6;
              margin: 20rpx 0;
              border-radius: 16rpx;
            "
            @change="change"
            @focus="show = true"
          ></u--input>
        </view>
      </div>
      <footer style="text-align: center; margin-top: 20rpx">
        <u-button
          type="primary"
          text="下一步"
          style="
            width: 90%;
            background: #3c9cff;
            border-radius: 16rpx;
            font-size: 28rpx;
            margin-top: 40rpx;
          "
          @click="next"
        ></u-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      id: "",
      show: false,
    };
  },
  methods: {
    change(e) {
      // console.log("change", e);
    },
    // 按键被点击(点击退格键不会触发此事件)
    valChange(val) {
      // 将每次按键的值拼接到value变量中，注意+=写法
      this.id += val;
    },
    // 退格键被点击
    backspace() {
      // 删除value的最后一个字符
      if (this.id.length) this.id = this.id.substr(0, this.id.length - 1);
    },
    confirm() {
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    next() {
      uni.navigateTo({
        url: "/pages/myUser/success",
      });
    },
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#FCFCFE");
  },
};
</script>

<style lang="less" scoped>
.infoBox {
  display: flex;
  flex-direction: column;
  p {
    color: #999999;
    font-size: 28rpx;
    text-align: center;
    margin-bottom: 60rpx;
  }
  .inputBox {
    width: 90%;
  }
}
</style>
