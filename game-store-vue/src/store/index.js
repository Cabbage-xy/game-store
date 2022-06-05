import { createStore } from 'vuex'

export default createStore({
  state: {
    showLoginDialog: false,
    showRegisterDialog: false,
  },
  getters: {
  },
  mutations: {
    showLoginDialog(state) {
      state.showLoginDialog = true;
    },
    closeLoginDialog(state) {
      state.showLoginDialog = false;
    },
    showRegisterDialog(state) {
      state.showRegisterDialog = true;
    },
    closeRegisterDialog(state) {
      state.showRegisterDialog = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
