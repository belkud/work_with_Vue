
<template >
<div> {{ title }} </div>
 

<textarea name="" id="" v-model="textAreaText" :placeholder="placeholderText">cxvcxsdfsdf</textarea>

<div style="min-height: 50px;">{{ textAreaText }}</div>


<input type="text" v-model="textInput" @input="showSymbols">
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

let textAreaText = ref('')
let textInput = ref('')

function showSymbols (e:any) {
    console.log(`${e.data}`);
    console.log(textInput.value);
    
}

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
.changeColor {
    font-size: 1.2em;
    color: var(--color-secondary);
}

</style>
