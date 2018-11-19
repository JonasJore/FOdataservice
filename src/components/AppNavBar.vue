<template>
  <div class="navbar-body">
    <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top">
        <a class="navbar-brand" href="#">FOdataservice</a>
        <div class="list-items">
          <ul class="navbar-nav">
            <li class="nav-item" id="nav-list-item">
              <a class="nav-link" href="#">Hjem</a>
            </li>
            <li class="nav-item" id="nav-list-item">
              <a class="nav-link" href="#">Tjenester</a>
            </li>
            <li class="nav-item" id="nav-list-item">
              <a class="nav-link" href="#">Nytt</a>
            </li>
            <li class="nav-item" id="nav-list-item">
              <a class="nav-link" href="#">Kontakt oss</a>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
export default {
};
</script>

<style lang="scss">
  @import '../styles/_navBar.scss';
</style>
