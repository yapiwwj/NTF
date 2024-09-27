<template>
  <div>
    <h1>{{ id }}</h1>
    <h2>{{ msg }}</h2>
    <button @click="handleChange">change</button>
  </div>
</template>

<script>
export default {
//   inheritAttrs: false,
  props: ["id", "msg"],
  emits:['change'],
  methods:{
    handleChange(){
        this.$emit('change',2333333333,'sbsbsbsbsbsbs')
    }
  }
};
</script>

<style></style>
