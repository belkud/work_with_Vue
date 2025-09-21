<script setup lang="ts">
import { ref, vModelCheckbox } from "vue";

let inputText = ref('')
let width = ref(150)
// let divWidth  = ref(150)

const like = ref(0)

const newColor = 'orange'


function changeWidth() {
    width.value += 25
    console.log(width.value);
    // divWidth.style.width= 150 + width.value + 'px'
    // console.log(width);
}



// async function async() {
    
//     try {
//         let page = await fetch('https://api.github.com/users/belkud')
//         let pageId = await page.json()
        
//         let myPhoto = pageId.avatar_url
//         console.log(myPhoto);
        
//     } catch (error) {
//         console.log('ошибка');
        
//     }
    
// }

// async()





function showEl(e: any) {
    console.log(e.target);

}

function showTarget(e: any) {
    e.target.style.background = 'red'
}

function showTarget2(e: any) {
    e.target.style.background = ''
}

let opacity = ref(0) as any

window.addEventListener('scroll', ()=> {
    window.scrollY>200 ? opacity.value = 1 : opacity.value = 0
})

// let myImg = document.createElement('img')
// myImg.src = 'https://avatars.githubusercontent.com/u/126806058?v=4'
// document.body.prepend(myImg)
// myImg.setAttribute('class', 'active')

let myPlace = ref('Введите что-нибудь ')
</script>

<template>
    <h2>AddFile4</h2>

    <input type="text" :placeholder="myPlace">

    <br>
    <br>
    <br>

    <div id="testDiv" >sdffggh</div>

    <button id="goUp"  :style="{opacity: opacity}">наверх</button>

<h3>Счётчик лайков</h3>

<button @click="like++">Like {{  like  }}</button>

    <h3>Запретить клик правой кнопкой мыши</h3>

    <div @contextmenu.prevent="console.log('test')" style="border: 1px solid gray;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur dignissimos sed ipsum error a deserunt
        non odit natus facilis, illo quis hic aspernatur cupiditate optio quidem reiciendis quia illum sit.</div>


    <h3>Работа с таблицей</h3>

    <table @mousemove="showTarget" @mouseout="showTarget2">
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


    <div :style="{ color: newColor, background: 'red', width: '150px' }"> добавление стилей</div>



    <input type="checkbox" @click="showEl" checked id="checkbox" />

    <form action="">
        <div>
            <input type="checkbox">
            <label for="">проверено</label>
        </div>

        <div>
            <input type="radio">
            <label for="">проверено</label>
        </div>

        <div>
            <input type="radio">
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
    <div>{{ inputText }}</div>

    <br>
    <button @click="changeWidth()">Button</button>
    <div id="divWidth" :style="'width:' + width + 'px'">изменение ширины</div>
    <br>
    <!-- <slot></slot> -->

</template>

<style scoped>
#divWidth {
    color: blue;
    min-width: 150px;
    background-color: orange
}

table {
    border-collapse: collapse;
    border: 1px solid gray;
    background: lightblue;
}

table td,
table th {
    padding: 5px;
    border: 1px solid gray;
}

/* table td:hover {
        background: orange;
    } */

#goUp {
    position: fixed;
    right: 10px;
    margin-top: 50%;
}

</style>
