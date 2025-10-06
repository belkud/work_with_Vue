
<template>
    <h3>UsersForum</h3>


<!-- сюда закидываем -->
<div id="container_forum">
    <div>
        <div>{{ userName }}</div>
        <div>{{ date2 }}</div>
    </div>
    <div>{{ userMessage }}</div>
</div>



<br>
<div>Добавить новое сообщение</div>
<br>

<!-- форма где пишем -->
<form id="user_form">
    <div>
        <label for="">Ваше имя</label>
        <input v-model.lazy="name" type="text" >
    </div>
    <div>
        <label for="">Ваше сообщение</label>
        <textarea v-model.lazy="message" name="" id=""></textarea>
    </div>
    <input @click.prevent="sendData" type="submit" value="Отправить сообщение">
</form>

</template>


<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onUpdated, 
onBeforeUpdate, onBeforeUnmount, onUnmounted } from "vue";

let name = ref('')
let userName = ref('')

let date = new Date()
let date2 = ref('')

let message = ref('')
let userMessage = ref('')


function sendData() {

    userName.value = name.value
    name.value = ''

    date2.value = date.toISOString()
    
    userMessage.value = message.value
    message.value = ''
    
}







//!!!!!!!!!!!!!!!!!!!!!! теория !!!!!!!!!!!!!!!!!!!!!!!!!!!!11




// хуки жизненнего цикла

// В Vue.js хуки жизненного цикла - это функции, которые вызываются на различных 
// этапах жизни компонента. Они позволяют выполнять код в определенные моменты: от создания 
// до уничтожения компонента.

onBeforeMount(()=> {
  console.log('onBeforeMount');
})
onBeforeUpdate(()=> {
  console.log('onBeforeUpdate');
})
onMounted(()=> {
  console.log('onMounted');
})
onUnmounted(()=> {
  console.log('onUnmounted');
})
onUpdated(()=> {
  console.log('onUpdated');
})
onBeforeUnmount(()=> {
  console.log('onBeforeUnmount');
})
  
</script>



<style scoped>
#container_forum {
    border: 1px solid wheat;
}

#container_forum :first-child {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid white;
}
#container_forum div {
    min-height: 20px;
}

#container_forum>:nth-child(2) {
    padding: 10px;
}
#user_form {
    gap: 15px;
    display: flex;
    flex-direction: column;
}
#user_form div{
    display: flex;
    gap: 10px;
    align-items: center;
    min-height: 20px;
}

#user_form input, #user_form textarea{
    min-height: 20px;
    border-radius: 5px;
}

</style>