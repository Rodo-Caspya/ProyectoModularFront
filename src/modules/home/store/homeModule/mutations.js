//Las mutations modifican el state

// export const myMutation =  ( state ) => { las mutations siempre son sincronas

// } 

export const setUser = ( state , User )=>{
    state.user = User
}
export const setName = ( state , Name ) =>{
    state.name = Name
}
export const setPassword = ( state , Password  )=>{
    state.password = Password
}
export const setError = ( state , Error  )=>{
    state.error = Error
}
export const setErrorMsg = ( state , ErrorMsg  )=>{
    state.errorMsg = ErrorMsg
}
export const setSuccesMsg = ( state , SuccesMsg  )=>{
    state.succesMsg = SuccesMsg
}