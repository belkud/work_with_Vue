//! Импортируем функцию createApp из библиотеки Vue
import { createApp } from 'vue' 

import './style.css'

//! 2. Импортируем корневой компонент нашего приложения
import App from './App.vue'
import App2 from './App2.vue'
// import TheButton from "./components/TheButton.vue";
// import {router} from './router/index.ts'
import {router} from './router';

//! 3. - 4. Создаем экземпляр приложения, передав ему корневой компонент
//! "Монтируем" приложение в DOM - указываем, куда именно его встроить
const app = createApp(App) // начальная страница при загрузке
const app2 = createApp(App2) // начальная страница при загрузке
// app.component('TheButton', TheButton.vue)
app.use(router)

app.mount('#app')
app2.mount('#app2')





