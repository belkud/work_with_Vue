<script setup lang="ts">


// <!--! названия фалов всегда двумя словами и с большой буквы -->
import AddFile from './components/AddFile.vue'
import AddFile4 from "./components/AddFile4.vue";

// const currentUser  = ref('Текущий пользователь')
</script>


<!--! обязательно скачать Vue (Official) -->


<!--! официальный сайт https://ru.vuejs.org/ -->

<!--! Все основная инфа в AddFile -->

<template>
  <AddFile4>Slot</AddFile4>


    <AddFile msg="Hello from add file2"/>    <!--! первая запись со слэшом -->
    <AddFile msg="Hello from add file">      <!--! вторая аналогичная запись -->-->
      <p>Текст через тег slot  в дочернем элементе</p> <!--! с помощью тега slot в tempalte файла AddFile -->
    </AddFile>

    

  <!--! <AddFile2 msg2="234234234"></AddFile2>  ! вторая аналогичная запись -->



  
  
  
  <AddFile3/>

  <div class="color">
    <a  href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
     
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #050a77aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #f5bd05aa);
}
.color {
 color: green;
}
</style>






<!--!!! Работа с терминалом git bash !!!-->
<!--! $git cat (название файла) -  Показать содержимое файла-->
<!--! $pwd (Показать текущую директорию) -->
<!--! $clear (очистить терминал) -->

Настройка пользователя
<!--! git config --global user.name "Your Name" -->
<!--! git config --global user.email "your@email.com"-->
<!--! git log --graph - краткая история коммитов-->


