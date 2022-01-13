import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import axios from 'axios';
import VueAxios from "vue-axios";
import store from './store'

const baseUrl = 'http://localhost:9000/';//constante para no escribir toda la direccion de la base de datos
axios.defaults.baseURL = baseUrl;
/*Creacion y mount de la app, router,axios y store */
createApp(App)
    .use( store )
    .use(  router, VueAxios, axios )
    .mount('#app')
