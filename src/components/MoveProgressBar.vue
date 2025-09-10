<script setup lang="ts">
    import { ref } from 'vue'

const fillProgressBar = ref(0)

</script>


<template>

<div class="task">Создать html-страницу с progressbar и кнопкой, при нажатии 
на которую заполненность progressbar увеличивается на 5%.</div>


<div id="outer">
    <div id="inner" :style="'width:' +fillProgressBar + 'px'">
    </div>
</div>
<button @click="fillProgressBar+=10; console.log(fillProgressBar)">Добавить 5 процентов</button>


</template>


<style scoped>

#outer {
    width: 200px;
    height: 30px;
    border: 1px solid rgb(85, 85, 228);
    border-radius: 5px;
    overflow: hidden;
    margin: 50px;
}

#outer:hover {
border: 1px solid rgb(217, 217, 245);
}

#inner {
    background: green;
    width: 0px;
    height: 30px;
    transition: .3s;
}

</style>