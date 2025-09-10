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
    border: 2px solid blue;
    overflow: hidden;
}

#inner {
    background: green;
    width: 0px;
    height: 30px;
}

</style>