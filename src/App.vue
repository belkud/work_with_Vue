<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import AddFile from './components/AddFile.vue'

</script>


<template>
  <AddFile msg="Hello from add file" />
  <HelloWorld msg="Vite + Vue5555555555555555" />
  <div class="color">
    <a  href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    hjkhiuhgiu
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
