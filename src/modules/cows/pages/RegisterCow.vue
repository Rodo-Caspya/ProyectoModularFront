<template>
<!-- codigo html de la pagina -->
  <form action="" v-on:submit.prevent="register">
    <div class="logoContainer">
      <img class="logoImage" src="@/../public/images/logoLogin.png" alt="">
    </div>

    <div class="container-inputs">
      <input v-model="cow.id" type="number" placeholder="ID" required>
    </div>
    <div class="container-inputs">
      
      <input v-model="cow.edad" type="text" placeholder="Edad" required>
    </div>
    <div class="container-inputs">
      
      <input v-model="cow.estado" type="text" placeholder="Estado" required>
    </div>
    <div class="container-inputs">
      
      <input v-model="cow.alimentacion.cms" type="text" placeholder="Cms" required>
    </div>
    <div class="container-inputs">
      
      <input v-model="cow.alimentacion.proteinas" type="text" placeholder="Proteinas" required>
    </div>
    <div class="container-inputs">
      
      <input v-model="cow.alimentacion.minerales" type="number" placeholder="Minerales" required>
    </div>
    <div class="container-inputs">
      
      <input v-model="cow.alimentacion.fibra" type="number" placeholder="Fibra" required>
    </div>
    <div class="container-inputs">
      
      <input v-model="cow.medidas.cc" type="number" placeholder="CC" required>
    </div>
    <div class="container-inputs">
      
      <input v-model="cow.medidas.phurinario" type="number" placeholder="PhUrinario" required>
    </div>
    
    <div class="container">
      <button @click="force" type="submit" class="ini-sesion"> ¡Registrar vaca! </button>
    </div>

    <div class="alert alert-success" role="alert" v-if="this.idCow !=''">
      Registro exitoso
    </div>
    <div class="alert alert-danger" role="alert" v-if="this.error">
      {{this.errorMsg}}
    </div>

  </form>

</template>

<script>
import { mapState } from 'vuex'

export default {
  //Importamos los componentes que necesitaremos, en este caso únicamente el componente Footer
  components: { 
  }, 
  data () {
    return{
        cow:{//cracion del json para mandar
          alimentacion:{

          },
          medidas:{
          },
        }
    }
  },
  methods:{
    // Método para realizar el registro de un usuario en la base de datos
    register(){
      this.$store.dispatch('cowModule/registerCow',this.cow)//manda a llamar a la action de registrar vaca
      if(this.idCow !=''){//valida el id de la vaca
        console.log('Registro finalizado');
      }
      else{
        console.log(this.errorMsg);
      }
    },
    force(){
      location.reload()
    }
  },
  computed:{
    ...mapState('cowModule',['error','errorMsg','idCow'])//mapea el state de cowModule
  }
}
</script>

<style scoped>
/* estilos de la pagina */
a{
  text-decoration: none;
}

.logoContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;

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
  border-radius: 20px;
  
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

