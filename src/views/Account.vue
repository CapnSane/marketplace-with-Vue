<template>
  <div id="home" class="home">
    <p class="welcome-title">
      Your account
    </p>
    <p class="welcome-subtitle">
      Name: {{ name }}
    </p>
    <p class="welcome-subtitle">
      Username: {{ username }}
    </p>
    <p class="welcome-subtitle">
      Birthday: {{ birthday }}
    </p>
    <p class="welcome-subtitle">
      Country: {{ country }}
    </p>
    <p class="welcome-subtitle">
      City: {{ city }}
    </p>
    <p class="welcome-subtitle">
      Address: {{ address }}
    </p>
    <p class="welcome-subtitle">
      Current balance: US$ {{ balance }}
    </p>
  </div>
</template>

<script>
import useCards from '@/modules/cards';
import useAuth from '@/modules/auth';
import { computed } from 'vue';

export default {
  components: {
  },
  setup() {
    const auth = useAuth();
    const cards = useCards();
    const username = computed(() => auth.state.username);
    const name = computed(() => auth.state.name);
    const balance = computed(() => auth.state.balance);
    const birthday = computed(() => auth.state.birthday);
    const country = computed(() => auth.state.country);
    const city = computed(() => auth.state.city);
    const address = computed(() => auth.state.address);

    cards.actions.loadCards();

    return {
      name,
      username,
      balance,
      birthday,
      country,
      city,
      address
      // loadMoreHandler,
      // buyHandler
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
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

.search-button {
  color: rgb(48, 1, 43);
  font-size: 13px;
  height: 31px;
  border: 1px solid rgb(75, 0, 67);
  border-radius: 5px;
  margin-top: -10px;
  margin-left: 5px;
}

.welcome-title {
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  font-size: 52px;
  color: rgb(0, 0, 0);
  text-shadow: rgb(225, 250, 255) 2px 2px 6px;
  text-align: center;
}

.welcome-subtitle {
  margin: 20px auto;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  font-size: 36px;
  width: 70vw;
  color: rgb(0, 0, 0);
  text-shadow: rgb(225, 250, 255) 2px 2px 6px;
  text-align: center;
}
</style>
