<template>
    <h1>Bienvenido {{username}}</h1>

    <h2>Pregunta</h2>
    <div class="Questions">
        <input type="radio" name="P1" id="One"> 1
        <input type="radio" name="P1" id="Two"> 2
        <input type="radio" name="P1" id="Three"> 3
        <input type="radio" name="P1" id="Four"> 4
        <input type="radio" name="P1" id="Five"> 5
    </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Main',
    computed:{
    ...mapState('homeModule',['username'])
  }
}
</script>

<style scoped>
  
</style>