
<template>
<div>File homework2</div>
 











<!-- bind через style -->
<div :class="addClass">< class: {{ addClass }} >,  Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>

<!-- bind через style -->
<div :style="addStyle">{{ addStyle }}</div>

<!-- циклы -->
<div v-for="value, i in addStyle">{{i}}, {{ value }}</div>

<!-- переход по ссылке -->
<a v-if="bool" :href="link">Переход по ссылке</a>
<br>

<button  @click="bool=!bool"> {{bool==true ? 'Скрыть ссылку' : 'показать ссылку'}}</button>

<div> число {{ number%2 ? 'нечётное' : 'чётное' }}</div>

<br>
<button ref="myRef" id="testBtn" @click="">123</button>
<br><br><br><br><br><br><br><br><br>
</template>







<script setup lang="ts">
import {ref, onMounted } from 'vue'

let number = ref(5) 
// setInterval(()=> {
//     number.value++
// },1000)

let addClass = ref('changeColor')
let addStyle = ref([
    { color: "green" }, 
    { fontSize: "1.2em"}
])

let link = ref('https://dzen.ru/?clid=2233626&yredirect=true') 

// Создаем ref для кнопки
 
// Создаем ref для кнопки
const myRef = ref(null);

    // Выводим кнопку в консоль
    onMounted(()=> {
        // первый способ
        console.log(myRef.value);
        
        // второй способ
        const testBtn: any = document.getElementById('testBtn')
        console.log(testBtn);
 
    })
 
    
let bool = ref(true)
console.log(addStyle);

let swithers = true
 function showSwithcer() {
    if (swithers==true) {
        swithers = false
    } else {
        swithers = true
    }
    console.log(swithers);
    
 }
showSwithcer()

</script>







<style scoped>
.changeColor {
    font-size: 1.2em;
    color: var(--color-secondary);
}

</style>
