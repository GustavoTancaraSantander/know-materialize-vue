<template>
  <section>
    <div>
      <h5> CSS parent</h5>

        <button class="waves-effect waves-teal btn " @click = "seleccionado = 'CssColor'">Color</button>
        <button class="waves-effect waves-teal btn " @click = "seleccionado = 'CssGrid'">Grid</button>
        <button class="waves-effect waves-teal btn " @click = "seleccionado = 'CssMedia'">Media</button>
        <button class="waves-effect waves-teal btn " @click = "seleccionado = 'CssShadow'">Shadow</button>
        <button class="waves-effect waves-teal btn " @click = "seleccionado = 'CssTypography'">Typography</button>
        <button class="waves-effect waves-teal btn " @click = "seleccionado = 'CssTransition'">Transition</button>
        <button class="waves-effect waves-teal btn " @click = "seleccionado = 'CssTable'">Table</button>
        <button class="waves-effect waves-teal btn " @click = "seleccionado = 'CssHelpers'">Helpers</button>

    </div>

        <component :is="seleccionado" class="container"></component>
        <hr>
        <pre> {{ $data }}</pre>
  </section>
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

<style>

.inline-style {
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
}
*, *::before, *::after {
  box-sizing: inherit;
}

div, h5 {
background-position: 0%;
  margin-top: 0%;
   padding-top: 0%;
}
</style>


