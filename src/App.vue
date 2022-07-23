<template>
  <!--🌟 vue3可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  // vue3写法
  // 此处测试一下setup,暂时不考虑响应式的问题
  setup () {
    // 数据
    let name = ref('章三')
    let age = ref(18)
    function changeInfo () {
      name.value = '李四',
        age.value = 48
      console.log(name, age);
    }
    // 写法1:返回一个对象-常用
    return {
      name,
      age,
      changeInfo,
    }
    // 写法2 返回一个渲染函数-自定义渲染内容（不常用）
    // return () => h('h1', '尚硅谷')
  },






}
</script>

<style>
</style>
