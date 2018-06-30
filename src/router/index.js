import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import CameraView from '@/components/CameraView'
import PhotoView from '@/components/PhotoView'

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
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: PhotoView
    }
  ]
})
