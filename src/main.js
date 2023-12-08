import { createApp } from 'vue'
import router from './rourter/route'
import './style.css'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
