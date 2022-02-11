<script setup lang="ts">
import { ref } from 'vue'
import 'normalize.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import { views } from './views'

// data
const bottomNavSelectedIdx = ref(3)

// methods
function switchView (index: number): void {
    bottomNavSelectedIdx.value = index
}
</script>

<template>
    <keep-alive>
        <component
            :is="views[bottomNavSelectedIdx]"
            @switchView="switchView"
        ></component>
    </keep-alive>
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
