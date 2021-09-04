<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
  }
</script>

<style scoped>
  button {
    margin-bottom: 2%;
    width: 140px !important;
    height: 35px !important;
    background-color: navy;
    color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 2px 3px 2px 1px #00004f;
    padding: 10px;
    cursor: pointer !important;
  }

  .buttonDark {
    background-color: #0ea16b !important;
    box-shadow: 2px 3px 2px 1px #044029;
  }

  button:active {
    outline: none !important;
    box-shadow: inset 0 0 8px black;
    transform: scale(0.98);
  }

  .unitButtons {
    width: 30px !important;
    height: 30px !important;
    margin-right: 10px !important;
    color: #fff;
    border-radius: 5px;
    border: none;
    padding: 3px;
  }

  .extraButtons {
    width: 105px !important;
    background-color: #752eb0 !important;
    box-shadow: 2px 3px 2px 1px #5d1896 !important;
  }

  @media (max-width: 645px) {
    .unitButtons:nth-child(1) {
      margin-top: 1px;
      margin-left: 40px;
    }
    .unitButtons:nth-child(2),
    .unitButtons:nth-child(3) {
      margin-top: 10px;
      margin-left: 40px;
    }
    .extraButtons {
      margin: auto;
      display: block;
    }
  }
</style>
