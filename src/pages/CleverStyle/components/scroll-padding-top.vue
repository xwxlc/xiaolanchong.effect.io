<script setup lang="ts" name="scroll-padding-top">
import { ref,watch,onUnmounted } from 'vue'
import vuePrism from '@/components/vue-prism.vue'

const props = defineProps({
  isPage: {
    type: Boolean,
    default: false
  }
});
const scrollPaddingTop = ref<boolean>(false)
const onTabScroll = (nth: number) => {
 const item =  document.querySelector(`.item:nth-child(${nth})`)
 item?.scrollIntoView()
}
watch(scrollPaddingTop, (value) => {
  console.log()
  if (value) {
    document.querySelector('html').style.scrollPaddingTop = '100px'
  } else {
    document.querySelector('html').style.scrollPaddingTop = ''
  }
})
onUnmounted(() => {
  document.querySelector('html').style.scrollPaddingTop = ''
})
const cssCode =
  `// 当遇到顶部有header固定的页面布局时，如果页面中加入锚点链接的跳转动作，不做处理的情况下点击锚点链接跳转的位置会被header覆盖一部分区域。
// 这个时候scroll-padding-top属性就派上用场了。scroll-padding-top属性用来定义滚动窗口的最佳查看区域对于顶部的偏移量。我们可以通过给html设置scroll-padding-top的值为一个固定的高度来解决这个问题。

html {
  scroll-padding-top: 100px;
}
`

</script>

<template>
  <div v-if="!props.isPage" class="title">scroll-padding-top</div>
  <div v-if="props.isPage" class="page-view" :class="{scrollPaddingTop:scrollPaddingTop}">
    <div class="heade-fixed">
      <label>是否开启scroll-padding-top：<input type="checkbox" v-model="scrollPaddingTop"></label>
        <div class="tab-list">
          <div class="tab-item" v-for="item in 5" :key="item" @click="onTabScroll(item)">tab{{ item }}</div>
      </div>
    </div>
    <div class="view-list">
      <div class="item">
        <h1>tab-1</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.</div>
      <div class="item">
        <h1>tab-2</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.</div>
      <div class="item">
        <h1>tab-3</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.</div>
      <div class="item">
        <h1>tab-4</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit ame consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.</div>
      <div class="item">
        <h1>tab-5</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam ratione, excepturi iusto voluptatibus, veniam quisquam eos fugit modi soluta dolor animi dolores expedita! Pariatur beatae ut dolore nesciunt iste.</div>
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
  padding-top: 90px;
  text-align: center;

}
.heade-fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100px;
  background: #ffffff;
  .tab-list {
    display: flex;
    justify-content: center;
    .tab-item {
      margin: 10px;
      cursor: pointer;
    }
  }
}
.view-list {
  .item {
    margin-bottom: 10px;
    line-height: 2em;
    color: #fff;
    h1 {
      margin: 0;
    }
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background-color: rgba($color: #000000, $alpha: 0.2 * $i)
      }
    
    }
  }
}
</style>
