<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <Card class="main-content__card" title="SVG" content="Otra forma de imagen digital que
  puedes animar" />
      <Card class="main-content__card" title="HTML5 Canvas" content="Asi podras hacer jueguecitos y
  cosas interactivas" />
      <Card class="main-content__card" title="SASS" content="Maquetar con preprocesador mola" />
    </main>
    <Footer />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Card from './components/Card.vue';
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    Card,
  },
});
</script>


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