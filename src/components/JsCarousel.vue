<template>
    <section>
      <h3>Carousel</h3>
      <hr>
        <button @click= "activeSlider()" >slider</button>

       <pre class="left-align">{{$data}}</pre>

      <div :class="classCarousel_Obj">
        <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
        <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
        <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
        <a class="carousel-item" href="#four!"><img src="../feactures/pexels.jpg"></a>
        <a class="carousel-item" href="#five!"><img src="../feactures/logoMaterialize.png"></a>
      </div>

      <div class="carousel carousel-slider">
        <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
        <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
        <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
        <a class="carousel-item" href="#four!"><img src="../feactures/pexels.jpg"></a>
      </div>
      <hr>
      <div class="carousel carousel-slider center">
          <div class="carousel-fixed-item center">
            <a class="btn waves-effect white grey-text darken-text-2">button</a>
          </div>
          <div class="carousel-item red white-text" href="#one!">
            <h2>First Panel</h2>
            <p class="white-text">This is your first panel</p>
          </div>
          <div class="carousel-item amber white-text" href="#two!">
            <h2>Second Panel</h2>
            <p class="white-text">This is your second panel</p>
          </div>
          <div class="carousel-item green white-text" href="#three!">
            <h2>Third Panel</h2>
            <p class="white-text">This is your third panel</p>
          </div>
          <div class="carousel-item blue white-text" href="#four!">
            <h2>Fourth Panel</h2>
            <p class="white-text">This is your fourth panel</p>
          </div>
      </div>

    </section>
</template>

<script>
  import M from 'materialize-css'
    export default {
      name: 'Carousel',
      mounted () {
        var elem = document.querySelectorAll('.carousel')
        var inst = M.Carousel.init(elem, {
          indicators: true,
          duration:500
        });

        var elem = document.querySelectorAll('.carousel-slider')
        var inst = M.Carousel.init(elem, {
         indicators: true,
         fullWidth: true
        });

      },

      data() {
        return {
          classCarousel_Obj:{
            carousel: true,
            slider: null,
          },
        }
      },

      methods: {
        activeSlider(){

          if(this.classCarousel_Obj.slider === null){
            this.classCarousel_Obj.slider = 'carousel-slider';
          }else{
            this.classCarousel_Obj.slider=null
          }
          console.log(this.classCarousel_Obj.slider)
        }
      }

    }
</script>
