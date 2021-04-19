<template>
  <div class="login">
    <div>Username</div>
    <input
      class="input-bar"
      v-model="username"
      ref="usernameEl"
      type="username"
      @keyup="userNameHandler"
    />
    <div>Password</div>
    <input
      class="input-bar"
      v-model="password"
      ref="passwordEl"
      type="password"
      @keyup="passwordHandler"
    />
    <div>
      <button class="button-login" @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref } from 'vue';

export default {
  components: {},
  setup() {
    const usernameEl = ref();
    const passwordEl = ref();
    const state = reactive({
      username: '',
      password: '',
    });

    const login = () => {
      console.log('fazendo login');
    };

    const userNameHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username) {
        console.log('deu');
        passwordEl.value.focus();
      }
    };

    const passwordHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username && state.password) {
        console.log('login');
        login();
      }
    };

    return {
      ...toRefs(state),
      login,
      userNameHandler,
      passwordHandler,
      usernameEl,
      passwordEl,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.input-bar {
  width: 200px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
}

.button-login {
  outline: none;
  border-radius: 6px;
  height: 35px;
  width: 70px;
  cursor: pointer;
  font-family: 'Lucida Sans', Geneva, Verdana, sans-serif;
  font-weight: bold;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  margin-top: -5px;
}
</style>
