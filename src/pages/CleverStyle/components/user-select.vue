<script setup lang="ts" name="user-select">
import vuePrism from '@/components/vue-prism.vue'

const props = defineProps({
  isPage: {
    type: Boolean,
    default: false
  }
});
const cssCode =
  `.none {
  user-select:none;
}
.text {
  user-select: text;
}
.all {
  user-select: all;
}
`

</script>

<template>
  <div v-if="!props.isPage" class="title">禁止用户选择 & 可以整段选择</div>
  <div v-if="props.isPage" class="page-view">
    <div class="box-style">
      <div class="text">
        <h1>默认</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, beatae nesciunt! Doloribus accusamus nostrum, tempora quisquam distinctio quod et quis incidunt non architecto doloremque facilis, commodi natus eius illo neque?
      </div>
      <div class="none">
        <h1>禁止用户选择</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, beatae nesciunt! Doloribus accusamus nostrum, tempora quisquam distinctio quod et quis incidunt non architecto doloremque facilis, commodi natus eius illo neque?
      </div>
      <div class="all">
        <h1>可以整段选择</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, beatae nesciunt! Doloribus accusamus nostrum, tempora quisquam distinctio quod et quis incidunt non architecto doloremque facilis, commodi natus eius illo neque?
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

  .none {
    user-select: none;
  }

  .text {
    user-select: text;
  }

  .all {
    user-select: all;
  }
}</style>
