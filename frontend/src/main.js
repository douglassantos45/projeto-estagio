import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'


import './config/bootstrap'
import AppNucleo from './AppNucleo'
import AppAluno from './AppAluno'
import AppLogin from './AppLogin'
import AppOrientador from './AppOrientador'
import AppSupervisor from './AppSupervisor'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(AppNucleo)
}).$mount('#nucleo')

new Vue({
  router,
  store,
  render: h => h(AppAluno)
}).$mount('#aluno')

new Vue({
  router,
  render: h => h(AppLogin)
}).$mount('#login')

new Vue({
  router,
  render: h => h(AppOrientador)
}).$mount('#orientador')

new Vue({
  router,
  render: h => h(AppSupervisor)
}).$mount('#supervisor')