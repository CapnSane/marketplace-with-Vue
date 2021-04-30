<template>
  <div id="home" class="home overflow-cards flex flex-wrap center">
    <div class="div-cards" v-for="cartinhas in list" :key="cartinhas.id">
      <img class="cards" :src="require(`@/assets/${cartinhas.img}`)" :alt="cartinhas.name" />
      <p class="price">US${{ cartinhas.price }} <button class="buy-button">BUY!</button></p>
    </div>
  </div>
  <div id="home" class="home">
    <carousel />
  </div>
</template>

<script lang="ts">
import useCards from '@/modules/cards';
import { computed } from 'vue';
import Carousel from '@/components/Carousel.vue';

export default {
  components: {
    Carousel
  },
  setup() {
    const cards = useCards();
    const list = computed(() => cards.state.list);
    cards.actions.loadCards();

    return {
      list
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

// .wrapper {
//   position: relative;
//   margin-top: 8px;
//   label {
//     position: absolute;
//     font-size: 12px;
//     color: rgba(0, 0, 0, 0.5);
//     top: 8px;
//     left: 12px;
//     z-index: -1;
//     transition: 0.15s all ease-in-out;
//   }

//   input {
//     border-radius: 5px;
//     padding: 4px 12px;
//     margin-right: 10px;
//     height: 20px;
//     width: 30vw;
//     color: rgba(0, 0, 0, 0.7);
//     border: 1px solid rgb(75, 0, 67);
//     transition: 0.15s all ease-in-out;
//     background: rgba(255, 255, 255, 0.9);
//     &:focus {
//       outline: none;
//       transform: scale(1.05);
//       & + label {
//         font-size: 10px;
//         transform: translateY(-24px) translateX(-12px);
//       }
//     }
//     &::-webkit-input-placeholder {
//       font-size: 12px;
//       color: rgba(0, 0, 0, 0.5);
//       font-weight: 100;
//     }
//   }
// }

.div-cards {
  margin: 9px;
}

.buy-button {
  height: 30px;
  width: 50px;
  border-radius: 5px;
  vertical-align: middle;
  box-shadow: 2px 2px 3px black;
  font-weight: bold;
  outline: none;
  background-color: yellow;
  border: 1px solid black;
}

.buy-button:hover {
  box-shadow: 2px 2px 5px black;
  cursor: pointer;
  transform: scale3d(1.1, 1.1, 1.1);
}

.overflow-cards {
  max-height: 26vw;
  overflow-y: auto;
  margin-top: 20px;
}
.cards {
  width: 13.05vw;
  height: auto;
  transition-duration: 0.9s;
  border-radius: 13px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
}
.cards:hover {
  transform: scale(103%);
  transition-duration: 0.3s;
  box-shadow: 2px 2px px rgba(0, 0, 0, 0.8);
  cursor: pointer;
}

.price {
  font-size: 28px;
  text-shadow: 3px 3px 3px black;
  font-weight: bold;
  margin-top: 10px;
  color: yellow;
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
