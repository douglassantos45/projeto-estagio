<template>
  <!-- Implementando :class hide menu para o grid-->
  <div>
    
      <Content />
  </div>
 
</template>

<script>

import Content  from "@/components/orientador/planoEstagio/EstagioPages.vue"


export default {
    name: "AppOrientador",
    components: { Content },
}
</script>

<style>
    * {
        font-family: "Lato", sans-serif;
    }

</style>