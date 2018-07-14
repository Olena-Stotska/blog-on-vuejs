import Vue from 'vue'
import Vuex from 'vuex'
import { storage } from './storage'

Vue.use(Vuex)

let counter = 0

const generateId = () => Date.now() + (counter++)

export default new Vuex.Store({
  state: {
    posts: [],
    users: [],
    currentUser: '',
    isLogged: false,
  },

  plugins: [
    storage(['posts', 'users', 'isLogged', 'currentUser']),
  ],

  getters: {
    currentUser(state, getters) {
      return getters.findUser(state.currentUser)
    },

    findUser(state) {
      return (email) => state.users.find(user => user.email === email)
    },

    drafts(state) {
      return state.posts.filter(post => post.draft)
    },

    posts(state) {
      return state.posts.filter(post => !post.draft)
    },

    getPostById: (state) => (id) => {
      return state.posts.filter(post => post.id === id)
    }
  },

  mutations: {
    addUser(state, user) {
      user.id = generateId()
      state.users.push(user)
    },

    loginUser(state, { email, password }) {
      state.isLogged = state.users.some(user => user.email === email && user.password === password)

      state.currentUser = email
    },

    logout(state) {
      state.isLogged = false
      state.currentUser = ''
    },

    createPost(state, post) {
      post.id = generateId()
      state.posts.push(post)
    },

    deletePost(state, { id }) {
      const indexPost = state.posts.findIndex(post => post.id === id)
      state.posts.splice(indexPost, 1)
    }
  },

  actions: {
    addUser({ commit, getters }, user) {
      if (getters.findUser(user.email)) {
        return Promise.reject(new Error('Oops! User with such email already exists'))
      }

      commit('addUser', user)
    },

    loginUser({ commit, state }, user) {
      commit('loginUser', user)

      return state.isLogged ? Promise.resolve() : Promise.reject(new Error('Oops! These credentials are not valid.'))
    },

    logout({ commit }) {
      commit('logout')
    },

    createPost({ commit, getters }, post) {
      commit('createPost', {
        userId: getters.currentUser.id,
        ...post
      })
    },

    deletePost({ commit }, post) {
      commit('deletePost', post)
    }
  }
})
