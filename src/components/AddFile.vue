<script setup lang="ts">
import { ref, onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, onBeforeUnmount} from 'vue'




// хуки жизненнего цикла

// В Vue.js хуки жизненного цикла - это функции, которые вызываются на различных 
// этапах жизни компонента. Они позволяют выполнять код в определенные моменты: от создания 
// до уничтожения компонента.

onBeforeMount(()=> {
  console.log('onBeforeMount');
})
// onBeforeUpdate(()=> {
//   console.log('onBeforeUpdate');
// })
// onMounted(()=> {
//   console.log('onMounted');
// })
// onUnmounted(()=> {
//   console.log('onUnmounted');
// })
// onUpdated(()=> {
//   console.log('onUpdated');
// })
// onBeforeUnmount(()=> {
//   console.log('onBeforeUnmount');
// })
  




defineProps<{ msg: string }>()

const text2 = ref(' d')
const str = ref('our_bool')
const bool =ref(false)
const day = new Date() 
const textHTML = ref('<h4> Данный текст выводится через тег </h4>')


//  ! изменение background
const background = ref('red')
const count = ref(0)

// опасити у кнопки через конст и анонимной функции
const opacity =ref(0.1)

// изменение цвета текста через переменную
const col = ('pink')

// вывод как html

const users = ref ([
    {name:'user1', age: 23},
    {name:'user2', age: 24},
    {name:'user3', age: 25}
])

// ! Имя с случайной буквы!

let mass = ref('')
function randomName() {
    const random = Math.round(Math.random()*33)+1072
    for (let i = 1072; i<= 1103; i++) {
        if (i==random)
        mass.value+=(String.fromCodePoint(i))
    }
}



// <!--! меняем значение переменной  -->
// str.value = 'eeeeeeeeee'

function click2() {
    console.log('Вызов функции');
    
}
 
 function targ(e:any) {
  // e.preventDefault()
    console.log(e.data);
    
    
 }
 
 

function changeBackground () {
  if (count.value<=5) {
    background.value = 'orange'
  } else {
    background.value = 'blue' 
  }
}


// str.value = day.toISOString()



const changeOpacity = () => {
  if (opacity.value>=1) {
    opacity.value = 0.1
  }
  opacity.value+=0.1
}

function changeColor() {
  style: [
    'color : red',
    'background-color : blue'
  ]
}
</script>



<template>

  <h1 @click="changeColor()" >555{{ msg }}</h1>
  
  
  <!--! работа с циклами -->
  <div id="users" v-for="user, index of users"  :key="index">{{index+1}}. {{ user.name }}</div>


  <slot></slot>  <!--! сам текст в родительском теге AddFile -->

<div v-html="textHTML"></div>
<br>



  <!--! v-model — это "двустороннее связывание данных (обычно текста)" -->
  <input class="myColor" type="text" v-model="text2">
  <div >{{ text2 }}</div>


  <button v-bind:style="'opacity:' +opacity"  @click="changeOpacity"> Изменение прозрачности</button>

 


    <div class="myColor" v-if="!bool"   @click="str+='!'">{{ str }}</div>
    <div class="myColor" v-else  @click="str+='!'">{{ str.split('').reverse().join('') }}</div>
    <button v-on:click="bool=!bool;">reverse</button>
    <br>
    <br> 

    <!--! v-bind: -  v-bind срезаем и получается просто ':' -->
    <!--! v-bind — это "одностороннее связывание данных" (class, style, src, href)  -->
    <button id="clickBtn"  :style="'background:' +background"  @click="count++;  console.log(count); changeBackground() ">счёт: {{ count }} </button>
    <!--! Все условия лучше закидывать в функцию чтобы не писать через ';' -->



<button @click="click2">My button {{ 12+10 }}</button>
<input @keydown.prevent v-on:keydown="console.log('test')" >My button</input>
<input @keydown.prevent  @input="targ" placeholder="Введите текст" type="text">



  <!-- Плюсовать случайное имя -->
    <div @click="randomName()">Hey friend '{{ mass }}'</div>

<div>3333333333333333333333</div>

</template>


<style scoped>
/* .header1 {
  color: greenyellow;
} */
.read-the-docs {
  color: #888;
}

.myColor {
    color: orange
}

/* #clickBtn {
  background: red;
} */

body {
  color: red;
}


</style>
