<template>
  <!-- Implementando :class hide menu para o grid-->
  <div id="app" :class="{'hide-menu': !isMenuVisible}">
      <Header title="IF Baiano" :hideToggle="false" :hideUserDropdown="false"/>
      <Menu />
      <Content />
      <Footer />
  </div>
 
</template>

<script>
import { mapState } from 'vuex'
import Header  from "@/components/assistente_nucleo/template/Header"
import Menu    from "@/components/assistente_nucleo/template/Menu"
import Content from "@/components/assistente_nucleo/template/Content"
import Footer  from "@/components/assistente_nucleo/template/Footer"


export default {
    name: "AppNucleo",
    components: { Header, Menu, Content, Footer },
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    * {
        font-family: "Lato", sans-serif;
    }

    body {
        margin: 0;
    }

    #app {
        -webkit-font-smoothing: antialiased; /*Imprimindo as fontes melhor */
        -webkit-osx-font-smoothing: grayscale;

        height: 100vh;/*Ocupando a tela inteira */
        display: grid;
        grid-template-rows: 45px 1fr 40px; /*Organizando o grid */
        grid-template-columns: 250px 1fr; /*Coluna do Menu */
        grid-template-areas: 
            "header header"
            "menu   content"
            "menu   footer"
    }

    #app.hide-menu {
        grid-template-areas: 
            "header  header"
            "content content"
            "footer  footer"
    }
</style>