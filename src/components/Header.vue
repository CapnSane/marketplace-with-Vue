<template>
  <div id="header">
    <div class="header-div">
      <div class="title-div">
        <router-link class="title" to="/">Hallowed Grounds Marketplace</router-link>
      </div>
      <div class="wrapper">
        <div class="search">
          <search-bar />
        </div>
        <div v-if="!isLoggedIn" class="login">
          <router-link class="login-button" to="/login">Sign in</router-link> |
          <router-link class="signup-button" to="/signup">Sign up</router-link>
        </div>
        <div v-else-if="isLoggedIn">
          <span>Welcome,&#x20</span
          ><router-link class="account-button" to="/account"> {{ customer }} </router-link><span>!</span>
          <span class="logout-button" @click="logoutHandler">Logout</span>
        </div>
        <!-- <div>
          <router-link class="cart-button" to="/cart"><img /></router-link>
        </div> -->
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import searchBar from '@/components/Searchbar.vue';
import useAuth from '@/modules/auth';
import { computed } from 'vue';

export default {
  components: {
    searchBar
  },
  setup() {
    const auth = useAuth();
    const customer = computed(() => auth.state.name);
    const isLoggedIn = computed(() => auth.state.token);
    const logoutHandler = () => {
      auth.actions.logout();
    };

    return {
      isLoggedIn, customer, logoutHandler
    };
  }
};
</script>

<style lang="scss" scoped>
#header {
  // display: flex;
  // flex-wrap: wrap;
  // height: 70px;
  background-color: rgba(171, 0, 171, 0.3);

  a {
    font-weight: bold;
    color: #ffffffeb;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header-div {
  margin-left: 20px;
}

.account-button {
  color: rgb(0, 255, 0) !important;
  text-shadow:1px 1px 2px rgba(0, 0, 0, 0.9) !important;
  outline: none;
  text-decoration: none;
}

.login-button {
  text-decoration: none;
  color: white !important;
}
.signup-button {
  text-decoration: none;
  color: white !important;
}

.logout-button {
  outline: none;
  text-decoration: none;
  text-shadow:1px 1px 2px rgba(255, 255, 255, 0.3) !important;
  color: blue !important;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
}

.title {
  display: flex;
  left: 10px;
  // margin-left: 10px;
  // float: left;
  // top: 10px;
  font-size: 32px;
  font-weight: bold;
  color: rgb(0, 0, 0) !important;
  text-shadow: rgb(255, 255, 255) 3px 3px 20px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
}

// @media screen and (max-width: 1250px) {
//   .title {
//     font-size: 2vw;
//   }
// }
</style>
