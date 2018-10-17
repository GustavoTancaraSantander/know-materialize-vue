<template>
  <section>
    <h3>Form Vue</h3>
    <hr>
    <div class="row">

      <div id="menu-sidenav-FV" class="col s12 m3 l3">
        <aside>    <!-- START LEFT SIDEVAR NAV -->
          <ul id="slide-out-fixed-FV" class="sidenav sidenav-fixed">
            <li>
                <div class="user-view">
                  <div class="background">
                    <img src="../feactures/logoMaterialize.png">
                  </div>
                  <a href="#user"><img class="circle" src="../feactures/logo-vue.png"></a>
                  <a href="#name"><span class="black-text name">John Doe</span></a>
                  <a href="#email"><span class="black-text email">jdandturk@gmail.com</span></a>
                </div>
            </li>
            <ul :class="classObjectFV">
              <li id="_FVBasic">
                  <div class="collapsible-header sidenav-close  waves-effect waves-gray" @click = "seleccionado = 'FVBasic'">
                    <i class="material-icons ">playlist_add_check</i>FVBasic
                  </div>
                  <div class="collapsible-body">
                      <ul class="section table-of-contents">
                        <li><a href="#_text">Text</a></li>
                        <li><a href="#_multiline-text">Multiline text</a></li>
                        <li><a href="#_checkboxx">Checkbox</a></li>
                        <li><a href="#_multiple-checkboxes">Multiple checkboxes</a></li>
                        <li><a href="#_radio">Radio</a></li>
                        <li><a href="#_select">Select</a></li>
                        <li><a href="#_selectData">Select Data</a></li>
                        <li><a href="#"></a></li>
                        <div class="divider"></div>
                        <li><a href="">Home</a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                      </ul>
                  </div>
              </li>

              <li id="_FVBindings">
                <div class="collapsible-header sidenav-close  waves-effect waves-gray" @click = "seleccionado = 'FVBindings'">
                    <i class="material-icons ">playlist_add_check</i>FVBindings
                </div>
                <div class="collapsible-body">
                  <ul class="section table-of-contents">
                    <li><a href="#bind_checkbox">:bind Checkbox</a></li>
                    <li><a href="#bind_radio">:bind Radio</a></li>
                    <li><a href="#bind_select">:bind Select</a></li>
                  </ul>
                </div>
              </li>

              <li id="_FVModifiers">
                <div class="collapsible-header sidenav-close  waves-effect waves-gray" @click = "seleccionado = 'FVModifiers'">
                    <i class="material-icons ">playlist_add_check</i>FVModifiers
                </div>
                <div class="collapsible-body">
                  <ul class="section table-of-contents">
                    <li><a href="#lazy">.lazzi</a></li>
                    <li><a href="#number">.number</a></li>
                    <li><a href="#trim">.trim</a></li>
                  </ul>
                </div>
              </li>

            </ul>
          </ul>
          <div class="pinned">
            <a href="#" data-target="slide-out-fixed-FV" class="sidenav-trigger hide-on-large-only right"><i class="material-icons">menu</i></a>
          </div>
        </aside>   <!-- END LEFT SIDEVAR NAV -->
      </div>

      <div class="col s12 m9 l9 container">
          <component :is="seleccionado"></component>
      </div>

    </div>
  </section>
</template>

<script>
import FVInit from './FVInit.vue';
import FVBasic from './FVBasic.vue';
import FVBindings from './FVBindings.vue';
import FVModifiers from './FVModifiers.vue';

import M from 'materialize-css'
  export default {
  components:{FVBasic, FVBindings, FVModifiers, FVInit},
    mounted() {
      let elems = document.querySelector('.sidenav');
      let instances = new M.Sidenav(elems,{
        edge:'left',
        preventScrolling: true
      });

      let elem = document.querySelector('.collapsible')
      let inst = new M.Collapsible(elem, {
          accordion:true,
          outDuration: 500
      });


    },
    data() {
        return {
          seleccionado:'FVInit',
          classObjectFV: {
            collapsible:true,
            //expandable: true,
            popout: true,
            active: true,
         }
        }
      },
  }
</script>

<style scoped>
  .sidenav {
      top: 120px;
      width:250px;
    }
</style>



