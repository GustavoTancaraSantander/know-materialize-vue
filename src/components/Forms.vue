<template>
  <section>
    <div class="row">
      <div id="menu-of-components">

        <button class="btn left" v-show="!status" @click="showMenu()">Mostrar Menu
            <i class="material-icons right">filter</i>
        </button>

          <div class="carousel" v-show="status">
              <a class="carousel-item" href="#one!"
              @click = "seleccionado = 'FormsMcss', showMenu()">
                <img src="../feactures/logoMaterialize.png" class="responsive-img">
              </a>
              <a class="carousel-item" href="#two!"
               @click = "seleccionado = 'FormsVue', showMenu()">
                <img src="../feactures/logo-vue.png" class="responsive-img">
              </a>
              <a class="carousel-item" href="#tree!"
               @click = "seleccionado = 'FormsMcssVue', showMenu()">
                <img src="../feactures/logo-jscript.jpg" class="responsive-img">
              </a>
          </div>

      </div>

      <div  id="component-selected">
        <component :is="seleccionado"></component>
      </div>

    </div>
  </section>
</template>

<script>
import FormsMcss from './FormsMcss.vue';
import FormsVue from './FormsVue.vue';
import FormsMcssVue from './FormsMcssVue.vue';

import M from 'materialize-css'
  export default {
    components:{FormsMcss, FormsVue, FormsMcssVue},
    data() {
      return {
        seleccionado: null,
        status: true,
      }
    },

    mounted() {
      var elem = document.querySelector('.carousel')
       var inst = new M.Carousel(elem, {
          indicators: true,
         // fullWidth: true,
          duration:500,
          numVisible:5,
          //noWrap: true
        });
        var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {
        autoTrigger: true,
        closeOnClick: true, // test false
        alignment:' right',
      });
    },
    methods: {
      showMenu(){
        return this.status = !this.status;
      }
    }

  }
</script>



