//Las mutations modifican el state

// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// } 

export const setUser = ( state , user )=>{
    state.username = user.username
    state.userToken = user.userToken
    state.userStatus = user.userStatus
}
export const setUserR = ( state , user )=>{
    state.username = user
}

