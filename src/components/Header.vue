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
        <div class="login">
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
import searchBar from '@/components/Searchbar.vue';

export default {
  components: {
    searchBar,
  },
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
