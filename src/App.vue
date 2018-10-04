<template>
  <div id="app" class="container center">
    <!-- IMPLEMENT GRID -->
    <div class="row">
      <div class="col s2 m3 l3"><img class="responsive-img" src="./assets/logo.png"></div>
      <div class="col s8 m6 l6"><h5  class="blue-text"> {{ msg }} </h5></div>
      <div class="col s2 m3 l3"><img class="responsive-img" src="./feactures/logoMaterialize.png"></div>
    </div>
    <hr>
    <div class="row">
      <div class="col s3 m3"><router-link to="/css-parent" class="btn">CSS</router-link></div>
      <div class="col s9 m9"><router-view></router-view></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome MaterializeCSS (App.vue)',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
