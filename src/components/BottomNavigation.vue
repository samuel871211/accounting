<script setup lang="ts">
const emits = defineEmits<{
    (e: 'switchView', index: number): void
}>()
</script>
<template>
    <footer>
        <i class="fas fa-clipboard-list" @click="emits('switchView', 0)"></i>
        <i class="fas fa-chart-pie" @click="emits('switchView', 1)"></i>
        <i class="fas fa-id-card" @click="emits('switchView', 2)"></i>
        <i class="fas fa-user-circle" @click="emits('switchView', 3)"></i>
    </footer>
</template>
<style scoped>
footer {
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
    padding: 8px 0px;
}
</style>