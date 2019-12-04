import Vue from 'vue'
import VueRouter from 'vue-router'

import AssistenteNucleo from '@/components/assistente_nucleo/home/Home'
import EmpresaPages from '@/components/assistente_nucleo/empresa/EmpresaPages'
import EstagioPages from '@/components/assistente_nucleo/estagio/EstagioPages'
import OrientadorPages from '@/components/assistente_nucleo/orientador/OrientadorPages'
import SupervisorPages from '@/components/assistente_nucleo/supervisor/SupervisorPages'

Vue.use(VueRouter)

//Configurando a rota

const routes = [{
    name: 'home',
    path: '/',
    component: AssistenteNucleo
}, {
    name: 'empresaPages',
    path: '/empresas',
    component: EmpresaPages
}, {
    name: 'estagioPages',
    path: '/estagios',
    component: EstagioPages
}, {
    name: 'orientadorPages',
    path: '/orientador',
    component: OrientadorPages
}, {
    name: 'supervisorPages',
    path: '/supervisor',
    component: SupervisorPages
}]

/*Serve para exibir a URL */
export default new VueRouter({
    mode: 'history', //Exibe o nome da rota ao inves de hash
    routes: routes
})