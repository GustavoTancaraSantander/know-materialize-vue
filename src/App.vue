<template>
  <div id="app" class="container center">
    <!-- IMPLEMENT GRID -->
    <div class="row">
      <div class="col s2 m3 l3"><img class="responsive-img" src="./assets/logo.png"></div>
      <div class="col s8 m6 l6"><h5  class="blue-text"> {{ msg }} </h5></div>
      <div class="col s2 m3 l3"><img class="responsive-img" src="./feactures/logoMaterialize.png"></div>
    </div>
    <hr>
   <!--  <div class="row">
      <div class="col s3 m3"><router-link to="/css-parent" class="btn">CSS</router-link></div>
      <div class="col s9 m9"><router-view></router-view></div>
    </div> -->

    <div class="row">
      <div class="col s12 m1 l1">
          <section  v-for="(parent,key) in parents" :key="key">
            <router-link :to="'/'+ routes[key]" class="btn">{{ parent }}</router-link>
          </section>
      </div>
      <div class="col s12 m11 l11 "><router-view></router-view></div>
    </div>
   <!-- <div class="col s12 m1 l2 " v-for="(parent,key) in parents" :key="key">
          <router-link :to="'/'+ routes[key]" class="btn">{{ parent }}</router-link>
        </div>
        <div class="col s12 m12 l12 "><router-view></router-view></div>
    -->

  <!-- <div class="row">
          <div class="col s3 m3"><router-link :to="'/'+ route" class="btn">CSS</router-link></>
          <div class="col s9 m9"><router-view></router-view></div>
      </div>
    -->

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'MaterializeCSS (App.vue)',
      routes: ['css-parent','components-parent'],
      parents: ['CSS', 'Components']
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
