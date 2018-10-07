<template>
    <section>
      <h5>Componest Parent</h5>

        <button @click = "seleccionado = 'CompButtons'">Buttons</button>
        <button @click = "seleccionado = 'CompCards'">Cards</button>

        <component :is="seleccionado"></component>
        <hr>
        <pre> {{ $data }}</pre>
    </section>
</template>

<script>
import CompButtons from './CompButtons.vue';
import CompCards from './CompCards.vue';

export default {
  components: {CompButtons, CompCards},
  data() {
    return {
      seleccionado: null
    }
  },
}
</script>

