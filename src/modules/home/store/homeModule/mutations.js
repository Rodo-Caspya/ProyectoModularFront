//Las mutations modifican el state

// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// } 

export const setUser = ( state , user )=>{//manda el usuario, el token y el status al state
    state.username = user.username
    state.userToken = user.userToken
    state.userStatus = user.userStatus
}
export const setUserR = ( state , user )=>{//manda el usuario registrado al state
    state.status = user
}
export const setError = ( state , error )=>{//manda el error al state
    state.error = error.error,
    state.errorMsg = error.errorMsg
}


