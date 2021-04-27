/* eslint-disable vue/no-parsing-error */
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
    <div v-if="error.type === 'USERNAME'" class="login-error">
      {{ error.msg }}
    </div>
    <div>Password</div>
    <div class="input-container">
      <input
        class="input-bar pwd-bar"
        v-model="password"
        ref="passwordEl"
        @keyup="passwordHandler"
        :type="passwordFieldType"
      />
      <button
        class="button-eye"
        type="password"
        @click="switchVisibility">
        <i class="eye">&#128065</i>
      </button>
    </div>
    <div v-if="error.type === 'PASSWORD'" class="login-error">
      {{ error.msg }}
    </div>
    <div id="login-button">
      <button class="button-login" @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref } from 'vue';

import useAuth from '@/modules/auth';
import { Login } from '@/mockServer/server';

export default defineComponent({
  components: {},
  setup() {
    const auth = useAuth();
    const usernameEl = ref();
    const passwordEl = ref();
    const state = reactive({
      username: '',
      password: '',
      error: {
        type: '',
        msg: '' },
      passwordFieldType: 'password'
    });

    const login = async () => {
      state.error.type = '';
      state.error.msg = '';
      if (state.username && state.password) {
        const res = await auth.actions.login(state.username, state.password);
        if (res.status === 'WRONG_USER') {
          console.log('USERNAME OR PASSWORD WRONG!!!!!');
          state.error.type = 'PASSWORD';
          state.error.msg = 'Username or password wrong';
          console.log(res.status);
        } else {
          console.log(res.status);
        }
      }
      if (!state.username) {
        state.error.type = 'USERNAME';
        state.error.msg = 'Please enter your username';
        return;
      }

      if (!state.password) {
        state.error.type = 'PASSWORD';
        state.error.msg = 'Please enter your password';
      }
    };

    const userNameHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username) {
        passwordEl.value.focus();
      }
    };

    const passwordHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username && state.password) {
        login();
      }
    };

    const switchVisibility = () => {
      state.passwordFieldType = state.passwordFieldType === 'password' ? 'text' : 'password';
    };

    return {
      ...toRefs(state),
      login,
      userNameHandler,
      passwordHandler,
      usernameEl,
      passwordEl,
      switchVisibility
    };
  }
});
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

.input-container {
  position: relative;
}

.input-bar {
  width: 200px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
}

.login-error {
  color: red;
  font-weight: normal;
  margin-bottom: 15px;
  text-shadow: none;
}

.button-eye {
  background: none;
  position: absolute;
  border: none;
  outline: none;
}

.eye {
  font-size: 19px;
  text-shadow: 0 0 5px white;
}

.eye:hover {
  cursor: pointer;
  font-size: 20px;
  text-shadow: 0 0 5px rgba(255, 0, 0, 0.9);
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

.button-login:hover {
  transform: scale(1.02);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
}
</style>
