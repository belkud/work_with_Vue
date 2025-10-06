
<template>
    <h3>Привет от файла test.vue</h3>
    <button :style="mystyle"   @click.prevent="prevAction"> Плюсуем на <span class="font">{{ num }}</span> </button>
    <div :style="'font-size:' +num + 'em'">{{ num }}</div>


    <select v-model="select" @click="console.log(select.value)">
            <option value="All">All</option>
            <option value="Learn">Learn</option>
            <option value="Read">Read</option>
            <option value="Build">Build</option>
    </select>
<div></div>
    

    
    <div v-for="lang in sortLanguages">{{ lang.words }}</div>

<br>
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
    <div v-html="secondHeader"></div>

    <h3>{{ users }}</h3>
    <div> {{ Object.keys(users) }}</div>
    <div> {{ Object.values(users) }}</div>
    <div>{{ users.Vanya }}</div>

    <div>{{ Object(cities) }}</div>
    <br>

    <button v-if="hideButtonCity==true" @click="cities.sort(), hideButtonCity=!hideButtonCity">Сортировать города по убыванию</button>
    <button v-else  @click="cities.sort().reverse(), hideButtonCity=!hideButtonCity">Сортировать города по возрастанию</button>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</template>


<script setup lang="ts">
    import { computed, ref, watch, vModelSelect } from "vue";



    let sortLanguages = ref ([
        {index:0, words : 'Learn Javascript'},
        {index:1, words : 'Learn Vue'},
        {index:2, words : 'Build Something'},
    ])



    let hideButtonCity = ref(true)
    let hi = ref('Hello')
    let changeWord = ref(true)
    
    let secondHeader = `<h2> Second Header</h2>`
    // !!!!!!!!!!!!!!!
    
    let evenOdd = ref(0)
    let hi2 = ref('Hello123')

    let users = {
        Vanya :32,
        Petya: 27,
        Vasya :33
    }

    let cities = ([
        'Sochi', 'Krasnodar', 'Voronesh', 'Belgorod', 'Moscow'
    ])


    const filteredArr = (computed(()=> {
        if (sele) {
            
        } else {
            
        }
    }))





// console.log(cities.toString().split(',').join('\n'))
let citiesInNewRow = cities.toString().split(',').join('\n')

    const newUsers = Object.keys(users)

    const keys = Object.keys(users)
    // console.log(keys);


    let num = ref(1)
    let letter = ref('!')

    let mystyle = {
        color: 'red',
        background: 'pink',
        // fontSize: 2 + 'em'
    }
    
    let text = ref ('')    
// 

    function prevAction (e:any) {
        num.value++
    }

let apple = 'orange'

    let fruit = {
        [apple] : 5
    }
    // console.log(fruit);
    
</script>


<style scoped>


</style>


<!--! диерктива v-bind -->
 <!--! v-model -->

 <!--! функции две -->