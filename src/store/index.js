import { createStore } from 'vuex'

import homeModule from '../modules/home/store/homeModule'
import registerStore from './register'
import mainStore from './main'
import resetPasswordStore from './resetPassword'

export default createStore({
    modules: {
        homeModule,
        
    }
})