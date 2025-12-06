<template>
    <br>
    <br>
    <br>
    <div>Нажми на кота</div>
    <img @click="jumpCat" id="cat" src="/public/cat.jpg" width="100px" alt="">
</template>

<script setup lang="ts">
// import { ref } from "vue";

function jumpCat (e:any) {
    e.target.classList.add('jump')
    setTimeout(()=> {
        e.target.classList.remove('jump')
    }, 2000)
}
</script>

<style scoped>
    #cat {
        position: absolute;
    }
    
    .jump {
        animation: jump 2s;
    }

@keyframes jump {
    0%, 100%{
      margin-top: 0px;  
    }
    50%{
        margin-top: -100px;  
    }
}
</style>