<template>
  <main>
      <h5> CSS parent</h5>

        <button @click = "seleccionado = 'CssColor'">Color</button>
        <button @click = "seleccionado = 'CssGrid'">Grid</button>
        <button @click = "seleccionado = 'CssMedia'">Media</button>
        <button @click = "seleccionado = 'CssShadow'">Shadow</button>
        <button @click = "seleccionado = 'CssTypography'">Typography</button>
        <button @click = "seleccionado = 'CssTransition'">Transition</button>
        <button @click = "seleccionado = 'CssTable'">Table</button>
        <button @click = "seleccionado = 'CssHelpers'">Helpers</button>

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
import CssTypography from './CssTypography.vue';
import CssTransition from './CssTransition.vue';
import CssTable from './CssTable.vue';
import CssHelpers from './CssHelpers.vue';

export default {
  components: {CssColor, CssGrid, CssMedia, CssShadow, CssTypography,
                CssTransition, CssTable, CssHelpers },
  data() {
    return {
      seleccionado: null //'CssColor', // state vuex next
    }
  },
}
</script>

