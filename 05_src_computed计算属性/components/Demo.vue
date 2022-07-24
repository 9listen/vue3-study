<template>
  <!--🌟 vue3可以没有根标签 -->
  <h1>一个人的信息</h1>
  性：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  <span>全名：{{ person.fullName }}</span>
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
// 用到啥引用啥
import { reactive, computed } from 'vue'
export default {
  name: 'aDemo',
  //   vue2写法
  /* computed: {
    fullName () {
      return this.person.firstName + '-' + this.person.lastName
    }
  }, */
  setup () {
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })
    // 计算属性-简写方式：没有考虑计算属性被修改的情况
    /* person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    }) */
    // 计算属性--完整写法：考虑读和写
    person.fullName = computed({
      get () {
        return person.firstName + '-' + person.lastName
      },
      set (value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    return {
      person,
    }
  },


}
</script>

<style>
</style>
