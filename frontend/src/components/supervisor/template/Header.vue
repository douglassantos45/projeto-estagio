<template>
  <div>
  <b-navbar class="fixed-top" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">IFbaiano</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <label for="" class="mr-2 text-white">Supervisor</label>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Sair</b-button>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <br>
</div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

</style>