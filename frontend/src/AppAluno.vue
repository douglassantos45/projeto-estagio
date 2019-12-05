<template>
  <!-- Implementando :class hide menu para o grid-->
  <div>
      <Header/>
      <Content />
  </div>
 
</template>

<script>

import Header  from "@/components/aluno/Header"
import Content from "@/components/aluno/Content"


export default {
    name: "AppAluno",
    components: { Header, Content },
}
</script>

<style>
    * {
        font-family: "Lato", sans-serif;
    }

    body {
        margin: 0;
    }


</style>