<template>
  <div class="wrapper">
    <input type="text" v-model="search" placeholder="Search cards.." />
    <button class="search-button">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    buttonText: 'Search Cards',
  }),
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  // height: 2.5vw;
  // float: right;
  margin-right: 20px;
  top: 0;
  bottom: 0;
  label {
    // position: relative;
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
</style>
