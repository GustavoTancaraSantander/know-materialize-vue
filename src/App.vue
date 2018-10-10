<template>
  <div id="app">

    <div class=" row navbar-fixed" id="navbar_app">
      <nav>
        <div id="navbar-simple">

          <a href="#" class="brand-logo right">
            <div class="row">
              <div class="col s2 m2 l2"><img class="responsive-img" src="./assets/logo.png"></div>
              <!-- <div class="col s8 m8 l8"><h6 class="flow-text"> {{ msg }} </h6></div> -->
              <div class="col s2 m2 l2"><img class="responsive-img center" src="./feactures/logoMaterialize.png"></div>
            </div>
          </a>

          <a href="#" class="sidenav-trigger" data-target="menu-responsive">
                <i class="material-icons">menu</i>
          </a>

          <ul class="hide-on-med-and-down">
            <li><a href="#">Settings<i class="material-icons left">settings</i></a></li>
            <li><a href="http://www.freetimelearning.com/materialize-css/">Mcss-External</a></li>
            <li><a href="#">Tutorial<i class="material-icons left">search</i></a></li>
            <li><a href="https://materializecss.com/themes.html"><i class="material-icons right">view_module</i>Themes</a></li>
            <!-- Dropdown Trigger -->
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
          </ul>

        </div>
      </nav>
          <!-- Puede ir en cualquier lugar. Es identificado por el id en su ejecucion -->
          <ul class="sidenav" id="menu-responsive">
            <li><a href="#">Settings</a></li>
            <li><a href="#">Mcss-External</a></li>
            <li><a href="#">Tutorial</a></li>
            <li><a href="https://materializecss.com/themes.html">Themes</a></li>
            <!-- <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li> -->

          </ul>
          <!-- end -->
            <!-- Dropdown Structure -->
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
            <!-- end -->
    </div>

    <div class="fixed-action-btn " id="action-button_app">

        <a class="btn-floating btn-large red">
          <i class="large material-icons">eject</i>
        </a>

        <ul>
          <li><a class="tiny btn-floating red"><i class="material-icons">insert_chart</i></a></li>
          <li><a class="btn-floating blue"><i class="material-icons">web</i></a></li>
          <li>
            <a class="btn-floating yellow darken-3">
              <router-link to="/jscript-parent" class="white-text">JS</router-link>
            </a>
          </li>
          <li>
            <a class="btn-floating indigo darken-3">
              <router-link to="/components-parent">
                <i class="material-icons">dashboardt</i>
              </router-link>
            </a>
          </li>
          <li>
            <a class="btn-floating teal darken-4">
              <router-link to="/css-parent" class="white-text">CSS</router-link>
            </a>
          </li>

        </ul>
    </div>

    <div class="row container center" id="routes-parents_rview">
      <div class="col s12 m1 l1">
          <section  v-for="(parent,key) in parents" :key="key">
            <router-link :to="'/'+ routes[key]" class="btn">{{ parent }}</router-link>
          </section>
      </div>
      <div class="col s12 m11 l11 "><router-view></router-view></div>
    </div>

  </div>
   <!--  <div class="row">
      <div class="col s3 m3"><router-link to="/css-parent" class="btn">CSS</router-link></div>
      <div class="col s9 m9"><router-view></router-view></div>
    </div> -->
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'MaterializeCSS (App.vue)',
        routes: ['css-parent','components-parent','jscript-parent'],
        parents: ['CSS', 'Components','JScript']
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
