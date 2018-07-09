import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import NewPosts from '../components/NewPosts'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    // { path: '/posts', component: ListPosts },
    { path: '/posts/new', component: NewPosts },
  ]
})
