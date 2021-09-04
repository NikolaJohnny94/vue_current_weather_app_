<template>
  <Header title="Curent Weather App" />
  <NotFound v-if="status == 404" class="not-found-error" />
  <Input />
  <MainComponent />
  <Footer footerText="Developed by Nikola" />
</template>

<script>
  import { mapGetters } from 'vuex'
  import Header from './components/Header'
  import NotFound from './components/NotFound'
  import Input from './components/Input'
  import Icon from './components/Icon'
  import MainComponent from './components/MainComponent'
  import Footer from './components/Footer'

  export default {
    components: {
      Header,
      NotFound,
      Input,
      Icon,
      MainComponent,
      Footer,
    },
    computed: {
      ...mapGetters({
        status: 'getStatus',
      }),
    },
  }
</script>
