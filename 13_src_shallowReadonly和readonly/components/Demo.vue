<template>
  <h4>当前求和为:{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />

  <h2>当前姓名为:{{ name }}</h2>
  <h2>当前年龄为:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改名字</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
// 用到啥引用啥
import { toRefs, reactive, ref, readonly, shallowReadonly } from 'vue'
// 组合API就是一些函数：ref,reactive,watch,computed...
export default {
  name: 'aDemo',
  setup () {
    // 数据
    let sum = ref(0)
    let person = reactive({
      // let person = shallowReactive({//只考虑第一层数据的响应式，这里就改不了salary属性
      name: '章三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // 场景：别人在别人的组件里面定义了一个响应式数据，把数据交给你，让你别改，readonly加工一下生成新的，去用新的
    // 🌟接收一个响应式数据，保护person的响应式数据只读
    // person = readonly(person)//都不能改
    sum = readonly(sum)//基本数据类型没有层次，用readonly就可以了
    person = shallowReadonly(person)//浅只读，只有第一层数据不能改，salary可以改

    return {
      person,
      ...toRefs(person),//展开运算符，因为对象里面不能直接套对象
      sum,

    }
  },


}
</script>

<style>
</style>

