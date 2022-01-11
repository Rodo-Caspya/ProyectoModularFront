import { createStore } from 'vuex'

import homeModule from '../modules/home/store/homeModule'


export default createStore({
    modules: {
        homeModule,
    }
})