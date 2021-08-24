import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'
import router from './router'
import ('../node_modules/bootstrap/dist/css/bootstrap.css')
import ('../node_modules/bootstrap-vue/dist/bootstrap-vue.css')

Vue.use(BootstrapVue);
Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
