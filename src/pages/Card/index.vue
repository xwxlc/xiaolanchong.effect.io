<script setup lang="ts" name="loading">
import { shallowRef } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const modules = import.meta.glob('./components/*.vue', { import: 'default', eager: true });
const components: any = shallowRef(modules);

const onLink = ({ name }: { name: string }) => {
    router.push(`/card/${name}`)
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
    width: 100%;
    &-item{
        cursor: pointer;
    }
}
</style>
