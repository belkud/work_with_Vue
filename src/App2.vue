<script setup lang="ts">


</script>

<template>
    <h2 style="color: red;">План по изучению vue JS</h2>
    <div>
        <div >Информация с первой кнопки</div>
        <div >Информация со второй кнопки</div>
        <div >Информация с третьей кнопки</div>
        <div >Информация с четвертой кнопки</div>
        <div >Информация с пятой кнопки</div>
    </div>
    <div class="buttonLocation">
        <button @click="">Основы</button>
        <button>Компоненты</button>
        <button>Роутер</button>
        <button>Vuex</button>
        <button>Composition</button>
    </div>
    <div class="buttonLocation">
        <button>Назад</button>
        <button>Вперед</button>
    </div>
</template>


<style scoped>
.buttonLocation {
    gap: 10px;
    display: flex;
    margin: 20px;
}
</style>