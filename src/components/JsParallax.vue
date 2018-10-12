<template>
  <div>
    <h3>Parallax</h3>
      <hr>
    <div class="parallax-container">
      <div class="parallax"><img src="../feactures/pexels.jpg"></div>
    </div>
    <hr>
    <div class="parallax-container">
      <div class="parallax"><img src="../feactures/adult-boutique-business-318236.jpg"></div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="../feactures/golden-high-heels-luxury-2669.jpg" class="responsive-img"></div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="../feactures/bag-boutique-business-336372.jpg"></div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="../feactures/bow-elegant-fashion-137603.jpg"></div>
    </div>


  </div>
</template>

<script>
import M from 'materialize-css'
  export default {
    mounted() {
      M.AutoInit();
    // for MULTI elments --> use
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);

    // for ONE elment --> use
      /* var elems = document.querySelector('.parallax');
      var instances = new M.Parallax(elems); */
    },
  }
</script>

