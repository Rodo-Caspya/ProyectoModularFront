import { createStore } from 'vuex'

import homeModule from '../modules/home/store/homeModule'
import cowModule from '../modules/cows/store/cowModule'

export default createStore({
    modules: {
        homeModule,
        cowModule
    }
})