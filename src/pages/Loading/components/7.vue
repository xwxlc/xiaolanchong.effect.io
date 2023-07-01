<script setup lang="ts" name="demo7">
import { ref } from 'vue'
const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
interface listItem {
    color: string,
    rotate: string
}
const list = ref<listItem[]>([
    { color: '#d8784b', rotate: '0deg' },
    { color: '#f8dfe3', rotate: '45deg' },
    { color: '#afcbe4', rotate: '90deg' },
    { color: '#e9afe3', rotate: '135deg' },
])
</script>

<template>
    <div class="load">
        <div class="load-box">
            <div class="load-box-item" v-for="(item, index) in list" :key="index"
                :style="{ '--color': item.color, '--rotate': item.rotate }"></div>
        </div>
    </div>
    <div v-if="props.isPage" class="page-view"></div>
</template>

<style scoped lang="scss">
.load {
    margin: auto;
    position: relative;
    width: 90px;
    height: 180px;
    transform: perspective(1000px) rotateY(-45deg);
    transform-style: preserve-3d;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 50px;
        background: #000;
        left: 0;
        bottom: -60px;
        filter: blur(30px);
        transform: rotateX(90deg);
    }

    &-box {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transform-style: preserve-3d;
        animation: laod_rotate 5s linear infinite;

        &-item {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 10px;
            background: var(--color);
            transform: rotateX(var(--rotate));
        }
    }
}

@keyframes laod_rotate {
    0% {
        transform: perspective(1000px) rotateX(0deg);
    }

    100% {
        transform: perspective(1000px) rotateX(360deg);
    }
}
</style>
