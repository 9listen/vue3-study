<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <!-- 传送到哪个地方都可以，可以传到body身上或者是其他地方 -->
    <teleport to="body">
      <!-- <teleport to="#atguigu"> -->
      <div v-if="isShow" @click="isShow = false" class="mask">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>我是一些内容</h4>
          <h4>我是一些内容</h4>
          <h4>我是一些内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'aDialog',
  setup () {
    let isShow = ref(false)
    return {
      isShow
    }
  }
}
</script>

<style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 300px;
    height: 300px;
    background-color: green;
  }
</style>