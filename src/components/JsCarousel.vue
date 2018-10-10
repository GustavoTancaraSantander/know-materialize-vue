<template>
    <section>
      <h3>Welcome Carousel</h3>
      <hr>
      <!-- <button @click= "nextCarousel" >Next Carousel</button> -->
      <!-- <pre>{{$data.status}}</pre> -->

    <div id="slider" class="scrollspy section">
      <div class="carousel">

          <template v-if= "status">
            <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
            <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
            <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
            <a class="carousel-item" href="#four!"><img src="../feactures/pexels.jpg"></a>
            <a class="carousel-item" href="#five!"><img src="../feactures/logoMaterialize.png"></a>
          </template>
           <template v-else>
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

           </template>
      </div>
    </div>

    </section>
</template>

<script>
  import M from 'materialize-css'
    export default {
      name: 'Carousel',
      mounted () {
        var elem = document.querySelector('.carousel')
        var inst = new M.Carousel(elem, {
          //indicators: true,
         // fullWidth: true
          duration:500
        })
      },

      data() {
        return {
          classCarousel: [
            'carousel',
            'carousel carousel-slider',
            'carousel carousel-slider center',
            ],
          status: false //change manual
        }
      },

    /*   methods: {
        nextCarousel() {
          this.status = !this.status;
        }
      }
    */
    }
</script>
