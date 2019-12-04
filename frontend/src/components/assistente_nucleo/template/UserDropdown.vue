<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-none d-sm-block mr-2 d-lg-inline small"><strong>{{ user_nucleo.name }}</strong></span>
            <div class="user-dropdown-img">
                <Gravatar :registration="user_nucleo.registration" alt="User" />
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <a href><i class="fa fa-sign-out"></i> Sair</a>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex' 
import Gravatar from 'vue-gravatar'

export default {
    name: 'UserDropdown',
    components: { Gravatar },
    computed: mapState(['user_nucleo'])
}
</script>

<style>
    .user-dropdown {
        position: relative;
        height: 100%;
    }

    .user-dropdown span {
        color: #f0f0d9;
    }

    .user-button {
        display: flex;
        align-items: center;
        color: #FFF;
        height: 100%;
        font-weight: 100;
        padding: 0px 20px;
    }

    .user-dropdown:hover {
        background-color: rgba(0, 0, 0, 0.2);
        color: #FFF;
    }

    .user-dropdown-img {
        margin: 0px 10px;
    }

    .user-dropdown-img > img {
        max-height: 2rem;
        border-radius: 2rem;
    }

    .user-dropdown-content {
        position: absolute;
        right: 0px;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;/*Serve para o item aparecer na frente de outros itens */

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
    }

    .user-dropdown:hover .user-dropdown-content {
        visibility: visible;
        opacity: 1;
    }

    .user-dropdown-content a {
        text-decoration: none;
        color: #000;
        padding: 10px;
    }

    .user-dropdown-content a:hover {
        text-decoration: none;
        color: #000;
        background-color: #EDEDED;
    }
</style>