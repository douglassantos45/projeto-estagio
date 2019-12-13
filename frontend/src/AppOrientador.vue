<template>
  <!-- Implementando :class hide menu para o grid-->
  <div id="orientador">
      <Header />
      <Content />
  </div>
 
</template>

<script>

import Header from '@/components/orientador/template/Header'
import Content  from "@/components/orientador/template/Content"


export default {
    name: "AppOrientador",
    components: { Content, Header },
}
</script>

<style>
    * {
        font-family: "Lato", sans-serif;
    }

</style>