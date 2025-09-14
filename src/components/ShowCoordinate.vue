<script setup lang="ts">
import { ref } from 'vue'


const mouseX = ref('')
const mouseY = ref('')
const mouseButton = ref('') as any

function showCoordinate (e:any) {
    mouseX.value = e.offsetX
    mouseY.value = e.offsetY
}
 
 function testMouse(e:any) {
    mouseButton.value = e.button
    mouseButton.value.style.background =  'orange'
 }
</script>


<template>
    <div class="task"> Создать html-страницу с div, который занимает всю ширину 
и высоту экрана. При движении мышкой внутри этого div, выво
дить текущие координаты мышки. При клике кнопкой мыши туда 
же, выводить, какой именно кнопкой был совершен клик (правой 
или левой).</div>

<div id="field" @mousemove="showCoordinate" @mousedown="testMouse">{{ mouseX }} px по оси Х, <br>
{{ mouseY }} px по оси Y <br> 
{{ mouseButton == 0  ? 'Клик левой кнопкой' : 'Клик правой кнопкой' }}


</div>
</template>



<style scoped>
    #field {
        width: 300px;
        height: 100px;
        background: gray;
        cursor:default;
        margin: auto;
        margin-top: 20px;
    }
</style>

