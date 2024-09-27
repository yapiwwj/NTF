<template>
  <div>
    <ul class="displayBox">
      <li>
        <div
          class="treasureBox"
          v-for="(item, index) in collectionsInfo.hasPay"
          :key="item.id"
          @click="toShow(item, index)"
        >
          <!-- <image :src="item.image" alt="" /> -->
          <u--image
            :showLoading="true"
            :src="item.image"
            :lazy-load="true"
            width="100%"
            height="150px"
            radius=" 8px 8px 0 0"
          ></u--image>
          <h5>{{ item.name }}</h5>
          <footer>
            <p :class="item.source === '我的' ? 'my' : 'code'">
              编号:{{ item.code }}
            </p>

            <p class="source">{{ item.source }}</p>
          </footer>
        </div>
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
  computed: {
    ...mapState("collections", ["collectionsInfo"]),
  },
  methods: {
    toShow(item, index) {
      let modelPath = encodeURIComponent(item.model);
      // console.log(modelPath);
      if (index === 0) {
        uni.navigateTo({
          url:
            "/pages/myUser/threeLookCC?info=" +
            JSON.stringify(item) +
            "&modelPath=" +
            encodeURIComponent(modelPath),
        });
      } else {
        uni.navigateTo({
          url:
            "/pages/myUser/threeLookVase?info=" +
            JSON.stringify(item) +
            "&modelPath=" +
            encodeURIComponent(modelPath),
        });
      }
    },
  },
  // created() {
  //   console.log(this.collectionsInfo.hasPay);
  // },
};
</script>

<style lang="less" scoped>
.displayBox {
  padding: 0;
  margin-top: 10px;
  li {
    display: flex;
    justify-content: flex-start;
    // margin-left: 0.9375rem;
    flex-wrap: wrap;
    .treasureBox {
      width: 40%;
      // width: 10.3125rem;
      border-radius: 16px 16px 8px 8px;
      box-shadow: 10px 5px 5px #cfcfcf;
      // margin-bottom: 0.625rem;
      margin: 0 5% 10px 5%;
      image {
        width: 100%;
        border-radius: 16px 16px 0 0;
      }
      h5 {
        color: #3d3d3d;
        font-size: 14px;
        padding-left: 5px;
        margin: 0;
      }
      // p {
      //   color: #b1b1b1;
      //   font-size: 0.875rem;
      //   margin: 0.3125rem 0;
      // }
      footer {
        .source {
          font-size: 13px;
          color: #8c8c8c;
          padding-left: 5px;
          margin: 5px 0 5px 0;
        }
      }
    }
  }
}
.my {
  font-size: 13px;
  color: #ffff;
  background: linear-gradient(to right, #ff6f00, #edbf0a);
  margin: 10px 0 5px 0;
  padding-left: 5px;
}
.code {
  font-size: 13px;
  color: #ffff;
  background: linear-gradient(to right, #004aff, #d1e2fe);
  margin: 10px 0 5px 0;
  padding-left: 5px;
}
</style>
