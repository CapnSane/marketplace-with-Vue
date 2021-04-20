<template>
  <div class="signup">
    <div>Username</div>
    <input
      class="input-bar"
      v-model="username"
      ref="usernameEl"
      type="username"
      @keyup="userNameHandler"
    />
    <div v-if="error.type === 'USERNAME'" class="signup-error">
      {{ error.msg }}
    </div>
    <div>Password</div>
    <input
      class="input-bar"
      v-model="password1"
      ref="password1El"
      type="password"
      @keyup="passwordHandler($event, 1)"
    />
    <div v-if="error.type === 'PASSWORD1'" class="signup-error">
      {{ error.msg }}
    </div>
    <div>Confirm Password</div>
    <input
      class="input-bar"
      v-model="password2"
      ref="password2El"
      type="password"
      @keyup="passwordHandler($event, 2)"
    />
    <div v-if="error.type === 'PASSWORD2'" class="signup-error">
      {{ error.msg }}
    </div>
    <div>
      <button class="button-signup" @click="signup">Sign Up!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref } from 'vue';

export default {
  components: {},
  setup() {
    const usernameEl = ref();
    const password1El = ref();
    const password2El = ref();
    const state = reactive({
      username: '',
      password1: '',
      password2: '',
      error: { type: '', msg: '' },
    });

    const signup = () => {
      state.error.type = '';
      state.error.msg = '';
      if (!state.username) {
        state.error.type = 'USERNAME';
        state.error.msg = 'Please enter your username';
        return;
      }

      if (!state.password1) {
        state.error.type = 'PASSWORD1';
        state.error.msg = 'Please enter your password';
        return;
      }

      if (state.password1 !== state.password2) {
        state.error.type = 'PASSWORD2';
        state.error.msg = 'Password mismatch';
      }
    };

    const userNameHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username) {
        console.log('deu');
        password1El.value.focus();
      }
    };

    const passwordHandler = (e: KeyboardEvent, x: number) => {
      if (e.key !== 'Enter' || !state.username) {
        return;
      }
      if (x === 1 && state.password1) {
        password2El.value.focus();
      } else if (x === 2 && state.password1 && state.password2) {
        signup();
      }
    };

    return {
      ...toRefs(state),
      signup,
      userNameHandler,
      passwordHandler,
      usernameEl,
      password1El,
      password2El,
    };
  },
};
</script>

<style lang="scss" scoped>
.signup {
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

.signup-error {
  color: red;
  font-weight: normal;
  margin-bottom: 15px;
  text-shadow: none;
}

.button-signup {
  outline: none;
  border-radius: 6px;
  height: 35px;
  width: 80px;
  cursor: pointer;
  font-family: 'Lucida Sans', Geneva, Verdana, sans-serif;
  font-weight: bold;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  margin-top: -5px;
}
</style>
