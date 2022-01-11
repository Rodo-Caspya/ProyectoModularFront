import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import axios from 'axios';
import VueAxios from "vue-axios";
import store from './store'

const baseUrl = 'http://localhost:9000/';
axios.defaults.baseURL = baseUrl;

createApp(App)
    .use( store )
    .use(  router, VueAxios, axios )
    .mount('#app')
