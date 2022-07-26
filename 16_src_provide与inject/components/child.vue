<template>
  <div class="child">
    <h3>我是child组件(子){{ x.name }}</h3>
    <Son />
  </div>
</template>

<script>
import Son from './son.vue'
import { inject } from 'vue'
export default {
  name: 'aChild',
  components: { Son },
  setup () {
    let x = inject('car')
    // console.log(x);
    return { x }
  }

}
</script>

<style>
  .child {
    background-color: skyblue;
    padding: 10px;
  }
</style>