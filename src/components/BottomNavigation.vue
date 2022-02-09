<script setup lang="ts">
const props = defineProps<{
    selectedIdx: number
}>()
const emits = defineEmits<{
    (e: 'toggleSelectedIdx', idx: number): void
}>()
</script>
<template>
    <div class="bottomNavigation">
        <i class="fas fa-clipboard-list" @click="emits('toggleSelectedIdx', 0)"></i>
        <i class="fas fa-chart-pie" @click="emits('toggleSelectedIdx', 1)"></i>
        <i class="fas fa-id-card" @click="emits('toggleSelectedIdx', 2)"></i>
        <i class="fas fa-user-circle" @click="emits('toggleSelectedIdx', 3)"></i>
    </div>
</template>
<style scoped>
.bottomNavigation {
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
    padding: 8px 0px;
}
</style>