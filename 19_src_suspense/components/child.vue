<template>
  <div class="child">
    <h3>我是child组件</h3>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'aChild',
  setup () {
    let sum = ref(0)
    // return { sum }
    return new Promise((resolve,) => {
      setTimeout(() => {
        resolve({ sum })
      }, 1000)
    })
  }

}
</script>

<style>
  .child {
    background-color: skyblue;
    padding: 10px;
  }
</style>