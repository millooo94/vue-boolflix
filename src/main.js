import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Flag from 'vue-flagpack';

import App from './App.vue';

library.add(faStar, faRegularStar);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(Flag, {
  name: 'Flag',
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
