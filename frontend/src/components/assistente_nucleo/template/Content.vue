<template>
  <div class="content">
      <router-view>
          <PageTitle />
      </router-view>
  </div>
</template>

<script>
import PageTitle from './PageTitle'

export default {
    name: 'Content',
    components: {
        PageTitle
    }
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #eff0f0c9;
        padding: 20px;
    }

    
</style>