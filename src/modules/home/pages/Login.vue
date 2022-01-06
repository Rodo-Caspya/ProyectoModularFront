<template>

  <form action="">
    <div class="logoContainer">
      <img class="logoImage" src="@/../public/images/logoLogin.png" alt="">
    </div>
    <div>

      <input type="text" placeholder="Nombre de usuario">
    </div>
    <div>

      <input type="text" placeholder="Contraseña">
    </div>
    <div class="container">
      <button class="ini-sesion"><router-link  :to="{name: 'Main'}">Iniciar Sesion</router-link></button>
    </div>
    
    <router-link :to="{name: 'Register'}">No tienes cuenta? Registrarse</router-link>
    <router-link :to="{name: 'ResetPassword'}">¿Olvidó su contraseña?</router-link>

  </form>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.logoContainer{
  width: 12rem;
  height: 12rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2vh;
  border: 1px solid black;
  border-radius: 100px;
  
}
.logoImage{
  
  width: 35vw;
  height: 20vh;
  padding-top: 4vh;
 
}

form {
  margin-top: 10vh;
  display: flexbox;
  text-align: center;
}
::placeholder{
  padding-left: 10px;
  font-size: 1rem;
}
input{
  height: 10vw;
  width: 50vw;
  border:1px solid #D5A56C;
  
}
.container{
  display: flex;
  justify-content: center;
}
.ini-sesion{
  
  height: 5vh;
  width: 50vw;
  margin-top: 1vh;
  background-color: #5B3405;
  border-radius: 10px;
  
}
.ini-sesion >a{
  color: white;
}
</style>

