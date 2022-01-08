<template>

  <form action="" v-on:submit.prevent="register">
    <div class="logoContainer">
      <img class="logoImage" src="@/../public/images/logoLogin.png" alt="">
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="this.firstName" type="text" placeholder="Nombre" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="this.lastName" type="text" placeholder="Apellidos" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="this.email" type="email" placeholder="Email" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="this.username" type="text" placeholder="Nombre de usuario" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/candado.svg" alt="">
      <input v-model="this.password" type="password" placeholder="Contraseña" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/candado.svg" alt="">
      <input v-model="this.passwordConfirmation" type="password" placeholder="Confirmar contraseña" required>
    </div>
    
    
    <div class="container">
      <button type="submit" class="ini-sesion"> ¡Registrase ya! </button>
    </div>
    
   <router-link class="color-texto" :to="{name: 'Login'}">Ya tienes cuenta? Iniciar sesión.</router-link>

  </form>
  <Footer/>
</template>



<script>
import axios from 'axios'
import { defineAsyncComponent } from 'vue'

export default {
  //Importamos los componentes que necesitaremos, en este caso únicamente el componente Footer
  components: { 
        Footer: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/Footer'))
  }, 
  data: function() {
    return{
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        passwordConfirmation: "",
        error: false,
        errorMsg: "",
        userToken: ""
    }
  },
  methods:{
    // Método para realizar el registro de un usuario en la base de datos
    register(){
      //Creamos un Json con el cual le mandaremos los datos a la base de Datos
      let json = {
        "firstname" : this.firstName,
        "lastname" : this.lastName,
        "email": this.email,
        "username" : this.username,
        "password" : this.password
      };
      //Con el Método Post con Axios hacemos el request al servidor de la base de Datos
      axios.post('http://localhost:9000/users/signup', json).then(data => {
        console.log(data);
        if(data.data.status == "Registration Successful!"){
          console.log("Registro exitoso!");
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
  }
}
</script>

<style scoped>

a{
  text-decoration: none;
}

.logoContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1vh;

  width: 12rem;
  height: 12rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #D5A56C;
  border-radius: 100px;
  
}

.logoImage{

  height: 15vh;

 
}

form {
  margin-top: 4vh;
  
  
  text-align: center;
}

::placeholder{
  padding-left: 10px;
  font-size: 1rem;
}

input{
  width: 60vw;
  height: 5vh;

  margin-left: 2vw;
  margin-top: 2vh;
  border:1px solid #D5A56C;
  
}
.img-input {
  width: 20vw;
  height: 5vh;

  padding: 1vh;
  margin-top: 2vh;
  border: 1px solid #D5A56C;

  border-radius: 39px;
}
.container-inputs{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  display: flex;
  justify-content: center;
}

.ini-sesion{

  width: 70vw;
  height: 6vh;

  background-color: #5B3405;
  color: white;
  font-size: 25px;
  font-weight: bold;

  margin-top: 3vh;
  margin-bottom: 1.5vh;
  border: 1px solid #707070;
  border-radius: 39px;
  
}


.color-texto{
  color: #D5A56C;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  margin-top: 1vh;
  
}

</style>

