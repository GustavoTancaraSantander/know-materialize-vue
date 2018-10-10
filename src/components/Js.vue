<template>
  <section>
    <h5>JavaScript Parent</h5>

      <button @click = "seleccionado = 'JsCarousel'">Carousel</button>

      <component :is="seleccionado"></component>
      <hr>
      <pre> {{ $data }}</pre>
  </section>
</template>

<script>
import JsCarousel from './JsCarousel.vue';
  export default {
    components: {JsCarousel}, 
    data() {
      return {
        seleccionado: null
      }
    },
  }
</script>

