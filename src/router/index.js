import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import NewPosts from '../components/NewPosts'
import ListPosts from '../components/ListPosts'
import ListDrafts from '../components/ListDrafts'
import ListPublic from '../components/ListPublic'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/:topic?', name: 'home', component: Home },
    { path: '/posts', name: 'posts', component: ListPosts,  redirect: { name: 'drafts' },
      children: [
        { path: 'drafts', name: 'drafts', component: ListDrafts },
        { path: 'public', name: 'public', component: ListPublic }
      ]
    },
    { path: '/posts/new', name: 'newPost', component: NewPosts },
    { path: '/posts/:id', name: 'editPost', component: NewPosts },
  ]
})
