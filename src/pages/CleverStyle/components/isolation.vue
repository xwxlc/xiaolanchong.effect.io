<script setup lang="ts" name="isolation">
import { ref } from 'vue'
import vuePrism from '@/components/vue-prism.vue'

const props = defineProps({
  isPage: {
    type: Boolean,
    default: false
  }
});
const isolation = ref<boolean>(false)
const cssCode =
  `// isolation的意思是脱离，在实际开发中通常会遇到z-index设置导致组件间出现了不合理的覆盖问题，通常在类似于tooltip的组件在设计时，通常会对z-index进行累加达到不被覆盖的目的
.box-1 {
  isolation: isolate;
}
.box-2 {
  isolation: isolate;
}
`

</script>

<template>
  <div v-if="!props.isPage" class="title">isolation</div>
  <div v-if="props.isPage" class="page-view">
    <label>是否开启isolation：<input type="checkbox" v-model="isolation"></label>
    <div class="box-style">
      <div class="box-1" :class="{isolation: isolation}">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere unde neque beatae dolores cupiditate
        aliquam minima autem, mollitia molestiae voluptatem. Enim, praesentium dolorem? Facere dolor porro nihil quibusdam
        culpa!</span>
      </div>
      <div class="box-2" :class="{isolation: isolation}">
        <span class="tooltip-parent">hover
          <div class="tooltip">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur magnam dolore ducimus
            aliquam quibusdam, illum veritatis sunt debitis nobis mollitia. Sequi excepturi quidem ducimus at commodi
            soluta repellat! Dicta, facere?</div>
        </span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores earum doloremque quibusdam debitis
        non animi omnis iure reprehenderit autem enim quaerat ea commodi, vero et. Sequi a debitis exercitationem sunt.
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
  .box-1 {
    color: red;
    span {
      position: relative;
      z-index: 2;
    }
  }
  .isolation {
    isolation: isolate;
  }
 
  .tooltip-parent {
    position: relative;
    z-index: 1;
    color: #ffffff;
    cursor: pointer;

    .tooltip {
      display: none;
      position: absolute;
      bottom: 100%;
      left: 0;
      z-index: 100;
      width: 500px;
      background: #ddd;
    }

    &:hover {
      .tooltip {
        display: block;
      }
    }
  }
}</style>
