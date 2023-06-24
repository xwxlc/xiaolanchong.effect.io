<script setup lang="ts" name="demo1">
import { ref } from 'vue'
const Colors = ref<string[]>(['#e94545', '#eb8f34', '#eecf69', '#215221', '#87bb80', '#87ceeb', '#c393eb'])
</script>

<template>
    <div class="load">
        <div class="load-item" v-for="(item, index) in  Colors " :key="index"
            :style="{ '--color': item, '--index': index }"></div>
    </div>
</template>

<style scoped lang="scss">
.load {
    --border: 5px;
    --gap: 15px;
    --w: 200px;
    width: var(--w);
    height: var(--w);
    position: relative;

    &-item {
        // 计算每个圆环的宽度
        --width: calc(var(--w) - var(--gap) * 2 * var(--index));
        width: var(--width);
        height: calc(var(--width) / 2);
        // 半圆弧
        border: var(--border) solid var(--color);
        border-radius: 50% 50% 0 0/100% 100% 0 0;
        border-bottom: none;
        position: absolute;
        left: calc((50% - var(--width) / 2));
        top: calc(var(--gap) * var(--index));
        transform-origin: 50% 100%;
        //添加动画
        animation: loading_rotate 2s cubic-bezier(0.11, 0.85, 0.22, 1.3) infinite;
        // 添加延迟
        animation-delay: calc(60ms * var(--index));
        transition: all 0.3s;
    }

    &:hover {
        .load-item {
            filter: brightness(1.5);
            animation-play-state: paused;
        }
    }
}

@keyframes loading_rotate {

    0%,
    25% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
