<script setup lang="ts">

import AddFile2  from "./components/AddFile2.vue";

// <!--! названия фалов всегда двумя словами и с большой буквы -->
import HH from './components/HelloWorld.vue'
import AddFile from './components/AddFile.vue'
import AddFile3 from './components/AddFile3.vue'


// const currentUser  = ref('Текущий пользователь')
</script>


<!--! обязательно скачать Vue (Official) -->


<!--! официальный сайт https://ru.vuejs.org/ -->

<template>

  
  
  <!-- <AddFile :user="currentUser" msg="Hello from add file">  -->
  <AddFile msg="Hello from add file 1"> 
    <p>Текст с параграфа</p>
    <p>Текст с параграфа 2</p> <!--! с помощью тега slot в tempalte файла AddFile -->
  </AddFile>

  <AddFile2 msg2="Hello from add file2" />  <!--! первая запись со слэшом -->
  <!--! <AddFile2 msg2="234234234"></AddFile2>  ! вторая аналогичная запись -->



  <h-h  msgTest ="Hello worlddddd" /> <!--! третья запись 'тупенькая' с сокращением-->
  
  
  
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
 color: red;
}
</style>
