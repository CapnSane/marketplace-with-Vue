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

div.agile__actions {
  display: flex;
  justify-content: space-between;
  height: 100px;
  position: absolute;
  top: 13vw;
  right: 0;
  left: 0;
}

html body div#app div#home.home div.agile.agile--auto-play.carousel div.agile__actions button.agile__nav-button.agile__nav-button--prev {
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  background-color: rgba(100, 0, 100, 0.3);
}
html body div#app div#home.home div.agile.agile--auto-play.carousel div.agile__actions button.agile__nav-button.agile__nav-button--next {
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  background-color: rgba(100, 0, 100, 0.3);
}
html body div#app div#home.home div.agile.agile--auto-play.carousel div.agile__actions button.agile__nav-button.agile__nav-button--prev:hover {
  transform: scale(105%);
  cursor: pointer;
}
html body div#app div#home.home div.agile.agile--auto-play.carousel div.agile__actions button.agile__nav-button.agile__nav-button--next:hover {
  transform: scale(105%);
  cursor: pointer;
}

</style>
