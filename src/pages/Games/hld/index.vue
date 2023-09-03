<script setup lang="ts" name="game-hld">
import { onMounted, onUnmounted, ref } from 'vue'
// 难度等级
const level = ref<number>(5)
// 是否开始
const isStart = ref<boolean>(false)
// 是否完成
const isComplete = ref<boolean>(false)
// 原始数据 
const originList = ref<any[]>([])
// 乱序数据 
const messList = ref<any[]>([])
// 初始化
const initOriginList = () => {
    const temp: any[] = []
    const len = Math.pow(level.value, 2)
    for (let i = 0; i < len; i++) {
        temp.push({
            index: i,
            num: i + 1,
            isSpace: i == len - 1 ? true : false,
        })
    }
    originList.value = temp;
    messList.value = temp;
}
// 乱序
const initMessList = () => {
    const arr = [...originList.value]
    let r = arr.length - 1
    while (r >= 0) {
        const i = Math.floor(Math.random() * (r + 1));
        [arr[r], arr[i]] = [arr[i], arr[r]];
        r--
    }
    messList.value = arr
}
// 通过检测
const inspectComplete = (): boolean => {
    const originStr = originList.value.map((item: any) => item.num).join()
    const messStr = messList.value.map((item: any) => item.num).join()
    return originStr == messStr
}
// 初始化数据
initOriginList()

const startGame = () => {
    if (!isStart.value) {
        isStart.value = true
        isComplete.value = false
        initMessList()
    }
}

// 点击块
const handleMove = (index: number) => {
    if (!isStart.value) {
        return false
    }
    const arr = [...messList.value]
    const { isSpace } = arr[index] || { isSpace: true }
    // 空格
    if (isSpace) {
        return false
    }
    let [x, y]: number[] = indexToLocation(index)
    let [sx, sy]: number[] = indexToLocation(getSpaceIndex())
    // 不同行 不同列
    if (x != sx && y != sy) {
        return false
    }
    while (x != sx || y != sy) {
        let tx = sx
        let ty = sy
        if (sx > x) tx -= 1
        if (sx < x) tx += 1
        if (sy > y) ty -= 1
        if (sy < y) ty += 1
        const si: number = locationToIndex(sx, sy)
        const ti: number = locationToIndex(tx, ty);
        [arr[si], arr[ti]] = [arr[ti], arr[si]]
        sx = tx
        sy = ty
    }
    messList.value = arr

    if (inspectComplete()) {
        isStart.value = false
        isComplete.value = true
        alert('成功')
    }
}
// 获取空白格的位置
const getSpaceIndex = (): number => {
    const index = messList.value.findIndex(item => item.isSpace)
    return index
}
// index转换坐标
const indexToLocation = (index: number): number[] => {
    let y = 0
    let x = index % level.value;
    while (index >= level.value) {
        y += 1
        index -= level.value
    }
    return [x, y]
}
// 坐标转换index
const locationToIndex = (x: number, y: number): number => {
    return y * level.value + x
}
// 添加键盘
const onKeydown = (event) => {
    const spaceIndex = getSpaceIndex();
    let index = spaceIndex;
    const code = event.keyCode;
    // 上38 下40 左37 右39
    switch (code) {
        case 37:
            index += 1
            break
        case 38:
            index += level.value
            break
        case 39:
            index -= 1
            break
        case 40:
            index -= level.value
            break
        case 13:
            startGame()
            break
    }
    handleMove(index)
}
onMounted(() => {
    window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
    <div class="game-box">
        <div class="list" :style="{ '--level': level }">
            <TransitionGroup name="list">
                <div class="list-item" v-for="(item, index) in messList" :key="item.num" :class="{ space: item.isSpace }"
                    @click="handleMove(index)">
                    {{ item.num }}
                </div>
            </TransitionGroup>
        </div>
        <div class="btn" @click="startGame">开始游戏</div>
    </div>
</template>
<style scoped lang="scss">
.game-box {
    width: 100vw;
    height: calc(100vh - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.list {
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    height: 400px;
    background: #99a9bf;
    /* --level: 4, */

    .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% / var(--level));
        height: calc(100% / var(--level));
        background: #ddd;
        border: 1px solid transparent;
        font-size: calc(150px / var(--level));
        font-weight: bold;
        cursor: pointer;

        &.space {
            z-index: -1;
            background: #99a9bf;
            color: transparent;
        }

        transform: all .3s;
    }
}

.btn {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background: #a8edea;
    color: #666666;
    font-size: 14px;
    filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 1));
    cursor: pointer;
}

.list-move {
    transition: transform 0.1s;
}
</style>
