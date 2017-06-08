import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Online from '@/components/Online'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/onlineplayer',
      name: 'Online',
      component: Online
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
