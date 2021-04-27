<template>
  <Header class="header" />
  <!-- <router-view/> -->
</template>
<script lang="ts">
import Header from '@/components/Header.vue';
import useAuth from './modules/auth';

export default {
  components: {
    Header
  },

  setup() {
    const auth = useAuth();

    auth.actions.loadUserData();

    if (auth.state.token) {
      console.log('Está logado');
    } else {
      console.log('Não está logado');
    }

    return {};
  }
};
</script>
<style lang="scss">
body {
  position: relative;
  // flex-wrap: wrap;
  background-color: black;
  background-image: url('../src/assets/forest.jpg');
  background-repeat: no-repeat;
  background-position: initial;
  font-family: Arial, sans-serif;
  color: rgb(255, 255, 255);
  margin: 0 0 0 0 !important;
  width: 100%;
  height: 100%;
}
</style>
