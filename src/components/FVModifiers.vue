<template>
  <section>

      <div id="lazy" class="scrollspy">
        <blockquote><h4>#.lazy</h4></blockquote>
          <input type="text" v-model="msg" placeholder="out .lazy">
          <input type="text" v-model.lazy="msg" placeholder="with .lazy">
          {{ msg }}
      </div>

      <div id="number" class="scrollspy">
        <blockquote><h4>#.number</h4></blockquote>

          <input type="number" v-model="inputNumber" placeholder="isNumber? Out number">
          Concatenate: 6+input={{6 + inputNumber}}

          <input type="number" v-model.number="inputNumber" placeholder="isNumber? With .number">
          Sum: 6+input={{6 + inputNumber}}
      </div>

      <div id="trim" class="scrollspy">
        <blockquote><h4>#.trim</h4></blockquote>
          <input type="text" v-model="inputTrim" placeholder="Normal Not Deleting Spaces">
          <input type="text" v-model.trim="inputTrim" placeholder="Delete Spaces">
          {{inputTrim}}
      </div>
      <!-- how all at Vue are have combine -->
      <pre> {{ $data }} </pre>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        msg: null,
        inputNumber: null,
        inputTrim: null
      }
    },
    mounted() {
      let eFVM = document.querySelectorAll('.scrollspy');
      let iFVM = M.ScrollSpy.init(eFVM,{
          scrollOffset: 90,
          throttle: 0
        });
    },


  }
</script>

