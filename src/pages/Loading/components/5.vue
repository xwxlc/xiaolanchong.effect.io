<script setup lang="ts" name="demo5">
const props = defineProps({
    isPage: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div class="load">
      <div class="load-item"></div>
    </div>
    <div v-if="props.isPage" class="page-view"></div>
</template>

<style scoped lang="scss">
.load {
  --bx-in: #454344;
  --wave: skyblue;
  --wave-line: #fff;
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: -18px 18px 36px #666666, 18px -18px 36px #8a8a8a, -5px -5px 45px var(--bx-in) inset;
  position: relative;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 1px dashed #fff;
    border-radius: 50%;
  }
  &::before {
    inset: 20px;
    box-sizing: -5px -5px 45px var(--bx-in);
  }
  &::after {
    inset: 65px;
    box-shadow: -5px -5px 25px var(--bx-in);
  }

  &-item {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 50%;
    top: 50%;
    border-top: 1px dashed var(--wave-line);
    transform-origin: 0 0;
    animation: load 2s linear infinite;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(--wave);
      transform: rotate(-45deg);
      transform-origin: 0 0;
      filter: blur(30px) drop-shadow(20px 20px 20px var(--wave));
    }
  }
}

@keyframes load {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
