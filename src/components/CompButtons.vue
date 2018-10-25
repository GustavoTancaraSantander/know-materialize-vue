<template>
    <section class="container scrollspy" id="Buttons">
        <h3>Welcome Buttons</h3>
        <a href="https://materializecss.com/buttons.html" class="red darken-3 btn">Doc Official</a>
        <hr>
        <section>
            <button class="btn">Boton 1</button>
            <a href="#" class="btn">boton2</a>
            <button class="btn-flat">Boton Flat</button>
            <button class="btn-floating">Boton btn-floating</button>
        </section>

        <section>
            <button class="btn-large red">boton btn-large</button>
            <button class="btn-small blue-grey">boton btn-small</button>
            <button class="btn-small darken-2   disabled">boton disabled</button>
            <a class="waves-effect waves-light btn">button</a>
        </section>

        <h3 class="modal-content materialize-red">Efectos</h3>

        <section>
                <a class="waves-effect waves-light btn">button</a>
                <button class=" btn waves-effect waves-purple"> WAVES-....</button>
                <button class="waves-block">waves-button-input</button>
        </section>

        <div class="section">
             <button class="btn waves-effect waves-purple">
                    <i class="material-icons left">visibility</i>
                    BotonICON1
             </button>

             <button class="btn waves-effect waves-purple">
                    <i class="material-icons right">visibility</i>
                    BotonICON2
             </button>

              <a class="btn-floating btn-large waves-effect waves-green red">
                  <i class="material-icons">room</i>
              </a>

            <div class="section">
                    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
        </div>
    </section>
</template>

<script>
export default {

  mounted() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems,{
      scrollOffset:85
    });
  },

}
</script>

