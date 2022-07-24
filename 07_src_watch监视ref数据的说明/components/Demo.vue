<template>
  <!--🌟 vue3可以没有根标签 -->
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点击sum+1</button>
  <div>------------------</div>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>当前姓名为:{{ person.name }}</h2>
  <h2>当前年龄为:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}K</h2>
  <button @click="person.name += '~'">修改名字</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
// 用到啥引用啥
import { ref, watch } from 'vue'
// 组合API就是一些函数：ref,reactive,watch,computed...
export default {
  name: 'aDemo',
  //vue2写法
  watch: {
    // 写法1
    /* sum (newValue, oldValue) {
      console.log('sum的值变化了', newValue, oldValue);
    } */
    // 写法2
    /*   sum: {
        immediate: true,//上来就监听一次
        deep: true,//深度监听
        handler (newValue, oldValue) {
          console.log('sum的值变化了', newValue, oldValue);
        }
      } */
  },
  setup () {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = ref({
      name: '章三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    watch(sum, (newValue, oldValue) => {
      console.log('sum的值变化', newValue, oldValue);
    })
    console.log(sum);//RefImpl{...}实例对象，基本类型，监听的时候直接写
    console.log(msg);//RefImpl{...}实例对象，基本类型
    console.log(person);//RefImpl{...}实例对象，求助了reactive，变成了reactive所生成的代理对象，监听的时候
    // 1.person.value//2.deep:true
    return {
      sum,
      msg,
      person
    }
  },


}
</script>

<style>
</style>
