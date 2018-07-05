import Vue from 'vue'
import Vuex from 'vuex'
import { storage } from './storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },

  plagins: [
    storage(['posts'])
  ]
})
