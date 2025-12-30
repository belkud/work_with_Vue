<script setup lang="ts">

import {ref} from 'vue'

 
let buttonsInfo = ref([
    'Информация с первой кнопки',
    'Информация со второй кнопки',
    'Информация с третьей кнопки',
    'Информация с четвертой кнопки',
    'Информация с пятой кнопки',
])
let buttons = ref(['Основы', 'Компоненты', 'Роутер', 'Vuex', 'Composition'])

let acc= ref(0) 

function nextButton () {
    acc.value++
    if (acc.value==buttonsInfo.value.length) {
        acc.value=0
    }
}

function previousButton () {
    acc.value--
    if (acc.value==-1) {
        acc.value= buttonsInfo.value.length-1
    }
}
function selectButton(i:number) {
    acc.value = i
}

</script>




<template>
    <h2 style="color: red;">План по изучению vue JS</h2>
    
    <div v-for="(value, index) in buttonsInfo"
    v-show="index === acc"
    >{{ value }}</div>

    <ul class="buttonLocation" >
        <li @click="selectButton(i)"
        :class="{ activeButton: i === acc }" 
        v-for="(value, i) in buttons"        
        >{{ value }}</li>
        
    </ul>
    <div class="buttonLocation">
        <button @click="previousButton">Назад</button>
        <button @click="nextButton()">Вперед</button>
    </div>
    <!-- <div :class="{ activeButton }">fhjghkgjk</div> -->
</template>


<style scoped>
.buttonLocation {
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
}

.buttonLocation li {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.activeButton {
    background-color: #30b67a;
    /* color: red; */
    border: 1px solid red !important;
}
</style>
 
 