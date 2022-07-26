<template>
  <h4>当前的x值是:{{ x.y }}</h4>
  <button @click="x.y++">点我x+1</button>
  <hr />

  <h4>{{ person }}</h4>
  <h2>当前姓名为:{{ name }}</h2>
  <h2>当前年龄为:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改名字</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
// 用到啥引用啥
import { toRefs, shallowReactive, shallowRef } from 'vue'
// 组合API就是一些函数：ref,reactive,watch,computed...
export default {
  name: 'aDemo',
  setup () {
    // 数据
    // let person = reactive({
    let person = shallowReactive({//只考虑第一层数据的响应式，这里就改不了salary属性
      name: '章三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // 区别体现在传入的是不是对象类型，

    //🍄 1.传入基本类型没区别⭐️
    // let x = ref(0)
    // let x = shallowRef(0)

    //🍄 2.传入一个对象的话,ref内部会调用reactive,变成一个proxy代理对象，也是响应式的;
    // 而shallowRef不去处理对象类型的响应式数据,如果明确以后不会再修改x里面的y，就可以用shallowRef
    let x = shallowRef({//点击也不会改变
      y: 0
    })
    // let x = ref({
    //   y: 0
    // })
    console.log('******', x);

    return {
      person,
      ...toRefs(person),//展开运算符，因为对象里面不能直接套对象
      x,
    }
  },


}
</script>

<style>
</style>

