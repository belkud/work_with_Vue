<template>

<h2>Файл Homework2</h2>

<div><span :style="'color:' +fontColor">Задание 1</span> <br>
 Создать html-страницу с возможностью ввода числового значения через кнопки (больше, меньше).
 Пользователь не должен иметь возможность печатать текст 
или цифры. Число изменяется только при нажатии на кнопки.</div>


<div :style="bord">{{ number }}</div>
<button @click="number--">&#60;</button>
<button @click="number++" >&#62;</button>

<br>
<br>
<br>
<br>


<br>


<!--! первый способ -->
<div :style="'color:'+fontColor">pageUp</div>

<!--! второй способ -->
<div :style="fontBack">pageDown</div>

</template>



<script setup lang="ts">
import { ref } from "vue";

let fontColor = ref('red')
let fontBack = ref('background:aqua')

let number = ref(0)

let bord = ref([
    `border: 1px solid white; 
    width : 100px;
    margin: 0 auto;
    background: orange;`
])


</script>



<style scoped>


</style>



