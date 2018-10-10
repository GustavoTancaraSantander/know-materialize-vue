<template>
    <section>
      <h5>Component Parent</h5>

        <button @click = "seleccionado = 'CompButtons'">Buttons</button>
        <button @click = "seleccionado = 'CompCards'">Cards</button>
        <button @click = "seleccionado = 'CompNavbar'">Navbar</button>
        <button @click = "seleccionado = 'CompActionButton'">ActionButton</button>

        <component :is="seleccionado"></component>
        <hr>
        <pre> {{ $data }}</pre>
    </section>
</template>
 
<script>
  import CompButtons from './CompButtons.vue';
  import CompCards from './CompCards.vue';
  import CompNavbar from './CompNavbar.vue';
  import CompActionButton from './CompActionButton.vue';

  export default {
    components: {CompButtons, CompCards, CompNavbar, CompActionButton},
    data() {
      return {
        seleccionado: null
      }
    },
  }
</script>

