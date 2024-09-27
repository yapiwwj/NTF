<template>
  <div>
    <ul v-for="item in collectionsInfo.hasPay" :key="item.id">
      <li class="infoBox">
        <div class="image">
          <!-- <image :src="item.image" alt="" /> -->
          <u--image
            :showLoading="true"
            :src="item.image"
            :lazy-load="true"
            width="100%"
            height="100px"
            radius=" 8px"
            style="margin-right: 10px;"
          ></u--image>
        </div>
        <div class="info">
          <ul>
            <li>名称</li>
            <li>{{ item.name }}</li>
          </ul>
          <ul>
            <li>来源</li>
            <li>{{ item.source }}</li>
          </ul>
          <ul>
            <li>编号</li>
            <li
              :class="{
                my: item.source === '我的',
                code: item.source !== '我的',
              }"
              style="color: #fff"
            >
              {{ item.code }}
            </li>
          </ul>
          <ul v-if="item.time">
            <li>创作时间</li>
            <li>{{ item.time }}</li>
          </ul>
          <ul v-if="item.type">
            <li>创作类型</li>
            <li>{{ item.type }}</li>
          </ul>
          <ul v-if="item.carrier">
            <li>创作载体</li>
            <li>{{ item.carrier }}</li>
          </ul>
          <ul v-if="item.paytime">
            <li>交易时间</li>
            <li>{{ item.paytime }}</li>
          </ul>
          <ul v-if="item.orderNumber">
            <li>交易单号</li>
            <li>{{ item.orderNumber }}</li>
          </ul>
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
};
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}
ul{
  padding: 0;
}
.infoBox {
  display: flex;
  width: 95%;
  margin: 10px auto;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  box-shadow: 5px 2px 5px #cfcfcf;

  .image {
    width: 30%;
    image {
      width: 80%;
      border-radius: 16px;
      padding: 5px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 68%;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        color: #8c8c8c;
        font-size: 14px;
        padding: 1px 0;
      }
    }
  }
}
.my {
  font-size: 13px;
  color: #ffff;
  border-radius: 3px;
  background: linear-gradient(to right, #ff6f00, #edbf0a);
  padding: 0 5px;
}
.code {
  font-size: 13px;
  color: #ffff;
  border-radius: 3px;
  background: linear-gradient(to right, #004aff, #d1e2fe);
  padding: 0 5px;
}
</style>
