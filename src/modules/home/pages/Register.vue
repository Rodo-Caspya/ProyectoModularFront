<template>
<!-- codigo html de la pagina -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <form action="" v-on:submit.prevent="register">
    <div class="logoContainer">
      <img class="logoImage" src="@/../public/images/logoLogin.png" alt="">
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="user.firstName" type="text" placeholder="Nombre" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="user.lastName" type="text" placeholder="Apellidos" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="user.email" type="email" placeholder="Email" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="user.username" type="text" placeholder="Nombre de usuario" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/candado.svg" alt="">
      <input v-model="user.password" type="password" placeholder="Contraseña" required>
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/candado.svg" alt="">
      <input v-model="user.passwordConfirmation" type="password" placeholder="Confirmar contraseña" required>
    </div>

    <div class="alert alert-success" role="alert" v-if="this.status == 'Registration Successful!'">
      {{this.status}}
    </div>
    <div class="alert alert-danger" role="alert" v-if="this.error">
      {{this.errorMsg}}
    </div>
    
    
    <div class="container">
      <button type="submit" class="ini-sesion"> ¡Registrase ya! </button>
    </div>
    
   <router-link class="color-texto" :to="{name: 'Login'}">Ya tienes cuenta? Iniciar sesión.</router-link>

  </form>
  <Footer/>
</template>



<script>

import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex';

export default {
  //Importamos los componentes que necesitaremos, en este caso únicamente el componente Footer
  components: { 
        Footer: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/Footer'))//manda a llamar al componente footer
  }, 
  data () {
    return{
        user:{}
    }
  },
  methods:{
    // Método para realizar el registro de un usuario en la base de datos
    register(){
      if(this.user.password == this.user.passwordConfirmation){//valida que las contraseñas sean las mismas
        this.$store.dispatch('homeModule/register',this.user);
        if(this.status == "Registration Successful!")
        {
          //this.$router.push({name:'Login'})
        }
        else{
          console.log(this.errorMsg);
        }
      }
      else{
        console.log("Contrase;as distintas.")
      }
    }
  },
  computed:{
    ...mapState('homeModule',['status','error','errorMsg'])//mapea el estado de homeModule
  }
}
</script>

<style scoped>
/* estilosd del component */
a{
  text-decoration: none;
}

.logoContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0vh;

  width: 10rem;
  height: 10rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #D5A56C;
  border-radius: 100px;
  
}

.logoImage{

  height: 7rem;

 
}

form {
  margin-top: 2vh;
  
  
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
  margin-top: 1vh;
  border:1px solid #D5A56C;
  
}
.img-input {
  width: 20vw;
  height: 5vh;

  padding: 1vh;
  margin-top: 1vh;
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
  height: 5vh;

  background-color: #5B3405;
  color: white;
  font-size: 20px;
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

