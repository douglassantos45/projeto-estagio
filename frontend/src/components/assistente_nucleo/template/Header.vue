<template>
    <header class="header fixed-top shadow">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            {{ title }}
        </h1>
        
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>     

<script>

import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: { UserDropdown },
    /*Botão do Toggle*/
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            /*Alterando o icone toggle */
            return this.$store.state.isMenuVisible ?"fa-angle-left" : "fa-angle-down"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: #4a4b4e!important;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        -moz-box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.26);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        height: 55px;

        display: flex; /*Justificando conteúdo na linha*/
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.1rem;
        color: #FFF;
        font-weight: 100;
        flex-grow: 1; /*Cabeçalho cresce*/
        text-align: center;
    }

    .title a {
        color: #FFF;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #FFF;
        justify-self: flex-start;
        text-decoration: none;
        
        display: flex; /*Centralizar o Toggle */
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle {
        background-color: #f2f3f3;
        color: gray;
        vertical-align: middle;
        width: 29px;
        height: 29px;
        border-radius: 4px;
        margin-left: 4px;
        left: 219px;
        text-align: center;
    }

    header.header > a.toggle:hover {
        color: #FFF;
        background-color: rgba(0,0,0,0.2);
    }

    header.header > a.toggle .fa {
        transition: all 0.3s;
        font-size: 25px;
    }
</style>