<template>
  <h2>我是test组件</h2>
  <h2>当前点击时鼠标坐标为:x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import usePoint from '../hooks/usePoint'
import { ref } from 'vue'
export default {
  name: 'aTest',
  setup () {
    let name = ref('tom')
    const point = usePoint()
    return {
      point,
      name
    }
  }
}
</script>

<style>
</style>