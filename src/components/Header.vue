<template>
  <header>
    <DarkModeContainer>
      <Icon
        v-if="darkMode"
        :icon="icons[0]"
        class="sun"
        @click="backgroundColorWhite()"
        :title="titles[1]"
      />
      <Icon
        v-else
        :icon="icons[1]"
        class="moon"
        @click="backgroundColor()"
        :title="titles[0]"
      />
    </DarkModeContainer>
    <h1>{{ title }}</h1>
    <ButtonContainer>
      <Button
        class="unitButtons"
        @click.prevent="celsiusConverter"
        :title="titles[2]"
        >°C</Button
      >
      <Button
        class="unitButtons"
        @click.prevent="fahrenheitConverter"
        :title="titles[3]"
        >°F</Button
      >
      <Button
        class="unitButtons"
        @click.prevent="kelvinConverter"
        :title="titles[4]"
        >K</Button
      >
    </ButtonContainer>
  </header>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Icon from './Icon'
  import Button from './Button'
  import ButtonContainer from './ButtonContainer'
  import DarkModeContainer from './DarkModeContainer'

  export default {
    name: 'Header',
    components: {
      DarkModeContainer,
      Button,
      ButtonContainer,
      Icon,
    },
    props: {
      title: String,
    },
    computed: {
      ...mapGetters({
        titles: 'getTitles',
        darkMode: 'getDarkMode',
        icons: 'getIcons',
      }),
    },
    methods: {
      ...mapActions(['loadData']),
      fahrenheitConverter() {
        this.$store.state.units = 'imperial'
        this.loadData()
        this.$store.state.unit = '°F'
      },
      kelvinConverter() {
        this.$store.state.units = 'standard'
        this.loadData()
        this.$store.state.unit = 'K'
      },
      celsiusConverter() {
        this.$store.state.units = 'metric'
        this.loadData()
        this.$store.state.unit = '°C'
      },
      backgroundColor() {
        this.$store.state.darkMode = true
        document.querySelector('body').classList.add('dark')
        document.querySelector('input').classList.add('inputDark')
        const buttons = document.querySelectorAll('button')
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.add('buttonDark')
        }
      },
      backgroundColorWhite() {
        this.$store.state.darkMode = false
        document.querySelector('body').classList.remove('dark')
        document.querySelector('input').classList.remove('inputDark')
        const buttons = document.querySelectorAll('button')
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('buttonDark')
        }
      },
    },
  }
</script>

<style scoped>
  h1 {
    margin: 0;
    color: #000;
  }

  header {
    background-color: #3268bf !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 45px;
  }

  @media (max-width: 645px) {
    header {
      height: 130px;
    }
  }
  @media (max-width: 345px) {
    header {
      height: 150px;
    }
  }

  @media (max-width: 645px) {
    h1 {
      margin-top: 18px;
    }
  }
</style>
