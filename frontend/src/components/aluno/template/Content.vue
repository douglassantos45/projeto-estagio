<template>
  <div class="container">
    <div class="mt-5 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-5">Conteúdo</h1>
    </div>
    <div class="mt-0">
      <Table />
    </div>
  </div>
</template>

<script>

import Table from '../frequencia/FrequenciaPages'

export default {
    name: 'Content',
    components: { Table }
}
</script>

<style>

</style>