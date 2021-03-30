<template>
  <div id="home" class="home">
    <p class="welcome-title">Welcome to the Hallowed Grounds Marketplace!</p>
    <p class="welcome-subtitle">
      <span>Here is the place that you can acquire the most</span>
      <span>&nbsp; powerful Hallowed Grounds cards ever!</span>
    </p>
    <div class="carousel">
      <carousel :items-to-show="1.5">
        <slide class="carousel-slide" v-for="slide in 5" :key="slide">
          {{ slide }}
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       // image: { backgroundImage: 'url(https://vuejs.org/src/assets/forest.jpg)' },
//     };
//   },
// };
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel,
  Slide,
  Pagination,
  Navigation,
} from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  font-size: 3vw;
  color: rgb(0, 0, 0);
  text-shadow: rgb(225, 250, 255) 2px 2px 6px;
}
.welcome-subtitle {
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  font-size: 2vw;
  width: 70vw;
  color: rgb(0, 0, 0);
  text-shadow: rgb(225, 250, 255) 2px 2px 6px;
}

.carousel {
  margin: auto;
  margin-top: 50px;
  width: 40vw;
  text-align: center;
  align-items: center;
}
.carousel-slide {
  height: 25vw;
  border: 2px solid red;
}
</style>
