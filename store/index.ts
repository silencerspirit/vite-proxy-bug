import { defineStore } from 'pinia';

import { v1api, v2api } from '@/api';

export const useIndexStore = defineStore('index', {
  state: () => ({
    todos: [],
    users: [],
  }),

  actions: {
    getTodosUrl() {
      return v1api.todos;
    },

    getUsersUrl() {
      return v1api.users;
    },

    getV2ApiUrl() {
      return v2api.todos;
    },
  },
});
