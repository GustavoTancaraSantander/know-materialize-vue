<template>
  <section>
    <div class="input-field col s12">
      <select>
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <label>Materialize Select</label>
    </div>

    <div class="input-field col s12">
      <select multiple>
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <label>Materialize Multiple Select</label>
    </div>

    <div class="input-field col s12">
      <select>
        <optgroup label="team 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </optgroup>
        <optgroup label="team 2">
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </optgroup>
      </select>
      <label>Optgroups</label>
    </div>

    <div class="input-field col s12 m6">
      <select class="icons">
        <option value="" disabled selected>Choose your option</option>
        <option value="" data-icon="../feactures/logo-vue.png">example 1</option>
        <option value="" data-icon="../feactures/blurred-background-book-shelves-books-247321.jpg">example 2</option>
        <option value="" data-icon="../assets/logo.png">example 3</option>
      </select>
    <label>Images in select</label>
    </div>

 <!-- Error charged images next(review) -->
 
    <div class="input-field col s12 m6">
      <select class="icons">
        <option value="" disabled selected>Choose your option</option>
        <option value="test" data-icon="../images/baseline_arrow_right_black_18dp.png" class="left">example 1</option>
        <option value="" data-icon="images/sample-1.jpg" class="left">example 2</option>
        <option value="" data-icon="../images/baseline_arrow_right_black_18dp.png" class="left">example 3</option>
      </select>
      <label>Images in select</label>
    </div>

    <label>Browser Select</label>
      <select class="browser-default">
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>

  </section>
</template>

<script>
import M from 'materialize-css'

  export default {
    mounted() {
      //M.AutoInit();
        var ele = document.querySelectorAll('select');
        var instance = M.FormSelect.init(ele);

        /* let e = document.querySelectorAll('select');
        let i =  new M.FormSelect(e); */
    },
  }
</script>

