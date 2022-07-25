<template>
  <!--🌟 vue3可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>a的值是:{{ a }}</h3>
  <button @click="sayHello">你好vue3</button>
  <button @click="sayWelcome">vue2配置的welcome</button>
  <button @click="test1">测试一下在vue2的配置中去读取vue3的数据、方法</button>
  <button @click="test2">
    测试一下在vue3的setup配置中去读取vue2中的数据、方法
  </button>
</template>

<script>
// import { h } from 'vue'
export default {
  name: 'App',
  // vue2写法
  data () {
    return {
      sex: '男',
      a: 100,
    }
  },
  methods: {
    sayWelcome () {
      alert('欢迎欢迎')
    },
    test1 () {
      console.log(this.name, 'vue2中调用来自vue3的数据');
      console.log(this.age);
      console.log(this.sex);
      console.log(this.sayHello);
    }
  },
  // vue3写法
  // 此处测试一下setup,暂时不考虑响应式的问题
  setup () {
    // 数据
    let name = '章三'
    let age = 18
    // let a = 200
    // // 方法
    function sayHello () {
      alert(`我叫${name},我${age}岁了`)
    }
    function test2 () {
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sayWelcome, '来自vue2的数据');//undefined
      console.log(this.sex, '来自vue2的数据');//undefined
    }
    // 🔥🔥vue2里面可以读取vue3的数据，vue3里面不可以读取vue2的数据
    // 写法1:返回一个对象-常用
    return {
      name,
      age,
      sayHello,
      test2,
      // a,
    }
    // 写法2 返回一个渲染函数-自定义渲染内容（不常用）
    // return () => h('h1', '尚硅谷')
  },






}
</script>

<style>
</style>
