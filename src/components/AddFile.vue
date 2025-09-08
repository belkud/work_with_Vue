<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const text2 = ref(' d')
const str = ref('our_page')
const bool =ref(false)
const day = new Date() 

//  ! изменение background
const background = ref('red')
const count = ref(0)

// опасити у кнопки через конст и анонимной функции
const opacity =ref(0.1)


// <!--! меняем значение переменной  -->
str.value = 'eeeeeeeeee'

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


str.value = day.toISOString()



const changeOpacity = () => {
  if (opacity.value>=1) {
    opacity.value = 0.1
  }
  opacity.value+=0.1
}


</script>



<template>

  <h1 class="header1">{{ msg }}</h1>
  
  <slot></slot>  <!--! сам текст в родительском теге AddFile -->

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



  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter ===========
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

<button @click="click2">My button {{ 12+10 }}</button>
<input @keydown.prevent v-on:keydown="console.log('test')" >My button</input>
<input @keydown.prevent  @input="targ" placeholder="Введите текст" type="text">

</template>


<style scoped>
.header1 {
  color: greenyellow !important;
}
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
