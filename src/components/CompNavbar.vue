<template>
    <section id="Navbar" class="scrollspy">
        <h3>Welcome Navbar</h3>
        <a href="https://materializecss.com/navbar.html" class="btn red darken-3">Doc Official</a>
          <hr>

        <nav id="navbar-simple">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo right">LogoBussines</a>
            <ul>
              <li><a href="#">Settings</a></li>
              <li><a href="">Mcss-External</a></li>
              <li><a href="https://materializecss.com/themes.html">Themes</a></li>
            </ul>
          </div>
        </nav>

        <hr class="btn-flat">

        <div class="row" id="navbar-responsive-mobile">
            <nav>
                <div class="container nav-wrapper">
                    <a href="#" class="brand-logo">Enterprise</a>
                    <a href="#" class="sidenav-trigger" data-target="menu-responsive-mobile">
                        <i class="material-icons">menu</i>
                    </a>

                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">Configution</a></li>
                        <li><a href="#">Management</a></li>
                        <li><a href="#">Dashboard</a></li>
                    </ul>
                </div>
            </nav>
                    <!-- Puede ir en cualquier lugar. Es identificado por el id en su ejecucion -->
                    <ul class="sidenav" id="menu-responsive-mobile">
                        <li><a href="#">Configuracion</a></li>
                        <li><a href="#">Administracion</a></li>
                        <li><a href="#">Dashboard</a></li>
                    </ul>
                    <!-- end -->
        </div>

        <hr class="btn-flat">

        <div class="row" id="Navbar Dropdown Menu">
                      <!-- Dropdown Structure -->
            <ul id="dropdown1" class="dropdown-content">
              <li><a href="#!">one</a></li>
              <li><a href="#!">two</a></li>
              <li class="divider"></li>
              <li><a href="#!">three</a></li>
            </ul>
            <nav>
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo">Logo</a>
                <ul class="right">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <!-- Dropdown Trigger -->
                  <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
                </ul>
              </div>
            </nav>
        </div>

        <hr class="btn-flat">

        <div class="row" id="Navbar Icon Links">
          <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="material-icons">search</i></a></li>
                <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
                <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
                <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
              </ul>
            </div>
          </nav>
        </div>

        <hr class="btn-flat">

        <div class="row" id="Navbar Search Bar">
            <nav>
              <div class="nav-wrapper">
                <form>
                  <div class="input-field">
                    <input id="search" type="search" required>
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                  </div>
                </form>
              </div>
            </nav>
        </div>

    </section>
</template>

<script>
  export default {
    mounted() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems,{
        scrollOffset:85
      });
    },
  }
    /* document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
        console.log('sidenav',instances);
        });
    document.addEventListener('DOMContentLoaded', function() {
        var ele = document.querySelectorAll('.dropdown-trigger');
        let instances = M.Dropdown.init(ele);
        console.log('dropdown',instances);
      }); */
        //$(".dropdown-trigger").dropdown();

  /* Note: Resultados de inicializaciones locales afectan test(c.log), solo se activan
  si el NAV es de origin Pagina misma, es decir no se activa en el componente. Queda
  por investigar*/
</script>
