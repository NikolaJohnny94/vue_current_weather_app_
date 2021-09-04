<template>
  <div class="dark-mode-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'DarkModeContainer',
  }
</script>

<style scoped>
  .dark-mode-container {
    width: 25%;
    text-align: left !important;
    margin-left: 10px;
    padding-top: 5.5px;
  }

  @media (max-width: 645px) {
    .dark-mode-container {
      margin-top: 37.5px;
    }
  }
</style>
