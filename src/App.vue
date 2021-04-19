<template>
  <Header class="header"/>
  <!-- <router-view/> -->
</template>
<script lang="ts">
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};

</script>
<style lang="scss">
body {
  position: relative;
  // flex-wrap: wrap;
  background-color: black;
  background-image: url("../src/assets/forest.jpg");
  // width: 100%;
  background-repeat: no-repeat;
  background-position: initial;
  background-size: 100vw 110vw;
  font-family: Arial, sans-serif;
  color: rgb(255, 255, 255);
  margin: 0 0 0 0 !important;
  width: 100%;
  height: 100%;
}

</style>
