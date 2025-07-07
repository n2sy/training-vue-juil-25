// import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import MY_ROUTES from './router'

createApp(App).use(MY_ROUTES).mount('#app')
