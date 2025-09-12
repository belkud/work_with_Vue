<script setup lang="ts">
    import { ref } from "vue"
const digitals = ref('')
console.log(digitals);
// const news = document.querySelector('#news')

const test = ref('block')
</script>



<template>
<div class="task">Создать html-страницу со списком новостей. Возле каждой 
новости должна быть кнопка Удалить, при нажатии на которую 
соответствующая новость исчезает.</div>
<br>
<br>
<br>

<div id="news"  v-bind:style="'display:' +test">
    <div style=" display: flex; justify-content: space-between; align-items: center; ">
        <h3> Iste assumenda alias quam</h3>
        <button @click="test='5'">X [remove]</button>
    </div>
    <div style="text-align: left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste assumenda alias quam cumque dolor natus reiciendis ipsam dicta voluptatem quos? Sunt eos illum enim possimus error omnis nesciunt culpa ad?</div>
</div>
<div id="news2"></div>

</template>


<style scoped>
#news {
    max-width: 500px;
}
    button {
        background: lightblue;
        padding: 5px;
        padding-top: 3px;
        height: 30px;
    }

</style>