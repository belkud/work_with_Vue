
<template>
<div>File homework2</div>


<!-- bind через style -->
<div :class="addClass">< class: {{ addClass }} >,  Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>

<!-- bind через style -->
<div :style="addStyle">{{ addStyle }}</div>

<!-- циклы -->
<div v-for="value, i in addStyle">{{i}}, {{ value }}</div>

<!-- переход по ссылке -->
<a :href="link">Переход по ссылке</a>
<br><br><br><br><br><br><br><br><br>
</template>

<script setup lang="ts">
import {ref} from 'vue'

let addClass = ref('changeColor')
let addStyle = [
    { color: "green" }, 
    { fontSize: "1.2em"}
]

let link = ref('https://dzen.ru/?clid=2233626&yredirect=true') 

console.log(addStyle);

</script>

<style scoped>
.changeColor {
    font-size: 1.2em;
    color: aqua;
}



</style>
