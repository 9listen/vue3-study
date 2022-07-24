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
import { ref, watch, reactive } from 'vue'
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
    let person = reactive({
      name: '章三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // 监视
    // watch(监视谁，监视的回调，监视的配置)
    //⭐️ 情况1 监视ref定义的响应式数据
    /* watch(sum, (newValue, oldValue) => {
       console.log('sum变了', newValue, oldValue);
     }, { immediate: true }) */

    //⭐️情况二：监视多个ref定义的响应式数据
    /* watch([sum, msg], (newValue, oldValue) => {
      console.log('sum或msg变了', newValue, oldValue);
    }) */

    // ⭐️💥💥情况三：1.监视reactive所定义的一个响应式数据的全部属性，注意：此处无法正确的获得oldValue
    // 2.若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
    /* watch(person, (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue);
    }, { deep: false }) //deep配置无效*/

    // ⭐️☄️情况四 监视reactive定义的响应式数据中的某个属性
    // 监视的那个属性得写成函数返回值💧
    /*  watch(() => person.name, (newValue, oldValue) => {
       console.log('person的name变化了', newValue, oldValue);
     }) */

    // ⭐️☄️情况五：监视reactive定义的响应式数据中的某些属性
    /*  watch([() => person.name, () => person.age], (newValue, oldValue) => {
       console.log('person的name或age变化了', newValue, oldValue);
     }) */

    // ⭐️特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('person的job变化了', newValue, oldValue);
    }, { deep: true })//此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效

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
