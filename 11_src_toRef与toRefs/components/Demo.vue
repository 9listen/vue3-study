<template>
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
import { reactive, toRef, toRefs } from 'vue'
// 组合API就是一些函数：ref,reactive,watch,computed...
export default {
  name: 'aDemo',
  setup () {
    // 数据
    let person = reactive({
      name: '章三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    //💥💥💥 toRef,toRefs简化模板代码💥💥💥
    //🌟 例子，其实就相当于把person.name的值赋给name1，改变name1不会返回去改变person.name的值
    const name1 = person.name
    console.log('%%%', name1);
    //🌟 toRef帮你把一个不是ref的东西变成ref对象--语雀截图
    const name2 = toRef(person, 'name')//这里name2--->RefImpl{...value}--->person.name中间是链接的
    console.log('@@@', name2);
    //🌟 toRefs是批量处理一个对象里的所有属性，无需第二个参数
    const x = toRefs(person)
    console.log('###', x);
    // 新对象x里面也有person里面的key,但是value都替换成RefImpl，这里面的key:name,age,salary就可以拆分出来交
    // 给模板，因为它是一个ref响应式对象
    return {
      //🌈 响应式写法toRef,用toRef存在引用关系
      /*person,//把person，return出去，把要用到的属性单独拿出来
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary') */

      //响应式写法toRefs，适用于处理所有属性，无须第二个参数
      person,
      ...toRefs(person)//展开运算符，因为对象里面不能直接套对象


      //ref写法：读取出来了name,,字符串，打包成了新的ref，页面点击的时候person里面的name也不改变   
      /*  name: ref(person.name),
       age: ref(person.age),
       salary: ref(person.job.j1.salary) */

      /* 🌼非响应式写法
      name: person.name,
      age: person.age,
      salary: person.job.j1.salary,
      相当于是固定值，
      name:'章三'
      age:18
      salary:20
       */
    }
  },


}
</script>

<style>
</style>

