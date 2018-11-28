<template>
  <v-app>
    <div class="body-main">
      <AppNavBar/>
      <AppWelcome msg="Velkommen til FOdataservice's hjemmeside!"/>
      <v-section>
        <AppInfoColumn/>
      </v-section>
    </div>
  </v-app>

</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppNavBar from './components/AppNavBar.vue';
import AppWelcome from './components/AppWelcome.vue';
import AppInfoColumn from './components/AppInfoColumn.vue';

@Component({
  components: {
    AppInfoColumn,
    AppNavBar,
    AppWelcome,
  },
})
export default class App extends Vue {
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
