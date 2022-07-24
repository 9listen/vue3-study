<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷">
    <template v-slot:chacao1>
      <span>尚硅谷</span>
    </template>
    <template v-slot:chacao2>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup () {
    function showHelloMsg (value) {
      console.log(`触发了hello事件,收到的参数是:${value}`);
    }
    return {
      showHelloMsg
    }//模板交出去使用
  }


}
</script>

<style>
</style>
