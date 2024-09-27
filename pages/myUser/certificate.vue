<template>
  <div>
    <view class="bg">
      <image
        class="certificate"
        src="../../static/img/certificate.png"
        alt=""
      ></image>
      <ul v-if="info.source==='我的'">
        <li class="username">
          <header>Admin</header>
          <p>收藏者</p>
        </li>
        <li class="name">
          <header>{{ info.name }}</header>
          <p>藏品名称</p>
        </li>
        <li class="name">
          <header>{{ info.code }}</header>
          <p>编号</p>
        </li>
        <li class="name">
          <header>{{ info.source }}</header>
          <p>我的</p>
        </li>
        <li class="name">
          <header>{{ info.time }}</header>
          <p class="data">发证日期</p>
        </li>
      </ul>
      <ul v-else>
        <li class="username">
          <header>Admin</header>
          <p>收藏者</p>
        </li>
        <li class="name">
          <header>{{ info.name }}</header>
          <p>藏品名称</p>
        </li>
        <li class="name">
          <header>{{ info.code }}</header>
          <p>编号</p>
        </li>
        <li class="name">
          <header>{{ info.source }}</header>
          <p>我的</p>
        </li>
        <li class="name">
          <header>{{ info.orderNumber }}</header>
          <p class="data">订单号</p>
        </li>
        <li class="name">
          <header>{{ info.paytime }}</header>
          <p class="data">发证日期</p>
        </li>
      </ul>
      <footer>xx文化发证</footer>
    </view>
    <u-button type="primary" text="下载证书" style="width: 90%;border-radius: 8px;"></u-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null,
    };
  },
  onLoad(e) {
    this.info = JSON.parse(e.value);
  },
  mounted(){
  }
};
</script>

<style lang="scss" scoped>
* {
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    margin-bottom: 5px;
  }
}
.bg {
  position: relative;
  width: 90%;
  margin: 10px auto;
  .certificate {
    width: 100%;
    height: 1100rpx;
  }
  ul {
    position: absolute;
    top: 48%;
    left: 5%;
    .username {
      color: #fff;
      header {
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid #d6dee0;
      }
      p {
        color: hwb(196 84% 12%);
        font-size: 10px;
      }
    }
    .name {
      color: #fff;
      header {
        font-size: 14px;
        font-weight: 600;
        border-bottom: 1px solid #d6dee0;
      }
      p {
        color: hwb(196 84% 12%);
        font-size: 10px;
      }
      .data {
        color: #fff;
      }
    }
  }
  footer {
    position: absolute;
    bottom: 1%;
    right: 5%;
    font-size: 14px;
    color: #fff;
  }
}
</style>
