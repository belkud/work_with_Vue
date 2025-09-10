<script setup lang="ts">
 import { ref } from 'vue'

const swither = ref(true)

console.log(typeof swither);

</script>


<template>

<div class="task">Создать html-страницу, на которой будет кнопка и текст. При 
нажатии на кнопку, текст должен скрываться. При повторном на
жатии – текст должен снова отображаться. </div>

<div v-if="swither" id="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem similique officia deserunt magni earum eos, reprehenderit cumque suscipit recusandae dolorum atque, voluptas tempore, sed mollitia doloribus itaque ducimus repudiandae.</div>
<!-- <button class="showHideText"  @click="swither=!swither;">Показать текст</button> -->
<button class="showHideText"  @click="swither=!swither;"> {{ swither ==true ? 'Скрыть текст2' : 'Показать текст'}} </button>




</template>

<style scoped>
    #loremText {
        text-align: left;
        position: absolute;
        /* display: none; */
    }

    .showHideText {
        margin-top: 115px;
    }
</style>