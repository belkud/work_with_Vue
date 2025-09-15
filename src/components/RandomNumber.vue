
<script setup lang="ts">
import { ref } from "vue";
const randomNum =ref(Math.round(Math.random()*100)) as any

// const attributes = ref({
    //     id : 'divId',
    //     class : 'divClass',
    //     style: 'background:green'
    // })
    
</script>

<template>
    <div class="task"> Создать html-страницу для генерации случайных чисел. На 
    странице должна быть кнопка, при нажатии на которую случайное 
    целое число от 0 до 100 выводится в div</div>
    
    <h3>Random Number:</h3>
    <div>
        <div style="font-weight: 2em ;">{{randomNum}}</div>
        <button @click.prevent="randomNum = Math.round(Math.random()*100)">Generate Random Number</button>
    </div>
        <!-- <div :="attributes">Random Nummmmber,  число {{ guessNum }} -  {{ guessNum%2==0 ? 'Четное' : 'Нечетное' }}</div> -->

</template>


<style scoped>

</style>