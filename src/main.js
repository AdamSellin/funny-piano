import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMousetrap from 'vue-mousetrap'
Vue.use(VueMousetrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
