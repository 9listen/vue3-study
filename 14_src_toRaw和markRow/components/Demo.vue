<template>
  <h4>当前求和为:{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />

  <h2>当前姓名为:{{ name }}</h2>
  <h2>当前年龄为:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <h2 v-show="person.car">座驾信息:{{ person.car }}</h2>
  <button @click="name += '~'">修改名字</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="person.car.price++">换价格</button>
  <button @click="changePrice">改变价格</button>
</template>

<script>
// 用到啥引用啥
import { toRefs, reactive, ref, toRaw, markRaw } from 'vue'
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
      },
      //   car: {}//方法1
    })
    function showRawPerson () {
      //   console.log(person);
      const p = toRaw(person)
      p.age++//页面不会发生变化，只是普通对象，不是响应式对象
      console.log(p);
      //   
      //   const sum1 = toRaw(sum)
      //   console.log(sum1);
    }
    function addCar () {
      let car = { name: '奔驰', price: 40 }
      person.car = markRaw(car)//确实改了，但是car和price，vue不做响应式了，点击后页面没反应了
      //🌼往person身上追加东西，proxy实现的响应式(数据劫持)，可以捕获对perosn响应式对象任何一个属性的任何一个操作
    }
    function changePrice () {
      person.car.price++
      console.log(person.car.price);//控制台可以打印，不是响应式
    }
    return {
      ...toRefs(person),//展开运算符，因为对象里面不能直接套对象
      sum,
      person,
      showRawPerson,
      addCar,
      changePrice,
    }
  },
  /* 
  ● toRaw： 
    ○ 作用：将一个由reactive生成的响应式对象转为普通对象。🌸有去有回
    ○ 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
  ● markRaw：
    ○ 作用：标记一个对象，使其永远不会再成为响应式对象。
    ○ 应用场景: 
      ⅰ. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
      ⅱ. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
  */

}
</script>

<style>
</style>

