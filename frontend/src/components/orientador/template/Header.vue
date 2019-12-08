<template>
<div>
   <div class="navbar navbar-expand-lg fixed-top d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark  border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal text-white">IF baiano</h5>
    <div>
      <strong class="d-none d-sm-block mr-2 d-lg-inline small text-white">Orientador</strong>
    </div>
    <a class="btn btn-sm btn-primary" href="#">Sair</a>
  </div>
</div>
   
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    computed: mapState(['user_orientador'])
}
</script>

<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>