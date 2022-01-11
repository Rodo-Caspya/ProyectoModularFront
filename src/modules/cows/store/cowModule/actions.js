import axios from 'axios'
//las acciones son asincronas y son las que llegan al servidor o a la base de datos

// export const myAction = async ({ commit }) => { las acciones normalmente son asincronas

// } 

export const registerCow = async ({commit}, cow) =>{
  console.log('hi');
  console.log(cow);
  //Con el Método Post con Axios hacemos el request al servidor de la base de Datos
  axios.post('http://localhost:9000/vacas//ingresar', cow ).then(data => {
    // let userR = user.username
    // console.log(userR);
    let cowId = cow.id
    
    if(data.status == "Successful"){
      console.log("Registro exitoso!");
      commit('setCow',cowId)
      /**
       * Inserte redirección al Login
       */
    }
    else{
      this.error = true;
      this.errorMsg = data.data.err.message;
    }
  })
}