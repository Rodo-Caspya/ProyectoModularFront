import state from './state'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const cowModule = {

    namespaced: true,//encapsular el store
    mutations,
    actions,
    getters,
    state
}

export default cowModule