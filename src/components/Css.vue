<template>
  <main>
      <h5> CSS parent</h5>

        <button @click = "seleccionado = 'CssColor'">Color</button>
        <button @click = "seleccionado = 'CssGrid'">Grid</button>
        <button @click = "seleccionado = 'CssMedia'">Media</button>
        <button @click = "seleccionado = 'CssShadow'">Shadow</button>

        <component :is="seleccionado"></component>
        <hr>
        <pre> {{ $data }}</pre>
  </main>
</template>

<script>
import CssColor from './CssColor.vue';
import CssGrid  from './CssGrid.vue';
import CssMedia from './CssMedia.vue';
import CssShadow from './CssShadow.vue';


export default {
  components: {CssColor, CssGrid, CssMedia, CssShadow},
  data() {
    return {
      seleccionado: null //'CssColor', // state vuex next
    }
  },
}
</script>

