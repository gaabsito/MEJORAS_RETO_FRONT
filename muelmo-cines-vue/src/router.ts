//EMPEZAMOS CON LO DE VANESSA DE AYER
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/views/HomePage.vue';
import CoursesPage from '../src/views/CoursesPage.vue'
import OfertaEducativa from '../src/views/OfertaEducativa.vue';




const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/courses',
    name: 'Courses',
    component: CoursesPage,
  },
  {
    path: '/oferta',
    name: 'Oferta Educativa',
    component: OfertaEducativa,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;