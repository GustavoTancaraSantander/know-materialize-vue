<template>
  <section>
    <div class="row div-config">
      <div class="col s3 m3 l2 amber lighten-1">
          <img src="../feactures/pexels.jpg" width="60" height="43" class="circle">
      </div>
      <div class="col s9 m9 l10 ">
        <h5 class="center flow-text">JavaScript Parent</h5>
      </div>
    </div>

    <div class="row">
      <div class="col s12 m3 l2" id="menu-of-components">
        <div class="pinned">

          <a href="#" class="sidenav-trigger hide-on-med-and-up" data-target="menu-mobile">
                <i class="small material-icons btn-floating">list</i>
          </a>

          <!-- class="hide-on-med-and-down" mobile -->
         <ul :class="classObjects" class="hide-on-small-and-down">
          <!-- NEXT is seleccionado = true => :class = waves-effect waves-teal -->
             <li v-for="(jsComponent, key) in menuComponents" :key="key">
              <div class="collapsible-header waves-effect waves-teal" @click = "seleccionado = jsComponent">
                <i class="material-icons ">{{menuIcons[key]}}</i>{{jsComponent.slice(2)}}
              </div>
              <div class="collapsible-body">
                <a :href="convertedLinkM(jsComponent)" class="btn red darken-1"> <!-- {{convertedLink}} -->Doc Official</a>
              </div>
            </li>
         </ul>

        </div>
      </div>

      <div class="col s12 m9 l10">
            <component :is="seleccionado"></component>
            <hr>
            <pre class="left-align "> {{ $data }}</pre>
      </div>
    </div>

     <!-- UL mobile-responsive hide menu -->
     <ul class="sidenav" id="menu-mobile">
        <!-- add component dinamic -> :is -->
        <li ><a href="#">Settings<i class="material-icons left">settings</i></a></li>

        <li>
          <div class="user-view">
            <div class="background">
              <img src="../feactures/logoMaterialize.png">
            </div>
            <a href="#user"><img class="circle" src="../feactures/logo-jscript.jpg"></a>
            <h3>JScript</h3>
          </div>
        </li>

        <li v-for="(componentt, key) in menuComponents" :key="key">
            <a class="collapsible-header waves-effect waves-teal sidenav-close"
             @click = "seleccionado = componentt">
              <i class="material-icons">{{menuIcons[key]}}</i>{{componentt.slice(2)}}
            </a>
        </li>

    </ul>
  </section>
</template>

<script>
import JsCarousel from './JsCarousel.vue';
import JsCollapsible from './JsCollapsible.vue';
import JsMediaBox from './JsMediaBox.vue';
import JsSidenav from './JsSidenav.vue';
import JsScrollspy from './JsScrollspy.vue';
import JsParallax from './JsParallax.vue';
import JsDropDown from './JsDropDown.vue';

import M from 'materialize-css'
  export default {
    components: {JsCarousel, JsCollapsible, JsMediaBox, JsSidenav, JsScrollspy,
                 JsParallax, JsDropDown},
    data() {
      return {
        seleccionado: null,
        classObjects: {
          collapsible:true,
          //expandable: true,
          popout: true,
          active: true,
        },

        menuComponents:[
          'JsCarousel', 'JsCollapsible','JsDropDown', 'JsMediaBox', 'JsSidenav',
           'JsScrollspy', 'JsParallax'
        ],

        menuIcons:[
          'loop', 'system_update_alt', 'expand_more', 'perm_media', 'more_vert',
          'low_priority', 'dvr'
        ],

      }
    },

    computed: {
      convertedLinkC(){
        return "https://materializecss.com/"+ this.jsComponent.slice(2).slice(0,1).toLowerCase()+this.jsComponent.slice(2).slice(1) +".html"
      // JsComponent.slice(2).slice(0,1).toLowerCase()+JsComponent.slice(2).slice(1)
      }
    },

    methods:{
      convertedLinkM(jsComponent){
        return "https://materializecss.com/"+ jsComponent.slice(2).slice(0,1).toLowerCase()+jsComponent.slice(2).slice(1) +".html"
      }
    },

    mounted() {
       //M.AutoInit();
      let elem_CollapsibleJS = document.querySelector('.collapsible')
      let inst_CollapsibleJS = new M.Collapsible(elem_CollapsibleJS, {
          accordion:true,
          outDuration: 10
        });

      let elemJS = document.querySelectorAll('.sidenav');
      let instJS = M.Sidenav.init(elemJS,{
        edge:'left',
        preventScrolling: true
      });
    },
  }
</script>

