<template>
  <div class="son">
    <h3>我是son组件(子)</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from './dialog.vue'
export default {
  name: 'aSon',
  components: { Dialog }
}
</script>

<style>
  .son {
    background-color: yellow;
    padding: 10px;
  }
</style>