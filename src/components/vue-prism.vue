<script setup lang="ts">
import Prism from "prismjs";
import { onMounted } from "vue";
const props = defineProps({
    language: {
        type: String,
        default: ''
    },
});

onMounted(() => {
    Prism.highlightAll();
})
</script>

<template>
    <pre><code class="language-sass line-numbers" :class="`language-${props.language}`"><slot></slot></code></pre>
</template>

<style scoped lang="scss"></style>
