<script setup lang="ts" name="demo4">
// import { ref } from 'vue'
</script>

<template>
    <div class="load"></div>
</template>

<style scoped lang="scss">
.load {
  --w: 200px;
  width: var(--w);
  height: var(--w);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 4px 0 #f2a115 inset;
    animation: load_rotate 2s infinite linear;
  }
}

@keyframes load_rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
