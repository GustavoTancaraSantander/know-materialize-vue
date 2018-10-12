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

            <li>
              <div class="collapsible-header" @click = "seleccionado = 'JsCarousel'">
                <i class="material-icons ">whatshot</i>Carousel
              </div>
              <div class="collapsible-body"><a href="https://materializecss.com/carousel.html" class="btn red darken-1">Doc Official</a></div>
            </li>

            <li>
              <div class="collapsible-header" @click = "seleccionado = 'JsCollapsible'">
                <i class="material-icons">whatshot</i>Collapsible
              </div>
              <div class="collapsible-body"></div>
            </li>

            <li>
              <div class="collapsible-header" @click = "seleccionado = 'JsDropDown'">
                <i class="material-icons">expand_more</i>DropDown
              </div>
              <div class="collapsible-body"></div>
            </li>

            <li>
              <div class="collapsible-header" @click = "seleccionado = 'JsMediaBox'">
                <i class="material-icons">filter_drama</i>MediaBox
              </div>
              <div class="collapsible-body z-depth-5 green lighten-4"> <a href="https://materializecss.com/media.html" class="btn red darken-1">Doc Official</a></div>
            </li>

            <li>
              <div class="collapsible-header" @click = "seleccionado = 'JsSidenav'">
                <i class="material-icons">filter_drama</i>Sidenav
              </div>
              <div class="collapsible-body"><a href="https://materializecss.com/media.html" class="btn red darken-1">Doc Official</a></div>
            </li>

            <li>
              <div class="collapsible-header" @click = "seleccionado = 'JsScrollspy'">
                <i class="material-icons">place</i>Scrollspy
              </div>
              <div class="collapsible-body"><a href="https://materializecss.com/media.html" class="btn red darken-1">Doc Official</a></div>
            </li>

            <li>
              <!-- NEXT is seleccionado = true => :class = waves-effect waves-teal -->
              <div class="collapsible-header waves-effect waves-teal" @click = "seleccionado = 'JsParallax'">
                <i class="material-icons">web</i>Parallax
              </div>
              <div class="collapsible-body"><a href="https://materializecss.com/parallax.html" class=" btn red darken-1">Doc Official</a></div>
            </li>

         </ul>
         
        </div>
      </div>

      <div class="col s12 m9 l10">
        <!-- <button @click = "seleccionado = 'JsCarousel'">Carousel</button>
        <button @click = "seleccionado = 'JsCollapsible'">Collapsible</button>
        <button @click = "seleccionado = 'JsMediaBox'">MediaBox</button>
        <button @click = "seleccionado = 'JsSidenav'">Sidenav</button>
        <button @click = "seleccionado = 'JsScrollspy'">Scrollspy</button> -->
        <div >
            <component :is="seleccionado"></component>
        </div>
        <hr>
      </div>
    </div>
      <pre> {{ $data }}</pre>

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
        <!-- Elems <li> menu-mobile Parent-JScript (NEXT V-FOR data)-->
        <li>
            <a class="collapsible-header waves-effect waves-teal sidenav-close" @click = "seleccionado = 'JsCarousel'">
              <i class="material-icons">whatshot</i>Carousel
            </a>
        </li>
        <li>
            <a class="collapsible-header waves-effect waves-teal sidenav-close" @click = "seleccionado = 'JsCollapsible'">
              <i class="material-icons">whatshot</i>Collapsible
            </a>
        </li>
        <li>
            <a class="collapsible-header waves-effect waves-teal sidenav-close" @click = "seleccionado = 'JsDropDown'">
              <i class="material-icons">expand_more</i>DropDown
            </a>
        </li>
        <li>
            <a class="collapsible-header waves-effect waves-teal sidenav-close" @click = "seleccionado = 'JsMediaBox'">
              <i class="material-icons">whatshot</i>MediaBox
            </a>
        </li>
        <li>
            <a class="collapsible-header waves-effect waves-teal sidenav-close" @click = "seleccionado = 'JsSidenav'">
              <i class="material-icons">whatshot</i>Sidenav
            </a>
        </li>
        <li>
            <a class="collapsible-header waves-effect sidenav-close" @click = "seleccionado = 'JsScrollspy'">
              <i class="material-icons">whatshot</i>Scrollspy
            </a>
        </li>
        <li>
            <a class="collapsible-header waves-effect waves-teal sidenav-close" @click = "seleccionado = 'JsParallax'">
              <i class="material-icons">whatshot</i>Parallax
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
        }
      }
    },
     mounted() {
       //M.AutoInit();
      let elem = document.querySelector('.collapsible')
      let inst = new M.Collapsible(elem, {
          accordion:true,
          outDuration: 10
        });

      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems,{
        edge:'left',
        preventScrolling: true
      });
    },
  }
</script>

