<script setup lang="ts" name="currentColor">
import { ref } from 'vue'
import vuePrism from '@/components/vue-prism.vue'

const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
const currentColor = ref<string>('#FFFFFF')

const cssCode =
`// currentColor的值相当于当前color的值
.box-style {
  color: #FFFFFF;
  border-left: 4px solid  currentColor;
  box-shadow: 0 4px 4px currentColor;

  &.red {
    color: red
  }
  &.blue {
    color: blue
  }
}
// 我们可以利用该特性 巧妙的控制svg的颜色
// 原先对svg的颜色进修改需要 icon>path>fill 深乘次的选择器去控制
.icon {
  color: blue
}
`

</script>

<template>
    <div v-if="!props.isPage" class="title">currentColor</div>
    <div v-if="props.isPage" class="page-view">
      <div>变换颜色： <input type="color" v-model="currentColor" /></div>
      <!-- 技巧一 -->
      <div class="box-style" :style="{color: currentColor}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta omnis officiis dolorum aut cupiditate natus consectetur optio fuga fugit magnam inventore, illum laboriosam, iste eaque hic earum, ullam quibusdam.
      </div>
      <!-- 技巧二 -->
      <div class="svg-style">
        <svg class="icon" :style="{color: currentColor}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path fill="currentColor" d="M533.504 268.288q33.792-41.984 71.68-75.776 32.768-27.648 74.24-50.176t86.528-19.456q63.488 5.12 105.984 30.208t67.584 63.488 34.304 87.04 6.144 99.84-17.92 97.792-36.864 87.04-48.64 74.752-53.248 61.952q-40.96 41.984-85.504 78.336t-84.992 62.464-73.728 41.472-51.712 15.36q-20.48 1.024-52.224-14.336t-69.632-41.472-79.872-61.952-82.944-75.776q-26.624-25.6-57.344-59.392t-57.856-74.24-46.592-87.552-21.504-100.352 11.264-99.84 39.936-83.456 65.536-61.952 88.064-35.328q24.576-5.12 49.152-1.536t48.128 12.288 45.056 22.016 40.96 27.648q45.056 33.792 86.016 80.896z"></path>
        </svg>
      </div>
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
}
.box-style {
  padding: 20px;
  margin: 20px auto;
  width: 300px;
  color: #FFFFFF;
  border-left: 5px solid  currentColor;
  box-shadow: 5px 5px 10px currentColor;
}

</style>
