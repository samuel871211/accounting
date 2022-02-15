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

<!-- TODO: 切換深色/淺色主題的功能還沒做完 -->
<style> 
html, body, #app {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 16px;
    color: #fbfbfb;
    background-color: #333333;
}
* {
    box-sizing: border-box;
    outline: none;
}
.darkTheme {
    color: #fbfbfb;
    background-color: #333333;
}
.whiteTheme {
    color: #555555;
    background-color: #ffffff;
}
</style>
