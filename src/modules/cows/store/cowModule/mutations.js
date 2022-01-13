//Las mutations modifican el state

// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// } 

export const setCow = ( state , id )=>{
    state.idCow = id

}
export const setError = ( state , error )=>{
    state.error = error.error,
    state.errorMsg = error.errorMsg
}
// export const setUserR = ( state , user )=>{
//     state.username = user
// }

