//Las mutations modifican el state

// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// } 

export const setCow = ( state , id )=>{//mandar el id de la vaca al state
    state.idCow = id

}
export const setError = ( state , error )=>{//mandar error al registrar la vaca al state
    state.error = error.error,
    state.errorMsg = error.errorMsg
}
// export const setUserR = ( state , user )=>{
//     state.username = user
// }

