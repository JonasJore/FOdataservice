<template>
  <div class="mainContent">
    <div class="welcomeBox">
      <vue-particles
        color="#dedede"
        :clickEffect="false"
        hoverMode="grab">
      </vue-particles>
      <h2 class="welcomeMessage">{{ msg }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

@Component
export default class AppWelcome extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped lang="scss">
  @import '../styles/_welcomeBox';
</style>
