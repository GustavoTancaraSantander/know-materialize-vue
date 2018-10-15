<template>
  <div id="app">

    <div class="fixed-action-btn " id="action-button_app">

      <a class="btn-floating btn-large red">
        <i class="large material-icons">eject</i>
      </a>

        <ul>
          <li><a class="tiny btn-floating red"><i class="material-icons">insert_chart</i></a></li>

          <li><a class="sidenav-trigger btn-floating blue" data-target="slide-out">
                 <i class="material-icons">settings</i>
              </a>
          </li>

          <li>
            <a class="btn-floating blue-grey darken-3">
              <router-link to="/forms-parent">
                <i class="material-icons">filter_none</i>
              </router-link>
            </a>
          </li>

          <li>
            <a class="btn-floating yellow darken-3">
              <router-link to="/jscript-parent" class="white-text">JS</router-link>
            </a>
          </li>

          <li>
            <a class="btn-floating indigo darken-3">
              <router-link to="/components-parent">
                <i class="material-icons">view_quilt</i>
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

    <!-- <div class="row " id="routes-parents_rview"> -->
      <!-- <div class="col s12 m3 l3"> -->
         <!--  <section  v-for="(parent,key) in parents" :key="key">
            <router-link :to="'/'+ routes[key]" class="btn">{{ parent }}</router-link>
          </section> -->

      <!-- </div> -->
      <!-- <div class="col s12 m9 l9 "> -->

          <router-view></router-view>

      <!-- </div> -->
    <!-- </div> -->

<!-- *************************************************************************** -->

    <!-- Puede ir en cualquier lugar. Es identificado por el id en su ejecucion -->
<!-- **************************** UL sidenav-hide App***************************-->
<!-- use(navbar_app)->data-target -->
    <ul class="sidenav" id="menu-responsive">
        <!-- add component dynamic -> :is -->
        <li><a href="#">Settings<i class="material-icons left">settings</i></a></li>
        <li><a href="#">Mcss-External</a></li>
        <li><a href="#">Tutorial</a></li>
        <li><a href="https://materializecss.com/themes.html">Themes</a></li>
        <li>
            <a class="dropdown-trigger" href="#!" data-target="dropdown1-external">
              Dropdown<i class="material-icons right">arrow_drop_down</i>
            </a>
        </li>
    </ul>
<!-- end -->

<!-- use(navbar_app)->data-target Dropdown Structure -->
    <ul id="dropdown1-external" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
<!-- end -->

<!-- use(action-button_app)->data-target -->
    <ul class="sidenav" id="slide-out">
        <li>
          <div class="user-view">
            <div class="background">
              <img src="./feactures/pexels.jpg">
            </div>
            <a href="#user"><img class="circle" src="./feactures/logoMaterialize.png"></a>
            <a href="#name"><span class="white-text name">John Doe</span></a>
            <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
<!-- end -->
<!-- ***************************** end UL App ******************************-->

  </div> <!-- end #app -->
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
        parents: ['CSS', 'Components','JScript'],
      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }

  h1, h2 ,h3 {
    font-weight: normal;
    margin-top: 0px;
    padding-top: 0%;
  }
  .div-config {
    /* border: 1px solid black; */
    /* background-color: rgba(23, 146, 80, 0.966); */
    background-color: rgba(44, 104, 81, 0.157);
    /* background: image("./feactures/pexels.jpg"); */
    margin-top: 0px;
    padding-top: 0%;
   /*  padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px; */
}
</style>
