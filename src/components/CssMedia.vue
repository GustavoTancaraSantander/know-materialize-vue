<template>
  <section>

      <h3>Welcome Media</h3>
      <a href="https://materializecss.com/media-css.html" class="red darken-1 btn">Doc Official</a>
      <hr>
     <h4 class="z-depth-4 section teal lighten-3"> Images</h4>
        <div class="row">
            <div class="col s12 m6">
                <img class="responsive-img" src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?cs=srgb&dl=adorable-animal-canine-1254140.jpg&fm=jpg">
            </div>
            <div class="col s12 m6">
                <img class=" circle responsive-img" src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?cs=srgb&dl=adorable-animal-canine-1254140.jpg&fm=jpg">
            </div>

        </div>
        <h4 class="z-depth-4 section teal lighten-3"> Video</h4>
        <div class="row">
            <div class="col s12 m10 push-m1">
                <div class="video-container">
                    <iframe width="853" height="480"
                    src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
                    frameborder="0" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
        <div class="row">
                <div class="col s12 m10 push-m1">
                    <video class="responsive-video" controls>
                      <!-- averiguar + vue-loader in webpack.config.js
                      https://vue-loader.vuejs.org/options.html#transformasseturls
                      https://github.com/webpack-contrib/file-loader
                      https://vue-loader.vuejs.org/guide/asset-url.html#transform-rules
                      https://github.com/vuejs-templates/webpack/issues/277
                      https://stackoverflow.com/questions/45645675/webpack-3-locates-mp4-file-but-video-is-not-playable
                      -->
                      <!-- <source src="../feactures/AscendantTrailer.mp4" type="video/mp4"> -->
                    </video>
                </div>
        </div>

  </section>
</template>
