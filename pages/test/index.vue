<template>
  <div>
    <test :id="id" :msg="msg" @change="handleChange"></test>
  </div>
</template>

<script>
import test from "../../components/test/test";
export default {
  data() {
    return {
      id: 3333333333,
      msg: "dsdhsj",
    };
  },
  methods: {
    handleChange(id, msg) {
      this.id = id;
      this.msg = msg;
    },
  },
  components: {
    test,
  },
};
</script>

<style></style>
