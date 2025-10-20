<template>
    <h2>AddBlock222</h2>

    <div id="container_block" style="display: flex; gap: 20px; flex-wrap: wrap; max-width: 500px; border: 1px solid wheat;">
            <div style="anim"  v-for="(value, index) in massiveColors" @click="deleteBlock(index)" :style="{
                background: value.background,
                width: '100px',
                animation: 'animBlock 3s',

            }">
           {{ index }}, {{ value.background }}
        </div>
</div>


<button @click="console.log(pushColorsInBlock())">Показать рандом</button>
</template>



<script setup lang="ts">
import { ref } from "vue";

let massiveColors = ref([])

function createRandomColor() {
    let red = ref(Math.round(Math.random()*255))
    let green = ref(Math.round(Math.random()*255))
    let blue = ref(Math.round(Math.random()*255))
    return `rgb(${red.value}, ${green.value}, ${blue.value})`
}

function pushColorsInBlock () {
    massiveColors.value.push({background: createRandomColor()})
    return JSON.stringify(massiveColors.value)
}

function deleteBlock (index:any) {

    console.log(massiveColors.value.splice(index,1));
    // console.log(index);
    
}


</script>



<style scoped>
    color {
        color: rgb(102, 45, 159);
    }
#container_block>div {
    animation: animBlock .5s !important;
    transition: .5s;
    opacity: 1;
}
#container_block>div:hover {
    transform: scale(1.2);
}

@keyframes animBlock {
    from {

    }
    to {
        opacity: .5;
    }

}


</style>



