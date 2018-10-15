<template>
  <section>
      <input type="text" class="datepicker" placeholder="Press Select Calendar">
      <input type="text" class="datepicker2" placeholder="Press Select Calendar2">

      <input type="text" class="timepicker" placeholder="Press Clock">
      <input type="text" class="timepicker2" placeholder="Press Clock2">

  </section>
</template>


<script>
import M from 'materialize-css'
  export default {
    mounted() {
      /* Calendar */
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, {
        autoClose: false,
        format:'mmm dd, yyyy',
      });

      let e = document.querySelectorAll('.datepicker2');
      let i = M.Datepicker.init(e, {
        autoClose: true,
        format:'mmmm dd, yyyy',
        disableWeekends: true,
        firstDay: 1,
        //yearRange:2?
        //isRTL: true
        showMonthAfterYear: true, // yyyy mmmm
        //showDaysInNextAndPreviousMonths: true ?
        showClearBtn: true

       });
      /* view Date format options -> P */

      /* Clock */
      var elems = document.querySelectorAll('.timepicker');
      var instances = M.Timepicker.init(elems);

      var eClock = document.querySelectorAll('.timepicker2');
      var iClock = M.Timepicker.init(eClock, {
        duration: 5000,
        showClearBtn:true,
        defaultTime:'13:14',
        fromNow: 5,
        autoClose:true,
        twelveHour: false,
        vibrate: false
      });

    },
  }
</script>
