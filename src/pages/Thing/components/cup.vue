<script setup lang="ts" name="cup">
const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div class="cup">
        <div class="cup-body"></div>
    </div>
    <div v-if="props.isPage" class="page-view"></div>
</template>

<style scoped lang="scss">
.cup{
    width: 200px;
    height: 200px;
    margin: auto;
    position: relative;

    .cup-body{
        height: 100%;
        background: rgba(247,247,247,0.9);
    }
}
</style>
