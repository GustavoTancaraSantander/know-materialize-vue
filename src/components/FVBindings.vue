<template>
  <section>
      <div id="bind_checkbox" class="scrollspy">
        <h4>#bind Checkbox</h4>
          <label>
            <input type="checkbox" v-model="checkbox"
                  :true-value="yes" :false-value="b"> <!-- trueORfalse-value="model", assing new property {object} -->
            <span class="blue-text flow-text">{{ checkbox }}</span>
          </label>
      </div>

      <div id="bind_radio" class="scrollspy">
        <h4>#bind Radio</h4>
          <label>
              <input type="radio" v-model="radio" :value="a">
              <span >{{ radio }}</span>
          </label>
          <label>
              <input type="radio" v-model="radio" :value="b">
              <span >{{ radio }}</span>
          </label>
          <label>
              <!-- <input type="radio" v-model="radio" value="[1,'infoUser',coockie,{}]"> -->
              <input type="radio" v-model="radio" value="yes">  <!-- Not :binding -->
              <span >{{ radio }}</span>
          </label>
      </div>

      <div id="bind_select" class="scrollspy">
        <h4>#bind Select</h4>
          <select v-model="select" class="browser-default z-depth-4">
            <option :value="yes">yes</option>
            <option :value="a">a</option>
            <option :value="b">b</option>
          </select>
          <span class="flow-text green-text">Selected: {{ select }}</span>
      </div>
      <hr>
      <pre class="left-align"> {{ $data }}</pre>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        checkbox: null,
        radio:null,
        select:null,

        yes:{ status: 'Accepted PRO', typeUser:'ADM'},
        b:{ status: 'Rejected', typeUser:'EMPLOYEE'},
        a:{ status: 'Accepted', typeUser:'EMPLOYEE'},

      }
    },
    mounted() {
      let eFVB = document.querySelectorAll('.scrollspy');
      let iFVB = M.ScrollSpy.init(eFVB,{
          scrollOffset: 85,
          throttle: 0
        });
    },
  }
</script>

