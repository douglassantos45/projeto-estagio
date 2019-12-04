<template>
  <aside class="menu left-side sidebar-offcanvas " v-show="isMenuVisible">
      
          <div class="sidebar-sticky sidebar">
            <div class="profile">
              <div class="user-block">
              <img class="img-user" src="https://img.icons8.com/bubbles/50/000000/admin-settings-male.png">
              <div class="detail">
                <strong>{{ user_nucleo.name }}</strong>
              </div>
            </div>
            </div>
            <ul class="nav flex-column ">
             <br>
              <li class="nav-item">
                <router-link to="/" class="nav-link ">
                  <i class="fa fa-home"></i> 
                  Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/empresas">
                  <i class="fa fa-building-o"></i>
                  Empresa
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/supervisor">
                  <i class="fa fa-user-circle-o"></i>
                  Supervisor
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/orientador">
                  <i class="fa fa-user-o"></i>
                  Orientador
                </router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/estagios" class="nav-link ">
                  <i class="fa fa-list"></i>
                  Estágios
                </router-link>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Relatórios salvos</span>
              <a class="d-flex align-items-center text-muted" >
                <i class="fa fa-plus-circle text-muted" ></i>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-file-text-o"></i>
                  Essa Semana
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-file-text-o"></i>
                  Neste mês
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-file-text-o"></i>
                  Último trimestre
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-file-pdf-o"></i>
                  Documentação de estágio
                </a>
              </li>
            </ul>
          </div>
 
  </aside>
</template>

<script>

import { mapState } from 'vuex'
import Tree from 'liquor-tree' //Marcando as URL

export default {
    name: 'Menu',
    components: { Tree },
    /*Passando um array com todas as propriedades isMenuVisible */
    computed: mapState(['isMenuVisible', 'user_nucleo'])

}
</script>

<style>
    .menu {
        grid-area: menu;
        background: #efefef91;
        width: 249px;

        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap; /*Permitir quebra de linha */
    }

    /*
    * Sidebar
    */
   
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100; /* Coloca atrás do navbar */
        padding: 48px 0 0; /* Altura do navbar */
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }

    .sidebar-sticky {
        position: relative;
        top: 0;
        height: calc(100vh - 48px);
        padding-top: 1rem;
        overflow-x: hidden;
        overflow-y: auto; /* Conteúdo com rolagem, se a viewport é menor que o conteúdo. */
    }

    .sidebar-sticky {
        position: -webkit-sticky;
        position: sticky;
    }

    .sidebar .nav-link {
        font-weight: 600;
        color: #333;
        font-size: 14.2px;
    }

    .sidebar .nav-link .fa {
        margin-right: 4px;
        color: #999;
    }

    .sidebar .nav-link.active {
        background: #0069d9;
        color: #FFF;
    }

    .sidebar .nav-link:hover i,
    .sidebar .nav-link.active i {
        color: inherit;
    }

    .sidebar .nav-link:hover .fa{
        color: #FFF;
        font-size: 17px;
        transition: .3s;
    }

    .sidebar-heading {
        font-size: .75rem;
        text-transform: uppercase;
    }

    .fa {
        font-size: 14px;
    }

    .nav-link {
        display: block;
        padding: 0.5rem 1rem;
    }

    .sidebar .nav-item > a:hover {
      background: #0069d9cf;
      color: #FFF;
      transition: 0.4s;
    }

    .profile {
      margin-top: -10px;
      height: 85px;
      padding: 15px;
      -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
      
    }


    .sidebar-inner .user-block {
      padding: 10px;
      border-bottom: 1px solid #2c2d3e;
      box-shadow: 0 1px 0 #34364a;
      -moz-box-shadow: 0 1px 0 #34364a;
      -webkit-box-shadow: 0 1px 0 #34364a;
      
    }
    .user-block {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    .sidebar-inner .user-block img {
      float: left;
      width: 45px;
      height: 45px;
      border-radius: 50em;
      -moz-border-radius: 50em;
      -webkit-border-radius: 50em;
   }

   .detail {
      text-align: center;
      padding: 15px 0px 0px 8px;
   }

   .detail strong {
     font-size: 13px;
   }

    .img-user {
      height: 50px;
      width: 50px;
    }

    aside.skin-6 .sidebar-inner .user-block .detail {
      color: #BECFE0;
    }
    aside .sidebar-inner .user-block .detail {
      float: left;
      color: #e6f1f7;
      margin-left: 10px;
    }

    .m-left-xs {
      margin-left: 5px;
    }

    .badge-danger, .label-danger {
      background-color: #fc8675;
      color: #fff;
    }


</style>