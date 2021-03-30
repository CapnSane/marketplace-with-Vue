<template>
  <Header />
  <!-- <router-view/> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  components: { Header },

  setup() {
    return {};
  },
});

</script>
<style lang="scss">
body {
  position: relative;
  flex-wrap: wrap;
  background-color: black;
  background-image: url("../src/assets/forest.jpg");
  // width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw 110vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: rgb(255, 255, 255);
  margin: 0 0 0 0 !important;
  width: 100%;
  height: 100%;
}

</style>
