<script setup lang="ts">
import './layout.css'
const emits = defineEmits<{
    (e: 'switchView', index: number): void
}>()
</script>
<template>
    <div class="viewContainer">
        <header>
            <h2>Statistic</h2>
        </header>
        <main></main>
        <footer>
            <i class="fas fa-clipboard-list" @click="emits('switchView', 0)"></i>
            <i class="fas fa-chart-pie" @click="emits('switchView', 1)"></i>
            <i class="fas fa-id-card" @click="emits('switchView', 2)"></i>
            <i class="fas fa-user-circle" @click="emits('switchView', 3)"></i>
        </footer>
    </div>
</template>

<style scoped>
</style>