<template>
  <!-- Implementando :class hide menu para o grid-->
  <div id="supervisor">
      <Content />
  </div>
 
</template>

<script>

import Content from "@/components/supervisor/avaliacao/AvaliacaoPages"


export default {
    name: "AppSupervisor",
    components: { Content },
}
</script>

<style>
    * {
        font-family: "Lato", sans-serif;
    }

    body {
        margin: 0px;
        padding: 0px;
        display: grid;
        justify-content: normal;
        align-items: normal;
    }

</style>