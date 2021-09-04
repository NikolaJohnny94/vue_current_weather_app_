<template>
  <footer>
    <p class="footerText">
      {{ footerText }}
      <a :href="listOfURLs[0]" :target="target" :title="titles[6]">
        <Icon :icon="['fab', icons[12]]" class="social-media-icon github" />
      </a>
      <a :href="listOfURLs[1]" :target="target" :title="titles[7]">
        <Icon :icon="['fab', icons[13]]" class="social-media-icon codepen" />
      </a>
      <a :href="listOfURLs[2]" :target="target" :title="titles[8]">
        <Icon :icon="['fab', icons[14]]" class="social-media-icon linkedin" />
      </a>
      <a :href="listOfURLs[3]" :target="target" :title="titles[9]">
        <Icon :icon="['fab', icons[15]]" class="social-media-icon twitter" />
      </a>
    </p>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Icon from './Icon'
  export default {
    components: {
      Icon,
    },
    props: {
      footerText: {
        type: String,
      },
    },
    name: 'Footer',
    data() {
      return {
        target: '_blank',
      }
    },
    computed: {
      ...mapGetters({
        titles: 'getTitles',
        listOfURLs: 'getListOfURLs',
        icons: 'getIcons',
      }),
    },
  }
</script>

<style scoped>
  footer {
    height: 45px !important;
    background-color: #3268bf !important;
    margin: 0 !important;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footerText {
    color: #000;
    margin: 0;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    footer {
      height: 50px !important;
    }
  }
</style>
