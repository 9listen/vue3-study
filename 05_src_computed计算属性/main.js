// 722 引入的不再是Vue构造函数，而是名为createApp的工厂函数-创建一个应用的实例对象
import { createApp } from 'vue'
import App from './App.vue'
// 创建应用实例对象
const app = createApp(App)
console.log('@@@', app);
app.mount('#app')
// 两秒后取消挂载，页面啥也没了
/* setTimeout(() => {
    app.unmount('#app')
}, 2000) */

/* 之前的写法 创建vm实例对象->App->各种子组件
const vm = new Vue({
    render:h=>{return h(App)}
})
vm.$mount('#app') */