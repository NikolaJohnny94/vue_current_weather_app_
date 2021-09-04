<template>
  <input
    type="text"
    v-model="search"
    @keyup.enter="searchButton"
    :placeholder="placeholder"
  />
  <Button @click.prevent="searchButton" :title="titles[5]">Click</Button>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Button from './Button'
  export default {
    components: {
      Button,
    },
    data() {
      return {
        search: '',
        placeholder: 'Enter the city name',
      }
    },
    computed: {
      ...mapGetters({
        titles: 'getTitles',
      }),
    },
    methods: {
      ...mapActions(['loadData']),

      searchButton() {
        this.$store.state.search = this.search
        this.loadData()
        this.$store.state.show = true
      },
    },
  }
</script>

<style scoped>
  input {
    display: block;
    margin: 25px auto;
    padding-bottom: 7px;
    font-family: 'Itim', cursive;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    height: 25px;
    background-color: transparent;
    text-align: center;
    border-bottom: 2px solid #3c8fd6;
  }

  input:focus {
    outline: none !important;
    border-bottom: 2px solid #3c8fd6;
    box-shadow: inset 0px -1.2px #3c8fd6;
    font-weight: 600;
  }

  input::placeholder {
    color: #7d808a;
  }

  input:focus::placeholder {
    color: transparent;
  }

  .inputDark {
    padding-bottom: 7px;
    color: #fff !important;
    border-bottom: 2px solid #70dbb4;
  }

  .inputDark:focus {
    outline: none !important;
    border-bottom: 2px solid #70dbb4;
    box-shadow: inset 0px -1.2px #70dbb4;
    font-weight: 600;
  }
  .inputDark::placeholder {
    color: #a8acba;
  }

  .not-found-error {
    margin-top: 13px;
  }

  .not-found-error p {
    margin-bottom: 20px !important;
    color: red;
    margin: auto;
    font-family: 'Encode Sans Semi Expanded', sans-serif !important;
    font-weight: bold !important;
  }
</style>
