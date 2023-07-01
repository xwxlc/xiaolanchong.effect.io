<script setup lang="ts">
import { ref } from 'vue'
interface list {
    icon?: any,
    code: string,
    name: string,
    path: string
}
const list = ref<list[]>([
    { code: 'LOADING', name: '加载动画', path: '/loading' },
    { code: 'CARD', name: '优惠券、卡片', path: '/card' },
])
</script>

<template>
    <ul class="list">
        <router-link v-for="item in list" v-slot="{ navigate }" custom :key="item.code" :to="item.path">
            <li class="list-item" @click="navigate">{{ item.name }}</li>
        </router-link>
    </ul>
</template>

<style scoped lang="scss">
.list {
    &-item {
        line-height: 40px;
        color: #aaa;
        font-size: 20px;
        letter-spacing: 0.1em;
        cursor: pointer;

        &:hover {
            color: #fff;
            text-decoration: underline;
        }
    }
}
</style>
