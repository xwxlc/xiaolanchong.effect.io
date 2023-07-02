<script setup lang="ts" name="demo3">
import { ref } from 'vue'
const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
const list = ref<number[]>([-0.8,-0.4,0])

</script>

<template>
    <div class="load">
        <div class="load-item" v-for="(item, index) in list" :key="index" :style="{ '--d': item }"></div>
    </div>
    <div v-if="props.isPage" class="page-view"></div>
</template>

<style scoped lang="scss">
.load {
    --color: rgba(255, 165, 0, 1);
    margin: auto;
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    perspective: 40em;

    &-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border-bottom: 0.15em solid var(--color);
        animation: 1.15s linear infinite;
        animation-delay: calc(1s * var(--d));

        $list: 'load_rotate1',
        'load_rotate2',
        'load_rotate3';

        @each $s in $list {
            $i: index($list, $s);

            &:nth-child(#{$i}) {
                animation-name: #{$s};
            }
        }

    }
}

@keyframes load_rotate1 {
    from {
        transform: rotateX(35deg) rotateY(-45deg) rotate(0);
    }

    to {
        transform: rotateX(35deg) rotateY(-45deg) rotate(360deg);
    }
}

@keyframes load_rotate2 {
    from {
        transform: rotateX(50deg) rotateY(10deg) rotate(0);
    }

    to {
        transform: rotateX(50deg) rotateY(10deg) rotate(360deg);
    }
}

@keyframes load_rotate3 {
    from {
        transform: rotateX(35deg) rotateY(55deg) rotate(0);
    }

    to {
        transform: rotateX(35deg) rotateY(55deg) rotate(360deg);
    }
}
</style>
