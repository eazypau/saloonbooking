import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import {store, key} from './store/store';
import './index.css'

createApp(App).use(router).use(store, key).mount('#app')
