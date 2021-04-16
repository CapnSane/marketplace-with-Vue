<template>
  <div class="login">
    <div>Username</div>
    <input type="username">
    <div>Password</div>
    <input type="password">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  display: inline;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;

}

</style>
