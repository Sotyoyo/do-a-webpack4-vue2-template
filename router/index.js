import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/home/home"
import Another from "@/views/another/another"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'dash'
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/another',
      component: Another,
      name: 'another'
    }
  ]
})