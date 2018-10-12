<template>
    <section>
      <h3>Drop Down</h3>
      <hr>
      <div id="example">
        <!-- Dropdown Trigger -->
          <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

          <!-- Dropdown Structure -->
          <ul id='dropdown1' class='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
          </ul>
      </div>
      <br>
      <div id="BargesInDropDown">
          <ul id="dropdown2" class="dropdown-content">
            <li><a href="#!">one<span class="badge">1</span></a></li>
            <li><a href="#!">two<span class="new badge">1</span></a></li>
            <li><a href="#!">three</a></li>
          </ul>
          <a class="btn dropdown-trigger" href="#!" data-target="dropdown2">
             BargesInDropDown<i class="material-icons right">arrow_drop_down</i>
          </a>
      </div>
    </section>
</template>

<script>
import M from 'materialize-css'
  export default {
    mounted() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {
        autoTrigger: true,
        closeOnClick: true // test false
      });
    },
  }
</script>
