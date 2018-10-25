<template>
    <section>
      <h3>Media Box</h3>
        <a href="https://materializecss.com/media.html" class="btn red darken-1">Doc Official</a>
      <hr>
      <div class="row" id="media-materialboxed">
          <div class="col s6">
              <div class="section">
                <img class="materialboxed1 responsive-img" width="250" src="../feactures/pexels.jpg">
              </div>
          </div>
          <div class="col s6">
              <div class="section">
                <img class="materialboxed2 responsive-img"
                data-caption="A picture of a way with a group of trees in a park"
                width="250" src="../feactures/golden-high-heels-luxury-2669.jpg">
              </div>
          </div>
      </div>

      <div class="row" id="media-slider">
        <div class="slider">
          <ul class="slides">
            <li>
              <img class="materialboxed responsive-img"
                src="../feactures/pexels.jpg"> <!-- random image -->
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/2"> <!-- random image -->
              <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/3"> <!-- random image -->
              <div class="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/4"> <!-- random image -->
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </section>
</template>

<script>
import M from 'materialize-css'
  export default {
    name: 'materialboxed',
    mounted() {

      var el1 = document.querySelector('.materialboxed1')
      var inst = new M.Materialbox(el1)
      var el2 = document.querySelector('.materialboxed2')
      var inst = new M.Materialbox(el2)
      
      var elems = document.querySelector('.slider');
      var instances = new M.Slider(elems,{
        interval:2000,
        height:550
      });
      var el = document.querySelector('.materialboxed')
      var inst = new M.Materialbox(el)
    },
  }
</script>

