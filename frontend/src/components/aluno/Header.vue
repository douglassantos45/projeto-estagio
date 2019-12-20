<template>
  <div>
      <div>
  <b-navbar toggleable="lg" class="fixed-top" type="dark" variant="info">
    <b-navbar-brand href="#">IF Baiano</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <span class="d-none d-sm-block mr-2 d-lg-inline small text-white"><strong>{{ user_aluno.name }}</strong></span>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Sair</b-button>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  computed: mapState(['user_aluno'])
}
</script>

<style>

</style>