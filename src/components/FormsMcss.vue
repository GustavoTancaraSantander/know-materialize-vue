<template>
  <section>
    <h3>Mcss</h3>
    <hr>
    <div class="wrapper row">
      <div id="menu-sidenav" class="col s12 m3 l3">
         <aside>    <!-- START LEFT SIDEVAR NAV -->
            <ul id="slide-out-fixed" class="sidenav sidenav-fixed">
              <li>
                <div class="user-view">
                  <div class="background">
                    <img src="../feactures/logo-vue.png">
                  </div>
                  <a href="#user"><img class="circle" src="../feactures/logoMaterialize.png"></a>
                  <a href="#name"><span class="white-text name">John Doe</span></a>
                  <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                </div>
              </li>
              <ul :class="classObject">
                <li>
                  <div class="collapsible-header sidenav-close  waves-effect waves-green" @click = "seleccionado = 'FMCheckbox'">
                    <i class="material-icons ">playlist_add_check</i>FMCheckbox
                  </div>
                  <div class="collapsible-body"><a href="https://materializecss.com/checkboxes.html" class="btn-small red darken-1">Doc Official</a></div>
                </li>

                <li>
                  <div class="collapsible-header sidenav-close  waves-effect waves-green" @click = "seleccionado = 'FMRadio'">
                    <i class="material-icons ">lens</i>FMRadio
                  </div>
                  <div class="collapsible-body"><a href="https://materializecss.com/radio-buttons.html" class="btn-small red darken-1">Doc Official</a></div>
                </li>

                <li>
                  <div class="collapsible-header sidenav-close  waves-effect waves-green" @click = "seleccionado = 'FMRange'">
                    <i class="material-icons ">linear_scale</i>FMRange
                  </div>
                  <div class="collapsible-body"><a href="https://materializecss.com/radio-buttons.html" class="btn-small red darken-1">Doc Official</a></div>
                </li>

                <li>
                  <div class="collapsible-header sidenav-close  waves-effect waves-green" @click = "seleccionado = 'FMSelect'">
                    <i class="material-icons ">arrow_drop_down</i>FMSelect
                  </div>
                  <div class="collapsible-body"><a href="https://materializecss.com/radio-buttons.html" class="btn-small red darken-1">Doc Official</a></div>
                </li>

                <li>
                  <div class="collapsible-header sidenav-close  waves-effect waves-green" @click = "seleccionado = 'FMSwitches'">
                    <i class="material-icons ">compare_arrows</i>FMSwitches
                  </div>
                  <div class="collapsible-body"><a href="https://materializecss.com/switches.html" class="btn-small red darken-1">Doc Official</a></div>
                </li>

                <li>
                  <div class="collapsible-header sidenav-close  waves-effect waves-green" @click = "seleccionado = 'FMTextInput'">
                    <i class="material-icons ">keyboard</i>FMTextInput
                  </div>
                  <div class="collapsible-body"><a href="https://materializecss.com/text-inputs.html" class="btn-small red darken-1">Doc Official</a></div>
                </li>

                <li>
                  <div class="collapsible-header sidenav-close  waves-effect waves-green" @click = "seleccionado = 'FMPickers'">
                    <i class="material-icons ">fingerprint</i>FMPickers
                  </div>
                  <div class="collapsible-body"><a href="https://materializecss.com/text-inputs.html" class="btn-small red darken-1">Doc Official</a></div>
                </li>

              </ul>
            </ul>
            <a href="#" data-target="slide-out-fixed" class="sidenav-trigger hide-on-large-only right"><i class="material-icons">menu</i></a>
        </aside>   <!-- END LEFT SIDEVAR NAV -->
      </div>

      <div id="component-selected " class="col 12 m9 l9 container">
        <component :is="seleccionado"></component>
      </div>

    </div>
  </section>
</template>

<script>
import FMCheckbox from './FMCheckbox.vue';
import FMRadio from './FMRadio.vue';
import FMRange from './FMRange.vue';
import FMSelect from './FMSelect.vue';
import FMSwitches from './FMSwitches.vue';
import FMTextInput from './FMTextInput.vue';
import FMPickers from './FMPickers.vue';

import M from 'materialize-css'
  export default {
    name:'sidenav',
    components:{FMCheckbox, FMRadio, FMRange, FMSelect, FMSwitches, FMTextInput, FMPickers},
    data() {
      return {
        seleccionado:null,
        classObject: {
            collapsible:true,
            //expandable: true,
            //popout: true,
            active: true,
         }
      }
    },
    mounted() {

      var elems = document.querySelector('.sidenav');
      var instances = new M.Sidenav(elems,{
        edge:'left',
        preventScrolling: true
      });

      let elem = document.querySelector('.collapsible')
      let inst = new M.Collapsible(elem, {
          accordion:true,
          outDuration: 500
      });

    },
  }
</script>

<style scoped>
   /* aside, section, footer {
      padding-left: 250px;
    }

     @media only screen and (max-width :800px) {
       aside, footer {
        padding-left: 0;
      }
    } */
    .sidenav {
      top: 120px;
      width:250px;
    }

</style>


