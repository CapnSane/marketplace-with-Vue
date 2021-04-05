<template>
  <div id="header">
    <div class="header-div">
      <span class="title">Hallowed Grounds Marketplace</span>
      <div class="wrapper">
        <div class="search">
          <searchbar />
        </div>
        <div class="signin-signup">
          <router-link class="login-button" to="/login">Sign in</router-link> |
          <router-link class="create-account-button" to="/signup">Sign up</router-link>
          <router-link class="cart-button" to="/cart"><img /></router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import Searchbar from '@/components/Searchbar.vue';

export default {
  components: {
    Searchbar,
  },
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  flex-wrap: wrap;
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

// .header-div {
//   padding-top: 1.2vw;
// }

.title {
  // position: relative;
  margin-left: 10px;
  float: left;
  // top: 10px;
  font-size: 32px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-shadow: rgb(255, 255, 255) 3px 3px 20px;
}
// @media screen and (max-width: 1250px) {
//   .title {
//     font-size: 2vw;
//   }
// }

.search {
  // float: right;
}
.signin-signup {
  // float: right;
}

// .login-button {
//   // font-size: 0.8vw;
//   margin-left: 10px;
//   text-shadow: rgb(0, 0, 0) 2px 2px 4px;
//   text-decoration: none;
// }
// .create-account-button {
//   // font-size: 0.8vw;
//   text-shadow: rgb(0, 0, 0) 2px 2px 4px;
//   text-decoration: none;
// }

// .welcome-title {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   font-weight: bold;
//   font-size: 3.6vw;
//   color: rgb(0, 0, 0);
//   text-shadow: rgb(225, 250, 255) 2px 2px 6px;
// }
// .welcome-subtitle {
//   margin: auto;
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   font-weight: bold;
//   font-size: 2.5vw;
//   width: 70vw;
//   color: rgb(0, 0, 0);
//   text-shadow: rgb(225, 250, 255) 2px 2px 6px;
// }
</style>
