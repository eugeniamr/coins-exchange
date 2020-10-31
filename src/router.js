import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router)

export default new Router({
    mode: 'history', // utiliza el histori mode de html

  routes: [ // cada array de rutas esta representada por un objeto
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },
    
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail
    }
   

    
  ]
})