<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

let mass2 = ref('') 
let mass = ('') as any
function randomName() {
    const random = Math.round(Math.random()*33)+1072
    mass2.value+='!'
    for (let i = 1072; i<= 1103; i++) {
        if (i==random)
        mass+=(String.fromCodePoint(i))
    }
}


</script>


<template>
    
    
    <!-- Плюсовать случайное имя -->
    <div @click="randomName()">Hey friend '{{ mass }}'</div>
    <div @click="randomName()">Hey friend '{{ mass2 }}'</div>
    
    <!-- связать div  и input -->

</template>


<style scoped>

</style>