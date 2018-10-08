<template>
    <section>
      <h5>Component Parent</h5>

        <button @click = "seleccionado = 'CompButtons'">Buttons</button>
        <button @click = "seleccionado = 'CompCards'">Cards</button>
        <button @click = "seleccionado = 'CompNavbar'">Navbar</button>

        <component :is="seleccionado"></component>
        <hr>
        <pre> {{ $data }}</pre>
    </section>
</template>

<script>
import CompButtons from './CompButtons.vue';
import CompCards from './CompCards.vue';
import CompNavbar from './CompNavbar.vue';

export default {
  components: {CompButtons, CompCards, CompNavbar},
  data() {
    return {
      seleccionado: null
    }
  },
}
</script>

