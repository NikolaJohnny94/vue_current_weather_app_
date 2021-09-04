<template>
  <span
    >{{ message }} <Icon :icon="icons[16]" class="exclamation-circle"
  /></span>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Icon from './Icon'
  export default {
    name: 'NotFound',
    components: {
      Icon,
    },
    data() {
      return {
        message: 'Please enter a valid city name',
      }
    },
    computed: {
      ...mapGetters({
        icons: 'getIcons',
      }),
    },
  }
</script>

<style scoped>
  .not-found-error {
    font-size: 18px;
    display: block;
    margin-top: 15px !important;
    margin-bottom: 20px !important;
    color: red;
    margin: auto;
    font-family: 'Encode Sans Semi Expanded', sans-serif !important;
    font-weight: bold !important;
  }
</style>
