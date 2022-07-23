<template>
  <!--🌟 vue3可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h3 v-show="person.name">姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3>职业:{{ person.job.type }}</h3>
  <h3>薪水:{{ person.job.salary }}</h3>
  <h3>c:{{ person.job.a.b.c }}</h3>
  <h3>爱好:{{ person.hobby }}</h3>
  <!-- <h3>{{ num }}</h3> -->
  <button @click="changeInfo">修改人的信息</button>
  <!-- 直接对属性进行修改 -->
  <h3 v-show="person.sex">性别：{{ person.sex }}</h3>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
// 用到啥引用啥
import { reactive } from 'vue'
export default {
  name: 'App',
  // vue3写法
  // 此处测试一下setup,暂时不考虑响应式的问题
  setup () {
    // 数据
    // 🌼写法1 分开写
    /*  let name = ref('章三')
     let age = ref(18)
     //  let job = ref({
     //    type: '前端工程师',
     //    salary: '8500'
     //  }) 
     let job = reactive({
       type: '前端工程师',
       salary: 8500,
       a: {
         b: {
           c: 666
         }
       }
     })
     let hobby = reactive(['砍树', '英语', '不忘初心']) */
    //🌼  写法2 全部写在对象里面，只写一层reactive
    let person = reactive({
      name: '章三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: 8500,
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: reactive(['砍树', '英语', '不忘初心'])
    })
    //⭐️ reactive定义一个对象类型的响应式数据，基本类型的得用ref
    // let num = reactive(111)

    function changeInfo () {
      //#region
      // name.value = '李四'
      // age.value = 48
      // console.log(name, age);

      //⭐️ ref
      // job.value.type = '中级'
      // job.value.salary = '15000'
      // console.log(job.value);

      //⭐️reactive
      // job.type = "作家"
      // job.salary = 12111
      // job.a.b.c = 10001
      // console.log(job)
      // hobby[0] = '看书'
      // num.value = 121
      //#endregion

      // 🌾写法2对应修改
      person.name = '李四'
      person.age = 48
      person.job.type = "作家"
      person.job.salary = 12111
      person.job.a.b.c = 10001
      person.hobby[0] = '看书'
    }
    function addSex () {
      person.sex = '男'
    }
    function deleteName () {
      delete person.name
    }
    // 写法1:返回一个对象-常用
    return {
      // name,
      // age,
      // job,
      // hobby,
      // num,
      // 写法2
      person,
      changeInfo,
      addSex,
      deleteName,
    }
    // 写法2 返回一个渲染函数-自定义渲染内容（不常用）
    // return () => h('h1', '尚硅谷')
  },






}
</script>

<style>
</style>
