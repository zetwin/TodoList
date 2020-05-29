import api from '@/api';

export default {
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async fetchInfo({ commit }) {
      const info = await api.getUserInfo();
      commit('setInfo', info);
    },
  },
  getters: {
    userName: (state) => state.info.name || state.info.email,
  },
};
