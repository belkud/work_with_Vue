


<script setup lang="ts"> // setup говорит про composition api !!!!!!!!!!!!!!!!
// import { ref} from 'vue'
defineProps<{ testProps: string }>()


</script>

<template>
<button>Кнопочка </button>
<button>{{ testProps }} </button> // передача с помощью props
<slot></slot> // передача с помощью slot
</template>



<style scoped>
    button {
        background: orchid;
    }
</style>