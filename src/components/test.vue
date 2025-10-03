
<template>
    <div>Привет от файла test.vue</div>
    <button :style="mystyle"   @click.prevent="prevAction"> Плюсуем на <span class="font">{{ num }}</span> </button>
    <div :style="'font-size:' +num + 'em'">{{ num }}</div>


    <input @:contextmenu.prevent="" type="text" v-model="text">
    <div >{{ text }}</div>
    <a @click.prevent href="http://localhost:5173/">ссылка </a>

    <button @click="letter+='!1'">Рисуем восклицательные знаки</button>
    
    
    <button @click="changeWord=!changeWord, hi+='!'">при нажатии переворачиаем слово</button>
    <div v-if="changeWord==false">  {{ hi }}</div>
    <div v-else> {{ hi.split('').reverse().join('') }}</div>
    
    <button @click="evenOdd++, hi2+='!'">при нажатии переворачиаем слово каждый третий раз</button>
    <div v-if="evenOdd%3==0">  {{ hi2 }}</div>
    <div v-else> {{ hi2.split('').reverse().join('') }}</div>
<br>
<br>
<br>
</template>


<script setup lang="ts">
    import { ref } from "vue";

    let hi = ref('Hello')
    let changeWord = ref(true)
    
    // !!!!!!!!!!!!!!!
    
    let evenOdd = ref(0)
    let hi2 = ref('Hello123')



    let num = ref(1)
    let letter = ref('!')

    let mystyle = {
        color: 'red',
        background: 'pink',
        // fontSize: 2 + 'em'
    }
    
    let text = ref ('')    


    function prevAction (e:any) {
        num.value++
    }
</script>


<style scoped>
    .font {
        /* fontSize: '2em', */
        /* font-size: 1.4em; */
    }
</style>


<!--! диерктива v-bind -->
 <!--! v-model -->

 <!--! функции две -->