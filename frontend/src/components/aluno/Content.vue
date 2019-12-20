<template>
  <div class="container">
    <div class="mt-5 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-5">Frequência</h1>
    </div>
    <div class="mt-0">
      <Frequencia />
    </div>
  </div>
</template>

<script>

import Frequencia from './frequencia/FrequenciaPages'

export default {
    name: 'Content',
    components: { Frequencia }
}
</script>

<style>
  .container {
    width: 1000px;
  }

  @media(max-width: 577px){
    .container{
      width: 100%;
    }
  }
</style>