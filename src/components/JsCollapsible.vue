<template>
    <section>
        <blockquote class="flow-text"><h4>Welcome Collapsible</h4></blockquote>
        <hr>
        <button @click= "changePopout">Popout</button>
        <button @click= "changeActive">Active</button>

        <pre>{{$data}}</pre>
        <template>
          <ul :class="classObject">
            <li>
              <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
              <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.ff1f23a1f2ds3af13</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
              <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.435657689</span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
              <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
          </ul>
        </template>

    </section>
</template>

<script>
import M from 'materialize-css'
  export default {
    name: 'Collapsible',
    mounted() {
      let elem = document.querySelectorAll('.collapsible')
      let inst = M.Collapsible.init(elem, {
          accordion:true,
          outDuration: 500
        })
    },
    data() {
      return {
         classObject: {
            collapsible:true,
          //  expandable: true,
            popout: true,
            active: true,
         }
      }
    },
    methods: {
      changePopout(){
        this.classObject.popout = !this.classObject.popout
      },
      changeActive(){
        this.classObject.active = !this.classObject.active
      }
    }

  }
</script>

