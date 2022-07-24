<template>
  <!--🌟 vue3可以没有根标签 -->
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点击sum+1</button>
  <hr />
  <!-- 鼠标点击的时候能拿到鼠标坐标 -->
  <h2>当前点击时鼠标坐标为:x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
// 用到啥引用啥
import { ref } from 'vue'
import usePoint from '../hooks/usePoint'
// 组合API就是一些函数：ref,reactive,watch,computed...
export default {
  name: 'aDemo',
  setup () {
    // 数据
    let sum = ref(0)
    let point = usePoint()
    return {
      sum,
      point
    }
  },

}
</script>

<style>
</style>
