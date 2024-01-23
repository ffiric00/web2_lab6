
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    email: '',
  }),
  actions: {
    setUser({ username, email }) {
      this.username = username;
      this.email = email;
    },
    clearUser() {
      this.username = '';
      this.email = '';
    },
  },
});
