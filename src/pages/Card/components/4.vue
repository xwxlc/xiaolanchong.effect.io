<script setup lang="ts" name="demo4">
import Prism from "prismjs";
import { onMounted } from "vue";
const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
onMounted(() => {
    Prism.highlightAll();
})
</script>

<template>
    <h1>4、实用组合</h1>
    <div class="card card-1">卡片1</div>
    <div class="card card-1-2">卡片1-2</div>
    <div class="card card-2">卡片2</div>
    <div class="card card-3">卡片3</div>
    <div class="card card-4">卡片4</div>
    <div class="card card-5">卡片5</div>
    <div class="card card-6">卡片6</div>
    <div v-if="props.isPage" class="page-view">
        <pre><code class="language-sass line-numbers">
.card {
    width: 350px;
    height: 125px;


}
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
    font-size: 20px;
    color: #999999;

    // 卡片1
    &.card-1 {
        position: relative;
        border-radius: 10px;
        background: radial-gradient(circle at right top, transparent 10px, #a8edea 0) top left / 100px 51% no-repeat,
            radial-gradient(circle at right bottom, transparent 10px, #a8edea 0) bottom left / 100px 51% no-repeat,
            radial-gradient(circle at left top, transparent 10px, #ffde7d 0) top right / 250px 51% no-repeat,
            radial-gradient(circle at left bottom, transparent 10px, #ffde7d 0) bottom right / 250px 51% no-repeat;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        // 虚线
        &::after {
            content: '';
            margin: auto;
            position: absolute;
            left: 99px;
            top: 0;
            bottom: 0;
            height: calc(100% - 20px);
            width: 2px;
            background-image: linear-gradient(0deg, #fff 50%, transparent 50%);
            background-size: 10px 10px;

        }
    }

    // 卡片1-2
    &.card-1-2 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background: linear-gradient(90deg, #a8edea 100px, #a8edea 100px, #ffde7d 100px, #ffde7d 100%);
            -webkit-mask: radial-gradient(circle at 10px 10px, transparent 10px, #000 0) 90px -10px;
            pointer-events: none;
        }

        // 虚线
        &::after {
            content: '';
            margin: auto;
            position: absolute;
            left: 99px;
            top: 0;
            bottom: 0;
            width: 2px;
            height: calc(100% - 20px);
            background-image: linear-gradient(0deg, #fff 50%, transparent 50%);
            background-size: 10px 10px;
            pointer-events: none;
        }
    }

    // 卡片2
    &.card-2 {
        position: relative;
        background: #a8edea;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::after {
            content: '';
            position: absolute;
            height: 5px;
            width: 100%;
            left: 0;
            bottom: -5px;
            background-image: radial-gradient(5px circle at 10px 5px, transparent 5px, #a8edea 5px);
            background-size: 15px 5px;
        }
    }

    // 卡片3
    &.card-3 {
        border-radius: 10px;
        background: radial-gradient(5px circle at 15px 10px, transparent 5px, #a8edea 0, #a8edea);
        background-position: center center;
        background-size: 100% 20px;
    }

    // 卡片4
    &.card-4 {
        position: relative;
        background: #a8edea;
        border-radius: 10px 10px 0 0;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::after {
            content: '';
            position: absolute;
            height: 10px;
            left: 0;
            right: 0;
            bottom: -10px;
            background: radial-gradient(16px 8px ellipse at top, #a8edea 8px, transparent 8px);
            background-size: 16px 10px;
        }
    }

    // 卡片5
    &.card-5 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, #a8edea, #ffde7d);
            border-radius: inherit;
            -webkit-mask-image: radial-gradient(circle at center 5px, transparent 5px, #000 5px);
            -webkit-mask-position: center -5px;
            -webkit-mask-size: 25px 100%;
            pointer-events: none;
        }
    }


    // 卡片6
    &.card-6 {
        position: relative;
        border-radius: 10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));

        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, #a8edea, #ffde7d);
            border-radius: inherit;
            -webkit-mask-image: radial-gradient(circle at 5px center, transparent 5px, #000 5px), radial-gradient(circle at center 5px, #000 5px, transparent 5px);
            -webkit-mask-position: -5px center, center -5px;
            -webkit-mask-size: 100% 25px, 25px 100%;
            -webkit-mask-composite: source-out;
            pointer-events: none;
        }
    }

}
</style>
