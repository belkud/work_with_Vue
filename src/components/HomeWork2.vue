
<template >
<div> {{ title }} </div>
 

<input v-model="pop" type="text">
<div>{{ pop }}</div>

<!--! Список заметок -->

<div id="notesContainer">

    <h3>Список с заметками</h3>
    <input
    @keypress.enter="addMark" v-model="notes" type="text" placeholder="Заметка" 
    :style="{ color: notes.length > 10 ? 'red' : 'white' }">
    <ol @click="deleteItem($el)">
        <li class="list" v-for="(note) in notesArray" >{{ toUpperCase(note) }}<button class="deleteBtn">×</button></li>
    </ol>
    <button @click="addMark"> Добавить заметку</button>
    <div :style="myDiv">Напишите что-нибудь</div>
    <hr>
    <div>{{ notesArray.length==0 ? 'Пожалуйста, добавьте первую заметку' : `Количество заметок: ${notesArray.length}`}} </div>
</div>










<br>
<br>
<br>
<textarea name="" id="" v-model="textAreaText" :placeholder="placeholderText">cxvcxsdfsdf</textarea>

<div style="min-height: 50px;">{{ textAreaText }}</div>


<!-- без v-model -->
<input type="text" @input="showSymbols">
<div style="min-height: 50px;">inputsText: {{ inputsText }}</div>

<!-- с v-model -->
<input type="text" v-model="textInput">
<div style="min-height: 50px;">{{ textInput }}</div>






<!-- bind через style -->
<div :class="addClass">< class: {{ addClass }} >,  Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>

<!-- bind через style -->
<div  :style="addStyle">{{ addStyle }}</div>

<!-- циклы -->
<div v-for="value, i in addStyle">{{i}}, {{ value }}</div>

<!-- переход по ссылке -->
<a v-if="bool" :href="link">Переход по ссылке</a>
<br>

<button  @click="bool=!bool"> {{bool==true ? 'Скрыть ссылку' : 'показать ссылку'}}</button>

<div> число {{ number%2 ? 'нечётное' : 'чётное' }}</div>

<br>
<div>меняем цвет темы</div>
<button  id="testBtn" @click="changeTheme">{{ theme==false ? 'темная' : 'светлая' }}</button>
<div>Ширина вашего экрана {{ screenWidth }} px</div>

<slot></slot>

<input type="text" v-bind:placeholder="`${number}`">
    <header>
        <slot name="header"></slot> <!-- 👈 Сюда попадет #header -->
        <slot name="sign"></slot>
    </header>

    <!-- <main> -->
        <slot name="main"></slot>
    <!-- </main> -->
    

  




<!-- создать две кнопки с разными слотс -->

<slot name="viteSvg"></slot>

<br>
<button>
    <slot name="btn"></slot>
</button>
<br>
<button>
    <slot name="btn2"></slot>
</button>
<br>
<button>
    <slot name="btn"></slot>
</button>
    <!-- <br>
    <slot name="btn2"></slot>
    <br>
    <slot name="btn"></slot> -->
<br><br><br><br><br><br><br><br><br>

 

</template>







<script setup lang="ts">
import { ref } from 'vue'

let pop = ref('')
const myDiv = ref({color:'transparent'});


let notes = ref('')
let notesArray = ref<string[]>([])
function addMark () {
    // console.log('Событие:', event.type);
console.log(notesArray.value);

    myDiv.value.color = 'red'

    if (notes.value != '') {
        notesArray.value.push(notes.value)
        myDiv.value.color = 'transparent'
    }
    
    notes.value = ''
}

function deleteItem (index:number) {
    notesArray.value.splice(index,1)
}
function toUpperCase (note:string) {
    return note.toUpperCase()
}

// второй вариант
// function deleteItem2 (e:any) {
//     if (e.target.nodeName == 'BUTTON') {
//         e.target.closest('li').remove()
//     }
    
//     console.log(e.target.nodeName);
    
// }

// function clearInput(e:any) {
//     if (e.key == 'Enter') {
//         addMark()
//         notes.value = ''
//     }
    
// }


 












let textAreaText = ref('')
let textInput = ref('')

let inputsText = ref('')
function showSymbols (e:any) {
    inputsText.value = e.target.value
}
  
    
// console.time('timer'); console.timeEnd('timer');
const title = ref('File homework2')
const placeholderText = ref('Введите сюда текст')
 
const checkWidth =document.documentElement
let screenWidth = ref(parseInt(getComputedStyle(checkWidth).width))

window.addEventListener('resize', ()=> {
    screenWidth.value = parseInt(getComputedStyle(checkWidth).width);
})

const bodyColor = document.documentElement
let theme = ref(true);

function changeTheme() {
    theme.value = !theme.value
        if (theme.value==true) {
            bodyColor.style.setProperty('--color-bg', 'gray')
            bodyColor.style.setProperty('--color-primary', 'black')
        } else {
            bodyColor.style.setProperty('--color-bg', 'black')       
            bodyColor.style.setProperty('--color-primary', 'white')
        }
   
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--color-primary'));
    }
    
 
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
// const changeTheme = ref('');

//     // Выводим кнопку в консоль
//     onMounted(()=> {
//         // первый способ
//         // console.log(changeTheme.value);
        
//         // второй способ
//         const testBtn = document.getElementById('testBtn')
//         // console.log(testBtn);
 
//     })

let bool = ref(true)
// console.log(addStyle);

let swithers = true
 function showSwithcer() {
    if (swithers==true) {
        swithers = false
    } else {
        swithers = true
    }
    // console.log(swithers);
    
 }
showSwithcer()

 

// let width = ref('')



</script>







<style scoped>
#notesContainer {
    /* background: gray; */
    border-radius: 25px;
    padding: 20px;
    padding-top: 10px;
    margin-top: 25px;
    border: 1px solid aqua;
    
}
    
.changeColor {
    font-size: 1.2em;
    color: var(--color-secondary);
}

.list {
    width: 200px;
    padding: 5px;
    transition: .3s;
    border: 1px solid transparent;
    list-style-position: inside;
    text-align: left;
}
.list:hover {
    background-color: gray;
    border: 1px solid aqua;
}
.deleteBtn {
    border: 1px solid aqua;
    background: red;
    padding: 0em 0em;
    font-size: 1em;
    margin-left: 50px;
    border-radius: 2px;
    width: 20px;
}
    .isRed {
        color: red;
    }
    .isTransparent {
        color: transparent;
    }
</style>
