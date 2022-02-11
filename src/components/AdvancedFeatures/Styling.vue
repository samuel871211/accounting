<script setup lang="ts">
import IconButton from '../IconButton.vue'
const emits = defineEmits<{
    (e: 'resetIdx'): void
}>()
</script>

<template>
    <div id="container">
        <header>
            <IconButton :size="48" @click="emits('resetIdx')">
                <i class="fas fa-arrow-left"></i>
            </IconButton>
            <h2>樣式選擇</h2>
        </header>
        <main>
            <div class="block">
                <h3>主題色彩</h3>
                <IconButton :size="48">
                    <i class="fas fa-angle-double-down"></i>
                </IconButton>
            </div>
            <div class="block">
                <h3>每日總合樣式</h3>
                <IconButton :size="48">
                    <i class="fas fa-angle-double-down"></i>
                </IconButton>
            </div>
            <div class="block">
                <h3>收支紀錄樣式</h3>
                <IconButton :size="48">
                    <i class="fas fa-angle-double-down"></i>
                </IconButton>
            </div>
        </main>
    </div>
</template>

<style scoped>
#container {
    width: 100%;
    height: 100%;
}
header {
    display: flex;
    align-items: center;
}
header i {
    font-size: 1.5rem;
    margin-left: 8px;
    margin-right: 8px;
}
.block {
    display: flex;
    margin: 0px 0px 0px 8px;
}
.block > h3 {
    flex-grow: 1;
    margin: auto;
}
</style>