<template>
  <div>
    <ul>
      <li class="image">
        <u-cell-group>
          <u-cell title="头像" :isLink="true" arrow-direction="left"></u-cell>
        </u-cell-group>
        <!-- <image :src="securityInfo.image" alt="" /> -->
        <u--image
          :showLoading="true"
          :src="securityInfo.image"
          width="70rpx"
          height="70rpx"
          style="position: absolute; right: 70rpx; top: 10rpx"
        ></u--image>
      </li>
      <li class="username">
        <u-cell-group>
          <u-cell title="用户名" :isLink="true" arrow-direction="left"></u-cell>
        </u-cell-group>
        <p>{{ securityInfo.username }}</p>
      </li>
      <li class="phone">
        <u-cell-group>
          <u-cell title="手机号" :isLink="true" arrow-direction="left"></u-cell>
        </u-cell-group>
        <p>{{ hiddenPhoneNumber }}</p>
      </li>
      <li class="pay">
        <u-cell-group>
          <u-cell
            title="支付宝账号"
            :isLink="true"
            arrow-direction="left"
          ></u-cell>
        </u-cell-group>
        <p>{{ hiddenPayAccount }}</p>
      </li>
      <li class="sm">
        <u-cell-group>
          <u-cell
            title="实名认证"
            :isLink="true"
            arrow-direction="left"
            url="/pages/myUser/identity"
          ></u-cell>
        </u-cell-group>

        <!-- <div :class="{ none: securityInfo.authenticat === 0 }"></div>
        <div :class="{ done: securityInfo.authenticat === 1 }">
          <image src="../../static/img/check-circle.png" alt="" />
          <p>已认证</p>
        </div> -->
        <div class="none" v-if="securityInfo.authenticat === 0">
          <u--image
            :showLoading="true"
            src="../../static/img/circle.png"
            width="10rpx"
            height="10rpx"
            style="position: absolute; right: 160rpx; top: 38rpx"
          ></u--image>
          <p>未认证</p>
        </div>
        <div class="done" v-else>
          <u--image
            :showLoading="true"
            src="../../static/img/圆形.png"
            width="10rpx"
            height="10rpx"
            style="position: absolute; right: 160rpx; top: 38rpx"
          ></u--image>
          <p>已认证</p>
        </div>
      </li>
      <li class="password">
        <u-cell-group>
          <u-cell
            title="操作密码"
            :isLink="true"
            arrow-direction="left"
          ></u-cell>
        </u-cell-group>
        <div class="none" v-if="securityInfo.password === 0">
          <u--image
            :showLoading="true"
            src="../../static/img/圆形.png"
            width="10rpx"
            height="10rpx"
            style="position: absolute; right: 160rpx; top: 38rpx"
          ></u--image>
          <p>未设置</p>
        </div>
        <div class="done" v-else>
          <u--image
            :showLoading="true"
            src="../../static/img/check-circle.png"
            width="40rpx"
            height="40rpx"
            style="position: absolute; right: 170rpx; top: 22rpx"
          ></u--image>
          <p>已设置</p>
        </div>
      </li>
      <li class="username">
        <u-cell-group>
          <u-cell title="密保" :isLink="true" arrow-direction="left"></u-cell>
        </u-cell-group>
      </li>
      <li class="username">
        <u-cell-group>
          <u-cell
            title="账号注销"
            :isLink="true"
            arrow-direction="left"
          ></u-cell>
        </u-cell-group>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      securityInfo: {
        image: require("@/static/img/Avatar.png"),
        username: "Admin",
        phonenumber: "123456789",
        payaccount: "123456789",
        authenticat: 0, //0未认证，1已认证
        password: 1, //0未认证，1已认证
      },
    };
  },
  methods: {},
  computed: {
    hiddenPhoneNumber() {
      const visiblePart = this.securityInfo.phonenumber.substring(0, 3);
      const hiddenPart = "****";
      return `${visiblePart}${hiddenPart}`;
    },
    hiddenPayAccount() {
      const visiblePart = this.securityInfo.payaccount.substring(0, 3);
      const hiddenPart = "****";
      return `${visiblePart}${hiddenPart}`;
    },
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#FCFCFE");
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  li {
    list-style: none;
    position: relative;
    width: 90%;
    border-radius: 16rpx;
    border: 2rpx solid #cfcfcf;
    box-shadow: 10rpx 4rpx 10rpx #cfcfcf;
    margin: 20rpx auto;
  }
  .image {
    margin-top: 40rpx;
    image {
      position: absolute;
      right: 70rpx;
      top: 10rpx;
      width: 70rpx;
    }
  }
  .username,
  .phone,
  .pay,
  .sm,
  .password {
    p {
      position: absolute;
      right: 70rpx;
      top: 24rpx;
      color: #8a8d96;
      font-size: 26rpx;
      margin: 0;
    }
  }
  .sm,
  .password {
    .none {
      image {
        position: absolute;
        right: 170rpx;
        top: 38rpx;
        width: 10rpx;
      }
    }
    .done {
      image {
        position: absolute;
        right: 170rpx;
        top: 22rpx;
        width: 40rpx;
      }
    }
  }
}
</style>
