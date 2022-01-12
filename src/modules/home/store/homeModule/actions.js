import axios from 'axios'
//las acciones son asincronas y son las que llegan al servidor o a la base de datos

// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// } 

export const login = async ({commit}, user) =>{
    axios.post('http://localhost:9000/users/login', user).then(data => {
        console.log(data);
        let userDB = {
            userToken: data.data.token,
            username: user.username,
            userStatus: data.data.status
        }
        if(data.data.status == "Login Successful"){
          commit('setUser',userDB);
        }
        else{
          let errorR = {
            error: true,
            errorMsg: data.data.err.message
          }
          commit('setError', errorR)
        }
      })
}

export const register = async ({commit}, user) =>{
  //Con el Método Post con Axios hacemos el request al servidor de la base de Datos
  axios.post('http://localhost:9000/users/signup', user).then(data => {
    console.log(data);
    let userR = data.data.status
    if(data.data.status == "Registration Successful!"){
      console.log("Registro exitoso!")
      commit('setUserR',userR)
    }
    else{
      let errorR = {
        error: true,
        errorMsg: data.data.err.message
      }
      commit('setError', errorR)
    }

  })
}