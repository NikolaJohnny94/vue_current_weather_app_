<template>
  <div class="buttonContainer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ButtonContainer',
  }
</script>

<style scoped>
  .buttonContainer {
    text-align: right;
    padding-top: 5px;
    width: 25%;
  }
</style>
>
