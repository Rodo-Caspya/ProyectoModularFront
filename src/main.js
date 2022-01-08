import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import axios from 'axios';
import VueAxios from "vue-axios";

const baseUrl = 'http://localhost:9000/';
axios.defaults.baseURL = baseUrl;

createApp(App)
    .use( router )
    .mount('#app')
    .use(VueAxios, axios)
