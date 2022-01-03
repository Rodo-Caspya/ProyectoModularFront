<template>
  <h1>Register</h1>
  <div>
      <div> <img src="" alt=""> </div>
      <input type="text" placeholder="Usuario">
    </div>
    <div>
      <div> <img src="" alt=""> </div>
      <input type="text" placeholder="Contraseña">
    </div>
    <div>
      <div> <img src="" alt=""> </div>
      <input type="text" placeholder="Confirmar Contraseña">
    </div>
    <router-link :to="{name: 'Login'}">¡Registrase ya!</router-link>
    <router-link :to="{name: 'Login'}">Ya tienes cuenta? Iniciar sesión.</router-link>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped>

</style>
