<template>

<h2>AddColorBlock</h2>


<div><span :style="'color:' +fontColor">Задание 2</span> <br> Создать html-страницу с кнопкой, по нажатию на которую 
добавляются цветные блоки на страницу. По клику на сам блок, 
он должен удаляться со страницы.</div>
<br>
<br>


<div name="fade" tag="div" style="display: flex; gap: 15px; width: 500px; flex-wrap: wrap;">
    
    <div 
        v-for="(block, index) in blocks" 
        :key="block.id"
        class="color-block"
        :style="{ backgroundColor: block.color,
            width:'100px',
        }"
        @click="removeBlock(index)"
>
        <div class="block-info">
            {{ block.color }}
        </div>
    </div>

</div>


<button @click="addBlock">Add block </button>


</template>



<script setup lang="ts">
import { ref } from "vue";




// второе задание



const blocks = ref([]);
let blockId = 1;

// Генерация случайного цвета в формате RGB
const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};

    // Добавление нового блока
const addBlock = () => {
    blocks.value.push({
        id: blockId++,
        color: getRandomColor()
    });
};

const removeBlock = (index:any) => {
    blocks.value.splice(index, 1);
};
 


</script>



<style scoped>


</style>



