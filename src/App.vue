<script setup lang="ts">
import { ref } from 'vue'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import BottomNavigation from './components/BottomNavigation.vue'
import { components } from './views'

// data
const bottomNavSelectedIdx = ref(3)

// method
function toggleSelectedIdx (idx: number): void {
    bottomNavSelectedIdx.value = idx
}
</script>

<template>
    <keep-alive>
        <component :is="components[bottomNavSelectedIdx]"></component>
    </keep-alive>
    <BottomNavigation
        ref="bottomNavigation"
        :selectedIdx="bottomNavSelectedIdx"
        @toggleSelectedIdx="toggleSelectedIdx"
    />
</template>

<style>
html, body, #app {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #333333;
    color: white;
    font-size: 16px;
}
* {
    box-sizing: border-box;
    outline: none;
}
.darkTheme {
    color: white;
    background-color: #222222;
}
.whiteTheme {
    color: black;
    background-color: #cccccc;
}
</style>
