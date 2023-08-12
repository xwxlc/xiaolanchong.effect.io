<script setup lang="ts" name="thing">
import { shallowRef } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const modules = import.meta.glob('./components/*.vue', { import: 'default', eager: true });
const components: any = shallowRef(modules);

const onLink = ({ name }: { name: string }) => {
    router.push(`/thing/${name}`)
}
</script>

<template>
    <div class="list">
        <div class="list-item" v-for="(item, index ) in components" :key="index" @click="onLink(item)">
            <component :is="item"></component>
        </div>
    </div>
</template>

<style scoped lang="scss">
.list {
    display: flex;
    flex-wrap: wrap;

    &-item {
        width: 220px;
        height: 220px;
        cursor: pointer;
    }
}
</style>
