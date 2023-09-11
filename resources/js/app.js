import './bootstrap';
import { createApp } from 'vue'
 
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
 
const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')