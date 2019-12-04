<template>
  <footer class="footer">
      <span>IF Baiano</span>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #DDD;
        color: #333;
        font-size: .8rem;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px; /*Para não ficar colado no lado esquerdo da página */
    }
</style>