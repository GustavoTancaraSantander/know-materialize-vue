<template>
  <main>
      <h5> CSS parent</h5>

        <button @click = "seleccionado = 'CssColor'">Color</button>
        <button @click = "seleccionado = 'CssGrid'">Grid</button>

        <component :is="seleccionado"></component>
        <hr>
        <pre> {{ $data }}</pre>
  </main>
</template>

<script>
import CssColor from './CssColor.vue';
import CssGrid from './CssGrid.vue';

export default {
  components: {CssColor, CssGrid},
  data() {
    return {
      seleccionado: null //'CssColor', // state vuex next
    }
  },
}
</script>

