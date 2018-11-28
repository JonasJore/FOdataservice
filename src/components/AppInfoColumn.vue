<template>
  <div class="container">
  <div class="about-section">
    <div class="row">
      <div class="col-sm about-box">
        One of three columns
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
      <div class="col-sm about-box">
        One of three columns
      </div>
      <div class="col-sm about-box">
        One of three columns
      </div>
    </div>
  </div>
</div>

</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default{};
</script>
<style lang="scss">
@import '../styles/_infoColumns.scss';
</style>
