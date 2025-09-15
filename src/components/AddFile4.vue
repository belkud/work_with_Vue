
<script setup lang="ts">
import { ref } from "vue";

let inputText = ref('')
let width = ref(150)
// let divWidth  = ref(150)

console.log('12345');

function changeWidth() {
    width.value+=25
    console.log(width.value);
    // divWidth.style.width= 150 + width.value + 'px'
    // console.log(width);
    
}

</script>

<template>
    <form action="">
        <div>
            <input  type="checkbox">
            <label for="">проверено</label>
        </div>

        <div>
            <input type="radio" >
            <label for="">проверено</label>
        </div>

        <div>
            <input type="radio" >
            <label for="">проверено</label>
        </div>
        <select name="" id="">
            <option value="">red</option>
            <option selected value="">orange</option>
            <option value="">blue</option>
        </select>
    </form>



    <h2>AddFile4</h2>

    <slot></slot>
  
    <input type="text" v-model="inputText">
  <div>{{ inputText  }}</div>

  <br>
  <button @click="changeWidth()">Button</button>
  <div id="divWidth" :style="'width:'  +width +'px'" >изменение ширины</div>
  <br>
  <!-- <slot></slot> -->

</template>

<style scoped>
    #divWidth {
        color: blue ;
        min-width: 150px;
        background-color: orange
    }
</style>






