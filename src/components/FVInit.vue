<template>
  <section>
    <div class="slider">
      <ul class="slides">
        
        <li class="teal darken-4">
          <div class="row">
            <div class="col s2 m2 l2 caption center-align">
              <h3>Knowing Form Basic!</h3>
              <h5 class="light grey-text text-lighten-3">Here's Click Menu.</h5>
            </div>
            <div class="col s8 push-s9 m8 push-m9 l8 push-l9">
              <img src="../images/FVBasic.png">
            </div>
          </div>
        </li>

        <li class="teal darken-4">
          <div class="caption left-align">
            <h3>Knowing Form Bindings!</h3>
            <h5 class="light grey-text text-lighten-3">Here's Click Menu.</h5>
          </div>
        </li>

        <li class="red darken-3">
          <div class="caption right-align">
            <h3> Knowing Form Modifiers!</h3>
            <h5 class="light grey-text text-lighten-3">Here's Click Menu.</h5>
          </div>
        </li>

      </ul>
    </div>
  </section>
</template>

<script>
import M from 'materialize-css'
  export default {
    mounted() {
      var elems = document.querySelector('.slider');
      var instances = new M.Slider(elems,{
        interval:3000,
        height:450
      });
    },
  }
</script>
