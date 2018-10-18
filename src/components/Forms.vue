<template>
  <section>
    <div class="row">
      <div id="menu-of-components">

        <button class="btn left" v-show="!status" @click="showMenu()">Mostrar Menu
            <i class="material-icons right">filter</i>
        </button>

          <div class="carousel" v-show="status">
            <h4 class="white-text card-panel teal lighten-2">Knowing Forms With</h4>
              <a class="carousel-item" href="#one!" @click ="showMenu()">
                <!-- <router-link to="/forms-parent/fm_materializecss"> -->
                 <router-link :to="{name:'fm'}">
              <!-- @click = "seleccionado = 'FormsMcss', showMenu()"> -->
                <img src="../feactures/logoMaterialize.png" class="responsive-img">
                MaterializeCss</router-link>
              </a>
              <a class="carousel-item" href="#two!" @click ="showMenu()">
                <!-- <router-link to="/forms-parent/fv_vue"> -->
                <router-link :to="{name:'fv'}">
               <!-- @click = "seleccionado = 'FormsVue', showMenu()"> -->
                <img src="../feactures/logo-vue.png" class="responsive-img">
                VueJS</router-link>
              </a>
              <a class="carousel-item" href="#tree!"
               @click = "seleccionado = 'FormsMcssVue', showMenu()">
                <img src="../feactures/logo-jscript.jpg" class="responsive-img">
              </a>
          </div>

      </div>

      <div  id="component-selected">
        <router-view></router-view>
        <!-- <component :is="seleccionado"></component> -->
      </div>

    </div>
    <pre> {{ $data}}</pre>
  </section>
</template>

<script>
/* import FormsMcss from './FormsMcss.vue';
import FormsVue from './FormsVue.vue';
import FormsMcssVue from './FormsMcssVue.vue'; */

import M from 'materialize-css'
  export default {
   // components:{FormsMcss, FormsVue, FormsMcssVue},
    data() {
      return {
        //seleccionado: null,
        status: true,
      }
    },
    methods: {
      showMenu(){
         return this.status = !this.status;
      }
    },

    watch: {
      '$route'(to, from) {
         //console.log('to',to,'FROM',from)
          if(to.fullPath === '/forms-parent'){
             this.status = !this.status;
          }
      }
    },

    mounted() {
      var elem = document.querySelector('.carousel')
      var inst = new M.Carousel(elem, {
          indicators: true,
         // fullWidth: true,
          duration:500,
          numVisible:3,
          //noWrap: true
        });

    },
    
  }
</script>



