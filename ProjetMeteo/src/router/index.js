import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import City from "../components/City.vue";
import CitiesList from "../views/CitiesList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/villes',
      name:'villes',
      component:()=>import('../views/CitiesList.vue')
    },
    {
      path: '/ville',
      name: 'ville',
      component: () =>import ('../components/City.vue'),

    }
  ]
})

export default router
