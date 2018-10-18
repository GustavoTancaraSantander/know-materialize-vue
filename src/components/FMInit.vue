<template>
  <section>

      <div class="slider" >
        <ul class="slides" >
          <li class="teal darken-4" v-for="(input,key) in FMInputs" :key="input">
            <div class="caption left-align">
              <h3>Knowing Form {{input}}!</h3>
              <h5 class="light grey-text text-lighten-3">Here's Click Menu.</h5>
              <i class=" large center material-icons z-depth-5 red">{{ icons[key]}}</i>
            </div>
          </li>
        </ul>
      </div>

  </section>
</template>

<script>
import M from 'materialize-css'
  export default {
    data() {
      return {

        FMInputs: ['Checkbox', 'Radio', 'Range', 'Select',
                  'Switches', 'TextInput', 'Pickers'
        ],

        icons:['playlist_add_check','lens','linear_scale','arrow_drop_down',
                'compare_arrows', 'keyboard', 'fingerprint'
        ],
      }
    },
    mounted() {
      var elFMInit = document.querySelector('.slider');
      var instFMInit  = new M.Slider(elFMInit ,{
        interval:3000,
        height:450
      });
    },
  }
</script>
