<template>
  <div id="home" class="home">
    <p class="welcome-title">
      Welcome to the Hallowed Grounds Marketplace!
    </p>
    <p class="welcome-subtitle">
      Here is the place that you can acquire the most powerful Hallowed Grounds cards ever!
    </p>
    <carousel />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import useCards from '@/modules/cards';
// import useMe from '@/modules/me';

export default {
  components: {
    Carousel
  },
  setup() {
    const cards = useCards();
    // const me = useMe();

    // const list = cards.getters.sortedList();

    // const loadMoreHandler = () => {
    //   cards.actions.loadMore();
    // };

    // const buyHandler = (id: number) => {
    //   me.mutations.addCardToCart(card);
    // };

    cards.actions.loadCards();

    return {
      // list,
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

.wrapper {
  position: relative;
  margin-top: 8px;
  label {
    position: absolute;
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
  margin: 0 auto;
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
