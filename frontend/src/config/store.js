import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        
        /*Referenciando o usários do Header*/
        user_nucleo: {
            name: 'Assistente Núcleo',
            registration: 'assisnucleo@ifbaiano.com'
        },
        user_aluno: {
            name: 'Aluno',
            registration: 'aluno@ifbaiano.com'
        }
    },
    /*Alterna o estado do Menu*/
    mutations: {
        toggleMenu(state, isVisible) {
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        }
    }
})