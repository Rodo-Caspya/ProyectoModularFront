import { createStore } from 'vuex'

import loginStore from './login'
import registerStore from './register'
import mainStore from './main'
import resetPasswordStore from './resetPassword'

export default createStore({
    modules: {
        login: loginStore,
        register: registerStore,
        main: mainStore,
        reset: resetPasswordStore
    }
})