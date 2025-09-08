<script setup lang="ts">
import { ref } from "vue";
    
defineProps<{ msg2: string }>()


const score = ref(0)

const users = ref ([
    {name:'user1', age: 23},
    {name:'user2', age: 24},
    {name:'user3', age: 25}
])

const val = () => {
    score.value +=1
}

 const col = ref ('orange')

</script>

<template>
    <h1 v-on:click="val">{{ msg2 }} {{ score }}</h1>
    <div  :style="'color:' +col"    id="users" v-for="user, index of users"  :key="index">{{index+1}}. {{ user.name }}</div>

</template>



<style scoped>

#users {
    cursor: pointer;
    background: gray;
    border-radius: 5px;
    margin: 10px;
    border: 1px solid transparent;
    transition: .3s;
}

#users:hover {
    border: 1px solid aqua;
    text-transform:uppercase;
}


.col2 {
    color: green;
}

</style>