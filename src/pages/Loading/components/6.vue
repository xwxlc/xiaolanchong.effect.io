<script setup lang="ts" name="demo6">
// import { ref } from 'vue'
</script>

<template>
  <div class="load">
    <div class="load-item"></div>
  </div>
</template>

<style scoped lang="scss">
.load {
  --color: orange;
  --bg: #f3e8e8;

  position: relative;
  width: 200px;
  height: 10px;
  border-radius: 30px;
  background: linear-gradient(45deg, var(--color) 25%, var(--bg) 0, var(--bg) 50%, var(--color) 0, var(--color) 75%, var(--bg) 0);
  background-size: 10px 10px;
  animation: laod_down 3s infinite ease-in-out alternate;

  &-item {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    bottom: 15px;
    right: 0;
    animation: laod_circle 3s infinite ease-in-out alternate;

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      top: 15px;
      left: 15px;
      background: #000000;
    }
  }
}

@keyframes laod_down {
  0% {
    transform: rotate(-15deg);
  }

  100% {
    transform: rotate(15deg);
  }
}

@keyframes laod_circle {
  0% {
    transform: rotate(360deg);
    right: 0;
  }

  100% {
    transform: rotate(0);
    right: calc(100% - 50px);
  }
}
</style>
