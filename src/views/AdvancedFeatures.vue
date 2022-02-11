<script setup lang="ts">
import './layout.css'
import { ref } from 'vue'
import { components } from '../components/AdvancedFeatures'
const emits = defineEmits<{
    (e: 'switchView', index: number): void
}>()
// data
const selectedIdx = ref(-1)

// methods
function handleTouchStart (e: TouchEvent) {
    const target = e.currentTarget as HTMLDivElement | null
    target?.classList.add('touching')
}
function handleTouchEnd (e: TouchEvent) {
    const target = e.currentTarget as HTMLDivElement | null
    target?.classList.remove('touching')
}
function resetIdx (): void {
    selectedIdx.value = -1
}
</script>

<template>
    <div class="viewContainer" v-show="selectedIdx === -1">
        <header>
            <h2>進階功能</h2>
        </header>
        <main>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 0"
            >
                <b :style="{ color: 'red' }">User</b>
                <b>的錢包</b>
            </div>
            <div class="biggestSquare">
                <b>0.0%</b>
                <b>中獎率</b>
            </div>
            <div class="biggestSquare">
                <b>1</b>
                <b>發票數</b>
            </div>
            <div class="biggestSquare">
                <b>120</b>
                <b>記錄數</b>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 1"
            >
                <i class="fas fa-search"></i>
                <span>搜尋紀錄</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 2"
            >
                <i class="fas fa-book-open"></i>
                <span>備份還原</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 3"
            >
                <i class="fas fa-lock"></i>
                <span>密碼</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 4"
            >
                <i class="fas fa-bell"></i>
                <span>提醒</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 5"
            >
                <i class="fas fa-folder"></i>
                <span>帳戶排序</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 6"
            >
                <i class="fas fa-coins"></i>
                <span>支出類別</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 7"
            >
                <i class="fas fa-envelope-open"></i>
                <span>收入類別</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 8"
            >
                <i class="fas fa-palette"></i>
                <span>樣式選擇</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 9"
            >
                <i class="fas fa-robot"></i>
                <span>自動記帳</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 10"
            >
                <i class="fas fa-barcode"></i>
                <span>載具條碼</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 11"
            >
                <i class="fas fa-gift"></i>
                <span>發票開獎</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 12"
            >
                <i class="fas fa-gamepad"></i>
                <span>小遊戲</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 13"
            >
                <i class="fab fa-gratipay"></i>
                <span>回饋</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 14"
            >
                <i class="fas fa-question"></i>
                <span>問與答</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 15"
            >
                <i class="fas fa-info"></i>
                <span>資訊</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 16"
            >
                <i class="fas fa-crown"></i>
                <span>升級版本</span>
            </div>
            <div
                class="biggestSquare"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @click="selectedIdx = 17"
            >
                <i class="fas fa-cog"></i>
                <span>其他設定</span>
            </div>
        </main>
        <footer>
            <i class="fas fa-clipboard-list" @click="emits('switchView', 0)"></i>
            <i class="fas fa-chart-pie" @click="emits('switchView', 1)"></i>
            <i class="fas fa-id-card" @click="emits('switchView', 2)"></i>
            <i class="fas fa-user-circle" @click="emits('switchView', 3)"></i>
        </footer>
    </div>
    <transition name="slideY">
        <keep-alive>
            <component
                :is="components[selectedIdx]"
                @resetIdx="resetIdx"
            ></component>
        </keep-alive>
    </transition>
</template>

<style scoped>
main {
    display: flex;
    flex-wrap: wrap;
}
.biggestSquare {
    width: min(25vw, calc((100vh - 96px) / 6));
    height: min(25vw, calc((100vh - 96px) / 6));
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.biggestSquare > i {
    font-size: 2rem;
    color: #8fb6ff;
}
.biggestSquare > span {
    padding-top: 8px;
}
.biggestSquare > b {
    font-size: 1.25rem;
}
.touching {
    background-color: rgba(204, 204, 204, 0.3);
    transition:background-color 0.2s;
}
.slideY-enter-to {
    transform: none;
}
.slideY-enter-from {
    transform: translateY(100%);
}
.slideY-enter-active {
    transition: transform 0.4s;
}
</style>