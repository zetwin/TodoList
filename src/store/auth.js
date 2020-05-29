import api from '@/api';

export default {
  actions: {
    async registration(ctx, data) {
      await api.registration(data);
    },
    async login(ctx, data) {
      await api.login(data);
    },
    async logout() {
      await api.logout();
    },
  },
};
