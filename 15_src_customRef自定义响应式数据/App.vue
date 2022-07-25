<template>
  <input type="text" v-model="keyword" />
  <h3>{{ keyword }}</h3>
  <hr />
</template>

<script>
import { customRef } from 'vue'
export default {
  name: 'App',
  setup () {
    // let keyword = ref('hello')//🌸使用vue时提供的ref
    // ⭐️自定义一个ref，名为myRef；里面有1个API可以调用customRef,
    function myRef (value, delay) {
      let timer
      // console.log(value, 'myref');
      return customRef((track, trigger) => {//返回一个自定义ref,最终得返回出去，否则为undefined
        //🔥 调用customRef函数所收到两个参数trigger(),track()
        return {//语法要求
          get () {
            console.log(`从myRef中读取数据${value}`);//打印两次，因为页面使用了两次
            track()//🔥追踪keyword的改变
            return value
          },
          set (newValue) {
            console.log(`修改myRef中的数据:${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()//🔥通知vue重新解析模板
            }, delay)
            //定时器一直开着，每次修改都要开一个定时器，打开一堆定时器，就会把很多trigger积压在一起，所以每次开启前
            // 先清除定时器

          },
        }
      })
    }
    let keyword = myRef('hello', 500)//🌸使用程序员自定义的ref
    return {
      keyword,
    }//模板交出去使用
  }
}

</script>

<style>
</style>
