<script setup lang="ts">
import { ref, reactive } from 'vue';
import IconButton from '../IconButton.vue'
const emits = defineEmits<{
    (e: 'resetIdx'): void
}>()
const drawerOpen = reactive([false, false, false])
const selectedRadios = reactive([0, 0, 0])
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
                <div class="listItem">
                    <h3>主題色彩</h3>
                    <IconButton
                        :size="48"
                        @click="drawerOpen[0] = !drawerOpen[0]"
                    >
                        <i v-show="drawerOpen[0]" class="fas fa-angle-double-up"></i>
                        <i v-show="!drawerOpen[0]" class="fas fa-angle-double-down"></i>
                    </IconButton>
                </div>
                <transition name="drawer">
                    <div v-show="drawerOpen[0]" class="radioGroup">
                        <div class="radio" @click="selectedRadios[0] = 0">
                            <b>淺色背景</b>
                            <IconButton :size="40">
                                <i v-show="selectedRadios[0] === 0" class="fas fa-circle"></i>
                                <i v-show="selectedRadios[0] !== 0" class="far fa-circle"></i>
                            </IconButton>
                        </div>
                        <div class="radio" @click="selectedRadios[0] = 1">
                            <b>深色背景</b>
                            <IconButton :size="40">
                                <i v-show="selectedRadios[0] === 1" class="fas fa-circle"></i>
                                <i v-show="selectedRadios[0] !== 1" class="far fa-circle"></i>
                            </IconButton>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="block">
                <div class="listItem">
                    <h3>每日總合樣式</h3>
                    <IconButton
                        :size="48"
                        @click="drawerOpen[1] = !drawerOpen[1]"
                    >
                        <i v-show="drawerOpen[1]" class="fas fa-angle-double-up"></i>
                        <i v-show="!drawerOpen[1]" class="fas fa-angle-double-down"></i>
                    </IconButton>
                </div>
                <transition name="drawer">
                    <div v-show="drawerOpen[1]" class="radioGroup">
                        <div class="radio" @click="selectedRadios[1] = 0">
                            <b>收支總金額</b>
                            <IconButton :size="40">
                                <i v-show="selectedRadios[1] === 0" class="fas fa-circle"></i>
                                <i v-show="selectedRadios[1] !== 0" class="far fa-circle"></i>
                            </IconButton>
                        </div>
                        <div class="radio" @click="selectedRadios[1] = 1">
                            <b>收入支出分別顯示</b>
                            <IconButton :size="40">
                                <i v-show="selectedRadios[1] === 1" class="fas fa-circle"></i>
                                <i v-show="selectedRadios[1] !== 1" class="far fa-circle"></i>
                            </IconButton>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="block">
                <div class="listItem">
                    <h3>收支紀錄樣式</h3>
                    <IconButton
                        :size="48"
                        @click="drawerOpen[2] = !drawerOpen[2]"
                    >
                        <i v-show="drawerOpen[2]" class="fas fa-angle-double-up"></i>
                        <i v-show="!drawerOpen[2]" class="fas fa-angle-double-down"></i>
                    </IconButton>
                </div>
                <transition name="drawer">
                    <div v-show="drawerOpen[2]" class="radioGroup">
                        <div class="radio" @click="selectedRadios[2] = 0">
                            <b>帳戶、類別、備註、金額</b>
                            <IconButton :size="40">
                                <i v-show="selectedRadios[2] === 0" class="fas fa-circle"></i>
                                <i v-show="selectedRadios[2] !== 0" class="far fa-circle"></i>
                            </IconButton>
                        </div>
                        <div class="radio" @click="selectedRadios[2] = 1">
                            <b>類別、備註、金額</b>
                            <IconButton :size="40">
                                <i v-show="selectedRadios[2] === 1" class="fas fa-circle"></i>
                                <i v-show="selectedRadios[2] !== 1" class="far fa-circle"></i>
                            </IconButton>
                        </div>
                        <div class="radio" @click="selectedRadios[2] = 2">
                            <b>帳戶、類別、金額、詳細備註</b>
                            <IconButton :size="40">
                                <i v-show="selectedRadios[2] === 2" class="fas fa-circle"></i>
                                <i v-show="selectedRadios[2] !== 2" class="far fa-circle"></i>
                            </IconButton>
                        </div>
                        <div class="radio" @click="selectedRadios[2] = 3">
                            <b>帳戶、類別、金額</b>
                            <IconButton :size="40">
                                <i v-show="selectedRadios[2] === 3" class="fas fa-circle"></i>
                                <i v-show="selectedRadios[2] !== 3" class="far fa-circle"></i>
                            </IconButton>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="exampleList">
                <div class="exampleListItem">
                    <u>範例</u>
                </div>
                <div class="exampleListItem">
                    <div class="date">2/14 (週一)</div>
                    <div v-show="selectedRadios[1] === 1" class="income">$3,000</div>
                    <div v-show="selectedRadios[1] === 1" class="expense">$250</div>
                    <div v-show="selectedRadios[1] === 0" class="total">$2,750</div>
                </div>
                <div class="exampleListItem">
                    <div class="tableLayoutFixed">
                        <div v-show="selectedRadios[2] !== 1" class="accountType">現金</div>
                        <div class="incomeOrExpenseType">薪資</div>
                        <div v-show="selectedRadios[2] === 0 || selectedRadios[2] === 1" class="briefNote">
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                        </div>
                        <div class="income incomeOrExpense">3,000</div>
                    </div>
                    <div v-show="selectedRadios[2] === 2" class="detailedNote">
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                    </div>
                </div>
                <div class="exampleListItem">
                    <div class="tableLayoutFixed">
                        <div v-show="selectedRadios[2] !== 1" class="accountType">現金</div>
                        <div class="incomeOrExpenseType">午餐</div>
                        <div v-show="selectedRadios[2] === 0 || selectedRadios[2] === 1" class="briefNote">
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                        </div>
                        <div class="expense incomeOrExpense">250</div>
                    </div>
                    <div v-show="selectedRadios[2] === 2" class="detailedNote">
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                    </div>
                </div>
                <div class="exampleListItem">
                    <div class="date">2/13 (週日)</div>
                    <div v-show="selectedRadios[1] === 1" class="income">$3,000</div>
                    <div v-show="selectedRadios[1] === 1" class="expense">$250</div>
                    <div v-show="selectedRadios[1] === 0" class="total">$2,750</div>
                </div>
                <div class="exampleListItem">
                    <div class="tableLayoutFixed">
                        <div v-show="selectedRadios[2] !== 1" class="accountType">現金</div>
                        <div class="incomeOrExpenseType">薪資</div>
                        <div v-show="selectedRadios[2] === 0 || selectedRadios[2] === 1" class="briefNote">
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                        </div>
                        <div class="income incomeOrExpense">3,000</div>
                    </div>
                    <div v-show="selectedRadios[2] === 2" class="detailedNote">
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                    </div>
                </div>
                <div class="exampleListItem">
                    <div class="tableLayoutFixed">
                        <div v-show="selectedRadios[2] !== 1" class="accountType">現金</div>
                        <div class="incomeOrExpenseType">午餐</div>
                        <div v-show="selectedRadios[2] === 0 || selectedRadios[2] === 1" class="briefNote">
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                            這是一個備註範例，
                        </div>
                        <div class="expense incomeOrExpense">250</div>
                    </div>
                    <div v-show="selectedRadios[2] === 2" class="detailedNote">
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                        這是一個備註範例，
                    </div>
                </div>
            </div>
            <div class="buttonGroup">
                <div class="button" @click="emits('resetIdx')">取消</div>
                <div class="button">儲存</div>
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
main {
    max-height: calc(100% - 48px);
    overflow-y: scroll;
}
.block {
    position: relative;
    background-color: #333333;
    z-index: 2;
    overflow: hidden;
}
.listItem {
    display: flex;
    padding: 0px 0px 0px 8px;
    position: relative;
    z-index: 1;
    background-color: inherit;
}
.listItem > h3 {
    flex-grow: 1;
    margin: auto;
}
.radioGroup {
    margin: 0px 4px;
    border: 2px solid #dddddd;
    border-radius: 5px;
    transition: transform 0.25s;
    background-color: inherit;
    position: relative;
    z-index: 0;
}
.radio {
    padding: 8px 0px 8px 8px;
    display: flex;
    align-items: center;
}
.radio > b {
    flex-grow: 1;
    font-size: 1.5rem;
}
.drawer-enter-from,
.drawer-leave-to {
    transform: translateY(-100%);
}
.drawer-enter-to,
.drawer-leave-from {
    transform: none;
}
.exampleList {
    margin: 4px;
    border: 2px solid #dddddd;
    border-radius: 5px;
}
.exampleListItem {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    font-size: 1.5rem;
    padding: 4px;
    margin:  4px 0px;
    border-bottom: 1px solid white;
}
.exampleListItem > u {
    flex-grow: 1;
}
.exampleListItem:last-child {
    margin-bottom: 0;
    border: none;
}
.tableLayoutFixed {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
}
.date {
    flex-grow: 1;
}
.income {
    color: #e292ad;
    text-align: right;
}
.expense {
    color: #80aeea;
    text-align: right;
    margin-left: 8px;
}
.total {
    margin-left: 8px;
}
.accountType {
    flex: 1;
}
.incomeOrExpenseType {
    flex: 1;
}
.briefNote {
    flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
}
.incomeOrExpense {
    flex: 1;
    margin: 0;
}
.detailedNote {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1rem;
}
.buttonGroup {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.button {
    width: 49.9%;
    padding: 16px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #80aeea;
}
</style>