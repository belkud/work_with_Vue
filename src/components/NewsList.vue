<script setup lang="ts">
    import { ref } from "vue"


let isVisible = ref(true) as any
let isVisible2 = ref(true)
let isVisible3 = ref(true)


</script>



<template>
<div class="task">Создать html-страницу со списком новостей. Возле каждой 
новости должна быть кнопка Удалить, при нажатии на которую 
соответствующая новость исчезает.</div>
<br>
<br>
<br>

<div id="news" v-if="isVisible">
    <div>
        <h3> Iste assumenda alias quam</h3>
        <button @click="isVisible = !isVisible">X [remove]</button>
    </div>
    <div style="text-align: left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste assumenda alias quam cumque dolor natus reiciendis ipsam dicta voluptatem quos? Sunt eos illum enim possimus error omnis nesciunt culpa ad?</div>
</div>

<div id="news" v-show="isVisible2">
    <div>
        <h3> Iste assumenda alias quam</h3>
        <button @click="isVisible2 = !isVisible2">X [remove]</button>
    </div>
    <div style="text-align: left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste assumenda alias quam cumque dolor natus reiciendis ipsam dicta voluptatem quos? Sunt eos illum enim possimus error omnis nesciunt culpa ad?</div>
</div>

<div id="news" v-show="isVisible3" >
    <div>
        <h3> Iste assumenda alias quam</h3>
        <button @click="isVisible3 = !isVisible3">X [remove]</button>
    </div>
    <div style="text-align: left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste assumenda alias quam cumque dolor natus reiciendis ipsam dicta voluptatem quos? Sunt eos illum enim possimus error omnis nesciunt culpa ad?</div>
</div>






</template>


<style scoped>
#news {
    max-width: 500px;
}

#news>div {
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
}

#news button {
    background: lightblue;
    padding: 5px;
    padding-top: 3px;
    height: 30px;
    transition: .3s;
}

#news button:hover {
    background: black;
}
</style>