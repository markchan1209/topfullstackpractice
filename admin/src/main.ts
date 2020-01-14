import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.ts'
import store from './store'
import router from './router'
import asxios from 'axios'
// 引入 vue-ele-form
// import EleForm from 'vue-ele-form'

// Vue.use(EleForm)

Vue.config.productionTip = false

Vue.prototype.$http = asxios.create({
  baseURL:"http://localhost:3000"
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
