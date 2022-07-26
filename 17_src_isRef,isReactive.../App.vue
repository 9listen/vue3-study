<template>
  <div class="app">
    <h3>App组件</h3>
  </div>
</template>

<script>
import { reactive, toRefs, ref, isProxy, readonly, isReactive, isReadonly, isRef } from 'vue'
export default {
  name: 'App',
  setup () {
    let car = reactive({
      name: '奔驰',
      price: '40w',
    })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum));//true
    console.log(isReactive(car));//true
    console.log(isReadonly(car2));//true
    console.log(isProxy(car));//true
    console.log(isProxy(car2));//true
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