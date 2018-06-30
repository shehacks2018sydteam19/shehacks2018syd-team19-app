import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import CameraView from '@/components/CameraView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraView
    }
  ]
})
