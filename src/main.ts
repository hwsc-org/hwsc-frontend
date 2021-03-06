import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store/store';
import i18n from '@/i18n';
import vuetify from '@/plugins/vuetify';
import '@/filters/index';
import '@/plugins/vuejs-logger';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app');
