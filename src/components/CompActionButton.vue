<template>
    <section id="ActionButton" class="scrollspy">
        <h3>Welcome Floating Action Button</h3>
        <a href="https://materializecss.com/floating-action-button.html" class="btn red darken-1">Doc Official</a>
        <hr>
          <div class="action-btn">
            <a class="btn-floating btn-large red">
              <i class="large material-icons">mode_edit</i>
            </a>
            <ul>
              <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
              <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
              <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
              <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
            </ul>
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

      var elAB= document.querySelector('.action-btn');
      var instancesAB = new M.FloatingActionButton(elAB, {
        toolbarEnabled: true,
        direction: 'left',
        hoverEnabled: false
      });

    },
  }

</script>

