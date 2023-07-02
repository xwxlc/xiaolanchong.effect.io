<script setup lang="ts" name="demo3">
import vuePrism from '@/components/vue-prism.vue'
const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
const cssCode =
`.card {
    width: 350px;
    height: 125px;

    // mask遮罩+伪元素+border
    &.card-1 {
        position: relative;
        border-radius: 10px;
        border: 1px solid #a8edea;
        -webkit-mask: radial-gradient(circle at 10px center, transparent 10px, #000 0) -10px;
        // 缺陷
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #a8edea;
            top: calc(50% - 11px);
            pointer-events: none;
        }

        &::before {
            left: -11px;
        }

        &::after {
            right: -11px;
        }
    }

    // mask遮罩+多重drop-shadow实现边框
    &.card-2 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(0 0 1px) drop-shadow(0 0 0) drop-shadow(0 0 0) drop-shadow(0 0 0) drop-shadow(0 0 0);
        color: #a8edea;

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            border-radius: inherit;
            // 填充背景色
            background: #000;
            -webkit-mask: radial-gradient(circle at 10px center, transparent 10px, #000 0) -10px;
            pointer-events: none;
            
        }
    }
}`
</script>

<template>
    <h1>3、边框</h1>
    <div class="card card-1">
        mask遮罩+伪元素+border<br />
        缺点：filter不友好
    </div>
    <div class="card card-2">
        mask遮罩+多重drop-shadow实现边框<br />
        缺点：需要设置有背景色
    </div>
    <div v-if="props.isPage" class="page-view">
        <vue-prism>{{ cssCode }}</vue-prism>
        <pre><code class="language-sass line-numbers">

        </code></pre>
    </div>
</template>

<style scoped lang="scss">
h1 {
    text-align: center;
}

.card {
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 125px;
    font-size: 15px;
    color: #999999;

    // mask遮罩+伪元素+border
    &.card-1 {
        position: relative;
        border-radius: 10px;
        border: 1px solid #a8edea;
        -webkit-mask: radial-gradient(circle at 10px center, transparent 10px, #000 0) -10px;
        // 缺陷
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #a8edea;
            top: calc(50% - 11px);
            pointer-events: none;
        }

        &::before {
            left: -11px;
        }

        &::after {
            right: -11px;
        }
    }

    // mask遮罩+多重drop-shadow实现边框
    &.card-2 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(0 0 1px) drop-shadow(0 0 0) drop-shadow(0 0 0) drop-shadow(0 0 0) drop-shadow(0 0 0);
        color: #a8edea;

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            border-radius: inherit;
            // 填充背景色
            background: #000;
            -webkit-mask: radial-gradient(circle at 10px center, transparent 10px, #000 0) -10px;
            pointer-events: none;

        }
    }
}
</style>
