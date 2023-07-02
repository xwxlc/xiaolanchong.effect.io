<script setup lang="ts" name="demo1">
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
    <h1>1、渐变背景</h1>
    <div class="card card-1">纯色</div>
    <div class="card card-2">纯色</div>
    <div class="card card-3">多色块</div>
    <div v-if="props.isPage" class="page-view">
        <pre><code class="language-sass line-numbers">
.card {
    width: 350px;
    height: 125px;
    
    // 纯色卡片
    &.card-1 {
        border-radius: 10px;
        background: radial-gradient(circle at 10px center, transparent 10px, #a8edea 10px) -10px 0;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));
    }

    // 纯色卡片
    &.card-2 {
        background: radial-gradient(circle at 10px 10px, transparent 10px, #a8edea 10px) -10px -10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));
    }

    // 多色区块卡片
    &.card-3 {
        background: radial-gradient(circle at left 0, transparent 10px, #fed6e3 0) left 0 /50% 50% no-repeat,
            radial-gradient(circle at right 0, transparent 10px, #a8edea 0) right 0 /50% 50% no-repeat,
            radial-gradient(circle at left 100%, transparent 10px, #ffde7d 0) left 100% /50% 50% no-repeat,
            radial-gradient(circle at right 100%, transparent 10px, #bbded6 0) right 100% /50% 50% no-repeat;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));
    }
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
    position: relative;
    width: 350px;
    height: 125px;
    font-size: 20px;
    color: #999999;

    // 纯色卡片
    &.card-1 {
        border-radius: 10px;
        background: radial-gradient(circle at 10px center, transparent 10px, #a8edea 10px) -10px 0;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));
    }

    // 纯色卡片
    &.card-2 {
        background: radial-gradient(circle at 10px 10px, transparent 10px, #a8edea 10px) -10px -10px;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));
    }

    // 多色区块卡片
    &.card-3 {
        background: radial-gradient(circle at left 0, transparent 10px, #fed6e3 0) left 0 /50% 50% no-repeat,
            radial-gradient(circle at right 0, transparent 10px, #a8edea 0) right 0 /50% 50% no-repeat,
            radial-gradient(circle at left 100%, transparent 10px, #ffde7d 0) left 100% /50% 50% no-repeat,
            radial-gradient(circle at right 100%, transparent 10px, #bbded6 0) right 100% /50% 50% no-repeat;
        filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));
    }
}
</style>
