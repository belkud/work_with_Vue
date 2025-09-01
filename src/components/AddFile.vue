<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
let str = ref('our_page')
let bool =ref(false)
function click2() {
    console.log('Вызов функции');
    
}
 
 function targ(e:any) {
  // e.preventDefault()
    console.log(e.data);
    
 }
</script>



<template>
    <div class="myColor" v-if="bool"   @click="str+='!'">{{ str }}</div>
    <div class="myColor" v-else  @click="str+='!'">{{ str.split('').reverse().join('') }}</div>
    <button v-on:click="bool=!bool">reverse</button>
  <h1>{{ msg }}</h1>
        <button @click="count++">счёт: {{ count }} </button>
 
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
.read-the-docs {
  color: #888;
}

.myColor {
    color: orange
}




</style>
