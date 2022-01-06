import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const resetPasswordStore = {

    namespaced: true,//encapsular el store
    state,
    mutations,
    actions,
    getters,
}

export default resetPasswordStore