<template>
  <Section>
    <h3>Welcome Table</h3>
    <a href="https://materializecss.com/table.html" class="red darken-1 btn pulse">Doc Official</a>
    <hr>
      <table class="centered highlight">
          <thead>
              <tr>
                <th>Month</th>
                <th>Item Sold</th>
                <th>Shop</th>
                <th>Total Profit</th>
              </tr>
          </thead>

          <tbody>
             <tr v-for="(venta, key) in ventas" :key="key">
               <td>{{ venta.month }}</td>
               <td>{{ venta.sold  }}</td>
               <td>{{ venta.shop  }}</td>
               <td>{{ venta.total }}</td>
             </tr>
          </tbody>
      </table>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      ventas: [
        {month:'January', sold:122, shop:'store16', total:'$ 122,000.00'},
        {month:'February', sold:98, shop:'store16', total:'$ 102,000.00'},
        {month:'March', sold:65, shop:'store16', total:'$ 112,500.00'},
        {month:'April', sold:222, shop:'store16', total:'$ 140,000.00'},
        {month:'May', sold:106, shop:'store16', total:'$ 126,000.00'}
      ],
      // https://vuejs.org/v2/guide/class-and-style.html (:class)
      typeClass: ['highlight', 'striped', 'centered', 'responsive-table'],
    }
  },
}
</script>

