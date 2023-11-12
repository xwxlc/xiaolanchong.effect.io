<script setup lang="ts" name="caret-color">
import vuePrism from '@/components/vue-prism.vue'

const props = defineProps({
  isPage: {
    type: Boolean,
    default: false
  }
});
const cssCode =
  `input {
    caret-color: red;
  }`

</script>

<template>
  <div v-if="!props.isPage" class="title">自定义光标颜色</div>
  <div v-if="props.isPage" class="page-view">
     <input type="text">
    <vue-prism>{{ cssCode }}</vue-prism>
  </div>
</template>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
}

.page-view {
  text-align: center;
  input{
    width: 300px;
    height: 50px;
    font-size: 20px;
    caret-color: red;
    text-align: center;
  }
}
</style>
