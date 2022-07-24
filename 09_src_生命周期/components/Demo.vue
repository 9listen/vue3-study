<template>
  <!--🌟 vue3可以没有根标签 -->
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点击sum+1</button>
</template>

<script>
// 用到啥引用啥
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
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
    console.log('---setup');
    // 数据
    let sum = ref(0)
    //🌸通过组合API的形式去使用生命周期钩子
    // beforeCreate和created对应setup()
    onBeforeMount(() => {
      console.log('---onBeforeMount');
    })
    onMounted(() => {
      console.log('---onMounted');
    })
    onBeforeUpdate(() => {
      console.log('---onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('---onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('---onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('---onUnmounted');
    })
    return {
      sum,
    }
  },
  // 通过配置项的形式使用生命周期钩子
  // #region
  /*  beforeCreate () {
     console.log('---beforeCreated');
   },
   created () {
     console.log('---created');
   },
   beforeMount () {
     console.log('---beforeMount');
   },
   mounted () {
     console.log('---mounted');
   },
   beforeUpdate () {
     console.log('---beforeUpdate');
   },
   updated () {
     console.log('---updated');
   },
   beforeUnmount () {
     console.log('---beforeUnmount');
   },
   unmounted () {
     console.log('---unmounted');
   } */
  //#endregion


}
</script>

<style>
</style>
