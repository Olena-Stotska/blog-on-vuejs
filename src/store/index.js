import Vue from 'vue'
import Vuex from 'vuex'
import { storage } from './storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    users: [],
    isLogged: false
  },

  plugins: [
    storage(['posts', 'users', 'isLogged']),
  ],

  mutations: {
    addUser(state, user) {
      state.users.push(user)
    },

    loginUser(state, { email, password }) {
      state.isLogged = state.users.some(user => user.email === email && user.password === password)
    },
  },

  actions: {
    addUser({ commit }, user) {
      commit('addUser', user)
    },

    loginUser({ commit, state }, user) {
      commit('loginUser', user)

      return state.isLogged ? Promise.resolve() : Promise.reject(new Error('Email or password is not correct!'))
    },
  }
})
