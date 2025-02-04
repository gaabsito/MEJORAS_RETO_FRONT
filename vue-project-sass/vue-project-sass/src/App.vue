<script setup>


</script>

<template>

<router-view></router-view>

</template>




<style lang="scss">
@import './assets/styles/main.scss';

#app {
  text-align: center;
}

.main-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;

  &__card {
    margin-bottom: 1rem;
  }
}
</style>