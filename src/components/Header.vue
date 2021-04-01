<template>
  <div id="header">
    <div class="header-div">
      <span class="title">Hallowed Grounds Marketplace</span>
      <div class="wrapper">
        <input type="text" v-model="search" placeholder="Search cards.." />
        <button class="search-button">Search Cards</button>
        <router-link class="login-button" to="/login">Sign in</router-link> |
        <router-link class="create-account-button" to="/createAccount">Sign up</router-link>
        <router-link class="cart-button" to="/cart"><img /></router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
#header {
  height: 70px;
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
  padding-top: 1.2vw;
}

.title {
  position: absolute;
  margin-left: 10px;
  left: 0;
  top: 10px;
  float: left;
  font-size: 2vw;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-shadow: rgb(255, 255, 255) 3px 3px 20px;
}
@media screen and (max-width: 1250px) {
  .title {
    font-size: 25px;
  }
}

.wrapper {
  position: relative;
  height: 2.5vw;
  float: right;
  margin-right: 20px;
  top: 0;
  bottom: 0;
  label {
    position: relative;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    top: 8px;
    left: 12px;
    z-index: -1;
    transition: 0.15s all ease-in-out;
  }
  input {
    border-radius: 5px;
    padding: 4px 12px;
    margin-right: 10px;
    height: 20px;
    width: 30vw;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgb(75, 0, 67);
    transition: 0.15s all ease-in-out;
    background: rgba(255, 255, 255, 0.9);
    &:focus {
      outline: none;
      transform: scale(1.05);
      & + label {
        font-size: 10px;
        transform: translateY(-24px) translateX(-12px);
      }
    }
    &::-webkit-input-placeholder {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 100;
    }
  }
}

.search-button {
  color: rgb(48, 1, 43);
  font-size: 13px;
  height: 31px;
  border: 1px solid rgb(75, 0, 67);
  border-radius: 5px;
  margin-top: -10px;
  margin-left: 5px;
}

.account {
}

.login-button {
  // font-size: 0.8vw;
  margin-left: 10px;
  text-shadow: rgb(0, 0, 0) 2px 2px 4px;
  text-decoration: none;
}
.create-account-button {
  // font-size: 0.8vw;
  text-shadow: rgb(0, 0, 0) 2px 2px 4px;
  text-decoration: none;
}

.welcome-title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  font-size: 3.6vw;
  color: rgb(0, 0, 0);
  text-shadow: rgb(225, 250, 255) 2px 2px 6px;
}
.welcome-subtitle {
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  font-size: 2.5vw;
  width: 70vw;
  color: rgb(0, 0, 0);
  text-shadow: rgb(225, 250, 255) 2px 2px 6px;
}
</style>
