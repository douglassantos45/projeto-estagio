<template>
  <div>
      <div class="fixed-top d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">IF Baiano</h5>
        <Menu />
      <a class="btn btn-outline-primary" href="#">Sair</a>
    </div>

  </div>
</template>

<script>
import Menu from './Menu'

export default {
    name: 'Header',
    components: { Menu }
}
</script>

<style>

</style>