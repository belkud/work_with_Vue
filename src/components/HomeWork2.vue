
<template >


<div v-text="title" >  </div>
 
<br>
<br>
<br>

<input v-model="textContent" type="text" v-cloak>



<div> {{ textContent }}</div>

<!-- изучение атрибутов -->
<!-- <div v-html="'<em> v-html </em>'"></div>
<div v-text="'<em> v-text </em>'"></div>
<div v-once>{{ textContent }}</div>
<div v-pre>{{ textContent }}</div> -->
<!-- 
<ul>
    <li class="list" v-for="(value, i) in mass">
        {{i+1}} + {{ value }}</li>
</ul>

<ul>
    <li class="list" v-for="(value) in 5"> {{ value }}</li>
</ul> -->


<div v-for="(val, key) of person">{{key}} = {{ val }}</div>


<!--! Список заметок -->

<div id="notesContainer">

    <h3>Список с заметками</h3>
    <input
    @keypress.enter="addMark" v-model="notes" type="text" placeholder="Заметка">
    <ol @click="deleteItem">
        <li class="list" v-for="(note) in notesArray" >{{ toUpperCase(note) }}<button class="deleteBtn" >×</button></li>
    </ol>
    <button @click="addMark"> Добавить заметку</button>
    <div :style="myDiv">Напишите что-нибудь</div>
    <hr>
    <div>{{ countNote==0 ? 'Пожалуйста, добавьте первую заметку' : `Количество заметок: ${countNote}`}} </div>
    
    <br>
    <div>Удаленные заметки:</div>
    <div @click="deletedNotes.splice(index,1)" class="list deleteLine" v-for="(value, index) in deletedNotes">{{ value }}</div>

</div>
 




<!-- динамическое применение стилей -->
<!-- <input v-model="testModel"
:style="testModel.length > 5 ? { color: 'red' } : { color: 'orange' }"
></input> -->

<!-- динамическое применение класса -->
<!-- <input v-model="testModel" 
:class="testModel.length > 5 ? isOrange : isRed"></input> -->

 
<br>
<br>
<br>
<!-- <textarea name="" id="" v-model="textAreaText" :placeholder="placeholderText">cxvcxsdfsdf</textarea>

<div style="min-height: 50px;">{{ textAreaText }}</div> -->


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
    



    <!-- :class="secondText.length > 5 ? one : two" -->
<input type="text" v-model="secondText" 
:class="{one}"
>


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
import { ref, watch, computed } from 'vue'

let person =ref({
    name: 'John',
    surname: 'Smith',
    age: 30
})

// let mass = ref(['первый', 'второй', 'третий'])

let one = ref('redBackground')


 let secondText = ref('')




let countNote = ref(0)
watch(countNote,(oldVal, newVal)=>{
    console.log(`было: ${newVal}, стало:${oldVal}`);  
})

const price1 = ref(100)
const price2 = ref(90)
const price3 = ref(120)


const totalPrice = computed(()=>{
    return price1.value + price2.value + price3.value
})
console.log(totalPrice.value);











let textContent = ref('<em>Текст</em> ')
const myDiv = ref({color:'transparent'});





let notes = ref('')
let notesArray = ref<string[]>([])
let deletedNotes = ref<string[]>([])
console.log(deletedNotes.value);


function addMark () {
    myDiv.value.color = 'red'
setTimeout(()=> {
    myDiv.value.color = 'transparent'
},1000)
    
    
    if (notes.value != '') {
        countNote.value++
        notesArray.value.push(notes.value)
        myDiv.value.color = 'transparent'
    }
    
    notes.value = ''
}

 
function toUpperCase (note:string) {
    return note.toUpperCase()
}

// второй вариант
function deleteItem (e:any) {
    if (e.target.nodeName == 'BUTTON') {
        const target = e.target.closest('li') 
        target.remove()

        deletedNotes.value.push(target.innerText.split('').splice(0, target.innerText.length - 1).join(''))
        countNote.value--
        
    }
}

 
 





let textInput = ref('')

let inputsText = ref('')
function showSymbols (e:any) {
    inputsText.value = e.target.value
}
  
    
// console.time('timer'); console.timeEnd('timer');
const title = ref('File homework2')
 
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
    max-width: 500px;
    
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
    position: relative;
    background-color: gray;
    margin-top: 10px;
    border-radius: 5px;
}
.list:hover {
    /* border: 1px solid aqua; */
    background-color: rgb(181, 58, 99);
}
.deleteBtn {
    border: 1px solid aqua;
    background: red;
    padding: 0em 0em;
    font-size: 1em;
    border-radius: 2px;
    width: 20px;
    position: absolute;
    top: 10%;
    left: calc(100% - 20px);
}
.deleteLine {
    text-decoration: line-through;
}

    .isRedClass {
        color: red;
    }

    .isOrangeClass {
        color: orange;
    }

.redBackground {
    background: red;
}
.greenBackground {
    background: greenyellow;
}

[v-cloak] {
    display: none;
}
</style>
