<template>
  <div id="home" class="carousel-home">
    <agile
      class="carousel"
      :autoplay="true"
      :infinite="true"
      :autoplay-speed="10000"
      :slidesToShow="4"
      :dots="false"
      :speed="1000"
    >
      <div>
        <div class="slide-div">
          <router-link to="/shop">
            <img class="slide-img" src="@/assets/orange.jpg" alt="All cards" />
            <div class="slide-title">
              All cards
            </div>
          </router-link>
        </div>
      </div>

      <div>
        <div class="slide-div">
          <img class="slide-img" src="@/assets/red.jpg" alt="Bloody Gorge" />
          <div class="slide-title">
            Bloody Gorge
          </div>
        </div>
      </div>
      <div>
        <div class="slide-div">
          <img class="slide-img" src="@/assets/purple.jpg" alt="Dread Spot" />
          <div class="slide-title">
            Dread Spot
          </div>
        </div>
      </div>
      <div>
        <div class="slide-div">
          <img class="slide-img" src="@/assets/blue.jpg" alt="Holy Ground" />
          <div class="slide-title">
            Holy Ground
          </div>
        </div>
      </div>
      <div>
        <div class="slide-div">
          <img class="slide-img" src="@/assets/green.jpg" alt="Extra grounds" />
          <div class="slide-title">
            Extra grounds
          </div>
        </div>
      </div>
      <div>
        <div class="slide-div">
          <img class="slide-img" src="@/assets/yellow.jpg" alt="Extra braves" />
          <div class="slide-title">
            Extra braves
          </div>
        </div>
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

// Agile documentation: https://github.com/lukaszflorczak/vue-agile

export default {
  components: {
    agile: VueAgile
  }
};
</script>

<style lang="scss">
.carousel-home {
  margin: -10px 0 0 0;
}
div.agile__actions {
  display: flex;
  justify-content: space-between;
  width: 50vw;
  height: 30px;
}

html
  body
  div#app
  div#home.home
  div.agile.agile--auto-play.carousel
  div.agile__actions
  button.agile__nav-button.agile__nav-button--prev {
  border-radius: 5px;
  margin-top: 10px;
  width: 24.5vw;
  border: 1px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  background-color: rgba(100, 0, 100, 0.3);
}
html
  body
  div#app
  div#home.home
  div.agile.agile--auto-play.carousel
  div.agile__actions
  button.agile__nav-button.agile__nav-button--next {
  border-radius: 5px;
  margin-top: 10px;
  width: 24.5vw;
  border: 1px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  background-color: rgba(100, 0, 100, 0.3);
}
html
  body
  div#app
  div#home.home
  div.agile.agile--auto-play.carousel
  div.agile__actions
  button.agile__nav-button.agile__nav-button--prev:hover {
  transform: scale(102%);
  cursor: pointer;
  background-color: rgba(60, 0, 60, 0.5);
  box-shadow: 3px 3px 10px black;
}
html
  body
  div#app
  div#home.home
  div.agile.agile--auto-play.carousel
  div.agile__actions
  button.agile__nav-button.agile__nav-button--next:hover {
  transform: scale(102%);
  cursor: pointer;
  background-color: rgba(60, 0, 60, 0.5);
  box-shadow: 3px 3px 3px black;
}

.carousel {
  margin: 0 auto;
  width: 50%;
  text-align: center;
  align-items: center;
}

@media screen and (max-width: 375px) {
  .carousel {
    width: 100%;
    // height: 100%;
  }

  html
    body
    div#app
    div#home.home
    div.agile.agile--auto-play.carousel
    div.agile__actions
    button.agile__nav-button.agile__nav-button--prev {
    display: none;
  }

  html
    body
    div#app
    div#home.home
    div.agile.agile--auto-play.carousel
    div.agile__actions
    button.agile__nav-button.agile__nav-button--next {
    display: none;
  }
}

.slide-div {
  transition-duration: 0.5s;
  margin: 40px 12px -20px 10px;
}

.slide-div:hover {
  transform: scale(103%);
  transition-duration: 0.25s;
  transition-timing-function: linear;
}

.slide-img {
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-title {
  position: relative;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 1.4vw;
  text-shadow: 3px 3px 4px rgb(0, 0, 0);
  top: -20vw;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
