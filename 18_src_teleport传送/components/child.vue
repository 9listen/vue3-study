<template>
  <div class="child">
    <h3>我是child组件</h3>
    <Son />
  </div>
</template>

<script>
import Son from './son.vue'
export default {
  name: 'aChild',
  components: { Son },

}
</script>

<style>
  .child {
    background-color: skyblue;
    padding: 10px;
  }
</style>