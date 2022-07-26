<template>
  <div class="son">
    <h3>我是son组件(子),{{ car.name }}---{{ car.price }}</h3>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'aSon',
  setup () {
    let car = inject('car')
    // console.log(car)//拿到了一个响应式数据
    return {
      car
    }
  }
}
</script>

<style>
  .son {
    background-color: yellow;
    padding: 10px;
  }
</style>