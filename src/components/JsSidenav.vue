<template>
  <Section>
      <h3>Sidenav</h3>
      <hr>

      <ul id="slide-out" class="sidenav">
        <li>
          <div class="user-view">
            <div class="background">
              <img src="../feactures/pexels.jpg">
            </div>
            <a href="#user"><img class="circle" src="../feactures/logoMaterialize.png"></a>
            <a href="#name"><span class="white-text name">John Doe</span></a>
            <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>

    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

      <ul id="slide-out2" class="sidenav sidenav-fixed">
        <li><a href="#!">First Sidebar Link</a></li>
        <li><a href="#!">Second Sidebar Link</a></li>
        <li class="no-padding">
          <ul class="collapsible collapsible-accordion">
            <li>
              <a class="collapsible-header">Dropdown<i class="material-icons">arrow_drop_down</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#!">First</a></li>
                  <li><a href="#!">Second</a></li>
                  <li><a href="#!">Third</a></li>
                  <li><a href="#!">Fourth</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
    </ul>

    <a href="#" data-target="slide-out2" class="sidenav-trigger show-on-small"><i class="material-icons">eject</i></a>

  </Section>
</template>

<script>
import M from 'materialize-css'
  export default {
    name:'sidenav',
    mounted() {
     // M.AutoInit();
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems,{
        edge:'left',
        preventScrolling: false
      });
                        // OR
     /*  var elems = document.querySelector('.sidenav');
      var instances = new M.Sidenav(elems,{
        edge:'left',
        preventScrolling: true
      }); */

      let elem = document.querySelector('.collapsible')
      let inst = new M.Collapsible(elem, {
          accordion:true,
          outDuration: 500
        })

    // NOTE: not effect by (querySelectorAll | querySelector)
        /* var elem = document.querySelector('.sidenav')
        var instance = new M.Sidenav(elem) */
    },
  }
</script>

