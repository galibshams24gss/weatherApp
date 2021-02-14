import Vue from 'vue'
import Vuex from 'vuex'
import datastore from './datastore'
import events from './datastore/events'
Vue.use(Vuex)

const store = new Vuex.Store({

    modules: {
      datastore,
      events
    },

    state: {},
    getters: {},
    mutations: {},
    actions: {}
})

export default store