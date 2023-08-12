<script setup lang="ts" name="grids-0-9">
import { ref } from 'vue'
import vuePrism from '@/components/vue-prism.vue'

const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
const listGroup = ref<any[]>([
    new Array(1),
    new Array(2),
    new Array(3),
    new Array(4),
    new Array(5),
    new Array(6),
    new Array(7),
    new Array(8),
    new Array(9),
])
const cssCode =
`.list {
    display: flex;
    flex-wrap: wrap;
    width: 200px;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }

    // 1张
    .list-item:first-child:nth-last-child(1) {
        padding: 10px;
        width: 100%;
        height: 100%;
    }

    // 2 or 4张
    .list-item:first-child:nth-last-child(2),
    .list-item:first-child:nth-last-child(2)~.list-item,
    .list-item:first-child:nth-last-child(4),
    .list-item:first-child:nth-last-child(4)~.list-item {
        padding: 5px;
        width: 50%;
        height: 50%;
    }

    // 3 or 5 or 5以上
    .list-item:first-child:nth-last-child(3),
    .list-item:first-child:nth-last-child(3)~.list-item,
    .list-item:first-child:nth-last-child(n + 5),
    .list-item:first-child:nth-last-child(n + 5)~.list-item {
        padding: 3.33px;
        width: 33.33%;
        height: 33.33%;
    }
}`
</script>

<template>
    <div v-if="!props.isPage" class="title">盆友圈自适应9宫格</div>
    <div v-if="props.isPage" class="page-list">
        <div class="list" v-for="(list, listIndex) in listGroup" :key="listIndex">
            <div class="list-item" v-for="(item, index) in list" :key="index"><img src="@/assets/vue.svg" /></div>
        </div>
    </div>
    <div v-if="props.isPage" class="page-view">
        <vue-prism>{{ cssCode }}</vue-prism>
    </div>
</template>

<style scoped lang="scss">
.title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
}
.page-list {
    display: flex;
    flex-wrap: wrap;
}
.list {
    display: flex;
    flex-wrap: wrap;
    width: 200px;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }

    // 1张
    .list-item:first-child:nth-last-child(1) {
        padding: 10px;
        width: 100%;
        height: 100%;
    }

    // 2 or 4张
    .list-item:first-child:nth-last-child(2),
    .list-item:first-child:nth-last-child(2)~.list-item,
    .list-item:first-child:nth-last-child(4),
    .list-item:first-child:nth-last-child(4)~.list-item {
        padding: 5px;
        width: 50%;
        height: 50%;
    }

    // 3 or 5 or 5以上
    .list-item:first-child:nth-last-child(3),
    .list-item:first-child:nth-last-child(3)~.list-item,
    .list-item:first-child:nth-last-child(n + 5),
    .list-item:first-child:nth-last-child(n + 5)~.list-item {
        padding: 3.33px;
        width: 33.33%;
        height: 33.33%;
    }
}
</style>
