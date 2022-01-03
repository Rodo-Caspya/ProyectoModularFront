<template>
  <h1>Login</h1>
  <form action="">
    <div>
      <div> <img src="" alt=""> </div>
      <input type="text" placeholder="Usuario">
    </div>
    <div>
      <div> <img src="" alt=""> </div>
      <input type="text" placeholder="Contraseña">
    </div>
    <router-link :to="{name: 'Main'}">Iniciar Sesion</router-link>
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
  
</style>

