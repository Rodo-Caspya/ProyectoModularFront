<template>

  <form action="" v-on:submit.prevent="login">
    <div class="logoContainer">
      <img class="logoImage" src="@/../public/images/logoLogin.png" alt="">
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/usuario.svg" alt="">
      <input v-model="user.username" type="text" placeholder="Nombre de usuario">
    </div>
    <div class="container-inputs">
      <img class ="img-input" src="@/../public/images/candado.svg" alt="">
      <input v-model="user.password" type="password" placeholder="Contraseña" >
    </div>
    
    <div class="container">
      <button type="submit" class="ini-sesion">Iniciar sesion</button>
    </div>
    
    <router-link class="color-texto" :to="{name: 'Register'}">No tienes cuenta? Registrarse</router-link>
    <br>
    <router-link class="color-texto" :to="{name: 'ResetPassword'}">¿Olvidó su contraseña?</router-link>
  </form>

  <Footer/>

</template>

<script>

import { defineAsyncComponent } from 'vue'
import {mapState} from 'vuex'
export default {
  name: "Login",
  components: { 
        Footer: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/Footer'))
  },
  data() {
    return{
        user:{}
    }
  },
  methods:{
    login(){
      if(this.$store.dispatch('homeModule/login',this.user))
        this.$router.push({name:'Main'})
      
    },
    
  },
  computed:{
    ...mapState('homeModule',['userStatus','username'])
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
  margin-bottom: 0vh;

  width: 10rem;
  height: 10rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
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

