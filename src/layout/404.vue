<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const back = () => {
    router.back()
}
</script>

<template>
    <div class="container">
        <h1 @click="back">404 Not Found</h1>
    </div>
</template>
<style lang="scss" scoped>
.container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
}
</style>

