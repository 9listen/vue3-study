<template>
  <div class="app">
    <h3>App组件,祖，{{ name }}---{{ price }}</h3>
    <Child />
  </div>
</template>

<script>
import Child from './components/child.vue'
import { reactive, toRefs, provide } from 'vue'
export default {
  name: 'App',
  components: { Child },
  setup () {
    let car = reactive({
      name: '奔驰',
      price: '40w',
    })
    provide('car', car)//自己起的名字，数据--给自己的后代组件传递数据
    return {
      ...toRefs(car),
    }
  }
}
</script>

<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>