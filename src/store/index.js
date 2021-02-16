import Vue from 'vue'
import Vuex from 'vuex'
import datastore from './datastore'
Vue.use(Vuex)

const store = new Vuex.Store({

    modules: {
      datastore
    },

    state: {},
    getters: {},
    mutations: {},
    actions: {}
})

export default store