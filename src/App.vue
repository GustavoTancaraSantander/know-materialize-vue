<template>
  <div id="app">

    <div class="fixed-action-btn " id="action-button_app">

      <a class="btn-floating btn-large red">
        <i class="large material-icons">eject</i>
      </a>

        <ul>
          <li><a class="tiny btn-floating red" onclick="M.toast({html: 'Next implementation ChartJS pending'})">
               <i class="material-icons">insert_chart</i>
              </a>
          </li>

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

    <router-view></router-view>

<!-- *************************************************************************** -->

    <!-- Puede ir en cualquier lugar. Es identificado por el id en su ejecucion -->
<!-- **************************** UL sidenav-hide App***************************-->
<!-- use(navbar_app)->data-target -->
    <ul class="sidenav" id="menu-responsive">
        <!-- add component dynamic -> :is -->
        <li><a href="#">Settings<i class="material-icons left">settings</i></a></li>
        <li><a href="https://vue-chartjs.org/#/home">vue-chartjs<i class="material-icons">insert_chart</i></a></li>
        <li><a href="#">Tutorial<i class="material-icons left">search</i></a></li>
        <li>
            <a class="dropdown-trigger" href="#!" data-target="dropdown1-external">
              Mcss-External<i class="material-icons right">arrow_drop_down</i>
            </a>
        </li>
    </ul>
<!-- end -->

<!-- use(navbar_app)->data-target Dropdown Structure -->
    <ul id="dropdown1-external" class="dropdown-content">
      <li><a href="http://www.freetimelearning.com/materialize-css/">freetimelearning</a></li>
      <li><a href="https://pixinvent.com/materialize-material-design-admin-template/landing/">pixinvent Admin</a></li>
      <li><a href="https://pixinvent.com/">pixinvent</a></li>
      <li class="divider"></li>
      <li><a href="https://materializecss.com/themes.html"><i class="material-icons right">view_module</i>Themes</a></li>
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
            <a href="#name"><span class="white-text name">Gustavo TS</span></a>
            <a href="#email"><span class="white-text email">developer.ias.0110@gmail.com</span></a>
          </div>
        </li>

        <li><a href="/" class="left-align">Home<i class="material-icons">home</i></a></li>
        <li><a href="#" class="left-align">My Account <i class="material-icons">account_circle</i></a></li>
        <li><a href="#" class="left-align">Mail<i class="material-icons">mail</i></a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Advanced</a></li>
        <li><a href="#" class="left-align waves-effect">Config<i class="material-icons">build</i></a></li>
        <li><a class="left-align waves-effect" href="#">Customer Support<i class="material-icons">headset_mic</i></a></li>
        <li><a class="left-align waves-effect" href="#">suggestions<i class="material-icons">important_devices</i></a></li>
        <li><div class="divider"></div></li>
        <li><a href="#" class="left-align waves-effect blue-text">About Us<i class="material-icons">info</i></a></li>

    </ul>
<!-- end -->
<!-- ***************************** end UL App ******************************-->

  </div> <!-- end #app -->

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
    /* font-weight: normal; */
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
