<template>
    <section id="Cards" class="scrollspy">
        <h3>Welcome Cards</h3>
        <a href="https://materializecss.com/cards.html" class="btn red darken-3">Doc Official</a>
        <hr>
        <div class="row">

            <div class="col s12 m4 l4">
                <div class="card">
                    <div class="card-content">
                        <p>Lorem ipsum dosicing elit. Ullam spiciatis voluptates eiriam rerum est? Repellat error quis optio corrupti facilis nostrum veritatis.</p>
                    </div>
                </div>
            </div>

            <div class="col s12 m4 l4">
                <div class="card red">
                    <div class="card-content white-text">
                            <span class="card-title">Lorem, ipsum dolor.</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat officia aperiam dicta dignissimos animi?</p>
                    </div>
                    <div class="card-action">
                            <a href="#">Inventario</a>
                            <a href="#">Ventas</a>
                    </div>
                </div>
            </div>

            <div class="col s12 m4 l4">
              <div class="card">

                <div class="card-image">
                    <img src="../feactures/pexels.jpg">
                    <span class="card-title">Personal</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i>
                    </a>
                </div>

                <div class="card-content">
                    <p>Facilis doloribus dolorem ur aliquam inventore? Accusantium vitae blanditiis excepturi minima vel deleniti quasi non pariatur saepe.</p>
                </div>

                <div class="card-action">
                    <a href="#">Administrar</a>
                </div>

              </div>
            </div>

        </div>

        <div class="row" id="card-Horizontal">
            <div class="col s12">
                <div class="card horizontal">

                    <div class="card-image ">
                        <img src="../feactures/pexels.jpg">
                    </div>

                    <div class="card-staked">
                        <div class="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam illo harum doloribus eaque magni soluta molestias deserunt non enim rerum, repudiandae ratione alias facilis, magnam temporibus. Repellat, ad laudantium.</p>
                        </div>
                        <div class="card-action waves-green">
                            <a href="#">Administrar</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="row" id="Cards-Reveals-Activators">
          <div class="col s12 m6" id="card-ProductoTest">
            <div class="card z-depth-4">
                <!--  waves-effect Block view of button >>(assessment)-->
                <div class="card-image waves-block waves-effect waves-light">
                  <img class="responsive-img activator" src="../feactures/golden-high-heels-luxury-2669.jpg">
                  <span class="card-title red-text">Golden MT10</span>
                    <a class="btn-floating halfway-fab waves-effect waves-green red">
                      <i class="material-icons">assessment</i>
                    </a>
                </div>

                <div class="card-content">
                  <!-- Add Vue methods for show detailProduct in card-reveal_DINAMIC -->
                  <span class="card-title">Detalles
                      <i class="material-icons right">more_vert</i>
                  </span>
                    <ul>
                      <li>State: Disponible</li>
                      <li>Price: $ 198</li>
                      <li><button class="btn waves-effect waves-light">Administrar</button></li>
                    </ul>
                </div>

                <div class="card-action">
                    <a href="#">Links</a>
                    <button class="btn-floating red">Like</button>
                </div>

                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Card Title
                    <i class="material-icons right">close</i>
                  </span>
                      <table class="centered striped">
                          <thead>
                              <tr>
                                <th>Store</th>
                                <th>Item Sold</th>
                                <th>Shop</th>
                                <th>Total Profit</th>
                              </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(venta, key) in ventas" :key="key">
                              <td>{{ venta.store }}</td>
                              <td>{{ venta.sold  }}</td>
                              <td>{{ venta.shop  }}</td>
                              <td>{{ venta.total }}</td>
                            </tr>
                          </tbody>
                      </table>
                </div>

            </div>
          </div>
          <div class="col 12 m6" id="card-Example">
              <div class="card">

                <div class="card-image waves-block waves-effect waves-light z-depth-2">
                    <img src="../feactures/logoMaterialize.png" alt="" class="activator">
                    <span class="card-title black-text ">Logo Materilize CSS</span>
                </div>

                <div class="card-content">
                    <span class="card-title activator">Lorem, ipsum dolor.
                            <i class="material-icons right">more_vert</i>
                    </span>
                    <p><a href="#">Enlace</a></p>
                </div>

                <div class="card-action activator">
                    <a href="#">Chart</a>
                </div>

                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title
                        <i class="material-icons right">close</i>
                    </span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>

              </div>
          </div>
        </div>

        <div class="row" id="NEW-review-link-Advanced-extern">
          <!-- https://pixinvent.com/materialize-material-design-admin-template/html/collapsible-menu/cards-advance.html  -->
          <div class="card">
          <div class="card-move-up waves-effect waves-block waves-light">
                        <div class="move-up cyan darken-1">
                          <div>
                            <span class="chart-title white-text">Revenue</span>
                            <div class="chart-revenue cyan darken-2 white-text">
                              <p class="chart-revenue-total">$4,500.85</p>
                              <p class="chart-revenue-per">
                                <i class="material-icons">arrow_drop_up</i> 21.80 %</p>
                            </div>
                            <div class="switch chart-revenue-switch right">
                              <label class="cyan-text text-lighten-5">
                                Month
                                <input type="checkbox">
                                <span class="lever"></span> Year
                              </label>
                            </div>
                          </div>
                          <div class="trending-line-chart-wrapper">
                            <canvas id="trending-line-chart" height="110" width="474" style="width: 474px; height: 110px;"></canvas>
                          </div>
                        </div>
                      </div>

          </div>
        </div>

        <div class="row" id="Cards-in-Tabs">
          <div class="col s12">
            <div class="card">
                <div class="card-content">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis aspernatur minima nam voluptate repellat ea fuga harum fugiat ipsum saepe et sed, quis facilis officia, nostrum voluptates totam dolor officiis!</p>
                </div>
                <div class="card-tabs">
                  <ul class="tabs tabs-fixed-width">
                    <li class="tab"><a href="#test1">Test UNO</a></li>
                    <li class="tab"><a class="active" href="#test2">Test DOS</a></li>
                    <li class="tab"><a href="#test3">Test TRES</a></li>
                  </ul>
                </div>
                <div class="card-content grey lighten-4">
                  <div class="test1">contenido 1</div>
                  <div class="test2">contenido 2</div>
                  <div class="test3">contenido 3</div>
                </div>
            </div>
          </div>
        </div>

    </section>
</template>

<script>
export default {
  
  data() {
    return {
      ventas: [
        {store:50, sold:122, shop:'store16', total:'$ 9,000'},
        {store:15, sold:98, shop:'storeCJ4', total:'$ 12,00'},
        {store:66, sold:65, shop:'storeC6', total:'$ 12,500'},
        {store:8, sold:222, shop:'storeCJ1', total:'$ 14,000'},
        {store:5, sold:106, shop:'storeC2', total:'$ 16,000'}
      ],

    }
  },

  mounted() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems,{
        scrollOffset:85
      });
    },

}

</script>


