import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/views/HomePage.vue';
import CoursesPage from '../components/views/CoursesPage.vue';
import OfertaEducativa from '../components/views/OfertaEducativa.vue';

const routes = [
  {
    path: '/',
    name: 'Home',  // Esta será la ruta principal para la página de inicio
    component: HomePage,
  },
  {
    path: '/nosotros',
    name: 'Sobre',
    component: CoursesPage,
  },
  {
    path: '/oferta',
    name: 'OfertaEducativa',
    component: OfertaEducativa,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
