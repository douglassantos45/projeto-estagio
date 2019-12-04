<template>
  <!-- Implementando :class hide menu para o grid-->
  <div>
    
      <Content />
  </div>
 
</template>

<script>

import Content  from "@/components/login/LoginPages.vue"


export default {
    name: "AppLogin",
    components: { Content },
}
</script>

<style>
    * {
        font-family: "Lato", sans-serif;
    }

</style>