<template>

<h2>AddColorBlock</h2>


<div><span :style="'color:' +fontColor">Задание 2</span> <br> Создать html-страницу с кнопкой, по нажатию на которую 
добавляются цветные блоки на страницу. По клику на сам блок, 
он должен удаляться со страницы.</div>
<br>
<br>


<div id="container_block" >    
    <div v-for="(block, index) in blocks" :style="{ 
            backgroundColor: block.background,
            width:'100px',
        }"
        
@click="deleteBlock(index)">{{index+1}}, {{ block.background }}</div>

</div>


<button @click="addBlock">Add block</button>

<button @click="console.log(getRandomColor())">test color</button>
</template>



<script setup lang="ts">
import { ref } from "vue";


const blocks = ref([]);
// test
// test
// test
// Генерация случайного цвета в формате RGB
function getRandomColor () {
    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};


    // Добавление rgb значений в массив
function addBlock() {
    blocks.value.push({
    background: getRandomColor()
});
    
console.log(...blocks.value);
};

// Удаление выбранного блока
function deleteBlock (index:any) {
    blocks.value.splice(index, 1);
};
 


</script>



<style scoped>
#container_block {
    display: flex; 
    gap: 15px; 
    width: 500px; 
    flex-wrap: wrap; 
    border: 1px solid white;    
}

</style>



