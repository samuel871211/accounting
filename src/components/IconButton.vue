<script setup lang="ts">
defineProps<{ size: number }>()

// methods
function handleTouchStart (e: TouchEvent) {
    const target = e.currentTarget as HTMLDivElement | null
    target?.classList.add('touching')
}
function handleTouchEnd (e: TouchEvent) {
    const target = e.currentTarget as HTMLDivElement | null
    target?.classList.remove('touching')
}
</script>
<template>
    <div
        class="IconButton"
        :style="{ width: `${size}px`, height: `${size}px` }"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
    >
        <slot></slot>
    </div>
</template>
<style scoped>
.IconButton {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.touching {
    background-color: rgba(204, 204, 204, 0.3);
    transition:background-color 0.2s;
}
</style>