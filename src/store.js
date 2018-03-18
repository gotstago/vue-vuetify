import Vue from 'vue'
import Vuex from 'vuex'
import { EventBus } from "./event-bus.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    newGame: function (context) {
      console.log('in newGame...')
      // Listen for the i-got-clicked event and its payload.
      EventBus.$on('i-got-clicked', step => {
        console.log(`Oh, that's nice. We're on step ${step}! :)`)
      });
      console.log('exiting newGame...')
      // context.commit('updateStatus', status);
      // statusHandler[status] && statusHandler[status](context);//delegate to handlers if it exists for status
    },
  }
})
