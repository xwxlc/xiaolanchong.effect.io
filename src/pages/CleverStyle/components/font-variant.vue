<script setup lang="ts" name="font-variant">
import { ref } from 'vue'
import vuePrism from '@/components/vue-prism.vue'

const props = defineProps({
  isPage: {
    type: Boolean,
    default: false
  }
});
const downTime = ref<number>(10000)
const timer = ref<any>(null)
const onDownTime = () => {
  downTime.value = 10000
  clearInterval(timer.value)
  timer.value = setInterval(() => {
    downTime.value--
    if (downTime.value <= 0) {
      clearInterval(timer.value)
      timer.value = null
    }
  })
}
</script>

<template>
  <div v-if="!props.isPage" class="title">font-variant</div>
  <div v-if="props.isPage" class="page-view">
    <!-- font-variant-caps -->
    <vue-prism>{{ `// font-variant-caps 使你可以控制大写字母特殊字符的使用。
font-variant-caps: normal;
font-variant-caps: small-caps;
font-variant-caps: all-small-caps; `}}</vue-prism>
    <div class="view">
      <div class="view-item">
        <div class="label">font-variant-caps: normal;</div>
        <div style="font-variant-caps: normal;">Difficult waffles</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-caps: small-caps;</div>
        <div style="font-variant-caps: small-caps;">Difficult waffles</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-caps: all-small-caps;</div>
        <div style="font-variant-caps: all-small-caps;">Difficult waffles</div>
      </div>
    </div>
    <!-- font-variant-numeric  -->
    <vue-prism>{{ `font-variant-numeric CSS 属性控制数字、分数和序号标记的替代字形的使用。
font-family: 'Fira Sans',sans-serif
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums; /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums; /* <numeric-figure-values> */
font-variant-numeric: proportional-nums; /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums; /* <numeric-spacing-values> */ // 与效果相同 font-feature-settings: "tnum"; 

font-variant-numeric: diagonal-fractions; /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions; /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;
`}}</vue-prism>
    <div class="view" style="font-family: 'Fira Sans',sans-serif">
      <div class="view-item">
        <div class="label">font-variant-numeric: normal;</div>
        <div style="font-variant-numeric: normal;">1234567890</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-numeric: ordinal;</div>
        <div style="font-variant-numeric: ordinal;">1234567890</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-numeric: slashed-zero;</div>
        <div style="font-variant-numeric: slashed-zero;">0000000</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-numeric: lining-nums;</div>
        <div style="font-variant-numeric: lining-nums;">1234567890</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-numeric: oldstyle-nums;</div>
        <div style="font-variant-numeric: oldstyle-nums;">1234567890</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-numeric: proportional-nums;</div>
        <div style="font-variant-numeric: proportional-nums;">1234567890</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-numeric: tabular-nums;</div>
        <div style="font-variant-numeric: tabular-nums;">1234567890</div>
      </div>
      <div class="view-item">
        <div class="label">font-feature-settings: 'tnum'</div>
        <div style="font-feature-settings: 'tnum'">1234567890</div>
      </div>
      
      <div class="view-item">
        <div class="label">font-variant-numeric: diagonal-fractions;</div>
        <div style="font-variant-numeric: diagonal-fractions;">1/2</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-numeric: stacked-fractions;</div>
        <div style="font-variant-numeric: stacked-fractions;">1/2</div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-numeric: oldstyle-nums stacked-fractions;</div>
        <div style="font-variant-numeric: oldstyle-nums stacked-fractions slashed-zero;">1234567890/1234567890</div>
      </div>
    </div>
    <!-- font-variant-position  -->
    <vue-prism>{{ `font-variant-position CSS 属性控制数字、分数和序号标记的替代字形的使用。
font-variant-position: normal;
font-variant-position: sub;
font-variant-position: super;
`}}</vue-prism>
    <div class="view">
      <div class="view-item">
        <div class="label">font-variant-position: normal;</div>
        <div>123<span style="font-variant-position: normal;">456</span></div>
      </div>
      <div class="view-item">
        <div class="label">font-variant-position: sub;</div>
        <div>123<span style="font-variant-position: sub;">456</span></div>
        <!-- 123<sup>456</sup> -->
      </div>
      <div class="view-item">
        <div class="label">font-variant-position: super;</div>
        <div>123<span style="font-variant-position: super;">456</span></div>
        <!-- 123<sub>456</sub> -->
      </div>
    </div>
    <!-- 应用 -->
    <vue-prism>{{ `下列效果相同
font-variant: tabular-nums;
font-variant-numeric: tabular-nums;
font-feature-settings: 'tnum'
`}}</vue-prism>
<div class="down-time-box">
  <button @click="onDownTime">开始倒计时</button>
  <div class="down-time"><span>{{ downTime.toLocaleString() }}</span></div>
</div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "Fira Sans"; //自定义字体名称
  src: url('https://interactive-examples.mdn.mozilla.net/media/fonts/FiraSans-Regular.woff2'); //引入字体路径
  font-weight: normal; //字体粗细
  font-style: normal; //字体风格
}
@font-face {
  font-family: "Amstelvar"; //自定义字体名称
  src: url('https://mdn.github.io/css-examples/variable-fonts/fonts/AmstelvarAlpha-VF.woff2'); //引入字体路径
  font-weight: normal; //字体粗细
  font-style: normal; //字体风格
}


.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
}

.page-view {
  padding: 0 20px;
  font-size: 16px;
  line-height: 2em;
}

.view {
  .view-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.1);

    .label {
      flex: 0 0 auto;
      width: 500px;
    }
  }
}
.down-time-box {
  font-family: 'Fira Sans';
  font-size: 30px;
  text-align: center;
  .down-time {
    font-variant: tabular-nums;
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum';
    margin: 100px auto;
  }
}
</style>
