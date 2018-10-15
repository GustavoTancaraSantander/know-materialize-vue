<template>
  <section>
      <div id="test-slider"></div>

      <form action="#">
        <p class="range-field">
        <input type="range" id="test5" min="0" max="100" />
        </p>
      </form>
  </section>
</template>

<script>
import noUiSlider from 'nouislider'
export default {
  mounted() {
    var slider = document.getElementById('test-slider');
    noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    step: 1,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
      'min': 0,
      'max': 100
    },
    // format: wNumb({
    //   decimals: 0
    // })
    });
  },
}
</script>

