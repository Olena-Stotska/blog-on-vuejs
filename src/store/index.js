import Vue from 'vue'
import Vuex from 'vuex'
import { storage } from './storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    users: [],
    currentUser: '',
    isLogged: false
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
    }
  },

  mutations: {
    addUser(state, user) {
      state.users.push(user)
    },

    loginUser(state, { email, password }) {
      state.isLogged = state.users.some(user => user.email === email && user.password === password)

      state.currentUser = email
    },
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
  }
})
