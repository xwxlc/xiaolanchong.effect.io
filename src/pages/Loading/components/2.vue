<script setup lang="ts" name="demo2">
import { ref } from 'vue'
const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
const list = ref<number[]>([7,6,5,4,3,2,1,0,1,2,3,4,5,6,7])
</script>

<template>
    <div class="load-box">
        <div class="load">
            <div class="load-item" v-for="(item, index) in list" :key="index" :style="{ '--d': item }"></div>
        </div>
    </div>
    <div v-if="props.isPage" class="page-view"></div>
</template>

<style scoped lang="scss">
.load-box{
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
}
.load {
    --h: 80px;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
    height: var(--h);

    &-item {
        margin-right: 4px;
        width: 4px;
        height: 20px;
        border-radius: calc(var(--h) * 0.2 * 0.5);
        background: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
        animation: load 2s infinite linear;
        animation-delay: calc(0.2s * var(--d));

        &:last-child {
            margin-right: 0;
        }
    }
}

@keyframes load {
    0% {
        height: 20%;
        border-radius: calc(var(--h) * 0.2 * 0.5);
        background: linear-gradient(to top, #fa709a 0%, #fee140 100%);
    }

    50% {
        height: 100%;
        border-radius: calc(var(--h) * 1 * 0.5);
        background: linear-gradient(to top, #d2d2d2 0%, #fef9d7 100%);
    }

    100% {
        height: 20%;
        border-radius: calc(var(--h) * 0.2 * 0.5);
        background: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    }
}
</style>
