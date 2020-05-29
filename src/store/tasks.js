import arraySort from 'array-sort';
import api from '@/api';

export default {
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    clearTasks(state) {
      state.tasks = [];
    },
    addTask(state, data) {
      state.tasks.push(data);
    },
    removeTask(state, id) {
      state.tasks.splice(state.tasks.findIndex((el) => el.id === id), 1);
    },
    updateTitle(state, { id, val }) {
      state.tasks.find((el) => el.id === id).title = val;
    },
    updateDescription(state, { id, val }) {
      state.tasks.find((el) => el.id === id).description = val;
    },
    toggleCompleted(state, id) {
      const task = state.tasks.find((el) => el.id === id);
      task.completed = !task.completed;
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const tasks = await api.getTasks();
      commit('setTasks', tasks);
    },
    async addTask({ commit }, data) {
      const { key } = await api.addTask(data);
      commit('addTask', { id: key, ...data });
    },
    async removeTask({ commit }, id) {
      await api.removeTask(id);
      commit('removeTask', id);
    },
    async syncTitle({ getters }, id) {
      await api.taskUpdate(id, { title: getters.taskTitle(id) });
    },
    async syncDescription({ getters }, id) {
      await api.taskUpdate(id, { description: getters.taskDescription(id) });
    },
    async syncCompleted({ getters }, id) {
      await api.taskUpdate(id, { completed: getters.taskCompleted(id) });
    },
  },
  getters: {
    tasksAll: (state) => arraySort(state.tasks, ['completed', 'id']),
    countTasksAll: (state) => state.tasks.length,
    countTasksActive: (state) => state.tasks.filter((el) => !el.completed).length,
    taskInfo: (state) => (id) => state.tasks.find((el) => el.id === id),
    taskTitle: (state, getters) => (id) => getters.taskInfo(id).title,
    taskDescription: (state, getters) => (id) => getters.taskInfo(id).description,
    taskCompleted: (state, getters) => (id) => getters.taskInfo(id).completed,
  },
};
