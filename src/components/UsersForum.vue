
<template>
    <h3>UsersForum</h3>

<div>Форум пока что пуст</div>

<div id="container_forum">

    <div>
        <div>{{ name }}</div>
        <div>Data</div>
    </div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aspernatur, inventore dolore sint natus tempore beatae minima explicabo doloribus totam ad atque impedit</div>
    
    
</div>

<br>
<div>Добавить новое сообщение</div>
<br>

<form id="user_form">
<div>
    <label for="">Ваше имя</label>
    <input type="text">
</div>
<div>
    <label for="">Ваше сообщение</label>
    <textarea name="" id=""></textarea>
</div>
<input @click.prevent="sendData" type="submit" value="Отправить сообщение">
</form>

</template>


<script setup lang="ts">
import { ref } from "vue";

let name = ref('')

function sendData() {
    console.log('test');
    
}



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
    align-items: center
}
    
#user_form input, #user_form textarea{
    border-radius: 5px;
}

</style>