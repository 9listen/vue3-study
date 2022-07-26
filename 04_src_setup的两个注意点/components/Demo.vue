<template>
  <!--🌟 vue3可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h3 v-show="person.name">姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
// 用到啥引用啥
import { reactive } from 'vue'
export default {
  name: 'aDemo',
  props: ['msg', 'school'],//, 'a'//传过来的属性不接收会有警告；没传a属性但是接收了，结果就是a=undefined
  emits: ['hello'],//消除警告⚠️：子组件还要告诉父组件：我知道你给我绑定一个 hello事件
  beforeCreate () {
    // console.log('---beforeCreate---');
  },
  setup (props, context) {
    // console.log('---setup---', this);
    console.log('---setup,props', props);
    console.log('---setup,context', context);
    console.log('---setup,context.attrs', context.attrs);//相当于vue2中的$attrs
    console.log('---setup,context.emit', context.emit);//触发自定义事件
    console.log('---setup,context.slots', context.slots);//插槽
    // 数据
    let person = reactive({
      name: '章三',
      age: 18,
    })
    function test () {
      context.emit('hello', 999)
    }
    return {
      // name,
      // age,
      // job,
      // hobby,
      // num,
      // 写法2
      person,
      test
    }
    // 写法2 返回一个渲染函数-自定义渲染内容（不常用）
    // return () => h('h1', '尚硅谷')
  },


}
</script>

<style>
</style>
