<template>
  <div class="app">
    <h3>App组件</h3>
    <!-- 放置想展示的组件child -->
    <Suspense>
      <!-- 放置child组件还没有加载出来的时候---loading -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 如果组件很快回来了展示default，如果很久都没有回来就展示下面fallback -->
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
//这样引入child会
// import Child from './components/child.vue'//🌸静态引入
// 定义一个异步组件
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./components/child.vue'))//🌸异步引入
//内部设置要求返回一个函数，函数还得有返回值
export default {
  name: 'App',
  components: { Child },
}
</script>

<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>