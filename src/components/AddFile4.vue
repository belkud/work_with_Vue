
<script setup lang="ts">
import { ref, vModelCheckbox } from "vue";

let inputText = ref('')
let width = ref(150)
// let divWidth  = ref(150)

const newColor = 'orange'

console.log('12345');

function changeWidth() {
    width.value+=25
    console.log(width.value);
    // divWidth.style.width= 150 + width.value + 'px'
    // console.log(width);
}
    




function showEl (e:any) {
        console.log(e.target);
        
}

function showTarget(e:any) {
    e.target.style.background = 'red'
}

function showTarget2(e:any) {
    e.target.style.background = ''
}

</script>

<template>
<h2>AddFile4</h2>




<h3>Работа с таблицей</h3>

<table @mousemove="showTarget"  @mouseout="showTarget2">
    <tr>
        <th>header1</th>
        <th>header2</th>
        <th>header3</th>
    </tr>
    <tr>
        <td>cell1</td>
        <td>cell2</td>
        <td>cell3</td>
    </tr>
    <tr>
        <td>cell1</td>
        <td>cell2</td>
        <td>cell3</td>
    </tr>
    <tr>
        <td>cell1</td>
        <td>cell2</td>
        <td>cell3</td>
    </tr>
</table>


<div :style="{color: newColor, background:'red', width: '150px'}"> добавление стилей</div>



<input type="checkbox" @click="showEl" checked id="checkbox" />

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

    table {
        border-collapse:collapse;
        border: 1px solid gray;
        background: lightblue;
    }
    table td, table th{
        padding: 5px;
        border: 1px solid gray;
    }

    /* table td:hover {
        background: orange;
    } */
</style>






