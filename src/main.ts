import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueParticles from 'vue-particles';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueParticles);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
