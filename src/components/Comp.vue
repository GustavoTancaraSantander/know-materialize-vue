<template>
  <section>
    <h5>Component Parent</h5>
    <div class="row light-green darken-1">
      <div class="col s12 m3 l3" v-for="(item, key) in listaComponents" :key="key">

        <div class="card medium">

          <div class="card-image waves-light waves-block waves-effect">
            <!-- <img :src="'/dist/'+srcImage(item)+'.png'" class="responsive-img activator"> -->
            <!-- <img :src="'/dist/'+srcImage(item)+'.png?afef8478a43a78309f1fa2541e20e777'" class="responsive-img activator"> -->
            <!-- <img :src="'../images/'+ srcImage(item)+'.png'" class="responsive-img activator"> -->
            <img src="../images/cardActionButton.png" class="responsive-img activator">
            <span class="card-title blue-text activator">{{item.slice(4)}}</span>
          </div>

          <div class="card-content">
             <span class="card-title">Detalles
                <i class="material-icons right activator">more_vert</i>
              </span>
            <p>Presione en la imagen o el icono para ver el resumen del modulo</p>
          </div>

          <div class="card-action">
              <a :href="'#'+item.slice(4)" @click = "seleccionado = item">Comenzar</a>
          </div>

          <div class="card-reveal">
            <span class="card-title ">{{productosAPI[key].name}}
               <i class="material-icons right">close</i>
            </span>
            <ul class="left-align">
              <li v-for="(value, key) in productosAPI[key].know" :key="key"> * {{value}} </li>
            </ul>
            <footer class="red white-text">
                {{productosAPI[key].type}}
            </footer>
          </div>

        </div>
      </div>

    </div>

      <button @click = "seleccionado = 'CompButtons'">Buttons</button>
      <button @click = "seleccionado = 'CompCards'">Cards</button>
      <button @click = "seleccionado = 'CompNavbar'">Navbar</button>
      <button @click = "seleccionado = 'CompActionButton'">ActionButton</button>

      <component :is="seleccionado"></component>
      <hr>
      <pre> {{ $data }}</pre>
  </section>
</template>

<script>
  import CompButtons from './CompButtons.vue';
  import CompCards from './CompCards.vue';
  import CompNavbar from './CompNavbar.vue';
  import CompActionButton from './CompActionButton.vue';

  export default {

    components: {CompButtons, CompCards, CompNavbar, CompActionButton},
    props:['name', 'know', 'type'],
    data() {
      return {
        seleccionado: null,
        listaComponents:['CompButtons', 'CompCards', 'CompNavbar', 'CompActionButton'],
        srcImg: ['../images/cardButtons.png'],
        productosAPI: [
          {name: 'Buttons', know:['btn flat','btn-small','btn-disabled','btn-floating','btn-waves-efect'], type:'Component Mcss' },
          {name: 'Cards', know:['card','card-image','card-content','card-action','card-reveal','activator','card-title'], type:'Component Mcss' },
          {name: 'Navbar', know:['nav-wrapper','brand-logo right','sidenav','sidenav-trigger','search'], type:'Component Mcss' },
          {name: 'ActionButton', know:['action-btn','btn-floating','.fixed-action-btn'], type:'Component Mcss' },
        ],
      }
    },

    methods: {
      srcImage(nameComponent){
          return nameComponent.replace("Comp","card");
          console.log("../images/"+ nameComponent.replace("Comp","card") +".png")
      }
    },
  }
</script>

