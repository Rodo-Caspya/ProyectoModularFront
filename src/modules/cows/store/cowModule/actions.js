import axios from 'axios'
//las acciones son asincronas y son las que llegan al servidor o a la base de datos

// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// } 

export const registerCow = async ({commit}, cow) =>{
  //Con el Método Post con Axios hacemos el request al servidor de la base de Datos
  axios.post('http://localhost:9000/vacas/ingresar', cow ).then(data => {
    console.log(data);
    // let userR = user.username
    // console.log(userR);
    let cowId = cow.id
    if(data.data.status == "Successful"){
      console.log("Registro exitoso!");
      commit('setCow',cowId)
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