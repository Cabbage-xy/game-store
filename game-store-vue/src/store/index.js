import { createStore } from 'vuex'

export default createStore({
  state: {
    showLoginDialog: false,
  },
  getters: {
  },
  mutations: {
    showLoginDialog(state) {
      state.showLoginDialog = true;
    },
    closeLoginDialog(state) {
      state.showLoginDialog = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
