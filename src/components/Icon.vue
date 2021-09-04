<template>
  <font-awesome-icon :icon="icon" />
</template>

<script>
  export default {
    name: 'Icon',
    props: ['icon'],
  }
</script>

<style scoped>
  .sun {
    color: #e6de09;
    cursor: pointer;
    font-size: 32px;
  }

  .moon {
    color: #dedc92;
    cursor: pointer;
    font-size: 32px;
  }

  .social-media-icon {
    margin-right: 10px !important;
  }

  .social-media-icon:active {
    transform: scale(0.93);
  }

  .github {
    color: #000;
    margin-left: 5px;
  }

  .codepen {
    color: #d8dce3;
  }

  .linkedin {
    color: #fff;
  }

  .twitter {
    color: #1da1f2;
  }

  .temperature {
    color: red;
  }

  .feels-like {
    color: #121c82;
  }

  .pressure {
    color: #c91a49;
  }

  .humidity {
    color: #326ba8;
  }

  .wind-speed {
    color: #9ebcdb;
  }

  .clouds {
    color: #9aa4ad;
  }

  .globe {
    color: #3e4eab;
  }

  .visibility {
    color: #6b6f9c;
  }

  .sunrise {
    color: #ebb70e;
  }

  .sunset {
    color: #faef4d;
  }

  .arrow-right {
    margin: auto 5px;
  }

  .arrow-down {
    display: none;
  }

  .exclamation-circle {
    color: #db0707;
  }

  @media (max-width: 480px) {
    .arrow-right {
      display: none !important;
    }
    .arrow-down {
      display: block !important;
      margin: 10px auto;
    }
    .sun {
      font-size: 42px;
    }
    .moon {
      font-size: 42px;
    }
    .social-media-icon {
      width: 24px !important;
      height: 24px !important;
    }
  }
</style>
