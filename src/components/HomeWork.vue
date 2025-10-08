

<template>
    <h3>Файл HomeWork</h3>
    <div>Задание 1
Создать html-страницу для ввода имени пользователя.
Необходимо проверять каждый символ, который вводит поль-
зователь. Если он ввел цифру, то не отображать ее в input.</div>

<input @keydown="checkLetters" type="text">

    <br>
    <br>
    <br>

<div>Создать html-страницу с кнопкой Открыть и модальным
окном. На модальном окне должен быть текст и кнопка Закрыть.
Изначально модальное окно не отображается. При клике на
кнопку Открыть появляется модальное окно, на кнопку Закрыть –
исчезает.</div>
<button @click="isVisible =true">Open</button>
<br>
<br>

<div v-show="isVisible"  style="background: gray; height: 100px; width: 300px;">
    <div @click="isVisible =false" class="cross">X</div>
</div>

<hr>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Задание 1
function checkLetters (e:any) {
    if (e.key >='0' && e.key<=9) {
        e.preventDefault()
    }
}

// Задание 2

let isVisible = ref(false)




</script>

<style>
    .cross {
        width: 10px;
        margin: 10px;
        margin-left: auto;
        cursor: pointer;
    }
    .cross:hover {
        background: black;
    }
</style>



