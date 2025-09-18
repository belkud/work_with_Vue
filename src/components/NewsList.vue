<script setup lang="ts">
    import { ref } from "vue"
// const news = document.querySelector('#news')

function test (e:any) {
    // console.log(e);
        
}

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

<div id="news" v-if="isVisible" v-bind:style="'display:' +test">
    <div style=" display: flex; justify-content: space-between; align-items: center; ">
        <h3> Iste assumenda alias quam</h3>
        <button data-set="Button1" @click="isVisible = !isVisible">X [remove]</button>
    </div>
    <div style="text-align: left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste assumenda alias quam cumque dolor natus reiciendis ipsam dicta voluptatem quos? Sunt eos illum enim possimus error omnis nesciunt culpa ad?</div>
</div>

<div id="news" v-show="isVisible2" v-bind:style="'display:' +test">
    <div style=" display: flex; justify-content: space-between; align-items: center; ">
        <h3> Iste assumenda alias quam</h3>
        <button data-set="Button1" @click="isVisible2 = !isVisible2">X [remove]</button>
    </div>
    <div style="text-align: left;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste assumenda alias quam cumque dolor natus reiciendis ipsam dicta voluptatem quos? Sunt eos illum enim possimus error omnis nesciunt culpa ad?</div>
</div>

<div id="news" v-show="isVisible3" v-bind:style="'display:' +test">
    <div style=" display: flex; justify-content: space-between; align-items: center; ">
        <h3> Iste assumenda alias quam</h3>
        <button data-set="Button1" @click="isVisible3 = !isVisible3">X [remove]</button>
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