<script setup lang="ts" name="-webkit-box-reflect">
import vuePrism from '@/components/vue-prism.vue'

const props = defineProps({
  isPage: {
    type: Boolean,
    default: false
  }
});
const cssCode =
  `// 这个属性可以在不同方向反射元素的内容。有了这个属性，我们就可以实现一些神奇的效果，比如镜像、倒影等。
// 需要注意的是 镜像不占文本流
// 左右镜像
.left {
  -webkit-box-reflect:right
}
// 倒影
.below {
  -webkit-box-reflect:below
}
`

</script>

<template>
  <div v-if="!props.isPage" class="title">-webkit-box-reflect</div>
  <div v-if="props.isPage" class="page-view">
    <div class="box-style">
      <div>
        左右镜像
        <img class="left" src="https://xwxlc.github.io/xiaolanchong.githug.io/images/xiaolanchong.jpeg" alt="">
      </div>
      <div>
        倒影
        <img class="below" src="https://xwxlc.github.io/xiaolanchong.githug.io/images/xiaolanchong.jpeg" alt="">
      </div>
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
  margin: 20px auto;

  img{
    width: 100px;
    height: 100px;
  }
  // 左右镜像
  .left {
    -webkit-box-reflect:right
  }
  // 倒影
  .below {
    margin-bottom: 100px;
    -webkit-box-reflect:below
  }
}</style>
