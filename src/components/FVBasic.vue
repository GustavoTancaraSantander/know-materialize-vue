<template>
  <section>

        <div id="_text" class="scrollspy">
          <h4>#Text</h4>
          <input v-model="message" placeholder="edit me (Reactive)">
          <p class="green-text flow-text">Message is: {{ message }}</p>
        </div>

        <div id="_multiline-text" class="scrollspy">
          <h4>#Multiline text</h4>
          <span>Multiline message is:</span>
          <p class="blue-text flow-text" style="white-space: pre-line;">{{ multilineText }}</p>
          <br>
          <textarea v-model="multilineText" placeholder="add multiple lines"></textarea>
        </div>

        <div class="parallax-container">
          <div class="parallax"><img src="../feactures/pexels.jpg" class="responsive-img"></div>
        </div>

        <div id="_checkboxx" class="scrollspy">
          <h4>#Checkbox</h4>
          <label>
            <input type="checkbox" id="checkbox" v-model="checked" class="browser-default"/>
            <span for="checkbox" class="red-text flow-text">{{ checked }}</span>
          </label>
        </div>

        <div class="parallax-container">
          <div class="parallax"><img src="../feactures/logo-vue.png" class="responsive-img"></div>
        </div>

        <div id='_multiple-checkboxes' class="scrollspy">
           <h4>#Multiple checkboxes</h4>
           <label>
              <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
              <span for="jack">Jack</span>
           </label>
           <label>
              <input type="checkbox" id="john" value="John" v-model="checkedNames">
              <span for="john">John</span>
            </label>
            <label>
              <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
              <span for="mike">Mike</span>
            </label>
          <br>
          <span class="purple-text">Checked names: {{ checkedNames }}</span>
        </div>

        <div class="parallax-container">
          <div class="parallax"><img src="../feactures/pexels.jpg" class="responsive-img"></div>
        </div>

        <div id="_radio" class="scrollspy">
          <h4>#Radio</h4>
          <label>
            <input type="radio" id="one" value="One" v-model="picked">
            <span for="one">One</span>
          </label>
            <br>
          <label>
            <input type="radio" id="two" value="Two" v-model="picked">
            <span for="two">Two</span>
          </label>
            <br>
            <span class="flow-text orange-text">Picked: {{ picked }}</span>
        </div>

        <div class="parallax-container">
          <div class="parallax"><img src="../feactures/logoMaterialize.png" class="responsive-img"></div>
        </div>

        <div id="_select" class="scrollspy">
            <h4>#Select</h4>
            <select v-model="selected" class="browser-default yellow">
              <option disabled value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <span class="flow-text green-text">Selected: {{ selected }}</span>
        </div>

        <div class="parallax-container">
          <div class="parallax"><img src="../feactures/pexels.jpg" class="responsive-img"></div>
        </div>

        <div id="_selectData" class="scrollspy">
          <h4>#Select Data</h4>
            <select v-model="selectedData" class="browser-default yellow">
              <option v-for="(option,key) in options" :value="option.value" :key="key">
                {{ option.text }} - {{ key }}
              </option>
            </select>
          <span class="flow-text green-text">Selected Data: {{ selectedData }}</span>
        </div>

  </section>
</template>

<script>
import M from 'materialize-css'
  export default {
    data() {
      return {
        message: null,
        multilineText:null,
        checked:false,
        checkedNames:[],
        picked: null,
        selected:null,
        selectedData:null,
        options:[
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
      }
    },
    mounted() {
        let e = document.querySelectorAll('.scrollspy');
        let i = M.ScrollSpy.init(e,{
          scrollOffset: 85,
          throttle: 0
        });

        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    },
  }
</script>

