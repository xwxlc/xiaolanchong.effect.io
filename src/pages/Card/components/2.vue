<script setup lang="ts" name="demo2">
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

    // 渐变色
    &.card-1 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            background: linear-gradient(90deg, #a8edea, #ffde7d);
            border-radius: inherit;
            -webkit-mask: radial-gradient(circle at 10px center, transparent 10px, #000 0) -10px;
            pointer-events: none;
        }
    }

    // 渐变色
    &.card-2 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            background: linear-gradient(90deg, #a8edea, #ffde7d);
            border-radius: inherit;
            -webkit-mask: radial-gradient(circle at 10px 10px, transparent 10px, #000 0) -10px -10px;
            pointer-events: none;
        }
    }
}`
</script>

<template>
    <h1>2、渐变背景+mask遮罩</h1>
    <div class="card card-1">渐变色</div>
    <div class="card card-2">渐变色</div>
    <div v-if="props.isPage" class="page-view">
        <vue-prism>{{ cssCode }}</vue-prism>
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
    font-size: 20px;
    color: #999999;

    // 渐变色
    &.card-1 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            background: linear-gradient(90deg, #a8edea, #ffde7d);
            border-radius: inherit;
            -webkit-mask: radial-gradient(circle at 10px center, transparent 10px, #000 0) -10px;
            pointer-events: none;
        }
    }

    // 渐变色
    &.card-2 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            background: linear-gradient(90deg, #a8edea, #ffde7d);
            border-radius: inherit;
            -webkit-mask: radial-gradient(circle at 10px 10px, transparent 10px, #000 0) -10px -10px;
            pointer-events: none;
        }
    }
}
</style>
