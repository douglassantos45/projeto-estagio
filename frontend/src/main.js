import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'


import './config/bootstrap'
import App from './App'
import AppAluno from './AppAluno'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App, AppAluno)
}).$mount('#app', '#aluno')

new Vue({
  router,
  store,
  render: h => h(AppAluno)
}).$mount('#aluno')
