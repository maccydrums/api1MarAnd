import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(SmartTable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
